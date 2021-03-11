import _ from './browser/index.js'

test('测试 between', () => {
    const date1 = new Date('2020-05-02')
    const start = new Date('2020-01-02')
    const end = new Date('2020-10-02')

    expect(_.between('2020-05-02', '2020-01-02', '2020-10-02')).toBe(true)
    expect(_.between('2019-05-02', '2020-01-02', '2020-10-02')).toBe(false)
    expect(_.between(date1, start, end)).toBe(true)
    expect(_.between(date1, end, start)).toBe(false)
    expect(_.between(+date1, +start, +end)).toBe(true)
    expect(_.between(+date1, +end, +start)).toBe(false)
})

test('测试 renderDate', () => {
    const format = ['yyyy-MM-dd:HH:mm:ss','yyyy-MM-dd', 'yyyy年MM月dd日HH时mm分', 'yyyy年MM月dd日HH时mm分ss秒']
    const date1 = new Date(1615342454266)

    for (let [key, value] of Object.entries(format)){
        switch (key) {
            case '0':
                expect(_.renderDate(date1, value)).toBe('2021-03-10:10:14:14')
                break;
            case '1':
                expect(_.renderDate(date1, value)).toBe('2021-03-10')
                break;
            case '2':
                expect(_.renderDate(date1, value)).toBe('2021年03月10日10时14分')
                break;
            case '3':
                expect(_.renderDate(date1, value)).toBe('2021年03月10日10时14分14秒')
                break;
        }
        
    }
})

test('测试 isEqual', () => {
    const date1 = new Date('2020-01-01')
    const date2 = new Date('2020-01-01')
    const date3 = new Date('2021-10-01')

    expect(_.isEqual(date1, date2)).toBe(true)
    expect(_.isEqual(date1, date3)).toBe(false)
    expect(_.isEqual(date2, date3)).toBe(false)
})

test('测试 isLeapYear', () => {
    const date1 = new Date('2021-01-01')
    const date2 = new Date('2020-01-01')
    const date3 = new Date('2019-01-01')
    const date4 = new Date('2018-01-01')

    expect(_.isLeapYear(date1)).toBe(false)
    expect(_.isLeapYear(date2)).toBe(true)
    expect(_.isLeapYear(date3)).toBe(false)
    expect(_.isLeapYear(date4)).toBe(false)
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

    expect(_.getFirstDayOfMonth(date1)).toBe(1)
    expect(_.getFirstDayOfMonth(date2)).toBe(1)
    expect(_.getFirstDayOfMonth(date3)).toBe(5)
    expect(_.getFirstDayOfMonth(date4)).toBe(2)
    expect(_.getFirstDayOfMonth(date5)).toBe(7)
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

    expect(_.getLastDayOfMonth(date1)).toBe(3)
    expect(_.getLastDayOfMonth(date2)).toBe(7)
    expect(_.getLastDayOfMonth(date3)).toBe(7)
    expect(_.getLastDayOfMonth(date4)).toBe(4)
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

    expect(_.getLastDateOfMonth(date1)).toBe('2021-03-31')
    expect(_.getLastDateOfMonth(date2)).toBe('2021-02-28')
    expect(_.getLastDateOfMonth(date3)).toBe('2021-01-31')
    expect(_.getLastDateOfMonth(date4)).toBe('2020-12-31')
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

    expect(_.getDaysInMonth(date1)).toBe(31)
    expect(_.getDaysInMonth(date2)).toBe(28)
    expect(_.getDaysInMonth(date3)).toBe(31)
    expect(_.getDaysInMonth(date4)).toBe(31)
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

    expect(_.renderDate(_.addDays(date1, 1))).toBe('2021-03-11')
    expect(_.renderDate(_.addDays(date2, 2))).toBe('2021-02-12')
    expect(_.renderDate(_.addDays(date3, 3))).toBe('2021-01-13')
    expect(_.renderDate(_.addDays(date4, 4))).toBe('2020-12-14')
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

    expect(_.renderDate(_.addHours(date1, 1), 'yyyy-MM-dd:HH:mm:ss')).toBe('2021-03-10:09:00:00')
    expect(_.renderDate(_.addHours(date2, 2), 'yyyy-MM-dd:HH:mm:ss')).toBe('2021-02-10:10:00:00')
    expect(_.renderDate(_.addHours(date3, 3), 'yyyy-MM-dd:HH:mm:ss')).toBe('2021-01-10:11:00:00')
    expect(_.renderDate(_.addHours(date4, 4), 'yyyy-MM-dd:HH:mm:ss')).toBe('2020-12-10:12:00:00')
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

    expect(_.timeStartChange(date1)).toBe(1615305600000)
    expect(_.timeStartChange(date2)).toBe(1612886400000)
    expect(_.timeStartChange(date3)).toBe(1610208000000)
    expect(_.timeStartChange(date4)).toBe(1607529600000)
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

    expect(_.timeEndChange(date1)).toBe(1615391999000)
    expect(_.timeEndChange(date2)).toBe(1612972799000)
    expect(_.timeEndChange(date3)).toBe(1610294399000)
    expect(_.timeEndChange(date4)).toBe(1607615999000)
})

test('测试 timeDifference', () => {
    // 2021 的 3 月的第一天是星期一
    const date1 = new Date('2021-03-10')
    // 2021 的 2 月的第一天是星期一
    const date2 = new Date('2021-03-09')

    expect(_.timeDifference(date1, date2)).toEqual({
        day: -1,
        hour: 0,
        min: 0,
        ms: 0
    })
})