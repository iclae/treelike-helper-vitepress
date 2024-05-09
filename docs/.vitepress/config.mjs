import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/treelike-helper-vitepress/',
  title: "treelike-helper",
  description: "树形嵌套数据处理工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/introduction' },
      { text: '更新日志', link: '/changelog' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/introduction' },
          { text: '使用', link: '/usage' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'addData', link: '/API/addData' },
          { text: 'deleteData', link: '/API/deleteData' },
          { text: 'updateData', link: '/API/updateData' },
          { text: 'updateThroughData', link: '/API/updateThroughData' },
          { text: 'mapTreeData', link: '/API/mapTreeData' },
          { text: 'filterTreeData', link: '/API/filterTreeData' },
          { text: 'mapFilterTreeData', link: '/API/mapFilterTreeData' },
          { text: 'findKeyPath', link: '/API/findKeyPath' },
          { text: 'findData', link: '/API/findData' },
          { text: 'findParentData', link: '/API/findParentData' },
          { text: 'findSearchData', link: '/API/findSearchData' },
          { text: 'getFieldValues', link: '/API/getFieldValues' },
          { text: 'getFieldValueSet', link: '/API/getFieldValueSet' },
          { text: 'caculateLeafCount', link: '/API/caculateLeafCount' },
          { text: 'countNestedLayers', link: '/API/countNestedLayers' },
        ]
      },
      {
        text: '更新日志',
        link: '/changelog'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iclae/treelike-helper' }
    ]
  }
})
