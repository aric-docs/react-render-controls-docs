---
title: RenderList Demos
order: 2
---

# RenderList Demos

Interactive demos for the RenderList component.

## Basic List Rendering

```tsx | demo
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
```

## List with Index

```tsx | demo
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
```

## Object List

```tsx | demo
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
```

## Interactive List

```tsx | demo
import { RenderList } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Task 1', done: false },
    { id: 2, text: 'Task 2', done: true },
    { id: 3, text: 'Task 3', done: false }
  ]);

  const toggle = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <RenderList
        items={items}
        render={(item) => (
          <div style={{
            padding: '8px',
            margin: '4px 0',
            background: item.done ? '#f6ffed' : '#fff',
            border: `1px solid ${item.done ? '#b7eb8f' : '#d9d9d9'}`,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => toggle(item.id)}
        />
        <span style={{
          textDecoration: item.done ? 'line-through' : 'none',
          opacity: item.done ? 0.6 : 1
        }}>
          {item.text}
        </span>
          </div>
        )}
        keyBy="id"
      />
    </div>
  );
};
```

## Accessing All Items

```tsx | demo
import { RenderList } from '@jswork/react-render-controls';

export default () => {
  const scores = [85, 92, 78, 95, 88];

  return (
    <div>
      <h3>Scores with Average</h3>
      <RenderList
        items={scores}
        render={(score, index, items) => {
          const average = items.reduce((a, b) => a + b, 0) / items.length;
          return (
            <div style={{
              padding: '8px',
              margin: '4px 0',
              background: score > average ? '#f6ffed' : '#fff1f0',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>Score {index + 1}</span>
              <span style={{
                fontWeight: score > average ? 'bold' : 'normal'
              }}>
                {score}
              </span>
            </div>
          );
        }}
      />
      <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
        Average: {(scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)}
      </div>
    </div>
  );
};
```

## Component Style Rendering

```tsx | demo
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
```
