/* 获取url中的某个参数值 */
function GetQueryString(name: string): (string | null) {
    try {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null
    } catch {
        return null
    }
}

/* 修改url中的某个参数的值，返回新地址 */
function replaceQueryString(paramName: String, replaceWith: string): string {
    var oUrl = window.location.href.toString();
    var re = new RegExp('/(' + paramName + '=)([^&]*)/gi');
    var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
    return nUrl;
}

/* 在URL中追加一个参数 */
function addQueryString(paramName: string, replaceWith: string): (string | null) {
    try {
        var url = window.location.href;
        if (url.indexOf(paramName) > -1) {
            var re = new RegExp('/(' + paramName + '=)([^&]*)/gi');
            url = url.replace(re, paramName + '=' + replaceWith);
        } else {
            var paraStr = paramName + '=' + replaceWith;

            var idx = url.indexOf('?');
            if (idx < 0)
                url += '?';
            else if (idx >= 0 && idx != url.length - 1)
                url += '&';
            url = url + paraStr;
        }
        return url;
    } catch {
        return null
    }
};

/**
  * @description 是否为绝对地址,如果给定的字符串是绝对URL，则返回 true ；否则返回 false。
  * @example isAbsoluteURL('https://google.com'); // true
  * @example isAbsoluteURL('ftp://www.myserver.net'); // true
  * @example isAbsoluteURL('/foo/bar'); // false
*/
function isAbsoluteURL(str: string): boolean {
    return /^[a-z][a-z0-9+.-]*:/.test(str);
}


interface urlInterface {
    /**
     * 获取 url 中的某个参数值 
     * @param name 参数名
     */
    GetQueryString(name: string): (string | null)
    /**
     * 修改 url 中的某个参数的值，返回新地址
     * @param paramName 参数名
     * @param replaceWith 新的参数值
     */
    replaceQueryString(paramName: String, replaceWith: string): string
    /**
     * 在 URL 中追加一个参数
     * @param paramName 追加的参数名
     * @param replaceWith 追加的参数值
     */
    addQueryString(paramName: string, replaceWith: string): (string | null)
    /**
     * 是否为绝对地址,如果给定的字符串是绝对 URL
     * @param str 要判断的地址
     * @example isAbsoluteURL('https://google.com'); // true
     * @example isAbsoluteURL('ftp://www.myserver.net'); // true
     * @example isAbsoluteURL('/foo/bar'); // false
     */
    isAbsoluteURL(str: string): boolean
}

const url: urlInterface = {
    GetQueryString,
    replaceQueryString,
    addQueryString,
    isAbsoluteURL,
}

export {
    url,
    urlInterface
}