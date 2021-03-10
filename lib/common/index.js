"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.common = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @date 2020-12-04
 * @param { Array }
 * @author saltire
 * @description 多维数组扁平化
 * @return { Array }
 */
function flatten(arr) {
  while (arr.some(function (item) {
    return Array.isArray(item);
  })) {
    var _ref;

    arr = (_ref = []).concat.apply(_ref, _toConsumableArray(arr));
  }

  return arr;
}
/**
 * @author jxye
 * @date 2020/3/18
 * @Description: 防止函数被频繁触发，设置一个间隔时间，如果间隔时间内用户又一次触发，认为触发无效，并且重新设置间隔时间，这就是常说的防抖
 * @example: debounce(function(){console.log(this);}, 300)
 */


function debounce(func, delay) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var timeout;
  return function () {
    var _this = this;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      // @ts-ignore
      func.apply(_this, args);
    }, delay);
  };
}
/**
 * @date 2020-07-09
 * @author saltire
 * @description 将一个字符串复制到剪贴板
 * @param (string, 要复制的字符串)
 */


function copyToClipboard(str) {
  var el = document.createElement("textarea");
  var getSelection = document.getSelection();
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  var selected = getSelection.rangeCount > 0 ? getSelection.getRangeAt(0) : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  if (selected) {
    getSelection.removeAllRanges();
    getSelection.addRange(selected);
  }
}
/**
 * @date 2020-08-17
 * @author saltire
 * @description 根据网络上的url地址下载文件
 * @param (string, 文件地址);(string, 下载后的文件名)
 */


function downoladFile(url, name) {
  var xhr = new XMLHttpRequest();
  var path = "";
  xhr.open("get", url);
  xhr.responseType = "blob";

  xhr.onload = function () {
    path = URL.createObjectURL(xhr.response);
    var a = document.createElement("a");
    a.setAttribute("download", name);
    a.setAttribute("href", path);
    a.click();
    URL.revokeObjectURL(path);
  };

  xhr.send();
}
/**
 * @date 2020-11-17
 * @author saltire
 * @description 控制函数只执行一次
 * @param 希望被控制的函数
 */


function once(fn) {
  var flag = false;
  return function () {
    if (!flag) {
      flag = true;
      return fn.apply(void 0, arguments);
    }

    return;
  };
}

var common = {
  flatten: flatten,
  debounce: debounce,
  copyToClipboard: copyToClipboard,
  downoladFile: downoladFile,
  once: once
};
exports.common = common;