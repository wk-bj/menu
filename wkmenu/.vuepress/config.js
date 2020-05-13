const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

const base = process.env.GH ? '/menu/' : '/';

module.exports = {
  title: 'B 端菜单组件',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.jpg` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'wk-bj/menu',
    editLinks: true,
    lastUpdated: '上次更新', // string | boolean
    searchMaxSuggestions: 5,
    docsDir: 'wkmenu',
    editLinkText: '公共组件！',
    sidebar: [
      '/',
      '/menu/zh-cn',
    ]
  }
};
