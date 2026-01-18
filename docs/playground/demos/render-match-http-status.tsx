import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [statusCode, setStatusCode] = useState('200');

  return (
    <div>
      <h3>HTTP Response</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setStatusCode('200')} style={{ marginRight: '8px' }}>200 OK</button>
        <button onClick={() => setStatusCode('201')} style={{ marginRight: '8px' }}>201 Created</button>
        <button onClick={() => setStatusCode('400')} style={{ marginRight: '8px' }}>400 Bad</button>
        <button onClick={() => setStatusCode('401')} style={{ marginRight: '8px' }}>401 Unauthorized</button>
        <button onClick={() => setStatusCode('404')} style={{ marginRight: '8px' }}>404 Not Found</button>
        <button onClick={() => setStatusCode('500')}>500 Error</button>
      </div>

      <RenderMatch
        value={statusCode}
        items={[
          ['200', '201'],
          ['400', '401', '403', '404'],
          ['500', '502', '503']
        ]}
      >
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px',
          color: '#389e0d'
        }}>
          Success - Request completed successfully
        </div>
        <div style={{
          padding: '16px',
          background: '#fff7e6',
          border: '1px solid #ffd591',
          borderRadius: '4px',
          color: '#d46b08'
        }}>
          Client Error - Invalid request
        </div>
        <div style={{
          padding: '16px',
          background: '#fff1f0',
          border: '1px solid #ffa39e',
          borderRadius: '4px',
          color: '#cf1322'
        }}>
          Server Error - Something went wrong
        </div>
      </RenderMatch>
    </div>
  );
};
