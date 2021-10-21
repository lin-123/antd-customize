---
order: 1
---

# 组件概览

```tsx
import React from 'react';
import { Row, Col, Button, PageHeader, Card } from '@jd/find-react';

export default () => (
  <div>
    <h3>Button</h3>
    <Button type="primary">hello</Button>
    <h3>PageHeader</h3>
    <PageHeader
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
  </div>
);
```
