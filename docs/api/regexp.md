# 正则模块

## `isurl` <Badge text="0.0.1+"/>

``` javascript
isurl?: (param: any) => boolean;
```

#### 功能描述

`是否是 URL`：判断指定字符串是否是网址(url,支持端口和"?+参数"和"#+参数)

`Note`：对于`http://localhost:8081/api/dom.html`这样的地址认为其不合法

#### 参数

- `url(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是合法的 URL 地址，返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isurl', () => {
    expect(_.isurl('http://www.baidu.com')).toBe(true)
    expect(_.isurl('http://www.baidu.com:80/api/dom.html#removeclass')).toBe(true)
    expect(_.isurl('http://localhost:8081')).toBe(false)
    expect(_.isurl('http://foo.localhost:8081')).toBe(true)
    expect(_.isurl('api/dom.html#removeclass')).toBe(false)
})
```

<br>
<br>

## `isvideo_url` <Badge text="0.0.1+"/>

``` javascript
isvideo_url?: (param: any) => boolean;
```

#### 功能描述

`是否是视频链接地址`：判断指定字符串是否是视频(video)链接地址（视频格式可按需增删）

#### 参数

- `url(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是视频地址，返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isvideo_url', () => {
    expect(_.isvideo_url('https://v.qq.com/x/page/e32320gnosh.mp4')).toBe(true)
    expect(_.isvideo_url('https://v.qq.com/x/page/e32320gnosh.swf')).toBe(true)
    expect(_.isvideo_url('https://v.qq.com/x/page/e32320gnosh.mov')).toBe(true)
    expect(_.isvideo_url('https://v.qq.com/x/page/e32320gnosh.html')).toBe(false)
})
```

<br>
<br>

## `isimg_url` <Badge text="0.0.1+"/>

``` javascript
isimg_url?: (param: any) => boolean;
```

#### 功能描述

`是否是图片链接地址`：判断指定字符串是否是图片(image)链接地址（图片格式可按需增删）

#### 参数

- `url(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是图片地址，返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isimg_url', () => {
    expect(_.isimg_url('https://v.qq.com/x/page/e32320gnosh.jpg')).toBe(true)
    expect(_.isimg_url('https://v.qq.com/x/page/e32320gnosh.jpeg')).toBe(true)
    expect(_.isimg_url('https://v.qq.com/x/page/e32320gnosh.png')).toBe(true)
    expect(_.isimg_url('https://v.qq.com/x/page/e32320gnosh.html')).toBe(false)
})
```

<br>
<br>

## `istime_24` <Badge text="0.0.1+"/>

``` javascript
istime_24?: (param: any) => boolean;
```

#### 功能描述

`是否是24小时制时间`：判断指定字符串是否是24小时制时间（HH:mm:ss）

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是24小时制时间（HH:mm:ss），返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 istime_24', () => {
    expect(_.istime_24('19:20:21')).toBe(true)
    expect(_.istime_24('24:00:00')).toBe(false)
    expect(_.istime_24('23:59:00')).toBe(true)
    expect(_.istime_24('00:00:01')).toBe(true)
    expect(_.istime_24('00:00:00')).toBe(true)
})
```

<br>
<br>

## `istime_12` <Badge text="0.0.1+"/>

``` javascript
istime_12?: (param: any) => boolean;
```

#### 功能描述

`是否是12小时制时间`：判断指定字符串是否是12小时制时间（HH:mm:ss）

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是12小时制时间（hh:mm:ss），返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 istime_12', () => {
    expect(_.istime_12('19:20:21')).toBe(false)
    expect(_.istime_12('12:00:00')).toBe(true)
    expect(_.istime_12('11:59:00')).toBe(true)
    expect(_.istime_12('00:00:02')).toBe(false)
    expect(_.istime_12('01:00:00')).toBe(true)
})
```

<br>
<br>

## `isbase64` <Badge text="0.0.1+"/>

``` javascript
isbase64?: (param: any) => boolean;
```

#### 功能描述

`是否是base64格式`：判断指定字符串是否是 base64格式

#### 参数

- `url(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是 base64格式，返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isbase64', () => {
    expect(_.isbase64('foo')).toBe(false)
    expect(_.isbase64('data:image/jpg;base64,iVBORw0KGgoAAAA')).toBe(true)
    expect(_.isbase64('data:,Hello%2C%20World!')).toBe(true)
    expect(_.isbase64('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==')).toBe(true)
    expect(_.isbase64('data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E')).toBe(true)
})
```

