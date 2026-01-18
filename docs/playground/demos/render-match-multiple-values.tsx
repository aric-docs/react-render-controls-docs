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
