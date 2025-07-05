#!/bin/bash

# JavaScript配置文件混淆脚本
# 支持交互式输入和多级混淆

echo "🔒 JavaScript配置文件混淆工具"
echo "================================"

# 检查是否安装了Node.js
if ! command -v node &> /dev/null; then
    echo "⚠️  未找到Node.js，正在自动安装..."

    # 检测操作系统
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux系统
        echo "🐧 检测到Linux系统，使用包管理器安装Node.js..."
        if command -v apt &> /dev/null; then
            # Ubuntu/Debian
            sudo apt update && sudo apt install -y nodejs npm
        elif command -v yum &> /dev/null; then
            # CentOS/RHEL
            sudo yum install -y nodejs npm
        elif command -v dnf &> /dev/null; then
            # Fedora
            sudo dnf install -y nodejs npm
        else
            echo "❌ 不支持的Linux发行版，请手动安装Node.js"
            echo "📖 安装指南: https://nodejs.org/zh-cn/download/"
            exit 1
        fi
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS系统
        echo "🍎 检测到macOS系统..."
        if command -v brew &> /dev/null; then
            echo "🍺 使用Homebrew安装Node.js..."
            brew install node
        else
            echo "❌ 未找到Homebrew，请手动安装Node.js"
            echo "📖 安装指南: https://nodejs.org/zh-cn/download/"
            exit 1
        fi
    elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
        # Windows系统（Git Bash/Cygwin）
        echo "🪟 检测到Windows系统..."
        if command -v choco &> /dev/null; then
            echo "🍫 使用Chocolatey安装Node.js..."
            choco install nodejs -y
        elif command -v winget &> /dev/null; then
            echo "📦 使用winget安装Node.js..."
            winget install OpenJS.NodeJS
        else
            echo "❌ 请手动安装Node.js"
            echo "📖 下载地址: https://nodejs.org/zh-cn/download/"
            echo "💡 或安装Chocolatey: https://chocolatey.org/install"
            exit 1
        fi
    else
        echo "❌ 不支持的操作系统: $OSTYPE"
        echo "📖 请手动安装Node.js: https://nodejs.org/zh-cn/download/"
        exit 1
    fi

    # 验证安装
    if command -v node &> /dev/null; then
        echo "✅ Node.js安装成功！版本: $(node --version)"
    else
        echo "❌ Node.js安装失败，请手动安装"
        exit 1
    fi
fi

# 检查是否安装了javascript-obfuscator
if ! command -v javascript-obfuscator &> /dev/null; then
    echo "⚠️  未找到javascript-obfuscator，正在安装..."
    npm install -g javascript-obfuscator
    if [ $? -ne 0 ]; then
        echo "❌ 安装javascript-obfuscator失败"
        exit 1
    fi
    echo "✅ javascript-obfuscator安装成功"
fi

# 输入源文件目录
echo ""
echo "📁 请输入源配置文件所在目录:"
echo "💡 提示: 输入包含 original_config.js 文件的目录路径"
read -p "源文件目录: " source_dir

# 处理目录路径（移除末尾的斜杠）
source_dir=$(echo "$source_dir" | sed 's:/*$::')

# 构建完整的源文件路径
source_file="$source_dir/original_config.js"

