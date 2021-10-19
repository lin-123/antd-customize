# 快速上手

## 按需引用使用方式

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
