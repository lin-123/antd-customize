---
order: 1
---

# 组件概览

```jsx
/**
 * title: Button
 * description: 这是一个自定义按钮的样例， 修改了 classname 前缀， button 边框变红色
 */
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

```tsx
/**
 * title: Affix
 */
import { Affix, Button } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};

export default App;
```

```tsx
/**
 * title: Breadcrumb
 */

import { Breadcrumb } from 'antd-customize';
import React from 'react';

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);

export default App;
```

```tsx
/**
 * title: Dropdown
 */
import { Button, Dropdown, Menu, Space } from 'antd-customize';
import React from 'react';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const App: React.FC = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottom">
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>bottomRight</Button>
      </Dropdown>
    </Space>
    <Space wrap>
      <Dropdown overlay={menu} placement="topLeft">
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="top">
        <Button>top</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topRight">
        <Button>topRight</Button>
      </Dropdown>
    </Space>
  </Space>
);

export default App;
```

<!-- <code src="./gallery.tsx"></code> -->
