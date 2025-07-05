import { k as defineComponent, c as computed, w as watch, E as onUnmounted, $ as createElementBlock, a3 as createCommentVNode, a0 as createBaseVNode, a2 as toDisplayString, L as normalizeClass, q as renderSlot, a7 as withModifiers, U as openBlock } from "./DM1yaN1X.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
const _hoisted_1 = {
  key: 0,
  class: "sheet-handle"
};
const _hoisted_2 = {
  key: 1,
  class: "sheet-header"
};
const _hoisted_3 = {
  key: 0,
  class: "sheet-title"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MobileSheet",
  props: {
    show: { type: Boolean },
    title: {},
    showHandle: { type: Boolean, default: true },
    showCloseButton: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    height: { default: "auto" },
    contentClass: {}
  },
  emits: ["update:show", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const sheetClass = computed(() => {
      return {
        "sheet-half": props.height === "half",
        "sheet-full": props.height === "full"
      };
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
    const handleOverlayTouchMove = (e) => {
      const target = e.target;
      if (target.closest(".sheet-content")) {
        return;
      }
      if (target.closest(".mobile-sheet")) {
        return;
      }
      e.preventDefault();
    };
    let originalBodyOverflow = "";
    let originalBodyPosition = "";
    let originalHtmlOverflow = "";
    let scrollTop = 0;
    const lockBodyScroll = () => {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      originalBodyOverflow = document.body.style.overflow;
      originalBodyPosition = document.body.style.position;
      originalHtmlOverflow = document.documentElement.style.overflow;
      document.documentElement.style.setProperty("--scroll-top", `-${scrollTop}px`);
      document.documentElement.style.setProperty("overflow", "hidden", "important");
      document.body.style.setProperty("overflow", "hidden", "important");
      document.body.style.setProperty("position", "fixed", "important");
      document.body.style.setProperty("top", `-${scrollTop}px`, "important");
      document.body.style.setProperty("left", "0px", "important");
      document.body.style.setProperty("right", "0px", "important");
      document.body.style.setProperty("width", "100%", "important");
      document.body.style.setProperty("height", "100%", "important");
      document.body.style.setProperty("-webkit-overflow-scrolling", "auto", "important");
      document.body.style.setProperty("overscroll-behavior", "none", "important");
      document.body.style.setProperty("margin", "0", "important");
      document.body.style.setProperty("padding", "0", "important");
      document.body.style.setProperty("touch-action", "none", "important");
      document.documentElement.style.setProperty("touch-action", "none", "important");
      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");
      document.body.offsetHeight;
      document.body.style.touchAction = "none";
      document.documentElement.style.touchAction = "none";
    };
    const unlockBodyScroll = () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      document.documentElement.style.removeProperty("--scroll-top");
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.webkitOverflowScrolling = "";
      document.body.style.overscrollBehavior = "";
      document.body.style.removeProperty("touch-action");
      document.documentElement.style.removeProperty("touch-action");
      document.documentElement.style.removeProperty("--scroll-top");
      window.scrollTo(0, scrollTop);
    };
    const preventScroll = (e) => {
      const target = e.target;
      if (target.closest(".sheet-content")) {
        return;
      }
      if (target.closest(".mobile-sheet")) {
        if (e.type === "touchmove" || e.type === "wheel" || e.type === "scroll") {
          e.preventDefault();
          return false;
        }
        return;
      }
      if (e.type === "touchmove" || e.type === "wheel" || e.type === "scroll") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    watch(() => props.show, (newShow) => {
      if (newShow) {
        lockBodyScroll();
        document.addEventListener("touchmove", preventScroll, { passive: false });
        document.addEventListener("wheel", preventScroll, { passive: false });
        document.addEventListener("scroll", preventScroll, { passive: false });
        window.addEventListener("scroll", preventScroll, { passive: false });
      } else {
        unlockBodyScroll();
        document.removeEventListener("touchmove", preventScroll);
        document.removeEventListener("wheel", preventScroll);
        document.removeEventListener("scroll", preventScroll);
        window.removeEventListener("scroll", preventScroll);
      }
    });
    onUnmounted(() => {
      if (props.show) {
        unlockBodyScroll();
        document.removeEventListener("touchmove", preventScroll);
        document.removeEventListener("wheel", preventScroll);
        document.removeEventListener("scroll", preventScroll);
        window.removeEventListener("scroll", preventScroll);
      }
    });
    return (_ctx, _cache) => {
      return _ctx.show ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "mobile-sheet-overlay",
        onClick: handleOverlayClick,
        onTouchmove: handleOverlayTouchMove
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["mobile-sheet", sheetClass.value]),
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"])),
          onTouchmove: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"]))
        }, [
          _ctx.showHandle ? (openBlock(), createElementBlock("div", _hoisted_1)) : createCommentVNode("", true),
          _ctx.title || _ctx.showCloseButton ? (openBlock(), createElementBlock("div", _hoisted_2, [
            _ctx.title ? (openBlock(), createElementBlock("h3", _hoisted_3, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
            _ctx.showCloseButton ? (openBlock(), createElementBlock("button", {
              key: 1,
              class: "sheet-close-btn",
              onClick: handleClose
            }, _cache[2] || (_cache[2] = [
              createBaseVNode("svg", {
                width: "24",
                height: "24",
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
            class: normalizeClass(["sheet-content", _ctx.contentClass])
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 2),
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "sheet-safe-area" }, null, -1))
        ], 34)
      ], 32)) : createCommentVNode("", true);
    };
  }
});
const MobileSheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9009c62"]]);
export {
  MobileSheet as M
};
