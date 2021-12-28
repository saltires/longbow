interface urlInterface {
  /**
   * 获取 url 中的某个参数值
   * @param name 参数名
   */
  GetQueryString(name: string): string | null;
  /**
   * 修改 url 中的某个参数的值，返回新地址
   * @param paramName 参数名
   * @param replaceWith 新的参数值
   */
  replaceQueryString(paramName: string, replaceWith: string): string;
  /**
   * 在 URL 中追加一个参数
   * @param paramName 追加的参数名
   * @param replaceWith 追加的参数值
   */
  addQueryString(paramName: string, replaceWith: string): string | null;
  /**
   * 是否为绝对地址,如果给定的字符串是绝对 URL
   * @param str 要判断的地址
   * @example isAbsoluteURL('https://google.com'); // true
   * @example isAbsoluteURL('ftp://www.myserver.net'); // true
   * @example isAbsoluteURL('/foo/bar'); // false
   */
  isAbsoluteURL(str: string): boolean;
}
declare const url: urlInterface;
export { url, urlInterface };
