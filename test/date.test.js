const { date } = require('../lib/date')

test('测试 between', () => {
    const date1 = new Date('2020-05-02')
    const start = new Date('2020-01-02')
    const end = new Date('2020-10-02')

    expect(date.between('2020-05-02', '2020-01-02', '2020-10-02')).toBe(true)
    expect(date.between('2019-05-02', '2020-01-02', '2020-10-02')).toBe(false)
    expect(date.between(date1, start, end)).toBe(true)
    expect(date.between(date1, end, start)).toBe(false)
    expect(date.between(+date1, +start, +end)).toBe(true)
    expect(date.between(+date1, +end, +start)).toBe(false)
})

test('测试 renderDate', () => {
    const format = ['yyyy-MM-dd:HH:mm:ss','yyyy-MM-dd', 'yyyy年MM月dd日HH时mm分', 'yyyy年MM月dd日HH时mm分ss秒']
    const date1 = new Date(1615342454266)

    for (let [key, value] of Object.entries(format)){
        switch (key) {
            case '0':
                expect(date.renderDate(date1, value)).toBe('2021-03-10:10:14:14')
                break;
            case '1':
                expect(date.renderDate(date1, value)).toBe('2021-03-10')
                break;
            case '2':
                expect(date.renderDate(date1, value)).toBe('2021年03月10日10时14分')
                break;
            case '3':
                expect(date.renderDate(date1, value)).toBe('2021年03月10日10时14分14秒')
                break;
        }
        
    }
})

test('测试 isEqual', () => {
    const date1 = new Date('2020-01-01')
    const date2 = new Date('2020-01-01')
    const date3 = new Date('2021-10-01')

    expect(date.isEqual(date1, date2)).toBe(true)
    expect(date.isEqual(date1, date3)).toBe(false)
    expect(date.isEqual(date2, date3)).toBe(false)
})

test('测试 isLeapYear', () => {
    const date1 = new Date('2021-01-01')
    const date2 = new Date('2020-01-01')
    const date3 = new Date('2019-01-01')
    const date4 = new Date('2018-01-01')

    expect(date.isLeapYear(date1)).toBe(false)
    expect(date.isLeapYear(date2)).toBe(true)
    expect(date.isLeapYear(date3)).toBe(false)
    expect(date.isLeapYear(date4)).toBe(false)
})

test('测试 getFirstDayOfMonth', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-02-10')
    // 2021 的 1 月的第一天是星期五
    const date3 = new Date('2021-01-10')
    // 2020 的 12 月的第一天是星期二
    const date4 = new Date('2020-12-10')
    // 2021 的 8 月的第一天是星期日
    const date5 = new Date('2021-8-10')

    expect(date.getFirstDayOfMonth(date1)).toBe(1)
    expect(date.getFirstDayOfMonth(date2)).toBe(1)
    expect(date.getFirstDayOfMonth(date3)).toBe(5)
    expect(date.getFirstDayOfMonth(date4)).toBe(2)
    expect(date.getFirstDayOfMonth(date5)).toBe(7)
})

test('测试 getLastDayOfMonth', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-02-10')
    // 2021 的 1 月的第一天是星期五
    const date3 = new Date('2021-01-10')
    // 2020 的 12 月的第一天是星期二
    const date4 = new Date('2020-12-10')

    expect(date.getLastDayOfMonth(date1)).toBe(3)
    expect(date.getLastDayOfMonth(date2)).toBe(7)
    expect(date.getLastDayOfMonth(date3)).toBe(7)
    expect(date.getLastDayOfMonth(date4)).toBe(4)
})

test('测试 getFirstDateOfMonth', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-02-10')
    // 2021 的 1 月的第一天是星期五
    const date3 = new Date('2021-01-10')
    // 2020 的 12 月的第一天是星期二
    const date4 = new Date('2020-12-10')

    expect(date.getLastDateOfMonth(date1)).toBe('2021-03-31')
    expect(date.getLastDateOfMonth(date2)).toBe('2021-02-28')
    expect(date.getLastDateOfMonth(date3)).toBe('2021-01-31')
    expect(date.getLastDateOfMonth(date4)).toBe('2020-12-31')
})

test('测试 getDaysInMonth', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-02-10')
    // 2021 的 1 月的第一天是星期五
    const date3 = new Date('2021-01-10')
    // 2020 的 12 月的第一天是星期二
    const date4 = new Date('2020-12-10')

    expect(date.getDaysInMonth(date1)).toBe(31)
    expect(date.getDaysInMonth(date2)).toBe(28)
    expect(date.getDaysInMonth(date3)).toBe(31)
    expect(date.getDaysInMonth(date4)).toBe(31)
})

test('测试 addDays', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-02-10')
    // 2021 的 1 月的第一天是星期五
    const date3 = new Date('2021-01-10')
    // 2020 的 12 月的第一天是星期二
    const date4 = new Date('2020-12-10')

    expect(date.renderDate(date.addDays(date1, 1))).toBe('2021-03-11')
    expect(date.renderDate(date.addDays(date2, 2))).toBe('2021-02-12')
    expect(date.renderDate(date.addDays(date3, 3))).toBe('2021-01-13')
    expect(date.renderDate(date.addDays(date4, 4))).toBe('2020-12-14')
})

test('测试 addHours', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10:08:00:00')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-02-10:08:00:00')
    // 2021 的 1 月的第一天是星期五
    const date3 = new Date('2021-01-10:08:00:00')
    // 2020 的 12 月的第一天是星期二
    const date4 = new Date('2020-12-10:08:00:00')

    expect(date.renderDate(date.addHours(date1, 1), 'yyyy-MM-dd:HH:mm:ss')).toBe('2021-03-10:09:00:00')
    expect(date.renderDate(date.addHours(date2, 2), 'yyyy-MM-dd:HH:mm:ss')).toBe('2021-02-10:10:00:00')
    expect(date.renderDate(date.addHours(date3, 3), 'yyyy-MM-dd:HH:mm:ss')).toBe('2021-01-10:11:00:00')
    expect(date.renderDate(date.addHours(date4, 4), 'yyyy-MM-dd:HH:mm:ss')).toBe('2020-12-10:12:00:00')
})

test('测试 timeStartChange', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-02-10')
    // 2021 的 1 月的第一天是星期五
    const date3 = new Date('2021-01-10')
    // 2020 的 12 月的第一天是星期二
    const date4 = new Date('2020-12-10')

    expect(date.timeStartChange(date1)).toBe(1615305600000)
    expect(date.timeStartChange(date2)).toBe(1612886400000)
    expect(date.timeStartChange(date3)).toBe(1610208000000)
    expect(date.timeStartChange(date4)).toBe(1607529600000)
})

test('测试 timeEndChange', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-02-10')
    // 2021 的 1 月的第一天是星期五
    const date3 = new Date('2021-01-10')
    // 2020 的 12 月的第一天是星期二
    const date4 = new Date('2020-12-10')

    expect(date.timeEndChange(date1)).toBe(1615391999000)
    expect(date.timeEndChange(date2)).toBe(1612972799000)
    expect(date.timeEndChange(date3)).toBe(1610294399000)
    expect(date.timeEndChange(date4)).toBe(1607615999000)
})

test('测试 timeDifference', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-03-09')

    expect(date.timeDifference(date1, date2)).toEqual({
        day: -1,
        hour: 0,
        min: 0,
        ms: 0
    })
})