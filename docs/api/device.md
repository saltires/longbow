# 设备模块

## `inBrowser` <Badge text="0.0.1+"/>

``` javascript
inBrowser: () => boolean;
```

#### 功能描述

`是否是浏览器环境`：判断是否处于浏览器环境中

#### 返回

`bol(Boolean)`：为 true 表示是浏览器环境

#### 示例

``` javascript
import _ from 'longbow'

console.log(_.inBrowser() === true) // true
```

<br>
<br>

## `scrollToTop` <Badge text="0.0.1+"/>

``` javascript
scrollToTop: () => void;
```

#### 功能描述

`滚动到页面顶部`：平滑滚动到页面顶部

#### 返回

`null`：不返回任何内容

#### 示例

``` javascript
import _ from 'longbow'

_.scrollToTop()
```

<br>
<br>

## `elementIsVisibleInViewport` <Badge text="0.0.1+"/>

``` javascript
elementIsVisibleInViewport: (
    el: Element,
    partiallyVisible?: boolean
) => boolean;
```

#### 功能描述

`元素是否在可视`：如果指定的元素在可视窗口中可见，则返回 true ，否则返回 false

#### 参数

- `el(Element)`：必须，需要判断的元素
- `partiallyVisible(Boolean)`：必须，是否部分可见，指定为 true 则表示只有元素完全可见才返回 true，default：false

#### 返回

`Boolean`：可视则返回 true

#### 示例

``` javascript
import _ from 'longbow'

const el = docuemnt.getElementById('foo')

_.elementIsVisibleInViewport(el)
```

<br>
<br>

## `isIE` <Badge text="0.0.1+"/>

``` javascript
isIE: () => boolean;
```

#### 功能描述

`是否是 IE`：判断是否是 IE 浏览器

#### 返回

`Boolean`：是 IE 浏览器则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isIE', _.isIE()) 
```

<br>
<br>

## `isIE9` <Badge text="0.0.1+"/>

``` javascript
isIE9: () => boolean;
```

#### 功能描述

`是否是 IE9`：判断是否是 IE9 浏览器

#### 返回

`Boolean`：是 IE9 浏览器则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isIE9', _.isIE9()) 
```

<br>
<br>

## `isEdge` <Badge text="0.0.1+"/>

``` javascript
isEdge: () => boolean;
```

#### 功能描述

`是否是 Edge`：判断是否是 Edge 浏览器

#### 返回

`Boolean`：是 Edge 浏览器则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isEdge', _.isEdge()) 
```

<br>
<br>

## `isAndroid` <Badge text="0.0.1+"/>

``` javascript
isAndroid: () => boolean;
```

#### 功能描述

`是否是安卓`：判断是否是安卓环境

#### 返回

`Boolean`：是安卓浏览器则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isAndroid', _.isAndroid()) 
```

<br>
<br>

## `isIOS` <Badge text="0.0.1+"/>

``` javascript
isIOS: () => boolean;
```

#### 功能描述

`是否是 IOS`：判断是否是 IOS 设备

#### 返回

`Boolean`：是 IOS 浏览器则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isIOS', _.isIOS()) 
```

<br>
<br>

## `isChrome` <Badge text="0.0.1+"/>

``` javascript
isChrome: () => boolean;
```

#### 功能描述

`是否是谷歌浏览器`：判断是否是谷歌浏览器

#### 返回

`Boolean`：是谷歌浏览器则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isChrome', _.isChrome()) 
```

<br>
<br>

## `isgecko` <Badge text="0.0.1+"/>

``` javascript
isgecko: () => boolean;
```

#### 功能描述

`是否是火狐浏览器`：判断是否是火狐浏览器

#### 返回

`Boolean`：是火狐浏览器则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isgecko', _.isgecko()) 
```

<br>
<br>

## `isqq` <Badge text="0.0.1+"/>

``` javascript
isqq: () => boolean;
```

#### 功能描述

`是否是 QQ 浏览器`：判断是否是 QQ 浏览器

#### 返回

`Boolean`：是 QQ 浏览器则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isqq', _.isqq()) 
```

<br>
<br>

## `ispc` <Badge text="0.0.1+"/>

``` javascript
ispc: () => boolean;
```

#### 功能描述

`pc 端还是移动端`：判断是 pc 端还是移动端

#### 返回

`Boolean`：PC 端则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 ispc', _.ispc()) 
```

<br>
<br>

## `isweixin` <Badge text="0.0.1+"/>

``` javascript
isweixin: () => boolean;
```

#### 功能描述

`是否是微信环境`：判断是否是微信环境

#### 返回

`Boolean`：微信浏览器则返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isweixin', _.isweixin()) 
```
