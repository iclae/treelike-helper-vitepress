# caculateLeafCount(treelikeData, [options])

## 说明

计算树形数据的叶子节点数量，只有没有子数据的节点才算叶子节点

## 参数

`treelikeData(Array)`: 树形数据

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

## 返回值

`count(Number)`: 叶子节点数量

## 使用

```js
const treeData = [
  {
    key: '1', title: 'parent 1', children: [
      { key: '1-1', title: 'leaf 1-1' },
      { key: '1-2', title: 'leaf 1-2' },
    ]
  },
  {
    key: '2', title: 'parent 2', children: [
      { key: '2-1', title: 'leaf 2-1' },
      { key: '2-2', title: 'leaf 2-2' },
    ]
  },
]
calculateLeafCount(treeData)
// 4

```