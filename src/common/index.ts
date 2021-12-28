import * as math from "mathjs";
import { MathType } from "mathjs";

/**
 * @date 2020-12-04
 * @param { Array }
 * @author saltire
 * @description 多维数组扁平化
 * @return { Array }
 */
function flatten<T>(arr: Array<T>): Array<T> {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...(arr as unknown as ConcatArray<never>[]));
  }

  return arr;
}

/**
 * @author jxye
 * @date 2020/3/18
 * @Description: 防止函数被频繁触发，设置一个间隔时间，如果间隔时间内用户又一次触发，认为触发无效，并且重新设置间隔时间，这就是常说的防抖
 * @example: debounce(function(){console.log(this);}, 300)
 */
function debounce(
  func: () => any,
  delay: number,
  ...args: []
): (...args: any[]) => void {
  let timeout: NodeJS.Timeout;
  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, delay);
  };
}

/**
 * @date 2020-07-09
 * @author saltire
 * @description 将一个字符串复制到剪贴板
 * @param (string, 要复制的字符串)
 */
function copyToClipboard(str: string): void {
  const el = document.createElement("textarea");
  const getSelection = document.getSelection() as Selection;
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    getSelection.rangeCount > 0 ? getSelection.getRangeAt(0) : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    getSelection.removeAllRanges();
    getSelection.addRange(selected);
  }
}

/**
 * @date 2020-08-17
 * @author saltire
 * @description 根据网络上的url地址下载文件
 * @param (string, 文件地址);(string, 下载后的文件名)
 */
function downoladFile(url: string, name: string): void {
  const xhr = new XMLHttpRequest();
  let path = "";
  xhr.open("get", url);
  xhr.responseType = "blob";
  xhr.onload = function () {
    path = URL.createObjectURL(xhr.response);
    const a = document.createElement("a");
    a.setAttribute("download", name);
    a.setAttribute("href", path);
    a.click();
    URL.revokeObjectURL(path);
  };
  xhr.send();
}

/**
 * @date 2020-11-17
 * @author saltire
 * @description 控制函数只执行一次
 * @param 希望被控制的函数
 */
function once(fn: (...args: any[]) => void): AnyObject {
  let flag = false;

  return function (...args: []) {
    if (!flag) {
      flag = true;
      return fn(...args);
    }

    return;
  };
}

// 加
const add = (num1: number, num2: number): MathType => {
  return math.add(math.bignumber(num1), math.bignumber(num2));
};

// 乘
const multiply = (num1: number, num2: number): MathType => {
  return math.multiply(math.bignumber(num1), math.bignumber(num2));
};

// 减
const subtract = (num1: number, num2: number): MathType => {
  return math.subtract(math.bignumber(num1), math.bignumber(num2));
};

// 除
const divide = (num1: number, num2: number): MathType => {
  return math.divide(math.bignumber(num1), math.bignumber(num2));
};

const common: commonInterface = {
  flatten,
  debounce,
  copyToClipboard,
  downoladFile,
  once,
  add,
  multiply,
  subtract,
  divide,
};

(function () {
  const array = [
    "Null",
    "Undefined",
    "Object",
    "Array",
    "String",
    "Number",
    "Boolean",
    "Function",
    "RegExp",
    "Date",
  ];

  array.forEach(function (item) {
    common["is" + item] = function (target: string): boolean {
      const s: string = Object.prototype.toString.call(target);
      const result = s.match(/\[object (.*?)\]/);

      if (result && result[1]) {
        return result[1].toLowerCase() === item.toLowerCase();
      }

      return false;
    };
  });
})();

interface commonInterface {
  [propName: string]: any;
  /**
   * 高精确度的加法运算，内部使用 mathjs 的 bignumber 实现
   * @param num1
   * @param num2
   * @returns MathType
   */
  add: (num1: number, num2: number) => MathType;
  /**
   * 高精确度的乘法运算，内部使用 mathjs 的 bignumber 实现
   * @param num1
   * @param num2
   * @returns MathType
   */
  multiply: (num1: number, num2: number) => MathType;
  /**
   * 高精确度的减法运算，内部使用 mathjs 的 bignumber 实现
   * @param num1
   * @param num2
   * @returns MathType
   */
  subtract: (num1: number, num2: number) => MathType;
  /**
   * 高精确度的除法运算，内部使用 mathjs 的 bignumber 实现
   * @param num1
   * @param num2
   * @returns MathType
   */
  divide: (num1: number, num2: number) => MathType;
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
