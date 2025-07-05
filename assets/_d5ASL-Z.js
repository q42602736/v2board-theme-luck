import { u as useAuthStore, a as apiClient } from "./BBbuoBq5.js";
import { k as defineComponent, r as ref, e as reactive, o as onMounted, $ as createElementBlock, W as createVNode, V as withCtx, S as resolveComponent, U as openBlock, j as createTextVNode, a0 as createBaseVNode, a5 as useRouter } from "./DM1yaN1X.js";
import { u as useMessage } from "./BEq_qS6Y.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import "./0I8bmyai.js";
const _hoisted_1 = { class: "profile-page" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Profile",
  setup(__props) {
    const message = useMessage();
    const authStore = useAuthStore();
    const router = useRouter();
    const changingPassword = ref(false);
    const resetting = ref(false);
    const savingExpireNotification = ref(false);
    const savingTrafficNotification = ref(false);
    const securityFormRef = ref(null);
    const securityForm = reactive({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    const notificationForm = reactive({
      remind_expire: 1,
      // 默认开启到期提醒
      remind_traffic: 1
      // 默认开启流量提醒
    });
    const securityRules = {
      currentPassword: [
        { required: true, message: "请输入当前密码", trigger: "blur" }
      ],
      newPassword: [
        { required: true, message: "请输入新密码", trigger: "blur" },
        { min: 6, message: "密码长度不能少于6位", trigger: "blur" }
      ],
      confirmPassword: [
        { required: true, message: "请确认新密码", trigger: "blur" },
        {
          validator: (rule, value) => {
            return value === securityForm.newPassword;
          },
          message: "两次输入的密码不一致",
          trigger: "blur"
        }
      ]
    };
    const changePassword = async () => {
      var _a, _b;
      if (!securityFormRef.value) return;
      try {
        await securityFormRef.value.validate();
        changingPassword.value = true;
        await apiClient.changePassword({
          old_password: securityForm.currentPassword,
          new_password: securityForm.newPassword
        });
        message.success("密码修改成功，即将跳转到登录页面");
        authStore.logout();
        setTimeout(() => {
          router.push("/login");
        }, 2e3);
      } catch (error) {
        const errorMsg = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "密码修改失败";
        message.error(errorMsg);
        console.error("修改密码失败:", error);
      } finally {
        changingPassword.value = false;
      }
    };
    const initNotificationSettings = () => {
      const user = authStore.user;
      if (user) {
        notificationForm.remind_expire = user.remind_expire ?? 1;
        notificationForm.remind_traffic = user.remind_traffic ?? 1;
      }
    };
    const handleNotificationChange = async (type, value) => {
      var _a, _b;
      const loadingRef = type === "remind_expire" ? savingExpireNotification : savingTrafficNotification;
      loadingRef.value = true;
      try {
        const updateData = { [type]: value };
        await apiClient.updateUserSettings(updateData);
        if (authStore.user) {
          authStore.user[type] = value;
          localStorage.setItem("v2board_user", JSON.stringify(authStore.user));
        }
        const messages = {
          remind_expire: value === 1 ? "到期邮件提醒已开启" : "到期邮件提醒已关闭",
          remind_traffic: value === 1 ? "流量邮件提醒已开启" : "流量邮件提醒已关闭"
        };
        message.success(messages[type]);
      } catch (error) {
        notificationForm[type] = notificationForm[type] === 1 ? 0 : 1;
        const errorMsg = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "设置通知失败";
        message.error(errorMsg);
        console.error("设置通知失败:", error);
      } finally {
        loadingRef.value = false;
      }
    };
    const resetSubscription = async () => {
      var _a, _b;
      resetting.value = true;
      try {
        const newSubscribeUrl = await apiClient.resetSubscribe();
        message.success("订阅链接已重置，请及时更新客户端配置");
        console.log("新的订阅链接:", newSubscribeUrl);
      } catch (error) {
        const errorMsg = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "重置订阅链接失败";
        message.error(errorMsg);
        console.error("重置失败:", error);
      } finally {
        resetting.value = false;
      }
    };
    onMounted(() => {
      initNotificationSettings();
    });
    return (_ctx, _cache) => {
      const _component_n_input = resolveComponent("n-input");
      const _component_n_form_item = resolveComponent("n-form-item");
      const _component_n_button = resolveComponent("n-button");
      const _component_n_form = resolveComponent("n-form");
      const _component_n_card = resolveComponent("n-card");
      const _component_n_grid_item = resolveComponent("n-grid-item");
      const _component_n_switch = resolveComponent("n-switch");
      const _component_n_text = resolveComponent("n-text");
      const _component_n_space = resolveComponent("n-space");
      const _component_n_alert = resolveComponent("n-alert");
      const _component_n_grid = resolveComponent("n-grid");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_grid, {
          cols: 1,
          "x-gap": 24,
          "y-gap": 24
        }, {
          default: withCtx(() => [
            createVNode(_component_n_grid_item, null, {
              default: withCtx(() => [
                createVNode(_component_n_card, { title: "安全设置" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form, {
                      model: securityForm,
                      rules: securityRules,
                      ref_key: "securityFormRef",
                      ref: securityFormRef,
                      "label-placement": "left",
                      "label-width": "120px"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_form_item, {
                          label: "当前密码",
                          path: "currentPassword"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input, {
                              value: securityForm.currentPassword,
                              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => securityForm.currentPassword = $event),
                              type: "password",
                              placeholder: "请输入当前密码",
                              "show-password-on": "mousedown"
                            }, null, 8, ["value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "新密码",
                          path: "newPassword"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input, {
                              value: securityForm.newPassword,
                              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => securityForm.newPassword = $event),
                              type: "password",
                              placeholder: "请输入新密码",
                              "show-password-on": "mousedown"
                            }, null, 8, ["value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, {
                          label: "确认密码",
                          path: "confirmPassword"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_n_input, {
                              value: securityForm.confirmPassword,
                              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => securityForm.confirmPassword = $event),
                              type: "password",
                              placeholder: "请再次输入新密码",
                              "show-password-on": "mousedown"
                            }, null, 8, ["value"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_n_button, {
                              type: "primary",
                              onClick: changePassword,
                              loading: changingPassword.value
                            }, {
                              default: withCtx(() => _cache[7] || (_cache[7] = [
                                createTextVNode(" 修改密码 ")
                              ])),
                              _: 1,
                              __: [7]
                            }, 8, ["loading"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["model"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_grid_item, null, {
              default: withCtx(() => [
                createVNode(_component_n_card, { title: "通知设置" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_form, {
                      model: notificationForm,
                      "label-placement": "left",
                      "label-width": "120px"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_form_item, { label: "到期邮件提醒" }, {
                          default: withCtx(() => [
                            createVNode(_component_n_space, { align: "center" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: notificationForm.remind_expire,
                                  "onUpdate:value": [
                                    _cache[3] || (_cache[3] = ($event) => notificationForm.remind_expire = $event),
                                    _cache[4] || (_cache[4] = (value) => handleNotificationChange("remind_expire", value))
                                  ],
                                  "checked-value": 1,
                                  "unchecked-value": 0,
                                  loading: savingExpireNotification.value
                                }, null, 8, ["value", "loading"]),
                                createVNode(_component_n_text, {
                                  depth: "3",
                                  style: { "font-size": "14px" }
                                }, {
                                  default: withCtx(() => _cache[8] || (_cache[8] = [
                                    createTextVNode(" 开启后，服务到期前24小时会发送邮件提醒 ")
                                  ])),
                                  _: 1,
                                  __: [8]
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_n_form_item, { label: "流量邮件提醒" }, {
                          default: withCtx(() => [
                            createVNode(_component_n_space, { align: "center" }, {
                              default: withCtx(() => [
                                createVNode(_component_n_switch, {
                                  value: notificationForm.remind_traffic,
                                  "onUpdate:value": [
                                    _cache[5] || (_cache[5] = ($event) => notificationForm.remind_traffic = $event),
                                    _cache[6] || (_cache[6] = (value) => handleNotificationChange("remind_traffic", value))
                                  ],
                                  "checked-value": 1,
                                  "unchecked-value": 0,
                                  loading: savingTrafficNotification.value
                                }, null, 8, ["value", "loading"]),
                                createVNode(_component_n_text, {
                                  depth: "3",
                                  style: { "font-size": "14px" }
                                }, {
                                  default: withCtx(() => _cache[9] || (_cache[9] = [
                                    createTextVNode(" 开启后，流量使用达到95%时会发送邮件提醒 ")
                                  ])),
                                  _: 1,
                                  __: [9]
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["model"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_n_grid_item, null, {
              default: withCtx(() => [
                createVNode(_component_n_card, { title: "订阅管理" }, {
                  default: withCtx(() => [
                    createVNode(_component_n_space, { vertical: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_n_alert, { type: "warning" }, {
                          default: withCtx(() => _cache[10] || (_cache[10] = [
                            createBaseVNode("strong", null, "重置订阅链接", -1),
                            createBaseVNode("br", null, null, -1),
                            createTextVNode(" 重置后原有的订阅链接将失效，请及时更新客户端配置。 ")
                          ])),
                          _: 1,
                          __: [10]
                        }),
                        createVNode(_component_n_button, {
                          type: "warning",
                          onClick: resetSubscription,
                          loading: resetting.value
                        }, {
                          default: withCtx(() => _cache[11] || (_cache[11] = [
                            createTextVNode(" 重置订阅链接 ")
                          ])),
                          _: 1,
                          __: [11]
                        }, 8, ["loading"])
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
      ]);
    };
  }
});
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-090069e3"]]);
export {
  Profile as default
};
