# V2Board Theme Luck

<div align="center">

![V2Board Theme Luck](https://img.shields.io/badge/V2Board-Theme_Luck-blue?style=for-the-badge)
![Vue 3](https://img.shields.io/badge/Vue-3.4+-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Naive UI](https://img.shields.io/badge/Naive_UI-2.38+-18A058?style=for-the-badge)

[![Telegram](https://img.shields.io/badge/Telegram-Theme_Luck-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/fluentboard666)

# 🎨 V2board NexGen 主题

> 全新前端主题已正式发布！为您的V2board带来现代化的用户体验

## ✨ 主题特色

- 🚀 现代化设计语言
- 📱 完美响应式布局
- 🎯 优化用户体验
- ⚡ 高性能加载

## 🛒 商务咨询

**新主题现已发布，欢迎各位老板咨询！**

📞 **联系方式**
- 项目地址：[V2board-theme-NexGen](https://github.com/q42602736/V2board-theme-NexGen-)
- 技术支持：随时为您服务


**现代化的 V2Board 主题 - Luck**

一个基于 Vue 3 + TypeScript + Naive UI 构建的现代化 V2Board 主题项目，理论支持V2BOARD和Xboard（未测试），提供优雅的用户体验和完整的功能支持。

[在线演示](https://demo.example.com) · [文档](https://docs.example.com) · [问题反馈](https://github.com/your-username/v2board-theme-luck/issues) · [📢 TG频道](https://t.me/fluentboard666)

# 面板魔改服务

🔧 **提供各种老旧面板魔改服务，支持对接各种最新协议：**  
- **VLESS + Reality**  
- **HYSTERIA2**
- **AnyTLS等各种协议**

✨ **同时支持各种后端的魔改，满足您的需求！**  
💰 **价格好商量，具体请联系我！**

### 联系方式
- 个人 Telegram: [@alexlilu](https://t.me/alexlilu)
- Telegram 群: [t.me/fluentboard666](https://t.me/fluentboard666)

欢迎随时联系我，期待与您合作！



</div>

## ✨ 特性

### 🎨 现代化设计
- **iOS 风格界面** - 采用 Apple 设计语言，精致的视觉效果
- **响应式布局** - 完美适配桌面端和移动端
- **暗色模式支持** - 自动适应系统主题
- **流畅动画** - 精心设计的过渡效果和交互动画

### 📱 移动端优化
- **原生体验** - 针对移动端深度优化的交互设计
- **大屏适配** - 支持各种大屏手机（iPhone 14 Pro Max 等）
- **触摸友好** - 优化的触摸交互和手势支持
- **PWA 支持** - 可安装为原生应用

### 🛠️ 技术特性
- **Vue 3 Composition API** - 现代化的 Vue 开发体验
- **TypeScript** - 完整的类型安全支持
- **Vite 构建** - 极速的开发和构建体验
- **Pinia 状态管理** - 轻量级的状态管理方案

### 🔧 功能完整
- **用户管理** - 注册、登录、个人资料管理
- **订阅管理** - 套餐购买、订单管理、流量统计
- **节点管理** - 服务器列表、实时状态监控
- **工单系统** - 完整的客服支持系统
- **邀请系统** - 推广奖励和佣金管理
- **支付集成** - 多种支付方式支持

### ⚙️ 配置灵活
- **功能开关** - 可配置的功能模块开关
- **主题定制** - 支持多种主题和自定义配色
- **API 配置** - 灵活的后端 API 配置
- **部署友好** - 支持静态部署和动态配置
- **配置安全** - API配置系统，配置文件隐藏保护，安全可靠

## 📸 项目截图

以下是项目的主要功能页面展示，展现了现代化的 iOS 风格设计和完整的功能体验：

<div align="center">

### 🎯 用户仪表板
*现代化的用户中心，展示余额信息和客户端下载*

![用户仪表板](screenshots/dashboard.png)

### 🌐 全球节点分布
*直观的世界地图展示，实时监控全球服务器状态*

![全球节点分布](screenshots/servers.png)

### 📋 订单管理
*完整的订单管理系统，支持多种套餐和支付方式*

![订单管理](screenshots/orders.png)

### 💰 邀请推广
*强大的推广系统，实时统计佣金和邀请数据*

![邀请推广](screenshots/invite.png)

</div>



## 🎨 落地页主题定制

项目支持多种落地页主题定制方式：包括移植的sspanel的主题malio、zhujike、cool、wukong


### 组件主题

使用 Naive UI 的主题定制功能：

```typescript
import { darkTheme } from 'naive-ui'

// 在组件中使用
<n-config-provider :theme="darkTheme">
  <App />
</n-config-provider>
```

## 📱 移动端特性

### 响应式断点

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### 移动端组件

项目包含专门的移动端组件：

- `MobileDashboardLayout` - 移动端布局
- `MobileSheet` - 移动端弹出层
- `MobileActionButtons` - 移动端操作按钮


#### 1. 静态部署

##### 宝塔面板部署（推荐）

宝塔面板是最简单的部署方式，适合新手和快速部署：

**步骤 1：创建站点**
1. 登录宝塔面板
2. 点击 `网站` → `添加站点`
3. 填写域名（如：`your-domain.com`）
4. 选择 `PHP版本`：纯静态（或任意版本）
5. 点击 `提交` 创建站点

**步骤 2：上传文件**
1. 在网站列表中找到刚创建的站点
2. 点击 `根目录` 进入文件管理
3. 删除默认的 `index.html` 等文件
4. 将构建后的 `dist` 目录中的所有文件上传到网站根目录
   ```
   网站根目录/
   ├── index.html
   ├── flags
   ├── server
   ├── assets
   ├── theme
   └── ...
   ```

#### 3. 配置Nginx
1. 点击网站「设置」→「配置文件」
2. 在`server`块中添加以下配置：

```nginx
# API代理配置
location /api/ {
    proxy_pass http://localhost:3001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}

# 安全配置：禁止访问server目录（重要！）
location ^~ /server/ {
    return 403;
}

# 伪静态配置（Vue Router支持）
location / {
    try_files $uri $uri/ /index.html;
}
```
3. 点击 `保存`

**步骤 4：SSL 配置（可选但推荐）**
1. 在网站设置中点击 `SSL`
2. 选择 `Let's Encrypt` 免费证书
3. 点击 `申请` 并等待证书颁发
4. 开启 `强制HTTPS`

## ⚙️ 配置说明

### API配置系统（推荐）

项目采用API配置系统，配置文件通过后端API提供，更加安全可靠：

#### 配置文件位置
编辑 `server/config.json` 文件：

```json
{
  "API_CONFIG": {
    "ENABLED": true,
    "DEFAULT_API_URL": "https://your-api-domain.com",
    "APP_TITLE": "Your App Name",
    "FEATURES": {
      "INVITE_ENABLED": true,
      "TICKET_ENABLED": true,
      "GIFTCARD_ENABLED": true,
      "RECHARGE_ENABLED": true,
      "TRAFFIC_DETAILS_ENABLED": true
    }
  }
}
```

#### API配置优势
- **安全性**: 配置文件不暴露在前端，无法直接访问
- **动态性**: 支持实时更新配置，无需重新构建
- **集中管理**: 所有配置集中在服务器端管理
- **权限控制**: 可配置访问权限和CORS策略


```javascript
window.V2BOARD_CONFIG = {
  // API 地址配置
  DEFAULT_API_URL: 'https://your-api-domain.com',

  // 应用标题
  APP_TITLE: 'Your App Name',

  // 功能开关
  FEATURES: {
    INVITE_ENABLED: true,           // 邀请功能
    TICKET_ENABLED: true,           // 工单功能
    GIFTCARD_ENABLED: true,         // 礼品卡功能
    RECHARGE_ENABLED: true,         // 充值功能
    TRAFFIC_DETAILS_ENABLED: true   // 流量明细功能
  }
}
```
### 🔒 API配置安全隐藏

为了保护配置文件中的敏感信息（如 API 地址、密钥等），项目提供了基于API的配置隐藏功能，将配置文件从前端隐藏，通过后端API接口提供配置数据。

#### 1. API配置部署（推荐）

使用API配置系统可以有效保护配置文件安全，配置通过后端API提供：
**1. API配置部署**
```bash
# 进入项目目录
cd /www/wwwroot/your-domain.com

# 给启动脚本执行权限
chmod +x start.sh

# 启动一键安装脚本
./start.sh

📊 管理命令:"
查看状态: pm2 status"

查看日志: pm2 logs v2board-api"

停止服务: pm2 stop v2board-api"

重启服务: pm2 restart v2board-api"

删除进程: pm2 delete v2board-api"
```
**2. 配置管理**

要更改配置，直接编辑项目 `server/config.json` 文件：

```bash
# 编辑配置文件
nano /www/wwwroot/your-domain.com/server/config.json

# 配置更改后使用pm2 restart v2board-api进行重启后生效
```


## 🎬 流媒体解锁检测脚本

项目内置了强大的流媒体解锁检测脚本 `v2board.sh`，支持自动检测节点的流媒体解锁状态并同步到V2Board面板。

### 🌟 脚本特性

- **多平台支持**: Netflix、Disney+、YouTube Premium、Discovery+、Paramount+、Bahamut动画疯、OpenAI
- **智能DNS解锁**: 支持为每个流媒体服务配置专用DNS服务器
- **自动同步**: 检测结果自动同步到V2Board节点标签
- **定时检测**: 支持设置定时任务，自动定期检测
- **详细日志**: 完整的检测日志记录，便于问题排查
- **V2Board集成**: 原生支持V2Board面板，无缝集成

### 📋 使用方法

#### 1. 基础使用

```bash
# 一键下载并运行脚本（推荐方式）
bash <(wget -qO- https://raw.githubusercontent.com/q42602736/v2board-theme-luck/main/v2board.sh)
```

#### 2. 手动下载使用

```bash
# 下载脚本到服务器
wget https://raw.githubusercontent.com/q42602736/v2board-theme-luck/main/v2board.sh
chmod +x v2board.sh

# 首次运行（会引导配置）
./v2board.sh

# 跳过配置直接检测（使用已有配置）
./v2board.sh -S
```

#### 3. 配置流媒体解锁DNS

首次运行脚本时，会提示配置各个流媒体服务的解锁DNS：

```bash
流媒体解锁 DNS 配置
----------------------------------------
请为每个流媒体服务设置解锁 DNS 服务器地址
支持以下格式：
1. IPv4 地址，例如: 1.1.1.1
2. DNS服务器域名，例如: dns.example.com
回车使用系统默认 DNS
----------------------------------------

Netflix 解锁 DNS [回车使用系统默认]: 8.8.8.8
Disney+ 解锁 DNS [回车使用系统默认]: 1.1.1.1
YouTube Premium 解锁 DNS [回车使用系统默认]:
...
```

#### 4. V2Board面板配置

脚本会自动引导您配置V2Board面板连接：

```bash
V2Board 流媒体解锁检测配置
----------------------------------------
请输入V2Board面板地址 (例如: https://demo.v2board.com): https://your-panel.com
请输入管理员邮箱: admin@example.com
请输入管理员密码: your-password

# 选择节点类型
可用的节点类型:
1. vmess
2. vless
3. trojan
4. shadowsocks
5. hysteria
6. tuic
7. anytls

请选择节点类型 (输入数字 1-7): 1

# 选择具体节点
可用的 vmess 节点:
ID: 1 - 香港节点01
ID: 2 - 美国节点01
ID: 3 - 日本节点01

请输入节点ID: 1
```

#### 5. 设置定时任务

脚本支持自动设置定时检测任务：

```bash
设置自动检测任务
----------------------------------------
请选择检测频率：
[1] 每 1 分钟
[2] 每 1 小时
[3] 每 2 小时
[4] 每 3 小时
[5] 每 4 小时
[6] 每 6 小时
[7] 每 8 小时
[8] 每 12 小时
[9] 每 24 小时
[0] 不设置定时任务
----------------------------------------
请输入数字 [0-9]: 6
```

### 🔧 高级参数

脚本支持多种命令行参数：

```bash
# 指定网络接口
./v2board.sh -I eth0

# 指定IP版本（4或6）
./v2board.sh -M 4

# 使用英文输出
./v2board.sh -E

# 指定代理
./v2board.sh -P socks5://127.0.0.1:1080

# 指定X-Forwarded-For IP
./v2board.sh -X 1.2.3.4

# 跳过配置（使用已有配置）
./v2board.sh -S

# 仅配置不检测
./v2board.sh -C
```

### 📊 检测结果

检测完成后，结果会自动同步到V2Board面板的节点标签中：

```
节点标签示例：
- Netflix:Yes (Region: US)
- Disney+:Yes (Region: US)
- YouTube Premium:Yes (Region: US)
- OpenAI:Yes (Region: US)
```

### 📝 配置文件

脚本会在以下位置创建配置文件：

- **DNS配置**: `/root/.unlock_config` - 存储各流媒体服务的DNS配置
- **面板配置**: `/root/.v2board.config` - 存储V2Board面板连接信息
- **检测日志**: `/root/media_unlock.log` - 详细的检测日志
- **检测结果**: `/root/media_test_tpl.json` - JSON格式的检测结果

### 🔄 管理定时任务

```bash
# 查看当前定时任务
crontab -l

# 删除解锁检测定时任务
crontab -l | grep -v v2board.sh | crontab -

# 手动添加定时任务（每6小时检测一次）
echo "0 */6 * * * /bin/bash /root/v2board.sh -S" >> /var/spool/cron/root
```

### 🛠️ 故障排除

#### 常见问题

1. **jq工具未安装**
   ```bash
   # Ubuntu/Debian
   apt update && apt install jq

   # CentOS/RHEL
   yum install epel-release && yum install jq
   ```

2. **DNS解析失败**
   - 检查DNS服务器是否可用
   - 尝试使用其他DNS服务器
   - 检查网络连接

3. **V2Board API连接失败**
   - 确认面板地址正确
   - 检查管理员账户权限
   - 确认API接口可用

4. **检测结果不准确**
   - 查看详细日志：`tail -f /root/media_unlock.log`
   - 尝试手动检测单个服务
   - 检查代理设置

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 Vue 3 Composition API 最佳实践
- 保持代码简洁和可读性
- 添加必要的注释和文档

## 💬 社区与支持



### 🤝 获取帮助
- **问题反馈**: 在 [GitHub Issues](https://github.com/q42602736/v2board-theme-luck/issues) 提交 Bug 报告或功能请求
- **技术讨论**: 加入我们的 Telegram 频道参与技术讨论
- **文档支持**: 查看项目文档获取详细的使用指南


## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Naive UI](https://www.naiveui.com/) - Vue 3 组件库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐️**

Made with ❤️ by [q42602736](https://github.com/q42602736)

</div>
