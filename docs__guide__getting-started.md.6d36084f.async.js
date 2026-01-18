"use strict";(self.webpackChunkreact_render_controls_docs=self.webpackChunkreact_render_controls_docs||[]).push([[655],{16681:function(a,t,_){_.r(t);var d=_(99226),c=_(76318),u=_(57572),h=_(5415),p=_(10117),r=_(8042),m=_(81625),x=_(36528),s=_(68422),o=_(58698),i=_(75271),n=_(63961),e=_(52676);function l(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"getting-started",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Getting Started"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsxs)("h2",{id:"installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,e.jsx)("p",{children:n.texts[1].value}),(0,e.jsx)(r.Z,{lang:"bash",children:n.texts[2].value}),(0,e.jsxs)("h2",{id:"basic-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Basic Usage"]}),(0,e.jsxs)("h3",{id:"conditional-rendering-with-renderif",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#conditional-rendering-with-renderif",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Conditional Rendering with RenderIf"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:n.texts[3].value}),(0,e.jsxs)("h3",{id:"ifelse-pattern",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ifelse-pattern",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"If/Else Pattern"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:n.texts[4].value}),(0,e.jsxs)("h3",{id:"list-rendering-with-renderlist",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#list-rendering-with-renderlist",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"List Rendering with RenderList"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:n.texts[5].value}),(0,e.jsxs)("h3",{id:"pattern-matching-with-rendermatch",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#pattern-matching-with-rendermatch",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Pattern Matching with RenderMatch"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:n.texts[6].value}),(0,e.jsxs)("h3",{id:"switch-with-renderswitch",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#switch-with-renderswitch",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Switch with RenderSwitch"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:n.texts[7].value}),(0,e.jsxs)("h2",{id:"import-styles-optional",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#import-styles-optional",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Import Styles (Optional)"]}),(0,e.jsx)("p",{children:n.texts[8].value}),(0,e.jsx)(r.Z,{lang:"tsx",children:n.texts[9].value}),(0,e.jsx)("p",{children:n.texts[10].value}),(0,e.jsxs)("h2",{id:"typescript-support",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typescript-support",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"TypeScript Support"]}),(0,e.jsx)("p",{children:n.texts[11].value}),(0,e.jsx)(r.Z,{lang:"tsx",children:n.texts[12].value}),(0,e.jsxs)("h2",{id:"next-steps",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#next-steps",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Next Steps"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n.texts[13].value,(0,e.jsx)(s.rU,{to:"/components/render-list",children:n.texts[14].value}),n.texts[15].value]}),(0,e.jsxs)("li",{children:[n.texts[16].value,(0,e.jsx)(s.rU,{to:"/api",children:n.texts[17].value}),n.texts[18].value]})]})]})})})})}t.default=l},63961:function(a,t,_){_.r(t),_.d(t,{texts:function(){return d}});const d=[{value:"React Render Controls is a lightweight, headless React component library for declarative conditional rendering, pattern matching, and list mapping.",paraId:0,tocIndex:0},{value:"Install the package using your favorite package manager:",paraId:1,tocIndex:1},{value:`# npm
npm install @jswork/react-render-controls

# yarn
yarn add @jswork/react-render-controls

# pnpm
pnpm add @jswork/react-render-controls
`,paraId:2,tocIndex:1},{value:`import { RenderIf } from '@jswork/react-render-controls';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <RenderIf when={isLoggedIn}>
      <Dashboard />
    </RenderIf>
  );
}
`,paraId:3,tocIndex:3},{value:`<RenderIf when={isLoggedIn}>
  <Dashboard />
  <Login />
</RenderIf>
`,paraId:4,tocIndex:4},{value:`import { RenderList } from '@jswork/react-render-controls';

function UserList({ users }) {
  return (
    <RenderList
      items={users}
      render={(user) => <UserCard user={user} />}
      keyBy="id"
    />
  );
}
`,paraId:5,tocIndex:5},{value:`import { RenderMatch } from '@jswork/react-render-controls';

function StatusDisplay({ status }) {
  return (
    <RenderMatch value={status} items={['pending', 'success', 'error']}>
      <PendingState />
      <SuccessState />
      <ErrorState />
    </RenderMatch>
  );
}
`,paraId:6,tocIndex:6},{value:`import { RenderSwitch } from '@jswork/react-render-controls';

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
`,paraId:7,tocIndex:7},{value:"If you need the default styles, you can import them:",paraId:8,tocIndex:8},{value:`import '@jswork/react-render-controls/dist/style.css';
`,paraId:9,tocIndex:8},{value:"Note: This is optional. The components are headless and have no built-in styling by default.",paraId:10,tocIndex:8},{value:"All components are fully typed. Import types as needed:",paraId:11,tocIndex:9},{value:`import type {
  RenderListProps,
  RenderFn,
  RenderComponentConfig,
  RenderIfProps,
  RenderMatchProps,
  RenderSwitchProps
} from '@jswork/react-render-controls';
`,paraId:12,tocIndex:9},{value:"Explore ",paraId:13,tocIndex:10},{value:"Component Documentation",paraId:14,tocIndex:10},{value:" for detailed usage",paraId:13,tocIndex:10},{value:"Check out ",paraId:13,tocIndex:10},{value:"API Reference",paraId:15,tocIndex:10},{value:" for complete type definitions",paraId:13,tocIndex:10}]}}]);
