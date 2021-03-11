import _ from './browser/index.js'

describe('测试字符串操作', () => {
    test('测试 camelCase', () => {
        expect(_.camelCase('Foo Bar')).toBe('fooBar')
        expect(_.camelCase('--foo-bar--')).toBe('fooBar')
        expect(_.camelCase('FOO BAR QI#ZH')).toBe('fooBarQiZh')
    })

    test('测试 endsWith', () => {
        expect(_.endsWith("foobar", "bar")).toBe(true)
        expect(_.endsWith('foobar', "foo")).toBe(false)
    })

    test('测试 startsWith', () => {
        expect(_.startsWith("foobar", "bar")).toBe(false)
        expect(_.startsWith('foobar', "foo")).toBe(true)
    })

    test('测试 randomString', () => {
        expect(typeof _.randomString()).toBe('string')
        expect(typeof _.randomString()).toBe('string')
    })

    test('测试 hiddenNumber', () => {
        expect(_.hiddenNumber('19122334455', 3, 4)).toBe('191****4455')
        expect(_.hiddenNumber('19122334455', 2, 4)).toBe('19*****4455')
    })

    test('测试 randomNumber', () => {
        expect(_.randomNumber(0, 10)).toBeGreaterThanOrEqual(0)
        expect(_.randomNumber(0, 10)).toBeLessThanOrEqual(10)
        expect(typeof _.randomNumber(10, 20)).toBe('number')
    })
})