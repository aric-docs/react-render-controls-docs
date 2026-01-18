---
title: RenderSwitch Demos
order: 4
---

# RenderSwitch Demos

Interactive demos for the RenderSwitch component.

## Basic Switch

```tsx | demo
import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [view, setView] = useState('grid');

  return (
    <div>
      <h3>View Toggle</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setView('grid')} style={{ marginRight: '8px' }}>Grid</button>
        <button onClick={() => setView('list')}>List</button>
      </div>

      <RenderSwitch cases={[view === 'grid', view === 'list']}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px'
        }}>
          {[1, 2, 3, 4, 5, 6].map(n => (
            <div key={n} style={{
              padding: '16px',
              background: '#f0f0f0',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              Item {n}
            </div>
          ))}
        </div>
        <div>
          {[1, 2, 3, 4, 5, 6].map(n => (
            <div key={n} style={{
              padding: '8px',
              borderBottom: '1px solid #d9d9d9'
            }}>
              Item {n}
            </div>
          ))}
        </div>
      </RenderSwitch>
    </div>
  );
};
```

## Permission Levels

```tsx | demo
import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [permission, setPermission] = useState('read');

  return (
    <div>
      <h3>Permission System</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setPermission('none')} style={{ marginRight: '8px' }}>None</button>
        <button onClick={() => setPermission('read')} style={{ marginRight: '8px' }}>Read</button>
        <button onClick={() => setPermission('write')} style={{ marginRight: '8px' }}>Write</button>
        <button onClick={() => setPermission('admin')}>Admin</button>
      </div>

      <RenderSwitch
        cases={[permission === 'admin', permission === 'write', permission === 'read']}
        fallback={
          <div style={{
            padding: '16px',
            background: '#f5f5f5',
            border: '1px solid #d9d9d9',
            borderRadius: '4px'
          }}>
            No Access - You don't have permission
          </div>
        }
      >
        <div style={{
          padding: '16px',
          background: '#fff7e6',
          border: '2px solid #fa8c16',
          borderRadius: '4px'
        }}>
          <strong>Admin Access</strong>
          <p>Full control including user management</p>
        </div>
        <div style={{
          padding: '16px',
          background: '#e6f7ff',
          border: '2px solid #1890ff',
          borderRadius: '4px'
        }}>
          <strong>Write Access</strong>
          <p>Can create and edit content</p>
        </div>
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '2px solid #52c41a',
          borderRadius: '4px'
        }}>
          <strong>Read Access</strong>
          <p>View only permission</p>
        </div>
      </RenderSwitch>
    </div>
  );
};
```

## Connection Status

```tsx | demo
import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [status, setStatus] = useState('disconnected');

  return (
    <div>
      <h3>Connection Status</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setStatus('connected')} style={{ marginRight: '8px' }}>Connected</button>
        <button onClick={() => setStatus('connecting')} style={{ marginRight: '8px' }}>Connecting</button>
        <button onClick={() => setStatus('disconnected')} style={{ marginRight: '8px' }}>Disconnected</button>
        <button onClick={() => setStatus('error')}>Error</button>
      </div>

      <RenderSwitch
        cases={[status === 'connected', status === 'connecting', status === 'error']}
        fallback={
          <div style={{
            padding: '12px',
            background: '#f5f5f5',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ color: '#8c8c8c' }}>●</span>
            Disconnected
          </div>
        }
      >
        <div style={{
          padding: '12px',
          background: '#f6ffed',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ color: '#52c41a' }}>●</span>
          Connected - Ready to use
        </div>
        <div style={{
          padding: '12px',
          background: '#e6f7ff',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ color: '#1890ff', animation: 'pulse 1s infinite' }}>●</span>
          Connecting...
        </div>
        <div style={{
          padding: '12px',
          background: '#fff1f0',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ color: '#ff4d4f' }}>●</span>
          Error - Connection failed
        </div>
      </RenderSwitch>
    </div>
  );
};
```

## Form Validation States

