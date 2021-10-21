---
order: 0
---

# 首页

> find-react 自定义主题开发

## 快速上手

### 项目工程安装

- 复制模板工程 webcli find-react-theme-demo
  - [ ] 向 webcli 里加入 find-react-theme-demo
- npm i
- npm start
- 访问 http://localhost:8000

### 开发主题包

1. 工程目录

```
- src
  - index.ts
  - components // 组件列表， 对于需要改写样式的组件才需创建对应文件夹， 命名方式：小驼峰加中划线
    - button // 按钮组件
      - index.less // 自定义组件样式， 怎么改都行
      - index.tsx // 样式入口文件
      - index.md  // demo 展示
  - style // 全局样式，改写 antd theme/default.less 样式变量
  - tool // figma转化为css的工具
```

2. figma 转化为 css

- 在 figma 中 安装 [Figma styles to CSV](https://www.figma.com/community/plugin/955841494824331901/Figma-styles-to-CSV) 插件
- 在设计稿中，右键插件选`Figma styles to CSV` 插件，复制生成好的文本
- 粘贴在 `tool/figma.txt`中，ps:粘贴前先清空
- 检查 `tool/figmaMap.json`文件配置，每一个设计主题对应`find-react`里的基础主题色
- 执行 yarn figma
- 自动生成 css 内容并复制到`src/style/index.less` 文件中
  &emsp;

3. 访问组件概览 `http://localhost:8000/gallery` 预览修改的主题

### 项目使用

1. 安装依赖包 `npm i -S find-react-theme-<your theme name>`
1. 配置 lessLoader， 替换 find-react 默认样式
   ```js
   lessLoader: {
     // todo
     modifyVars: {
       hack: `true;@import '~find-react-theme-cityos/src/style/index.less';`
     }
   },
   ```
1. 全量引用， 项目入口文件出引用主题包

   ```js
   // app.js
   import React from 'react';
   import ReactDOM from 'react-dom';
   import 'find-react-theme-template';
   import { Button, PageHeader } from '@jd/find-react';

   ReactDOM.render(
     <div>
       <Button>======button======</Button>
       <PageHeader title="hhhhhhhh" />
     </div>,
     document.getElementById('root'),
   );
   ```

1. 按需引用使用方式

   - babel.config.js 引入 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

   ```js
   [
     'import',
     {
       libraryName: '@jd/find-react',
       customStyleName: name => {
         const cssPath = path.resolve(__dirname, `src/${name}`);
         if (fs.existsSync(cssPath)) { return cssPath; }
         return `@jd/find-react/lib/${name}/style`
       },
     },
     '@jd/find-react',
   ],
   ```