<br>
<br>

## `ismoney` <Badge text="0.0.1+"/>

``` javascript
ismoney?: (param: any) => boolean;
```

#### 功能描述

`是否是货币金额数字`：判断指定字符串是否是数字/货币金额（支持负数、千分位分隔符）

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是数字/货币金额（支持负数、千分位分隔符），返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 ismoney', () => {
    expect(_.ismoney('3.00')).toBe(true)
    expect(_.ismoney('-13.5')).toBe(true)
    expect(_.ismoney('11,444,111,111,123')).toBe(true)
    expect(_.ismoney('11,12')).toBe(false)
    expect(_.ismoney('11,211.34')).toBe(true)
})
```

<br>
<br>

## `isbank_card` <Badge text="0.0.1+"/>

``` javascript
isbank_card?: (param: any) => boolean;
```

#### 功能描述

`是否是银行卡号`：判断指定字符串是否是银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是银行卡号（10到30位, 覆盖对公/私账户），返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isbank_card', () => {
    expect(_.isbank_card('3.4')).toBe(false)
    expect(_.isbank_card('-100000000000')).toBe(false)
    expect(_.isbank_card('6222022468013284338')).toBe(true)
    expect(_.isbank_card('6222022382437706219')).toBe(true)
    expect(_.isbank_card('foobar')).toBe(false)
})
```

<br>
<br>

## `isname_chinese` <Badge text="0.0.1+"/>

``` javascript
isname_chinese?: (param: any) => boolean;
```

#### 功能描述

`是否是中文姓名`：判断指定字符串是否是中文姓名

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是中文姓名，返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isname_chinese', () => {
    expect(_.isname_chinese('3.4')).toBe(false)
    expect(_.isname_chinese('-100000000000')).toBe(false)
    expect(_.isname_chinese('滕子京')).toBe(true)
    expect(_.isname_chinese('拓跋天赐')).toBe(true)
    expect(_.isname_chinese('foobar')).toBe(false)
    expect(_.isname_chinese('张则')).toBe(true)
})
```

<br>
<br>

## `islicense_plate` <Badge text="0.0.1+"/>

``` javascript
islicense_plate?: (param: any) => boolean;
```

#### 功能描述

`是否是车牌号`：判断指定字符串是否是车牌号(新能源+非新能源)

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是车牌号(新能源+非新能源)，返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 islicense_plate', () => {
    expect(_.islicense_plate('3.4')).toBe(false)
    expect(_.islicense_plate('浙AD12345')).toBe(true)
    expect(_.islicense_plate('沪BC8778')).toBe(true)
    expect(_.islicense_plate('foobar')).toBe(false)
})
```

<br>
<br>

## `ismd5` <Badge text="0.0.1+"/>

``` javascript
ismd5?: (param: any) => boolean;
```

#### 功能描述

`是否是md5格式(32位)`：判断指定字符串是否是md5格式(32位)

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是md5格式(32位)，返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 ismd5', () => {
    expect(_.ismd5('3.4')).toBe(false)
    expect(_.ismd5('0E1F702FEB35743D393231BFE6759CD3')).toBe(true)
    expect(_.ismd5('47C4647666DECED3E7C01FFCF4A084F6')).toBe(true)
    expect(_.ismd5('foobar')).toBe(false)
})
```

<br>
<br>

## `isphone_rigorous` <Badge text="0.0.1+"/>

``` javascript
isphone_rigorous?: (param: any) => boolean;
```

#### 功能描述

`手机号判断`：判断指定字符串是否是手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段，返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isphone_rigorous', () => {
    expect(_.isphone_rigorous('3.4')).toBe(false)
    expect(_.isphone_rigorous('19875826231')).toBe(true)
    expect(_.isphone_rigorous('13438035502')).toBe(true)
    expect(_.isphone_rigorous('13438')).toBe(false)
    expect(_.isphone_rigorous('1343803550')).toBe(false)
    expect(_.isphone_rigorous('01343803550')).toBe(false)
})
```

<br>
<br>

## `isphone_loose` <Badge text="0.0.1+"/>

``` javascript
isphone_loose?: (param: any) => boolean;
```

