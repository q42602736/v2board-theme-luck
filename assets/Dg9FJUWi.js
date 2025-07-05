import { k as defineComponent, r as ref, c as computed, o as onMounted, $ as createElementBlock, a0 as createBaseVNode, a1 as createStaticVNode, a3 as createCommentVNode, a2 as toDisplayString, F as Fragment, Q as renderList, a7 as withModifiers, U as openBlock, L as normalizeClass } from "./DM1yaN1X.js";
import { a as apiClient } from "./BBbuoBq5.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import "./BEq_qS6Y.js";
import "./0I8bmyai.js";
const _hoisted_1 = { class: "docs-page" };
const _hoisted_2 = { class: "docs-container" };
const _hoisted_3 = { class: "docs-content" };
const _hoisted_4 = {
  key: 0,
  class: "loading-container"
};
const _hoisted_5 = {
  key: 1,
  class: "error-container"
};
const _hoisted_6 = {
  key: 2,
  class: "docs-container"
};
const _hoisted_7 = { class: "category-filter" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "docs-grid" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "doc-card-header" };
const _hoisted_12 = { class: "doc-card-title" };
const _hoisted_13 = { class: "doc-card-meta" };
const _hoisted_14 = {
  key: 0,
  class: "doc-card-category"
};
const _hoisted_15 = { class: "doc-card-date" };
const _hoisted_16 = {
  key: 3,
  class: "empty-container"
};
const _hoisted_17 = { class: "modal-content" };
const _hoisted_18 = { class: "modal-header" };
const _hoisted_19 = { class: "modal-title" };
const _hoisted_20 = {
  key: 0,
  class: "modal-meta"
};
const _hoisted_21 = {
  key: 0,
  class: "badge bg-primary"
};
const _hoisted_22 = { class: "text-muted" };
const _hoisted_23 = { class: "modal-body" };
const _hoisted_24 = {
  key: 0,
  class: "text-center py-4"
};
const _hoisted_25 = ["innerHTML"];
const _hoisted_26 = {
  key: 2,
  class: "text-center py-4"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Docs",
  setup(__props) {
    const loading = ref(true);
    const error = ref("");
    const documents = ref([]);
    const selectedCategory = ref("");
    const showModal = ref(false);
    const modalDocument = ref(null);
    const modalLoading = ref(false);
    const categories = computed(() => {
      const cats = [""];
      documents.value.forEach((doc) => {
        if (doc.category && !cats.includes(doc.category)) {
          cats.push(doc.category);
        }
      });
      return cats;
    });
    const filteredDocuments = computed(() => {
      if (!selectedCategory.value) {
        return documents.value;
      }
      return documents.value.filter((doc) => doc.category === selectedCategory.value);
    });
    const loadDocuments = async () => {
      try {
        loading.value = true;
        error.value = "";
        documents.value = await apiClient.getDocuments();
        documents.value.sort((a, b) => {
          if (a.sort !== b.sort) {
            return a.sort - b.sort;
          }
          return b.updated_at - a.updated_at;
        });
      } catch (err) {
        error.value = err.message || "加载文档失败";
      } finally {
        loading.value = false;
      }
    };
    const selectDocument = async (doc) => {
      try {
        showModal.value = true;
        modalDocument.value = doc;
        if (!doc.content) {
          modalLoading.value = true;
          const fullDoc = await apiClient.getDocumentById(doc.id);
          modalDocument.value = fullDoc;
        }
      } catch (err) {
        error.value = err.message || "获取文档详情失败";
      } finally {
        modalLoading.value = false;
      }
    };
    const closeModal = () => {
      showModal.value = false;
      modalDocument.value = null;
      modalLoading.value = false;
    };
    const formatDate = (timestamp) => {
      return new Date(timestamp * 1e3).toLocaleDateString("zh-CN");
    };
    onMounted(() => {
      loadDocuments();
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[8] || (_cache[8] = createStaticVNode('<div class="page-header" data-v-64c570fd><div class="header-content" data-v-64c570fd><div class="header-icon" data-v-64c570fd><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-64c570fd><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-64c570fd></path><polyline points="14,2 14,8 20,8" data-v-64c570fd></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-64c570fd></line><line x1="16" y1="17" x2="8" y2="17" data-v-64c570fd></line><polyline points="10,9 9,9 8,9" data-v-64c570fd></polyline></svg></div><div class="header-text" data-v-64c570fd><h1 class="page-title" data-v-64c570fd>使用文档</h1><p class="page-subtitle" data-v-64c570fd>详细的使用指南和常见问题解答</p></div></div></div>', 1)),
          createBaseVNode("div", _hoisted_3, [
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_4, _cache[1] || (_cache[1] = [
              createBaseVNode("div", { class: "loading-spinner" }, null, -1),
              createBaseVNode("p", null, "正在加载文档...", -1)
            ]))) : error.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
              _cache[2] || (_cache[2] = createStaticVNode('<div class="error-icon" data-v-64c570fd><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-64c570fd><circle cx="12" cy="12" r="10" data-v-64c570fd></circle><line x1="12" y1="8" x2="12" y2="12" data-v-64c570fd></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-64c570fd></line></svg></div><h3 data-v-64c570fd>加载失败</h3>', 2)),
              createBaseVNode("p", null, toDisplayString(error.value), 1),
              createBaseVNode("button", {
                class: "btn-base btn-medium btn-primary",
                onClick: loadDocuments
              }, " 重新加载 ")
            ])) : documents.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(categories.value, (category) => {
                  return openBlock(), createElementBlock("button", {
                    key: category,
                    class: normalizeClass(["category-btn", { "active": selectedCategory.value === category }]),
                    onClick: ($event) => selectedCategory.value = category
                  }, toDisplayString(category || "全部"), 11, _hoisted_8);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredDocuments.value, (doc) => {
                  return openBlock(), createElementBlock("div", {
                    key: doc.id,
                    class: "doc-card",
                    onClick: ($event) => selectDocument(doc)
                  }, [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("h4", _hoisted_12, toDisplayString(doc.title), 1),
                      createBaseVNode("div", _hoisted_13, [
                        doc.category ? (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(doc.category), 1)) : createCommentVNode("", true),
                        createBaseVNode("span", _hoisted_15, toDisplayString(formatDate(doc.updated_at)), 1)
                      ])
                    ]),
                    _cache[3] || (_cache[3] = createBaseVNode("div", { class: "doc-card-preview" }, " 点击查看详细内容 ", -1)),
                    _cache[4] || (_cache[4] = createBaseVNode("div", { class: "doc-card-action" }, [
                      createBaseVNode("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createBaseVNode("path", { d: "M9 18l6-6-6-6" })
                      ])
                    ], -1))
                  ], 8, _hoisted_10);
                }), 128))
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_16, _cache[5] || (_cache[5] = [
              createBaseVNode("div", { class: "empty-icon" }, [
                createBaseVNode("svg", {
                  width: "64",
                  height: "64",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createBaseVNode("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                  createBaseVNode("polyline", { points: "14,2 14,8 20,8" })
                ])
              ], -1),
              createBaseVNode("h3", null, "暂无文档", -1),
              createBaseVNode("p", null, "管理员还没有创建任何文档", -1)
            ]))),
            showModal.value ? (openBlock(), createElementBlock("div", {
              key: 4,
              class: "modal-backdrop",
              onClick: closeModal
            }, [
              createBaseVNode("div", {
                class: "modal-dialog",
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"]))
              }, [
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("h4", _hoisted_19, toDisplayString((_a = modalDocument.value) == null ? void 0 : _a.title), 1)
                  ]),
                  modalDocument.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
                    modalDocument.value.category ? (openBlock(), createElementBlock("span", _hoisted_21, toDisplayString(modalDocument.value.category), 1)) : createCommentVNode("", true),
                    createBaseVNode("small", _hoisted_22, "更新时间：" + toDisplayString(formatDate(modalDocument.value.updated_at)), 1)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_23, [
                    modalLoading.value ? (openBlock(), createElementBlock("div", _hoisted_24, _cache[6] || (_cache[6] = [
                      createBaseVNode("div", {
                        class: "spinner-border text-primary",
                        role: "status"
                      }, [
                        createBaseVNode("span", { class: "visually-hidden" }, "加载中...")
                      ], -1),
                      createBaseVNode("p", { class: "mt-2 text-muted" }, "正在加载文档内容...", -1)
                    ]))) : ((_b = modalDocument.value) == null ? void 0 : _b.content) ? (openBlock(), createElementBlock("div", {
                      key: 1,
                      class: "document-content",
                      innerHTML: modalDocument.value.content
                    }, null, 8, _hoisted_25)) : (openBlock(), createElementBlock("div", _hoisted_26, _cache[7] || (_cache[7] = [
                      createBaseVNode("p", { class: "text-muted" }, "暂无内容", -1)
                    ])))
                  ]),
                  createBaseVNode("div", { class: "modal-footer" }, [
                    createBaseVNode("button", {
                      type: "button",
                      class: "btn",
                      onClick: closeModal
                    }, "关闭")
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
const Docs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-64c570fd"]]);
export {
  Docs as default
};
