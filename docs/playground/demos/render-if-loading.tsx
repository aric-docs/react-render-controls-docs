import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData({ name: 'John Doe', email: 'john@example.com' });
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <h3>Data Fetching</h3>
      <button
        onClick={fetchData}
        disabled={loading}
        style={{
          padding: '8px 16px',
          marginBottom: '12px',
          background: loading ? '#d9d9d9' : '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      <RenderIf when={loading}>
        <div style={{ padding: '12px', color: '#1890ff' }}>Loading data...</div>
      </RenderIf>

      <RenderIf when={data}>
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px'
        }}>
          <div><strong>Name:</strong> {data?.name}</div>
          <div><strong>Email:</strong> {data?.email}</div>
        </div>
      </RenderIf>
    </div>
  );
};
