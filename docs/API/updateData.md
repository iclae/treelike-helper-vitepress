# updateData(treelikeData, targetKey, data, [options])

## 说明

为某一节点修改数据

如果没找到  targetKey, 不会有修改的操作，返回的是原数据

## 参数

`treelikeData(Array)`: 树形数据

`targetKey(String)`: 要修改节点的 key

`data(Object | Function)`: 待添加的数据或映射方法

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

const newTreeData = updateData(treeData, '1-1', { key: '1-1', title: 'update title' })
const newTreeData2 = updateData(treeData, '1-1', item => ({...item, title: 'update title' }))

// [
//   { key: '1',
//     children: [
//       { key: '1-1', title: 'update title' }
//     ]
//   }
// ]

```