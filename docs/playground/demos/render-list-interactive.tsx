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
