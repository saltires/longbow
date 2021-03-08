/**
  * @date 2020-06-19
  * @author saltire
  * @description 给站点设置cookie
  * @param (cname,string,键名) （cvalue，string，键值）（exdays, number, 失效时间，以天为单位）
  * @return undefined
*/
function setCookie(site: string, cname: string, cvalue: string, exdays: number): void {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/; domain=." + site;
}

/* 获取cookie */
function getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }

    return "";
}

/* 清除某个cookie */
function clearCookie(site: string, name: string) {
    setCookie(site, name, "", -1);
}

/**
  * @date 2020-07-09
  * @author saltire
  * @description 解析 HTTP Cookie 标头字符串并返回所有 cookie 的 name-value 对的对象
  * @return (object)
*/
function parseCookie() {
    return document.cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc: any, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
        }, {});
}
const cookie: cookieInterface = {
    setCookie,
    getCookie,
    clearCookie,
    parseCookie,
}

interface cookieInterface {
    /**
     * 给站点设置 cookie
     * @param site - 站点的域名（无需 www）
     * @param cname - cookie 的键
     * @param cvalue - cookie 的值
     * @param exdays - 失效时间，以天为单位
     * @example setCookie('example.com', 'foo', 'bar', 3)
     */
    setCookie: (site: string, cname: string, cvalue: string, exdays: number) => void
    /**
     * 获取 cookie
     * @param cname - cookie 的键
     * @example getCookie('foo') === "bar"
     */
    getCookie: (cname: string) => string
    /**
     * 清除某个 cookie
     * @param site - 站点的域名
     * @param name - cookie 的键
     * @example clearCookie('example.com', 'foo')
     */
    clearCookie: (site: string, name: string) => void
    /**
     * 解析 HTTP Cookie 标头字符串并返回所有 cookie 的 name-value 对的对象
     * @example parseCookie() === {foo: "1", bar: "2"}
     */
    parseCookie: () => Object
}

export {
    cookie,
    cookieInterface
}