"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookie = void 0;

/**
 * @date 2020-06-19
 * @author saltire
 * @description 给站点设置cookie
 * @param (cname,string,键名) （cvalue，string，键值）（exdays, number, 失效时间，以天为单位）
 * @return undefined
 */
function setCookie(site, cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/; domain=." + site;
}
/* 获取cookie */


function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }

  return "";
}
/* 清除某个cookie */


function clearCookie(site, name) {
  setCookie(site, name, "", -1);
}
/**
 * @date 2020-07-09
 * @author saltire
 * @description 解析 HTTP Cookie 字符串并返回所有 cookie 的 name-value 对的对象
 * @return (object)
 */


function parseCookie() {
  return document.cookie.split(";").map(function (v) {
    return v.split("=");
  }).reduce(function (acc, v) {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});
}

var cookie = {
  setCookie: setCookie,
  getCookie: getCookie,
  clearCookie: clearCookie,
  parseCookie: parseCookie
};
exports.cookie = cookie;