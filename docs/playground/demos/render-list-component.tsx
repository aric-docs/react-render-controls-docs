import { RenderList } from '@jswork/react-render-controls';

// Define a reusable card component
const UserCard = ({ user, variant = 'default' }) => {
  const styles = {
    default: {
      padding: '16px',
      margin: '8px 0',
      background: '#fafafa',
      border: '1px solid #d9d9d9',
      borderRadius: '8px'
    },
    compact: {
      padding: '8px 12px',
      margin: '4px 0',
      background: '#f5f5f5',
      border: '1px solid #e8e8e8',
      borderRadius: '4px'
    }
  };

  return (
    <div style={styles[variant]}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{user.name}</div>
      <div style={{ fontSize: '14px', color: '#666' }}>{user.email}</div>
      <div style={{ marginTop: '8px' }}>
        <span style={{
          padding: '2px 8px',
          background: '#e6f7ff',
          color: '#0958d9',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          {user.role}
        </span>
      </div>
    </div>
  );
};

export default () => {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Developer' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Designer' }
  ];

  return (
    <div>
      <h3>User Cards (Component Style)</h3>
      <RenderList
        items={users}
        render={{
          component: UserCard,
          dataKey: 'user',
          props: { variant: 'default' }
        }}
        keyBy="id"
      />
    </div>
  );
};
