declare const check: checkInterface;
interface checkInterface {
  [propName: string]: any;
  /**
   * 网址(url,支持端口和"?+参数"和"#+参数)
   * @param param 待判定数据类型
   */
  isurl?: (param: any) => boolean;
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
