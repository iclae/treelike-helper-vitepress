# filterTreeData(treelikeData, filterFunc, [options])

## 说明

该方法类似原生的 filter

当父节点不满足时，子节点即使满足也会被筛选掉

## 参数

`treelikeData(Array)`: 树形数据

`filterFunc(Function)`: 同原生 filter

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

## 返回值

`treelikeData(Array)`: 树形数据

## 使用

```js
const treeData = [
  { id: '1', title: '1', hasPermission: true },
  { id: '2', title: '2' },
  {
    id: '3',
    title: '3',
    hasPermission: true,
    children: [
      { id: '3-1', title: '3-1' },
      { id: '3-2', title: '3-2', hasPermission: true },
      { id: '3-3', title: '3-3', hasPermission: false },
    ],
  },
  {
    id: '4',
    title: '4',
    hasPermission: false,
    children: [
      { id: '4-1', title: '4-1' },
      { id: '4-2', title: '4-2', hasPermission: true },
    ],
  },
]
filterTreeData(treeData, (node) => node.hasPermission)

// [
//   { id: '1', title: '1', hasPermission: true },
//   {
//     id: '3',
//     title: '3',
//     hasPermission: true,
//     children: [{ id: '3-2', title: '3-2', hasPermission: true }],
//   },
// ]

```