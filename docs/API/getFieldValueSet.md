# getFieldValueSet(treelikeData, field, [options])

## 说明

和getFieldValue基本一致，只是返回的是去重的Set类型

## 参数

`treelikeData(Array)`: 树形数据

`field(String | Function)`: 给定字段或取值function

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

## 返回值

`values(Set)`: filedValueSet