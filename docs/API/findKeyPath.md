# findKeyPath(treelikeData, targetKey, [options])

## 说明

查找 targetKey 的 keyPath(Array)

## 参数

`treelikeData(Array)`: 树形数据

`targetKey(String)`: 要查找的节点 key

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

`[options.KeyName='key'](String)`: 数据中唯一标识字段，默认为'key'

## 返回值

`keyPath(Array)`: targetKey 的路径

## 使用

```js
findKeyPath([{ key: 1, children: [{key: 2}] }], 2)

// [0, 'children', 0]

```