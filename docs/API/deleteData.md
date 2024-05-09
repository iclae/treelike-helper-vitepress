# deleteData(treelikeData, targetKey, [options])

## 说明

删除某节点的数据

如果没找到 targetKey 的节点, 返回的是原数据

## 参数

`treelikeData(Array)`: 树形数据

`targetKey(String)`: 要删除的节点的 key

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

`[options.KeyName='key'](String)`: 数据中唯一标识字段，默认为'key'

`[options.deleteEmptyParent=false](Boolean)`: 当删除节点后，节点所在子数据为空，是否继续删除子数据

## 返回值

`treelikeData(Array)`: 树形数据

## 使用

```js
const treeData = [
  { key: 1 },
  { key: 2, children: [{ key: 22, children: [{ key: 33 }] }] },
]

const newTreeData = deleteData(treeData, 2)
// [{ key: 1 }]
const newTreeData2 = deleteData(treeData, 22)
// [
//   { key: 1 },
//   { key: 2, children: [] },
// ]
const newTreeData3 = deleteData(treeData, 22, { deleteEmptyParent: true })
// [
//   { key: 1 },
//   { key: 2 },
// ]
```