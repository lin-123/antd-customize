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

作用：快速读取 antd 组件列表，自动生成代理文件。

使用方式：generator.js 更新后，执行`node generator.js`，自动重新生成代理文件。

使用效果：1.生成文件 src/components/xxx/index.js 以及 ~/index.less，index.js 中是统一导入的 antd 对应组件的原生功能代码以及样式；index.less 可增加组件自定义样式。（xxx 为代理组件名称） 2.更新 src/index.ts，更新当前包括的 antd 代理组件列表

方法更新：1.可更改代理组件内统一显示内容 content 2.可更改代理文件新增路径 3.为代理文件新增其他功能

### 二开使用指南

扩展组件提供了两种方式，继承方式或重写方式。

1.继承方式
（1）在 src/components 中找到要扩展的组件，将待扩展的功能代码放置在 index.js，将自定义样式放置在 index.less 中；
（2）在 docs/antd.md 中引入组件进行功能以及样式测试。

2.重写方式/新增组件
（1）在 src/components 中创建组件名称文件夹，将重写/新增组件代码写在新建的 index.js 中
（2）在 src/index.ts 中导出重写/新增组件，例如 Affix 组件

```
  import Affix from './components/affix';
  export { Affix };
```

（3）在 docs/antd.md 中引入组件进行功能以及样式测试。
