# Cookie 操作模块

## `setCookie` <Badge text="0.0.1+"/>

``` javascript
setCookie: (
    site: string,
    cname: string,
    cvalue: string,
    exdays: number
) => void;
```

#### 功能描述

`设置 Cookie`：给某个指定的站点设置 Cookie

#### 参数

- `site(String)`：站点的域名（无需 www）
- `cname(String)`：cookie 的键
- `cvalue(String)`：cookie 的值
- `exdays(String)`：失效时间，以天为单位

#### 返回

`undefined(undefined)`：不返回任何内容

#### 示例

``` javascript
import _ from 'saltire-tool'

_.setCookie('example.com', 'foo', 'bar', 3)
```

<br>
<br>

## `getCookie` <Badge text="0.0.1+"/>

``` javascript
getCookie: (cname: string) => string;
```

#### 功能描述

`获取 cookie`：获取 cookie

#### 参数

- `cname(String)`：cookie 的键

#### 返回

`cvalue(String)`：cookie 的值

#### 示例

``` javascript
import _ from 'saltire-tool'

_.getCookie('foo') === "bar"
```

<br>
<br>

## `clearCookie` <Badge text="0.0.1+"/>

``` javascript
clearCookie: (site: string, name: string) => void;
```

#### 功能描述

`删除 cookie`：清除某个 cookie

#### 参数

- `site(String)`：站点的域名（无需 www）
- `cname(String)`：cookie 的键

#### 返回

`undefined(undefined)`：不返回任何内容

#### 示例

``` javascript
import _ from 'saltire-tool'

_.clearCookie('example.com', 'foo')
```

<br>
<br>

## `parseCookie` <Badge text="0.0.1+"/>

``` javascript
parseCookie: () => AnyObject;
```

#### 功能描述

`解析 cookie`：解析 HTTP Cookie 字符串并返回所有 cookie 的 name-value 对的对象

#### 返回

`AnyObject(AnyObject)`：返回所有 cookie 的 name-value 对的对象

#### 示例

``` javascript
import _ from 'saltire-tool'

_.parseCookie() === {foo: "1", bar: "2"}
```
