---
order: 2
---

# 更新日志

## BACKLOG

### 1.1.0

- [ ] 代码里引用 find-react 改成 antd

```js
// babel.config.js
{
 import: 'find-react-template',
  style:  true
  //  or  find-react-template/xx/less
}

// 项目文件
import { Button } from 'find-react-template'
```

- [ ] 本项目扩展到代码逻辑层的覆盖， 做个代理项目

  - 继承 antd 所有功能
    - [ ] 手动遍历 antd 组件，生成代理文件
    - [ ] node 读 antd 组件列表， 自动生成代理文件
  - 扩展组件通过重写或继承方式实现
  - 新增组件放在代理项目
  - [x] table 代理代码模板

- [x] 打包
  - 能按需打包组件

## 1.0.0

- [x] theme 覆盖 antd 原始样式
  - 当前这种方式就可以
- [x] 完整引用直接引用整体包
- [x] 按需的直接把 src 发布到 npm 就行
  - 方案一：
    - mv src lib
    - tsc build ts to js
  - 方案二： tsx 改成 js - 暂时用这个
- [x] 弄个脚本， figma 样式转成组件变量 推荐使用 Figma styles to CSV 插件
  - [x] figma 利用插件导导出所有变量，复制到<code>tool/figma.txt</code>中，执行 yarn figma 生成全局变量
  - [x] figma 导出组件样式， 输出到主题库
  - [x] 命名约束 - 组件有固定命名
  - [x] 有个组件概览，显示主题修改后的效果
- [x] 使用手册
  - 修改全局样式变量
  - 修改一个组件样式
  - 主题发布
  - 在项目中使用
