# findParentData(treelikeData, targetKey, [options])

## 说明

根据targetKey查找父节点数据

如果查找的节点在最外层，会返回undefined

## 参数

`treelikeData(Array)`: 树形数据

`targetKey(String)`: 要查找的节点 key

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

`[options.KeyName='key'](String)`: 数据中唯一标识字段，默认为'key'

## 返回值

`treelikeData(Object)`: 树形数据Item

## 使用

```js
const treeData = [
  {
    key: '1', children: [
      { key: '1-1' },
      {
        key: '1-2', children: [
          { key: '1-2-1' }
        ]
      }
    ]
  }
]

findParentData(treeData, '1-2-1')

// { key: '1-2', children: [{ key: '1-2-1' }] }

```