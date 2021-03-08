/**
 * 平滑滚动到页面顶部。
 * 使用 document.documentElement.scrollTop 或 document.body.scrollTop 获取到顶部距离。
 * 从顶部滚动一小部分距离。使用window.requestAnimationFrame() 来实现滚动动画。
 */
function scrollToTop() {
    try {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    } catch {
        return
    }
}

/**
  * @date 2020-07-09
  * @author saltire
  * @description 如果指定的元素在可视窗口中可见，则返回 true ，否则返回 false 
  * @param （指定元素，el）（省略第二个参数来判断元素是否完全可见，或者指定 true 来判断它是否部分可见，bolean）
  * @return boolean
*/
function elementIsVisibleInViewport(el: Element, partiallyVisible = false): boolean {
    try {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
            ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    } catch {
        return false
    }
}

// 判断是否是火狐内核
function isgecko(): boolean {
    let u:string

    try {
        u = window.navigator && window.navigator.userAgent
    } catch {
        u = ''
    }

    return u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1;
}

// 判断是否是 QQ 浏览器
function isqq(): boolean {
    let u:string

    try {
        u = window.navigator && window.navigator.userAgent
    } catch {
        u = ''
    }

    return u.indexOf('mqqbrowser') > -1
}

// 判断是否是 QQ 浏览器
function isweixin(): boolean {
    let u:string

    try {
        u = window.navigator && window.navigator.userAgent
    } catch {
        u = ''
    }

    return u.indexOf('MicroMessenger') > -1
}

// 判断是pc端还是移动端
function ispc():boolean {
	try {
		var userAgentInfo = window.navigator && window.navigator.userAgent
	} catch {
		var userAgentInfo = ''
	}
	let Agents = [
		"Android",
		"iPhone",
		"SymbianOS",
		"Windows Phone",
		"iPad",
		"iPod"
	];
	let flag = true;
	for (let v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

interface deviceInterface {
    /**
     * 平滑滚动到页面顶部
     */
    scrollToTop: () => void

    /**
     * 如果指定的元素在可视窗口中可见，则返回 true ，否则返回 false 
     * @param el - 需要判断的元素
     * @param partiallyVisible - 是否部分可见，指定为 true 则表示只有元素完全可见才返回 true
     */
    elementIsVisibleInViewport: (el: Element, partiallyVisible: boolean) => boolean

    /**
     * 判断是否处于浏览器环境中
     */
    inBrowser: () => boolean

    /**
     * 判断是否是 IE 浏览器
     */
    isIE: () => boolean

    /**
     * 判断是否是 IE9 浏览器
     */
    isIE9: () => boolean

    /**
     * 判断是否是 Edge 浏览器
     */
    isEdge: () => boolean

    /**
     * 判断是否是安卓环境
     */
    isAndroid: () => boolean

    /**
     * 判断是否是 IOS 环境
     */
    isIOS: () => boolean

    /**
     * 判断是否是谷歌浏览器
     */
    isChrome: () => boolean

    /**
     * 判断是否是火狐浏览器
     */
    isgecko: () => boolean
    
    /**
     * 判断是否是 QQ 浏览器
     */
    isqq: () => boolean
    
    /**
     * 判断是 pc 端还是移动端
     */
    ispc: () => boolean

    /**
     * 判断是否是微信环境
     */
    isweixin: () => boolean
}

const device: deviceInterface = {
    scrollToTop,
    elementIsVisibleInViewport,
    inBrowser,
    isIE,
    isIE9,
    isEdge,
    isAndroid,
    isIOS,
    isChrome,
    isgecko,
    isqq,
    ispc,
    isweixin
}

// Browser environment sniffing
function inBrowser(): boolean {
    return typeof window !== 'undefined'
}

// 返回浏览器的 user-agent
function getUA(): string {
    if (inBrowser()) {
        return window.navigator.userAgent.toLowerCase()
    }

    return ''
}

/**
 * 判断是否是 IE 浏览器
 */
function isIE(): boolean {
    if (getUA()) {
        return /msie|trident/.test(getUA())
    }
    return false
}

/**
 * 判断是否是 IE9 浏览器
 */
function isIE9(): boolean {
    if (getUA()) {
        return getUA().indexOf('msie 9.0') > 0
    }
    return false
}

/**
 * 判断是否是 Edge 浏览器
 */
function isEdge(): boolean {
    if (getUA()) {
        return getUA().indexOf('edge/') > 0
    }
    return false
}

/**
 * 判断是否是安卓环境
 */
function isAndroid(): boolean {
    if (getUA()) {
        return getUA().indexOf('android') > 0
    }
    return false
}

/**
 * 判断是否是 IOS 环境
 */
function isIOS(): boolean {
    if (getUA()) {
        return /iphone|ipad|ipod|ios/.test(getUA())
    }
    return false
}

/**
 * 判断是否是 IOS 环境
 */
function isChrome(): boolean {
    if (getUA()) {
        return /chrome\/\d+/.test(getUA()) && !isEdge
    }
    return false
}

export {
    device,
    deviceInterface
}