```tsx | demo
import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = () => {
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div>
      <h3>Form States</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setFormState('idle')} style={{ marginRight: '8px' }}>Idle</button>
        <button onClick={() => setFormState('validating')} style={{ marginRight: '8px' }}>Validating</button>
        <button onClick={() => setFormState('submitting')} style={{ marginRight: '8px' }}>Submitting</button>
        <button onClick={() => setFormState('success')}>Success</button>
      </div>

      <RenderSwitch
        cases={[formState === 'validating', formState === 'submitting', formState === 'success']}
        fallback={
          <div style={{
            padding: '20px',
            background: '#fafafa',
            border: '1px solid #d9d9d9',
            borderRadius: '4px'
          }}>
            <p>Fill out the form and submit</p>
            <button
              onClick={handleSubmit}
              style={{ padding: '8px 16px', background: '#1890ff', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Submit
            </button>
          </div>
        }
      >
        <div style={{
          padding: '20px',
          background: '#e6f7ff',
          border: '1px solid #91d5ff',
          borderRadius: '4px'
        }}>
          <p>Validating form data...</p>
        </div>
        <div style={{
          padding: '20px',
          background: '#f0f5ff',
          border: '1px solid #adc6ff',
          borderRadius: '4px'
        }}>
          <p>Submitting your information...</p>
        </div>
        <div style={{
          padding: '20px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px',
          color: '#389e0d'
        }}>
          <strong>Success!</strong>
          <p>Your form has been submitted successfully.</p>
        </div>
      </RenderSwitch>
    </div>
  );
};
```

## Device Type Detection

```tsx | demo
import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [device, setDevice] = useState('desktop');

  return (
    <div>
      <h3>Responsive Layout</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setDevice('mobile')} style={{ marginRight: '8px' }}>Mobile</button>
        <button onClick={() => setDevice('tablet')} style={{ marginRight: '8px' }}>Tablet</button>
        <button onClick={() => setDevice('desktop')}>Desktop</button>
      </div>

      <RenderSwitch
        cases={[device === 'mobile', device === 'tablet']}
        fallback={
          <div style={{
            padding: '24px',
            background: '#f0f5ff',
            border: '2px solid #597ef7',
            borderRadius: '8px'
          }}>
            <h4>Desktop Layout</h4>
            <p>Multi-column layout with full navigation</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 1</div>
              <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 2</div>
              <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 3</div>
            </div>
          </div>
        }
      >
        <div style={{
          padding: '24px',
          background: '#fff7e6',
          border: '2px solid #ffa940',
          borderRadius: '8px',
          maxWidth: '375px'
        }}>
          <h4>Mobile Layout</h4>
          <p>Single column with hamburger menu</p>
          <div style={{ marginTop: '12px' }}>
            <div style={{ padding: '12px', background: 'white', borderRadius: '4px', marginBottom: '8px' }}>Row 1</div>
            <div style={{ padding: '12px', background: 'white', borderRadius: '4px', marginBottom: '8px' }}>Row 2</div>
            <div style={{ padding: '12px', background: 'white', borderRadius: '4px' }}>Row 3</div>
          </div>
        </div>
        <div style={{
          padding: '24px',
          background: '#f6ffed',
          border: '2px solid #95de64',
          borderRadius: '8px',
          maxWidth: '768px'
        }}>
          <h4>Tablet Layout</h4>
          <p>Two-column layout</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 1</div>
            <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 2</div>
          </div>
        </div>
      </RenderSwitch>
    </div>
  );
};
```

## Time-based Greeting

```tsx | demo
import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [hour, setHour] = useState(10);

  return (
    <div>
      <h3>Time-based Greeting</h3>
      <div style={{ marginBottom: '16px' }}>
        <label>Hour: {hour}:00</label>
        <input
          type="range"
          min="0"
          max="23"
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
          style={{ width: '100%', marginTop: '8px' }}
        />
        <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
          <button onClick={() => setHour(6)} style={{ marginRight: '8px' }}>6 AM</button>
          <button onClick={() => setHour(12)} style={{ marginRight: '8px' }}>12 PM</button>
          <button onClick={() => setHour(18)}>6 PM</button>
        </div>
      </div>

      <RenderSwitch
        cases={[
          hour >= 5 && hour < 12,
          hour >= 12 && hour < 18,
          hour >= 18 && hour < 22
        ]}
        fallback={
          <div style={{
            padding: '24px',
            background: '#1f1f1f',
            color: 'white',
            borderRadius: '8px'
          }}>
            <h2>Good Night</h2>
            <p>It's {hour}:00 o'clock. Time to rest!</p>
          </div>
        }
      >
        <div style={{
          padding: '24px',
          background: '#fff7e6',
          borderRadius: '8px'
        }}>
          <h2>Good Morning</h2>
          <p>It's {hour}:00 AM. Have a great day!</p>
        </div>
        <div style={{
          padding: '24px',
          background: '#f0f5ff',
          borderRadius: '8px'
        }}>
          <h2>Good Afternoon</h2>
          <p>It's {hour}:00 PM. Keep up the good work!</p>
        </div>
        <div style={{
          padding: '24px',
          background: '#f9f0ff',
          borderRadius: '8px'
        }}>
          <h2>Good Evening</h2>
          <p>It's {hour}:00 PM. Hope you had a productive day!</p>
        </div>
      </RenderSwitch>
    </div>
  );
};
```
