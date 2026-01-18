"use strict";(self.webpackChunkreact_render_controls_docs=self.webpackChunkreact_render_controls_docs||[]).push([[655],{9667:function(a,s,n){n.r(s);var d=n(22613),l=n(74101),u=n(19845),h=n(69248),p=n(74302),r=n(22832),x=n(88634),m=n(97294),t=n(71838),o=n(89121),i=n(75271),_=n(1291),e=n(52676);function c(){return(0,e.jsx)(t.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"getting-started",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Getting Started"]}),(0,e.jsx)("p",{children:_.texts[0].value}),(0,e.jsxs)("h2",{id:"installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,e.jsx)("p",{children:_.texts[1].value}),(0,e.jsx)(r.Z,{lang:"bash",children:_.texts[2].value}),(0,e.jsxs)("h2",{id:"basic-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Basic Usage"]}),(0,e.jsxs)("h3",{id:"conditional-rendering-with-renderif",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#conditional-rendering-with-renderif",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Conditional Rendering with RenderIf"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:_.texts[3].value}),(0,e.jsxs)("h3",{id:"ifelse-pattern",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ifelse-pattern",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"If/Else Pattern"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:_.texts[4].value}),(0,e.jsxs)("h3",{id:"list-rendering-with-renderlist",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#list-rendering-with-renderlist",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"List Rendering with RenderList"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:_.texts[5].value}),(0,e.jsxs)("h3",{id:"pattern-matching-with-rendermatch",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#pattern-matching-with-rendermatch",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Pattern Matching with RenderMatch"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:_.texts[6].value}),(0,e.jsxs)("h3",{id:"switch-with-renderswitch",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#switch-with-renderswitch",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Switch with RenderSwitch"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:_.texts[7].value}),(0,e.jsxs)("h2",{id:"typescript-support",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typescript-support",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"TypeScript Support"]}),(0,e.jsx)("p",{children:_.texts[8].value}),(0,e.jsx)(r.Z,{lang:"tsx",children:_.texts[9].value}),(0,e.jsxs)("h2",{id:"next-steps",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#next-steps",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Next Steps"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[_.texts[10].value,(0,e.jsx)(t.rU,{to:"/components/render-list",children:_.texts[11].value}),_.texts[12].value]}),(0,e.jsxs)("li",{children:[_.texts[13].value,(0,e.jsx)(t.rU,{to:"/api",children:_.texts[14].value}),_.texts[15].value]})]})]})})})})}s.default=c},1291:function(a,s,n){n.r(s),n.d(s,{texts:function(){return d}});const d=[{value:"React Render Controls is a lightweight, headless React component library for declarative conditional rendering, pattern matching, and list mapping.",paraId:0,tocIndex:0},{value:"Install the package using your favorite package manager:",paraId:1,tocIndex:1},{value:`# npm
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
`,paraId:7,tocIndex:7},{value:"All components are fully typed. Import types as needed:",paraId:8,tocIndex:8},{value:`import type {
  RenderListProps,
  RenderFn,
  RenderComponentConfig,
  RenderIfProps,
  RenderMatchProps,
  RenderSwitchProps
} from '@jswork/react-render-controls';
`,paraId:9,tocIndex:8},{value:"Explore ",paraId:10,tocIndex:9},{value:"Component Documentation",paraId:11,tocIndex:9},{value:" for detailed usage",paraId:10,tocIndex:9},{value:"Check out ",paraId:10,tocIndex:9},{value:"API Reference",paraId:12,tocIndex:9},{value:" for complete type definitions",paraId:10,tocIndex:9}]}}]);
