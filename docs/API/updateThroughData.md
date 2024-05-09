# updateThroughData(treelikeData, targetKey, iteratee, [options])

## 说明

根据targetKey，修改该节点的所有途经父节点，默认不修改自身，添加includeSelf可以修改自身

如果没找到  targetKey, 不会有修改的操作，返回的是原数据

## 参数

`treelikeData(Array)`: 树形数据

`targetKey(String)`: 目标节点的 key

`iteratee(Function)`: 迭代函数

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

`[options.KeyName='key'](String)`: 数据中唯一标识字段，默认为'key'

`[options.includeSelf=false]`

## 返回值

`treelikeData(Array)`: 树形数据

## 使用

```js
const treeData = [
  { key: '1', children: [{ key: '1-1', children: [{ key: '1-1-1' }] }] },
]

const newTreeData1 = updateThroughData(treeData, '1-1-1', item => {
  return {
    ...item,
    title: item.key,
  }
})

// [
//   {
//     key: '1',
//     title: '1',
//     children: [{ key: '1-1', title: '1-1', children: [{ key: '1-1-1' }] }],
//   },
// ]

const newTreeData2 = updateThroughData(treeData, '1-1-1', item => {
  return {
    ...item,
    title: item.key,
  }
}, { includeSelf: true })

// [
//   {
//     key: '1',
//     title: '1',
//     children: [{ key: '1-1', title: '1-1', children: [{ key: '1-1-1', title: '1-1-1' }] }],
//   },
// ]

```