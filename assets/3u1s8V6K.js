var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { k as defineComponent, c as computed, m as h, $ as createElementBlock, a3 as createCommentVNode, a0 as createBaseVNode, L as normalizeClass, R as createBlock, a4 as resolveDynamicComponent, a2 as toDisplayString, q as renderSlot, a7 as withModifiers, U as openBlock, r as ref, M as createApp, o as onMounted, n as nextTick, w as watch, a9 as useCssVars } from "./DM1yaN1X.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
const _hoisted_1$1 = { class: "dialog-header" };
const _hoisted_2$1 = { class: "dialog-title" };
const _hoisted_3$1 = {
  key: 0,
  class: "dialog-subtitle"
};
const _hoisted_4 = { class: "dialog-content" };
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { class: "dialog-actions" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IOSDialog",
  props: {
    show: { type: Boolean },
    type: { default: "info" },
    title: {},
    subtitle: {},
    content: {},
    positiveText: {},
    negativeText: {},
    loading: { type: Boolean },
    loadingText: { default: "处理中..." },
    maskClosable: { type: Boolean, default: true }
  },
  emits: ["update:show", "positive", "negative"],
  setup(__props, { emit: __emit }) {
    const CheckIcon = () => h("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none"
    }, [
      h("path", {
        d: "M9 12L11 14L15 10",
        stroke: "currentColor",
        "stroke-width": "3",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }),
      h("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        "stroke-width": "2"
      })
    ]);
    const WarningIcon = () => h("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        "stroke-width": "2"
      }),
      h("path", {
        d: "M12 8V12",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round"
      }),
      h("path", {
        d: "M12 16H12.01",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round"
      })
    ]);
    const InfoIcon = () => h("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none"
    }, [
      h("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        "stroke-width": "2"
      }),
      h("path", {
        d: "M12 8V16",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round"
      }),
      h("path", {
        d: "M8 12H16",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round"
      })
    ]);
    const PackageIcon = () => h("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none"
    }, [
      // 购物车图标
      h("circle", {
        cx: "9",
        cy: "21",
        r: "1",
        stroke: "currentColor",
        "stroke-width": "2",
        fill: "currentColor"
      }),
      h("circle", {
        cx: "20",
        cy: "21",
        r: "1",
        stroke: "currentColor",
        "stroke-width": "2",
        fill: "currentColor"
      }),
      h("path", {
        d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      })
    ]);
    const props = __props;
    const emit = __emit;
    const iconComponent = computed(() => {
      switch (props.type) {
        case "success":
          return CheckIcon;
        case "warning":
          return WarningIcon;
        case "purchase":
          return PackageIcon;
        default:
          return InfoIcon;
      }
    });
    const iconClass = computed(() => {
      return {
        "success": props.type === "success",
        "warning": props.type === "warning",
        "info": props.type === "info",
        "purchase": props.type === "purchase"
      };
    });
    const handleOverlayClick = () => {
      if (props.maskClosable) {
        emit("update:show", false);
      }
    };
    const handlePositive = () => {
      emit("positive");
    };
    const handleNegative = () => {
      emit("negative");
    };
    return (_ctx, _cache) => {
      return _ctx.show ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "ios-dialog-overlay",
        onClick: handleOverlayClick
      }, [
        createBaseVNode("div", {
          class: "ios-dialog",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", {
              class: normalizeClass(["dialog-icon", iconClass.value])
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(iconComponent.value)))
            ], 2),
            createBaseVNode("h3", _hoisted_2$1, toDisplayString(_ctx.title), 1),
            _ctx.subtitle ? (openBlock(), createElementBlock("p", _hoisted_3$1, toDisplayString(_ctx.subtitle), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "content", {}, () => [
              _ctx.content ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "dialog-text",
                innerHTML: _ctx.content
              }, null, 8, _hoisted_5)) : createCommentVNode("", true)
            ], true)
          ]),
          createBaseVNode("div", _hoisted_6, [
            _ctx.negativeText ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "btn-base btn-large btn-danger dialog-btn-spacing",
              onClick: handleNegative
            }, toDisplayString(_ctx.negativeText), 1)) : createCommentVNode("", true),
            _ctx.positiveText ? (openBlock(), createElementBlock("button", {
              key: 1,
              class: normalizeClass(["btn-base btn-large btn-primary dialog-btn-spacing", { "loading": _ctx.loading }]),
              onClick: handlePositive
            }, toDisplayString(_ctx.loading ? _ctx.loadingText : _ctx.positiveText), 3)) : createCommentVNode("", true)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const IOSDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-842bef90"]]);
