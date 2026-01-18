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
