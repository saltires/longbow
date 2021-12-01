import { commonInterface } from "./common/index";
import { cookieInterface } from "./cookie/index";
import { dateInterface } from "./date/index";
import { deviceInterface } from "./device/index";
import { domInterface } from "./dom/index";
import { checkInterface } from "./regexp/index";
import { stringInterface } from "./string/index";
import { urlInterface } from "./url/index";
interface longbowInterface
  extends commonInterface,
    cookieInterface,
    dateInterface,
    deviceInterface,
    domInterface,
    checkInterface,
    stringInterface,
    urlInterface {
  version: string;
  name: string;
}
declare const longbow: longbowInterface;
export default longbow;

declare const common: commonInterface;
interface commonInterface {
  [propName: string]: any;
  /**
   * 多维数组扁平化
   * @param array - 希望被扁平化处理的多维数组
   * @example flatten([1,2,[3,4]]) === [1,2,3,4]
   * @example flatten([1,2,[3,4],[5,6,[7,8,9]]]) === [1,2,3,4,5,6,7,8,9]
   */
  flatten: <T>(arr: Array<T>) => Array<T>;
  /**
   * 防止函数被频繁触发，设置一个间隔时间，如果间隔时间内用户又一次触发，认为触发无效，并且重新设置间隔时间，这就是常说的防抖
   * @param func - 指定的函数
   * @param delay - 延迟时间（毫秒）
   * @example debounce(function(){console.log(this);}, 300)
   */
  debounce: (func: any, delay: number) => (...args: any[]) => void;
  /**
   * 将一个字符串复制到剪贴板
   * @param  str - 要复制的字符串
   * @example copyToClipboard('so helpful!')
   */
  copyToClipboard: (str: string) => void;
  /**
   * 根据网络上的url地址下载文件
   * @param url - 文件的地址
   * @param name - 指定下载后的文件名称
   * @example downoladFile('http:example.com/file.pdf', '百科全书.pdf')
   */
  downoladFile: (url: string, name: string) => void;
  /**
   * 控制函数只执行一次
   * @param fn - 希望被控制的函数
   * @example once(function(){console.log('foo')})()
   */
  once: (fn: (...args: any[]) => void) => AnyObject;
  /**
   * 判断是否是数组
   * @param type - 待判断的数据
   */
  isArray?: (type: any) => boolean;
  /**
   * 判断是否是布尔值
   * @param type - 待判断的数据
   */
  isBoolean?: (type: any) => boolean;
  /**
   * 判断是否是日期对象
   * @param type - 待判断的数据
   */
  isDate?: (type: any) => boolean;
  /**
   * 判断是否是函数
   * @param type - 待判断的数据
   */
  isFunction?: (type: any) => boolean;
  /**
   * 判断是否是 Number
   * @param type - 待判断的数据
   */
  isNumber?: (type: any) => boolean;
  /**
   * 判断是否是 Null
   * @param type - 待判断的数据
   */
  isNull?: (type: any) => boolean;
  /**
   * 判断是否是 plainObject
   * @param type - 待判断的数据
   */
  isObject?: (type: any) => boolean;
  /**
   * 判断是否是正则对象
   * @param type - 待判断的数据
   */
  isRegExp?: (type: any) => boolean;
  /**
   * 判断是否是字符串
   * @param type - 待判断的数据
   */
  isString?: (type: any) => boolean;
  /**
   * 判断是否是 Undefined
   * @param type - 待判断的数据
   */
  isUndefined?: (type: any) => boolean;
}
export { common, commonInterface };

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

