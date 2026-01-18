---
title: RenderMatch
order: 2
---

# RenderMatch

Pattern matching component that renders the child matching the given value.

## Features

- **Single value matching**: Match one value to one child
- **Multiple value matching**: Match multiple values to the same child (array syntax)
- **Development warnings**: Alerts for unmatched values
- **Status-based rendering**: Perfect for state machines and status flows

## Basic Usage

### Basic Matching

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

### Multiple Values Per Child

```tsx
<RenderMatch
  value={status}
  items={[['pending', 'processing'], 'completed', ['failed', 'error']]}
>
  <LoadingState />
  <SuccessState />
  <ErrorState />
</RenderMatch>
```

In this example:
- `pending` or `processing` → `<LoadingState />`
- `completed` → `<SuccessState />`
- `failed` or `error` → `<ErrorState />`

## API

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `T` | Yes | - | The value to match against items |
| `items` | `readonly MatchValue[]` | Yes | - | List of match values |
| `children` | `ReactNode` | Yes | - | Children corresponding to items |

### Types

```tsx
type MatchValue = string | readonly string[];
```

## Examples

### Order Status

```tsx
function OrderStatus({ status }) {
  return (
    <RenderMatch
      value={status}
      items={['pending', 'processing', 'shipped', 'delivered']}
    >
      <Badge color="yellow">Pending</Badge>
      <Badge color="blue">Processing</Badge>
      <Badge color="purple">Shipped</Badge>
      <Badge color="green">Delivered</Badge>
    </RenderMatch>
  );
}
```

### User Role Badge

```tsx
function RoleBadge({ role }) {
  return (
    <RenderMatch
      value={role}
      items={[['admin', 'owner'], ['moderator', 'editor'], 'user']}
    >
      <Badge variant="danger">Admin</Badge>
      <Badge variant="warning">Moderator</Badge>
      <Badge variant="info">User</Badge>
    </RenderMatch>
  );
}
```

### HTTP Status Handler

```tsx
function ApiStatusDisplay({ status }) {
  return (
    <RenderMatch
      value={status}
      items={[
        ['idle', 'loading'],
        ['success', '200', '201'],
        ['error', '400', '401', '403', '404', '500']
      ]}
    >
      <Spinner />
      <SuccessMessage />
      <ErrorMessage />
    </RenderMatch>
  );
}
```

### Theme Variant

```tsx
function Button({ variant, children }) {
  return (
    <RenderMatch value={variant} items={['primary', 'secondary', 'danger']}>
      <PrimaryButton>{children}</PrimaryButton>
      <SecondaryButton>{children}</SecondaryButton>
      <DangerButton>{children}</DangerButton>
    </RenderMatch>
  );
}
```

### Notification Type

```tsx
function Notification({ type, message }) {
  return (
    <RenderMatch
      value={type}
      items={[['info', 'notice'], ['warning', 'alert'], ['error', 'critical']]}
    >
      <InfoAlert message={message} />
      <WarningAlert message={message} />
      <ErrorAlert message={message} />
    </RenderMatch>
  );
}
```

### Size Variants

```tsx
function Container({ size, children }) {
  return (
    <RenderMatch value={size} items={['small', 'medium', 'large']}>
      <div className="container-sm">{children}</div>
      <div className="container-md">{children}</div>
      <div className="container-lg">{children}</div>
    </RenderMatch>
  );
}
```

### Payment Method

```tsx
function PaymentIcon({ method }) {
  return (
    <RenderMatch
      value={method}
      items={[
        ['visa', 'mastercard'],
        ['paypal', 'stripe'],
        'bitcoin'
      ]}
    >
      <CreditCardIcon />
      <DigitalWalletIcon />
      <CryptoIcon />
    </RenderMatch>
  );
}
```

## Best Practices

### Use for Known States

`RenderMatch` is ideal when you have a known set of states:

```tsx
// Good - known states
<RenderMatch value={status} items={['active', 'inactive', 'suspended']}>
  <ActiveState />
  <InactiveState />
  <SuspendedState />
</RenderMatch>
```

### Provide Fallback with RenderSwitch

For more complex scenarios with fallbacks, consider `RenderSwitch`:

```tsx
<RenderSwitch
  cases={[status === 'active', status === 'inactive']}
  fallback={<UnknownState />}
>
  <ActiveState />
  <InactiveState />
</RenderSwitch>
```

### Group Related Values

Use array syntax to group related values:

```tsx
<RenderMatch
  value={priority}
  items={[['low', 'minor'], ['medium', 'normal'], ['high', 'critical', 'urgent']]}
>
  <LowPriority />
  <MediumPriority />
  <HighPriority />
</RenderMatch>
```

## Development Warnings

In development mode, `RenderMatch` will warn you if:
- The value doesn't match any item in the list
- The number of items doesn't match the number of children

These warnings help catch bugs early while maintaining zero runtime overhead in production.
