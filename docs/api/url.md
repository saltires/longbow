# Url 操作模块

## `GetQueryString` <Badge text="0.0.1+"/>

``` javascript
GetQueryString(name: string): string | null;
```

#### 功能描述

`获取 url 参数`：获取 url 中的某个参数值

#### 参数

- `str(String)`：必须，参数名

#### 返回

`(String | null)`：参数值，没有则返回 null

#### 示例

``` javascript
import _ from 'longbow'

// url：http:example.html?foo=bar

console.log('测试 GetQueryString', _.GetQueryString('foo'))
// bar
```

<br>
<br>

## `replaceQueryString` <Badge text="0.0.1+"/>

``` javascript
replaceQueryString(paramName: string, replaceWith: string): string;
```

#### 功能描述

`获取 url 参数`：修改 url 中的某个参数的值，返回新地址
`Note`：此方法不会真实修改浏览器上的地址

#### 参数

- `paramName(String)`：必须，参数名
- `replaceWith(String)`：必须，新的参数值

#### 返回

`(String)`：返回替换后的 url 地址

#### 示例

``` javascript
import _ from 'longbow'

// url：http://localhost:5000/browser.test?foo=123

console.log('测试 GetQueryString', _.replaceQueryString('foo', 'xxx'))
// http://localhost:5000/browser.test?foo=xxx
```

<br>
<br>

## `addQueryString` <Badge text="0.0.1+"/>

``` javascript
addQueryString(paramName: string, replaceWith: string): string | null;
```

#### 功能描述

`获取 url 参数`：在 URL 中追加一个参数
`Note`：此方法不会真实修改浏览器上的地址

#### 参数

- `paramName(String)`：必须，追加的参数名
- `replaceWith(String)`：必须，追加的参数值

#### 返回

`(String)`：返回新的的 url 地址

#### 示例

``` javascript
import _ from 'longbow'

// url：http://localhost:5000/browser.test?foo=123

console.log('测试 addQueryString', _.addQueryString('bar', 'knight'))
// http://localhost:5000/browser.test?foo=123&bar=knight
```

<br>
<br>

## `isAbsoluteURL` <Badge text="0.0.1+"/>

``` javascript
isAbsoluteURL(str: string): boolean;
```

#### 功能描述

`绝对地址判断`：是否为绝对地址，如果给定的字符串是绝对 URL，返回 true

#### 参数

- `url(String)`：必须，要判断的地址

#### 返回

`(Boolean)`：如果给定的字符串是绝对 URL，返回 true

#### 示例

``` javascript
import _ from 'longbow'

console.log('测试 isAbsoluteURL', _.isAbsoluteURL('https://google.com'))
// true

console.log('测试 isAbsoluteURL', _.isAbsoluteURL('ftp://www.myserver.net'))
// true

console.log('测试 isAbsoluteURL', _.isAbsoluteURL('/foo/bar'))
// false
```

<br>
<br>

