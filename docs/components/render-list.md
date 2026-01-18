---
title: RenderList
order: 0
---

# RenderList

Declarative list rendering with support for both function and component-based rendering patterns.

## Features

- **Function-style rendering**: `(item, index, items) => ReactNode`
- **Component-style rendering**: Automatic prop mapping
- **Custom key generation**: Multiple strategies for unique keys
- **Full context access**: Index and full items array available

## Basic Usage

### Function Style

```tsx
import { RenderList } from '@jswork/react-render-controls';

function UserList({ users }) {
  return (
    <RenderList
      items={users}
      render={(user) => <UserCard user={user} />}
      keyBy="id"
    />
  );
}
```

### Component Style

```tsx
<RenderList
  items={users}
  render={{
    component: UserCard,
    dataKey: "user",
    props: { variant: 'compact' }
  }}
  keyBy="id"
/>
```

### With Index and Items

```tsx
<RenderList
  items={users}
  render={(user, index, items) => (
    <div>
      {index + 1} / {items.length}: {user.name}
    </div>
  )}
/>
```

## API

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | `readonly T[]` | Yes | - | The data array to render |
| `render` | `RenderProp<T>` | Yes | - | Function or component config for rendering each item |
| `keyBy` | `KeyBy<T>` | No | - | Strategy for generating unique keys |

### Types

```tsx
type RenderFn<T> = (item: T, index: number, items: readonly T[]) => ReactNode;

interface RenderComponentConfig<P> {
  component: ElementType<P & { children?: ReactNode }>;
  dataKey?: string;
  props?: P;
}

type RenderProp<T> = RenderFn<T> | RenderComponentConfig<any>;

type KeyBy<T> = keyof T | ((item: T) => string);
```

## Examples

### Rendering a Simple List

```tsx
const fruits = ['Apple', 'Banana', 'Cherry'];

<RenderList
  items={fruits}
  render={(fruit) => <li>{fruit}</li>}
/>
```

### Rendering Objects

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

<RenderList
  items={users}
  render={(user) => (
    <div key={user.id}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )}
  keyBy="id"
/>
```

### Using Custom Key Function

```tsx
<RenderList
  items={users}
  render={(user) => <UserCard user={user} />}
  keyBy={(user) => `user-${user.id}`}
/>
```

### Component Style with Additional Props

```tsx
interface UserCardProps {
  user: User;
  variant: 'compact' | 'detailed';
  onEdit: (id: number) => void;
}

<RenderList
  items={users}
  render={{
    component: UserCard,
    dataKey: "user",
    props: {
      variant: 'compact',
      onEdit: handleEdit
    }
  }}
  keyBy="id"
/>
```

### Accessing Index

```tsx
<RenderList
  items={users}
  render={(user, index) => (
    <div className={index % 2 === 0 ? 'even' : 'odd'}>
      {index + 1}. {user.name}
    </div>
  )}
/>
```

### Accessing Full Items Array

```tsx
<RenderList
  items={numbers}
  render={(num, index, items) => {
    const total = items.reduce((sum, n) => sum + n, 0);
    const percentage = (num / total) * 100;
    return <ProgressBar value={percentage} />;
  }}
/>
```

## Notes

- The `keyBy` prop is recommended for proper React reconciliation
- When using component-style rendering, `dataKey` specifies which prop receives the item data
- The function render style provides more flexibility for complex scenarios
