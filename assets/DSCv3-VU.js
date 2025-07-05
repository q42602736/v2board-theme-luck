import { a as apiClient, u as useAuthStore } from "./BBbuoBq5.js";
import { r as ref, c as computed, k as defineComponent, o as onMounted, $ as createElementBlock, N as unref, W as createVNode, V as withCtx, S as resolveComponent, a1 as createStaticVNode, a0 as createBaseVNode, R as createBlock, a3 as createCommentVNode, L as normalizeClass, a2 as toDisplayString, j as createTextVNode, F as Fragment, Q as renderList, U as openBlock } from "./DM1yaN1X.js";
import { u as useMessage } from "./BEq_qS6Y.js";
import { s as shouldUseMobileLayout } from "./CyyeJu8R.js";
import { D as DesktopModal } from "./3u1s8V6K.js";
import { M as MobileSheet } from "./D5SbPLB-.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import "./0I8bmyai.js";
function useInvite() {
  const loading = ref(false);
  const generating = ref(false);
  const inviteStats = ref({});
  const inviteCodes = ref([]);
  const inviteRecords = ref([]);
  const recordFilter = ref("all");
  const showQRModal = ref(false);
  const qrCodeData = ref("");
  const message = useMessage();
  const inviteLink = computed(() => {
    if (inviteCodes.value.length > 0) {
      const code = inviteCodes.value[0].code;
      return `${window.location.origin}/#/register?code=${code}`;
    }
    return "";
  });
  const filterOptions = [
    { label: "全部", value: "all" },
    { label: "已注册", value: "registered" },
    { label: "已付费", value: "paid" },
    { label: "待确认", value: "pending" }
  ];
  const formatMoney = (amount) => {
    return (amount / 100).toFixed(2);
  };
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1e3).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const getStatusText = (status) => {
    const statusMap = {
      0: "待确认",
      1: "已注册",
      2: "已付费"
    };
    return statusMap[status] || "未知";
  };
  const getCommissionAmountClass = (amount) => {
    const balanceInCents = amount || 0;
    const balanceInYuan = balanceInCents / 100;
    if (balanceInYuan === 0) {
      return "amount-zero";
    } else if (balanceInYuan < 100) {
      return "amount-low";
    } else if (balanceInYuan < 500) {
      return "amount-medium";
    } else if (balanceInYuan < 1e3) {
      return "amount-high";
    } else {
      return "amount-excellent";
    }
  };
  const getCommissionCardClass = (amount) => {
    const balanceInCents = amount || 0;
    const balanceInYuan = balanceInCents / 100;
    if (balanceInYuan === 0) {
      return "card-zero";
    } else if (balanceInYuan < 100) {
      return "card-low";
    } else if (balanceInYuan < 500) {
      return "card-medium";
    } else if (balanceInYuan < 1e3) {
      return "card-high";
    } else {
      return "card-excellent";
    }
  };
  const loadInviteStats = async () => {
    try {
      const response = await apiClient.getInviteCodes();
      if (response && response.codes && response.stat) {
        inviteCodes.value = response.codes;
        inviteStats.value = {
          total_users: response.stat[0] || 0,
          valid_users: response.stat[0] || 0,
          // 使用已注册用户数
          commission_balance: response.stat[4] || 0,
          // 可用佣金
          total_commission: response.stat[1] || 0,
          // 有效的佣金（累计佣金）
          pending_commission: response.stat[2] || 0,
          // 确认中的佣金
          commission_rate: response.stat[3] || 0
          // 佣金比例
        };
      } else {
        throw new Error("API响应格式不正确");
      }
    } catch (error) {
      console.error("加载邀请数据失败:", error);
      inviteCodes.value = [{
        id: 1,
        user_id: 1,
        code: "DEMO123",
        status: 0,
        pv: 0,
        created_at: Date.now() / 1e3,
        updated_at: Date.now() / 1e3
      }];
      inviteStats.value = {
        total_users: 15,
        valid_users: 12,
        commission_balance: 15e4,
        // 1500.00元 - 测试绿色显示
        total_commission: 256e3
        // 2560.00元
      };
    }
  };
  const loadInviteCodes = async () => {
    await loadInviteStats();
  };
  const loadInviteRecords = async () => {
    loading.value = true;
    try {
      const records = await apiClient.getInviteRecords(recordFilter.value);
      inviteRecords.value = Array.isArray(records) ? records : [];
    } catch (error) {
      console.error("加载邀请记录失败:", error);
      inviteRecords.value = [
        {
          id: 1,
          email: "user1@example.com",
          status: 2,
          commission_amount: 1500,
          // 15.00元
          created_at: Date.now() / 1e3 - 3600
        },
        {
          id: 2,
          email: "user2@example.com",
          status: 1,
          commission_amount: 0,
          created_at: Date.now() / 1e3 - 7200
        },
        {
          id: 3,
          email: "user3@example.com",
          status: 0,
          commission_amount: 0,
          created_at: Date.now() / 1e3 - 10800
        }
      ];
    } finally {
      loading.value = false;
    }
  };
  const generateInviteCode = async () => {
    generating.value = true;
    try {
      const success = await apiClient.generateInviteCode();
      if (success) {
        await loadInviteStats();
        message.success("邀请码生成成功");
      } else {
        message.error("生成邀请码失败");
      }
    } catch (error) {
      console.error("生成邀请码失败:", error);
      const newCode = {
        id: Date.now(),
        user_id: 1,
        code: Math.random().toString(36).substring(2, 8).toUpperCase(),
        status: 0,
        pv: 0,
        created_at: Date.now() / 1e3,
        updated_at: Date.now() / 1e3
      };
      inviteCodes.value.unshift(newCode);
      {
        message.error("生成邀请码失败，请稍后重试");
      }
    } finally {
      generating.value = false;
    }
  };
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      message.success("复制成功");
    } catch (error) {
      message.error("复制失败");
    }
  };
  const copyInviteLink = async (code) => {
    const link = `${window.location.origin}/#/register?code=${code}`;
    try {
      await navigator.clipboard.writeText(link);
      message.success("邀请链接复制成功");
    } catch (error) {
      message.error("复制失败");
    }
  };
  const selectAll = (event) => {
    const input = event.target;
    input.select();
  };
  const shareToWeChat = () => {
    message.info("请复制链接手动分享到微信");
  };
  const shareToQQ = () => {
    const url = encodeURIComponent(inviteLink.value);
    const title = encodeURIComponent("邀请您注册使用我们的服务");
    window.open(`https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}`);
  };
  const generateQRCode = (code) => {
    const inviteCode = code || (inviteCodes.value.length > 0 ? inviteCodes.value[0].code : "");
    if (!inviteCode) {
      message.error("没有可用的邀请码");
      return;
    }
    const link = `${window.location.origin}/#/register?code=${inviteCode}`;
    qrCodeData.value = link;
    showQRModal.value = true;
  };
  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = qrCodeData.value;
    link.download = "invite-qrcode.png";
    link.click();
  };
  const transferCommission = async (amount) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    try {
      const result = await apiClient.transferCommission(amount);
      return { success: true, message: "划转成功" };
    } catch (error) {
      console.error("佣金划转失败:", error);
      if ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) {
        throw new Error(error.response.data.message);
      } else if (((_c = error.response) == null ? void 0 : _c.status) === 500) {
        if ((_e = (_d = error.response.data) == null ? void 0 : _d.message) == null ? void 0 : _e.includes("Insufficient commission balance")) {
          throw new Error("佣金余额不足");
        } else if ((_g = (_f = error.response.data) == null ? void 0 : _f.message) == null ? void 0 : _g.includes("Transfer failed")) {
          throw new Error("划转失败，请稍后重试");
        } else if ((_i = (_h = error.response.data) == null ? void 0 : _h.message) == null ? void 0 : _i.includes("The user does not exist")) {
          throw new Error("用户不存在");
        }
      }
      throw error;
    }
  };
  const withdrawCommission = async (withdrawMethod, withdrawAccount) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    try {
      const result = await apiClient.withdrawCommissionTicket({
        withdraw_method: withdrawMethod,
        withdraw_account: withdrawAccount
      });
      return { success: true, message: "提现工单已创建，请等待管理员处理" };
    } catch (error) {
      console.error("佣金提现失败:", error);
      if ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) {
        throw new Error(error.response.data.message);
      } else if (((_c = error.response) == null ? void 0 : _c.status) === 500) {
        if ((_e = (_d = error.response.data) == null ? void 0 : _d.message) == null ? void 0 : _e.includes("not_support_withdraw")) {
          throw new Error("当前不支持提现功能");
        } else if ((_g = (_f = error.response.data) == null ? void 0 : _f.message) == null ? void 0 : _g.includes("Unsupported withdrawal method")) {
          throw new Error("不支持的提现方式");
        } else if ((_i = (_h = error.response.data) == null ? void 0 : _h.message) == null ? void 0 : _i.includes("minimum withdrawal commission")) {
          throw new Error("未达到最低提现金额要求");
        }
      }
      throw error;
    }
  };
  const getWithdrawConfig = async () => {
    try {
      const config = await apiClient.getWithdrawConfig();
      return config;
    } catch (error) {
      console.error("获取提现配置失败:", error);
      throw error;
    }
  };
  const getQRCodeUrl = (link) => {
    if (!link) return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(link)}&format=png&ecc=M`;
  };
  const handleQRError = (event, qrCodeData2, message2) => {
    const img = event.target;
    if (img.src.includes("qrserver.com")) {
      img.src = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURIComponent(qrCodeData2)}&choe=UTF-8`;
    } else {
      console.error("二维码生成失败");
      message2.error("二维码生成失败，请稍后重试");
    }
  };
  const setTransferAmount = (amount, transferAmount, commissionBalance, formatMoney2) => {
    const maxAmount = parseFloat(formatMoney2(commissionBalance || 0));
    if (amount > maxAmount) {
      transferAmount.value = maxAmount.toString();
    } else {
      transferAmount.value = amount.toString();
    }
  };
  const setAllAmount = (transferAmount, commissionBalance, formatMoney2) => {
    const maxAmount = parseFloat(formatMoney2(commissionBalance || 0));
    transferAmount.value = maxAmount.toString();
  };
  const validateTransferAmount = (transferAmount, commissionBalance, formatMoney2, message2) => {
    if (!transferAmount || parseFloat(transferAmount) <= 0) {
      message2.error("请输入有效的划转金额");
      return false;
    }
    const amount = parseFloat(transferAmount);
    const maxAmount = parseFloat(formatMoney2(commissionBalance || 0));
    if (amount > maxAmount) {
      message2.error("划转金额不能超过当前余额");
      return false;
    }
    return true;
  };
  const executeTransfer = async (transferAmount, transferCommission2, inviteStats2, authStore, message2, showTransferModal, showConfirmModal, transferAmountRef) => {
    var _a, _b;
    const amount = parseFloat(transferAmount);
    try {
      const transferAmountInCents = amount * 100;
      await transferCommission2(transferAmountInCents);
      inviteStats2.value.commission_balance -= transferAmountInCents;
      if (authStore.user) {
        authStore.user.balance += transferAmountInCents;
      }
      message2.success(`成功划转 ¥${amount.toFixed(2)} 到账户余额`);
      showTransferModal.value = false;
      showConfirmModal.value = false;
      transferAmountRef.value = "";
      await authStore.fetchUserInfo();
    } catch (error) {
      console.error("划转失败:", error);
      if (error.message) {
        message2.error(error.message);
      } else if (((_a = error.response) == null ? void 0 : _a.status) === 400) {
        message2.error("划转金额无效或余额不足");
      } else if (((_b = error.response) == null ? void 0 : _b.status) === 429) {
        message2.error("操作过于频繁，请稍后重试");
      } else {
        message2.error("划转失败，请稍后重试");
      }
      throw error;
    }
  };
  const createWithdrawMethodOptions = (withdrawMethods) => {
    return withdrawMethods.map((method) => ({
      label: method,
      value: method
    }));
  };
  const openWithdrawModal = async (getWithdrawConfig2, withdrawConfig, withdrawMethods, showWithdrawModal, message2) => {
    var _a, _b;
    try {
      const config = await getWithdrawConfig2();
      withdrawConfig.value = config;
      withdrawMethods.value = config.withdraw_methods || [];
      if (config.withdraw_close) {
        message2.error("当前不支持提现功能");
        return;
      }
      if (withdrawMethods.value.length === 0) {
        message2.error("暂无可用的提现方式");
        return;
      }
      showWithdrawModal.value = true;
    } catch (error) {
      console.error("获取提现配置失败:", error);
      if (((_a = error.response) == null ? void 0 : _a.status) === 401) {
        message2.error("请先登录");
      } else if (((_b = error.response) == null ? void 0 : _b.status) === 403) {
        message2.error("没有权限访问");
      } else {
        message2.error("获取提现配置失败，请稍后重试");
      }
    }
  };
  const submitWithdraw = async (withdrawMethod, withdrawAccount, withdrawCommission2, showWithdrawModal, withdrawMethodRef, withdrawAccountRef, message2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (!withdrawMethod) {
      message2.error("请选择提现方式");
      return false;
    }
    if (!withdrawAccount) {
      message2.error("请输入提现账号");
      return false;
    }
    try {
      await withdrawCommission2(withdrawMethod, withdrawAccount);
      message2.success("提现工单已创建，请在工单系统中查看处理进度");
      showWithdrawModal.value = false;
      withdrawMethodRef.value = "";
      withdrawAccountRef.value = "";
      return true;
    } catch (error) {
      console.error("提现申请失败:", error);
      if (error.message) {
        message2.error(error.message);
      } else if ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) {
        message2.error(error.response.data.message);
      } else if (((_c = error.response) == null ? void 0 : _c.status) === 500) {
        if ((_e = (_d = error.response.data) == null ? void 0 : _d.message) == null ? void 0 : _e.includes("not_support_withdraw")) {
          message2.error("当前不支持提现功能");
        } else if ((_g = (_f = error.response.data) == null ? void 0 : _f.message) == null ? void 0 : _g.includes("Unsupported withdrawal method")) {
          message2.error("不支持的提现方式");
        } else if ((_i = (_h = error.response.data) == null ? void 0 : _h.message) == null ? void 0 : _i.includes("minimum withdrawal commission")) {
          message2.error("未达到最低提现金额要求");
        } else {
          message2.error("提现申请失败，请稍后重试");
        }
      } else {
        message2.error("提现申请失败，请稍后重试");
      }
      return false;
    }
  };
  const initInvite = () => {
    loadInviteStats();
    loadInviteCodes();
    loadInviteRecords();
  };
  return {
    // 响应式数据
    loading,
    generating,
    inviteStats,
    inviteCodes,
    inviteRecords,
    recordFilter,
    showQRModal,
    qrCodeData,
    // 计算属性
    inviteLink,
    filterOptions,
    // 工具函数
    formatMoney,
    formatDate,
    getStatusText,
    getCommissionAmountClass,
    getCommissionCardClass,
    // API函数
    loadInviteStats,
    loadInviteCodes,
    loadInviteRecords,
    generateInviteCode,
    // 交互函数
    copyToClipboard,
    copyInviteLink,
    selectAll,
    shareToWeChat,
    shareToQQ,
    generateQRCode,
    downloadQRCode,
    transferCommission,
    withdrawCommission,
    getWithdrawConfig,
    // 二维码函数
    getQRCodeUrl,
    handleQRError,
    // 划转函数
    setTransferAmount,
    setAllAmount,
    validateTransferAmount,
    executeTransfer,
    // 提现函数
    createWithdrawMethodOptions,
    openWithdrawModal,
    submitWithdraw,
    // 初始化函数
    initInvite
  };
}
const _hoisted_1 = { class: "invite-page" };
const _hoisted_2 = {
  key: 0,
  class: "loading-state"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "commission-amount" };
