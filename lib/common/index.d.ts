declare const common: commonInterface;
interface commonInterface {
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
  once: (fn: any) => any;
}
export { common, commonInterface };