#### 功能描述

`手机号判断`：判断指定字符串是否是手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isphone_loose', () => {
    expect(_.isphone_loose('3.4')).toBe(false)
    expect(_.isphone_loose('19875826231')).toBe(true)
    expect(_.isphone_loose('13438035502')).toBe(true)
    expect(_.isphone_loose('13438')).toBe(false)
    expect(_.isphone_loose('1343803550')).toBe(false)
    expect(_.isphone_loose('13438035500')).toBe(true)
})
```

<br>
<br>

## `isdate` <Badge text="0.0.1+"/>

``` javascript
isdate?: (param: any) => boolean;
```

#### 功能描述

`日期字符串判断`：判断指定字符串是否是日期字符串，支持 2020-01-02 和 2020/01/02 这两种形式

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是日期字符串，支持 2020-01-02 和 2020/01/02 这两种形式，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isdate', () => {
    expect(_.isdate('2020-01-02')).toBe(true)
    expect(_.isdate('19875826231')).toBe(false)
    expect(_.isdate('2021/02/03')).toBe(true)
    expect(_.isdate('2021/02-03')).toBe(false)
    expect(_.isdate('2021-02-03')).toBe(true)
})
```

<br>
<br>

## `isemail` <Badge text="0.0.1+"/>

``` javascript
isemail?: (param: any) => boolean;
```

#### 功能描述

`邮箱判断`：判断指定字符串是否是邮箱

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是邮箱，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isemail', () => {
    expect(_.isemail('2020-01-02')).toBe(false)
    expect(_.isemail('19875826231')).toBe(false)
    expect(_.isemail('pqlhm@163.com')).toBe(true)
    expect(_.isemail('minbjecopk@21cn.com')).toBe(true)
    expect(_.isemail('folr@eyou.com')).toBe(true)
})
```

<br>
<br>

## `istel` <Badge text="0.0.1+"/>

``` javascript
istel?: (param: any) => boolean;
```

#### 功能描述

`座机判断`：判断指定字符串是否是座机号码

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是座机号码，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 istel', () => {
    expect(_.istel('2020-01-02')).toBe(false)
    expect(_.istel('19875826231')).toBe(false)
    expect(_.istel('0552-86736556')).toBe(true)
    expect(_.istel('0000-28727722')).toBe(true)
})
```

<br>
<br>

## `isid_card` <Badge text="0.0.1+"/>

``` javascript
isid_card?: (param: any) => boolean;
```

#### 功能描述

`身份证号判断`：判断指定字符串是否是身份证号

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是身份证号，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isid_card', () => {
    expect(_.isid_card('2020-01-02')).toBe(false)
    expect(_.isid_card('19875826231')).toBe(false)
    expect(_.isid_card('120101200301019414')).toBe(true)
    expect(_.isid_card('340101200301014673')).toBe(true)
})
```

<br>
<br>

## `ispassports` <Badge text="0.0.1+"/>

``` javascript
ispassports?: (param: any) => boolean;
```

#### 功能描述

`护照判断`：判断指定字符串是否是护照（包含香港、澳门）

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是护照（包含香港、澳门），则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 ispassports', () => {
    expect(_.ispassports('M92274710')).toBe(false)
    expect(_.ispassports('19875826231')).toBe(false)
})
```

<br>
<br>

## `isusername` <Badge text="0.0.1+"/>

``` javascript
isusername?: (param: any) => boolean;
```

#### 功能描述

`用户名校验`：用户名校验，4到16位（字母，数字，下划线，减号）

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是符号规则的用户名，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isusername', () => {
    expect(_.isusername('foobar')).toBe(true)
    expect(_.isusername('19875826231')).toBe(true)
    expect(_.isusername('123')).toBe(false)
    expect(_.isusername('foo')).toBe(false)
    expect(_.isusername('foo3_3-')).toBe(true)
    expect(_.isusername('foo@hihi')).toBe(false)
})
```

<br>
<br>

## `ischinese` <Badge text="0.0.1+"/>

``` javascript
ischinese?: (param: any) => boolean;
```

#### 功能描述

`汉字校验`：判断指定字符串是否是中文/汉字

#### 参数

- `(String)`：必须，待判定字符串

#### 返回

`(Boolean)`：如果指定字符串是中文/汉字，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 ischinese', () => {
    expect(_.ischinese('foobar')).toBe(false)
    expect(_.ischinese('19875826231')).toBe(false)
    expect(_.ischinese('气质')).toBe(true)
})
```

