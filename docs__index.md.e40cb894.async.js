"use strict";(self.webpackChunkreact_render_controls_docs=self.webpackChunkreact_render_controls_docs||[]).push([[935],{41346:function(t,n,_){_.r(n);var r=_(99226),i=_(76318),m=_(57572),u=_(5415),h=_(10117),s=_(8042),p=_(81625),f=_(36528),o=_(68422),c=_(58698),l=_(75271),d=_(25921),e=_(52676);function a(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(c.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,e.jsx)(s.Z,{lang:"bash",children:d.texts[0].value}),(0,e.jsxs)("h2",{id:"quick-start",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#quick-start",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Quick Start"]}),(0,e.jsx)(s.Z,{lang:"tsx",children:d.texts[1].value})]})})})})}n.default=a},25921:function(t,n,_){_.r(n),_.d(n,{texts:function(){return r}});const r=[{value:`npm install @jswork/react-render-controls
`,paraId:0,tocIndex:0},{value:`import { RenderIf, RenderList, RenderMatch, RenderSwitch } from '@jswork/react-render-controls';

// Conditional rendering
<RenderIf when={isLoggedIn}>
  <Dashboard />
</RenderIf>

// List rendering
<RenderList items={users} render={(user) => <UserCard user={user} />} keyBy="id" />

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
`,paraId:1,tocIndex:1}]}}]);
