declare const cookie: cookieInterface;
interface cookieInterface {
  /**
   * 给站点设置 cookie
   * @param site - 站点的域名（无需 www）
   * @param cname - cookie 的键
   * @param cvalue - cookie 的值
   * @param exdays - 失效时间，以天为单位
   * @example setCookie('example.com', 'foo', 'bar', 3)
   */
  setCookie: (
    site: string,
    cname: string,
    cvalue: string,
    exdays: number
  ) => void;
  /**
   * 获取 cookie
   * @param cname - cookie 的键
   * @example getCookie('foo') === "bar"
   */
  getCookie: (cname: string) => string;
  /**
   * 清除某个 cookie
   * @param site - 站点的域名
   * @param name - cookie 的键
   * @example clearCookie('example.com', 'foo')
   */
  clearCookie: (site: string, name: string) => void;
  /**
   * 解析 HTTP Cookie 字符串并返回所有 cookie 的 name-value 对的对象
   * @example parseCookie() === {foo: "1", bar: "2"}
   */
  parseCookie: () => AnyObject;
}
export { cookie, cookieInterface };
