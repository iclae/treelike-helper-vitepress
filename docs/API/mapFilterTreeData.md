# mapFilterTreeData(treelikeData, filterFunc, mapFunc, [options])

## 说明

map 和 filter 的结合，需要注意的是顺序不能变，第二个参数同 filterTreeData，第三个参数同 mapTreeData，且第三个参数拿到的数据是已经筛选后的数据

## 参数

`treelikeData(Array)`: 树形数据

`filterFunc(Function)`: 同原生 filter

`mapFunc(Function)`: 同原生 map

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

## 返回值

`treelikeData(Array)`: 树形数据

## 使用

```js
mapFilterTreeData(
  [
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
  ],
  item => item.hasPermission,
  item => ({ ...item, subTitle: 'already filter data' })
)

// [
//   {
//     id: '1',
//     title: '1',
//     hasPermission: true,
//     subTitle: 'already filter data',
//   },
//   {
//     id: '3',
//     title: '3',
//     hasPermission: true,
//     subTitle: 'already filter data',
//     children: [
//       {
//         id: '3-2',
//         title: '3-2',
//         hasPermission: true,
//         subTitle: 'already filter data',
//       },
//     ],
//   },
// ]

```