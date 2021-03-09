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
import _ from 'saltire-util'

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
import _ from 'saltire-util'

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
import _ from 'saltire-util'

_.copyToClipboard('saltire-util is so helpful!')
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
import _ from 'saltire-util'

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
import _ from 'saltire-util'

_.once(function(){console.log('foo')})()
```