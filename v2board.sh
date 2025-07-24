#!/bin/bash
shopt -s expand_aliases
Font_Black="\033[30m"
Font_Red="\033[31m"
Font_Green="\033[32m"
Font_Yellow="\033[33m"
Font_Blue="\033[34m"
Font_Purple="\033[35m"
Font_SkyBlue="\033[36m"
Font_White="\033[37m"
Font_Suffix="\033[0m"

# 添加日志相关变量
LOG_FILE="/root/media_unlock.log"
DEBUG=true

# DNS配置文件
UNLOCK_CONFIG_FILE="/root/.unlock_config"

# 生成 UUID 函数
gen_uuid() {
    od -x /dev/urandom | head -1 | awk '{OFS="-"; print $2$3,$4,$5,$6,$7$8$9}'
}

# 颜色函数
red() {
    echo -e "\033[31m\033[01m$1\033[0m"
}

# 解锁配置函数
configureUnlock() {
    # 如果指定了跳过配置且配置文件存在，则跳过
    if [[ "$SKIP_CONFIG" == "1" ]] && [[ -f "$UNLOCK_CONFIG_FILE" ]]; then
        return
    fi

    if [[ ! -f "$UNLOCK_CONFIG_FILE" ]]; then
        echo "流媒体解锁 DNS 配置"
        echo "----------------------------------------"
        echo "请为每个流媒体服务设置解锁 DNS 服务器地址"
        echo "支持以下格式："
        echo "1. IPv4 地址，例如: 1.1.1.1"
        echo "2. DNS服务器域名，例如: dns.example.com"
        echo "回车使用系统默认 DNS"
        echo "----------------------------------------"
        echo

        # 先收集所有输入
        read -p "Netflix 解锁 DNS [回车使用系统默认]: " netflix_dns
        read -p "Disney+ 解锁 DNS [回车使用系统默认]: " disney_dns
        read -p "Bahamut 动画疯解锁 DNS [回车使用系统默认]: " bahamut_dns
        read -p "Discovery+ 解锁 DNS [回车使用系统默认]: " discovery_dns
        read -p "Paramount+ 解锁 DNS [回车使用系统默认]: " paramount_dns
        read -p "OpenAI (ChatGPT) 解锁 DNS [回车使用系统默认]: " openai_dns
        read -p "YouTube Premium 解锁 DNS [回车使用系统默认]: " youtube_dns

        echo
        echo "正在生成配置文件..."

        # 创建临时配置文件
        cat > "${UNLOCK_CONFIG_FILE}.tmp" << EOF
NETFLIX_ADDR="$netflix_dns"
DISNEY_ADDR="$disney_dns"
BAHAMUT_ADDR="$bahamut_dns"
DISCOVERY_ADDR="$discovery_dns"
PARAMOUNT_ADDR="$paramount_dns"
OPENAI_ADDR="$openai_dns"
YOUTUBE_ADDR="$youtube_dns"
EOF

        # 检查编码并转换
        iconv -f UTF-8 -t UTF-8 "${UNLOCK_CONFIG_FILE}.tmp" > "$UNLOCK_CONFIG_FILE" 2>/dev/null
        if [ $? -eq 0 ]; then
            rm -f "${UNLOCK_CONFIG_FILE}.tmp"
            echo "DNS 配置已保存到: $UNLOCK_CONFIG_FILE"
            echo "如需修改配置，请删除该文件重新运行脚本"
            echo "提示: rm -f $UNLOCK_CONFIG_FILE"
            echo
        else
            mv "${UNLOCK_CONFIG_FILE}.tmp" "$UNLOCK_CONFIG_FILE"
            echo "DNS 配置已保存（未进行编码转换）"
            echo "如需修改配置，请删除该文件后重新运行脚本"
            echo "提示: rm -f $UNLOCK_CONFIG_FILE"
            echo
        fi
    fi
}

# 获取指定服务的解锁地址
getUnlockAddr() {
    local service=$1
    if [[ -f "$UNLOCK_CONFIG_FILE" ]]; then
        source "$UNLOCK_CONFIG_FILE"
        case $service in
            "netflix")
                echo "$NETFLIX_ADDR"
                ;;
            "disney")
                echo "$DISNEY_ADDR"
                ;;
            "youtube")
                echo "$YOUTUBE_ADDR"
                ;;
            "discovery")
                echo "$DISCOVERY_ADDR"
                ;;
            "paramount")
                echo "$PARAMOUNT_ADDR"
                ;;
            "bahamut")
                echo "$BAHAMUT_ADDR"
                ;;
            "openai")
                echo "$OPENAI_ADDR"
                ;;
        esac
    fi
}

# 使用指定的DNS进行解析
resolveDomain() {
    local domain=$1
    local dns_server=$2
    
    if [[ -n "$dns_server" ]]; then
        # 使用指定的DNS服务器解析域名
        result=$(dig @$dns_server $domain +short +timeout=2 +tries=2)
        if [[ -n "$result" ]]; then
            # 获取最后一个A记录（跳过CNAME）
            local ip=$(echo "$result" | grep -E '^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$' | tail -n 1)
            if [[ -n "$ip" ]]; then
                echo "$ip"
                log "INFO" "使用DNS $dns_server 解析 $domain 结果: $ip"
                return 0
            fi
        fi
        log "ERROR" "使用DNS $dns_server 解析 $domain 失败"
        return 1
    fi
    return 1
}

# 测试DNS解析并设置解析参数
testDNSAndSetXFF() {
    local service=$1
    local domain=$2
    local dns_server=$(getUnlockAddr "$service")
    
    if [[ -n "$dns_server" ]]; then
        log "INFO" "正在使用DNS服务器: $dns_server"
        # 使用DNS服务器解析域名
        local resolved_ip=$(dig @$dns_server $domain +short +timeout=2 +tries=2 | grep -E '^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$' | head -n 1)
        if [[ -n "$resolved_ip" ]]; then
            log "INFO" "域名 $domain 解析成功，IP: $resolved_ip"
            # 设置curl的resolve参数
            useResolve="--resolve ${domain}:443:${resolved_ip} --resolve ${domain}:80:${resolved_ip}"
            xForward="--header X-Forwarded-For:$resolved_ip"
            return 0
        else
            log "ERROR" "域名 $domain 解析失败，DNS服务器: $dns_server"
            useResolve=""
            xForward=""
            return 1
        fi
    else
        # 使用系统默认DNS
        log "INFO" "使用系统默认DNS服务器"
        useResolve=""
        xForward=""
        return 0
    fi
}

# 清理函数
cleanup() {
    # 恢复原始DNS设置
    if [[ -f "/etc/resolv.conf.bak" ]]; then
        cp /etc/resolv.conf.bak /etc/resolv.conf
        rm -f /etc/resolv.conf.bak
    fi
}

# 日志函数
log() {
    local level=$1
    shift
    local message=$@
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    if [[ "$DEBUG" == "true" ]]; then
        echo -e "${timestamp} [${level}] ${message}" >> "$LOG_FILE"
        
        # 如果日志文件大于10MB，则进行轮转
        if [[ -f "$LOG_FILE" ]] && [[ $(stat -f%z "$LOG_FILE" 2>/dev/null || stat -c%s "$LOG_FILE" 2>/dev/null) -gt 10485760 ]]; then
            mv "$LOG_FILE" "${LOG_FILE}.old"
            touch "$LOG_FILE"
        fi
    fi
}

while getopts ":I:M:EX:P:SC" optname; do
    case "$optname" in
    "I")
        iface="$OPTARG"
        useNIC="--interface $iface"
        ;;
    "M")
        if [[ "$OPTARG" == "4" ]]; then
            NetworkType=4
        elif [[ "$OPTARG" == "6" ]]; then
            NetworkType=6
        fi
        ;;
    "E")
        language="e"
        ;;
    "X")
        XIP="$OPTARG"
        xForward="--header X-Forwarded-For:$XIP"
        ;;
    "P")
        proxy="$OPTARG"
        usePROXY="-x $proxy"
        ;;
    "S")
        # 跳过配置
        SKIP_CONFIG=1
        ;;
    "C")
        # 仅配置
        CONFIG_ONLY=1
        ;;
    ":")
        echo "Unknown error while processing options"
        exit 1
        ;;
    esac

done

if [ -z "$iface" ]; then
    useNIC=""
fi

if [ -z "$XIP" ]; then
    xForward=""
fi

if [ -z "$proxy" ]; then
    usePROXY=""
elif [ -n "$proxy" ]; then
    NetworkType=4
fi

if ! mktemp -u --suffix=RRC &>/dev/null; then
    is_busybox=1
fi

UA_Browser="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36"
UA_Dalvik="Dalvik/2.1.0 (Linux; U; Android 9; ALP-AL00 Build/HUAWEIALP-AL00)"
Media_Cookie=$(curl -s --retry 3 --max-time 10 "https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/cookies")
IATACode=$(curl -s --retry 3 --max-time 10 "https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/reference/IATACode.txt")
WOWOW_Cookie=$(echo "$Media_Cookie" | awk 'NR==3')
TVer_Cookie="Accept: application/json;pk=BCpkADawqM0_rzsjsYbC1k1wlJLU4HiAtfzjxdUmfvvLUQB-Ax6VA-p-9wOEZbCEm3u95qq2Y1CQQW1K9tPaMma9iAqUqhpISCmyXrgnlpx9soEmoVNuQpiyGsTpePGumWxSs1YoKziYB6Wz"

