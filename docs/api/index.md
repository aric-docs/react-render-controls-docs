---
title: API Reference
order: 0
---

# API Reference

Complete type definitions and API documentation for all components.

## Exports

```tsx
import {
  RenderList,
  RenderIf,
  RenderMatch,
  RenderSwitch
} from '@jswork/react-render-controls';

// Types
import type {
  RenderListProps,
  RenderIfProps,
  RenderMatchProps,
  RenderSwitchProps
} from '@jswork/react-render-controls';
```

## RenderList

### Props

```tsx
interface RenderListProps<T = any> {
  items: readonly T[];
  render: RenderProp<T>;
  keyBy?: KeyBy<T>;
}
```

### Types

```tsx
/**
 * Render function signature
 */
type RenderFn<T> = (
  item: T,
  index: number,
  items: readonly T[]
) => ReactNode;

/**
 * Component-based render configuration
 */
interface RenderComponentConfig<P> {
  component: ElementType<P & { children?: ReactNode }>;
  dataKey?: string;
  props?: P;
}

/**
 * Render prop - either function or component config
 */
type RenderProp<T> = RenderFn<T> | RenderComponentConfig<any>;

/**
 * Key generation strategy
 */
type KeyBy<T> = keyof T | ((item: T) => string);
```

### Type Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type of items in the array |

---

## RenderIf

### Props

```tsx
interface RenderIfProps {
  when: boolean;
  children: ReactNode;
}
```

### Behavior

- **Single child**: Renders the child when `when` is `true`, renders `null` when `false`
- **Two children**: Renders first child when `when` is `true`, renders second child when `false`

### Development Warnings

- Warns if more than 2 children are provided
- Warns if children structure is invalid

---

## RenderMatch

### Props

```tsx
interface RenderMatchProps<T = string> {
  value: T;
  items: readonly MatchValue[];
  children: ReactNode;
}
```

### Types

```tsx
/**
 * Match value - either single string or array of strings
 */
type MatchValue = string | readonly string[];
```

### Type Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type of value to match (defaults to `string`) |

### Behavior

- Matches `value` against each item in `items` array
- Renders the child at the matching index
- Supports multiple values per item using array syntax

### Development Warnings

- Warns if value doesn't match any item
- Warns if items length doesn't match children length

---

## RenderSwitch

### Props

```tsx
interface RenderSwitchProps {
  cases: readonly boolean[];
  children: ReactNode;
  fallback?: ReactNode;
  multiple?: boolean;
}
```

### Behavior

- Evaluates each boolean in `cases` array in order
- **When `multiple` is `false` (default)**: Renders only the child at the first `true` index
- **When `multiple` is `true`**: Renders all children whose corresponding case is `true`
- Renders `fallback` if no cases match (and `multiple` is `false`)
- If no `fallback` provided, renders `null` when no cases match

### Development Warnings

- Warns if cases array is empty
- Warns if cases length doesn't match children length

---

## Utility Types

### ReactNode

```tsx
type ReactNode = React.ReactNode;
```

Standard React node type including elements, strings, numbers, fragments, etc.

### ElementType

```tsx
type ElementType<P = any> = React.ElementType<P>;
```

Standard React element type for components.

---

## Generic Type Examples

### RenderList with Interface

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

function UserList({ users }: { users: User[] }) {
  return (
    <RenderList<User>
      items={users}
      render={(user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      )}
      keyBy="id"
    />
  );
}
```

### RenderList with Type Inference

```tsx
function UserList({ users }: { users: User[] }) {
  return (
    <RenderList
      items={users}
      render={(user) => (
        // user is automatically inferred as User
        <UserCard data={user} />
      )}
      keyBy="id"
    />
  );
}
```

### RenderMatch with Union Types

```tsx
type Status = 'pending' | 'processing' | 'completed' | 'failed';

function StatusDisplay({ status }: { status: Status }) {
  return (
    <RenderMatch<Status>
      value={status}
      items={['pending', 'processing', 'completed', 'failed']}
    >
      <PendingState />
      <ProcessingState />
      <CompletedState />
      <FailedState />
    </RenderMatch>
  );
}
```

---

## TypeScript Configuration

For the best TypeScript experience, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node"
  }
}
```

---

## Type Exports

All types are exported for use in your code:

```tsx
import type {
  // RenderList types
  RenderListProps,
  RenderFn,
  RenderComponentConfig,
  RenderProp,
  KeyBy,
  // RenderIf types
  RenderIfProps,
  // RenderMatch types
  RenderMatchProps,
  MatchValue,
  // RenderSwitch types
  RenderSwitchProps
} from '@jswork/react-render-controls';
```
