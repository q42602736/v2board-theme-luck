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
    echo "使用方法: sudo $0"
    exit 1
fi

# 1. 自动查找项目目录
find_project() {
    echo -e "${YELLOW}🔍 搜索V2Board项目目录...${NC}"
    
    SEARCH_PATHS=("/www/wwwroot" "/var/www" "/home" "/root" "/opt" "/data/wwwroot")
    
    for path in "${SEARCH_PATHS[@]}"; do
        if [ -d "$path" ]; then
            echo -e "${CYAN}📂 搜索: $path${NC}"
            
            while IFS= read -r package_file; do
                if [ -f "$package_file" ]; then
                    dir=$(dirname "$package_file")
                    echo -e "  📄 检查: $package_file"
                    
                    if grep -q "v2board\|frontend" "$package_file" 2>/dev/null; then
                        # 检查是否有API服务器文件
                        if [ -f "$dir/server/api-server.js" ] || [ -f "$dir/dist/server/api-server.js" ]; then
                            echo -e "${GREEN}✅ 找到项目: $dir${NC}"
                            echo "$dir"
                            return 0
                        fi
                    fi
                fi
            done < <(find "$path" -maxdepth 6 -name "package.json" 2>/dev/null)
        fi
    done
    
    return 1
}

PROJECT_DIR=$(find_project)

if [ -z "$PROJECT_DIR" ]; then
    echo -e "${RED}❌ 未找到V2Board项目目录${NC}"
    echo
    echo -e "${YELLOW}请确保：${NC}"
    echo "1. 项目已部署到服务器"
    echo "2. package.json文件存在"
    echo "3. 包含v2board相关内容"
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

cat > /etc/systemd/system/v2board-api.service << EOF
[Unit]
Description=V2Board API Server
After=network.target
Wants=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=$DIST_DIR
ExecStart=/usr/bin/node server/api-server.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=3001

# 日志配置
StandardOutput=journal
StandardError=journal
SyslogIdentifier=v2board-api

# 安全配置
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=$DIST_DIR

[Install]
WantedBy=multi-user.target
EOF

echo -e "${GREEN}✅ systemd服务文件已创建${NC}"

# 5. 设置权限
echo -e "${BLUE}🔐 设置目录权限...${NC}"

# 确保www-data用户存在
if ! id "www-data" &>/dev/null; then
    echo -e "${YELLOW}⚠️ www-data用户不存在，创建用户...${NC}"
    useradd -r -s /bin/false www-data
fi

chown -R www-data:www-data "$DIST_DIR"
chmod -R 755 "$DIST_DIR"

echo -e "${GREEN}✅ 权限设置完成${NC}"

# 6. 安装生产依赖
echo -e "${BLUE}📦 安装生产环境依赖...${NC}"
cd "$DIST_DIR"

if [ -f "package.json" ]; then
    sudo -u www-data npm install --production
    if [ $? -ne 0 ]; then
        echo -e "${YELLOW}⚠️ 依赖安装失败，但继续部署...${NC}"
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
