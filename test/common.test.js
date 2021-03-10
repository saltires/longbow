const { common } = require('../lib/common')
const puppeteer = require('puppeteer')

test('测试数组扁平化函数：flatten', () => {
    expect(common.flatten([1, 2, [3, 4]])).toEqual([1, 2, 3, 4])
    expect(common.flatten([1, 2, [3, 4]])).toEqual([1, 2, 3, 4])
    expect(common.flatten([1, 2, [3, 4], [5, 6, [7, 8]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})

test('baidu title is correct', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://baidu.com');
    const title = await page.title();
    await page.once('load', () => console.log('Page loaded!'));
    expect(title).toBe('百度一下，你就知道');
    await browser.close();
})
