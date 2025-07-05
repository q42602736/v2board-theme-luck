window.V2BOARD_CONFIG = {
  DEFAULT_API_URL: '', // 后端API地址

  // 应用标题
  APP_TITLE: '',

  // 落地页配置
  LANDING_PAGE: {
    // 是否启用落地页
    ENABLED: false,

    // 落地页主题选择
    // 可选值：'malio', 'zhujike', 'cool', 'wukong'
    // 'malio' - Malio 主题落地页（现代商务风格）
    // 'zhujike' - Zhujike 主题落地页（3D视觉效果，萌系风格）
    // 'cool' - Cool 主题落地页（动画效果，商务风格）
    // 'wukong' - Wukong 主题落地页（现代商务风格，完整功能）
    THEME: '',

    // 当禁用落地页时的重定向路径
    // 如果 ENABLED 为 false，访问首页将重定向到此路径
    REDIRECT_PATH: '/login',

    // 落地页主题配置
    THEMES: {
      malio: {
        name: 'Malio 主题'
      },
      default: {
        name: '默认主题'
      },
      minimal: {
        name: '极简主题'
      },
      modern: {
        name: '现代主题'
      }
    }
  },


  


  // 头像配置
  AVATAR: {
    // 使用简洁的首字母头像
    STYLE: 'letter',

    // 头像说明
    DESCRIPTION: '基于用户邮箱生成的首字母头像，简洁美观'
  },

  // Logo配置
  LOGO: {
    // 自定义logo图片URL，留空则不显示图片logo
    IMAGE_URL: '',

    // 备用logo图片URL（当主logo加载失败时使用）
    FALLBACK_IMAGE_URL: '',

    // logo图片的alt文本
    ALT_TEXT: 'Logo',

    // logo点击跳转链接（可选，留空则不跳转）
    CLICK_URL: '',

    // 是否在新窗口打开链接
    OPEN_IN_NEW_TAB: false,

    // logo图片的最大宽度（像素）
    MAX_WIDTH: 200,

    // logo图片的最大高度（像素）
    MAX_HEIGHT: 82,

    // 是否显示文字logo（当没有图片logo时可以显示文字作为logo）
    SHOW_TEXT_LOGO: false,

    // 文字logo内容（作为主要logo显示，通常是品牌名称）
    TEXT_LOGO: '',

    // 文字logo字体大小（像素）
    // 推荐范围：18-32px，常用：24-28px
    TEXT_LOGO_FONT_SIZE: 24,

    // 文字logo字体粗细
    // 可选值：'300'(细体), '400'(正常), '500'(中等), '600'(半粗), '700'(粗体), '800'(特粗)
    TEXT_LOGO_FONT_WEIGHT: '600',

    // 文字logo颜色
    TEXT_LOGO_COLOR: '#1d1d1f',

    // 是否显示logo下方的描述文字
    SHOW_TEXT: false,

    // logo下方显示的描述文字内容
    TEXT: '',

    // 描述文字字体大小（像素）
    // 推荐范围：10-16px，常用：12-14px
    FONT_SIZE: 13,

    // 文字字体样式 - 可选字体如下：
    // 'Inter'          - 现代几何字体，极佳可读性 (推荐) 示例：Modern Design
    // 'SF Pro'         - Apple系统字体，iOS原生体验    示例：Apple Style
    // 'Poppins'        - 圆润友好字体，现代感强       示例：Creative Hub
    // 'Nunito'         - 温暖圆润字体，亲和力强       示例：Friendly Service
    // 'Montserrat'     - 经典无衬线，专业权威感       示例：Professional Corp
    // 'Roboto'         - Google设计，简洁现代        示例：Tech Innovation
    // 'Open Sans'      - 开放友好字体，通用性强       示例：Open Platform
    // 'Lato'           - 人文主义字体，优雅平衡       示例：Elegant Brand
    // 'Source Sans Pro'- Adobe设计，技术感强         示例：Developer Tools
    // 'Fira Sans'      - Mozilla设计，清晰锐利       示例：Digital Future
    FONT_FAMILY: 'Inter'
  },

  // 登录页面Logo配置
  LOGIN_LOGO: {
    // 是否启用登录页面的logo显示
    ENABLED: false,

    // 登录页面logo图片URL，留空则使用LOGO.IMAGE_URL
    IMAGE_URL: '',

    // 登录页面logo备用图片URL
    FALLBACK_IMAGE_URL: '',

    // 登录页面logo的alt文本
    ALT_TEXT: 'Login Logo',

    // 登录页面logo的最大宽度（像素）
    MAX_WIDTH: 200,

    // 登录页面logo的最大高度（像素）
    MAX_HEIGHT: 40,

    // 登录页面logo的圆角大小（像素）
    BORDER_RADIUS: 15,

    // 是否显示文字LOGO（应用名称）
    SHOW_TEXT_LOGO: false,

    // 文字LOGO的字体大小（像素）
    TEXT_FONT_SIZE: 28,

    // 文字LOGO的字体粗细
    // 可选值：'300'(细体), '400'(正常), '500'(中等), '600'(半粗), '700'(粗体), '800'(特粗)
    TEXT_FONT_WEIGHT: '600',

    // 文字LOGO的颜色
    TEXT_COLOR: '#d5e8f9',

    // 文字LOGO与图片LOGO的间距（像素）
    TEXT_MARGIN_TOP: 16,

    // 登录页面副标题配置
    LOGIN_SUBTITLE: {
      // 是否显示登录页面副标题
      ENABLED: true,

      // 副标题文字内容
      TEXT: '登录账户',

      // 副标题字体大小（像素）
      FONT_SIZE: 18,

      // 副标题字体粗细
      FONT_WEIGHT: '500',

      // 是否启用流光动画效果
      ENABLE_SHIMMER: true
    },

    // 注册页面副标题配置
    REGISTER_SUBTITLE: {
      // 是否显示注册页面副标题
      ENABLED: true,

      // 副标题文字内容
      TEXT: '创建新账户',

      // 副标题字体大小（像素）
      FONT_SIZE: 18,

      // 副标题字体粗细
      FONT_WEIGHT: '500',

      // 是否启用流光动画效果
      ENABLE_SHIMMER: true
    },

    // 服务条款配置
    TERMS_OF_SERVICE: {
      // 是否显示服务条款同意
      ENABLED: true,

      // 服务条款标题
      TITLE: '服务条款',

      // 服务条款内容（支持HTML格式）
      CONTENT: `
        <h3>1. 服务说明</h3>
        <p>本服务为网络加速服务，旨在为用户提供更好的网络体验。</p>

        <h3>2. 用户责任</h3>
        <p>用户应当：</p>
        <ul>
          <li>遵守当地法律法规</li>
          <li>不得用于违法违规活动</li>
          <li>保护账户安全，不得与他人共享</li>
          <li>合理使用服务，不得恶意占用资源</li>
        </ul>

        <h3>3. 服务限制</h3>
        <p>我们保留在以下情况下限制或终止服务的权利：</p>
        <ul>
          <li>违反服务条款</li>
          <li>从事违法违规活动</li>
          <li>恶意攻击服务器</li>
          <li>长期不活跃账户</li>
        </ul>

        <h3>4. 隐私保护</h3>
        <p>我们承诺保护用户隐私，不会泄露用户个人信息。我们会收集必要的使用数据以改善服务质量。</p>

        <h3>5. 免责声明</h3>
        <p>本服务按"现状"提供，我们不对服务的可用性、稳定性做出保证。用户使用本服务的风险由用户自行承担。</p>

        <h3>6. 条款变更</h3>
        <p>我们保留随时修改本服务条款的权利。条款变更后，继续使用服务即视为同意新的条款。</p>

        <p><strong>最后更新时间：2025年7月3日</strong></p>
      `,

      // 同意文本
      AGREEMENT_TEXT: '注册即代表同意',

      // 链接文本
      LINK_TEXT: '服务条款',

      // 链接颜色
      LINK_COLOR: '#007AFF'
    },

    // 验证码配置
    // 注意：当前使用的是测试密钥，可在本地和任何域名测试
    // 生产环境请替换为您自己申请的密钥
    CAPTCHA: {
      // 全局验证码服务选择：'none' | 'turnstile' | 'recaptcha'
      SERVICE: 'none',

      // 页面级别的验证码控制
      PAGES: {
        LOGIN: true,      // 登录页面是否启用验证码
        REGISTER: true    // 注册页面是否启用验证码
      },

      // Cloudflare Turnstile 配置
      TURNSTILE: {
        // Turnstile Site Key
        SITE_KEY: '',

        // Turnstile Secret Key（
        SECRET_KEY: '',

        // 主题：'light' | 'dark' | 'auto'
        THEME: 'auto',

        // 尺寸：'normal' | 'compact' | 'flexible'
        SIZE: 'flexible'
      },

      // Google reCAPTCHA 配置
      RECAPTCHA: {
        // reCAPTCHA Site Key
        SITE_KEY: '',

        // reCAPTCHA Secret Key
        SECRET_KEY: '',

        // 主题：'light' | 'dark'
        THEME: 'light',

        // 尺寸：'normal' | 'compact'
        SIZE: 'normal'
      }
    }
  },

  // ==================== Logo字体配置示例 ====================
  // 以下是不同风格的字体配置示例，可以直接复制到上面的LOGO配置中使用：

  /* 字体风格示例：

  🔥 科技风格 - Inter字体
  TEXT: '未来科技', FONT_FAMILY: 'Inter', FONT_SIZE: 14

  🍎 Apple风格 - SF Pro字体
  TEXT: '极简设计', FONT_FAMILY: 'SF Pro', FONT_SIZE: 13

  🎨 创意风格 - Poppins字体
  TEXT: '创意无限', FONT_FAMILY: 'Poppins', FONT_SIZE: 15

  🏢 企业风格 - Montserrat字体
  TEXT: '专业服务', FONT_FAMILY: 'Montserrat', FONT_SIZE: 12

  😊 友好风格 - Nunito字体
  TEXT: '贴心服务', FONT_FAMILY: 'Nunito', FONT_SIZE: 14

  ⚡ 极客风格 - Fira Sans字体
  TEXT: '代码世界', FONT_FAMILY: 'Fira Sans', FONT_SIZE: 13

  🌟 优雅风格 - Lato字体
  TEXT: '优雅品质', FONT_FAMILY: 'Lato', FONT_SIZE: 13

  🚀 现代风格 - Roboto字体
  TEXT: '科技创新', FONT_FAMILY: 'Roboto', FONT_SIZE: 13

  📖 开放风格 - Open Sans字体
  TEXT: '开放平台', FONT_FAMILY: 'Open Sans', FONT_SIZE: 13

  💻 开发风格 - Source Sans Pro字体
  TEXT: '开发工具', FONT_FAMILY: 'Source Sans Pro', FONT_SIZE: 12
  */
  
  // 功能开关
  FEATURES: {
    // 是否启用邀请功能
    INVITE_ENABLED: true,

    // 是否启用工单功能
    TICKET_ENABLED: true,

    // 是否启用礼品卡功能
    GIFTCARD_ENABLED: true,

    // 是否启用充值功能（控制充值按钮和相关模态框的显示）
    RECHARGE_ENABLED: true,

    // 是否启用流量明细功能
    TRAFFIC_DETAILS_ENABLED: true
  },

  get CLIENTS() {
    return window.V2BOARD_CLIENTS || {}
  }
}

// 应用配置到页面标题
if (window.V2BOARD_CONFIG.APP_TITLE) {
  document.title = window.V2BOARD_CONFIG.APP_TITLE
}