# 颜色函数
red() {
    echo -e "\033[31m\033[01m$1\033[0m"
}
green() {
    echo -e "\033[32m\033[01m$1\033[0m"
}
yellow() {
    echo -e "\033[33m\033[01m$1\033[0m"
}
blue() {
    echo -e "\033[34m\033[01m$1\033[0m"
}

countRunTimes() {
    if [ "$is_busybox" == 1 ]; then
        count_file=$(mktemp)
    else
        count_file=$(mktemp --suffix=RRC)
    fi
    RunTimes=$(curl -s --max-time 10 "https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcheck.unclock.media&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visit&edge_flat=false" >"${count_file}")
    TodayRunTimes=$(cat "${count_file}" | tail -3 | head -n 1 | awk '{print $5}')
    TotalRunTimes=$(($(cat "${count_file}" | tail -3 | head -n 1 | awk '{print $7}') + 2527395))
}
countRunTimes

checkOS() {
    ifTermux=$(echo $PWD | grep termux)
    ifMacOS=$(uname -a | grep Darwin)
    
    if [ -n "$ifTermux" ]; then
        os_version=Termux
        is_termux=1
    elif [ -n "$ifMacOS" ]; then
        os_version=MacOS
        is_macos=1
    else
        os_version=$(grep 'VERSION_ID' /etc/os-release | cut -d '"' -f 2 | tr -d '.')
    fi

    if [[ "$os_version" == "2004" ]] || [[ "$os_version" == "10" ]] || [[ "$os_version" == "11" ]]; then
        is_windows=1
        ssll="-k --ciphers DEFAULT@SECLEVEL=1"
    fi

    if [ "$(which apt 2>/dev/null)" ]; then
        InstallMethod="apt"
        is_debian=1
    elif [ "$(which dnf 2>/dev/null)" ] || [ "$(which yum 2>/dev/null)" ]; then
        InstallMethod="yum"
        is_redhat=1
    elif [[ "$os_version" == "Termux" ]]; then
        InstallMethod="pkg"
    elif [[ "$os_version" == "MacOS" ]]; then
        InstallMethod="brew"
    fi
}

checkCPU() {
    CPUArch=$(uname -m)
    if [[ "$CPUArch" == "aarch64" ]]; then
        arch=_arm64
    elif [[ "$CPUArch" == "i686" ]]; then
        arch=_i686
    elif [[ "$CPUArch" == "arm" ]]; then
        arch=_arm
    elif [[ "$CPUArch" == "x86_64" ]] && [ -n "$ifMacOS" ]; then
        arch=_darwin
    fi
}

checkDependencies() {

    # os_detail=$(cat /etc/os-release 2> /dev/null)

    if ! command -v python &>/dev/null; then
        if command -v python3 &>/dev/null; then
            alias python="python3"
        else
            if [ "$is_debian" == 1 ]; then
                echo -e "${Font_Green}Installing python${Font_Suffix}"
                $InstallMethod update >/dev/null 2>&1
                $InstallMethod install python -y >/dev/null 2>&1
            elif [ "$is_redhat" == 1 ]; then
                echo -e "${Font_Green}Installing python${Font_Suffix}"
                if [[ "$os_version" -gt 7 ]]; then
                    $InstallMethod makecache >/dev/null 2>&1
                    $InstallMethod install python3 -y >/dev/null 2>&1
                    alias python="python3"
                else
                    $InstallMethod makecache >/dev/null 2>&1
                    $InstallMethod install python -y >/dev/null 2>&1
                fi

            elif [ "$is_termux" == 1 ]; then
                echo -e "${Font_Green}Installing python${Font_Suffix}"
                $InstallMethod update -y >/dev/null 2>&1
                $InstallMethod install python -y >/dev/null 2>&1

            elif [ "$is_macos" == 1 ]; then
                echo -e "${Font_Green}Installing python${Font_Suffix}"
                $InstallMethod install python
            fi
        fi
    fi

    if ! command -v dig &>/dev/null; then
        if [ "$is_debian" == 1 ]; then
            echo -e "${Font_Green}Installing dnsutils${Font_Suffix}"
            $InstallMethod update >/dev/null 2>&1
            $InstallMethod install dnsutils -y >/dev/null 2>&1
        elif [ "$is_redhat" == 1 ]; then
            echo -e "${Font_Green}Installing bind-utils${Font_Suffix}"
            $InstallMethod makecache >/dev/null 2>&1
            $InstallMethod install bind-utils -y >/dev/null 2>&1
        elif [ "$is_termux" == 1 ]; then
            echo -e "${Font_Green}Installing dnsutils${Font_Suffix}"
            $InstallMethod update -y >/dev/null 2>&1
            $InstallMethod install dnsutils -y >/dev/null 2>&1
        elif [ "$is_macos" == 1 ]; then
            echo -e "${Font_Green}Installing bind${Font_Suffix}"
            $InstallMethod install bind
        fi
    fi

    if [ "$is_macos" == 1 ]; then
        if ! command -v md5sum &>/dev/null; then
            echo -e "${Font_Green}Installing md5sha1sum${Font_Suffix}"
            $InstallMethod install md5sha1sum
        fi
    fi

    # 检查jq工具（V2Board集成需要）
    if ! command -v jq &>/dev/null; then
        echo -e "${Font_Yellow}检测到需要安装 jq 工具用于V2Board集成${Font_Suffix}"
        echo -e "${Font_Green}正在尝试自动安装 jq...${Font_Suffix}"

        if [ "$is_debian" == 1 ]; then
            $InstallMethod update && $InstallMethod install jq
        elif [ "$is_redhat" == 1 ]; then
            $InstallMethod install epel-release && $InstallMethod install jq
        elif [ "$is_macos" == 1 ]; then
            $InstallMethod install jq
        else
            echo -e "${Font_Red}无法自动安装jq${Font_Suffix}"
            echo -e "${Font_Yellow}请手动安装jq工具：${Font_Suffix}"
            echo "Ubuntu/Debian: apt update && apt install jq"
            echo "CentOS/RHEL: yum install epel-release && yum install jq"
            echo "或者: dnf install jq"
            echo "macOS: brew install jq"
            echo ""
            echo "安装完成后请重新运行脚本"
            exit 1
        fi

        # 再次检查是否安装成功
        if ! command -v jq &>/dev/null; then
            echo -e "${Font_Red}jq 自动安装失败${Font_Suffix}"
            echo -e "${Font_Yellow}请手动安装jq工具：${Font_Suffix}"
            echo "Ubuntu/Debian: apt update && apt install jq"
            echo "CentOS/RHEL: yum install epel-release && yum install jq"
            echo "或者: dnf install jq"
            echo "macOS: brew install jq"
            echo ""
            echo "安装完成后请重新运行脚本"
            exit 1
        else
            echo -e "${Font_Green}jq 安装成功${Font_Suffix}"
        fi
    fi

}
checkDependencies

local_ipv4=$(curl $useNIC $usePROXY -4 -s --max-time 10 api64.ipify.org)
local_ipv4_asterisk=$(awk -F"." '{print $1"."$2".*.*"}' <<<"${local_ipv4}")
local_ipv6=$(curl $useNIC -6 -s --max-time 20 api64.ipify.org)
local_ipv6_asterisk=$(awk -F":" '{print $1":"$2":"$3":*:*"}' <<<"${local_ipv6}")
local_isp4=$(curl $useNIC -s -4 --max-time 10 --user-agent "${UA_Browser}" "https://api.ip.sb/geoip/${local_ipv4}" | grep organization | cut -f4 -d '"')
local_isp6=$(curl $useNIC -s -6 --max-time 10 --user-agent "${UA_Browser}" "https://api.ip.sb/geoip/${local_ipv6}" | grep organization | cut -f4 -d '"')

ShowRegion() {
    echo -e "${Font_Yellow} ---${1}---${Font_Suffix}"
}

###########################################
#                                         #
#           required check item           #
#                                         #
###########################################

