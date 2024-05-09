# getFieldValues(treelikeData, field, [options])

## 说明

得到树形数据中所有给定field的值的Array，也可以使用在某些场景例如：想获得所有字段open为true的节点的key

## 参数

`treelikeData(Array)`: 树形数据

`field(String | Function)`: 给定字段或取值function

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

## 返回值

`values(Array)`: filedValues

## 使用

```js
const treeData = [
  { key: '1', children: [{ key: '11' }] },
  { key: '2', children: [{ key: '21', open: true }] },
  { key: '3', children: [{ key: '31' }] },
]

getFieldValues(treeData, 'key')
// ['1', '11', '2', '21', '3', '31']

getFieldValues(treeData, node => node.open ? node.key : null).filter(Boolean)
// ['21']

```