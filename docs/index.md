---
title: RRC
hero:
  title: RRC
  description: A lightweight, headless React component library for declarative conditional rendering and pattern matching.
  actions:
    - text: Get Started
      link: /guide/getting-started
    - text: GitHub
      link: https://github.com/afeiship/react-render-controls
features:
  - title: Lightweight
    emoji: ⚡
    description: Zero runtime overhead, tree-shakable components with minimal dependencies
  - title: Headless
    emoji: 🎨
    description: Logic-only components with no built-in styling, full control over your UI
  - title: Type-Safe
    emoji: 🔒
    description: Full TypeScript support with comprehensive type definitions
  - title: SSR Friendly
    emoji: 🌐
    description: Server-side rendering ready with no hydration issues
  - title: Declarative
    emoji: 📝
    description: Clean, readable syntax for conditional rendering and pattern matching
  - title: Flexible
    emoji: 🧩
    description: Multiple rendering patterns - functions, components, and more
---

## Installation

```bash
npm install @jswork/react-render-controls
```

## Quick Start

```tsx
import { RenderIf, RenderMatch, RenderSwitch } from '@jswork/react-render-controls';

// Conditional rendering
<RenderIf when={isLoggedIn}>
  <Dashboard />
</RenderIf>

// Pattern matching
<RenderMatch value={status} items={['loading', 'success', 'error']}>
  <Loader />
  <Success />
  <Error />
</RenderMatch>

// Advanced pattern matching
<RenderSwitch cases={[isAdmin, isPremium]} fallback={<GuestPanel />}>
  <AdminPanel />
  <PremiumPanel />
</RenderSwitch>
```