MediaUnlockTest_Netflix() {
    log "INFO" "开始检测 Netflix..."
    
    # IPv4 检测
    if [ -n "$local_ipv4" ]; then
        log "INFO" "开始 IPv4 检测"
        # 重置之前的参数
        useResolve=""
        xForward=""
        
        log "DEBUG" "步骤1：DNS解析检测"
        testDNSAndSetXFF "netflix" "www.netflix.com"
        if [[ $? != 0 ]]; then
            log "ERROR" "DNS解析失败"
            RESULT_IPv4="DNS_ERROR"
        else
            log "DEBUG" "DNS解析成功"
            log "DEBUG" "步骤2：内容检测"
            local result1=$(curl $useNIC $usePROXY $useResolve $xForward -4 --user-agent "${UA_Browser}" -fsL --write-out %{http_code} --output /dev/null --max-time 10 "https://www.netflix.com/title/81280792" 2>&1)
            
            case $result1 in
                404)
                    log "INFO" "仅解锁自制剧"
                    RESULT_IPv4="Originals Only"
                    ;;
                403)
                    log "INFO" "未解锁"
                    RESULT_IPv4="No"
                    ;;
                200)
                    log "DEBUG" "步骤3：获取地区信息"
                    REGION_IPv4=$(curl $useNIC $usePROXY $useResolve $xForward -4 --user-agent "${UA_Browser}" -fs --max-time 10 --write-out %{redirect_url} --output /dev/null "https://www.netflix.com/title/80018499" 2>&1 | cut -d '/' -f4 | cut -d '-' -f1 | tr [:lower:] [:upper:])
                    log "DEBUG" "地区信息获取成功: ${REGION_IPv4:-US}"
                    RESULT_IPv4="Yes"
                    [[ -z "$REGION_IPv4" ]] && REGION_IPv4="US"
                    ;;
                000)
                    log "ERROR" "网络连接失败"
                    RESULT_IPv4="Failed"
                    ;;
            esac
        fi
    else
        log "INFO" "IPv4 不可用，跳过检测"
    fi

    # IPv6 检测
    if [ -n "$local_ipv6" ]; then
        log "INFO" "开始 IPv6 检测"
        # 重置之前的参数
        useResolve=""
        xForward=""
        
        log "DEBUG" "步骤1：DNS解析检测"
        testDNSAndSetXFF "netflix" "www.netflix.com"
        if [[ $? != 0 ]]; then
            log "ERROR" "DNS解析失败"
            RESULT_IPv6="DNS_ERROR"
        else
            log "DEBUG" "DNS解析成功"
            log "DEBUG" "步骤2：内容检测"
            local result2=$(curl $useNIC $usePROXY $useResolve $xForward -6 --user-agent "${UA_Browser}" -fsL --write-out %{http_code} --output /dev/null --max-time 10 "https://www.netflix.com/title/81280792" 2>&1)
            
            case $result2 in
                404)
                    log "INFO" "仅解锁自制剧"
                    RESULT_IPv6="Originals Only"
                    ;;
                403)
                    log "INFO" "未解锁"
                    RESULT_IPv6="No"
                    ;;
                200)
                    log "DEBUG" "步骤3：获取地区信息"
                    REGION_IPv6=$(curl $useNIC $usePROXY $useResolve $xForward -6 --user-agent "${UA_Browser}" -fs --max-time 10 --write-out %{redirect_url} --output /dev/null "https://www.netflix.com/title/80018499" 2>&1 | cut -d '/' -f4 | cut -d '-' -f1 | tr [:lower:] [:upper:])
                    log "DEBUG" "地区信息获取成功: ${REGION_IPv6:-US}"
                    RESULT_IPv6="Yes"
                    [[ -z "$REGION_IPv6" ]] && REGION_IPv6="US"
                    ;;
                000)
                    log "ERROR" "网络连接失败"
                    RESULT_IPv6="Failed"
                    ;;
            esac
        fi
    else
        log "INFO" "IPv6 不可用，跳过检测"
    fi

    # 综合判断结果
    log "INFO" "整合 IPv4 和 IPv6 检测结果"
    local RESULT="No"
    local REGION=""
    
    if [[ "$RESULT_IPv4" == "Yes" ]] || [[ "$RESULT_IPv6" == "Yes" ]]; then
        RESULT="Yes"
        if [[ "$RESULT_IPv4" == "Yes" ]]; then
            REGION="$REGION_IPv4"
            log "INFO" "解锁成功，采用 IPv4 结果，区域: ${REGION}"
        else
            REGION="$REGION_IPv6"
            log "INFO" "解锁成功，采用 IPv6 结果，区域: ${REGION}"
        fi
    elif [[ "$RESULT_IPv4" == "Originals Only" ]] || [[ "$RESULT_IPv6" == "Originals Only" ]]; then
        RESULT="Originals Only"
        log "INFO" "仅解锁自制剧"
    fi

    echo -n -e "\r Netflix:\t\t\t\t"
    if [[ "$RESULT" == "Yes" ]]; then
        echo -e "${Font_Green}Yes (Region: ${REGION})${Font_Suffix}"
        modifyJsonTemplate 'Netflix_result' 'Yes' "${REGION}"
    elif [[ "$RESULT" == "Originals Only" ]]; then
        echo -e "${Font_Yellow}Originals Only${Font_Suffix}"
        modifyJsonTemplate 'Netflix_result' 'No' 'Originals Only'
    else
        echo -e "${Font_Red}No${Font_Suffix}"
        modifyJsonTemplate 'Netflix_result' 'No'
    fi
    
    log "INFO" "检测完成"
}

MediaUnlockTest_DisneyPlus() {
    log "INFO" "开始检测 Disney+..."
    
    # IPv4 检测
    if [ -n "$local_ipv4" ]; then
        log "INFO" "开始 IPv4 检测"
        # 重置之前的参数
        useResolve=""
        xForward=""
        
        log "DEBUG" "步骤1：DNS解析检测"
        testDNSAndSetXFF "disney" "www.disneyplus.com"
        if [[ $? != 0 ]]; then
            log "ERROR" "DNS解析失败"
            RESULT_IPv4="DNS_ERROR"
        else
            log "DEBUG" "DNS解析成功"
            log "DEBUG" "步骤2：内容检测"
            local result1=$(curl $useNIC $usePROXY $useResolve $xForward -4 -I --max-time 10 "https://www.disneyplus.com" 2>&1)
            
            if [[ "$result1" == "curl"* ]]; then
                log "ERROR" "网络连接失败"
                RESULT_IPv4="Failed"
            else
                local status_code1=$(echo "$result1" | grep -E "^HTTP.*" | awk '{print $2}')
                local region1=$(echo "$result1" | grep -i "x-dss-country" | sed -n 's/.*x-dss-country=\([A-Z][A-Z]\).*/\1/Ip')
                log "DEBUG" "状态码: ${status_code1}, 区域代码: ${region1}"
                
                if [[ "$status_code1" == "200" ]]; then
                    RESULT_IPv4="Yes"
                    REGION_IPv4="${region1}"
                    log "INFO" "解锁成功，区域: ${region1}"
                else
                    RESULT_IPv4="No"
                    log "INFO" "未解锁"
                fi
            fi
        fi
    else
        log "INFO" "IPv4 不可用，跳过检测"
    fi

    # IPv6 检测
    if [ -n "$local_ipv6" ]; then
        log "INFO" "开始 IPv6 检测"
        # 重置之前的参数
        useResolve=""
        xForward=""
        
        log "DEBUG" "步骤1：DNS解析检测"
        testDNSAndSetXFF "disney" "www.disneyplus.com"
        if [[ $? != 0 ]]; then
            log "ERROR" "DNS解析失败"
            RESULT_IPv6="DNS_ERROR"
        else
            log "DEBUG" "DNS解析成功"
            log "DEBUG" "步骤2：内容检测"
            local result2=$(curl $useNIC $usePROXY $useResolve $xForward -6 -I --max-time 10 "https://www.disneyplus.com" 2>&1)
            
            if [[ "$result2" == "curl"* ]]; then
                log "ERROR" "网络连接失败"
                RESULT_IPv6="Failed"
            else
                local status_code2=$(echo "$result2" | grep -E "^HTTP.*" | awk '{print $2}')
                local region2=$(echo "$result2" | grep -i "x-dss-country" | sed -n 's/.*x-dss-country=\([A-Z][A-Z]\).*/\1/Ip')
                log "DEBUG" "状态码: ${status_code2}, 区域代码: ${region2}"
                
                if [[ "$status_code2" == "200" ]]; then
                    RESULT_IPv6="Yes"
                    REGION_IPv6="${region2}"
                    log "INFO" "解锁成功，区域: ${region2}"
                else
                    RESULT_IPv6="No"
                    log "INFO" "未解锁"
                fi
            fi
        fi
    else
        log "INFO" "IPv6 不可用，跳过检测"
    fi

    # 综合判断结果
    log "INFO" "整合 IPv4 和 IPv6 检测结果"
    local RESULT="No"
    local REGION=""
    
    if [[ "$RESULT_IPv4" == "Yes" ]] || [[ "$RESULT_IPv6" == "Yes" ]]; then
        RESULT="Yes"
        if [[ "$RESULT_IPv4" == "Yes" ]]; then
            REGION="$REGION_IPv4"
            log "INFO" "解锁成功，采用 IPv4 结果，区域: ${REGION}"
        else
            REGION="$REGION_IPv6"
            log "INFO" "解锁成功，采用 IPv6 结果，区域: ${REGION}"
        fi
    fi

    echo -n -e "\r Disney+:\t\t\t\t"
    if [[ "$RESULT" == "Yes" ]]; then
        if [[ -n "$REGION" ]]; then
            echo -e "${Font_Green}Yes (Region: ${REGION})${Font_Suffix}"
            modifyJsonTemplate 'DisneyPlus_result' 'Yes' "${REGION}"
        else
            echo -e "${Font_Green}Yes${Font_Suffix}"
            modifyJsonTemplate 'DisneyPlus_result' 'Yes'
        fi
    else
        echo -e "${Font_Red}No${Font_Suffix}"
        modifyJsonTemplate 'DisneyPlus_result' 'No'
    fi
    
    log "INFO" "检测完成"
}

