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
