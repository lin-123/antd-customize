# antd-customize

> 基于 antd 二开组件库，低成本覆盖原始组件库的样式和功能，生产符合业务需要的组件库

## 快速开发

### 命令

- Install `$ yarn`
- Start the dev server `$ npm start`
- Build documentation `$ npm run docs:build`
- Build library `$ npm run build`

### 目录结构

```
- docs
  - CHANGELOG.md  // 更新日志
  - gallery.md  // 组件demo， 测试修改效果
- src
  - index.ts  // 入口
  - style
  - index.less  // 代理原组件库样式， 可覆盖主题
  - affix  // 被代理组件， 其他组件类似做法
  - index.tsx  // 代理原 affix 组件， 可重写组件功能
  - index.less  // 用户覆盖原组件库样式
- scripts
  - generator.js  // 初始化二开组件库， 根据 antd 暴露的属性批量生成代理组件
  - fixgma2css.js; // 读取 figma 主题变量生成本组件库 less 变量
```

### 批量初试组件库

- 追加 antd 更新 `node scripts/generator.js`
- 批量重置组件库 `node script/generator.js overwrite`

## 使用

平替 antd 代理 antd 的组件能力和样式， [详见](./gallery)

- install `npm install -S antd-customize` or `yarn add antd-customize`

- use

```
import { Button } from 'antd-customize';

export default function Demo({ onClick }) {
  return <Button onClick={onClick}>click me</Button>
}
```
