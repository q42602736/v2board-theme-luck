const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DbzHfKwT.js","assets/DM1yaN1X.js","assets/1tPrXgE0.js","assets/BEq_qS6Y.js","assets/0I8bmyai.js","assets/Cw62CgjS.css","assets/BBIEjj8f.js","assets/ByaxWMaA.js","assets/BZbmKTLF.css","assets/3u1s8V6K.js","assets/BbO9A4Tv.css","assets/v0YG-geN.css","assets/q_WC3BFv.js","assets/NRyJvLdZ.css","assets/CO5Ntz5l.js","assets/CyyeJu8R.js","assets/BnYRgqog.js","assets/BXdzbR5Q.css","assets/C6e3mGRa.js","assets/CrZoyNRZ.css","assets/CK-I2Xx_.js","assets/D5SbPLB-.js","assets/DoY6UBR3.css","assets/Dyoy8FV3.css","assets/C0KnXkt1.js","assets/JjNObao4.css","assets/oPGsis9D.js","assets/B7Pf0vYn.css","assets/lsrL0SOU.js","assets/DwbyqUfT.css","assets/yuHauBoh.js","assets/Iqp7YsWV.css","assets/BR9H_Zte.js","assets/Bb93n4GN.css","assets/DSCv3-VU.js","assets/Chbobab3.css","assets/_d5ASL-Z.js","assets/BwL5vMEg.css","assets/Dg9FJUWi.js","assets/BV8tDtm1.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { k as defineComponent, c as computed, R as createBlock, S as resolveComponent, U as openBlock, V as withCtx, W as createVNode, X as defineStore, r as ref, Y as createRouter, Z as createWebHistory, M as createApp, _ as createPinia } from "./DM1yaN1X.js";
import { d as darkTheme, n as naive } from "./BEq_qS6Y.js";
import { a as axios } from "./0I8bmyai.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const isDark = computed(() => false);
    const theme = computed(() => isDark.value ? darkTheme : null);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      const _component_n_message_provider = resolveComponent("n-message-provider");
      const _component_n_notification_provider = resolveComponent("n-notification-provider");
      const _component_n_dialog_provider = resolveComponent("n-dialog-provider");
      const _component_n_loading_bar_provider = resolveComponent("n-loading-bar-provider");
      const _component_n_config_provider = resolveComponent("n-config-provider");
      return openBlock(), createBlock(_component_n_config_provider, { theme: theme.value }, {
        default: withCtx(() => [
          createVNode(_component_n_loading_bar_provider, null, {
            default: withCtx(() => [
              createVNode(_component_n_dialog_provider, null, {
                default: withCtx(() => [
                  createVNode(_component_n_notification_provider, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_message_provider, null, {
                        default: withCtx(() => [
                          createVNode(_component_router_view)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["theme"]);
    };
  }
});
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
class ApiClient {
  constructor() {
    __publicField(this, "instance");
    __publicField(this, "baseURL", "");
    this.instance = axios.create({
      timeout: 1e4,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    this.setupInterceptors();
  }
  // 设置API基础URL
  setBaseURL(url) {
    this.baseURL = url.replace(/\/$/, "");
    {
      this.instance.defaults.baseURL = this.baseURL;
    }
  }
  // 设置认证token
  setAuthToken(token) {
    this.instance.defaults.headers.common["Authorization"] = token;
  }
  // 清除认证token
  clearAuthToken() {
    delete this.instance.defaults.headers.common["Authorization"];
  }
  // 礼品卡兑换
  async redeemGiftcard(giftcard) {
    const response = await this.instance.post("/api/v1/user/redeemgiftcard", {
      giftcard
    });
    return response.data;
  }
  setupInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        console.error("请求错误:", error);
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        var _a, _b, _c;
        console.error("响应错误:", (_a = error.response) == null ? void 0 : _a.status, (_b = error.response) == null ? void 0 : _b.data);
        if (((_c = error.response) == null ? void 0 : _c.status) === 401) {
          this.clearAuthToken();
        }
        return Promise.reject(error);
      }
    );
  }
  // 登录
  async login(data) {
    const response = await this.instance.post("/api/v1/passport/auth/login", data);
    return response.data.data;
  }
  // 注册
  async register(data) {
    const response = await this.instance.post("/api/v1/passport/auth/register", data);
    return response.data;
  }
  // 发送邮箱验证码
  async sendEmailCode(data) {
    const response = await this.instance.post("/api/v1/passport/comm/sendEmailVerify", data);
    return response.data;
  }
  // 忘记密码
  async forgetPassword(data) {
    const response = await this.instance.post("/api/v1/passport/auth/forget", data);
    return response.data;
  }
  // 获取用户信息
  async getUserInfo() {
    var _a, _b;
    try {
      const response = await this.instance.get("/api/v1/user/info");
      return response.data.data;
    } catch (error) {
      console.error("获取用户信息失败:", (_a = error.response) == null ? void 0 : _a.status, (_b = error.response) == null ? void 0 : _b.data);
      throw error;
    }
  }
  // 获取站点配置
  async getConfig() {
    const response = await this.instance.get("/api/v1/guest/comm/config");
    return response.data.data;
  }
  // 检查登录状态
  async checkLogin() {
    try {
      await this.instance.get("/api/v1/user/checkLogin");
      return true;
    } catch {
      return false;
    }
  }
  // 获取订阅信息
  async getSubscribe() {
    const response = await this.instance.get("/api/v1/user/getSubscribe");
    return response.data.data;
  }
  // 获取套餐列表
  async getPlans() {
    const response = await this.instance.get("/api/v1/user/plan/fetch");
    return response.data.data;
  }
  // 重置订阅链接
  async resetSubscribe() {
    const response = await this.instance.get("/api/v1/user/resetSecurity");
    return response.data.data.subscribe_url;
  }
  // 创建订单
  async createOrder(data) {
    const response = await this.instance.post("/api/v1/user/order/save", data);
    return response.data.data;
  }
  // 获取订单详情
  async getOrder(tradeNo) {
    const response = await this.instance.get(`/api/v1/user/order/details?trade_no=${tradeNo}`);
    return response.data.data;
  }
  // 获取支付方式
  async getPaymentMethods() {
    const response = await this.instance.get("/api/v1/user/order/getPaymentMethod");
    return response.data.data;
  }
  // 结算订单（支付）
  async checkoutOrder(tradeNo, method) {
    const response = await this.instance.post("/api/v1/user/order/checkout", {
      trade_no: tradeNo,
      method
    });
    return response.data;
  }
  // 检查订单状态
  async checkOrderStatus(tradeNo) {
    const response = await this.instance.get(`/api/v1/user/order/check?trade_no=${tradeNo}`);
    return response.data.data;
  }
  // 取消订单
  async cancelOrder(tradeNo) {
    const response = await this.instance.post("/api/v1/user/order/cancel", {
      trade_no: tradeNo
    });
    return response.data.data;
  }
  // 验证优惠券
  async checkCoupon(code, planId) {
    const data = { code };
    if (planId) {
      data.plan_id = planId;
    }
    const response = await this.instance.post("/api/v1/user/coupon/check", data);
    return response.data.data;
  }
  // 获取订单列表
  async getOrders(status) {
    const params = new URLSearchParams();
    if (status !== void 0) {
      params.append("status", status.toString());
    }
    const url = params.toString() ? `/api/v1/user/order/fetch?${params}` : "/api/v1/user/order/fetch";
    const response = await this.instance.get(url);
    return response.data.data;
  }
  // 获取订单详情
  async getOrderDetail(tradeNo) {
    const response = await this.instance.get(`/api/v1/user/order/detail?trade_no=${tradeNo}`);
    return response.data.data;
  }
  // 获取通知列表
  async getNotices(current = 1, pageSize = 5) {
    const response = await this.instance.get(`/api/v1/user/notice/fetch?current=${current}&pageSize=${pageSize}`);
    return {
      data: response.data.data || [],
      total: 0
    };
  }
  // 获取通知详情
  async getNoticeDetail(id) {
    const response = await this.instance.get(`/api/v1/user/notice/fetch?id=${id}`);
    return response.data.data;
  }
  // 获取服务器列表
  async getServers() {
    const response = await this.instance.get("/api/v1/user/server/fetch");
    return response.data.data || [];
  }
  // 邀请相关接口
  // 获取邀请码管理（包含统计信息）
  async getInviteCodes() {
    const response = await this.instance.get("/api/v1/user/invite/fetch");
    return response.data.data;
  }
  // 生成邀请码
  async generateInviteCode() {
    const response = await this.instance.get("/api/v1/user/invite/save");
    return response.data.data;
  }
  // 获取邀请明细
  async getInviteRecords() {
    const response = await this.instance.get("/api/v1/user/invite/details");
    return response.data.data;
  }
  // 佣金划转
  async transferCommission(transferAmount) {
    const response = await this.instance.post("/api/v1/user/transfer", {
      transfer_amount: transferAmount
      // 金额（分）
    });
    return response.data.data;
  }
  // 佣金提现
  async withdrawCommission(withdrawMethod, withdrawAccount) {
    const response = await this.instance.post("/api/v1/user/ticket/withdraw", {
      withdraw_method: withdrawMethod,
      withdraw_account: withdrawAccount
    });
    return response.data.data;
  }
  // 获取提现配置
  async getWithdrawConfig() {
    const response = await this.instance.get("/api/v1/user/comm/config");
    return response.data.data;
  }
  // 工单相关接口
  // 获取工单列表
  async getTickets() {
    const response = await this.instance.get("/api/v1/user/ticket/fetch");
    return response.data.data;
  }
  // 获取工单详情（包含消息）
  async getTicketDetail(id) {
    const response = await this.instance.get(`/api/v1/user/ticket/fetch?id=${id}`);
    return response.data.data;
  }
  // 创建工单
  async createTicket(data) {
    const response = await this.instance.post("/api/v1/user/ticket/save", data);
    return response.data.data;
  }
  // 回复工单
  async replyTicket(data) {
    const response = await this.instance.post("/api/v1/user/ticket/reply", data);
    return response.data.data;
  }
  // 关闭工单
  async closeTicket(data) {
    const response = await this.instance.post("/api/v1/user/ticket/close", data);
    return response.data.data;
  }
  // 佣金提现（创建提现工单）
  async withdrawCommissionTicket(data) {
    const response = await this.instance.post("/api/v1/user/ticket/withdraw", data);
    return response.data.data;
  }
  // 流量统计相关接口
  // 获取用户流量日志
  async getTrafficLog() {
    const response = await this.instance.get("/api/v1/user/stat/getTrafficLog");
    return response.data.data;
  }
  // 获取订阅信息（包含u和d字段）
  async getSubscribeInfo() {
    const response = await this.instance.get("/api/v1/user/getSubscribe");
    return response.data.data;
  }
  // 修改密码
  async changePassword(data) {
    await this.instance.post("/api/v1/user/changePassword", data);
  }
  // 更新用户设置
  async updateUserSettings(data) {
    await this.instance.post("/api/v1/user/update", data);
  }
  // 文档相关接口
  // 获取文档列表
  async getDocuments() {
    try {
      const response = await this.instance.get("/api/v1/user/knowledge/fetch", {
        params: {
          language: "zh-CN"
        }
      });
      const knowledges = response.data.data || {};
      const documents = [];
      Object.keys(knowledges).forEach((category) => {
        const categoryDocs = knowledges[category] || [];
        categoryDocs.forEach((doc) => {
          documents.push({
            id: doc.id,
            title: doc.title,
            content: "",
            // 列表接口不返回内容，需要单独获取
            category,
            sort: 0,
            // 列表接口没有sort字段
            created_at: 0,
            // 列表接口没有created_at字段
            updated_at: doc.updated_at
          });
        });
      });
      return documents;
    } catch (error) {
      console.error("获取文档列表失败:", error);
      return [];
    }
  }
  // 根据ID获取文档详情
  async getDocumentById(id) {
    try {
      const response = await this.instance.get("/api/v1/user/knowledge/fetch", {
        params: {
          id,
          language: "zh-CN"
        }
      });
      const doc = response.data.data;
      if (!doc) {
        throw new Error("文档不存在或无权限访问");
      }
      return {
        id: doc.id,
        title: doc.title,
        content: doc.body || doc.content || "",
        // v2board使用body字段存储内容
        category: doc.category,
        sort: doc.sort || 0,
        created_at: doc.created_at || 0,
        updated_at: doc.updated_at
      };
    } catch (error) {
      console.error("获取文档详情失败:", error);
      throw error;
    }
  }
}
const apiClient = new ApiClient();
const useAuthStore = defineStore("auth", () => {
  const token = ref("");
  const user = ref(null);
  const isLoading = ref(false);
  const isAuthenticated = computed(() => !!token.value && !!user.value);
  const initAuth = () => {
    const savedToken = localStorage.getItem("v2board_token");
    const savedUser = localStorage.getItem("v2board_user");
    if (savedToken) {
      token.value = savedToken;
      apiClient.setAuthToken(savedToken);
    }
    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser);
      } catch (error) {
        console.error("解析用户信息失败:", error);
        localStorage.removeItem("v2board_user");
      }
    }
  };
  const setAuthData = async (authData) => {
    isLoading.value = true;
    try {
      const authToken = authData.auth_data || authData.token;
      token.value = authToken;
      apiClient.setAuthToken(authToken);
      localStorage.setItem("v2board_token", authToken);
      await fetchUserInfo();
    } catch (error) {
      console.error("设置认证数据失败:", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };
  const login = async (credentials) => {
    isLoading.value = true;
    try {
      const response = await apiClient.login(credentials);
      const authToken = response.auth_data || response.token;
      token.value = authToken;
      apiClient.setAuthToken(authToken);
      localStorage.setItem("v2board_token", authToken);
      await fetchUserInfo();
      return response;
    } catch (error) {
      console.error("登录失败:", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };
  const fetchUserInfo = async () => {
    var _a;
    try {
      const userInfo = await apiClient.getUserInfo();
      user.value = userInfo;
      localStorage.setItem("v2board_user", JSON.stringify(userInfo));
    } catch (error) {
      console.error("获取用户信息失败:", error);
      if (((_a = error.response) == null ? void 0 : _a.status) === 403) {
        user.value = {
          id: 0,
          email: "unknown@example.com",
          transfer_enable: 0,
          device_limit: 0,
          last_login_at: Date.now() / 1e3,
          created_at: Date.now() / 1e3,
          banned: false,
          expired_at: null,
          balance: 0,
          commission_balance: 0,
          plan_id: null,
          uuid: ""
        };
        localStorage.setItem("v2board_user", JSON.stringify(user.value));
      } else {
        logout();
        throw error;
      }
    }
  };
  const checkAuth = async () => {
    if (!token.value) return false;
    try {
      const isValid = await apiClient.checkLogin();
      if (!isValid) {
        logout();
        return false;
      }
      if (!user.value) {
        await fetchUserInfo();
      }
      return true;
    } catch (error) {
      console.error("检查登录状态失败:", error);
      logout();
      return false;
    }
  };
  const logout = () => {
    token.value = "";
    user.value = null;
    localStorage.removeItem("v2board_token");
    localStorage.removeItem("v2board_user");
    apiClient.clearAuthToken();
  };
  return {
    // 状态
    token,
    user,
    isLoading,
    // 计算属性
    isAuthenticated,
    // 方法
    initAuth,
    setAuthData,
    login,
    logout,
    fetchUserInfo,
    checkAuth
  };
});
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => __vitePreload(() => import("./DbzHfKwT.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0),
    meta: {
      requiresAuth: false,
      title: "首页"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => __vitePreload(() => import("./BBIEjj8f.js"), true ? __vite__mapDeps([6,1,7,3,2,8,9,10,4,11]) : void 0),
    meta: {
      requiresAuth: false,
      title: "登录"
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () => __vitePreload(() => import("./q_WC3BFv.js"), true ? __vite__mapDeps([12,1,7,3,2,8,4,13]) : void 0),
    meta: {
      requiresAuth: false,
      title: "注册"
    }
  },
  {
    path: "/",
    component: () => __vitePreload(() => import("./CO5Ntz5l.js"), true ? __vite__mapDeps([14,15,1,9,2,10,3,16,4,17]) : void 0),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => __vitePreload(() => import("./C6e3mGRa.js"), true ? __vite__mapDeps([18,1,16,4,2,9,10,3,19]) : void 0),
        meta: {
          title: "仪表板",
          icon: "dashboard"
        }
      },
      {
        path: "plans",
        name: "Plans",
        component: () => __vitePreload(() => import("./CK-I2Xx_.js"), true ? __vite__mapDeps([20,1,2,9,10,21,22,3,4,23]) : void 0),
        meta: {
          title: "套餐",
          icon: "plans"
        }
      },
      {
        path: "plans/purchase/:planId",
        name: "PurchasePlan",
        component: () => __vitePreload(() => import("./C0KnXkt1.js"), true ? __vite__mapDeps([24,1,15,9,2,10,21,22,4,3,25]) : void 0),
        meta: {
          title: "购买套餐",
          icon: "plans"
        }
      },
      {
        path: "servers",
        name: "Servers",
        component: () => __vitePreload(() => import("./oPGsis9D.js"), true ? __vite__mapDeps([26,4,9,1,2,10,3,27]) : void 0),
        meta: {
          title: "服务器",
          icon: "servers"
        }
      },
      {
        path: "orders",
        name: "Orders",
        component: () => __vitePreload(() => import("./lsrL0SOU.js"), true ? __vite__mapDeps([28,1,15,9,2,10,21,22,4,3,29]) : void 0),
        meta: {
          title: "订单",
          icon: "orders"
        }
      },
      {
        path: "tickets",
        name: "Tickets",
        component: () => __vitePreload(() => import("./yuHauBoh.js"), true ? __vite__mapDeps([30,9,1,2,10,3,4,31]) : void 0),
        meta: {
          title: "工单",
          icon: "tickets"
        }
      },
      {
        path: "traffic-details",
        name: "TrafficDetails",
        component: () => __vitePreload(() => import("./BR9H_Zte.js"), true ? __vite__mapDeps([32,1,3,2,4,33]) : void 0),
        meta: {
          title: "流量明细",
          icon: "traffic"
        }
      },
      {
        path: "invite",
        name: "Invite",
        component: () => __vitePreload(() => import("./DSCv3-VU.js"), true ? __vite__mapDeps([34,1,3,15,9,2,10,21,22,4,35]) : void 0),
        meta: {
          title: "邀请",
          icon: "invite"
        }
      },
      {
        path: "profile",
        name: "Profile",
        component: () => __vitePreload(() => import("./_d5ASL-Z.js"), true ? __vite__mapDeps([36,1,3,2,4,37]) : void 0),
        meta: {
          title: "个人资料",
          icon: "profile"
        }
      },
      {
        path: "docs",
        name: "Docs",
        component: () => __vitePreload(() => import("./Dg9FJUWi.js"), true ? __vite__mapDeps([38,1,2,3,4,39]) : void 0),
        meta: {
          title: "使用文档",
          icon: "docs"
        }
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
router.beforeEach((to, from, next) => {
  var _a, _b;
  const authStore2 = useAuthStore();
  if (to.meta.title) {
    document.title = `${to.meta.title} - V2Board`;
  }
  if (to.name === "Home") {
    const landingConfig = (_a = window.V2BOARD_CONFIG) == null ? void 0 : _a.LANDING_PAGE;
    if (!(landingConfig == null ? void 0 : landingConfig.ENABLED)) {
      const redirectPath = (landingConfig == null ? void 0 : landingConfig.REDIRECT_PATH) || "/login";
      next(redirectPath);
      return;
    }
  }
  const config = (_b = window.V2BOARD_CONFIG) == null ? void 0 : _b.FEATURES;
  if (to.name === "Invite" && (config == null ? void 0 : config.INVITE_ENABLED) === false) {
    alert("邀请功能已被禁用");
    next("/dashboard");
    return;
  }
  if (to.name === "Tickets" && (config == null ? void 0 : config.TICKET_ENABLED) === false) {
    alert("工单功能已被禁用");
    next("/dashboard");
    return;
  }
  if (to.name === "TrafficDetails" && (config == null ? void 0 : config.TRAFFIC_DETAILS_ENABLED) === false) {
    alert("流量明细功能已被禁用");
    next("/dashboard");
    return;
  }
  if (to.meta.requiresAuth !== false && !authStore2.isAuthenticated) {
    next("/login");
  } else if (to.path === "/login" && authStore2.isAuthenticated) {
    next("/dashboard");
  } else {
    next();
  }
});
const app = createApp(_sfc_main);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(naive);
const authStore = useAuthStore();
authStore.initAuth();
app.mount("#app");
export {
  apiClient as a,
  useAuthStore as u
};
