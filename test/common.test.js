import _ from './browser/index.js'
// const puppeteer = require('puppeteer')

test('测试数组扁平化函数：flatten', () => {
    expect(_.flatten([1, 2, [3, 4]])).toEqual([1, 2, 3, 4])
    expect(_.flatten([1, 2, [3, 4]])).toEqual([1, 2, 3, 4])
    expect(_.flatten([1, 2, [3, 4], [5, 6, [7, 8]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})

test('测试高精确度数字运算', () => {
    expect(_.multiply(0.000001, 100) == 0.0001).toBeTruthy()
    expect(_.add(0.000001, 0.000004) == 0.000005).toBeTruthy()
    expect(_.subtract(0.000003, 0.000001) == 0.000002).toBeTruthy()
    expect(_.divide(0.1, 0.000001) == 100000).toBeTruthy()
})

// test('baidu title is correct', async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://baidu.com');
//     const title = await page.title();
//     await page.once('load', () => console.log('Page loaded!'));
//     expect(title).toBe('百度一下，你就知道');
//     await browser.close();
// })

test('测试 isArray', () => {
    expect(_.isArray('[]')).toBe(false)
    expect(_.isArray([])).toBe(true)
    expect(_.isArray(3)).toBe(false)
    expect(_.isArray(new Array())).toBe(true)
    expect(_.isArray(new Set())).toBe(false)
})

test('测试 isBoolean', () => {
    expect(_.isBoolean([])).toBe(false)
    expect(_.isBoolean(3)).toBe(false)
    expect(_.isBoolean(true)).toBe(true)
    expect(_.isBoolean(false)).toBe(true)
    expect(_.isBoolean('true')).toBe(false)
})

test('测试 isDate', () => {
    expect(_.isDate([])).toBe(false)
    expect(_.isDate(3)).toBe(false)
    expect(_.isDate(new Date())).toBe(true)
    expect(_.isDate('2020-01-02')).toBe(false)
    expect(_.isDate('true')).toBe(false)
})

test('测试 isFunction', () => {
    expect(_.isFunction([])).toBe(false)
    expect(_.isFunction(function() {})).toBe(true)
    expect(_.isFunction(() => 3)).toBe(true)
})

test('测试 isNumber', () => {
    expect(_.isNumber(new Number())).toBe(true)
    expect(_.isNumber('2')).toBe(false)
    expect(_.isNumber(2)).toBe(true)
})

test('测试 isNull', () => {
    expect(_.isNull(null)).toBe(true)
    expect(_.isNull(0)).toBe(false)
    expect(_.isNull(undefined)).toBe(false)
})

test('测试 isObject', () => {
    expect(_.isObject({})).toBe(true)
    expect(_.isObject(0)).toBe(false)
    expect(_.isObject(null)).toBe(false)
})

test('测试 isRegExp', () => {
    expect(_.isRegExp({})).toBe(false)
    expect(_.isRegExp(new RegExp())).toBe(true)
    expect(_.isRegExp(/foo/)).toBe(true)
})

test('测试 isString', () => {
    expect(_.isString('')).toBe(true)
    expect(_.isString(0)).toBe(false)
    expect(_.isString(new String('40'))).toBe(true)
})

test('测试 isUndefined', () => {
    expect(_.isUndefined('')).toBe(false)
    expect(_.isUndefined(null)).toBe(false)
    expect(_.isUndefined(0)).toBe(false)
    expect(_.isUndefined(undefined)).toBe(true)
})