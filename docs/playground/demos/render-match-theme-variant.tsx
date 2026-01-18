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
