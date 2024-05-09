# addData(treelikeData, parentKey, data, [options])

## 说明

为某一节点添加数据

如果没找到 parentKey, 不会有添加的操作，返回的是原数据

## 参数

`treelikeData(Array)`: 树形数据

`parentKey(String)`: 待添加节点的 key

`data(Array | Object)`: 待添加的数据

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

`[options.KeyName='key'](String)`: 数据中唯一标识字段，默认为'key'

## 返回值

`treelikeData(Array)`: 树形数据

## 使用

```js
const treeData = [
  { key: '1',
    children: [
      { key: '1-1' }
    ]
  }
]

const newTreeData = addData(treeData, '1-1', { key: '1-1-1' })

// [
//   { key: '1',
//     children: [
//       { key: '1-1',
//         children: [
//           { key: '1-1-1' }
//         ]
//       }
//     ]
//   }
// ]

```