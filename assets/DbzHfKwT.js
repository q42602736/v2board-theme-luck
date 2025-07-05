import { u as useAuthStore } from "./BBbuoBq5.js";
import { k as defineComponent, e as reactive, r as ref, c as computed, o as onMounted, E as onUnmounted, $ as createElementBlock, a0 as createBaseVNode, I as normalizeStyle, a1 as createStaticVNode, W as createVNode, a2 as toDisplayString, R as createBlock, N as unref, V as withCtx, S as resolveComponent, F as Fragment, Q as renderList, U as openBlock, j as createTextVNode, L as normalizeClass, a3 as createCommentVNode, a4 as resolveDynamicComponent, a5 as useRouter } from "./DM1yaN1X.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import "./BEq_qS6Y.js";
import "./0I8bmyai.js";
const _imports_0$2 = "/theme/malio/index/landing/ill.svg";
const _imports_1$2 = "/theme/malio/index/img/data_center.svg";
const _imports_2$2 = "/theme/malio/index/img/netflix.png";
const _imports_3$2 = "/theme/malio/index/img/spotify.png";
const _imports_4$2 = "/theme/malio/index/img/hbo.png";
const _imports_5$2 = "/theme/malio/index/img/waiting_notifications.svg";
const zhCN = {
  appName: "V2Board",
  features: {
    monitoring: {
      title: "秒级状态监控",
      description: "感受云主机心跳，性能瓶颈秒定位"
    },
    deployment: {
      title: "50 秒即开即用",
      description: "分钟建好云主机，想码就码无压力"
    },
    billing: {
      title: "颗粒化小时计费",
      description: "按需计费才是真正的云计算！"
    },
    network: {
      title: "千兆内网互联",
      description: "内部开源镜像站，升级无需再等待"
    },
    quota: {
      title: "动态资源配额",
      description: "大户邻居不可怕，智能配额控制它"
    },
    api: {
      title: "开放接口支持",
      description: "集群维护从此变得So Easy！"
    }
  },
  plans: {
    basic: {
      name: "标准版",
      features: {
        traffic: "500GB 使用流量",
        devices: "3个 在线客户端",
        support: "工单技术支持",
        standard: "国际标准节点",
        relay: "国内中转节点",
        iplc: "IPLC专线节点"
      }
    },
    plus: {
      name: "高级版",
      features: {
        traffic: "1000GB 使用流量",
        devices: "6个 在线客户端",
        support: "在线客服支持",
        standard: "国际标准节点",
        relay: "国内中转节点",
        iplc: "IPLC专线节点"
      }
    },
    pro: {
      name: "专业版",
      features: {
        traffic: "2000GB 使用流量",
        devices: "10个 在线客户端",
        support: "在线客服支持",
        standard: "国际标准节点",
        relay: "国内中转节点",
        iplc: "IPLC专线节点"
      }
    }
  },
  ui: {
    home: "首页",
    login: "登陆",
    register: "注册",
    userCenter: "用户中心",
    startUsing: "开始使用",
    purchase: "购买",
    scrollDown: "向下滚动",
    technicalAdvantages: "技术优势",
    servicePurchase: "服务购买",
    hardwareProtection: "硬件高防",
    enterUse: "进入使用",
    footer: {
      slogan: "一切的开端，梦的延续"
    }
  },
  protection: {
    title: "硬件高防",
    description1: "采用金盾集群进行清洗",
    description2: "一分钟内自动检测 3-7 层攻击包特征启动防御方案",
    maxProtection: "最高可定制升级至 200G 保护"
  },
  dataCenter: {
    coverage: "数据中心覆盖中国(香港)、日本(东京、大阪)、美国(洛杉矶、圣何塞)、新加坡、英国(伦敦)、德国(法兰克福)、荷兰(阿姆斯特丹)"
  }
};
const enUS = {
  appName: "V2Board",
  features: {
    monitoring: {
      title: "Second-level Monitoring",
      description: "Feel the heartbeat of cloud hosts, locate performance bottlenecks in seconds"
    },
    deployment: {
      title: "50 Second Instant Use",
      description: "Build cloud hosts in minutes, code without pressure"
    },
    billing: {
      title: "Granular Hourly Billing",
      description: "Pay-as-you-go is true cloud computing!"
    },
    network: {
      title: "Gigabit Internal Network",
      description: "Internal open source mirror site, no more waiting for upgrades"
    },
    quota: {
      title: "Dynamic Resource Quota",
      description: "Big neighbors are not scary, smart quota controls them"
    },
    api: {
      title: "Open API Support",
      description: "Cluster maintenance becomes So Easy!"
    }
  },
  plans: {
    basic: {
      name: "Basic",
      features: {
        traffic: "500GB Data",
        devices: "3 Devices",
        support: "Ticket Support",
        standard: "Standard Servers",
        relay: "Relay Servers",
        iplc: "IPLC Servers"
      }
    },
    plus: {
      name: "Plus",
      features: {
        traffic: "1000GB Data",
        devices: "6 Devices",
        support: "LiveChat Support",
        standard: "Standard Servers",
        relay: "Relay Servers",
        iplc: "IPLC Servers"
      }
    },
    pro: {
      name: "Pro",
      features: {
        traffic: "2000GB Data",
        devices: "10 Devices",
        support: "LiveChat Support",
        standard: "Standard Servers",
        relay: "Relay Servers",
        iplc: "IPLC Servers"
      }
    }
  },
  ui: {
    home: "Home",
    login: "Login",
    register: "Register",
    userCenter: "User Center",
    startUsing: "Get Started",
    purchase: "Purchase",
    scrollDown: "Scroll Down",
    technicalAdvantages: "Technical Advantages",
    servicePurchase: "Service Purchase",
    hardwareProtection: "Hardware Protection",
    enterUse: "Enter Use",
    footer: {
      slogan: "The beginning of everything, the continuation of dreams"
    }
  },
  protection: {
    title: "Hardware Protection",
    description1: "Using Golden Shield cluster for cleaning",
    description2: "Automatically detect 3-7 layer attack packet features within one minute to start defense plan",
    maxProtection: "Maximum customizable upgrade to 200G protection"
  },
  dataCenter: {
    coverage: "Data centers cover China (Hong Kong), Japan (Tokyo, Osaka), United States (Los Angeles, San Jose), Singapore, United Kingdom (London), Germany (Frankfurt), Netherlands (Amsterdam)"
  }
};
const _hoisted_1$3 = {
  id: "stage",
  class: "zhujike-theme"
};
const _hoisted_2$3 = { class: "step-1" };
const _hoisted_3$3 = { class: "step-1-in" };
const _hoisted_4$3 = { class: "layout" };
const _hoisted_5$3 = { href: "/" };
const _hoisted_6$3 = { class: "tip tip-1" };
const _hoisted_7$3 = { class: "step-2" };
const _hoisted_8$3 = { class: "content" };
const _hoisted_9$3 = { class: "ui-h ui-h-1" };
const _hoisted_10$3 = { class: "icon" };
const _hoisted_11$3 = { class: "step-3" };
const _hoisted_12$3 = { class: "ui-h ui-h-2" };
const _hoisted_13$3 = { class: "head" };
const _hoisted_14$3 = { class: "note layout" };
const _hoisted_15$3 = { class: "step-4" };
const _hoisted_16$3 = { id: "step4" };
const _hoisted_17$3 = { class: "content" };
const _hoisted_18$3 = { class: "ui-h ui-h-3" };
const _hoisted_19$3 = { class: "note layout" };
const _hoisted_20$3 = { class: "note layout" };
const _hoisted_21$3 = { class: "op5" };
const _hoisted_22$3 = { class: "step-5" };
const _hoisted_23$3 = { class: "htko" };
const _hoisted_24$3 = { class: "layout" };
const _hoisted_25$3 = { class: "l" };
const _hoisted_26$3 = { class: "r" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ZhujikeTheme",
  setup(__props) {
    var _a;
    const authStore = useAuthStore();
    const rotation = reactive({ x: -1.445, y: -1.815 });
    const config = ref({
      appName: ((_a = window.V2BOARD_CONFIG) == null ? void 0 : _a.APP_TITLE) || "V2Board"
    });
    const currentLang = ref("zh-cn");
    const locale = computed(() => {
      return currentLang.value === "en" ? enUS : zhCN;
    });
    const features = ref([
      {
        number: "1",
        unit: "Second",
        title: "秒级状态监控",
        description: "感受云主机心跳，性能瓶颈秒定位"
      },
      {
        number: "1",
        unit: "Minute",
        title: "50 秒即开即用",
        description: "分钟建好云主机，想码就码无压力"
      },
      {
        number: "1",
        unit: "Hour",
        title: "颗粒化小时计费",
        description: "按需计费才是真正的云计算！"
      },
      {
        number: "1000",
        unit: "Mbps",
        title: "千兆内网互联",
        description: "内部开源镜像站，升级无需再等待"
      },
      {
        number: "",
        unit: "SmartQuota",
        title: "动态资源配额",
        description: "大户邻居不可怕，智能配额控制它"
      },
      {
        number: "",
        unit: "API",
        title: "开放接口支持",
        description: "集群维护从此变得So Easy！"
      }
    ]);
    const plans = ref([
      {
        name: "标准版",
        price: "19",
        currency: "¥",
        billing: "月",
        features: [
          { support: true, name: "500GB 使用流量" },
          { support: true, name: "3个 在线客户端" },
          { support: true, name: "工单技术支持" },
          { support: true, name: "国际标准节点" },
          { support: false, name: "国内中转节点" },
          { support: false, name: "IPLC专线节点" }
        ]
      },
      {
        name: "高级版",
        price: "39",
        currency: "¥",
        billing: "月",
        features: [
          { support: true, name: "1000GB 使用流量" },
          { support: true, name: "6个 在线客户端" },
          { support: true, name: "在线客服支持" },
          { support: true, name: "国际标准节点" },
          { support: true, name: "国内中转节点" },
          { support: false, name: "IPLC专线节点" }
        ]
      },
      {
        name: "专业版",
        price: "69",
        currency: "¥",
        billing: "月",
        features: [
          { support: true, name: "2000GB 使用流量" },
          { support: true, name: "10个 在线客户端" },
          { support: true, name: "在线客服支持" },
          { support: true, name: "国际标准节点" },
          { support: true, name: "国内中转节点" },
          { support: true, name: "IPLC专线节点" }
        ]
      }
    ]);
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      rotation.x = -1.445 + (clientY / innerHeight - 0.5) * 2;
      rotation.y = -1.815 + (clientX / innerWidth - 0.5) * 2;
    };
    onMounted(() => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/theme/zhujike/i.css";
      document.head.appendChild(link);
      const script1 = document.createElement("script");
      script1.src = "/theme/zhujike/hm.js";
      document.head.appendChild(script1);
      const script2 = document.createElement("script");
      script2.src = "/theme/zhujike/c.js";
      document.head.appendChild(script2);
      const script3 = document.createElement("script");
      script3.src = "/theme/zhujike/stats.js";
      script3.style.display = "none";
      document.head.appendChild(script3);
      document.addEventListener("mousemove", handleMouseMove);
    });
    onUnmounted(() => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_big = resolveComponent("big");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("article", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("div", {
              id: "test",
              style: normalizeStyle({ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` })
            }, [
              createBaseVNode("header", null, [
                createBaseVNode("div", _hoisted_4$3, [
                  createBaseVNode("h1", null, toDisplayString(config.value.appName), 1),
                  createBaseVNode("nav", null, [
                    createBaseVNode("a", _hoisted_5$3, toDisplayString(locale.value.ui.home), 1),
                    unref(authStore).isAuthenticated ? (openBlock(), createBlock(_component_router_link, {
                      key: 0,
                      to: "/dashboard",
                      class: "login-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(locale.value.ui.userCenter), 1)
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_router_link, {
                      key: 1,
                      to: "/login",
                      class: "login-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(locale.value.ui.login), 1)
                      ]),
                      _: 1
                    }))
                  ])
                ])
              ]),
              _cache[0] || (_cache[0] = createStaticVNode('<h2 data-v-5b86105c><span class="line line-1" data-v-5b86105c>可能是<span class="moji-1" data-v-5b86105c>最萌</span>的</span><span class="line line-2" data-v-5b86105c>云计算服务商</span></h2><i class="bg" data-v-5b86105c></i><i class="hr" data-v-5b86105c></i><div class="shell-box" data-v-5b86105c><i class="shell-shadow" data-v-5b86105c></i><i class="shell" data-v-5b86105c><span data-v-5b86105c></span></i></div>', 4)),
              createVNode(_component_router_link, {
                to: "/register",
                class: "link-reg"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(locale.value.ui.startUsing), 1)
                ]),
                _: 1
              }),
              _cache[1] || (_cache[1] = createBaseVNode("i", { class: "light" }, null, -1))
            ], 4)
          ])
        ]),
        createBaseVNode("span", _hoisted_6$3, toDisplayString(locale.value.ui.scrollDown), 1),
        createBaseVNode("article", _hoisted_7$3, [
          createBaseVNode("div", _hoisted_8$3, [
            createBaseVNode("h3", _hoisted_9$3, toDisplayString(locale.value.ui.technicalAdvantages), 1),
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(features.value, (feature, index) => {
                return openBlock(), createElementBlock("li", {
                  key: index,
                  class: normalizeClass(`feature-${index + 1}`)
                }, [
                  createBaseVNode("div", _hoisted_10$3, [
                    _cache[2] || (_cache[2] = createBaseVNode("i", null, null, -1)),
                    createVNode(_component_big, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(feature.number), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createBaseVNode("cite", null, toDisplayString(feature.unit), 1)
                  ]),
                  createBaseVNode("h4", null, toDisplayString(feature.title), 1),
                  createBaseVNode("p", null, toDisplayString(feature.description), 1)
                ], 2);
              }), 128))
            ])
          ]),
          _cache[3] || (_cache[3] = createBaseVNode("i", { class: "after" }, null, -1))
        ]),
        createBaseVNode("article", _hoisted_11$3, [
          createBaseVNode("h3", _hoisted_12$3, toDisplayString(locale.value.ui.servicePurchase), 1),
          createBaseVNode("ul", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan, index) => {
              return openBlock(), createElementBlock("li", { key: index }, [
                createBaseVNode("div", _hoisted_13$3, [
                  createBaseVNode("h4", null, [
                    createVNode(_component_big, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(plan.currency) + toDisplayString(plan.price) + "元/" + toDisplayString(plan.billing), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createBaseVNode("small", null, toDisplayString(plan.name), 1)
                  ])
                ]),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(plan.features, (feature, fIndex) => {
                    return openBlock(), createElementBlock("li", { key: fIndex }, [
                      createBaseVNode("i", null, toDisplayString(feature.support ? "√" : "×"), 1),
                      createBaseVNode("b", null, toDisplayString(feature.name), 1)
                    ]);
                  }), 128))
                ]),
                createVNode(_component_router_link, {
                  to: "/shop",
                  class: "button"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(locale.value.ui.purchase), 1)
                  ]),
                  _: 1
                })
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_14$3, [
            createBaseVNode("p", null, "※ " + toDisplayString(locale.value.dataCenter.coverage), 1)
          ])
        ]),
        createBaseVNode("article", _hoisted_15$3, [
          createBaseVNode("div", _hoisted_16$3, [
            createBaseVNode("div", _hoisted_17$3, [
              _cache[4] || (_cache[4] = createBaseVNode("i", null, null, -1)),
              createBaseVNode("h3", _hoisted_18$3, toDisplayString(locale.value.protection.title), 1),
              createBaseVNode("div", _hoisted_19$3, [
                createBaseVNode("p", null, toDisplayString(locale.value.protection.description1), 1),
                createBaseVNode("p", null, toDisplayString(locale.value.protection.description2), 1)
              ]),
              createVNode(_component_router_link, {
                to: "/register",
                class: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(locale.value.ui.enterUse), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_20$3, [
                createBaseVNode("p", _hoisted_21$3, toDisplayString(locale.value.protection.maxProtection), 1)
              ])
            ]),
            _cache[5] || (_cache[5] = createBaseVNode("i", { class: "shell-2" }, null, -1))
          ])
        ]),
        createBaseVNode("footer", _hoisted_22$3, [
          createBaseVNode("div", _hoisted_23$3, [
            createBaseVNode("p", null, toDisplayString(locale.value.ui.footer.slogan), 1)
          ]),
          createBaseVNode("div", _hoisted_24$3, [
            createBaseVNode("div", _hoisted_25$3, [
              createVNode(_component_router_link, { to: "/register" }, {
                default: withCtx(() => [
                  createTextVNode("@" + toDisplayString(config.value.appName), 1)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_26$3, [
              createVNode(_component_router_link, { to: "/register" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(config.value.appName), 1)
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
const ZhujikeTheme = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5b86105c"]]);
const _imports_0$1 = "/theme/cool/man.png";
const _imports_1$1 = "/theme/cool/code.png";
const _imports_2$1 = "/theme/cool/carpet.png";
const _imports_3$1 = "/theme/cool/bin.png";
const _imports_4$1 = "/theme/cool/book.png";
const _imports_5$1 = "/theme/cool/dekstop.png";
const _imports_6$1 = "/theme/cool/dot.png";
const _imports_7 = "/theme/cool/flower-top-big.png";
const _imports_8 = "/theme/cool/flower-top.png";
const _imports_9 = "/theme/cool/keyboard.png";
const _imports_10 = "/theme/cool/pen.png";
const _imports_11 = "/theme/cool/tea-cup.png";
const _imports_12 = "/theme/cool/headphone.png";
const _imports_13 = "/theme/cool/main-pic.png";
const _imports_14 = "/theme/cool/shape1.png";
const _imports_15 = "/theme/cool/shape2.svg";
const _imports_16 = "/theme/cool/shape3.svg";
const _imports_17 = "/theme/cool/shape4.svg";
const _imports_18 = "/theme/cool/shape5.png";
const _imports_19 = "/theme/cool/book-self.png";
const _imports_20 = "/theme/cool/box.png";
const _imports_21 = "/theme/cool/chair.png";
const _imports_22 = "/theme/cool/cloud.png";
const _imports_23 = "/theme/cool/cup.png";
const _imports_24 = "/theme/cool/head-phone.png";
const _imports_25 = "/theme/cool/monitor.png";
const _imports_26 = "/theme/cool/mug.png";
const _imports_27 = "/theme/cool/tissue.png";
const _imports_28 = "/theme/cool/water-bottle.png";
const _imports_29 = "/theme/cool/wifi.png";
const _imports_30 = "/theme/cool/cercle-shape.png";
const _imports_31 = "/theme/cool/map.png";
const _hoisted_1$2 = { class: "cool-theme" };
const _hoisted_2$2 = {
  id: "header",
  class: "headroom headroom--not-bottom headroom--top"
};
const _hoisted_3$2 = { class: "startp-responsive-nav" };
const _hoisted_4$2 = { class: "container" };
const _hoisted_5$2 = { class: "startp-responsive-menu" };
const _hoisted_6$2 = { class: "logo" };
const _hoisted_7$2 = { class: "startp-nav" };
const _hoisted_8$2 = { class: "container" };
const _hoisted_9$2 = { class: "navbar navbar-expand-md navbar-light" };
const _hoisted_10$2 = { class: "others-option" };
const _hoisted_11$2 = { class: "main-banner" };
const _hoisted_12$2 = { class: "d-table" };
const _hoisted_13$2 = { class: "d-table-cell" };
const _hoisted_14$2 = { class: "container" };
const _hoisted_15$2 = { class: "row h-100 justify-content-center align-items-center" };
const _hoisted_16$2 = { class: "col-lg-5" };
const _hoisted_17$2 = { class: "hero-content" };
const _hoisted_18$2 = {
  class: "ready-to-talk",
  id: "purchase"
};
const _hoisted_19$2 = { class: "container" };
const _hoisted_20$2 = {
  class: "footer-area bg-f7fafd",
  id: "support"
};
const _hoisted_21$2 = { class: "container" };
const _hoisted_22$2 = { class: "row" };
const _hoisted_23$2 = { class: "col-lg-3 col-md-6 col-sm-6" };
const _hoisted_24$2 = { class: "single-footer-widget" };
const _hoisted_25$2 = { class: "logo" };
const _hoisted_26$2 = { class: "col-lg-3 col-md-6 col-sm-6" };
const _hoisted_27$2 = { class: "single-footer-widget pl-5" };
const _hoisted_28$2 = { class: "list" };
const _hoisted_29$2 = { class: "col-lg-3 col-md-6 col-sm-6" };
const _hoisted_30$2 = { class: "single-footer-widget" };
const _hoisted_31$2 = { class: "list" };
const _hoisted_32$2 = { class: "col-lg-12 col-md-12" };
const _hoisted_33$2 = { class: "copyright-area" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CoolTheme",
  setup(__props) {
    var _a;
    const authStore = useAuthStore();
    const config = ref({
      appName: ((_a = window.V2BOARD_CONFIG) == null ? void 0 : _a.APP_TITLE) || "V2Board"
    });
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _cache[25] || (_cache[25] = createBaseVNode("div", { id: "css-loader" }, [
          createBaseVNode("link", {
            rel: "stylesheet",
            href: "/theme/cool/bootstrap.min.css"
          }),
          createBaseVNode("link", {
            rel: "stylesheet",
            href: "/theme/cool/style.css"
          }),
          createBaseVNode("link", {
            rel: "stylesheet",
            href: "/theme/cool/responsive.css"
          })
        ], -1)),
        createBaseVNode("header", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", _hoisted_4$2, [
              createBaseVNode("div", _hoisted_5$2, [
                createBaseVNode("div", _hoisted_6$2, [
                  createVNode(_component_router_link, { to: "/" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(config.value.appName), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7$2, [
            createBaseVNode("div", _hoisted_8$2, [
              createBaseVNode("nav", _hoisted_9$2, [
                createVNode(_component_router_link, {
                  class: "navbar-brand",
                  to: "/"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(config.value.appName), 1)
                  ]),
                  _: 1
                }),
                _cache[3] || (_cache[3] = createStaticVNode('<div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" data-v-7ffba1a0><ul class="navbar-nav nav ml-auto" data-v-7ffba1a0><li class="nav-item" data-v-7ffba1a0><a href="#features" class="nav-link" data-v-7ffba1a0>特性</a></li><li class="nav-item" data-v-7ffba1a0><a href="#purchase" class="nav-link" data-v-7ffba1a0>价格</a></li><li class="nav-item" data-v-7ffba1a0><a href="#support" class="nav-link" data-v-7ffba1a0>支持</a></li></ul></div>', 1)),
                createBaseVNode("div", _hoisted_10$2, [
                  unref(authStore).isAuthenticated ? (openBlock(), createBlock(_component_router_link, {
                    key: 0,
                    to: "/dashboard",
                    class: "btn btn-primary"
                  }, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("用户中心")
                    ])),
                    _: 1,
                    __: [0]
                  })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createVNode(_component_router_link, {
                      to: "/register",
                      class: "btn btn-light"
                    }, {
                      default: withCtx(() => _cache[1] || (_cache[1] = [
                        createTextVNode("注册")
                      ])),
                      _: 1,
                      __: [1]
                    }),
                    createVNode(_component_router_link, {
                      to: "/login",
                      class: "btn btn-primary"
                    }, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("登录")
                      ])),
                      _: 1,
                      __: [2]
                    })
                  ], 64))
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_11$2, [
          createBaseVNode("div", _hoisted_12$2, [
            createBaseVNode("div", _hoisted_13$2, [
              createBaseVNode("div", _hoisted_14$2, [
                createBaseVNode("div", _hoisted_15$2, [
                  createBaseVNode("div", _hoisted_16$2, [
                    createBaseVNode("div", _hoisted_17$2, [
                      createBaseVNode("h1", null, toDisplayString(config.value.appName), 1),
                      _cache[5] || (_cache[5] = createBaseVNode("p", null, "科学上网畅通无阻、科学游戏加速响应", -1)),
                      createVNode(_component_router_link, {
                        to: "/register",
                        class: "btn btn-primary"
                      }, {
                        default: withCtx(() => _cache[4] || (_cache[4] = [
                          createTextVNode("开始使用")
                        ])),
                        _: 1,
                        __: [4]
                      })
                    ])
                  ]),
                  _cache[6] || (_cache[6] = createStaticVNode('<div class="col-lg-6 offset-lg-1" data-v-7ffba1a0><div class="banner-image" data-v-7ffba1a0><img src="' + _imports_0$1 + '" alt="man" data-v-7ffba1a0><img src="' + _imports_1$1 + '" alt="code" data-v-7ffba1a0><img src="' + _imports_2$1 + '" alt="carpet" data-v-7ffba1a0><img src="' + _imports_3$1 + '" alt="bin" data-v-7ffba1a0><img src="' + _imports_4$1 + '" alt="book" data-v-7ffba1a0><img src="' + _imports_5$1 + '" alt="dekstop" data-v-7ffba1a0><img src="' + _imports_6$1 + '" alt="dot" data-v-7ffba1a0><img src="' + _imports_7 + '" alt="flower-top-big" data-v-7ffba1a0><img src="' + _imports_8 + '" alt="flower-top" data-v-7ffba1a0><img src="' + _imports_9 + '" alt="keyboard" data-v-7ffba1a0><img src="' + _imports_10 + '" alt="pen" data-v-7ffba1a0><img src="' + _imports_11 + '" alt="tea-cup" data-v-7ffba1a0><img src="' + _imports_12 + '" alt="headphone" data-v-7ffba1a0><img src="' + _imports_13 + '" alt="main-pic" data-v-7ffba1a0></div></div>', 1))
                ])
              ])
            ])
          ]),
          _cache[7] || (_cache[7] = createStaticVNode('<div class="shape1" data-v-7ffba1a0><img src="' + _imports_14 + '" alt="shape" data-v-7ffba1a0></div><div class="shape2 rotateme" data-v-7ffba1a0><img src="' + _imports_15 + '" alt="shape" data-v-7ffba1a0></div><div class="shape3" data-v-7ffba1a0><img src="' + _imports_16 + '" alt="shape" data-v-7ffba1a0></div><div class="shape4" data-v-7ffba1a0><img src="' + _imports_17 + '" alt="shape" data-v-7ffba1a0></div><div class="shape5" data-v-7ffba1a0><img src="' + _imports_18 + '" alt="shape" data-v-7ffba1a0></div><div class="shape6 rotateme" data-v-7ffba1a0><img src="' + _imports_17 + '" alt="shape" data-v-7ffba1a0></div><div class="shape7" data-v-7ffba1a0><img src="' + _imports_17 + '" alt="shape" data-v-7ffba1a0></div><div class="shape8 rotateme" data-v-7ffba1a0><img src="' + _imports_15 + '" alt="shape" data-v-7ffba1a0></div>', 8))
        ]),
        _cache[26] || (_cache[26] = createStaticVNode('<section class="boxes-area" id="features" data-v-7ffba1a0><div class="container" data-v-7ffba1a0><div class="row" data-v-7ffba1a0><div class="col-lg-3 col-md-6 col-sm-6" data-v-7ffba1a0><div class="single-box" data-v-7ffba1a0><div class="icon" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server" data-v-7ffba1a0><rect x="2" y="2" width="20" height="8" rx="2" ry="2" data-v-7ffba1a0></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2" data-v-7ffba1a0></rect><line x1="6" y1="6" x2="6" y2="6" data-v-7ffba1a0></line><line x1="6" y1="18" x2="6" y2="18" data-v-7ffba1a0></line></svg></div><h3 data-v-7ffba1a0>服务</h3><p data-v-7ffba1a0>致力于为用户提供高速稳定的高性价比网络中继服务</p></div></div><div class="col-lg-3 col-md-6 col-sm-6" data-v-7ffba1a0><div class="single-box bg-f78acb" data-v-7ffba1a0><div class="icon" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code" data-v-7ffba1a0><polyline points="16 18 22 12 16 6" data-v-7ffba1a0></polyline><polyline points="8 6 2 12 8 18" data-v-7ffba1a0></polyline></svg></div><h3 data-v-7ffba1a0>便携设置</h3><p data-v-7ffba1a0>借助第三方客户端，可在手机、电脑、路由器、游戏机、电视盒子中使用</p></div></div><div class="col-lg-3 col-md-6 col-sm-6" data-v-7ffba1a0><div class="single-box bg-eb6b3d" data-v-7ffba1a0><div class="icon" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch" data-v-7ffba1a0><line x1="6" y1="3" x2="6" y2="15" data-v-7ffba1a0></line><circle cx="18" cy="6" r="3" data-v-7ffba1a0></circle><circle cx="6" cy="18" r="3" data-v-7ffba1a0></circle><path d="M18 9a9 9 0 0 1-9 9" data-v-7ffba1a0></path></svg></div><h3 data-v-7ffba1a0>教程</h3><p data-v-7ffba1a0>我们用心设计教程，详细解说每一步配置，即使是零基础小白用户也可以无忧使用</p></div></div><div class="col-lg-3 col-md-6 col-sm-6" data-v-7ffba1a0><div class="single-box bg-c679e3" data-v-7ffba1a0><div class="icon" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users" data-v-7ffba1a0><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-v-7ffba1a0></path><circle cx="9" cy="7" r="4" data-v-7ffba1a0></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" data-v-7ffba1a0></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-v-7ffba1a0></path></svg></div><h3 data-v-7ffba1a0>稳定</h3><p data-v-7ffba1a0>我们将严格遵守用户隐私保护法，在传输过程中使用最强的加密方式</p></div></div></div></div></section><section class="services-area ptb-80 bg-f7fafd" data-v-7ffba1a0><div class="container" data-v-7ffba1a0><div class="row h-100 justify-content-center align-items-center" data-v-7ffba1a0><div class="col-lg-6 col-md-12 services-content" data-v-7ffba1a0><div class="section-title" data-v-7ffba1a0><h2 data-v-7ffba1a0>为你 量身定制 的服务</h2><div class="bar" data-v-7ffba1a0></div><p data-v-7ffba1a0>可靠的基础设施，并能提供您喜爱的诸多功能</p></div><div class="row" data-v-7ffba1a0><div class="col-lg-6 col-md-6 col-sm-6" data-v-7ffba1a0><div class="box" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database" data-v-7ffba1a0><ellipse cx="12" cy="5" rx="9" ry="3" data-v-7ffba1a0></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" data-v-7ffba1a0></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" data-v-7ffba1a0></path></svg> 高速稳定 </div></div><div class="col-lg-6 col-md-6 col-sm-6" data-v-7ffba1a0><div class="box" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe" data-v-7ffba1a0><circle cx="12" cy="12" r="10" data-v-7ffba1a0></circle><line x1="2" y1="12" x2="22" y2="12" data-v-7ffba1a0></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-7ffba1a0></path></svg> 便携设置 </div></div><div class="col-lg-6 col-md-6 col-sm-6" data-v-7ffba1a0><div class="box" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file" data-v-7ffba1a0><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" data-v-7ffba1a0></path><polyline points="13 2 13 9 20 9" data-v-7ffba1a0></polyline></svg> 节省成本 </div></div><div class="col-lg-6 col-md-6 col-sm-6" data-v-7ffba1a0><div class="box" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up" data-v-7ffba1a0><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" data-v-7ffba1a0></polyline><polyline points="17 6 23 6 23 12" data-v-7ffba1a0></polyline></svg> 全球互联 </div></div><div class="col-lg-6 col-md-6 col-sm-6" data-v-7ffba1a0><div class="box" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server" data-v-7ffba1a0><rect x="2" y="2" width="20" height="8" rx="2" ry="2" data-v-7ffba1a0></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2" data-v-7ffba1a0></rect><line x1="6" y1="6" x2="6" y2="6" data-v-7ffba1a0></line><line x1="6" y1="18" x2="6" y2="18" data-v-7ffba1a0></line></svg> 运营商友好 </div></div><div class="col-lg-6 col-md-6 col-sm-6" data-v-7ffba1a0><div class="box" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor" data-v-7ffba1a0><rect x="2" y="3" width="20" height="14" rx="2" ry="2" data-v-7ffba1a0></rect><line x1="8" y1="21" x2="16" y2="21" data-v-7ffba1a0></line><line x1="12" y1="17" x2="12" y2="21" data-v-7ffba1a0></line></svg> 多应用兼容 </div></div></div></div><div class="col-lg-6 col-md-12 services-right-image" data-v-7ffba1a0><img src="' + _imports_19 + '" alt="book-self" data-v-7ffba1a0><img src="' + _imports_20 + '" alt="box" data-v-7ffba1a0><img src="' + _imports_21 + '" alt="chair" data-v-7ffba1a0><img src="' + _imports_22 + '" alt="cloud" data-v-7ffba1a0><img src="' + _imports_23 + '" alt="cup" data-v-7ffba1a0><img src="' + _imports_8 + '" alt="flower" data-v-7ffba1a0><img src="' + _imports_24 + '" alt="head-phone" data-v-7ffba1a0><img src="' + _imports_25 + '" alt="monitor" data-v-7ffba1a0><img src="' + _imports_26 + '" alt="mug" data-v-7ffba1a0><img src="' + _imports_27 + '" alt="tissue" data-v-7ffba1a0><img src="' + _imports_28 + '" alt="water-bottle" data-v-7ffba1a0><img src="' + _imports_29 + '" alt="wifi" data-v-7ffba1a0><img src="' + _imports_30 + '" class="bg-image rotateme" alt="shape" data-v-7ffba1a0><img src="' + _imports_13 + '" alt="main-pic" data-v-7ffba1a0></div></div></div></section>', 2)),
        createBaseVNode("section", _hoisted_18$2, [
          createBaseVNode("div", _hoisted_19$2, [
            _cache[9] || (_cache[9] = createBaseVNode("h3", null, "如何使用?", -1)),
            _cache[10] || (_cache[10] = createBaseVNode("p", null, "点击下方注册按钮，立即开始畅游网络", -1)),
            createVNode(_component_router_link, {
              to: "/register",
              class: "btn btn-primary"
            }, {
              default: withCtx(() => _cache[8] || (_cache[8] = [
                createTextVNode("立即注册")
              ])),
              _: 1,
              __: [8]
            })
          ])
        ]),
        createBaseVNode("footer", _hoisted_20$2, [
          createBaseVNode("div", _hoisted_21$2, [
            createBaseVNode("div", _hoisted_22$2, [
              createBaseVNode("div", _hoisted_23$2, [
                createBaseVNode("div", _hoisted_24$2, [
                  createBaseVNode("div", _hoisted_25$2, [
                    createVNode(_component_router_link, {
                      class: "navbar-brand",
                      to: "/"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(config.value.appName), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _cache[11] || (_cache[11] = createBaseVNode("p", null, "致力于为用户提供高速稳定的高性价比网络中继服务", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_26$2, [
                createBaseVNode("div", _hoisted_27$2, [
                  _cache[16] || (_cache[16] = createBaseVNode("h3", null, "首页", -1)),
                  createBaseVNode("ul", _hoisted_28$2, [
                    createBaseVNode("li", null, [
                      createVNode(_component_router_link, { to: "/shop" }, {
                        default: withCtx(() => _cache[12] || (_cache[12] = [
                          createTextVNode("商店")
                        ])),
                        _: 1,
                        __: [12]
                      })
                    ]),
                    createBaseVNode("li", null, [
                      createVNode(_component_router_link, { to: "/nodes" }, {
                        default: withCtx(() => _cache[13] || (_cache[13] = [
                          createTextVNode("节点列表")
                        ])),
                        _: 1,
                        __: [13]
                      })
                    ]),
                    createBaseVNode("li", null, [
                      createVNode(_component_router_link, { to: "/invite" }, {
                        default: withCtx(() => _cache[14] || (_cache[14] = [
                          createTextVNode("邀请注册")
                        ])),
                        _: 1,
                        __: [14]
                      })
                    ]),
                    createBaseVNode("li", null, [
                      createVNode(_component_router_link, { to: "/download" }, {
                        default: withCtx(() => _cache[15] || (_cache[15] = [
                          createTextVNode("下载与使用")
                        ])),
                        _: 1,
                        __: [15]
                      })
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_29$2, [
                createBaseVNode("div", _hoisted_30$2, [
                  _cache[21] || (_cache[21] = createBaseVNode("h3", null, "支持", -1)),
                  createBaseVNode("ul", _hoisted_31$2, [
                    createBaseVNode("li", null, [
                      createVNode(_component_router_link, { to: "/contact" }, {
                        default: withCtx(() => _cache[17] || (_cache[17] = [
                          createTextVNode("联系我们")
                        ])),
                        _: 1,
                        __: [17]
                      })
                    ]),
                    createBaseVNode("li", null, [
                      createVNode(_component_router_link, { to: "/ticket" }, {
                        default: withCtx(() => _cache[18] || (_cache[18] = [
                          createTextVNode("新建工单")
                        ])),
                        _: 1,
                        __: [18]
                      })
                    ]),
                    createBaseVNode("li", null, [
                      createVNode(_component_router_link, { to: "/faq" }, {
                        default: withCtx(() => _cache[19] || (_cache[19] = [
                          createTextVNode("常见问题")
                        ])),
                        _: 1,
                        __: [19]
                      })
                    ]),
                    _cache[20] || (_cache[20] = createBaseVNode("li", null, [
                      createBaseVNode("a", {
                        href: "https://t.me/v2board",
                        target: "_blank"
                      }, "加入 Telegram 群组")
                    ], -1))
                  ])
                ])
              ]),
              _cache[22] || (_cache[22] = createStaticVNode('<div class="col-lg-3 col-md-6 col-sm-6" data-v-7ffba1a0><div class="single-footer-widget" data-v-7ffba1a0><h3 data-v-7ffba1a0>联系</h3><ul class="social-links" data-v-7ffba1a0><li data-v-7ffba1a0><a href="#" class="facebook" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook" data-v-7ffba1a0><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-7ffba1a0></path></svg></a></li><li data-v-7ffba1a0><a href="#" class="twitter" data-v-7ffba1a0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter" data-v-7ffba1a0><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-7ffba1a0></path></svg></a></li></ul></div></div>', 1)),
              createBaseVNode("div", _hoisted_32$2, [
                createBaseVNode("div", _hoisted_33$2, [
                  createBaseVNode("p", null, "© " + toDisplayString(config.value.appName) + " • Powered by V2Board", 1)
                ])
              ])
            ])
          ]),
          _cache[23] || (_cache[23] = createStaticVNode('<img src="' + _imports_31 + '" class="map" alt="map" data-v-7ffba1a0><div class="shape1" data-v-7ffba1a0><img src="' + _imports_14 + '" alt="shape" data-v-7ffba1a0></div><div class="shape8 rotateme" data-v-7ffba1a0><img src="' + _imports_15 + '" alt="shape" data-v-7ffba1a0></div>', 3))
        ]),
        createBaseVNode("div", {
          class: "go-top",
          onClick: scrollToTop
        }, _cache[24] || (_cache[24] = [
          createBaseVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "feather feather-arrow-up"
          }, [
            createBaseVNode("line", {
              x1: "12",
              y1: "19",
              x2: "12",
              y2: "5"
            }),
            createBaseVNode("polyline", { points: "5 12 12 5 19 12" })
          ], -1)
        ]))
      ]);
    };
  }
});
const CoolTheme = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7ffba1a0"]]);
const _imports_0 = "/theme/wukong/png/10.png";
const _imports_1 = "/theme/wukong/png/about.png";
const _imports_2 = "/theme/wukong/png/work.png";
const _imports_3 = "/theme/wukong/png/1.png";
const _imports_4 = "/theme/wukong/png/2.png";
const _imports_5 = "/theme/wukong/png/3.png";
const _imports_6 = "/theme/wukong/png/4.png";
const _hoisted_1$1 = { class: "wukong-theme" };
const _hoisted_2$1 = {
  id: "header-top",
  class: "navbar navbar-fixed-top"
};
const _hoisted_3$1 = { class: "container" };
const _hoisted_4$1 = { class: "navbar-header" };
const _hoisted_5$1 = {
  class: "navbar-brand",
  href: "/#"
};
const _hoisted_6$1 = {
  style: { "color": "#ffffff", "width": "100%", "font-size": "28px" },
  class: "img-responsive"
};
const _hoisted_7$1 = {
  class: "collapse navbar-collapse",
  id: "navigation"
};
const _hoisted_8$1 = { class: "nav navbar-nav navbar-right" };
const _hoisted_9$1 = { class: "active" };
const _hoisted_10$1 = {
  class: "hero-area slider-4",
  id: "slider-area"
};
const _hoisted_11$1 = { class: "slider" };
const _hoisted_12$1 = { class: "container" };
const _hoisted_13$1 = { class: "row" };
const _hoisted_14$1 = { class: "col-md-offset-4 col-sm-offset-4 col-md-8" };
const _hoisted_15$1 = { class: "hero-text mr-ri-l" };
const _hoisted_16$1 = {
  id: "about",
  class: "about-area pt-125"
};
const _hoisted_17$1 = { class: "container" };
const _hoisted_18$1 = { class: "row" };
const _hoisted_19$1 = { class: "col-md-6" };
const _hoisted_20$1 = { class: "about-content" };
const _hoisted_21$1 = { class: "how-work-area pt-130 pb-125 bg-1" };
const _hoisted_22$1 = { class: "container" };
const _hoisted_23$1 = { class: "row" };
const _hoisted_24$1 = { class: "col-md-6" };
const _hoisted_25$1 = { class: "how-work-left mt-90" };
const _hoisted_26$1 = { class: "how-work-tab mt-55" };
const _hoisted_27$1 = { class: "tab-content" };
const _hoisted_28$1 = {
  key: 0,
  class: "mt-45 tab-pane fade in active"
};
const _hoisted_29$1 = {
  key: 1,
  class: "mt-45 tab-pane fade in active"
};
const _hoisted_30$1 = {
  key: 2,
  class: "mt-45 tab-pane fade in active"
};
const _hoisted_31$1 = {
  id: "pricing",
  class: "pricing-area pt-130 pb-100"
};
const _hoisted_32$1 = { class: "container" };
const _hoisted_33$1 = { class: "row" };
const _hoisted_34$1 = { class: "col-md-4 col-sm-6" };
const _hoisted_35$1 = { class: "pricing-single white-bg text-center mb-30" };
const _hoisted_36$1 = { class: "ordr-btn uppercase" };
const _hoisted_37$1 = { class: "col-md-4 col-sm-6" };
const _hoisted_38$1 = { class: "pricing-single white-bg text-center mb-30" };
const _hoisted_39$1 = { class: "ordr-btn uppercase" };
const _hoisted_40$1 = { class: "col-md-4 col-sm-6" };
const _hoisted_41$1 = { class: "pricing-single white-bg text-center mb-30" };
const _hoisted_42$1 = { class: "ordr-btn uppercase" };
const _hoisted_43$1 = { class: "copyright-area" };
const _hoisted_44$1 = { class: "container" };
const _hoisted_45$1 = { class: "row" };
const _hoisted_46$1 = { class: "col-md-12" };
const _hoisted_47$1 = { class: "copyright-area text-center" };
const _hoisted_48$1 = { class: "copyright-text" };
const _hoisted_49$1 = { href: "/#" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WukongTheme",
  setup(__props) {
    var _a;
    const config = ref({
      appName: ((_a = window.V2BOARD_CONFIG) == null ? void 0 : _a.APP_TITLE) || "V2Board"
    });
    const activeTab = ref(0);
    const setActiveTab = (index) => {
      console.log("切换到Tab:", index);
      activeTab.value = index;
      console.log("当前activeTab:", activeTab.value);
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[31] || (_cache[31] = createStaticVNode('<div id="css-loader" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/bootstrap.min.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/font-awesome.min.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/icofont.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/meanmenu.min.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/slick.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/owl.carousel.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/magnific-popup.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/animate.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/animated-headlines.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/shortcodes.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/stylem.css" data-v-49fac8ae><link rel="stylesheet" href="/theme/wukong/css/responsive.css" data-v-49fac8ae></div>', 1)),
        createBaseVNode("header", null, [
          createBaseVNode("nav", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("div", _hoisted_4$1, [
                _cache[3] || (_cache[3] = createBaseVNode("button", {
                  type: "button",
                  class: "navbar-toggle collapsed",
                  "data-toggle": "collapse",
                  "data-target": "#navigation",
                  "aria-expanded": "false"
                }, [
                  createBaseVNode("span", { class: "icon-bar" }),
                  createBaseVNode("span", { class: "icon-bar" }),
                  createBaseVNode("span", { class: "icon-bar" })
                ], -1)),
                createBaseVNode("a", _hoisted_5$1, [
                  createBaseVNode("span", _hoisted_6$1, toDisplayString(config.value.appName), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_7$1, [
                createBaseVNode("ul", _hoisted_8$1, [
                  _cache[6] || (_cache[6] = createStaticVNode('<li class="" data-v-49fac8ae><a href="/#slider-area" data-v-49fac8ae>首页</a></li><li class="" data-v-49fac8ae><a href="/#about" data-v-49fac8ae>产品</a></li><li class="" data-v-49fac8ae><a href="/#features" data-v-49fac8ae>优势</a></li><li class="" data-v-49fac8ae><a href="/#pricing" data-v-49fac8ae>价格</a></li><li class="" data-v-49fac8ae><a href="/#client" data-v-49fac8ae>下载</a></li>', 5)),
                  createBaseVNode("li", _hoisted_9$1, [
                    createVNode(_component_router_link, { to: "/login" }, {
                      default: withCtx(() => _cache[4] || (_cache[4] = [
                        createTextVNode("登录")
                      ])),
                      _: 1,
                      __: [4]
                    })
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, {
                      to: "/register",
                      class: "download-btn"
                    }, {
                      default: withCtx(() => _cache[5] || (_cache[5] = [
                        createTextVNode("注册")
                      ])),
                      _: 1,
                      __: [5]
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10$1, [
          createBaseVNode("div", _hoisted_11$1, [
            createBaseVNode("div", _hoisted_12$1, [
              createBaseVNode("div", _hoisted_13$1, [
                createBaseVNode("div", _hoisted_14$1, [
                  createBaseVNode("div", _hoisted_15$1, [
                    createBaseVNode("h1", null, toDisplayString(config.value.appName), 1),
                    _cache[9] || (_cache[9] = createBaseVNode("h1", null, "全球网络中继服务，随时随处尽情使用", -1)),
                    _cache[10] || (_cache[10] = createBaseVNode("p", null, "通过我们的网络访问内容提供商、公司网络和公共云服务", -1)),
                    createVNode(_component_router_link, {
                      to: "/login",
                      class: "hero-btn"
                    }, {
                      default: withCtx(() => _cache[7] || (_cache[7] = [
                        createTextVNode("登录")
                      ])),
                      _: 1,
                      __: [7]
                    }),
                    createVNode(_component_router_link, {
                      to: "/register",
                      class: "hero-btn"
                    }, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode("免费试用")
                      ])),
                      _: 1,
                      __: [8]
                    })
                  ])
                ])
              ])
            ]),
            _cache[11] || (_cache[11] = createBaseVNode("div", {
              class: "slide-animation wow slideInLeft",
              "data-wow-duration": "2s",
              "data-wow-delay": "1s",
              style: { "visibility": "visible", "animation-duration": "2s", "animation-delay": "1s", "animation-name": "slideInLeft" }
            }, [
              createBaseVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ], -1))
          ])
        ]),
        _cache[32] || (_cache[32] = createStaticVNode('<section class="service-area gray-bg" data-v-49fac8ae><div class="container" data-v-49fac8ae><div class="row" data-v-49fac8ae><div class="col-md-4 col-sm-6" data-v-49fac8ae><div class="single-service" data-v-49fac8ae><div class="service-content" data-v-49fac8ae><h2 data-v-49fac8ae>各大平台全通用</h2><p data-v-49fac8ae>一个账号各大平台全通用（MacOS、Windows、IOS、Android、Linux和路由器等）</p></div></div></div><div class="col-md-4 col-sm-6" data-v-49fac8ae><div class="single-service" data-v-49fac8ae><div class="service-content" data-v-49fac8ae><h2 data-v-49fac8ae>高速流畅</h2><p data-v-49fac8ae>油管4K视频、网络直播如滑水般流畅，谷歌Google、推特、脸谱毫无压力，支持免费体验</p></div></div></div><div class="col-md-4 hidden-sm" data-v-49fac8ae><div class="single-service" data-v-49fac8ae><div class="service-content" data-v-49fac8ae><h2 data-v-49fac8ae>长期运营</h2><p data-v-49fac8ae>信誉可靠，实力雄厚，提供长期运营的VPN服务</p></div></div></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_16$1, [
          createBaseVNode("div", _hoisted_17$1, [
            createBaseVNode("div", _hoisted_18$1, [
              createBaseVNode("div", _hoisted_19$1, [
                createBaseVNode("div", _hoisted_20$1, [
                  _cache[12] || (_cache[12] = createBaseVNode("h2", null, "在你心爱的电子设备中使用，无论是移动的手机还是固定的电脑，随时随处可用", -1)),
                  createBaseVNode("p", null, toDisplayString(config.value.appName) + "的服务适用于 macOS、iOS、Android、Windows 和 Linux，借助第三方客户端，可在手机、电脑、路由器、游戏机、电视盒子中使用。", 1),
                  createBaseVNode("p", null, "通过 " + toDisplayString(config.value.appName) + " 的服务，可以观看包括 Netflix、Hulu、HBO、TVB、Happyon、AbemaTV 等在内的多种流媒体视频，聆听包括 Spotify、Pandora 等在内的流媒体音乐。", 1)
                ])
              ]),
              _cache[13] || (_cache[13] = createBaseVNode("div", { class: "col-md-6" }, [
                createBaseVNode("div", { class: "about-img" }, [
                  createBaseVNode("img", {
                    src: _imports_1,
                    alt: ""
                  })
                ])
              ], -1))
            ])
          ])
        ]),
        _cache[33] || (_cache[33] = createStaticVNode('<section id="features" class="feature-area gray-bg pt-128 pb-70" data-v-49fac8ae><div class="container" data-v-49fac8ae><div class="row" data-v-49fac8ae><div class="col-md-12 col-sm-12" data-v-49fac8ae><div class="section-heading pb-55 text-center" data-v-49fac8ae><h2 data-v-49fac8ae>产品优势</h2><p data-v-49fac8ae>产品创新，支持分布式高可用集群技术（独有），支持BGP全中转隧道加速技术，支持 V2RAY+SSR 网络双栈加速技术</p></div></div></div><div class="row" data-v-49fac8ae><div class="col-md-4 col-sm-6" data-v-49fac8ae><div class="awesome-feature text-center" data-v-49fac8ae><div class="awesome-feature-icon" data-v-49fac8ae><span data-v-49fac8ae><i class="icofont icofont-alarm" data-v-49fac8ae></i></span></div><div class="awesome-feature-details" data-v-49fac8ae><h5 data-v-49fac8ae>全球网络覆盖</h5><p data-v-49fac8ae>覆盖亚太、北美、西欧等全球网络区域，具备香港、东京等数据交换中心</p></div></div></div><div class="col-md-4 col-sm-6" data-v-49fac8ae><div class="awesome-feature text-center" data-v-49fac8ae><div class="awesome-feature-icon" data-v-49fac8ae><span data-v-49fac8ae><i class="icofont icofont-light-bulb" data-v-49fac8ae></i></span></div><div class="awesome-feature-details" data-v-49fac8ae><h5 data-v-49fac8ae>智能极速带宽</h5><p data-v-49fac8ae>智能带宽动态管理技术，带来极畅快的网络体验</p></div></div></div><div class="col-md-4 hidden-sm" data-v-49fac8ae><div class="awesome-feature text-center" data-v-49fac8ae><div class="awesome-feature-icon" data-v-49fac8ae><span data-v-49fac8ae><i class="icofont icofont-code" data-v-49fac8ae></i></span></div><div class="awesome-feature-details" data-v-49fac8ae><h5 data-v-49fac8ae>智能安全防护</h5><p data-v-49fac8ae>智能加密技术确保用户会话不被非法窃听，保障个人隐私安全</p></div></div></div></div><div class="row" data-v-49fac8ae><div class="col-md-4 col-sm-6" data-v-49fac8ae><div class="awesome-feature text-center" data-v-49fac8ae><div class="awesome-feature-icon" data-v-49fac8ae><span data-v-49fac8ae><i class="icofont icofont-ui-video-chat" data-v-49fac8ae></i></span></div><div class="awesome-feature-details" data-v-49fac8ae><h5 data-v-49fac8ae>教育科研</h5><p data-v-49fac8ae>筋斗云帮助科研人员科学上网，随时随地查阅科研文献</p></div></div></div><div class="col-md-4 col-sm-6" data-v-49fac8ae><div class="awesome-feature text-center" data-v-49fac8ae><div class="awesome-feature-icon" data-v-49fac8ae><span data-v-49fac8ae><i class="icofont icofont-ui-head-phone" data-v-49fac8ae></i></span></div><div class="awesome-feature-details" data-v-49fac8ae><h5 data-v-49fac8ae>视听娱乐</h5><p data-v-49fac8ae>筋斗云实现颠覆性的4K高清视频超畅快体验</p></div></div></div><div class="col-md-4 hidden-sm" data-v-49fac8ae><div class="awesome-feature text-center" data-v-49fac8ae><div class="awesome-feature-icon" data-v-49fac8ae><span data-v-49fac8ae><i class="icofont icofont-heart" data-v-49fac8ae></i></span></div><div class="awesome-feature-details" data-v-49fac8ae><h5 data-v-49fac8ae>跨境外贸</h5><p data-v-49fac8ae>筋斗云帮助外贸人员使用外贸应用连接全球客户</p></div></div></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_21$1, [
          createBaseVNode("div", _hoisted_22$1, [
            createBaseVNode("div", _hoisted_23$1, [
              _cache[18] || (_cache[18] = createBaseVNode("div", { class: "col-md-6" }, [
                createBaseVNode("div", { class: "how-work-right text-center" }, [
                  createBaseVNode("img", {
                    src: _imports_2,
                    alt: ""
                  })
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_24$1, [
                createBaseVNode("div", _hoisted_25$1, [
                  _cache[17] || (_cache[17] = createBaseVNode("h2", null, "产品使用", -1)),
                  createBaseVNode("div", _hoisted_26$1, [
                    createBaseVNode("ul", null, [
                      createBaseVNode("li", {
                        class: normalizeClass({ active: activeTab.value === 0 })
                      }, [
                        createBaseVNode("a", {
                          onClick: _cache[0] || (_cache[0] = ($event) => setActiveTab(0))
                        }, "1. 注册")
                      ], 2),
                      createBaseVNode("li", {
                        class: normalizeClass({ active: activeTab.value === 1 })
                      }, [
                        createBaseVNode("a", {
                          onClick: _cache[1] || (_cache[1] = ($event) => setActiveTab(1))
                        }, "2. 下载")
                      ], 2),
                      createBaseVNode("li", {
                        class: normalizeClass({ active: activeTab.value === 2 })
                      }, [
                        createBaseVNode("a", {
                          onClick: _cache[2] || (_cache[2] = ($event) => setActiveTab(2))
                        }, "3. 运行")
                      ], 2)
                    ]),
                    createBaseVNode("div", _hoisted_27$1, [
                      activeTab.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_28$1, _cache[14] || (_cache[14] = [
                        createBaseVNode("p", null, "1.免费注册并登录，进入用户中心", -1)
                      ]))) : createCommentVNode("", true),
                      activeTab.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_29$1, _cache[15] || (_cache[15] = [
                        createBaseVNode("p", null, "2.并安装对应平台的客户端软件", -1)
                      ]))) : createCommentVNode("", true),
                      activeTab.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_30$1, _cache[16] || (_cache[16] = [
                        createBaseVNode("p", null, "3.观看本站提供的原创视频教程，运行和配置客户端软件，畅游云端世界", -1)
                      ]))) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _cache[34] || (_cache[34] = createStaticVNode('<section class="funfact-area bg-2 pt-125 pb-130" data-v-49fac8ae><div class="container" data-v-49fac8ae><div class="row" data-v-49fac8ae><div class="col-sm-3" data-v-49fac8ae><div class="single-fact text-center" data-v-49fac8ae><h2 class="counter" data-v-49fac8ae>28000</h2><h5 data-v-49fac8ae>教育科研工作者</h5></div></div><div class="col-sm-3" data-v-49fac8ae><div class="single-fact text-center" data-v-49fac8ae><h2 class="counter" data-v-49fac8ae>39000</h2><h5 data-v-49fac8ae>视听娱乐用户</h5></div></div><div class="col-sm-3" data-v-49fac8ae><div class="single-fact text-center" data-v-49fac8ae><h2 class="counter" data-v-49fac8ae>23000</h2><h5 data-v-49fac8ae>币圈炒股用户</h5></div></div><div class="col-sm-3" data-v-49fac8ae><div class="single-fact text-center" data-v-49fac8ae><h2 class="counter" data-v-49fac8ae>11000</h2><h5 data-v-49fac8ae>跨境外贸工作者</h5></div></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_31$1, [
          createBaseVNode("div", _hoisted_32$1, [
            _cache[27] || (_cache[27] = createBaseVNode("div", { class: "row" }, [
              createBaseVNode("div", { class: "col-sm-12" }, [
                createBaseVNode("div", { class: "section-heading pb-55 text-center" }, [
                  createBaseVNode("h2", null, "出色的体验，意想不到的价格"),
                  createBaseVNode("p", null, "不要把宝贵的时间，浪费在等待上。即刻开启全球网络中继服务，在任何时间任何地点访问全球互联网。")
                ])
              ])
            ], -1)),
            createBaseVNode("div", _hoisted_33$1, [
              createBaseVNode("div", _hoisted_34$1, [
                createBaseVNode("div", _hoisted_35$1, [
                  _cache[20] || (_cache[20] = createBaseVNode("div", { class: "price-titel uppercase" }, [
                    createBaseVNode("h4", null, "标准版")
                  ], -1)),
                  _cache[21] || (_cache[21] = createBaseVNode("div", { class: "pricing-price" }, [
                    createBaseVNode("span", null, [
                      createTextVNode("¥9.9"),
                      createBaseVNode("p", null, "/每月")
                    ])
                  ], -1)),
                  _cache[22] || (_cache[22] = createBaseVNode("div", { class: "price-decs" }, [
                    createBaseVNode("ul", null, [
                      createBaseVNode("li", null, "50GB 使用流量"),
                      createBaseVNode("li", null, "2个 在线客户端"),
                      createBaseVNode("li", null, "工单技术支持"),
                      createBaseVNode("li", null, "国际标准节点")
                    ])
                  ], -1)),
                  createBaseVNode("div", _hoisted_36$1, [
                    createVNode(_component_router_link, { to: "/register" }, {
                      default: withCtx(() => _cache[19] || (_cache[19] = [
                        createTextVNode("立即订购")
                      ])),
                      _: 1,
                      __: [19]
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_37$1, [
                createBaseVNode("div", _hoisted_38$1, [
                  _cache[24] || (_cache[24] = createStaticVNode('<div class="price-titel uppercase" data-v-49fac8ae><h4 data-v-49fac8ae>高级版</h4></div><div class="pricing-price" data-v-49fac8ae><span data-v-49fac8ae>¥19.9<p data-v-49fac8ae>/每月</p></span></div><div class="price-decs" data-v-49fac8ae><ul data-v-49fac8ae><li data-v-49fac8ae>100GB 使用流量</li><li data-v-49fac8ae>4个 在线客户端</li><li data-v-49fac8ae>24/7 在线技术支持</li><li data-v-49fac8ae>国际标准节点</li><li data-v-49fac8ae>国内中转节点</li></ul></div>', 3)),
                  createBaseVNode("div", _hoisted_39$1, [
                    createVNode(_component_router_link, { to: "/register" }, {
                      default: withCtx(() => _cache[23] || (_cache[23] = [
                        createTextVNode("立即订购")
                      ])),
                      _: 1,
                      __: [23]
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_40$1, [
                createBaseVNode("div", _hoisted_41$1, [
                  _cache[26] || (_cache[26] = createStaticVNode('<div class="price-titel uppercase" data-v-49fac8ae><h4 data-v-49fac8ae>加强版</h4></div><div class="pricing-price" data-v-49fac8ae><span data-v-49fac8ae>¥29.9<p data-v-49fac8ae>/每月</p></span></div><div class="price-decs" data-v-49fac8ae><ul data-v-49fac8ae><li data-v-49fac8ae>300GB 使用流量</li><li data-v-49fac8ae>8个 在线客户端</li><li data-v-49fac8ae>24/7 在线技术支持</li><li data-v-49fac8ae>国际标准节点</li><li data-v-49fac8ae>国内中转节点</li><li data-v-49fac8ae>IPLC专线节点</li></ul></div>', 3)),
                  createBaseVNode("div", _hoisted_42$1, [
                    createVNode(_component_router_link, { to: "/register" }, {
                      default: withCtx(() => _cache[25] || (_cache[25] = [
                        createTextVNode("立即订购")
                      ])),
                      _: 1,
                      __: [25]
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        _cache[35] || (_cache[35] = createStaticVNode('<section id="team" class="team-area ptb-130" data-v-49fac8ae><div class="container" data-v-49fac8ae><div class="row" data-v-49fac8ae><div class="col-sm-12" data-v-49fac8ae><div class="section-heading pb-55 text-center" data-v-49fac8ae><h2 data-v-49fac8ae>客户群体</h2><p data-v-49fac8ae>聚集教育、科研、币圈、跨境外贸、娱乐资讯等各行各业的精英人士</p></div></div></div><div class="row" data-v-49fac8ae><div class="col-md-3 col-sm-6" data-v-49fac8ae><div class="team-single" data-v-49fac8ae><img src="' + _imports_3 + '" alt="" data-v-49fac8ae><div class="team-overlay text-center" data-v-49fac8ae><h5 data-v-49fac8ae>Sathi</h5><h6 data-v-49fac8ae>科研人员</h6></div></div></div><div class="col-md-3 col-sm-6" data-v-49fac8ae><div class="team-single" data-v-49fac8ae><img src="' + _imports_4 + '" alt="" data-v-49fac8ae><div class="team-overlay text-center" data-v-49fac8ae><h5 data-v-49fac8ae>Kausar</h5><h6 data-v-49fac8ae>娱乐爱好者</h6></div></div></div><div class="col-md-3 col-sm-6" data-v-49fac8ae><div class="team-single" data-v-49fac8ae><img src="' + _imports_5 + '" alt="" data-v-49fac8ae><div class="team-overlay text-center" data-v-49fac8ae><h5 data-v-49fac8ae>Nirob</h5><h6 data-v-49fac8ae>币圈投资者</h6></div></div></div><div class="col-md-3 col-sm-6" data-v-49fac8ae><div class="team-single" data-v-49fac8ae><img src="' + _imports_6 + '" alt="" data-v-49fac8ae><div class="team-overlay text-center" data-v-49fac8ae><h5 data-v-49fac8ae>Rana</h5><h6 data-v-49fac8ae>外贸工作者</h6></div></div></div></div></div></section><section class="testimonial-area bg-4 ptb-130" data-v-49fac8ae><div class="container" data-v-49fac8ae><div class="row" data-v-49fac8ae><div class="col-sm-12" data-v-49fac8ae><div class="section-heading pb-55 text-center" data-v-49fac8ae><h2 data-v-49fac8ae>用户评价</h2><p data-v-49fac8ae>来自全球用户的真实反馈</p></div></div></div><div class="row" data-v-49fac8ae><div class="col-md-12" data-v-49fac8ae><div class="testimonial-active" data-v-49fac8ae><div class="col-md-12" data-v-49fac8ae><div class="testimonial-desc text-center" data-v-49fac8ae><p data-v-49fac8ae>服务很棒，速度很快，客服态度也很好，推荐大家使用。</p><h4 data-v-49fac8ae>张先生</h4></div></div></div></div></div></div></section><section id="client" class="download-area bg-3 ptb-130" data-v-49fac8ae><div class="container" data-v-49fac8ae><div class="row" data-v-49fac8ae><div class="col-sm-12" data-v-49fac8ae><div class="section-heading text-center pb-45" data-v-49fac8ae><h2 data-v-49fac8ae>软件下载</h2><p data-v-49fac8ae>请下载客户端软件，免费注册并登录，进入用户中心观看视频教程</p></div></div></div><div class="row" data-v-49fac8ae><div class="col-md-12" data-v-49fac8ae><div class="download-option-btn text-center" data-v-49fac8ae><ul data-v-49fac8ae><li data-v-49fac8ae><a href="/download" data-v-49fac8ae><i class="icofont icofont-brand-apple" data-v-49fac8ae></i> MacOS</a><a class="active" href="/download" data-v-49fac8ae><i class="icofont icofont-brand-windows" data-v-49fac8ae></i> Windows</a><a href="/download" data-v-49fac8ae><i class="icofont icofont-brand-apple" data-v-49fac8ae></i> App Store</a><a href="/download" data-v-49fac8ae><i class="icofont icofont-brand-android-robot" data-v-49fac8ae></i> Android</a></li></ul></div></div></div></div></section>', 3)),
        createBaseVNode("div", _hoisted_43$1, [
          createBaseVNode("div", _hoisted_44$1, [
            createBaseVNode("div", _hoisted_45$1, [
              createBaseVNode("div", _hoisted_46$1, [
                createBaseVNode("div", _hoisted_47$1, [
                  _cache[30] || (_cache[30] = createStaticVNode('<div class="contact-social text-center pt-70 pb-35" data-v-49fac8ae><ul data-v-49fac8ae><li data-v-49fac8ae><a target="_blank" href="https://t.me/v2board" data-v-49fac8ae><i class="icofont icofont-social-facebook" data-v-49fac8ae></i></a></li><li data-v-49fac8ae><a target="_blank" href="https://t.me/v2board" data-v-49fac8ae><i class="icofont icofont-social-twitter" data-v-49fac8ae></i></a></li><li data-v-49fac8ae><a target="_blank" href="https://t.me/v2board" data-v-49fac8ae><i class="icofont icofont-social-pinterest" data-v-49fac8ae></i></a></li><li data-v-49fac8ae><a target="_blank" href="https://t.me/v2board" data-v-49fac8ae><i class="icofont icofont-social-vimeo" data-v-49fac8ae></i></a></li><li data-v-49fac8ae><a target="_blank" href="https://t.me/v2board" data-v-49fac8ae><i class="icofont icofont-social-google-plus" data-v-49fac8ae></i></a></li></ul></div>', 1)),
                  createBaseVNode("div", _hoisted_48$1, [
                    createBaseVNode("p", null, [
                      _cache[28] || (_cache[28] = createTextVNode("Copyright © ")),
                      createBaseVNode("a", _hoisted_49$1, toDisplayString(config.value.appName) + ".", 1),
                      _cache[29] || (_cache[29] = createTextVNode(" All Rights Reserved."))
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const WukongTheme = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-49fac8ae"]]);
const _hoisted_1 = {
  key: 1,
  class: "landing-page"
};
const _hoisted_2 = { class: "navbar navbar-reverse navbar-expand-lg" };
const _hoisted_3 = { class: "container" };
const _hoisted_4 = {
  class: "navbar-brand smooth",
  href: "#top"
};
const _hoisted_5 = { class: "navbar-nav mr-auto ml-lg-3 align-items-lg-center" };
const _hoisted_6 = {
  key: 0,
  class: "nav-item d-lg-none d-md-block"
};
const _hoisted_7 = {
  key: 1,
  class: "nav-item d-lg-none d-md-block"
};
const _hoisted_8 = { class: "navbar-nav ml-auto align-items-lg-center d-none d-lg-block" };
const _hoisted_9 = { class: "ml-lg-3 nav-item" };
const _hoisted_10 = {
  class: "hero-wrapper",
  id: "top"
};
const _hoisted_11 = { class: "hero" };
const _hoisted_12 = { class: "container" };
const _hoisted_13 = { class: "text text-center text-lg-left" };
const _hoisted_14 = { class: "cta" };
const _hoisted_15 = {
  key: 0,
  class: "mt-3 text-job d-lg-none"
};
const _hoisted_16 = {
  key: 1,
  class: "mt-3 text-job d-lg-none"
};
const _hoisted_17 = { class: "callout container" };
const _hoisted_18 = { class: "row" };
const _hoisted_19 = { class: "col-md-6 col-12 mb-4 mb-lg-0" };
const _hoisted_20 = { class: "text-job text-muted text-14" };
const _hoisted_21 = {
  id: "design",
  class: "section-design"
};
const _hoisted_22 = { class: "container" };
const _hoisted_23 = { class: "row" };
const _hoisted_24 = { class: "col-lg-7 pl-lg-5 col-md-12" };
const _hoisted_25 = { class: "lead" };
const _hoisted_26 = {
  id: "components",
  class: "section-design section-design-right"
};
const _hoisted_27 = { class: "container" };
const _hoisted_28 = { class: "row" };
const _hoisted_29 = { class: "col-lg-7 pr-lg-5 pr-0" };
const _hoisted_30 = { class: "lead" };
const _hoisted_31 = {
  id: "purchase",
  class: "bg-gr"
};
const _hoisted_32 = { class: "container" };
const _hoisted_33 = { class: "row mt-5" };
const _hoisted_34 = { class: "col-12 col-md-4 col-lg-4" };
const _hoisted_35 = { class: "pricing" };
const _hoisted_36 = { class: "pricing-cta go-to-buy-page" };
const _hoisted_37 = { class: "col-12 col-md-4 col-lg-4" };
const _hoisted_38 = { class: "pricing pricing-highlight" };
const _hoisted_39 = { class: "pricing-cta go-to-buy-page" };
const _hoisted_40 = { class: "col-12 col-md-4 col-lg-4" };
const _hoisted_41 = { class: "pricing" };
const _hoisted_42 = { class: "pricing-cta go-to-buy-page" };
const _hoisted_43 = {
  id: "try",
  class: "section-dark"
};
const _hoisted_44 = { class: "container" };
const _hoisted_45 = { class: "download-section bg-white" };
const _hoisted_46 = { class: "container" };
const _hoisted_47 = { class: "row align-items-center" };
const _hoisted_48 = { class: "col-md-5 text-right" };
const _hoisted_49 = {
  id: "contact-support",
  class: "before-footer"
};
const _hoisted_50 = { class: "container" };
const _hoisted_51 = { class: "row" };
const _hoisted_52 = { class: "col-md-6" };
const _hoisted_53 = { class: "card long-shadow" };
const _hoisted_54 = { class: "card-body p-45 d-flex" };
const _hoisted_55 = { class: "container" };
const _hoisted_56 = { class: "row" };
const _hoisted_57 = { class: "col-md-5" };
const _hoisted_58 = { class: "text-capitalize" };
const _hoisted_59 = { class: "pr-lg-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Landing",
  setup(__props) {
    var _a, _b;
    const authStore = useAuthStore();
    useRouter();
    const showNavbar = ref(false);
    const swiperContainer = ref(null);
    const config = ref({
      appName: ((_a = window.V2BOARD_CONFIG) == null ? void 0 : _a.APP_TITLE) || "V2Board",
      landingPage: ((_b = window.V2BOARD_CONFIG) == null ? void 0 : _b.LANDING_PAGE) || {
        ENABLED: true,
        THEME: "malio"
      }
    });
    const currentThemeComponent = computed(() => {
      var _a2;
      const theme = (_a2 = config.value.landingPage.THEME) == null ? void 0 : _a2.toLowerCase();
      switch (theme) {
        case "zhujike":
          return ZhujikeTheme;
        case "cool":
          return CoolTheme;
        case "wukong":
          return WukongTheme;
        case "malio":
        default:
          return null;
      }
    });
    let swiper = null;
    const toggleNavbar = () => {
      showNavbar.value = !showNavbar.value;
    };
    const initSwiper = () => {
      if (typeof window !== "undefined" && window.Swiper && swiperContainer.value) {
        swiper = new window.Swiper(swiperContainer.value, {
          direction: "horizontal",
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          autoplay: {
            delay: 5e3,
            disableOnInteraction: true
          }
        });
      }
    };
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };
    const loadStylesheet = (href) => {
      return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to load stylesheet: ${href}`));
        document.head.appendChild(link);
      });
    };
    onMounted(async () => {
      try {
        await Promise.all([
          loadStylesheet("/theme/malio/index/css/prism.css"),
          loadStylesheet("https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"),
          loadStylesheet("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.8.2/css/all.min.css"),
          loadStylesheet("/theme/malio/index/css/chocolat.css"),
          loadStylesheet("/theme/malio/index/css/style.css"),
          loadStylesheet("/theme/malio/index/css/custom.css"),
          loadStylesheet("/theme/malio/index/landing/style.css"),
          loadStylesheet("https://cdn.jsdelivr.net/npm/swiper@4.5.0/dist/css/swiper.min.css")
        ]);
        await loadScript("/theme/malio/index/js/jquery.min.js");
        await loadScript("/theme/malio/index/js/popper.js");
        await loadScript("/theme/malio/index/js/tooltip.js");
        await loadScript("/theme/malio/index/js/bootstrap.min.js");
        await loadScript("/theme/malio/index/js/prism.js");
        await loadScript("/theme/malio/index/js/stisla.js");
        await loadScript("/theme/malio/index/js/script.js");
        await loadScript("https://cdn.jsdelivr.net/npm/swiper@4.5.0/dist/js/swiper.min.js");
        setTimeout(initSwiper, 100);
      } catch (error) {
        console.error("Failed to load Malio theme resources:", error);
      }
      const handleSmoothScroll = (e) => {
        const target = e.target;
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
      setTimeout(() => {
        document.querySelectorAll('a[href^="#"]').forEach((link) => {
          link.addEventListener("click", handleSmoothScroll);
        });
      }, 100);
    });
    onUnmounted(() => {
      if (swiper) {
        swiper.destroy();
      }
      const stylesheets = [
        "/theme/malio/index/css/prism.css",
        "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.8.2/css/all.min.css",
        "/theme/malio/index/css/chocolat.css",
        "/theme/malio/index/css/style.css",
        "/theme/malio/index/css/custom.css",
        "/theme/malio/index/landing/style.css",
        "https://cdn.jsdelivr.net/npm/swiper@4.5.0/dist/css/swiper.min.css"
      ];
      stylesheets.forEach((href) => {
        const link = document.querySelector(`link[href="${href}"]`);
        if (link) {
          link.remove();
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return currentThemeComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(currentThemeComponent.value), { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("nav", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("a", _hoisted_4, toDisplayString(config.value.appName), 1),
            createBaseVNode("button", {
              class: "navbar-toggler",
              type: "button",
              onClick: toggleNavbar,
              "aria-controls": "navbarSupportedContent",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation"
            }, _cache[0] || (_cache[0] = [
              createBaseVNode("i", { class: "fas fa-bars" }, null, -1)
            ])),
            createBaseVNode("div", {
              class: normalizeClass(["collapse navbar-collapse", { show: showNavbar.value }]),
              id: "navbarSupportedContent"
            }, [
              createBaseVNode("ul", _hoisted_5, [
                _cache[3] || (_cache[3] = createStaticVNode('<li class="nav-item"><a href="#features" class="nav-link">功能特性</a></li><li class="nav-item"><a href="#purchase" class="nav-link">套餐价格</a></li><li class="nav-item"><a href="#contact-support" class="nav-link">技术支持</a></li>', 3)),
                unref(authStore).isAuthenticated ? (openBlock(), createElementBlock("li", _hoisted_6, [
                  createVNode(_component_router_link, {
                    to: "/dashboard",
                    class: "nav-link smooth"
                  }, {
                    default: withCtx(() => _cache[1] || (_cache[1] = [
                      createTextVNode("用户中心")
                    ])),
                    _: 1,
                    __: [1]
                  })
                ])) : (openBlock(), createElementBlock("li", _hoisted_7, [
                  createVNode(_component_router_link, {
                    to: "/login",
                    class: "nav-link smooth"
                  }, {
                    default: withCtx(() => _cache[2] || (_cache[2] = [
                      createTextVNode("登录")
                    ])),
                    _: 1,
                    __: [2]
                  })
                ]))
              ]),
              createBaseVNode("ul", _hoisted_8, [
                createBaseVNode("li", _hoisted_9, [
                  unref(authStore).isAuthenticated ? (openBlock(), createBlock(_component_router_link, {
                    key: 0,
                    to: "/dashboard",
                    class: "btn btn-round smooth btn-icon icon-left"
                  }, {
                    default: withCtx(() => _cache[4] || (_cache[4] = [
                      createBaseVNode("i", { class: "fab fa-fort-awesome" }, null, -1),
                      createTextVNode(" 用户中心 ")
                    ])),
                    _: 1,
                    __: [4]
                  })) : (openBlock(), createBlock(_component_router_link, {
                    key: 1,
                    to: "/login",
                    class: "btn btn-round smooth btn-icon icon-left"
                  }, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createBaseVNode("i", { class: "fas fa-sign-in-alt" }, null, -1),
                      createTextVNode(" 登录 ")
                    ])),
                    _: 1,
                    __: [5]
                  }))
                ])
              ])
            ], 2)
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                _cache[9] || (_cache[9] = createBaseVNode("a", {
                  href: "/user/shop",
                  class: "headline"
                }, [
                  createBaseVNode("div", { class: "badge badge-danger" }, "New"),
                  createTextVNode(" 年付8折优惠活动，限时进行中   "),
                  createBaseVNode("i", { class: "fas fa-chevron-right" })
                ], -1)),
                _cache[10] || (_cache[10] = createBaseVNode("h1", null, "全球网络中继服务，随时随处尽情使用", -1)),
                _cache[11] || (_cache[11] = createBaseVNode("p", { class: "lead" }, " 通过我们的网络访问内容提供商、公司网络和公共云服务 ", -1)),
                createBaseVNode("div", _hoisted_14, [
                  createVNode(_component_router_link, {
                    to: "/register",
                    class: "btn btn-lg btn-warning btn-icon icon-right"
                  }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode(" 开始注册使用 "),
                      createBaseVNode("i", { class: "fas fa-chevron-right" }, null, -1)
                    ])),
                    _: 1,
                    __: [6]
                  })
                ]),
                unref(authStore).isAuthenticated ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  createVNode(_component_router_link, {
                    to: "/dashboard",
                    style: { "color": "rgba(255,255,255,.6)" }
                  }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode(" 进入用户中心 ")
                    ])),
                    _: 1,
                    __: [7]
                  })
                ])) : (openBlock(), createElementBlock("div", _hoisted_16, [
                  createVNode(_component_router_link, {
                    to: "/login",
                    style: { "color": "rgba(255,255,255,.6)" }
                  }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode(" 已有账号？立即登录 ")
                    ])),
                    _: 1,
                    __: [8]
                  })
                ]))
              ]),
              _cache[12] || (_cache[12] = createBaseVNode("div", { class: "image d-none d-lg-block" }, [
                createBaseVNode("img", {
                  src: _imports_0$2,
                  alt: "网络加速服务"
                })
              ], -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_17, [
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, "为什么选择 " + toDisplayString(config.value.appName), 1),
              _cache[13] || (_cache[13] = createBaseVNode("div", {
                class: "h1 mb-0 font-weight-bold mt-1",
                style: { "font-size": "2rem" }
              }, "迄今为止", -1))
            ]),
            _cache[14] || (_cache[14] = createStaticVNode('<div class="col-4 col-md-2 text-center"><div class="h2 font-weight-bold">50+</div><div class="text-uppercase font-weight-bold ls-2 text-primary">国际节点</div></div><div class="col-4 col-md-2 text-center"><div class="h2 font-weight-bold">15+</div><div class="text-uppercase font-weight-bold ls-2 text-primary">国家地区</div></div><div class="col-4 col-md-2 text-center"><div class="h2 font-weight-bold">10000+</div><div class="text-uppercase font-weight-bold ls-2 text-primary">满意用户</div></div>', 3))
          ])
        ]),
        _cache[38] || (_cache[38] = createStaticVNode('<section id="features"><div class="container"><div class="row mb-5 text-center"><div class="col-lg-10 offset-lg-1"><h2>为你 <span class="text-primary">量身定制</span> 的服务</h2><p class="lead">可靠的基础设施，并能提供您喜爱的诸多功能</p></div></div><div class="row"><div class="col-lg-12"><div class="features"><div class="feature"><div class="feature-icon"><i class="fas fa-mobile-alt"></i></div><h5>高速稳定</h5><p>体验宛若身在海外的访问速度</p></div><div class="feature"><div class="feature-icon"><i class="fab fa-html5"></i></div><h5>便携设置</h5><p>我们的服务适用于 macOS、iOS、Android、Windows 和 Linux</p></div><div class="feature"><div class="feature-icon"><i class="fas fa-fire"></i></div><h5>节省成本</h5><p>相比自托管服务可节省大量费用</p></div><div class="feature"><div class="feature-icon"><i class="fas fa-check"></i></div><h5>全球互联</h5><p>通过 IXP 连接至全球内容提供商，更加快速</p></div><div class="feature"><div class="feature-icon"><i class="fas fa-columns"></i></div><h5>运营商友好</h5><p>我们的产品和您的当地运营商兼容，适用于您的固网与移动网络</p></div><div class="feature"><div class="feature-icon"><i class="fas fa-chevron-right"></i></div><h5>多应用兼容</h5><p>提供全面且可靠的第三方应用程序兼容</p></div></div></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              _cache[17] || (_cache[17] = createBaseVNode("div", { class: "col-lg-5 d-none d-lg-block" }, [
                createBaseVNode("img", {
                  src: _imports_1$2,
                  alt: "数据中心",
                  class: "img-fluid"
                })
              ], -1)),
              createBaseVNode("div", _hoisted_24, [
                _cache[15] || (_cache[15] = createBaseVNode("div", { class: "badge badge-primary mb-3" }, "CROSS DEVICES & PLATFORMS", -1)),
                _cache[16] || (_cache[16] = createBaseVNode("h2", null, "在你心爱的电子设备中使用，无论是移动的手机还是固定的电脑，随时随处可用", -1)),
                createBaseVNode("p", _hoisted_25, toDisplayString(config.value.appName) + " 的服务适用于 macOS、iOS、Android、Windows 和 Linux，借助第三方客户端，可在手机、电脑、路由器、游戏机、电视盒子中使用。 ", 1)
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_26, [
          createBaseVNode("div", _hoisted_27, [
            createBaseVNode("div", _hoisted_28, [
              createBaseVNode("div", _hoisted_29, [
                _cache[18] || (_cache[18] = createBaseVNode("div", { class: "badge badge-primary mb-3" }, "UNBLOCK STREAMING MEDIA", -1)),
                _cache[19] || (_cache[19] = createBaseVNode("h2", null, "解锁流媒体，观赏和聆听优质的内容", -1)),
                createBaseVNode("p", _hoisted_30, " 通过 " + toDisplayString(config.value.appName) + " 的服务，可以观看包括 Netflix、Hulu、HBO、TVB、Happyon、AbemaTV 等在内的多种流媒体视频，聆听包括 Spotify、Pandora 等在内的流媒体音乐。 ", 1)
              ]),
              _cache[20] || (_cache[20] = createStaticVNode('<div class="col-lg-5 d-none d-lg-block"><div class="abs-images"><img src="' + _imports_2$2 + '" alt="Netflix" class="img-fluid rounded dark-shadow"><img src="' + _imports_3$2 + '" alt="Spotify" class="img-fluid rounded dark-shadow"><img src="' + _imports_4$2 + '" alt="HBO" class="img-fluid rounded dark-shadow"></div></div>', 1))
            ])
          ])
        ]),
        _cache[39] || (_cache[39] = createStaticVNode('<section id="support-us" class="support-us section-design"><div class="container"><div class="row"><div class="col-lg-8 d-none d-lg-block"><img src="' + _imports_5$2 + '" alt="技术支持" class="img-fluid" style="width:30rem;"></div><div class="col-lg-4 col-md-12"><h2>不仅仅如此，亦包含以下诸多特性</h2><p class="lead">* 部分特性需要配合第三方客户端与托管规则使用</p><ul class="list-icons"><li><span class="card-icon bg-primary text-white"><i class="fas fa-ad"></i></span><span>过滤常用网站广告、常用视频广告、其他流媒体网站广告</span></li><li><span class="card-icon bg-primary text-white"><i class="fas fa-filter"></i></span><span>智能分流系统，所有国内网站直线连接，增强用户体验</span></li><li><span class="card-icon bg-primary text-white"><i class="fab fa-apple"></i></span><span>Apple服务加速 (App Store、Apple Music、iCloud、iTunes等)</span></li><li><span class="card-icon bg-primary text-white"><i class="fas fa-tachometer-alt"></i></span><span>国外常用网站加速 (Google/Youtube/Twitter/Instgram/Github等)</span></li><li><span class="card-icon bg-primary text-white"><i class="fas fa-lock"></i></span><span>在传输过程中使用最强的加密方式，保护用户数据和隐私</span></li><li><span class="card-icon bg-primary text-white"><i class="fas fa-fire"></i></span><span>与诸多平台上的优秀应用程序兼容，这些应用程序由许多创新公司和开发人员开发</span></li></ul></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_31, [
          createBaseVNode("div", _hoisted_32, [
            _cache[27] || (_cache[27] = createBaseVNode("div", { class: "row" }, [
              createBaseVNode("div", { class: "col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-12 text-center" }, [
                createBaseVNode("h2", { class: "mt-3 text-white" }, "出色的体验，意想不到的价格"),
                createBaseVNode("p", {
                  class: "lead",
                  style: { "color": "rgba(255, 255, 255, 0.5)" }
                }, " 不要把宝贵的时间，浪费在等待上。即刻开启全球网络中继服务，在任何时间任何地点访问全球互联网。 ")
              ])
            ], -1)),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("div", _hoisted_35, [
                  _cache[22] || (_cache[22] = createStaticVNode('<div class="pricing-title">标准版</div><div class="pricing-padding"><div class="pricing-price"><div>¥9.9</div><div>每月</div></div><div class="pricing-details"><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">50GB 使用流量</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">2个 在线客户端</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">工单技术支持</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">国际标准节点</div></div><div class="pricing-item"><div class="pricing-item-icon text-white" style="background:#98a6ad;"><i class="fas fa-times"></i></div><div class="pricing-item-label text-muted"><del>国内中转节点</del></div></div><div class="pricing-item"><div class="pricing-item-icon text-white" style="background:#98a6ad;"><i class="fas fa-times"></i></div><div class="pricing-item-label text-muted"><del>IPLC专线节点</del></div></div></div></div>', 2)),
                  createBaseVNode("div", _hoisted_36, [
                    createVNode(_component_router_link, { to: "/user/shop" }, {
                      default: withCtx(() => _cache[21] || (_cache[21] = [
                        createTextVNode("订阅 "),
                        createBaseVNode("i", { class: "fas fa-arrow-right" }, null, -1)
                      ])),
                      _: 1,
                      __: [21]
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_37, [
                createBaseVNode("div", _hoisted_38, [
                  _cache[24] || (_cache[24] = createStaticVNode('<div class="pricing-title">高级版</div><div class="pricing-padding"><div class="pricing-price"><div>¥19.9</div><div>每月</div></div><div class="pricing-details"><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">100GB 使用流量</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">4个 在线客户端</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">24/7 在线技术支持</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">国际标准节点</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">国内中转节点</div></div><div class="pricing-item"><div class="pricing-item-icon text-white" style="background:#98a6ad;"><i class="fas fa-times"></i></div><div class="pricing-item-label text-muted"><del>IPLC专线节点</del></div></div></div></div>', 2)),
                  createBaseVNode("div", _hoisted_39, [
                    createVNode(_component_router_link, { to: "/user/shop" }, {
                      default: withCtx(() => _cache[23] || (_cache[23] = [
                        createTextVNode("订阅 "),
                        createBaseVNode("i", { class: "fas fa-arrow-right" }, null, -1)
                      ])),
                      _: 1,
                      __: [23]
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", _hoisted_41, [
                  _cache[26] || (_cache[26] = createStaticVNode('<div class="pricing-title">加强版</div><div class="pricing-padding"><div class="pricing-price"><div>¥29.9</div><div>每月</div></div><div class="pricing-details"><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">300GB 使用流量</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">8个 在线客户端</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">24/7 在线技术支持</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">国际标准节点</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">国内中转节点</div></div><div class="pricing-item"><div class="pricing-item-icon" style="background:#6574f7;"><i class="fas fa-check"></i></div><div class="pricing-item-label">IPLC专线节点</div></div></div></div>', 2)),
                  createBaseVNode("div", _hoisted_42, [
                    createVNode(_component_router_link, { to: "/user/shop" }, {
                      default: withCtx(() => _cache[25] || (_cache[25] = [
                        createTextVNode("订阅 "),
                        createBaseVNode("i", { class: "fas fa-arrow-right" }, null, -1)
                      ])),
                      _: 1,
                      __: [25]
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_43, [
          createBaseVNode("div", _hoisted_44, [
            createBaseVNode("div", {
              class: "swiper-container",
              ref_key: "swiperContainer",
              ref: swiperContainer
            }, _cache[28] || (_cache[28] = [
              createStaticVNode('<div class="swiper-wrapper"><div class="swiper-slide"><div class="col-lg-8 offset-lg-2 text-center"><blockquote>我的妈我跟你说真的好用到飞起，我的妈我跟你说真的好用到飞起，我的妈我跟你说真的好用到飞起。素质三连。</blockquote><div class="text-name mt-4">某一沙雕网友</div><div class="text-job mt-2"><a href="/">家里蹲大学</a> 学生</div></div></div><div class="swiper-slide"><div class="col-lg-8 offset-lg-2 text-center"><blockquote>大家好，我是练习时长两年半的个人练习生，喜欢唱、跳、rap、篮球</blockquote><div class="text-name mt-4">CXK</div><div class="text-job mt-2"><a href="/">XX公司</a>唱跳练习生</div></div></div><div class="swiper-slide"><div class="col-lg-8 offset-lg-2 text-center"><blockquote>第三个评价要咋写啊我编不下去了，你们记得改文案啊不然就。这个是占位符占位符🐈🐶</blockquote><div class="text-name mt-4">用户名</div><div class="text-job mt-2">职位</div></div></div></div><div class="swiper-button-prev" style="color:rgba(255,255,255,.6);background-image:none;"><i class="fas fa-chevron-left" style="font-size:20px;"></i></div><div class="swiper-button-next" style="color:rgba(255,255,255,.6);background-image:none;"><i class="fas fa-chevron-right" style="font-size:20px;"></i></div>', 3)
            ]), 512)
          ])
        ]),
        createBaseVNode("section", _hoisted_45, [
          createBaseVNode("div", _hoisted_46, [
            createBaseVNode("div", _hoisted_47, [
              _cache[30] || (_cache[30] = createBaseVNode("div", { class: "col-md-7" }, [
                createBaseVNode("h2", null, "开始使用优秀的全球网络中继服务"),
                createBaseVNode("p", { class: "lead" }, "Start using outstanding global network relay service")
              ], -1)),
              createBaseVNode("div", _hoisted_48, [
                createVNode(_component_router_link, {
                  to: "/register",
                  class: "btn btn-primary btn-lg"
                }, {
                  default: withCtx(() => _cache[29] || (_cache[29] = [
                    createTextVNode("立即注册")
                  ])),
                  _: 1,
                  __: [29]
                })
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_49, [
          createBaseVNode("div", _hoisted_50, [
            createBaseVNode("div", _hoisted_51, [
              _cache[34] || (_cache[34] = createStaticVNode('<div class="col-md-6"><div class="card long-shadow"><div class="card-body d-flex p-45"><div class="card-icon bg-primary text-white"><i class="fas fa-headset"></i></div><div><h5>售前咨询</h5><p class="lh-sm">有任何关于会员计划的疑问？联系我们的售前咨询小组，马上为您解答。</p><div class="mt-4 text-right"><a href="#" class="link-icon">联系我们 <i class="fas fa-chevron-right"></i></a></div></div></div></div></div>', 1)),
              createBaseVNode("div", _hoisted_52, [
                createBaseVNode("div", _hoisted_53, [
                  createBaseVNode("div", _hoisted_54, [
                    _cache[33] || (_cache[33] = createBaseVNode("div", { class: "card-icon bg-primary text-white" }, [
                      createBaseVNode("i", { class: "far fa-life-ring" })
                    ], -1)),
                    createBaseVNode("div", null, [
                      _cache[31] || (_cache[31] = createBaseVNode("h5", null, "技术支持", -1)),
                      createBaseVNode("p", null, toDisplayString(config.value.appName) + " 在您的订阅周期内为您提供一定程度上的技术支持。", 1),
                      _cache[32] || (_cache[32] = createBaseVNode("div", { class: "mt-4 text-right" }, [
                        createBaseVNode("a", {
                          href: "#",
                          class: "link-icon"
                        }, [
                          createTextVNode("联系我们 "),
                          createBaseVNode("i", { class: "fas fa-chevron-right" })
                        ])
                      ], -1))
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("footer", null, [
          createBaseVNode("div", _hoisted_55, [
            createBaseVNode("div", _hoisted_56, [
              createBaseVNode("div", _hoisted_57, [
                createBaseVNode("h3", _hoisted_58, toDisplayString(config.value.appName), 1),
                createBaseVNode("div", _hoisted_59, [
                  _cache[35] || (_cache[35] = createBaseVNode("p", null, "致力于为用户提供高速稳定的高性价比网络中继服务", -1)),
                  createBaseVNode("p", null, "© " + toDisplayString(config.value.appName), 1),
                  _cache[36] || (_cache[36] = createStaticVNode('<div class="mt-4 social-links"><a href="#"><i class="fab fa-github"></i></a><a href="#"><i class="fab fa-twitter"></i></a></div>', 1))
                ])
              ]),
              _cache[37] || (_cache[37] = createStaticVNode('<div class="col-md-7"><div class="row"><div class="col-md-4"><h4>首页</h4><ul><li><a href="/">商店</a></li><li><a href="/">节点列表</a></li><li><a href="/">邀请注册</a></li><li><a href="/">下载和使用</a></li></ul></div><div class="col-md-4"><h4>支持</h4><ul><li><a href="#">联系我们</a></li><li><a href="/">新建工单</a></li><li><a href="/">常见问题</a></li><li><a href="#">加入 Telegram 群组</a></li></ul></div></div></div>', 1))
            ])
          ])
        ])
      ]));
    };
  }
});
export {
  _sfc_main as default
};
