---
title: Components Overview
order: 0
---

# Components Overview

A collection of React components for declarative rendering control. Simplify conditional rendering, list rendering, and pattern matching in your React applications.

## Available Components

### [RenderIf](./render-if.md)
Conditional rendering component supporting if/else patterns with automatic warning for invalid usage.

**Best for**: Simple conditional rendering, if/else patterns

```tsx
<RenderIf when={isLoggedIn}>
  <Dashboard />
  <Login />
</RenderIf>
```

### [RenderList](./render-list.md)
Simplified list rendering component that handles empty states and automatically renders items.

**Best for**: Rendering arrays with empty state handling

```tsx
<RenderList
  items={users}
  render={(user) => <UserCard key={user.id} user={user} />}
  empty={<p>No users found</p>}
/>
```

### [RenderMatch](./render-match.md)
Pattern matching component that renders the child matching the given value.

**Best for**: Multi-way conditionals, switch-like patterns

```tsx
<RenderMatch value={status} items={['loading', 'success', 'error']}>
  <Loader />
  <Success />
  <Error />
</RenderMatch>
```

### [RenderSwitch](./render-switch.md)
Switch-style conditional rendering with multiple conditions and fallback support.

**Best for**: Complex multi-condition rendering, multiple boolean conditions

```tsx
<RenderSwitch cases={[isAdmin, isPremium, isUser]} fallback={<GuestPanel />}>
  <AdminPanel />
  <PremiumPanel />
  <UserPanel />
</RenderSwitch>
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
