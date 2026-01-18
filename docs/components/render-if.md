---
title: RenderIf
order: 1
---

# RenderIf

Conditional rendering component supporting if/else patterns with automatic warning for invalid usage.

## Features

- **Single child**: Render when true, nothing when false
- **Two children**: If/else pattern
- **Development warnings**: Alerts for invalid children count
- **Zero runtime overhead**: Optimized for production

## Basic Usage

### Single Child (If)

```tsx
import { RenderIf } from '@jswork/react-render-controls';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <RenderIf when={isLoggedIn}>
      <Dashboard />
    </RenderIf>
  );
}
```

### Two Children (If/Else)

```tsx
<RenderIf when={isLoggedIn}>
  <Dashboard />
  <Login />
</RenderIf>
```

When `isLoggedIn` is `true`, renders `<Dashboard />`.
When `isLoggedIn` is `false`, renders `<Login />`.

## API

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `when` | `boolean` | Yes | - | Condition to determine which child to render |
| `children` | `ReactNode` | Yes | - | Children (1-2 elements) |

### Types

```tsx
interface RenderIfProps {
  when: boolean;
  children: ReactNode;
}
```

## Examples

### Conditional Button

```tsx
function PostActions({ post, currentUser }) {
  return (
    <RenderIf when={post.author.id === currentUser.id}>
      <button>Edit</button>
      <button>Delete</button>
    </RenderIf>
  );
}
```

### Loading State

```tsx
function DataDisplay({ data, isLoading }) {
  return (
    <>
      <RenderIf when={isLoading}>
        <LoadingSpinner />
      </RenderIf>

      <RenderIf when={!isLoading && data}>
        <DataTable data={data} />
      </RenderIf>
    </>
  );
}
```

### If/Else Pattern

```tsx
function UserProfile({ user }) {
  return (
    <RenderIf when={user}>
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <div>
        <p>Please log in to view profile</p>
      </div>
    </RenderIf>
  );
}
```

### Nested Conditions

```tsx
function AdminPanel({ user }) {
  return (
    <RenderIf when={user.isLoggedIn}>
      <RenderIf when={user.isAdmin}>
        <AdminDashboard />
        <UserDashboard />
      </RenderIf>
    </RenderIf>
  );
}
```

### With Multiple Elements

```tsx
<RenderIf when={showFeatures}>
  <>
    <Feature1 />
    <Feature2 />
    <Feature3 />
  </>
</RenderIf>
```

### Ternary-like Behavior

```tsx
<RenderIf when={theme === 'dark'}>
  <DarkThemeProvider>
    <App />
  </DarkThemeProvider>
  <LightThemeProvider>
    <App />
  </LightThemeProvider>
</RenderIf>
```

## Best Practices

### Use for Simple Conditions

`RenderIf` is ideal for simple conditional rendering:

```tsx
// Good
<RenderIf when={showBanner}>
  <Banner />
</RenderIf>
```

### Consider Early Returns

For complex conditions, early returns might be cleaner:

```tsx
// Also acceptable
if (!showBanner) return null;
return <Banner />;
```

### Combine with Other Components

```tsx
<RenderList
  items={items}
  render={(item) => (
    <RenderIf when={item.isVisible}>
      <ItemCard item={item} />
    </RenderIf>
  )}
/>
```

## Development Warnings

In development mode, `RenderIf` will warn you if:
- You provide more than 2 children
- The children structure is invalid

These warnings help catch bugs early while maintaining zero runtime overhead in production.
