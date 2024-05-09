# countNestedLayers(treelikeData, [options])

## 说明

计算树形数据深度（最大值）

## 参数

`treelikeData(Array)`: 树形数据

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

## 返回值

`depth(Number)`: 深度

## 使用

```js
countNestedLayers([])
// 0
countNestedLayers([{ key: '1', title: '1' }])
// 1
countNestedLayers([{ key: '1', children: [{ key: '1-1' }] }])
// 2
countNestedLayers([
  { key: 1, children: [{ key: 11 }] },
  { key: 2, children: [{ key: 21, children: [{ key: 211 }] }] }
])
// 3

```