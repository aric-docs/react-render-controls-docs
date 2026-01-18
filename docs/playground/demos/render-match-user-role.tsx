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
