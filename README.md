# find-react-theme-cityos

> find-react 自定义主题开发

## TODO

- [x] theme 覆盖 antd 原始样式
  - 当前这种方式就可以
- [ ] 完整引用直接引用整体包
- [ ] 按需的直接发 src 发不上去就行
- [ ] 弄个脚本， figma 样式转成组件变量
  - [ ] figma 导出所有变量， 生成全局变量
  - [ ] figma 导出组件样式， 输出到主题库
  - [ ] 命名约束 - 组件有固定命名
- [ ] 使用手册
  - 修改全局样式变量
  - 修改一个组件样式
  - 主题发布
  - 在项目中使用

## BACKLOG

- [ ] 本项目扩展到代码逻辑层的覆盖， 做个代理项目
  - 继承 antd 所有功能
  - 扩展组件通过重写或继承方式实现
  - 新增组件放在代理项目

## 设计方式

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```
