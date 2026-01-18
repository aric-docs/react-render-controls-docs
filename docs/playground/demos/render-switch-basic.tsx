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