interface dateObject {
  day: number;
  hour: number;
  min: number;
  ms: number;
}
declare const date: dateInterface;
interface dateInterface {
  /**
   * 判断指定日期是否在指定的开始日期和结束日期之间
   * @param date - 指定日期
   * @param start - 开始日期
   * @param end - 结束日期
   */
  between: (
    date: potentialDate,
    start: potentialDate,
    end: potentialDate
  ) => boolean;
  /**
   * 日期格式化工具函数
   * @param date - 需要格式化的日期
   * @param format - 格式化规则
   * @example renderDate(1614564487401, 'yyyy-MM-dd HH:mm')
   */
  renderDate: (date: potentialDate, format?: string) => string;
  /**
   * 判断两个日期是否相等
   * @param date1 - 日期 1
   * @param date2 - 日期 2
   */
  isEqual: (date1: potentialDate, date2: potentialDate) => boolean;
  /**
   * 判断是否是闰年
   * @example date - 需要判断的日期
   */
  isLeapYear: (date: potentialDate) => boolean;
  /**
   * 返回指定年月的第一天是星期几，返回值是1-7的数字
   * @param date - 指定的日期
   */
  getFirstDayOfMonth: (date: potentialDate) => number;
  /**
   * 返回指定月份的最后一天是星期几，返回值是1-7的数字
   * @param date - 指定的日期
   */
  getLastDayOfMonth: (date: potentialDate) => number;
  /**
   * 返回指定年月第一天的日期
   * @param date - 指定的年月
   */
  getFirstDateOfMonth: (date: potentialDate) => string;
  /**
   * 返回指定年月最后一天的日期
   * @param date - 指定的年月
   */
  getLastDateOfMonth: (date: potentialDate) => string;
  /**
   * 获取指定月份的天数
   * @param date - 指定的年月
   */
  getDaysInMonth: (date: potentialDate) => number;
  /**
   * 给指定日期增加指定天数
   * @param date - 指定的日期
   * @param days - 要增加的天数
   */
  addDays: (date: potentialDate, days: number) => Date;
  /**
   * 给指定日期增加指定小时
   * @param date - 指定的日期
   * @param hours - 要增加的小时
   */
  addHours: (date: potentialDate, hours: number) => Date;
  /**
   * 将时间转为时间戳，按当天最初一刻
   * @param date - 指定的日期
   */
  timeStartChange: (date: potentialDate) => number;
  /**
   * 将时间转为时间戳，按当天最后一刻
   * @param date - 指定的日期
   */
  timeEndChange: (date: potentialDate) => number;
  /**
   * 获取时间差，提供两个时间戳，返回一个对象，为负数表示当前 time1 比 time2 小
   * @param time1 - 第一个时间的时间戳
   * @param time2 - 第二个时间的时间戳
   */
  timeDifference: (time1: number, time2: number) => dateObject;
}
export { dateInterface, date };

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
    partiallyVisible?: boolean
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
  addClass(element: Element, ...argus: Array<string>): void;
  /**
   * 原生js操作元素class的方法，删除元素的class，支持不定长参数
   * @param element - 指定的元素
   */
  removeClass(element: Element, ...argus: Array<string>): void;
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

