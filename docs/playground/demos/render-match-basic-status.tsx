import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [status, setStatus] = useState('pending');

  return (
    <div>
      <h3>Order Status</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setStatus('pending')} style={{ marginRight: '8px' }}>Pending</button>
        <button onClick={() => setStatus('processing')} style={{ marginRight: '8px' }}>Processing</button>
        <button onClick={() => setStatus('shipped')} style={{ marginRight: '8px' }}>Shipped</button>
        <button onClick={() => setStatus('delivered')} style={{ marginRight: '8px' }}>Delivered</button>
        <button onClick={() => setStatus('failed')}>Failed</button>
      </div>

      <RenderMatch value={status} items={['pending', 'processing', 'shipped', 'delivered', 'failed']}>
        <div style={{ padding: '12px', background: '#fff7e6', borderRadius: '4px' }}>
          <strong>Pending</strong> - Your order is waiting to be processed
        </div>
        <div style={{ padding: '12px', background: '#e6f7ff', borderRadius: '4px' }}>
          <strong>Processing</strong> - Your order is being prepared
        </div>
        <div style={{ padding: '12px', background: '#f0f5ff', borderRadius: '4px' }}>
          <strong>Shipped</strong> - Your order is on its way
        </div>
        <div style={{ padding: '12px', background: '#f6ffed', borderRadius: '4px' }}>
          <strong>Delivered</strong> - Your order has arrived!
        </div>
        <div style={{ padding: '12px', background: '#fff1f0', borderRadius: '4px' }}>
          <strong>Failed</strong> - There was an issue with your order
        </div>
      </RenderMatch>
    </div>
  );
};
