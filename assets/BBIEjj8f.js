import { k as defineComponent, r as ref, c as computed, e as reactive, o as onMounted, a5 as useRouter, $ as createElementBlock, a0 as createBaseVNode, W as createVNode, a3 as createCommentVNode, a2 as toDisplayString, N as unref, S as resolveComponent, a6 as withKeys, a7 as withModifiers, V as withCtx, F as Fragment, U as openBlock, j as createTextVNode, l as withDirectives, a8 as vModelText, a9 as useCssVars } from "./DM1yaN1X.js";
import { M as MailOutline, L as LockClosedOutline, C as CaptchaWidget, c as customMessage } from "./ByaxWMaA.js";
import { u as useAuthStore, a as apiClient } from "./BBbuoBq5.js";
import { D as DesktopModal } from "./3u1s8V6K.js";
import { u as useMessage } from "./BEq_qS6Y.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import "./0I8bmyai.js";
const _hoisted_1 = { class: "ios-login-container" };
const _hoisted_2 = { class: "login-card" };
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
const _hoisted_13 = { class: "ios-input-wrapper" };
const _hoisted_14 = { class: "input-icon" };
const _hoisted_15 = { class: "input-group" };
const _hoisted_16 = { class: "ios-input-wrapper" };
const _hoisted_17 = { class: "input-icon" };
const _hoisted_18 = { class: "form-options" };
const _hoisted_19 = ["disabled"];
const _hoisted_20 = {
  key: 0,
  class: "button-text"
};
const _hoisted_21 = {
  key: 1,
  class: "loading-spinner"
};
const _hoisted_22 = { class: "register-section" };
const _hoisted_23 = { class: "forgot-password-content" };
const _hoisted_24 = { class: "form-group" };
const _hoisted_25 = { class: "form-group" };
const _hoisted_26 = { class: "form-group" };
const _hoisted_27 = { class: "form-group" };
const _hoisted_28 = { class: "verification-group" };
const _hoisted_29 = ["disabled"];
const _hoisted_30 = { class: "form-actions" };
const _hoisted_31 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    useCssVars((_ctx) => ({
      "b0c5fb2e": loginLogoConfig.value.textFontSize + "px",
      "48955dc4": loginLogoConfig.value.maxWidth + "px",
      "14e2e7a9": loginLogoConfig.value.maxHeight + "px",
      "6d0d4ca8": loginLogoConfig.value.borderRadius + "px",
      "2cf4597b": loginLogoConfig.value.textFontWeight,
      "bee9f5e2": loginLogoConfig.value.textColor,
      "5450aeda": loginLogoConfig.value.textMarginTop + "px",
      "0250fd83": loginSubtitleConfig.value.fontSize + "px",
      "1ee25621": loginSubtitleConfig.value.fontWeight
    }));
    const router = useRouter();
    useMessage();
    const authStore = useAuthStore();
    const config = ref({
      appName: ((_a = window.V2BOARD_CONFIG) == null ? void 0 : _a.APP_TITLE) || "V2Board"
    });
    const loginLogoConfig = ref({
      enabled: ((_c = (_b = window.V2BOARD_CONFIG) == null ? void 0 : _b.LOGIN_LOGO) == null ? void 0 : _c.ENABLED) ?? true,
      imageUrl: ((_e = (_d = window.V2BOARD_CONFIG) == null ? void 0 : _d.LOGIN_LOGO) == null ? void 0 : _e.IMAGE_URL) || "",
      fallbackImageUrl: ((_g = (_f = window.V2BOARD_CONFIG) == null ? void 0 : _f.LOGIN_LOGO) == null ? void 0 : _g.FALLBACK_IMAGE_URL) || "",
      altText: ((_i = (_h = window.V2BOARD_CONFIG) == null ? void 0 : _h.LOGIN_LOGO) == null ? void 0 : _i.ALT_TEXT) || "Login Logo",
      maxWidth: ((_k = (_j = window.V2BOARD_CONFIG) == null ? void 0 : _j.LOGIN_LOGO) == null ? void 0 : _k.MAX_WIDTH) || 80,
      maxHeight: ((_m = (_l = window.V2BOARD_CONFIG) == null ? void 0 : _l.LOGIN_LOGO) == null ? void 0 : _m.MAX_HEIGHT) || 80,
      borderRadius: ((_o = (_n = window.V2BOARD_CONFIG) == null ? void 0 : _n.LOGIN_LOGO) == null ? void 0 : _o.BORDER_RADIUS) || 20,
      showTextLogo: ((_q = (_p = window.V2BOARD_CONFIG) == null ? void 0 : _p.LOGIN_LOGO) == null ? void 0 : _q.SHOW_TEXT_LOGO) ?? true,
      textFontSize: ((_s = (_r = window.V2BOARD_CONFIG) == null ? void 0 : _r.LOGIN_LOGO) == null ? void 0 : _s.TEXT_FONT_SIZE) || 28,
      textFontWeight: ((_u = (_t = window.V2BOARD_CONFIG) == null ? void 0 : _t.LOGIN_LOGO) == null ? void 0 : _u.TEXT_FONT_WEIGHT) || "600",
      textColor: ((_w = (_v = window.V2BOARD_CONFIG) == null ? void 0 : _v.LOGIN_LOGO) == null ? void 0 : _w.TEXT_COLOR) || "#1d1d1f",
      textMarginTop: ((_y = (_x = window.V2BOARD_CONFIG) == null ? void 0 : _x.LOGIN_LOGO) == null ? void 0 : _y.TEXT_MARGIN_TOP) || 16
    });
    const loginSubtitleConfig = ref({
      enabled: ((_B = (_A = (_z = window.V2BOARD_CONFIG) == null ? void 0 : _z.LOGIN_LOGO) == null ? void 0 : _A.LOGIN_SUBTITLE) == null ? void 0 : _B.ENABLED) ?? true,
      text: ((_E = (_D = (_C = window.V2BOARD_CONFIG) == null ? void 0 : _C.LOGIN_LOGO) == null ? void 0 : _D.LOGIN_SUBTITLE) == null ? void 0 : _E.TEXT) || "登录账户",
      fontSize: ((_H = (_G = (_F = window.V2BOARD_CONFIG) == null ? void 0 : _F.LOGIN_LOGO) == null ? void 0 : _G.LOGIN_SUBTITLE) == null ? void 0 : _H.FONT_SIZE) || 18,
      fontWeight: ((_K = (_J = (_I = window.V2BOARD_CONFIG) == null ? void 0 : _I.LOGIN_LOGO) == null ? void 0 : _J.LOGIN_SUBTITLE) == null ? void 0 : _K.FONT_WEIGHT) || "500",
      enableShimmer: ((_N = (_M = (_L = window.V2BOARD_CONFIG) == null ? void 0 : _L.LOGIN_LOGO) == null ? void 0 : _M.LOGIN_SUBTITLE) == null ? void 0 : _N.ENABLE_SHIMMER) ?? true
    });
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
      password: ""
    });
    const showForgotPassword = ref(false);
    const forgotPasswordLoading = ref(false);
    const forgotForm = reactive({
      email: "",
      password: "",
      confirmPassword: "",
      emailCode: ""
    });
    const forgotEmailCodeSending = ref(false);
    const forgotEmailCodeCountdown = ref(0);
    const canSendForgotEmailCode = computed(() => {
      return forgotForm.email && forgotEmailCodeCountdown.value === 0;
    });
    const captchaRef = ref();
    const captchaToken = ref("");
    const captchaType = ref("");
    const captchaConfig = computed(() => {
      var _a2, _b2, _c2;
      const config2 = (_b2 = (_a2 = window.V2BOARD_CONFIG) == null ? void 0 : _a2.LOGIN_LOGO) == null ? void 0 : _b2.CAPTCHA;
      const service = (config2 == null ? void 0 : config2.SERVICE) || "none";
      const loginEnabled = ((_c2 = config2 == null ? void 0 : config2.PAGES) == null ? void 0 : _c2.LOGIN) || false;
      return {
        service,
        loginEnabled,
        hasAny: service !== "none" && loginEnabled
      };
    });
    onMounted(() => {
      const config2 = window.V2BOARD_CONFIG;
      const apiUrl = (config2 == null ? void 0 : config2.DEFAULT_API_URL) || "https://your-v2board-backend.com";
      apiClient.setBaseURL(apiUrl);
      if (authStore.isAuthenticated) {
        router.push("/dashboard");
      }
    });
    const onCaptchaVerified = (token, type) => {
      captchaToken.value = token;
      captchaType.value = type;
    };
    const onCaptchaExpired = () => {
      captchaToken.value = "";
      captchaType.value = "";
    };
    const onCaptchaError = (error) => {
      captchaToken.value = "";
      captchaType.value = "";
    };
    const handleLogin = async () => {
      var _a2, _b2, _c2, _d2;
      if (!formData.email.trim()) {
        customMessage.error("请输入邮箱地址", { title: "信息不完整" });
        return;
      }
      if (!formData.password.trim()) {
        customMessage.error("请输入密码", { title: "信息不完整" });
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        customMessage.error("请输入有效的邮箱地址", { title: "邮箱格式错误" });
        return;
      }
      if (formData.password.length < 6) {
        customMessage.error("密码长度不能少于6位", { title: "密码格式错误" });
        return;
      }
      if (captchaConfig.value.hasAny && !captchaToken.value) {
        customMessage.error("请完成验证码验证后再登录", { title: "请完成验证" });
        return;
      }
      try {
        const loginData = { ...formData };
        if (captchaToken.value && captchaType.value) {
          if (captchaType.value === "turnstile") {
            loginData.turnstile = captchaToken.value;
          } else if (captchaType.value === "recaptcha") {
            loginData.recaptcha = captchaToken.value;
          }
        }
        await authStore.login(loginData);
        customMessage.loginSuccess();
        router.push("/dashboard");
      } catch (error) {
        if (captchaConfig.value.hasAny && captchaRef.value) {
          captchaRef.value.reset();
          captchaToken.value = "";
          captchaType.value = "";
        }
        if (((_a2 = error.response) == null ? void 0 : _a2.status) === 500) {
          customMessage.loginError(((_b2 = error.response.data) == null ? void 0 : _b2.message) || "邮箱或密码错误");
        } else if (((_c2 = error.response) == null ? void 0 : _c2.status) === 422) {
          const errors = (_d2 = error.response.data) == null ? void 0 : _d2.errors;
          if (errors) {
            const errorMessages = Object.values(errors).flat();
            customMessage.loginError(errorMessages.join(", "));
          } else {
            customMessage.loginError("请检查输入信息");
          }
        } else {
          customMessage.networkError();
        }
      }
    };
    const goToRegister = () => {
      router.push("/register");
    };
    const sendForgotEmailCode = async () => {
      var _a2, _b2, _c2, _d2, _e2;
      if (!canSendForgotEmailCode.value || forgotEmailCodeSending.value) return;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(forgotForm.email)) {
        customMessage.error("请输入有效的邮箱地址", { title: "邮箱格式错误" });
        return;
      }
      try {
        forgotEmailCodeSending.value = true;
        await apiClient.sendEmailCode({
          email: forgotForm.email,
          isforget: 1
          // 1表示忘记密码场景，如果邮箱不存在会报错
        });
        customMessage.success("验证码已发送到您的邮箱", { title: "发送成功" });
        forgotEmailCodeCountdown.value = 60;
        const timer = setInterval(() => {
          forgotEmailCodeCountdown.value--;
          if (forgotEmailCodeCountdown.value <= 0) {
            clearInterval(timer);
          }
        }, 1e3);
      } catch (error) {
        console.error("发送忘记密码验证码失败:", error);
        let errorMessage = "发送验证码失败，请稍后重试";
        if (((_a2 = error.response) == null ? void 0 : _a2.status) === 500) {
          const message2 = ((_c2 = (_b2 = error.response) == null ? void 0 : _b2.data) == null ? void 0 : _c2.message) || "";
          if (message2.includes("This email is not registered") || message2.includes("邮箱未注册")) {
            errorMessage = "该邮箱未注册，请检查邮箱地址或前往注册";
          } else if (message2.includes("Email verification code has been sent") || message2.includes("验证码已发送")) {
            errorMessage = "验证码发送过于频繁，请稍后再试";
          } else {
            errorMessage = message2 || errorMessage;
          }
        } else if ((_e2 = (_d2 = error.response) == null ? void 0 : _d2.data) == null ? void 0 : _e2.message) {
          errorMessage = error.response.data.message;
        }
        customMessage.error(errorMessage, { title: "发送失败" });
      } finally {
        forgotEmailCodeSending.value = false;
      }
    };
    const handleForgotPassword = async () => {
      var _a2, _b2, _c2, _d2, _e2;
      if (!forgotForm.email.trim()) {
        customMessage.error("请输入邮箱地址", { title: "信息不完整" });
        return;
      }
      if (!forgotForm.password.trim()) {
        customMessage.error("请输入新密码", { title: "信息不完整" });
        return;
      }
      if (!forgotForm.confirmPassword.trim()) {
        customMessage.error("请确认新密码", { title: "信息不完整" });
        return;
      }
      if (!forgotForm.emailCode.trim()) {
        customMessage.error("请输入邮箱验证码", { title: "信息不完整" });
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(forgotForm.email)) {
        customMessage.error("请输入有效的邮箱地址", { title: "邮箱格式错误" });
        return;
      }
      if (forgotForm.password.length < 8) {
        customMessage.error("密码长度不能少于8位", { title: "密码格式错误" });
        return;
      }
      if (forgotForm.password !== forgotForm.confirmPassword) {
        customMessage.error("两次输入的密码不一致", { title: "密码不匹配" });
        return;
      }
      try {
        forgotPasswordLoading.value = true;
        await apiClient.forgetPassword({
          email: forgotForm.email,
          password: forgotForm.password,
          email_code: forgotForm.emailCode
        });
        customMessage.success("密码重置成功，请使用新密码登录", { title: "重置成功" });
        setTimeout(() => {
          showForgotPassword.value = false;
          forgotForm.email = "";
          forgotForm.password = "";
          forgotForm.confirmPassword = "";
          forgotForm.emailCode = "";
          forgotEmailCodeCountdown.value = 0;
        }, 1500);
      } catch (error) {
        console.error("重置密码失败:", error);
        let errorMessage = "重置密码失败，请稍后重试";
        if (((_a2 = error.response) == null ? void 0 : _a2.status) === 500) {
          const message2 = ((_c2 = (_b2 = error.response) == null ? void 0 : _b2.data) == null ? void 0 : _c2.message) || "";
          if (message2.includes("Incorrect email verification code") || message2.includes("验证码错误")) {
            errorMessage = "邮箱验证码错误，请重新输入";
          } else if (message2.includes("Reset failed, Please try again later") || message2.includes("重置失败")) {
            errorMessage = "重置失败次数过多，请稍后再试";
          } else {
            errorMessage = message2 || errorMessage;
          }
        } else if ((_e2 = (_d2 = error.response) == null ? void 0 : _d2.data) == null ? void 0 : _e2.message) {
          errorMessage = error.response.data.message;
        }
        customMessage.error(errorMessage, { title: "重置失败" });
      } finally {
        forgotPasswordLoading.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_icon = resolveComponent("n-icon");
      const _component_n_input = resolveComponent("n-input");
      const _component_n_button = resolveComponent("n-button");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[14] || (_cache[14] = createBaseVNode("div", { class: "background-decoration" }, [
            createBaseVNode("div", { class: "floating-orb orb-1" }),
            createBaseVNode("div", { class: "floating-orb orb-2" }),
            createBaseVNode("div", { class: "floating-orb orb-3" })
          ], -1)),
          createBaseVNode("div", _hoisted_2, [
            _cache[13] || (_cache[13] = createBaseVNode("div", { class: "glass-background" }, null, -1)),
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
                loginSubtitleConfig.value.enabled ? (openBlock(), createElementBlock("p", {
                  key: 2,
                  class: "login-subtitle",
                  "data-shimmer": loginSubtitleConfig.value.enableShimmer
                }, toDisplayString(loginSubtitleConfig.value.text), 9, _hoisted_9)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("div", _hoisted_14, [
                        createVNode(_component_n_icon, { component: unref(MailOutline) }, null, 8, ["component"])
                      ]),
                      createVNode(_component_n_input, {
                        value: formData.email,
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formData.email = $event),
                        type: "email",
                        placeholder: "邮箱地址",
                        disabled: unref(authStore).isLoading,
                        bordered: false,
                        class: "ios-input"
                      }, null, 8, ["value", "disabled"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", _hoisted_17, [
                        createVNode(_component_n_icon, { component: unref(LockClosedOutline) }, null, 8, ["component"])
                      ]),
                      createVNode(_component_n_input, {
                        value: formData.password,
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => formData.password = $event),
                        type: "password",
                        placeholder: "密码",
                        "show-password-on": "click",
                        disabled: unref(authStore).isLoading,
                        bordered: false,
                        onKeydown: withKeys(handleLogin, ["enter"]),
                        class: "ios-input"
                      }, null, 8, ["value", "disabled"])
                    ])
                  ]),
                  createVNode(CaptchaWidget, {
                    ref_key: "captchaRef",
                    ref: captchaRef,
                    modelValue: captchaToken.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => captchaToken.value = $event),
                    page: "login",
                    onVerified: onCaptchaVerified,
                    onExpired: onCaptchaExpired,
                    onError: onCaptchaError
                  }, null, 8, ["modelValue"]),
                  createBaseVNode("div", _hoisted_18, [
                    _cache[9] || (_cache[9] = createBaseVNode("label", { class: "remember-checkbox" }, [
                      createBaseVNode("input", { type: "checkbox" }),
                      createBaseVNode("span", { class: "checkmark" }),
                      createBaseVNode("span", { class: "checkbox-text" }, "记住我")
                    ], -1)),
                    createBaseVNode("a", {
                      href: "#",
                      class: "forgot-link",
                      onClick: _cache[3] || (_cache[3] = withModifiers(($event) => showForgotPassword.value = true, ["prevent"]))
                    }, "忘记密码？")
                  ]),
                  createBaseVNode("button", {
                    type: "submit",
                    disabled: unref(authStore).isLoading,
                    class: "ios-login-button",
                    onClick: handleLogin
                  }, [
                    !unref(authStore).isLoading ? (openBlock(), createElementBlock("span", _hoisted_20, "登录")) : (openBlock(), createElementBlock("div", _hoisted_21, _cache[10] || (_cache[10] = [
                      createBaseVNode("div", { class: "spinner" }, null, -1),
                      createBaseVNode("span", { class: "loading-text" }, "登录中...", -1)
                    ])))
                  ], 8, _hoisted_19),
                  createBaseVNode("div", _hoisted_22, [
                    _cache[12] || (_cache[12] = createBaseVNode("span", { class: "register-text" }, "还没有账号？", -1)),
                    createVNode(_component_n_button, {
                      text: "",
                      type: "primary",
                      onClick: goToRegister,
                      class: "register-link"
                    }, {
                      default: withCtx(() => _cache[11] || (_cache[11] = [
                        createTextVNode(" 立即注册 ")
                      ])),
                      _: 1,
                      __: [11]
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        createVNode(DesktopModal, {
          show: showForgotPassword.value,
          "onUpdate:show": _cache[8] || (_cache[8] = ($event) => showForgotPassword.value = $event),
          title: "重置密码",
          width: 400,
          "show-close-button": true
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_23, [
              createBaseVNode("form", {
                onSubmit: withModifiers(handleForgotPassword, ["prevent"]),
                class: "forgot-form"
              }, [
                createBaseVNode("div", _hoisted_24, [
                  _cache[15] || (_cache[15] = createBaseVNode("label", { class: "form-label" }, "邮箱地址", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => forgotForm.email = $event),
                    type: "email",
                    class: "form-input",
                    placeholder: "请输入注册邮箱",
                    required: ""
                  }, null, 512), [
                    [vModelText, forgotForm.email]
                  ])
                ]),
                createBaseVNode("div", _hoisted_25, [
                  _cache[16] || (_cache[16] = createBaseVNode("label", { class: "form-label" }, "新密码", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => forgotForm.password = $event),
                    type: "password",
                    class: "form-input",
                    placeholder: "请输入新密码（至少8位）",
                    minlength: "8",
                    required: ""
                  }, null, 512), [
                    [vModelText, forgotForm.password]
                  ])
                ]),
                createBaseVNode("div", _hoisted_26, [
                  _cache[17] || (_cache[17] = createBaseVNode("label", { class: "form-label" }, "确认新密码", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => forgotForm.confirmPassword = $event),
                    type: "password",
                    class: "form-input",
                    placeholder: "请再次输入新密码",
                    minlength: "8",
                    required: ""
                  }, null, 512), [
                    [vModelText, forgotForm.confirmPassword]
                  ])
                ]),
                createBaseVNode("div", _hoisted_27, [
                  _cache[18] || (_cache[18] = createBaseVNode("label", { class: "form-label" }, "邮箱验证码", -1)),
                  createBaseVNode("div", _hoisted_28, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => forgotForm.emailCode = $event),
                      type: "text",
                      class: "form-input verification-input",
                      placeholder: "请输入验证码",
                      required: ""
                    }, null, 512), [
                      [vModelText, forgotForm.emailCode]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: sendForgotEmailCode,
                      disabled: !canSendForgotEmailCode.value || forgotEmailCodeSending.value,
                      class: "verification-btn"
                    }, toDisplayString(forgotEmailCodeCountdown.value > 0 ? `${forgotEmailCodeCountdown.value}s` : "获取验证码"), 9, _hoisted_29)
                  ])
                ]),
                createBaseVNode("div", _hoisted_30, [
                  createBaseVNode("button", {
                    type: "submit",
                    disabled: forgotPasswordLoading.value,
                    class: "btn-base btn-large btn-primary"
                  }, toDisplayString(forgotPasswordLoading.value ? "重置中..." : "重置密码"), 9, _hoisted_31)
                ])
              ], 32)
            ])
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
});
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-070a2366"]]);
export {
  Login as default
};
