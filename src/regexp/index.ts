interface regObject {
    [propName: string]: RegExp;
}

const reg: regObject = {
    // 网址(url,支持端口和"?+参数"和"#+参数)
    url: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,

    // 视频(video)链接地址（视频格式可按需增删）
    video_url: /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,

    // 图片(image)链接地址（图片格式可按需增删）
    img_url: /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,

    // 24小时制时间（HH:mm:ss）
    time_24: /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,

    // 12小时制时间（hh:mm:ss）
    time_12: /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,

    // base64格式
    base64: /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,

    // 数字/货币金额（支持负数、千分位分隔符）
    money: /^-?\d+(,\d{3})*(\.\d{1,2})?$/,

    // 银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
    bank_card: /^[1-9]\d{9,29}$/,

    // 中文姓名
    name_chinese: /^(?:[\u4e00-\u9fa5·]{2,16})$/,

    // 车牌号(新能源+非新能源)
    license_plate: /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))$|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,

    // md5格式(32位)
    md5: /^([a-f\d]{32}|[A-F\d]{32})$/,

    // 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
    phone_rigorous: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,

    // 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
    phone_loose: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,

    // 日期 支持2020-01-02和2020/01/02这两种形式
    date: /^\d{4}(-|\/)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/,

    // 邮箱
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    // 座机(tel phone)电话(国内),如: 0341-86091234
    tel: /^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/,

    // 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
    id_card: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,

    // 护照（包含香港、澳门）
    passports: /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,

    // 用户名校验，4到16位（字母，数字，下划线，减号）
    username: /^[a-zA-Z0-9_-]{4,16}$/,

    // 中文/汉字
    chinese: /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,

    // 小数
    decimal: /^\d+\.\d+$/,

    // qq号码格式
    qq_number: /^[1-9][0-9]{4,10}$/,

    // 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    password: /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,

    // ipv4地址
    ip_v4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,

    // 十六进制颜色
    color_16: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,

    // 微信号
    wx_username: /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,

    // 邮政编码（中国）
    zip_code: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
}


/**
  * @date 2020-06-19
  * @author saltire
  * @description 常用正则表达式的验证
  * @param （string，待验证的字符串）
  * @return （boolean，验证结果）
  * @example  check.isphone_loose('19121673570') => true
*/
let checkType = function (s: string, r: RegExp) {
    let regNew = new RegExp(r);

    return regNew.test(s);
}

const check: checkInterface = {

}

Object.keys(reg).forEach(function (t) {
    check["is" + t] = function (params: string) {
        return checkType(params, reg[t]);
    }
});

interface checkInterface {
    [propName: string]: any
    /**
     * 网址(url,支持端口和"?+参数"和"#+参数)
     * @param param 待判定数据类型
     */
    isurl?: (param: any) => boolean
    /**
     * 视频(video)链接地址（视频格式可按需增删）
     * @param param 待判定数据类型
     */
    isvideo_url?: (param: any) => boolean
    /**
     * 图片(image)链接地址（图片格式可按需增删）
     * @param param 待判定数据类型
     */
    isimg_url?: (param: any) => boolean
    /**
     * 24小时制时间（HH:mm:ss）
     * @param param 待判定数据类型
     */
    istime_24?: (param: any) => boolean
    /**
     * 12小时制时间（hh:mm:ss）
     * @param param 待判定数据类型
     */
    istime_12?: (param: any) => boolean
    /**
     * base64格式
     * @param param 待判定数据类型
     */
    isbase64?: (param: any) => boolean
    /**
     * 数字/货币金额（支持负数、千分位分隔符）
     * @param param 待判定数据类型
     */
    ismoney?: (param: any) => boolean
    /**
     * 银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
     * @param param 待判定数据类型
     */
    isbank_card?: (param: any) => boolean
    /**
     * 中文姓名
     * @param param 待判定数据类型
     */
    isname_chinese?: (param: any) => boolean
    /**
     * 车牌号(新能源+非新能源)
     * @param param 待判定数据类型
     */
    islicense_plate?: (param: any) => boolean
    /**
     * md5格式(32位)
     * @param param 待判定数据类型
     */
    ismd5?: (param: any) => boolean
    /**
     * 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
     * @param param 待判定数据类型
     */
    isphone_rigorous?: (param: any) => boolean
    /**
     * 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
     * @param param 待判定数据类型
     */
    isphone_loose?: (param: any) => boolean
    /**
     * 日期 支持2020-01-02和2020/01/02这两种形式
     * @param param 待判定数据类型
     */
    isdate?: (param: any) => boolean
    /**
     * 邮箱
     * @param param 待判定数据类型
     */
    isemail?: (param: any) => boolean
    /**
     * 座机(tel phone)电话(国内),如: 0341-86091234
     * @param param 待判定数据类型
     */
    istel?: (param: any) => boolean
    /**
     * 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
     * @param param 待判定数据类型
     */
    isid_card?: (param: any) => boolean
    /**
     * 护照（包含香港、澳门）
     * @param param 待判定数据类型
     */
    ispassports?: (param: any) => boolean
    /**
     * 用户名校验，4到16位（字母，数字，下划线，减号）
     * @param param 待判定数据类型
     */
    isusername?: (param: any) => boolean
    /**
     * 中文/汉字
     * @param param 待判定数据类型
     */
    ischinese?: (param: any) => boolean
    /**
     * 小数
     * @param param 待判定数据类型
     */
    isdecimal?: (param: any) => boolean
    /**
     * qq号码格式
     * @param param 待判定数据类型
     */
    isqq_number?: (param: any) => boolean
    /**
     * 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
     * @param param 待判定数据类型
     */
    ispassword?: (param: any) => boolean
    /**
     * ipv4地址
     * @param param 待判定数据类型
     */
    isip_v4?: (param: any) => boolean
    /**
     * 十六进制颜色
     * @param param 待判定数据类型
     */
    iscolor_16?: (param: any) => boolean
    /**
     * 微信号
     * @param param 待判定数据类型
     */
    iswx_username?: (param: any) => boolean
    /**
     * 邮政编码（中国）
     * @param param 待判定数据类型
     */
    iszip_code?: (param: any) => boolean
}

export {
    check,
    checkInterface
}
