# ant.design customize

> 基于 antd 二开组件库

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

## how to use

in your project

#### install

```
npm install antd-customize
or
yarn add antd-customize
```

### import

add this line

```
import { Button, Breadcrumb, message, Popconfirm, Image, Divider } from 'antd-customize';
```

### generator 工具使用

作用：通过 node 快速读取 antd 组件列表，自动生成代理文件， 避免手动遍历

使用方式：每次更新 generator 代码后，node 运行代码，自动生成代理文件。

使用效果： 1.生成文件 src/components/xxx/index.js 以及 src/components/xxx/index.less，其中 index.js 中为统一导入 antd 对应组件的原生功能代码以及样式；index.less 中为便于为特定组件增加自定义样式。【 其中 xxx 代表 antd 中的各个组件名称 】 2.更新 src/index.ts，更新当前文件中包括的 antd 代理组件列表

更新方式：1.可以修改代理组件内统一显示内容 content，2.可以更改 代理文件 新增路径 3.为代理文件新增其他功能

### 二开使用指南

扩展组件可以通过继承或重写方式实现

1.继承方式
（1）在 src/components 中找到要扩展的组件，将待扩展的功能代码放置在 index.js，将自定义样式放置在 index.less 中；
（2）在 docs/antd.md 中引入组件进行功能以及样式测试。 2.重写方式/新增组件
（1）在 src/components 中创建组件名称文件夹，将重写/新增组件代码写在新建的 index.js 中
（2）在 src/index.ts 中导出重写/新增组件，例如 Affix 组件

```
  import Affix from './components/affix';
  export { Affix };
```

（3）在 docs/antd.md 中引入组件进行功能以及样式测试。
