import { k as defineComponent, r as ref, o as onMounted, $ as createElementBlock, a0 as createBaseVNode, R as createBlock, a3 as createCommentVNode, F as Fragment, Q as renderList, a1 as createStaticVNode, a2 as toDisplayString, L as normalizeClass, a7 as withModifiers, T as Teleport, N as unref, V as withCtx, U as openBlock, j as createTextVNode } from "./DM1yaN1X.js";
import { a as apiClient } from "./BBbuoBq5.js";
import { s as shouldUseMobileLayout } from "./CyyeJu8R.js";
import { D as DesktopModal } from "./3u1s8V6K.js";
import { M as MobileSheet } from "./D5SbPLB-.js";
import { b as browser } from "./0I8bmyai.js";
import { u as useMessage, h as useDialog } from "./BEq_qS6Y.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
const _hoisted_1 = { class: "orders-page" };
const _hoisted_2 = { class: "filter-section" };
const _hoisted_3 = { class: "filter-tabs" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  key: 0,
  class: "count"
};
const _hoisted_6 = { class: "orders-table-container" };
const _hoisted_7 = {
  key: 0,
  class: "loading-state"
};
const _hoisted_8 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_9 = {
  key: 2,
  class: "orders-table"
};
const _hoisted_10 = { class: "table-body" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = {
  class: "table-cell type-info",
  "data-label": "类型"
};
const _hoisted_13 = {
  class: "table-cell order-info",
  "data-label": "订单号"
};
const _hoisted_14 = { class: "order-number" };
const _hoisted_15 = {
  class: "table-cell plan-info",
  "data-label": "套餐"
};
const _hoisted_16 = { class: "plan-name" };
const _hoisted_17 = { class: "plan-details" };
const _hoisted_18 = { class: "plan-amount" };
const _hoisted_19 = { class: "plan-traffic" };
const _hoisted_20 = { class: "plan-period" };
const _hoisted_21 = {
  class: "table-cell amount-info",
  "data-label": "金额"
};
const _hoisted_22 = { class: "amount-main" };
const _hoisted_23 = { class: "amount-details" };
const _hoisted_24 = {
  key: 0,
  class: "amount-discount"
};
const _hoisted_25 = {
  key: 1,
  class: "amount-balance"
};
const _hoisted_26 = {
  class: "table-cell status-info",
  "data-label": "状态"
};
const _hoisted_27 = {
  class: "table-cell time-info",
  "data-label": "时间"
};
const _hoisted_28 = { class: "time-date" };
const _hoisted_29 = { class: "time-time" };
const _hoisted_30 = ["onClick"];
const _hoisted_31 = ["onClick"];
const _hoisted_32 = ["onClick"];
const _hoisted_33 = { class: "modal-header" };
const _hoisted_34 = { class: "modal-body" };
const _hoisted_35 = { key: 0 };
const _hoisted_36 = { class: "detail-section" };
const _hoisted_37 = { class: "detail-grid" };
const _hoisted_38 = { class: "detail-item" };
const _hoisted_39 = { class: "value" };
const _hoisted_40 = { class: "detail-item" };
const _hoisted_41 = { class: "detail-item" };
const _hoisted_42 = { class: "value" };
const _hoisted_43 = { class: "detail-item" };
const _hoisted_44 = { class: "label" };
const _hoisted_45 = { class: "value" };
const _hoisted_46 = { class: "detail-section" };
const _hoisted_47 = {
  key: 0,
  class: "plan-detail-card"
};
const _hoisted_48 = { class: "plan-specs" };
const _hoisted_49 = { class: "spec-item" };
const _hoisted_50 = { class: "spec-value" };
const _hoisted_51 = {
  key: 1,
  class: "plan-detail-card"
};
const _hoisted_52 = { class: "plan-title" };
const _hoisted_53 = { class: "plan-specs" };
const _hoisted_54 = { class: "spec-item" };
const _hoisted_55 = { class: "spec-value" };
const _hoisted_56 = { class: "spec-item" };
const _hoisted_57 = { class: "spec-value" };
const _hoisted_58 = { class: "detail-section" };
const _hoisted_59 = { class: "cost-breakdown" };
const _hoisted_60 = { class: "cost-item" };
const _hoisted_61 = { class: "cost-label" };
const _hoisted_62 = { class: "cost-value" };
const _hoisted_63 = {
  key: 0,
  class: "cost-item"
};
const _hoisted_64 = { class: "cost-value discount-amount" };
const _hoisted_65 = {
  key: 1,
  class: "cost-item"
};
const _hoisted_66 = { class: "cost-value balance" };
const _hoisted_67 = {
  key: 2,
  class: "cost-item"
};
const _hoisted_68 = { class: "cost-value" };
const _hoisted_69 = {
  key: 3,
  class: "cost-item"
};
const _hoisted_70 = { class: "cost-value surplus" };
const _hoisted_71 = {
  key: 4,
  class: "cost-item"
};
const _hoisted_72 = { class: "cost-value refund" };
const _hoisted_73 = { class: "cost-item total" };
const _hoisted_74 = { class: "cost-value final-amount" };
const _hoisted_75 = { class: "modal-footer detail-modal-footer" };
const _hoisted_76 = { class: "cancel-modal-header" };
const _hoisted_77 = { class: "cancel-modal-body" };
const _hoisted_78 = {
  key: 0,
  class: "cancel-order-summary"
};
const _hoisted_79 = { class: "order-info-section" };
const _hoisted_80 = { class: "order-main-info" };
const _hoisted_81 = { class: "order-title" };
const _hoisted_82 = { class: "order-number-full" };
const _hoisted_83 = { class: "order-details-row" };
const _hoisted_84 = { class: "detail-item" };
const _hoisted_85 = { class: "detail-item" };
const _hoisted_86 = { class: "detail-value" };
const _hoisted_87 = {
  key: 0,
  class: "payment-breakdown"
};
const _hoisted_88 = {
  key: 0,
  class: "breakdown-item"
};
const _hoisted_89 = { class: "breakdown-value discount" };
const _hoisted_90 = {
  key: 1,
  class: "breakdown-item"
};
const _hoisted_91 = { class: "breakdown-value balance" };
const _hoisted_92 = { class: "cancel-modal-actions" };
const _hoisted_93 = { class: "modal-header" };
const _hoisted_94 = { class: "modal-body" };
const _hoisted_95 = {
  key: 0,
  class: "payment-order-info"
};
const _hoisted_96 = { class: "order-summary" };
const _hoisted_97 = { class: "summary-row" };
const _hoisted_98 = { class: "summary-value" };
const _hoisted_99 = { class: "summary-row" };
const _hoisted_100 = { class: "summary-row" };
const _hoisted_101 = { class: "payment-amount" };
const _hoisted_102 = { class: "payment-methods-section" };
const _hoisted_103 = { class: "payment-methods-grid" };
const _hoisted_104 = ["onClick", "disabled"];
const _hoisted_105 = { class: "payment-method-icon" };
const _hoisted_106 = ["src", "alt"];
const _hoisted_107 = {
  key: 1,
  class: "payment-method-placeholder"
};
const _hoisted_108 = { class: "payment-method-info" };
const _hoisted_109 = { class: "payment-method-name" };
const _hoisted_110 = {
  key: 0,
  class: "payment-method-fee"
};
const _hoisted_111 = { key: 0 };
const _hoisted_112 = { key: 1 };
const _hoisted_113 = {
  key: 0,
  class: "payment-method-check"
};
const _hoisted_114 = { class: "modal-footer payment-modal-footer" };
const _hoisted_115 = ["disabled"];
const _hoisted_116 = { class: "payment-info" };
const _hoisted_117 = { class: "payment-amount" };
const _hoisted_118 = { class: "amount-value" };
const _hoisted_119 = { class: "payment-order" };
const _hoisted_120 = { class: "order-value" };
const _hoisted_121 = { class: "qrcode-container" };
const _hoisted_122 = { class: "qrcode-wrapper" };
const _hoisted_123 = ["src"];
const _hoisted_124 = {
  key: 1,
  class: "qrcode-error"
};
const _hoisted_125 = {
  key: 2,
  class: "qrcode-error"
};
const _hoisted_126 = {
  key: 3,
  class: "qrcode-loading"
};
const _hoisted_127 = { class: "qrcode-modal-actions" };
const _hoisted_128 = { class: "mobile-qrcode-content" };
const _hoisted_129 = { class: "payment-info" };
const _hoisted_130 = { class: "payment-amount" };
const _hoisted_131 = { class: "amount-value" };
const _hoisted_132 = { class: "payment-order" };
const _hoisted_133 = { class: "order-value" };
const _hoisted_134 = { class: "qrcode-container" };
const _hoisted_135 = { class: "qrcode-wrapper" };
const _hoisted_136 = ["src"];
const _hoisted_137 = {
  key: 1,
  class: "qrcode-error"
};
const _hoisted_138 = {
  key: 2,
  class: "qrcode-error"
};
const _hoisted_139 = {
  key: 3,
  class: "qrcode-loading"
};
const _hoisted_140 = { class: "mobile-qrcode-actions" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Orders",
  setup(__props) {
    const message = useMessage();
    useDialog();
    const loading = ref(false);
    const allOrders = ref([]);
    const orders = ref([]);
    const plans = ref([]);
    const statusFilter = ref(void 0);
    const showDetailModal = ref(false);
    const selectedOrder = ref(null);
    const showCancelModal = ref(false);
    const cancelOrderInfo = ref(null);
    const showPaymentModal = ref(false);
    const paymentOrderInfo = ref(null);
    const paymentMethods = ref([]);
    const paymentLoading = ref(false);
    const selectedPaymentMethod = ref(null);
    const showQRCodeModal = ref(false);
    const qrCodeDataUrl = ref("");
    const qrCodeError = ref(false);
    const paymentQrCode = ref("");
    const statusFilters = ref([
      { label: "全部", value: void 0, count: 0 },
      { label: "待支付", value: 0, count: 0 },
      { label: "开通中", value: 1, count: 0 },
      { label: "已取消", value: 2, count: 0 },
      { label: "已完成", value: 3, count: 0 },
      { label: "已折抵", value: 4, count: 0 }
    ]);
    const loadOrders = async () => {
      loading.value = true;
      try {
        const [ordersData, plansData] = await Promise.all([
          apiClient.getOrders(),
          apiClient.getPlans()
        ]);
        allOrders.value = ordersData || [];
        plans.value = plansData || [];
        updateFilterCounts();
        applyStatusFilter();
      } catch (error) {
        console.error("加载订单列表失败:", error);
        message.error("加载订单列表失败，请刷新重试");
      } finally {
        loading.value = false;
      }
    };
    const updateFilterCounts = () => {
      statusFilters.value.forEach((filter) => {
        if (filter.value === void 0) {
          filter.count = allOrders.value.length;
        } else {
          filter.count = allOrders.value.filter((order) => order.status === filter.value).length;
        }
      });
    };
    const setStatusFilter = (status) => {
      statusFilter.value = status;
      applyStatusFilter();
    };
    const applyStatusFilter = () => {
      if (statusFilter.value === void 0) {
        orders.value = allOrders.value;
      } else {
        orders.value = allOrders.value.filter((order) => order.status === statusFilter.value);
      }
    };
    const viewOrderDetail = (order) => {
      selectedOrder.value = order;
      showDetailModal.value = true;
    };
    const payOrder = async (order) => {
      try {
        paymentLoading.value = true;
        const methods = await apiClient.getPaymentMethods();
        if (!methods || methods.length === 0) {
          message.error("没有可用的支付方式，请联系管理员");
          return;
        }
        showDetailModal.value = false;
        selectedOrder.value = null;
        paymentOrderInfo.value = order;
        paymentMethods.value = methods;
        selectedPaymentMethod.value = null;
        showPaymentModal.value = true;
      } catch (error) {
        console.error("获取支付方式失败:", error);
        const errorMessage = translateError(error, "获取支付方式失败，请重试");
        message.error(errorMessage);
      } finally {
        paymentLoading.value = false;
      }
    };
    const handlePaymentMethodSelect = (method) => {
      selectedPaymentMethod.value = method;
    };
    const confirmPayment = async () => {
      if (!paymentOrderInfo.value || !selectedPaymentMethod.value) return;
      try {
        paymentLoading.value = true;
        message.loading("正在处理支付...");
        const paymentResult = await apiClient.checkoutOrder(paymentOrderInfo.value.trade_no, selectedPaymentMethod.value.id);
        message.destroyAll();
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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
        showPaymentModal.value = false;
      } catch (error) {
        console.error("支付处理失败:", error);
        message.destroyAll();
        const errorMessage = translateError(error, "支付处理失败，请重试");
        message.error(errorMessage);
      } finally {
        paymentLoading.value = false;
      }
    };
    const generatePaymentQRCode = async (paymentUrl) => {
      try {
        paymentQrCode.value = paymentUrl;
        qrCodeError.value = false;
        const qrCodeData = await browser.toDataURL(paymentUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          },
          errorCorrectionLevel: "M"
        });
        qrCodeDataUrl.value = qrCodeData;
        showQRCodeModal.value = true;
        message.info("请使用支付宝扫描二维码完成支付");
      } catch (error) {
        console.error("生成二维码失败:", error);
        qrCodeError.value = true;
        paymentQrCode.value = paymentUrl;
        showQRCodeModal.value = true;
        message.warning("二维码生成失败，请点击下方按钮直接打开支付链接");
      }
    };
    const refreshPaymentStatus = async () => {
      if (!paymentOrderInfo.value) return;
      try {
        message.loading("正在检查支付状态...");
        const orderStatus = await apiClient.checkOrderStatus(paymentOrderInfo.value.trade_no);
        message.destroyAll();
        if (orderStatus === 3) {
          message.success("支付成功！订单已完成");
          showQRCodeModal.value = false;
          paymentOrderInfo.value = null;
          const orderIndex = orders.value.findIndex((order) => order.trade_no === paymentOrderInfo.value.trade_no);
          if (orderIndex !== -1) {
            orders.value[orderIndex].status = 3;
            updateFilterCounts();
            applyStatusFilter();
          }
        } else if (orderStatus === 2) {
          message.warning("订单已被取消");
          showQRCodeModal.value = false;
          paymentOrderInfo.value = null;
          const orderIndex = orders.value.findIndex((order) => order.trade_no === paymentOrderInfo.value.trade_no);
          if (orderIndex !== -1) {
            orders.value[orderIndex].status = 2;
            updateFilterCounts();
            applyStatusFilter();
          }
        } else if (orderStatus === 0) {
          message.info("订单仍在等待支付，请继续扫码支付");
        } else if (orderStatus === 1) {
          message.info("订单正在开通中，请稍候");
          const orderIndex = orders.value.findIndex((order) => order.trade_no === paymentOrderInfo.value.trade_no);
          if (orderIndex !== -1) {
            orders.value[orderIndex].status = 1;
            updateFilterCounts();
            applyStatusFilter();
          }
        } else {
          message.info(`订单状态已更新: ${getStatusText(orderStatus)}`);
        }
      } catch (error) {
        console.error("刷新支付状态失败:", error);
        message.destroyAll();
        const errorMessage = translateError(error, "刷新支付状态失败，请重试");
        message.error(errorMessage);
      }
    };
    const handleQrCodeError = () => {
      qrCodeError.value = true;
    };
    const retryQrCode = async () => {
      if (!paymentQrCode.value) return;
      qrCodeError.value = false;
      try {
        const qrCodeData = await browser.toDataURL(paymentQrCode.value, {
          width: 300,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          },
          errorCorrectionLevel: "M"
        });
        qrCodeDataUrl.value = qrCodeData;
      } catch (error) {
        qrCodeError.value = true;
        message.error("重试生成二维码失败");
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
    const cancelOrder = async (order) => {
      cancelOrderInfo.value = order;
      showCancelModal.value = true;
    };
    const confirmCancelOrder = async () => {
      var _a, _b;
      if (!cancelOrderInfo.value) return;
      try {
        await apiClient.cancelOrder(cancelOrderInfo.value.trade_no);
        message.success("订单已成功取消");
        showCancelModal.value = false;
        cancelOrderInfo.value = null;
        await loadOrders();
      } catch (error) {
        console.error("取消订单失败:", error);
        const errorMessage = ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || (error == null ? void 0 : error.message) || "取消订单失败，请重试";
        message.error(errorMessage);
      }
    };
    const formatDateTime = (timestamp) => {
      const date = new Date(timestamp * 1e3);
      return date.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const formatDate = (timestamp) => {
      const date = new Date(timestamp * 1e3);
      return date.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
    };
    const formatTime = (timestamp) => {
      const date = new Date(timestamp * 1e3);
      return date.toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const getOrderTypeText = (type) => {
      const typeMap = {
        1: "新购",
        2: "续费",
        3: "升级",
        4: "重置",
        9: "充值"
      };
      return typeMap[type] || "未知";
    };
    const getOrderTypeClass = (type) => {
      const classMap = {
        1: "type-new",
        2: "type-renew",
        3: "type-upgrade",
        4: "type-reset",
        9: "type-deposit"
      };
      return classMap[type] || "type-unknown";
    };
    const formatBytes = (gb) => {
      if (gb === 0) return "0 GB";
      if (gb < 1) {
        return (gb * 1024).toFixed(0) + " MB";
      }
      if (gb >= 1024) {
        return (gb / 1024).toFixed(1) + " TB";
      }
      return gb.toFixed(0) + " GB";
    };
    const formatPrice = (price) => {
      return (price / 100).toFixed(2);
    };
    const getOrderTitle = (order) => {
      var _a;
      if (order.type === 9 || order.period === "deposit") {
        return "账户充值";
      }
      if ((_a = order.plan) == null ? void 0 : _a.name) {
        return order.plan.name;
      }
      if (order.plan_name) {
        return order.plan_name;
      }
      const plan = plans.value.find((p) => p.id === order.plan_id);
      return (plan == null ? void 0 : plan.name) || "未知套餐";
    };
    const getOrderTransferEnable = (order) => {
      var _a;
      if ((_a = order.plan) == null ? void 0 : _a.transfer_enable) {
        return order.plan.transfer_enable;
      }
      const plan = plans.value.find((p) => p.id === order.plan_id);
      return (plan == null ? void 0 : plan.transfer_enable) || 0;
    };
    const getOrderDeviceLimit = (order) => {
      var _a;
      if ((_a = order.plan) == null ? void 0 : _a.device_limit) {
        return order.plan.device_limit;
      }
      const plan = plans.value.find((p) => p.id === order.plan_id);
      return (plan == null ? void 0 : plan.device_limit) || 0;
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
        "reset_price": "重置包"
      };
      return periodMap[period] || period;
    };
    const getStatusText = (status) => {
      const statusMap = {
        0: "待支付",
        1: "开通中",
        2: "已取消",
        3: "已完成",
        4: "已折抵"
      };
      return statusMap[status] || "未知状态";
    };
    const getStatusClass = (status) => {
      const classMap = {
        0: "pending",
        1: "processing",
        2: "cancelled",
        3: "completed",
        4: "discounted"
      };
      return classMap[status] || "unknown";
    };
    const getOriginalAmount = (order) => {
      let amount = order.total_amount || 0;
      if (order.discount_amount) {
        amount += order.discount_amount;
      }
      if (order.balance_amount) {
        amount += order.balance_amount;
      }
      if (order.surplus_amount) {
        amount += order.surplus_amount;
      }
      if (order.handling_amount) {
        amount -= order.handling_amount;
      }
      return Math.max(0, amount);
    };
    const getFinalAmount = (order) => {
      let amount = getOriginalAmount(order);
      if (order.discount_amount) {
        amount -= order.discount_amount;
      }
      if (order.balance_amount) {
        amount -= order.balance_amount;
      }
      if (order.surplus_amount) {
        amount -= order.surplus_amount;
      }
      if (order.handling_amount) {
        amount += order.handling_amount;
      }
      if (order.refund_amount) {
        amount -= order.refund_amount;
      }
      return Math.max(0, amount);
    };
    const translateError = (error, defaultMessage = "操作失败，请重试") => {
      var _a, _b;
      let errorMessage = ((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || (error == null ? void 0 : error.message) || defaultMessage;
      if (typeof errorMessage === "string") {
        if (errorMessage.includes("timeout") && errorMessage.includes("exceeded")) {
          return "网络请求超时，请检查网络连接后重试";
        }
        if (errorMessage.includes("Network Error")) {
          return "网络连接失败，请检查网络后重试";
        }
        if (errorMessage.includes("Request failed")) {
          return "请求失败，请稍后重试";
        }
        if (errorMessage.includes("500")) {
          return "服务器内部错误，请稍后重试";
        }
        if (errorMessage.includes("404")) {
          return "请求的资源不存在，请联系管理员";
        }
        if (errorMessage.includes("403")) {
          return "没有权限访问，请重新登录";
        }
        if (errorMessage.includes("401")) {
          return "登录已过期，请重新登录";
        }
        if (errorMessage.includes("CORS")) {
          return "跨域请求被阻止，请联系管理员";
        }
        if (errorMessage.includes("Connection refused") || errorMessage.includes("ECONNREFUSED")) {
          return "无法连接到服务器，请稍后重试";
        }
      }
      return errorMessage;
    };
    onMounted(() => {
      loadOrders();
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(statusFilters.value, (filter) => {
                return openBlock(), createElementBlock("button", {
                  key: filter.value,
                  class: normalizeClass(["filter-tab", { active: statusFilter.value === filter.value }]),
                  onClick: ($event) => setStatusFilter(filter.value)
                }, [
                  createTextVNode(toDisplayString(filter.label) + " ", 1),
                  filter.count > 0 ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(filter.count), 1)) : createCommentVNode("", true)
                ], 10, _hoisted_4);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_6, [
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_7, _cache[20] || (_cache[20] = [
              createBaseVNode("div", { class: "loading-spinner" }, null, -1),
              createBaseVNode("p", null, "加载订单中...", -1)
            ]))) : orders.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_8, _cache[21] || (_cache[21] = [
              createBaseVNode("div", { class: "empty-icon" }, "📋", -1),
              createBaseVNode("h3", null, "暂无订单", -1),
              createBaseVNode("p", null, "您还没有任何订单记录", -1)
            ]))) : (openBlock(), createElementBlock("div", _hoisted_9, [
              _cache[23] || (_cache[23] = createStaticVNode('<div class="table-header" data-v-95571e5b><div class="header-cell" data-v-95571e5b>类型</div><div class="header-cell" data-v-95571e5b>订单信息</div><div class="header-cell" data-v-95571e5b>套餐详情</div><div class="header-cell" data-v-95571e5b>金额</div><div class="header-cell" data-v-95571e5b>状态</div><div class="header-cell" data-v-95571e5b>创建时间</div><div class="header-cell" data-v-95571e5b>操作</div></div>', 1)),
              createBaseVNode("div", _hoisted_10, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(orders.value, (order) => {
                  return openBlock(), createElementBlock("div", {
                    key: order.trade_no,
                    class: "table-row",
                    onClick: ($event) => viewOrderDetail(order)
                  }, [
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", {
                        class: normalizeClass(["order-type", getOrderTypeClass(order.type)])
                      }, toDisplayString(getOrderTypeText(order.type)), 3)
                    ]),
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("div", _hoisted_14, toDisplayString(order.trade_no), 1)
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, toDisplayString(getOrderTitle(order)), 1),
                      createBaseVNode("div", _hoisted_17, [
                        order.type === 9 || order.period === "deposit" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          _cache[22] || (_cache[22] = createBaseVNode("span", { class: "plan-deposit" }, "余额充值", -1)),
                          createBaseVNode("span", _hoisted_18, "¥" + toDisplayString(formatPrice(order.total_amount)), 1)
                        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          createBaseVNode("span", _hoisted_19, toDisplayString(formatBytes(getOrderTransferEnable(order))), 1),
                          createBaseVNode("span", _hoisted_20, toDisplayString(getPeriodText(order.period)), 1)
                        ], 64))
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("div", _hoisted_22, "¥" + toDisplayString(formatPrice(getFinalAmount(order))), 1),
                      createBaseVNode("div", _hoisted_23, [
                        order.discount_amount && order.discount_amount > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, " 优惠 -¥" + toDisplayString(formatPrice(order.discount_amount)), 1)) : createCommentVNode("", true),
                        order.balance_amount && order.balance_amount > 0 ? (openBlock(), createElementBlock("div", _hoisted_25, " 余额 -¥" + toDisplayString(formatPrice(order.balance_amount)), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_26, [
                      createBaseVNode("span", {
                        class: normalizeClass(["status-badge", getStatusClass(order.status)])
                      }, toDisplayString(getStatusText(order.status)), 3)
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      createBaseVNode("div", _hoisted_28, toDisplayString(formatDate(order.created_at)), 1),
                      createBaseVNode("div", _hoisted_29, toDisplayString(formatTime(order.created_at)), 1)
                    ]),
                    createBaseVNode("div", {
                      class: "table-cell actions",
                      "data-label": "操作",
                      style: { "display": "flex !important", "flex-direction": "row !important", "gap": "6px", "align-items": "center" },
                      onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                      }, ["stop"]))
                    }, [
                      createBaseVNode("button", {
                        class: "btn-base btn-small btn-secondary",
                        onClick: withModifiers(($event) => viewOrderDetail(order), ["stop"]),
                        style: { "display": "inline-flex !important", "width": "auto !important", "flex-shrink": "0" }
                      }, " 详情 ", 8, _hoisted_30),
                      order.status === 0 ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        class: "btn-base btn-small btn-primary",
                        onClick: withModifiers(($event) => payOrder(order), ["stop"]),
                        style: { "display": "inline-flex !important", "width": "auto !important", "flex-shrink": "0" }
                      }, " 支付 ", 8, _hoisted_31)) : createCommentVNode("", true),
                      order.status === 0 ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        class: "btn-base btn-small btn-danger",
                        onClick: withModifiers(($event) => cancelOrder(order), ["stop"]),
                        style: { "display": "inline-flex !important", "width": "auto !important", "flex-shrink": "0" }
                      }, " 取消 ", 8, _hoisted_32)) : createCommentVNode("", true)
                    ])
                  ], 8, _hoisted_11);
                }), 128))
              ])
            ]))
          ])
        ]),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          showDetailModal.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "modal-overlay",
            onClick: _cache[5] || (_cache[5] = ($event) => showDetailModal.value = false)
          }, [
            createBaseVNode("div", {
              class: "modal-content",
              onClick: _cache[4] || (_cache[4] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createBaseVNode("div", _hoisted_33, [
                _cache[25] || (_cache[25] = createBaseVNode("h3", null, "订单详情", -1)),
                createBaseVNode("button", {
                  class: "modal-close-btn",
                  onClick: _cache[1] || (_cache[1] = ($event) => showDetailModal.value = false)
                }, _cache[24] || (_cache[24] = [
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
              createBaseVNode("div", _hoisted_34, [
                selectedOrder.value ? (openBlock(), createElementBlock("div", _hoisted_35, [
                  createBaseVNode("div", _hoisted_36, [
                    _cache[29] || (_cache[29] = createBaseVNode("h4", null, "基本信息", -1)),
                    createBaseVNode("div", _hoisted_37, [
                      createBaseVNode("div", _hoisted_38, [
                        _cache[26] || (_cache[26] = createBaseVNode("span", { class: "label" }, "订单号", -1)),
                        createBaseVNode("span", _hoisted_39, toDisplayString(selectedOrder.value.trade_no), 1)
                      ]),
                      createBaseVNode("div", _hoisted_40, [
                        _cache[27] || (_cache[27] = createBaseVNode("span", { class: "label" }, "状态", -1)),
                        createBaseVNode("span", {
                          class: normalizeClass(["value", "status", getStatusClass(selectedOrder.value.status)])
                        }, toDisplayString(getStatusText(selectedOrder.value.status)), 3)
                      ]),
                      createBaseVNode("div", _hoisted_41, [
                        _cache[28] || (_cache[28] = createBaseVNode("span", { class: "label" }, "创建时间", -1)),
                        createBaseVNode("span", _hoisted_42, toDisplayString(formatDateTime(selectedOrder.value.created_at)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_43, [
                        createBaseVNode("span", _hoisted_44, toDisplayString(selectedOrder.value.type === 9 || selectedOrder.value.period === "deposit" ? "充值类型" : "周期"), 1),
                        createBaseVNode("span", _hoisted_45, toDisplayString(selectedOrder.value.type === 9 || selectedOrder.value.period === "deposit" ? "余额充值" : getPeriodText(selectedOrder.value.period)), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_46, [
                    createBaseVNode("h4", null, toDisplayString(selectedOrder.value.type === 9 || selectedOrder.value.period === "deposit" ? "充值信息" : "套餐信息"), 1),
                    selectedOrder.value.type === 9 || selectedOrder.value.period === "deposit" ? (openBlock(), createElementBlock("div", _hoisted_47, [
                      _cache[32] || (_cache[32] = createBaseVNode("div", { class: "plan-title" }, "余额充值", -1)),
                      createBaseVNode("div", _hoisted_48, [
                        createBaseVNode("div", _hoisted_49, [
                          _cache[30] || (_cache[30] = createBaseVNode("span", { class: "spec-label" }, "充值金额", -1)),
                          createBaseVNode("span", _hoisted_50, "¥" + toDisplayString(formatPrice(getOriginalAmount(selectedOrder.value))), 1)
                        ]),
                        _cache[31] || (_cache[31] = createBaseVNode("div", { class: "spec-item" }, [
                          createBaseVNode("span", { class: "spec-label" }, "充值说明"),
                          createBaseVNode("span", { class: "spec-value" }, "充值到账户余额，可用于购买套餐")
                        ], -1))
                      ])
                    ])) : (openBlock(), createElementBlock("div", _hoisted_51, [
                      createBaseVNode("div", _hoisted_52, toDisplayString(getOrderTitle(selectedOrder.value)), 1),
                      createBaseVNode("div", _hoisted_53, [
                        createBaseVNode("div", _hoisted_54, [
                          _cache[33] || (_cache[33] = createBaseVNode("span", { class: "spec-label" }, "流量配额", -1)),
                          createBaseVNode("span", _hoisted_55, toDisplayString(formatBytes(getOrderTransferEnable(selectedOrder.value))), 1)
                        ]),
                        createBaseVNode("div", _hoisted_56, [
                          _cache[34] || (_cache[34] = createBaseVNode("span", { class: "spec-label" }, "设备限制", -1)),
                          createBaseVNode("span", _hoisted_57, toDisplayString(getOrderDeviceLimit(selectedOrder.value) || "无限制") + "台", 1)
                        ])
                      ])
                    ]))
                  ]),
                  createBaseVNode("div", _hoisted_58, [
                    _cache[41] || (_cache[41] = createBaseVNode("h4", null, "费用明细", -1)),
                    createBaseVNode("div", _hoisted_59, [
                      createBaseVNode("div", _hoisted_60, [
                        createBaseVNode("span", _hoisted_61, toDisplayString(selectedOrder.value.type === 9 || selectedOrder.value.period === "deposit" ? "充值金额" : "套餐费用"), 1),
                        createBaseVNode("span", _hoisted_62, "¥" + toDisplayString(formatPrice(getOriginalAmount(selectedOrder.value))), 1)
                      ]),
                      selectedOrder.value.discount_amount && selectedOrder.value.discount_amount > 0 ? (openBlock(), createElementBlock("div", _hoisted_63, [
                        _cache[35] || (_cache[35] = createBaseVNode("span", { class: "cost-label" }, "优惠金额", -1)),
                        createBaseVNode("span", _hoisted_64, "-¥" + toDisplayString(formatPrice(selectedOrder.value.discount_amount)), 1)
                      ])) : createCommentVNode("", true),
                      selectedOrder.value.balance_amount && selectedOrder.value.balance_amount > 0 ? (openBlock(), createElementBlock("div", _hoisted_65, [
                        _cache[36] || (_cache[36] = createBaseVNode("span", { class: "cost-label" }, "余额支付", -1)),
                        createBaseVNode("span", _hoisted_66, "-¥" + toDisplayString(formatPrice(selectedOrder.value.balance_amount)), 1)
                      ])) : createCommentVNode("", true),
                      selectedOrder.value.handling_amount && selectedOrder.value.handling_amount > 0 ? (openBlock(), createElementBlock("div", _hoisted_67, [
                        _cache[37] || (_cache[37] = createBaseVNode("span", { class: "cost-label" }, "手续费", -1)),
                        createBaseVNode("span", _hoisted_68, "¥" + toDisplayString(formatPrice(selectedOrder.value.handling_amount)), 1)
                      ])) : createCommentVNode("", true),
                      selectedOrder.value.surplus_amount && selectedOrder.value.surplus_amount > 0 ? (openBlock(), createElementBlock("div", _hoisted_69, [
                        _cache[38] || (_cache[38] = createBaseVNode("span", { class: "cost-label" }, "剩余价值", -1)),
                        createBaseVNode("span", _hoisted_70, "-¥" + toDisplayString(formatPrice(selectedOrder.value.surplus_amount)), 1)
                      ])) : createCommentVNode("", true),
                      selectedOrder.value.refund_amount && selectedOrder.value.refund_amount > 0 ? (openBlock(), createElementBlock("div", _hoisted_71, [
                        _cache[39] || (_cache[39] = createBaseVNode("span", { class: "cost-label" }, "已退款", -1)),
                        createBaseVNode("span", _hoisted_72, "-¥" + toDisplayString(formatPrice(selectedOrder.value.refund_amount)), 1)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_73, [
                        _cache[40] || (_cache[40] = createBaseVNode("span", { class: "cost-label" }, "实付金额", -1)),
                        createBaseVNode("span", _hoisted_74, "¥" + toDisplayString(formatPrice(getFinalAmount(selectedOrder.value))), 1)
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_75, [
                createBaseVNode("button", {
                  class: "btn-base btn-large btn-danger",
                  onClick: _cache[2] || (_cache[2] = ($event) => showDetailModal.value = false)
                }, " 关闭 "),
                ((_a = selectedOrder.value) == null ? void 0 : _a.status) === 0 ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "btn-base btn-large btn-primary",
                  onClick: _cache[3] || (_cache[3] = ($event) => payOrder(selectedOrder.value))
                }, " 立即支付 ")) : createCommentVNode("", true)
              ])
            ])
          ])) : createCommentVNode("", true)
        ])),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          showCancelModal.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "modal-overlay",
            onClick: _cache[9] || (_cache[9] = ($event) => showCancelModal.value = false)
          }, [
            createBaseVNode("div", {
              class: "modal-content cancel-modal-small",
              onClick: _cache[8] || (_cache[8] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createBaseVNode("div", _hoisted_76, [
                _cache[42] || (_cache[42] = createBaseVNode("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  class: "cancel-warning-icon"
                }, [
                  createBaseVNode("path", {
                    d: "M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                    stroke: "#f59e0b",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ], -1)),
                _cache[43] || (_cache[43] = createBaseVNode("span", { class: "cancel-modal-title" }, "取消订单", -1)),
                createBaseVNode("button", {
                  class: "cancel-close-btn",
                  onClick: _cache[6] || (_cache[6] = ($event) => showCancelModal.value = false)
                }, "×")
              ]),
              createBaseVNode("div", _hoisted_77, [
                cancelOrderInfo.value ? (openBlock(), createElementBlock("div", _hoisted_78, [
                  createBaseVNode("div", _hoisted_79, [
                    createBaseVNode("div", _hoisted_80, [
                      createBaseVNode("div", _hoisted_81, toDisplayString(getOrderTitle(cancelOrderInfo.value)), 1),
                      createBaseVNode("div", _hoisted_82, toDisplayString(cancelOrderInfo.value.trade_no), 1)
                    ]),
                    createBaseVNode("div", _hoisted_83, [
                      createBaseVNode("div", _hoisted_84, [
                        _cache[44] || (_cache[44] = createBaseVNode("span", { class: "detail-label" }, "类型", -1)),
                        createBaseVNode("span", {
                          class: normalizeClass(["order-type-badge", getOrderTypeClass(cancelOrderInfo.value.type)])
                        }, toDisplayString(getOrderTypeText(cancelOrderInfo.value.type)), 3)
                      ]),
                      createBaseVNode("div", _hoisted_85, [
                        _cache[45] || (_cache[45] = createBaseVNode("span", { class: "detail-label" }, "金额", -1)),
                        createBaseVNode("span", _hoisted_86, "¥" + toDisplayString(formatPrice(getFinalAmount(cancelOrderInfo.value))), 1)
                      ])
                    ]),
                    cancelOrderInfo.value.discount_amount || cancelOrderInfo.value.balance_amount ? (openBlock(), createElementBlock("div", _hoisted_87, [
                      cancelOrderInfo.value.discount_amount && cancelOrderInfo.value.discount_amount > 0 ? (openBlock(), createElementBlock("div", _hoisted_88, [
                        _cache[46] || (_cache[46] = createBaseVNode("span", { class: "breakdown-label" }, "优惠金额", -1)),
                        createBaseVNode("span", _hoisted_89, "-¥" + toDisplayString(formatPrice(cancelOrderInfo.value.discount_amount)), 1)
                      ])) : createCommentVNode("", true),
                      cancelOrderInfo.value.balance_amount && cancelOrderInfo.value.balance_amount > 0 ? (openBlock(), createElementBlock("div", _hoisted_90, [
                        _cache[47] || (_cache[47] = createBaseVNode("span", { class: "breakdown-label" }, "余额支付", -1)),
                        createBaseVNode("span", _hoisted_91, "-¥" + toDisplayString(formatPrice(cancelOrderInfo.value.balance_amount)), 1)
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ]),
                  _cache[48] || (_cache[48] = createBaseVNode("div", { class: "cancel-notice" }, [
                    createBaseVNode("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      class: "notice-icon"
                    }, [
                      createBaseVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "#f59e0b",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("path", {
                        d: "M12 16v-4M12 8h.01",
                        stroke: "#f59e0b",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                      })
                    ]),
                    createBaseVNode("span", null, "取消后如使用余额支付，余额将自动退回到您的账户")
                  ], -1))
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_92, [
                createBaseVNode("button", {
                  class: "btn-base btn-medium btn-gradient-green",
                  onClick: _cache[7] || (_cache[7] = ($event) => showCancelModal.value = false)
                }, " 保留订单 "),
                createBaseVNode("button", {
                  class: "btn-base btn-medium btn-danger",
                  onClick: confirmCancelOrder
                }, " 确认取消 ")
              ])
            ])
          ])) : createCommentVNode("", true)
        ])),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          showPaymentModal.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "modal-overlay",
            onClick: _cache[13] || (_cache[13] = ($event) => showPaymentModal.value = false)
          }, [
            createBaseVNode("div", {
              class: "modal-content payment-modal",
              onClick: _cache[12] || (_cache[12] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createBaseVNode("div", _hoisted_93, [
                _cache[50] || (_cache[50] = createBaseVNode("h3", null, "选择支付方式", -1)),
                createBaseVNode("button", {
                  class: "modal-close-btn",
                  onClick: _cache[10] || (_cache[10] = ($event) => showPaymentModal.value = false)
                }, _cache[49] || (_cache[49] = [
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
              createBaseVNode("div", _hoisted_94, [
                paymentOrderInfo.value ? (openBlock(), createElementBlock("div", _hoisted_95, [
                  createBaseVNode("div", _hoisted_96, [
                    createBaseVNode("div", _hoisted_97, [
                      _cache[51] || (_cache[51] = createBaseVNode("span", { class: "summary-label" }, "订单号", -1)),
                      createBaseVNode("span", _hoisted_98, toDisplayString(paymentOrderInfo.value.trade_no), 1)
                    ]),
                    createBaseVNode("div", _hoisted_99, [
                      _cache[52] || (_cache[52] = createBaseVNode("span", { class: "summary-label" }, "订单类型", -1)),
                      createBaseVNode("span", {
                        class: normalizeClass(["order-type-badge", getOrderTypeClass(paymentOrderInfo.value.type)])
                      }, toDisplayString(getOrderTypeText(paymentOrderInfo.value.type)), 3)
                    ]),
                    createBaseVNode("div", _hoisted_100, [
                      _cache[53] || (_cache[53] = createBaseVNode("span", { class: "summary-label" }, "支付金额", -1)),
                      createBaseVNode("span", _hoisted_101, "¥" + toDisplayString(formatPrice(getFinalAmount(paymentOrderInfo.value))), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_102, [
                  _cache[55] || (_cache[55] = createBaseVNode("h4", null, "请选择支付方式", -1)),
                  createBaseVNode("div", _hoisted_103, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(paymentMethods.value, (method) => {
                      var _a2, _b;
                      return openBlock(), createElementBlock("button", {
                        key: method.id,
                        class: normalizeClass(["payment-method-item", { "selected": ((_a2 = selectedPaymentMethod.value) == null ? void 0 : _a2.id) === method.id }]),
                        onClick: ($event) => handlePaymentMethodSelect(method),
                        disabled: paymentLoading.value
                      }, [
                        createBaseVNode("div", _hoisted_105, [
                          method.icon ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: method.icon,
                            alt: method.name
                          }, null, 8, _hoisted_106)) : (openBlock(), createElementBlock("div", _hoisted_107, toDisplayString(method.name.charAt(0)), 1))
                        ]),
                        createBaseVNode("div", _hoisted_108, [
                          createBaseVNode("div", _hoisted_109, toDisplayString(method.name), 1),
                          method.handling_fee_fixed || method.handling_fee_percent ? (openBlock(), createElementBlock("div", _hoisted_110, [
                            method.handling_fee_fixed ? (openBlock(), createElementBlock("span", _hoisted_111, "手续费: ¥" + toDisplayString(formatPrice(method.handling_fee_fixed)), 1)) : createCommentVNode("", true),
                            method.handling_fee_percent ? (openBlock(), createElementBlock("span", _hoisted_112, "手续费: " + toDisplayString(method.handling_fee_percent) + "%", 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ]),
                        ((_b = selectedPaymentMethod.value) == null ? void 0 : _b.id) === method.id ? (openBlock(), createElementBlock("div", _hoisted_113, _cache[54] || (_cache[54] = [
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
                      ], 10, _hoisted_104);
                    }), 128))
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_114, [
                createBaseVNode("button", {
                  class: "btn-base btn-large btn-danger",
                  onClick: _cache[11] || (_cache[11] = ($event) => showPaymentModal.value = false)
                }, " 取消支付 "),
                createBaseVNode("button", {
                  class: "btn-base btn-large btn-primary",
                  onClick: confirmPayment,
                  disabled: !selectedPaymentMethod.value || paymentLoading.value
                }, toDisplayString(paymentLoading.value ? "处理中..." : "确认支付"), 9, _hoisted_115)
              ])
            ])
          ])) : createCommentVNode("", true)
        ])),
        showQRCodeModal.value && !unref(shouldUseMobileLayout)() ? (openBlock(), createBlock(DesktopModal, {
          key: 0,
          show: true,
          title: "扫码支付",
          "max-width": "400px",
          "onUpdate:show": _cache[15] || (_cache[15] = ($event) => showQRCodeModal.value = false),
          onClose: _cache[16] || (_cache[16] = ($event) => showQRCodeModal.value = false)
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_127, [
              createBaseVNode("button", {
                class: "qrcode-btn qrcode-btn-secondary",
                onClick: _cache[14] || (_cache[14] = ($event) => showQRCodeModal.value = false)
              }, " 关闭支付 "),
              createBaseVNode("button", {
                class: "qrcode-btn qrcode-btn-primary",
                onClick: refreshPaymentStatus
              }, " 检查支付状态 ")
            ])
          ]),
          default: withCtx(() => {
            var _a2, _b;
            return [
              createBaseVNode("div", _hoisted_116, [
                createBaseVNode("div", _hoisted_117, [
                  _cache[56] || (_cache[56] = createBaseVNode("span", { class: "amount-label" }, "支付金额", -1)),
                  createBaseVNode("span", _hoisted_118, "¥" + toDisplayString(formatPrice(((_a2 = paymentOrderInfo.value) == null ? void 0 : _a2.total_amount) || 0)), 1)
                ]),
                createBaseVNode("div", _hoisted_119, [
                  _cache[57] || (_cache[57] = createBaseVNode("span", { class: "order-label" }, "订单号", -1)),
                  createBaseVNode("span", _hoisted_120, toDisplayString(((_b = paymentOrderInfo.value) == null ? void 0 : _b.trade_no) || ""), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_121, [
                createBaseVNode("div", _hoisted_122, [
                  qrCodeDataUrl.value ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: qrCodeDataUrl.value,
                    alt: "支付二维码",
                    class: "qrcode-image",
                    onError: handleQrCodeError
                  }, null, 40, _hoisted_123)) : createCommentVNode("", true),
                  !qrCodeDataUrl.value ? (openBlock(), createElementBlock("div", _hoisted_124, " 二维码URL为空 ")) : createCommentVNode("", true),
                  qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_125, [
                    _cache[58] || (_cache[58] = createTextVNode(" 二维码生成失败 ")),
                    createBaseVNode("button", {
                      onClick: retryQrCode,
                      class: "btn-base btn-small btn-warning"
                    }, "重试")
                  ])) : createCommentVNode("", true),
                  paymentQrCode.value && !qrCodeDataUrl.value && !qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_126, " 正在生成二维码... ")) : createCommentVNode("", true)
                ]),
                _cache[60] || (_cache[60] = createBaseVNode("p", { class: "qrcode-tip" }, "请使用支付宝扫描上方二维码完成支付", -1)),
                createBaseVNode("div", { class: "qrcode-fallback" }, [
                  _cache[59] || (_cache[59] = createBaseVNode("p", { class: "fallback-text" }, "如果二维码无法显示，请点击下方链接：", -1)),
                  createBaseVNode("button", {
                    onClick: openPaymentUrl,
                    class: "btn-base btn-medium btn-primary"
                  }, " 打开支付链接 ")
                ])
              ])
            ];
          }),
          _: 1
        })) : createCommentVNode("", true),
        showQRCodeModal.value && unref(shouldUseMobileLayout)() ? (openBlock(), createBlock(MobileSheet, {
          key: 1,
          show: true,
          title: "扫码支付",
          "onUpdate:show": _cache[18] || (_cache[18] = ($event) => showQRCodeModal.value = false),
          onClose: _cache[19] || (_cache[19] = ($event) => showQRCodeModal.value = false)
        }, {
          default: withCtx(() => {
            var _a2, _b;
            return [
              createBaseVNode("div", _hoisted_128, [
                createBaseVNode("div", _hoisted_129, [
                  createBaseVNode("div", _hoisted_130, [
                    _cache[61] || (_cache[61] = createBaseVNode("span", { class: "amount-label" }, "支付金额", -1)),
                    createBaseVNode("span", _hoisted_131, "¥" + toDisplayString(formatPrice(((_a2 = paymentOrderInfo.value) == null ? void 0 : _a2.total_amount) || 0)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_132, [
                    _cache[62] || (_cache[62] = createBaseVNode("span", { class: "order-label" }, "订单号", -1)),
                    createBaseVNode("span", _hoisted_133, toDisplayString(((_b = paymentOrderInfo.value) == null ? void 0 : _b.trade_no) || ""), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_134, [
                  createBaseVNode("div", _hoisted_135, [
                    qrCodeDataUrl.value ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: qrCodeDataUrl.value,
                      alt: "支付二维码",
                      class: "qrcode-image",
                      onError: handleQrCodeError
                    }, null, 40, _hoisted_136)) : createCommentVNode("", true),
                    !qrCodeDataUrl.value ? (openBlock(), createElementBlock("div", _hoisted_137, " 二维码URL为空 ")) : createCommentVNode("", true),
                    qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_138, [
                      _cache[63] || (_cache[63] = createTextVNode(" 二维码生成失败 ")),
                      createBaseVNode("button", {
                        onClick: retryQrCode,
                        class: "btn-base btn-small btn-warning"
                      }, "重试")
                    ])) : createCommentVNode("", true),
                    paymentQrCode.value && !qrCodeDataUrl.value && !qrCodeError.value ? (openBlock(), createElementBlock("div", _hoisted_139, " 正在生成二维码... ")) : createCommentVNode("", true)
                  ]),
                  _cache[64] || (_cache[64] = createBaseVNode("p", { class: "qrcode-tip" }, "请使用支付宝扫描上方二维码完成支付", -1)),
                  createBaseVNode("div", { class: "qrcode-fallback" }, [
                    createBaseVNode("button", {
                      onClick: openPaymentUrl,
                      class: "btn-base btn-large btn-success btn-block"
                    }, " 打开支付宝APP ")
                  ])
                ]),
                createBaseVNode("div", _hoisted_140, [
                  createBaseVNode("button", {
                    class: "qrcode-btn qrcode-btn-secondary qrcode-btn-mobile",
                    onClick: _cache[17] || (_cache[17] = ($event) => showQRCodeModal.value = false)
                  }, " 关闭支付 "),
                  createBaseVNode("button", {
                    class: "qrcode-btn qrcode-btn-primary qrcode-btn-mobile",
                    onClick: refreshPaymentStatus
                  }, " 检查支付状态 ")
                ])
              ])
            ];
          }),
          _: 1
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95571e5b"]]);
export {
  Orders as default
};
