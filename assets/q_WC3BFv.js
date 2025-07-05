import { k as defineComponent, $ as createElementBlock, a0 as createBaseVNode, U as openBlock, a1 as createStaticVNode, c as computed, R as createBlock, V as withCtx, S as resolveComponent, W as createVNode, j as createTextVNode, r as ref, e as reactive, o as onMounted, a5 as useRouter, a3 as createCommentVNode, a2 as toDisplayString, N as unref, a7 as withModifiers, F as Fragment, Q as renderList, T as Teleport, I as normalizeStyle, L as normalizeClass, a9 as useCssVars } from "./DM1yaN1X.js";
import { M as MailOutline, L as LockClosedOutline, C as CaptchaWidget, c as customMessage } from "./ByaxWMaA.js";
import { u as useAuthStore, a as apiClient } from "./BBbuoBq5.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import { u as useMessage } from "./BEq_qS6Y.js";
import "./0I8bmyai.js";
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M336 176L225.2 304L176 255.8"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$1 = [_hoisted_2$3, _hoisted_3$1];
const ShieldCheckmarkOutline = defineComponent({
  name: "ShieldCheckmarkOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$1);
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.62 23.62 0 0 0-5.71 9.24h0a23.66 23.66 0 0 1-14.95 15h0a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25h0a23.66 23.66 0 0 1 14.95-15h0a23.62 23.62 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32z"></path><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="M250.5 140.44l-16.51-16.51"></path><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="M294.52 184.46l-11.01-11"></path><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="M338.54 228.49l-11-11.01"></path><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="M388.07 278.01l-16.51-16.51"></path>', 5);
const _hoisted_7$1 = [_hoisted_2$2];
const TicketOutline = defineComponent({
  name: "TicketOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_7$1);
  }
});
const _hoisted_1$1 = ["innerHTML"];
const _hoisted_2$1 = { class: "terms-footer" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TermsOfServiceModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["update:show"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const termsConfig = computed(() => {
      var _a, _b;
      const config = (_b = (_a = window.V2BOARD_CONFIG) == null ? void 0 : _a.LOGIN_LOGO) == null ? void 0 : _b.TERMS_OF_SERVICE;
      return {
        title: (config == null ? void 0 : config.TITLE) || "服务条款",
        content: (config == null ? void 0 : config.CONTENT) || "<p>服务条款内容</p>"
      };
    });
    const showModal = computed({
      get: () => props.show,
      set: (value) => emit("update:show", value)
    });
    const closeModal = () => {
      showModal.value = false;
    };
    return (_ctx, _cache) => {
      const _component_n_button = resolveComponent("n-button");
      const _component_n_modal = resolveComponent("n-modal");
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
        "mask-closable": true,
        "close-on-esc": true,
        preset: "card",
        title: termsConfig.value.title,
        class: "terms-modal",
        style: { maxWidth: "600px", width: "90vw" }
      }, {
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(_component_n_button, {
              type: "primary",
              size: "large",
              onClick: closeModal,
              class: "terms-close-button"
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode(" 我已阅读并同意 ")
              ])),
              _: 1,
              __: [1]
            })
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: "terms-content",
            innerHTML: termsConfig.value.content
          }, null, 8, _hoisted_1$1)
        ]),
        _: 1
      }, 8, ["show", "title"]);
    };
  }
});
const TermsOfServiceModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-341fef73"]]);
const _hoisted_1 = { class: "ios-register-container" };
const _hoisted_2 = { class: "register-card" };
const _hoisted_3 = { class: "card-content" };
const _hoisted_4 = { class: "brand-header" };
const _hoisted_5 = {
  key: 0,
  class: "logo-wrapper"
};
const _hoisted_6 = { class: "logo-circle" };
const _hoisted_7 = ["src", "alt"];
const _hoisted_8 = {
  key: 1,
  class: "app-title"
};
const _hoisted_9 = ["data-shimmer"];
const _hoisted_10 = { class: "form-wrapper" };
const _hoisted_11 = { class: "ios-form" };
const _hoisted_12 = { class: "input-group" };
const _hoisted_13 = {
  key: 0,
  class: "unified-email-field"
};
const _hoisted_14 = { class: "unified-container" };
const _hoisted_15 = { class: "email-icon" };
const _hoisted_16 = { class: "domain-text" };
const _hoisted_17 = { class: "modal-header" };
const _hoisted_18 = { class: "modal-content" };
const _hoisted_19 = ["onClick"];
const _hoisted_20 = { class: "choice-icon" };
const _hoisted_21 = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_22 = { class: "choice-label" };
const _hoisted_23 = {
  key: 1,
  class: "ios-input-wrapper"
};
const _hoisted_24 = { class: "input-icon" };
const _hoisted_25 = { class: "input-group" };
const _hoisted_26 = { class: "ios-input-wrapper" };
const _hoisted_27 = { class: "input-icon" };
const _hoisted_28 = { class: "input-group" };
const _hoisted_29 = { class: "ios-input-wrapper" };
const _hoisted_30 = { class: "input-icon" };
const _hoisted_31 = {
  key: 0,
  class: "input-group"
};
const _hoisted_32 = { class: "email-verify-wrapper" };
const _hoisted_33 = { class: "ios-input-wrapper email-code-input" };
const _hoisted_34 = { class: "input-icon" };
const _hoisted_35 = ["disabled"];
const _hoisted_36 = { key: 0 };
const _hoisted_37 = { key: 1 };
const _hoisted_38 = { key: 2 };
const _hoisted_39 = { class: "input-group" };
const _hoisted_40 = { class: "ios-input-wrapper" };
const _hoisted_41 = { class: "input-icon" };
const _hoisted_42 = {
  key: 1,
  class: "terms-agreement"
};
const _hoisted_43 = { class: "agreement-text" };
const _hoisted_44 = { class: "login-link" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Register",
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z;
    useCssVars((_ctx) => ({
      "fa19b5b2": loginLogoConfig.value.textFontSize + "px",
      "8112e0fc": loginLogoConfig.value.maxWidth + "px",
      "7a27edab": loginLogoConfig.value.maxHeight + "px",
      "48636f66": loginLogoConfig.value.borderRadius + "px",
      "b7321006": loginLogoConfig.value.textFontWeight,
      "5dabdd4d": loginLogoConfig.value.textColor,
      "38823848": loginLogoConfig.value.textMarginTop + "px",
      "1f0f053d": registerSubtitleConfig.value.fontSize + "px",
      "1498e227": registerSubtitleConfig.value.fontWeight
    }));
    const router = useRouter();
    useMessage();
    const authStore = useAuthStore();
    const config = ref({
      appName: ((_a = window.V2BOARD_CONFIG) == null ? void 0 : _a.APP_TITLE) || "V2Board"
    });
    const backendConfig = ref({
      email_whitelist_suffix: null,
      is_email_verify: false,
      is_invite_force: false
    });
    const loginLogoConfig = ref({
      enabled: ((_c = (_b = window.V2BOARD_CONFIG) == null ? void 0 : _b.LOGIN_LOGO) == null ? void 0 : _c.ENABLED) ?? true,
      imageUrl: ((_e = (_d = window.V2BOARD_CONFIG) == null ? void 0 : _d.LOGIN_LOGO) == null ? void 0 : _e.IMAGE_URL) || "",
      fallbackImageUrl: ((_g = (_f = window.V2BOARD_CONFIG) == null ? void 0 : _f.LOGIN_LOGO) == null ? void 0 : _g.FALLBACK_IMAGE_URL) || "",
      altText: ((_i = (_h = window.V2BOARD_CONFIG) == null ? void 0 : _h.LOGIN_LOGO) == null ? void 0 : _i.ALT_TEXT) || "Register Logo",
      maxWidth: ((_k = (_j = window.V2BOARD_CONFIG) == null ? void 0 : _j.LOGIN_LOGO) == null ? void 0 : _k.MAX_WIDTH) || 80,
      maxHeight: ((_m = (_l = window.V2BOARD_CONFIG) == null ? void 0 : _l.LOGIN_LOGO) == null ? void 0 : _m.MAX_HEIGHT) || 80,
      borderRadius: ((_o = (_n = window.V2BOARD_CONFIG) == null ? void 0 : _n.LOGIN_LOGO) == null ? void 0 : _o.BORDER_RADIUS) || 20,
      showTextLogo: ((_q = (_p = window.V2BOARD_CONFIG) == null ? void 0 : _p.LOGIN_LOGO) == null ? void 0 : _q.SHOW_TEXT_LOGO) ?? true,
      textFontSize: ((_s = (_r = window.V2BOARD_CONFIG) == null ? void 0 : _r.LOGIN_LOGO) == null ? void 0 : _s.TEXT_FONT_SIZE) || 28,
      textFontWeight: ((_u = (_t = window.V2BOARD_CONFIG) == null ? void 0 : _t.LOGIN_LOGO) == null ? void 0 : _u.TEXT_FONT_WEIGHT) || "600",
      textColor: ((_w = (_v = window.V2BOARD_CONFIG) == null ? void 0 : _v.LOGIN_LOGO) == null ? void 0 : _w.TEXT_COLOR) || "#1d1d1f",
      textMarginTop: ((_y = (_x = window.V2BOARD_CONFIG) == null ? void 0 : _x.LOGIN_LOGO) == null ? void 0 : _y.TEXT_MARGIN_TOP) || 16
    });
    const registerSubtitleConfig = ref({
      enabled: ((_B = (_A = (_z = window.V2BOARD_CONFIG) == null ? void 0 : _z.LOGIN_LOGO) == null ? void 0 : _A.REGISTER_SUBTITLE) == null ? void 0 : _B.ENABLED) ?? true,
      text: ((_E = (_D = (_C = window.V2BOARD_CONFIG) == null ? void 0 : _C.LOGIN_LOGO) == null ? void 0 : _D.REGISTER_SUBTITLE) == null ? void 0 : _E.TEXT) || "创建新账户",
      fontSize: ((_H = (_G = (_F = window.V2BOARD_CONFIG) == null ? void 0 : _F.LOGIN_LOGO) == null ? void 0 : _G.REGISTER_SUBTITLE) == null ? void 0 : _H.FONT_SIZE) || 18,
      fontWeight: ((_K = (_J = (_I = window.V2BOARD_CONFIG) == null ? void 0 : _I.LOGIN_LOGO) == null ? void 0 : _J.REGISTER_SUBTITLE) == null ? void 0 : _K.FONT_WEIGHT) || "500",
      enableShimmer: ((_N = (_M = (_L = window.V2BOARD_CONFIG) == null ? void 0 : _L.LOGIN_LOGO) == null ? void 0 : _M.REGISTER_SUBTITLE) == null ? void 0 : _N.ENABLE_SHIMMER) ?? true
    });
    const termsConfig = ref({
      enabled: ((_Q = (_P = (_O = window.V2BOARD_CONFIG) == null ? void 0 : _O.LOGIN_LOGO) == null ? void 0 : _P.TERMS_OF_SERVICE) == null ? void 0 : _Q.ENABLED) ?? true,
      agreementText: ((_T = (_S = (_R = window.V2BOARD_CONFIG) == null ? void 0 : _R.LOGIN_LOGO) == null ? void 0 : _S.TERMS_OF_SERVICE) == null ? void 0 : _T.AGREEMENT_TEXT) || "注册即代表同意",
      linkText: ((_W = (_V = (_U = window.V2BOARD_CONFIG) == null ? void 0 : _U.LOGIN_LOGO) == null ? void 0 : _V.TERMS_OF_SERVICE) == null ? void 0 : _W.LINK_TEXT) || "服务条款",
      linkColor: ((_Z = (_Y = (_X = window.V2BOARD_CONFIG) == null ? void 0 : _X.LOGIN_LOGO) == null ? void 0 : _Y.TERMS_OF_SERVICE) == null ? void 0 : _Z.LINK_COLOR) || "#007AFF"
    });
    const showTermsModal = ref(false);
    const loginLogoUrl = computed(() => {
      var _a2, _b2;
      if (loginLogoConfig.value.imageUrl) {
        return loginLogoConfig.value.imageUrl;
      }
      const globalLogo = (_b2 = (_a2 = window.V2BOARD_CONFIG) == null ? void 0 : _a2.LOGO) == null ? void 0 : _b2.IMAGE_URL;
      if (globalLogo) {
        return globalLogo;
      }
      return "/world-two.svg";
    });
    const handleLogoError = (event) => {
      const img = event.target;
      if (loginLogoConfig.value.fallbackImageUrl && img.src !== loginLogoConfig.value.fallbackImageUrl) {
        img.src = loginLogoConfig.value.fallbackImageUrl;
      } else {
        img.src = "/world-two.svg";
      }
    };
    const formData = reactive({
      email: "",
      emailPrefix: "",
      emailSuffix: "",
      password: "",
      confirmPassword: "",
      inviteCode: "",
      emailCode: ""
    });
    const emailSuffixOptions = computed(() => {
      var _a2;
      if (!((_a2 = backendConfig.value) == null ? void 0 : _a2.email_whitelist_suffix)) {
        return [];
      }
      return backendConfig.value.email_whitelist_suffix.map((suffix) => ({
        label: suffix,
        value: suffix
      }));
    });
    const captchaRef = ref();
    const captchaToken = ref("");
    const captchaType = ref("");
    const showDomainDropdown = ref(false);
    const emailCodeSending = ref(false);
    const emailCodeCountdown = ref(0);
    let emailCodeTimer = null;
    const toggleDomainDropdown = () => {
      showDomainDropdown.value = !showDomainDropdown.value;
    };
    const selectDomain = (domain) => {
      formData.emailSuffix = domain;
      showDomainDropdown.value = false;
    };
    const canSendEmailCode = computed(() => {
      var _a2;
      if (emailCodeCountdown.value > 0) {
        return false;
      }
      const hasWhitelist = ((_a2 = backendConfig.value) == null ? void 0 : _a2.email_whitelist_suffix) && backendConfig.value.email_whitelist_suffix.length > 0;
      if (hasWhitelist) {
        const hasPrefix = formData.emailPrefix && formData.emailPrefix.trim().length > 0;
        const hasSuffix = formData.emailSuffix && formData.emailSuffix.length > 0;
        return hasPrefix && hasSuffix;
      } else {
        const hasEmail = formData.email && formData.email.includes("@");
        return hasEmail;
      }
    });
    const sendEmailCode = async () => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
      if (!canSendEmailCode.value || emailCodeSending.value) return;
      const email = ((_a2 = backendConfig.value) == null ? void 0 : _a2.email_whitelist_suffix) && backendConfig.value.email_whitelist_suffix.length > 0 ? `${formData.emailPrefix}${formData.emailSuffix}` : formData.email;
      if (!email) {
        customMessage.error("请先输入邮箱地址", { title: "邮箱为空" });
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        customMessage.error(`邮箱格式不正确: ${email}`, { title: "格式错误" });
        return;
      }
      try {
        emailCodeSending.value = true;
        await apiClient.sendEmailCode({
          email,
          isforget: 0
          // 0表示注册场景，如果邮箱已存在会报错
        });
        customMessage.success("验证码已发送，请查收邮箱", { title: "发送成功" });
        emailCodeCountdown.value = 60;
        emailCodeTimer = setInterval(() => {
          emailCodeCountdown.value--;
          if (emailCodeCountdown.value <= 0) {
            if (emailCodeTimer) {
              clearInterval(emailCodeTimer);
              emailCodeTimer = null;
            }
          }
        }, 1e3);
      } catch (error) {
        console.error("发送邮箱验证码失败:", error);
        let errorMessage = "发送验证码失败，请稍后重试";
        if (((_b2 = error.response) == null ? void 0 : _b2.status) === 404) {
          errorMessage = "邮箱验证码功能暂未开启";
        } else if (((_c2 = error.response) == null ? void 0 : _c2.status) === 500) {
          const message2 = ((_e2 = (_d2 = error.response) == null ? void 0 : _d2.data) == null ? void 0 : _e2.message) || "";
          if (message2.includes("This email is registered") || message2.includes("邮箱已注册")) {
            errorMessage = "该邮箱已被注册，请使用其他邮箱或直接登录";
          } else if (message2.includes("Email verification code has been sent") || message2.includes("验证码已发送")) {
            errorMessage = "验证码发送过于频繁，请稍后再试";
          } else if (message2.includes("Email suffix is not in the Whitelist") || message2.includes("邮箱后缀不在白名单")) {
            errorMessage = "该邮箱后缀不在允许的白名单中";
          } else {
            errorMessage = message2 || errorMessage;
          }
        } else if ((_g2 = (_f2 = error.response) == null ? void 0 : _f2.data) == null ? void 0 : _g2.message) {
          errorMessage = error.response.data.message;
        }
        customMessage.error(errorMessage, {
          title: "发送失败"
        });
      } finally {
        emailCodeSending.value = false;
      }
    };
    const captchaConfig = computed(() => {
      var _a2, _b2, _c2;
      const config2 = (_b2 = (_a2 = window.V2BOARD_CONFIG) == null ? void 0 : _a2.LOGIN_LOGO) == null ? void 0 : _b2.CAPTCHA;
      const service = (config2 == null ? void 0 : config2.SERVICE) || "none";
      const registerEnabled = ((_c2 = config2 == null ? void 0 : config2.PAGES) == null ? void 0 : _c2.REGISTER) || false;
      return {
        service,
        registerEnabled,
        hasAny: service !== "none" && registerEnabled
      };
    });
    const loadBackendConfig = async () => {
      try {
        const configData = await apiClient.getConfig();
        backendConfig.value = {
          email_whitelist_suffix: configData.email_whitelist_suffix || null,
          is_email_verify: configData.is_email_verify || false,
          is_invite_force: configData.is_invite_force || false
        };
        if (!backendConfig.value.email_whitelist_suffix) {
          backendConfig.value.email_whitelist_suffix = ["@gmail.com", "@qq.com", "@163.com", "@outlook.com"];
        }
        if (backendConfig.value.email_whitelist_suffix) {
          backendConfig.value.email_whitelist_suffix = backendConfig.value.email_whitelist_suffix.map((suffix) => {
            return suffix.startsWith("@") ? suffix : `@${suffix}`;
          });
        }
        if (backendConfig.value.email_whitelist_suffix && backendConfig.value.email_whitelist_suffix.length > 0) {
          formData.emailSuffix = backendConfig.value.email_whitelist_suffix[0];
        }
      } catch (error) {
        console.error("获取后端配置失败:", error);
        backendConfig.value = {
          email_whitelist_suffix: ["@gmail.com", "@qq.com", "@163.com", "@outlook.com"],
          is_email_verify: true,
          is_invite_force: false
        };
        formData.emailSuffix = "@gmail.com";
      }
    };
    onMounted(async () => {
      const config2 = window.V2BOARD_CONFIG;
      const apiUrl = (config2 == null ? void 0 : config2.DEFAULT_API_URL) || "https://your-v2board-backend.com";
      apiClient.setBaseURL(apiUrl);
      if (authStore.isAuthenticated) {
        router.push("/dashboard");
        return;
      }
      await loadBackendConfig();
    });
    const onCaptchaVerified = (token, type) => {
      console.log("验证码验证成功:", token, type);
      captchaToken.value = token;
      captchaType.value = type;
    };
    const onCaptchaExpired = () => {
      console.log("验证码已过期");
      captchaToken.value = "";
      captchaType.value = "";
    };
    const onCaptchaError = (error) => {
      console.error("验证码错误:", error);
      captchaToken.value = "";
      captchaType.value = "";
    };
    const handleRegister = async () => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
      const hasWhitelist = ((_a2 = backendConfig.value) == null ? void 0 : _a2.email_whitelist_suffix) && backendConfig.value.email_whitelist_suffix.length > 0;
      if (hasWhitelist) {
        if (!formData.emailPrefix || !formData.emailPrefix.trim()) {
          customMessage.error("请输入邮箱用户名", { title: "信息不完整" });
          return;
        }
        if (!formData.emailSuffix) {
          customMessage.error("请选择邮箱域名", { title: "信息不完整" });
          return;
        }
      } else {
        if (!formData.email.trim()) {
          customMessage.error("请输入邮箱地址", { title: "信息不完整" });
          return;
        }
      }
      if (!formData.password.trim()) {
        customMessage.error("请输入密码", { title: "信息不完整" });
        return;
      }
      if (!formData.confirmPassword.trim()) {
        customMessage.error("请确认密码", { title: "信息不完整" });
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailToCheck = hasWhitelist ? `${formData.emailPrefix}${formData.emailSuffix}` : formData.email;
      if (!emailRegex.test(emailToCheck)) {
        customMessage.error("请输入有效的邮箱地址", { title: "邮箱格式错误" });
        return;
      }
      if (formData.password.length < 8) {
        customMessage.error("密码长度不能少于8位", { title: "密码格式错误" });
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        customMessage.error("两次密码输入不一致", { title: "密码确认错误" });
        return;
      }
      if (captchaConfig.value.hasAny && !captchaToken.value) {
        customMessage.error("请完成验证码验证后再注册", { title: "请完成验证" });
        return;
      }
      if (((_b2 = backendConfig.value) == null ? void 0 : _b2.is_email_verify) && !formData.emailCode.trim()) {
        customMessage.error("请输入邮箱验证码", { title: "验证码为空" });
        return;
      }
      try {
        const finalEmail = hasWhitelist ? `${formData.emailPrefix}${formData.emailSuffix}` : formData.email;
        const registerData = {
          email: finalEmail,
          password: formData.password,
          ...formData.inviteCode && { invite_code: formData.inviteCode },
          ...((_c2 = backendConfig.value) == null ? void 0 : _c2.is_email_verify) && formData.emailCode && { email_code: formData.emailCode }
        };
        if (captchaToken.value && captchaType.value) {
          if (captchaType.value === "turnstile") {
            registerData.turnstile = captchaToken.value;
          } else if (captchaType.value === "recaptcha") {
            registerData.recaptcha = captchaToken.value;
          }
        }
        const response = await apiClient.register(registerData);
        if (response.data) {
          await authStore.setAuthData(response.data);
          customMessage.registerSuccess();
          router.push("/dashboard");
        } else {
          customMessage.registerError("注册成功但未能自动登录，请手动登录");
          router.push("/login");
        }
      } catch (error) {
        console.error("注册失败:", error);
        if (captchaConfig.value.hasAny && captchaRef.value) {
          captchaRef.value.reset();
          captchaToken.value = "";
          captchaType.value = "";
        }
        if (((_d2 = error.response) == null ? void 0 : _d2.status) === 500) {
          customMessage.registerError(((_e2 = error.response.data) == null ? void 0 : _e2.message) || "注册失败，请稍后重试");
        } else if (((_f2 = error.response) == null ? void 0 : _f2.status) === 422) {
          const errors = (_g2 = error.response.data) == null ? void 0 : _g2.errors;
          if (errors) {
            const errorMessages = Object.values(errors).flat();
            customMessage.registerError(errorMessages.join(", "));
          } else {
            customMessage.registerError("请检查输入信息");
          }
        } else {
          customMessage.networkError();
        }
      }
    };
    const goToLogin = () => {
      router.push("/login");
    };
    return (_ctx, _cache) => {
      var _a2, _b2, _c2;
      const _component_n_icon = resolveComponent("n-icon");
      const _component_n_input = resolveComponent("n-input");
      const _component_n_button = resolveComponent("n-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[19] || (_cache[19] = createBaseVNode("div", { class: "background-decoration" }, [
          createBaseVNode("div", { class: "decoration-circle decoration-1" }),
          createBaseVNode("div", { class: "decoration-circle decoration-2" }),
          createBaseVNode("div", { class: "decoration-circle decoration-3" })
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              loginLogoConfig.value.enabled ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("img", {
                    src: loginLogoUrl.value,
                    alt: loginLogoConfig.value.altText,
                    class: "logo-icon",
                    onError: handleLogoError
                  }, null, 40, _hoisted_7)
                ])
              ])) : createCommentVNode("", true),
              loginLogoConfig.value.showTextLogo ? (openBlock(), createElementBlock("h1", _hoisted_8, toDisplayString(config.value.appName), 1)) : createCommentVNode("", true),
              registerSubtitleConfig.value.enabled ? (openBlock(), createElementBlock("p", {
                key: 2,
                class: "register-subtitle",
                "data-shimmer": registerSubtitleConfig.value.enableShimmer
              }, toDisplayString(registerSubtitleConfig.value.text), 9, _hoisted_9)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  ((_a2 = backendConfig.value) == null ? void 0 : _a2.email_whitelist_suffix) && backendConfig.value.email_whitelist_suffix.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, [
                        createVNode(_component_n_icon, { component: unref(MailOutline) }, null, 8, ["component"])
                      ]),
                      createVNode(_component_n_input, {
                        value: formData.emailPrefix,
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formData.emailPrefix = $event),
                        type: "text",
                        placeholder: "邮箱",
                        disabled: unref(authStore).isLoading,
                        bordered: false,
                        class: "prefix-input"
                      }, null, 8, ["value", "disabled"]),
                      _cache[13] || (_cache[13] = createBaseVNode("div", { class: "at-symbol" }, "@", -1)),
                      createBaseVNode("div", {
                        class: "domain-selector",
                        onClick: toggleDomainDropdown
                      }, [
                        createBaseVNode("span", _hoisted_16, toDisplayString(((_b2 = formData.emailSuffix) == null ? void 0 : _b2.replace("@", "")) || "gmail.com"), 1),
                        _cache[12] || (_cache[12] = createBaseVNode("svg", {
                          class: "chevron-icon",
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none"
                        }, [
                          createBaseVNode("path", {
                            d: "M6 9L12 15L18 9",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ], -1))
                      ])
                    ]),
                    (openBlock(), createBlock(Teleport, { to: "body" }, [
                      showDomainDropdown.value ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: "domain-modal-overlay",
                        onClick: _cache[3] || (_cache[3] = ($event) => showDomainDropdown.value = false)
                      }, [
                        createBaseVNode("div", {
                          class: "domain-modal",
                          onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                          }, ["stop"]))
                        }, [
                          createBaseVNode("div", _hoisted_17, [
                            _cache[15] || (_cache[15] = createBaseVNode("h3", null, "选择邮箱域名", -1)),
                            createBaseVNode("button", {
                              class: "modal-close",
                              onClick: _cache[1] || (_cache[1] = ($event) => showDomainDropdown.value = false)
                            }, _cache[14] || (_cache[14] = [
                              createBaseVNode("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none"
                              }, [
                                createBaseVNode("path", {
                                  d: "M18 6L6 18M6 6L18 18",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                })
                              ], -1)
                            ]))
                          ]),
                          createBaseVNode("div", _hoisted_18, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(emailSuffixOptions.value, (option) => {
                              return openBlock(), createElementBlock("div", {
                                key: option.value,
                                class: normalizeClass(["domain-choice", { selected: formData.emailSuffix === option.value }]),
                                onClick: ($event) => selectDomain(option.value)
                              }, [
                                createBaseVNode("div", _hoisted_20, [
                                  formData.emailSuffix === option.value ? (openBlock(), createElementBlock("svg", _hoisted_21, _cache[16] || (_cache[16] = [
                                    createBaseVNode("path", {
                                      d: "M20 6L9 17L4 12",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }, null, -1)
                                  ]))) : createCommentVNode("", true)
                                ]),
                                createBaseVNode("span", _hoisted_22, toDisplayString(option.label.replace("@", "")), 1)
                              ], 10, _hoisted_19);
                            }), 128))
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ]))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_23, [
                    createBaseVNode("div", _hoisted_24, [
                      createVNode(_component_n_icon, { component: unref(MailOutline) }, null, 8, ["component"])
                    ]),
                    createVNode(_component_n_input, {
                      value: formData.email,
                      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => formData.email = $event),
                      type: "email",
                      placeholder: "邮箱地址",
                      disabled: unref(authStore).isLoading,
                      bordered: false,
                      class: "ios-input"
                    }, null, 8, ["value", "disabled"])
                  ]))
                ]),
                createBaseVNode("div", _hoisted_25, [
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("div", _hoisted_27, [
                      createVNode(_component_n_icon, { component: unref(LockClosedOutline) }, null, 8, ["component"])
                    ]),
                    createVNode(_component_n_input, {
                      value: formData.password,
                      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => formData.password = $event),
                      type: "password",
                      placeholder: "密码（至少8位）",
                      "show-password-on": "click",
                      disabled: unref(authStore).isLoading,
                      bordered: false,
                      class: "ios-input"
                    }, null, 8, ["value", "disabled"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_28, [
                  createBaseVNode("div", _hoisted_29, [
                    createBaseVNode("div", _hoisted_30, [
                      createVNode(_component_n_icon, { component: unref(LockClosedOutline) }, null, 8, ["component"])
                    ]),
                    createVNode(_component_n_input, {
                      value: formData.confirmPassword,
                      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => formData.confirmPassword = $event),
                      type: "password",
                      placeholder: "确认密码",
                      "show-password-on": "click",
                      disabled: unref(authStore).isLoading,
                      bordered: false,
                      class: "ios-input"
                    }, null, 8, ["value", "disabled"])
                  ])
                ]),
                ((_c2 = backendConfig.value) == null ? void 0 : _c2.is_email_verify) ? (openBlock(), createElementBlock("div", _hoisted_31, [
                  createBaseVNode("div", _hoisted_32, [
                    createBaseVNode("div", _hoisted_33, [
                      createBaseVNode("div", _hoisted_34, [
                        createVNode(_component_n_icon, { component: unref(ShieldCheckmarkOutline) }, null, 8, ["component"])
                      ]),
                      createVNode(_component_n_input, {
                        value: formData.emailCode,
                        "onUpdate:value": _cache[7] || (_cache[7] = ($event) => formData.emailCode = $event),
                        type: "text",
                        placeholder: "邮箱验证码",
                        disabled: unref(authStore).isLoading,
                        bordered: false,
                        class: "ios-input"
                      }, null, 8, ["value", "disabled"])
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      class: "send-code-button",
                      disabled: !canSendEmailCode.value || emailCodeSending.value,
                      onClick: sendEmailCode
                    }, [
                      emailCodeSending.value ? (openBlock(), createElementBlock("span", _hoisted_36, "发送中...")) : emailCodeCountdown.value > 0 ? (openBlock(), createElementBlock("span", _hoisted_37, toDisplayString(emailCodeCountdown.value) + "s", 1)) : (openBlock(), createElementBlock("span", _hoisted_38, "获取验证码"))
                    ], 8, _hoisted_35)
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("div", _hoisted_40, [
                    createBaseVNode("div", _hoisted_41, [
                      createVNode(_component_n_icon, { component: unref(TicketOutline) }, null, 8, ["component"])
                    ]),
                    createVNode(_component_n_input, {
                      value: formData.inviteCode,
                      "onUpdate:value": _cache[8] || (_cache[8] = ($event) => formData.inviteCode = $event),
                      type: "text",
                      placeholder: "邀请码（可选）",
                      disabled: unref(authStore).isLoading,
                      bordered: false,
                      class: "ios-input"
                    }, null, 8, ["value", "disabled"])
                  ])
                ]),
                createVNode(CaptchaWidget, {
                  ref_key: "captchaRef",
                  ref: captchaRef,
                  modelValue: captchaToken.value,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => captchaToken.value = $event),
                  page: "register",
                  onVerified: onCaptchaVerified,
                  onExpired: onCaptchaExpired,
                  onError: onCaptchaError
                }, null, 8, ["modelValue"]),
                termsConfig.value.enabled ? (openBlock(), createElementBlock("div", _hoisted_42, [
                  createBaseVNode("span", _hoisted_43, toDisplayString(termsConfig.value.agreementText), 1),
                  createBaseVNode("button", {
                    type: "button",
                    class: "terms-link",
                    onClick: _cache[10] || (_cache[10] = ($event) => showTermsModal.value = true),
                    style: normalizeStyle({ color: termsConfig.value.linkColor })
                  }, toDisplayString(termsConfig.value.linkText), 5)
                ])) : createCommentVNode("", true),
                createVNode(_component_n_button, {
                  type: "primary",
                  size: "large",
                  block: "",
                  loading: unref(authStore).isLoading,
                  onClick: handleRegister,
                  class: "ios-register-button"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(authStore).isLoading ? "注册中..." : "注册"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              createBaseVNode("div", _hoisted_44, [
                _cache[18] || (_cache[18] = createBaseVNode("span", { class: "login-text" }, "已经有账户？", -1)),
                createVNode(_component_n_button, {
                  text: "",
                  type: "primary",
                  onClick: goToLogin,
                  class: "login-button"
                }, {
                  default: withCtx(() => _cache[17] || (_cache[17] = [
                    createTextVNode(" 立即登录 ")
                  ])),
                  _: 1,
                  __: [17]
                })
              ])
            ])
          ])
        ]),
        createVNode(TermsOfServiceModal, {
          show: showTermsModal.value,
          "onUpdate:show": _cache[11] || (_cache[11] = ($event) => showTermsModal.value = $event)
        }, null, 8, ["show"])
      ]);
    };
  }
});
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7a56cae"]]);
export {
  Register as default
};