MediaUnlockTest_YouTube_Premium() {
    log "INFO" "开始检测 YouTube Premium..."
    
    # 重置之前的参数
    useResolve=""
    xForward=""
    
    log "DEBUG" "步骤1：DNS解析检测"
    testDNSAndSetXFF "youtube" "www.youtube.com"
    if [[ $? != 0 ]]; then
        log "ERROR" "DNS解析失败"
        echo -n -e "\r YouTube Premium:\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'YouTube_Premium_result' 'No'
        return
    fi
    
    log "DEBUG" "步骤2：获取页面内容"
    # 使用简单的curl命令获取页面
    local tmpresult=$(curl $useNIC $usePROXY $useResolve $xForward \
        --user-agent "${UA_Browser}" \
        -sL --max-time 10 \
        -H "Accept-Language: en-US" \
        "https://www.youtube.com/premium" 2>&1)
    
    if [[ "$tmpresult" == "curl"* ]]; then
        log "ERROR" "网络连接失败"
        echo -n -e "\r YouTube Premium:\t\t\t${Font_Red}Failed (Network Connection)${Font_Suffix}\n"
        modifyJsonTemplate 'YouTube_Premium_result' 'No'
        return
    fi

    # 检查是否重定向到google.cn
    if echo "$tmpresult" | grep -q "www.google.cn"; then
        log "INFO" "未解锁，区域: CN"
        echo -n -e "\r YouTube Premium:\t\t\t${Font_Red}No${Font_Suffix} ${Font_Green}(Region: CN)${Font_Suffix}\n"
        modifyJsonTemplate 'YouTube_Premium_result' 'No' 'CN'
        return
    fi

    # 提取国家代码
    local countryCode=$(echo "$tmpresult" | tr -d '\0' | grep -oE '"GL":"[A-Z]{2}"' | cut -d'"' -f4)
    log "DEBUG" "检测到国家代码: ${countryCode:-未知}"

    # 检查Premium内容标记
    if echo "$tmpresult" | tr -d '\0' | grep -q -E "YouTube and YouTube Music ad-free|Premium|youtube.com/premium"; then
        if [ -n "$countryCode" ]; then
            log "INFO" "解锁成功，区域: ${countryCode}"
            echo -n -e "\r YouTube Premium:\t\t\t\t${Font_Green}Yes (Region: ${countryCode})${Font_Suffix}\n"
            modifyJsonTemplate 'YouTube_Premium_result' 'Yes' "${countryCode}"
        else
            log "INFO" "解锁成功"
            echo -n -e "\r YouTube Premium:\t\t\t\t${Font_Green}Yes${Font_Suffix}\n"
            modifyJsonTemplate 'YouTube_Premium_result' 'Yes'
        fi
        return
    fi

    # 检查Premium状态
    if echo "$tmpresult" | tr -d '\0' | grep -q "Premium is not available in your country"; then
        log "INFO" "未解锁"
        if [ -n "$countryCode" ]; then
            echo -n -e "\r YouTube Premium:\t\t\t\t${Font_Red}No${Font_Suffix} ${Font_Green}(Region: ${countryCode})${Font_Suffix}\n"
            modifyJsonTemplate 'YouTube_Premium_result' 'No' "${countryCode}"
        else
            echo -n -e "\r YouTube Premium:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
            modifyJsonTemplate 'YouTube_Premium_result' 'No'
        fi
        return
    fi

    # 如果有国家代码但没有明确的错误信息，默认判定为解锁
    if [ -n "$countryCode" ]; then
        log "INFO" "解锁成功，区域: ${countryCode}"
        echo -n -e "\r YouTube Premium:\t\t\t\t${Font_Green}Yes (Region: ${countryCode})${Font_Suffix}\n"
        modifyJsonTemplate 'YouTube_Premium_result' 'Yes' "${countryCode}"
        return
    fi

    # 如果没有明确的结果，尝试通过API获取信息
    local api_result=$(curl $useNIC $usePROXY $useResolve $xForward \
        --user-agent "${UA_Browser}" \
        -sL --max-time 10 \
        -H "Accept-Language: en-US" \
        "https://www.youtube.com/iframe_api" 2>&1)
    
    if echo "$api_result" | tr -d '\0' | grep -q '"GL":"[A-Z]\{2\}"'; then
        local api_country=$(echo "$api_result" | tr -d '\0' | grep -o '"GL":"[A-Z]\{2\}"' | cut -d'"' -f4)
        log "INFO" "通过API检测到区域: ${api_country}"
        echo -n -e "\r YouTube Premium:\t\t\t${Font_Green}Yes (Region: ${api_country})${Font_Suffix}\n"
        modifyJsonTemplate 'YouTube_Premium_result' 'Yes' "${api_country}"
        return
    fi

    log "ERROR" "无法确定解锁状态"
    echo -n -e "\r YouTube Premium:\t\t\t${Font_Red}Failed${Font_Suffix}\n"
    modifyJsonTemplate 'YouTube_Premium_result' 'No'
    
    log "INFO" "检测完成"
}

MediaUnlockTest_DiscoveryPlus() {
    log "INFO" "开始检测 Discovery+..."
    
    if [ "${1}" == "6" ]; then
        log "INFO" "不支持 IPv6 检测"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    
    log "DEBUG" "步骤1：DNS解析检测"
    testDNSAndSetXFF "discovery" "www.discoveryplus.com"
    if [[ $? != 0 ]]; then
        log "ERROR" "DNS解析失败"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    log "DEBUG" "DNS解析成功"
    
    log "DEBUG" "步骤2：获取API信息"
    local tmpresult=$(curl $useNIC $usePROXY $useResolve $xForward -${1} ${ssll} -sS \
        -H 'accept: */*' \
        -H 'accept-language: en-US,en;q=0.9' \
        -H 'origin: https://www.discoveryplus.com' \
        -H 'referer: https://www.discoveryplus.com/' \
        -H "sec-ch-ua: ${UA_SEC_CH_UA}" \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'sec-ch-ua-platform: "Windows"' \
        -H 'sec-fetch-dest: empty' \
        -H 'sec-fetch-mode: cors' \
        -H 'sec-fetch-site: cross-site' \
        -H 'x-disco-client: WEB:UNKNOWN:dplus_us:2.46.0' \
        -H 'x-disco-params: bid=dplus,hn=www.discoveryplus.com' \
        --user-agent "${UA_Browser}" \
        'https://global-prod.disco-api.com/bootstrapInfo' 2>&1)
    
    if [[ "$tmpresult" == "curl"* ]]; then
        log "ERROR" "网络连接失败"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    
    local baseApiUrl=$(echo "$tmpresult" | grep -woP '"baseApiUrl"\s{0,}:\s{0,}"\K[^"]+')
    local realm=$(echo "$tmpresult" | grep -woP '"realm"\s{0,}:\s{0,}"\K[^"]+')
    
    if [ -z "$baseApiUrl" ] || [ -z "$realm" ]; then
        log "ERROR" "API信息获取失败"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    
    if [ "$realm" == 'dplusapac' ]; then
        log "INFO" "亚太地区尚未提供服务"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    
    log "DEBUG" "步骤3：获取访问令牌"
    local fakeDeviceId=$(gen_uuid | md5sum | cut -f1 -d' ')
    local token_result=$(curl $useNIC $usePROXY $useResolve $xForward -${1} ${ssll} -sS \
        -H 'accept: */*' \
        -H 'accept-language: en-US,en;q=0.9' \
        -H 'origin: https://www.discoveryplus.com' \
        -H 'referer: https://www.discoveryplus.com/' \
        -H "sec-ch-ua: ${UA_SEC_CH_UA}" \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'sec-ch-ua-platform: "Windows"' \
        -H 'sec-fetch-dest: empty' \
        -H 'sec-fetch-mode: cors' \
        -H 'sec-fetch-site: same-site' \
        -H "x-device-info: dplus_us/2.46.0 (desktop/desktop; Windows/NT 10.0; ${fakeDeviceId})" \
        -H 'x-disco-client: WEB:UNKNOWN:dplus_us:2.46.0' \
        -H "x-disco-params: realm=${realm},bid=dplus,hn=www.discoveryplus.com,hth=,features=ar" \
        --user-agent "${UA_Browser}" \
        "${baseApiUrl}/token?deviceId=${fakeDeviceId}&realm=${realm}&shortlived=true" 2>&1)
    
    if [[ "$token_result" == "curl"* ]]; then
        log "ERROR" "访问令牌获取失败"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    
    local token=$(echo "$token_result" | grep -woP '"token"\s{0,}:\s{0,}"\K[^"]+')
    if [ -z "$token" ]; then
        log "ERROR" "访问令牌解析失败"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    
    log "DEBUG" "步骤4：检查内容访问"
    local content_result=$(curl $useNIC $usePROXY $useResolve $xForward -${1} ${ssll} -sS \
        -H 'accept: */*' \
        -H 'accept-language: en-US,en;q=0.9' \
        -H 'origin: https://www.discoveryplus.com' \
        -H 'referer: https://www.discoveryplus.com/' \
        -H "sec-ch-ua: ${UA_SEC_CH_UA}" \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'sec-ch-ua-platform: "Windows"' \
        -H 'sec-fetch-dest: empty' \
        -H 'sec-fetch-mode: cors' \
        -H 'sec-fetch-site: same-site' \
        -H 'x-disco-client: WEB:UNKNOWN:dplus_us:2.46.0' \
        -H 'x-disco-params: realm=dplay,bid=dplus,hn=www.discoveryplus.com,hth=,features=ar' \
        -b "st=${token}" \
        --user-agent "${UA_Browser}" \
        "${baseApiUrl}/cms/routes/tabbed-home?include=default&decorators=viewingHistory,isFavorite,playbackAllowed,contentAction" 2>&1)
    
    if [[ "$content_result" == "curl"* ]]; then
        log "ERROR" "内容访问检查失败"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    
    local isBlocked=$(echo "$content_result" | grep -iE 'is unavailable in your|not yet available')
    local isOK=$(echo "$content_result" | grep -i 'relationships')
    local region=$(echo "$content_result" | grep -woP '"mainTerritoryCode"\s{0,}:\s{0,}"\K[^"]+' | tr a-z A-Z)
    
    if [ -z "$isBlocked" ] && [ -z "$isOK" ]; then
        log "ERROR" "无法判断解锁状态"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    
    if [ -n "$isBlocked" ]; then
        log "INFO" "未解锁"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'No'
        return
    fi
    
    if [ -n "$isOK" ]; then
        log "INFO" "解锁成功，区域: ${region}"
        echo -n -e "\r Discovery+:\t\t\t\t${Font_Green}Yes (Region: ${region})${Font_Suffix}\n"
        modifyJsonTemplate 'DiscoveryPlus_result' 'Yes' "${region}"
        return
    fi
    
    log "ERROR" "检测出现未知误"
    echo -n -e "\r Discovery+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
    modifyJsonTemplate 'DiscoveryPlus_result' 'No'
}

