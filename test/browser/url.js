import _ from './index.js'

console.log('测试 GetQueryString', _.GetQueryString('foo'))


console.log('测试 replaceQueryString', _.replaceQueryString('foo', 'xxx'))

console.log('测试 addQueryString', _.addQueryString('bar', 'knight'))

console.log('测试 isAbsoluteURL', _.isAbsoluteURL('https://google.com'))

console.log('测试 isAbsoluteURL', _.isAbsoluteURL('ftp://www.myserver.net'))

console.log('测试 isAbsoluteURL', _.isAbsoluteURL('/foo/bar'))