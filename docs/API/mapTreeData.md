# mapTreeData(treelikeData, iteratee, [options])

## 说明

该方法类似原生的 map，通常用于为远程数据添加属性

## 参数

`treelikeData(Array)`: 树形数据

`iteratee(Function)`: 迭代函数

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

## 返回值

`treelikeData(Array)`: 树形数据

## 使用

```js
const treeData = [
  { id: '1', title: '1' },
  { id: '2', title: '2', 
    children: [
      { id: '2-1', title: '2-1' }
    ]
  }
]

const newTreeData = mapTreeData(treeData, item => {
  if (!item.children) {
    item.isLeaf = true
  }
  return {
    ...item,
    name: item.title,
    key: item.id,
  }
});

// [
//   { id: '1', title: '1', key: '1', name: '1', isLeaf: true },
//   {
//     id: '2',
//     title: '2',
//     key: '2',
//     name: '2',
//     children: [
//       {
//         id: '2-1',
//         title: '2-1',
//         key: '2-1',
//         name: '2-1',
//         isLeaf: true
//       }
//     ],
//   },
// ]
```