MediaUnlockTest_ParamountPlus() {
    log "INFO" "开始检测 Paramount+..."
    
    log "DEBUG" "步骤1：DNS解析检测"
    testDNSAndSetXFF "paramount" "www.paramountplus.com"
    if [[ $? != 0 ]]; then
        log "ERROR" "DNS解析失败"
        echo -n -e "\r Paramount+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'ParamountPlus_result' 'No'
        return
    fi
    log "DEBUG" "DNS解析成功"

    log "DEBUG" "步骤2：访问检测"
    local result=$(curl $useNIC $usePROXY $useResolve $xForward -${1} ${ssll} -s -o /dev/null -L --max-time 10 -w '%{url_effective}\n' "https://www.paramountplus.com/" 2>&1 | grep 'intl')

    if [ -n "$result" ]; then
        log "INFO" "未解锁"
        echo -n -e "\r Paramount+:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'ParamountPlus_result' 'No'
        return
    fi

    log "INFO" "解锁成功"
    echo -n -e "\r Paramount+:\t\t\t\t${Font_Green}Yes${Font_Suffix}\n"
    modifyJsonTemplate 'ParamountPlus_result' 'Yes'
    
    log "INFO" "检测完成"
}

MediaUnlockTest_BahamutAnime() {
    log "INFO" "开始检测 Bahamut Anime..."
    
    # 测试DNS和设置解析参数
    log "DEBUG" "步骤1：DNS解析检测"
    testDNSAndSetXFF "bahamut" "ani.gamer.com.tw"
    if [[ $? != 0 ]]; then
        log "ERROR" "DNS解析失败"
        echo -n -e "\r Bahamut Anime:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'BahamutAnime_result' 'No'
        return
    fi
    log "DEBUG" "DNS解析成功"
    
    # 获取设备ID
    log "DEBUG" "步骤2：获取设备ID"
    local device_result=$(curl $useNIC $usePROXY $useResolve $xForward -${1} \
        --user-agent "${UA_Browser}" \
        -sL --max-time 10 \
        "https://ani.gamer.com.tw/ajax/getdeviceid.php" 2>&1)
    
    if [[ "$device_result" == "curl"* ]]; then
        log "ERROR" "网络连接失败"
        echo -n -e "\r Bahamut Anime:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'BahamutAnime_result' 'No'
        return
    fi
    
    local deviceid=$(echo "$device_result" | grep -o '"deviceid":"[^"]*"' | cut -d'"' -f4)
    if [[ -z "$deviceid" ]]; then
        log "ERROR" "设备ID获取失败"
        echo -n -e "\r Bahamut Anime:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'BahamutAnime_result' 'No'
        return
    fi
    log "DEBUG" "设备ID获取成功"
    
    # 获取地区信息
    log "DEBUG" "步骤3：获取地区信息"
    local region_response=$(curl $useNIC $usePROXY $useResolve $xForward -${1} \
        --user-agent "${UA_Browser}" \
        -sL --max-time 10 \
        "https://ani.gamer.com.tw/" 2>&1)
    
    local region=$(echo "$region_response" | grep -o 'data-region="[^"]*"' | cut -d'"' -f2)
    [[ -z "$region" ]] && region="TW"
    log "DEBUG" "地区信息获取成功: ${region}"
    
    # 判断解锁状态
    if [[ -n "$deviceid" ]] && [[ -n "$region" ]]; then
        log "INFO" "解锁成功，区域: ${region}"
        echo -n -e "\r Bahamut Anime:\t\t\t\t${Font_Green}Yes (Region: ${region})${Font_Suffix}\n"
        modifyJsonTemplate 'BahamutAnime_result' 'Yes' "${region}"
    else
        log "INFO" "解锁失败"
        echo -n -e "\r Bahamut Anime:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'BahamutAnime_result' 'No'
    fi
    
    log "INFO" "检测完成"
}

###
 # @Author: Vincent Young
 # @Date: 2023-02-09 17:39:59
 # @LastEditors: Vincent Young
 # @LastEditTime: 2023-02-15 20:54:40
 # @FilePath: /OpenAI-Checker/openai.sh
 # @Telegram: https://t.me/missuo
 #
 # Copyright © 2023 by Vincent, All Rights Reserved.
###