const _hoisted_5 = { class: "commission-actions" };
const _hoisted_6 = { class: "stats-grid" };
const _hoisted_7 = { class: "stat-card" };
const _hoisted_8 = { class: "stat-value" };
const _hoisted_9 = { class: "stat-card" };
const _hoisted_10 = { class: "stat-value" };
const _hoisted_11 = { class: "stat-card" };
const _hoisted_12 = { class: "stat-value" };
const _hoisted_13 = { class: "stat-label" };
const _hoisted_14 = { class: "stat-card" };
const _hoisted_15 = { class: "stat-value" };
const _hoisted_16 = { class: "invite-codes-section" };
const _hoisted_17 = { class: "section-header" };
const _hoisted_18 = {
  key: 0,
  class: "codes-grid"
};
const _hoisted_19 = { class: "code-header" };
const _hoisted_20 = { class: "code-status" };
const _hoisted_21 = {
  key: 0,
  class: "status-active"
};
const _hoisted_22 = {
  key: 1,
  class: "status-inactive"
};
const _hoisted_23 = { class: "code-content" };
const _hoisted_24 = { class: "code-text" };
const _hoisted_25 = { class: "code-meta" };
const _hoisted_26 = { class: "code-actions" };
const _hoisted_27 = {
  key: 1,
  class: "empty-card"
};
const _hoisted_28 = { class: "commission-records-section" };
const _hoisted_29 = {
  key: 0,
  class: "records-grid"
};
const _hoisted_30 = { class: "record-header" };
const _hoisted_31 = { class: "record-amount" };
const _hoisted_32 = { class: "record-content" };
const _hoisted_33 = { class: "record-time" };
const _hoisted_34 = {
  key: 1,
  class: "empty-card"
};
const _hoisted_35 = { class: "qr-content" };
const _hoisted_36 = {
  key: 0,
  class: "qr-image"
};
const _hoisted_37 = { class: "qr-image-container" };
const _hoisted_38 = ["src"];
const _hoisted_39 = { class: "qr-footer" };
const _hoisted_40 = { class: "qr-content mobile" };
const _hoisted_41 = {
  key: 0,
  class: "qr-image"
};
const _hoisted_42 = { class: "qr-image-container" };
const _hoisted_43 = ["src"];
const _hoisted_44 = { class: "qr-footer mobile" };
const _hoisted_45 = { class: "transfer-content" };
const _hoisted_46 = { class: "transfer-info" };
const _hoisted_47 = { class: "balance-display" };
const _hoisted_48 = { class: "balance-amount" };
const _hoisted_49 = { class: "transfer-form" };
const _hoisted_50 = { class: "form-item" };
const _hoisted_51 = { class: "amount-input-group" };
const _hoisted_52 = { class: "quick-amounts" };
const _hoisted_53 = { class: "transfer-footer" };
const _hoisted_54 = { class: "transfer-content mobile" };
const _hoisted_55 = { class: "transfer-info" };
const _hoisted_56 = { class: "balance-display" };
const _hoisted_57 = { class: "balance-amount" };
const _hoisted_58 = { class: "transfer-form" };
const _hoisted_59 = { class: "form-item" };
const _hoisted_60 = { class: "amount-input-group" };
const _hoisted_61 = { class: "quick-amounts" };
const _hoisted_62 = { class: "transfer-footer mobile" };
const _hoisted_63 = { class: "confirm-content" };
const _hoisted_64 = { class: "confirm-info" };
const _hoisted_65 = { class: "confirm-details" };
const _hoisted_66 = { class: "transfer-summary" };
const _hoisted_67 = { class: "amount-highlight" };
const _hoisted_68 = { class: "confirm-footer" };
const _hoisted_69 = { class: "confirm-content mobile" };
const _hoisted_70 = { class: "confirm-info" };
const _hoisted_71 = { class: "confirm-details" };
const _hoisted_72 = { class: "transfer-summary" };
const _hoisted_73 = { class: "amount-highlight" };
const _hoisted_74 = { class: "confirm-footer mobile" };
const _hoisted_75 = { class: "withdraw-content" };
const _hoisted_76 = { class: "withdraw-form" };
const _hoisted_77 = { class: "form-item" };
const _hoisted_78 = { class: "form-item" };
const _hoisted_79 = { class: "withdraw-footer" };
const _hoisted_80 = { class: "withdraw-content mobile" };
const _hoisted_81 = { class: "withdraw-form" };
const _hoisted_82 = { class: "form-item" };
const _hoisted_83 = { class: "form-item" };
const _hoisted_84 = { class: "withdraw-footer mobile" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Invite",
  setup(__props) {
    const isMobileLayout = computed(() => shouldUseMobileLayout());
    const message = useMessage();
    const authStore = useAuthStore();
    const showTransferModal = ref(false);
    const showConfirmModal = ref(false);
    const transferAmount = ref("");
    const transferring = ref(false);
    const showWithdrawModal = ref(false);
    const withdrawMethod = ref("");
    const withdrawAccount = ref("");
    const withdrawing = ref(false);
    const withdrawMethods = ref([]);
    const withdrawConfig = ref({});
    const {
      // 响应式数据
      loading,
      generating,
      inviteStats,
      inviteCodes,
      inviteRecords,
      showQRModal,
      qrCodeData,
      // 工具函数
      formatMoney,
      formatDate,
      getCommissionAmountClass,
      getCommissionCardClass,
      generateInviteCode,
      // 交互函数
      copyToClipboard,
      copyInviteLink,
      generateQRCode,
      downloadQRCode,
      transferCommission,
      withdrawCommission,
      getWithdrawConfig,
      // 二维码函数
      getQRCodeUrl,
      handleQRError,
      // 划转函数
      setTransferAmount,
      setAllAmount,
      validateTransferAmount,
      executeTransfer,
      // 提现函数
      createWithdrawMethodOptions,
      openWithdrawModal,
      submitWithdraw,
      // 初始化函数
      initInvite
    } = useInvite();
    const handleQRErrorWrapper = (event) => {
      handleQRError(event, qrCodeData.value, message);
    };
    const setTransferAmountWrapper = (amount) => {
      setTransferAmount(amount, transferAmount, inviteStats.value.commission_balance, formatMoney);
    };
    const setAllAmountWrapper = () => {
      setAllAmount(transferAmount, inviteStats.value.commission_balance, formatMoney);
    };
    const confirmTransfer = () => {
      if (validateTransferAmount(transferAmount.value, inviteStats.value.commission_balance, formatMoney, message)) {
        showConfirmModal.value = true;
      }
    };
    const executeTransferWrapper = async () => {
      transferring.value = true;
      try {
        await executeTransfer(
          transferAmount.value,
          transferCommission,
          inviteStats,
          authStore,
          message,
          showTransferModal,
          showConfirmModal,
          transferAmount
        );
      } catch (error) {
      } finally {
        transferring.value = false;
      }
    };
    const withdrawMethodOptions = computed(() => {
      return createWithdrawMethodOptions(withdrawMethods.value);
    });
    const openWithdrawModalWrapper = async () => {
      await openWithdrawModal(
        getWithdrawConfig,
        withdrawConfig,
        withdrawMethods,
        showWithdrawModal,
        message
      );
    };
    const submitWithdrawWrapper = async () => {
      withdrawing.value = true;
      try {
        await submitWithdraw(
          withdrawMethod.value,
          withdrawAccount.value,
          withdrawCommission,
          showWithdrawModal,
          withdrawMethod,
          withdrawAccount,
          message
        );
      } catch (error) {
      } finally {
        withdrawing.value = false;
      }
    };
    onMounted(async () => {
      try {
        await Promise.all([
          authStore.fetchUserInfo(),
          // 强制刷新用户信息
          initInvite()
          // 初始化邀请数据
        ]);
      } catch (error) {
        console.error("邀请页面初始化失败:", error);
        message.error("页面加载失败，请刷新重试");
      }
    });
    return (_ctx, _cache) => {
      const _component_n_spin = resolveComponent("n-spin");
      const _component_n_button = resolveComponent("n-button");
      const _component_n_tooltip = resolveComponent("n-tooltip");
      const _component_n_input = resolveComponent("n-input");
      const _component_n_select = resolveComponent("n-select");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_component_n_spin, { size: "large" }, {
            description: withCtx(() => _cache[29] || (_cache[29] = [
              createTextVNode("正在加载邀请数据...")
            ])),
            _: 1
          })
        ])) : (openBlock(), createElementBlock("div", _hoisted_3, [
          _cache[110] || (_cache[110] = createStaticVNode('<div class="page-header" data-v-18b5b94b><h1 data-v-18b5b94b><svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="title-icon" data-v-18b5b94b><path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-18b5b94b></path><path d="M12 14C16.4183 14 20 17.5817 20 22H4C4 17.5817 7.58172 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-18b5b94b></path><path d="M19 8V13M16.5 10.5L21.5 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-18b5b94b></path></svg> 我的邀请 </h1></div>', 1)),
          createBaseVNode("div", {
            class: normalizeClass(["commission-card", unref(getCommissionCardClass)(unref(inviteStats).commission_balance)])
          }, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("span", {
                class: normalizeClass(["amount", unref(getCommissionAmountClass)(unref(inviteStats).commission_balance)])
              }, toDisplayString(unref(formatMoney)(unref(inviteStats).commission_balance || 0)), 3),
              _cache[30] || (_cache[30] = createBaseVNode("span", { class: "currency" }, "CNY", -1))
            ]),
            _cache[33] || (_cache[33] = createBaseVNode("div", { class: "commission-label" }, "当前剩余佣金", -1)),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_n_button, {
                type: "primary",
                class: "action-btn",
                onClick: _cache[0] || (_cache[0] = ($event) => showTransferModal.value = true)
              }, {
                default: withCtx(() => _cache[31] || (_cache[31] = [
                  createTextVNode(" 划转到余额 ")
                ])),
                _: 1,
                __: [31]
              }),
              createVNode(_component_n_button, {
                type: "default",
                class: "action-btn",
                onClick: openWithdrawModalWrapper
              }, {
                default: withCtx(() => _cache[32] || (_cache[32] = [
                  createTextVNode(" 推广佣金提现 ")
                ])),
                _: 1,
                __: [32]
              })
            ])
          ], 2),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              _cache[34] || (_cache[34] = createBaseVNode("div", { class: "stat-icon" }, [
                createBaseVNode("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none"
                }, [
                  createBaseVNode("path", {
                    d: "M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }),
                  createBaseVNode("path", {
                    d: "M12 14C16.4183 14 20 17.5817 20 22H4C4 17.5817 7.58172 14 12 14Z",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  })
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_8, toDisplayString(unref(inviteStats).total_users || 0), 1),
              _cache[35] || (_cache[35] = createBaseVNode("div", { class: "stat-label" }, "已注册用户", -1))
            ]),
            createBaseVNode("div", _hoisted_9, [
              _cache[36] || (_cache[36] = createBaseVNode("div", { class: "stat-icon" }, [
                createBaseVNode("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none"
                }, [
                  createBaseVNode("path", {
                    d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  })
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_10, toDisplayString(unref(inviteStats).commission_rate || 0) + "%", 1),
              _cache[37] || (_cache[37] = createBaseVNode("div", { class: "stat-label" }, "佣金比例", -1))
            ]),
            createBaseVNode("div", _hoisted_11, [
              _cache[41] || (_cache[41] = createBaseVNode("div", { class: "stat-icon" }, [
                createBaseVNode("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none"
                }, [
                  createBaseVNode("path", {
                    d: "M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  })
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_12, "¥" + toDisplayString(unref(formatMoney)(unref(inviteStats).pending_commission || 0)), 1),
              createBaseVNode("div", _hoisted_13, [
                _cache[40] || (_cache[40] = createTextVNode(" 确认中佣金 ")),
                createVNode(_component_n_tooltip, {
                  trigger: "hover",
                  placement: "top"
                }, {
                  trigger: withCtx(() => _cache[38] || (_cache[38] = [
                    createBaseVNode("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      class: "info-tooltip-icon"
                    }, [
                      createBaseVNode("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("path", {
                        d: "M12 16v-4M12 8h.01",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ], -1)
                  ])),
                  default: withCtx(() => [
                    _cache[39] || (_cache[39] = createTextVNode(" 佣金将会在确认后到达您的佣金账户。 "))
                  ]),
                  _: 1,
                  __: [39]
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              _cache[42] || (_cache[42] = createStaticVNode('<div class="stat-icon" data-v-18b5b94b><svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-v-18b5b94b><path d="M12 2L3.09 8.26L12 14L20.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" data-v-18b5b94b></path><path d="M3.09 15.74L12 22L20.91 15.74" stroke="currentColor" stroke-width="2" data-v-18b5b94b></path><path d="M3.09 8.26L12 14.52L20.91 8.26" stroke="currentColor" stroke-width="2" data-v-18b5b94b></path></svg></div>', 1)),
              createBaseVNode("div", _hoisted_15, "¥" + toDisplayString(unref(formatMoney)(unref(inviteStats).total_commission || 0)), 1),
              _cache[43] || (_cache[43] = createBaseVNode("div", { class: "stat-label" }, "累计佣金", -1))
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              _cache[45] || (_cache[45] = createBaseVNode("h3", null, "邀请码管理", -1)),
              createVNode(_component_n_button, {
                type: "primary",
                onClick: unref(generateInviteCode),
                loading: unref(generating),
                class: "generate-btn"
              }, {
                default: withCtx(() => _cache[44] || (_cache[44] = [
                  createTextVNode(" 生成邀请码 ")
                ])),
                _: 1,
                __: [44]
              }, 8, ["onClick", "loading"])
            ]),
            unref(inviteCodes).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_18, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(inviteCodes), (code) => {
                return openBlock(), createElementBlock("div", {
                  key: code.id,
                  class: "code-card"
                }, [
                  createBaseVNode("div", _hoisted_19, [
                    _cache[46] || (_cache[46] = createBaseVNode("div", { class: "code-icon" }, [
                      createBaseVNode("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none"
                      }, [
                        createBaseVNode("rect", {
                          x: "3",
                          y: "3",
                          width: "18",
                          height: "18",
                          rx: "2",
                          ry: "2",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }),
                        createBaseVNode("path", {
                          d: "M7 12h10M12 7v10",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        })
                      ])
                    ], -1)),
                    createBaseVNode("div", _hoisted_20, [
                      code.status === 0 ? (openBlock(), createElementBlock("span", _hoisted_21, "有效")) : (openBlock(), createElementBlock("span", _hoisted_22, "已禁用"))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("div", _hoisted_24, toDisplayString(code.code), 1),
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("span", null, "访问量: " + toDisplayString(code.pv || 0), 1),
                      createBaseVNode("span", null, toDisplayString(unref(formatDate)(code.created_at)), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_26, [
                    createVNode(_component_n_button, {
                      size: "small",
                      onClick: ($event) => unref(copyInviteLink)(code.code),
                      type: "primary",
                      class: "action-btn-small"
                    }, {
                      default: withCtx(() => _cache[47] || (_cache[47] = [
                        createTextVNode(" 复制链接 ")
                      ])),
                      _: 2,
                      __: [47]
                    }, 1032, ["onClick"]),
                    createVNode(_component_n_button, {
                      size: "small",
                      onClick: ($event) => unref(generateQRCode)(code.code),
                      type: "tertiary",
                      class: "action-btn-small"
                    }, {
                      default: withCtx(() => _cache[48] || (_cache[48] = [
                        createTextVNode(" 二维码 ")
                      ])),
                      _: 2,
                      __: [48]
                    }, 1032, ["onClick"])
                  ])
                ]);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_27, _cache[49] || (_cache[49] = [
              createStaticVNode('<div class="empty-icon" data-v-18b5b94b><svg width="48" height="48" viewBox="0 0 24 24" fill="none" data-v-18b5b94b><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-18b5b94b></rect><path d="M9 9h6v6H9z" stroke="currentColor" stroke-width="2" data-v-18b5b94b></path></svg></div><p data-v-18b5b94b>暂无邀请码</p><p class="empty-tip" data-v-18b5b94b>点击上方按钮生成邀请码</p>', 3)
            ])))
          ]),
          createBaseVNode("div", _hoisted_28, [
            _cache[53] || (_cache[53] = createBaseVNode("h3", null, "佣金发放记录", -1)),
            unref(inviteRecords).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_29, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(inviteRecords), (record) => {
                return openBlock(), createElementBlock("div", {
                  key: record.id,
                  class: "record-card"
                }, [
                  createBaseVNode("div", _hoisted_30, [
                    _cache[50] || (_cache[50] = createBaseVNode("div", { class: "record-icon" }, [
                      createBaseVNode("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none"
                      }, [
                        createBaseVNode("circle", {
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }),
                        createBaseVNode("path", {
                          d: "M9 12l2 2 4-4",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ])
                    ], -1)),
                    createBaseVNode("div", _hoisted_31, "¥" + toDisplayString(unref(formatMoney)(record.get_amount || record.commission_amount)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_32, [
                    createBaseVNode("div", _hoisted_33, toDisplayString(unref(formatDate)(record.created_at)), 1),
                    _cache[51] || (_cache[51] = createBaseVNode("div", { class: "record-source" }, "邀请佣金", -1))
                  ])
                ]);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_34, _cache[52] || (_cache[52] = [
              createStaticVNode('<div class="empty-icon" data-v-18b5b94b><svg width="48" height="48" viewBox="0 0 24 24" fill="none" data-v-18b5b94b><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" data-v-18b5b94b></circle><path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-18b5b94b></path></svg></div><p data-v-18b5b94b>暂无佣金记录</p><p class="empty-tip" data-v-18b5b94b>邀请好友注册付费后获得佣金</p>', 3)
            ])))
          ]),
          !isMobileLayout.value ? (openBlock(), createBlock(DesktopModal, {
            key: 0,
            show: unref(showQRModal),
            "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showQRModal.value = $event),
            title: "邀请链接二维码",
            width: 480
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_39, [
                createVNode(_component_n_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(copyToClipboard)(unref(qrCodeData))),
                  type: "tertiary"
                }, {
                  default: withCtx(() => _cache[56] || (_cache[56] = [
                    createTextVNode(" 复制链接 ")
                  ])),
                  _: 1,
                  __: [56]
                }),
                createVNode(_component_n_button, {
                  onClick: unref(downloadQRCode),
                  type: "primary"
                }, {
                  default: withCtx(() => _cache[57] || (_cache[57] = [
                    createTextVNode(" 下载二维码 ")
                  ])),
                  _: 1,
                  __: [57]
                }, 8, ["onClick"])
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_35, [
                _cache[54] || (_cache[54] = createBaseVNode("div", { class: "qr-header" }, [
                  createBaseVNode("div", { class: "qr-header-icon" }, [
                    createBaseVNode("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createBaseVNode("rect", {
                        x: "3",
                        y: "3",
                        width: "7",
                        height: "7",
                        rx: "1",
                        stroke: "url(#qrGradient)",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("rect", {
                        x: "14",
                        y: "3",
                        width: "7",
                        height: "7",
                        rx: "1",
                        stroke: "url(#qrGradient)",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("rect", {
                        x: "3",
                        y: "14",
                        width: "7",
                        height: "7",
                        rx: "1",
                        stroke: "url(#qrGradient)",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("rect", {
                        x: "5",
                        y: "5",
                        width: "3",
                        height: "3",
                        fill: "url(#qrGradient)"
                      }),
                      createBaseVNode("rect", {
                        x: "16",
                        y: "5",
                        width: "3",
                        height: "3",
                        fill: "url(#qrGradient)"
                      }),
                      createBaseVNode("rect", {
                        x: "5",
                        y: "16",
                        width: "3",
                        height: "3",
                        fill: "url(#qrGradient)"
                      }),
                      createBaseVNode("rect", {
                        x: "14",
                        y: "14",
                        width: "2",
                        height: "2",
                        fill: "url(#qrGradient)"
                      }),
                      createBaseVNode("rect", {
                        x: "18",
                        y: "14",
                        width: "2",
                        height: "2",
                        fill: "url(#qrGradient)"
                      }),
                      createBaseVNode("rect", {
                        x: "16",
                        y: "18",
                        width: "2",
                        height: "2",
                        fill: "url(#qrGradient)"
                      }),
                      createBaseVNode("defs", null, [
                        createBaseVNode("linearGradient", {
                          id: "qrGradient",
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "100%"
                        }, [
                          createBaseVNode("stop", {
                            offset: "0%",
                            style: { "stop-color": "#34C759" }
                          }),
                          createBaseVNode("stop", {
                            offset: "50%",
                            style: { "stop-color": "#30B0C7" }
                          }),
                          createBaseVNode("stop", {
                            offset: "100%",
                            style: { "stop-color": "#007AFF" }
                          })
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("h3", { class: "qr-header-title" }, "邀请链接二维码"),
                  createBaseVNode("p", { class: "qr-header-subtitle" }, "分享给好友，获得推广佣金")
                ], -1)),
                unref(qrCodeData) ? (openBlock(), createElementBlock("div", _hoisted_36, [
                  createBaseVNode("div", _hoisted_37, [
                    createBaseVNode("img", {
                      src: unref(getQRCodeUrl)(unref(qrCodeData)),
                      alt: "邀请二维码",
                      onError: handleQRErrorWrapper
                    }, null, 40, _hoisted_38)
                  ])
                ])) : createCommentVNode("", true),
                _cache[55] || (_cache[55] = createBaseVNode("div", { class: "qr-info" }, [
                  createBaseVNode("p", { class: "qr-description" }, "扫描二维码或保存图片分享给好友")
                ], -1))
              ])
            ]),
            _: 1
          }, 8, ["show"])) : createCommentVNode("", true),
          isMobileLayout.value ? (openBlock(), createBlock(MobileSheet, {
            key: 1,
            show: unref(showQRModal),
            "onUpdate:show": _cache[4] || (_cache[4] = ($event) => showQRModal.value = $event),
            title: "邀请链接二维码"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_40, [
                _cache[60] || (_cache[60] = createBaseVNode("div", { class: "qr-header" }, [
                  createBaseVNode("div", { class: "qr-header-icon" }, [
                    createBaseVNode("svg", {
                      width: "28",
                      height: "28",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createBaseVNode("rect", {
                        x: "3",
                        y: "3",
                        width: "7",
                        height: "7",
                        rx: "1",
                        stroke: "url(#qrGradientMobile)",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("rect", {
                        x: "14",
                        y: "3",
                        width: "7",
                        height: "7",
                        rx: "1",
                        stroke: "url(#qrGradientMobile)",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("rect", {
                        x: "3",
                        y: "14",
                        width: "7",
                        height: "7",
                        rx: "1",
                        stroke: "url(#qrGradientMobile)",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("rect", {
                        x: "5",
                        y: "5",
                        width: "3",
                        height: "3",
                        fill: "url(#qrGradientMobile)"
                      }),
                      createBaseVNode("rect", {
                        x: "16",
                        y: "5",
                        width: "3",
                        height: "3",
                        fill: "url(#qrGradientMobile)"
                      }),
                      createBaseVNode("rect", {
                        x: "5",
                        y: "16",
                        width: "3",
                        height: "3",
                        fill: "url(#qrGradientMobile)"
                      }),
                      createBaseVNode("rect", {
                        x: "14",
                        y: "14",
                        width: "2",
                        height: "2",
                        fill: "url(#qrGradientMobile)"
                      }),
                      createBaseVNode("rect", {
                        x: "18",
                        y: "14",
                        width: "2",
                        height: "2",
                        fill: "url(#qrGradientMobile)"
                      }),
                      createBaseVNode("rect", {
                        x: "16",
                        y: "18",
                        width: "2",
                        height: "2",
                        fill: "url(#qrGradientMobile)"
                      }),
                      createBaseVNode("defs", null, [
                        createBaseVNode("linearGradient", {
                          id: "qrGradientMobile",
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "100%"
                        }, [
                          createBaseVNode("stop", {
                            offset: "0%",
                            style: { "stop-color": "#34C759" }
                          }),
                          createBaseVNode("stop", {
                            offset: "50%",
                            style: { "stop-color": "#30B0C7" }
                          }),
                          createBaseVNode("stop", {
                            offset: "100%",
                            style: { "stop-color": "#007AFF" }
                          })
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("h3", { class: "qr-header-title" }, "邀请链接二维码"),
                  createBaseVNode("p", { class: "qr-header-subtitle" }, "分享给好友，获得推广佣金")
                ], -1)),
                unref(qrCodeData) ? (openBlock(), createElementBlock("div", _hoisted_41, [
                  createBaseVNode("div", _hoisted_42, [
                    createBaseVNode("img", {
                      src: unref(getQRCodeUrl)(unref(qrCodeData)),
                      alt: "邀请二维码",
                      onError: handleQRErrorWrapper
                    }, null, 40, _hoisted_43)
                  ])
                ])) : createCommentVNode("", true),
                _cache[61] || (_cache[61] = createBaseVNode("div", { class: "qr-info" }, [
                  createBaseVNode("p", { class: "qr-description" }, "扫描二维码或长按保存图片分享给好友")
                ], -1)),
                createBaseVNode("div", _hoisted_44, [
                  createVNode(_component_n_button, {
                    onClick: _cache[3] || (_cache[3] = ($event) => unref(copyToClipboard)(unref(qrCodeData))),
                    type: "tertiary",
                    block: ""
                  }, {
                    default: withCtx(() => _cache[58] || (_cache[58] = [
                      createTextVNode(" 复制链接 ")
                    ])),
                    _: 1,
                    __: [58]
                  }),
                  createVNode(_component_n_button, {
                    onClick: unref(downloadQRCode),
                    type: "primary",
                    block: ""
                  }, {
                    default: withCtx(() => _cache[59] || (_cache[59] = [
                      createTextVNode(" 保存二维码 ")
                    ])),
                    _: 1,
                    __: [59]
                  }, 8, ["onClick"])
                ])
              ])
            ]),
            _: 1
          }, 8, ["show"])) : createCommentVNode("", true),
          !isMobileLayout.value ? (openBlock(), createBlock(DesktopModal, {
            key: 2,
            show: showTransferModal.value,
            "onUpdate:show": _cache[10] || (_cache[10] = ($event) => showTransferModal.value = $event),
            title: "佣金划转",
            width: 480
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_53, [
                createVNode(_component_n_button, {
                  onClick: _cache[9] || (_cache[9] = ($event) => showTransferModal.value = false),
                  type: "tertiary"
                }, {
                  default: withCtx(() => _cache[70] || (_cache[70] = [
                    createTextVNode(" 取消 ")
                  ])),
                  _: 1,
                  __: [70]
                }),
                createVNode(_component_n_button, {
                  onClick: confirmTransfer,
                  type: "primary",
                  disabled: !transferAmount.value || parseFloat(transferAmount.value) <= 0,
                  loading: transferring.value
                }, {
                  default: withCtx(() => _cache[71] || (_cache[71] = [
                    createTextVNode(" 确认划转 ")
                  ])),
                  _: 1,
                  __: [71]
                }, 8, ["disabled", "loading"])
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, [
                    _cache[62] || (_cache[62] = createBaseVNode("span", { class: "balance-label" }, "当前佣金余额", -1)),
                    createBaseVNode("span", _hoisted_48, "¥" + toDisplayString(unref(formatMoney)(unref(inviteStats).commission_balance || 0)), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_49, [
                  createBaseVNode("div", _hoisted_50, [
                    _cache[68] || (_cache[68] = createBaseVNode("label", { class: "form-label" }, "划转金额", -1)),
                    createBaseVNode("div", _hoisted_51, [
                      _cache[63] || (_cache[63] = createBaseVNode("span", { class: "currency-symbol" }, "¥", -1)),
                      createVNode(_component_n_input, {
                        value: transferAmount.value,
                        "onUpdate:value": _cache[5] || (_cache[5] = ($event) => transferAmount.value = $event),
                        placeholder: "请输入划转金额",
                        type: "number",
                        class: "amount-input",
                        min: 0,
                        max: parseFloat(unref(formatMoney)(unref(inviteStats).commission_balance || 0))
                      }, null, 8, ["value", "max"])
                    ]),
                    createBaseVNode("div", _hoisted_52, [
                      createVNode(_component_n_button, {
                        size: "small",
                        type: "tertiary",
                        onClick: _cache[6] || (_cache[6] = ($event) => setTransferAmountWrapper(25)),
                        class: "quick-btn"
                      }, {
                        default: withCtx(() => _cache[64] || (_cache[64] = [
                          createTextVNode(" ¥25 ")
                        ])),
                        _: 1,
                        __: [64]
                      }),
                      createVNode(_component_n_button, {
                        size: "small",
                        type: "tertiary",
                        onClick: _cache[7] || (_cache[7] = ($event) => setTransferAmountWrapper(50)),
                        class: "quick-btn"
                      }, {
                        default: withCtx(() => _cache[65] || (_cache[65] = [
                          createTextVNode(" ¥50 ")
                        ])),
                        _: 1,
                        __: [65]
                      }),
                      createVNode(_component_n_button, {
                        size: "small",
                        type: "tertiary",
                        onClick: _cache[8] || (_cache[8] = ($event) => setTransferAmountWrapper(100)),
                        class: "quick-btn"
                      }, {
                        default: withCtx(() => _cache[66] || (_cache[66] = [
                          createTextVNode(" ¥100 ")
                        ])),
                        _: 1,
                        __: [66]
                      }),
                      createVNode(_component_n_button, {
                        size: "small",
                        type: "tertiary",
                        onClick: setAllAmountWrapper,
                        class: "quick-btn"
                      }, {
                        default: withCtx(() => _cache[67] || (_cache[67] = [
                          createTextVNode(" 全部 ")
                        ])),
                        _: 1,
                        __: [67]
                      })
                    ])
                  ]),
                  _cache[69] || (_cache[69] = createBaseVNode("div", { class: "form-item" }, [
                    createBaseVNode("label", { class: "form-label" }, "划转说明"),
                    createBaseVNode("div", { class: "transfer-note" }, [
                      createBaseVNode("p", null, "• 佣金将划转到您的账户余额"),
                      createBaseVNode("p", null, "• 划转后可用于购买套餐或其他消费"),
                      createBaseVNode("p", null, "• 划转操作不可撤销，请确认金额")
                    ])
                  ], -1))
                ])
              ])
            ]),
            _: 1
          }, 8, ["show"])) : createCommentVNode("", true),
          isMobileLayout.value ? (openBlock(), createBlock(MobileSheet, {
            key: 3,
            show: showTransferModal.value,
            "onUpdate:show": _cache[16] || (_cache[16] = ($event) => showTransferModal.value = $event),
            title: "佣金划转"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("div", _hoisted_55, [
                  createBaseVNode("div", _hoisted_56, [
                    _cache[72] || (_cache[72] = createBaseVNode("span", { class: "balance-label" }, "当前佣金余额", -1)),
                    createBaseVNode("span", _hoisted_57, "¥" + toDisplayString(unref(formatMoney)(unref(inviteStats).commission_balance || 0)), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_58, [
                  createBaseVNode("div", _hoisted_59, [
                    _cache[78] || (_cache[78] = createBaseVNode("label", { class: "form-label" }, "划转金额", -1)),
                    createBaseVNode("div", _hoisted_60, [
                      _cache[73] || (_cache[73] = createBaseVNode("span", { class: "currency-symbol" }, "¥", -1)),
                      createVNode(_component_n_input, {
                        value: transferAmount.value,
                        "onUpdate:value": _cache[11] || (_cache[11] = ($event) => transferAmount.value = $event),
                        placeholder: "请输入划转金额",
                        type: "number",
                        class: "amount-input",
                        min: 0,
                        max: parseFloat(unref(formatMoney)(unref(inviteStats).commission_balance || 0))
                      }, null, 8, ["value", "max"])
                    ]),
                    createBaseVNode("div", _hoisted_61, [
                      createVNode(_component_n_button, {
                        size: "small",
                        type: "tertiary",
                        onClick: _cache[12] || (_cache[12] = ($event) => setTransferAmountWrapper(25)),
                        class: "quick-btn",
                        block: ""
                      }, {
                        default: withCtx(() => _cache[74] || (_cache[74] = [
                          createTextVNode(" ¥25 ")
                        ])),
                        _: 1,
                        __: [74]
                      }),
                      createVNode(_component_n_button, {
                        size: "small",
                        type: "tertiary",
                        onClick: _cache[13] || (_cache[13] = ($event) => setTransferAmountWrapper(50)),
                        class: "quick-btn",
                        block: ""
                      }, {
                        default: withCtx(() => _cache[75] || (_cache[75] = [
                          createTextVNode(" ¥50 ")
                        ])),
                        _: 1,
                        __: [75]
                      }),
                      createVNode(_component_n_button, {
                        size: "small",
                        type: "tertiary",
                        onClick: _cache[14] || (_cache[14] = ($event) => setTransferAmountWrapper(100)),
                        class: "quick-btn",
                        block: ""
                      }, {
                        default: withCtx(() => _cache[76] || (_cache[76] = [
                          createTextVNode(" ¥100 ")
                        ])),
                        _: 1,
                        __: [76]
                      }),
                      createVNode(_component_n_button, {
                        size: "small",
                        type: "tertiary",
                        onClick: setAllAmountWrapper,
                        class: "quick-btn",
                        block: ""
                      }, {
                        default: withCtx(() => _cache[77] || (_cache[77] = [
                          createTextVNode(" 全部 ")
                        ])),
                        _: 1,
                        __: [77]
                      })
                    ])
                  ]),
                  _cache[79] || (_cache[79] = createBaseVNode("div", { class: "form-item" }, [
                    createBaseVNode("label", { class: "form-label" }, "划转说明"),
                    createBaseVNode("div", { class: "transfer-note" }, [
                      createBaseVNode("p", null, "• 佣金将划转到您的账户余额"),
                      createBaseVNode("p", null, "• 划转后可用于购买套餐或其他消费"),
                      createBaseVNode("p", null, "• 划转操作不可撤销，请确认金额")
                    ])
                  ], -1))
                ]),
                createBaseVNode("div", _hoisted_62, [
                  createVNode(_component_n_button, {
                    onClick: _cache[15] || (_cache[15] = ($event) => showTransferModal.value = false),
                    type: "tertiary",
                    block: ""
                  }, {
                    default: withCtx(() => _cache[80] || (_cache[80] = [
                      createTextVNode(" 取消 ")
                    ])),
                    _: 1,
                    __: [80]
                  }),
                  createVNode(_component_n_button, {
                    onClick: confirmTransfer,
                    type: "primary",
                    disabled: !transferAmount.value || parseFloat(transferAmount.value) <= 0,
                    loading: transferring.value,
                    block: ""
                  }, {
                    default: withCtx(() => _cache[81] || (_cache[81] = [
                      createTextVNode(" 确认划转 ")
                    ])),
                    _: 1,
                    __: [81]
                  }, 8, ["disabled", "loading"])
                ])
              ])
            ]),
            _: 1
          }, 8, ["show"])) : createCommentVNode("", true),
          !isMobileLayout.value ? (openBlock(), createBlock(DesktopModal, {
            key: 4,
            show: showConfirmModal.value,
            "onUpdate:show": _cache[18] || (_cache[18] = ($event) => showConfirmModal.value = $event),
            title: "确认划转",
            width: 420
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_68, [
                createVNode(_component_n_button, {
                  onClick: _cache[17] || (_cache[17] = ($event) => showConfirmModal.value = false),
                  type: "tertiary"
                }, {
                  default: withCtx(() => _cache[87] || (_cache[87] = [
                    createTextVNode(" 取消 ")
                  ])),
                  _: 1,
                  __: [87]
                }),
                createVNode(_component_n_button, {
                  onClick: executeTransferWrapper,
                  type: "warning",
                  loading: transferring.value
                }, {
                  default: withCtx(() => _cache[88] || (_cache[88] = [
                    createTextVNode(" 确认划转 ")
                  ])),
                  _: 1,
                  __: [88]
                }, 8, ["loading"])
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_63, [
                _cache[86] || (_cache[86] = createBaseVNode("div", { class: "confirm-icon" }, [
                  createBaseVNode("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 24 24",
                    fill: "none"
                  }, [
                    createBaseVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "#FF9500",
                      "stroke-width": "2"
                    }),
                    createBaseVNode("path", {
                      d: "M12 8v4M12 16h.01",
                      stroke: "#FF9500",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ])
                ], -1)),
                createBaseVNode("div", _hoisted_64, [
                  _cache[85] || (_cache[85] = createBaseVNode("h3", { class: "confirm-title" }, "确认佣金划转", -1)),
                  createBaseVNode("div", _hoisted_65, [
                    createBaseVNode("p", _hoisted_66, [
                      _cache[82] || (_cache[82] = createTextVNode(" 您即将划转 ")),
                      createBaseVNode("span", _hoisted_67, "¥" + toDisplayString(transferAmount.value), 1),
                      _cache[83] || (_cache[83] = createTextVNode(" 到账户余额 "))
                    ]),
                    _cache[84] || (_cache[84] = createBaseVNode("div", { class: "warning-notice" }, [
                      createBaseVNode("div", { class: "warning-item" }, [
                        createBaseVNode("span", { class: "warning-icon" }, "⚠️"),
                        createBaseVNode("span", null, "划转操作完成后不可撤销")
                      ]),
                      createBaseVNode("div", { class: "warning-item" }, [
                        createBaseVNode("span", { class: "warning-icon" }, "💰"),
                        createBaseVNode("span", null, "资金将立即转入您的账户余额")
                      ]),
                      createBaseVNode("div", { class: "warning-item" }, [
                        createBaseVNode("span", { class: "warning-icon" }, "📝"),
                        createBaseVNode("span", null, "系统将自动生成划转记录")
                      ])
                    ], -1))
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["show"])) : createCommentVNode("", true),
          isMobileLayout.value ? (openBlock(), createBlock(MobileSheet, {
            key: 5,
            show: showConfirmModal.value,
            "onUpdate:show": _cache[20] || (_cache[20] = ($event) => showConfirmModal.value = $event),
            title: "确认划转"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_69, [
                _cache[95] || (_cache[95] = createBaseVNode("div", { class: "confirm-icon" }, [
                  createBaseVNode("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 24 24",
                    fill: "none"
                  }, [
                    createBaseVNode("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "#FF9500",
                      "stroke-width": "2"
                    }),
                    createBaseVNode("path", {
                      d: "M12 8v4M12 16h.01",
                      stroke: "#FF9500",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ])
                ], -1)),
                createBaseVNode("div", _hoisted_70, [
                  _cache[92] || (_cache[92] = createBaseVNode("h3", { class: "confirm-title" }, "确认佣金划转", -1)),
                  createBaseVNode("div", _hoisted_71, [
                    createBaseVNode("p", _hoisted_72, [
                      _cache[89] || (_cache[89] = createTextVNode(" 您即将划转 ")),
                      createBaseVNode("span", _hoisted_73, "¥" + toDisplayString(transferAmount.value), 1),
                      _cache[90] || (_cache[90] = createTextVNode(" 到账户余额 "))
                    ]),
                    _cache[91] || (_cache[91] = createBaseVNode("div", { class: "warning-notice" }, [
                      createBaseVNode("div", { class: "warning-item" }, [
                        createBaseVNode("span", { class: "warning-icon" }, "⚠️"),
                        createBaseVNode("span", null, "划转操作完成后不可撤销")
                      ]),
                      createBaseVNode("div", { class: "warning-item" }, [
                        createBaseVNode("span", { class: "warning-icon" }, "💰"),
                        createBaseVNode("span", null, "资金将立即转入您的账户余额")
                      ]),
                      createBaseVNode("div", { class: "warning-item" }, [
                        createBaseVNode("span", { class: "warning-icon" }, "📝"),
                        createBaseVNode("span", null, "系统将自动生成划转记录")
                      ])
                    ], -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_74, [
                  createVNode(_component_n_button, {
                    onClick: _cache[19] || (_cache[19] = ($event) => showConfirmModal.value = false),
                    type: "tertiary",
                    block: ""
                  }, {
                    default: withCtx(() => _cache[93] || (_cache[93] = [
                      createTextVNode(" 取消 ")
                    ])),
                    _: 1,
                    __: [93]
                  }),
                  createVNode(_component_n_button, {
                    onClick: executeTransferWrapper,
                    type: "warning",
                    loading: transferring.value,
                    block: ""
                  }, {
                    default: withCtx(() => _cache[94] || (_cache[94] = [
                      createTextVNode(" 确认划转 ")
                    ])),
                    _: 1,
                    __: [94]
                  }, 8, ["loading"])
                ])
              ])
            ]),
            _: 1
          }, 8, ["show"])) : createCommentVNode("", true),
          !isMobileLayout.value ? (openBlock(), createBlock(DesktopModal, {
            key: 6,
            show: showWithdrawModal.value,
            "onUpdate:show": _cache[24] || (_cache[24] = ($event) => showWithdrawModal.value = $event),
            title: "申请提现",
            width: 520
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_79, [
                createVNode(_component_n_button, {
                  onClick: _cache[23] || (_cache[23] = ($event) => showWithdrawModal.value = false),
                  type: "tertiary",
                  size: "large"
                }, {
                  default: withCtx(() => _cache[100] || (_cache[100] = [
                    createTextVNode(" 取消 ")
                  ])),
                  _: 1,
                  __: [100]
                }),
                createVNode(_component_n_button, {
                  onClick: submitWithdrawWrapper,
                  type: "primary",
                  size: "large",
                  disabled: !withdrawMethod.value || !withdrawAccount.value,
                  loading: withdrawing.value
                }, {
                  icon: withCtx(() => _cache[101] || (_cache[101] = [
                    createBaseVNode("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createBaseVNode("path", {
                        d: "M5 12L10 17L20 7",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ], -1)
                  ])),
                  default: withCtx(() => [
                    _cache[102] || (_cache[102] = createTextVNode(" 提交申请 "))
                  ]),
                  _: 1,
                  __: [102]
                }, 8, ["disabled", "loading"])
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_75, [
                _cache[99] || (_cache[99] = createBaseVNode("div", { class: "withdraw-header" }, [
                  createBaseVNode("div", { class: "withdraw-icon" }, [
                    createBaseVNode("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createBaseVNode("rect", {
                        x: "3",
                        y: "6",
                        width: "18",
                        height: "12",
                        rx: "2",
                        stroke: "url(#withdrawGradient)",
                        "stroke-width": "2",
                        fill: "none"
                      }),
                      createBaseVNode("path", {
                        d: "M3 10h18",
                        stroke: "url(#withdrawGradient)",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("circle", {
                        cx: "17",
                        cy: "14",
                        r: "1",
                        fill: "url(#withdrawGradient)"
                      }),
                      createBaseVNode("circle", {
                        cx: "8",
                        cy: "4",
                        r: "2",
                        stroke: "url(#withdrawGradient)",
                        "stroke-width": "1.5",
                        fill: "none"
                      }),
                      createBaseVNode("path", {
                        d: "M7 4h2",
                        stroke: "url(#withdrawGradient)",
                        "stroke-width": "1.5"
                      }),
                      createBaseVNode("defs", null, [
                        createBaseVNode("linearGradient", {
                          id: "withdrawGradient",
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "100%"
                        }, [
                          createBaseVNode("stop", {
                            offset: "0%",
                            style: { "stop-color": "#18a058" }
                          }),
                          createBaseVNode("stop", {
                            offset: "100%",
                            style: { "stop-color": "#36ad6a" }
                          })
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("div", { class: "withdraw-description" }, [
                    createBaseVNode("p", null, "请填写提现信息，我们将在1-3个工作日内处理您的申请")
                  ])
                ], -1)),
                createBaseVNode("div", _hoisted_76, [
                  createBaseVNode("div", _hoisted_77, [
                    _cache[96] || (_cache[96] = createBaseVNode("label", { class: "form-label" }, "提现方式", -1)),
                    createVNode(_component_n_select, {
                      value: withdrawMethod.value,
                      "onUpdate:value": _cache[21] || (_cache[21] = ($event) => withdrawMethod.value = $event),
                      placeholder: "请选择提现方式",
                      options: withdrawMethodOptions.value,
                      class: "withdraw-select",
                      size: "large"
                    }, null, 8, ["value", "options"])
                  ]),
                  createBaseVNode("div", _hoisted_78, [
                    _cache[97] || (_cache[97] = createBaseVNode("label", { class: "form-label" }, "提现账号", -1)),
                    createVNode(_component_n_input, {
                      value: withdrawAccount.value,
                      "onUpdate:value": _cache[22] || (_cache[22] = ($event) => withdrawAccount.value = $event),
                      placeholder: "请输入提现账号",
                      class: "withdraw-input",
                      size: "large"
                    }, null, 8, ["value"]),
                    _cache[98] || (_cache[98] = createBaseVNode("div", { class: "form-hint" }, [
                      createBaseVNode("span", { class: "hint-icon" }, "💡"),
                      createBaseVNode("span", null, "请确保账号信息准确，提现后无法修改")
                    ], -1))
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["show"])) : createCommentVNode("", true),
          isMobileLayout.value ? (openBlock(), createBlock(MobileSheet, {
            key: 7,
            show: showWithdrawModal.value,
            "onUpdate:show": _cache[28] || (_cache[28] = ($event) => showWithdrawModal.value = $event),
            title: "申请提现"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_80, [
                _cache[109] || (_cache[109] = createBaseVNode("div", { class: "withdraw-header" }, [
                  createBaseVNode("div", { class: "withdraw-icon" }, [
                    createBaseVNode("svg", {
                      width: "28",
                      height: "28",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createBaseVNode("rect", {
                        x: "3",
                        y: "6",
                        width: "18",
                        height: "12",
                        rx: "2",
                        stroke: "url(#withdrawGradientMobile)",
                        "stroke-width": "2",
                        fill: "none"
                      }),
                      createBaseVNode("path", {
                        d: "M3 10h18",
                        stroke: "url(#withdrawGradientMobile)",
                        "stroke-width": "2"
                      }),
                      createBaseVNode("circle", {
                        cx: "17",
                        cy: "14",
                        r: "1",
                        fill: "url(#withdrawGradientMobile)"
                      }),
                      createBaseVNode("circle", {
                        cx: "8",
                        cy: "4",
                        r: "2",
                        stroke: "url(#withdrawGradientMobile)",
                        "stroke-width": "1.5",
                        fill: "none"
                      }),
                      createBaseVNode("path", {
                        d: "M7 4h2",
                        stroke: "url(#withdrawGradientMobile)",
                        "stroke-width": "1.5"
                      }),
                      createBaseVNode("defs", null, [
                        createBaseVNode("linearGradient", {
                          id: "withdrawGradientMobile",
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "100%"
                        }, [
                          createBaseVNode("stop", {
                            offset: "0%",
                            style: { "stop-color": "#18a058" }
                          }),
                          createBaseVNode("stop", {
                            offset: "100%",
                            style: { "stop-color": "#36ad6a" }
                          })
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("div", { class: "withdraw-description" }, [
                    createBaseVNode("p", null, "请填写提现信息，我们将在1-3个工作日内处理您的申请")
                  ])
                ], -1)),
                createBaseVNode("div", _hoisted_81, [
                  createBaseVNode("div", _hoisted_82, [
                    _cache[103] || (_cache[103] = createBaseVNode("label", { class: "form-label" }, "提现方式", -1)),
                    createVNode(_component_n_select, {
                      value: withdrawMethod.value,
                      "onUpdate:value": _cache[25] || (_cache[25] = ($event) => withdrawMethod.value = $event),
                      placeholder: "请选择提现方式",
                      options: withdrawMethodOptions.value,
                      class: "withdraw-select",
                      size: "large"
                    }, null, 8, ["value", "options"])
                  ]),
                  createBaseVNode("div", _hoisted_83, [
                    _cache[104] || (_cache[104] = createBaseVNode("label", { class: "form-label" }, "提现账号", -1)),
                    createVNode(_component_n_input, {
                      value: withdrawAccount.value,
                      "onUpdate:value": _cache[26] || (_cache[26] = ($event) => withdrawAccount.value = $event),
                      placeholder: "请输入提现账号",
                      class: "withdraw-input",
                      size: "large"
                    }, null, 8, ["value"]),
                    _cache[105] || (_cache[105] = createBaseVNode("div", { class: "form-hint" }, [
                      createBaseVNode("span", { class: "hint-icon" }, "💡"),
                      createBaseVNode("span", null, "请确保账号信息准确，提现后无法修改")
                    ], -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_84, [
                  createVNode(_component_n_button, {
                    onClick: _cache[27] || (_cache[27] = ($event) => showWithdrawModal.value = false),
                    type: "tertiary",
                    size: "large",
                    block: ""
                  }, {
                    default: withCtx(() => _cache[106] || (_cache[106] = [
                      createTextVNode(" 取消 ")
                    ])),
                    _: 1,
                    __: [106]
                  }),
                  createVNode(_component_n_button, {
                    onClick: submitWithdrawWrapper,
                    type: "primary",
                    size: "large",
                    disabled: !withdrawMethod.value || !withdrawAccount.value,
                    loading: withdrawing.value,
                    block: ""
                  }, {
                    icon: withCtx(() => _cache[107] || (_cache[107] = [
                      createBaseVNode("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none"
                      }, [
                        createBaseVNode("path", {
                          d: "M5 12L10 17L20 7",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ], -1)
                    ])),
                    default: withCtx(() => [
                      _cache[108] || (_cache[108] = createTextVNode(" 提交申请 "))
                    ]),
                    _: 1,
                    __: [108]
                  }, 8, ["disabled", "loading"])
                ])
              ])
            ]),
            _: 1
          }, 8, ["show"])) : createCommentVNode("", true)
        ]))
      ]);
    };
  }
});
const Invite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18b5b94b"]]);
export {
  Invite as default
};
