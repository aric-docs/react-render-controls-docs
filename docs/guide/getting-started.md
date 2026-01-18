---
title: Getting Started
order: 0
---

# Getting Started

React Render Controls is a lightweight, headless React component library for declarative conditional rendering, pattern matching, and list mapping.

## Installation

Install the package using your favorite package manager:

```bash
# npm
npm install @jswork/react-render-controls

# yarn
yarn add @jswork/react-render-controls

# pnpm
pnpm add @jswork/react-render-controls
```

## Basic Usage

### Conditional Rendering with RenderIf

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

### If/Else Pattern

```tsx
<RenderIf when={isLoggedIn}>
  <Dashboard />
  <Login />
</RenderIf>
```

### List Rendering with RenderList

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

### Pattern Matching with RenderMatch

```tsx
import { RenderMatch } from '@jswork/react-render-controls';

function StatusDisplay({ status }) {
  return (
    <RenderMatch value={status} items={['pending', 'success', 'error']}>
      <PendingState />
      <SuccessState />
      <ErrorState />
    </RenderMatch>
  );
}
```

### Switch with RenderSwitch

```tsx
import { RenderSwitch } from '@jswork/react-render-controls';

function UserRolePanel({ user }) {
  return (
    <RenderSwitch
      cases={[user.isAdmin, user.isModerator]}
      fallback={<AccessDenied />}
    >
      <AdminPanel />
      <ModeratorPanel />
    </RenderSwitch>
  );
}
```

## TypeScript Support

All components are fully typed. Import types as needed:

```tsx
import type {
  RenderListProps,
  RenderFn,
  RenderComponentConfig,
  RenderIfProps,
  RenderMatchProps,
  RenderSwitchProps
} from '@jswork/react-render-controls';
```

## Next Steps

- Explore [Component Documentation](/components/render-list) for detailed usage
- Check out [API Reference](/api) for complete type definitions
