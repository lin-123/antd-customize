```tsx
import React, { useState } from 'react';
import { Affix, Button, Checkbox } from '@jd/find-react';

const Demo: React.FC = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  return (
    <div>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
          <Checkbox />
        </Button>
      </Affix>
      <br />
      <div style={{ height: '1200px' }}></div>
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </div>
  );
};
export default Demo;
```
