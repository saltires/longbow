# Dom 操作模块

## `hasClass` <Badge text="0.0.1+"/>

``` javascript
hasClass: (element: Element, className: string) => boolean;
```

#### 功能描述

`数组扁平化`：判断元素是否含有某个 class

#### 参数

- `element(Element)`：必须，指定的元素
- `className(String)`：必须，class 名称

#### 返回

`(Boolean)`：元素包含指定的 class，则返回 true

#### 示例

``` javascript
import _ from 'saltire-tool'

const el = document.getElementById('top') 

console.log('测试 hasClass', _.hasClass(el, 'top'));
```

<br>
<br>

## `addClass` <Badge text="0.0.1+"/>

``` javascript
addClass(element: Element, ...argus: Array<string>): void
```

#### 功能描述

`添加 class`：原生 js 操作元素 class 的方法，给元素添加 class，支持不定长参数

#### 参数

- `element(Element)`：必须，指定的元素
- `argus(String)`：必须，class 名，数量不限

#### 返回

`(Null)`：不返回任何内容

#### 示例

``` javascript
import _ from 'saltire-tool'

const el = document.getElementById('top') 

console.log('测试 addClass', _.addClass(el, 'foo'));
```

<br>
<br>

## `removeClass` <Badge text="0.0.1+"/>

``` javascript
removeClass(element: Element, ...argus: Array<string>): void
```

#### 功能描述

`添加 class`：原生 js 操作元素 class 的方法，删除元素的 class，支持不定长参数

#### 参数

- `element(Element)`：必须，指定的元素
- `argus(String)`：必须，class 名，数量不限

#### 返回

`(Null)`：不返回任何内容

#### 示例

``` javascript
import _ from 'saltire-tool'

const el = document.getElementById('top') 

console.log('测试 removeClass', _.removeClass(el, 'top'));
```

<br>
<br>

## `getScrollLeft` <Badge text="0.0.1+"/>

``` javascript
getScrollLeft(): number;
```

#### 功能描述

`获取文档的 scrollLeft`：返回整个 html文档的 scrollLeft 值

#### 返回

`(Number)`：返回整个 html文档的 scrollLeft 值

#### 示例

``` javascript
import _ from 'saltire-tool'

console.log('测试 getScrollLeft', _.getScrollLeft());
```

<br>
<br>

## `getScrollTop` <Badge text="0.0.1+"/>

``` javascript
getScrollTop(): number;
```

#### 功能描述

`获取文档的 getScrollTop`：返回整个 html文档的 getScrollTop 值

#### 返回

`(Number)`：返回整个 html文档的 getScrollTop 值

#### 示例

``` javascript
import _ from 'saltire-tool'

console.log('测试 getScrollTop', _.getScrollTop());
```

<br>
<br>

## `getElementTop` <Badge text="0.0.1+"/>

``` javascript
getElementTop(el: HTMLElement): number;
```

#### 功能描述

`获取元素距页面高度`：获取元素距页面高度

#### 参数

- `element(Element)`：必须，指定的元素

#### 返回

`(Number)`：元素距离页面的高度

#### 示例

``` javascript
import _ from 'saltire-tool'

const el = document.getElementById('top') 

console.log('测试 getElementTop', _.getElementTop(el));
```

<br>
<br>

## `getPagearea` <Badge text="0.0.1+"/>

``` javascript
getPagearea(): ObjectWidthHeight | null;
```

#### 功能描述

`获取网页实际高度和宽度`：获取整个网页的实际高度与宽度

#### 返回

`(Null | { width: Number, height: Number })`：返回一个具有 width 和 height 属性的对象或者返回 null

#### 示例

``` javascript
import _ from 'saltire-tool'

console.log('测试 getPagearea', _.getPagearea());
```