OpenAiUnlockTest()
{
    log "INFO" "开始检测 OpenAI..."
    
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    YELLOW='\033[0;33m'
    PLAIN='\033[0m'
    BLUE="\033[36m"

    SUPPORT_COUNTRY=(AL DZ AD AO AG AR AM AU AT AZ BS BD BB BE BZ BJ BT BA BW BR BG BF CV CA CL CO KM CR HR CY DK DJ DM DO EC SV EE FJ FI FR GA GM GE DE GH GR GD GT GN GW GY HT HN HU IS IN ID IQ IE IL IT JM JP JO KZ KE KI KW KG LV LB LS LR LI LT LU MG MW MY MV ML MT MH MR MU MX MC MN ME MA MZ MM NA NR NP NL NZ NI NE NG MK NO OM PK PW PA PG PE PH PL PT QA RO RW KN LC VC WS SM ST SN RS SC SL SG SI SB ZA ES LK SR SE CH TH TG TO TT TN TR TV UG AE US UY VU ZM BO BN CG CZ VA FM MD PS KR TW TZ TL GB)
    echo
    echo -e "${BLUE}OpenAI Access Checker. Made by Vincent${PLAIN}"
    echo -e "${BLUE}https://github.com/missuo/OpenAI-Checker${PLAIN}"

    # 重置之前的参数
    useResolve=""
    xForward=""
    
    log "DEBUG" "步骤1：DNS解析检测"
    testDNSAndSetXFF "openai" "chat.openai.com"
    if [[ $? != 0 ]]; then
        log "ERROR" "DNS解析失败"
        echo -n -e "\r OpenAI:\t\t\t\t${Font_Red}No${Font_Suffix}\n"
        modifyJsonTemplate 'OpenAI_result' 'No' 'DNS_ERROR'
        return
    fi
    log "DEBUG" "DNS解析成功"

    log "DEBUG" "步骤2：检查 IP 是否被封禁"
    if [[ $(curl $useNIC $usePROXY $useResolve $xForward -sS https://chat.openai.com/ -I | grep "text/plain") != "" ]]
    then
        log "ERROR" "IP 已被封禁"
        echo "Your IP is BLOCKED!"
        modifyJsonTemplate 'OpenAI_result' 'No' 'BLOCKED'
        return
    fi

    log "DEBUG" "步骤3：获取地区信息"
    iso2_code4=$(curl $useNIC $usePROXY $useResolve $xForward -4 -sS https://chat.openai.com/cdn-cgi/trace | grep "loc=" | awk -F= '{print $2}')
    log "DEBUG" "检测到地区代码: ${iso2_code4}"
    
    found=0
    for country in "${SUPPORT_COUNTRY[@]}"
    do
        if [[ "${country}" == "${iso2_code4}" ]];
        then
            log "INFO" "解锁成功，区域: ${iso2_code4}"
            echo -e "${BLUE}Your IP supports access to OpenAI. Region: ${iso2_code4}${PLAIN}"
            modifyJsonTemplate 'OpenAI_result' 'Yes' "${iso2_code4}"
            found=1
            break
        fi
    done

    if [[ $found -eq 0 ]];
    then
        log "INFO" "当前区域 ${iso2_code4} 不支持访问 OpenAI"
        echo -e "${RED}Region: ${iso2_code4}. Not support OpenAI at this time.${PLAIN}"
        modifyJsonTemplate 'OpenAI_result' 'No'
    fi
    
    log "INFO" "检测完成"
}

###########################################
#                                         #
#   sspanel unlock check function code    #
#                                         #
###########################################

createJsonTemplate() {
    echo '{
    "YouTube": "YouTube_Premium_result",
    "Netflix": "Netflix_result",
    "DisneyPlus": "DisneyPlus_result",
    "DiscoveryPlus": "DiscoveryPlus_result",
    "ParamountPlus": "ParamountPlus_result",
    "BahamutAnime": "BahamutAnime_result",
    "OpenAI": "OpenAI_result"
}' > /root/media_test_tpl.json
}

modifyJsonTemplate() {
    key_word=$1
    result=$2
    region=$3

    # 检查文件是否存在果不存在则创建
    if [[ ! -f "/root/media_test_tpl.json" ]]; then
        createJsonTemplate
    fi

    if [[ "$3" == "" ]]; then
        sed -i "s#${key_word}#${result}#g" /root/media_test_tpl.json
    else
        sed -i "s#${key_word}#${result} (${region})#g" /root/media_test_tpl.json
    fi
}

setCronTask() {
    addTask() {
        execution_time_interval=$1
        execution_time_unit=$2

        crontab -l >/root/crontab.list 2>/dev/null
        if [[ "$execution_time_unit" == "minute" ]]; then
            echo "*/${execution_time_interval} * * * * /bin/bash /root/v2board.sh -S" >>/root/crontab.list
            green "定时任务添加成功！每 ${execution_time_interval} 分钟自动执行一次检测"
        else
            echo "0 */${execution_time_interval} * * * /bin/bash /root/v2board.sh -S" >>/root/crontab.list
            green "定时任务添加成功！每 ${execution_time_interval} 小时自动执行一次检测"
        fi
        crontab /root/crontab.list
        rm -rf /root/crontab.list
    }

    crontab -l | grep "v2board.sh" >/dev/null
    if [[ "$?" != "0" ]]; then
        echo "设置自动检测任务"
        echo "----------------------------------------"
        echo "请择检测频率："
        echo "[1] 每 1 分钟"
        echo "[2] 每 1 小时"
        echo "[3] 每 2 小时"
        echo "[4] 每 3 小时"
        echo "[5] 每 4 小时"
        echo "[6] 每 6 小时"
        echo "[7] 每 8 小时"
        echo "[8] 每 12 小时"
        echo "[9] 每 24 小时"
        echo "[0] 不设置定时任务"
        echo "----------------------------------------"
        echo
        read -p "请输入数字 [0-9]: " time_interval_id

        case "${time_interval_id}" in
            0)
                green "已跳过定时任务设置"
                return
                ;;
            1)
                addTask 1 "minute"
                ;;
            2)
                addTask 1 "hour"
                ;;
            3)
                addTask 2 "hour"
                ;;
            4)
                addTask 3 "hour"
                ;;
            5)
                addTask 4 "hour"
                ;;
            6)
                addTask 6 "hour"
                ;;
            7)
                addTask 8 "hour"
                ;;
            8)
                addTask 12 "hour"
                ;;
            9)
                addTask 24 "hour"
                ;;
            *)
                red "输入错误，请输入 0-9 之间的数字"
                exit 1
                ;;
        esac
    else
        yellow "定时任务已存在，无需修改先手动删除"
        yellow "删除命令: crontab -l | grep -v v2board.sh | crontab -"
    fi
}

