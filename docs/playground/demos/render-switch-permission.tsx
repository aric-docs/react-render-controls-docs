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
