import { RenderList } from '@jswork/react-render-controls';

export default () => {
  const items = ['First', 'Second', 'Third'];

  return (
    <div>
      <h3>Numbered List</h3>
      <RenderList
        items={items}
        render={(item, index) => (
          <div style={{ display: 'flex', gap: '12px', margin: '8px 0' }}>
            <span style={{
              fontWeight: 'bold',
              color: '#1890ff',
              minWidth: '24px'
            }}>
              {index + 1}.
            </span>
            <span>{item}</span>
          </div>
        )}
      />
    </div>
  );
};
