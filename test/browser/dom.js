import _ from './index.js'

const el = document.getElementById('top') 

console.log('测试 hasClass', _.hasClass(el, 'top'));

console.log('测试 addClass', _.addClass(el, 'foo'));

console.log('测试 removeClass', _.removeClass(el, 'foo'));

console.log('测试 getScrollLeft', _.getScrollLeft());

console.log('测试 getScrollTop', _.getScrollTop());

console.log('测试 getElementTop', _.getElementTop(el));

console.log('测试 getPagearea', _.getPagearea());