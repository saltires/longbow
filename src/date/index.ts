/**
  * @date 2020-06-19
  * @author saltire
  * @description 判断指定日期是否在指定的开始日期和结束日期之间
  * @param (date, 指定日期) (start, 开始时间) （end， 结束时间）
  * @return boolean true false
  * @example isDuringDate('2019-02-01', 2019-01-02', '2020-08-01') => true
*/
function between(d: potentialDate, s: potentialDate, e: potentialDate): boolean {
    let date = new Date(d);
    let start = new Date(s);
    let end = new Date(e);
    let t = date.getTime();

    return start.getTime() <= t && t <= end.getTime();
}

// 日期格式化工具函数
function renderDate(d: potentialDate, f?: string): string {
    let date = new Date(d);
    let fmt = f || 'yyyy-MM-dd';
    let o: AnyObject = {
        "M+": date.getMonth() + 1, //月份         
        "d+": date.getDate(), //日         
        "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时         
        "H+": date.getHours(), //小时         
        "m+": date.getMinutes(), //分         
        "s+": date.getSeconds(), //秒         
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度         
        "S": date.getMilliseconds() //毫秒         
    };
    const week: AnyObject = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

/* 判断两个日期是否相等 */
function isEqual(d1: potentialDate, d2: potentialDate): boolean {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    if (date1 && date2) {
        return (date1.getTime() === date2.getTime());
    }
    return !(date1 || date2);
}

/* 判断是否是闰年 */
function isLeapYear(d: potentialDate): boolean {
    let date = new Date(d);
    let year = date.getFullYear();
    return !!((year & 3) == 0 && (year % 100 || (year % 400 == 0 && year)));
}

/* 返回指定年月的第一天是星期几，返回值是1-7的数字 */
function getFirstDayOfMonth(d: potentialDate): number {
    let date = new Date(d);
    let day = (date.getDay() - (date.getDate() - 1)) % 7;
    return (day < 0) ? (day + 7) : day;
}

/* 返回指定月份的最后一天是星期几，返回值是1-7的数字 */
function getLastDayOfMonth(d: potentialDate): number {
    let date = new Date(d);
    return new Date(getLastDateOfMonth(date)).getDay();
}

/* 返回指定年月第一天的日期 */
function getFirstDateOfMonth(d: potentialDate): string {
    let date = new Date(d);
    return renderDate(new Date(date.getFullYear(), date.getMonth(), 1));
}

/* 返回指定年月最后一天的日期 */
function getLastDateOfMonth(d: potentialDate): string {
    let date = new Date(d);
    return renderDate(new Date(date.getFullYear(), date.getMonth(), getDaysInMonth(date)));
}

/* 获取指定月份的天数 */
let getDaysInMonth = (function () {
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return function (d: potentialDate): number {
        let date = new Date(d);
        let m = date.getMonth();

        return m == 1 && isLeapYear(date) ? 29 : daysInMonth[m];
    };
}())

/* 给指定日期增加指定天数 */
function addDays(d: potentialDate, days: number): Date {
    let date = new Date(d);
    let t_s = date.getTime();//转化为时间戳毫秒数

    date.setTime(t_s + 1000 * 60 * 60 * 24 * parseInt(String(days)));

    return date;
}

/* 给指定日期增加指定小时 */
function addHours(d: potentialDate, hours: number): Date {
    let date = new Date(d);
    let t_s = date.getTime();//转化为时间戳毫秒数

    date.setTime(t_s + 1000 * 60 * 60 * parseInt(String(hours)));

    return date;
}

/* 将时间转为时间戳，按当天最初一刻 */
function timeStartChange(t: potentialDate): number {
    var d = new Date(t);
    var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '  00:00:00';
    var aa = new Date(datetime);
    var c = aa.getTime()
    return c
}

/* 将时间转为时间戳，按当天最后一刻 */
function timeEndChange(t: potentialDate): number {
    var d = new Date(t);
    var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '  23:59:59';
    var aa = new Date(datetime);
    var c = aa.getTime()
    return c
}

interface dateObject {
    day: number,
    hour: number,
    min: number,
    ms: number
}

// 获取时间差,提供两个时间戳，返回一个对象,为负数表示当前time1比time2小
function timeDifference(time1: number, time2: number): dateObject {
    let s1 = time1;
    let s2 = time2;
    let total = parseInt(String((s2 - s1) / 1000));
    let day = parseInt(String(total / (24 * 60 * 60))); //计算整数天数
    let afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
    let hour = parseInt(String(afterDay / (60 * 60))); //计算整数小时数
    let afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
    let min = parseInt(String(afterHour / 60)); //计算整数分
    let afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60; //取得算出分后剩余的秒数

    return {
        day,
        hour,
        min,
        ms: afterMin
    }
}

const date: dateInterface = {
    between,
    renderDate,
    isEqual,
    isLeapYear,
    getFirstDayOfMonth,
    getFirstDateOfMonth,
    getLastDateOfMonth,
    getLastDayOfMonth,
    getDaysInMonth,
    addDays,
    addHours,
    timeStartChange,
    timeEndChange,
    timeDifference
}

interface dateInterface {
    /**
     * 判断指定日期是否在指定的开始日期和结束日期之间
     * @param date - 指定日期
     * @param start - 开始日期
     * @param end - 结束日期
     */
    between: (date: potentialDate, start: potentialDate, end: potentialDate) => boolean

    /**
     * 日期格式化工具函数
     * @param date - 需要格式化的日期
     * @param format - 格式化规则
     * @example renderDate(1614564487401, 'yyyy-MM-dd HH:mm')
     */
    renderDate: (date: potentialDate, format?: string) => string

    /**
     * 判断两个日期是否相等
     * @param date1 - 日期 1
     * @param date2 - 日期 2
     */
    isEqual: (date1: potentialDate, date2: potentialDate) => boolean

    /**
     * 判断是否是闰年
     * @example date - 需要判断的日期
     */
    isLeapYear: (date: potentialDate) => boolean

    /**
     * 返回指定年月的第一天是星期几，返回值是1-7的数字
     * @param date - 指定的日期
     */
    getFirstDayOfMonth: (date: potentialDate) => number

    /**
     * 返回指定月份的最后一天是星期几，返回值是1-7的数字
     * @param date - 指定的日期
     */
    getLastDayOfMonth: (date: potentialDate) => number

    /**
     * 返回指定年月第一天的日期
     * @param date - 指定的年月
     */
    getFirstDateOfMonth: (date: potentialDate) => string

    /**
     * 返回指定年月最后一天的日期
     * @param date - 指定的年月
     */
    getLastDateOfMonth: (date: potentialDate) => string

    /**
     * 获取指定月份的天数
     * @param date - 指定的年月
     */
    getDaysInMonth: (date: potentialDate) => number

    /**
     * 给指定日期增加指定天数
     * @param date - 指定的日期
     * @param days - 要增加的天数
     */
    addDays: (date: potentialDate, days: number) => Date 

    /**
     * 给指定日期增加指定小时
     * @param date - 指定的日期
     * @param hours - 要增加的小时
     */
    addHours: (date: potentialDate, hours: number) => Date

    /**
     * 将时间转为时间戳，按当天最初一刻
     * @param date - 指定的日期
     */
    timeStartChange: (date: potentialDate) => number

    /**
     * 将时间转为时间戳，按当天最后一刻 
     * @param date - 指定的日期
     */
    timeEndChange: (date: potentialDate) => number

    /**
     * 获取时间差,提供两个时间戳，返回一个对象,为负数表示当前time1比time2小
     * @param time1 - 第一个时间的时间戳
     * @param time2 - 第二个时间的时间戳
     */
    timeDifference: (time1: number, time2: number) => dateObject 
}

export {
    dateInterface,
    date
}
