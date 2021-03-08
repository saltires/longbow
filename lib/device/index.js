"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.device = void 0;
/**
 * 平滑滚动到页面顶部。
 * 使用 document.documentElement.scrollTop 或 document.body.scrollTop 获取到顶部距离。
 * 从顶部滚动一小部分距离。使用window.requestAnimationFrame() 来实现滚动动画。
 */
function scrollToTop() {
    try {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    }
    catch (_a) {
        return;
    }
}
/**
 * @date 2020-07-09
 * @author saltire
 * @description 如果指定的元素在可视窗口中可见，则返回 true ，否则返回 false
 * @param （指定元素，el）（省略第二个参数来判断元素是否完全可见，或者指定 true 来判断它是否部分可见，bolean）
 * @return boolean
 */
function elementIsVisibleInViewport(el, partiallyVisible = false) {
    try {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
            ? ((top > 0 && top < innerHeight) ||
                (bottom > 0 && bottom < innerHeight)) &&
                ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    }
    catch (_a) {
        return false;
    }
}
// 判断是否是火狐内核
function isgecko() {
    let u;
    try {
        u = window.navigator && window.navigator.userAgent;
    }
    catch (_a) {
        u = "";
    }
    return u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1;
}
// 判断是否是 QQ 浏览器
function isqq() {
    let u;
    try {
        u = window.navigator && window.navigator.userAgent;
    }
    catch (_a) {
        u = "";
    }
    return u.indexOf("mqqbrowser") > -1;
}
// 判断是否是 QQ 浏览器
function isweixin() {
    let u;
    try {
        u = window.navigator && window.navigator.userAgent;
    }
    catch (_a) {
        u = "";
    }
    return u.indexOf("MicroMessenger") > -1;
}
// 判断是pc端还是移动端
function ispc() {
    let userAgentInfo;
    try {
        userAgentInfo = window.navigator && window.navigator.userAgent;
    }
    catch (_a) {
        userAgentInfo = "";
    }
    const Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod",
    ];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
const device = {
    scrollToTop,
    elementIsVisibleInViewport,
    inBrowser,
    isIE,
    isIE9,
    isEdge,
    isAndroid,
    isIOS,
    isChrome,
    isgecko,
    isqq,
    ispc,
    isweixin,
};
exports.device = device;
// Browser environment sniffing
function inBrowser() {
    return typeof window !== "undefined";
}
// 返回浏览器的 user-agent
function getUA() {
    if (inBrowser()) {
        return window.navigator.userAgent.toLowerCase();
    }
    return "";
}
/**
 * 判断是否是 IE 浏览器
 */
function isIE() {
    if (getUA()) {
        return /msie|trident/.test(getUA());
    }
    return false;
}
/**
 * 判断是否是 IE9 浏览器
 */
function isIE9() {
    if (getUA()) {
        return getUA().indexOf("msie 9.0") > 0;
    }
    return false;
}
/**
 * 判断是否是 Edge 浏览器
 */
function isEdge() {
    if (getUA()) {
        return getUA().indexOf("edge/") > 0;
    }
    return false;
}
/**
 * 判断是否是安卓环境
 */
function isAndroid() {
    if (getUA()) {
        return getUA().indexOf("android") > 0;
    }
    return false;
}
/**
 * 判断是否是 IOS 环境
 */
function isIOS() {
    if (getUA()) {
        return /iphone|ipad|ipod|ios/.test(getUA());
    }
    return false;
}
/**
 * 判断是否是 IOS 环境
 */
function isChrome() {
    if (getUA()) {
        return /chrome\/\d+/.test(getUA()) && !isEdge;
    }
    return false;
}
