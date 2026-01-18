---
title: RenderSwitch
order: 3
---

# RenderSwitch

Switch-style conditional rendering with multiple conditions, fallback support, and optional multi-match mode.

## Features

- **Multiple case conditions**: Test multiple boolean conditions in order
- **First matching case wins** (default): Stops at the first true condition
- **Multiple matches mode**: When `multiple=true`, renders all matching children
- **Optional fallback**: Render content when no cases match
- **Development warnings**: Alerts for cases/children mismatch

## Basic Usage

### Basic Usage - Render Only First Match

```tsx
import { RenderSwitch } from '@jswork/react-render-controls';

function Dashboard({ user }) {
  return (
    <RenderSwitch cases={[user.isAdmin, user.isModerator, user.isUser]}>
      <AdminPanel />
      <ModeratorPanel />
      <UserPanel />
    </RenderSwitch>
  );
}
```

Only renders the first matching child.

### With Fallback

```tsx
<RenderSwitch
  cases={[user.isAdmin, user.isModerator]}
  fallback={<AccessDenied />}
>
  <AdminPanel />
  <ModeratorPanel />
</RenderSwitch>
```

When no cases match, the `fallback` is rendered.

## API

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `cases` | `readonly boolean[]` | Yes | - | Array of boolean conditions |
| `children` | `ReactNode` | Yes | - | Children corresponding to cases |
| `fallback` | `ReactNode` | No | - | Fallback content when no cases match |
| `multiple` | `boolean` | No | `false` | When `true`, render all matches; when `false`, only first match |

### Types

```tsx
interface RenderSwitchProps {
  cases: readonly boolean[];
  children: ReactNode;
  fallback?: ReactNode;
  multiple?: boolean;
}
```

## Examples

### Multiple Mode - Render All Matches

When `multiple` is `true`, all matching children are rendered:

```tsx
const hasRead = user.permissions.includes('read');
const hasWrite = user.permissions.includes('write');
const hasDelete = user.permissions.includes('delete');

<RenderSwitch cases={[hasRead, hasWrite, hasDelete]} multiple>
  <ReadPermission />
  <WritePermission />
  <DeletePermission />
</RenderSwitch>
```

If `hasRead=true`, `hasWrite=true`, `hasDelete=false`:
- Renders both `<ReadPermission />` and `<WritePermission />`

### Loading States

```tsx
function DataLoader({ isLoading, isError, data }) {
  return (
    <RenderSwitch
      cases={[isError, isLoading, !!data]}
      fallback={<EmptyState />}
    >
      <ErrorState />
      <LoadingState />
      <DataState data={data} />
    </RenderSwitch>
  );
}
```

### User Authentication

```tsx
function AuthGate({ user, isLoading }) {
  return (
    <RenderSwitch
      cases={[isLoading, !!user]}
      fallback={<LoginForm />}
    >
      <LoadingSpinner />
      <Dashboard />
    </RenderSwitch>
  );
}
```

### Permission System

```tsx
function ResourceActions({ resource, user }) {
  const canEdit = user.id === resource.authorId;
  const canDelete = user.isAdmin || user.id === resource.authorId;

  return (
    <RenderSwitch
      cases={[canDelete, canEdit, true]}
      fallback={<span>No permissions</span>}
    >
      <DeleteButton />
      <EditButton />
      <ViewButton />
    </RenderSwitch>
  );
}
```

### Responsive Breakpoints

```tsx
function ResponsiveLayout({ breakpoint }) {
  return (
    <RenderSwitch
      cases={[breakpoint === 'mobile', breakpoint === 'tablet']}
      fallback={<DesktopLayout />}
    >
      <MobileLayout />
      <TabletLayout />
    </RenderSwitch>
  );
}
```

### Form Validation

```tsx
function FormFeedback({ form }) {
  return (
    <RenderSwitch
      cases={[
        form.isSubmitting,
        !form.isValid && form.isTouched,
        form.isSubmitted
      ]}
      fallback={<FormPrompt />}
    >
      <SubmittingMessage />
      <ValidationError errors={form.errors} />
      <SuccessMessage />
    </RenderSwitch>
  );
}
```

### Content State Machine

```tsx
function DocumentViewer({ doc }) {
  return (
    <RenderSwitch
      cases={[
        doc.isLocked,
        doc.isArchived,
        doc.isDraft,
        true
      ]}
    >
      <LockedMessage />
      <ArchivedNotice />
      <DraftBanner />
      <PublishedContent />
    </RenderSwitch>
  );
}
```

### Feature Flags

```tsx
function NewFeature({ flags }) {
  return (
    <RenderSwitch
      cases={[flags.forceEnable, flags.betaUser, flags.isStaff]}
      fallback={<ClassicExperience />}
    >
      <BetaExperience />
      <EarlyAccessExperience />
      <InternalExperience />
    </RenderSwitch>
  );
}
```

### Time-based Greeting

```tsx
function Greeting({ hour }) {
  return (
    <RenderSwitch
      cases={[
        hour >= 5 && hour < 12,
        hour >= 12 && hour < 18,
        hour >= 18 && hour < 22
      ]}
      fallback={<NightGreeting />}
    >
      <MorningGreeting />
      <AfternoonGreeting />
      <EveningGreeting />
    </RenderSwitch>
  );
}
```

### Network Status

```tsx
function ConnectionStatus({ status }) {
  return (
    <RenderSwitch
      cases={[status === 'offline', status === 'connecting']}
      fallback={<OnlineIndicator />}
    >
      <OfflineIndicator />
      <ConnectingIndicator />
    </RenderSwitch>
  );
}
```

## Best Practices

### Use for Multiple Mutually Exclusive Conditions

`RenderSwitch` is ideal when you have multiple mutually exclusive conditions:

```tsx
// Good
<RenderSwitch cases={[isAdmin, isModerator, isUser]}>
  <AdminPanel />
  <ModeratorPanel />
  <UserPanel />
</RenderSwitch>
```

### Provide Fallback for Unknown Cases

Always provide a fallback for better UX:

```tsx
<RenderSwitch
  cases={[status === 'active', status === 'pending']}
  fallback={<UnknownState />}
>
  <ActiveState />
  <PendingState />
</RenderSwitch>
```

### Order Conditions by Priority

Place most specific conditions first:

```tsx
<RenderSwitch
  cases={[
    user.isAdmin && user.isSuperAdmin,  // Most specific
    user.isAdmin,
    user.isModerator
  ]}
>
  <SuperAdminPanel />
  <AdminPanel />
  <ModeratorPanel />
</RenderSwitch>
```

### Use Catch-all with `true`

Use `true` as the last condition for a catch-all:

```tsx
<RenderSwitch
  cases={[
    condition1,
    condition2,
    true  // Always matches if above conditions are false
  ]}
>
  <Result1 />
  <Result2 />
  <DefaultResult />
</RenderSwitch>
```

## Comparison with RenderIf

| Feature | RenderIf | RenderSwitch |
|---------|----------|--------------|
| Conditions | Single boolean | Multiple boolean cases |
| Children | 1-2 children | Multiple children + fallback |
| Use case | Simple if/else | Multiple mutually exclusive states |
| Fallback | Implicit (second child) | Explicit fallback prop |

## Development Warnings

In development mode, `RenderSwitch` will warn you if:
- The number of cases doesn't match the number of children
- Cases array is empty

These warnings help catch bugs early while maintaining zero runtime overhead in production.