checkConfig() {
    getConfig() {
        echo "V2Board 流媒体解锁检测配置"
        echo "----------------------------------------"
        read -p "请输入V2Board面板地址 (例如: https://demo.v2board.com): " panel_address
        read -p "请输入管理员邮箱: " admin_email
        read -p "请输入管理员密码: " admin_password
        echo ""

        if [[ "${panel_address}" = "" ]] || [[ "${admin_email}" = "" ]] || [[ "${admin_password}" = "" ]];then
            red "请填写所有必需信息"
            exit
        fi

        # 处理面板地址，确保格式正确
        panel_address=$(echo "$panel_address" | sed 's:/*$::')  # 移除末尾的斜杠

        # 登录获取认证数据
        echo "正在登录验证..."
        echo "尝试登录URL: ${panel_address}/api/v1/passport/auth/login"

        login_response=$(curl -s -X POST \
            -H "Content-Type: application/json" \
            -d "{\"email\": \"${admin_email}\", \"password\": \"${admin_password}\"}" \
            "${panel_address}/api/v1/passport/auth/login")

        echo "登录响应: $login_response"

        if echo "$login_response" | grep -q '"data"'; then
            auth_data=$(echo "$login_response" | jq -r '.data.auth_data')
            is_admin=$(echo "$login_response" | jq -r '.data.is_admin')

            if [[ "$is_admin" != "true" ]] && [[ "$is_admin" != "1" ]]; then
                red "该账户不是管理员账户，请使用管理员账户登录"
                exit
            fi

            green "管理员登录验证成功"
        else
            red "登录失败，请检查邮箱和密码是否正确"
            echo "错误信息: $login_response"
            exit
        fi

        # 手动输入管理员路径
        echo "请输入V2Board管理员路径（secure_path）"
        echo "提示：在V2Board后台URL中可以看到，例如：admin、manage、backend等"
        read -p "管理员路径 (secure_path): " secure_path

        if [[ -z "$secure_path" ]]; then
            red "管理员路径不能为空"
            exit
        fi

        green "使用管理员路径: $secure_path"

        # 测试API连接
        echo "正在测试API权限..."
        api_url="${panel_address}/api/v1/${secure_path}/server/manage/getNodes"
        echo "尝试API URL: $api_url"
        echo "使用认证: Authorization: ${auth_data}"

        test_response=$(curl -s -H "Authorization: ${auth_data}" "$api_url")
        echo "API响应: $test_response"

        if echo "$test_response" | grep -q '"data"'; then
            green "API权限验证成功"
        else
            red "API权限验证失败，尝试其他认证方式..."

            # 尝试使用auth_data参数而不是Authorization头
            echo "尝试使用auth_data参数..."
            test_response2=$(curl -s "${api_url}?auth_data=${auth_data}")
            echo "参数方式响应: $test_response2"

            if echo "$test_response2" | grep -q '"data"'; then
                green "使用auth_data参数验证成功"
                # 更新认证方式标记
                auth_method="param"
            else
                red "所有认证方式都失败"
                echo "可能的原因："
                echo "1. 该V2Board实例未启用管理员API"
                echo "2. 需要特殊的API权限配置"
                echo "3. API路径可能不同"
                exit
            fi
        fi

        # 显示所有可用节点（按协议分组）
        echo ""
        echo "正在获取所有可用节点..."

        # 根据认证方式获取节点列表
        if [[ "$auth_method" == "param" ]]; then
            all_nodes_response="$test_response2"
        else
            all_nodes_response="$test_response"
        fi

        # 按协议分组显示节点
        echo ""
        echo "=========================================="
        echo "           可用节点列表（按协议分组）"
        echo "=========================================="

        protocols=("vmess" "vless" "trojan" "shadowsocks" "hysteria" "tuic" "anytls")

        for protocol in "${protocols[@]}"; do
            nodes=$(echo "$all_nodes_response" | jq -r ".data[] | select(.type == \"${protocol}\") | \"ID: \(.id) - \(.name)\"")
            if [[ -n "$nodes" ]]; then
                echo ""
                echo "【${protocol^^} 协议节点】"
                echo "$nodes"
            fi
        done

        echo ""
        echo "=========================================="
        echo ""

        # 选择上传模式
        echo "请选择上传模式："
        echo "1. 单个节点上传"
        echo "2. 多个节点批量上传"
        echo "3. 按协议批量上传"
        echo ""
        read -p "请选择模式 (1-3): " upload_mode

        case $upload_mode in
            1)
                # 单个节点模式
                echo ""
                read -p "请输入节点ID: " server_id
                read -p "请输入节点协议类型: " server_type

                if [[ -z "$server_id" ]] || [[ -z "$server_type" ]]; then
                    red "节点ID和协议类型不能为空"
                    exit
                fi

                # 验证节点是否存在
                node_exists=$(echo "$all_nodes_response" | jq -r ".data[] | select(.id == ${server_id} and .type == \"${server_type}\") | .name")
                if [[ -z "$node_exists" ]]; then
                    red "未找到指定的节点 (ID: ${server_id}, 类型: ${server_type})"
                    exit
                fi

                green "找到节点: $node_exists"
                selected_nodes="${server_id}:${server_type}"
                ;;
            2)
                # 多个节点模式
                echo ""
                echo "=========================================="
                echo "           多节点选择模式"
                echo "=========================================="

                # 显示所有节点供选择
                echo ""
                echo "可选择的节点列表："
                echo "格式：[序号] ID:协议 - 节点名称"
                echo ""

                # 创建节点数组和显示列表
                declare -a node_array
                index=1

                for protocol in "${protocols[@]}"; do
                    nodes_data=$(echo "$all_nodes_response" | jq -r ".data[] | select(.type == \"${protocol}\") | \"\(.id):\(.type):\(.name)\"")
                    if [[ -n "$nodes_data" ]]; then
                        while IFS= read -r node_info; do
                            if [[ -n "$node_info" ]]; then
                                node_array[$index]="$node_info"
                                IFS=':' read -ra NODE_PARTS <<< "$node_info"
                                node_id="${NODE_PARTS[0]}"
                                node_type="${NODE_PARTS[1]}"
                                node_name="${NODE_PARTS[2]}"
                                printf "[%2d] %s:%s - %s\n" "$index" "$node_id" "$node_type" "$node_name"
                                ((index++))
                            fi
                        done <<< "$nodes_data"
                    fi
                done

                if [[ ${#node_array[@]} -eq 0 ]]; then
                    red "没有可用的节点"
                    exit
                fi

                echo ""
                echo "请选择要上传解锁信息的节点："
                echo "输入格式：单个序号(如: 1) 或 多个序号用逗号分隔(如: 1,3,5) 或 范围(如: 1-5)"
                read -p "选择节点: " selection

                if [[ -z "$selection" ]]; then
                    red "请选择至少一个节点"
                    exit
                fi

                # 解析用户选择
                selected_nodes=""

                # 处理范围选择 (如: 1-5)
                if [[ "$selection" =~ ^[0-9]+-[0-9]+$ ]]; then
                    IFS='-' read -ra RANGE <<< "$selection"
                    start=${RANGE[0]}
                    end=${RANGE[1]}

                    for ((i=start; i<=end; i++)); do
                        if [[ -n "${node_array[$i]}" ]]; then
                            IFS=':' read -ra NODE_PARTS <<< "${node_array[$i]}"
                            node_id="${NODE_PARTS[0]}"
                            node_type="${NODE_PARTS[1]}"
                            if [[ -n "$selected_nodes" ]]; then
                                selected_nodes="${selected_nodes},${node_id}:${node_type}"
                            else
                                selected_nodes="${node_id}:${node_type}"
                            fi
                        fi
                    done
                else
                    # 处理逗号分隔的选择 (如: 1,3,5)
                    IFS=',' read -ra SELECTIONS <<< "$selection"
                    for sel in "${SELECTIONS[@]}"; do
                        sel=$(echo "$sel" | tr -d ' ') # 去除空格
                        if [[ "$sel" =~ ^[0-9]+$ ]] && [[ -n "${node_array[$sel]}" ]]; then
                            IFS=':' read -ra NODE_PARTS <<< "${node_array[$sel]}"
                            node_id="${NODE_PARTS[0]}"
                            node_type="${NODE_PARTS[1]}"
                            if [[ -n "$selected_nodes" ]]; then
                                selected_nodes="${selected_nodes},${node_id}:${node_type}"
                            else
                                selected_nodes="${node_id}:${node_type}"
                            fi
                        else
                            red "无效的选择: $sel"
                            exit
                        fi
                    done
                fi

                if [[ -z "$selected_nodes" ]]; then
                    red "没有选择有效的节点"
                    exit
                fi

                echo ""
                green "已选择节点: $selected_nodes"
                ;;
            3)
                # 按协议批量上传
                echo ""
                echo "可用协议："
                echo "1. vmess"
                echo "2. vless"
                echo "3. trojan"
                echo "4. shadowsocks"
                echo "5. hysteria"
                echo "6. tuic"
                echo "7. anytls"
                echo "8. 所有协议"
                echo ""
                read -p "请选择协议 (1-8): " protocol_choice

                case $protocol_choice in
                    1) target_protocol="vmess" ;;
                    2) target_protocol="vless" ;;
                    3) target_protocol="trojan" ;;
                    4) target_protocol="shadowsocks" ;;
                    5) target_protocol="hysteria" ;;
                    6) target_protocol="tuic" ;;
                    7) target_protocol="anytls" ;;
                    8) target_protocol="all" ;;
                    *)
                        red "无效的选择"
                        exit
                        ;;
                esac

                # 获取指定协议的所有节点
                if [[ "$target_protocol" == "all" ]]; then
                    protocol_nodes=$(echo "$all_nodes_response" | jq -r '.data[] | "\(.id):\(.type)"')
                else
                    protocol_nodes=$(echo "$all_nodes_response" | jq -r ".data[] | select(.type == \"${target_protocol}\") | \"\(.id):\(.type)\"")
                fi

                if [[ -z "$protocol_nodes" ]]; then
                    red "未找到指定协议的节点"
                    exit
                fi

                selected_nodes=$(echo "$protocol_nodes" | tr '\n' ',' | sed 's/,$//')
                green "将上传到以下节点: $selected_nodes"
                ;;
            *)
                red "无效的选择"
                exit
                ;;
        esac

        # 保存配置
        echo "${panel_address}" > /root/.v2board.config
        echo "${auth_data}" >> /root/.v2board.config
        echo "${selected_nodes}" >> /root/.v2board.config
        echo "${upload_mode}" >> /root/.v2board.config
        echo "${auth_method:-header}" >> /root/.v2board.config
        echo "${secure_path}" >> /root/.v2board.config

        green "配置已保存到 /root/.v2board.config"
    }

    if [[ ! -e "/root/.v2board.config" ]];then
        getConfig
    fi
}

