"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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


function addClass(element) {
  for (var _len = arguments.length, argus = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    argus[_key - 1] = arguments[_key];
  }

  if (!element || arguments.length <= 1) {
    throw new Error("arguments error");
  }

  for (var i = 0; i < argus.length; i++) {
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


function removeClass(element) {
  for (var _len2 = arguments.length, argus = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    argus[_key2 - 1] = arguments[_key2];
  }

  if (!element || arguments.length <= 1) {
    throw new Error("arguments error");
  }

  for (var i = 0; i < argus.length; i++) {
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
  var actualTop = el.offsetTop;
  var current = el.offsetParent;

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
      height: Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight)
    };
  } catch (error) {
    return null;
  }
}

var dom = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  getScrollLeft: getScrollLeft,
  getScrollTop: getScrollTop,
  getElementTop: getElementTop,
  getPagearea: getPagearea
};
exports.dom = dom;