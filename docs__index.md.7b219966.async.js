"use strict";(self.webpackChunkreact_render_controls_docs=self.webpackChunkreact_render_controls_docs||[]).push([[935],{44032:function(d,n,_){_.r(n);var s=_(22613),i=_(74101),u=_(19845),m=_(69248),h=_(74302),r=_(22832),p=_(88634),v=_(97294),t=_(71838),c=_(89121),l=_(75271),o=_(88807),e=_(52676);function a(){return(0,e.jsx)(t.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(c.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,e.jsx)(r.Z,{lang:"bash",children:o.texts[0].value}),(0,e.jsxs)("h2",{id:"quick-start",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#quick-start",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Quick Start"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:o.texts[1].value})]})})})})}n.default=a},88807:function(d,n,_){_.r(n),_.d(n,{texts:function(){return s}});const s=[{value:`npm install @jswork/react-render-controls
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
