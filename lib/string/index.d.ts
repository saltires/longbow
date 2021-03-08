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
