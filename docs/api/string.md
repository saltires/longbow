# 字符串操作模块

## `camelCase` <Badge text="0.0.1+"/>

``` javascript
camelCase(string: string): string | AnyObject;
```

#### 功能描述

`转驼峰`：英文字符串依序转驼峰，处理过程中遇见非英文字母字符，全部当做空格处理，其余依序拼装

#### 参数

- `array(Array)`：必须，待处理的字符串

#### 返回

`(String)`：处理后的字符串

#### 示例

``` javascript
import _ from 'longbow'

test('测试 camelCase', () => {
    expect(_.camelCase('Foo Bar')).toBe('fooBar')
    expect(_.camelCase('--foo-bar--')).toBe('fooBar')
    expect(_.camelCase('FOO BAR QI#ZH')).toBe('fooBarQiZh')
})
```

<br>
<br>

## `endsWith` <Badge text="0.0.1+"/>

``` javascript
endsWith(str: string, match: string): boolean;
```

#### 功能描述

`判断字符串是否以某指定字符结尾`：判断某个字符串是否以某特殊字符结尾,尾部空格会被忽略

#### 参数

- `str(String)`：必须，待处理的字符串

#### 返回

`(Boolean)`：如果字符串以指定的字符开头，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 endsWith', () => {
    expect(_.endsWith("foobar", "bar")).toBe(true)
    expect(_.endsWith('foobar', "foo")).toBe(false)
})
```

<br>
<br>

## `startsWith` <Badge text="0.0.1+"/>

``` javascript
startsWith(str: string, match: string): boolean;
```

#### 功能描述

`判断字符串是否以某指定字符开头`：判断某个字符串是否以某特殊字符开头,尾部空格会被忽略

#### 参数

- `str(String)`：必须，待处理的字符串

#### 返回

`(Boolean)`：如果字符串以指定的字符结尾，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 startsWith', () => {
    expect(_.startsWith("foobar", "bar")).toBe(false)
    expect(_.startsWith('foobar', "foo")).toBe(true)
})
```

<br>
<br>

## `randomString` <Badge text="0.0.1+"/>

``` javascript
randomString(): string;
```

#### 功能描述

`随机字符串`：生成随机字符串

#### 返回

`(String)`：返回随机字符串

#### 示例

``` javascript
import _ from 'longbow'

test('测试 randomString', () => {
    expect(typeof _.randomString()).toBe('string')
    expect(typeof _.randomString()).toBe('string')
})
```

<br>
<br>

## `hiddenNumber` <Badge text="0.0.1+"/>

``` javascript
hiddenNumber(str: string, frontLen: number, endLen: number): string;
```

#### 功能描述

`隐藏号码`：隐藏号码的中间一部分，常见的是隐藏中间四位

#### 参数

- `str(String)`：必须，待处理的字符串
- `frontLen(Number)`：必须，前面的号码显示数量
- `endLen(Number)`：必须，后面的号码显示数量

#### 返回

`str(String)`：返回隐藏后的字符串

#### 示例

``` javascript
import _ from 'longbow'

test('测试 hiddenNumber', () => {
    expect(_.hiddenNumber('19122334455', 3, 4)).toBe('191****4455')
    expect(_.hiddenNumber('19122334455', 2, 4)).toBe('19*****4455')
})
```

<br>
<br>

## `randomNumber` <Badge text="0.0.1+"/>

``` javascript
randomNumber(min: number, max: number): number;
```

#### 功能描述

`数字生成器`：生成一个[min, max]之间的随机数

#### 参数

- `min(Number)`：必须，最小数
- `max(Number)`：必须，最大数

#### 返回

`(Number)`：返回在指定范围内的随机数字

#### 示例

``` javascript
import _ from 'longbow'

test('测试 randomNumber', () => {
    expect(_.randomNumber(0, 10)).toBeGreaterThanOrEqual(0)
    expect(_.randomNumber(0, 10)).toBeLessThanOrEqual(10)
    expect(typeof _.randomNumber(10, 20)).toBe('number')
})
```