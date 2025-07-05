import { k as defineComponent, r as ref, w as watch, o as onMounted, n as nextTick, $ as createElementBlock, a3 as createCommentVNode, a0 as createBaseVNode, a2 as toDisplayString, j as createTextVNode, F as Fragment, Q as renderList, a7 as withModifiers, U as openBlock, c as computed, a5 as useRouter, W as createVNode, R as createBlock, a1 as createStaticVNode, V as withCtx, S as resolveComponent, N as unref, L as normalizeClass, I as normalizeStyle, l as withDirectives, ab as resolveDirective } from "./DM1yaN1X.js";
import { u as useAuthStore, a as apiClient } from "./BBbuoBq5.js";
import { g as generateAvatar } from "./BnYRgqog.js";
import { b as browser } from "./0I8bmyai.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import { D as DesktopModal } from "./3u1s8V6K.js";
import { u as useMessage } from "./BEq_qS6Y.js";
const URL_SCHEMES = {
  // Windows客户端（安装版）
  "Clash Verge": "clash://install-config?url=",
  "mihomo": "clash://install-config?url=",
  "hiddify": "hiddify://import/",
  // iOS客户端（从App Store安装）
  "Shadowrocket": "shadowrocket://add-sub?url=",
  "Quantumult X": "quantumult-x://add-server?server=",
  "Surge": "surge:///install-config?url=",
  "Stash": "stash://add-sub?url=",
  "Loon": "loon://import?sub="
};
function getUrlScheme(clientName) {
  return URL_SCHEMES[clientName] || null;
}
function generateClientUrl(clientName, subscribeUrl) {
  const scheme = getUrlScheme(clientName);
  if (!scheme) return null;
  if (clientName === "hiddify") {
    return scheme + encodeURIComponent(subscribeUrl);
  }
  return scheme + encodeURIComponent(subscribeUrl);
}
function openClientApp(client, subscribeUrl, onManualImport) {
  const isPortableApp = client.name === "V2rayN" || client.name.includes("绿色版");
  if (isPortableApp) {
    if (onManualImport) {
      const config = getManualImportConfig(client.name, subscribeUrl);
      onManualImport(config);
    }
    return;
  }
  const clientUrl = generateClientUrl(client.name, subscribeUrl);
  if (clientUrl) {
    window.location.href = clientUrl;
  } else {
    if (onManualImport) {
      const config = getManualImportConfig(client.name, subscribeUrl);
      onManualImport(config);
    }
  }
}
function getManualImportConfig(clientName, subscribeUrl) {
  const instructions = getManualImportInstructions(clientName);
  return {
    title: `${clientName} 手动导入`,
    subtitle: "请按照以下步骤导入订阅链接",
    mode: "manual",
    manualInstructions: instructions,
    subscriptionUrl: subscribeUrl
  };
}
function getManualImportInstructions(clientName) {
  const instructions = {
    "V2rayN": '请按以下步骤导入订阅：\n1. 打开V2rayN软件\n2. 右键点击系统托盘中的V2rayN图标\n3. 选择"订阅分组" → "订阅设置"\n4. 点击"添加"按钮\n5. 将订阅链接粘贴到"地址(url)"框中\n6. 点击"确定"保存\n7. 右键托盘图标选择"更新订阅"',
    "Clash Verge": '请按以下步骤导入订阅：\n1. 打开Clash Verge软件\n2. 点击左侧"配置"选项卡\n3. 点击"新建"按钮\n4. 选择"从链接导入"\n5. 将订阅链接粘贴到输入框中\n6. 点击"导入"按钮',
    "SingBox": '请按以下步骤导入订阅：\n1. 打开SingBox软件\n2. 点击"配置"选项卡\n3. 点击"添加配置"按钮\n4. 选择"从URL导入"\n5. 将订阅链接粘贴到输入框中\n6. 点击"导入"按钮'
  };
  return instructions[clientName] || `请手动将订阅链接导入到 ${clientName} 中：`;
}
function downloadClientApp(client) {
  if (client.down) {
    window.open(client.down, "_blank");
  } else if (client.url) {
    window.open(client.url, "_blank");
  }
}
const _hoisted_1$2 = { class: "dialog-header" };
const _hoisted_2$2 = { class: "dialog-title" };
const _hoisted_3$2 = { class: "dialog-subtitle" };
const _hoisted_4$2 = { class: "dialog-content" };
const _hoisted_5$2 = { key: 0 };
const _hoisted_6$2 = { class: "qrcode-section" };
const _hoisted_7$2 = { class: "qrcode-container" };
const _hoisted_8$2 = {
  key: 0,
  class: "import-section"
};
const _hoisted_9$1 = { class: "import-buttons" };
const _hoisted_10$1 = ["onClick", "title"];
const _hoisted_11$1 = ["src", "alt"];
const _hoisted_12$1 = {
  key: 1,
  class: "manual-import-content"
};
const _hoisted_13$1 = { class: "manual-instructions" };
const _hoisted_14$1 = { class: "instructions-text" };
const _hoisted_15$1 = { class: "subscription-url-display" };
const _hoisted_16$1 = { class: "url-text" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SubscriptionDialog",
  props: {
    show: { type: Boolean },
    title: {},
    subtitle: { default: "" },
    subscriptionUrl: {},
    supportedClients: { default: () => [] },
    maskClosable: { type: Boolean, default: true },
    mode: { default: "normal" },
    manualInstructions: { default: "" }
  },
  emits: ["update:show", "copy", "import"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const qrcodeCanvas = ref();
    const generateQRCode = async () => {
      if (!qrcodeCanvas.value || !props.subscriptionUrl) return;
      try {
        await browser.toCanvas(qrcodeCanvas.value, props.subscriptionUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          }
        });
      } catch (error) {
        console.error("生成二维码失败:", error);
      }
    };
    watch(() => props.subscriptionUrl, () => {
      if (props.show) {
        nextTick(() => {
          generateQRCode();
        });
      }
    });
    watch(() => props.show, (newShow) => {
      if (newShow) {
        nextTick(() => {
          generateQRCode();
        });
      }
    });
    const handleOverlayClick = () => {
      if (props.maskClosable) {
        emit("update:show", false);
      }
    };
    const handleClose = () => {
      emit("update:show", false);
    };
    const copySubscriptionUrl = () => {
      emit("copy", props.subscriptionUrl);
    };
    const importToClient = (client) => {
      emit("import", client, props.subscriptionUrl);
    };
    onMounted(() => {
      if (props.show) {
        nextTick(() => {
          generateQRCode();
        });
      }
    });
    return (_ctx, _cache) => {
      return _ctx.show ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "subscription-dialog-overlay",
        onClick: handleOverlayClick
      }, [
        createBaseVNode("div", {
          class: "subscription-dialog",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createBaseVNode("div", _hoisted_1$2, [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "dialog-icon" }, [
              createBaseVNode("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 24 24",
                fill: "currentColor"
              }, [
                createBaseVNode("path", { d: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,20H6C4.89,20 4,19.1 4,18V4C4.89,4 5.89,4 6,4M15,18V16H6V18H15M18,14V12H6V14H18Z" })
              ])
            ], -1)),
            createBaseVNode("h3", _hoisted_2$2, toDisplayString(_ctx.title), 1),
            createBaseVNode("p", _hoisted_3$2, toDisplayString(_ctx.subtitle), 1)
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            _ctx.mode === "normal" ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
              createBaseVNode("div", { class: "subscription-copy-section" }, [
                createBaseVNode("button", {
                  onClick: copySubscriptionUrl,
                  class: "btn-base btn-large btn-primary"
                }, _cache[2] || (_cache[2] = [
                  createBaseVNode("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "currentColor"
                  }, [
                    createBaseVNode("path", { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" })
                  ], -1),
                  createTextVNode(" 复制订阅链接 ")
                ]))
              ]),
              createBaseVNode("div", _hoisted_6$2, [
                _cache[3] || (_cache[3] = createBaseVNode("div", { class: "qrcode-label" }, "扫描二维码", -1)),
                createBaseVNode("div", _hoisted_7$2, [
                  createBaseVNode("canvas", {
                    ref_key: "qrcodeCanvas",
                    ref: qrcodeCanvas,
                    class: "qrcode-canvas"
                  }, null, 512)
                ]),
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "qrcode-tip" }, "使用客户端扫描二维码快速导入", -1))
              ]),
              _ctx.supportedClients.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
                _cache[5] || (_cache[5] = createBaseVNode("div", { class: "import-header" }, [
                  createBaseVNode("div", { class: "import-label" }, "一键导入到客户端"),
                  createBaseVNode("div", { class: "import-tip" }, "点击下方按钮直接导入订阅到对应客户端")
                ], -1)),
                createBaseVNode("div", _hoisted_9$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.supportedClients, (client) => {
                    return openBlock(), createElementBlock("button", {
                      key: client.name,
                      onClick: ($event) => importToClient(client),
                      class: "btn-base btn-medium btn-secondary",
                      title: `导入订阅到 ${client.name}`
                    }, [
                      createBaseVNode("img", {
                        src: client.img,
                        alt: client.name,
                        class: "import-icon"
                      }, null, 8, _hoisted_11$1),
                      createBaseVNode("span", null, "导入到 " + toDisplayString(client.name), 1)
                    ], 8, _hoisted_10$1);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ])) : _ctx.mode === "manual" ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
              createBaseVNode("div", _hoisted_13$1, [
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "instructions-label" }, "导入步骤", -1)),
                createBaseVNode("div", _hoisted_14$1, toDisplayString(_ctx.manualInstructions), 1)
              ]),
              createBaseVNode("div", { class: "subscription-copy-section" }, [
                createBaseVNode("button", {
                  onClick: copySubscriptionUrl,
                  class: "btn-base btn-large btn-primary"
                }, _cache[7] || (_cache[7] = [
                  createBaseVNode("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "currentColor"
                  }, [
                    createBaseVNode("path", { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" })
                  ], -1),
                  createTextVNode(" 复制订阅链接 ")
                ]))
              ]),
              createBaseVNode("div", _hoisted_15$1, [
                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "url-label" }, "订阅链接", -1)),
                createBaseVNode("div", _hoisted_16$1, toDisplayString(_ctx.subscriptionUrl), 1)
              ])
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", { class: "dialog-actions" }, [
            createBaseVNode("button", {
              class: "btn-base btn-large btn-secondary",
              onClick: handleClose
            }, " 关闭 ")
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const SubscriptionDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8674f0f0"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "modal-content"
};
const _hoisted_2$1 = {
  key: 0,
  class: "notice-detail-image"
};
const _hoisted_3$1 = ["src", "alt"];
const _hoisted_4$1 = { class: "notice-detail-title" };
const _hoisted_5$1 = { class: "notice-detail-time" };
const _hoisted_6$1 = {
  key: 1,
  class: "notice-detail-tags"
};
const _hoisted_7$1 = { class: "notice-detail-content" };
const _hoisted_8$1 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NoticeDetailModal",
  props: {
    show: { type: Boolean, default: false },
    notice: { default: null }
  },
  emits: ["update:show", "close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleClose = () => {
      emit("update:show", false);
      emit("close");
    };
    const handleOverlayClick = () => {
      handleClose();
    };
    const handleImageError = (event) => {
      const img = event.target;
      img.style.display = "none";
      console.log("通知图片加载失败:", img.src);
    };
    const handleImageLoad = (event) => {
      const img = event.target;
      img.style.opacity = "1";
    };
    const formatNoticeTime = (timestamp) => {
      const now = Date.now() / 1e3;
      const diff = now - timestamp;
      if (diff < 60) {
        return "刚刚";
      } else if (diff < 3600) {
        return `${Math.floor(diff / 60)}分钟前`;
      } else if (diff < 86400) {
        return `${Math.floor(diff / 3600)}小时前`;
      } else if (diff < 2592e3) {
        return `${Math.floor(diff / 86400)}天前`;
      } else {
        const date = new Date(timestamp * 1e3);
        return date.toLocaleDateString();
      }
    };
    const formatNoticeContent = (content) => {
      if (!content) return "";
      return content.replace(/\n/g, "<br>").replace(/\r\n/g, "<br>").replace(/\r/g, "<br>");
    };
    return (_ctx, _cache) => {
      return _ctx.show ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "modal-overlay",
        onClick: handleOverlayClick
      }, [
        createBaseVNode("div", {
          class: "notice-detail-modal",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createBaseVNode("div", { class: "modal-header" }, [
            createBaseVNode("button", {
              class: "modal-close-btn",
              onClick: handleClose
            }, _cache[1] || (_cache[1] = [
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
            ])),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "modal-title" }, [
              createBaseVNode("h3", null, "通知详情")
            ], -1))
          ]),
          _ctx.notice ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
            _ctx.notice.img_url ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
              createBaseVNode("img", {
                src: _ctx.notice.img_url,
                alt: _ctx.notice.title,
                onError: handleImageError,
                onLoad: handleImageLoad,
                class: "notice-detail-img"
              }, null, 40, _hoisted_3$1)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("h2", null, toDisplayString(_ctx.notice.title), 1),
              createBaseVNode("div", _hoisted_5$1, toDisplayString(formatNoticeTime(_ctx.notice.created_at)), 1)
            ]),
            _ctx.notice.tags && _ctx.notice.tags.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.notice.tags, (tag) => {
                return openBlock(), createElementBlock("span", {
                  key: tag,
                  class: "notice-detail-tag"
                }, toDisplayString(tag), 1);
              }), 128))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_7$1, [
              createBaseVNode("div", {
                class: "content-text",
                innerHTML: formatNoticeContent(_ctx.notice.content)
              }, null, 8, _hoisted_8$1)
            ])
          ])) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const NoticeDetailModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e9ae10ae"]]);
