"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
/**
 * @date 2020-06-19
 * @author saltire
 * @description 判断指定日期是否在指定的开始日期和结束日期之间
 * @param (date, 指定日期) (start, 开始时间) （end， 结束时间）
 * @return boolean true false
 * @example isDuringDate('2019-02-01', 2019-01-02', '2020-08-01') => true
 */
function between(d, s, e) {
    const date = new Date(d);
    const start = new Date(s);
    const end = new Date(e);
    const t = date.getTime();
    return start.getTime() <= t && t <= end.getTime();
}
// 日期格式化工具函数
function renderDate(d, f) {
    const date = new Date(d);
    let fmt = f || "yyyy-MM-dd";
    const o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(), //毫秒
    };
    const week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d",
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1
            ? RegExp.$1.length > 2
                ? "/u661f/u671f"
                : "/u5468"
            : "") + week[date.getDay() + ""]);
    }
    for (const k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
}
/* 判断两个日期是否相等 */
function isEqual(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    if (date1 && date2) {
        return date1.getTime() === date2.getTime();
    }
    return !(date1 || date2);
}
/* 判断是否是闰年 */
function isLeapYear(d) {
    const date = new Date(d);
    const year = date.getFullYear();
    return !!((year & 3) == 0 && (year % 100 || (year % 400 == 0 && year)));
}
/* 返回指定年月的第一天是星期几，返回值是1-7的数字 */
function getFirstDayOfMonth(d) {
    const date = new Date(d);
    const day = (date.getDay() - (date.getDate() - 1)) % 7;
    return day < 0 ? day + 7 : day;
}
/* 返回指定月份的最后一天是星期几，返回值是1-7的数字 */
function getLastDayOfMonth(d) {
    const date = new Date(d);
    return new Date(getLastDateOfMonth(date)).getDay();
}
/* 返回指定年月第一天的日期 */
function getFirstDateOfMonth(d) {
    const date = new Date(d);
    return renderDate(new Date(date.getFullYear(), date.getMonth(), 1));
}
/* 返回指定年月最后一天的日期 */
function getLastDateOfMonth(d) {
    const date = new Date(d);
    return renderDate(new Date(date.getFullYear(), date.getMonth(), getDaysInMonth(date)));
}
/* 获取指定月份的天数 */
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function getDaysInMonth(d) {
    const date = new Date(d);
    const m = date.getMonth();
    return m == 1 && isLeapYear(date) ? 29 : daysInMonth[m];
}
/* 给指定日期增加指定天数 */
function addDays(d, days) {
    const date = new Date(d);
    const t_s = date.getTime(); //转化为时间戳毫秒数
    date.setTime(t_s + 1000 * 60 * 60 * 24 * parseInt(String(days)));
    return date;
}
/* 给指定日期增加指定小时 */
function addHours(d, hours) {
    const date = new Date(d);
    const t_s = date.getTime(); //转化为时间戳毫秒数
    date.setTime(t_s + 1000 * 60 * 60 * parseInt(String(hours)));
    return date;
}
/* 将时间转为时间戳，按当天最初一刻 */
function timeStartChange(t) {
    const d = new Date(t);
    const datetime = d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        "  00:00:00";
    const aa = new Date(datetime);
    const c = aa.getTime();
    return c;
}
/* 将时间转为时间戳，按当天最后一刻 */
function timeEndChange(t) {
    const d = new Date(t);
    const datetime = d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        "  23:59:59";
    const aa = new Date(datetime);
    const c = aa.getTime();
    return c;
}
// 获取时间差,提供两个时间戳，返回一个对象,为负数表示当前time1比time2小
function timeDifference(time1, time2) {
    const s1 = time1;
    const s2 = time2;
    const total = parseInt(String((s2 - s1) / 1000));
    const day = parseInt(String(total / (24 * 60 * 60))); //计算整数天数
    const afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
    const hour = parseInt(String(afterDay / (60 * 60))); //计算整数小时数
    const afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
    const min = parseInt(String(afterHour / 60)); //计算整数分
    const afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60; //取得算出分后剩余的秒数
    return {
        day,
        hour,
        min,
        ms: afterMin,
    };
}
const date = {
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
    timeDifference,
};
exports.date = date;
