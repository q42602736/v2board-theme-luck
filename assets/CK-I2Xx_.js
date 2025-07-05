import { k as defineComponent, c as computed, $ as createElementBlock, L as normalizeClass, a0 as createBaseVNode, a3 as createCommentVNode, a2 as toDisplayString, q as renderSlot, U as openBlock, j as createTextVNode, r as ref, o as onMounted, a5 as useRouter, R as createBlock, W as createVNode, V as withCtx, S as resolveComponent, F as Fragment, Q as renderList, a1 as createStaticVNode, a7 as withModifiers } from "./DM1yaN1X.js";
import { u as useAuthStore, a as apiClient } from "./BBbuoBq5.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import { D as DesktopModal } from "./3u1s8V6K.js";
import { M as MobileSheet } from "./D5SbPLB-.js";
import { u as useMessage } from "./BEq_qS6Y.js";
import "./0I8bmyai.js";
const _hoisted_1$1 = { class: "notice-icon" };
const _hoisted_2$1 = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_3$1 = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_4$1 = {
  key: 2,
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_5$1 = {
  key: 3,
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_6$1 = { class: "notice-content" };
const _hoisted_7$1 = {
  key: 0,
  class: "notice-title"
};
const _hoisted_8$1 = { class: "notice-message" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PlanNotice",
  props: {
    type: { default: "info" },
    title: {},
    message: { default: "" },
    closable: { type: Boolean, default: false },
    bordered: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(__props) {
    const props = __props;
    const noticeClass = computed(() => ({
      [`notice-${props.type}`]: true,
      "notice-bordered": props.bordered,
      "notice-closable": props.closable
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["plan-notice", noticeClass.value])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          _ctx.type === "info" ? (openBlock(), createElementBlock("svg", _hoisted_2$1, _cache[1] || (_cache[1] = [
            createBaseVNode("circle", {
              cx: "12",
              cy: "12",
              r: "9",
              stroke: "currentColor",
              "stroke-width": "2"
            }, null, -1),
            createBaseVNode("path", {
              d: "M12 8v4",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, -1),
            createBaseVNode("path", {
              d: "M12 16h.01",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, -1)
          ]))) : _ctx.type === "warning" ? (openBlock(), createElementBlock("svg", _hoisted_3$1, _cache[2] || (_cache[2] = [
            createBaseVNode("path", {
              d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
              stroke: "currentColor",
              "stroke-width": "2"
            }, null, -1),
            createBaseVNode("path", {
              d: "M12 9v4",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, -1),
            createBaseVNode("path", {
              d: "M12 17h.01",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, -1)
          ]))) : _ctx.type === "success" ? (openBlock(), createElementBlock("svg", _hoisted_4$1, _cache[3] || (_cache[3] = [
            createBaseVNode("circle", {
              cx: "12",
              cy: "12",
              r: "9",
              stroke: "currentColor",
              "stroke-width": "2"
            }, null, -1),
            createBaseVNode("path", {
              d: "M9 12l2 2 4-4",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, -1)
          ]))) : (openBlock(), createElementBlock("svg", _hoisted_5$1, _cache[4] || (_cache[4] = [
            createBaseVNode("circle", {
              cx: "12",
              cy: "12",
              r: "9",
              stroke: "currentColor",
              "stroke-width": "2"
            }, null, -1),
            createBaseVNode("path", {
              d: "M15 9l-6 6",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, -1),
            createBaseVNode("path", {
              d: "M9 9l6 6",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            }, null, -1)
          ])))
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_7$1, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_8$1, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(_ctx.message), 1)
            ], true)
          ])
        ]),
        _ctx.closable ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: "notice-close",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, _cache[5] || (_cache[5] = [
          createBaseVNode("svg", {
            viewBox: "0 0 24 24",
            fill: "none"
          }, [
            createBaseVNode("path", {
              d: "M18 6L6 18M6 6l12 12",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round"
            })
          ], -1)
        ]))) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const PlanNotice = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bcb41ae7"]]);
const _hoisted_1 = { class: "plans-container" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = { class: "content-wrapper" };
const _hoisted_4 = {
  key: 0,
  class: "plan-filter"
};
const _hoisted_5 = { class: "filter-tabs" };
const _hoisted_6 = { class: "tab-count" };
const _hoisted_7 = { class: "tab-count" };
const _hoisted_8 = {
  key: 1,
  class: "loading-state"
};
const _hoisted_9 = {
  key: 2,
  class: "plans-grid"
};
const _hoisted_10 = {
  key: 0,
  class: "current-plan-corner"
};
const _hoisted_11 = { class: "plan-title-section" };
const _hoisted_12 = { class: "plan-name" };
const _hoisted_13 = { class: "plan-pricing" };
const _hoisted_14 = { class: "price-main" };
const _hoisted_15 = { class: "price-value" };
const _hoisted_16 = { class: "price-period" };
const _hoisted_17 = { class: "plan-features" };
const _hoisted_18 = { class: "feature-row" };
const _hoisted_19 = { class: "feature-item" };
const _hoisted_20 = { class: "feature-info" };
const _hoisted_21 = { class: "feature-item" };
const _hoisted_22 = { class: "feature-info" };
const _hoisted_23 = {
  key: 1,
  class: "plan-description"
};
const _hoisted_24 = ["innerHTML"];
const _hoisted_25 = { class: "plan-action" };
const _hoisted_26 = ["onClick", "disabled"];
const _hoisted_27 = { key: 0 };
const _hoisted_28 = { key: 1 };
const _hoisted_29 = { key: 2 };
const _hoisted_30 = {
  key: 3,
  class: "empty-state"
};
const _hoisted_31 = { class: "payment-methods-list" };
const _hoisted_32 = {
  key: 0,
  class: "no-payment-methods"
};
const _hoisted_33 = ["onClick"];
const _hoisted_34 = { class: "method-icon" };
const _hoisted_35 = {
  key: 0,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_36 = {
  key: 1,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_37 = {
  key: 2,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_38 = { class: "method-info" };
const _hoisted_39 = { class: "method-name" };
const _hoisted_40 = { class: "method-desc" };
const _hoisted_41 = { class: "modal-actions" };
const _hoisted_42 = { class: "mobile-payment-methods" };
const _hoisted_43 = ["onClick"];
const _hoisted_44 = { class: "mobile-method-icon" };
const _hoisted_45 = {
  key: 0,
  width: "32",
  height: "32",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_46 = {
  key: 1,
  width: "32",
  height: "32",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_47 = {
  key: 2,
  width: "32",
  height: "32",
  viewBox: "0 0 24 24",
  fill: "none"
};
const _hoisted_48 = { class: "mobile-method-info" };
const _hoisted_49 = { class: "mobile-method-name" };
const _hoisted_50 = { class: "mobile-method-desc" };
const _hoisted_51 = { class: "purchase-warning-content" };
const _hoisted_52 = {
  key: 0,
  class: "plan-comparison"
};
const _hoisted_53 = { class: "comparison-container" };
const _hoisted_54 = { class: "plan-column current" };
const _hoisted_55 = { class: "plan-info" };
const _hoisted_56 = { class: "plan-name" };
const _hoisted_57 = { class: "plan-specs" };
const _hoisted_58 = { class: "spec-item" };
const _hoisted_59 = { class: "spec-value" };
const _hoisted_60 = { class: "spec-item" };
const _hoisted_61 = { class: "spec-value" };
const _hoisted_62 = { class: "plan-column new" };
const _hoisted_63 = { class: "plan-info" };
const _hoisted_64 = { class: "plan-name" };
const _hoisted_65 = { class: "plan-specs" };
const _hoisted_66 = { class: "spec-item" };
const _hoisted_67 = { class: "spec-value" };
const _hoisted_68 = { class: "spec-item" };
const _hoisted_69 = { class: "spec-value" };
const _hoisted_70 = { class: "spec-item" };
const _hoisted_71 = { class: "spec-value price" };
const _hoisted_72 = { style: { "padding": "24px" } };
const _hoisted_73 = { class: "mobile-warning-content" };
const _hoisted_74 = {
  key: 0,
  class: "plan-comparison mobile"
};
const _hoisted_75 = { class: "comparison-container mobile" };
const _hoisted_76 = { class: "plan-column current" };
const _hoisted_77 = { class: "plan-info" };
const _hoisted_78 = { class: "plan-name" };
const _hoisted_79 = { class: "plan-specs" };
const _hoisted_80 = { class: "spec-item" };
const _hoisted_81 = { class: "spec-item" };
const _hoisted_82 = { class: "plan-column new" };
const _hoisted_83 = { class: "plan-info" };
const _hoisted_84 = { class: "plan-name" };
const _hoisted_85 = { class: "plan-specs" };
const _hoisted_86 = { class: "spec-item" };
const _hoisted_87 = { class: "spec-item" };
const _hoisted_88 = { class: "spec-item price" };
const _hoisted_89 = { class: "payment-info" };
const _hoisted_90 = { class: "payment-amount" };
const _hoisted_91 = { class: "amount-value" };
const _hoisted_92 = { class: "payment-order" };
const _hoisted_93 = { class: "order-value" };
const _hoisted_94 = { class: "qrcode-container" };
const _hoisted_95 = { class: "qrcode-wrapper" };
const _hoisted_96 = ["src"];
const _hoisted_97 = {
  key: 1,
  class: "qrcode-error"
};
const _hoisted_98 = {
  key: 2,
  class: "qrcode-error"
};
const _hoisted_99 = {
  key: 3,
  class: "qrcode-loading"
};
const _hoisted_100 = { class: "modal-actions" };
const _hoisted_101 = { class: "mobile-qrcode-content" };
const _hoisted_102 = { class: "payment-info" };
const _hoisted_103 = { class: "payment-amount" };
const _hoisted_104 = { class: "amount-value" };
const _hoisted_105 = { class: "payment-order" };
const _hoisted_106 = { class: "order-value" };
const _hoisted_107 = { class: "qrcode-container" };
const _hoisted_108 = { class: "qrcode-wrapper" };
const _hoisted_109 = ["src"];
const _hoisted_110 = {
  key: 1,
  class: "qrcode-error"
};
const _hoisted_111 = {
  key: 2,
  class: "qrcode-error"
};
const _hoisted_112 = {
  key: 3,
  class: "qrcode-loading"
};
const _hoisted_113 = { class: "mobile-actions" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Plans",
  setup(__props) {
    const router = useRouter();
    const message = useMessage();
    const authStore = useAuthStore();
    const loading = ref(false);
    const allPlans = ref([]);
    const planType = ref("regular");
    ref(false);
    const showPurchaseWarningModal = ref(false);
    const pendingPurchase = ref(null);
    ref("");
    ref(false);
    ref(0);
    ref(null);
    ref(false);
    const regularPlans = computed(() => {
      return allPlans.value.filter((plan) => {
        return plan.month_price || plan.quarter_price || plan.half_year_price || plan.year_price || plan.two_year_price || plan.three_year_price;
      });
    });
    const onetimePlans = computed(() => {
      return allPlans.value.filter((plan) => {
        return plan.onetime_price;
      });
    });
    const plans = computed(() => {
      return planType.value === "regular" ? regularPlans.value : onetimePlans.value;
    });
    const currentPlanInfo = computed(() => {
      var _a;
      if (!((_a = authStore.user) == null ? void 0 : _a.plan_id)) return null;
      return allPlans.value.find((plan) => {
        var _a2;
        return plan.id === ((_a2 = authStore.user) == null ? void 0 : _a2.plan_id);
      }) || null;
    });
    const showPaymentMethodModal = ref(false);
    const showPaymentModal = ref(false);
    const paymentMethods = ref([]);
    const selectedPaymentMethod = ref(null);
    const paymentQrCode = ref("");
    const paymentTradeNo = ref("");
    const paymentAmount = ref(0);
    const qrCodeError = ref(false);
    const qrCodeImageUrl = ref("");
    ref("");
    const pendingOrderData = ref(null);
    computed(() => {
      if (!selectedPlan.value) return [];
      const periods = [];
      if (selectedPlan.value.month_price !== null) {
        periods.push({
          key: "month",
          name: "月付",
          price: `¥${formatPrice(selectedPlan.value.month_price)}`
        });
      }
      if (selectedPlan.value.quarter_price !== null) {
        periods.push({
          key: "quarter",
          name: "季付",
          price: `¥${formatPrice(selectedPlan.value.quarter_price)}`
        });
      }
      if (selectedPlan.value.half_year_price !== null) {
        periods.push({
          key: "half_year",
          name: "半年付",
          price: `¥${formatPrice(selectedPlan.value.half_year_price)}`
        });
      }
      if (selectedPlan.value.year_price !== null) {
        periods.push({
          key: "year",
          name: "年付",
          price: `¥${formatPrice(selectedPlan.value.year_price)}`
        });
      }
      if (selectedPlan.value.two_year_price !== null) {
        periods.push({
          key: "two_year",
          name: "两年付",
          price: `¥${formatPrice(selectedPlan.value.two_year_price)}`
        });
      }
      if (selectedPlan.value.three_year_price !== null) {
        periods.push({
          key: "three_year",
          name: "三年付",
          price: `¥${formatPrice(selectedPlan.value.three_year_price)}`
        });
      }
      if (selectedPlan.value.onetime_price !== null) {
        periods.push({
          key: "onetime",
          name: "一次性",
          price: `¥${formatPrice(selectedPlan.value.onetime_price)}`
        });
      }
      return periods;
    });
    onMounted(async () => {
      if (!authStore.isAuthenticated) {
        router.push("/login");
        return;
      }
      loading.value = true;
      try {
        await Promise.all([
          authStore.fetchUserInfo(),
          loadPlans()
        ]);
      } catch (error) {
        message.error("页面加载失败，请刷新重试");
      } finally {
        loading.value = false;
      }
    });
    const loadPlans = async () => {
      allPlans.value = await apiClient.getPlans();
    };
    const isCurrentPlan = (plan) => {
      var _a;
      const userPlanId = (_a = authStore.user) == null ? void 0 : _a.plan_id;
      return userPlanId === plan.id;
    };
    const formatPrice = (price) => {
      if (!price) return "0.00";
      return (price / 100).toFixed(2);
    };
    const hasAnyPrice = (plan) => {
      return plan.month_price !== null || plan.quarter_price !== null || plan.half_year_price !== null || plan.year_price !== null || plan.two_year_price !== null || plan.three_year_price !== null || plan.onetime_price !== null;
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
      var _a, _b, _c, _d;
      try {
        if (method.id === 0) {
          message.loading("正在使用余额支付...");
          try {
            const paymentResult2 = await apiClient.checkoutOrder(tradeNo, 0);
            message.destroyAll();
            if (paymentResult2.type === -1) {
              message.success("余额支付成功！");
              await authStore.fetchUserInfo();
              router.push("/dashboard");
              return;
            } else if (paymentResult2.type === 2) {
              message.success("已使用余额支付部分金额，请选择其他支付方式完成剩余支付");
              const remainingAmount = paymentResult2.data || 0;
              if (remainingAmount > 0) {
                message.info(`剩余需要支付：¥${(remainingAmount / 100).toFixed(2)}`);
                try {
                  const methods = await apiClient.getPaymentMethods();
                  if (methods && methods.length > 0) {
                    paymentAmount.value = remainingAmount;
                    paymentMethods.value = methods;
                    showPaymentMethodModal.value = true;
                    pendingOrderData.value = {
                      ...pendingOrderData.value,
                      finalPrice: remainingAmount
                    };
                  } else {
                    message.error("没有其他支付方式可用，请联系管理员");
                  }
                } catch (error) {
                  message.error("获取支付方式失败，请重试");
                }
              }
              return;
            } else {
              message.error("余额支付失败，请尝试其他支付方式");
              return;
            }
          } catch (error) {
            message.destroyAll();
            message.error(`余额支付失败：${((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message || "未知错误"}`);
            return;
          }
        }
        message.loading("正在跳转支付...");
        const paymentResult = await apiClient.checkoutOrder(tradeNo, method.id);
        message.destroyAll();
        if (paymentResult.type === 0) {
          if (!paymentResult.data) {
            message.error("二维码URL为空，请重试");
            return;
          }
          if (shouldUseMobileLayout()) {
            window.location.href = paymentResult.data;
            message.info("正在跳转到支付宝，请完成支付");
          } else {
            paymentQrCode.value = paymentResult.data;
            paymentTradeNo.value = tradeNo;
            try {
              const orderDetail = await apiClient.getOrderDetail(tradeNo);
              paymentAmount.value = orderDetail.total_amount;
            } catch (error) {
              if (!paymentAmount.value) {
                paymentAmount.value = confirmModalData.value.finalPrice;
              }
            }
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
          if (method.id === 0) {
            message.success("余额支付成功！");
          } else {
            message.success("免费订单处理成功");
          }
          await authStore.fetchUserInfo();
          router.push("/dashboard");
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
            message.success("余额支付成功！");
            await authStore.fetchUserInfo();
            router.push("/dashboard");
          }
        } else {
          if (method.id === 0) {
            message.error("余额支付失败，可能是余额不足");
          } else {
            message.warning(`支付类型未知 (type: ${paymentResult.type})，请检查支付配置`);
          }
        }
      } catch (error) {
        message.destroyAll();
        const errorMessage = ((_d = (_c = error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || error.message || "支付失败";
        message.error(`支付失败: ${errorMessage}`);
      }
    };
    const generateQrCodeUrl = async (url) => {
      try {
        const qrCodeDataUrl = await QRCode.toDataURL(url, {
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
    const handleQrCodeError = () => {
      qrCodeError.value = true;
      message.error("二维码生成失败，请尝试点击下方按钮直接打开支付链接");
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
          router.push("/dashboard");
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
    const formatTraffic = (transferEnable) => {
      if (!transferEnable) return "0GB";
      if (transferEnable > 1e9) {
        const gb = transferEnable / (1024 * 1024 * 1024);
        if (gb >= 1024) {
          return `${(gb / 1024).toFixed(1)}TB`;
        }
        return `${gb.toFixed(0)}GB`;
      } else {
        if (transferEnable >= 1024) {
          return `${(transferEnable / 1024).toFixed(1)}TB`;
        }
        return `${transferEnable}GB`;
      }
    };
    const formatSpeed = (mbps) => {
      return `${mbps >= 10 ? mbps.toFixed(0) : mbps.toFixed(1)} Mbps`;
    };
    const getDeviceColorClass = (deviceLimit) => {
      if (!deviceLimit) return "unlimited";
      if (deviceLimit >= 10) return "high";
      if (deviceLimit >= 5) return "medium";
      if (deviceLimit >= 3) return "low";
      return "very-low";
    };
    const getSpeedColorClass = (speedLimit) => {
      if (!speedLimit) return "unlimited";
      if (speedLimit >= 1e3) return "high";
      if (speedLimit >= 100) return "medium";
      if (speedLimit >= 10) return "low";
      return "very-low";
    };
    const getTrafficColorClass = (transferEnable) => {
      if (transferEnable >= 1e3) return "high";
      if (transferEnable >= 500) return "medium";
      if (transferEnable >= 100) return "low";
      return "very-low";
    };
    const getMainPriceLabel = (plan) => {
      if (plan.month_price !== null) return "月付";
      if (plan.quarter_price !== null) return "季付";
      if (plan.half_year_price !== null) return "半年付";
      if (plan.year_price !== null) return "年付";
      if (plan.onetime_price !== null) return "一次性";
      return "价格";
    };
    const getMainPriceValue = (plan) => {
      if (plan.month_price !== null) {
        return plan.month_price === 0 ? "免费" : "¥" + formatPrice(plan.month_price);
      }
      if (plan.quarter_price !== null) {
        return plan.quarter_price === 0 ? "免费" : "¥" + formatPrice(plan.quarter_price);
      }
      if (plan.half_year_price !== null) {
        return plan.half_year_price === 0 ? "免费" : "¥" + formatPrice(plan.half_year_price);
      }
      if (plan.year_price !== null) {
        return plan.year_price === 0 ? "免费" : "¥" + formatPrice(plan.year_price);
      }
      if (plan.onetime_price !== null) {
        return plan.onetime_price === 0 ? "免费" : "¥" + formatPrice(plan.onetime_price);
      }
      return "请联系客服";
    };
    const goToPurchasePage = (plan) => {
      var _a, _b, _c;
      const isCurrentPlan2 = ((_a = authStore.user) == null ? void 0 : _a.plan_id) === plan.id;
      const hasCurrentPlan = ((_b = authStore.user) == null ? void 0 : _b.plan_id) && ((_c = authStore.user) == null ? void 0 : _c.plan_id) > 0;
      if (hasCurrentPlan && !isCurrentPlan2) {
        const basePrice = plan.month_price || plan.quarter_price || plan.year_price || plan.onetime_price || 0;
        pendingPurchase.value = {
          plan,
          period: "month",
          // 默认显示，用户在购买页面可以选择
          originalPrice: basePrice,
          finalPrice: basePrice,
          // 在提醒阶段，原价和最终价格相同
          couponCode: "",
          couponDiscount: 0
        };
        showPurchaseWarningModal.value = true;
        return;
      }
      router.push(`/plans/purchase/${plan.id}`);
    };
    const setPlanType = (type) => {
      planType.value = type;
    };
    const shouldUseMobileLayout = () => {
      return window.innerWidth <= 768;
    };
    const cancelPurchaseWarning = () => {
      showPurchaseWarningModal.value = false;
      pendingPurchase.value = null;
    };
    const confirmPurchaseWarning = () => {
      if (!pendingPurchase.value) return;
      showPurchaseWarningModal.value = false;
      router.push(`/plans/purchase/${pendingPurchase.value.plan.id}`);
      pendingPurchase.value = null;
    };
    const formatMoney = (amount) => {
      if (!amount) return "0.00";
      return (amount / 100).toFixed(2);
    };
    return (_ctx, _cache) => {
      const _component_n_spin = resolveComponent("n-spin");
      const _component_n_empty = resolveComponent("n-empty");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            allPlans.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("button", {
                  class: normalizeClass(["btn-base btn-medium btn-secondary filter-tab", { "active": planType.value === "regular" }]),
                  onClick: _cache[0] || (_cache[0] = ($event) => setPlanType("regular"))
                }, [
                  _cache[17] || (_cache[17] = createBaseVNode("span", { class: "tab-text" }, "常规套餐", -1)),
                  createBaseVNode("span", _hoisted_6, toDisplayString(regularPlans.value.length), 1)
                ], 2),
                createBaseVNode("button", {
                  class: normalizeClass(["btn-base btn-medium btn-secondary filter-tab", { "active": planType.value === "onetime" }]),
                  onClick: _cache[1] || (_cache[1] = ($event) => setPlanType("onetime"))
                }, [
                  _cache[18] || (_cache[18] = createBaseVNode("span", { class: "tab-text" }, "不限时套餐", -1)),
                  createBaseVNode("span", _hoisted_7, toDisplayString(onetimePlans.value.length), 1)
                ], 2)
              ])
            ])) : createCommentVNode("", true),
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createVNode(_component_n_spin, { size: "large" }, {
                description: withCtx(() => _cache[19] || (_cache[19] = [
                  createTextVNode("加载套餐列表中...")
                ])),
                _: 1
              })
            ])) : plans.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan) => {
                return openBlock(), createElementBlock("div", {
                  key: plan.id,
                  class: "plan-card-wrapper"
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["plan-card", { "current-plan": isCurrentPlan(plan) }])
                  }, [
                    isCurrentPlan(plan) ? (openBlock(), createElementBlock("div", _hoisted_10, _cache[20] || (_cache[20] = [
                      createBaseVNode("div", { class: "corner-triangle" }, null, -1),
                      createBaseVNode("div", { class: "corner-icon" }, [
                        createBaseVNode("svg", {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createBaseVNode("path", {
                            d: "M9 12L11 14L15 10",
                            stroke: "currentColor",
                            "stroke-width": "3",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ])
                      ], -1)
                    ]))) : createCommentVNode("", true),
                    createBaseVNode("div", {
                      class: normalizeClass(["plan-header", { "has-badge": isCurrentPlan(plan) }])
                    }, [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("h3", _hoisted_12, toDisplayString(plan.name), 1),
                        createBaseVNode("div", {
                          class: normalizeClass(["plan-traffic-badge", `traffic-${getTrafficColorClass(plan.transfer_enable)}`])
                        }, toDisplayString(formatTraffic(plan.transfer_enable)), 3)
                      ])
                    ], 2),
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("div", _hoisted_14, [
                        createBaseVNode("span", _hoisted_15, toDisplayString(getMainPriceValue(plan)), 1),
                        createBaseVNode("span", _hoisted_16, toDisplayString(getMainPriceLabel(plan)), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, [
                          _cache[22] || (_cache[22] = createStaticVNode('<div class="feature-icon-wrapper device-icon" data-v-7a517f7f><svg class="feature-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-7a517f7f><path d="M275.70176 865.42336h472.58112v74.27584H275.70176zM933.9904 779.92448H97.50016c-49.63328 0-90.01472-40.37632-90.01472-90.01472V164.20864c0-49.63328 40.37632-90.0096 90.01472-90.0096H933.9904c49.63328 0 90.0096 40.37632 90.0096 90.0096v525.70624c0 49.63328-40.37632 90.0096-90.0096 90.0096zM97.50016 134.20032a30.04416 30.04416 0 0 0-30.0032 30.0032v525.70624a30.04416 30.04416 0 0 0 30.0032 30.0032H933.9904a30.04416 30.04416 0 0 0 30.0032-30.0032V164.20864a30.04416 30.04416 0 0 0-30.0032-30.0032H97.50016v-0.00512z" fill="currentColor" data-v-7a517f7f></path><path d="M386.81088 754.04288h250.35776v115.46624H386.81088v-115.46624z" fill="currentColor" data-v-7a517f7f></path><path d="M430.81216 619.8016a23.55712 23.55712 0 0 1-16.68608-6.91712L245.71392 444.47232a23.59296 23.59296 0 1 1 33.3568-33.3824l0.01536 0.01536 151.72096 151.72608 321.60256-321.60256a23.59296 23.59296 0 0 1 33.36704 0 23.58784 23.58784 0 0 1 0.01024 33.36192l-0.01024 0.01024-338.2784 338.28352a23.58784 23.58784 0 0 1-16.68608 6.91712z" fill="currentColor" data-v-7a517f7f></path></svg></div>', 1)),
                          createBaseVNode("div", _hoisted_20, [
                            _cache[21] || (_cache[21] = createBaseVNode("div", { class: "feature-label" }, "设备数量", -1)),
                            createBaseVNode("div", {
                              class: normalizeClass(["feature-value", `device-${getDeviceColorClass(plan.device_limit)}`])
                            }, toDisplayString(plan.device_limit || "无限制"), 3)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_21, [
                          _cache[24] || (_cache[24] = createBaseVNode("div", { class: "feature-icon-wrapper speed-icon" }, [
                            createBaseVNode("svg", {
                              class: "feature-icon",
                              viewBox: "0 0 1024 1024",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createBaseVNode("path", {
                                d: "M403.499 602.453H243.243a29.696 29.696 0 0 1-27.904-40.192L371.37 155.392A42.667 42.667 0 0 1 411.22 128h260.011c21.205 0 35.67 21.333 27.69 40.832L606.166 394.88H780.8c25.685 0 39.381 30.037 22.443 49.195L375.168 928.427c-20.821 23.552-59.392 3.114-51.328-27.136l79.659-298.838z",
                                fill: "currentColor"
                              })
                            ])
                          ], -1)),
                          createBaseVNode("div", _hoisted_22, [
                            _cache[23] || (_cache[23] = createBaseVNode("div", { class: "feature-label" }, "网络速度", -1)),
                            createBaseVNode("div", {
                              class: normalizeClass(["feature-value", `speed-${getSpeedColorClass(plan.speed_limit)}`])
                            }, toDisplayString(plan.speed_limit ? formatSpeed(plan.speed_limit) : "无限速"), 3)
                          ])
                        ])
                      ])
                    ]),
                    plan.content ? (openBlock(), createElementBlock("div", _hoisted_23, [
                      createBaseVNode("div", {
                        class: "description-content",
                        innerHTML: plan.content
                      }, null, 8, _hoisted_24)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("button", {
                        class: normalizeClass(["purchase-button", { "current-plan-button": isCurrentPlan(plan) }]),
                        onClick: ($event) => goToPurchasePage(plan),
                        disabled: !hasAnyPrice(plan) || isCurrentPlan(plan) && !plan.renew
                      }, [
                        isCurrentPlan(plan) && plan.renew ? (openBlock(), createElementBlock("span", _hoisted_27, "续费套餐")) : isCurrentPlan(plan) ? (openBlock(), createElementBlock("span", _hoisted_28, "当前套餐")) : (openBlock(), createElementBlock("span", _hoisted_29, "立即购买"))
                      ], 10, _hoisted_26)
                    ])
                  ], 2)
                ]);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_30, [
              createVNode(_component_n_empty, { description: "暂无可用套餐" })
            ]))
          ])
        ]),
        showPaymentMethodModal.value && !shouldUseMobileLayout() ? (openBlock(), createBlock(DesktopModal, {
          key: 0,
          show: true,
          title: "选择支付方式",
          "max-width": "480px",
          "onUpdate:show": _cache[3] || (_cache[3] = ($event) => showPaymentMethodModal.value = false),
          onClose: _cache[4] || (_cache[4] = ($event) => showPaymentMethodModal.value = false)
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("button", {
                class: "btn-base btn-large btn-danger",
                onClick: _cache[2] || (_cache[2] = ($event) => showPaymentMethodModal.value = false)
              }, " 取消支付 ")
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_31, [
              paymentMethods.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_32, _cache[25] || (_cache[25] = [
                createBaseVNode("p", null, "暂无可用的支付方式", -1)
              ]))) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(paymentMethods.value, (method) => {
                return openBlock(), createElementBlock("div", {
                  key: method.id,
                  class: "payment-method-item",
                  onClick: ($event) => selectPaymentMethod(method)
                }, [
                  createBaseVNode("div", _hoisted_34, [
                    method.name.includes("支付宝") ? (openBlock(), createElementBlock("svg", _hoisted_35, _cache[26] || (_cache[26] = [
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
                    ]))) : method.name.includes("微信") ? (openBlock(), createElementBlock("svg", _hoisted_36, _cache[27] || (_cache[27] = [
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
                    ]))) : (openBlock(), createElementBlock("svg", _hoisted_37, _cache[28] || (_cache[28] = [
                      createBaseVNode("rect", {
                        x: "2",
                        y: "4",
                        width: "20",
                        height: "16",
                        rx: "2",
                        fill: "#666"
                      }, null, -1),
                      createBaseVNode("path", {
                        d: "M8 12h8M8 8h8M8 16h4",
                        stroke: "white",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                      }, null, -1)
                    ])))
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    createBaseVNode("div", _hoisted_39, toDisplayString(method.name), 1),
                    createBaseVNode("div", _hoisted_40, toDisplayString(method.description || "快速安全的支付方式"), 1)
                  ]),
                  _cache[29] || (_cache[29] = createBaseVNode("div", { class: "method-arrow" }, [
                    createBaseVNode("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createBaseVNode("path", {
                        d: "M9 18l6-6-6-6",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ])
                  ], -1))
                ], 8, _hoisted_33);
              }), 128))
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        showPaymentMethodModal.value && shouldUseMobileLayout() ? (openBlock(), createBlock(MobileSheet, {
          key: 1,
          show: true,
          title: "选择支付方式",
          "onUpdate:show": _cache[5] || (_cache[5] = ($event) => showPaymentMethodModal.value = false),
          onClose: _cache[6] || (_cache[6] = ($event) => showPaymentMethodModal.value = false)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_42, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(paymentMethods.value, (method) => {
                return openBlock(), createElementBlock("div", {
                  key: method.id,
                  class: "mobile-payment-method",
                  onClick: ($event) => selectPaymentMethod(method)
                }, [
                  createBaseVNode("div", _hoisted_44, [
                    method.name.includes("支付宝") ? (openBlock(), createElementBlock("svg", _hoisted_45, _cache[30] || (_cache[30] = [
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
                    ]))) : method.name.includes("微信") ? (openBlock(), createElementBlock("svg", _hoisted_46, _cache[31] || (_cache[31] = [
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
                    ]))) : (openBlock(), createElementBlock("svg", _hoisted_47, _cache[32] || (_cache[32] = [
                      createBaseVNode("rect", {
                        x: "2",
                        y: "4",
                        width: "20",
                        height: "16",
                        rx: "2",
                        fill: "#666"
                      }, null, -1),
                      createBaseVNode("path", {
                        d: "M8 12h8M8 8h8M8 16h4",
                        stroke: "white",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round"
                      }, null, -1)
                    ])))
                  ]),
                  createBaseVNode("div", _hoisted_48, [
                    createBaseVNode("div", _hoisted_49, toDisplayString(method.name), 1),
                    createBaseVNode("div", _hoisted_50, toDisplayString(method.description || "快速安全的支付方式"), 1)
                  ]),
                  _cache[33] || (_cache[33] = createBaseVNode("div", { class: "mobile-method-check" }, [
                    createBaseVNode("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createBaseVNode("path", {
                        d: "M9 18l6-6-6-6",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ])
                  ], -1))
                ], 8, _hoisted_43);
              }), 128))
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        showPurchaseWarningModal.value && !shouldUseMobileLayout() ? (openBlock(), createBlock(DesktopModal, {
          key: 2,
          show: true,
          title: "购买套餐提醒",
          "max-width": "520px",
          "onUpdate:show": _cache[7] || (_cache[7] = ($event) => showPurchaseWarningModal.value = false),
          onClose: _cache[8] || (_cache[8] = ($event) => showPurchaseWarningModal.value = false)
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", { class: "modal-actions" }, [
              createBaseVNode("button", {
                class: "btn-base btn-large btn-danger",
                onClick: cancelPurchaseWarning
              }, " 取消购买 "),
              createBaseVNode("button", {
                class: "btn-base btn-large btn-primary",
                onClick: confirmPurchaseWarning
              }, " 确认购买 ")
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_51, [
              createVNode(PlanNotice, {
                type: "warning",
                title: "重要提醒",
                bordered: false
              }, {
                default: withCtx(() => _cache[34] || (_cache[34] = [
                  createBaseVNode("div", { class: "warning-text" }, [
                    createBaseVNode("p", null, [
                      createTextVNode("购买其他套餐将会"),
                      createBaseVNode("strong", null, "重置您当前的流量使用情况"),
                      createTextVNode("，并立即生效新的套餐配置：")
                    ]),
                    createBaseVNode("ul", { class: "warning-list" }, [
                      createBaseVNode("li", null, "当前未使用的流量将会被清零"),
                      createBaseVNode("li", null, "新套餐的流量配额将立即生效"),
                      createBaseVNode("li", null, "设备限制和速度限制将按新套餐执行"),
                      createBaseVNode("li", null, "如果是降级套餐，请确认您的使用需求")
                    ]),
                    createBaseVNode("p", { class: "warning-tip" }, "建议在月初或流量即将用完时购买新套餐，以避免浪费。")
                  ], -1)
                ])),
                _: 1,
                __: [34]
              }),
              currentPlanInfo.value && pendingPurchase.value ? (openBlock(), createElementBlock("div", _hoisted_52, [
                _cache[43] || (_cache[43] = createBaseVNode("h4", null, "套餐对比", -1)),
                createBaseVNode("div", _hoisted_53, [
                  createBaseVNode("div", _hoisted_54, [
                    _cache[37] || (_cache[37] = createBaseVNode("div", { class: "column-header" }, [
                      createBaseVNode("span", { class: "column-title" }, "当前套餐"),
                      createBaseVNode("span", { class: "status-badge current" }, [
                        createBaseVNode("svg", {
                          class: "status-icon",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createBaseVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                            "clip-rule": "evenodd"
                          })
                        ]),
                        createTextVNode(" 使用中 ")
                      ])
                    ], -1)),
                    createBaseVNode("div", _hoisted_55, [
                      createBaseVNode("div", _hoisted_56, toDisplayString(currentPlanInfo.value.name), 1),
                      createBaseVNode("div", _hoisted_57, [
                        createBaseVNode("div", _hoisted_58, [
                          _cache[35] || (_cache[35] = createBaseVNode("span", { class: "spec-label" }, "流量", -1)),
                          createBaseVNode("span", _hoisted_59, toDisplayString(formatTraffic(currentPlanInfo.value.transfer_enable)), 1)
                        ]),
                        createBaseVNode("div", _hoisted_60, [
                          _cache[36] || (_cache[36] = createBaseVNode("span", { class: "spec-label" }, "设备", -1)),
                          createBaseVNode("span", _hoisted_61, toDisplayString(currentPlanInfo.value.device_limit || "无限制") + "台", 1)
                        ])
                      ])
                    ])
                  ]),
                  _cache[42] || (_cache[42] = createBaseVNode("div", { class: "arrow-container" }, [
                    createBaseVNode("svg", {
                      class: "arrow-icon",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                        "clip-rule": "evenodd"
                      })
                    ]),
                    createBaseVNode("div", { class: "arrow-text" }, "切换到")
                  ], -1)),
                  createBaseVNode("div", _hoisted_62, [
                    _cache[41] || (_cache[41] = createBaseVNode("div", { class: "column-header" }, [
                      createBaseVNode("span", { class: "column-title" }, "新套餐"),
                      createBaseVNode("span", { class: "status-badge new" }, [
                        createBaseVNode("svg", {
                          class: "status-icon",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createBaseVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                            "clip-rule": "evenodd"
                          })
                        ]),
                        createTextVNode(" 即将购买 ")
                      ])
                    ], -1)),
                    createBaseVNode("div", _hoisted_63, [
                      createBaseVNode("div", _hoisted_64, toDisplayString(pendingPurchase.value.plan.name), 1),
                      createBaseVNode("div", _hoisted_65, [
                        createBaseVNode("div", _hoisted_66, [
                          _cache[38] || (_cache[38] = createBaseVNode("span", { class: "spec-label" }, "流量", -1)),
                          createBaseVNode("span", _hoisted_67, toDisplayString(formatTraffic(pendingPurchase.value.plan.transfer_enable)), 1)
                        ]),
                        createBaseVNode("div", _hoisted_68, [
                          _cache[39] || (_cache[39] = createBaseVNode("span", { class: "spec-label" }, "设备", -1)),
                          createBaseVNode("span", _hoisted_69, toDisplayString(pendingPurchase.value.plan.device_limit || "无限制") + "台", 1)
                        ]),
                        createBaseVNode("div", _hoisted_70, [
                          _cache[40] || (_cache[40] = createBaseVNode("span", { class: "spec-label" }, "价格", -1)),
                          createBaseVNode("span", _hoisted_71, "¥" + toDisplayString(formatMoney(pendingPurchase.value.originalPrice)), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        showPurchaseWarningModal.value && shouldUseMobileLayout() ? (openBlock(), createElementBlock("div", {
          key: 3,
          style: { "position": "fixed", "top": "0", "left": "0", "width": "100vw", "height": "100vh", "background": "rgba(0,0,0,0.5)", "z-index": "9999", "display": "flex", "align-items": "center", "justify-content": "center", "padding": "20px" },
          onClick: _cache[10] || (_cache[10] = ($event) => showPurchaseWarningModal.value = false)
        }, [
          createBaseVNode("div", {
            style: { "background": "white", "border-radius": "16px", "max-width": "400px", "width": "90%", "max-height": "80vh", "overflow-y": "auto" },
            onClick: _cache[9] || (_cache[9] = withModifiers(() => {
            }, ["stop"]))
          }, [
            _cache[49] || (_cache[49] = createBaseVNode("div", { style: { "padding": "20px 24px 16px", "border-bottom": "1px solid #f0f0f0" } }, [
              createBaseVNode("h3", { style: { "margin": "0", "font-size": "18px", "font-weight": "600" } }, "购买套餐提醒")
            ], -1)),
            createBaseVNode("div", _hoisted_72, [
              createBaseVNode("div", _hoisted_73, [
                createVNode(PlanNotice, {
                  type: "warning",
                  title: "重要提醒",
                  bordered: false
                }, {
                  default: withCtx(() => _cache[44] || (_cache[44] = [
                    createBaseVNode("div", { class: "warning-text" }, [
                      createBaseVNode("p", null, [
                        createTextVNode("购买其他套餐将会"),
                        createBaseVNode("strong", null, "重置您当前的流量使用情况"),
                        createTextVNode("，并立即生效新的套餐配置：")
                      ]),
                      createBaseVNode("ul", { class: "warning-list" }, [
                        createBaseVNode("li", null, "当前未使用的流量将会被清零"),
                        createBaseVNode("li", null, "新套餐的流量配额将立即生效"),
                        createBaseVNode("li", null, "设备限制和速度限制将按新套餐执行"),
                        createBaseVNode("li", null, "如果是降级套餐，请确认您的使用需求")
                      ]),
                      createBaseVNode("p", { class: "warning-tip" }, "建议在月初或流量即将用完时购买新套餐，以避免浪费。")
                    ], -1)
                  ])),
                  _: 1,
                  __: [44]
                }),
                currentPlanInfo.value && pendingPurchase.value ? (openBlock(), createElementBlock("div", _hoisted_74, [
                  _cache[48] || (_cache[48] = createBaseVNode("h4", null, "套餐对比", -1)),
                  createBaseVNode("div", _hoisted_75, [
                    createBaseVNode("div", _hoisted_76, [
                      _cache[45] || (_cache[45] = createStaticVNode('<div class="column-header" data-v-7a517f7f><span class="column-title" data-v-7a517f7f>当前套餐</span><span class="status-badge current" data-v-7a517f7f><svg class="status-icon" viewBox="0 0 20 20" fill="currentColor" data-v-7a517f7f><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-7a517f7f></path></svg></span></div>', 1)),
                      createBaseVNode("div", _hoisted_77, [
                        createBaseVNode("div", _hoisted_78, toDisplayString(currentPlanInfo.value.name), 1),
                        createBaseVNode("div", _hoisted_79, [
                          createBaseVNode("span", _hoisted_80, toDisplayString(formatTraffic(currentPlanInfo.value.transfer_enable)), 1),
                          createBaseVNode("span", _hoisted_81, toDisplayString(currentPlanInfo.value.device_limit || "无限制") + "台", 1)
                        ])
                      ])
                    ]),
                    _cache[47] || (_cache[47] = createBaseVNode("div", { class: "arrow-container mobile" }, [
                      createBaseVNode("svg", {
                        class: "arrow-icon mobile",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])
                    ], -1)),
                    createBaseVNode("div", _hoisted_82, [
                      _cache[46] || (_cache[46] = createStaticVNode('<div class="column-header" data-v-7a517f7f><span class="column-title" data-v-7a517f7f>新套餐</span><span class="status-badge new" data-v-7a517f7f><svg class="status-icon" viewBox="0 0 20 20" fill="currentColor" data-v-7a517f7f><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" data-v-7a517f7f></path></svg></span></div>', 1)),
                      createBaseVNode("div", _hoisted_83, [
                        createBaseVNode("div", _hoisted_84, toDisplayString(pendingPurchase.value.plan.name), 1),
                        createBaseVNode("div", _hoisted_85, [
                          createBaseVNode("span", _hoisted_86, toDisplayString(formatTraffic(pendingPurchase.value.plan.transfer_enable)), 1),
                          createBaseVNode("span", _hoisted_87, toDisplayString(pendingPurchase.value.plan.device_limit || "无限制") + "台", 1),
                          createBaseVNode("span", _hoisted_88, "¥" + toDisplayString(formatMoney(pendingPurchase.value.originalPrice)), 1)
                        ])
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", { class: "mobile-actions" }, [
                  createBaseVNode("button", {
                    class: "btn-base btn-large btn-danger btn-block",
                    onClick: cancelPurchaseWarning
                  }, " 取消购买 "),
                  createBaseVNode("button", {
                    class: "btn-base btn-large btn-primary btn-block",
                    onClick: confirmPurchaseWarning
                  }, " 确认购买 ")
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        showPaymentModal.value && !shouldUseMobileLayout() ? (openBlock(), createBlock(DesktopModal, {
          key: 4,
          show: true,
          title: "扫码支付",
          "max-width": "400px",
          "onUpdate:show": _cache[12] || (_cache[12] = ($event) => showPaymentModal.value = false),
          onClose: _cache[13] || (_cache[13] = ($event) => showPaymentModal.value = false)
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_100, [
              createBaseVNode("button", {
                class: "btn-base btn-large btn-danger",
                onClick: _cache[11] || (_cache[11] = ($event) => showPaymentModal.value = false)
              }, " 取消支付 "),
              createBaseVNode("button", {
                class: "btn-base btn-large btn-primary",
                onClick: checkPaymentStatus
              }, " 检查支付状态 ")
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_89, [
              createBaseVNode("div", _hoisted_90, [
                _cache[50] || (_cache[50] = createBaseVNode("span", { class: "amount-label" }, "支付金额", -1)),
                createBaseVNode("span", _hoisted_91, "¥" + toDisplayString(formatPrice(paymentAmount.value)), 1)
              ]),
              createBaseVNode("div", _hoisted_92, [
                _cache[51] || (_cache[51] = createBaseVNode("span", { class: "order-label" }, "订单号", -1)),
                createBaseVNode("span", _hoisted_93, toDisplayString(paymentTradeNo.value), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_94, [
              createBaseVNode("div", _hoisted_95, [
                qrCodeImageUrl.value ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: qrCodeImageUrl.value,
                  alt: "支付二维码",
                  class: "qrcode-image",
                  onError: handleQrCodeError
                }, null, 40, _hoisted_96)) : createCommentVNode("", true),
                !paymentQrCode.value ? (openBlock(), createElementBlock("div", _hoisted_97, " 二维码URL为空 ")) : createCommentVNode("", true),
                qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_98, [
                  _cache[52] || (_cache[52] = createTextVNode(" 二维码生成失败 ")),
                  createBaseVNode("button", {
                    onClick: retryQrCode,
                    class: "btn-base btn-small btn-warning"
                  }, "重试")
                ])) : createCommentVNode("", true),
                paymentQrCode.value && !qrCodeImageUrl.value && !qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_99, " 正在生成二维码... ")) : createCommentVNode("", true)
              ]),
              _cache[54] || (_cache[54] = createBaseVNode("p", { class: "qrcode-tip" }, "请使用支付宝扫描上方二维码完成支付", -1)),
              createBaseVNode("div", { class: "qrcode-fallback" }, [
                _cache[53] || (_cache[53] = createBaseVNode("p", { class: "fallback-text" }, "如果二维码无法显示，请点击下方链接：", -1)),
                createBaseVNode("button", {
                  onClick: openPaymentUrl,
                  class: "btn-base btn-medium btn-primary"
                }, " 打开支付链接 ")
              ])
            ]),
            _cache[55] || (_cache[55] = createBaseVNode("div", { class: "payment-status" }, [
              createBaseVNode("div", { class: "status-checking" }, [
                createBaseVNode("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  class: "loading-icon"
                }, [
                  createBaseVNode("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none",
                    "stroke-dasharray": "31.416",
                    "stroke-dashoffset": "31.416"
                  }, [
                    createBaseVNode("animate", {
                      attributeName: "stroke-dasharray",
                      dur: "2s",
                      values: "0 31.416;15.708 15.708;0 31.416",
                      repeatCount: "indefinite"
                    }),
                    createBaseVNode("animate", {
                      attributeName: "stroke-dashoffset",
                      dur: "2s",
                      values: "0;-15.708;-31.416",
                      repeatCount: "indefinite"
                    })
                  ])
                ]),
                createBaseVNode("span", null, "等待支付中...")
              ])
            ], -1))
          ]),
          _: 1,
          __: [55]
        })) : createCommentVNode("", true),
        showPaymentModal.value && shouldUseMobileLayout() ? (openBlock(), createBlock(MobileSheet, {
          key: 5,
          show: true,
          title: "扫码支付",
          "onUpdate:show": _cache[15] || (_cache[15] = ($event) => showPaymentModal.value = false),
          onClose: _cache[16] || (_cache[16] = ($event) => showPaymentModal.value = false)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_101, [
              createBaseVNode("div", _hoisted_102, [
                createBaseVNode("div", _hoisted_103, [
                  _cache[56] || (_cache[56] = createBaseVNode("span", { class: "amount-label" }, "支付金额", -1)),
                  createBaseVNode("span", _hoisted_104, "¥" + toDisplayString(formatPrice(paymentAmount.value)), 1)
                ]),
                createBaseVNode("div", _hoisted_105, [
                  _cache[57] || (_cache[57] = createBaseVNode("span", { class: "order-label" }, "订单号", -1)),
                  createBaseVNode("span", _hoisted_106, toDisplayString(paymentTradeNo.value), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_107, [
                createBaseVNode("div", _hoisted_108, [
                  qrCodeImageUrl.value ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: qrCodeImageUrl.value,
                    alt: "支付二维码",
                    class: "qrcode-image",
                    onError: handleQrCodeError
                  }, null, 40, _hoisted_109)) : createCommentVNode("", true),
                  !paymentQrCode.value ? (openBlock(), createElementBlock("div", _hoisted_110, " 二维码URL为空 ")) : createCommentVNode("", true),
                  qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_111, [
                    _cache[58] || (_cache[58] = createTextVNode(" 二维码生成失败 ")),
                    createBaseVNode("button", {
                      onClick: retryQrCode,
                      class: "btn-base btn-small btn-warning"
                    }, "重试")
                  ])) : createCommentVNode("", true),
                  paymentQrCode.value && !qrCodeImageUrl.value && !qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_112, " 正在生成二维码... ")) : createCommentVNode("", true)
                ]),
                _cache[59] || (_cache[59] = createBaseVNode("p", { class: "qrcode-tip" }, "请使用支付宝扫描上方二维码完成支付", -1)),
                createBaseVNode("div", { class: "qrcode-fallback" }, [
                  createBaseVNode("button", {
                    onClick: openPaymentUrl,
                    class: "btn-base btn-large btn-primary btn-block"
                  }, " 打开支付宝APP ")
                ])
              ]),
              createBaseVNode("div", _hoisted_113, [
                createBaseVNode("button", {
                  class: "btn-base btn-large btn-danger btn-block",
                  onClick: _cache[14] || (_cache[14] = ($event) => showPaymentModal.value = false)
                }, " 取消支付 "),
                createBaseVNode("button", {
                  class: "btn-base btn-large btn-primary btn-block",
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
const Plans = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a517f7f"]]);
export {
  Plans as default
};
