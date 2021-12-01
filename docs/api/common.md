# 通用模块

## `flatten` <Badge text="0.0.1+"/>

``` javascript
flatten: <T>(arr: Array<T>) => Array<T>;
```

#### 功能描述

`数组扁平化`：对多维数组进行扁平化处理，并返回一个一维数组。

#### 参数

- `array(Array)`：必须，待扁平化的数组

#### 返回

`array(Array)`：扁平化后的新数组

#### 示例

``` javascript
import _ from 'longbow'

_.flatten([1,2,[3,4],[5,6,[7,8]]])
// => [1,2,3,4,5,6,7,8]
```

<br>
<br>

## `debounce` <Badge text="0.0.1+"/>

``` javascript
debounce: (func: any, delay: number) => (...args: any[]) => void;
```

#### 功能描述

`防抖函数`：防止函数被频繁触发，设置一个间隔时间，如果间隔时间内用户又一次触发，认为触发无效，并且重新设置间隔时间

#### 参数

- `callback(function)`：需要做防抖处理的事件处理函数
- `delay(Number)`：间隔时间

#### 返回

`callback(function)`：经过防抖处理后的事件处理函数

#### 示例

``` javascript
import _ from 'longbow'

const callback = _.debounce(e => console.log(e))

document.getElementById('foo').addEventListener('mousemove', callback)
```

<br>
<br>

## `copyToClipboard` <Badge text="0.0.1+"/>

``` javascript
copyToClipboard: (str: string) => void;
```

#### 功能描述

`剪贴板复制`：将一段指定的字符串复制到剪贴板上

#### 参数

- `str(String)`：指定要复制的字符串

#### 返回

`undefined(undefined)`：不返回任何内容

#### 示例

``` javascript
import _ from 'longbow'

_.copyToClipboard('longbow is so helpful!')
```

<br>
<br>

## `downoladFile` <Badge text="0.0.1+"/>

``` javascript
downoladFile: (url: string, name: string) => void;
```

#### 功能描述

`下载文件`：根据网络上的 url 地址下载文件

#### 参数

- `url(String)`：文件的地址
- `name(String)`：指定下载后的文件名称

#### 返回

`undefined(undefined)`：不返回任何内容

#### 示例

``` javascript
import _ from 'longbow'

_.downoladFile('http:example.com/file.pdf', '百科全书.pdf')
```

<br>
<br>

## `once` <Badge text="0.0.1+"/>

``` javascript
once: (fn: (...args: any[]) => void) => AnyObject;
```

#### 功能描述

`单次执行`：控制函数只执行一次

#### 参数

- `fn(function)`：希望只执行一次的函数

#### 返回

`fn(function)`：返回包装过的只会执行一次的函数

#### 示例

``` javascript
import _ from 'longbow'

_.once(function(){console.log('foo')})()
```

<br>
<br>

## `isArray` <Badge text="0.0.3+"/>

``` javascript
isArray?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是数组

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是数组类型，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isArray', () => {
    expect(_.isArray('[]')).toBe(false)
    expect(_.isArray([])).toBe(true)
    expect(_.isArray(3)).toBe(false)
    expect(_.isArray(new Array())).toBe(true)
    expect(_.isArray(new Set())).toBe(false)
})
```

<br>
<br>

## `isBoolean` <Badge text="0.0.3+"/>

``` javascript
isBoolean?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是布尔值

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是布尔类型，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isBoolean', () => {
    expect(_.isBoolean([])).toBe(false)
    expect(_.isBoolean(3)).toBe(false)
    expect(_.isBoolean(true)).toBe(true)
    expect(_.isBoolean(false)).toBe(true)
    expect(_.isBoolean('true')).toBe(false)
})
```

<br>
<br>

## `isDate` <Badge text="0.0.3+"/>

``` javascript
isDate?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是日期对象

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是日期对象，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isDate', () => {
    expect(_.isDate([])).toBe(false)
    expect(_.isDate(3)).toBe(false)
    expect(_.isDate(new Date())).toBe(true)
    expect(_.isDate('2020-01-02')).toBe(false)
    expect(_.isDate('true')).toBe(false)
})
```

<br>
<br>

## `isFunction` <Badge text="0.0.3+"/>

``` javascript
isFunction?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是函数

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是函数，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isFunction', () => {
    expect(_.isFunction([])).toBe(false)
    expect(_.isFunction(function() {})).toBe(true)
    expect(_.isFunction(() => 3)).toBe(true)
})
```

<br>
<br>

## `isNumber` <Badge text="0.0.3+"/>

``` javascript
isNumber?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是数字

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是数字，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isNumber', () => {
    expect(_.isNumber(new Number())).toBe(true)
    expect(_.isNumber('2')).toBe(false)
    expect(_.isNumber(2)).toBe(true)
})
```

<br>
<br>

## `isNull` <Badge text="0.0.3+"/>

``` javascript
isNull?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是 Null

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是 Null，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isNull', () => {
    expect(_.isNull(null)).toBe(true)
    expect(_.isNull(0)).toBe(false)
    expect(_.isNull(undefined)).toBe(false)
})
```

<br>
<br>

## `isObject` <Badge text="0.0.3+"/>

``` javascript
isObject?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是 plainObject

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是 plainObject，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isObject', () => {
    expect(_.isObject({})).toBe(true)
    expect(_.isObject(0)).toBe(false)
    expect(_.isObject(null)).toBe(false)
})
```

<br>
<br>

## `isRegExp` <Badge text="0.0.3+"/>

``` javascript
isRegExp?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是正则对象

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是正则对象，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isRegExp', () => {
    expect(_.isRegExp({})).toBe(false)
    expect(_.isRegExp(new RegExp())).toBe(true)
    expect(_.isRegExp(/foo/)).toBe(true)
})
```

<br>
<br>

## `isString` <Badge text="0.0.3+"/>

``` javascript
isString?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是字符串

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是字符串，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isString', () => {
    expect(_.isString('')).toBe(true)
    expect(_.isString(0)).toBe(false)
    expect(_.isString(new String('40'))).toBe(true)
})
```

<br>
<br>

## `isUndefined` <Badge text="0.0.3+"/>

``` javascript
isUndefined?: (type: any) => Boolean
```

#### 功能描述

`类型判断`：判断是否是 Undefined

#### 参数

- `(any)`：待判断的数据

#### 返回

`(Boolean)`：如果参数是 Undefined，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isUndefined', () => {
    expect(_.isUndefined('')).toBe(false)
    expect(_.isUndefined(null)).toBe(false)
    expect(_.isUndefined(0)).toBe(false)
    expect(_.isUndefined(undefined)).toBe(true)
})
```