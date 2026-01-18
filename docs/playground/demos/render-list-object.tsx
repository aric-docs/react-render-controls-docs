import { RenderList } from '@jswork/react-render-controls';

export default () => {
  const users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'User' }
  ];

  return (
    <div>
      <h3>User List</h3>
      <RenderList
        items={users}
        render={(user) => (
          <div style={{
            padding: '12px',
            margin: '8px 0',
            background: '#fafafa',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>{user.name}</span>
            <span style={{
              padding: '2px 8px',
              background: user.role === 'Admin' ? '#fff1f0' : '#e6f7ff',
              color: user.role === 'Admin' ? '#cf1322' : '#0958d9',
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              {user.role}
            </span>
          </div>
        )}
        keyBy="id"
      />
    </div>
  );
};
