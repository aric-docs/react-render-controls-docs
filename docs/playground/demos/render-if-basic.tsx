import { RenderIf } from '@jswork/react-render-controls';
import React, { useState } from 'react';

export default () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      <h3>Toggle Message</h3>
      <button
        onClick={() => setShowMessage(!showMessage)}
        style={{
          padding: '8px 16px',
          marginBottom: '12px',
          background: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {showMessage ? 'Hide' : 'Show'} Message
      </button>

      <RenderIf when={showMessage}>
        <div
          style={{
            padding: '12px',
            background: '#e6f7ff',
            border: '1px solid #91d5ff',
            borderRadius: '4px',
          }}
        >
          This message is shown when showMessage is true!
        </div>
      </RenderIf>
    </div>
  );
};
