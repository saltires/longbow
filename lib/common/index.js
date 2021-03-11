/**
 * @date 2020-12-04
 * @param { Array }
 * @author saltire
 * @description 多维数组扁平化
 * @return { Array }
 */
function flatten(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
/**
 * @author jxye
 * @date 2020/3/18
 * @Description: 防止函数被频繁触发，设置一个间隔时间，如果间隔时间内用户又一次触发，认为触发无效，并且重新设置间隔时间，这就是常说的防抖
 * @example: debounce(function(){console.log(this);}, 300)
 */
function debounce(func, delay, ...args) {
    let timeout;
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
function copyToClipboard(str) {
    const el = document.createElement("textarea");
    const getSelection = document.getSelection();
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    const selected = getSelection.rangeCount > 0 ? getSelection.getRangeAt(0) : false;
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
function downoladFile(url, name) {
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
function once(fn) {
    let flag = false;
    return function (...args) {
        if (!flag) {
            flag = true;
            return fn(...args);
        }
        return;
    };
}
const common = {
    flatten,
    debounce,
    copyToClipboard,
    downoladFile,
    once,
};
(function () {
    const array = ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp', 'Date'];
    array.forEach(function (item) {
        common['is' + item] = function (target) {
            const s = Object.prototype.toString.call(target);
            const result = s.match(/\[object (.*?)\]/);
            if (result && result[1]) {
                return result[1].toLowerCase() === item.toLowerCase();
            }
            return false;
        };
    });
}());
export { common };
