!function r(o,i,u){function a(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return a(o[t][1][e]||e)},n,n.exports,r,o,i,u)}return i[t].exports}for(var s="function"==typeof require&&require,e=0;e<u.length;e++)a(u[e]);return a}({1:[function(e,t,n){t.exports={name:"saltire-util",version:"0.0.1",description:"A set of easy to use and suggestive JavaScript tool library",main:"index.js",repository:"git@github.com:saltires/saltire-util.git",author:"saltire<ye998102@163.com>",license:"MIT",devDependencies:{"@babel/core":"^7.13.8","@babel/preset-env":"^7.13.9","@babel/types":"^7.13.0","@commitlint/cli":"^12.0.1","@commitlint/config-conventional":"^12.0.1","@types/jest":"^26.0.20","@typescript-eslint/eslint-plugin":"^4.16.1","@typescript-eslint/parser":"^4.16.1",babelify:"^10.0.0",browserify:"^17.0.0","conventional-changelog":"^3.1.24","conventional-changelog-cli":"^2.1.1",copy:"^0.3.2","cz-conventional-changelog":"^3.3.0",del:"^6.0.0",eslint:"^7.21.0","eslint-config-prettier":"^8.1.0","exec-sh":"^0.3.4",gulp:"^4.0.2","gulp-concat":"^2.6.1","gulp-sourcemaps":"^3.0.0","gulp-typescript":"^6.0.0-alpha.1","gulp-uglify":"^3.0.2",husky:"4.2.5",jest:"^26.6.3","lint-staged":"^10.5.4",merge2:"^1.4.1",prettier:"^2.2.1",puppeteer:"^8.0.0",rimraf:"^3.0.2","ts-jest":"^26.5.3",tsify:"^5.0.2",typescript:"^4.2.3","vinyl-buffer":"^1.0.1","vinyl-source-stream":"^2.0.0",vuepress:"^1.8.2"},config:{commitizen:{path:"./node_modules/cz-conventional-changelog"}},husky:{hooks:{"commit-msg":"commitlint -E HUSKY_GIT_PARAMS","pre-commit":"lint-staged"}},"lint-staged":{"*.ts":["yarn lint","yarn prettier"]},scripts:{log:"rimraf CHANGELOG.md && conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",build:"yarn lint && yarn jest && yarn lint && gulp",dev:"yarn test && gulp --dev",lint:"eslint src",test:"rimraf lib && tsc && jest --watch",prettier:"prettier src src --write","docs:dev":"vuepress dev docs","docs:build":"vuepress build docs",pub:"node publish/index.js"}}},{}],2:[function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(n,"__esModule",{value:!0}),n.common=void 0;var i={flatten:function(e){for(;e.some(function(e){return Array.isArray(e)});){var t;e=(t=[]).concat.apply(t,r(e))}return e},debounce:function(t,n){for(var r,e=arguments.length,o=new Array(2<e?e-2:0),i=2;i<e;i++)o[i-2]=arguments[i];return function(){var e=this;clearTimeout(r),r=setTimeout(function(){t.apply(e,o)},n)}},copyToClipboard:function(e){var t=document.createElement("textarea"),n=document.getSelection();t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),e=0<n.rangeCount&&n.getRangeAt(0),t.select(),document.execCommand("copy"),document.body.removeChild(t),e&&(n.removeAllRanges(),n.addRange(e))},downoladFile:function(e,t){var n,r=new XMLHttpRequest;r.open("get",e),r.responseType="blob",r.onload=function(){n=URL.createObjectURL(r.response);var e=document.createElement("a");e.setAttribute("download",t),e.setAttribute("href",n),e.click(),URL.revokeObjectURL(n)},r.send()},once:function(e){var t=!1;return function(){if(!t)return t=!0,e.apply(void 0,arguments)}}};n.common=i},{}],3:[function(e,t,n){"use strict";function r(e,t,n,r){var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3);o="expires="+o.toUTCString();document.cookie=t+"="+n+"; "+o+"; path=/; domain=."+e}Object.defineProperty(n,"__esModule",{value:!0}),n.cookie=void 0;var o={setCookie:r,getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1);if(-1!=o.indexOf(t))return o.substring(t.length,o.length)}return""},clearCookie:function(e,t){r(e,t,"",-1)},parseCookie:function(){return document.cookie.split(";").map(function(e){return e.split("=")}).reduce(function(e,t){return e[decodeURIComponent(t[0].trim())]=decodeURIComponent(t[1].trim()),e},{})}};n.cookie=o},{}],4:[function(e,t,n){"use strict";function r(e,t){var n,e=new Date(e),r=t||"yyyy-MM-dd",o={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours()%12==0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(n in/(y+)/.test(r)&&(r=r.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(r)&&(r=r.replace(RegExp.$1,(1<RegExp.$1.length?2<RegExp.$1.length?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[e.getDay()+""])),o)new RegExp("("+n+")").test(r)&&(r=r.replace(RegExp.$1,1==RegExp.$1.length?o[n]:("00"+o[n]).substr((""+o[n]).length)));return r}function o(e){e=new Date(e).getFullYear();return!(0!=(3&e)||!(e%100||e%400==0&&e))}function i(e){e=new Date(e);return r(new Date(e.getFullYear(),e.getMonth(),a(e)))}Object.defineProperty(n,"__esModule",{value:!0}),n.date=void 0;var u=[31,28,31,30,31,30,31,31,30,31,30,31];function a(e){var t=new Date(e),e=t.getMonth();return 1==e&&o(t)?29:u[e]}var s={between:function(e,t,n){return e=new Date(e),t=new Date(t),n=new Date(n),e=e.getTime(),t.getTime()<=e&&e<=n.getTime()},renderDate:r,isEqual:function(e,t){return e=new Date(e),t=new Date(t),e&&t?e.getTime()===t.getTime():!(e||t)},isLeapYear:o,getFirstDayOfMonth:function(e){return(e=((e=new Date(e)).getDay()-(e.getDate()-1))%7)<=0?7+e:e},getFirstDateOfMonth:function(e){return e=new Date(e),r(new Date(e.getFullYear(),e.getMonth(),1))},getLastDateOfMonth:i,getLastDayOfMonth:function(e){return e=new Date(e),0===(e=new Date(i(e)).getDay())?7:e},getDaysInMonth:a,addDays:function(e,t){var n=new Date(e),e=n.getTime();return n.setTime(e+864e5*parseInt(String(t))),n},addHours:function(e,t){var n=new Date(e),e=n.getTime();return n.setTime(e+36e5*parseInt(String(t))),n},timeStartChange:function(e){return e=(e=new Date(e)).getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+"  00:00:00",new Date(e).getTime()},timeEndChange:function(e){return e=(e=new Date(e)).getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+"  23:59:59",new Date(e).getTime()},timeDifference:function(e,t){var n=parseInt(String((t-e)/1e3)),r=parseInt(String(n/86400)),t=parseInt(String((n-24*r*60*60)/3600)),e=parseInt(String((n-24*r*60*60-60*t*60)/60));return{day:r,hour:t,min:e,ms:n-24*r*60*60-60*t*60-60*e}}};n.date=s},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.device=void 0;var r={scrollToTop:function e(){try{var t=document.documentElement.scrollTop||document.body.scrollTop;0<t&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}catch(e){return}},elementIsVisibleInViewport:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];try{var n=e.getBoundingClientRect(),r=n.top,o=n.left,i=n.bottom,u=n.right,a=window,n=a.innerHeight,a=a.innerWidth;return t?(0<r&&r<n||0<i&&i<n)&&(0<o&&o<a||0<u&&u<a):0<=r&&0<=o&&i<=n&&u<=a}catch(e){return!1}},inBrowser:o,isIE:function(){if(i())return/msie|trident/.test(i());return!1},isIE9:function(){if(i())return 0<i().indexOf("msie 9.0");return!1},isEdge:u,isAndroid:function(){if(i())return 0<i().indexOf("android");return!1},isIOS:function(){if(i())return/iphone|ipad|ipod|ios/.test(i());return!1},isChrome:function(){if(i())return/chrome\/\d+/.test(i())&&!1;return!1},isgecko:function(){var t;try{t=window.navigator&&window.navigator.userAgent}catch(e){t=""}return-1<t.indexOf("Gecko")&&-1==t.indexOf("KHTML")},isqq:function(){var t;try{t=window.navigator&&window.navigator.userAgent}catch(e){t=""}return-1<t.indexOf("mqqbrowser")},ispc:function(){var t;try{t=window.navigator&&window.navigator.userAgent}catch(e){t=""}for(var e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,r=0;r<e.length;r++)if(0<t.indexOf(e[r])){n=!1;break}return n},isweixin:function(){var t;try{t=window.navigator&&window.navigator.userAgent}catch(e){t=""}return-1<t.indexOf("MicroMessenger")}};function o(){return"undefined"!=typeof window}function i(){return o()?window.navigator.userAgent.toLowerCase():""}function u(){return!!i()&&0<i().indexOf("edge/")}n.device=r},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.dom=void 0;var r={hasClass:function(e,t){if(!e||!t)throw new Error("arguments error");return!!e.classList.contains(t)},addClass:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!e||arguments.length<=1)throw new Error("arguments error");for(var o=0;o<n.length;o++)e.classList.contains(n[o])||e.classList.add(n[o])},removeClass:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!e||arguments.length<=1)throw new Error("arguments error");for(var o=0;o<n.length;o++)e.classList.contains(n[o])&&e.classList.remove(n[o])},getScrollLeft:function(){return Math.max(document.body.scrollLeft,document.documentElement.scrollLeft)},getScrollTop:function(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop)},getElementTop:function(e){for(var t=e.offsetTop,n=e.offsetParent;null!==n;)t+=n.offsetTop,n=n.offsetParent;return t},getPagearea:function(){try{return{width:Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth),height:Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)}}catch(e){return null}}};n.dom=r},{}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("./common"),o=e("./cookie"),i=e("./date"),u=e("./device"),a=e("./dom"),s=e("./regexp"),c=e("./string"),d=e("./url"),e=e("../package.json"),d=Object.assign({name:e.name,version:e.version},o.cookie,r.common,i.date,u.device,a.dom,s.check,c.str,d.url);n.default=d},{"../package.json":1,"./common":2,"./cookie":3,"./date":4,"./device":5,"./dom":6,"./regexp":8,"./string":9,"./url":10}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.check=void 0;var r={url:/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,video_url:/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,img_url:/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,time_24:/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,time_12:/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,base64:/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,money:/^-?\d+(,\d{3})*(\.\d{1,2})?$/,bank_card:/^[1-9]\d{9,29}$/,name_chinese:/^(?:[\u4e00-\u9fa5·]{2,16})$/,license_plate:/^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))$|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,md5:/^([a-f\d]{32}|[A-F\d]{32})$/,phone_rigorous:/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,phone_loose:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,date:/^\d{4}(-|\/)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/,email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,tel:/^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/,id_card:/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,passports:/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,username:/^[a-zA-Z0-9_-]{4,16}$/,chinese:/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,decimal:/^\d+\.\d+$/,qq_number:/^[1-9][0-9]{4,10}$/,password:/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,ip_v4:/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,color_16:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,wx_username:/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,zip_code:/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/},o={};n.check=o,Object.keys(r).forEach(function(t){o["is"+t]=function(e){return e=e,new RegExp(r[t]).test(e)}})},{}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.str=void 0;var r={camelCase:function(e){var t,n=e.split(""),r=e.search(/([a-zA-Z])/)+1,o=/^[a-zA-Z]$/,i=[],u=!1;if(e||(t="camelCase调用时参数不能为空"),0<=r-1){i.push(n[r-1].toLowerCase());for(var a=r;a<n.length;a++){var s=n[a],c=u,u=!1;o.test(s)?!1===c?i.push(s.toLowerCase()):i.push(s.toUpperCase()):u=!0}}return t?new Error(t):i&&i.length?i.join(""):e},endsWith:function(e,t){return e&&t?e===t||new RegExp(t.replace(/\s*$/g,"")+"$").test(e.replace(/\s*$/g,"")):new Error("endsWith函数调用时参数不能为空")},startsWith:function(e,t){return e&&t?e===t||new RegExp("^"+t.replace(/^\s*/g,"")).test(e.replace(/^\s*/g,"")):new Error("startsWith函数调用时参数不能为空")},randomString:function(){return Math.random().toString(36).substr(2)},hiddenNumber:function(e,t,n){for(var r=e.length-t-n,o="",i=0;i<r;i++)o+="*";return e.substring(0,t)+o+e.substring(e.length-n)},randomNumber:function(e,t){return parseInt(String(Math.random()*(t-e+1)+e),10)}};n.str=r},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.url=void 0;var r={GetQueryString:function(e){try{var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(t);return null!=t?unescape(t[2]):null}catch(e){return null}},replaceQueryString:function(e,t){var n=window.location.href.toString(),r=new RegExp("/("+e+"=)([^&]*)/gi");return n.replace(r,e+"="+t)},addQueryString:function(e,t){try{var n,r,o=window.location.href;return-1<o.indexOf(e)?(r=new RegExp("/("+e+"=)([^&]*)/gi"),o=o.replace(r,e+"="+t)):(n=e+"="+t,(r=o.indexOf("?"))<0?o+="?":0<=r&&r!=o.length-1&&(o+="&"),o+=n),o}catch(e){return null}},isAbsoluteURL:function(e){return/^[a-z][a-z0-9+.-]*:/.test(e)}};n.url=r},{}]},{},[7]);
//# sourceMappingURL=bundle.js.map