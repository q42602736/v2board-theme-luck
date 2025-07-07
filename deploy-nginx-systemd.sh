#!/bin/bash
# V2Board NGINX + Systemd 一键部署脚本

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

echo
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   V2Board NGINX + Systemd 部署器${NC}"
echo -e "${BLUE}========================================${NC}"
echo

# 检查是否为root用户
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ 请使用root权限运行此脚本${NC}"
    echo "使用方法: sudo $0 [项目路径]"
    exit 1
fi

# 检查是否手动指定了项目路径
if [ $# -gt 0 ]; then
    PROJECT_DIR="$1"
    echo -e "${BLUE}📁 使用指定路径: $PROJECT_DIR${NC}"

    if [ ! -d "$PROJECT_DIR" ]; then
        echo -e "${RED}❌ 指定的目录不存在: $PROJECT_DIR${NC}"
        exit 1
    fi

    # 验证是否为V2Board项目
    if [ -f "$PROJECT_DIR/package.json" ]; then
        if ! grep -q "v2board\|frontend" "$PROJECT_DIR/package.json" 2>/dev/null; then
            echo -e "${YELLOW}⚠️ 警告: 指定目录可能不是V2Board项目${NC}"
            echo -e "${YELLOW}是否继续? (y/N): ${NC}"
            read -r confirm
            if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
                exit 1
            fi
        fi
    else
        echo -e "${RED}❌ 指定目录中没有package.json文件${NC}"
        exit 1
    fi
else
    # 自动搜索项目
    PROJECT_DIR=$(find_project)
fi

# 1. 自动查找项目目录
find_project() {
    echo -e "${YELLOW}🔍 智能搜索V2Board项目...${NC}"

    SEARCH_PATHS=("/www/wwwroot" "/var/www" "/home" "/root" "/opt" "/data/wwwroot")

    for path in "${SEARCH_PATHS[@]}"; do
        if [ -d "$path" ]; then
            echo -e "${CYAN}📂 搜索路径: $path${NC}"

            # 搜索所有package.json文件
            while IFS= read -r package_file; do
                if [ -f "$package_file" ]; then
                    dir=$(dirname "$package_file")

                    # 检查package.json内容
                    if grep -q "v2board\|frontend" "$package_file" 2>/dev/null; then
                        echo -e "  📄 发现候选: $package_file"

                        # 验证是否有API服务器文件
                        if [ -f "$dir/server/api-server.js" ] || [ -f "$dir/dist/server/api-server.js" ]; then
                            echo -e "${GREEN}✅ 确认项目: $dir${NC}"
                            echo "$dir"
                            return 0
                        fi

                        # 检查是否有构建脚本和API相关配置
                        if grep -q "api-server\|build.*extreme\|express" "$package_file" 2>/dev/null; then
                            echo -e "${GREEN}✅ 确认项目: $dir${NC}"
                            echo "$dir"
                            return 0
                        fi
                    fi
                fi
            done < <(find "$path" -maxdepth 6 -name "package.json" 2>/dev/null)
        fi
    done

    # 如果常见路径没找到，显示所有可能的项目让用户确认
    echo -e "${YELLOW}🔍 显示所有可能的项目:${NC}"
    for path in "${SEARCH_PATHS[@]}"; do
        if [ -d "$path" ]; then
            find "$path" -maxdepth 3 -name "package.json" 2>/dev/null | head -5 | while read -r pf; do
                echo -e "  📄 $pf"
            done
        fi
    done

    return 1
}

PROJECT_DIR=$(find_project)

if [ -z "$PROJECT_DIR" ]; then
    echo -e "${RED}❌ 自动搜索未找到V2Board项目${NC}"
    echo
    echo -e "${YELLOW}📋 请手动指定项目路径：${NC}"
    echo "使用方法: $0 /path/to/your/project"
    echo
    echo -e "${CYAN}或者检查以下常见位置：${NC}"
    for path in "/www/wwwroot" "/var/www" "/home"; do
        if [ -d "$path" ]; then
            echo -e "  📂 $path 下的目录:"
            ls -la "$path" 2>/dev/null | grep "^d" | awk '{print "    " $NF}' | head -5
        fi
    done
    echo
    echo -e "${YELLOW}如果您的项目在上述目录中，请运行：${NC}"
    echo "  $0 /www/wwwroot/your-project-name"
    exit 1
fi

echo
echo -e "${GREEN}🎯 项目目录: $PROJECT_DIR${NC}"

# 2. 确保项目已构建
cd "$PROJECT_DIR" || exit 1

if [ ! -d "dist" ]; then
    echo -e "${YELLOW}📦 项目未构建，正在构建...${NC}"
    
    # 检查npm是否可用
    if ! command -v npm >/dev/null 2>&1; then
        echo -e "${RED}❌ npm未安装，请先安装Node.js和npm${NC}"
        exit 1
    fi
    
    # 尝试构建
    if grep -q "build:extreme" package.json 2>/dev/null; then
        npm run build:extreme
    elif grep -q "build" package.json 2>/dev/null; then
        npm run build
    else
        echo -e "${RED}❌ 未找到构建脚本${NC}"
        exit 1
    fi
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ 项目构建失败${NC}"
        exit 1
    fi
fi

DIST_DIR="$PROJECT_DIR/dist"

if [ ! -d "$DIST_DIR" ]; then
    echo -e "${RED}❌ dist目录不存在${NC}"
    exit 1
fi

echo -e "${GREEN}📁 部署目录: $DIST_DIR${NC}"

# 3. 检查API服务器文件
if [ ! -f "$DIST_DIR/server/api-server.js" ]; then
    echo -e "${RED}❌ API服务器文件不存在: $DIST_DIR/server/api-server.js${NC}"
    exit 1
fi

# 4. 创建systemd服务
echo -e "${BLUE}⚙️ 创建systemd服务...${NC}"

# 转义路径中的特殊字符
ESCAPED_DIST_DIR=$(printf '%s\n' "$DIST_DIR" | sed 's/[[\.*^$()+?{|]/\\&/g')

cat > /etc/systemd/system/v2board-api.service << 'SERVICEEOF'
[Unit]
Description=V2Board API Server
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=WORKING_DIR_PLACEHOLDER
ExecStart=/usr/bin/node server/api-server.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=3001

StandardOutput=journal
StandardError=journal
SyslogIdentifier=v2board-api

[Install]
WantedBy=multi-user.target
SERVICEEOF

# 替换占位符为实际路径
sed -i "s|WORKING_DIR_PLACEHOLDER|$DIST_DIR|g" /etc/systemd/system/v2board-api.service

echo -e "${GREEN}✅ systemd服务文件已创建${NC}"

# 5. 设置权限
echo -e "${BLUE}🔐 设置目录权限...${NC}"

# 确保www-data用户存在，如果不存在则使用root
if ! id "www-data" &>/dev/null; then
    echo -e "${YELLOW}⚠️ www-data用户不存在，使用root用户运行服务...${NC}"
    # 修改服务文件使用root用户
    sed -i 's/User=www-data/User=root/g' /etc/systemd/system/v2board-api.service
    sed -i 's/Group=www-data/Group=root/g' /etc/systemd/system/v2board-api.service
    SERVICE_USER="root"
else
    SERVICE_USER="www-data"
    chown -R www-data:www-data "$DIST_DIR"
fi

chmod -R 755 "$DIST_DIR"

echo -e "${GREEN}✅ 权限设置完成 (运行用户: $SERVICE_USER)${NC}"

# 6. 安装生产依赖
echo -e "${BLUE}📦 安装生产环境依赖...${NC}"
cd "$DIST_DIR"

if [ -f "package.json" ]; then
    if [ "$SERVICE_USER" = "www-data" ]; then
        sudo -u www-data npm install --production
    else
        npm install --production
    fi

    if [ $? -ne 0 ]; then
        echo -e "${YELLOW}⚠️ 依赖安装失败，但继续部署...${NC}"
    else
        echo -e "${GREEN}✅ 依赖安装完成${NC}"
    fi
else
    echo -e "${YELLOW}⚠️ dist目录中没有package.json，跳过依赖安装${NC}"
fi

# 7. 重载systemd并启动服务
echo -e "${BLUE}🚀 启动V2Board API服务...${NC}"

systemctl daemon-reload
systemctl enable v2board-api
systemctl start v2board-api

# 等待服务启动
sleep 3

# 8. 检查服务状态
echo -e "${BLUE}📊 检查服务状态...${NC}"
if systemctl is-active --quiet v2board-api; then
    echo -e "${GREEN}✅ V2Board API服务启动成功！${NC}"
    
    # 测试API接口
    echo -e "${BLUE}🔍 测试API接口...${NC}"
    if curl -s http://localhost:3001/api/health >/dev/null; then
        echo -e "${GREEN}✅ API接口响应正常${NC}"
    else
        echo -e "${YELLOW}⚠️ API接口暂时无响应，请稍后检查${NC}"
    fi
else
    echo -e "${RED}❌ 服务启动失败${NC}"
    echo -e "${YELLOW}查看错误日志:${NC}"
    journalctl -u v2board-api --no-pager -n 10
    exit 1
fi

# 9. 显示NGINX配置建议
echo
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}           部署完成！${NC}"
echo -e "${BLUE}========================================${NC}"
echo
echo -e "${GREEN}✅ V2Board API服务已成功部署为系统服务${NC}"
echo
echo -e "${YELLOW}📋 服务管理命令：${NC}"
echo "  启动服务: systemctl start v2board-api"
echo "  停止服务: systemctl stop v2board-api"
echo "  重启服务: systemctl restart v2board-api"
echo "  查看状态: systemctl status v2board-api"
echo "  查看日志: journalctl -u v2board-api -f"
echo
echo -e "${CYAN}🌐 API服务地址: http://localhost:3001${NC}"
echo -e "${CYAN}📝 健康检查: http://localhost:3001/api/health${NC}"
echo
echo -e "${YELLOW}🔧 NGINX配置建议：${NC}"
echo "在您的NGINX配置中添加以下代理配置："
echo
echo "    # API代理配置"
echo "    location /api/ {"
echo "        proxy_pass http://localhost:3001;"
echo "        proxy_set_header Host \$host;"
echo "        proxy_set_header X-Real-IP \$remote_addr;"
echo "        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;"
echo "        proxy_set_header X-Forwarded-Proto \$scheme;"
echo "    }"
echo
echo -e "${GREEN}🎉 部署完成！服务将在系统重启后自动启动。${NC}"
