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
            <div style={{ padding: '12px', background: 'white', borderRadius: '4px', marginBottom: '8px' }}>Row 3</div>
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