class IOSDialogManager {
  constructor() {
    __publicField(this, "instances", []);
  }
  // 显示对话框
  show(options) {
    return new Promise((resolve) => {
      const container = document.createElement("div");
      document.body.appendChild(container);
      const show = ref(true);
      const loading = ref(false);
      const handlePositive = async () => {
        if (options.onPositive) {
          loading.value = true;
          try {
            await options.onPositive();
            this.close(instance, true);
          } catch (error) {
            loading.value = false;
            console.error("对话框确认操作失败:", error);
          }
        } else {
          this.close(instance, true);
        }
      };
      const handleNegative = () => {
        if (options.onNegative) {
          options.onNegative();
        }
        this.close(instance, false);
      };
      const handleShowChange = (value) => {
        if (!value) {
          this.close(instance, false);
        }
      };
      const app = createApp({
        render() {
          return h(IOSDialog, {
            show: show.value,
            type: options.type || "info",
            title: options.title,
            subtitle: options.subtitle,
            content: options.content,
            positiveText: options.positiveText,
            negativeText: options.negativeText,
            loading: loading.value,
            maskClosable: options.maskClosable !== false,
            "onUpdate:show": handleShowChange,
            onPositive: handlePositive,
            onNegative: handleNegative
          });
        }
      });
      app.mount(container);
      const instance = {
        app,
        container,
        resolve
      };
      this.instances.push(instance);
    });
  }
  // 关闭对话框
  close(instance, result) {
    const index = this.instances.indexOf(instance);
    if (index > -1) {
      this.instances.splice(index, 1);
      instance.app.unmount();
      if (instance.container.parentNode) {
        instance.container.parentNode.removeChild(instance.container);
      }
      instance.resolve(result);
    }
  }
  // 关闭所有对话框
  closeAll() {
    while (this.instances.length > 0) {
      this.close(this.instances[0], false);
    }
  }
}
const dialogManager = new IOSDialogManager();
function useIOSDialog() {
  const success = (options) => {
    return dialogManager.show({
      ...options,
      type: "success",
      positiveText: options.positiveText || "确定"
    });
  };
  const warning = (options) => {
    return dialogManager.show({
      ...options,
      type: "warning",
      positiveText: options.positiveText || "确定",
      negativeText: options.negativeText || "取消"
    });
  };
  const info = (options) => {
    return dialogManager.show({
      ...options,
      type: "info",
      positiveText: options.positiveText || "确定"
    });
  };
  const purchase = (options) => {
    return dialogManager.show({
      ...options,
      type: "purchase",
      positiveText: options.positiveText || "确认购买",
      negativeText: options.negativeText || "取消"
    });
  };
  const closeAll = () => {
    dialogManager.closeAll();
  };
  return {
    success,
    warning,
    info,
    purchase,
    closeAll
  };
}
const _hoisted_1 = {
  key: 0,
  class: "modal-header"
};
const _hoisted_2 = {
  key: 0,
  class: "modal-title"
};
const _hoisted_3 = {
  key: 1,
  class: "modal-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DesktopModal",
  props: {
    show: { type: Boolean },
    title: {},
    showCloseButton: { type: Boolean, default: false },
    maskClosable: { type: Boolean, default: true },
    width: {},
    maxWidth: { default: "90vw" },
    height: {},
    maxHeight: { default: "90vh" },
    contentClass: {}
  },
  emits: ["update:show", "close"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "2457b6e6": props.maxWidth,
      "9a3d1980": props.maxHeight,
      "6f13000c": props.width || "auto",
      "9fa7edba": props.height || "auto"
    }));
    const props = __props;
    const emit = __emit;
    const iosDialog = useIOSDialog();
    onMounted(() => {
      nextTick(() => {
        const modalOverlay = document.querySelector(".desktop-modal-overlay");
        if (modalOverlay && modalOverlay.parentElement !== document.body) {
          document.body.appendChild(modalOverlay);
        }
      });
    });
    watch(() => props.show, (newShow) => {
      if (newShow) {
        iosDialog.closeAll();
        nextTick(() => {
          const modalOverlay = document.querySelector(".desktop-modal-overlay");
          if (modalOverlay && modalOverlay.parentElement !== document.body) {
            document.body.appendChild(modalOverlay);
          }
        });
      }
    }, { immediate: true });
    const modalClass = computed(() => {
      return {};
    });
    const handleOverlayClick = () => {
      if (props.maskClosable) {
        handleClose();
      }
    };
    const handleClose = () => {
      emit("update:show", false);
      emit("close");
    };
    return (_ctx, _cache) => {
      return _ctx.show ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "desktop-modal-overlay",
        onClick: handleOverlayClick
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["desktop-modal", modalClass.value]),
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, [
          _ctx.title || _ctx.showCloseButton ? (openBlock(), createElementBlock("div", _hoisted_1, [
            _ctx.title ? (openBlock(), createElementBlock("h3", _hoisted_2, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
            _ctx.showCloseButton ? (openBlock(), createElementBlock("button", {
              key: 1,
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
            ]))) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(["modal-content", _ctx.contentClass])
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2),
          _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "footer", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ], 2)
      ])) : createCommentVNode("", true);
    };
  }
});
const DesktopModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6538462c"]]);
export {
  DesktopModal as D,
  IOSDialog as I
};
