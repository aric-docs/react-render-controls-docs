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
