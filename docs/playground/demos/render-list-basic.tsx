import { RenderList } from '@jswork/react-render-controls';

export default () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <div>
      <h3>Fruit List</h3>
      <RenderList
        items={fruits}
        render={(fruit) => (
          <div style={{
            padding: '8px 12px',
            margin: '4px 0',
            background: '#f0f0f0',
            borderRadius: '4px'
          }}>
            {fruit}
          </div>
        )}
      />
    </div>
  );
};
