/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  techNoteSidebar: [
    {
      
      type: 'category',
      label: '🔗 學習拼圖',
      collapsed: false,
      items: [
        'learn/intro',
        {
          type: 'category',
          label: 'React 生態系',
          items: [
            'react/hooks',
            'react/useState', 
            'react/Redux-basic',
            'react/styled',
            'react/render-strategy',
            'react/tanstack-virtual',
          ]
        },
        {
          type: 'category',
          label: 'Vue 生態系',
          items: [
            'vue/Keywords',
            'vue/refactor',
            'vue/clitovite',
          ]
        },
        {
          type: 'category',
          label: 'JavaScript 奇奇怪怪',
          items: [
            'javascript/variable-declare',
            'javascript/scoped',
            'javascript/js-Destructuring',
            'javascript/promise',
            'javascript/[js]eventloop',
            'javascript/前端模組化'
          ]
        },
        {
          type: 'category',
          label: 'TypeScript',
          items: [
            'typescript/interface-vs-type',
            'typescript/generics'
          ]
        },
        {
          type: 'category',
          label: '工具鏈配置',
          items: [
            'webpack/手動打包vue專案認識webpack配置',
            'npm/package-lock.json 的功能',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '💻 開發工具',
      collapsed: true,
      items: [
        'tool/claudeInstall',
        'docker/常用指令',
        'tool/TCPIP',
        'thinking/超簡單實現 Obsidian 筆記即 Docusaurus 文章功能',
        'tool/git merge vs git rebase'
      ],
    }
    // {
    //   type: 'category',
    //   label: '🧠 思考中 ... ',
    //   collapsed: true,
    //   items: [
    //     // 'thinking/intro',
    //     // {
    //     //   type: 'category',
    //     //   label: '🏛️ 系統架構',
    //     //   items: [
    //     //     'react/structure',
    //     //     'react/render-system'
    //     //   ]
    //     // }
    //   ]
    // },
    // {
    //   type: 'category',
    //   label: '🛠️ 工具語法',
    //   collapsed: true,
    //   items: [
    //     'reference/intro',
    //     {
    //       type: 'category',
    //       label: '🎨 樣式技術',
    //       items: [
    //         'css/tailwindcss',
    //         'css/pug'
    //       ]
    //     },
       
    //     {
    //       type: 'category',
    //       label: '🧪 測試策略',
    //       items: [
    //         'tests/summer-book',
    //         'tests/vitest'
    //       ]
    //     },
    //     {
    //       type: 'category',
    //       label: '🌐 網路基礎',
    //       items: [
    //         'internet/http',
    //         'internet/sop'
    //       ]
    //     },
    //     {
    //       type: 'category',
    //       label: '🖥️ 後端開發',
    //       items: [
    //         'Javascript/Express筆記'
    //       ]
    //     }
    //   ]
    // }
  ]
};

export default sidebars;
