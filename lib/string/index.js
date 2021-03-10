/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 英文字符串依序转驼峰，处理过程中遇见非英文字母字符，全部当做空格处理，其余依序拼装
 * @example: _.camelCase('Foo Bar'); => 'fooBar'
 * @example: _.camelCase('--foo-bar--'); => 'fooBar'
 * @example:  _.camelCase('FOO BAR QI#ZH');  => 'fooBarQiZh'
 */
function camelCase(string) {
    const stringArray = string.split(""), start = string.search(/([a-zA-Z])/) + 1, regCase = /^[a-zA-Z]$/, result = [];
    let nextUpperCase = false, isCase, error;
    if (!string) {
        error = "camelCase调用时参数不能为空";
    }
    if (start - 1 >= 0) {
        // 推入首个字母，首个字母必须小写
        result.push(stringArray[start - 1].toLowerCase());
        for (let i = start; i < stringArray.length; i++) {
            const singleString = stringArray[i];
            const thisUpperCase = nextUpperCase;
            isCase = regCase.test(singleString);
            nextUpperCase = false;
            if (isCase) {
                if (thisUpperCase === false) {
                    result.push(singleString.toLowerCase());
                }
                else {
                    result.push(singleString.toUpperCase());
                }
            }
            else {
                nextUpperCase = true;
            }
        }
    }
    if (error) {
        return new Error(error);
    }
    else if (result && result.length) {
        return result.join("");
    }
    return string;
}
/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 判断某个字符串是否以某特殊字符结尾,尾部空格会被忽略
 * @example: endsWith("foobar", "bar") // true   endsWith("foobar", "foo") // false
 */
function endsWith(str, match) {
    if (!str || !match) {
        return new Error("endsWith函数调用时参数不能为空");
    }
    if (str === match) {
        return true;
    }
    const reg = new RegExp(match.replace(/\s*$/g, "") + "$");
    return reg.test(str.replace(/\s*$/g, ""));
}
/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 判断某个字符串是否以某特殊字符开头,头部空格会被忽略
 * @example: startsWith("foobar", "fo") // true startsWith("foobar", "v") // false
 */
function startsWith(string, match) {
    if (!string || !match) {
        return new Error("startsWith函数调用时参数不能为空");
    }
    if (string === match) {
        return true;
    }
    const reg = new RegExp("^" + match.replace(/^\s*/g, ""));
    return reg.test(string.replace(/^\s*/g, ""));
}
/* 生成随机字符串 */
function randomString() {
    return Math.random().toString(36).substr(2);
}
/**
 * @date 2020-06-19
 * @author saltire
 * @description 隐藏号码的中间一部分，常见的是隐藏中间四位
 * @param (str：号码)，(frontLen：前面的号码显示数量)，(endLen：后面的号码显示数量)
 * @return string
 * @example hiddenNumber('13901342187', 3, 4) => 139****2187
 */
function hiddenNumber(str, frontLen, endLen) {
    const len = str.length - frontLen - endLen;
    let xing = "";
    for (let i = 0; i < len; i++) {
        xing += "*";
    }
    return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
}
// 生成一个[min, max]之间的随机数
function randomNumber(min, max) {
    return parseInt(String(Math.random() * (max - min + 1) + min), 10);
}
const str = {
    camelCase,
    endsWith,
    startsWith,
    randomString,
    hiddenNumber,
    randomNumber,
};
export { str };
