"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dom = void 0;
/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 判断元素是否含有某个class
 * @example: hasClass(document.getElementById('content-toc'), 'content-toc') => true或false
 */
function hasClass(element, className) {
    if (!element || !className) {
        throw new Error("arguments error");
    }
    if (element.classList.contains(className)) {
        return true;
    }
    return false;
}
/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 原生js操作元素class的方法，给元素添加class，支持不定长参数
 */
function addClass(element, ...argus) {
    if (!element || arguments.length <= 1) {
        throw new Error("arguments error");
    }
    for (let i = 0; i < argus.length; i++) {
        if (!element.classList.contains(argus[i])) {
            element.classList.add(argus[i]);
        }
    }
}
/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 原生js操作元素class的方法，删除元素的class，支持不定长参数
 */
function removeClass(element, ...argus) {
    if (!element || arguments.length <= 1) {
        throw new Error("arguments error");
    }
    for (let i = 0; i < argus.length; i++) {
        if (element.classList.contains(argus[i])) {
            element.classList.remove(argus[i]);
        }
    }
}
/**
 * 返回整个 html文档的 scrollTop 值
 * @returns number
 */
function getScrollTop() {
    return Math.max(document.body.scrollTop, document.documentElement.scrollTop);
}
/**
 * 返回整个 html文档的 scrollLeft 值
 * @returns number
 */
function getScrollLeft() {
    return Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);
}
/**
 * 获取元素距页面高度
 * @param el - 指定的元素
 * @returns  number - 元素距离页面的高度
 */
function getElementTop(el) {
    let actualTop = el.offsetTop;
    let current = el.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
/**
 * 获取整个网页的实际高度与宽度
 * @returns 返回一个具有 width 和 height 属性的对象或者返回 null
 */
function getPagearea() {
    try {
        return {
            width: Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth),
            height: Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight),
        };
    }
    catch (error) {
        return null;
    }
}
const dom = {
    hasClass,
    addClass,
    removeClass,
    getScrollLeft,
    getScrollTop,
    getElementTop,
    getPagearea,
};
exports.dom = dom;
