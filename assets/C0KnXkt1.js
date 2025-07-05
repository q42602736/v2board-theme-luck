import { k as defineComponent, c as computed, $ as createElementBlock, F as Fragment, R as createBlock, a3 as createCommentVNode, N as unref, V as withCtx, a0 as createBaseVNode, a2 as toDisplayString, L as normalizeClass, a7 as withModifiers, U as openBlock, r as ref, o as onMounted, a5 as useRouter, aa as useRoute, W as createVNode, S as resolveComponent, Q as renderList, a6 as withKeys, T as Teleport, j as createTextVNode } from "./DM1yaN1X.js";
import { u as useAuthStore, a as apiClient } from "./BBbuoBq5.js";
import { s as shouldUseMobileLayout } from "./CyyeJu8R.js";
import { I as IOSDialog, D as DesktopModal } from "./3u1s8V6K.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import { M as MobileSheet } from "./D5SbPLB-.js";
import { b as browser } from "./0I8bmyai.js";
import { u as useMessage } from "./BEq_qS6Y.js";
const _hoisted_1$1 = { class: "purchase-confirm-content" };
const _hoisted_2$1 = { class: "order-summary" };
const _hoisted_3$1 = { class: "summary-item" };
const _hoisted_4$1 = { class: "summary-value" };
const _hoisted_5$1 = { class: "summary-item" };
const _hoisted_6$1 = { class: "summary-value" };
const _hoisted_7$1 = { class: "summary-item" };
const _hoisted_8$1 = { class: "summary-value" };
const _hoisted_9$1 = { class: "price-summary" };
const _hoisted_10$1 = {
  key: 0,
  class: "price-item"
};
const _hoisted_11$1 = { class: "price-value" };
const _hoisted_12$1 = {
  key: 1,
  class: "price-item discount"
};
const _hoisted_13$1 = { class: "price-label" };
const _hoisted_14$1 = { class: "price-value" };
const _hoisted_15$1 = {
  key: 2,
  class: "price-divider"
};
const _hoisted_16$1 = { class: "price-label" };
const _hoisted_17$1 = { class: "price-value" };
const _hoisted_18$1 = {
  key: 0,
  class: "free-highlight"
};
const _hoisted_19$1 = { style: { "margin": "0 0 16px 0", "font-size": "18px", "font-weight": "600" } };
const _hoisted_20$1 = { class: "mobile-confirm-content" };
const _hoisted_21$1 = { class: "mobile-section" };
const _hoisted_22$1 = { class: "mobile-specs" };
const _hoisted_23$1 = { class: "mobile-spec-item" };
const _hoisted_24$1 = { class: "mobile-spec-value" };
const _hoisted_25$1 = { class: "mobile-spec-item" };
const _hoisted_26$1 = { class: "mobile-spec-value" };
const _hoisted_27$1 = { class: "mobile-spec-item" };
const _hoisted_28$1 = { class: "mobile-spec-value" };
const _hoisted_29$1 = { class: "mobile-price-display" };
const _hoisted_30$1 = {
  key: 0,
  class: "mobile-price-row"
};
const _hoisted_31$1 = {
  key: 1,
  class: "mobile-price-row discount"
};
const _hoisted_32$1 = {
  key: 0,
  class: "mobile-status success"
};
const _hoisted_33$1 = { class: "mobile-button-group" };
const _hoisted_34$1 = ["disabled"];
const _hoisted_35$1 = ["disabled"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PurchaseConfirmDialog",
  props: {
    show: { type: Boolean },
    plan: {},
    period: {},
    originalPrice: {},
    finalPrice: {},
    couponCode: { default: "" },
    couponDiscount: { default: 0 },
    loading: { type: Boolean, default: false }
  },
  emits: ["update:show", "confirm", "cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialogType = computed(() => {
      return props.finalPrice === 0 ? "success" : "purchase";
    });
    const dialogTitle = computed(() => {
      return props.finalPrice === 0 ? "免费订阅" : "确认购买";
    });
    const dialogSubtitle = computed(() => {
      return props.finalPrice === 0 ? "恭喜！此套餐完全免费" : "请确认您的订单信息";
    });
    const positiveText = computed(() => {
      return props.finalPrice === 0 ? "确认订阅" : "确认购买";
    });
    const periodText = computed(() => {
      const periodMap = {
        "month": "月付",
        "quarter": "季付",
        "half_year": "半年付",
        "year": "年付",
        "two_year": "两年付",
        "three_year": "三年付",
        "onetime": "一次性"
      };
      return periodMap[props.period] || props.period;
    });
    const trafficText = computed(() => {
      var _a;
      if (!((_a = props.plan) == null ? void 0 : _a.transfer_enable)) return "无限制";
      const gb = props.plan.transfer_enable;
      if (gb >= 1024) {
        return `${(gb / 1024).toFixed(1)} TB`;
      } else {
        return `${gb} GB`;
      }
    });
    const formatPrice = (amount) => {
      return (amount / 100).toFixed(2);
    };
    const handleConfirm = () => {
      emit("confirm");
    };
    const handleCancel = () => {
      emit("cancel");
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        !unref(shouldUseMobileLayout)() && _ctx.show ? (openBlock(), createBlock(IOSDialog, {
          key: 0,
          show: _ctx.show,
          type: dialogType.value,
          title: dialogTitle.value,
          subtitle: dialogSubtitle.value,
          "positive-text": positiveText.value,
          "negative-text": "取消",
          loading: _ctx.loading,
          "onUpdate:show": _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:show", $event)),
          onPositive: handleConfirm,
          onNegative: handleCancel
        }, {
          content: withCtx(() => {
            var _a2;
            return [
              createBaseVNode("div", _hoisted_1$1, [
                createBaseVNode("div", _hoisted_2$1, [
                  createBaseVNode("div", _hoisted_3$1, [
                    _cache[2] || (_cache[2] = createBaseVNode("span", { class: "summary-label" }, "套餐名称", -1)),
                    createBaseVNode("span", _hoisted_4$1, toDisplayString((_a2 = _ctx.plan) == null ? void 0 : _a2.name), 1)
                  ]),
                  createBaseVNode("div", _hoisted_5$1, [
                    _cache[3] || (_cache[3] = createBaseVNode("span", { class: "summary-label" }, "订阅周期", -1)),
                    createBaseVNode("span", _hoisted_6$1, toDisplayString(periodText.value), 1)
                  ]),
                  createBaseVNode("div", _hoisted_7$1, [
                    _cache[4] || (_cache[4] = createBaseVNode("span", { class: "summary-label" }, "流量配额", -1)),
                    createBaseVNode("span", _hoisted_8$1, toDisplayString(trafficText.value), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_9$1, [
                  _ctx.couponCode ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                    _cache[5] || (_cache[5] = createBaseVNode("span", { class: "price-label" }, "原价", -1)),
                    createBaseVNode("span", _hoisted_11$1, "¥" + toDisplayString(formatPrice(_ctx.originalPrice)), 1)
                  ])) : createCommentVNode("", true),
                  _ctx.couponCode ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
                    createBaseVNode("span", _hoisted_13$1, "优惠券 (" + toDisplayString(_ctx.couponCode) + ")", 1),
                    createBaseVNode("span", _hoisted_14$1, "-¥" + toDisplayString(formatPrice(_ctx.couponDiscount)), 1)
                  ])) : createCommentVNode("", true),
                  _ctx.couponCode ? (openBlock(), createElementBlock("div", _hoisted_15$1)) : createCommentVNode("", true),
                  createBaseVNode("div", {
                    class: normalizeClass(["price-item total", { "free": _ctx.finalPrice === 0 }])
                  }, [
                    createBaseVNode("span", _hoisted_16$1, toDisplayString(_ctx.couponCode ? "实付金额" : "套餐价格"), 1),
                    createBaseVNode("span", _hoisted_17$1, "¥" + toDisplayString(formatPrice(_ctx.finalPrice)), 1)
                  ], 2)
                ]),
                _ctx.finalPrice === 0 ? (openBlock(), createElementBlock("div", _hoisted_18$1, _cache[6] || (_cache[6] = [
                  createBaseVNode("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none"
                  }, [
                    createBaseVNode("path", {
                      d: "M9 12L11 14L15 10",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createBaseVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "9",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    })
                  ], -1),
                  createBaseVNode("span", null, "使用优惠券后，此订单完全免费！", -1)
                ]))) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["show", "type", "title", "subtitle", "positive-text", "loading"])) : createCommentVNode("", true),
        unref(shouldUseMobileLayout)() && _ctx.show ? (openBlock(), createElementBlock("div", {
          key: 1,
          style: { "position": "fixed", "top": "0", "left": "0", "width": "100vw", "height": "100vh", "background": "rgba(0,0,0,0.5)", "z-index": "9999", "display": "flex", "align-items": "center", "justify-content": "center" },
          onClick: handleCancel
        }, [
          createBaseVNode("div", {
            style: { "background": "white", "border-radius": "12px", "padding": "20px", "margin": "20px", "max-width": "400px", "width": "90%" },
            onClick: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createBaseVNode("h3", _hoisted_19$1, toDisplayString(dialogTitle.value), 1),
            createBaseVNode("div", _hoisted_20$1, [
              createBaseVNode("div", _hoisted_21$1, [
                createBaseVNode("div", _hoisted_22$1, [
                  createBaseVNode("div", _hoisted_23$1, [
                    _cache[7] || (_cache[7] = createBaseVNode("span", { class: "mobile-spec-label" }, "套餐名称", -1)),
                    createBaseVNode("span", _hoisted_24$1, toDisplayString((_a = _ctx.plan) == null ? void 0 : _a.name), 1)
                  ]),
                  createBaseVNode("div", _hoisted_25$1, [
                    _cache[8] || (_cache[8] = createBaseVNode("span", { class: "mobile-spec-label" }, "订阅周期", -1)),
                    createBaseVNode("span", _hoisted_26$1, toDisplayString(periodText.value), 1)
                  ]),
                  createBaseVNode("div", _hoisted_27$1, [
                    _cache[9] || (_cache[9] = createBaseVNode("span", { class: "mobile-spec-label" }, "流量配额", -1)),
                    createBaseVNode("span", _hoisted_28$1, toDisplayString(trafficText.value), 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_29$1, [
                _ctx.couponCode ? (openBlock(), createElementBlock("div", _hoisted_30$1, [
                  _cache[10] || (_cache[10] = createBaseVNode("span", null, "原价", -1)),
                  createBaseVNode("span", null, "¥" + toDisplayString(formatPrice(_ctx.originalPrice)), 1)
                ])) : createCommentVNode("", true),
                _ctx.couponCode ? (openBlock(), createElementBlock("div", _hoisted_31$1, [
                  createBaseVNode("span", null, "优惠券 (" + toDisplayString(_ctx.couponCode) + ")", 1),
                  createBaseVNode("span", null, "-¥" + toDisplayString(formatPrice(_ctx.couponDiscount)), 1)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: normalizeClass(["mobile-price-row total", { "free": _ctx.finalPrice === 0 }])
                }, [
                  createBaseVNode("span", null, toDisplayString(_ctx.couponCode ? "实付金额" : "套餐价格"), 1),
                  createBaseVNode("span", null, "¥" + toDisplayString(formatPrice(_ctx.finalPrice)), 1)
                ], 2)
              ]),
              _ctx.finalPrice === 0 ? (openBlock(), createElementBlock("div", _hoisted_32$1, _cache[11] || (_cache[11] = [
                createBaseVNode("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none"
                }, [
                  createBaseVNode("path", {
                    d: "M20 6L9 17L4 12",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ], -1),
                createBaseVNode("span", null, "此订单为免费订单，确认后将立即激活", -1)
              ]))) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_33$1, [
                createBaseVNode("button", {
                  class: "mobile-btn secondary",
                  onClick: handleCancel,
                  disabled: _ctx.loading
                }, " 取消 ", 8, _hoisted_34$1),
                createBaseVNode("button", {
                  class: normalizeClass(["mobile-btn primary", { "loading": _ctx.loading }]),
                  onClick: handleConfirm,
                  disabled: _ctx.loading
                }, toDisplayString(_ctx.loading ? "处理中..." : positiveText.value), 11, _hoisted_35$1)
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const PurchaseConfirmDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d2e4ea3e"]]);
const _hoisted_1 = { class: "purchase-plan-page" };
const _hoisted_2 = {
  key: 0,
  class: "loading-container"
};
const _hoisted_3 = {
  key: 1,
  class: "purchase-content"
};
const _hoisted_4 = { class: "plan-info-card" };
const _hoisted_5 = { class: "plan-header" };
const _hoisted_6 = { class: "plan-badges" };
const _hoisted_7 = {
  key: 0,
  class: "current-badge"
};
const _hoisted_8 = {
  key: 1,
  class: "renewable-badge"
};
const _hoisted_9 = { class: "plan-specs" };
const _hoisted_10 = { class: "spec-item" };
const _hoisted_11 = { class: "spec-value" };
const _hoisted_12 = { class: "spec-item" };
const _hoisted_13 = { class: "spec-value" };
const _hoisted_14 = { class: "spec-item" };
const _hoisted_15 = { class: "spec-value" };
const _hoisted_16 = {
  key: 0,
  class: "plan-description"
};
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = { class: "purchase-options" };
const _hoisted_19 = { class: "option-section" };
const _hoisted_20 = { class: "period-grid" };
const _hoisted_21 = ["onClick"];
const _hoisted_22 = {
  key: 0,
  class: "recommended-badge"
};
const _hoisted_23 = { class: "period-info" };
const _hoisted_24 = { class: "period-name" };
const _hoisted_25 = { class: "period-price" };
const _hoisted_26 = { class: "option-section" };
const _hoisted_27 = { class: "coupon-input-container" };
const _hoisted_28 = { class: "coupon-input-group" };
const _hoisted_29 = ["disabled"];
const _hoisted_30 = {
  key: 0,
  class: "coupon-success-card"
};
const _hoisted_31 = { class: "coupon-details" };
const _hoisted_32 = { class: "coupon-name" };
const _hoisted_33 = { class: "coupon-discount" };
const _hoisted_34 = { class: "price-summary" };
const _hoisted_35 = { class: "price-row" };
const _hoisted_36 = { class: "price-value" };
const _hoisted_37 = {
  key: 0,
  class: "price-row discount-row"
};
const _hoisted_38 = { class: "price-value discount" };
const _hoisted_39 = { class: "price-row total-row" };
const _hoisted_40 = { class: "price-value total" };
const _hoisted_41 = { class: "purchase-actions" };
const _hoisted_42 = ["disabled"];
const _hoisted_43 = { key: 0 };
const _hoisted_44 = { key: 1 };
const _hoisted_45 = {
  key: 2,
  class: "error-container"
};
const _hoisted_46 = { class: "modal-header" };
const _hoisted_47 = { class: "modal-body" };
const _hoisted_48 = { class: "payment-order-info" };
const _hoisted_49 = { class: "order-summary" };
const _hoisted_50 = { class: "summary-row" };
const _hoisted_51 = { class: "summary-value" };
const _hoisted_52 = { class: "summary-row" };
const _hoisted_53 = { class: "payment-amount" };
const _hoisted_54 = { class: "payment-methods-section" };
const _hoisted_55 = { class: "payment-methods-grid" };
const _hoisted_56 = ["onClick", "disabled"];
const _hoisted_57 = { class: "payment-method-icon" };
const _hoisted_58 = ["src", "alt"];
const _hoisted_59 = {
  key: 1,
  class: "payment-method-placeholder"
};
const _hoisted_60 = { class: "payment-method-info" };
const _hoisted_61 = { class: "payment-method-name" };
const _hoisted_62 = {
  key: 0,
  class: "payment-method-fee"
};
const _hoisted_63 = { key: 0 };
const _hoisted_64 = { key: 1 };
const _hoisted_65 = {
  key: 0,
  class: "payment-method-check"
};
const _hoisted_66 = { class: "modal-footer payment-modal-footer" };
const _hoisted_67 = ["disabled"];
const _hoisted_68 = { class: "payment-info" };
const _hoisted_69 = { class: "payment-amount" };
const _hoisted_70 = { class: "amount-value" };
const _hoisted_71 = { class: "payment-order" };
const _hoisted_72 = { class: "order-value" };
const _hoisted_73 = { class: "qrcode-container" };
const _hoisted_74 = { class: "qrcode-wrapper" };
const _hoisted_75 = ["src"];
const _hoisted_76 = {
  key: 1,
  class: "qrcode-error"
};
const _hoisted_77 = {
  key: 2,
  class: "qrcode-error"
};
const _hoisted_78 = {
  key: 3,
  class: "qrcode-loading"
};
const _hoisted_79 = { class: "qrcode-modal-actions" };
const _hoisted_80 = { class: "mobile-qrcode-content" };
const _hoisted_81 = { class: "payment-info" };
const _hoisted_82 = { class: "payment-amount" };
const _hoisted_83 = { class: "amount-value" };
const _hoisted_84 = { class: "payment-order" };
const _hoisted_85 = { class: "order-value" };
const _hoisted_86 = { class: "qrcode-container" };
const _hoisted_87 = { class: "qrcode-wrapper" };
const _hoisted_88 = ["src"];
const _hoisted_89 = {
  key: 1,
  class: "qrcode-error"
};
const _hoisted_90 = {
  key: 2,
  class: "qrcode-error"
};
const _hoisted_91 = {
  key: 3,
  class: "qrcode-loading"
};
const _hoisted_92 = { class: "mobile-qrcode-actions" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PurchasePlan",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const message = useMessage();
    const authStore = useAuthStore();
    const loading = ref(true);
    const purchasing = ref(false);
    const selectedPlan = ref(null);
    const selectedPeriod = ref("");
    const couponCode = ref("");
    const couponLoading = ref(false);
    const couponApplied = ref(false);
    const couponDiscount = ref(0);
    const couponInfo = ref(null);
    const showConfirmModal = ref(false);
    const confirmModalData = ref({
      type: "purchase",
      plan: null,
      period: "",
      originalPrice: 0,
      finalPrice: 0,
      couponCode: "",
      couponDiscount: 0
    });
    const showPaymentModal = ref(false);
    const showPaymentMethodModal = ref(false);
    const paymentMethods = ref([]);
    const selectedPaymentMethod = ref(null);
    const paymentLoading = ref(false);
    const paymentQrCode = ref("");
    const paymentTradeNo = ref("");
    const paymentAmount = ref(0);
    const qrCodeError = ref(false);
    const qrCodeImageUrl = ref("");
    const availablePeriods = computed(() => {
      if (!selectedPlan.value) return [];
      const periods = [];
      if (selectedPlan.value.month_price !== null) {
        periods.push({
          key: "month",
          name: "月付",
          price: selectedPlan.value.month_price,
          discount: null,
          available: true
        });
      }
      if (selectedPlan.value.quarter_price !== null) {
        periods.push({
          key: "quarter",
          name: "季付",
          price: selectedPlan.value.quarter_price,
          discount: null,
          available: true
        });
      }
      if (selectedPlan.value.half_year_price !== null) {
        periods.push({
          key: "half_year",
          name: "半年付",
          price: selectedPlan.value.half_year_price,
          discount: null,
          available: true
        });
      }
      if (selectedPlan.value.year_price !== null) {
        periods.push({
          key: "year",
          name: "年付",
          price: selectedPlan.value.year_price,
          discount: null,
          recommended: true,
          available: true
        });
      }
      if (selectedPlan.value.two_year_price !== null) {
        periods.push({
          key: "two_year",
          name: "两年付",
          price: selectedPlan.value.two_year_price,
          discount: null,
          available: true
        });
      }
      if (selectedPlan.value.three_year_price !== null) {
        periods.push({
          key: "three_year",
          name: "三年付",
          price: selectedPlan.value.three_year_price,
          discount: null,
          available: true
        });
      }
      if (selectedPlan.value.onetime_price !== null) {
        periods.push({
          key: "onetime",
          name: "一次性",
          price: selectedPlan.value.onetime_price,
          discount: null,
          available: true
        });
      }
      return periods;
    });
    onMounted(async () => {
      if (!authStore.isAuthenticated) {
        router.push("/login");
        return;
      }
      const planId = route.params.planId;
      if (!planId) {
        message.error("套餐ID无效");
        router.push("/plans");
        return;
      }
      try {
        await loadPlan(planId);
      } catch (error) {
        message.error(getChineseErrorMessage(error, "加载套餐失败，请重试"));
      } finally {
        loading.value = false;
      }
    });
    const loadPlan = async (planId) => {
      const plans = await apiClient.getPlans();
      selectedPlan.value = plans.find((plan) => plan.id.toString() === planId) || null;
      if (!selectedPlan.value) {
        throw new Error("套餐不存在");
      }
    };
    const goBack = () => {
      router.push("/plans");
    };
    const isCurrentPlan = (plan) => {
      var _a;
      const userPlanId = (_a = authStore.user) == null ? void 0 : _a.plan_id;
      return userPlanId === plan.id;
    };
    const hasAnyPrice = (plan) => {
      return plan.month_price || plan.quarter_price || plan.half_year_price || plan.year_price || plan.two_year_price || plan.three_year_price || plan.onetime_price;
    };
    const formatTraffic = (transferEnable) => {
      if (!transferEnable) return "0 GB";
      return `${transferEnable} GB`;
    };
    const formatPrice = (price) => {
      if (!price) return "0.00";
      return (price / 100).toFixed(2);
    };
    const getChineseErrorMessage = (error, defaultMessage = "操作失败") => {
      var _a, _b;
      const originalError = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || defaultMessage;
      const errorMap = {
        "Network Error": "网络连接失败，请检查网络连接",
        "timeout": "请求超时，请稍后重试",
        "Request failed with status code 400": "请求参数错误",
        "Request failed with status code 401": "身份验证失败，请重新登录",
        "Request failed with status code 403": "权限不足，无法执行此操作",
        "Request failed with status code 404": "请求的资源不存在",
        "Request failed with status code 500": "服务器内部错误，请稍后重试",
        "Request failed with status code 502": "服务器网关错误，请稍后重试",
        "Request failed with status code 503": "服务暂时不可用，请稍后重试",
        "Request failed with status code 504": "服务器响应超时，请稍后重试",
        "Payment method not found": "支付方式不存在或已停用",
        "Order not found": "订单不存在或已失效",
        "Order already paid": "订单已支付，无需重复支付",
        "Insufficient balance": "余额不足，请充值后重试",
        "Payment gateway error": "支付网关错误，请稍后重试",
        "Invalid payment method": "无效的支付方式",
        "Order expired": "订单已过期，请重新下单",
        "User not found": "用户不存在",
        "Plan not found": "套餐不存在或已下架",
        "Coupon not found": "优惠券不存在或已失效",
        "Coupon expired": "优惠券已过期",
        "Coupon used": "优惠券已被使用"
      };
      for (const [englishError, chineseMessage] of Object.entries(errorMap)) {
        if (originalError.toLowerCase().includes(englishError.toLowerCase())) {
          return chineseMessage;
        }
      }
      return originalError;
    };
    const formatSpeed = (speed) => {
      if (speed >= 1e3) {
        return `${(speed / 1e3).toFixed(1)}Gbps`;
      }
      return `${speed}Mbps`;
    };
    const selectPeriod = (period) => {
      if (selectedPeriod.value === period) {
        selectedPeriod.value = "";
      } else {
        selectedPeriod.value = period;
      }
    };
    const getSelectedPrice = () => {
      if (!selectedPlan.value || !selectedPeriod.value) return 0;
      const priceField = `${selectedPeriod.value}_price`;
      return selectedPlan.value[priceField] || 0;
    };
    const calculateFinalPrice = (originalPrice) => {
      if (couponApplied.value && couponDiscount.value > 0) {
        return Math.max(0, originalPrice - couponDiscount.value);
      }
      return originalPrice;
    };
    const applyCoupon = async () => {
      if (!couponCode.value.trim()) {
        message.warning("请输入优惠券代码");
        return;
      }
      couponLoading.value = true;
      try {
        const response = await apiClient.checkCoupon(couponCode.value.trim());
        couponInfo.value = response;
        couponDiscount.value = response.value || 0;
        couponApplied.value = true;
        message.success("优惠券应用成功");
      } catch (error) {
        message.error(getChineseErrorMessage(error, "优惠券无效"));
        couponCode.value = "";
        couponDiscount.value = 0;
        couponApplied.value = false;
        couponInfo.value = null;
      } finally {
        couponLoading.value = false;
      }
    };
    const confirmPurchase = () => {
      if (!selectedPlan.value || !selectedPeriod.value) return;
      const originalPrice = getSelectedPrice();
      const finalPrice = calculateFinalPrice(originalPrice);
      confirmModalData.value = {
        type: finalPrice === 0 ? "free" : "purchase",
        plan: selectedPlan.value,
        period: selectedPeriod.value,
        originalPrice,
        finalPrice,
        couponCode: couponCode.value.trim(),
        couponDiscount: couponDiscount.value
      };
      showConfirmModal.value = true;
    };
    const handleConfirmPurchase = async () => {
      if (!selectedPlan.value || !selectedPeriod.value) return;
      purchasing.value = true;
      showConfirmModal.value = false;
      try {
        await purchasePlan(selectedPlan.value, selectedPeriod.value);
      } catch (error) {
        message.error(getChineseErrorMessage(error, "购买失败，请重试"));
      } finally {
        purchasing.value = false;
      }
    };
    const handleCancelPurchase = () => {
      showConfirmModal.value = false;
    };
    const handlePaymentMethodSelect = (method) => {
      selectedPaymentMethod.value = method;
    };
    const confirmPayment = async () => {
      if (!selectedPaymentMethod.value || !paymentTradeNo.value) {
        message.error("请选择支付方式");
        return;
      }
      paymentLoading.value = true;
      try {
        await processPayment(paymentTradeNo.value, selectedPaymentMethod.value);
        showPaymentMethodModal.value = false;
      } catch (error) {
        const errorMessage = getChineseErrorMessage(error, "支付处理失败，请重试");
        message.error(errorMessage);
      } finally {
        paymentLoading.value = false;
      }
    };
    const isMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    const processPayment = async (tradeNo, method) => {
      try {
        message.loading("正在处理支付...");
        const paymentResult = await apiClient.checkoutOrder(tradeNo, method.id);
        message.destroyAll();
        const isMobile = isMobileDevice();
        if (paymentResult.type === 1) {
          window.location.href = paymentResult.data;
          message.info("正在跳转到支付页面，请完成支付");
        } else if (paymentResult.type === 0) {
          if (!paymentResult.data) {
            throw new Error("支付链接为空，请重试");
          }
          if (isMobile) {
            window.location.href = paymentResult.data;
            message.info("正在跳转到支付应用，请完成支付");
          } else {
            await generatePaymentQRCode(paymentResult.data);
          }
        } else {
          message.error("未知的支付类型，请重试");
        }
      } catch (error) {
        message.destroyAll();
        const errorMessage = getChineseErrorMessage(error, "支付处理失败，请重试");
        message.error(errorMessage);
      }
    };
    const generateQrCodeUrl = async (text) => {
      try {
        const url = await browser.toDataURL(text, {
          width: 200,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          }
        });
        return url;
      } catch (error) {
        throw error;
      }
    };
    const generatePaymentQRCode = async (paymentUrl) => {
      try {
        paymentQrCode.value = paymentUrl;
        qrCodeImageUrl.value = await generateQrCodeUrl(paymentUrl);
        qrCodeError.value = false;
        showPaymentModal.value = true;
        message.info("请使用支付宝扫描二维码完成支付");
      } catch (error) {
        qrCodeError.value = true;
        showPaymentModal.value = true;
        message.warning("二维码生成失败，请点击下方按钮直接打开支付链接");
      }
    };
    const handleQrCodeError = () => {
      qrCodeError.value = true;
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
      if (!paymentTradeNo.value) return;
      try {
        message.loading("正在检查支付状态...");
        const status = await apiClient.checkOrderStatus(paymentTradeNo.value);
        message.destroyAll();
        if (status === 1 || status === 3) {
          message.success("支付成功！套餐已激活");
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
        const errorMessage = getChineseErrorMessage(error, "检查支付状态失败");
        message.error(`检查支付状态失败: ${errorMessage}`);
      }
    };
    const purchasePlan = async (plan, period) => {
      const cycleMap = {
        month: "month_price",
        quarter: "quarter_price",
        half_year: "half_year_price",
        year: "year_price",
        two_year: "two_year_price",
        three_year: "three_year_price",
        onetime: "onetime_price"
      };
      const cycle = cycleMap[period];
      const priceField = `${period}_price`;
      const price = plan[priceField];
      const finalPrice = couponApplied.value && couponDiscount.value > 0 ? Math.max(0, price - couponDiscount.value) : price;
      const orderData = {
        plan_id: plan.id,
        period: cycle,
        coupon_code: couponApplied.value ? couponCode.value.trim() : void 0
      };
      message.loading("正在创建订单...");
      const tradeNo = await apiClient.createOrder(orderData);
      message.destroyAll();
      if (finalPrice === 0) {
        message.success(`订单创建成功！订单号: ${tradeNo}`);
        message.loading("正在激活免费订单...");
        try {
          try {
            const checkoutResult = await apiClient.checkoutOrder(tradeNo, 0);
            message.destroyAll();
            if (couponApplied.value && couponDiscount.value > 0) {
              message.success("优惠券订单已激活！享受免费服务！");
            } else {
              message.success("免费套餐已激活！");
            }
            await authStore.fetchUserInfo();
            return;
          } catch (balanceError) {
          }
          const paymentMethods2 = await apiClient.getPaymentMethods();
          if (paymentMethods2 && paymentMethods2.length > 0) {
            const checkoutResult = await apiClient.checkoutOrder(tradeNo, paymentMethods2[0].id);
            message.destroyAll();
            if (couponApplied.value && couponDiscount.value > 0) {
              message.success("优惠券订单已激活！享受免费服务！");
            } else {
              message.success("免费套餐已激活！");
            }
            await authStore.fetchUserInfo();
            return;
          } else {
            message.destroyAll();
            if (couponApplied.value && couponDiscount.value > 0) {
              message.warning("优惠券订单已创建，请到后台手动激活订单，或联系管理员配置支付方式");
            } else {
              message.warning("免费套餐订单已创建，请到后台手动激活订单，或联系管理员配置支付方式");
            }
          }
        } catch (error) {
          message.destroyAll();
          if (couponApplied.value && couponDiscount.value > 0) {
            message.error(`优惠券订单激活失败: ${getChineseErrorMessage(error)}`);
          } else {
            message.error(`免费套餐激活失败: ${getChineseErrorMessage(error)}`);
          }
        }
      } else {
        try {
          const orderDetail = await apiClient.getOrderDetail(tradeNo);
          if (orderDetail.balance_amount > 0 && orderDetail.total_amount === 0) {
            message.loading("正在完成余额支付...");
            try {
              const paymentResult = await apiClient.checkoutOrder(tradeNo, 0);
              message.destroyAll();
              message.success(`余额支付成功！已使用余额 ¥${(orderDetail.balance_amount / 100).toFixed(2)}`);
              await authStore.fetchUserInfo();
              return;
            } catch (error) {
              message.destroyAll();
              message.error("余额支付失败，请重试");
              return;
            }
          } else if (orderDetail.balance_amount > 0 && orderDetail.total_amount > 0) {
            message.info(`已使用余额支付 ¥${(orderDetail.balance_amount / 100).toFixed(2)}，剩余需要支付：¥${(orderDetail.total_amount / 100).toFixed(2)}`);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            try {
              message.loading("正在加载支付方式，请稍候...", { duration: 0 });
              const availablePaymentMethods = await apiClient.getPaymentMethods();
              message.destroyAll();
              if (availablePaymentMethods.length === 0) {
                message.error("没有可用的支付方式，请联系管理员");
                return;
              }
              paymentMethods.value = availablePaymentMethods;
              paymentTradeNo.value = tradeNo;
              paymentAmount.value = orderDetail.total_amount;
              showPaymentMethodModal.value = true;
              message.success("支付方式加载完成，请选择支付方式");
              return;
            } catch (error) {
              message.destroyAll();
              const errorMessage = getChineseErrorMessage(error, "支付处理失败");
              message.error(`支付处理失败: ${errorMessage}`);
              return;
            }
          } else {
            message.success(`订单创建成功！订单号: ${tradeNo}`);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            message.loading("正在加载支付方式，请稍候...", { duration: 0 });
            try {
              const availablePaymentMethods = await apiClient.getPaymentMethods();
              message.destroyAll();
              if (availablePaymentMethods.length === 0) {
                message.error("没有可用的支付方式，请联系管理员");
                return;
              }
              paymentMethods.value = availablePaymentMethods;
              paymentTradeNo.value = tradeNo;
              paymentAmount.value = orderDetail.total_amount;
              showPaymentMethodModal.value = true;
              message.success("支付方式加载完成，请选择支付方式");
              return;
            } catch (error) {
              message.destroyAll();
              message.error("加载支付方式失败，请重试");
              throw error;
            }
          }
        } catch (error) {
          message.error(getChineseErrorMessage(error, "获取订单详情失败，请重试"));
          return;
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_n_spin = resolveComponent("n-spin");
      const _component_n_input = resolveComponent("n-input");
      const _component_n_button = resolveComponent("n-button");
      const _component_n_empty = resolveComponent("n-empty");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", { class: "page-header" }, [
          createBaseVNode("div", { class: "header-content" }, [
            createBaseVNode("button", {
              class: "back-button",
              onClick: goBack
            }, _cache[12] || (_cache[12] = [
              createBaseVNode("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none"
              }, [
                createBaseVNode("path", {
                  d: "M19 12H5M12 19L5 12L12 5",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1),
              createBaseVNode("span", null, "返回套餐列表", -1)
            ]))
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_component_n_spin, { size: "large" }),
          _cache[13] || (_cache[13] = createBaseVNode("p", null, "正在加载套餐信息...", -1))
        ])) : selectedPlan.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("h2", null, toDisplayString(selectedPlan.value.name), 1),
              createBaseVNode("div", _hoisted_6, [
                isCurrentPlan(selectedPlan.value) ? (openBlock(), createElementBlock("span", _hoisted_7, "当前套餐")) : createCommentVNode("", true),
                selectedPlan.value.renew ? (openBlock(), createElementBlock("span", _hoisted_8, "支持续费")) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                _cache[14] || (_cache[14] = createBaseVNode("span", { class: "spec-label" }, "流量配额", -1)),
                createBaseVNode("span", _hoisted_11, toDisplayString(formatTraffic(selectedPlan.value.transfer_enable || 0)), 1)
              ]),
              createBaseVNode("div", _hoisted_12, [
                _cache[15] || (_cache[15] = createBaseVNode("span", { class: "spec-label" }, "设备限制", -1)),
                createBaseVNode("span", _hoisted_13, toDisplayString(selectedPlan.value.device_limit || "无限制"), 1)
              ]),
              createBaseVNode("div", _hoisted_14, [
                _cache[16] || (_cache[16] = createBaseVNode("span", { class: "spec-label" }, "速度限制", -1)),
                createBaseVNode("span", _hoisted_15, toDisplayString(selectedPlan.value.speed_limit ? formatSpeed(selectedPlan.value.speed_limit) : "无限速"), 1)
              ])
            ]),
            selectedPlan.value.content ? (openBlock(), createElementBlock("div", _hoisted_16, [
              _cache[17] || (_cache[17] = createBaseVNode("h3", null, "套餐介绍", -1)),
              createBaseVNode("div", {
                class: "description-content",
                innerHTML: selectedPlan.value.content
              }, null, 8, _hoisted_17)
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              _cache[18] || (_cache[18] = createBaseVNode("h3", null, "选择订阅周期", -1)),
              createBaseVNode("div", _hoisted_20, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(availablePeriods.value, (period) => {
                  return openBlock(), createElementBlock("div", {
                    key: period.key,
                    class: normalizeClass(["period-option", { "selected": selectedPeriod.value === period.key, "disabled": !period.available, "recommended": period.recommended }]),
                    onClick: ($event) => selectPeriod(period.key)
                  }, [
                    period.recommended ? (openBlock(), createElementBlock("div", _hoisted_22, "推荐")) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_23, [
                      createBaseVNode("span", _hoisted_24, toDisplayString(period.name), 1),
                      createBaseVNode("span", _hoisted_25, "¥" + toDisplayString(formatPrice(period.price)), 1)
                    ])
                  ], 10, _hoisted_21);
                }), 128))
              ])
            ]),
            createBaseVNode("div", _hoisted_26, [
              _cache[20] || (_cache[20] = createBaseVNode("div", { class: "coupon-header" }, [
                createBaseVNode("svg", {
                  class: "coupon-icon",
                  viewBox: "0 0 1024 1024",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createBaseVNode("path", {
                    d: "M593.41247 393.109798l-66.647147 66.647147-66.647147-66.647147c-6.682776-6.682776-19.958021-6.682776-26.640797 0-6.682776 10.024164-6.682776 19.958021 0 26.640797l46.689126 46.689126h-23.299409c-10.024164 0-19.958021 10.024164-19.958021 19.958021 0 10.024164 10.024164 19.958021 19.958021 19.958021h50.030514V536.428256h-50.030514c-10.024164 0-19.958021 10.024164-19.958021 19.958021 0 10.024164 10.024164 19.958021 19.958021 19.958021h50.030514v43.347738c0 10.024164 10.024164 19.958021 20.048329 19.958021s19.958021-10.024164 19.958021-19.958021v-43.347738H596.934474c10.024164 0 19.958021-10.024164 19.958021-19.958021C616.892495 546.362113 606.868331 536.428256 596.934474 536.428256h-50.030514v-29.982185H596.934474c10.024164 0 19.958021-10.024164 19.958021-19.958021 0-10.024164-10.024164-19.958021-19.958021-19.958021h-23.480025l46.689126-46.689126c6.682776-6.682776 6.682776-16.706941 0-26.640797-6.682776-6.773084-20.048329-6.773084-26.731105-0.090308z",
                    fill: "currentColor"
                  }),
                  createBaseVNode("path", {
                    d: "M526.765323 39.554811c-261.531352 0-473.574037 212.042685-473.574036 473.574036 0 261.531352 212.042685 473.574037 473.574036 473.574037s473.574037-212.042685 473.574037-473.574037c0-261.531352-212.042685-473.574037-473.574037-473.574036z m266.678896 396.902725c0 10.024164 0 16.706941-13.365552 26.640797-33.323574 13.365553-46.689126 26.640797-43.347738 50.030514 0 26.640797 10.024164 40.00635 43.347738 53.371903 10.024164 6.682776 13.365553 13.365553 13.365552 26.640797v76.671311c0 23.299409-19.958021 40.00635-43.347738 40.00635H303.434165c-23.299409 0-43.347738-19.958021-43.347738-40.00635v-76.671311c0-6.682776 3.341388-19.958021 16.706941-26.640797 16.706941-6.682776 43.347738-16.706941 43.347738-53.371903 0-26.640797-26.640797-43.347738-46.689126-50.030514-13.365553-6.682776-13.365553-16.706941-13.365553-29.982185v-76.671312c0-20.048329 19.958021-36.664962 43.347738-40.006349h446.752624c23.299409 0 43.347738 19.958021 43.347738 40.006349v80.0127z",
                    fill: "currentColor"
                  })
                ]),
                createBaseVNode("h3", null, "优惠券")
              ], -1)),
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  createVNode(_component_n_input, {
                    value: couponCode.value,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => couponCode.value = $event),
                    placeholder: "请输入优惠券代码",
                    disabled: couponApplied.value,
                    onKeyup: withKeys(applyCoupon, ["enter"]),
                    class: "coupon-input"
                  }, null, 8, ["value", "disabled"]),
                  createBaseVNode("button", {
                    class: normalizeClass(["coupon-apply-button", { "btn-loading": couponLoading.value }]),
                    disabled: !couponCode.value.trim() || couponApplied.value || couponLoading.value,
                    onClick: applyCoupon
                  }, toDisplayString(couponApplied.value ? "已应用" : "应用"), 11, _hoisted_29)
                ]),
                couponApplied.value && couponInfo.value ? (openBlock(), createElementBlock("div", _hoisted_30, [
                  _cache[19] || (_cache[19] = createBaseVNode("div", { class: "coupon-success-header" }, [
                    createBaseVNode("svg", {
                      class: "success-icon",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createBaseVNode("path", {
                        d: "M20 6L9 17L4 12",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]),
                    createBaseVNode("span", { class: "success-text" }, "优惠券已应用")
                  ], -1)),
                  createBaseVNode("div", _hoisted_31, [
                    createBaseVNode("div", _hoisted_32, toDisplayString(couponInfo.value.name), 1),
                    createBaseVNode("div", _hoisted_33, "优惠金额：¥" + toDisplayString(formatPrice(couponDiscount.value)), 1)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                _cache[21] || (_cache[21] = createBaseVNode("span", { class: "price-label" }, "原价", -1)),
                createBaseVNode("span", _hoisted_36, "¥" + toDisplayString(formatPrice(getSelectedPrice())), 1)
              ]),
              couponApplied.value && couponDiscount.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_37, [
                _cache[22] || (_cache[22] = createBaseVNode("span", { class: "price-label" }, "优惠券折扣", -1)),
                createBaseVNode("span", _hoisted_38, "-¥" + toDisplayString(formatPrice(couponDiscount.value)), 1)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_39, [
                _cache[23] || (_cache[23] = createBaseVNode("span", { class: "price-label" }, "最终价格", -1)),
                createBaseVNode("span", _hoisted_40, "¥" + toDisplayString(formatPrice(calculateFinalPrice(getSelectedPrice()))), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("button", {
                class: normalizeClass(["purchase-button", { "btn-loading": purchasing.value }]),
                disabled: !selectedPeriod.value || !hasAnyPrice(selectedPlan.value) || purchasing.value,
                onClick: confirmPurchase
              }, [
                isCurrentPlan(selectedPlan.value) && selectedPlan.value.renew ? (openBlock(), createElementBlock("span", _hoisted_43, "确认续费")) : (openBlock(), createElementBlock("span", _hoisted_44, "确认购买"))
              ], 10, _hoisted_42)
            ])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_45, [
          createVNode(_component_n_empty, { description: "套餐不存在或已下架" }, {
            extra: withCtx(() => [
              createVNode(_component_n_button, { onClick: goBack }, {
                default: withCtx(() => _cache[24] || (_cache[24] = [
                  createTextVNode("返回套餐列表")
                ])),
                _: 1,
                __: [24]
              })
            ]),
            _: 1
          })
        ])),
        createVNode(PurchaseConfirmDialog, {
          show: showConfirmModal.value,
          "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showConfirmModal.value = $event),
          plan: confirmModalData.value.plan,
          period: confirmModalData.value.period,
          "original-price": confirmModalData.value.originalPrice,
          "final-price": confirmModalData.value.finalPrice,
          "coupon-code": confirmModalData.value.couponCode,
          "coupon-discount": confirmModalData.value.couponDiscount,
          loading: loading.value,
          onConfirm: handleConfirmPurchase,
          onCancel: handleCancelPurchase
        }, null, 8, ["show", "plan", "period", "original-price", "final-price", "coupon-code", "coupon-discount", "loading"]),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          showPaymentMethodModal.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "modal-overlay",
            onClick: _cache[5] || (_cache[5] = ($event) => showPaymentMethodModal.value = false)
          }, [
            createBaseVNode("div", {
              class: "modal-content payment-modal",
              onClick: _cache[4] || (_cache[4] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createBaseVNode("div", _hoisted_46, [
                _cache[26] || (_cache[26] = createBaseVNode("h3", null, "选择支付方式", -1)),
                createBaseVNode("button", {
                  class: "modal-close-btn",
                  onClick: _cache[2] || (_cache[2] = ($event) => showPaymentMethodModal.value = false)
                }, _cache[25] || (_cache[25] = [
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
              createBaseVNode("div", _hoisted_47, [
                createBaseVNode("div", _hoisted_48, [
                  createBaseVNode("div", _hoisted_49, [
                    createBaseVNode("div", _hoisted_50, [
                      _cache[27] || (_cache[27] = createBaseVNode("span", { class: "summary-label" }, "订单号", -1)),
                      createBaseVNode("span", _hoisted_51, toDisplayString(paymentTradeNo.value), 1)
                    ]),
                    createBaseVNode("div", _hoisted_52, [
                      _cache[28] || (_cache[28] = createBaseVNode("span", { class: "summary-label" }, "支付金额", -1)),
                      createBaseVNode("span", _hoisted_53, "¥" + toDisplayString((paymentAmount.value / 100).toFixed(2)), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_54, [
                  _cache[30] || (_cache[30] = createBaseVNode("h4", null, "请选择支付方式", -1)),
                  createBaseVNode("div", _hoisted_55, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(paymentMethods.value, (method) => {
                      var _a, _b;
                      return openBlock(), createElementBlock("button", {
                        key: method.id,
                        class: normalizeClass(["payment-method-item", { "selected": ((_a = selectedPaymentMethod.value) == null ? void 0 : _a.id) === method.id }]),
                        onClick: ($event) => handlePaymentMethodSelect(method),
                        disabled: paymentLoading.value
                      }, [
                        createBaseVNode("div", _hoisted_57, [
                          method.icon ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: method.icon,
                            alt: method.name
                          }, null, 8, _hoisted_58)) : (openBlock(), createElementBlock("div", _hoisted_59, toDisplayString(method.name.charAt(0)), 1))
                        ]),
                        createBaseVNode("div", _hoisted_60, [
                          createBaseVNode("div", _hoisted_61, toDisplayString(method.name), 1),
                          method.handling_fee_fixed || method.handling_fee_percent ? (openBlock(), createElementBlock("div", _hoisted_62, [
                            method.handling_fee_fixed ? (openBlock(), createElementBlock("span", _hoisted_63, "手续费: ¥" + toDisplayString((method.handling_fee_fixed / 100).toFixed(2)), 1)) : createCommentVNode("", true),
                            method.handling_fee_percent ? (openBlock(), createElementBlock("span", _hoisted_64, "手续费: " + toDisplayString(method.handling_fee_percent) + "%", 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ]),
                        ((_b = selectedPaymentMethod.value) == null ? void 0 : _b.id) === method.id ? (openBlock(), createElementBlock("div", _hoisted_65, _cache[29] || (_cache[29] = [
                          createBaseVNode("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none"
                          }, [
                            createBaseVNode("path", {
                              d: "M20 6L9 17L4 12",
                              stroke: "#66c9b3",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1)
                        ]))) : createCommentVNode("", true)
                      ], 10, _hoisted_56);
                    }), 128))
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_66, [
                createBaseVNode("button", {
                  class: "btn-base btn-large btn-danger",
                  onClick: _cache[3] || (_cache[3] = ($event) => showPaymentMethodModal.value = false)
                }, " 取消支付 "),
                createBaseVNode("button", {
                  class: "btn-base btn-large btn-primary",
                  onClick: confirmPayment,
                  disabled: !selectedPaymentMethod.value || paymentLoading.value
                }, toDisplayString(paymentLoading.value ? "处理中..." : "确认支付"), 9, _hoisted_67)
              ])
            ])
          ])) : createCommentVNode("", true)
        ])),
        showPaymentModal.value && !unref(shouldUseMobileLayout)() ? (openBlock(), createBlock(DesktopModal, {
          key: 3,
          show: true,
          title: "扫码支付",
          "max-width": "400px",
          "onUpdate:show": _cache[7] || (_cache[7] = ($event) => showPaymentModal.value = false),
          onClose: _cache[8] || (_cache[8] = ($event) => showPaymentModal.value = false)
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_79, [
              createBaseVNode("button", {
                class: "qrcode-btn qrcode-btn-secondary",
                onClick: _cache[6] || (_cache[6] = ($event) => showPaymentModal.value = false)
              }, " 关闭支付 "),
              createBaseVNode("button", {
                class: "qrcode-btn qrcode-btn-primary",
                onClick: checkPaymentStatus
              }, " 检查支付状态 ")
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_68, [
              createBaseVNode("div", _hoisted_69, [
                _cache[31] || (_cache[31] = createBaseVNode("span", { class: "amount-label" }, "支付金额", -1)),
                createBaseVNode("span", _hoisted_70, "¥" + toDisplayString(formatPrice(paymentAmount.value)), 1)
              ]),
              createBaseVNode("div", _hoisted_71, [
                _cache[32] || (_cache[32] = createBaseVNode("span", { class: "order-label" }, "订单号", -1)),
                createBaseVNode("span", _hoisted_72, toDisplayString(paymentTradeNo.value), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_73, [
              createBaseVNode("div", _hoisted_74, [
                qrCodeImageUrl.value ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: qrCodeImageUrl.value,
                  alt: "支付二维码",
                  class: "qrcode-image",
                  onError: handleQrCodeError
                }, null, 40, _hoisted_75)) : createCommentVNode("", true),
                !paymentQrCode.value ? (openBlock(), createElementBlock("div", _hoisted_76, " 二维码URL为空 ")) : createCommentVNode("", true),
                qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_77, [
                  _cache[33] || (_cache[33] = createTextVNode(" 二维码生成失败 ")),
                  createBaseVNode("button", {
                    onClick: retryQrCode,
                    class: "btn-base btn-small btn-warning"
                  }, "重试")
                ])) : createCommentVNode("", true),
                paymentQrCode.value && !qrCodeImageUrl.value && !qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_78, " 正在生成二维码... ")) : createCommentVNode("", true)
              ]),
              _cache[35] || (_cache[35] = createBaseVNode("p", { class: "qrcode-tip" }, "请使用支付宝扫描上方二维码完成支付", -1)),
              createBaseVNode("div", { class: "qrcode-fallback" }, [
                _cache[34] || (_cache[34] = createBaseVNode("p", { class: "fallback-text" }, "如果二维码无法显示，请点击下方链接：", -1)),
                createBaseVNode("button", {
                  onClick: openPaymentUrl,
                  class: "btn-base btn-medium btn-primary"
                }, " 打开支付链接 ")
              ])
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        showPaymentModal.value && unref(shouldUseMobileLayout)() ? (openBlock(), createBlock(MobileSheet, {
          key: 4,
          show: true,
          title: "扫码支付",
          "onUpdate:show": _cache[10] || (_cache[10] = ($event) => showPaymentModal.value = false),
          onClose: _cache[11] || (_cache[11] = ($event) => showPaymentModal.value = false)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_80, [
              createBaseVNode("div", _hoisted_81, [
                createBaseVNode("div", _hoisted_82, [
                  _cache[36] || (_cache[36] = createBaseVNode("span", { class: "amount-label" }, "支付金额", -1)),
                  createBaseVNode("span", _hoisted_83, "¥" + toDisplayString(formatPrice(paymentAmount.value)), 1)
                ]),
                createBaseVNode("div", _hoisted_84, [
                  _cache[37] || (_cache[37] = createBaseVNode("span", { class: "order-label" }, "订单号", -1)),
                  createBaseVNode("span", _hoisted_85, toDisplayString(paymentTradeNo.value), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_86, [
                createBaseVNode("div", _hoisted_87, [
                  qrCodeImageUrl.value ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: qrCodeImageUrl.value,
                    alt: "支付二维码",
                    class: "qrcode-image",
                    onError: handleQrCodeError
                  }, null, 40, _hoisted_88)) : createCommentVNode("", true),
                  !paymentQrCode.value ? (openBlock(), createElementBlock("div", _hoisted_89, " 二维码URL为空 ")) : createCommentVNode("", true),
                  qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_90, [
                    _cache[38] || (_cache[38] = createTextVNode(" 二维码生成失败 ")),
                    createBaseVNode("button", {
                      onClick: retryQrCode,
                      class: "btn-base btn-small btn-warning"
                    }, "重试")
                  ])) : createCommentVNode("", true),
                  paymentQrCode.value && !qrCodeImageUrl.value && !qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_91, " 正在生成二维码... ")) : createCommentVNode("", true)
                ]),
                _cache[39] || (_cache[39] = createBaseVNode("p", { class: "qrcode-tip" }, "请使用支付宝扫描上方二维码完成支付", -1)),
                createBaseVNode("div", { class: "qrcode-fallback" }, [
                  createBaseVNode("button", {
                    onClick: openPaymentUrl,
                    class: "btn-base btn-large btn-success btn-block"
                  }, " 打开支付宝APP ")
                ])
              ]),
              createBaseVNode("div", _hoisted_92, [
                createBaseVNode("button", {
                  class: "qrcode-btn qrcode-btn-secondary qrcode-btn-mobile",
                  onClick: _cache[9] || (_cache[9] = ($event) => showPaymentModal.value = false)
                }, " 关闭支付 "),
                createBaseVNode("button", {
                  class: "qrcode-btn qrcode-btn-primary qrcode-btn-mobile",
                  onClick: checkPaymentStatus
                }, " 检查支付状态 ")
              ])
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
const PurchasePlan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3fa72241"]]);
export {
  PurchasePlan as default
};
