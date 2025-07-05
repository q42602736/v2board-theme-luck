import { a as apiClient } from "./BBbuoBq5.js";
import { D as DesktopModal } from "./3u1s8V6K.js";
import { k as defineComponent, r as ref, w as watch, R as createBlock, V as withCtx, U as openBlock, $ as createElementBlock, a3 as createCommentVNode, a0 as createBaseVNode, W as createVNode, a2 as toDisplayString, S as resolveComponent, j as createTextVNode, F as Fragment, Q as renderList, L as normalizeClass, n as nextTick, o as onMounted, m as h } from "./DM1yaN1X.js";
import { u as useMessage } from "./BEq_qS6Y.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import "./0I8bmyai.js";
const _hoisted_1$2 = {
  key: 0,
  class: "ticket-detail"
};
const _hoisted_2 = { class: "ticket-header" };
const _hoisted_3 = { style: { "margin": "0" } };
const _hoisted_4 = { style: { "display": "flex", "align-items": "center", "gap": "4px" } };
const _hoisted_5 = {
  width: "12",
  height: "12",
  viewBox: "0 0 1024 1024",
  fill: "none"
};
const _hoisted_6 = {
  key: 0,
  d: "M512 0c282.348308 0 512 229.651692 512 512s-229.651692 512-512 512S0 794.348308 0 512 229.651692 0 512 0z m0 73.334154C269.942154 73.334154 73.334154 270.178462 73.334154 512c0 241.821538 196.804923 438.665846 438.665846 438.665846 241.821538 0 438.665846-196.608 438.665846-438.665846S754.057846 73.334154 512 73.334154z m-36.391385 146.116923c20.283077 0 36.588308 16.502154 36.588308 36.745846V512h182.862769a36.667077 36.667077 0 1 1 0 73.334154h-219.451077a36.509538 36.509538 0 0 1-36.548923-36.548923V256.196923c0-20.243692 16.305231-36.785231 36.548923-36.785231z",
  fill: "#F06800"
};
const _hoisted_7 = {
  key: 1,
  d: "M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m267.849143 361.472a54.857143 54.857143 0 0 0-77.531429 0L455.168 608.621714 343.771429 497.225143a54.857143 54.857143 0 0 0-77.531429 77.531428l150.162286 150.235429a54.857143 54.857143 0 0 0 77.604571 0l285.842286-285.915429a54.857143 54.857143 0 0 0 0-77.531428z",
  fill: "#42B10B"
};
const _hoisted_8 = {
  key: 0,
  class: "loading-container"
};
const _hoisted_9 = {
  key: 1,
  class: "empty-messages"
};
const _hoisted_10 = {
  key: 2,
  class: "messages-list"
};
const _hoisted_11 = { class: "message-content" };
const _hoisted_12 = { class: "message-text" };
const _hoisted_13 = { class: "message-time" };
const _hoisted_14 = {
  key: 0,
  class: "reply-section"
};
const _hoisted_15 = {
  key: 1,
  class: "closed-notice"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TicketDetailModal",
  props: {
    show: { type: Boolean },
    ticketId: {}
  },
  emits: ["update:show", "refresh"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const message = useMessage();
    const visible = ref(false);
    const loading = ref(false);
    const replying = ref(false);
    const ticket = ref(null);
    const messages = ref([]);
    const messagesContainer = ref();
    const replyFormRef = ref(null);
    const replyForm = ref({
      message: ""
    });
    const replyRules = {
      message: [
        { required: true, message: "请输入回复内容", trigger: "blur" },
        { min: 5, message: "回复内容不能少于5个字符", trigger: "blur" }
      ]
    };
    watch(() => props.show, (newVal) => {
      visible.value = newVal;
      if (newVal && props.ticketId) {
        loadTicketDetail();
      }
    });
    watch(visible, (newVal) => {
      emit("update:show", newVal);
    });
    const getLevelType = (level) => {
      const types = { 0: "info", 1: "warning", 2: "error" };
      return types[level] || "info";
    };
    const getLevelText = (level) => {
      const texts = { 0: "低", 1: "中", 2: "高" };
      return texts[level] || "未知";
    };
    const getStatusType = (status, replyStatus) => {
      if (status === 1) {
        return "default";
      } else if (status === 0) {
        const reply = replyStatus ?? 0;
        return reply === 0 ? "warning" : "success";
      }
      return "default";
    };
    const getStatusText = (status, replyStatus) => {
      if (status === 1) {
        return "已关闭";
      } else if (status === 0) {
        const reply = replyStatus ?? 0;
        return reply === 0 ? "待回复" : "已回复";
      }
      return "未知";
    };
    const loadTicketDetail = async () => {
      var _a, _b;
      if (!props.ticketId) return;
      loading.value = true;
      try {
        const detail = await apiClient.getTicketDetail(props.ticketId);
        ticket.value = detail;
        messages.value = detail.message || [];
        nextTick(() => {
          scrollToBottom();
        });
      } catch (error) {
        message.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "加载工单详情失败");
        console.error("加载工单详情失败:", error);
      } finally {
        loading.value = false;
      }
    };
    const refreshDetail = () => {
      loadTicketDetail();
    };
    const sendReply = async () => {
      var _a, _b;
      if (!replyFormRef.value || !ticket.value) return;
      try {
        await replyFormRef.value.validate();
        replying.value = true;
        await apiClient.replyTicket({
          id: ticket.value.id,
          message: replyForm.value.message
        });
        message.success("回复发送成功");
        replyForm.value.message = "";
        await loadTicketDetail();
        emit("refresh");
      } catch (error) {
        message.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "发送回复失败");
        console.error("发送回复失败:", error);
      } finally {
        replying.value = false;
      }
    };
    const scrollToBottom = () => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_tag = resolveComponent("n-tag");
      const _component_n_text = resolveComponent("n-text");
      const _component_n_space = resolveComponent("n-space");
      const _component_n_button = resolveComponent("n-button");
      const _component_n_divider = resolveComponent("n-divider");
      const _component_n_spin = resolveComponent("n-spin");
      const _component_n_empty = resolveComponent("n-empty");
      const _component_n_input = resolveComponent("n-input");
      const _component_n_form_item = resolveComponent("n-form-item");
      const _component_n_form = resolveComponent("n-form");
      const _component_n_alert = resolveComponent("n-alert");
      return openBlock(), createBlock(DesktopModal, {
        show: visible.value,
        "onUpdate:show": _cache[3] || (_cache[3] = ($event) => visible.value = $event),
        title: "工单详情",
        width: "800px",
        "max-height": "80vh",
        "show-close-button": false,
        onClose: _cache[4] || (_cache[4] = ($event) => visible.value = false)
      }, {
        default: withCtx(() => [
          ticket.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_n_space, {
                justify: "space-between",
                align: "center"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_3, toDisplayString(ticket.value.subject), 1),
                    createVNode(_component_n_space, { style: { "margin-top": "8px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_n_tag, {
                          size: "small",
                          type: getLevelType(ticket.value.level)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getLevelText(ticket.value.level)), 1)
                          ]),
                          _: 1
                        }, 8, ["type"]),
                        createVNode(_component_n_tag, {
                          size: "small",
                          type: getStatusType(ticket.value.status, ticket.value.reply_status)
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_4, [
                              (openBlock(), createElementBlock("svg", _hoisted_5, [
                                ticket.value.status === 0 && (ticket.value.reply_status ?? 0) === 0 ? (openBlock(), createElementBlock("path", _hoisted_6)) : ticket.value.status === 0 && (ticket.value.reply_status ?? 0) === 1 ? (openBlock(), createElementBlock("path", _hoisted_7)) : ticket.value.status === 1 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                                  _cache[5] || (_cache[5] = createBaseVNode("path", {
                                    d: "M512 1024a512 512 0 0 1-512-512 512 512 0 0 1 512-512 512 512 0 0 1 512 512 512 512 0 0 1-512 512zM512 48.786286C256.804571 48.786286 48.786286 256.731429 48.786286 512c0 255.268571 208.018286 463.286857 463.213714 463.286857 255.195429 0 463.213714-208.091429 463.213714-463.286857C975.213714 256.804571 767.268571 48.786286 512 48.786286z",
                                    fill: "#EB4542"
                                  }, null, -1)),
                                  _cache[6] || (_cache[6] = createBaseVNode("path", {
                                    d: "M551.424 512l208.822857-207.506286c10.313143-10.24 10.313143-27.209143 0-39.131428l-1.682286-1.755429a27.062857 27.062857 0 0 0-37.668571 0L512 472.868571 303.104 265.362286a27.062857 27.062857 0 0 0-37.668571 0l-1.755429 1.755428c-10.24 10.166857-10.24 27.136 0 39.058286L472.576 512 263.753143 719.506286c-10.313143 10.24-10.313143 27.282286 0 39.131428l1.682286 1.755429a27.062857 27.062857 0 0 0 37.668571 0L512 551.204571l208.896 207.433143a27.062857 27.062857 0 0 0 37.668571 0l1.755429-1.682285c10.24-10.24 10.24-27.209143 0-39.131429L551.424 512z",
                                    fill: "#EB4542"
                                  }, null, -1))
                                ], 64)) : createCommentVNode("", true)
                              ])),
                              createTextVNode(" " + toDisplayString(getStatusText(ticket.value.status, ticket.value.reply_status)), 1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["type"]),
                        createVNode(_component_n_text, {
                          depth: "3",
                          style: { "font-size": "12px" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" #" + toDisplayString(ticket.value.id) + " · " + toDisplayString(new Date(ticket.value.created_at * 1e3).toLocaleString()), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_n_space, null, {
                    default: withCtx(() => [
                      createVNode(_component_n_button, {
                        size: "small",
                        onClick: refreshDetail,
                        loading: loading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(loading.value ? "加载中..." : "刷新"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createVNode(_component_n_divider, { style: { "margin": "16px 0" } }),
            createBaseVNode("div", {
              class: "messages-container",
              ref_key: "messagesContainer",
              ref: messagesContainer
            }, [
              loading.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createVNode(_component_n_spin, { size: "medium" }),
                _cache[7] || (_cache[7] = createBaseVNode("p", { class: "loading-text" }, "工单内容加载中...", -1))
              ])) : messages.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createVNode(_component_n_empty, { description: "暂无消息" })
              ])) : (openBlock(), createElementBlock("div", _hoisted_10, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(messages.value, (msg) => {
                  return openBlock(), createElementBlock("div", {
                    key: msg.id,
                    class: normalizeClass(["message-item", msg.is_me ? "message-me" : "message-other"])
                  }, [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, toDisplayString(msg.message), 1),
                      createBaseVNode("div", _hoisted_13, toDisplayString(new Date(msg.created_at * 1e3).toLocaleString()), 1)
                    ])
                  ], 2);
                }), 128))
              ]))
            ], 512),
            ticket.value.status === 0 ? (openBlock(), createElementBlock("div", _hoisted_14, [
              createVNode(_component_n_divider, { style: { "margin": "16px 0" } }),
              createVNode(_component_n_form, {
                ref_key: "replyFormRef",
                ref: replyFormRef,
                model: replyForm.value,
                rules: replyRules
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_form_item, { path: "message" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_input, {
                        value: replyForm.value.message,
                        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => replyForm.value.message = $event),
                        type: "textarea",
                        rows: 4,
                        placeholder: "请输入回复内容...",
                        disabled: replying.value
                      }, null, 8, ["value", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_n_space, { justify: "end" }, {
                    default: withCtx(() => [
                      createVNode(_component_n_button, {
                        onClick: _cache[1] || (_cache[1] = ($event) => visible.value = false)
                      }, {
                        default: withCtx(() => _cache[8] || (_cache[8] = [
                          createTextVNode("关闭")
                        ])),
                        _: 1,
                        __: [8]
                      }),
                      createVNode(_component_n_button, {
                        type: "primary",
                        onClick: sendReply,
                        loading: replying.value
                      }, {
                        default: withCtx(() => _cache[9] || (_cache[9] = [
                          createTextVNode(" 发送回复 ")
                        ])),
                        _: 1,
                        __: [9]
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ])) : (openBlock(), createElementBlock("div", _hoisted_15, [
              createVNode(_component_n_alert, {
                type: "info",
                title: "工单已关闭",
                "show-icon": ""
              }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode(" 此工单已关闭，无法继续回复。 ")
                ])),
                _: 1,
                __: [10]
              }),
              createVNode(_component_n_space, {
                justify: "end",
                style: { "margin-top": "16px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_button, {
                    onClick: _cache[2] || (_cache[2] = ($event) => visible.value = false)
                  }, {
                    default: withCtx(() => _cache[11] || (_cache[11] = [
                      createTextVNode("关闭")
                    ])),
                    _: 1,
                    __: [11]
                  })
                ]),
                _: 1
              })
            ]))
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const TicketDetailModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2f223172"]]);
const _hoisted_1$1 = { class: "create-ticket-form" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CreateTicketModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["update:show", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const message = useMessage();
    const visible = ref(false);
    const creating = ref(false);
    const formRef = ref(null);
    const formData = ref({
      subject: "",
      level: 0,
      message: ""
    });
    const levelOptions = [
      { label: "低 - 一般问题", value: 0 },
      { label: "中 - 重要问题", value: 1 },
      { label: "高 - 紧急问题", value: 2 }
    ];
    const formRules = {
      subject: [
        { required: true, message: "请输入工单主题", trigger: "blur" },
        { min: 5, message: "主题不能少于5个字符", trigger: "blur" },
        { max: 100, message: "主题不能超过100个字符", trigger: "blur" }
      ],
      level: [
        { required: true, message: "请选择优先级", trigger: "change", type: "number" }
      ],
      message: [
        { required: true, message: "请输入问题描述", trigger: "blur" },
        { min: 10, message: "问题描述不能少于10个字符", trigger: "blur" },
        { max: 1e3, message: "问题描述不能超过1000个字符", trigger: "blur" }
      ]
    };
    watch(() => props.show, (newVal) => {
      visible.value = newVal;
    });
    watch(visible, (newVal) => {
      emit("update:show", newVal);
      if (!newVal) {
        resetForm();
      }
    });
    const resetForm = () => {
      var _a;
      formData.value = {
        subject: "",
        level: 0,
        message: ""
      };
      (_a = formRef.value) == null ? void 0 : _a.restoreValidation();
    };
    const handleSubmit = async () => {
      var _a, _b;
      if (!formRef.value) return;
      try {
        await formRef.value.validate();
        creating.value = true;
        await apiClient.createTicket(formData.value);
        message.success("工单创建成功");
        visible.value = false;
        emit("success");
      } catch (error) {
        message.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "创建工单失败");
        console.error("创建工单失败:", error);
      } finally {
        creating.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_n_input = resolveComponent("n-input");
      const _component_n_form_item = resolveComponent("n-form-item");
      const _component_n_select = resolveComponent("n-select");
      const _component_n_form = resolveComponent("n-form");
      const _component_n_button = resolveComponent("n-button");
      const _component_n_space = resolveComponent("n-space");
      return openBlock(), createBlock(DesktopModal, {
        show: visible.value,
        "onUpdate:show": _cache[4] || (_cache[4] = ($event) => visible.value = $event),
        title: "创建工单",
        width: "600px",
        "show-close-button": false,
        onClose: _cache[5] || (_cache[5] = ($event) => visible.value = false)
      }, {
        footer: withCtx(() => [
          createVNode(_component_n_space, { justify: "end" }, {
            default: withCtx(() => [
              createVNode(_component_n_button, {
                onClick: _cache[3] || (_cache[3] = ($event) => visible.value = false),
                disabled: creating.value
              }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode(" 取消 ")
                ])),
                _: 1,
                __: [6]
              }, 8, ["disabled"]),
              createVNode(_component_n_button, {
                type: "primary",
                onClick: handleSubmit,
                loading: creating.value
              }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode(" 创建工单 ")
                ])),
                _: 1,
                __: [7]
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(_component_n_form, {
              ref_key: "formRef",
              ref: formRef,
              model: formData.value,
              rules: formRules,
              "label-placement": "top"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_form_item, {
                  label: "工单主题",
                  path: "subject"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input, {
                      value: formData.value.subject,
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formData.value.subject = $event),
                      placeholder: "请输入工单主题",
                      disabled: creating.value
                    }, null, 8, ["value", "disabled"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_form_item, {
                  label: "优先级",
                  path: "level"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_select, {
                      value: formData.value.level,
                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => formData.value.level = $event),
                      options: levelOptions,
                      placeholder: "请选择优先级",
                      disabled: creating.value
                    }, null, 8, ["value", "disabled"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_form_item, {
                  label: "问题描述",
                  path: "message"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input, {
                      value: formData.value.message,
                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => formData.value.message = $event),
                      type: "textarea",
                      rows: 6,
                      placeholder: "请详细描述您遇到的问题...",
                      disabled: creating.value
                    }, null, 8, ["value", "disabled"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])
          ])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const CreateTicketModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e49858c2"]]);
const _hoisted_1 = { class: "tickets-page" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tickets",
  setup(__props) {
    const message = useMessage();
    const loading = ref(false);
    const tickets = ref([]);
    const showCreateModal = ref(false);
    const showDetailModal = ref(false);
    const selectedTicket = ref(null);
    const pagination = {
      page: 1,
      pageSize: 10,
      showSizePicker: true,
      pageSizes: [10, 20, 50],
      onChange: (page) => {
        pagination.page = page;
        loadTickets();
      },
      onUpdatePageSize: (pageSize) => {
        pagination.pageSize = pageSize;
        pagination.page = 1;
        loadTickets();
      }
    };
    const columns = [
      {
        title: "ID",
        key: "id",
        width: 80
      },
      {
        title: "主题",
        key: "subject",
        width: 200,
        ellipsis: {
          tooltip: true
        }
      },
      {
        title: "级别",
        key: "level",
        width: 100,
        render: (row) => {
          const levelMap = {
            0: { text: "低", type: "success" },
            1: { text: "中", type: "warning" },
            2: { text: "高", type: "error" }
          };
          const level = levelMap[row.level];
          return h("n-tag", {
            type: level == null ? void 0 : level.type,
            size: "small",
            round: true
          }, [
            h("span", { style: "display: flex; align-items: center; gap: 4px;" }, [
              h("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none"
              }, [
                // 定义渐变
                h("defs", {}, [
                  // 低级别渐变 - 蓝色系
                  h("linearGradient", { id: "info-gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, [
                    h("stop", { offset: "0%", "stop-color": "#007AFF" }),
                    h("stop", { offset: "100%", "stop-color": "#5AC8FA" })
                  ]),
                  // 中级别渐变 - 橙色系
                  h("linearGradient", { id: "warning-gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, [
                    h("stop", { offset: "0%", "stop-color": "#FF9500" }),
                    h("stop", { offset: "100%", "stop-color": "#FFCC02" })
                  ]),
                  // 高级别渐变 - 红色系
                  h("linearGradient", { id: "error-gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, [
                    h("stop", { offset: "0%", "stop-color": "#FF3B30" }),
                    h("stop", { offset: "100%", "stop-color": "#FF6B6B" })
                  ])
                ]),
                // 低级别 - 信息圆圈 (iOS蓝色)
                row.level === 0 && h("circle", {
                  cx: "12",
                  cy: "12",
                  r: "10",
                  fill: "url(#info-gradient)",
                  stroke: "none"
                }),
                row.level === 0 && h("path", {
                  d: "M12 16v-4",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }),
                row.level === 0 && h("circle", {
                  cx: "12",
                  cy: "8",
                  r: "1",
                  fill: "white"
                }),
                // 中级别 - 警告三角 (iOS橙色)
                row.level === 1 && h("path", {
                  d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
                  fill: "url(#warning-gradient)",
                  stroke: "none"
                }),
                row.level === 1 && h("path", {
                  d: "M12 9v4",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }),
                row.level === 1 && h("circle", {
                  cx: "12",
                  cy: "17",
                  r: "1",
                  fill: "white"
                }),
                // 高级别 - 错误X圆圈 (iOS红色)
                row.level === 2 && h("circle", {
                  cx: "12",
                  cy: "12",
                  r: "10",
                  fill: "url(#error-gradient)",
                  stroke: "none"
                }),
                row.level === 2 && h("path", {
                  d: "M15 9l-6 6",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }),
                row.level === 2 && h("path", {
                  d: "M9 9l6 6",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                })
              ]),
              h("span", {}, (level == null ? void 0 : level.text) || "未知")
            ])
          ]);
        }
      },
      {
        title: "状态",
        key: "status",
        width: 120,
        render: (row) => {
          let statusText = "未知";
          let statusType = "default";
          if (row.status === 1) {
            statusText = "已关闭";
            statusType = "default";
          } else if (row.status === 0) {
            const replyStatus = row.reply_status ?? 0;
            if (replyStatus === 0) {
              statusText = "待回复";
              statusType = "warning";
            } else {
              statusText = "已回复";
              statusType = "success";
            }
          }
          const statusInfo = { text: statusText, type: statusType };
          return h("n-tag", {
            type: statusInfo.type,
            size: "small",
            round: true
          }, [
            h("span", { style: "display: flex; align-items: center; gap: 4px;" }, [
              h("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 1024 1024",
                fill: "none"
              }, [
                // 待回复状态 - 时钟图标 (橙色)
                row.status === 0 && (row.reply_status ?? 0) === 0 && h("path", {
                  d: "M512 0c282.348308 0 512 229.651692 512 512s-229.651692 512-512 512S0 794.348308 0 512 229.651692 0 512 0z m0 73.334154C269.942154 73.334154 73.334154 270.178462 73.334154 512c0 241.821538 196.804923 438.665846 438.665846 438.665846 241.821538 0 438.665846-196.608 438.665846-438.665846S754.057846 73.334154 512 73.334154z m-36.391385 146.116923c20.283077 0 36.588308 16.502154 36.588308 36.745846V512h182.862769a36.667077 36.667077 0 1 1 0 73.334154h-219.451077a36.509538 36.509538 0 0 1-36.548923-36.548923V256.196923c0-20.243692 16.305231-36.785231 36.548923-36.785231z",
                  fill: "#F06800"
                }),
                // 已回复状态 - 勾选图标 (绿色)
                row.status === 0 && (row.reply_status ?? 0) === 1 && h("path", {
                  d: "M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m267.849143 361.472a54.857143 54.857143 0 0 0-77.531429 0L455.168 608.621714 343.771429 497.225143a54.857143 54.857143 0 0 0-77.531429 77.531428l150.162286 150.235429a54.857143 54.857143 0 0 0 77.604571 0l285.842286-285.915429a54.857143 54.857143 0 0 0 0-77.531428z",
                  fill: "#42B10B"
                }),
                // 已关闭状态 - X图标 (红色)
                row.status === 1 && h("path", {
                  d: "M512 1024a512 512 0 0 1-512-512 512 512 0 0 1 512-512 512 512 0 0 1 512 512 512 512 0 0 1-512 512zM512 48.786286C256.804571 48.786286 48.786286 256.731429 48.786286 512c0 255.268571 208.018286 463.286857 463.213714 463.286857 255.195429 0 463.213714-208.091429 463.213714-463.286857C975.213714 256.804571 767.268571 48.786286 512 48.786286z",
                  fill: "#EB4542"
                }),
                row.status === 1 && h("path", {
                  d: "M551.424 512l208.822857-207.506286c10.313143-10.24 10.313143-27.209143 0-39.131428l-1.682286-1.755429a27.062857 27.062857 0 0 0-37.668571 0L512 472.868571 303.104 265.362286a27.062857 27.062857 0 0 0-37.668571 0l-1.755429 1.755428c-10.24 10.166857-10.24 27.136 0 39.058286L472.576 512 263.753143 719.506286c-10.313143 10.24-10.313143 27.282286 0 39.131428l1.682286 1.755429a27.062857 27.062857 0 0 0 37.668571 0L512 551.204571l208.896 207.433143a27.062857 27.062857 0 0 0 37.668571 0l1.755429-1.682285c10.24-10.24 10.24-27.209143 0-39.131429L551.424 512z",
                  fill: "#EB4542"
                })
              ]),
              h("span", {}, statusInfo.text)
            ])
          ]);
        }
      },
      {
        title: "创建时间",
        key: "created_at",
        width: 180,
        render: (row) => new Date(row.created_at * 1e3).toLocaleString()
      },
      {
        title: "最后回复",
        key: "updated_at",
        width: 180,
        render: (row) => row.updated_at ? new Date(row.updated_at * 1e3).toLocaleString() : "-"
      },
      {
        title: "操作",
        key: "actions",
        width: 160,
        render: (row) => {
          return h("n-space", { size: "small" }, [
            h(
              "button",
              {
                class: "btn-base btn-small btn-primary",
                onClick: () => viewTicket(row)
              },
              "查看"
            ),
            h(
              "button",
              {
                class: "btn-base btn-small btn-danger",
                disabled: row.status === 1,
                onClick: row.status === 0 ? () => closeTicket(row) : void 0
              },
              "关闭"
            )
          ]);
        }
      }
    ];
    onMounted(() => {
      loadTickets();
    });
    const loadTickets = async () => {
      var _a, _b;
      loading.value = true;
      try {
        tickets.value = await apiClient.getTickets();
      } catch (error) {
        message.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "加载工单列表失败");
        console.error("加载工单失败:", error);
      } finally {
        loading.value = false;
      }
    };
    const refreshTickets = () => {
      loadTickets();
    };
    const handleCreateSuccess = () => {
      loadTickets();
    };
    const viewTicket = (ticket) => {
      selectedTicket.value = ticket;
      showDetailModal.value = true;
    };
    const closeTicket = async (ticket) => {
      var _a, _b;
      try {
        await apiClient.closeTicket({ id: ticket.id });
        message.success("工单已关闭");
        loadTickets();
      } catch (error) {
        message.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "关闭工单失败");
        console.error("关闭工单失败:", error);
      }
    };
    return (_ctx, _cache) => {
      var _a;
      const _component_n_button = resolveComponent("n-button");
      const _component_n_space = resolveComponent("n-space");
      const _component_n_data_table = resolveComponent("n-data-table");
      const _component_n_card = resolveComponent("n-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_card, { title: "工单系统" }, {
          "header-extra": withCtx(() => [
            createVNode(_component_n_space, null, {
              default: withCtx(() => [
                createVNode(_component_n_button, {
                  type: "primary",
                  onClick: _cache[0] || (_cache[0] = ($event) => showCreateModal.value = true)
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode(" 创建工单 ")
                  ])),
                  _: 1,
                  __: [3]
                }),
                createVNode(_component_n_button, {
                  onClick: refreshTickets,
                  loading: loading.value
                }, {
                  default: withCtx(() => _cache[4] || (_cache[4] = [
                    createTextVNode(" 刷新 ")
                  ])),
                  _: 1,
                  __: [4]
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_data_table, {
              columns,
              data: tickets.value,
              loading: loading.value,
              pagination,
              "row-key": (row) => row.id,
              class: "tickets-table"
            }, null, 8, ["data", "loading", "row-key"])
          ]),
          _: 1
        }),
        createVNode(CreateTicketModal, {
          show: showCreateModal.value,
          "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showCreateModal.value = $event),
          onSuccess: handleCreateSuccess
        }, null, 8, ["show"]),
        createVNode(TicketDetailModal, {
          show: showDetailModal.value,
          "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showDetailModal.value = $event),
          "ticket-id": (_a = selectedTicket.value) == null ? void 0 : _a.id,
          onRefresh: loadTickets
        }, null, 8, ["show", "ticket-id"])
      ]);
    };
  }
});
const Tickets = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7de65899"]]);
export {
  Tickets as default
};
