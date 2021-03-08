interface ObjectWidthHeight {
  width: number;
  height: number;
}
interface domInterface {
  /**
   * 判断元素是否含有某个class
   * @param element - 指定的元素
   * @param className - class 名称
   * @example hasClass(document.getElementById('content-toc'), 'content-toc') => true 或 false
   */
  hasClass: (element: Element, className: string) => boolean;
  /**
   * 原生js操作元素class的方法，给元素添加class，支持不定长参数
   * @param element - 指定的元素
   */
  addClass(element: Element): void;
  /**
   * 原生js操作元素class的方法，删除元素的class，支持不定长参数
   * @param element - 指定的元素
   */
  removeClass(element: Element): void;
  /**
   * 返回整个 html文档的 scrollLeft 值
   * @returns number
   */
  getScrollLeft(): number;
  /**
   * 返回整个 html文档的 scrollTop 值
   * @returns number
   */
  getScrollTop(): number;
  /**
   * 获取元素距页面高度
   * @param el - 指定的元素
   * @returns  number - 元素距离页面的高度
   */
  getElementTop(el: HTMLElement): number;
  /**
   * 获取整个网页的实际高度与宽度
   * @returns 返回一个具有 width 和 height 属性的对象或者返回 null
   */
  getPagearea(): ObjectWidthHeight | null;
}
declare const dom: domInterface;
export { dom, domInterface };
