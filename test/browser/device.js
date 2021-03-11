import _ from './index.js'

// console.log(_)

console.log('测试 inBrowser', _.inBrowser() === true) // true

document.querySelector('#top').addEventListener('click', () => {
    _.scrollToTop()
})

console.log('测试 elementIsVisibleInViewport', _.elementIsVisibleInViewport(document.querySelector('#top')))

console.log('测试 isIE', _.isIE())

console.log('测试 isIE9', _.isIE9())

console.log('测试 isEdge', _.isEdge())

console.log('测试 isqq', _.isqq())

console.log('测试 ispc', _.ispc())

console.log('测试 isgecko', _.isgecko())

console.log('测试 isChrome', _.isChrome())

console.log('测试 isIOS', _.isIOS())

console.log('测试 isAndroid', _.isAndroid())

console.log('测试 isweixin', _.isweixin())


