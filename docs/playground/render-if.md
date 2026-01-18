---
title: RenderIf Demos
order: 2
---

# RenderIf Demos

Interactive demos for the RenderIf component.

## Basic Conditional Rendering

```tsx | demo
import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      <h3>Toggle Message</h3>
      <button
        onClick={() => setShowMessage(!showMessage)}
        style={{
          padding: '8px 16px',
          marginBottom: '12px',
          background: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {showMessage ? 'Hide' : 'Show'} Message
      </button>

      <RenderIf when={showMessage}>
        <div style={{
          padding: '12px',
          background: '#e6f7ff',
          border: '1px solid #91d5ff',
          borderRadius: '4px'
        }}>
          This message is shown when showMessage is true!
        </div>
      </RenderIf>
    </div>
  );
};
```

## If/Else Pattern

```tsx | demo
import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>Authentication State</h3>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          padding: '8px 16px',
          marginBottom: '12px',
          background: isLoggedIn ? '#52c41a' : '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <RenderIf when={isLoggedIn}>
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px'
        }}>
          Welcome back! You are logged in.
        </div>
        <div style={{
          padding: '16px',
          background: '#fff1f0',
          border: '1px solid #ffa39e',
          borderRadius: '4px'
        }}>
          Please log in to continue.
        </div>
      </RenderIf>
    </div>
  );
};
```

## Multiple Conditions

```tsx | demo
import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [role, setRole] = useState('guest');

  return (
    <div>
      <h3>User Role Display</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setRole('admin')} style={{ marginRight: '8px' }}>Admin</button>
        <button onClick={() => setRole('user')} style={{ marginRight: '8px' }}>User</button>
        <button onClick={() => setRole('guest')}>Guest</button>
      </div>

      <RenderIf when={role === 'admin'}>
        <div style={{
          padding: '16px',
          background: '#fff7e6',
          border: '2px solid #fa8c16',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}>
          Admin Panel - Full Access
        </div>
      </RenderIf>

      <RenderIf when={role === 'user'}>
        <div style={{
          padding: '16px',
          background: '#e6f7ff',
          border: '2px solid #1890ff',
          borderRadius: '4px'
        }}>
          User Dashboard - Limited Access
        </div>
      </RenderIf>

      <RenderIf when={role === 'guest'}>
        <div style={{
          padding: '16px',
          background: '#f5f5f5',
          borderRadius: '4px'
        }}>
          Guest View - Please Log In
        </div>
      </RenderIf>
    </div>
  );
};
```

## Loading States

```tsx | demo
import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData({ name: 'John Doe', email: 'john@example.com' });
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <h3>Data Fetching</h3>
      <button
        onClick={fetchData}
        disabled={loading}
        style={{
          padding: '8px 16px',
          marginBottom: '12px',
          background: loading ? '#d9d9d9' : '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      <RenderIf when={loading}>
        <div style={{ padding: '12px', color: '#1890ff' }}>Loading data...</div>
      </RenderIf>

      <RenderIf when={data}>
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px'
        }}>
          <div><strong>Name:</strong> {data?.name}</div>
          <div><strong>Email:</strong> {data?.email}</div>
        </div>
      </RenderIf>
    </div>
  );
};
```

## Feature Toggles

```tsx | demo
import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [features, setFeatures] = useState({
    darkMode: false,
    notifications: true,
    autoSave: false
  });

  const toggle = (key) => {
    setFeatures({ ...features, [key]: !features[key] });
  };

  return (
    <div>
      <h3>Feature Settings</h3>
      {Object.entries(features).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={value}
              onChange={() => toggle(key)}
            />
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
          </label>

          <RenderIf when={value}>
            <div style={{
              marginLeft: '24px',
              padding: '8px',
              background: '#f6ffed',
              border: '1px solid #b7eb8f',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              {key} is enabled
            </div>
          </RenderIf>
        </div>
      ))}
    </div>
  );
};
```
