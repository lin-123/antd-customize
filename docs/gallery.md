# preview

```tsx
import React from 'react';
import { Row, Button, PageHeader } from '@jd/find-react';

export default () => (
  <Row>
    <Button type="primary">hello</Button>
    <PageHeader
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
  </Row>
);
```