<br>
<br>

## `isdecimal` <Badge text="0.0.1+"/>

``` javascript
isdecimal?: (param: any) => boolean;
```

#### 功能描述

`小数校验`：判断指定参数是否是小数

#### 参数

- `(Any)`：必须，待判定参数

#### 返回

`(Boolean)`：如果指定参数是小数，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isdecimal', () => {
    expect(_.isdecimal('foobar')).toBe(false)
    expect(_.isdecimal('19875826231')).toBe(false)
    expect(_.isdecimal('4.5')).toBe(true)
})
```

<br>
<br>

## `isqq_number` <Badge text="0.0.1+"/>

``` javascript
isqq_number?: (param: any) => boolean;
```

#### 功能描述

`qq 号码校验`：判断指定参数是否是 qq号码

#### 参数

- `(Any)`：必须，待判定参数

#### 返回

`(Boolean)`：如果指定参数是 qq 号码，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isqq_number', () => {
    expect(_.isqq_number('100010')).toBe(true)
    expect(_.isqq_number('152042')).toBe(true)
    expect(_.isqq_number('990329')).toBe(true)
    expect(_.isqq_number('1028476602')).toBe(true)
})
```

<br>
<br>

## `ispassword` <Badge text="0.0.1+"/>

``` javascript
ispassword?: (param: any) => boolean;
```

#### 功能描述

`密码强度校验`：密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符

#### 参数

- `(Any)`：必须，待判定参数

#### 返回

`(Boolean)`：如果指定参数符合密码强度校验，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 ispassword', () => {
    expect(_.ispassword('Abcde')).toBe(false)
    expect(_.ispassword('Ab12356')).toBe(false)
    expect(_.ispassword('329ABc&')).toBe(true)
})
```

<br>
<br>

## `isip_v4` <Badge text="0.0.1+"/>

``` javascript
isip_v4?: (param: any) => boolean;
```

#### 功能描述

`ipv4 地址校验`：ipv4地址校验

#### 参数

- `(Any)`：必须，待判定参数

#### 返回

`(Boolean)`：如果指定参数是 ipv4 地址，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 isip_v4', () => {
    expect(_.isip_v4('Abcde')).toBe(false)
    expect(_.isip_v4('61.104.170.242')).toBe(true)
    expect(_.isip_v4('b4fc:391d:3ec8:68ef:0ec8:529b:166d:ece2')).toBe(false)
})
```

<br>
<br>

## `iscolor_16` <Badge text="0.0.1+"/>

``` javascript
iscolor_16?: (param: any) => boolean;
```

#### 功能描述

`十六进制颜色校验`：十六进制颜色校验

#### 参数

- `(Any)`：必须，待判定参数

#### 返回

`(Boolean)`：如果指定参数是十六进制颜色，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 iscolor_16', () => {
    expect(_.iscolor_16('Abcde')).toBe(false)
    expect(_.iscolor_16('#FFB400')).toBe(true)
    expect(_.iscolor_16('#CC00FF')).toBe(true)
})
```

<br>
<br>

## `iswx_username` <Badge text="0.0.1+"/>

``` javascript
iswx_username?: (param: any) => boolean;
```

#### 功能描述

`微信号`：判断指定参数是否是微信号

#### 参数

- `(Any)`：必须，待判定参数

#### 返回

`(Boolean)`：如果指定参数是微信号，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 iswx_username', () => {
    expect(_.iswx_username('cbc')).toBe(false)
    expect(_.iswx_username('saltire')).toBe(true)
})
```

<br>
<br>

## `iszip_code` <Badge text="0.0.1+"/>

``` javascript
iszip_code?: (param: any) => boolean;
```

#### 功能描述

`邮政编码判断`：判断指定参数是否是中国区的邮政编码

#### 参数

- `(Any)`：必须，待判定参数

#### 返回

`(Boolean)`：如果指定参数是邮政编码，则返回 true

#### 示例

``` javascript
import _ from 'longbow'

test('测试 邮政编码', () => {
    expect(_.iszip_code('230000')).toBe(true)
    expect(_.iszip_code('231200')).toBe(true)
})
```