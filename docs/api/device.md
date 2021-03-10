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
import _ from 'saltire-util'

_.inBrowser()
// => true in browser
```