postData() {
    if [[ ! -e "/root/.v2board.config" ]];then
        echo -e "$(red) 缺少配置文件"
        exit
    fi
    if [[ ! -e "/root/media_test_tpl.json" ]];then
        echo -e "$(red) 缺少检测报告文件"
        exit
    fi

    panel_address=$(sed -n 1p /root/.v2board.config)
    auth_data=$(sed -n 2p /root/.v2board.config)
    selected_nodes=$(sed -n 3p /root/.v2board.config)
    upload_mode=$(sed -n 4p /root/.v2board.config)
    auth_method=$(sed -n 5p /root/.v2board.config)
    secure_path=$(sed -n 6p /root/.v2board.config)

    # 检查文件是否为空
    if [[ ! -s "/root/media_test_tpl.json" ]]; then
        log "ERROR" "检测报告文件为空，重新创建"
        createJsonTemplate
        runCheck
    fi

    log "INFO" "正在获取所有节点信息..."

    # 获取所有节点信息
    api_url="${panel_address}/api/v1/${secure_path}/server/manage/getNodes"
    if [[ "$auth_method" == "param" ]]; then
        all_servers_response=$(curl -s "${api_url}?auth_data=${auth_data}")
    else
        all_servers_response=$(curl -s -H "Authorization: ${auth_data}" "${api_url}")
    fi

    if [[ -z "$all_servers_response" ]] || ! echo "$all_servers_response" | jq -e '.data' > /dev/null 2>&1; then
        log "ERROR" "无法获取节点信息"
        echo -e "$(red) 无法获取节点信息，请检查配置"
        exit
    fi

    # 读取检测结果
    unlock_data=$(cat /root/media_test_tpl.json)
    echo "解锁检测原始数据: $unlock_data"

    # 构建解锁信息标签（简单字符串格式，兼容现有格式）
    unlock_tags=()

    # 生成解锁标签函数
    generateUnlockTags() {

        # 解析解锁结果并生成标签（使用原始检测结果格式）
        netflix_status=$(echo "$unlock_data" | jq -r '.Netflix // "Unknown"')
        echo "Netflix状态: $netflix_status"
        if [[ "$netflix_status" =~ ^Yes ]]; then
            unlock_tags+=("Netflix:$netflix_status")
            echo "添加标签: Netflix:$netflix_status"
        fi

        disney_status=$(echo "$unlock_data" | jq -r '.DisneyPlus // "Unknown"')
        echo "Disney+状态: $disney_status"
        if [[ "$disney_status" =~ ^Yes ]]; then
            unlock_tags+=("Disney+:$disney_status")
            echo "添加标签: Disney+:$disney_status"
        fi

        youtube_status=$(echo "$unlock_data" | jq -r '.YouTube // "Unknown"')
        echo "YouTube状态: $youtube_status"
        if [[ "$youtube_status" =~ ^Yes ]]; then
            unlock_tags+=("YouTube:$youtube_status")
            echo "添加标签: YouTube:$youtube_status"
        fi

        openai_status=$(echo "$unlock_data" | jq -r '.OpenAI // "Unknown"')
        echo "OpenAI状态: $openai_status"
        if [[ "$openai_status" =~ ^Yes ]]; then
            unlock_tags+=("OpenAI:$openai_status")
            echo "添加标签: OpenAI:$openai_status"
        fi

        bahamut_status=$(echo "$unlock_data" | jq -r '.BahamutAnime // "Unknown"')
        echo "动画疯状态: $bahamut_status"
        if [[ "$bahamut_status" =~ ^Yes ]]; then
            unlock_tags+=("Bahamut:$bahamut_status")
            echo "添加标签: Bahamut:$bahamut_status"
        fi

        # 添加其他检测到的解锁服务
        discovery_status=$(echo "$unlock_data" | jq -r '.DiscoveryPlus // "Unknown"')
        echo "Discovery+状态: $discovery_status"
        if [[ "$discovery_status" =~ ^Yes ]]; then
            unlock_tags+=("Discovery+:$discovery_status")
            echo "添加标签: Discovery+:$discovery_status"
        fi

        paramount_status=$(echo "$unlock_data" | jq -r '.ParamountPlus // "Unknown"')
        echo "Paramount+状态: $paramount_status"
        if [[ "$paramount_status" =~ ^Yes ]]; then
            unlock_tags+=("Paramount+:$paramount_status")
            echo "添加标签: Paramount+:$paramount_status"
        fi

        echo "生成的解锁标签数组: ${unlock_tags[@]}"
    }

    # 生成解锁标签
    generateUnlockTags

    # 询问用户如何处理已有的解锁信息
    echo ""
    echo "=========================================="
    echo "           解锁信息处理方式"
    echo "=========================================="
    echo "检测到将要上传解锁信息到节点，请选择处理方式："
    echo "1. 覆盖模式 - 清除节点现有解锁标签，只保留新检测的解锁信息"
    echo "2. 合并模式 - 保留节点现有解锁标签，添加新检测的解锁信息"
    echo "3. 更新模式 - 只更新相同服务的解锁状态，保留其他解锁信息"
    echo ""
    read -p "请选择处理方式 (1-3): " unlock_mode

    case $unlock_mode in
        1)
            unlock_process_mode="override"
            green "已选择覆盖模式：将清除现有解锁标签"
            ;;
        2)
            unlock_process_mode="merge"
            green "已选择合并模式：将保留现有解锁标签并添加新的"
            ;;
        3)
            unlock_process_mode="update"
            green "已选择更新模式：将更新相同服务的解锁状态"
            ;;
        *)
            red "无效的选择，默认使用更新模式"
            unlock_process_mode="update"
            ;;
    esac

    # 上传单个节点的函数
    uploadToSingleNode() {
        local node_id=$1
        local node_type=$2

        echo ""
        echo "=========================================="
        echo "正在处理节点: ID=$node_id, 类型=$node_type"
        echo "=========================================="

        # 获取当前节点信息
        current_server=$(echo "$all_servers_response" | jq -r ".data[] | select(.id == ${node_id} and .type == \"${node_type}\")")

        if [[ -z "$current_server" ]]; then
            red "未找到节点 (ID: ${node_id}, 类型: ${node_type})"
            return 1
        fi

        node_name=$(echo "$current_server" | jq -r '.name')
        echo "节点名称: $node_name"

        # 获取现有的tags，如果为null或空则设为空数组
        current_tags=$(echo "$current_server" | jq -r '.tags // []')
        if [[ "$current_tags" == "null" ]] || [[ -z "$current_tags" ]]; then
            current_tags="[]"
        fi

        echo "当前tags: $current_tags"

        # 删除现有的解锁相关标签，保留用户自定义标签（每日更新，保持最新状态）
        filtered_tags=$(echo "$current_tags" | jq '[.[] | select(. | test("(Netflix|Disney\\+|YouTube|OpenAI|Bahamut|Discovery\\+|Paramount\\+):") | not)]')
        echo "删除旧解锁标签后的用户标签: $filtered_tags"

        # 添加新的解锁标签
        new_tags="$filtered_tags"
        for tag in "${unlock_tags[@]}"; do
            new_tags=$(echo "$new_tags" | jq --arg tag "$tag" '. + [$tag]')
        done

        echo "合并后的完整tags: $new_tags"

        # 提取所有必需的字段
        server_data=$(echo "$current_server" | jq --argjson new_tags "$new_tags" '. + {tags: $new_tags}')

        # 调用V2Board现有的服务器保存API
        save_url="${panel_address}/api/v1/${secure_path}/server/${node_type}/save"
        echo "保存URL: $save_url"

        if [[ "$auth_method" == "param" ]]; then
            server_data_with_auth=$(echo "$server_data" | jq --arg auth_data "$auth_data" '. + {auth_data: $auth_data}')
            curl -s -X POST \
                -H "Content-Type: application/json" \
                -d "$server_data_with_auth" \
                "${save_url}" > "/root/.v2board.response.${node_id}"
        else
            curl -s -X POST \
                -H "Content-Type: application/json" \
                -H "Authorization: ${auth_data}" \
                -d "$server_data" \
                "${save_url}" > "/root/.v2board.response.${node_id}"
        fi

        # 检查响应
        response=$(cat "/root/.v2board.response.${node_id}")
        echo "API响应: $response"

        if echo "$response" | grep -q '"data"'; then
            green "✓ 节点 $node_name (ID: $node_id) 解锁信息上传成功"
            return 0
        else
            red "✗ 节点 $node_name (ID: $node_id) 解锁信息上传失败"
            echo "错误信息: $response"
            return 1
        fi
    }

    # 处理多节点上传
    echo ""
    echo "=========================================="
    echo "注意：脚本将删除节点现有的解锁标签，"
    echo "      只保留最新检测的解锁信息，"
    echo "      用户自定义标签不会被影响。"
    echo "=========================================="
    echo ""

    log "INFO" "开始批量上传解锁信息..."

    success_count=0
    fail_count=0

    # 解析节点列表并逐个上传
    IFS=',' read -ra NODES <<< "$selected_nodes"
    for node_entry in "${NODES[@]}"; do
        IFS=':' read -ra NODE_INFO <<< "$node_entry"
        node_id="${NODE_INFO[0]}"
        node_type="${NODE_INFO[1]}"

        if uploadToSingleNode "$node_id" "$node_type"; then
            ((success_count++))
        else
            ((fail_count++))
        fi
    done

    echo ""
    echo "=========================================="
    echo "批量上传完成"
    echo "成功: $success_count 个节点"
    echo "失败: $fail_count 个节点"
    echo "=========================================="

    if [[ $success_count -gt 0 ]]; then
        log "INFO" "批量上传部分或全部成功"
        echo -e "$(green) 成功上传 $success_count 个节点的解锁信息"
    fi

    if [[ $fail_count -gt 0 ]]; then
        log "ERROR" "部分节点上传失败"
        echo -e "$(red) $fail_count 个节点上传失败，请检查日志"
    fi

    # 清理临时文件
    rm -rf /root/media_test_tpl.json /root/.v2board.response.*
}

printInfo() {
    green_start='\033[32m'
    color_end='\033[0m'

    echo
    echo -e "${green_start}流媒体解锁检测已完成${color_end}"
    echo -e "${green_start}日志文件路径：${LOG_FILE}${color_end}"
    if [[ -f "$UNLOCK_CONFIG_FILE" ]]; then
        echo -e "${green_start}DNS配置文件路径：${UNLOCK_CONFIG_FILE}${color_end}"
    fi
    echo
}

runCheck() {
    log "INFO" "开始进行流媒体解锁检测"
    # 确保在开始检测前创建模板文件
    createJsonTemplate
    MediaUnlockTest_Netflix 4
    MediaUnlockTest_DisneyPlus 4
    MediaUnlockTest_DiscoveryPlus 4
    MediaUnlockTest_ParamountPlus 4
    MediaUnlockTest_BahamutAnime 4
    OpenAiUnlockTest
    MediaUnlockTest_YouTube_Premium 4
    log "INFO" "流媒体解锁检测完成"
}

checkData() {
    counter=0
    max_check_num=3
    log "INFO" "开始检查数据完整性"
    
    # 检查文件是否存在
    if [[ ! -f "/root/media_test_tpl.json" ]]; then
        log "ERROR" "检测报告文件不存在，重新创建"
        createJsonTemplate
        runCheck
        return
    fi
    
    cat /root/media_test_tpl.json | grep "_result" > /dev/null
    until [ $? != '0' ]  || [[ ${counter} -ge ${max_check_num} ]]
    do
        sleep 1
        log "WARN" "数据异常，第 ${counter} 次重新检测"
        createJsonTemplate  # 重新创建模板
        runCheck > /dev/null
        echo -e "\033[33m数据异常，正在行第 ${counter} 次重新检测...${Font_Suffix}"
        counter=$(expr ${counter} + 1)
    done
    log "INFO" "数据完整性检查完成"
}

main() {
    echo
    log "INFO" "脚本开始执行"
    
    # 检查并创建日志目录
    if [[ ! -f "$LOG_FILE" ]]; then
        touch "$LOG_FILE"
        log "INFO" "创建日志文件"
    fi
    
    # 设置出时清理操作
    trap cleanup EXIT
    
    # 如果是仅配置模式
    if [[ "$CONFIG_ONLY" == "1" ]]; then
        rm -f "$UNLOCK_CONFIG_FILE"  # 删除现有配置
        configureUnlock  # 重新配置
        green "配置完成"
        exit 0
    fi
    
    checkOS
    checkCPU
    checkDependencies
    configureUnlock
    # 只在非跳过配置模式下设置定时任务
    if [[ "$SKIP_CONFIG" != "1" ]]; then
        setCronTask
    fi
    checkConfig
    runCheck
    checkData
    postData
    printInfo
    
    log "INFO" "脚本执行完成"
}

main
