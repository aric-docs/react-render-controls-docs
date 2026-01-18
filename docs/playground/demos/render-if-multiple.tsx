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