const _hoisted_1 = { class: "dashboard-page" };
const _hoisted_2 = { class: "dashboard-content" };
const _hoisted_3 = {
  key: 0,
  class: "unpaid-order-alert"
};
const _hoisted_4 = { class: "alert-content" };
const _hoisted_5 = { class: "alert-info" };
const _hoisted_6 = { class: "alert-details" };
const _hoisted_7 = { class: "order-plan" };
const _hoisted_8 = { class: "order-period" };
const _hoisted_9 = { class: "order-amount" };
const _hoisted_10 = { class: "alert-actions" };
const _hoisted_11 = {
  key: 1,
  class: "loading-state"
};
const _hoisted_12 = {
  key: 2,
  class: "main-layout"
};
const _hoisted_13 = { class: "left-column" };
const _hoisted_14 = { class: "user-card" };
const _hoisted_15 = { class: "user-main-info" };
const _hoisted_16 = { class: "user-profile" };
const _hoisted_17 = { class: "avatar-container" };
const _hoisted_18 = { class: "user-avatar-wrapper" };
const _hoisted_19 = ["src", "alt"];
const _hoisted_20 = { class: "user-details" };
const _hoisted_21 = { class: "user-email-container" };
const _hoisted_22 = { class: "user-email-main" };
const _hoisted_23 = {
  key: 0,
  class: "user-email-domain"
};
const _hoisted_24 = { class: "user-badges" };
const _hoisted_25 = {
  key: 0,
  class: "user-status-badge member"
};
const _hoisted_26 = { class: "subscription-items" };
const _hoisted_27 = { class: "user-subscription-item" };
const _hoisted_28 = { class: "subscription-value" };
const _hoisted_29 = { class: "user-subscription-item" };
const _hoisted_30 = { class: "subscription-value" };
const _hoisted_31 = { class: "user-subscription-item" };
const _hoisted_32 = { class: "subscription-value" };
const _hoisted_33 = {
  key: 0,
  class: "user-subscription-item auto-renewal-item"
};
const _hoisted_34 = { class: "auto-renewal-switch" };
const _hoisted_35 = { class: "balance-cards-premium" };
const _hoisted_36 = { class: "balance-card-premium commission-premium commission-card-wide" };
const _hoisted_37 = { class: "card-content-premium" };
const _hoisted_38 = { class: "card-main-content" };
const _hoisted_39 = { class: "card-amount" };
const _hoisted_40 = { class: "balance-card-premium account-premium account-card-wide" };
const _hoisted_41 = { class: "card-content-premium" };
const _hoisted_42 = { class: "card-main-content" };
const _hoisted_43 = { class: "card-amount" };
const _hoisted_44 = { class: "balance-card-premium wallet-premium wallet-card-wide" };
const _hoisted_45 = { class: "card-content-premium" };
const _hoisted_46 = { class: "card-main-content" };
const _hoisted_47 = { class: "card-amount" };
const _hoisted_48 = { class: "left-bottom" };
const _hoisted_49 = { class: "clients-section" };
const _hoisted_50 = { class: "platform-cards" };
const _hoisted_51 = { class: "apps-title" };
const _hoisted_52 = ["innerHTML"];
const _hoisted_53 = { class: "app-grid" };
const _hoisted_54 = ["onClick"];
const _hoisted_55 = { class: "app-icon-wrapper" };
const _hoisted_56 = ["src", "alt"];
const _hoisted_57 = { class: "app-name" };
const _hoisted_58 = { class: "app-version" };
const _hoisted_59 = {
  key: 0,
  class: "subscription-container"
};
const _hoisted_60 = { class: "subscription-cards-section" };
const _hoisted_61 = { class: "subscription-grid" };
const _hoisted_62 = { class: "right-column" };
const _hoisted_63 = { class: "notice-section" };
const _hoisted_64 = {
  key: 0,
  class: "notice-content"
};
const _hoisted_65 = {
  key: 0,
  class: "no-notices"
};
const _hoisted_66 = {
  key: 1,
  class: "notices-list"
};
const _hoisted_67 = ["onClick"];
const _hoisted_68 = { class: "notice-content-wrapper" };
const _hoisted_69 = {
  key: 0,
  class: "notice-image"
};
const _hoisted_70 = ["src", "alt"];
const _hoisted_71 = { class: "notice-text-content" };
const _hoisted_72 = { class: "notice-header" };
const _hoisted_73 = { class: "notice-title" };
const _hoisted_74 = { class: "notice-time" };
const _hoisted_75 = { class: "notice-text" };
const _hoisted_76 = {
  key: 0,
  class: "notice-tags"
};
const _hoisted_77 = {
  key: 1,
  class: "notice-loading"
};
const _hoisted_78 = {
  key: 0,
  class: "traffic-dashboard"
};
const _hoisted_79 = { class: "dashboard-container" };
const _hoisted_80 = { class: "gauge-chart" };
const _hoisted_81 = { class: "gauge-container" };
const _hoisted_82 = {
  width: "240",
  height: "160",
  viewBox: "0 0 240 160"
};
const _hoisted_83 = {
  id: "progressGradient",
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "0%"
};
const _hoisted_84 = ["d"];
const _hoisted_85 = { class: "gauge-center" };
const _hoisted_86 = { class: "gauge-sublabel" };
const _hoisted_87 = { class: "traffic-stats-grid" };
const _hoisted_88 = { class: "stat-item total-traffic" };
const _hoisted_89 = { class: "stat-content" };
const _hoisted_90 = { class: "stat-value" };
const _hoisted_91 = { class: "stat-item used-traffic" };
const _hoisted_92 = { class: "stat-content" };
const _hoisted_93 = { class: "stat-value" };
const _hoisted_94 = { class: "stat-item remaining-traffic" };
const _hoisted_95 = { class: "stat-content" };
const _hoisted_96 = { class: "stat-value" };
const _hoisted_97 = { class: "stat-item expire-time" };
const _hoisted_98 = { class: "stat-content" };
const _hoisted_99 = { class: "stat-value" };
const _hoisted_100 = { class: "recharge-content" };
const _hoisted_101 = { class: "current-balance" };
const _hoisted_102 = { class: "amount" };
const _hoisted_103 = { class: "recharge-form" };
const _hoisted_104 = { class: "form-item" };
const _hoisted_105 = { class: "quick-amounts" };
const _hoisted_106 = { class: "amount-buttons" };
const _hoisted_107 = ["onClick"];
const _hoisted_108 = { class: "recharge-info" };
const _hoisted_109 = { class: "info-item" };
const _hoisted_110 = { class: "highlight" };
const _hoisted_111 = { class: "modal-actions" };
const _hoisted_112 = ["disabled"];
const _hoisted_113 = { key: 0 };
const _hoisted_114 = { class: "payment-content" };
const _hoisted_115 = { class: "payment-info" };
const _hoisted_116 = { class: "amount" };
const _hoisted_117 = { class: "payment-methods-list" };
const _hoisted_118 = {
  key: 0,
  class: "no-payment-methods"
};
const _hoisted_119 = ["onClick"];
const _hoisted_120 = { class: "method-icon" };
const _hoisted_121 = {
  key: 0,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_122 = {
  key: 1,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_123 = {
  key: 2,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_124 = { class: "method-info" };
const _hoisted_125 = { class: "method-name" };
const _hoisted_126 = { class: "method-desc" };
const _hoisted_127 = { class: "modal-actions" };
const _hoisted_128 = { style: { "padding": "20px 0", "text-align": "center" } };
const _hoisted_129 = { style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "padding": "16px", "background": "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)", "border-radius": "12px", "margin-bottom": "24px" } };
const _hoisted_130 = { style: { "display": "flex", "flex-direction": "column", "gap": "4px" } };
const _hoisted_131 = { style: { "font-size": "18px", "font-weight": "700", "color": "#3b82f6" } };
const _hoisted_132 = { style: { "display": "flex", "flex-direction": "column", "gap": "4px" } };
const _hoisted_133 = { style: { "font-size": "14px", "font-weight": "600", "color": "#1e293b", "font-family": "monospace" } };
const _hoisted_134 = { style: { "padding": "30px", "text-align": "center" } };
const _hoisted_135 = { style: { "display": "inline-block", "padding": "20px", "background": "white", "border-radius": "12px", "box-shadow": "0 4px 12px rgba(0, 0, 0, 0.1)", "margin-bottom": "20px" } };
const _hoisted_136 = ["src"];
const _hoisted_137 = {
  key: 1,
  style: { "width": "200px", "height": "200px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "#f5f5f5", "color": "#999", "border-radius": "8px" }
};
const _hoisted_138 = {
  key: 2,
  style: { "width": "200px", "height": "200px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "background": "#f5f5f5", "color": "#999", "border-radius": "8px", "gap": "12px" }
};
const _hoisted_139 = {
  key: 3,
  style: { "width": "200px", "height": "200px", "display": "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg, rgba(102, 201, 179, 0.1) 0%, rgba(240, 253, 250, 0.8) 100%)", "color": "#66c9b3", "border-radius": "8px", "font-size": "14px", "font-weight": "500" }
};
const _hoisted_140 = { class: "modal-actions" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const router = useRouter();
    const message = useMessage();
    const authStore = useAuthStore();
    const loading = ref(false);
    const subscriptionLoading = ref(false);
    const autoRenewalEnabled = ref(0);
    const savingAutoRenewal = ref(false);
    const subscribeInfo = ref(null);
    const loadingSubscribeInfo = ref(false);
    const showRechargeModal = ref(false);
    const recharging = ref(false);
    const rechargeAmount = ref(null);
    const showPaymentMethodModal = ref(false);
    const showPaymentModal = ref(false);
    const paymentMethods = ref([]);
    const selectedPaymentMethod = ref(null);
    const paymentTradeNo = ref("");
    const paymentAmount = ref(0);
    const paymentQrCode = ref("");
    const qrCodeError = ref(false);
    const qrCodeImageUrl = ref("");
    ref(false);
    const selectedPlatform = ref("windows");
    const unpaidOrder = ref(null);
    const notices = ref([]);
    const noticesLoading = ref(true);
    const isRechargeEnabled = computed(() => {
      var _a, _b;
      return ((_b = (_a = window.V2BOARD_CONFIG) == null ? void 0 : _a.FEATURES) == null ? void 0 : _b.RECHARGE_ENABLED) !== false;
    });
    const showNoticeModal = ref(false);
    const selectedNotice = ref(null);
    const showSubscriptionModal = ref(false);
    const currentSubscriptionType = ref("");
    const currentSubscriptionUrl = ref("");
    const modalTitle = ref("");
    const modalSubtitle = ref("");
    const modalMode = ref("normal");
    const manualInstructions = ref("");
    const platformIconSvgs = {
      windows: `<svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
    <path d="M0 139.392L409.429333 81.92l0.170667 407.210667-409.216 2.389333L0 139.392z m409.301333 395.818667L409.6 942.08 0 884.181333V532.48l409.301333 2.730667z m41.258667-454.186667L1024 0v487.125333l-573.44 4.394667V81.024zM1024 533.333333L1023.872 1024l-572.501333-79.274667-0.810667-412.245333 573.44 0.896z"/>
  </svg>`,
      android: `<svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
    <path d="M275.2 748.8c0 21.7344 17.7664 39.4752 39.4752 39.4752h39.4752v138.1376c0 32.7424 26.4448 59.2128 59.2128 59.2128s59.2128-26.4448 59.2128-59.2128v-138.1376h78.9248v138.1376a59.136 59.136 0 0 0 59.2128 59.2128 59.136 59.136 0 0 0 59.2128-59.2128v-138.1376h39.4752c21.7344 0 39.4752-17.7408 39.4752-39.4752V354.1504h-473.6V748.8zM176.5376 354.1504a59.136 59.136 0 0 0-59.2128 59.2128v276.2496c0 32.768 26.4448 59.2128 59.2128 59.2128s59.2128-26.4192 59.2128-59.2128V413.3632a59.136 59.136 0 0 0-59.2128-59.2128z m670.9248 0a59.136 59.136 0 0 0-59.2128 59.2128v276.2496c0 32.768 26.4448 59.2128 59.2128 59.2128s59.2128-26.4192 59.2128-59.2128V413.3632a59.1616 59.1616 0 0 0-59.2128-59.2128z m-196.1728-230.4512l51.5328-51.5072a19.6864 19.6864 0 1 0-27.8528-27.8272l-58.3936 58.2144A235.3152 235.3152 0 0 0 512 77.9008a235.008 235.008 0 0 0-105.1648 24.8576l-58.624-58.624a19.6608 19.6608 0 1 0-27.8016 27.8272l51.712 51.712c-58.5984 43.2128-96.896 112.6656-96.896 191.0016h473.6c-0.0256-78.5152-38.5024-147.968-97.536-190.976z m-218.2144 112.0512h-39.4752V196.3008h39.4752v39.4496z m197.3248 0h-39.4752V196.3008h39.4752v39.4496z"/>
  </svg>`,
      ios: `<svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
    <path d="M812.2 550.8c-7.2-96.1 56.4-156.8 116.4-199-56.4-50.6-105.4-99.5-209.1-104.5-83.6-3.4-121.8 43.8-200 45.5-72.7 1.7-67.3-52.3-218.2-37.1C170.5 269.2 55.9 390.6 65 560.9c9.1 183.8 147.3 438.3 276.3 438.3 90.9-1.7 112.7-42.1 187.3-42.1 92.7 0 114.5 50.6 187.3 40.5C841.4 980.7 959.5 797 959.5 738c-69.1-33.8-138.2-91.1-147.3-187.2z m-105.4-526C534.1 46.7 485 193.4 494.1 260.8c132.7 6.7 232.7-123.1 212.7-236z"/>
  </svg>`
    };
    const platformNames = {
      windows: "Windows 客户端",
      android: "Android 客户端",
      ios: "iOS 客户端"
    };
    const platformThemes = {
      windows: {
        primary: "#0078D4",
        secondary: "#106EBE",
        background: "linear-gradient(135deg, rgba(0, 120, 212, 0.15) 0%, rgba(16, 110, 190, 0.25) 100%)"
      },
      android: {
        primary: "#3DDC84",
        secondary: "#00C853",
        background: "linear-gradient(135deg, rgba(61, 220, 132, 0.15) 0%, rgba(0, 200, 83, 0.25) 100%)"
      },
      ios: {
        primary: "#007AFF",
        secondary: "#0056CC",
        background: "linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(0, 86, 204, 0.25) 100%)"
      }
    };
    const currentTheme = computed(() => {
      return platformThemes[selectedPlatform.value] || platformThemes.windows;
    });
    const avatarUrl = computed(() => {
      var _a;
      const email = ((_a = authStore.user) == null ? void 0 : _a.email) || "";
      return generateAvatar(email, 64);
    });
    computed(() => {
      var _a;
      const email = ((_a = authStore.user) == null ? void 0 : _a.email) || "";
      return generateAvatar(email, 64);
    });
    const formatEmailDisplay = (email) => {
      if (!email.includes("@")) return email;
      const [username, domain] = email.split("@");
      if (username.length > 12) {
        return username.substring(0, 12) + "...";
      }
      return username;
    };
    const getEmailDomain = (email) => {
      if (!email || !email.includes("@")) return "";
      return "@" + email.split("@")[1];
    };
    const copyEmail = async () => {
      var _a;
      const email = (_a = authStore.user) == null ? void 0 : _a.email;
      if (!email) return;
      try {
        await navigator.clipboard.writeText(email);
        message.success("邮箱已复制到剪贴板");
      } catch (error) {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        message.success("邮箱已复制到剪贴板");
      }
    };
    const fetchSubscribeInfo = async () => {
      if (loadingSubscribeInfo.value) return;
      loadingSubscribeInfo.value = true;
      try {
        subscribeInfo.value = await apiClient.getSubscribeInfo();
      } catch (error) {
      } finally {
        loadingSubscribeInfo.value = false;
      }
    };
    const usedTraffic = computed(() => {
      var _a, _b;
      if (subscribeInfo.value) {
        return (subscribeInfo.value.u || 0) + (subscribeInfo.value.d || 0);
      }
      return (((_a = authStore.user) == null ? void 0 : _a.u) || 0) + (((_b = authStore.user) == null ? void 0 : _b.d) || 0);
    });
    const totalTraffic = computed(() => {
      var _a;
      if (subscribeInfo.value) {
        return subscribeInfo.value.transfer_enable || 0;
      }
      return ((_a = authStore.user) == null ? void 0 : _a.transfer_enable) || 0;
    });
    const remainingTraffic = computed(() => {
      return Math.max(0, totalTraffic.value - usedTraffic.value);
    });
    const trafficPercentage = computed(() => {
      const total = totalTraffic.value;
      if (total === 0) return 0;
      return Math.min(100, usedTraffic.value / total * 100);
    });
    const trafficColor = computed(() => {
      const percentage = trafficPercentage.value;
      if (percentage >= 90) return "#ff4757";
      if (percentage >= 70) return "#ffa502";
      return "#2ed573";
    });
    const trafficStatusClass = computed(() => {
      const percentage = trafficPercentage.value;
      if (percentage >= 90) return "status-danger";
      if (percentage >= 70) return "status-warning";
      return "status-normal";
    });
    const trafficStatusText = computed(() => {
      const percentage = trafficPercentage.value;
      if (percentage >= 90) return "流量即将耗尽";
      if (percentage >= 70) return "流量使用较多";
      return "流量充足";
    });
    const getProgressArc = (percentage) => {
      const angle = percentage / 100 * 180;
      const radians = angle * Math.PI / 180;
      const x = 120 + 95 * Math.cos(Math.PI - radians);
      const y = 105 - 95 * Math.sin(Math.PI - radians);
      const largeArcFlag = 0;
      return `M 25 105 A 95 95 0 ${largeArcFlag} 1 ${x} ${y}`;
    };
    const formatMoney = (amount) => {
      if (amount === void 0 || amount === null) return "0.00";
      return (amount / 100).toFixed(2);
    };
    const formatTrafficShort = (bytes) => {
      if (!bytes) return "0GB";
      const units = ["B", "KB", "MB", "GB", "TB"];
      const k = 1024;
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      if (i >= units.length) return "∞";
      const value = bytes / Math.pow(k, i);
      return `${value.toFixed(i === 0 ? 0 : 1)}${units[i]}`;
    };
    const formatExpireDays = (expiredAt) => {
      if (!expiredAt) return "永久";
      const now = Date.now();
      const expireTime = expiredAt * 1e3;
      const diffTime = expireTime - now;
      if (diffTime <= 0) return "已过期";
      const days = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      return `${days}天`;
    };
    const formatExpireTime = (expiredAt) => {
      if (!expiredAt) return "永久有效";
      const expireDate = new Date(expiredAt * 1e3);
      const now = /* @__PURE__ */ new Date();
      if (expireDate <= now) return "已过期";
      return expireDate.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const quickAmounts = [10, 20, 50, 100, 200, 500];
    const shouldUseMobileLayout = () => {
      return window.innerWidth <= 768;
    };
    const handleRecharge = async () => {
      var _a, _b;
      if (!rechargeAmount.value || rechargeAmount.value <= 0) {
        message.error("请输入有效的充值金额");
        return;
      }
      try {
        recharging.value = true;
        message.loading("正在创建充值订单...");
        const response = await apiClient.instance.post("/api/v1/user/order/save", {
          plan_id: 0,
          period: "deposit",
          deposit_amount: rechargeAmount.value * 100
          // 转换为分
        });
        const tradeNo = response.data.data;
        message.destroyAll();
        message.success("充值订单创建成功！");
        showRechargeModal.value = false;
        try {
          message.loading("正在获取支付方式...");
          const methods = await apiClient.getPaymentMethods();
          message.destroyAll();
          if (methods && methods.length > 0) {
            paymentTradeNo.value = tradeNo;
            paymentAmount.value = rechargeAmount.value * 100;
            paymentMethods.value = methods;
            showPaymentMethodModal.value = true;
          } else {
            message.error("没有可用的支付方式，请联系管理员");
            router.push(`/orders?trade_no=${tradeNo}`);
          }
        } catch (error) {
          message.destroyAll();
          message.error("获取支付方式失败，跳转到订单页面");
          router.push(`/orders?trade_no=${tradeNo}`);
        }
        rechargeAmount.value = null;
      } catch (error) {
        message.destroyAll();
        let errorMessage = "充值失败，请稍后重试";
        if ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) {
          errorMessage = error.response.data.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        message.error(errorMessage);
      } finally {
        recharging.value = false;
      }
    };
    const selectPaymentMethod = async (method) => {
      selectedPaymentMethod.value = method;
      showPaymentMethodModal.value = false;
      if (paymentTradeNo.value) {
        await processPayment(paymentTradeNo.value, method);
      } else {
        message.error("没有可支付的订单，请重试");
      }
    };
    const processPayment = async (tradeNo, method) => {
      var _a, _b;
      try {
        message.loading("正在处理支付...");
        const paymentResult = await apiClient.checkoutOrder(tradeNo, method.id);
        if (!paymentResult || typeof paymentResult.type === "undefined") {
          message.destroyAll();
          message.error("支付结果数据格式错误，请重试");
          return;
        }
        message.destroyAll();
        if (paymentResult.type === 0) {
          if (!paymentResult.data) {
            message.error("二维码URL为空，请重试");
            return;
          }
          if (shouldUseMobileLayout()) {
            window.location.href = paymentResult.data;
            message.info("正在跳转到支付页面，请完成支付");
          } else {
            paymentQrCode.value = paymentResult.data;
            qrCodeError.value = false;
            qrCodeImageUrl.value = "";
            showPaymentModal.value = true;
            generateQrCodeUrl(paymentResult.data).then((imageUrl) => {
              qrCodeImageUrl.value = imageUrl;
            }).catch((error) => {
              qrCodeError.value = true;
            });
            message.info("请使用支付宝扫描二维码完成支付");
          }
        } else if (paymentResult.type === 1) {
          if (!paymentResult.data) {
            message.error("跳转URL为空，请重试");
            return;
          }
          window.open(paymentResult.data, "_blank");
          message.info("已打开支付页面，请完成支付");
        } else if (paymentResult.type === -1) {
          message.success("充值成功！");
          await authStore.fetchUserInfo();
          return;
        } else if (paymentResult.type === 2) {
          message.success("已使用余额支付部分金额，请选择其他支付方式完成剩余支付");
          const remainingAmount = paymentResult.data || 0;
          if (remainingAmount > 0) {
            message.info(`剩余需要支付：¥${(remainingAmount / 100).toFixed(2)}`);
            try {
              const methods = await apiClient.getPaymentMethods();
              if (methods && methods.length > 0) {
                paymentAmount.value = remainingAmount;
                paymentTradeNo.value = tradeNo;
                paymentMethods.value = methods;
                showPaymentMethodModal.value = true;
              } else {
                message.error("没有其他支付方式可用，请联系管理员");
              }
            } catch (error) {
              message.error("获取支付方式失败，请重试");
            }
          } else {
            message.success("充值成功！");
            await authStore.fetchUserInfo();
          }
        } else {
          message.error("未知的支付类型，请重试");
        }
      } catch (error) {
        message.destroyAll();
        let errorMessage = "支付处理失败，请稍后重试";
        if ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) {
          errorMessage = error.response.data.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        message.error(errorMessage);
        router.push(`/orders?trade_no=${tradeNo}`);
      }
    };
    const generateQrCodeUrl = async (url) => {
      try {
        const qrCodeDataUrl = await browser.toDataURL(url, {
          width: 300,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          },
          errorCorrectionLevel: "M"
        });
        return qrCodeDataUrl;
      } catch (error) {
        const encodedUrl = encodeURIComponent(url);
        return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedUrl}`;
      }
    };
    const retryQrCode = async () => {
      qrCodeError.value = false;
      qrCodeImageUrl.value = "";
      if (paymentQrCode.value) {
        try {
          const imageUrl = await generateQrCodeUrl(paymentQrCode.value);
          qrCodeImageUrl.value = imageUrl;
        } catch (error) {
          qrCodeError.value = true;
        }
      }
    };
    const openPaymentUrl = () => {
      if (!paymentQrCode.value) {
        message.error("支付链接为空");
        return;
      }
      window.open(paymentQrCode.value, "_blank");
      message.info("已在新窗口打开支付链接");
    };
    const checkPaymentStatus = async () => {
      var _a, _b;
      if (!paymentTradeNo.value) return;
      try {
        message.loading("正在检查支付状态...");
        const status = await apiClient.checkOrderStatus(paymentTradeNo.value);
        message.destroyAll();
        if (status === 1 || status === 3) {
          message.success("支付成功！");
          showPaymentModal.value = false;
          await authStore.fetchUserInfo();
        } else if (status === 0) {
          message.warning("订单尚未支付，请继续扫码支付");
        } else if (status === 2) {
          message.error("订单已取消");
          showPaymentModal.value = false;
        } else {
          message.info("订单状态未知，请稍后再试");
        }
      } catch (error) {
        message.destroyAll();
        const errorMessage = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "检查支付状态失败";
        message.error(`检查支付状态失败: ${errorMessage}`);
      }
    };
    const handleQrCodeError = () => {
      qrCodeError.value = true;
      message.error("二维码生成失败，请尝试点击下方按钮直接打开支付链接");
    };
    const selectPlatform = (platform) => {
      selectedPlatform.value = platform;
    };
    const getPlatformTitle = (platform) => {
      const name = platformNames[platform] || "客户端";
      return name;
    };
    const getPlatformIconSvg = (platform) => {
      return platformIconSvgs[platform] || platformIconSvgs.windows;
    };
    const getPlatformApps = (platform) => {
      const config = window.V2BOARD_CONFIG;
      if (!config || !config.CLIENTS || !config.CLIENTS[platform]) {
        return [];
      }
      const platformClients = config.CLIENTS[platform];
      return Object.keys(platformClients).map((key) => ({
        key,
        ...platformClients[key]
      }));
    };
    const loadSubscribeInfo = async () => {
      var _a, _b;
      subscriptionLoading.value = true;
      try {
        subscribeInfo.value = await apiClient.getSubscribe();
        initAutoRenewalStatus();
      } catch (error) {
        message.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "加载订阅信息失败");
      } finally {
        subscriptionLoading.value = false;
      }
    };
    const initAutoRenewalStatus = () => {
      if (authStore.user) {
        autoRenewalEnabled.value = authStore.user.auto_renewal ?? 0;
      }
    };
    const handleAutoRenewalChange = async (value) => {
      var _a, _b;
      savingAutoRenewal.value = true;
      try {
        await apiClient.updateUserSettings({
          auto_renewal: value
        });
        if (authStore.user) {
          authStore.user.auto_renewal = value;
          localStorage.setItem("v2board_user", JSON.stringify(authStore.user));
        }
        message.success(value === 1 ? "自动续费已开启" : "自动续费已关闭");
      } catch (error) {
        autoRenewalEnabled.value = autoRenewalEnabled.value === 1 ? 0 : 1;
        const errorMsg = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "设置自动续费失败";
        message.error(errorMsg);
      } finally {
        savingAutoRenewal.value = false;
      }
    };
    const checkUnpaidOrders = async () => {
      try {
        const orders = await apiClient.getOrders(0);
        if (orders && orders.length > 0) {
          unpaidOrder.value = orders[0];
        }
      } catch (error) {
      }
    };
    const goToPayment = () => {
      if (unpaidOrder.value) {
        router.push(`/orders?trade_no=${unpaidOrder.value.trade_no}`);
      }
    };
    const dismissAlert = () => {
      unpaidOrder.value = null;
    };
    const getPeriodText = (period) => {
      const periodMap = {
        "month_price": "月付",
        "quarter_price": "季付",
        "half_year_price": "半年付",
        "year_price": "年付",
        "two_year_price": "两年付",
        "three_year_price": "三年付",
        "onetime_price": "一次性",
        "reset_price": "重置"
      };
      return periodMap[period] || period;
    };
    const openClientAppHandler = (app) => {
      downloadClientApp(app);
    };
    const openSubscriptionModal = (type) => {
      var _a;
      if (!((_a = subscribeInfo.value) == null ? void 0 : _a.subscribe_url)) {
        message.error("订阅链接不可用");
        return;
      }
      currentSubscriptionType.value = type;
      currentSubscriptionUrl.value = getSubscriptionUrlByType(type);
      modalTitle.value = getModalTitle(type);
      modalSubtitle.value = getModalSubtitle(type);
      modalMode.value = "normal";
      manualInstructions.value = "";
      showSubscriptionModal.value = true;
    };
    const getSubscriptionUrlByType = (type) => {
      var _a;
      const baseUrl = ((_a = subscribeInfo.value) == null ? void 0 : _a.subscribe_url) || "";
      switch (type) {
        case "clash":
          return baseUrl + "&flag=clash";
        case "v2ray":
          return baseUrl + "&flag=v2ray";
        case "shadowsocks":
          return baseUrl + "&flag=ss";
        case "singbox":
          return baseUrl + "&flag=singbox";
        case "hiddify":
          return baseUrl + "&flag=hiddify";
        default:
          return baseUrl;
      }
    };
    const getModalTitle = (type) => {
      const titles = {
        general: "通用订阅链接",
        clash: "Clash 订阅链接",
        v2ray: "V2Ray 订阅链接",
        shadowsocks: "Shadowsocks 订阅链接",
        singbox: "SingBox 订阅链接",
        hiddify: "Hiddify 订阅链接"
      };
      return titles[type] || "订阅链接";
    };
    const getModalSubtitle = (type) => {
      const subtitles = {
        general: "适用于大部分客户端",
        clash: "适用于 Clash 系列客户端",
        v2ray: "适用于 V2Ray 系列客户端",
        shadowsocks: "适用于 Shadowsocks 系列客户端",
        singbox: "适用于 SingBox 系列客户端",
        hiddify: "适用于 Hiddify 系列客户端"
      };
      return subtitles[type] || "";
    };
    const getSupportedClients = (type) => {
      const supportedClientNames = {
        general: [],
        // 通用订阅不显示一键导入
        clash: ["Clash Verge", "mihomo", "FlClash"],
        v2ray: ["V2rayN"],
        // V2Ray订阅显示V2rayN（会触发手动导入指导）
        shadowsocks: ["Shadowrocket"],
        // 只支持Shadowrocket
        singbox: ["SingBox"],
        // SingBox显示SingBox（会触发手动导入指导）
        hiddify: ["hiddify"]
      };
      const clientNames = supportedClientNames[type] || [];
      const allClients = [
        ...getPlatformApps("windows"),
        ...getPlatformApps("android"),
        ...getPlatformApps("ios")
      ];
      const filteredClients = allClients.filter((client) => clientNames.includes(client.name));
      const uniqueClients = filteredClients.filter(
        (client, index, arr) => arr.findIndex((c) => c.name === client.name) === index
      );
      return uniqueClients;
    };
    const handleCopySubscription = async (url) => {
      try {
        await navigator.clipboard.writeText(url);
        message.success("订阅链接已复制到剪贴板");
      } catch (error) {
        message.error("复制失败，请手动复制");
      }
    };
    const handleImportToClient = (client, url) => {
      openClientApp(client, url, (config) => {
        modalTitle.value = config.title;
        modalSubtitle.value = config.subtitle;
        modalMode.value = config.mode;
        manualInstructions.value = config.manualInstructions;
        currentSubscriptionUrl.value = config.subscriptionUrl;
      });
    };
    const loadNotices = async () => {
      try {
        noticesLoading.value = true;
        const response = await apiClient.getNotices(1, 3);
        notices.value = response.data || [];
      } catch (error) {
        notices.value = [];
      } finally {
        noticesLoading.value = false;
      }
    };
    const formatNoticeTime = (timestamp) => {
      const now = Date.now() / 1e3;
      const diff = now - timestamp;
      if (diff < 60) {
        return "刚刚";
      } else if (diff < 3600) {
        return `${Math.floor(diff / 60)}分钟前`;
      } else if (diff < 86400) {
        return `${Math.floor(diff / 3600)}小时前`;
      } else if (diff < 2592e3) {
        return `${Math.floor(diff / 86400)}天前`;
      } else {
        const date = new Date(timestamp * 1e3);
        return date.toLocaleDateString();
      }
    };
    const truncateContent = (content, maxLength = 50) => {
      if (!content) return "";
      if (content.length <= maxLength) return content;
      return content.substring(0, maxLength) + "...";
    };
    const handleNoticeClick = async (notice) => {
      try {
        const noticeDetail = await apiClient.getNoticeDetail(notice.id);
        selectedNotice.value = noticeDetail;
        showNoticeModal.value = true;
      } catch (error) {
        selectedNotice.value = notice;
        showNoticeModal.value = true;
      }
    };
    const handleImageError = (event) => {
      const img = event.target;
      img.style.display = "none";
    };
    const handleImageLoad = (event) => {
      const img = event.target;
      img.style.opacity = "1";
    };
    onMounted(async () => {
      if (!authStore.isAuthenticated) {
        router.push("/login");
        return;
      }
      loading.value = true;
      try {
        await Promise.all([
          authStore.fetchUserInfo(),
          // 每次都强制刷新用户信息
          fetchSubscribeInfo(),
          // 获取订阅信息（包含正确的u和d字段）
          loadSubscribeInfo(),
          loadNotices(),
          checkUnpaidOrders()
        ]);
      } catch (error) {
        message.error("页面加载失败，请刷新重试");
      } finally {
        loading.value = false;
      }
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      const _component_n_button = resolveComponent("n-button");
      const _component_n_spin = resolveComponent("n-spin");
      const _component_n_switch = resolveComponent("n-switch");
      const _component_n_input_number = resolveComponent("n-input-number");
      const _directive_else34 = resolveDirective('else"');
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            unpaidOrder.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                _cache[26] || (_cache[26] = createStaticVNode('<div class="alert-icon" data-v-3709f5eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3709f5eb><circle cx="12" cy="12" r="10" data-v-3709f5eb></circle><line x1="12" y1="8" x2="12" y2="12" data-v-3709f5eb></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-3709f5eb></line></svg></div>', 1)),
                createBaseVNode("div", _hoisted_5, [
                  _cache[23] || (_cache[23] = createBaseVNode("div", { class: "alert-title" }, "您有一笔未支付的订单", -1)),
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("span", _hoisted_7, toDisplayString(((_a = unpaidOrder.value.plan) == null ? void 0 : _a.name) || "套餐订单"), 1),
                    createBaseVNode("span", _hoisted_8, toDisplayString(getPeriodText(unpaidOrder.value.period)), 1),
                    createBaseVNode("span", _hoisted_9, "¥" + toDisplayString(formatMoney(unpaidOrder.value.total_amount)), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(_component_n_button, {
                    type: "primary",
                    size: "small",
                    onClick: goToPayment
                  }, {
                    default: withCtx(() => _cache[24] || (_cache[24] = [
                      createTextVNode(" 立即支付 ")
                    ])),
                    _: 1,
                    __: [24]
                  }),
                  createVNode(_component_n_button, {
                    quaternary: "",
                    size: "small",
                    onClick: dismissAlert
                  }, {
                    default: withCtx(() => _cache[25] || (_cache[25] = [
                      createBaseVNode("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createBaseVNode("line", {
                          x1: "18",
                          y1: "6",
                          x2: "6",
                          y2: "18"
                        }),
                        createBaseVNode("line", {
                          x1: "6",
                          y1: "6",
                          x2: "18",
                          y2: "18"
                        })
                      ], -1)
                    ])),
                    _: 1,
                    __: [25]
                  })
                ])
              ])
            ])) : createCommentVNode("", true),
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
              createVNode(_component_n_spin, { size: "large" }, {
                description: withCtx(() => _cache[27] || (_cache[27] = [
                  createTextVNode("正在加载主页数据...")
                ])),
                _: 1
              })
            ])) : (openBlock(), createElementBlock("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("div", _hoisted_18, [
                          createBaseVNode("img", {
                            src: avatarUrl.value,
                            alt: ((_b = unref(authStore).user) == null ? void 0 : _b.email) || "用户头像",
                            class: "user-avatar-enhanced"
                          }, null, 8, _hoisted_19),
                          _cache[28] || (_cache[28] = createBaseVNode("div", { class: "avatar-status-indicator" }, null, -1))
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("div", _hoisted_21, [
                          _cache[32] || (_cache[32] = createBaseVNode("div", { class: "user-greeting" }, [
                            createBaseVNode("span", { class: "greeting-text" }, "欢迎回来，")
                          ], -1)),
                          createBaseVNode("div", {
                            class: "user-email-wrapper",
                            onClick: copyEmail
                          }, [
                            createBaseVNode("div", _hoisted_22, toDisplayString(formatEmailDisplay(((_c = unref(authStore).user) == null ? void 0 : _c.email) || "用户")), 1),
                            ((_d = unref(authStore).user) == null ? void 0 : _d.email) ? (openBlock(), createElementBlock("div", _hoisted_23, toDisplayString(getEmailDomain(unref(authStore).user.email)), 1)) : createCommentVNode("", true),
                            _cache[29] || (_cache[29] = createBaseVNode("div", { class: "copy-hint" }, [
                              createBaseVNode("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }, [
                                createBaseVNode("rect", {
                                  x: "9",
                                  y: "9",
                                  width: "13",
                                  height: "13",
                                  rx: "2",
                                  ry: "2"
                                }),
                                createBaseVNode("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
                              ])
                            ], -1))
                          ]),
                          createBaseVNode("div", _hoisted_24, [
                            _cache[31] || (_cache[31] = createBaseVNode("div", { class: "user-status-badge verified" }, [
                              createBaseVNode("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }, [
                                createBaseVNode("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                                createBaseVNode("polyline", { points: "22,4 12,14.01 9,11.01" })
                              ]),
                              createTextVNode(" 已验证 ")
                            ], -1)),
                            ((_e = subscribeInfo.value) == null ? void 0 : _e.plan) ? (openBlock(), createElementBlock("div", _hoisted_25, _cache[30] || (_cache[30] = [
                              createBaseVNode("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }, [
                                createBaseVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                              ], -1),
                              createTextVNode(" 会员 ")
                            ]))) : createCommentVNode("", true)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_26, [
                          createBaseVNode("div", _hoisted_27, [
                            _cache[33] || (_cache[33] = createBaseVNode("span", { class: "subscription-label" }, "我的订阅", -1)),
                            createBaseVNode("span", _hoisted_28, toDisplayString(((_g = (_f = subscribeInfo.value) == null ? void 0 : _f.plan) == null ? void 0 : _g.name) || "无订阅"), 1)
                          ]),
                          createBaseVNode("div", _hoisted_29, [
                            _cache[34] || (_cache[34] = createBaseVNode("span", { class: "subscription-label" }, "流量重置时间", -1)),
                            createBaseVNode("span", _hoisted_30, toDisplayString(((_h = subscribeInfo.value) == null ? void 0 : _h.reset_day) ? `每月${subscribeInfo.value.reset_day}日重置` : "不重置"), 1)
                          ]),
                          createBaseVNode("div", _hoisted_31, [
                            _cache[35] || (_cache[35] = createBaseVNode("span", { class: "subscription-label" }, "到期时间", -1)),
                            createBaseVNode("span", _hoisted_32, toDisplayString(formatExpireTime((_i = unref(authStore).user) == null ? void 0 : _i.expired_at)), 1)
                          ]),
                          ((_j = subscribeInfo.value) == null ? void 0 : _j.plan) ? (openBlock(), createElementBlock("div", _hoisted_33, [
                            _cache[36] || (_cache[36] = createBaseVNode("span", { class: "subscription-label" }, "自动续费", -1)),
                            createBaseVNode("div", _hoisted_34, [
                              createVNode(_component_n_switch, {
                                value: autoRenewalEnabled.value,
                                "onUpdate:value": [
                                  _cache[0] || (_cache[0] = ($event) => autoRenewalEnabled.value = $event),
                                  handleAutoRenewalChange
                                ],
                                "checked-value": 1,
                                "unchecked-value": 0,
                                size: "small",
                                loading: savingAutoRenewal.value
                              }, null, 8, ["value", "loading"])
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        !((_k = subscribeInfo.value) == null ? void 0 : _k.plan) ? (openBlock(), createBlock(_component_n_button, {
                          key: 0,
                          type: "primary",
                          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push("/plans")),
                          class: "buy-button"
                        }, {
                          default: withCtx(() => _cache[37] || (_cache[37] = [
                            createTextVNode(" 立即购买订阅 ")
                          ])),
                          _: 1,
                          __: [37]
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_35, [
                      createBaseVNode("div", _hoisted_36, [
                        _cache[40] || (_cache[40] = createBaseVNode("div", { class: "card-glow" }, null, -1)),
                        createBaseVNode("div", _hoisted_37, [
                          _cache[39] || (_cache[39] = createStaticVNode('<div class="card-header-premium" data-v-3709f5eb><div class="card-icon-premium" data-v-3709f5eb><svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" preserveAspectRatio="xMidYMid meet" data-v-3709f5eb><circle cx="512" cy="512" r="512" fill="currentColor" opacity="0.1" data-v-3709f5eb></circle><path d="M637.269333 611.584l-7.355733 173.636267-62.122667-2.679467 6.690134-163.618133-85.486934 10.018133-6.673066 168.2944-62.7712-1.9968 19.3536-502.8864 32.068266-30.037333h283.818667l31.402667 30.037333 16.008533 474.1632-42.734933 30.037333-96.836267-36.7104 22.698667-57.429333 51.438933 20.0192-8.021333-253.098667-85.486934 9.352534-3.328 69.461333 72.123734-8.704 7.338666 62.788267-82.141866 9.352533zM348.740267 384.512h18.688v411.392h-62.7712V443.2896l-32.7168 42.734933L221.866667 447.965867 380.808533 238.933333l50.090667 37.393067-82.141867 108.202667z m148.258133 46.08l86.152533-8.669867 3.9936-96.836266h-86.135466l-4.010667 105.506133z m152.917333-105.506133l-3.9936 90.146133 80.810667-8.021333-2.013867-82.1248h-74.786133zM491.690667 564.8384l85.469866-10.018133 3.345067-69.461334-86.152533 9.352534-2.6624 70.126933z" fill="currentColor" data-v-3709f5eb></path></svg></div><div class="card-meta" data-v-3709f5eb><span class="card-type" data-v-3709f5eb>Commission</span><div class="card-indicator" data-v-3709f5eb></div></div></div>', 1)),
                          createBaseVNode("div", _hoisted_38, [
                            _cache[38] || (_cache[38] = createBaseVNode("div", { class: "card-label-premium" }, "佣金余额", -1)),
                            createBaseVNode("div", _hoisted_39, "¥" + toDisplayString(formatMoney((_l = unref(authStore).user) == null ? void 0 : _l.commission_balance)), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_40, [
                        _cache[43] || (_cache[43] = createBaseVNode("div", { class: "card-glow" }, null, -1)),
                        createBaseVNode("div", _hoisted_41, [
                          _cache[42] || (_cache[42] = createStaticVNode('<div class="card-header-premium" data-v-3709f5eb><div class="card-icon-premium" data-v-3709f5eb><svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" data-v-3709f5eb><circle cx="512" cy="512" r="512" fill="currentColor" opacity="0.1" data-v-3709f5eb></circle><path d="M512.54613333 16.65706667c-271.42826667 0-491.52 220.09173333-491.52 491.52s220.09173333 491.52 491.52 491.52 491.52-220.09173333 491.52-491.52-220.09173333-491.52-491.52-491.52z m154.55573334 475.68213333v49.69813333h-121.78773334v68.8128h121.78773334v50.7904h-121.78773334v99.9424H482.5088v-99.9424H355.80586667v-50.7904h126.1568v-68.8128H355.80586667v-49.69813333h107.58826666l-131.072-225.55306667H402.77333333c61.71306667 111.95733333 98.85013333 183.5008 111.95733334 213.53813334h1.09226666c4.36906667-12.56106667 16.93013333-37.13706667 36.59093334-74.82026667l75.3664-138.71786667h66.62826666l-132.7104 226.0992h105.40373334z" fill="currentColor" data-v-3709f5eb></path></svg></div><div class="card-meta" data-v-3709f5eb><span class="card-type" data-v-3709f5eb>Account</span><div class="card-indicator" data-v-3709f5eb></div></div></div>', 1)),
                          createBaseVNode("div", _hoisted_42, [
                            _cache[41] || (_cache[41] = createBaseVNode("div", { class: "card-label-premium" }, "账户余额", -1)),
                            createBaseVNode("div", _hoisted_43, "¥" + toDisplayString(formatMoney((_m = unref(authStore).user) == null ? void 0 : _m.balance)), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_44, [
                        _cache[46] || (_cache[46] = createBaseVNode("div", { class: "card-glow" }, null, -1)),
                        isRechargeEnabled.value ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          class: "btn-base btn-small btn-primary recharge-btn-float",
                          onClick: _cache[2] || (_cache[2] = ($event) => showRechargeModal.value = true),
                          title: "充值"
                        }, " 充值 ")) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_45, [
                          _cache[45] || (_cache[45] = createStaticVNode('<div class="card-header-premium" data-v-3709f5eb><div class="card-icon-premium" data-v-3709f5eb><svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" data-v-3709f5eb><path d="M789.5 820.8h-535c-39.1 0-71.1-32-71.1-71.1V403.5c0-39.1 32-71.1 71.1-71.1h535c39.1 0 71.1 32 71.1 71.1v346.3c0 39-32 71-71.1 71z" fill="currentColor" opacity="0.2" data-v-3709f5eb></path><path d="M759 805.6H224c-47.6 0-86.3-38.7-86.3-86.3V373c0-47.6 38.7-86.3 86.3-86.3h535c47.6 0 86.3 38.7 86.3 86.3v346.3c0 47.6-38.7 86.3-86.3 86.3zM224.1 317.2c-30.8 0-55.8 25-55.8-55.8 55.8v346.3c0 30.8 25 55.8 55.8 55.8h535c30.8 0 55.8-25 55.8-55.8V373c0-30.8-25-55.8-55.8-55.8h-535z" fill="currentColor" data-v-3709f5eb></path><path d="M829.1 632.4H689.3c-47.6 0-86.3-38.7-86.3-86.3 0-47.6 38.7-86.3 86.3-86.3h139.8v30.5H689.3c-30.8 0-55.8 25-55.8 55.8 0 30.8 25 55.8 55.8 55.8h139.8v30.5zM694.4 295.9L684 192.6c-1.2-12.4-7.3-23.6-17-31.6s-21.9-11.7-34.3-10.4l-307 30.8c-12.4 1.2-23.6 7.3-31.6 17s-11.7 21.9-10.4 34.3l6 59.7-30.3 3-6-59.7c-2.1-20.5 4-40.6 17.2-56.7s31.6-26 52.1-28.1l307-30.8c20.5-2.1 40.6 4 56.7 17.2 16 13.1 26 31.6 28.1 52.1l10.4 103.3-30.5 3.2z" fill="currentColor" data-v-3709f5eb></path><circle cx="686.8" cy="546.2" r="30" fill="currentColor" data-v-3709f5eb></circle></svg></div><div class="card-meta" data-v-3709f5eb><span class="card-type" data-v-3709f5eb>Total</span><div class="card-indicator" data-v-3709f5eb></div></div></div>', 1)),
                          createBaseVNode("div", _hoisted_46, [
                            _cache[44] || (_cache[44] = createBaseVNode("div", { class: "card-label-premium" }, "我的钱包", -1)),
                            createBaseVNode("div", _hoisted_47, "¥" + toDisplayString(formatMoney((((_n = unref(authStore).user) == null ? void 0 : _n.balance) || 0) + (((_o = unref(authStore).user) == null ? void 0 : _o.commission_balance) || 0))), 1),
                            isRechargeEnabled.value ? (openBlock(), createElementBlock("button", {
                              key: 0,
                              class: "ios-card-action",
                              onClick: _cache[3] || (_cache[3] = ($event) => showRechargeModal.value = true)
                            }, " 充值 ")) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_48, [
                  createBaseVNode("div", _hoisted_49, [
                    _cache[50] || (_cache[50] = createBaseVNode("div", { class: "section-title" }, [
                      createBaseVNode("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 1024 1024",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "title-icon"
                      }, [
                        createBaseVNode("path", {
                          d: "M443.733333 85.333333 102.4 85.333333C83.5584 85.333333 68.266667 100.625067 68.266667 119.466667l0 341.333333c0 18.8416 15.291733 34.133333 34.133333 34.133333l341.333333 0c18.8416 0 34.133333-15.291733 34.133333-34.133333L477.866667 119.466667C477.866667 100.625067 462.574933 85.333333 443.733333 85.333333zM443.733333 546.133333 102.4 546.133333c-18.8416 0-34.133333 15.291733-34.133333 34.133333l0 341.333333c0 18.8416 15.291733 34.133333 34.133333 34.133333l341.333333 0c18.8416 0 34.133333-15.291733 34.133333-34.133333L477.866667 580.266667C477.866667 561.425067 462.574933 546.133333 443.733333 546.133333zM980.974933 268.970667 771.6352 59.613867c-11.5712-11.5712-30.293333-11.5712-41.864533 0L520.413867 268.970667c-11.5712 11.5712-11.5712 30.293333 0 41.864533L729.770667 520.174933c11.5712 11.5712 30.293333 11.5712 41.864533 0l209.3568-209.3568C992.546133 299.264 992.546133 280.541867 980.974933 268.970667zM915.2512 304.913067l-149.538133 149.538133c-8.2432 8.260267-21.6576 8.260267-29.9008 0l-149.538133-149.538133c-8.260267-8.2432-8.260267-21.6576 0-29.9008l149.538133-149.538133c8.2432-8.260267 21.6576-8.260267 29.9008 0l149.538133 149.538133C923.511467 283.272533 923.511467 296.669867 915.2512 304.913067zM921.6 546.133333 580.266667 546.133333c-18.8416 0-34.133333 15.291733-34.133333 34.133333l0 341.333333c0 18.8416 15.291733 34.133333 34.133333 34.133333l341.333333 0c18.8416 0 34.133333-15.291733 34.133333-34.133333L955.733333 580.266667C955.733333 561.425067 940.4416 546.133333 921.6 546.133333z",
                          fill: "#91c767"
                        })
                      ]),
                      createTextVNode(" 客户端下载 ")
                    ], -1)),
                    createBaseVNode("div", _hoisted_50, [
                      createBaseVNode("div", {
                        class: normalizeClass(["platform-card windows", { active: selectedPlatform.value === "windows" }]),
                        onClick: _cache[4] || (_cache[4] = ($event) => selectPlatform("windows"))
                      }, _cache[47] || (_cache[47] = [
                        createStaticVNode('<div class="platform-icon" data-v-3709f5eb><svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" data-v-3709f5eb><path d="M3 12V6.75L9 5.43V11.91L3 12ZM20 3V11.75L10 11.9V5.21L20 3ZM3 13L9 13.09V19.9L3 18.75V13ZM20 13.25V22L10 20.09V13.1L20 13.25Z" data-v-3709f5eb></path></svg></div><div class="platform-name" data-v-3709f5eb>Windows</div><div class="platform-desc" data-v-3709f5eb>桌面端</div>', 3)
                      ]), 2),
                      createBaseVNode("div", {
                        class: normalizeClass(["platform-card android", { active: selectedPlatform.value === "android" }]),
                        onClick: _cache[5] || (_cache[5] = ($event) => selectPlatform("android"))
                      }, _cache[48] || (_cache[48] = [
                        createStaticVNode('<div class="platform-icon" data-v-3709f5eb><svg width="48" height="48" viewBox="0 0 1024 1024" fill="currentColor" data-v-3709f5eb><path d="M811.696102 320.103594a62.908461 62.908461 0 0 0-62.204501 63.29244v246.386141c0 34.558056 27.646445 63.228443 62.204501 63.228443a62.844465 62.844465 0 0 0 62.204501-63.228443V383.396034c-0.575968-35.134024-28.222412-63.29244-62.204501-63.29244z m-749.461843 0a62.844465 62.844465 0 0 0-62.204501 63.356436v246.386141c0 34.558056 27.582448 63.228443 62.204501 63.228444a62.332494 62.332494 0 0 0 62.140505-63.228444v-246.386141c0-35.19802-27.582448-63.356436-62.140505-63.356436z m0 0M161.940651 321.895493v450.406665c0 26.878488 21.630783 48.701261 48.637264 48.701261h55.100901v137.208282c0 34.558056 27.582448 63.356436 62.204501 63.356436a62.908461 62.908461 0 0 0 62.204501-63.356436v-137.208282h96.69856v137.208282c0 34.558056 27.582448 63.356436 62.204501 63.356436a62.908461 62.908461 0 0 0 62.204501-63.356436v-137.208282h55.100901a48.637264 48.637264 0 0 0 48.70126-48.701261V321.895493H161.940651z m0 0M567.741825 88.436625L618.746956 14.58478c2.943834-4.671737 2.30387-9.983438-1.727903-12.927273-4.159766-2.943834-9.471467-1.151935-12.99127 2.943834l-52.733033 76.79568c-35.19802-13.439244-73.915842-21.69478-114.937535-21.694779s-79.739515 7.615572-114.937535 21.694779l-52.861026-76.79568a8.959496 8.959496 0 0 0-12.863277-2.943834c-4.09577 2.943834-4.671737 8.831503-1.727903 12.927273l51.645095 73.851845c-80.955446 38.141855-137.848246 109.753826-144.88785 193.525115h552.480923c-7.1036-83.771288-63.868407-155.38326-145.463817-193.525115zM320.267745 205.742027c-17.023042 0-30.462286-13.50324-30.462287-30.526283s13.439244-30.462286 30.462287-30.462286c16.959046 0 30.526283 13.439244 30.526283 30.462286a30.718272 30.718272 0 0 1-30.526283 30.526283z m236.914674 0c-17.087039 0-30.526283-13.50324-30.526283-30.526283s13.439244-30.462286 30.526283-30.462286 30.590279 13.439244 30.590279 30.462286a30.718272 30.718272 0 0 1-30.590279 30.526283z m0 0" data-v-3709f5eb></path></svg></div><div class="platform-name" data-v-3709f5eb>Android</div><div class="platform-desc" data-v-3709f5eb>安卓手机</div>', 3)
                      ]), 2),
                      createBaseVNode("div", {
                        class: normalizeClass(["platform-card ios", { active: selectedPlatform.value === "ios" }]),
                        onClick: _cache[6] || (_cache[6] = ($event) => selectPlatform("ios"))
                      }, _cache[49] || (_cache[49] = [
                        createStaticVNode('<div class="platform-icon" data-v-3709f5eb><svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" data-v-3709f5eb><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" data-v-3709f5eb></path></svg></div><div class="platform-name" data-v-3709f5eb>iOS</div><div class="platform-desc" data-v-3709f5eb>苹果设备</div>', 3)
                      ]), 2)
                    ]),
                    selectedPlatform.value && getPlatformApps(selectedPlatform.value).filter((app) => app.name && app.name.trim()).length > 0 ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "client-apps",
                      style: normalizeStyle({ background: currentTheme.value.background })
                    }, [
                      createBaseVNode("div", _hoisted_51, [
                        createBaseVNode("span", {
                          innerHTML: getPlatformIconSvg(selectedPlatform.value),
                          class: "title-icon"
                        }, null, 8, _hoisted_52),
                        createTextVNode(" " + toDisplayString(getPlatformTitle(selectedPlatform.value)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_53, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(getPlatformApps(selectedPlatform.value).filter((app) => app.name && app.name.trim()), (app) => {
                          return openBlock(), createElementBlock("div", {
                            key: app.key,
                            onClick: ($event) => openClientAppHandler(app),
                            class: "app-item"
                          }, [
                            createBaseVNode("div", _hoisted_55, [
                              createBaseVNode("img", {
                                src: app.img,
                                alt: app.name,
                                class: "app-icon"
                              }, null, 8, _hoisted_56)
                            ]),
                            createBaseVNode("div", _hoisted_57, toDisplayString(app.name), 1),
                            createBaseVNode("div", _hoisted_58, toDisplayString(app.vs), 1)
                          ], 8, _hoisted_54);
                        }), 128))
                      ])
                    ], 4)) : createCommentVNode("", true)
                  ]),
                  ((_p = subscribeInfo.value) == null ? void 0 : _p.subscribe_url) ? (openBlock(), createElementBlock("div", _hoisted_59, [
                    createBaseVNode("div", _hoisted_60, [
                      _cache[57] || (_cache[57] = createBaseVNode("div", { class: "section-title" }, [
                        createBaseVNode("svg", {
                          width: "20",
                          height: "20",
                          viewBox: "0 0 1000 1000",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "title-icon"
                        }, [
                          createBaseVNode("path", {
                            d: "M951.4799 920.1581l0.1989-19.8945c0-472.4627-383.0224-855.469-855.5049-855.469l-19.8953 0.1989v139.06271547890532c406.5584 0 736.1318 329.5656 736.1318 736.1009H951.479858809797zM632.9544 920.1581l0.3967-19.8945c0-296.6659-240.498-537.1548-537.1774-537.1548l-19.8953 0.3967v138.86484963194954c230.7492 0 417.8053 187.0472 417.8053 417.7877H632.9544409755396zM76.2795 800.7881c0 65.9293 53.443 119.3701 119.3721 119.3701 65.9321 0 119.3721-53.4408 119.3721-119.3701 0-65.9203-53.44-119.3641-119.3721-119.3641C129.7225 681.423 76.2795 734.8678 76.2795 800.7881z",
                            fill: "#88C152"
                          })
                        ]),
                        createTextVNode(" 订阅链接 ")
                      ], -1)),
                      createBaseVNode("div", _hoisted_61, [
                        createBaseVNode("div", {
                          class: "subscription-item",
                          onClick: _cache[7] || (_cache[7] = ($event) => openSubscriptionModal("general"))
                        }, _cache[51] || (_cache[51] = [
                          createStaticVNode('<div class="subscription-icon general" data-v-3709f5eb><svg width="32" height="32" viewBox="0 0 1024 1024" fill="currentColor" data-v-3709f5eb><path d="M512 0c282.760705 0 512 229.239295 512 512s-229.239295 512-512 512S0 794.760705 0 512 229.239295 0 512 0z m-178.297229 770.256927c44.171285 0 79.959698-35.788413 79.959698-79.959698s-35.788413-79.959698-79.959698-79.959698-79.959698 35.788413-79.959698 79.959698 35.788413 79.959698 79.959698 79.959698z m271.798488-31.919396c0-176.685139-143.153652-319.838791-319.83879-319.83879-17.732997 0-31.919395 14.186398-31.919396 31.919395s14.186398 31.919395 31.919396 31.919395c141.219144 0 256 114.458438 256 256 0 17.732997 14.186398 31.919395 31.919395 31.919396s31.919395-14.186398 31.919395-31.919396z m159.919396 0c0-265.027708-214.730479-479.758186-479.758186-479.758186-17.732997 0-31.919395 14.186398-31.919396 31.919396s14.186398 31.919395 31.919396 31.919395c229.561713 0 415.919395 186.035264 415.919395 415.919395 0 17.732997 14.186398 31.919395 31.919395 31.919396s31.919395-14.186398 31.919396-31.919396z" fill="#83CC52" data-v-3709f5eb></path></svg></div><div class="subscription-name" data-v-3709f5eb>通用订阅</div><div class="subscription-desc" data-v-3709f5eb>适用于大部分客户端</div>', 3)
                        ])),
                        createBaseVNode("div", {
                          class: "subscription-item",
                          onClick: _cache[8] || (_cache[8] = ($event) => openSubscriptionModal("clash"))
                        }, _cache[52] || (_cache[52] = [
                          createBaseVNode("div", { class: "subscription-icon clash" }, [
                            createBaseVNode("img", {
                              src: "https://files.afeicloud.de/20250306201806786.webp",
                              alt: "Clash",
                              class: "subscription-logo"
                            })
                          ], -1),
                          createBaseVNode("div", { class: "subscription-name" }, "Clash 订阅", -1),
                          createBaseVNode("div", { class: "subscription-desc" }, "适用于 Clash 系列", -1)
                        ])),
                        createBaseVNode("div", {
                          class: "subscription-item",
                          onClick: _cache[9] || (_cache[9] = ($event) => openSubscriptionModal("v2ray"))
                        }, _cache[53] || (_cache[53] = [
                          createBaseVNode("div", { class: "subscription-icon v2ray" }, [
                            createBaseVNode("img", {
                              src: "https://tncache1-f1.v3mh.com/image/2024/08/13/7be6c024d9211ad814fa323d4d47feb6.png",
                              alt: "V2Ray",
                              class: "subscription-logo"
                            })
                          ], -1),
                          createBaseVNode("div", { class: "subscription-name" }, "V2RayN 订阅", -1),
                          createBaseVNode("div", { class: "subscription-desc" }, "适用于 V2Ray 系列", -1)
                        ])),
                        createBaseVNode("div", {
                          class: "subscription-item",
                          onClick: _cache[10] || (_cache[10] = ($event) => openSubscriptionModal("shadowsocks"))
                        }, _cache[54] || (_cache[54] = [
                          createBaseVNode("div", { class: "subscription-icon shadowsocks" }, [
                            createBaseVNode("img", {
                              src: "https://cdn.jsdelivr.net/gh/BobCoderS9/metron-assets@3.0.2/metron/media/client-logos/shadowrocket-ico.png",
                              alt: "Shadowsocks",
                              class: "subscription-logo"
                            })
                          ], -1),
                          createBaseVNode("div", { class: "subscription-name" }, "Shadowsocks 订阅", -1),
                          createBaseVNode("div", { class: "subscription-desc" }, "适用于 SS 系列", -1)
                        ])),
                        createBaseVNode("div", {
                          class: "subscription-item",
                          onClick: _cache[11] || (_cache[11] = ($event) => openSubscriptionModal("singbox"))
                        }, _cache[55] || (_cache[55] = [
                          createBaseVNode("div", { class: "subscription-icon singbox" }, [
                            createBaseVNode("img", {
                              src: "https://github.com/GUI-for-Cores/GUI.for.SingBox/raw/main/build/appicon.png",
                              alt: "SingBox",
                              class: "subscription-logo"
                            })
                          ], -1),
                          createBaseVNode("div", { class: "subscription-name" }, "SingBox 订阅", -1),
                          createBaseVNode("div", { class: "subscription-desc" }, "适用于 SingBox 系列", -1)
                        ])),
                        createBaseVNode("div", {
                          class: "subscription-item",
                          onClick: _cache[12] || (_cache[12] = ($event) => openSubscriptionModal("hiddify"))
                        }, _cache[56] || (_cache[56] = [
                          createBaseVNode("div", { class: "subscription-icon hiddify" }, [
                            createBaseVNode("img", {
                              src: "https://user-images.githubusercontent.com/125398461/227777845-a4d0f86b-faa2-4f2b-a410-4aa5f68bfe19.png",
                              alt: "Hiddify",
                              class: "subscription-logo"
                            })
                          ], -1),
                          createBaseVNode("div", { class: "subscription-name" }, "Hiddify 订阅", -1),
                          createBaseVNode("div", { class: "subscription-desc" }, "适用于 Hiddify 系列", -1)
                        ]))
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_62, [
                createBaseVNode("div", _hoisted_63, [
                  _cache[60] || (_cache[60] = createStaticVNode('<div class="section-title" data-v-3709f5eb><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="title-icon" data-v-3709f5eb><path d="M14 9V5a3 3 0 0 0-6 0v4" data-v-3709f5eb></path><rect x="2" y="9" width="20" height="11" rx="2" ry="2" data-v-3709f5eb></rect><circle cx="12" cy="15" r="1" data-v-3709f5eb></circle></svg> 重要通知 </div>', 1)),
                  !noticesLoading.value ? (openBlock(), createElementBlock("div", _hoisted_64, [
                    notices.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_65, _cache[58] || (_cache[58] = [
                      createBaseVNode("svg", {
                        width: "48",
                        height: "48",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        class: "no-notices-icon"
                      }, [
                        createBaseVNode("circle", {
                          cx: "12",
                          cy: "12",
                          r: "10"
                        }),
                        createBaseVNode("path", { d: "M8 12h8" })
                      ], -1),
                      createBaseVNode("div", { class: "no-notices-text" }, "暂无通知", -1)
                    ]))) : (openBlock(), createElementBlock("div", _hoisted_66, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(notices.value, (notice) => {
                        return openBlock(), createElementBlock("div", {
                          key: notice.id,
                          class: normalizeClass(["notice-item", { "has-image": notice.img_url }]),
                          onClick: ($event) => handleNoticeClick(notice)
                        }, [
                          createBaseVNode("div", _hoisted_68, [
                            notice.img_url ? (openBlock(), createElementBlock("div", _hoisted_69, [
                              createBaseVNode("img", {
                                src: notice.img_url,
                                alt: notice.title,
                                onError: handleImageError,
                                onLoad: handleImageLoad,
                                class: "notice-img"
                              }, null, 40, _hoisted_70)
                            ])) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_71, [
                              createBaseVNode("div", _hoisted_72, [
                                createBaseVNode("div", _hoisted_73, toDisplayString(notice.title), 1),
                                createBaseVNode("div", _hoisted_74, toDisplayString(formatNoticeTime(notice.created_at)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_75, toDisplayString(truncateContent(notice.content, notice.img_url ? 40 : 60)), 1),
                              notice.tags && notice.tags.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_76, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(notice.tags, (tag) => {
                                  return openBlock(), createElementBlock("span", {
                                    key: tag,
                                    class: "notice-tag"
                                  }, toDisplayString(tag), 1);
                                }), 128))
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ], 10, _hoisted_67);
                      }), 128))
                    ]))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_77, _cache[59] || (_cache[59] = [
                    createBaseVNode("div", { class: "loading-spinner" }, null, -1),
                    createBaseVNode("div", { class: "loading-text" }, "加载中...", -1)
                  ])))
                ]),
                unref(authStore).user ? (openBlock(), createElementBlock("div", _hoisted_78, [
                  _cache[75] || (_cache[75] = createBaseVNode("div", { class: "section-title" }, [
                    createBaseVNode("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: "title-icon"
                    }, [
                      createBaseVNode("path", { d: "M3 3v18h18" }),
                      createBaseVNode("path", { d: "M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" })
                    ]),
                    createTextVNode(" 流量使用情况 ")
                  ], -1)),
                  createBaseVNode("div", _hoisted_79, [
                    createBaseVNode("div", _hoisted_80, [
                      createBaseVNode("div", _hoisted_81, [
                        (openBlock(), createElementBlock("svg", _hoisted_82, [
                          createBaseVNode("defs", null, [
                            _cache[61] || (_cache[61] = createBaseVNode("linearGradient", {
                              id: "bgGradient",
                              x1: "0%",
                              y1: "0%",
                              x2: "100%",
                              y2: "0%"
                            }, [
                              createBaseVNode("stop", {
                                offset: "0%",
                                style: { "stop-color": "#f8fafc", "stop-opacity": "1" }
                              }),
                              createBaseVNode("stop", {
                                offset: "50%",
                                style: { "stop-color": "#f1f5f9", "stop-opacity": "1" }
                              }),
                              createBaseVNode("stop", {
                                offset: "100%",
                                style: { "stop-color": "#e2e8f0", "stop-opacity": "1" }
                              })
                            ], -1)),
                            createBaseVNode("linearGradient", _hoisted_83, [
                              createBaseVNode("stop", {
                                offset: "0%",
                                style: normalizeStyle(`stop-color:${trafficColor.value};stop-opacity:1`)
                              }, null, 4),
                              createBaseVNode("stop", {
                                offset: "30%",
                                style: normalizeStyle(`stop-color:${trafficColor.value};stop-opacity:0.9`)
                              }, null, 4),
                              createBaseVNode("stop", {
                                offset: "70%",
                                style: normalizeStyle(`stop-color:${trafficColor.value};stop-opacity:0.8`)
                              }, null, 4),
                              createBaseVNode("stop", {
                                offset: "100%",
                                style: normalizeStyle(`stop-color:${trafficColor.value};stop-opacity:0.6`)
                              }, null, 4)
                            ]),
                            _cache[62] || (_cache[62] = createStaticVNode('<filter id="glow" x="-50%" y="-50%" width="200%" height="200%" data-v-3709f5eb><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-3709f5eb></feGaussianBlur><feMerge data-v-3709f5eb><feMergeNode in="coloredBlur" data-v-3709f5eb></feMergeNode><feMergeNode in="SourceGraphic" data-v-3709f5eb></feMergeNode></feMerge></filter><filter id="innerShadow" data-v-3709f5eb><feOffset dx="0" dy="2" data-v-3709f5eb></feOffset><feGaussianBlur stdDeviation="2" result="offset-blur" data-v-3709f5eb></feGaussianBlur><feFlood flood-color="#000000" flood-opacity="0.1" data-v-3709f5eb></feFlood><feComposite in2="offset-blur" operator="in" data-v-3709f5eb></feComposite><feMerge data-v-3709f5eb><feMergeNode data-v-3709f5eb></feMergeNode><feMergeNode in="SourceGraphic" data-v-3709f5eb></feMergeNode></feMerge></filter>', 2))
                          ]),
                          _cache[63] || (_cache[63] = createBaseVNode("circle", {
                            cx: "120",
                            cy: "105",
                            r: "100",
                            stroke: "rgba(148, 163, 184, 0.2)",
                            "stroke-width": "1",
                            fill: "none",
                            "stroke-dasharray": "2,4"
                          }, null, -1)),
                          _cache[64] || (_cache[64] = createBaseVNode("path", {
                            d: "M 25 105 A 95 95 0 0 1 215 105",
                            stroke: "url(#bgGradient)",
                            "stroke-width": "16",
                            fill: "none",
                            "stroke-linecap": "round",
                            filter: "url(#innerShadow)"
                          }, null, -1)),
                          createBaseVNode("path", {
                            d: getProgressArc(trafficPercentage.value),
                            stroke: "url(#progressGradient)",
                            "stroke-width": "16",
                            fill: "none",
                            "stroke-linecap": "round",
                            filter: "url(#glow)",
                            style: { "transition": "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)" }
                          }, null, 8, _hoisted_84)
                        ])),
                        createBaseVNode("div", _hoisted_85, [
                          createBaseVNode("div", {
                            class: "gauge-percentage",
                            style: normalizeStyle({ color: trafficColor.value })
                          }, toDisplayString(Math.round(trafficPercentage.value)) + "%", 5),
                          _cache[66] || (_cache[66] = createBaseVNode("div", { class: "gauge-label" }, "已使用流量", -1)),
                          createBaseVNode("div", _hoisted_86, toDisplayString(formatTrafficShort(usedTraffic.value)) + " / " + toDisplayString(formatTrafficShort(totalTraffic.value)), 1),
                          createBaseVNode("div", {
                            class: normalizeClass(["gauge-status", trafficStatusClass.value])
                          }, [
                            _cache[65] || (_cache[65] = createBaseVNode("div", { class: "status-dot" }, null, -1)),
                            createTextVNode(" " + toDisplayString(trafficStatusText.value), 1)
                          ], 2)
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_87, [
                      createBaseVNode("div", _hoisted_88, [
                        _cache[68] || (_cache[68] = createStaticVNode('<div class="stat-icon" data-v-3709f5eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3709f5eb><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-3709f5eb></path><polyline points="3.27,6.96 12,12.01 20.73,6.96" data-v-3709f5eb></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-3709f5eb></line></svg></div>', 1)),
                        createBaseVNode("div", _hoisted_89, [
                          _cache[67] || (_cache[67] = createBaseVNode("div", { class: "stat-label" }, "总流量", -1)),
                          createBaseVNode("div", _hoisted_90, toDisplayString(formatTrafficShort(totalTraffic.value)), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_91, [
                        _cache[70] || (_cache[70] = createBaseVNode("div", { class: "stat-icon" }, [
                          createBaseVNode("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }, [
                            createBaseVNode("path", { d: "M3 3v18h18" }),
                            createBaseVNode("path", { d: "M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" })
                          ])
                        ], -1)),
                        createBaseVNode("div", _hoisted_92, [
                          _cache[69] || (_cache[69] = createBaseVNode("div", { class: "stat-label" }, "已用流量", -1)),
                          createBaseVNode("div", _hoisted_93, toDisplayString(formatTrafficShort(usedTraffic.value)), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_94, [
                        _cache[72] || (_cache[72] = createStaticVNode('<div class="stat-icon" data-v-3709f5eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3709f5eb><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-3709f5eb></path><polyline points="7,10 12,15 17,10" data-v-3709f5eb></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-3709f5eb></line></svg></div>', 1)),
                        createBaseVNode("div", _hoisted_95, [
                          _cache[71] || (_cache[71] = createBaseVNode("div", { class: "stat-label" }, "剩余流量", -1)),
                          createBaseVNode("div", _hoisted_96, toDisplayString(formatTrafficShort(remainingTraffic.value)), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_97, [
                        _cache[74] || (_cache[74] = createBaseVNode("div", { class: "stat-icon" }, [
                          createBaseVNode("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }, [
                            createBaseVNode("circle", {
                              cx: "12",
                              cy: "12",
                              r: "10"
                            }),
                            createBaseVNode("polyline", { points: "12,6 12,12 16,14" })
                          ])
                        ], -1)),
                        createBaseVNode("div", _hoisted_98, [
                          _cache[73] || (_cache[73] = createBaseVNode("div", { class: "stat-label" }, "到期时间", -1)),
                          createBaseVNode("div", _hoisted_99, toDisplayString(formatExpireDays(unref(authStore).user.expired_at)), 1)
                        ])
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ]))
          ])
        ]),
        createVNode(SubscriptionDialog, {
          show: showSubscriptionModal.value,
          "onUpdate:show": _cache[13] || (_cache[13] = ($event) => showSubscriptionModal.value = $event),
          title: modalTitle.value,
          subtitle: modalSubtitle.value,
          "subscription-url": currentSubscriptionUrl.value,
          "supported-clients": getSupportedClients(currentSubscriptionType.value),
          mode: modalMode.value,
          "manual-instructions": manualInstructions.value,
          onCopy: handleCopySubscription,
          onImport: handleImportToClient
        }, null, 8, ["show", "title", "subtitle", "subscription-url", "supported-clients", "mode", "manual-instructions"]),
        createVNode(NoticeDetailModal, {
          show: showNoticeModal.value,
          "onUpdate:show": _cache[14] || (_cache[14] = ($event) => showNoticeModal.value = $event),
          notice: selectedNotice.value,
          onClose: _cache[15] || (_cache[15] = ($event) => selectedNotice.value = null)
        }, null, 8, ["show", "notice"]),
        isRechargeEnabled.value ? (openBlock(), createBlock(DesktopModal, {
          key: 0,
          show: showRechargeModal.value,
          "onUpdate:show": _cache[18] || (_cache[18] = ($event) => showRechargeModal.value = $event),
          title: "余额充值",
          "show-close-button": true,
          width: "480px"
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_111, [
              createBaseVNode("button", {
                class: "btn-base btn-large btn-danger",
                onClick: _cache[17] || (_cache[17] = ($event) => showRechargeModal.value = false)
              }, " 取消 "),
              createBaseVNode("button", {
                class: "btn-base btn-large btn-primary",
                disabled: !rechargeAmount.value || rechargeAmount.value <= 0 || recharging.value,
                onClick: handleRecharge
              }, [
                recharging.value ? (openBlock(), createElementBlock("span", _hoisted_113, "充值中...")) : createCommentVNode("", true),
                withDirectives((openBlock(), createElementBlock("span", null, _cache[81] || (_cache[81] = [
                  createTextVNode("确认充值")
                ]))), [
                  [_directive_else34]
                ])
              ], 8, _hoisted_112)
            ])
          ]),
          default: withCtx(() => {
            var _a2, _b2;
            return [
              createBaseVNode("div", _hoisted_100, [
                createBaseVNode("div", _hoisted_101, [
                  _cache[76] || (_cache[76] = createBaseVNode("span", { class: "label" }, "当前余额：", -1)),
                  createBaseVNode("span", _hoisted_102, "¥" + toDisplayString(formatMoney((_a2 = unref(authStore).user) == null ? void 0 : _a2.balance)), 1)
                ]),
                createBaseVNode("div", _hoisted_103, [
                  createBaseVNode("div", _hoisted_104, [
                    _cache[78] || (_cache[78] = createBaseVNode("label", null, "充值金额", -1)),
                    createVNode(_component_n_input_number, {
                      value: rechargeAmount.value,
                      "onUpdate:value": _cache[16] || (_cache[16] = ($event) => rechargeAmount.value = $event),
                      min: 1,
                      max: 1e5,
                      step: 1,
                      placeholder: "请输入充值金额",
                      style: { "width": "100%" }
                    }, {
                      prefix: withCtx(() => _cache[77] || (_cache[77] = [
                        createTextVNode("¥")
                      ])),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  createBaseVNode("div", _hoisted_105, [
                    _cache[79] || (_cache[79] = createBaseVNode("span", { class: "quick-label" }, "快捷金额：", -1)),
                    createBaseVNode("div", _hoisted_106, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(quickAmounts, (amount) => {
                        return createBaseVNode("button", {
                          key: amount,
                          class: normalizeClass(["btn-base btn-medium btn-secondary amount-btn", { active: rechargeAmount.value === amount }]),
                          onClick: ($event) => rechargeAmount.value = amount
                        }, " ¥" + toDisplayString(amount), 11, _hoisted_107);
                      }), 64))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_108, [
                    createBaseVNode("div", _hoisted_109, [
                      _cache[80] || (_cache[80] = createBaseVNode("span", null, "充值后余额：", -1)),
                      createBaseVNode("span", _hoisted_110, "¥" + toDisplayString(formatMoney((((_b2 = unref(authStore).user) == null ? void 0 : _b2.balance) || 0) + (rechargeAmount.value || 0) * 100)), 1)
                    ])
                  ])
                ])
              ])
            ];
          }),
          _: 1
        }, 8, ["show"])) : createCommentVNode("", true),
        isRechargeEnabled.value ? (openBlock(), createBlock(DesktopModal, {
          key: 1,
          show: showPaymentMethodModal.value,
          "onUpdate:show": _cache[20] || (_cache[20] = ($event) => showPaymentMethodModal.value = $event),
          title: "选择支付方式",
          "show-close-button": true,
          width: "480px"
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_127, [
              createBaseVNode("button", {
                class: "btn-base btn-medium btn-secondary",
                onClick: _cache[19] || (_cache[19] = ($event) => showPaymentMethodModal.value = false)
              }, " 取消 ")
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_114, [
              createBaseVNode("div", _hoisted_115, [
                _cache[82] || (_cache[82] = createBaseVNode("span", { class: "label" }, "充值金额：", -1)),
                createBaseVNode("span", _hoisted_116, "¥" + toDisplayString(formatMoney(paymentAmount.value)), 1)
              ]),
              createBaseVNode("div", _hoisted_117, [
                paymentMethods.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_118, _cache[83] || (_cache[83] = [
                  createBaseVNode("p", null, "暂无可用的支付方式", -1)
                ]))) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(paymentMethods.value, (method) => {
                  return openBlock(), createElementBlock("div", {
                    key: method.id,
                    class: "payment-method-item",
                    onClick: ($event) => selectPaymentMethod(method)
                  }, [
                    createBaseVNode("div", _hoisted_120, [
                      method.name.includes("支付宝") ? (openBlock(), createElementBlock("svg", _hoisted_121, _cache[84] || (_cache[84] = [
                        createBaseVNode("rect", {
                          x: "2",
                          y: "4",
                          width: "20",
                          height: "16",
                          rx: "2",
                          fill: "#1677FF"
                        }, null, -1),
                        createBaseVNode("path", {
                          d: "M8 12h8M8 8h8M8 16h4",
                          stroke: "white",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }, null, -1)
                      ]))) : method.name.includes("微信") ? (openBlock(), createElementBlock("svg", _hoisted_122, _cache[85] || (_cache[85] = [
                        createBaseVNode("rect", {
                          x: "2",
                          y: "4",
                          width: "20",
                          height: "16",
                          rx: "2",
                          fill: "#07C160"
                        }, null, -1),
                        createBaseVNode("path", {
                          d: "M8 12h8M8 8h8M8 16h4",
                          stroke: "white",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }, null, -1)
                      ]))) : (openBlock(), createElementBlock("svg", _hoisted_123, _cache[86] || (_cache[86] = [
                        createBaseVNode("rect", {
                          x: "2",
                          y: "4",
                          width: "20",
                          height: "16",
                          rx: "2",
                          fill: "#6B7280"
                        }, null, -1),
                        createBaseVNode("path", {
                          d: "M8 12h8M8 8h8M8 16h4",
                          stroke: "white",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        }, null, -1)
                      ])))
                    ]),
                    createBaseVNode("div", _hoisted_124, [
                      createBaseVNode("div", _hoisted_125, toDisplayString(method.name), 1),
                      createBaseVNode("div", _hoisted_126, toDisplayString(method.description || "安全便捷的支付方式"), 1)
                    ]),
                    _cache[87] || (_cache[87] = createBaseVNode("div", { class: "method-arrow" }, [
                      createBaseVNode("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createBaseVNode("polyline", { points: "9,18 15,12 9,6" })
                      ])
                    ], -1))
                  ], 8, _hoisted_119);
                }), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["show"])) : createCommentVNode("", true),
        isRechargeEnabled.value ? (openBlock(), createBlock(DesktopModal, {
          key: 2,
          show: showPaymentModal.value,
          "onUpdate:show": _cache[22] || (_cache[22] = ($event) => showPaymentModal.value = $event),
          title: "扫码支付",
          "show-close-button": true,
          width: "480px"
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_140, [
              createBaseVNode("button", {
                class: "btn-base btn-medium btn-secondary",
                onClick: _cache[21] || (_cache[21] = ($event) => showPaymentModal.value = false)
              }, " 取消支付 "),
              createBaseVNode("button", {
                class: "btn-base btn-medium btn-primary",
                onClick: checkPaymentStatus
              }, " 检查支付状态 ")
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_128, [
              createBaseVNode("div", _hoisted_129, [
                createBaseVNode("div", _hoisted_130, [
                  _cache[88] || (_cache[88] = createBaseVNode("span", { style: { "font-size": "12px", "color": "#64748b", "font-weight": "500" } }, "充值金额", -1)),
                  createBaseVNode("span", _hoisted_131, "¥" + toDisplayString(formatMoney(paymentAmount.value)), 1)
                ]),
                createBaseVNode("div", _hoisted_132, [
                  _cache[89] || (_cache[89] = createBaseVNode("span", { style: { "font-size": "12px", "color": "#64748b", "font-weight": "500" } }, "订单号", -1)),
                  createBaseVNode("span", _hoisted_133, toDisplayString(paymentTradeNo.value), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_134, [
                createBaseVNode("div", _hoisted_135, [
                  qrCodeImageUrl.value ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: qrCodeImageUrl.value,
                    alt: "支付二维码",
                    style: { "width": "200px", "height": "200px", "display": "block" },
                    onError: handleQrCodeError
                  }, null, 40, _hoisted_136)) : createCommentVNode("", true),
                  !paymentQrCode.value ? (openBlock(), createElementBlock("div", _hoisted_137, " 二维码URL为空 ")) : createCommentVNode("", true),
                  qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_138, [
                    _cache[90] || (_cache[90] = createTextVNode(" 二维码生成失败 ")),
                    createBaseVNode("button", {
                      class: "btn-base btn-small btn-primary",
                      onClick: retryQrCode
                    }, "重试")
                  ])) : createCommentVNode("", true),
                  paymentQrCode.value && !qrCodeImageUrl.value && !qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_139, " 正在生成二维码... ")) : createCommentVNode("", true)
                ]),
                _cache[92] || (_cache[92] = createBaseVNode("p", { style: { "color": "#666", "font-size": "14px", "margin": "0 0 20px 0" } }, "请使用支付宝扫描上方二维码完成支付", -1)),
                createBaseVNode("div", { style: { "padding": "16px", "background": "#f1f5f9", "border-radius": "8px", "border": "1px solid #e2e8f0" } }, [
                  _cache[91] || (_cache[91] = createBaseVNode("p", { style: { "font-size": "12px", "color": "#64748b", "margin": "0 0 12px 0" } }, "如果二维码无法显示，请点击下方链接：", -1)),
                  createBaseVNode("button", {
                    class: "btn-base btn-medium btn-success",
                    onClick: openPaymentUrl
                  }, " 打开支付链接 ")
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["show"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3709f5eb"]]);
export {
  Dashboard as default
};
