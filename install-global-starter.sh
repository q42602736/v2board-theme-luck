#!/bin/bash

# 设置颜色
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   V2Board 全局启动器安装程序${NC}"
echo -e "${BLUE}========================================${NC}"
echo

# 检查是否为root用户
if [ "$EUID" -ne 0 ]; then
    echo -e "${YELLOW}⚠️  建议使用root权限运行以安装到全局路径${NC}"
    echo -e "${YELLOW}   如果继续，将安装到用户目录${NC}"
    echo
fi

# 获取当前脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 创建全局启动脚本
GLOBAL_SCRIPT_CONTENT='#!/bin/bash

# V2Board 全局智能启动器
# 可以在任何目录运行，自动寻找项目并启动

# 设置颜色
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
BLUE="\033[0;34m"
CYAN="\033[0;36m"
NC="\033[0m"

echo
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   V2Board 全局智能启动器${NC}"
echo -e "${BLUE}========================================${NC}"
echo

# 函数：查找项目目录
find_project_dir() {
    echo -e "${YELLOW}🔍 正在全局搜索v2board-frontend项目...${NC}"
    
    # 常见的Web项目路径
    SEARCH_PATHS=(
        "/www/wwwroot"
        "/var/www/html"
        "/var/www"
        "/home"
        "/root"
        "/opt"
        "/usr/local/src"
        "/data/wwwroot"
        "/data/www"
    )
    
    # 在常见路径中搜索
    for base_path in "${SEARCH_PATHS[@]}"; do
        if [ -d "$base_path" ]; then
            echo -e "${CYAN}  🔎 搜索: $base_path${NC}"
            # 查找v2board-frontend目录
            found_dirs=$(find "$base_path" -maxdepth 4 -type d -name "*v2board*frontend*" 2>/dev/null)
            
            for dir in $found_dirs; do
                if [ -f "$dir/package.json" ] && [ -f "$dir/server/api-server.js" ]; then
                    # 验证是否为正确的项目
                    if grep -q "v2board-frontend" "$dir/package.json" 2>/dev/null; then
                        echo -e "${GREEN}✅ 找到项目: $dir${NC}"
                        echo "$dir"
                        return 0
                    fi
                fi
            done
        fi
    done
    
    # 如果没找到，进行更广泛的搜索
    echo -e "${YELLOW}  🔍 扩大搜索范围...${NC}"
    found_dirs=$(find / -maxdepth 5 -type d -name "*v2board*frontend*" 2>/dev/null | head -10)
    
    for dir in $found_dirs; do
        if [ -f "$dir/package.json" ] && [ -f "$dir/server/api-server.js" ]; then
            if grep -q "v2board-frontend" "$dir/package.json" 2>/dev/null; then
                echo -e "${GREEN}✅ 找到项目: $dir${NC}"
                echo "$dir"
                return 0
            fi
        fi
    done
    
    return 1
}

# 主程序
main() {
    # 如果提供了参数，直接使用
    if [ $# -gt 0 ]; then
        PROJECT_DIR="$1"
        echo -e "${BLUE}📁 使用指定目录: $PROJECT_DIR${NC}"
    else
        # 自动搜索项目目录
        PROJECT_DIR=$(find_project_dir)
    fi
    
    if [ -z "$PROJECT_DIR" ] || [ ! -d "$PROJECT_DIR" ]; then
        echo -e "${RED}❌ 未找到v2board-frontend项目${NC}"
        echo
        echo -e "${YELLOW}使用方法：${NC}"
        echo "  v2board-start                    # 自动搜索并启动"
        echo "  v2board-start /path/to/project   # 指定项目路径启动"
        echo
        exit 1
    fi
    
    echo -e "${GREEN}🎯 项目目录: $PROJECT_DIR${NC}"
    echo
    
    # 进入项目目录并启动
    cd "$PROJECT_DIR" || {
        echo -e "${RED}❌ 无法进入项目目录${NC}"
        exit 1
    }
    
    # 检查并构建项目
    if [ ! -d "dist" ]; then
        echo -e "${YELLOW}📦 项目未构建，正在自动构建...${NC}"
        npm run build:extreme || {
            echo -e "${RED}❌ 构建失败${NC}"
            exit 1
        }
    fi
    
    # 启动项目
    echo -e "${BLUE}🚀 启动生产环境...${NC}"
    npm run start:prod
}

main "$@"'

# 确定安装路径
if [ "$EUID" -eq 0 ]; then
    # root用户，安装到系统路径
    INSTALL_PATH="/usr/local/bin/v2board-start"
    echo -e "${GREEN}📍 安装到系统路径: $INSTALL_PATH${NC}"
else
    # 普通用户，安装到用户路径
    mkdir -p "$HOME/.local/bin"
    INSTALL_PATH="$HOME/.local/bin/v2board-start"
    echo -e "${GREEN}📍 安装到用户路径: $INSTALL_PATH${NC}"
    
    # 检查PATH是否包含用户bin目录
    if [[ ":$PATH:" != *":$HOME/.local/bin:"* ]]; then
        echo -e "${YELLOW}⚠️  请将以下行添加到您的 ~/.bashrc 或 ~/.profile:${NC}"
        echo -e "${CYAN}export PATH=\"\$HOME/.local/bin:\$PATH\"${NC}"
        echo
    fi
fi

# 写入全局启动脚本
echo "$GLOBAL_SCRIPT_CONTENT" > "$INSTALL_PATH"
chmod +x "$INSTALL_PATH"

echo -e "${GREEN}✅ 全局启动器安装完成！${NC}"
echo
echo -e "${BLUE}使用方法：${NC}"
echo -e "${CYAN}  v2board-start${NC}                    # 在任何目录运行，自动搜索项目"
echo -e "${CYAN}  v2board-start /path/to/project${NC}   # 指定项目路径"
echo
echo -e "${YELLOW}现在您可以在服务器的任何位置运行 'v2board-start' 来启动项目！${NC}"
