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

### 工程目录

```
- src
  - index.ts
  - components // 组件列表， 对于需要改写样式的组件才需创建对应文件夹， 命名方式：小驼峰加中划线
    - affix
    - button // 按钮组件
      - index.less // 自定义组件样式， 怎么改都行
      - index.tsx // 样式入口文件
      - index.md  // demo 展示
  - style // 全局样式，改写 antd theme/default.less 样式变量
```

### 项目使用 - 按需引用使用方式

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

- mjd-config.js or webpack 配置 lessLoader 变量

```js
lessLoader: {
  modifyVars: {
    hack: `true;@import "${path.resolve(__dirname, 'src/style/index.less')}";`
  }
},
```
