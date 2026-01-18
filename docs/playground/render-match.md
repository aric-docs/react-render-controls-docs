---
title: RenderMatch Demos
order: 3
---

# RenderMatch Demos

Interactive demos for the RenderMatch component.

## Basic Status Matching

```tsx | demo
import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [status, setStatus] = useState('pending');

  return (
    <div>
      <h3>Order Status</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setStatus('pending')} style={{ marginRight: '8px' }}>Pending</button>
        <button onClick={() => setStatus('processing')} style={{ marginRight: '8px' }}>Processing</button>
        <button onClick={() => setStatus('shipped')} style={{ marginRight: '8px' }}>Shipped</button>
        <button onClick={() => setStatus('delivered')} style={{ marginRight: '8px' }}>Delivered</button>
        <button onClick={() => setStatus('failed')}>Failed</button>
      </div>

      <RenderMatch value={status} items={['pending', 'processing', 'shipped', 'delivered', 'failed']}>
        <div style={{ padding: '12px', background: '#fff7e6', borderRadius: '4px' }}>
          <strong>Pending</strong> - Your order is waiting to be processed
        </div>
        <div style={{ padding: '12px', background: '#e6f7ff', borderRadius: '4px' }}>
          <strong>Processing</strong> - Your order is being prepared
        </div>
        <div style={{ padding: '12px', background: '#f0f5ff', borderRadius: '4px' }}>
          <strong>Shipped</strong> - Your order is on its way
        </div>
        <div style={{ padding: '12px', background: '#f6ffed', borderRadius: '4px' }}>
          <strong>Delivered</strong> - Your order has arrived!
        </div>
        <div style={{ padding: '12px', background: '#fff1f0', borderRadius: '4px' }}>
          <strong>Failed</strong> - There was an issue with your order
        </div>
      </RenderMatch>
    </div>
  );
};
```

## Multiple Values Per Match

```tsx | demo
import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [priority, setPriority] = useState('medium');

  return (
    <div>
      <h3>Task Priority</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setPriority('low')} style={{ marginRight: '8px' }}>Low</button>
        <button onClick={() => setPriority('normal')} style={{ marginRight: '8px' }}>Normal</button>
        <button onClick={() => setPriority('medium')} style={{ marginRight: '8px' }}>Medium</button>
        <button onClick={() => setPriority('high')}>High</button>
      </div>

      <RenderMatch
        value={priority}
        items={[
          ['low', 'normal'],
          ['medium', 'high']
        ]}
      >
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px'
        }}>
          Normal Priority - No immediate action required
        </div>
        <div style={{
          padding: '16px',
          background: '#fff7e6',
          border: '1px solid #ffd591',
          borderRadius: '4px'
        }}>
          High Priority - Urgent attention needed
        </div>
      </RenderMatch>
    </div>
  );
};
```

## HTTP Status Codes

```tsx | demo
import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [statusCode, setStatusCode] = useState('200');

  return (
    <div>
      <h3>HTTP Response</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setStatusCode('200')} style={{ marginRight: '8px' }}>200 OK</button>
        <button onClick={() => setStatusCode('201')} style={{ marginRight: '8px' }}>201 Created</button>
        <button onClick={() => setStatusCode('400')} style={{ marginRight: '8px' }}>400 Bad</button>
        <button onClick={() => setStatusCode('401')} style={{ marginRight: '8px' }}>401 Unauthorized</button>
        <button onClick={() => setStatusCode('404')} style={{ marginRight: '8px' }}>404 Not Found</button>
        <button onClick={() => setStatusCode('500')}>500 Error</button>
      </div>

      <RenderMatch
        value={statusCode}
        items={[
          ['200', '201'],
          ['400', '401', '403', '404'],
          ['500', '502', '503']
        ]}
      >
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px',
          color: '#389e0d'
        }}>
          Success - Request completed successfully
        </div>
        <div style={{
          padding: '16px',
          background: '#fff7e6',
          border: '1px solid #ffd591',
          borderRadius: '4px',
          color: '#d46b08'
        }}>
          Client Error - Invalid request
        </div>
        <div style={{
          padding: '16px',
          background: '#fff1f0',
          border: '1px solid #ffa39e',
          borderRadius: '4px',
          color: '#cf1322'
        }}>
          Server Error - Something went wrong
        </div>
      </RenderMatch>
    </div>
  );
};
```

## Theme Variant Selector

```tsx | demo
import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <h3>Theme Selector</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setTheme('light')} style={{ marginRight: '8px' }}>Light</button>
        <button onClick={() => setTheme('dark')} style={{ marginRight: '8px' }}>Dark</button>
        <button onClick={() => setTheme('auto')}>Auto</button>
      </div>

      <RenderMatch value={theme} items={['light', 'dark', 'auto']}>
        <div style={{
          padding: '24px',
          background: '#ffffff',
          border: '1px solid #d9d9d9',
          borderRadius: '8px',
          color: '#000000'
        }}>
          <strong>Light Theme</strong>
          <p>Clean and bright interface</p>
        </div>
        <div style={{
          padding: '24px',
          background: '#1f1f1f',
          border: '1px solid #434343',
          borderRadius: '8px',
          color: '#ffffff'
        }}>
          <strong>Dark Theme</strong>
          <p>Easy on the eyes</p>
        </div>
        <div style={{
          padding: '24px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '8px',
          color: '#ffffff'
        }}>
          <strong>Auto Theme</strong>
          <p>Follows system preference</p>
        </div>
      </RenderMatch>
    </div>
  );
};
```

## User Role Badges

```tsx | demo
import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [role, setRole] = useState('member');

  return (
    <div>
      <h3>User Role Badge</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setRole('owner')} style={{ marginRight: '8px' }}>Owner</button>
        <button onClick={() => setRole('admin')} style={{ marginRight: '8px' }}>Admin</button>
        <button onClick={() => setRole('moderator')} style={{ marginRight: '8px' }}>Moderator</button>
        <button onClick={() => setRole('member')}>Member</button>
      </div>

      <div style={{ display: 'inline-block' }}>
        <RenderMatch
          value={role}
          items={[
            ['owner', 'admin'],
            ['moderator', 'editor'],
            'member'
          ]}
        >
          <div style={{
            padding: '8px 16px',
            background: '#fff1f0',
            border: '1px solid #ffa39e',
            borderRadius: '20px',
            color: '#cf1322',
            fontWeight: 'bold'
          }}>
            ADMINISTRATOR
          </div>
          <div style={{
            padding: '8px 16px',
            background: '#fff7e6',
            border: '1px solid #ffd591',
            borderRadius: '20px',
            color: '#d46b08',
            fontWeight: 'bold'
          }}>
            MODERATOR
          </div>
          <div style={{
            padding: '8px 16px',
            background: '#e6f7ff',
            border: '1px solid #91d5ff',
            borderRadius: '20px',
            color: '#0958d9'
          }}>
            MEMBER
          </div>
        </RenderMatch>
      </div>
    </div>
  );
};
```
