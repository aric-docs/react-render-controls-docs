import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [hour, setHour] = useState(10);

  return (
    <div>
      <h3>Time-based Greeting</h3>
      <div style={{ marginBottom: '16px' }}>
        <label>Hour: {hour}:00</label>
        <input
          type="range"
          min="0"
          max="23"
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
          style={{ width: '100%', marginTop: '8px' }}
        />
        <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
          <button onClick={() => setHour(6)} style={{ marginRight: '8px' }}>6 AM</button>
          <button onClick={() => setHour(12)} style={{ marginRight: '8px' }}>12 PM</button>
          <button onClick={() => setHour(18)}>6 PM</button>
        </div>
      </div>

      <RenderSwitch
        cases={[
          hour >= 5 && hour < 12,
          hour >= 12 && hour < 18,
          hour >= 18 && hour < 22
        ]}
        fallback={
          <div style={{
            padding: '24px',
            background: '#1f1f1f',
            color: 'white',
            borderRadius: '8px'
          }}>
            <h2>Good Night</h2>
            <p>It's {hour}:00 o'clock. Time to rest!</p>
          </div>
        }
      >
        <div style={{
          padding: '24px',
          background: '#fff7e6',
          borderRadius: '8px'
        }}>
          <h2>Good Morning</h2>
          <p>It's {hour}:00 AM. Have a great day!</p>
        </div>
        <div style={{
          padding: '24px',
          background: '#f0f5ff',
          borderRadius: '8px'
        }}>
          <h2>Good Afternoon</h2>
          <p>It's {hour}:00 PM. Keep up the good work!</p>
        </div>
        <div style={{
          padding: '24px',
          background: '#f9f0ff',
          borderRadius: '8px'
        }}>
          <h2>Good Evening</h2>
          <p>It's {hour}:00 PM. Hope you had a productive day!</p>
        </div>
      </RenderSwitch>
    </div>
  );
};
