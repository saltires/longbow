"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = void 0;

/* 获取url中的某个参数值 */
function GetQueryString(name) {
  try {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  } catch (_a) {
    return null;
  }
}
/* 修改url中的某个参数的值，返回新地址 */


function replaceQueryString(paramName, replaceWith) {
  var oUrl = window.location.href.toString();
  var re = new RegExp("/(" + paramName + "=)([^&]*)/gi");
  var nUrl = oUrl.replace(re, paramName + "=" + replaceWith);
  return nUrl;
}
/* 在URL中追加一个参数 */


function addQueryString(paramName, replaceWith) {
  try {
    var _url = window.location.href;

    if (_url.indexOf(paramName) > -1) {
      var re = new RegExp("/(" + paramName + "=)([^&]*)/gi");
      _url = _url.replace(re, paramName + "=" + replaceWith);
    } else {
      var paraStr = paramName + "=" + replaceWith;

      var idx = _url.indexOf("?");

      if (idx < 0) _url += "?";else if (idx >= 0 && idx != _url.length - 1) _url += "&";
      _url = _url + paraStr;
    }

    return _url;
  } catch (_a) {
    return null;
  }
}
/**
 * @description 是否为绝对地址,如果给定的字符串是绝对URL，则返回 true ；否则返回 false。
 * @example isAbsoluteURL('https://google.com'); // true
 * @example isAbsoluteURL('ftp://www.myserver.net'); // true
 * @example isAbsoluteURL('/foo/bar'); // false
 */


function isAbsoluteURL(str) {
  return /^[a-z][a-z0-9+.-]*:/.test(str);
}

var url = {
  GetQueryString: GetQueryString,
  replaceQueryString: replaceQueryString,
  addQueryString: addQueryString,
  isAbsoluteURL: isAbsoluteURL
};
exports.url = url;