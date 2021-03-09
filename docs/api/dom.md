# Dom 操作模块

## `flatten` <Badge text="0.0.1+"/>

``` javascript
flatten(array)
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
