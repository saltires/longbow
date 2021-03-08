interface deviceInterface {
  /**
   * 平滑滚动到页面顶部
   */
  scrollToTop: () => void;
  /**
   * 如果指定的元素在可视窗口中可见，则返回 true ，否则返回 false
   * @param el - 需要判断的元素
   * @param partiallyVisible - 是否部分可见，指定为 true 则表示只有元素完全可见才返回 true
   */
  elementIsVisibleInViewport: (
    el: Element,
    partiallyVisible: boolean
  ) => boolean;
  /**
   * 判断是否处于浏览器环境中
   */
  inBrowser: () => boolean;
  /**
   * 判断是否是 IE 浏览器
   */
  isIE: () => boolean;
  /**
   * 判断是否是 IE9 浏览器
   */
  isIE9: () => boolean;
  /**
   * 判断是否是 Edge 浏览器
   */
  isEdge: () => boolean;
  /**
   * 判断是否是安卓环境
   */
  isAndroid: () => boolean;
  /**
   * 判断是否是 IOS 环境
   */
  isIOS: () => boolean;
  /**
   * 判断是否是谷歌浏览器
   */
  isChrome: () => boolean;
  /**
   * 判断是否是火狐浏览器
   */
  isgecko: () => boolean;
  /**
   * 判断是否是 QQ 浏览器
   */
  isqq: () => boolean;
  /**
   * 判断是 pc 端还是移动端
   */
  ispc: () => boolean;
  /**
   * 判断是否是微信环境
   */
  isweixin: () => boolean;
}
declare const device: deviceInterface;
export { device, deviceInterface };
