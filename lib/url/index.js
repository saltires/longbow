/* 获取url中的某个参数值 */
function GetQueryString(name) {
    try {
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        const r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    }
    catch (_a) {
        return null;
    }
}
/**
 * 修改url中的某个参数的值，返回新地址
 * @param paramName
 * @param replaceWith
 * @returns string
 */
function replaceQueryString(paramName, replaceWith) {
    const oUrl = window.location.href.toString();
    const re = eval('/(' + paramName + '=)([^&]*)/gi');
    return oUrl.replace(re, paramName + '=' + replaceWith);
}
/* 在URL中追加一个参数 */
function addQueryString(paramName, replaceWith) {
    try {
        let url = window.location.href;
        if (url.indexOf(paramName) > -1) {
            const re = new RegExp("/(" + paramName + "=)([^&]*)/gi");
            url = url.replace(re, paramName + "=" + replaceWith);
        }
        else {
            const paraStr = paramName + "=" + replaceWith;
            const idx = url.indexOf("?");
            if (idx < 0)
                url += "?";
            else if (idx >= 0 && idx != url.length - 1)
                url += "&";
            url = url + paraStr;
        }
        return url;
    }
    catch (_a) {
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
const url = {
    GetQueryString,
    replaceQueryString,
    addQueryString,
    isAbsoluteURL,
};
export { url };
