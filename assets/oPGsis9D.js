import { u as useAuthStore, a as apiClient } from "./BBbuoBq5.js";
import { b as browser } from "./0I8bmyai.js";
import { D as DesktopModal } from "./3u1s8V6K.js";
import { k as defineComponent, r as ref, c as computed, o as onMounted, w as watch, $ as createElementBlock, a0 as createBaseVNode, a3 as createCommentVNode, I as normalizeStyle, a2 as toDisplayString, a1 as createStaticVNode, L as normalizeClass, n as nextTick, U as openBlock, W as createVNode, V as withCtx, N as unref, F as Fragment, Q as renderList, j as createTextVNode, m as h } from "./DM1yaN1X.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import { u as useMessage, a as NSpin, b as NResult, c as NEmpty, e as NDataTable, B as Button, f as NBadge, g as NTag } from "./BEq_qS6Y.js";
const _hoisted_1$1 = { class: "world-map-container" };
const _hoisted_2$1 = { class: "map-container" };
const _hoisted_3$1 = ["transform"];
const _hoisted_4$1 = { class: "tooltip-header" };
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6$1 = { class: "country-name" };
const _hoisted_7$1 = {
  key: 0,
  class: "tooltip-content"
};
const _hoisted_8$1 = { class: "tooltip-row" };
const _hoisted_9$1 = { class: "tooltip-value" };
const _hoisted_10$1 = { class: "tooltip-row" };
const _hoisted_11$1 = {
  key: 0,
  class: "tooltip-row"
};
const _hoisted_12$1 = { class: "tooltip-value status-online" };
const _hoisted_13$1 = {
  key: 1,
  class: "tooltip-content"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WorldMap",
  props: {
    servers: {}
  },
  setup(__props) {
    const props = __props;
    const isServerOnline = (server) => {
      if (server.is_online !== void 0) {
        return server.is_online === 1;
      }
      if (!server.last_check_at) return false;
      const lastCheck = new Date(server.last_check_at * 1e3);
      const now = /* @__PURE__ */ new Date();
      const diffSeconds = (now.getTime() - lastCheck.getTime()) / 1e3;
      return diffSeconds <= 300;
    };
    const mapContainer = ref();
    const svgElement = ref();
    const zoomGroup = ref();
    const scale = ref(1.2);
    const translateX = ref(150);
    const translateY = ref(0);
    const isDragging = ref(false);
    const lastMouseX = ref(0);
    const lastMouseY = ref(0);
    const isMobile = ref(false);
    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768;
    };
    const setMobileZoom = () => {
      if (isMobile.value) {
        scale.value = 1.5;
        translateX.value = 0;
        translateY.value = 50;
      } else {
        scale.value = 1.2;
        translateX.value = 150;
        translateY.value = 0;
      }
    };
    const tooltip = ref({
      show: false,
      x: 0,
      y: 0,
      countryName: "",
      nodeCount: 0,
      onlineCount: 0
    });
    const countryCoordinates = {
      "香港": { x: 780, y: 220 },
      "新加坡": { x: 750, y: 290 },
      "美国": { x: 200, y: 200 },
      "日本": { x: 850, y: 220 },
      "韩国": { x: 830, y: 210 },
      "台湾": { x: 780, y: 220 },
      "泰国": { x: 720, y: 270 },
      "德国": { x: 520, y: 180 },
      "英国": { x: 480, y: 160 },
      "法国": { x: 500, y: 190 },
      "加拿大": { x: 200, y: 150 },
      "澳大利亚": { x: 820, y: 380 },
      "土耳其": { x: 580, y: 210 },
      "波兰": { x: 540, y: 170 },
      "荷兰": { x: 510, y: 170 },
      "芬兰": { x: 560, y: 140 },
      "俄罗斯": { x: 700, y: 160 },
      "印度": { x: 680, y: 250 },
      "巴西": { x: 300, y: 320 },
      "阿根廷": { x: 280, y: 400 },
      "墨西哥": { x: 150, y: 240 },
      "意大利": { x: 530, y: 200 },
      "西班牙": { x: 470, y: 200 },
      "瑞士": { x: 520, y: 190 },
      "瑞典": { x: 540, y: 150 },
      "挪威": { x: 520, y: 140 },
      "丹麦": { x: 530, y: 160 },
      "新西兰": { x: 900, y: 420 },
      "冰岛": { x: 450, y: 130 },
      "朝鲜": { x: 820, y: 200 },
      "老挝": { x: 730, y: 260 },
      "越南": { x: 740, y: 260 },
      "印尼": { x: 760, y: 300 },
      "马来西亚": { x: 730, y: 290 },
      "菲律宾": { x: 780, y: 280 },
      "南非": { x: 540, y: 360 },
      "埃及": { x: 560, y: 230 },
      "伊朗": { x: 620, y: 220 },
      "沙特": { x: 600, y: 250 },
      "比利时": { x: 510, y: 180 },
      "奥地利": { x: 540, y: 190 },
      "捷克": { x: 540, y: 180 },
      "匈牙利": { x: 550, y: 190 },
      "罗马尼亚": { x: 560, y: 190 },
      "保加利亚": { x: 560, y: 200 },
      "希腊": { x: 550, y: 210 },
      "葡萄牙": { x: 450, y: 200 },
      "爱尔兰": { x: 460, y: 160 }
    };
    const activeCountries = computed(() => {
      const countryMap = /* @__PURE__ */ new Map();
      const allCountryNames = Object.keys(countryCoordinates);
      props.servers.forEach((server) => {
        for (const countryName of allCountryNames) {
          if (server.name.includes(countryName)) {
            let chineseCountryName = countryName;
            if (countryCoordinates[chineseCountryName]) {
              const current = countryMap.get(chineseCountryName) || { online: 0, total: 0 };
              current.total++;
              if (isServerOnline(server)) {
                current.online++;
              }
              countryMap.set(chineseCountryName, current);
              break;
            }
          }
        }
      });
      return countryMap;
    });
    const transformString = computed(
      () => `translate(${translateX.value}, ${translateY.value}) scale(${scale.value})`
    );
    const getChineseName = (englishName) => {
      const englishToChinese = {
        "Taiwan": "台湾",
        "TW": "台湾",
        "Finland": "芬兰",
        "FI": "芬兰",
        "Netherlands": "荷兰",
        "NL": "荷兰",
        "Turkey": "土耳其",
        "TR": "土耳其",
        "Singapore": "新加坡",
        "SG": "新加坡",
        "China": "中国",
        "CN": "中国",
        "United States": "美国",
        "US": "美国",
        "Japan": "日本",
        "JP": "日本",
        "Republic of Korea": "韩国",
        "South Korea": "韩国",
        "KR": "韩国",
        "Russian Federation": "俄罗斯",
        "Russia": "俄罗斯",
        "RU": "俄罗斯",
        "Germany": "德国",
        "DE": "德国",
        "United Kingdom": "英国",
        "UK": "英国",
        "GB": "英国",
        "France": "法国",
        "FR": "法国",
        "Canada": "加拿大",
        "CA": "加拿大",
        "Australia": "澳大利亚",
        "AU": "澳大利亚",
        "India": "印度",
        "IN": "印度",
        "Thailand": "泰国",
        "TH": "泰国",
        "Brazil": "巴西",
        "BR": "巴西",
        "Italy": "意大利",
        "IT": "意大利",
        "Spain": "西班牙",
        "ES": "西班牙",
        "Mexico": "墨西哥",
        "MX": "墨西哥",
        "Argentina": "阿根廷",
        "AR": "阿根廷",
        "South Africa": "南非",
        "ZA": "南非",
        "Egypt": "埃及",
        "EG": "埃及",
        "Saudi Arabia": "沙特阿拉伯",
        "SA": "沙特阿拉伯",
        "Iran": "伊朗",
        "IR": "伊朗",
        "Pakistan": "巴基斯坦",
        "PK": "巴基斯坦",
        "Bangladesh": "孟加拉国",
        "BD": "孟加拉国",
        "Indonesia": "印度尼西亚",
        "ID": "印度尼西亚",
        "Malaysia": "马来西亚",
        "MY": "马来西亚",
        "Philippines": "菲律宾",
        "PH": "菲律宾",
        "Vietnam": "越南",
        "VN": "越南",
        "Myanmar": "缅甸",
        "MM": "缅甸",
        "Kazakhstan": "哈萨克斯坦",
        "KZ": "哈萨克斯坦",
        "Ukraine": "乌克兰",
        "UA": "乌克兰",
        "Poland": "波兰",
        "PL": "波兰",
        "Romania": "罗马尼亚",
        "RO": "罗马尼亚",
        "Greece": "希腊",
        "GR": "希腊",
        "Portugal": "葡萄牙",
        "PT": "葡萄牙",
        "Belgium": "比利时",
        "BE": "比利时",
        "Switzerland": "瑞士",
        "CH": "瑞士",
        "Austria": "奥地利",
        "AT": "奥地利",
        "Sweden": "瑞典",
        "SE": "瑞典",
        "Norway": "挪威",
        "NO": "挪威",
        "Denmark": "丹麦",
        "DK": "丹麦",
        "Ireland": "爱尔兰",
        "IE": "爱尔兰",
        "New Zealand": "新西兰",
        "NZ": "新西兰",
        "Chile": "智利",
        "CL": "智利",
        "Peru": "秘鲁",
        "PE": "秘鲁",
        "Colombia": "哥伦比亚",
        "CO": "哥伦比亚",
        "Venezuela": "委内瑞拉",
        "VE": "委内瑞拉",
        "Israel": "以色列",
        "IL": "以色列",
        "United Arab Emirates": "阿联酋",
        "AE": "阿联酋",
        "Qatar": "卡塔尔",
        "QA": "卡塔尔",
        "Kuwait": "科威特",
        "KW": "科威特",
        "Jordan": "约旦",
        "JO": "约旦",
        "Lebanon": "黎巴嫩",
        "LB": "黎巴嫩",
        "Syria": "叙利亚",
        "SY": "叙利亚",
        "Iraq": "伊拉克",
        "IQ": "伊拉克",
        "Afghanistan": "阿富汗",
        "AF": "阿富汗",
        "Nepal": "尼泊尔",
        "NP": "尼泊尔",
        "Sri Lanka": "斯里兰卡",
        "LK": "斯里兰卡",
        "Mongolia": "蒙古",
        "MN": "蒙古",
        "North Korea": "朝鲜",
        "KP": "朝鲜",
        "Dem. Rep. Korea": "朝鲜",
        "Hong Kong": "香港",
        "HK": "香港",
        "Macao": "澳门",
        "MO": "澳门",
        "Macau": "澳门",
        // 补充亚洲国家（移除重复项）
        "Kyrgyzstan": "吉尔吉斯斯坦",
        "KG": "吉尔吉斯斯坦",
        // 欧洲国家
        "Albania": "阿尔巴尼亚",
        "AL": "阿尔巴尼亚",
        "Andorra": "安道尔",
        "AD": "安道尔",
        "Armenia": "亚美尼亚",
        "AM": "亚美尼亚",
        "Azerbaijan": "阿塞拜疆",
        "AZ": "阿塞拜疆",
        "Belarus": "白俄罗斯",
        "BY": "白俄罗斯",
        "Bosnia and Herzegovina": "波黑",
        "BA": "波黑",
        "Bulgaria": "保加利亚",
        "BG": "保加利亚",
        "Croatia": "克罗地亚",
        "HR": "克罗地亚",
        "Cyprus": "塞浦路斯",
        "CY": "塞浦路斯",
        "Czech Republic": "捷克",
        "CZ": "捷克",
        "Estonia": "爱沙尼亚",
        "EE": "爱沙尼亚",
        "Georgia": "格鲁吉亚",
        "GE": "格鲁吉亚",
        "Hungary": "匈牙利",
        "HU": "匈牙利",
        "Iceland": "冰岛",
        "IS": "冰岛",
        "Latvia": "拉脱维亚",
        "LV": "拉脱维亚",
        "Liechtenstein": "列支敦士登",
        "LI": "列支敦士登",
        "Lithuania": "立陶宛",
        "LT": "立陶宛",
        "Luxembourg": "卢森堡",
        "LU": "卢森堡",
        "Malta": "马耳他",
        "MT": "马耳他",
        "Moldova": "摩尔多瓦",
        "MD": "摩尔多瓦",
        "Monaco": "摩纳哥",
        "MC": "摩纳哥",
        "Montenegro": "黑山",
        "ME": "黑山",
        "North Macedonia": "北马其顿",
        "MK": "北马其顿",
        "Macedonia": "北马其顿",
        "San Marino": "圣马力诺",
        "SM": "圣马力诺",
        "Serbia": "塞尔维亚",
        "RS": "塞尔维亚",
        "Slovakia": "斯洛伐克",
        "SK": "斯洛伐克",
        "Slovenia": "斯洛文尼亚",
        "SI": "斯洛文尼亚",
        "Vatican City": "梵蒂冈",
        "VA": "梵蒂冈",
        // 非洲国家
        "Algeria": "阿尔及利亚",
        "DZ": "阿尔及利亚",
        "Angola": "安哥拉",
        "AO": "安哥拉",
        "Benin": "贝宁",
        "BJ": "贝宁",
        "Botswana": "博茨瓦纳",
        "BW": "博茨瓦纳",
        "Burkina Faso": "布基纳法索",
        "BF": "布基纳法索",
        "Burundi": "布隆迪",
        "BI": "布隆迪",
        "Cameroon": "喀麦隆",
        "CM": "喀麦隆",
        "Cape Verde": "佛得角",
        "CV": "佛得角",
        "Central African Republic": "中非",
        "CF": "中非",
        "Chad": "乍得",
        "TD": "乍得",
        "Comoros": "科摩罗",
        "KM": "科摩罗",
        "Congo": "刚果共和国",
        "CG": "刚果共和国",
        "Democratic Republic of the Congo": "刚果民主共和国",
        "CD": "刚果民主共和国",
        "Djibouti": "吉布提",
        "DJ": "吉布提",
        "Equatorial Guinea": "赤道几内亚",
        "GQ": "赤道几内亚",
        "Eritrea": "厄立特里亚",
        "ER": "厄立特里亚",
        "Ethiopia": "埃塞俄比亚",
        "ET": "埃塞俄比亚",
        "Gabon": "加蓬",
        "GA": "加蓬",
        "Gambia": "冈比亚",
        "GM": "冈比亚",
        "Ghana": "加纳",
        "GH": "加纳",
        "Guinea": "几内亚",
        "GN": "几内亚",
        "Guinea-Bissau": "几内亚比绍",
        "GW": "几内亚比绍",
        "Ivory Coast": "科特迪瓦",
        "CI": "科特迪瓦",
        "Kenya": "肯尼亚",
        "KE": "肯尼亚",
        "Lesotho": "莱索托",
        "LS": "莱索托",
        "Liberia": "利比里亚",
        "LR": "利比里亚",
        "Libya": "利比亚",
        "LY": "利比亚",
        "Madagascar": "马达加斯加",
        "MG": "马达加斯加",
        "Malawi": "马拉维",
        "MW": "马拉维",
        "Mali": "马里",
        "ML": "马里",
        "Mauritania": "毛里塔尼亚",
        "MR": "毛里塔尼亚",
        "Mauritius": "毛里求斯",
        "MU": "毛里求斯",
        "Morocco": "摩洛哥",
        "MA": "摩洛哥",
        "Mozambique": "莫桑比克",
        "MZ": "莫桑比克",
        "Namibia": "纳米比亚",
        "NA": "纳米比亚",
        "Niger": "尼日尔",
        "NE": "尼日尔",
        "Nigeria": "尼日利亚",
        "NG": "尼日利亚",
        "Rwanda": "卢旺达",
        "RW": "卢旺达",
        "Sao Tome and Principe": "圣多美和普林西比",
        "ST": "圣多美和普林西比",
        "Senegal": "塞内加尔",
        "SN": "塞内加尔",
        "Seychelles": "塞舌尔",
        "SC": "塞舌尔",
        "Sierra Leone": "塞拉利昂",
        "SL": "塞拉利昂",
        "Somalia": "索马里",
        "SO": "索马里",
        "South Sudan": "南苏丹",
        "SS": "南苏丹",
        "Sudan": "苏丹",
        "SD": "苏丹",
        "Swaziland": "斯威士兰",
        "SZ": "斯威士兰",
        "Tanzania": "坦桑尼亚",
        "TZ": "坦桑尼亚",
        "Togo": "多哥",
        "TG": "多哥",
        "Tunisia": "突尼斯",
        "TN": "突尼斯",
        "Uganda": "乌干达",
        "UG": "乌干达",
        "Zambia": "赞比亚",
        "ZM": "赞比亚",
        "Zimbabwe": "津巴布韦",
        "ZW": "津巴布韦",
        // 用户发现的遗漏地区映射
        "South Georgia and South Sandwich Islands": "南乔治亚和南桑威奇群岛",
        "South Georgia and South Sandwich lslands": "南乔治亚和南桑威奇群岛",
        // 拼写变体
        "French Southern and Antarctic Lands": "法属南部和南极领土",
        "French Southern and Antarctic Territories": "法属南部和南极领土",
        "Reunion": "留尼汪",
        "Réunion": "留尼汪",
        "Timor-Leste": "东帝汶",
        "East Timor": "东帝汶",
        "Lao People's Democratic Republic": "老挝",
        "Laos": "老挝",
        "Lao PDR": "老挝",
        // 补充非洲国家的别名和变体
        "Eswatini": "斯威士兰",
        // 斯威士兰的新名称，移除重复的SZ键
        // 刚果共和国（首都布拉柴维尔）
        "Republic of the Congo": "刚果共和国",
        "Republic of Congo": "刚果共和国",
        // SVG中的实际属性值
        "Congo-Brazzaville": "刚果共和国",
        // 刚果民主共和国（首都金沙萨，原扎伊尔）- 移除重复的CD键
        "Democratic Republic of Congo": "刚果民主共和国",
        "Dem. Rep. Congo": "刚果民主共和国",
        // 地图中显示的缩写形式
        "DRC": "刚果民主共和国",
        "Congo-Kinshasa": "刚果民主共和国",
        "Côte d'Ivoire": "科特迪瓦",
        // 移除重复的CI键
        "The Gambia": "冈比亚",
        "Republic of South Africa": "南非",
        "United Republic of Tanzania": "坦桑尼亚",
        "Federal Republic of Nigeria": "尼日利亚",
        "Republic of Ghana": "加纳",
        "Kingdom of Morocco": "摩洛哥",
        "Arab Republic of Egypt": "埃及",
        "Republic of Kenya": "肯尼亚",
        "Federal Democratic Republic of Ethiopia": "埃塞俄比亚",
        "Republic of Uganda": "乌干达",
        "Republic of Zambia": "赞比亚",
        "Republic of Zimbabwe": "津巴布韦",
        "Republic of Botswana": "博茨瓦纳",
        "Republic of Namibia": "纳米比亚",
        "Kingdom of Lesotho": "莱索托",
        "Republic of Malawi": "马拉维",
        "Republic of Madagascar": "马达加斯加",
        "Republic of Mauritius": "毛里求斯",
        "Islamic Republic of Mauritania": "毛里塔尼亚",
        "Republic of Seychelles": "塞舌尔",
        "Republic of Sierra Leone": "塞拉利昂",
        "Republic of Liberia": "利比里亚",
        "Republic of Guinea": "几内亚",
        "Republic of Guinea-Bissau": "几内亚比绍",
        "Republic of Mali": "马里",
        "Republic of Niger": "尼日尔",
        "Republic of Senegal": "塞内加尔",
        "Republic of Benin": "贝宁",
        "Togolese Republic": "多哥",
        "Republic of Cameroon": "喀麦隆",
        "Gabonese Republic": "加蓬",
        "Republic of Equatorial Guinea": "赤道几内亚",
        "Central African Republic": "中非",
        "Republic of Chad": "乍得",
        "Republic of the Sudan": "苏丹",
        "Republic of South Sudan": "南苏丹",
        "State of Eritrea": "厄立特里亚",
        "Republic of Djibouti": "吉布提",
        "Federal Democratic Republic of Somalia": "索马里",
        "Union of the Comoros": "科摩罗",
        "Republic of Cape Verde": "佛得角",
        "People's Democratic Republic of Algeria": "阿尔及利亚",
        "Tunisian Republic": "突尼斯",
        "State of Libya": "利比亚",
        "Republic of Angola": "安哥拉",
        "Republic of Mozambique": "莫桑比克",
        "Republic of Rwanda": "卢旺达",
        "Republic of Burundi": "布隆迪",
        // 美洲国家
        "Antigua and Barbuda": "安提瓜和巴布达",
        "AG": "安提瓜和巴布达",
        "Bahamas": "巴哈马",
        "BS": "巴哈马",
        "Barbados": "巴巴多斯",
        "BB": "巴巴多斯",
        "Belize": "伯利兹",
        "BZ": "伯利兹",
        "Bolivia": "玻利维亚",
        "BO": "玻利维亚",
        "Costa Rica": "哥斯达黎加",
        "CR": "哥斯达黎加",
        "Cuba": "古巴",
        "CU": "古巴",
        "Dominica": "多米尼克",
        "DM": "多米尼克",
        "Dominican Republic": "多米尼加",
        "DO": "多米尼加",
        "Ecuador": "厄瓜多尔",
        "EC": "厄瓜多尔",
        "El Salvador": "萨尔瓦多",
        "SV": "萨尔瓦多",
        "Grenada": "格林纳达",
        "GD": "格林纳达",
        "Guatemala": "危地马拉",
        "GT": "危地马拉",
        "Guyana": "圭亚那",
        "GY": "圭亚那",
        "Haiti": "海地",
        "HT": "海地",
        "Honduras": "洪都拉斯",
        "HN": "洪都拉斯",
        "Jamaica": "牙买加",
        "JM": "牙买加",
        "Nicaragua": "尼加拉瓜",
        "NI": "尼加拉瓜",
        "Panama": "巴拿马",
        "PA": "巴拿马",
        "Paraguay": "巴拉圭",
        "PY": "巴拉圭",
        "Saint Kitts and Nevis": "圣基茨和尼维斯",
        "KN": "圣基茨和尼维斯",
        "Saint Lucia": "圣卢西亚",
        "LC": "圣卢西亚",
        "Saint Vincent and the Grenadines": "圣文森特和格林纳丁斯",
        "VC": "圣文森特和格林纳丁斯",
        "Suriname": "苏里南",
        "SR": "苏里南",
        "Trinidad and Tobago": "特立尼达和多巴哥",
        "TT": "特立尼达和多巴哥",
        "Uruguay": "乌拉圭",
        "UY": "乌拉圭",
        // 亚洲其他国家（移除重复项）
        "East Timor": "东帝汶",
        "TL": "东帝汶",
        "Oman": "阿曼",
        "OM": "阿曼",
        "Yemen": "也门",
        "YE": "也门",
        // 大洋洲国家
        "Fiji": "斐济",
        "FJ": "斐济",
        "Kiribati": "基里巴斯",
        "KI": "基里巴斯",
        "Marshall Islands": "马绍尔群岛",
        "MH": "马绍尔群岛",
        "Micronesia": "密克罗尼西亚",
        "FM": "密克罗尼西亚",
        "Nauru": "瑙鲁",
        "NR": "瑙鲁",
        "Palau": "帕劳",
        "PW": "帕劳",
        "Papua New Guinea": "巴布亚新几内亚",
        "PG": "巴布亚新几内亚",
        "Samoa": "萨摩亚",
        "WS": "萨摩亚",
        "Solomon Islands": "所罗门群岛",
        "SB": "所罗门群岛",
        "Tonga": "汤加",
        "TO": "汤加",
        "Tuvalu": "图瓦卢",
        "TV": "图瓦卢",
        "Vanuatu": "瓦努阿图",
        "VU": "瓦努阿图",
        // 特殊地区和领土
        "Greenland": "格陵兰",
        "GL": "格陵兰",
        "Faroe Islands": "法罗群岛",
        "FO": "法罗群岛",
        "Gibraltar": "直布罗陀",
        "GI": "直布罗陀",
        "Guernsey": "根西岛",
        "GG": "根西岛",
        "Jersey": "泽西岛",
        "JE": "泽西岛",
        "Isle of Man": "马恩岛",
        "IM": "马恩岛",
        "Åland Islands": "奥兰群岛",
        "AX": "奥兰群岛",
        "Svalbard and Jan Mayen": "斯瓦尔巴和扬马延",
        "SJ": "斯瓦尔巴和扬马延",
        // 美洲领土
        "Puerto Rico": "波多黎各",
        "PR": "波多黎各",
        "United States Virgin Islands": "美属维尔京群岛",
        "VI": "美属维尔京群岛",
        "American Samoa": "美属萨摩亚",
        "AS": "美属萨摩亚",
        "Guam": "关岛",
        "GU": "关岛",
        "Northern Mariana Islands": "北马里亚纳群岛",
        "MP": "北马里亚纳群岛",
        "United States Minor Outlying Islands": "美国本土外小岛屿",
        "UM": "美国本土外小岛屿",
        "British Virgin Islands": "英属维尔京群岛",
        "VG": "英属维尔京群岛",
        "Cayman Islands": "开曼群岛",
        "KY": "开曼群岛",
        "Turks and Caicos Islands": "特克斯和凯科斯群岛",
        "TC": "特克斯和凯科斯群岛",
        "Anguilla": "安圭拉",
        "AI": "安圭拉",
        "Montserrat": "蒙特塞拉特",
        "MS": "蒙特塞拉特",
        "Bermuda": "百慕大",
        "BM": "百慕大",
        "Aruba": "阿鲁巴",
        "AW": "阿鲁巴",
        "Curaçao": "库拉索",
        "CW": "库拉索",
        "Sint Maarten": "荷属圣马丁",
        "SX": "荷属圣马丁",
        "Caribbean Netherlands": "荷属加勒比区",
        "BQ": "荷属加勒比区",
        "French Guiana": "法属圭亚那",
        "GF": "法属圭亚那",
        "Guadeloupe": "瓜德罗普",
        "GP": "瓜德罗普",
        "Martinique": "马提尼克",
        "MQ": "马提尼克",
        "Saint Barthélemy": "圣巴泰勒米",
        "BL": "圣巴泰勒米",
        "Saint Martin": "法属圣马丁",
        "MF": "法属圣马丁",
        "Saint Pierre and Miquelon": "圣皮埃尔和密克隆",
        "PM": "圣皮埃尔和密克隆",
        // 太平洋领土
        "French Polynesia": "法属波利尼西亚",
        "PF": "法属波利尼西亚",
        "New Caledonia": "新喀里多尼亚",
        "NC": "新喀里多尼亚",
        "Wallis and Futuna": "瓦利斯和富图纳",
        "WF": "瓦利斯和富图纳",
        "Cook Islands": "库克群岛",
        "CK": "库克群岛",
        "Niue": "纽埃",
        "NU": "纽埃",
        "Tokelau": "托克劳",
        "TK": "托克劳",
        "Pitcairn Islands": "皮特凯恩群岛",
        "PN": "皮特凯恩群岛",
        "Norfolk Island": "诺福克岛",
        "NF": "诺福克岛",
        "Christmas Island": "圣诞岛",
        "CX": "圣诞岛",
        "Cocos Islands": "科科斯群岛",
        "CC": "科科斯群岛",
        // 大西洋和其他领土
        "Falkland Islands": "福克兰群岛",
        "FK": "福克兰群岛",
        "South Georgia and the South Sandwich Islands": "南乔治亚和南桑威奇群岛",
        "GS": "南乔治亚和南桑威奇群岛",
        "Saint Helena": "圣赫勒拿",
        "SH": "圣赫勒拿",
        "Ascension and Tristan da Cunha": "阿森松和特里斯坦达库尼亚",
        "AC": "阿森松和特里斯坦达库尼亚",
        "British Indian Ocean Territory": "英属印度洋领地",
        "IO": "英属印度洋领地",
        "French Southern Territories": "法属南部领土",
        "TF": "法属南部领土",
        "Heard Island and McDonald Islands": "赫德岛和麦克唐纳群岛",
        "HM": "赫德岛和麦克唐纳群岛",
        "Bouvet Island": "布韦岛",
        "BV": "布韦岛",
        // 非洲领土
        "Réunion": "留尼汪",
        "RE": "留尼汪",
        "Mayotte": "马约特",
        "YT": "马约特",
        "Western Sahara": "西撒哈拉",
        "EH": "西撒哈拉",
        // 特殊地区
        "Antarctica": "南极洲",
        "AQ": "南极洲",
        "Kosovo": "科索沃",
        "XK": "科索沃",
        "Palestine": "巴勒斯坦",
        "PS": "巴勒斯坦"
        // 补充在SVG国旗系统中但映射缺失的国家（移除重复项，这些国家在前面已经定义过了）
      };
      return englishToChinese[englishName] || englishName;
    };
    const loadWorldMap = async () => {
      try {
        const response = await fetch("/world-two.svg");
        const svgText = await response.text();
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
        const svgElement2 = svgDoc.querySelector("svg");
        if (svgElement2 && zoomGroup.value) {
          const loadingText = zoomGroup.value.querySelector("text");
          if (loadingText) {
            loadingText.remove();
          }
          const paths = svgElement2.querySelectorAll("path");
          paths.forEach((path) => {
            var _a;
            const newPath = path.cloneNode(true);
            const countryName = newPath.getAttribute("title") || newPath.getAttribute("id") || "";
            const chineseName = getChineseName(countryName);
            newPath.setAttribute("data-chinese-name", chineseName);
            newPath.setAttribute("fill", "#ffffff");
            newPath.setAttribute("stroke", "#333333");
            newPath.setAttribute("stroke-width", "0.3");
            newPath.classList.add("country");
            newPath.addEventListener("mouseenter", (e) => showCountryTooltip(e, chineseName));
            newPath.addEventListener("mouseleave", hideCountryTooltip);
            (_a = zoomGroup.value) == null ? void 0 : _a.appendChild(newPath);
          });
          setTimeout(() => {
            updateCountryStyles();
          }, 100);
        }
      } catch (error) {
      }
    };
    const handleWheel = (event) => {
      event.preventDefault();
      const delta = event.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.max(0.5, Math.min(20, scale.value * delta));
      if (svgElement.value) {
        const rect = svgElement.value.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const svgX = mouseX / rect.width * 1600;
        const svgY = mouseY / rect.height * 800;
        const scaleChange = newScale / scale.value;
        translateX.value = svgX - (svgX - translateX.value) * scaleChange;
        translateY.value = svgY - (svgY - translateY.value) * scaleChange;
        scale.value = newScale;
      }
    };
    const handleMouseDown = (event) => {
      isDragging.value = true;
      lastMouseX.value = event.clientX;
      lastMouseY.value = event.clientY;
      if (svgElement.value) {
        svgElement.value.style.cursor = "grabbing";
      }
    };
    const handleMouseMove = (event) => {
      if (!isDragging.value || !svgElement.value) return;
      const rect = svgElement.value.getBoundingClientRect();
      const sensitivity = Math.max(1, scale.value * 0.5);
      const deltaX = (event.clientX - lastMouseX.value) / rect.width * 1600 / scale.value * sensitivity;
      const deltaY = (event.clientY - lastMouseY.value) / rect.height * 800 / scale.value * sensitivity;
      translateX.value += deltaX;
      translateY.value += deltaY;
      lastMouseX.value = event.clientX;
      lastMouseY.value = event.clientY;
    };
    const handleMouseUp = () => {
      isDragging.value = false;
      if (svgElement.value) {
        svgElement.value.style.cursor = "grab";
      }
    };
    const showCountryTooltip = (event, countryName) => {
      if (isDragging.value) return;
      let chineseCountryName = countryName;
      const stats = activeCountries.value.get(chineseCountryName);
      const displayName = chineseCountryName;
      if (mapContainer.value) {
        const rect = mapContainer.value.getBoundingClientRect();
        tooltip.value = {
          show: true,
          x: event.clientX - rect.left + 10,
          y: event.clientY - rect.top - 10,
          countryName: displayName,
          nodeCount: (stats == null ? void 0 : stats.total) || 0,
          onlineCount: (stats == null ? void 0 : stats.online) || 0
        };
      }
    };
    const hideCountryTooltip = () => {
      tooltip.value.show = false;
    };
    const getCountryFlagSVG = (countryName) => {
      const flagColors = {
        // 亚洲国家
        "中国": '<rect width="24" height="16" fill="#DE2910"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "台湾": '<rect width="24" height="16" fill="#FE0000"/><rect width="12" height="8" fill="#000095"/>',
        "日本": '<rect width="24" height="16" fill="#FFFFFF"/><circle cx="12" cy="8" r="4.8" fill="#BC002D"/>',
        "韩国": '<rect width="24" height="16" fill="#FFFFFF"/><circle cx="12" cy="8" r="4" fill="#CD2E3A"/><circle cx="12" cy="8" r="2" fill="#0047A0"/>',
        "朝鲜": '<rect width="24" height="16" fill="#024FA2"/><rect y="3" width="24" height="2" fill="#FFFFFF"/><rect y="6" width="24" height="4" fill="#ED1C27"/><rect y="11" width="24" height="2" fill="#FFFFFF"/>',
        "新加坡": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#ED2939"/><circle cx="6" cy="4" r="2" fill="#FFFFFF"/><polygon points="4,2 5,3 4,4 3,3" fill="#ED2939"/>',
        "泰国": '<rect width="24" height="16" fill="#ED1C24"/><rect y="2.67" width="24" height="2.67" fill="#FFFFFF"/><rect y="5.33" width="24" height="5.33" fill="#241D4F"/><rect y="10.67" width="24" height="2.67" fill="#FFFFFF"/>',
        "马来西亚": '<rect width="24" height="16" fill="#CC0001"/><rect y="1.14" width="24" height="1.14" fill="#FFFFFF"/><rect x="0" y="0" width="12" height="8" fill="#006BB6"/>',
        "印尼": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#FF0000"/>',
        "印度尼西亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#FF0000"/>',
        "菲律宾": '<rect width="24" height="16" fill="#0038A8"/><rect y="8" width="24" height="8" fill="#CE1126"/><polygon points="0,0 12,8 0,16" fill="#FFFFFF"/>',
        "越南": '<rect width="24" height="16" fill="#DA020E"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFFF00"/>',
        "印度": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#FF9933"/><rect y="10.67" width="24" height="5.33" fill="#138808"/><circle cx="12" cy="8" r="2" fill="none" stroke="#000080" stroke-width="0.5"/>',
        "巴基斯坦": '<rect width="24" height="16" fill="#01411C"/><rect width="6" height="16" fill="#FFFFFF"/><circle cx="18" cy="6" r="3" fill="none" stroke="#FFFFFF" stroke-width="0.8"/>',
        "孟加拉国": '<rect width="24" height="16" fill="#006A4E"/><circle cx="10" cy="8" r="4" fill="#F42A41"/>',
        "斯里兰卡": '<rect width="24" height="16" fill="#FFB81C"/><rect width="4" height="16" fill="#E4007C"/><rect x="4" width="4" height="16" fill="#00A651"/>',
        "缅甸": '<rect width="24" height="16" fill="#FECB00"/><rect y="5.33" width="24" height="5.33" fill="#34B233"/><rect y="10.67" width="24" height="5.33" fill="#EA2839"/>',
        "柬埔寨": '<rect width="24" height="16" fill="#032EA1"/><rect y="4" width="24" height="8" fill="#E00025"/>',
        "老挝": '<rect width="24" height="16" fill="#CE1126"/><rect y="4" width="24" height="8" fill="#002868"/><circle cx="12" cy="8" r="3" fill="#FFFFFF"/>',
        "不丹": '<rect width="24" height="16" fill="#FFD520"/><polygon points="0,0 24,16 0,16" fill="#FF4E12"/>',
        "马尔代夫": '<rect width="24" height="16" fill="#D21034"/><rect x="6" y="4" width="12" height="8" fill="#007E3A"/><circle cx="14" cy="8" r="2" fill="#FFFFFF"/>',
        "文莱": '<rect width="24" height="16" fill="#FEDD00"/><rect y="6" width="24" height="4" fill="#FFFFFF"/><rect y="10" width="24" height="6" fill="#000000"/>',
        // 欧洲国家
        "芬兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect x="6" y="0" width="4" height="16" fill="#003580"/><rect x="0" y="6" width="24" height="4" fill="#003580"/>',
        "荷兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#AE1C28"/><rect y="10.67" width="24" height="5.33" fill="#21468B"/>',
        "英国": '<rect width="24" height="16" fill="#012169"/><polygon points="0,0 8,5.33 0,5.33" fill="#FFFFFF"/><polygon points="24,0 16,5.33 24,5.33" fill="#FFFFFF"/>',
        "德国": '<rect width="24" height="16" fill="#FFCE00"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#DD0000"/>',
        "法国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "意大利": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#009246"/><rect x="16" width="8" height="16" fill="#CE2B37"/>',
        "西班牙": '<rect width="24" height="16" fill="#C60B1E"/><rect y="4" width="24" height="8" fill="#FFC400"/>',
        "瑞士": '<rect width="24" height="16" fill="#FF0000"/><rect x="10" y="4" width="4" height="8" fill="#FFFFFF"/><rect x="8" y="6" width="8" height="4" fill="#FFFFFF"/>',
        "瑞典": '<rect width="24" height="16" fill="#006AA7"/><rect x="6" y="0" width="4" height="16" fill="#FECC00"/><rect x="0" y="6" width="24" height="4" fill="#FECC00"/>',
        "挪威": '<rect width="24" height="16" fill="#EF2B2D"/><rect x="6" y="0" width="4" height="16" fill="#FFFFFF"/><rect x="0" y="6" width="24" height="4" fill="#FFFFFF"/><rect x="7" y="0" width="2" height="16" fill="#002868"/><rect x="0" y="7" width="24" height="2" fill="#002868"/>',
        "丹麦": '<rect width="24" height="16" fill="#C60C30"/><rect x="6" y="0" width="4" height="16" fill="#FFFFFF"/><rect x="0" y="6" width="24" height="4" fill="#FFFFFF"/>',
        "冰岛": '<rect width="24" height="16" fill="#02529C"/><rect x="6" y="0" width="4" height="16" fill="#FFFFFF"/><rect x="0" y="6" width="24" height="4" fill="#FFFFFF"/><rect x="7" y="0" width="2" height="16" fill="#DC1E35"/><rect x="0" y="7" width="24" height="2" fill="#DC1E35"/>',
        "土耳其": '<rect width="24" height="16" fill="#E30A17"/><circle cx="8" cy="8" r="4" fill="none" stroke="#FFFFFF" stroke-width="0.8"/><polygon points="12,6 13,8 12,10 10,9 10,7" fill="#FFFFFF"/>',
        "俄罗斯": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "波兰": '<rect width="24" height="16" fill="#DC143C"/><rect width="24" height="8" fill="#FFFFFF"/>',
        "捷克": '<rect width="24" height="16" fill="#D7141A"/><rect width="24" height="8" fill="#FFFFFF"/><polygon points="0,0 12,8 0,16" fill="#11457E"/>',
        "匈牙利": '<rect width="24" height="16" fill="#436F4D"/><rect width="24" height="5.33" fill="#CD2A3E"/><rect y="10.67" width="24" height="5.33" fill="#FFFFFF"/>',
        "奥地利": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#ED2939"/><rect y="10.67" width="24" height="5.33" fill="#ED2939"/>',
        "比利时": '<rect width="24" height="16" fill="#FDDA24"/><rect width="8" height="16" fill="#000000"/><rect x="16" width="8" height="16" fill="#EF3340"/>',
        "卢森堡": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#ED2939"/><rect y="10.67" width="24" height="5.33" fill="#00A1DE"/>',
        "葡萄牙": '<rect width="24" height="16" fill="#FF0000"/><rect width="10" height="16" fill="#006600"/>',
        "希腊": '<rect width="24" height="16" fill="#0D5EAF"/><rect y="1.78" width="24" height="1.78" fill="#FFFFFF"/><rect y="5.33" width="24" height="1.78" fill="#FFFFFF"/><rect y="8.89" width="24" height="1.78" fill="#FFFFFF"/><rect y="12.44" width="24" height="1.78" fill="#FFFFFF"/>',
        "爱尔兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#009A49"/><rect x="16" width="8" height="16" fill="#FF7900"/>',
        // 美洲国家
        "美国": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        "加拿大": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="6" height="16" fill="#FF0000"/><rect x="18" width="6" height="16" fill="#FF0000"/><polygon points="12,4 13,7 12,10 11,7" fill="#FF0000"/>',
        "墨西哥": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#006847"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "巴西": '<rect width="24" height="16" fill="#009739"/><polygon points="12,2 20,8 12,14 4,8" fill="#FEDD00"/><circle cx="12" cy="8" r="3" fill="#002776"/>',
        "阿根廷": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#74ACDF"/><rect y="10.67" width="24" height="5.33" fill="#74ACDF"/>',
        "智利": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#D52B1E"/><rect x="0" y="0" width="8" height="8" fill="#0039A6"/>',
        "秘鲁": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#D91023"/><rect x="16" width="8" height="16" fill="#D91023"/>',
        "哥伦比亚": '<rect width="24" height="16" fill="#CE1126"/><rect width="24" height="8" fill="#FCDD09"/><rect y="12" width="24" height="4" fill="#003893"/>',
        "委内瑞拉": '<rect width="24" height="16" fill="#CF142B"/><rect width="24" height="5.33" fill="#FCDD09"/><rect y="10.67" width="24" height="5.33" fill="#00247D"/>',
        "厄瓜多尔": '<rect width="24" height="16" fill="#CE1126"/><rect width="24" height="8" fill="#FCDD09"/><rect y="12" width="24" height="4" fill="#034EA2"/>',
        "玻利维亚": '<rect width="24" height="16" fill="#007934"/><rect width="24" height="5.33" fill="#F9E300"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "巴拉圭": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#D52B1E"/><rect y="10.67" width="24" height="5.33" fill="#0038A8"/>',
        "乌拉圭": '<rect width="24" height="16" fill="#FFFFFF"/><rect y="1.78" width="24" height="1.78" fill="#0038A8"/><rect y="5.33" width="24" height="1.78" fill="#0038A8"/><rect y="8.89" width="24" height="1.78" fill="#0038A8"/>',
        "古巴": '<rect width="24" height="16" fill="#FFFFFF"/><rect y="1.6" width="24" height="1.6" fill="#002A8F"/><rect y="4.8" width="24" height="1.6" fill="#002A8F"/><rect y="8" width="24" height="1.6" fill="#002A8F"/><rect y="11.2" width="24" height="1.6" fill="#002A8F"/><polygon points="0,0 12,8 0,16" fill="#CF142B"/>',
        // 加勒比海国家
        "牙买加": '<rect width="24" height="16" fill="#009639"/><polygon points="0,0 24,16 0,16" fill="#FFDE00"/><polygon points="24,0 0,16 24,16" fill="#FFDE00"/><polygon points="0,0 24,0 12,8" fill="#000000"/><polygon points="0,16 24,16 12,8" fill="#000000"/>',
        "巴巴多斯": '<rect width="24" height="16" fill="#00267F"/><rect width="8" height="16" fill="#FFC72C"/><rect x="16" width="8" height="16" fill="#00267F"/>',
        "特立尼达和多巴哥": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#CE1126"/><rect y="10.67" width="24" height="5.33" fill="#000000"/>',
        "巴哈马": '<rect width="24" height="16" fill="#00778B"/><rect width="24" height="5.33" fill="#FFDE00"/><rect y="10.67" width="24" height="5.33" fill="#00778B"/><polygon points="0,0 12,8 0,16" fill="#000000"/>',
        "多米尼克": '<rect width="24" height="16" fill="#006B3F"/><rect width="24" height="5.33" fill="#FFDE00"/><rect y="10.67" width="24" height="5.33" fill="#FFFFFF"/><circle cx="12" cy="8" r="4" fill="#CE1126"/>',
        "格林纳达": '<rect width="24" height="16" fill="#CE1126"/><polygon points="0,0 24,0 24,16 0,16" fill="#CE1126"/><rect x="4" y="4" width="16" height="8" fill="#007A3D"/>',
        "圣卢西亚": '<rect width="24" height="16" fill="#65CFFF"/><polygon points="12,4 16,12 8,12" fill="#FFFFFF"/><polygon points="12,6 14,10 10,10" fill="#000000"/>',
        "圣文森特和格林纳丁斯": '<rect width="24" height="16" fill="#0072CE"/><rect width="8" height="16" fill="#FFDE00"/><rect x="16" width="8" height="16" fill="#009639"/>',
        "安提瓜和巴布达": '<rect width="24" height="16" fill="#CE1126"/><polygon points="0,0 24,0 12,8" fill="#000000"/><polygon points="0,16 24,16 12,8" fill="#0072CE"/><circle cx="12" cy="6" r="2" fill="#FFDE00"/>',
        "圣基茨和尼维斯": '<rect width="24" height="16" fill="#009639"/><polygon points="0,0 24,16 0,16" fill="#FFDE00"/><polygon points="24,0 0,16 24,16" fill="#CE1126"/>',
        "多米尼加": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#002D62"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "海地": '<rect width="24" height="16" fill="#00209F"/><rect width="24" height="8" fill="#CE1126"/>',
        // 中美洲国家
        "危地马拉": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#4997D0"/><rect x="16" width="8" height="16" fill="#4997D0"/>',
        "洪都拉斯": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0073CF"/><rect y="10.67" width="24" height="5.33" fill="#0073CF"/>',
        "尼加拉瓜": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0067C6"/><rect y="10.67" width="24" height="5.33" fill="#0067C6"/>',
        "哥斯达黎加": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="3.2" fill="#002B7F"/><rect y="3.2" width="24" height="3.2" fill="#FFFFFF"/><rect y="6.4" width="24" height="3.2" fill="#CE1126"/><rect y="9.6" width="24" height="3.2" fill="#FFFFFF"/><rect y="12.8" width="24" height="3.2" fill="#002B7F"/>',
        "巴拿马": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="12" height="8" fill="#DA020E"/><rect x="12" y="8" width="12" height="8" fill="#0073CF"/>',
        "伯利兹": '<rect width="24" height="16" fill="#003F87"/><rect y="4" width="24" height="8" fill="#FFFFFF"/><circle cx="12" cy="8" r="3" fill="#CE1126"/>',
        "萨尔瓦多": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0047AB"/><rect y="10.67" width="24" height="5.33" fill="#0047AB"/>',
        // 大洋洲国家
        "澳大利亚": '<rect width="24" height="16" fill="#012169"/><rect width="12" height="8" fill="#012169"/><polygon points="2,1 3,3 2,5 1,3" fill="#FFFFFF"/>',
        "新西兰": '<rect width="24" height="16" fill="#012169"/><rect width="12" height="8" fill="#012169"/><polygon points="2,1 3,3 2,5 1,3" fill="#FFFFFF"/>',
        "斐济": '<rect width="24" height="16" fill="#68BFE5"/><rect width="12" height="8" fill="#012169"/>',
        "巴布亚新几内亚": '<rect width="24" height="16" fill="#000000"/><polygon points="0,0 24,16 0,16" fill="#CE1126"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "萨摩亚": '<rect width="24" height="16" fill="#CE1126"/><rect width="12" height="8" fill="#002868"/><polygon points="2,1 3,3 2,5 1,3" fill="#FFFFFF"/>',
        "汤加": '<rect width="24" height="16" fill="#C8102E"/><rect width="12" height="8" fill="#FFFFFF"/><rect x="2" y="2" width="8" height="4" fill="#C8102E"/>',
        "瓦努阿图": '<rect width="24" height="16" fill="#FFDE00"/><rect width="24" height="8" fill="#CE1126"/><polygon points="0,0 8,8 0,16" fill="#000000"/>',
        "帕劳": '<rect width="24" height="16" fill="#4AADD6"/><circle cx="10" cy="8" r="4" fill="#FFDE00"/>',
        "密克罗尼西亚": '<rect width="24" height="16" fill="#6797D6"/><polygon points="6,4 7,6 9,6 7.5,7.5 8,9.5 6,8.5 4,9.5 4.5,7.5 3,6 5,6" fill="#FFFFFF"/>',
        "马绍尔群岛": '<rect width="24" height="16" fill="#003893"/><polygon points="0,16 24,0 24,4 4,16" fill="#FFFFFF"/><polygon points="0,16 24,4 24,8 8,16" fill="#FF9500"/>',
        "基里巴斯": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/><rect y="12" width="24" height="4" fill="#003893"/>',
        "图瓦卢": '<rect width="24" height="16" fill="#6797D6"/><rect width="12" height="8" fill="#012169"/>',
        "瑙鲁": '<rect width="24" height="16" fill="#002B7F"/><rect y="7" width="24" height="2" fill="#FFDE00"/><polygon points="4,8 5,10 7,10 5.5,11.5 6,13.5 4,12.5 2,13.5 2.5,11.5 1,10 3,10" fill="#FFFFFF"/>',
        // 非洲国家
        "南非": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="2.67" fill="#000000"/><rect y="2.67" width="24" height="2.67" fill="#FFB612"/><rect y="5.33" width="24" height="2.67" fill="#FFFFFF"/><rect y="8" width="24" height="2.67" fill="#007A4D"/><rect y="10.67" width="24" height="2.67" fill="#DE3831"/><rect y="13.33" width="24" height="2.67" fill="#002395"/>',
        "埃及": '<rect width="24" height="16" fill="#000000"/><rect width="24" height="5.33" fill="#CE1126"/><rect y="10.67" width="24" height="5.33" fill="#FFFFFF"/>',
        "尼日利亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#008751"/><rect x="16" width="8" height="16" fill="#008751"/>',
        "肯尼亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#006B3F"/>',
        "摩洛哥": '<rect width="24" height="16" fill="#C1272D"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#006233"/>',
        "阿尔及利亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="12" height="16" fill="#006233"/><circle cx="15" cy="6" r="2" fill="#D21034"/><polygon points="17,4 18,6 20,6 18.5,7.5 19,9.5 17,8.5 15,9.5 15.5,7.5 14,6 16,6" fill="#D21034"/>',
        "突尼斯": '<rect width="24" height="16" fill="#E70013"/><circle cx="12" cy="8" r="4" fill="#FFFFFF"/><circle cx="12" cy="8" r="3" fill="#E70013"/>',
        "利比亚": '<rect width="24" height="16" fill="#000000"/><rect width="24" height="5.33" fill="#E70013"/><rect y="10.67" width="24" height="5.33" fill="#239E46"/>',
        "加纳": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#CE1126"/><rect y="10.67" width="24" height="5.33" fill="#006B3F"/><polygon points="12,6 13,8 15,8 13.5,9.5 14,11.5 12,10.5 10,11.5 10.5,9.5 9,8 11,8" fill="#000000"/>',
        "埃塞俄比亚": '<rect width="24" height="16" fill="#078930"/><rect width="24" height="5.33" fill="#FCDD09"/><rect y="10.67" width="24" height="5.33" fill="#DA020E"/>',
        "安哥拉": '<rect width="24" height="16" fill="#000000"/><rect width="24" height="8" fill="#CE1126"/>',
        "贝宁": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#008751"/><rect x="16" width="8" height="16" fill="#FCDD09"/>',
        "博茨瓦纳": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#6CACE4"/><rect y="10.67" width="24" height="5.33" fill="#6CACE4"/><rect y="6" width="24" height="4" fill="#000000"/>',
        "布基纳法索": '<rect width="24" height="16" fill="#009E49"/><rect width="24" height="8" fill="#CE1126"/>',
        "布隆迪": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#CE1126"/><rect y="10.67" width="24" height="5.33" fill="#1EB53A"/>',
        "喀麦隆": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#007A5E"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "佛得角": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#003893"/><rect y="10.67" width="24" height="5.33" fill="#003893"/>',
        "中非": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="4" fill="#003893"/><rect y="4" width="24" height="4" fill="#FFFFFF"/><rect y="8" width="24" height="4" fill="#289728"/><rect y="12" width="24" height="4" fill="#FCDD09"/>',
        "乍得": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#002664"/><rect x="16" width="8" height="16" fill="#C60C30"/>',
        "科摩罗": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="4" fill="#FFFFFF"/><rect y="4" width="24" height="4" fill="#CE1126"/><rect y="8" width="24" height="4" fill="#3A75C4"/><rect y="12" width="24" height="4" fill="#3A75C4"/>',
        "刚果共和国": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#009639"/><rect x="16" width="8" height="16" fill="#DC143C"/>',
        "刚果民主共和国": '<rect width="24" height="16" fill="#007FFF"/><rect width="24" height="2" fill="#FCDD09"/><rect y="14" width="24" height="2" fill="#FCDD09"/>',
        "吉布提": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#6AB2E7"/><rect y="12" width="24" height="4" fill="#12AD2B"/>',
        "赤道几内亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#3E9A00"/><rect y="10.67" width="24" height="5.33" fill="#E32017"/>',
        "厄立特里亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#12AD2B"/><rect y="10.67" width="24" height="5.33" fill="#0F47AF"/>',
        "加蓬": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#3A75C4"/>',
        "冈比亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="4" fill="#CE1126"/><rect y="4" width="24" height="8" fill="#0C1C8C"/><rect y="12" width="24" height="4" fill="#3A7728"/>',
        "几内亚": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#CE1126"/><rect x="16" width="8" height="16" fill="#009639"/>',
        "几内亚比绍": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#CE1126"/><rect x="16" width="8" height="16" fill="#009639"/>',
        "科特迪瓦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#F77F00"/><rect x="16" width="8" height="16" fill="#009639"/>',
        "莱索托": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#00209F"/>',
        "利比里亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="1.45" fill="#BF0A30"/><rect y="2.91" width="24" height="1.45" fill="#FFFFFF"/><rect y="4.36" width="24" height="1.45" fill="#BF0A30"/>',
        "马达加斯加": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#FFFFFF"/><rect x="8" width="16" height="8" fill="#FC3D32"/><rect x="8" y="8" width="16" height="8" fill="#007E3A"/>',
        "马拉维": '<rect width="24" height="16" fill="#21873D"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "马里": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#009639"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "毛里塔尼亚": '<rect width="24" height="16" fill="#00A651"/><circle cx="12" cy="6" r="3" fill="#FCDD09"/>',
        "毛里求斯": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="4" fill="#EA2839"/><rect y="4" width="24" height="4" fill="#21166B"/><rect y="8" width="24" height="4" fill="#009639"/><rect y="12" width="24" height="4" fill="#FCDD09"/>',
        "莫桑比克": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#FCDD09"/>',
        "纳米比亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#003893"/><rect y="10.67" width="24" height="5.33" fill="#009639"/>',
        "尼日尔": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#E05206"/><rect y="10.67" width="24" height="5.33" fill="#0DB02B"/>',
        "卢旺达": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="5.33" fill="#00A1DE"/><rect y="10.67" width="24" height="5.33" fill="#009639"/>',
        "圣多美和普林西比": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "塞内加尔": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#009639"/><rect x="16" width="8" height="16" fill="#FCDD09"/>',
        "塞舌尔": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="4" fill="#003F87"/><rect y="4" width="24" height="4" fill="#FCDD09"/><rect y="8" width="24" height="4" fill="#D62612"/><rect y="12" width="24" height="4" fill="#FFFFFF"/>',
        "塞拉利昂": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#1EB53A"/><rect y="10.67" width="24" height="5.33" fill="#0072C6"/>',
        "索马里": '<rect width="24" height="16" fill="#4189DD"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFFFFF"/>',
        "苏丹": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#CE1126"/><rect y="10.67" width="24" height="5.33" fill="#000000"/>',
        "斯威士兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#3E5EB9"/><rect y="10.67" width="24" height="5.33" fill="#FCDD09"/>',
        "坦桑尼亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#009639"/><rect y="12" width="24" height="4" fill="#FCD116"/>',
        "多哥": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="3.2" fill="#006A4E"/><rect y="3.2" width="24" height="3.2" fill="#FCDD09"/><rect y="6.4" width="24" height="3.2" fill="#006A4E"/><rect y="9.6" width="24" height="3.2" fill="#FCDD09"/><rect y="12.8" width="24" height="3.2" fill="#006A4E"/>',
        "乌干达": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="2.67" fill="#000000"/><rect y="2.67" width="24" height="2.67" fill="#FCDD09"/><rect y="5.33" width="24" height="2.67" fill="#CE1126"/><rect y="8" width="24" height="2.67" fill="#FCDD09"/><rect y="10.67" width="24" height="2.67" fill="#000000"/><rect y="13.33" width="24" height="2.67" fill="#FCDD09"/>',
        "赞比亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#009639"/><rect y="12" width="24" height="4" fill="#EF7D00"/>',
        "津巴布韦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="2.29" fill="#009639"/><rect y="2.29" width="24" height="2.29" fill="#FCDD09"/><rect y="4.57" width="24" height="2.29" fill="#CE1126"/><rect y="6.86" width="24" height="2.29" fill="#000000"/><rect y="9.14" width="24" height="2.29" fill="#CE1126"/><rect y="11.43" width="24" height="2.29" fill="#FCDD09"/><rect y="13.71" width="24" height="2.29" fill="#009639"/>',
        // 中东国家
        "沙特阿拉伯": '<rect width="24" height="16" fill="#006C35"/>',
        "阿联酋": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#FF0000"/><rect width="8" height="16" fill="#009639"/>',
        "以色列": '<rect width="24" height="16" fill="#FFFFFF"/><rect y="2" width="24" height="3" fill="#0038B8"/><rect y="11" width="24" height="3" fill="#0038B8"/>',
        "伊朗": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#239F40"/><rect y="10.67" width="24" height="5.33" fill="#DA0000"/>',
        "伊拉克": '<rect width="24" height="16" fill="#000000"/><rect width="24" height="5.33" fill="#CE1126"/><rect y="10.67" width="24" height="5.33" fill="#FFFFFF"/>',
        "约旦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#007A3D"/><polygon points="0,0 12,8 0,16" fill="#CE1126"/>',
        "黎巴嫩": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#ED1C24"/><rect y="10.67" width="24" height="5.33" fill="#ED1C24"/>',
        "科威特": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#007A3D"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/><polygon points="0,0 8,8 0,16" fill="#000000"/>',
        "卡塔尔": '<rect width="24" height="16" fill="#8B1538"/>',
        "巴林": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="12" height="16" fill="#CE1126"/>',
        "阿曼": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#ED1C24"/><rect y="10.67" width="24" height="5.33" fill="#009639"/><rect width="8" height="16" fill="#ED1C24"/>',
        "也门": '<rect width="24" height="16" fill="#000000"/><rect width="24" height="5.33" fill="#CE1126"/><rect y="10.67" width="24" height="5.33" fill="#FFFFFF"/>',
        // 争议地区
        "西撒哈拉": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#000000"/><rect y="12" width="24" height="4" fill="#007A3D"/><polygon points="0,0 12,8 0,16" fill="#C4111B"/>',
        // 特别行政区和地区
        "香港": '<rect width="24" height="16" fill="#DE2910"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/><polygon points="18,4 20,8 16,8" fill="#FFFFFF"/>',
        "澳门": '<rect width="24" height="16" fill="#067662"/><polygon points="12,4 14,8 10,8" fill="#FFDE00"/>',
        // 其他重要国家
        "哈萨克斯坦": '<rect width="24" height="16" fill="#00AFCA"/><rect y="6" width="24" height="4" fill="#FFDE00"/>',
        "乌兹别克斯坦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0099B5"/><rect y="10.67" width="24" height="5.33" fill="#1EB53A"/>',
        "土库曼斯坦": '<rect width="24" height="16" fill="#00B04F"/><rect width="8" height="16" fill="#D22730"/>',
        "吉尔吉斯斯坦": '<rect width="24" height="16" fill="#E4002B"/><circle cx="12" cy="8" r="4" fill="#FFDE00"/>',
        "塔吉克斯坦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#DC143C"/><rect y="10.67" width="24" height="5.33" fill="#006600"/>',
        "阿富汗": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#000000"/><rect x="16" width="8" height="16" fill="#D32011"/>',
        "蒙古": '<rect width="24" height="16" fill="#0066CC"/><rect width="8" height="16" fill="#E4002B"/><rect x="16" width="8" height="16" fill="#0066CC"/>',
        "尼泊尔": '<rect width="24" height="16" fill="#DC143C"/><polygon points="0,0 12,8 0,16" fill="#003893"/>',
        "斯洛伐克": '<rect width="24" height="16" fill="#EE1C25"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#0B4EA2"/>',
        "斯洛文尼亚": '<rect width="24" height="16" fill="#FF0000"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#0000FF"/>',
        "克罗地亚": '<rect width="24" height="16" fill="#0000FF"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#FF0000"/>',
        "塞尔维亚": '<rect width="24" height="16" fill="#0000FF"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#C6363C"/>',
        "波黑": '<rect width="24" height="16" fill="#002395"/><polygon points="0,0 24,12 0,16" fill="#FECB00"/>',
        "北马其顿": '<rect width="24" height="16" fill="#D20000"/><circle cx="12" cy="8" r="4" fill="#FFE600"/>',
        "Macedonia": '<rect width="24" height="16" fill="#D20000"/><circle cx="12" cy="8" r="4" fill="#FFE600"/>',
        "阿尔巴尼亚": '<rect width="24" height="16" fill="#E41E20"/>',
        "保加利亚": '<rect width="24" height="16" fill="#00966E"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D62612"/>',
        "罗马尼亚": '<rect width="24" height="16" fill="#FFDE00"/><rect width="8" height="16" fill="#002B7F"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "摩尔多瓦": '<rect width="24" height="16" fill="#FFDE00"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "格鲁吉亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect x="10" y="0" width="4" height="16" fill="#FF0000"/><rect x="0" y="6" width="24" height="4" fill="#FF0000"/>',
        "亚美尼亚": '<rect width="24" height="16" fill="#0033A0"/><rect width="24" height="5.33" fill="#FF0000"/><rect y="10.67" width="24" height="5.33" fill="#F2A800"/>',
        "阿塞拜疆": '<rect width="24" height="16" fill="#00B9E4"/><rect width="24" height="5.33" fill="#FF0000"/><rect y="10.67" width="24" height="5.33" fill="#3F9C35"/>',
        "白俄罗斯": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/><rect y="12" width="24" height="4" fill="#00B04F"/>',
        "乌克兰": '<rect width="24" height="16" fill="#FFDE00"/><rect width="24" height="8" fill="#005BBB"/>',
        "立陶宛": '<rect width="24" height="16" fill="#006A44"/><rect width="24" height="5.33" fill="#FFDE00"/><rect y="10.67" width="24" height="5.33" fill="#C1272D"/>',
        "拉脱维亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#9E3039"/><rect y="10.67" width="24" height="5.33" fill="#9E3039"/>',
        "爱沙尼亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0072CE"/><rect y="10.67" width="24" height="5.33" fill="#000000"/>',
        // 欧洲小国
        "摩纳哥": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/>',
        "圣马力诺": '<rect width="24" height="16" fill="#5EB3F5"/><rect width="24" height="8" fill="#FFFFFF"/>',
        "安道尔": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#0018A8"/><rect x="16" width="8" height="16" fill="#D52B1E"/>',
        "列支敦士登": '<rect width="24" height="16" fill="#CE1126"/><rect width="24" height="8" fill="#002B7F"/>',
        "马耳他": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="12" height="16" fill="#CF142B"/>',
        "塞浦路斯": '<rect width="24" height="16" fill="#FFFFFF"/><polygon points="12,4 16,8 12,12 8,8" fill="#D57800"/>',
        "梵蒂冈": '<rect width="24" height="16" fill="#FFDE00"/><rect width="12" height="16" fill="#FFFFFF"/>',
        // 特殊地区和争议地区
        "巴勒斯坦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#007A3D"/><polygon points="0,0 12,8 0,16" fill="#CE1126"/>',
        "科索沃": '<rect width="24" height="16" fill="#244AA5"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFDE00"/>',
        // 南美洲补充
        "苏里南": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="3.2" fill="#377E3F"/><rect y="3.2" width="24" height="3.2" fill="#FFFFFF"/><rect y="6.4" width="24" height="3.2" fill="#B40A2E"/><rect y="9.6" width="24" height="3.2" fill="#FFFFFF"/><rect y="12.8" width="24" height="3.2" fill="#377E3F"/>',
        "圭亚那": '<rect width="24" height="16" fill="#FFFFFF"/><polygon points="0,0 24,0 12,8" fill="#009E49"/><polygon points="0,16 24,16 12,8" fill="#009E49"/><polygon points="0,0 12,8 0,16" fill="#FFDE00"/><polygon points="12,6 14,8 12,10 10,8" fill="#000000"/>',
        // 亚洲岛国补充
        "马尔代夫": '<rect width="24" height="16" fill="#D21034"/><rect x="6" y="4" width="12" height="8" fill="#007E3A"/><circle cx="14" cy="8" r="2" fill="#FFFFFF"/>',
        "东帝汶": '<rect width="24" height="16" fill="#FFDE00"/><polygon points="0,0 24,16 0,16" fill="#CE1126"/><polygon points="0,0 8,8 0,16" fill="#000000"/>',
        // 非洲岛国和遗漏国家
        "马达加斯加": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#FFFFFF"/><rect x="8" width="16" height="8" fill="#FC3D32"/><rect x="8" y="8" width="16" height="8" fill="#007E3A"/>',
        "毛里求斯": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="4" fill="#EA2839"/><rect y="4" width="24" height="4" fill="#21166B"/><rect y="8" width="24" height="4" fill="#009639"/><rect y="12" width="24" height="4" fill="#FCDD09"/>',
        "塞舌尔": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="4" fill="#003F87"/><rect y="4" width="24" height="4" fill="#FCDD09"/><rect y="8" width="24" height="4" fill="#D62612"/><rect y="12" width="24" height="4" fill="#FFFFFF"/>',
        "科摩罗": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="4" fill="#FFFFFF"/><rect y="4" width="24" height="4" fill="#CE1126"/><rect y="8" width="24" height="4" fill="#3A75C4"/><rect y="12" width="24" height="4" fill="#3A75C4"/>',
        "佛得角": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#003893"/><rect y="10.67" width="24" height="5.33" fill="#003893"/>',
        // 欧洲遗漏国家（移除重复的北马其顿）
        "黑山": '<rect width="24" height="16" fill="#C40308"/><rect y="6" width="24" height="4" fill="#FCDD09"/>',
        "阿尔巴尼亚": '<rect width="24" height="16" fill="#E41E20"/>',
        "摩尔多瓦": '<rect width="24" height="16" fill="#FFDE00"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        // 中亚和高加索遗漏国家
        "哈萨克斯坦": '<rect width="24" height="16" fill="#00AFCA"/><rect y="6" width="24" height="4" fill="#FFDE00"/>',
        "乌兹别克斯坦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0099B5"/><rect y="10.67" width="24" height="5.33" fill="#1EB53A"/>',
        "土库曼斯坦": '<rect width="24" height="16" fill="#00B04F"/><rect width="8" height="16" fill="#D22730"/>',
        "吉尔吉斯斯坦": '<rect width="24" height="16" fill="#E4002B"/><circle cx="12" cy="8" r="4" fill="#FFDE00"/>',
        "塔吉克斯坦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#DC143C"/><rect y="10.67" width="24" height="5.33" fill="#006600"/>',
        // 南亚遗漏国家
        "阿富汗": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#000000"/><rect x="16" width="8" height="16" fill="#D32011"/>',
        "尼泊尔": '<rect width="24" height="16" fill="#DC143C"/><polygon points="0,0 12,8 0,16" fill="#003893"/>',
        // 东南亚遗漏国家
        "柬埔寨": '<rect width="24" height="16" fill="#032EA1"/><rect y="4" width="24" height="8" fill="#E00025"/>',
        "老挝": '<rect width="24" height="16" fill="#CE1126"/><rect y="4" width="24" height="8" fill="#002868"/><circle cx="12" cy="8" r="3" fill="#FFFFFF"/>',
        // 中东遗漏国家
        "叙利亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        // 海外领土和属地
        "格陵兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#C8102E"/>',
        "法罗群岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect x="6" y="0" width="4" height="16" fill="#ED2939"/><rect x="0" y="6" width="24" height="4" fill="#ED2939"/><rect x="7" y="0" width="2" height="16" fill="#003897"/><rect x="0" y="7" width="24" height="2" fill="#003897"/>',
        "直布罗陀": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#DA020E"/>',
        "马恩岛": '<rect width="24" height="16" fill="#CE1126"/><polygon points="12,4 16,8 12,12 8,8" fill="#FFDE00"/>',
        "泽西岛": '<rect width="24" height="16" fill="#FFFFFF"/><polygon points="0,0 24,16 0,16" fill="#E8112D"/><polygon points="24,0 0,16 24,16" fill="#E8112D"/>',
        "根西岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect x="10" y="0" width="4" height="16" fill="#E8112D"/><rect x="0" y="6" width="24" height="4" fill="#E8112D"/>',
        // 太平洋其他岛国
        "所罗门群岛": '<rect width="24" height="16" fill="#0052CC"/><polygon points="0,0 24,16 0,16" fill="#215B33"/><polygon points="0,0 8,8 0,16" fill="#FCDD09"/>',
        "库克群岛": '<rect width="24" height="16" fill="#012169"/><circle cx="18" cy="6" r="2" fill="#FFFFFF"/>',
        "纽埃": '<rect width="24" height="16" fill="#FFDE00"/><rect width="12" height="8" fill="#012169"/>',
        "托克劳": '<rect width="24" height="16" fill="#012169"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFDE00"/>',
        // 更多非洲国家
        "吉布提": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#6AB2E7"/><rect y="12" width="24" height="4" fill="#12AD2B"/>',
        "厄立特里亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#12AD2B"/><rect y="10.67" width="24" height="5.33" fill="#0F47AF"/>',
        "中非共和国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="4" fill="#003893"/><rect y="4" width="24" height="4" fill="#FFFFFF"/><rect y="8" width="24" height="4" fill="#289728"/><rect y="12" width="24" height="4" fill="#FCDD09"/>',
        "乍得": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#002664"/><rect x="16" width="8" height="16" fill="#C60C30"/>',
        "赤道几内亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#3E9A00"/><rect y="10.67" width="24" height="5.33" fill="#E32017"/>',
        "圣多美和普林西比": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "莱索托": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#00209F"/>',
        "斯威士兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#3E5EB9"/><rect y="10.67" width="24" height="5.33" fill="#FCDD09"/>',
        "南苏丹": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#DA020E"/><polygon points="0,0 12,8 0,16" fill="#0F47AF"/>',
        // 更多亚洲国家
        "文莱": '<rect width="24" height="16" fill="#FEDD00"/><rect y="6" width="24" height="4" fill="#FFFFFF"/><rect y="10" width="24" height="6" fill="#000000"/>',
        "不丹": '<rect width="24" height="16" fill="#FFD520"/><polygon points="0,0 24,16 0,16" fill="#FF4E12"/>',
        // 更多欧洲国家
        "波斯尼亚和黑塞哥维那": '<rect width="24" height="16" fill="#002395"/><polygon points="0,0 24,12 0,16" fill="#FECB00"/>',
        "塞尔维亚": '<rect width="24" height="16" fill="#0000FF"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#C6363C"/>',
        "科索沃": '<rect width="24" height="16" fill="#244AA5"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFDE00"/>',
        // 更多美洲国家
        "伯利兹": '<rect width="24" height="16" fill="#003F87"/><rect y="4" width="24" height="8" fill="#FFFFFF"/><circle cx="12" cy="8" r="3" fill="#CE1126"/>',
        // 英国海外领土
        "百慕大": '<rect width="24" height="16" fill="#CE1126"/><rect width="12" height="8" fill="#012169"/>',
        "开曼群岛": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        "英属维尔京群岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="12" height="8" fill="#012169"/>',
        "蒙特塞拉特": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        "特克斯和凯科斯群岛": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        "安圭拉": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        "福克兰群岛": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        "圣赫勒拿": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        // 法国海外领土
        "法属圭亚那": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "马提尼克": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "瓜德罗普": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "留尼汪": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "马约特": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "新喀里多尼亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "法属波利尼西亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "瓦利斯和富图纳": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "圣皮埃尔和密克隆": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        // 美国海外领土
        "波多黎各": '<rect width="24" height="16" fill="#FFFFFF"/><rect y="1.6" width="24" height="1.6" fill="#ED2939"/><rect y="4.8" width="24" height="1.6" fill="#ED2939"/><rect y="8" width="24" height="1.6" fill="#ED2939"/><rect y="11.2" width="24" height="1.6" fill="#ED2939"/><polygon points="0,0 12,8 0,16" fill="#0052CC"/>',
        "美属维尔京群岛": '<rect width="24" height="16" fill="#FFFFFF"/><polygon points="12,4 16,8 12,12 8,8" fill="#FCDD09"/>',
        "关岛": '<rect width="24" height="16" fill="#0052CC"/><rect width="24" height="8" fill="#CE1126"/>',
        "美属萨摩亚": '<rect width="24" height="16" fill="#0052CC"/><polygon points="0,0 12,8 0,16" fill="#CE1126"/>',
        "北马里亚纳群岛": '<rect width="24" height="16" fill="#0052CC"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFFFFF"/>',
        // 荷兰海外领土
        "阿鲁巴": '<rect width="24" height="16" fill="#418FDE"/><polygon points="4,4 6,8 4,12 2,8" fill="#FCDD09"/>',
        "库拉索": '<rect width="24" height="16" fill="#002B7F"/><rect y="12" width="24" height="4" fill="#FCDD09"/>',
        "荷属圣马丁": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#AE1C28"/><rect y="10.67" width="24" height="5.33" fill="#21468B"/>',
        // 丹麦海外领土（已有格陵兰和法罗群岛）
        // 挪威海外领土
        "斯瓦尔巴": '<rect width="24" height="16" fill="#EF2B2D"/><rect x="6" y="0" width="4" height="16" fill="#FFFFFF"/><rect x="0" y="6" width="24" height="4" fill="#FFFFFF"/><rect x="7" y="0" width="2" height="16" fill="#002868"/><rect x="0" y="7" width="24" height="2" fill="#002868"/>',
        "扬马延": '<rect width="24" height="16" fill="#EF2B2D"/><rect x="6" y="0" width="4" height="16" fill="#FFFFFF"/><rect x="0" y="6" width="24" height="4" fill="#FFFFFF"/><rect x="7" y="0" width="2" height="16" fill="#002868"/><rect x="0" y="7" width="24" height="2" fill="#002868"/>',
        "斯瓦尔巴和扬马延": '<rect width="24" height="16" fill="#EF2B2D"/><rect x="6" y="0" width="4" height="16" fill="#FFFFFF"/><rect x="0" y="6" width="24" height="4" fill="#FFFFFF"/><rect x="7" y="0" width="2" height="16" fill="#002868"/><rect x="0" y="7" width="24" height="2" fill="#002868"/>',
        // 更多南美洲国家
        "法属圭亚那": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        // 更多中美洲和加勒比海国家
        "圣马丁": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "圣巴泰勒米": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        // 更多太平洋岛国
        "美属小离岛": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        "威克岛": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        "中途岛": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        "约翰斯顿环礁": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        // 澳大利亚海外领土
        "诺福克岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#009639"/><rect x="16" width="8" height="16" fill="#009639"/>',
        "圣诞岛": '<rect width="24" height="16" fill="#012169"/><rect width="12" height="8" fill="#012169"/>',
        "科科斯群岛": '<rect width="24" height="16" fill="#009639"/><circle cx="12" cy="8" r="4" fill="#FFDE00"/>',
        "阿什莫尔和卡捷岛": '<rect width="24" height="16" fill="#012169"/><rect width="12" height="8" fill="#012169"/>',
        "珊瑚海群岛": '<rect width="24" height="16" fill="#012169"/><rect width="12" height="8" fill="#012169"/>',
        "赫德岛和麦克唐纳群岛": '<rect width="24" height="16" fill="#012169"/><rect width="12" height="8" fill="#012169"/>',
        "南极领土": '<rect width="24" height="16" fill="#012169"/><rect width="12" height="8" fill="#012169"/>',
        // 新西兰海外领土
        "罗斯属地": '<rect width="24" height="16" fill="#012169"/><rect width="12" height="8" fill="#012169"/>',
        // 智利海外领土
        "复活节岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#D52B1E"/>',
        "胡安费尔南德斯群岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#D52B1E"/>',
        // 厄瓜多尔海外领土
        "加拉帕戈斯群岛": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="5.33" fill="#034EA2"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        // 哥伦比亚海外领土
        "马尔佩洛岛": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="5.33" fill="#003893"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        // 委内瑞拉海外领土
        "阿韦斯岛": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="5.33" fill="#CF142B"/><rect y="10.67" width="24" height="5.33" fill="#00247D"/>',
        // 阿根廷海外领土
        "南极阿根廷": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#74ACDF"/><rect y="10.67" width="24" height="5.33" fill="#74ACDF"/>',
        // 巴西海外领土
        "费尔南多迪诺罗尼亚": '<rect width="24" height="16" fill="#009739"/><polygon points="12,2 20,8 12,14 4,8" fill="#FEDD00"/><circle cx="12" cy="8" r="3" fill="#002776"/>',
        "特林达德和马丁瓦斯": '<rect width="24" height="16" fill="#009739"/><polygon points="12,2 20,8 12,14 4,8" fill="#FEDD00"/><circle cx="12" cy="8" r="3" fill="#002776"/>',
        "圣佩德罗和圣保罗群岛": '<rect width="24" height="16" fill="#009739"/><polygon points="12,2 20,8 12,14 4,8" fill="#FEDD00"/><circle cx="12" cy="8" r="3" fill="#002776"/>',
        // 南极洲
        "南极洲": '<rect width="24" height="16" fill="#FFFFFF"/>',
        // 国际组织和特殊实体
        "联合国": '<rect width="24" height="16" fill="#5B92E5"/><circle cx="12" cy="8" r="6" fill="#FFFFFF"/>',
        "欧盟": '<rect width="24" height="16" fill="#003399"/><polygon points="12,2 13,5 16,5 13.5,7 14.5,10 12,8 9.5,10 10.5,7 8,5 11,5" fill="#FFCC00"/>',
        "红十字国际委员会": '<rect width="24" height="16" fill="#FFFFFF"/><rect x="10" y="4" width="4" height="8" fill="#FF0000"/><rect x="8" y="6" width="8" height="4" fill="#FF0000"/>',
        "奥林匹克": '<rect width="24" height="16" fill="#FFFFFF"/><circle cx="6" cy="6" r="2" fill="none" stroke="#0085C3" stroke-width="1"/><circle cx="12" cy="6" r="2" fill="none" stroke="#000000" stroke-width="1"/><circle cx="18" cy="6" r="2" fill="none" stroke="#DF0024" stroke-width="1"/>',
        // 历史国家和地区
        "苏联": '<rect width="24" height="16" fill="#CC0000"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "南斯拉夫": '<rect width="24" height="16" fill="#0000FF"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#FF0000"/>',
        "捷克斯洛伐克": '<rect width="24" height="16" fill="#D7141A"/><rect width="24" height="8" fill="#FFFFFF"/><polygon points="0,0 12,8 0,16" fill="#11457E"/>',
        "东德": '<rect width="24" height="16" fill="#FFCE00"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#DD0000"/>',
        "西德": '<rect width="24" height="16" fill="#FFCE00"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#DD0000"/>',
        "南越": '<rect width="24" height="16" fill="#FFDE00"/><rect y="1.6" width="24" height="1.6" fill="#DA020E"/><rect y="4.8" width="24" height="1.6" fill="#DA020E"/><rect y="8" width="24" height="1.6" fill="#DA020E"/>',
        "北越": '<rect width="24" height="16" fill="#DA020E"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFFF00"/>',
        "扎伊尔": '<rect width="24" height="16" fill="#007FFF"/><rect width="24" height="2" fill="#FCDD09"/><rect y="14" width="24" height="2" fill="#FCDD09"/>',
        "罗德西亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#009639"/>',
        "缅甸联邦": '<rect width="24" height="16" fill="#FECB00"/><rect y="5.33" width="24" height="5.33" fill="#34B233"/><rect y="10.67" width="24" height="5.33" fill="#EA2839"/>',
        // 更多太平洋岛国和领土
        "皮特凯恩群岛": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        "美属太平洋岛屿": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        "豪兰岛": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        "贝克岛": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        "金曼礁": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        "帕尔米拉环礁": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        "纳瓦萨岛": '<rect width="24" height="16" fill="#B22234"/><rect y="0" width="24" height="1.23" fill="#FFFFFF"/><rect y="2.46" width="24" height="1.23" fill="#FFFFFF"/><rect x="0" y="0" width="9.6" height="8.61" fill="#3C3B6E"/>',
        // 更多英国海外领土
        "阿克罗蒂里和德凯利亚": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        "英属印度洋领土": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        "南乔治亚和南桑威奇群岛": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        "特里斯坦达库尼亚": '<rect width="24" height="16" fill="#0052CC"/><rect width="12" height="8" fill="#012169"/>',
        // 更多法国海外领土
        "克利珀顿岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "法属南部和南极领土": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "凯尔盖朗群岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "克罗泽群岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "阿姆斯特丹岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "圣保罗岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "阿德利地": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        // 更多荷兰海外领土
        "博奈尔": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#AE1C28"/><rect y="10.67" width="24" height="5.33" fill="#21468B"/>',
        "圣尤斯特歇斯": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#AE1C28"/><rect y="10.67" width="24" height="5.33" fill="#21468B"/>',
        "萨巴": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#AE1C28"/><rect y="10.67" width="24" height="5.33" fill="#21468B"/>',
        // 更多丹麦海外领土
        "法罗群岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect x="6" y="0" width="4" height="16" fill="#ED2939"/><rect x="0" y="6" width="24" height="4" fill="#ED2939"/><rect x="7" y="0" width="2" height="16" fill="#003897"/><rect x="0" y="7" width="24" height="2" fill="#003897"/>',
        // 更多芬兰海外领土
        "奥兰群岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect x="6" y="0" width="4" height="16" fill="#003580"/><rect x="0" y="6" width="24" height="4" fill="#003580"/>',
        // 更多意大利海外领土
        "潘泰莱里亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#009246"/><rect x="16" width="8" height="16" fill="#CE2B37"/>',
        "兰佩杜萨": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#009246"/><rect x="16" width="8" height="16" fill="#CE2B37"/>',
        // 更多西班牙海外领土
        "休达": '<rect width="24" height="16" fill="#C60B1E"/><rect y="4" width="24" height="8" fill="#FFC400"/>',
        "梅利利亚": '<rect width="24" height="16" fill="#C60B1E"/><rect y="4" width="24" height="8" fill="#FFC400"/>',
        "加那利群岛": '<rect width="24" height="16" fill="#C60B1E"/><rect y="4" width="24" height="8" fill="#FFC400"/>',
        "巴利阿里群岛": '<rect width="24" height="16" fill="#C60B1E"/><rect y="4" width="24" height="8" fill="#FFC400"/>',
        // 更多葡萄牙海外领土
        "亚速尔群岛": '<rect width="24" height="16" fill="#FF0000"/><rect width="10" height="16" fill="#006600"/>',
        "马德拉": '<rect width="24" height="16" fill="#FF0000"/><rect width="10" height="16" fill="#006600"/>',
        // 更多中国海外领土
        "香港特别行政区": '<rect width="24" height="16" fill="#DE2910"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/><polygon points="18,4 20,8 16,8" fill="#FFFFFF"/>',
        "澳门特别行政区": '<rect width="24" height="16" fill="#067662"/><polygon points="12,4 14,8 10,8" fill="#FFDE00"/>',
        // 更多印度海外领土
        "安达曼和尼科巴群岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#FF9933"/><rect y="10.67" width="24" height="5.33" fill="#138808"/><circle cx="12" cy="8" r="2" fill="none" stroke="#000080" stroke-width="0.5"/>',
        "拉克沙群岛": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#FF9933"/><rect y="10.67" width="24" height="5.33" fill="#138808"/><circle cx="12" cy="8" r="2" fill="none" stroke="#000080" stroke-width="0.5"/>',
        // 更多日本海外领土
        "冲绳": '<rect width="24" height="16" fill="#FFFFFF"/><circle cx="12" cy="8" r="4.8" fill="#BC002D"/>',
        "小笠原群岛": '<rect width="24" height="16" fill="#FFFFFF"/><circle cx="12" cy="8" r="4.8" fill="#BC002D"/>',
        // 更多俄罗斯海外领土
        "加里宁格勒": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "萨哈林": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "千岛群岛": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "新地岛": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "法兰士约瑟夫地": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "北地群岛": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "新西伯利亚群岛": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "弗兰格尔岛": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        // 更多加拿大海外领土
        "努纳武特": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="6" height="16" fill="#FF0000"/><rect x="18" width="6" height="16" fill="#FF0000"/><polygon points="12,4 13,7 12,10 11,7" fill="#FF0000"/>',
        "西北地区": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="6" height="16" fill="#FF0000"/><rect x="18" width="6" height="16" fill="#FF0000"/><polygon points="12,4 13,7 12,10 11,7" fill="#FF0000"/>',
        "育空": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="6" height="16" fill="#FF0000"/><rect x="18" width="6" height="16" fill="#FF0000"/><polygon points="12,4 13,7 12,10 11,7" fill="#FF0000"/>',
        // 更多区域组织和国际实体
        "非洲联盟": '<rect width="24" height="16" fill="#009639"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFDE00"/>',
        "东南亚国家联盟": '<rect width="24" height="16" fill="#003893"/><circle cx="12" cy="8" r="4" fill="#FFDE00"/>',
        "阿拉伯联盟": '<rect width="24" height="16" fill="#009639"/><circle cx="12" cy="8" r="4" fill="#FFFFFF"/>',
        "独联体": '<rect width="24" height="16" fill="#0039A6"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFDE00"/>',
        "上海合作组织": '<rect width="24" height="16" fill="#0052CC"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFDE00"/>',
        "北约": '<rect width="24" height="16" fill="#003366"/><polygon points="12,4 16,8 12,12 8,8" fill="#FFFFFF"/>',
        "华沙条约组织": '<rect width="24" height="16" fill="#CC0000"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFDE00"/>',
        "经济合作与发展组织": '<rect width="24" height="16" fill="#0066CC"/><circle cx="12" cy="8" r="4" fill="#FFFFFF"/>',
        "世界贸易组织": '<rect width="24" height="16" fill="#0052CC"/><polygon points="12,4 16,8 12,12 8,8" fill="#FFFFFF"/>',
        "国际货币基金组织": '<rect width="24" height="16" fill="#003366"/><circle cx="12" cy="8" r="4" fill="#FFDE00"/>',
        "世界银行": '<rect width="24" height="16" fill="#0066CC"/><rect x="8" y="6" width="8" height="4" fill="#FFFFFF"/>',
        // 更多历史政治实体
        "奥匈帝国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/><rect y="12" width="24" height="4" fill="#009639"/>',
        "奥斯曼帝国": '<rect width="24" height="16" fill="#E30A17"/><circle cx="8" cy="8" r="4" fill="none" stroke="#FFFFFF" stroke-width="0.8"/><polygon points="12,6 13,8 12,10 10,9 10,7" fill="#FFFFFF"/>',
        "拜占庭帝国": '<rect width="24" height="16" fill="#FFD700"/><polygon points="12,4 16,8 12,12 8,8" fill="#8B0000"/>',
        "神圣罗马帝国": '<rect width="24" height="16" fill="#FFCE00"/><polygon points="12,4 16,8 12,12 8,8" fill="#000000"/>',
        "大英帝国": '<rect width="24" height="16" fill="#012169"/><polygon points="0,0 8,5.33 0,5.33" fill="#FFFFFF"/><polygon points="24,0 16,5.33 24,5.33" fill="#FFFFFF"/>',
        "法兰西帝国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "西班牙帝国": '<rect width="24" height="16" fill="#C60B1E"/><rect y="4" width="24" height="8" fill="#FFC400"/>',
        "葡萄牙帝国": '<rect width="24" height="16" fill="#FF0000"/><rect width="10" height="16" fill="#006600"/>',
        "荷兰帝国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#AE1C28"/><rect y="10.67" width="24" height="5.33" fill="#21468B"/>',
        "德意志帝国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#DD0000"/>',
        "俄罗斯帝国": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "日本帝国": '<rect width="24" height="16" fill="#FFFFFF"/><circle cx="12" cy="8" r="4.8" fill="#BC002D"/>',
        "中华民国": '<rect width="24" height="16" fill="#FE0000"/><rect width="12" height="8" fill="#000095"/>',
        "满洲国": '<rect width="24" height="16" fill="#FFDE00"/><rect width="24" height="5.33" fill="#DE2910"/><rect y="10.67" width="24" height="5.33" fill="#000000"/>',
        "汪精卫政权": '<rect width="24" height="16" fill="#FFDE00"/><rect width="24" height="5.33" fill="#DE2910"/><rect y="10.67" width="24" height="5.33" fill="#000000"/>',
        "维希法国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "自由法国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "意大利社会共和国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#009246"/><rect x="16" width="8" height="16" fill="#CE2B37"/>',
        "克罗地亚独立国": '<rect width="24" height="16" fill="#0000FF"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#FF0000"/>',
        "斯洛伐克共和国": '<rect width="24" height="16" fill="#EE1C25"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#0B4EA2"/>',
        "芬兰王国": '<rect width="24" height="16" fill="#FFFFFF"/><rect x="6" y="0" width="4" height="16" fill="#003580"/><rect x="0" y="6" width="24" height="4" fill="#003580"/>',
        "波兰立陶宛联邦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#DC143C"/>',
        "加利西亚-沃里尼亚王国": '<rect width="24" height="16" fill="#0000FF"/><rect width="24" height="8" fill="#FFDE00"/>',
        "立陶宛大公国": '<rect width="24" height="16" fill="#006A44"/><rect width="24" height="5.33" fill="#FFDE00"/><rect y="10.67" width="24" height="5.33" fill="#C1272D"/>',
        "拉脱维亚苏维埃社会主义共和国": '<rect width="24" height="16" fill="#CC0000"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "立陶宛苏维埃社会主义共和国": '<rect width="24" height="16" fill="#CC0000"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "爱沙尼亚苏维埃社会主义共和国": '<rect width="24" height="16" fill="#CC0000"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        // 更多微型国家和城市国家
        "摩纳哥公国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/>',
        "圣马力诺共和国": '<rect width="24" height="16" fill="#5EB3F5"/><rect width="24" height="8" fill="#FFFFFF"/>',
        "安道尔公国": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#0018A8"/><rect x="16" width="8" height="16" fill="#D52B1E"/>',
        "列支敦士登公国": '<rect width="24" height="16" fill="#CE1126"/><rect width="24" height="8" fill="#002B7F"/>',
        "卢森堡大公国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#ED2939"/><rect y="10.67" width="24" height="5.33" fill="#00A1DE"/>',
        "马耳他共和国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="12" height="16" fill="#CF142B"/>',
        "塞浦路斯共和国": '<rect width="24" height="16" fill="#FFFFFF"/><polygon points="12,4 16,8 12,12 8,8" fill="#D57800"/>',
        "梵蒂冈城国": '<rect width="24" height="16" fill="#FFDE00"/><rect width="12" height="16" fill="#FFFFFF"/>',
        // 更多分离主义地区和未承认国家
        "阿布哈兹": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="2.29" fill="#009639"/><rect y="2.29" width="24" height="2.29" fill="#FFFFFF"/><rect y="4.57" width="24" height="2.29" fill="#009639"/><rect y="6.86" width="24" height="2.29" fill="#FFFFFF"/><rect y="9.14" width="24" height="2.29" fill="#009639"/><rect y="11.43" width="24" height="2.29" fill="#FFFFFF"/><rect y="13.71" width="24" height="2.29" fill="#009639"/>',
        "南奥塞梯": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#FFDE00"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "德涅斯特河沿岸": '<rect width="24" height="16" fill="#007A3D"/><rect width="24" height="5.33" fill="#CE1126"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "纳戈尔诺-卡拉巴赫": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0033A0"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "顿涅茨克人民共和国": '<rect width="24" height="16" fill="#000000"/><rect width="24" height="5.33" fill="#0052CC"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "卢甘斯克人民共和国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0052CC"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "克里米亚共和国": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "塞瓦斯托波尔": '<rect width="24" height="16" fill="#0039A6"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>',
        "索马里兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "邦特兰": '<rect width="24" height="16" fill="#4189DD"/><polygon points="12,4 13,7 16,7 13.5,9 14.5,12 12,10 9.5,12 10.5,9 8,7 11,7" fill="#FFFFFF"/>',
        "北塞浦路斯": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#E30A17"/><circle cx="8" cy="8" r="3" fill="none" stroke="#FFFFFF" stroke-width="0.8"/>',
        "撒拉威阿拉伯民主共和国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#000000"/><rect y="12" width="24" height="4" fill="#007A3D"/><polygon points="0,0 12,8 0,16" fill="#C4111B"/>',
        // 更多自治区和特殊行政区
        "新疆维吾尔自治区": '<rect width="24" height="16" fill="#DE2910"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "西藏自治区": '<rect width="24" height="16" fill="#DE2910"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "内蒙古自治区": '<rect width="24" height="16" fill="#DE2910"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "广西壮族自治区": '<rect width="24" height="16" fill="#DE2910"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "宁夏回族自治区": '<rect width="24" height="16" fill="#DE2910"/><polygon points="4,2 6,6 2,6" fill="#FFDE00"/>',
        "加泰罗尼亚": '<rect width="24" height="16" fill="#FCDD09"/><rect y="1.6" width="24" height="1.6" fill="#DA020E"/><rect y="4.8" width="24" height="1.6" fill="#DA020E"/><rect y="8" width="24" height="1.6" fill="#DA020E"/><rect y="11.2" width="24" height="1.6" fill="#DA020E"/>',
        "巴斯克": '<rect width="24" height="16" fill="#FFFFFF"/><polygon points="0,0 24,16 0,16" fill="#009639"/><polygon points="24,0 0,16 24,16" fill="#CE1126"/>',
        "加利西亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0052CC"/><rect y="10.67" width="24" height="5.33" fill="#0052CC"/>',
        "苏格兰": '<rect width="24" height="16" fill="#005EB8"/><polygon points="0,0 24,16 0,16" fill="#FFFFFF"/><polygon points="24,0 0,16 24,16" fill="#FFFFFF"/>',
        "威尔士": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#00B04F"/>',
        "北爱尔兰": '<rect width="24" height="16" fill="#FFFFFF"/><polygon points="0,0 24,16 0,16" fill="#CE1126"/><polygon points="24,0 0,16 24,16" fill="#CE1126"/>',
        "英格兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect x="10" y="0" width="4" height="16" fill="#CE1126"/><rect x="0" y="6" width="24" height="4" fill="#CE1126"/>',
        "科西嘉": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "布列塔尼": '<rect width="24" height="16" fill="#FFFFFF"/><rect y="1.6" width="24" height="1.6" fill="#000000"/><rect y="4.8" width="24" height="1.6" fill="#000000"/><rect y="8" width="24" height="1.6" fill="#000000"/><rect y="11.2" width="24" height="1.6" fill="#000000"/>',
        "阿尔萨斯": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="12" height="16" fill="#CE1126"/>',
        "洛林": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#CE1126"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "普罗旺斯": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "诺曼底": '<rect width="24" height="16" fill="#CE1126"/><rect width="24" height="8" fill="#FCDD09"/>',
        "弗兰德": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#000000"/>',
        "瓦隆": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#000000"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "弗里西亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#AE1C28"/><rect y="10.67" width="24" height="5.33" fill="#21468B"/>',
        "巴伐利亚": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#0099CC"/>',
        "萨克森": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#009639"/>',
        "普鲁士": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#000000"/>',
        "汉萨同盟": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/>',
        "西里西亚": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="8" fill="#FFFFFF"/>',
        "波美拉尼亚": '<rect width="24" height="16" fill="#0052CC"/><rect width="24" height="8" fill="#FFFFFF"/>',
        "东普鲁士": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#000000"/>',
        "西普鲁士": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#000000"/>',
        "勃兰登堡": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/>',
        "梅克伦堡": '<rect width="24" height="16" fill="#0052CC"/><rect width="24" height="8" fill="#FCDD09"/>',
        "石勒苏益格-荷尔斯泰因": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#0052CC"/><rect y="10.67" width="24" height="5.33" fill="#0052CC"/>',
        "汉诺威": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/>',
        "黑森": '<rect width="24" height="16" fill="#CE1126"/><rect width="24" height="8" fill="#FFFFFF"/>',
        "符腾堡": '<rect width="24" height="16" fill="#000000"/><rect width="24" height="8" fill="#CE1126"/>',
        "巴登": '<rect width="24" height="16" fill="#FCDD09"/><rect width="24" height="8" fill="#CE1126"/>',
        "莱茵兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "威斯特法伦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/>',
        "萨尔": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "阿尔萨斯-洛林": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="12" height="16" fill="#CE1126"/>',
        // 更多历史地区和王国
        "波希米亚": '<rect width="24" height="16" fill="#FFFFFF"/><polygon points="0,0 12,8 0,16" fill="#11457E"/>',
        "摩拉维亚": '<rect width="24" height="16" fill="#0052CC"/><rect width="24" height="8" fill="#FCDD09"/>',
        "斯洛伐克": '<rect width="24" height="16" fill="#EE1C25"/><rect width="24" height="5.33" fill="#FFFFFF"/><rect y="10.67" width="24" height="5.33" fill="#0B4EA2"/>',
        "匈牙利王国": '<rect width="24" height="16" fill="#436F4D"/><rect width="24" height="5.33" fill="#CD2A3E"/><rect y="10.67" width="24" height="5.33" fill="#FFFFFF"/>',
        "特兰西瓦尼亚": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "瓦拉几亚": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "摩尔达维亚": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "多布罗加": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "布科维纳": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "贝萨拉比亚": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#0033A0"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "加利西亚-洛多梅里亚": '<rect width="24" height="16" fill="#0000FF"/><rect width="24" height="8" fill="#FFDE00"/>',
        "克拉科夫自由市": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#DC143C"/>',
        "但泽自由市": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#DC143C"/>',
        "萨尔保护领": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "萨尔兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "莱茵兰共和国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="5.33" fill="#009639"/><rect y="10.67" width="24" height="5.33" fill="#CE1126"/>',
        "鲁尔区": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="24" height="8" fill="#CE1126"/>',
        "欧本-马尔梅迪": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#000000"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "北石勒苏益格": '<rect width="24" height="16" fill="#C8102E"/><rect x="6" y="0" width="4" height="16" fill="#FFFFFF"/><rect x="0" y="6" width="24" height="4" fill="#FFFFFF"/>',
        "南石勒苏益格": '<rect width="24" height="16" fill="#FFCE00"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#DD0000"/>',
        "阿尔萨斯共和国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="12" height="16" fill="#CE1126"/>',
        "洛林公国": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#CE1126"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "勃艮第": '<rect width="24" height="16" fill="#FCDD09"/><rect width="8" height="16" fill="#0052CC"/><rect x="16" width="8" height="16" fill="#CE1126"/>',
        "香槟": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "朗格多克": '<rect width="24" height="16" fill="#CE1126"/><rect width="24" height="8" fill="#FCDD09"/>',
        "加斯科涅": '<rect width="24" height="16" fill="#CE1126"/><rect width="24" height="8" fill="#FCDD09"/>',
        "阿基坦": '<rect width="24" height="16" fill="#CE1126"/><rect width="24" height="8" fill="#FCDD09"/>',
        "普瓦图": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "安茹": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "缅因": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "图兰": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "奥尔良": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "贝里": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "布尔博内": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "奥弗涅": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "利穆赞": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "马尔什": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "利昂内": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "多菲内": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "萨瓦": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "尼斯": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
        "科西嘉共和国": '<rect width="24" height="16" fill="#FFFFFF"/><rect width="8" height="16" fill="#002395"/><rect x="16" width="8" height="16" fill="#ED2939"/>'
      };
      const svg = flagColors[countryName] || '<rect width="24" height="16" fill="#CCCCCC"/><text x="12" y="10" text-anchor="middle" font-size="8" fill="#666">?</text>';
      return `<svg width="24" height="16" viewBox="0 0 24 16" style="border-radius: 2px; border: 1px solid rgba(255,255,255,0.2);">${svg}</svg>`;
    };
    const getCountryClass = (countryName) => {
      const stats = activeCountries.value.get(countryName);
      if (!stats) return "country";
      if (stats.online === stats.total) {
        return "country online has-nodes";
      } else if (stats.online === 0) {
        return "country offline has-nodes";
      } else {
        return "country partial has-nodes";
      }
    };
    const updateCountryStyles = () => {
      nextTick(() => {
        var _a;
        const countries = (_a = mapContainer.value) == null ? void 0 : _a.querySelectorAll(".country");
        activeCountries.value.forEach((stats, chineseCountryName) => {
          if (stats.total > 0) {
            let foundElement = null;
            foundElement = Array.from(countries || []).find((el) => {
              const title = el.getAttribute("title") || "";
              const id = el.getAttribute("id") || "";
              const titleChinese = getChineseName(title);
              const idChinese = getChineseName(id);
              return titleChinese === chineseCountryName || idChinese === chineseCountryName;
            });
            if (foundElement) {
              try {
                const element = foundElement;
                const stats2 = activeCountries.value.get(chineseCountryName);
                element.style.fill = "#28a745";
                element.style.strokeWidth = "0.8px";
                if (stats2) {
                  if (stats2.online === stats2.total) {
                    element.style.stroke = "#007bff";
                  } else if (stats2.online === 0) {
                    element.style.stroke = "#dc3545";
                  } else {
                    element.style.stroke = "#ffc107";
                  }
                } else {
                  element.style.stroke = "#007bff";
                }
                element.setAttribute("data-chinese-name", chineseCountryName);
              } catch (error) {
              }
            }
          }
        });
        if (countries) {
          countries.forEach((country) => {
            const title = country.getAttribute("title");
            const id = country.getAttribute("id");
            const countryName = title || id;
            if (countryName) {
              const chineseName = getChineseName(countryName);
              const newClass = getCountryClass(chineseName);
              country.className = newClass;
            }
          });
        }
      });
    };
    onMounted(() => {
      checkMobile();
      setMobileZoom();
      window.addEventListener("resize", () => {
        checkMobile();
        setMobileZoom();
      });
      loadWorldMap();
    });
    watch(() => props.servers, () => {
      updateCountryStyles();
    }, { deep: true });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[8] || (_cache[8] = createBaseVNode("div", { class: "map-header" }, [
          createBaseVNode("h3", { class: "map-title" }, "全球节点分布")
        ], -1)),
        createBaseVNode("div", {
          class: "world-map",
          ref_key: "mapContainer",
          ref: mapContainer
        }, [
          createBaseVNode("div", _hoisted_2$1, [
            (openBlock(), createElementBlock("svg", {
              ref_key: "svgElement",
              ref: svgElement,
              viewBox: "0 0 1600 800",
              class: "map-svg",
              preserveAspectRatio: "xMidYMid meet",
              onWheel: handleWheel,
              onMousedown: handleMouseDown,
              onMousemove: handleMouseMove,
              onMouseup: handleMouseUp,
              onMouseleave: handleMouseUp
            }, [
              _cache[1] || (_cache[1] = createBaseVNode("rect", {
                width: "1600",
                height: "800",
                fill: "#e3f2fd"
              }, null, -1)),
              createBaseVNode("g", {
                ref_key: "zoomGroup",
                ref: zoomGroup,
                transform: transformString.value
              }, _cache[0] || (_cache[0] = [
                createBaseVNode("text", {
                  x: "800",
                  y: "400",
                  "text-anchor": "middle",
                  fill: "#666",
                  "font-size": "24"
                }, " 正在加载世界地图... ", -1)
              ]), 8, _hoisted_3$1)
            ], 544)),
            _cache[2] || (_cache[2] = createBaseVNode("svg", {
              viewBox: "0 0 1000 500",
              class: "overlay-svg"
            }, null, -1))
          ]),
          tooltip.value.show ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "country-tooltip show",
            style: normalizeStyle({ left: tooltip.value.x + "px", top: tooltip.value.y + "px" })
          }, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", {
                class: "country-flag-svg",
                innerHTML: getCountryFlagSVG(tooltip.value.countryName)
              }, null, 8, _hoisted_5$1),
              createBaseVNode("span", _hoisted_6$1, toDisplayString(tooltip.value.countryName), 1)
            ]),
            tooltip.value.nodeCount > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
              createBaseVNode("div", _hoisted_8$1, [
                _cache[3] || (_cache[3] = createStaticVNode('<div class="tooltip-icon" data-v-15a8378c><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-15a8378c><circle cx="12" cy="12" r="10" data-v-15a8378c></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-15a8378c></path><path d="M2 12h20" data-v-15a8378c></path></svg></div><span class="tooltip-label" data-v-15a8378c>节点数量:</span>', 2)),
                createBaseVNode("span", _hoisted_9$1, toDisplayString(tooltip.value.nodeCount), 1)
              ]),
              createBaseVNode("div", _hoisted_10$1, [
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "tooltip-icon" }, [
                  createBaseVNode("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    createBaseVNode("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
                  ])
                ], -1)),
                _cache[5] || (_cache[5] = createBaseVNode("span", { class: "tooltip-label" }, "在线状态:", -1)),
                createBaseVNode("span", {
                  class: normalizeClass(["tooltip-value", tooltip.value.onlineCount === tooltip.value.nodeCount ? "status-online" : tooltip.value.onlineCount === 0 ? "status-offline" : "status-partial"])
                }, toDisplayString(tooltip.value.onlineCount) + "/" + toDisplayString(tooltip.value.nodeCount), 3)
              ]),
              tooltip.value.onlineCount > 0 ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                _cache[6] || (_cache[6] = createStaticVNode('<div class="tooltip-icon" data-v-15a8378c><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-15a8378c><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-15a8378c></path><polyline points="22,4 12,14.01 9,11.01" data-v-15a8378c></polyline></svg></div><span class="tooltip-label" data-v-15a8378c>可用性:</span>', 2)),
                createBaseVNode("span", _hoisted_12$1, toDisplayString(Math.round(tooltip.value.onlineCount / tooltip.value.nodeCount * 100)) + "%", 1)
              ])) : createCommentVNode("", true)
            ])) : (openBlock(), createElementBlock("div", _hoisted_13$1, _cache[7] || (_cache[7] = [
              createStaticVNode('<div class="tooltip-row" data-v-15a8378c><div class="tooltip-icon" data-v-15a8378c><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-15a8378c><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-15a8378c></path><circle cx="12" cy="10" r="3" data-v-15a8378c></circle></svg></div><span class="tooltip-label" data-v-15a8378c>状态:</span><span class="tooltip-value status-none" data-v-15a8378c>暂无节点</span></div>', 1)
            ])))
          ], 4)) : createCommentVNode("", true)
        ], 512)
      ]);
    };
  }
});
const WorldMap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-15a8378c"]]);
const _hoisted_1 = { class: "servers-page" };
const _hoisted_2 = { class: "servers-container" };
const _hoisted_3 = {
  key: 0,
  class: "loading-container"
};
const _hoisted_4 = {
  key: 1,
  class: "error-container"
};
const _hoisted_5 = {
  key: 2,
  class: "empty-container"
};
const _hoisted_6 = {
  key: 3,
  class: "servers-table-container"
};
const _hoisted_7 = {
  class: "mobile-server-list",
  style: { "display": "block", "padding": "8px" }
};
const _hoisted_8 = { style: { "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px", "padding-bottom": "8px", "border-bottom": "1px solid #f5f5f5" } };
const _hoisted_9 = ["src", "alt"];
const _hoisted_10 = { style: { "flex": "1" } };
const _hoisted_11 = { style: { "font-size": "15px", "font-weight": "600", "color": "#333", "margin-bottom": "2px" } };
const _hoisted_12 = { style: { "display": "flex", "align-items": "center", "gap": "6px" } };
const _hoisted_13 = { style: { "display": "grid", "grid-template-columns": "1fr 1fr", "gap": "10px 12px", "margin-bottom": "12px" } };
const _hoisted_14 = { style: { "display": "flex", "flex-direction": "column", "gap": "2px" } };
const _hoisted_15 = { style: { "display": "flex", "flex-direction": "column", "gap": "2px" } };
const _hoisted_16 = { style: { "display": "flex", "flex-direction": "column", "gap": "2px", "grid-column": "1 / -1" } };
const _hoisted_17 = { style: { "font-size": "11px", "background": "#f8f8f8", "padding": "3px 6px", "border-radius": "4px", "color": "#666", "font-family": "Monaco, Consolas, monospace" } };
const _hoisted_18 = {
  key: 0,
  style: { "margin-bottom": "12px" }
};
const _hoisted_19 = { style: { "display": "flex", "gap": "4px", "flex-wrap": "wrap" } };
const _hoisted_20 = {
  key: 0,
  style: { "font-size": "10px", "background": "#e6f7ff", "color": "#1890ff", "padding": "2px 6px", "border-radius": "3px", "font-weight": "500" }
};
const _hoisted_21 = { style: { "margin-bottom": "12px" } };
const _hoisted_22 = { style: { "display": "flex", "gap": "4px", "flex-wrap": "wrap" } };
const _hoisted_23 = {
  key: 0,
  style: { "font-size": "10px", "color": "#999" }
};
const _hoisted_24 = { style: { "display": "flex", "gap": "8px", "padding-top": "8px", "border-top": "1px solid #f5f5f5" } };
const _hoisted_25 = ["onClick"];
const _hoisted_26 = { class: "qr-modal-content" };
const _hoisted_27 = { class: "qr-code-container" };
const _hoisted_28 = { class: "qr-actions" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Servers",
  setup(__props) {
    const servers = ref([]);
    const loading = ref(false);
    const error = ref("");
    const message = useMessage();
    useAuthStore();
    const showQRModal = ref(false);
    const selectedServer = ref(null);
    const qrCodeRef = ref(null);
    const expandedRows = ref(/* @__PURE__ */ new Set());
    const pagination = {
      pageSize: 100,
      showSizePicker: true,
      pageSizes: [20, 50, 100, 200, 500],
      showQuickJumper: true
    };
    const columns = [
      {
        title: "状态",
        key: "status",
        width: 50,
        align: "center",
        render: (row) => {
          const isOnline = isServerOnline(row);
          return h(NBadge, {
            dot: true,
            type: isOnline ? "success" : "error",
            processing: isOnline
          }, {
            default: () => h("span", {
              style: {
                color: isOnline ? "#18a058" : "#d03050",
                fontWeight: "600",
                fontSize: "12px"
              }
            }, isOnline ? "在线" : "离线")
          });
        }
      },
      {
        title: "节点名称",
        key: "name",
        width: 100,
        ellipsis: {
          tooltip: true
        },
        render: (row) => {
          const countryInfo = getCountryInfo(row.name);
          return h("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, [
            h("img", {
              src: `/flags/${countryInfo.code.toLowerCase()}.svg`,
              alt: countryInfo.name,
              style: {
                width: "32px",
                height: "22px",
                borderRadius: "4px",
                border: "1px solid rgba(0,0,0,0.2)",
                flexShrink: "0",
                objectFit: "cover",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
              },
              onError: (e) => {
                const target = e.target;
                target.src = "/flags/un.svg";
              }
            }),
            h("span", { style: { fontWeight: "600" } }, row.name)
          ]);
        }
      },
      {
        title: "类型",
        key: "type",
        width: 50,
        align: "center",
        render: (row) => {
          const typeColors = {
            "shadowsocks": "#1890ff",
            "vmess": "#52c41a",
            "trojan": "#722ed1",
            "hysteria": "#eb2f96",
            "vless": "#fa8c16"
          };
          return h(NTag, {
            type: "info",
            size: "small",
            style: {
              backgroundColor: typeColors[row.type] || "#1890ff",
              color: "white",
              border: "none"
            }
          }, { default: () => getServerTypeLabel(row.type) });
        }
      },
      {
        title: "地址",
        key: "address",
        width: 90,
        ellipsis: {
          tooltip: true
        },
        render: (row) => h("code", {
          style: {
            fontSize: "12px",
            background: "rgba(0,0,0,0.05)",
            padding: "2px 6px",
            borderRadius: "4px",
            fontFamily: "Monaco, Consolas, monospace"
          }
        }, `${row.host}:${row.port}`)
      },
      {
        title: "倍率",
        key: "rate",
        width: 80,
        align: "center",
        render: (row) => h("span", {
          style: {
            fontWeight: "600",
            color: row.rate && row.rate > 1 ? "#d03050" : "#18a058"
          }
        }, `${row.rate || 1}x`)
      },
      {
        title: "标签",
        key: "tags",
        width: 150,
        render: (row) => {
          if (!row.tags || row.tags.length === 0) {
            return h("span", { style: { color: "#999", fontSize: "12px" } }, "无");
          }
          const isExpanded = expandedRows.value.has(row.id);
          const displayTags = isExpanded ? row.tags : row.tags.slice(0, 3);
          const moreTags = row.tags.length - 3;
          return h("div", { style: { display: "flex", gap: "4px", flexWrap: "wrap" } }, [
            ...displayTags.map(
              (tag) => h(NTag, {
                size: "small",
                type: "default",
                style: { fontSize: "11px" }
              }, { default: () => tag })
            ),
            ...moreTags > 0 && !isExpanded ? [
              h(NTag, {
                size: "small",
                type: "info",
                style: {
                  fontSize: "11px",
                  cursor: "pointer"
                },
                onClick: () => toggleTagsExpansion(row.id)
              }, { default: () => `+${moreTags}` })
            ] : [],
            ...isExpanded && row.tags.length > 3 ? [
              h(NTag, {
                size: "small",
                type: "warning",
                style: {
                  fontSize: "11px",
                  cursor: "pointer"
                },
                onClick: () => toggleTagsExpansion(row.id)
              }, { default: () => "收起" })
            ] : []
          ]);
        }
      },
      {
        title: "解锁",
        key: "unlock",
        width: 150,
        align: "center",
        titleAlign: "center",
        render: (row) => {
          const unlockServices = getUnlockServices(row.name);
          if (unlockServices.length === 0) {
            return h("span", { style: { color: "#999", fontSize: "12px" } }, "暂无");
          }
          return h(
            "div",
            { style: { display: "flex", gap: "2px", flexWrap: "wrap", justifyContent: "center" } },
            unlockServices.map(
              (service) => h(NTag, {
                size: "small",
                type: "success",
                bordered: false,
                style: { fontSize: "10px", padding: "2px 6px" }
              }, { default: () => service })
            )
          );
        }
      },
      {
        title: "操作",
        key: "qrcode",
        width: 50,
        align: "center",
        titleAlign: "center",
        render: (row) => h("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }
        }, [
          h(Button, {
            size: "small",
            type: "primary",
            ghost: true,
            onClick: () => showQRCode(row),
            style: {
              padding: "6px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }
          }, {
            default: () => h("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 1024 1024",
              fill: "currentColor"
            }, [
              h("path", { d: "M259.2 262.4h64v64h-64z" }),
              h("path", { d: "M451.2 134.4h-320v320h320v-320z m-64 256h-192v-192h192v192zM259.2 704h64v64h-64z" }),
              h("path", { d: "M451.2 576h-320v320h320V576z m-64 256h-192v-192h192v192zM700.8 262.4h64v64h-64z" }),
              h("path", { d: "M892.8 134.4h-320v320h320v-320z m-64 256h-192v-192h192v192z" }),
              h("path", { d: "M444.8 531.2v-32H134.4v32z" }),
              h("path", { d: "M524.8 140.8h-32v748.8h32z" }),
              h("path", { d: "M854.4 716.8h32v-214.4h-32z" }),
              h("path", { d: "M755.2 716.8h32v-214.4h-32z" }),
              h("path", { d: "M665.6 502.4v387.2h32V502.4h-16z" }),
              h("path", { d: "M579.2 502.4v387.2h32V502.4h-16zM758.4 761.6h128v128h-128z" })
            ])
          })
        ])
      }
    ];
    const getRowClassName = (row) => {
      return isServerOnline(row) ? "server-row-online" : "server-row-offline";
    };
    const fetchServers = async () => {
      var _a, _b;
      loading.value = true;
      error.value = "";
      try {
        servers.value = await apiClient.getServers();
      } catch (err) {
        error.value = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "获取节点列表失败";
      } finally {
        loading.value = false;
      }
    };
    const isServerOnline = (server) => {
      if (server.is_online !== void 0) {
        return server.is_online === 1;
      }
      if (!server.last_check_at) return false;
      const lastCheck = new Date(server.last_check_at * 1e3);
      const now = /* @__PURE__ */ new Date();
      const diffSeconds = (now.getTime() - lastCheck.getTime()) / 1e3;
      return diffSeconds <= 300;
    };
    const getCountryInfo = (serverName) => {
      const countryMap = {
        "香港": { name: "香港", code: "HK" },
        "新加坡": { name: "新加坡", code: "SG" },
        "美国": { name: "美国", code: "US" },
        "日本": { name: "日本", code: "JP" },
        "韩国": { name: "韩国", code: "KR" },
        "台湾": { name: "台湾", code: "TW" },
        "泰国": { name: "泰国", code: "TH" },
        "德国": { name: "德国", code: "DE" },
        "英国": { name: "英国", code: "GB" },
        "法国": { name: "法国", code: "FR" },
        "加拿大": { name: "加拿大", code: "CA" },
        "澳大利亚": { name: "澳大利亚", code: "AU" },
        "土耳其": { name: "土耳其", code: "TR" },
        "波兰": { name: "波兰", code: "PL" },
        "荷兰": { name: "荷兰", code: "NL" },
        "芬兰": { name: "芬兰", code: "FI" },
        "俄罗斯": { name: "俄罗斯", code: "RU" },
        "印度": { name: "印度", code: "IN" },
        "巴西": { name: "巴西", code: "BR" },
        "阿根廷": { name: "阿根廷", code: "AR" },
        "墨西哥": { name: "墨西哥", code: "MX" },
        "南非": { name: "南非", code: "ZA" },
        "埃及": { name: "埃及", code: "EG" },
        "以色列": { name: "以色列", code: "IL" },
        "阿联酋": { name: "阿联酋", code: "AE" },
        "沙特": { name: "沙特", code: "SA" },
        "马来西亚": { name: "马来西亚", code: "MY" },
        "印尼": { name: "印尼", code: "ID" },
        "菲律宾": { name: "菲律宾", code: "PH" },
        "越南": { name: "越南", code: "VN" },
        "意大利": { name: "意大利", code: "IT" },
        "西班牙": { name: "西班牙", code: "ES" },
        "瑞士": { name: "瑞士", code: "CH" },
        "瑞典": { name: "瑞典", code: "SE" },
        "挪威": { name: "挪威", code: "NO" },
        "丹麦": { name: "丹麦", code: "DK" },
        "奥地利": { name: "奥地利", code: "AT" },
        "比利时": { name: "比利时", code: "BE" },
        "爱尔兰": { name: "爱尔兰", code: "IE" },
        "葡萄牙": { name: "葡萄牙", code: "PT" },
        "希腊": { name: "希腊", code: "GR" },
        "捷克": { name: "捷克", code: "CZ" },
        "匈牙利": { name: "匈牙利", code: "HU" },
        "罗马尼亚": { name: "罗马尼亚", code: "RO" },
        "保加利亚": { name: "保加利亚", code: "BG" },
        "克罗地亚": { name: "克罗地亚", code: "HR" },
        "斯洛文尼亚": { name: "斯洛文尼亚", code: "SI" },
        "斯洛伐克": { name: "斯洛伐克", code: "SK" },
        "立陶宛": { name: "立陶宛", code: "LT" },
        "拉脱维亚": { name: "拉脱维亚", code: "LV" },
        "爱沙尼亚": { name: "爱沙尼亚", code: "EE" },
        "乌克兰": { name: "乌克兰", code: "UA" },
        "白俄罗斯": { name: "白俄罗斯", code: "BY" },
        "摩尔多瓦": { name: "摩尔多瓦", code: "MD" },
        "塞尔维亚": { name: "塞尔维亚", code: "RS" },
        "波黑": { name: "波黑", code: "BA" },
        "北马其顿": { name: "北马其顿", code: "MK" },
        "阿尔巴尼亚": { name: "阿尔巴尼亚", code: "AL" },
        "黑山": { name: "黑山", code: "ME" },
        "冰岛": { name: "冰岛", code: "IS" },
        "卢森堡": { name: "卢森堡", code: "LU" },
        "马耳他": { name: "马耳他", code: "MT" },
        "塞浦路斯": { name: "塞浦路斯", code: "CY" },
        "新西兰": { name: "新西兰", code: "NZ" },
        "智利": { name: "智利", code: "CL" },
        "秘鲁": { name: "秘鲁", code: "PE" },
        "哥伦比亚": { name: "哥伦比亚", code: "CO" },
        "委内瑞拉": { name: "委内瑞拉", code: "VE" },
        "厄瓜多尔": { name: "厄瓜多尔", code: "EC" },
        "乌拉圭": { name: "乌拉圭", code: "UY" },
        "巴拉圭": { name: "巴拉圭", code: "PY" },
        "玻利维亚": { name: "玻利维亚", code: "BO" },
        "哥斯达黎加": { name: "哥斯达黎加", code: "CR" },
        "巴拿马": { name: "巴拿马", code: "PA" },
        "尼加拉瓜": { name: "尼加拉瓜", code: "NI" },
        "洪都拉斯": { name: "洪都拉斯", code: "HN" },
        "萨尔瓦多": { name: "萨尔瓦多", code: "SV" },
        "危地马拉": { name: "危地马拉", code: "GT" },
        "伯利兹": { name: "伯利兹", code: "BZ" },
        "牙买加": { name: "牙买加", code: "JM" },
        "古巴": { name: "古巴", code: "CU" },
        "多米尼加": { name: "多米尼加", code: "DO" },
        "海地": { name: "海地", code: "HT" },
        "巴哈马": { name: "巴哈马", code: "BS" },
        "巴巴多斯": { name: "巴巴多斯", code: "BB" },
        "特立尼达": { name: "特立尼达", code: "TT" }
      };
      for (const [key, value] of Object.entries(countryMap)) {
        if (serverName.includes(key)) {
          return value;
        }
      }
      return { name: "未知", code: "UN" };
    };
    const getUnlockServices = (serverName) => {
      const unlockMap = {
        "香港": ["Netflix", "Disney+", "HBO"],
        "新加坡": ["Netflix", "Disney+", "Prime"],
        "美国": ["Netflix", "Disney+", "HBO", "Hulu", "Prime"],
        "日本": ["Netflix", "Disney+", "AbemaTV"],
        "韩国": ["Netflix", "Disney+", "Wavve"],
        "台湾": ["Netflix", "Disney+", "HBO"],
        "英国": ["Netflix", "Disney+", "BBC", "ITV"],
        "德国": ["Netflix", "Disney+", "Sky"],
        "法国": ["Netflix", "Disney+", "Canal+"],
        "加拿大": ["Netflix", "Disney+", "CBC"],
        "澳大利亚": ["Netflix", "Disney+", "Stan"],
        "泰国": ["Netflix", "Disney+"],
        "土耳其": ["Netflix", "Disney+"],
        "俄罗斯": ["Netflix"],
        "印度": ["Netflix", "Disney+", "Hotstar"],
        "巴西": ["Netflix", "Disney+", "Globo"],
        "阿根廷": ["Netflix", "Disney+"],
        "墨西哥": ["Netflix", "Disney+"],
        "意大利": ["Netflix", "Disney+", "Sky"],
        "西班牙": ["Netflix", "Disney+"],
        "荷兰": ["Netflix", "Disney+"],
        "瑞士": ["Netflix", "Disney+"],
        "瑞典": ["Netflix", "Disney+", "SVT"],
        "挪威": ["Netflix", "Disney+", "NRK"],
        "丹麦": ["Netflix", "Disney+", "DR"],
        "芬兰": ["Netflix", "Disney+", "YLE"],
        "波兰": ["Netflix", "Disney+"],
        "冰岛": ["Netflix", "Disney+"],
        "新西兰": ["Netflix", "Disney+", "TVNZ"]
      };
      for (const [region, services] of Object.entries(unlockMap)) {
        if (serverName.includes(region)) {
          return services;
        }
      }
      return ["Netflix"];
    };
    const getServerTypeLabel = (type) => {
      const typeMap = {
        "shadowsocks": "SS",
        "vmess": "VMess",
        "trojan": "Trojan",
        "hysteria": "Hysteria",
        "vless": "VLESS",
        "tuic": "TUIC",
        "anytls": "AnyTLS"
      };
      return typeMap[type] || type.toUpperCase();
    };
    const getTypeColor = (type) => {
      const typeColors = {
        "shadowsocks": "#1890ff",
        "vmess": "#52c41a",
        "trojan": "#722ed1",
        "hysteria": "#eb2f96",
        "vless": "#fa8c16",
        "tuic": "#13c2c2",
        "anytls": "#f759ab"
      };
      return typeColors[type] || "#1890ff";
    };
    const showQRCode = async (server) => {
      selectedServer.value = server;
      showQRModal.value = true;
      await nextTick();
      generateQRCode(server);
    };
    const generateQRCode = async (server) => {
      if (!qrCodeRef.value) return;
      qrCodeRef.value.innerHTML = "";
      const subscriptionLink = generateSubscriptionLink(server);
      try {
        const qrCodeDataUrl = await browser.toDataURL(subscriptionLink, {
          width: 200,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          },
          errorCorrectionLevel: "M"
        });
        const img = document.createElement("img");
        img.src = qrCodeDataUrl;
        img.alt = "节点二维码";
        img.style.cssText = `
      width: 200px;
      height: 200px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    `;
        qrCodeRef.value.appendChild(img);
      } catch (error2) {
        const errorDiv = document.createElement("div");
        errorDiv.style.cssText = `
      width: 200px;
      height: 200px;
      background: #f5f5f5;
      border: 2px dashed #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #999;
      border-radius: 8px;
    `;
        errorDiv.textContent = "二维码生成失败";
        qrCodeRef.value.appendChild(errorDiv);
      }
    };
    const generateSubscriptionLink = (server) => {
      const baseInfo = `${server.host}:${server.port}`;
      switch (server.type) {
        case "shadowsocks":
          return `ss://${baseInfo}#${encodeURIComponent(server.name)}`;
        case "vmess":
          const vmessConfig = {
            v: "2",
            ps: server.name,
            add: server.host,
            port: server.port,
            id: "uuid-placeholder",
            aid: "0",
            net: "tcp",
            type: "none",
            host: "",
            path: "",
            tls: ""
          };
          return `vmess://${btoa(JSON.stringify(vmessConfig))}`;
        case "trojan":
          return `trojan://password-placeholder@${baseInfo}#${encodeURIComponent(server.name)}`;
        case "hysteria":
          return `hysteria://${baseInfo}?auth=password-placeholder&upmbps=100&downmbps=100#${encodeURIComponent(server.name)}`;
        case "vless":
          return `vless://uuid-placeholder@${baseInfo}?type=tcp&security=none#${encodeURIComponent(server.name)}`;
        default:
          return `${server.type}://${baseInfo}#${encodeURIComponent(server.name)}`;
      }
    };
    const copySubscriptionLink = () => {
      if (!selectedServer.value) return;
      const link = generateSubscriptionLink(selectedServer.value);
      navigator.clipboard.writeText(link).then(() => {
        message.success("订阅链接已复制到剪贴板");
      }).catch(() => {
        message.error("复制失败");
      });
    };
    const toggleTagsExpansion = (serverId) => {
      if (expandedRows.value.has(serverId)) {
        expandedRows.value.delete(serverId);
      } else {
        expandedRows.value.add(serverId);
      }
    };
    onMounted(() => {
      fetchServers();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(WorldMap, {
            servers: servers.value,
            onRefresh: fetchServers
          }, null, 8, ["servers"]),
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(unref(NSpin), { size: "large" }, {
              description: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("正在加载节点列表...")
              ])),
              _: 1
            })
          ])) : error.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(unref(NResult), {
              status: "error",
              title: "加载失败",
              description: error.value
            }, {
              footer: withCtx(() => [
                createVNode(unref(Button), {
                  onClick: fetchServers,
                  type: "primary"
                }, {
                  default: withCtx(() => _cache[4] || (_cache[4] = [
                    createTextVNode("重试")
                  ])),
                  _: 1,
                  __: [4]
                })
              ]),
              _: 1
            }, 8, ["description"])
          ])) : servers.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(unref(NEmpty), { description: "暂无节点数据" }, {
              extra: withCtx(() => [
                createVNode(unref(Button), {
                  onClick: fetchServers,
                  size: "small"
                }, {
                  default: withCtx(() => _cache[5] || (_cache[5] = [
                    createTextVNode("刷新")
                  ])),
                  _: 1,
                  __: [5]
                })
              ]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(servers.value, (server, index) => {
                return openBlock(), createElementBlock("div", {
                  key: `mobile-${server.type}-${server.id}`,
                  class: "mobile-server-item",
                  style: { "background": "white", "margin-bottom": "10px", "padding": "14px", "border-radius": "10px", "border": "1px solid #e8e8e8", "box-shadow": "0 1px 3px rgba(0,0,0,0.08)" }
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("img", {
                      src: `/flags/${getCountryInfo(server.name).code.toLowerCase()}.svg`,
                      alt: getCountryInfo(server.name).name,
                      style: { "width": "28px", "height": "19px", "border-radius": "3px", "border": "1px solid rgba(0,0,0,0.15)", "box-shadow": "0 1px 2px rgba(0,0,0,0.1)" },
                      onError: _cache[0] || (_cache[0] = (e) => e.target.src = "/flags/un.svg")
                    }, null, 40, _hoisted_9),
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, toDisplayString(server.name), 1),
                      createBaseVNode("div", _hoisted_12, [
                        createBaseVNode("span", {
                          style: normalizeStyle({
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: isServerOnline(server) ? "#52c41a" : "#ff4d4f"
                          })
                        }, null, 4),
                        createBaseVNode("span", {
                          style: normalizeStyle({
                            fontSize: "11px",
                            fontWeight: "500",
                            color: isServerOnline(server) ? "#52c41a" : "#ff4d4f"
                          })
                        }, toDisplayString(isServerOnline(server) ? "在线" : "离线"), 5)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", _hoisted_14, [
                      _cache[6] || (_cache[6] = createBaseVNode("span", { style: { "font-size": "10px", "color": "#999", "font-weight": "500" } }, "协议类型", -1)),
                      createBaseVNode("span", {
                        style: normalizeStyle({
                          fontSize: "12px",
                          fontWeight: "600",
                          color: getTypeColor(server.type),
                          background: getTypeColor(server.type) + "15",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          display: "inline-block",
                          width: "fit-content"
                        })
                      }, toDisplayString(getServerTypeLabel(server.type)), 5)
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      _cache[7] || (_cache[7] = createBaseVNode("span", { style: { "font-size": "10px", "color": "#999", "font-weight": "500" } }, "流量倍率", -1)),
                      createBaseVNode("span", {
                        style: normalizeStyle({
                          fontSize: "12px",
                          fontWeight: "600",
                          color: server.rate && server.rate > 1 ? "#ff4d4f" : "#52c41a"
                        })
                      }, toDisplayString(server.rate || 1) + "x", 5)
                    ]),
                    createBaseVNode("div", _hoisted_16, [
                      _cache[8] || (_cache[8] = createBaseVNode("span", { style: { "font-size": "10px", "color": "#999", "font-weight": "500" } }, "服务器地址", -1)),
                      createBaseVNode("code", _hoisted_17, toDisplayString(server.host) + ":" + toDisplayString(server.port), 1)
                    ])
                  ]),
                  server.tags && server.tags.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_18, [
                    _cache[9] || (_cache[9] = createBaseVNode("div", { style: { "font-size": "10px", "color": "#999", "font-weight": "500", "margin-bottom": "4px" } }, "节点标签", -1)),
                    createBaseVNode("div", _hoisted_19, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(server.tags.slice(0, 4), (tag) => {
                        return openBlock(), createElementBlock("span", {
                          key: tag,
                          style: { "font-size": "10px", "background": "#f0f0f0", "color": "#666", "padding": "2px 6px", "border-radius": "3px", "font-weight": "500" }
                        }, toDisplayString(tag), 1);
                      }), 128)),
                      server.tags.length > 4 ? (openBlock(), createElementBlock("span", _hoisted_20, " +" + toDisplayString(server.tags.length - 4), 1)) : createCommentVNode("", true)
                    ])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_21, [
                    _cache[10] || (_cache[10] = createBaseVNode("div", { style: { "font-size": "10px", "color": "#999", "font-weight": "500", "margin-bottom": "4px" } }, "流媒体解锁", -1)),
                    createBaseVNode("div", _hoisted_22, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(getUnlockServices(server.name).slice(0, 6), (service) => {
                        return openBlock(), createElementBlock("span", {
                          key: service,
                          style: { "font-size": "10px", "background": "#f6ffed", "color": "#52c41a", "padding": "2px 6px", "border-radius": "3px", "font-weight": "500", "border": "1px solid #d9f7be" }
                        }, toDisplayString(service), 1);
                      }), 128)),
                      getUnlockServices(server.name).length === 0 ? (openBlock(), createElementBlock("span", _hoisted_23, " 暂无解锁信息 ")) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("button", {
                      onClick: ($event) => showQRCode(server),
                      class: "btn btn-block"
                    }, _cache[11] || (_cache[11] = [
                      createStaticVNode('<svg class="btn-icon" viewBox="0 0 1024 1024" fill="currentColor" data-v-85145c70><path d="M516.9664 513.3312m-450.816 0a450.816 450.816 0 1 0 901.632 0 450.816 450.816 0 1 0-901.632 0Z" fill="currentColor" opacity="0.2" data-v-85145c70></path><path d="M447.8464 232.6528H287.4368a43.6224 43.6224 0 0 0-43.6224 43.6224v159.0272a43.6224 43.6224 0 0 0 43.6224 43.6224h160.4096a43.6224 43.6224 0 0 0 43.6224-43.6224V276.2752c0-24.064-19.5072-43.6224-43.6224-43.6224z" fill="currentColor" data-v-85145c70></path><path d="M447.8464 532.6336H287.4368a43.6224 43.6224 0 0 0-43.6224 43.6224v159.0272a43.6224 43.6224 0 0 0 43.6224 43.6224h160.4096a43.6224 43.6224 0 0 0 43.6224-43.6224v-159.0784c0-24.0128-19.5072-43.5712-43.6224-43.5712zM588.6464 478.976h160.3584a43.6224 43.6224 0 0 0 43.6224-43.6224V276.2752a43.6224 43.6224 0 0 0-43.6224-43.6224h-160.3584a43.6224 43.6224 0 0 0-43.6224 43.6224v159.0272c-0.0512 24.1152 19.5072 43.6736 43.6224 43.6736z" fill="currentColor" data-v-85145c70></path><path d="M577.024 529.8688c-17.7664 0-32.1536 14.3872-32.1536 32.1536v197.632c0 17.7664 14.3872 32.1536 32.1536 32.1536s32.1536-14.3872 32.1536-32.1536v-197.632c0-17.7664-14.3872-32.1536-32.1536-32.1536zM760.7296 529.8688c-17.7664 0-32.1536 14.3872-32.1536 32.1536v197.632c0 17.7664 14.3872 32.1536 32.1536 32.1536s32.1536-14.3872 32.1536-32.1536v-197.632c0-17.7664-14.3872-32.1536-32.1536-32.1536zM671.5392 592.128c-17.7664 0-32.1536 14.3872-32.1536 32.1536v135.3728c0 17.7664 14.3872 32.1536 32.1536 32.1536s32.1536-14.3872 32.1536-32.1536v-135.3728c0-17.7152-14.3872-32.1536-32.1536-32.1536z" fill="currentColor" data-v-85145c70></path></svg> 查看二维码 ', 2)
                    ]), 8, _hoisted_25)
                  ])
                ]);
              }), 128))
            ]),
            createVNode(unref(NDataTable), {
              columns,
              data: servers.value,
              loading: loading.value,
              pagination,
              "row-key": (row) => `${row.type}-${row.id}`,
              "row-class-name": getRowClassName,
              size: "medium",
              striped: "",
              "scroll-x": 1200,
              class: "compact-table desktop-table"
            }, null, 8, ["data", "loading", "row-key"])
          ]))
        ]),
        createVNode(DesktopModal, {
          show: showQRModal.value,
          "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showQRModal.value = $event),
          title: "节点二维码",
          width: 400
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", {
                  ref_key: "qrCodeRef",
                  ref: qrCodeRef,
                  class: "qr-code"
                }, null, 512)
              ]),
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("button", {
                  onClick: copySubscriptionLink,
                  class: "btn"
                }, " 复制链接 "),
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => showQRModal.value = false),
                  class: "btn-base btn-large btn-danger"
                }, " 关闭 ")
              ])
            ])
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const Servers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85145c70"]]);
export {
  Servers as default
};
