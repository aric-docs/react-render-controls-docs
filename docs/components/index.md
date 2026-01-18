---
title: Components Overview
order: 0
---

# Components Overview

A collection of React components for declarative rendering control. Simplify conditional rendering, list rendering, and pattern matching in your React applications.

## Available Components

### [RenderIf](./render-if)
Conditional rendering component supporting if/else patterns with automatic warning for invalid usage.

**Best for**: Simple conditional rendering, if/else patterns

```tsx
<RenderIf when={isLoggedIn}>
  <Dashboard />
  <Login />
</RenderIf>
```

### [RenderList](./render-list)
Simplified list rendering component that handles empty states and automatically renders items.

**Best for**: Rendering arrays with empty state handling

```tsx
<RenderList
  items={users}
  render={(user) => <UserCard key={user.id} user={user} />}
  empty={<p>No users found</p>}
/>
```

### [RenderMatch](./render-match)
Pattern matching component for complex conditional logic based on value matching.

**Best for**: Multi-way conditionals, switch-like patterns

```tsx
<RenderMatch
  on={status}
  matches={{
    loading: <Loader />,
    success: <Success />,
    error: <Error />
  }}
/>
```

### [RenderSwitch](./render-switch)
Advanced pattern matching with predicates and support for complex conditions.

**Best for**: Complex multi-condition rendering, predicate-based matching

```tsx
<RenderSwitch
  value={user}
  cases={[
    { when: (u) => u.isAdmin, render: <AdminPanel /> },
    { when: (u) => u.isPremium, render: <PremiumPanel /> },
    { when: (u) => u.isUser, render: <UserPanel /> }
  ]}
  default={<GuestPanel />}
/>
```

## Quick Comparison

| Component | Use Case | Complexity | Flexibility |
|-----------|----------|------------|-------------|
| RenderIf | Simple conditions | Low | Limited |
| RenderList | List rendering | Low | Medium |
| RenderMatch | Value matching | Medium | Medium |
| RenderSwitch | Complex patterns | High | High |

## Installation

```bash
npm install @jswork/react-render-controls
```

## Usage

```tsx
import { RenderIf, RenderList, RenderMatch, RenderSwitch } from '@jswork/react-render-controls';
```

## Choose the Right Component

### Use RenderIf when:
- You have simple true/false conditions
- You need if/else patterns
- You want clean, readable conditional rendering

### Use RenderList when:
- You need to render arrays of data
- You want automatic empty state handling
- You need to map over items consistently

### Use RenderMatch when:
- You have multiple conditions based on a single value
- You want cleaner code than nested ternaries
- You need to match specific values or patterns

### Use RenderSwitch when:
- You have complex conditional logic
- You need predicate-based matching
- You want the most flexibility for conditions
