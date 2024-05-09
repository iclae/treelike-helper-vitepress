# findParentData(treelikeData, search, [options])

## 说明

根据search查找所有相关的数据，但是并不是平铺的数据，而是会一直延伸到根节点，通常用于树形搜索

## 参数

`treelikeData(Array)`: 树形数据

`search(String)`: 搜索的文字

`[options](Object)`: 配置项

`[options.childrenKeyName='children'](String)`: 子数据的 key，默认为'children'

`[options.searchKeyName='title'](String)`: 要搜索的字段，默认为 title

## 返回值

`treelikeData(Array)`: 树形数据

## 使用

```js
const treeData = [
  { key: '1', title: 'layer1' },
  {
    key: '2',
    title: '2',
    children: [
      { key: '2-1', title: '2-1' },
      {
        key: '2-2',
        title: '2-2',
        children: [{ key: '2-2-1', title: '2-2-1' }],
      },
      {
        key: '2-3',
        title: 'layer2-3',
      },
    ],
  },
];

findSearchData(treeData, 'lay')

// [
//   { key: '1', title: 'layer1' },
//   { key: '2', title: '2', children: [{ key: '2-3', title: 'layer2-3' }] },
// ]

```