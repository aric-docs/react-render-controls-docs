import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = () => {
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div>
      <h3>Form States</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setFormState('idle')} style={{ marginRight: '8px' }}>Idle</button>
        <button onClick={() => setFormState('validating')} style={{ marginRight: '8px' }}>Validating</button>
        <button onClick={() => setFormState('submitting')} style={{ marginRight: '8px' }}>Submitting</button>
        <button onClick={() => setFormState('success')}>Success</button>
      </div>

      <RenderSwitch
        cases={[formState === 'validating', formState === 'submitting', formState === 'success']}
        fallback={
          <div style={{
            padding: '20px',
            background: '#fafafa',
            border: '1px solid #d9d9d9',
            borderRadius: '4px'
          }}>
            <p>Fill out the form and submit</p>
            <button
              onClick={handleSubmit}
              style={{ padding: '8px 16px', background: '#1890ff', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Submit
            </button>
          </div>
        }
      >
        <div style={{
          padding: '20px',
          background: '#e6f7ff',
          border: '1px solid #91d5ff',
          borderRadius: '4px'
        }}>
          <p>Validating form data...</p>
        </div>
        <div style={{
          padding: '20px',
          background: '#f0f5ff',
          border: '1px solid #adc6ff',
          borderRadius: '4px'
        }}>
          <p>Submitting your information...</p>
        </div>
        <div style={{
          padding: '20px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px',
          color: '#389e0d'
        }}>
          <strong>Success!</strong>
          <p>Your form has been submitted successfully.</p>
        </div>
      </RenderSwitch>
    </div>
  );
};
