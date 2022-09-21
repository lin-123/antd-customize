---
order: 1
---

# 组件概览

## Button

这是一个自定义按钮的样例， 修改了 classname 前缀， button 边框变红色

```jsx
import React from 'react';
import { Button, ConfigProvider } from 'antd-customize';

ConfigProvider.config({
  prefixCls: 'x',
});
export default () => {
  return (
    <ConfigProvider prefixCls="x">
      <Button>自定义button</Button>
    </ConfigProvider>
  );
};
```

<!-- <code src="./gallery.tsx"></code> -->
