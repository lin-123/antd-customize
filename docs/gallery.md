# preview

```tsx
import React from 'react';
import { Row, Col, Button, PageHeader, Card } from '@jd/find-react';

export default () => (
  <div>
    <Row>
      <Card>
        <Button type="primary">hello</Button> <Button type="info">hello</Button>{' '}
        <Button type="success">hello</Button>
      </Card>
    </Row>
    <Row>
      <PageHeader
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    </Row>
  </div>
);
```