declare const check: checkInterface;
interface checkInterface {
  [propName: string]: any;
  /**
   * 网址(url,支持端口和"?+参数"和"#+参数)
   * @param param 待判定数据类型
   */
  isurl?: (param: string) => boolean;
  /**
   * 视频(video)链接地址（视频格式可按需增删）
   * @param param 待判定数据类型
   */
  isvideo_url?: (param: any) => boolean;
  /**
   * 图片(image)链接地址（图片格式可按需增删）
   * @param param 待判定数据类型
   */
  isimg_url?: (param: any) => boolean;
  /**
   * 24小时制时间（HH:mm:ss）
   * @param param 待判定数据类型
   */
  istime_24?: (param: any) => boolean;
  /**
   * 12小时制时间（hh:mm:ss）
   * @param param 待判定数据类型
   */
  istime_12?: (param: any) => boolean;
  /**
   * base64格式
   * @param param 待判定数据类型
   */
  isbase64?: (param: any) => boolean;
  /**
   * 数字/货币金额（支持负数、千分位分隔符）
   * @param param 待判定数据类型
   */
  ismoney?: (param: any) => boolean;
  /**
   * 银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
   * @param param 待判定数据类型
   */
  isbank_card?: (param: any) => boolean;
  /**
   * 中文姓名
   * @param param 待判定数据类型
   */
  isname_chinese?: (param: any) => boolean;
  /**
   * 车牌号(新能源+非新能源)
   * @param param 待判定数据类型
   */
  islicense_plate?: (param: any) => boolean;
  /**
   * md5格式(32位)
   * @param param 待判定数据类型
   */
  ismd5?: (param: any) => boolean;
  /**
   * 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
   * @param param 待判定数据类型
   */
  isphone_rigorous?: (param: any) => boolean;
  /**
   * 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
   * @param param 待判定数据类型
   */
  isphone_loose?: (param: any) => boolean;
  /**
   * 日期 支持2020-01-02和2020/01/02这两种形式
   * @param param 待判定数据类型
   */
  isdate?: (param: any) => boolean;
  /**
   * 邮箱
   * @param param 待判定数据类型
   */
  isemail?: (param: any) => boolean;
  /**
   * 座机(tel phone)电话(国内),如: 0341-86091234
   * @param param 待判定数据类型
   */
  istel?: (param: any) => boolean;
  /**
   * 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
   * @param param 待判定数据类型
   */
  isid_card?: (param: any) => boolean;
  /**
   * 护照（包含香港、澳门）
   * @param param 待判定数据类型
   */
  ispassports?: (param: any) => boolean;
  /**
   * 用户名校验，4到16位（字母，数字，下划线，减号）
   * @param param 待判定数据类型
   */
  isusername?: (param: any) => boolean;
  /**
   * 中文/汉字
   * @param param 待判定数据类型
   */
  ischinese?: (param: any) => boolean;
  /**
   * 小数
   * @param param 待判定数据类型
   */
  isdecimal?: (param: any) => boolean;
  /**
   * qq号码格式
   * @param param 待判定数据类型
   */
  isqq_number?: (param: any) => boolean;
  /**
   * 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
   * @param param 待判定数据类型
   */
  ispassword?: (param: any) => boolean;
  /**
   * ipv4地址
   * @param param 待判定数据类型
   */
  isip_v4?: (param: any) => boolean;
  /**
   * 十六进制颜色
   * @param param 待判定数据类型
   */
  iscolor_16?: (param: any) => boolean;
  /**
   * 微信号
   * @param param 待判定数据类型
   */
  iswx_username?: (param: any) => boolean;
  /**
   * 邮政编码（中国）
   * @param param 待判定数据类型
   */
  iszip_code?: (param: any) => boolean;
}
export { check, checkInterface };

interface stringInterface {
  /**
   * 英文字符串依序转驼峰，处理过程中遇见非英文字母字符，全部当做空格处理，其余依序拼装
   * @param string - 待处理的字符串
   * @example _.camelCase('Foo Bar'); => 'fooBar'
   * @example _.camelCase('--foo-bar--'); => 'fooBar'
   * @example  _.camelCase('FOO BAR QI#ZH');  => 'fooBarQiZh'
   */
  camelCase(string: string): string | AnyObject;
  /**
   * 判断某个字符串是否以某特殊字符结尾,尾部空格会被忽略
   * @param str - 整个字符串
   * @param match - 特殊字符
   * @example endsWith("foobar", "bar") // true   endsWith("foobar", "foo") // false
   */
  endsWith(str: string, match: string): boolean | AnyObject;
  /**
   * 判断某个字符串是否以某特殊字符开头,头部空格会被忽略
   * @param string - 整个字符串
   * @param match - 特殊字符
   * @example startsWith("foobar", "fo") // true startsWith("foobar", "v") // false
   */
  startsWith(string: string, match: string): boolean | AnyObject;
  /**
   * 生成随机字符串
   */
  randomString(): string;
  /**
   * 隐藏号码的中间一部分，常见的是隐藏中间四位
   * @param str - 号码
   * @param frontLen - 前面的号码显示数量
   * @param endLen - 后面的号码显示数量
   * @example hiddenNumber('13901342187', 3, 4) => 139****2187
   */
  hiddenNumber(str: string, frontLen: number, endLen: number): string;
  /**
   * 生成一个[min, max]之间的随机数
   * @param min 最小数
   * @param max 最大数
   */
  randomNumber(min: number, max: number): number;
}
declare const str: stringInterface;
export { str, stringInterface };

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