# 验证源文件是否存在
if [ ! -f "$source_file" ]; then
    echo "❌ 错误: 源文件不存在: $source_file"
    echo "💡 请确保目录中存在 original_config.js 文件"

    # 列出目录中的.js文件
    if [ -d "$source_dir" ]; then
        echo "📂 目录中的.js文件:"
        ls -la "$source_dir"/*.js 2>/dev/null || echo "   未找到.js文件"
    fi
    exit 1
fi

echo "✅ 源文件验证成功: $source_file"

# 输入目标文件目录
echo ""
echo "📁 请输入目标配置文件所在目录:"
echo "💡 提示: 混淆后的 config.js 将保存到此目录"
read -p "目标文件目录: " target_dir

# 处理目录路径（移除末尾的斜杠）
target_dir=$(echo "$target_dir" | sed 's:/*$::')

# 构建完整的目标文件路径
target_file="$target_dir/config.js"

# 创建目标文件目录（如果不存在）
if [ ! -d "$target_dir" ]; then
    echo "📂 目标目录不存在，正在创建: $target_dir"
    mkdir -p "$target_dir"
    if [ $? -eq 0 ]; then
        echo "✅ 目录创建成功"
    else
        echo "❌ 目录创建失败"
        exit 1
    fi
else
    echo "✅ 目标目录验证成功: $target_dir"
fi

echo "📄 目标文件路径: $target_file"

# 选择混淆等级
echo ""
echo "🎚️  请选择混淆等级:"
echo "1) 低等级 - 基础混淆，速度快"
echo "2) 中等级 - 平衡混淆，推荐使用"
echo "3) 高等级 - 强混淆，最安全"
read -p "请选择 (1-3): " level

# 根据选择设置混淆参数
case $level in
    1)
        echo "🔧 使用低等级混淆..."
        obfuscator_options="--compact true --simplify true"
        ;;
    2)
        echo "🔧 使用中等级混淆..."
        obfuscator_options="--compact true --control-flow-flattening true --string-array true --string-array-threshold 0.8"
        ;;
    3)
        echo "🔧 使用高等级混淆..."
        obfuscator_options="--compact true --control-flow-flattening true --control-flow-flattening-threshold 1 --string-array true --string-array-threshold 0.8 --self-defending true --debug-protection true"
        ;;
    *)
        echo "❌ 无效选择，使用默认中等级混淆"
        obfuscator_options="--compact true --control-flow-flattening true --string-array true --string-array-threshold 0.8"
        ;;
esac

# 执行混淆
echo ""
echo "🚀 开始混淆处理..."
echo "源文件: $source_file"
echo "目标文件: $target_file"

# 执行混淆命令
javascript-obfuscator "$source_file" --output "$target_file" $obfuscator_options

# 检查混淆是否成功
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 混淆完成！"
    echo "📊 文件信息:"

    # 显示文件大小对比
    source_size=$(wc -c < "$source_file")
    target_size=$(wc -c < "$target_file")

    echo "   源文件大小: $source_size 字节"
    echo "   混淆后大小: $target_size 字节"

    # 计算压缩比
    if [ $source_size -gt 0 ]; then
        ratio=$(echo "scale=1; $target_size * 100 / $source_size" | bc 2>/dev/null || echo "N/A")
        echo "   大小比例: $ratio%"
    fi

    # 检查是否需要替换原config.js文件
    original_config_file="$target_dir/config.js"
    if [ -f "$original_config_file" ] && [ "$target_file" != "$original_config_file" ]; then
        echo ""
        echo "🔄 检测到目标目录中存在 config.js 文件"
        echo "📁 原文件: $original_config_file"
        echo "📁 混淆文件: $target_file"

        read -p "是否要用混淆后的内容替换原 config.js 文件？(y/N): " replace_choice

        if [[ $replace_choice =~ ^[Yy]$ ]]; then
            # 备份原文件
            backup_file="$original_config_file.backup.$(date +%Y%m%d_%H%M%S)"
            echo "💾 备份原文件到: $backup_file"
            cp "$original_config_file" "$backup_file"

            if [ $? -eq 0 ]; then
                # 替换原文件
                echo "🔄 替换原文件内容..."
                cp "$target_file" "$original_config_file"

                if [ $? -eq 0 ]; then
                    echo "✅ 文件替换成功！"
                    echo "📁 已更新: $original_config_file"
                    echo "💾 备份文件: $backup_file"

                    # 删除临时混淆文件（如果不是同一个文件）
                    if [ "$target_file" != "$original_config_file" ]; then
                        rm -f "$target_file"
                        echo "🗑️  已清理临时文件: $target_file"
                    fi
                else
                    echo "❌ 文件替换失败"
                fi
            else
                echo "❌ 备份文件失败，取消替换操作"
            fi
        else
            echo "⏭️  跳过文件替换"
            echo "📁 混淆后文件保存在: $target_file"
        fi
    fi

    echo ""
    echo "🎉 配置文件混淆成功！"
    if [ -f "$original_config_file" ]; then
        echo "📁 生产文件: $original_config_file"
    fi
    echo "📁 源文件: $source_file"
else
    echo "❌ 混淆失败，请检查错误信息"
    exit 1
fi
