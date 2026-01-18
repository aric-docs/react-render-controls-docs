(self.webpackChunkreact_render_controls_docs=self.webpackChunkreact_render_controls_docs||[]).push([[904],{81735:function(C,s,e){"use strict";e.r(s),e.d(s,{RenderIf:function(){return i},RenderList:function(){return n},RenderMatch:function(){return v},RenderSwitch:function(){return T}});var l=e(75271),S=e(14224),x=Object.defineProperty,B=Object.defineProperties,M=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,E=(b,I,R)=>I in b?x(b,I,{enumerable:!0,configurable:!0,writable:!0,value:R}):b[I]=R,h=(b,I)=>{for(var R in I||(I={}))p.call(I,R)&&E(b,R,I[R]);if(L)for(var R of L(I))t.call(I,R)&&E(b,R,I[R]);return b},f=(b,I)=>B(b,M(I)),a=(b,I)=>x(b,"name",{value:I,configurable:!0}),u,d=typeof S!="undefined"&&((u={NODE_ENV:"production",PUBLIC_PATH:"/"})==null?void 0:u.NODE_ENV)!=="production";function o(b){return typeof b=="function"}a(o,"isRenderFn");function c(b,I,R,P){if(P===void 0)return I;if(typeof P=="function")return P(b,I,R);let A=b[P];return A==null?(d&&console.warn(`RenderList: keyBy="${String(P)}" but the field is undefined in ${JSON.stringify(b)}`),I):A}a(c,"getKey");function n({items:b,render:I,keyBy:R}){return l.createElement(l.Fragment,null,b.map((P,A)=>{let O=c(P,A,b,R);if(o(I))return l.createElement(l.Fragment,{key:O},I(P,A,b));let{component:j,dataKey:U="item",props:$={}}=I,N=f(h({},$),{[U]:P});return l.createElement(l.Fragment,{key:O},l.createElement(j,N))}))}a(n,"RenderList");function g({when:b,children:I}){let R=l.Children.toArray(I);return R.length===0?null:(R.length>2&&d&&console.warn(`RenderIf: Expected at most 2 children, but got ${R.length}. Only the first 2 children will be used.`),R.length===1?b?R[0]:null:b?R[0]:R[1])}a(g,"RenderIf");var i=g;function y(b,I){for(let R=0;R<I.length;R++){let P=I[R];if(typeof P=="string"){if(P===b)return R}else if(P.includes(b))return R}return-1}a(y,"findMatchIndex");function r(b){let I=[];for(let R of b)typeof R=="string"?I.push(R):I.push(...R);return I}a(r,"getAllValues");function m({value:b,items:I,children:R}){var P;let A=y(b,I);if(A===-1){if(d){let j=r(I);console.warn(`RenderMatch: Value "${b}" not found in any of the items. Available values: [${j.join(", ")}]`)}return null}let O=l.Children.toArray(R).filter(j=>(0,l.isValidElement)(j));return A>=O.length?(d&&console.warn(`RenderMatch: Not enough children provided. Expected at least ${A+1}, but got ${O.length}.`),null):(P=O[A])!=null?P:null}a(m,"RenderMatch");var v=m;function w(b){for(let I=0;I<b.length;I++)if(b[I])return I;return-1}a(w,"findTrueCaseIndex");function k(b,I,R){d&&b>I&&console.warn(`${R}: More cases (${b}) than children (${I}). Extra cases will be ignored.`)}a(k,"validateCasesLength");function D({cases:b,children:I,fallback:R=null}){let P=l.Children.toArray(I).filter(O=>(0,l.isValidElement)(O));k(b.length,P.length,"RenderSwitch");let A=w(b);return A>=0&&A<P.length?P[A]:R}a(D,"RenderSwitch");var T=D},19234:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},44642:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},16304:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},14653:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},85488:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},27341:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},2739:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},39394:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},62918:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},92485:function(C,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return S}});var l=e(75271),S={}},63257:function(C,s,e){"use strict";var l;e.r(s),e.d(s,{demos:function(){return d}});var S=e(82092),x=e.n(S),B=e(26068),M=e.n(B),L=e(90228),p=e.n(L),t=e(48305),E=e.n(t),h=e(87999),f=e.n(h),a=e(75271),u=e(81735),d={"docs-playground-render-if-demo-0":{component:a.memo(a.lazy(f()(p()().mark(function o(){var c,n,g,i;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return c=r.sent,n=c.RenderIf,r.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return g=r.sent,i=g.useState,r.abrupt("return",{default:function(){var v=i(!0),w=E()(v,2),k=w[0],D=w[1];return a.createElement("div",null,a.createElement("h3",null,"Toggle Message"),a.createElement("button",{onClick:function(){return D(!k)},style:{padding:"8px 16px",marginBottom:"12px",background:"#1890ff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},k?"Hide":"Show"," Message"),a.createElement(n,{when:k},a.createElement("div",{style:{padding:"12px",background:"#e6f7ff",border:"1px solid #91d5ff",borderRadius:"4px"}},"This message is shown when showMessage is true!")))}});case 9:case"end":return r.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      <h3>Toggle Message</h3>
      <button
        onClick={() => setShowMessage(!showMessage)}
        style={{
          padding: '8px 16px',
          marginBottom: '12px',
          background: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {showMessage ? 'Hide' : 'Show'} Message
      </button>

      <RenderIf when={showMessage}>
        <div style={{
          padding: '12px',
          background: '#e6f7ff',
          border: '1px solid #91d5ff',
          borderRadius: '4px'
        }}>
          This message is shown when showMessage is true!
        </div>
      </RenderIf>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":u,react:l||(l=e.t(a,2))},renderOpts:{compile:function(){var o=f()(p()().mark(function n(){var g,i=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(972).then(e.bind(e,71972));case 2:return r.abrupt("return",(g=r.sent).default.apply(g,i));case 3:case"end":return r.stop()}},n)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-playground-render-if-demo-1":{component:a.memo(a.lazy(f()(p()().mark(function o(){var c,n,g,i;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return c=r.sent,n=c.RenderIf,r.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return g=r.sent,i=g.useState,r.abrupt("return",{default:function(){var v=i(!1),w=E()(v,2),k=w[0],D=w[1];return a.createElement("div",null,a.createElement("h3",null,"Authentication State"),a.createElement("button",{onClick:function(){return D(!k)},style:{padding:"8px 16px",marginBottom:"12px",background:k?"#52c41a":"#1890ff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},k?"Logout":"Login"),a.createElement(n,{when:k},a.createElement("div",{style:{padding:"16px",background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"4px"}},"Welcome back! You are logged in."),a.createElement("div",{style:{padding:"16px",background:"#fff1f0",border:"1px solid #ffa39e",borderRadius:"4px"}},"Please log in to continue.")))}});case 9:case"end":return r.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>Authentication State</h3>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          padding: '8px 16px',
          marginBottom: '12px',
          background: isLoggedIn ? '#52c41a' : '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <RenderIf when={isLoggedIn}>
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px'
        }}>
          Welcome back! You are logged in.
        </div>
        <div style={{
          padding: '16px',
          background: '#fff1f0',
          border: '1px solid #ffa39e',
          borderRadius: '4px'
        }}>
          Please log in to continue.
        </div>
      </RenderIf>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":u,react:l||(l=e.t(a,2))},renderOpts:{compile:function(){var o=f()(p()().mark(function n(){var g,i=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(972).then(e.bind(e,71972));case 2:return r.abrupt("return",(g=r.sent).default.apply(g,i));case 3:case"end":return r.stop()}},n)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-playground-render-if-demo-2":{component:a.memo(a.lazy(f()(p()().mark(function o(){var c,n,g,i;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return c=r.sent,n=c.RenderIf,r.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return g=r.sent,i=g.useState,r.abrupt("return",{default:function(){var v=i("guest"),w=E()(v,2),k=w[0],D=w[1];return a.createElement("div",null,a.createElement("h3",null,"User Role Display"),a.createElement("div",{style:{marginBottom:"16px"}},a.createElement("button",{onClick:function(){return D("admin")},style:{marginRight:"8px"}},"Admin"),a.createElement("button",{onClick:function(){return D("user")},style:{marginRight:"8px"}},"User"),a.createElement("button",{onClick:function(){return D("guest")}},"Guest")),a.createElement(n,{when:k==="admin"},a.createElement("div",{style:{padding:"16px",background:"#fff7e6",border:"2px solid #fa8c16",borderRadius:"4px",fontWeight:"bold"}},"Admin Panel - Full Access")),a.createElement(n,{when:k==="user"},a.createElement("div",{style:{padding:"16px",background:"#e6f7ff",border:"2px solid #1890ff",borderRadius:"4px"}},"User Dashboard - Limited Access")),a.createElement(n,{when:k==="guest"},a.createElement("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"4px"}},"Guest View - Please Log In")))}});case 9:case"end":return r.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [role, setRole] = useState('guest');

  return (
    <div>
      <h3>User Role Display</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setRole('admin')} style={{ marginRight: '8px' }}>Admin</button>
        <button onClick={() => setRole('user')} style={{ marginRight: '8px' }}>User</button>
        <button onClick={() => setRole('guest')}>Guest</button>
      </div>

      <RenderIf when={role === 'admin'}>
        <div style={{
          padding: '16px',
          background: '#fff7e6',
          border: '2px solid #fa8c16',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}>
          Admin Panel - Full Access
        </div>
      </RenderIf>

      <RenderIf when={role === 'user'}>
        <div style={{
          padding: '16px',
          background: '#e6f7ff',
          border: '2px solid #1890ff',
          borderRadius: '4px'
        }}>
          User Dashboard - Limited Access
        </div>
      </RenderIf>

      <RenderIf when={role === 'guest'}>
        <div style={{
          padding: '16px',
          background: '#f5f5f5',
          borderRadius: '4px'
        }}>
          Guest View - Please Log In
        </div>
      </RenderIf>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":u,react:l||(l=e.t(a,2))},renderOpts:{compile:function(){var o=f()(p()().mark(function n(){var g,i=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(972).then(e.bind(e,71972));case 2:return r.abrupt("return",(g=r.sent).default.apply(g,i));case 3:case"end":return r.stop()}},n)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-playground-render-if-demo-3":{component:a.memo(a.lazy(f()(p()().mark(function o(){var c,n,g,i;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return c=r.sent,n=c.RenderIf,r.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return g=r.sent,i=g.useState,r.abrupt("return",{default:function(){var v=i(!1),w=E()(v,2),k=w[0],D=w[1],T=i(null),b=E()(T,2),I=b[0],R=b[1],P=function(){D(!0),setTimeout(function(){R({name:"John Doe",email:"john@example.com"}),D(!1)},1500)};return a.createElement("div",null,a.createElement("h3",null,"Data Fetching"),a.createElement("button",{onClick:P,disabled:k,style:{padding:"8px 16px",marginBottom:"12px",background:k?"#d9d9d9":"#1890ff",color:"white",border:"none",borderRadius:"4px",cursor:k?"not-allowed":"pointer"}},k?"Loading...":"Fetch Data"),a.createElement(n,{when:k},a.createElement("div",{style:{padding:"12px",color:"#1890ff"}},"Loading data...")),a.createElement(n,{when:I},a.createElement("div",{style:{padding:"16px",background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"4px"}},a.createElement("div",null,a.createElement("strong",null,"Name:")," ",I==null?void 0:I.name),a.createElement("div",null,a.createElement("strong",null,"Email:")," ",I==null?void 0:I.email))))}});case 9:case"end":return r.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData({ name: 'John Doe', email: 'john@example.com' });
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <h3>Data Fetching</h3>
      <button
        onClick={fetchData}
        disabled={loading}
        style={{
          padding: '8px 16px',
          marginBottom: '12px',
          background: loading ? '#d9d9d9' : '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      <RenderIf when={loading}>
        <div style={{ padding: '12px', color: '#1890ff' }}>Loading data...</div>
      </RenderIf>

      <RenderIf when={data}>
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px'
        }}>
          <div><strong>Name:</strong> {data?.name}</div>
          <div><strong>Email:</strong> {data?.email}</div>
        </div>
      </RenderIf>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":u,react:l||(l=e.t(a,2))},renderOpts:{compile:function(){var o=f()(p()().mark(function n(){var g,i=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(972).then(e.bind(e,71972));case 2:return r.abrupt("return",(g=r.sent).default.apply(g,i));case 3:case"end":return r.stop()}},n)}));function c(){return o.apply(this,arguments)}return c}()}},"docs-playground-render-if-demo-4":{component:a.memo(a.lazy(f()(p()().mark(function o(){var c,n,g,i;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return c=r.sent,n=c.RenderIf,r.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return g=r.sent,i=g.useState,r.abrupt("return",{default:function(){var v=i({darkMode:!1,notifications:!0,autoSave:!1}),w=E()(v,2),k=w[0],D=w[1],T=function(I){D(M()(M()({},k),{},x()({},I,!k[I])))};return a.createElement("div",null,a.createElement("h3",null,"Feature Settings"),Object.entries(k).map(function(b){var I=E()(b,2),R=I[0],P=I[1];return a.createElement("div",{key:R,style:{marginBottom:"12px"}},a.createElement("label",{style:{display:"flex",alignItems:"center",gap:"8px"}},a.createElement("input",{type:"checkbox",checked:P,onChange:function(){return T(R)}}),a.createElement("span",null,R.charAt(0).toUpperCase()+R.slice(1))),a.createElement(n,{when:P},a.createElement("div",{style:{marginLeft:"24px",padding:"8px",background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"4px",fontSize:"14px"}},R," is enabled")))}))}});case 9:case"end":return r.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderIf } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [features, setFeatures] = useState({
    darkMode: false,
    notifications: true,
    autoSave: false
  });

  const toggle = (key) => {
    setFeatures({ ...features, [key]: !features[key] });
  };

  return (
    <div>
      <h3>Feature Settings</h3>
      {Object.entries(features).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={value}
              onChange={() => toggle(key)}
            />
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
          </label>

          <RenderIf when={value}>
            <div style={{
              marginLeft: '24px',
              padding: '8px',
              background: '#f6ffed',
              border: '1px solid #b7eb8f',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              {key} is enabled
            </div>
          </RenderIf>
        </div>
      ))}
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":u,react:l||(l=e.t(a,2))},renderOpts:{compile:function(){var o=f()(p()().mark(function n(){var g,i=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(972).then(e.bind(e,71972));case 2:return r.abrupt("return",(g=r.sent).default.apply(g,i));case 3:case"end":return r.stop()}},n)}));function c(){return o.apply(this,arguments)}return c}()}}}},57477:function(C,s,e){"use strict";var l;e.r(s),e.d(s,{demos:function(){return a}});var S=e(26068),x=e.n(S),B=e(48305),M=e.n(B),L=e(90228),p=e.n(L),t=e(87999),E=e.n(t),h=e(75271),f=e(81735),a={"docs-playground-render-list-demo-0":{component:h.memo(h.lazy(E()(p()().mark(function u(){var d,o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return d=n.sent,o=d.RenderList,n.abrupt("return",{default:function(){var i=["Apple","Banana","Cherry","Date","Elderberry"];return h.createElement("div",null,h.createElement("h3",null,"Fruit List"),h.createElement(o,{items:i,render:function(r){return h.createElement("div",{style:{padding:"8px 12px",margin:"4px 0",background:"#f0f0f0",borderRadius:"4px"}},r)}}))}});case 5:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderList } from '@jswork/react-render-controls';

export default () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <div>
      <h3>Fruit List</h3>
      <RenderList
        items={fruits}
        render={(fruit) => (
          <div style={{
            padding: '8px 12px',
            margin: '4px 0',
            background: '#f0f0f0',
            borderRadius: '4px'
          }}>
            {fruit}
          </div>
        )}
      />
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var u=E()(p()().mark(function o(){var c,n=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(972).then(e.bind(e,71972));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,n));case 3:case"end":return i.stop()}},o)}));function d(){return u.apply(this,arguments)}return d}()}},"docs-playground-render-list-demo-1":{component:h.memo(h.lazy(E()(p()().mark(function u(){var d,o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return d=n.sent,o=d.RenderList,n.abrupt("return",{default:function(){var i=["First","Second","Third"];return h.createElement("div",null,h.createElement("h3",null,"Numbered List"),h.createElement(o,{items:i,render:function(r,m){return h.createElement("div",{style:{display:"flex",gap:"12px",margin:"8px 0"}},h.createElement("span",{style:{fontWeight:"bold",color:"#1890ff",minWidth:"24px"}},m+1,"."),h.createElement("span",null,r))}}))}});case 5:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderList } from '@jswork/react-render-controls';

export default () => {
  const items = ['First', 'Second', 'Third'];

  return (
    <div>
      <h3>Numbered List</h3>
      <RenderList
        items={items}
        render={(item, index) => (
          <div style={{ display: 'flex', gap: '12px', margin: '8px 0' }}>
            <span style={{
              fontWeight: 'bold',
              color: '#1890ff',
              minWidth: '24px'
            }}>
              {index + 1}.
            </span>
            <span>{item}</span>
          </div>
        )}
      />
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var u=E()(p()().mark(function o(){var c,n=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(972).then(e.bind(e,71972));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,n));case 3:case"end":return i.stop()}},o)}));function d(){return u.apply(this,arguments)}return d}()}},"docs-playground-render-list-demo-2":{component:h.memo(h.lazy(E()(p()().mark(function u(){var d,o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return d=n.sent,o=d.RenderList,n.abrupt("return",{default:function(){var i=[{id:1,name:"Alice",role:"Admin"},{id:2,name:"Bob",role:"User"},{id:3,name:"Charlie",role:"User"}];return h.createElement("div",null,h.createElement("h3",null,"User List"),h.createElement(o,{items:i,render:function(r){return h.createElement("div",{style:{padding:"12px",margin:"8px 0",background:"#fafafa",border:"1px solid #d9d9d9",borderRadius:"4px",display:"flex",justifyContent:"space-between"}},h.createElement("span",null,r.name),h.createElement("span",{style:{padding:"2px 8px",background:r.role==="Admin"?"#fff1f0":"#e6f7ff",color:r.role==="Admin"?"#cf1322":"#0958d9",borderRadius:"4px",fontSize:"12px"}},r.role))},keyBy:"id"}))}});case 5:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderList } from '@jswork/react-render-controls';

export default () => {
  const users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'User' }
  ];

  return (
    <div>
      <h3>User List</h3>
      <RenderList
        items={users}
        render={(user) => (
          <div style={{
            padding: '12px',
            margin: '8px 0',
            background: '#fafafa',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>{user.name}</span>
            <span style={{
              padding: '2px 8px',
              background: user.role === 'Admin' ? '#fff1f0' : '#e6f7ff',
              color: user.role === 'Admin' ? '#cf1322' : '#0958d9',
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              {user.role}
            </span>
          </div>
        )}
        keyBy="id"
      />
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var u=E()(p()().mark(function o(){var c,n=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(972).then(e.bind(e,71972));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,n));case 3:case"end":return i.stop()}},o)}));function d(){return u.apply(this,arguments)}return d}()}},"docs-playground-render-list-demo-3":{component:h.memo(h.lazy(E()(p()().mark(function u(){var d,o,c,n;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return d=i.sent,o=d.RenderList,i.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return c=i.sent,n=c.useState,i.abrupt("return",{default:function(){var r=n([{id:1,text:"Task 1",done:!1},{id:2,text:"Task 2",done:!0},{id:3,text:"Task 3",done:!1}]),m=M()(r,2),v=m[0],w=m[1],k=function(T){w(v.map(function(b){return b.id===T?x()(x()({},b),{},{done:!b.done}):b}))};return h.createElement("div",null,h.createElement("h3",null,"Todo List"),h.createElement(o,{items:v,render:function(T){return h.createElement("div",{style:{padding:"8px",margin:"4px 0",background:T.done?"#f6ffed":"#fff",border:"1px solid ".concat(T.done?"#b7eb8f":"#d9d9d9"),borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px"}},h.createElement("input",{type:"checkbox",checked:T.done,onChange:function(){return k(T.id)}}),h.createElement("span",{style:{textDecoration:T.done?"line-through":"none",opacity:T.done?.6:1}},T.text))},keyBy:"id"}))}});case 9:case"end":return i.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderList } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Task 1', done: false },
    { id: 2, text: 'Task 2', done: true },
    { id: 3, text: 'Task 3', done: false }
  ]);

  const toggle = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <RenderList
        items={items}
        render={(item) => (
          <div style={{
            padding: '8px',
            margin: '4px 0',
            background: item.done ? '#f6ffed' : '#fff',
            border: \`1px solid \${item.done ? '#b7eb8f' : '#d9d9d9'}\`,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => toggle(item.id)}
        />
        <span style={{
          textDecoration: item.done ? 'line-through' : 'none',
          opacity: item.done ? 0.6 : 1
        }}>
          {item.text}
        </span>
          </div>
        )}
        keyBy="id"
      />
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":f,react:l||(l=e.t(h,2))},renderOpts:{compile:function(){var u=E()(p()().mark(function o(){var c,n=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(972).then(e.bind(e,71972));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,n));case 3:case"end":return i.stop()}},o)}));function d(){return u.apply(this,arguments)}return d}()}},"docs-playground-render-list-demo-4":{component:h.memo(h.lazy(E()(p()().mark(function u(){var d,o;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return d=n.sent,o=d.RenderList,n.abrupt("return",{default:function(){var i=[85,92,78,95,88];return h.createElement("div",null,h.createElement("h3",null,"Scores with Average"),h.createElement(o,{items:i,render:function(r,m,v){var w=v.reduce(function(k,D){return k+D},0)/v.length;return h.createElement("div",{style:{padding:"8px",margin:"4px 0",background:r>w?"#f6ffed":"#fff1f0",borderRadius:"4px",display:"flex",justifyContent:"space-between"}},h.createElement("span",null,"Score ",m+1),h.createElement("span",{style:{fontWeight:r>w?"bold":"normal"}},r))}}),h.createElement("div",{style:{marginTop:"16px",padding:"8px",background:"#f0f0f0",borderRadius:"4px"}},"Average: ",(i.reduce(function(y,r){return y+r},0)/i.length).toFixed(1)))}});case 5:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderList } from '@jswork/react-render-controls';

export default () => {
  const scores = [85, 92, 78, 95, 88];

  return (
    <div>
      <h3>Scores with Average</h3>
      <RenderList
        items={scores}
        render={(score, index, items) => {
          const average = items.reduce((a, b) => a + b, 0) / items.length;
          return (
            <div style={{
              padding: '8px',
              margin: '4px 0',
              background: score > average ? '#f6ffed' : '#fff1f0',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>Score {index + 1}</span>
              <span style={{
                fontWeight: score > average ? 'bold' : 'normal'
              }}>
                {score}
              </span>
            </div>
          );
        }}
      />
      <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
        Average: {(scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)}
      </div>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var u=E()(p()().mark(function o(){var c,n=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(972).then(e.bind(e,71972));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,n));case 3:case"end":return i.stop()}},o)}));function d(){return u.apply(this,arguments)}return d}()}},"docs-playground-render-list-demo-5":{component:h.memo(h.lazy(E()(p()().mark(function u(){var d,o,c;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return d=g.sent,o=d.RenderList,c=function(y){var r=y.user,m=y.variant,v=m===void 0?"default":m,w={default:{padding:"16px",margin:"8px 0",background:"#fafafa",border:"1px solid #d9d9d9",borderRadius:"8px"},compact:{padding:"8px 12px",margin:"4px 0",background:"#f5f5f5",border:"1px solid #e8e8e8",borderRadius:"4px"}};return h.createElement("div",{style:w[v]},h.createElement("div",{style:{fontWeight:"bold",marginBottom:"4px"}},r.name),h.createElement("div",{style:{fontSize:"14px",color:"#666"}},r.email),h.createElement("div",{style:{marginTop:"8px"}},h.createElement("span",{style:{padding:"2px 8px",background:"#e6f7ff",color:"#0958d9",borderRadius:"4px",fontSize:"12px"}},r.role)))},g.abrupt("return",{default:function(){var y=[{id:1,name:"Alice Johnson",email:"alice@example.com",role:"Admin"},{id:2,name:"Bob Smith",email:"bob@example.com",role:"Developer"},{id:3,name:"Charlie Brown",email:"charlie@example.com",role:"Designer"}];return h.createElement("div",null,h.createElement("h3",null,"User Cards (Component Style)"),h.createElement(o,{items:y,render:{component:c,dataKey:"user",props:{variant:"default"}},keyBy:"id"}))}});case 6:case"end":return g.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderList } from '@jswork/react-render-controls';

// Define a reusable card component
const UserCard = ({ user, variant = 'default' }) => {
  const styles = {
    default: {
      padding: '16px',
      margin: '8px 0',
      background: '#fafafa',
      border: '1px solid #d9d9d9',
      borderRadius: '8px'
    },
    compact: {
      padding: '8px 12px',
      margin: '4px 0',
      background: '#f5f5f5',
      border: '1px solid #e8e8e8',
      borderRadius: '4px'
    }
  };

  return (
    <div style={styles[variant]}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{user.name}</div>
      <div style={{ fontSize: '14px', color: '#666' }}>{user.email}</div>
      <div style={{ marginTop: '8px' }}>
        <span style={{
          padding: '2px 8px',
          background: '#e6f7ff',
          color: '#0958d9',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          {user.role}
        </span>
      </div>
    </div>
  );
};

export default () => {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Developer' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Designer' }
  ];

  return (
    <div>
      <h3>User Cards (Component Style)</h3>
      <RenderList
        items={users}
        render={{
          component: UserCard,
          dataKey: 'user',
          props: { variant: 'default' }
        }}
        keyBy="id"
      />
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var u=E()(p()().mark(function o(){var c,n=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(972).then(e.bind(e,71972));case 2:return i.abrupt("return",(c=i.sent).default.apply(c,n));case 3:case"end":return i.stop()}},o)}));function d(){return u.apply(this,arguments)}return d}()}}}},46847:function(C,s,e){"use strict";var l;e.r(s),e.d(s,{demos:function(){return h}});var S=e(90228),x=e.n(S),B=e(48305),M=e.n(B),L=e(87999),p=e.n(L),t=e(75271),E=e(81735),h={"docs-playground-render-match-demo-0":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderMatch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("pending"),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"Order Status"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("pending")},style:{marginRight:"8px"}},"Pending"),t.createElement("button",{onClick:function(){return m("processing")},style:{marginRight:"8px"}},"Processing"),t.createElement("button",{onClick:function(){return m("shipped")},style:{marginRight:"8px"}},"Shipped"),t.createElement("button",{onClick:function(){return m("delivered")},style:{marginRight:"8px"}},"Delivered"),t.createElement("button",{onClick:function(){return m("failed")}},"Failed")),t.createElement(u,{value:r,items:["pending","processing","shipped","delivered","failed"]},t.createElement("div",{style:{padding:"12px",background:"#fff7e6",borderRadius:"4px"}},t.createElement("strong",null,"Pending")," - Your order is waiting to be processed"),t.createElement("div",{style:{padding:"12px",background:"#e6f7ff",borderRadius:"4px"}},t.createElement("strong",null,"Processing")," - Your order is being prepared"),t.createElement("div",{style:{padding:"12px",background:"#f0f5ff",borderRadius:"4px"}},t.createElement("strong",null,"Shipped")," - Your order is on its way"),t.createElement("div",{style:{padding:"12px",background:"#f6ffed",borderRadius:"4px"}},t.createElement("strong",null,"Delivered")," - Your order has arrived!"),t.createElement("div",{style:{padding:"12px",background:"#fff1f0",borderRadius:"4px"}},t.createElement("strong",null,"Failed")," - There was an issue with your order")))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [status, setStatus] = useState('pending');

  return (
    <div>
      <h3>Order Status</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setStatus('pending')} style={{ marginRight: '8px' }}>Pending</button>
        <button onClick={() => setStatus('processing')} style={{ marginRight: '8px' }}>Processing</button>
        <button onClick={() => setStatus('shipped')} style={{ marginRight: '8px' }}>Shipped</button>
        <button onClick={() => setStatus('delivered')} style={{ marginRight: '8px' }}>Delivered</button>
        <button onClick={() => setStatus('failed')}>Failed</button>
      </div>

      <RenderMatch value={status} items={['pending', 'processing', 'shipped', 'delivered', 'failed']}>
        <div style={{ padding: '12px', background: '#fff7e6', borderRadius: '4px' }}>
          <strong>Pending</strong> - Your order is waiting to be processed
        </div>
        <div style={{ padding: '12px', background: '#e6f7ff', borderRadius: '4px' }}>
          <strong>Processing</strong> - Your order is being prepared
        </div>
        <div style={{ padding: '12px', background: '#f0f5ff', borderRadius: '4px' }}>
          <strong>Shipped</strong> - Your order is on its way
        </div>
        <div style={{ padding: '12px', background: '#f6ffed', borderRadius: '4px' }}>
          <strong>Delivered</strong> - Your order has arrived!
        </div>
        <div style={{ padding: '12px', background: '#fff1f0', borderRadius: '4px' }}>
          <strong>Failed</strong> - There was an issue with your order
        </div>
      </RenderMatch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}},"docs-playground-render-match-demo-1":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderMatch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("medium"),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"Task Priority"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("low")},style:{marginRight:"8px"}},"Low"),t.createElement("button",{onClick:function(){return m("normal")},style:{marginRight:"8px"}},"Normal"),t.createElement("button",{onClick:function(){return m("medium")},style:{marginRight:"8px"}},"Medium"),t.createElement("button",{onClick:function(){return m("high")}},"High")),t.createElement(u,{value:r,items:[["low","normal"],["medium","high"]]},t.createElement("div",{style:{padding:"16px",background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"4px"}},"Normal Priority - No immediate action required"),t.createElement("div",{style:{padding:"16px",background:"#fff7e6",border:"1px solid #ffd591",borderRadius:"4px"}},"High Priority - Urgent attention needed")))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [priority, setPriority] = useState('medium');

  return (
    <div>
      <h3>Task Priority</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setPriority('low')} style={{ marginRight: '8px' }}>Low</button>
        <button onClick={() => setPriority('normal')} style={{ marginRight: '8px' }}>Normal</button>
        <button onClick={() => setPriority('medium')} style={{ marginRight: '8px' }}>Medium</button>
        <button onClick={() => setPriority('high')}>High</button>
      </div>

      <RenderMatch
        value={priority}
        items={[
          ['low', 'normal'],
          ['medium', 'high']
        ]}
      >
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px'
        }}>
          Normal Priority - No immediate action required
        </div>
        <div style={{
          padding: '16px',
          background: '#fff7e6',
          border: '1px solid #ffd591',
          borderRadius: '4px'
        }}>
          High Priority - Urgent attention needed
        </div>
      </RenderMatch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}},"docs-playground-render-match-demo-2":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderMatch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("200"),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"HTTP Response"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("200")},style:{marginRight:"8px"}},"200 OK"),t.createElement("button",{onClick:function(){return m("201")},style:{marginRight:"8px"}},"201 Created"),t.createElement("button",{onClick:function(){return m("400")},style:{marginRight:"8px"}},"400 Bad"),t.createElement("button",{onClick:function(){return m("401")},style:{marginRight:"8px"}},"401 Unauthorized"),t.createElement("button",{onClick:function(){return m("404")},style:{marginRight:"8px"}},"404 Not Found"),t.createElement("button",{onClick:function(){return m("500")}},"500 Error")),t.createElement(u,{value:r,items:[["200","201"],["400","401","403","404"],["500","502","503"]]},t.createElement("div",{style:{padding:"16px",background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"4px",color:"#389e0d"}},"Success - Request completed successfully"),t.createElement("div",{style:{padding:"16px",background:"#fff7e6",border:"1px solid #ffd591",borderRadius:"4px",color:"#d46b08"}},"Client Error - Invalid request"),t.createElement("div",{style:{padding:"16px",background:"#fff1f0",border:"1px solid #ffa39e",borderRadius:"4px",color:"#cf1322"}},"Server Error - Something went wrong")))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [statusCode, setStatusCode] = useState('200');

  return (
    <div>
      <h3>HTTP Response</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setStatusCode('200')} style={{ marginRight: '8px' }}>200 OK</button>
        <button onClick={() => setStatusCode('201')} style={{ marginRight: '8px' }}>201 Created</button>
        <button onClick={() => setStatusCode('400')} style={{ marginRight: '8px' }}>400 Bad</button>
        <button onClick={() => setStatusCode('401')} style={{ marginRight: '8px' }}>401 Unauthorized</button>
        <button onClick={() => setStatusCode('404')} style={{ marginRight: '8px' }}>404 Not Found</button>
        <button onClick={() => setStatusCode('500')}>500 Error</button>
      </div>

      <RenderMatch
        value={statusCode}
        items={[
          ['200', '201'],
          ['400', '401', '403', '404'],
          ['500', '502', '503']
        ]}
      >
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px',
          color: '#389e0d'
        }}>
          Success - Request completed successfully
        </div>
        <div style={{
          padding: '16px',
          background: '#fff7e6',
          border: '1px solid #ffd591',
          borderRadius: '4px',
          color: '#d46b08'
        }}>
          Client Error - Invalid request
        </div>
        <div style={{
          padding: '16px',
          background: '#fff1f0',
          border: '1px solid #ffa39e',
          borderRadius: '4px',
          color: '#cf1322'
        }}>
          Server Error - Something went wrong
        </div>
      </RenderMatch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}},"docs-playground-render-match-demo-3":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderMatch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("light"),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"Theme Selector"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("light")},style:{marginRight:"8px"}},"Light"),t.createElement("button",{onClick:function(){return m("dark")},style:{marginRight:"8px"}},"Dark"),t.createElement("button",{onClick:function(){return m("auto")}},"Auto")),t.createElement(u,{value:r,items:["light","dark","auto"]},t.createElement("div",{style:{padding:"24px",background:"#ffffff",border:"1px solid #d9d9d9",borderRadius:"8px",color:"#000000"}},t.createElement("strong",null,"Light Theme"),t.createElement("p",null,"Clean and bright interface")),t.createElement("div",{style:{padding:"24px",background:"#1f1f1f",border:"1px solid #434343",borderRadius:"8px",color:"#ffffff"}},t.createElement("strong",null,"Dark Theme"),t.createElement("p",null,"Easy on the eyes")),t.createElement("div",{style:{padding:"24px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px",color:"#ffffff"}},t.createElement("strong",null,"Auto Theme"),t.createElement("p",null,"Follows system preference"))))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <h3>Theme Selector</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setTheme('light')} style={{ marginRight: '8px' }}>Light</button>
        <button onClick={() => setTheme('dark')} style={{ marginRight: '8px' }}>Dark</button>
        <button onClick={() => setTheme('auto')}>Auto</button>
      </div>

      <RenderMatch value={theme} items={['light', 'dark', 'auto']}>
        <div style={{
          padding: '24px',
          background: '#ffffff',
          border: '1px solid #d9d9d9',
          borderRadius: '8px',
          color: '#000000'
        }}>
          <strong>Light Theme</strong>
          <p>Clean and bright interface</p>
        </div>
        <div style={{
          padding: '24px',
          background: '#1f1f1f',
          border: '1px solid #434343',
          borderRadius: '8px',
          color: '#ffffff'
        }}>
          <strong>Dark Theme</strong>
          <p>Easy on the eyes</p>
        </div>
        <div style={{
          padding: '24px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '8px',
          color: '#ffffff'
        }}>
          <strong>Auto Theme</strong>
          <p>Follows system preference</p>
        </div>
      </RenderMatch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}},"docs-playground-render-match-demo-4":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderMatch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("member"),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"User Role Badge"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("owner")},style:{marginRight:"8px"}},"Owner"),t.createElement("button",{onClick:function(){return m("admin")},style:{marginRight:"8px"}},"Admin"),t.createElement("button",{onClick:function(){return m("moderator")},style:{marginRight:"8px"}},"Moderator"),t.createElement("button",{onClick:function(){return m("member")}},"Member")),t.createElement("div",{style:{display:"inline-block"}},t.createElement(u,{value:r,items:[["owner","admin"],["moderator","editor"],"member"]},t.createElement("div",{style:{padding:"8px 16px",background:"#fff1f0",border:"1px solid #ffa39e",borderRadius:"20px",color:"#cf1322",fontWeight:"bold"}},"ADMINISTRATOR"),t.createElement("div",{style:{padding:"8px 16px",background:"#fff7e6",border:"1px solid #ffd591",borderRadius:"20px",color:"#d46b08",fontWeight:"bold"}},"MODERATOR"),t.createElement("div",{style:{padding:"8px 16px",background:"#e6f7ff",border:"1px solid #91d5ff",borderRadius:"20px",color:"#0958d9"}},"MEMBER"))))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderMatch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [role, setRole] = useState('member');

  return (
    <div>
      <h3>User Role Badge</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setRole('owner')} style={{ marginRight: '8px' }}>Owner</button>
        <button onClick={() => setRole('admin')} style={{ marginRight: '8px' }}>Admin</button>
        <button onClick={() => setRole('moderator')} style={{ marginRight: '8px' }}>Moderator</button>
        <button onClick={() => setRole('member')}>Member</button>
      </div>

      <div style={{ display: 'inline-block' }}>
        <RenderMatch
          value={role}
          items={[
            ['owner', 'admin'],
            ['moderator', 'editor'],
            'member'
          ]}
        >
          <div style={{
            padding: '8px 16px',
            background: '#fff1f0',
            border: '1px solid #ffa39e',
            borderRadius: '20px',
            color: '#cf1322',
            fontWeight: 'bold'
          }}>
            ADMINISTRATOR
          </div>
          <div style={{
            padding: '8px 16px',
            background: '#fff7e6',
            border: '1px solid #ffd591',
            borderRadius: '20px',
            color: '#d46b08',
            fontWeight: 'bold'
          }}>
            MODERATOR
          </div>
          <div style={{
            padding: '8px 16px',
            background: '#e6f7ff',
            border: '1px solid #91d5ff',
            borderRadius: '20px',
            color: '#0958d9'
          }}>
            MEMBER
          </div>
        </RenderMatch>
      </div>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}}}},37338:function(C,s,e){"use strict";var l;e.r(s),e.d(s,{demos:function(){return h}});var S=e(90228),x=e.n(S),B=e(48305),M=e.n(B),L=e(87999),p=e.n(L),t=e(75271),E=e(81735),h={"docs-playground-render-switch-demo-0":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderSwitch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("grid"),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"View Toggle"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("grid")},style:{marginRight:"8px"}},"Grid"),t.createElement("button",{onClick:function(){return m("list")}},"List")),t.createElement(u,{cases:[r==="grid",r==="list"]},t.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"}},[1,2,3,4,5,6].map(function(v){return t.createElement("div",{key:v,style:{padding:"16px",background:"#f0f0f0",borderRadius:"4px",textAlign:"center"}},"Item ",v)})),t.createElement("div",null,[1,2,3,4,5,6].map(function(v){return t.createElement("div",{key:v,style:{padding:"8px",borderBottom:"1px solid #d9d9d9"}},"Item ",v)}))))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [view, setView] = useState('grid');

  return (
    <div>
      <h3>View Toggle</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setView('grid')} style={{ marginRight: '8px' }}>Grid</button>
        <button onClick={() => setView('list')}>List</button>
      </div>

      <RenderSwitch cases={[view === 'grid', view === 'list']}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px'
        }}>
          {[1, 2, 3, 4, 5, 6].map(n => (
            <div key={n} style={{
              padding: '16px',
              background: '#f0f0f0',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              Item {n}
            </div>
          ))}
        </div>
        <div>
          {[1, 2, 3, 4, 5, 6].map(n => (
            <div key={n} style={{
              padding: '8px',
              borderBottom: '1px solid #d9d9d9'
            }}>
              Item {n}
            </div>
          ))}
        </div>
      </RenderSwitch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}},"docs-playground-render-switch-demo-1":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderSwitch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("read"),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"Permission System"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("none")},style:{marginRight:"8px"}},"None"),t.createElement("button",{onClick:function(){return m("read")},style:{marginRight:"8px"}},"Read"),t.createElement("button",{onClick:function(){return m("write")},style:{marginRight:"8px"}},"Write"),t.createElement("button",{onClick:function(){return m("admin")}},"Admin")),t.createElement(u,{cases:[r==="admin",r==="write",r==="read"],fallback:t.createElement("div",{style:{padding:"16px",background:"#f5f5f5",border:"1px solid #d9d9d9",borderRadius:"4px"}},"No Access - You don't have permission")},t.createElement("div",{style:{padding:"16px",background:"#fff7e6",border:"2px solid #fa8c16",borderRadius:"4px"}},t.createElement("strong",null,"Admin Access"),t.createElement("p",null,"Full control including user management")),t.createElement("div",{style:{padding:"16px",background:"#e6f7ff",border:"2px solid #1890ff",borderRadius:"4px"}},t.createElement("strong",null,"Write Access"),t.createElement("p",null,"Can create and edit content")),t.createElement("div",{style:{padding:"16px",background:"#f6ffed",border:"2px solid #52c41a",borderRadius:"4px"}},t.createElement("strong",null,"Read Access"),t.createElement("p",null,"View only permission"))))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [permission, setPermission] = useState('read');

  return (
    <div>
      <h3>Permission System</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setPermission('none')} style={{ marginRight: '8px' }}>None</button>
        <button onClick={() => setPermission('read')} style={{ marginRight: '8px' }}>Read</button>
        <button onClick={() => setPermission('write')} style={{ marginRight: '8px' }}>Write</button>
        <button onClick={() => setPermission('admin')}>Admin</button>
      </div>

      <RenderSwitch
        cases={[permission === 'admin', permission === 'write', permission === 'read']}
        fallback={
          <div style={{
            padding: '16px',
            background: '#f5f5f5',
            border: '1px solid #d9d9d9',
            borderRadius: '4px'
          }}>
            No Access - You don't have permission
          </div>
        }
      >
        <div style={{
          padding: '16px',
          background: '#fff7e6',
          border: '2px solid #fa8c16',
          borderRadius: '4px'
        }}>
          <strong>Admin Access</strong>
          <p>Full control including user management</p>
        </div>
        <div style={{
          padding: '16px',
          background: '#e6f7ff',
          border: '2px solid #1890ff',
          borderRadius: '4px'
        }}>
          <strong>Write Access</strong>
          <p>Can create and edit content</p>
        </div>
        <div style={{
          padding: '16px',
          background: '#f6ffed',
          border: '2px solid #52c41a',
          borderRadius: '4px'
        }}>
          <strong>Read Access</strong>
          <p>View only permission</p>
        </div>
      </RenderSwitch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}},"docs-playground-render-switch-demo-2":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderSwitch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("disconnected"),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"Connection Status"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("connected")},style:{marginRight:"8px"}},"Connected"),t.createElement("button",{onClick:function(){return m("connecting")},style:{marginRight:"8px"}},"Connecting"),t.createElement("button",{onClick:function(){return m("disconnected")},style:{marginRight:"8px"}},"Disconnected"),t.createElement("button",{onClick:function(){return m("error")}},"Error")),t.createElement(u,{cases:[r==="connected",r==="connecting",r==="error"],fallback:t.createElement("div",{style:{padding:"12px",background:"#f5f5f5",borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px"}},t.createElement("span",{style:{color:"#8c8c8c"}},"\u25CF"),"Disconnected")},t.createElement("div",{style:{padding:"12px",background:"#f6ffed",borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px"}},t.createElement("span",{style:{color:"#52c41a"}},"\u25CF"),"Connected - Ready to use"),t.createElement("div",{style:{padding:"12px",background:"#e6f7ff",borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px"}},t.createElement("span",{style:{color:"#1890ff",animation:"pulse 1s infinite"}},"\u25CF"),"Connecting..."),t.createElement("div",{style:{padding:"12px",background:"#fff1f0",borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px"}},t.createElement("span",{style:{color:"#ff4d4f"}},"\u25CF"),"Error - Connection failed")))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [status, setStatus] = useState('disconnected');

  return (
    <div>
      <h3>Connection Status</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setStatus('connected')} style={{ marginRight: '8px' }}>Connected</button>
        <button onClick={() => setStatus('connecting')} style={{ marginRight: '8px' }}>Connecting</button>
        <button onClick={() => setStatus('disconnected')} style={{ marginRight: '8px' }}>Disconnected</button>
        <button onClick={() => setStatus('error')}>Error</button>
      </div>

      <RenderSwitch
        cases={[status === 'connected', status === 'connecting', status === 'error']}
        fallback={
          <div style={{
            padding: '12px',
            background: '#f5f5f5',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ color: '#8c8c8c' }}>\u25CF</span>
            Disconnected
          </div>
        }
      >
        <div style={{
          padding: '12px',
          background: '#f6ffed',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ color: '#52c41a' }}>\u25CF</span>
          Connected - Ready to use
        </div>
        <div style={{
          padding: '12px',
          background: '#e6f7ff',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ color: '#1890ff', animation: 'pulse 1s infinite' }}>\u25CF</span>
          Connecting...
        </div>
        <div style={{
          padding: '12px',
          background: '#fff1f0',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ color: '#ff4d4f' }}>\u25CF</span>
          Error - Connection failed
        </div>
      </RenderSwitch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}},"docs-playground-render-switch-demo-3":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderSwitch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("idle"),y=M()(i,2),r=y[0],m=y[1],v=function(){m("submitting"),setTimeout(function(){m("success")},1500)};return t.createElement("div",null,t.createElement("h3",null,"Form States"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("idle")},style:{marginRight:"8px"}},"Idle"),t.createElement("button",{onClick:function(){return m("validating")},style:{marginRight:"8px"}},"Validating"),t.createElement("button",{onClick:function(){return m("submitting")},style:{marginRight:"8px"}},"Submitting"),t.createElement("button",{onClick:function(){return m("success")}},"Success")),t.createElement(u,{cases:[r==="validating",r==="submitting",r==="success"],fallback:t.createElement("div",{style:{padding:"20px",background:"#fafafa",border:"1px solid #d9d9d9",borderRadius:"4px"}},t.createElement("p",null,"Fill out the form and submit"),t.createElement("button",{onClick:v,style:{padding:"8px 16px",background:"#1890ff",color:"white",border:"none",borderRadius:"4px"}},"Submit"))},t.createElement("div",{style:{padding:"20px",background:"#e6f7ff",border:"1px solid #91d5ff",borderRadius:"4px"}},t.createElement("p",null,"Validating form data...")),t.createElement("div",{style:{padding:"20px",background:"#f0f5ff",border:"1px solid #adc6ff",borderRadius:"4px"}},t.createElement("p",null,"Submitting your information...")),t.createElement("div",{style:{padding:"20px",background:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"4px",color:"#389e0d"}},t.createElement("strong",null,"Success!"),t.createElement("p",null,"Your form has been submitted successfully."))))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = () => {
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div>
      <h3>Form States</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setFormState('idle')} style={{ marginRight: '8px' }}>Idle</button>
        <button onClick={() => setFormState('validating')} style={{ marginRight: '8px' }}>Validating</button>
        <button onClick={() => setFormState('submitting')} style={{ marginRight: '8px' }}>Submitting</button>
        <button onClick={() => setFormState('success')}>Success</button>
      </div>

      <RenderSwitch
        cases={[formState === 'validating', formState === 'submitting', formState === 'success']}
        fallback={
          <div style={{
            padding: '20px',
            background: '#fafafa',
            border: '1px solid #d9d9d9',
            borderRadius: '4px'
          }}>
            <p>Fill out the form and submit</p>
            <button
              onClick={handleSubmit}
              style={{ padding: '8px 16px', background: '#1890ff', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Submit
            </button>
          </div>
        }
      >
        <div style={{
          padding: '20px',
          background: '#e6f7ff',
          border: '1px solid #91d5ff',
          borderRadius: '4px'
        }}>
          <p>Validating form data...</p>
        </div>
        <div style={{
          padding: '20px',
          background: '#f0f5ff',
          border: '1px solid #adc6ff',
          borderRadius: '4px'
        }}>
          <p>Submitting your information...</p>
        </div>
        <div style={{
          padding: '20px',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px',
          color: '#389e0d'
        }}>
          <strong>Success!</strong>
          <p>Your form has been submitted successfully.</p>
        </div>
      </RenderSwitch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}},"docs-playground-render-switch-demo-4":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderSwitch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o("desktop"),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"Responsive Layout"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("button",{onClick:function(){return m("mobile")},style:{marginRight:"8px"}},"Mobile"),t.createElement("button",{onClick:function(){return m("tablet")},style:{marginRight:"8px"}},"Tablet"),t.createElement("button",{onClick:function(){return m("desktop")}},"Desktop")),t.createElement(u,{cases:[r==="mobile",r==="tablet"],fallback:t.createElement("div",{style:{padding:"24px",background:"#f0f5ff",border:"2px solid #597ef7",borderRadius:"8px"}},t.createElement("h4",null,"Desktop Layout"),t.createElement("p",null,"Multi-column layout with full navigation"),t.createElement("div",{style:{display:"flex",gap:"8px",marginTop:"12px"}},t.createElement("div",{style:{flex:1,padding:"12px",background:"white",borderRadius:"4px"}},"Column 1"),t.createElement("div",{style:{flex:1,padding:"12px",background:"white",borderRadius:"4px"}},"Column 2"),t.createElement("div",{style:{flex:1,padding:"12px",background:"white",borderRadius:"4px"}},"Column 3")))},t.createElement("div",{style:{padding:"24px",background:"#fff7e6",border:"2px solid #ffa940",borderRadius:"8px",maxWidth:"375px"}},t.createElement("h4",null,"Mobile Layout"),t.createElement("p",null,"Single column with hamburger menu"),t.createElement("div",{style:{marginTop:"12px"}},t.createElement("div",{style:{padding:"12px",background:"white",borderRadius:"4px",marginBottom:"8px"}},"Row 1"),t.createElement("div",{style:{padding:"12px",background:"white",borderRadius:"4px",marginBottom:"8px"}},"Row 2"),t.createElement("div",{style:{padding:"12px",background:"white",borderRadius:"4px"}},"Row 3"))),t.createElement("div",{style:{padding:"24px",background:"#f6ffed",border:"2px solid #95de64",borderRadius:"8px",maxWidth:"768px"}},t.createElement("h4",null,"Tablet Layout"),t.createElement("p",null,"Two-column layout"),t.createElement("div",{style:{display:"flex",gap:"8px",marginTop:"12px"}},t.createElement("div",{style:{flex:1,padding:"12px",background:"white",borderRadius:"4px"}},"Column 1"),t.createElement("div",{style:{flex:1,padding:"12px",background:"white",borderRadius:"4px"}},"Column 2")))))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [device, setDevice] = useState('desktop');

  return (
    <div>
      <h3>Responsive Layout</h3>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setDevice('mobile')} style={{ marginRight: '8px' }}>Mobile</button>
        <button onClick={() => setDevice('tablet')} style={{ marginRight: '8px' }}>Tablet</button>
        <button onClick={() => setDevice('desktop')}>Desktop</button>
      </div>

      <RenderSwitch
        cases={[device === 'mobile', device === 'tablet']}
        fallback={
          <div style={{
            padding: '24px',
            background: '#f0f5ff',
            border: '2px solid #597ef7',
            borderRadius: '8px'
          }}>
            <h4>Desktop Layout</h4>
            <p>Multi-column layout with full navigation</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 1</div>
              <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 2</div>
              <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 3</div>
            </div>
          </div>
        }
      >
        <div style={{
          padding: '24px',
          background: '#fff7e6',
          border: '2px solid #ffa940',
          borderRadius: '8px',
          maxWidth: '375px'
        }}>
          <h4>Mobile Layout</h4>
          <p>Single column with hamburger menu</p>
          <div style={{ marginTop: '12px' }}>
            <div style={{ padding: '12px', background: 'white', borderRadius: '4px', marginBottom: '8px' }}>Row 1</div>
            <div style={{ padding: '12px', background: 'white', borderRadius: '4px', marginBottom: '8px' }}>Row 2</div>
            <div style={{ padding: '12px', background: 'white', borderRadius: '4px' }}>Row 3</div>
          </div>
        </div>
        <div style={{
          padding: '24px',
          background: '#f6ffed',
          border: '2px solid #95de64',
          borderRadius: '8px',
          maxWidth: '768px'
        }}>
          <h4>Tablet Layout</h4>
          <p>Two-column layout</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 1</div>
            <div style={{ flex: 1, padding: '12px', background: 'white', borderRadius: '4px' }}>Column 2</div>
          </div>
        </div>
      </RenderSwitch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}},"docs-playground-render-switch-demo-5":{component:t.memo(t.lazy(p()(x()().mark(function f(){var a,u,d,o;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,81735));case 2:return a=n.sent,u=a.RenderSwitch,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return d=n.sent,o=d.useState,n.abrupt("return",{default:function(){var i=o(10),y=M()(i,2),r=y[0],m=y[1];return t.createElement("div",null,t.createElement("h3",null,"Time-based Greeting"),t.createElement("div",{style:{marginBottom:"16px"}},t.createElement("label",null,"Hour: ",r,":00"),t.createElement("input",{type:"range",min:"0",max:"23",value:r,onChange:function(w){return m(Number(w.target.value))},style:{width:"100%",marginTop:"8px"}}),t.createElement("div",{style:{marginTop:"8px",display:"flex",gap:"8px"}},t.createElement("button",{onClick:function(){return m(6)},style:{marginRight:"8px"}},"6 AM"),t.createElement("button",{onClick:function(){return m(12)},style:{marginRight:"8px"}},"12 PM"),t.createElement("button",{onClick:function(){return m(18)}},"6 PM"))),t.createElement(u,{cases:[r>=5&&r<12,r>=12&&r<18,r>=18&&r<22],fallback:t.createElement("div",{style:{padding:"24px",background:"#1f1f1f",color:"white",borderRadius:"8px"}},t.createElement("h2",null,"Good Night"),t.createElement("p",null,"It's ",r,":00 o'clock. Time to rest!"))},t.createElement("div",{style:{padding:"24px",background:"#fff7e6",borderRadius:"8px"}},t.createElement("h2",null,"Good Morning"),t.createElement("p",null,"It's ",r,":00 AM. Have a great day!")),t.createElement("div",{style:{padding:"24px",background:"#f0f5ff",borderRadius:"8px"}},t.createElement("h2",null,"Good Afternoon"),t.createElement("p",null,"It's ",r,":00 PM. Keep up the good work!")),t.createElement("div",{style:{padding:"24px",background:"#f9f0ff",borderRadius:"8px"}},t.createElement("h2",null,"Good Evening"),t.createElement("p",null,"It's ",r,":00 PM. Hope you had a productive day!"))))}});case 9:case"end":return n.stop()}},f)})))),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';

export default () => {
  const [hour, setHour] = useState(10);

  return (
    <div>
      <h3>Time-based Greeting</h3>
      <div style={{ marginBottom: '16px' }}>
        <label>Hour: {hour}:00</label>
        <input
          type="range"
          min="0"
          max="23"
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
          style={{ width: '100%', marginTop: '8px' }}
        />
        <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
          <button onClick={() => setHour(6)} style={{ marginRight: '8px' }}>6 AM</button>
          <button onClick={() => setHour(12)} style={{ marginRight: '8px' }}>12 PM</button>
          <button onClick={() => setHour(18)}>6 PM</button>
        </div>
      </div>

      <RenderSwitch
        cases={[
          hour >= 5 && hour < 12,
          hour >= 12 && hour < 18,
          hour >= 18 && hour < 22
        ]}
        fallback={
          <div style={{
            padding: '24px',
            background: '#1f1f1f',
            color: 'white',
            borderRadius: '8px'
          }}>
            <h2>Good Night</h2>
            <p>It's {hour}:00 o'clock. Time to rest!</p>
          </div>
        }
      >
        <div style={{
          padding: '24px',
          background: '#fff7e6',
          borderRadius: '8px'
        }}>
          <h2>Good Morning</h2>
          <p>It's {hour}:00 AM. Have a great day!</p>
        </div>
        <div style={{
          padding: '24px',
          background: '#f0f5ff',
          borderRadius: '8px'
        }}>
          <h2>Good Afternoon</h2>
          <p>It's {hour}:00 PM. Keep up the good work!</p>
        </div>
        <div style={{
          padding: '24px',
          background: '#f9f0ff',
          borderRadius: '8px'
        }}>
          <h2>Good Evening</h2>
          <p>It's {hour}:00 PM. Hope you had a productive day!</p>
        </div>
      </RenderSwitch>
    </div>
  );
};`},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@jswork/react-render-controls":E,react:l||(l=e.t(t,2))},renderOpts:{compile:function(){var f=p()(x()().mark(function u(){var d,o=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(972).then(e.bind(e,71972));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,o));case 3:case"end":return n.stop()}},u)}));function a(){return f.apply(this,arguments)}return a}()}}}},69978:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Complete type definitions and API documentation for all components.",paraId:0,tocIndex:0},{value:`import {
  RenderList,
  RenderIf,
  RenderMatch,
  RenderSwitch
} from '@jswork/react-render-controls';

// Types
import type {
  RenderListProps,
  RenderIfProps,
  RenderMatchProps,
  RenderSwitchProps
} from '@jswork/react-render-controls';
`,paraId:1,tocIndex:1},{value:`interface RenderListProps<T = any> {
  items: readonly T[];
  render: RenderProp<T>;
  keyBy?: KeyBy<T>;
}
`,paraId:2,tocIndex:3},{value:`/**
 * Render function signature
 */
type RenderFn<T> = (
  item: T,
  index: number,
  items: readonly T[]
) => ReactNode;

/**
 * Component-based render configuration
 */
interface RenderComponentConfig<P> {
  component: ElementType<P & { children?: ReactNode }>;
  dataKey?: string;
  props?: P;
}

/**
 * Render prop - either function or component config
 */
type RenderProp<T> = RenderFn<T> | RenderComponentConfig<any>;

/**
 * Key generation strategy
 */
type KeyBy<T> = keyof T | ((item: T) => string);
`,paraId:3,tocIndex:4},{value:"Parameter",paraId:4,tocIndex:5},{value:"Description",paraId:4,tocIndex:5},{value:"T",paraId:4,tocIndex:5},{value:"The type of items in the array",paraId:4,tocIndex:5},{value:`interface RenderIfProps {
  when: boolean;
  children: ReactNode;
}
`,paraId:5,tocIndex:7},{value:"Single child",paraId:6,tocIndex:8},{value:": Renders the child when ",paraId:6,tocIndex:8},{value:"when",paraId:6,tocIndex:8},{value:" is ",paraId:6,tocIndex:8},{value:"true",paraId:6,tocIndex:8},{value:", renders ",paraId:6,tocIndex:8},{value:"null",paraId:6,tocIndex:8},{value:" when ",paraId:6,tocIndex:8},{value:"false",paraId:6,tocIndex:8},{value:"Two children",paraId:6,tocIndex:8},{value:": Renders first child when ",paraId:6,tocIndex:8},{value:"when",paraId:6,tocIndex:8},{value:" is ",paraId:6,tocIndex:8},{value:"true",paraId:6,tocIndex:8},{value:", renders second child when ",paraId:6,tocIndex:8},{value:"false",paraId:6,tocIndex:8},{value:"Warns if more than 2 children are provided",paraId:7,tocIndex:9},{value:"Warns if children structure is invalid",paraId:7,tocIndex:9},{value:`interface RenderMatchProps<T = string> {
  value: T;
  items: readonly MatchValue[];
  children: ReactNode;
}
`,paraId:8,tocIndex:11},{value:`/**
 * Match value - either single string or array of strings
 */
type MatchValue = string | readonly string[];
`,paraId:9,tocIndex:12},{value:"Parameter",paraId:10,tocIndex:13},{value:"Description",paraId:10,tocIndex:13},{value:"T",paraId:10,tocIndex:13},{value:"The type of value to match (defaults to ",paraId:10,tocIndex:13},{value:"string",paraId:10,tocIndex:13},{value:")",paraId:10,tocIndex:13},{value:"Matches ",paraId:11,tocIndex:14},{value:"value",paraId:11,tocIndex:14},{value:" against each item in ",paraId:11,tocIndex:14},{value:"items",paraId:11,tocIndex:14},{value:" array",paraId:11,tocIndex:14},{value:"Renders the child at the matching index",paraId:11,tocIndex:14},{value:"Supports multiple values per item using array syntax",paraId:11,tocIndex:14},{value:"Warns if value doesn't match any item",paraId:12,tocIndex:15},{value:"Warns if items length doesn't match children length",paraId:12,tocIndex:15},{value:`interface RenderSwitchProps {
  cases: readonly boolean[];
  children: ReactNode;
  fallback?: ReactNode;
}
`,paraId:13,tocIndex:17},{value:"Evaluates each boolean in ",paraId:14,tocIndex:18},{value:"cases",paraId:14,tocIndex:18},{value:" array in order",paraId:14,tocIndex:18},{value:"Renders the child at the first ",paraId:14,tocIndex:18},{value:"true",paraId:14,tocIndex:18},{value:" index",paraId:14,tocIndex:18},{value:"Renders ",paraId:14,tocIndex:18},{value:"fallback",paraId:14,tocIndex:18},{value:" if no cases match",paraId:14,tocIndex:18},{value:"If no ",paraId:14,tocIndex:18},{value:"fallback",paraId:14,tocIndex:18},{value:" provided, renders ",paraId:14,tocIndex:18},{value:"null",paraId:14,tocIndex:18},{value:" when no cases match",paraId:14,tocIndex:18},{value:"Warns if cases array is empty",paraId:15,tocIndex:19},{value:"Warns if cases length doesn't match children length",paraId:15,tocIndex:19},{value:`type ReactNode = React.ReactNode;
`,paraId:16,tocIndex:21},{value:"Standard React node type including elements, strings, numbers, fragments, etc.",paraId:17,tocIndex:21},{value:`type ElementType<P = any> = React.ElementType<P>;
`,paraId:18,tocIndex:22},{value:"Standard React element type for components.",paraId:19,tocIndex:22},{value:`interface User {
  id: number;
  name: string;
  email: string;
}

function UserList({ users }: { users: User[] }) {
  return (
    <RenderList<User>
      items={users}
      render={(user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      )}
      keyBy="id"
    />
  );
}
`,paraId:20,tocIndex:24},{value:`function UserList({ users }: { users: User[] }) {
  return (
    <RenderList
      items={users}
      render={(user) => (
        // user is automatically inferred as User
        <UserCard data={user} />
      )}
      keyBy="id"
    />
  );
}
`,paraId:21,tocIndex:25},{value:`type Status = 'pending' | 'processing' | 'completed' | 'failed';

function StatusDisplay({ status }: { status: Status }) {
  return (
    <RenderMatch<Status>
      value={status}
      items={['pending', 'processing', 'completed', 'failed']}
    >
      <PendingState />
      <ProcessingState />
      <CompletedState />
      <FailedState />
    </RenderMatch>
  );
}
`,paraId:22,tocIndex:26},{value:"For the best TypeScript experience, ensure your ",paraId:23,tocIndex:27},{value:"tsconfig.json",paraId:23,tocIndex:27},{value:" includes:",paraId:23,tocIndex:27},{value:`{
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node"
  }
}
`,paraId:24,tocIndex:27},{value:"All types are exported for use in your code:",paraId:25,tocIndex:28},{value:`import type {
  // RenderList types
  RenderListProps,
  RenderFn,
  RenderComponentConfig,
  RenderProp,
  KeyBy,
  // RenderIf types
  RenderIfProps,
  // RenderMatch types
  RenderMatchProps,
  MatchValue,
  // RenderSwitch types
  RenderSwitchProps
} from '@jswork/react-render-controls';
`,paraId:26,tocIndex:28}]},59825:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"A collection of React components for declarative rendering control. Simplify conditional rendering, list rendering, and pattern matching in your React applications.",paraId:0,tocIndex:0},{value:"RenderIf",paraId:1,tocIndex:1},{value:"Conditional rendering component supporting if/else patterns with automatic warning for invalid usage.",paraId:2,tocIndex:2},{value:"Best for",paraId:3,tocIndex:2},{value:": Simple conditional rendering, if/else patterns",paraId:3,tocIndex:2},{value:`<RenderIf when={isLoggedIn}>
  <Dashboard />
  <Login />
</RenderIf>
`,paraId:4,tocIndex:2},{value:"RenderList",paraId:5,tocIndex:2},{value:"Simplified list rendering component that handles empty states and automatically renders items.",paraId:6,tocIndex:3},{value:"Best for",paraId:7,tocIndex:3},{value:": Rendering arrays with empty state handling",paraId:7,tocIndex:3},{value:`<RenderList
  items={users}
  render={(user) => <UserCard key={user.id} user={user} />}
  empty={<p>No users found</p>}
/>
`,paraId:8,tocIndex:3},{value:"RenderMatch",paraId:9,tocIndex:3},{value:"Pattern matching component that renders the child matching the given value.",paraId:10,tocIndex:4},{value:"Best for",paraId:11,tocIndex:4},{value:": Multi-way conditionals, switch-like patterns",paraId:11,tocIndex:4},{value:`<RenderMatch value={status} items={['loading', 'success', 'error']}>
  <Loader />
  <Success />
  <Error />
</RenderMatch>
`,paraId:12,tocIndex:4},{value:"RenderSwitch",paraId:13,tocIndex:4},{value:"Switch-style conditional rendering with multiple conditions and fallback support.",paraId:14,tocIndex:5},{value:"Best for",paraId:15,tocIndex:5},{value:": Complex multi-condition rendering, multiple boolean conditions",paraId:15,tocIndex:5},{value:`<RenderSwitch cases={[isAdmin, isPremium, isUser]} fallback={<GuestPanel />}>
  <AdminPanel />
  <PremiumPanel />
  <UserPanel />
</RenderSwitch>
`,paraId:16,tocIndex:5},{value:"Component",paraId:17,tocIndex:6},{value:"Use Case",paraId:17,tocIndex:6},{value:"Complexity",paraId:17,tocIndex:6},{value:"Flexibility",paraId:17,tocIndex:6},{value:"RenderIf",paraId:17,tocIndex:6},{value:"Simple conditions",paraId:17,tocIndex:6},{value:"Low",paraId:17,tocIndex:6},{value:"Limited",paraId:17,tocIndex:6},{value:"RenderList",paraId:17,tocIndex:6},{value:"List rendering",paraId:17,tocIndex:6},{value:"Low",paraId:17,tocIndex:6},{value:"Medium",paraId:17,tocIndex:6},{value:"RenderMatch",paraId:17,tocIndex:6},{value:"Value matching",paraId:17,tocIndex:6},{value:"Medium",paraId:17,tocIndex:6},{value:"Medium",paraId:17,tocIndex:6},{value:"RenderSwitch",paraId:17,tocIndex:6},{value:"Complex patterns",paraId:17,tocIndex:6},{value:"High",paraId:17,tocIndex:6},{value:"High",paraId:17,tocIndex:6},{value:`npm install @jswork/react-render-controls
`,paraId:18,tocIndex:7},{value:`import { RenderIf, RenderList, RenderMatch, RenderSwitch } from '@jswork/react-render-controls';
`,paraId:19,tocIndex:8},{value:"You have simple true/false conditions",paraId:20,tocIndex:10},{value:"You need if/else patterns",paraId:20,tocIndex:10},{value:"You want clean, readable conditional rendering",paraId:20,tocIndex:10},{value:"You need to render arrays of data",paraId:21,tocIndex:11},{value:"You want automatic empty state handling",paraId:21,tocIndex:11},{value:"You need to map over items consistently",paraId:21,tocIndex:11},{value:"You have multiple conditions based on a single value",paraId:22,tocIndex:12},{value:"You want cleaner code than nested ternaries",paraId:22,tocIndex:12},{value:"You need to match specific values or patterns",paraId:22,tocIndex:12},{value:"You have complex conditional logic",paraId:23,tocIndex:13},{value:"You need predicate-based matching",paraId:23,tocIndex:13},{value:"You want the most flexibility for conditions",paraId:23,tocIndex:13}]},68243:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Conditional rendering component supporting if/else patterns with automatic warning for invalid usage.",paraId:0,tocIndex:0},{value:"Single child",paraId:1,tocIndex:1},{value:": Render when true, nothing when false",paraId:1,tocIndex:1},{value:"Two children",paraId:1,tocIndex:1},{value:": If/else pattern",paraId:1,tocIndex:1},{value:"Development warnings",paraId:1,tocIndex:1},{value:": Alerts for invalid children count",paraId:1,tocIndex:1},{value:"Zero runtime overhead",paraId:1,tocIndex:1},{value:": Optimized for production",paraId:1,tocIndex:1},{value:`import { RenderIf } from '@jswork/react-render-controls';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <RenderIf when={isLoggedIn}>
      <Dashboard />
    </RenderIf>
  );
}
`,paraId:2,tocIndex:3},{value:`<RenderIf when={isLoggedIn}>
  <Dashboard />
  <Login />
</RenderIf>
`,paraId:3,tocIndex:4},{value:"When ",paraId:4,tocIndex:4},{value:"isLoggedIn",paraId:4,tocIndex:4},{value:" is ",paraId:4,tocIndex:4},{value:"true",paraId:4,tocIndex:4},{value:", renders ",paraId:4,tocIndex:4},{value:"<Dashboard />",paraId:4,tocIndex:4},{value:`.
When `,paraId:4,tocIndex:4},{value:"isLoggedIn",paraId:4,tocIndex:4},{value:" is ",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:", renders ",paraId:4,tocIndex:4},{value:"<Login />",paraId:4,tocIndex:4},{value:".",paraId:4,tocIndex:4},{value:"Prop",paraId:5,tocIndex:6},{value:"Type",paraId:5,tocIndex:6},{value:"Required",paraId:5,tocIndex:6},{value:"Default",paraId:5,tocIndex:6},{value:"Description",paraId:5,tocIndex:6},{value:"when",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"Yes",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"Condition to determine which child to render",paraId:5,tocIndex:6},{value:"children",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"Yes",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"Children (1-2 elements)",paraId:5,tocIndex:6},{value:`interface RenderIfProps {
  when: boolean;
  children: ReactNode;
}
`,paraId:6,tocIndex:7},{value:`function PostActions({ post, currentUser }) {
  return (
    <RenderIf when={post.author.id === currentUser.id}>
      <button>Edit</button>
      <button>Delete</button>
    </RenderIf>
  );
}
`,paraId:7,tocIndex:9},{value:`function DataDisplay({ data, isLoading }) {
  return (
    <>
      <RenderIf when={isLoading}>
        <LoadingSpinner />
      </RenderIf>

      <RenderIf when={!isLoading && data}>
        <DataTable data={data} />
      </RenderIf>
    </>
  );
}
`,paraId:8,tocIndex:10},{value:`function UserProfile({ user }) {
  return (
    <RenderIf when={user}>
      <div>
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
      </div>
      <div>
        <p>Please log in to view profile</p>
      </div>
    </RenderIf>
  );
}
`,paraId:9,tocIndex:11},{value:`function AdminPanel({ user }) {
  return (
    <RenderIf when={user.isLoggedIn}>
      <RenderIf when={user.isAdmin}>
        <AdminDashboard />
        <UserDashboard />
      </RenderIf>
    </RenderIf>
  );
}
`,paraId:10,tocIndex:12},{value:`<RenderIf when={showFeatures}>
  <>
    <Feature1 />
    <Feature2 />
    <Feature3 />
  </>
</RenderIf>
`,paraId:11,tocIndex:13},{value:`<RenderIf when={theme === 'dark'}>
  <DarkThemeProvider>
    <App />
  </DarkThemeProvider>
  <LightThemeProvider>
    <App />
  </LightThemeProvider>
</RenderIf>
`,paraId:12,tocIndex:14},{value:"RenderIf",paraId:13,tocIndex:16},{value:" is ideal for simple conditional rendering:",paraId:13,tocIndex:16},{value:`// Good
<RenderIf when={showBanner}>
  <Banner />
</RenderIf>
`,paraId:14,tocIndex:16},{value:"For complex conditions, early returns might be cleaner:",paraId:15,tocIndex:17},{value:`// Also acceptable
if (!showBanner) return null;
return <Banner />;
`,paraId:16,tocIndex:17},{value:`<RenderList
  items={items}
  render={(item) => (
    <RenderIf when={item.isVisible}>
      <ItemCard item={item} />
    </RenderIf>
  )}
/>
`,paraId:17,tocIndex:18},{value:"In development mode, ",paraId:18,tocIndex:19},{value:"RenderIf",paraId:18,tocIndex:19},{value:" will warn you if:",paraId:18,tocIndex:19},{value:"You provide more than 2 children",paraId:19,tocIndex:19},{value:"The children structure is invalid",paraId:19,tocIndex:19},{value:"These warnings help catch bugs early while maintaining zero runtime overhead in production.",paraId:20,tocIndex:19}]},11723:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Declarative list rendering with support for both function and component-based rendering patterns.",paraId:0,tocIndex:0},{value:"Function-style rendering",paraId:1,tocIndex:1},{value:": ",paraId:1,tocIndex:1},{value:"(item, index, items) => ReactNode",paraId:1,tocIndex:1},{value:"Component-style rendering",paraId:1,tocIndex:1},{value:": Automatic prop mapping",paraId:1,tocIndex:1},{value:"Custom key generation",paraId:1,tocIndex:1},{value:": Multiple strategies for unique keys",paraId:1,tocIndex:1},{value:"Full context access",paraId:1,tocIndex:1},{value:": Index and full items array available",paraId:1,tocIndex:1},{value:`import { RenderList } from '@jswork/react-render-controls';

function UserList({ users }) {
  return (
    <RenderList
      items={users}
      render={(user) => <UserCard user={user} />}
      keyBy="id"
    />
  );
}
`,paraId:2,tocIndex:3},{value:`<RenderList
  items={users}
  render={{
    component: UserCard,
    dataKey: "user",
    props: { variant: 'compact' }
  }}
  keyBy="id"
/>
`,paraId:3,tocIndex:4},{value:`<RenderList
  items={users}
  render={(user, index, items) => (
    <div>
      {index + 1} / {items.length}: {user.name}
    </div>
  )}
/>
`,paraId:4,tocIndex:5},{value:"Prop",paraId:5,tocIndex:7},{value:"Type",paraId:5,tocIndex:7},{value:"Required",paraId:5,tocIndex:7},{value:"Default",paraId:5,tocIndex:7},{value:"Description",paraId:5,tocIndex:7},{value:"items",paraId:5,tocIndex:7},{value:"readonly T[]",paraId:5,tocIndex:7},{value:"Yes",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"The data array to render",paraId:5,tocIndex:7},{value:"render",paraId:5,tocIndex:7},{value:"RenderProp<T>",paraId:5,tocIndex:7},{value:"Yes",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"Function or component config for rendering each item",paraId:5,tocIndex:7},{value:"keyBy",paraId:5,tocIndex:7},{value:"KeyBy<T>",paraId:5,tocIndex:7},{value:"No",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"Strategy for generating unique keys",paraId:5,tocIndex:7},{value:`type RenderFn<T> = (item: T, index: number, items: readonly T[]) => ReactNode;

interface RenderComponentConfig<P> {
  component: ElementType<P & { children?: ReactNode }>;
  dataKey?: string;
  props?: P;
}

type RenderProp<T> = RenderFn<T> | RenderComponentConfig<any>;

type KeyBy<T> = keyof T | ((item: T) => string);
`,paraId:6,tocIndex:8},{value:`const fruits = ['Apple', 'Banana', 'Cherry'];

<RenderList
  items={fruits}
  render={(fruit) => <li>{fruit}</li>}
/>
`,paraId:7,tocIndex:10},{value:`interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

<RenderList
  items={users}
  render={(user) => (
    <div key={user.id}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )}
  keyBy="id"
/>
`,paraId:8,tocIndex:11},{value:`<RenderList
  items={users}
  render={(user) => <UserCard user={user} />}
  keyBy={(user) => \`user-\${user.id}\`}
/>
`,paraId:9,tocIndex:12},{value:`interface UserCardProps {
  user: User;
  variant: 'compact' | 'detailed';
  onEdit: (id: number) => void;
}

<RenderList
  items={users}
  render={{
    component: UserCard,
    dataKey: "user",
    props: {
      variant: 'compact',
      onEdit: handleEdit
    }
  }}
  keyBy="id"
/>
`,paraId:10,tocIndex:13},{value:`<RenderList
  items={users}
  render={(user, index) => (
    <div className={index % 2 === 0 ? 'even' : 'odd'}>
      {index + 1}. {user.name}
    </div>
  )}
/>
`,paraId:11,tocIndex:14},{value:`<RenderList
  items={numbers}
  render={(num, index, items) => {
    const total = items.reduce((sum, n) => sum + n, 0);
    const percentage = (num / total) * 100;
    return <ProgressBar value={percentage} />;
  }}
/>
`,paraId:12,tocIndex:15},{value:"The ",paraId:13,tocIndex:16},{value:"keyBy",paraId:13,tocIndex:16},{value:" prop is recommended for proper React reconciliation",paraId:13,tocIndex:16},{value:"When using component-style rendering, ",paraId:13,tocIndex:16},{value:"dataKey",paraId:13,tocIndex:16},{value:" specifies which prop receives the item data",paraId:13,tocIndex:16},{value:"The function render style provides more flexibility for complex scenarios",paraId:13,tocIndex:16}]},17419:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Pattern matching component that renders the child matching the given value.",paraId:0,tocIndex:0},{value:"Single value matching",paraId:1,tocIndex:1},{value:": Match one value to one child",paraId:1,tocIndex:1},{value:"Multiple value matching",paraId:1,tocIndex:1},{value:": Match multiple values to the same child (array syntax)",paraId:1,tocIndex:1},{value:"Development warnings",paraId:1,tocIndex:1},{value:": Alerts for unmatched values",paraId:1,tocIndex:1},{value:"Status-based rendering",paraId:1,tocIndex:1},{value:": Perfect for state machines and status flows",paraId:1,tocIndex:1},{value:`import { RenderMatch } from '@jswork/react-render-controls';

function StatusDisplay({ status }) {
  return (
    <RenderMatch value={status} items={['pending', 'success', 'error']}>
      <PendingState />
      <SuccessState />
      <ErrorState />
    </RenderMatch>
  );
}
`,paraId:2,tocIndex:3},{value:`<RenderMatch
  value={status}
  items={[['pending', 'processing'], 'completed', ['failed', 'error']]}
>
  <LoadingState />
  <SuccessState />
  <ErrorState />
</RenderMatch>
`,paraId:3,tocIndex:4},{value:"In this example:",paraId:4,tocIndex:4},{value:"pending",paraId:5,tocIndex:4},{value:" or ",paraId:5,tocIndex:4},{value:"processing",paraId:5,tocIndex:4},{value:" \u2192 ",paraId:5,tocIndex:4},{value:"<LoadingState />",paraId:5,tocIndex:4},{value:"completed",paraId:5,tocIndex:4},{value:" \u2192 ",paraId:5,tocIndex:4},{value:"<SuccessState />",paraId:5,tocIndex:4},{value:"failed",paraId:5,tocIndex:4},{value:" or ",paraId:5,tocIndex:4},{value:"error",paraId:5,tocIndex:4},{value:" \u2192 ",paraId:5,tocIndex:4},{value:"<ErrorState />",paraId:5,tocIndex:4},{value:"Prop",paraId:6,tocIndex:6},{value:"Type",paraId:6,tocIndex:6},{value:"Required",paraId:6,tocIndex:6},{value:"Default",paraId:6,tocIndex:6},{value:"Description",paraId:6,tocIndex:6},{value:"value",paraId:6,tocIndex:6},{value:"T",paraId:6,tocIndex:6},{value:"Yes",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"The value to match against items",paraId:6,tocIndex:6},{value:"items",paraId:6,tocIndex:6},{value:"readonly MatchValue[]",paraId:6,tocIndex:6},{value:"Yes",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"List of match values",paraId:6,tocIndex:6},{value:"children",paraId:6,tocIndex:6},{value:"ReactNode",paraId:6,tocIndex:6},{value:"Yes",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"Children corresponding to items",paraId:6,tocIndex:6},{value:`type MatchValue = string | readonly string[];
`,paraId:7,tocIndex:7},{value:`function OrderStatus({ status }) {
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
`,paraId:8,tocIndex:9},{value:`function RoleBadge({ role }) {
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
`,paraId:9,tocIndex:10},{value:`function ApiStatusDisplay({ status }) {
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
`,paraId:10,tocIndex:11},{value:`function Button({ variant, children }) {
  return (
    <RenderMatch value={variant} items={['primary', 'secondary', 'danger']}>
      <PrimaryButton>{children}</PrimaryButton>
      <SecondaryButton>{children}</SecondaryButton>
      <DangerButton>{children}</DangerButton>
    </RenderMatch>
  );
}
`,paraId:11,tocIndex:12},{value:`function Notification({ type, message }) {
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
`,paraId:12,tocIndex:13},{value:`function Container({ size, children }) {
  return (
    <RenderMatch value={size} items={['small', 'medium', 'large']}>
      <div className="container-sm">{children}</div>
      <div className="container-md">{children}</div>
      <div className="container-lg">{children}</div>
    </RenderMatch>
  );
}
`,paraId:13,tocIndex:14},{value:`function PaymentIcon({ method }) {
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
`,paraId:14,tocIndex:15},{value:"RenderMatch",paraId:15,tocIndex:17},{value:" is ideal when you have a known set of states:",paraId:15,tocIndex:17},{value:`// Good - known states
<RenderMatch value={status} items={['active', 'inactive', 'suspended']}>
  <ActiveState />
  <InactiveState />
  <SuspendedState />
</RenderMatch>
`,paraId:16,tocIndex:17},{value:"For more complex scenarios with fallbacks, consider ",paraId:17,tocIndex:18},{value:"RenderSwitch",paraId:17,tocIndex:18},{value:":",paraId:17,tocIndex:18},{value:`<RenderSwitch
  cases={[status === 'active', status === 'inactive']}
  fallback={<UnknownState />}
>
  <ActiveState />
  <InactiveState />
</RenderSwitch>
`,paraId:18,tocIndex:18},{value:"Use array syntax to group related values:",paraId:19,tocIndex:19},{value:`<RenderMatch
  value={priority}
  items={[['low', 'minor'], ['medium', 'normal'], ['high', 'critical', 'urgent']]}
>
  <LowPriority />
  <MediumPriority />
  <HighPriority />
</RenderMatch>
`,paraId:20,tocIndex:19},{value:"In development mode, ",paraId:21,tocIndex:20},{value:"RenderMatch",paraId:21,tocIndex:20},{value:" will warn you if:",paraId:21,tocIndex:20},{value:"The value doesn't match any item in the list",paraId:22,tocIndex:20},{value:"The number of items doesn't match the number of children",paraId:22,tocIndex:20},{value:"These warnings help catch bugs early while maintaining zero runtime overhead in production.",paraId:23,tocIndex:20}]},59829:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Switch-style conditional rendering with multiple conditions and fallback support.",paraId:0,tocIndex:0},{value:"Multiple case conditions",paraId:1,tocIndex:1},{value:": Test multiple boolean conditions in order",paraId:1,tocIndex:1},{value:"First matching case wins",paraId:1,tocIndex:1},{value:": Stops at the first true condition",paraId:1,tocIndex:1},{value:"Optional fallback",paraId:1,tocIndex:1},{value:": Render content when no cases match",paraId:1,tocIndex:1},{value:"Development warnings",paraId:1,tocIndex:1},{value:": Alerts for cases/children mismatch",paraId:1,tocIndex:1},{value:`import { RenderSwitch } from '@jswork/react-render-controls';

function Dashboard({ user }) {
  return (
    <RenderSwitch cases={[user.isAdmin, user.isModerator, user.isUser]}>
      <AdminPanel />
      <ModeratorPanel />
      <UserPanel />
    </RenderSwitch>
  );
}
`,paraId:2,tocIndex:3},{value:`<RenderSwitch
  cases={[user.isAdmin, user.isModerator]}
  fallback={<AccessDenied />}
>
  <AdminPanel />
  <ModeratorPanel />
</RenderSwitch>
`,paraId:3,tocIndex:4},{value:"When no cases match, the ",paraId:4,tocIndex:4},{value:"fallback",paraId:4,tocIndex:4},{value:" is rendered.",paraId:4,tocIndex:4},{value:"Prop",paraId:5,tocIndex:6},{value:"Type",paraId:5,tocIndex:6},{value:"Required",paraId:5,tocIndex:6},{value:"Default",paraId:5,tocIndex:6},{value:"Description",paraId:5,tocIndex:6},{value:"cases",paraId:5,tocIndex:6},{value:"readonly boolean[]",paraId:5,tocIndex:6},{value:"Yes",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"Array of boolean conditions",paraId:5,tocIndex:6},{value:"children",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"Yes",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"Children corresponding to cases",paraId:5,tocIndex:6},{value:"fallback",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"No",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"Fallback content when no cases match",paraId:5,tocIndex:6},{value:`interface RenderSwitchProps {
  cases: readonly boolean[];
  children: ReactNode;
  fallback?: ReactNode;
}
`,paraId:6,tocIndex:7},{value:`function DataLoader({ isLoading, isError, data }) {
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
`,paraId:7,tocIndex:9},{value:`function AuthGate({ user, isLoading }) {
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
`,paraId:8,tocIndex:10},{value:`function ResourceActions({ resource, user }) {
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
`,paraId:9,tocIndex:11},{value:`function ResponsiveLayout({ breakpoint }) {
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
`,paraId:10,tocIndex:12},{value:`function FormFeedback({ form }) {
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
`,paraId:11,tocIndex:13},{value:`function DocumentViewer({ doc }) {
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
`,paraId:12,tocIndex:14},{value:`function NewFeature({ flags }) {
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
`,paraId:13,tocIndex:15},{value:`function Greeting({ hour }) {
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
`,paraId:14,tocIndex:16},{value:`function ConnectionStatus({ status }) {
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
`,paraId:15,tocIndex:17},{value:"RenderSwitch",paraId:16,tocIndex:19},{value:" is ideal when you have multiple mutually exclusive conditions:",paraId:16,tocIndex:19},{value:`// Good
<RenderSwitch cases={[isAdmin, isModerator, isUser]}>
  <AdminPanel />
  <ModeratorPanel />
  <UserPanel />
</RenderSwitch>
`,paraId:17,tocIndex:19},{value:"Always provide a fallback for better UX:",paraId:18,tocIndex:20},{value:`<RenderSwitch
  cases={[status === 'active', status === 'pending']}
  fallback={<UnknownState />}
>
  <ActiveState />
  <PendingState />
</RenderSwitch>
`,paraId:19,tocIndex:20},{value:"Place most specific conditions first:",paraId:20,tocIndex:21},{value:`<RenderSwitch
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
`,paraId:21,tocIndex:21},{value:"true",paraId:22},{value:"Use ",paraId:23,tocIndex:22},{value:"true",paraId:23,tocIndex:22},{value:" as the last condition for a catch-all:",paraId:23,tocIndex:22},{value:`<RenderSwitch
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
`,paraId:24,tocIndex:22},{value:"Feature",paraId:25,tocIndex:23},{value:"RenderIf",paraId:25,tocIndex:23},{value:"RenderSwitch",paraId:25,tocIndex:23},{value:"Conditions",paraId:25,tocIndex:23},{value:"Single boolean",paraId:25,tocIndex:23},{value:"Multiple boolean cases",paraId:25,tocIndex:23},{value:"Children",paraId:25,tocIndex:23},{value:"1-2 children",paraId:25,tocIndex:23},{value:"Multiple children + fallback",paraId:25,tocIndex:23},{value:"Use case",paraId:25,tocIndex:23},{value:"Simple if/else",paraId:25,tocIndex:23},{value:"Multiple mutually exclusive states",paraId:25,tocIndex:23},{value:"Fallback",paraId:25,tocIndex:23},{value:"Implicit (second child)",paraId:25,tocIndex:23},{value:"Explicit fallback prop",paraId:25,tocIndex:23},{value:"In development mode, ",paraId:26,tocIndex:24},{value:"RenderSwitch",paraId:26,tocIndex:24},{value:" will warn you if:",paraId:26,tocIndex:24},{value:"The number of cases doesn't match the number of children",paraId:27,tocIndex:24},{value:"Cases array is empty",paraId:27,tocIndex:24},{value:"These warnings help catch bugs early while maintaining zero runtime overhead in production.",paraId:28,tocIndex:24}]},59488:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Welcome to the React Render Controls guide. Explore the documentation below:",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:0},{value:" - Installation and basic usage",paraId:2,tocIndex:0},{value:"Components",paraId:3,tocIndex:0},{value:" - Detailed component documentation",paraId:2,tocIndex:0},{value:"API Reference",paraId:4,tocIndex:0},{value:" - Complete type definitions",paraId:2,tocIndex:0}]},1291:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"React Render Controls is a lightweight, headless React component library for declarative conditional rendering, pattern matching, and list mapping.",paraId:0,tocIndex:0},{value:"Install the package using your favorite package manager:",paraId:1,tocIndex:1},{value:`# npm
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
`,paraId:9,tocIndex:8},{value:"Explore ",paraId:10,tocIndex:9},{value:"Component Documentation",paraId:11,tocIndex:9},{value:" for detailed usage",paraId:10,tocIndex:9},{value:"Check out ",paraId:10,tocIndex:9},{value:"API Reference",paraId:12,tocIndex:9},{value:" for complete type definitions",paraId:10,tocIndex:9}]},88807:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:`npm install @jswork/react-render-controls
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
`,paraId:1,tocIndex:1}]},76595:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Interactive demos for React Render Controls components. Click on any component below to explore live, editable examples.",paraId:0,tocIndex:0},{value:"RenderList Demos",paraId:1,tocIndex:1},{value:" - List rendering with function and component patterns",paraId:2,tocIndex:1},{value:"RenderIf Demos",paraId:3,tocIndex:1},{value:" - Conditional rendering with if/else patterns",paraId:2,tocIndex:1},{value:"RenderMatch Demos",paraId:4,tocIndex:1},{value:" - Pattern matching for status-based rendering",paraId:2,tocIndex:1},{value:"RenderSwitch Demos",paraId:5,tocIndex:1},{value:" - Switch-style conditional rendering",paraId:2,tocIndex:1},{value:"Live Editing",paraId:6,tocIndex:2},{value:" - All demos are editable in real-time",paraId:6,tocIndex:2},{value:"Interactive",paraId:6,tocIndex:2},{value:" - See changes immediately as you code",paraId:6,tocIndex:2},{value:"Type-Safe",paraId:6,tocIndex:2},{value:" - Full TypeScript support",paraId:6,tocIndex:2},{value:"Production Ready",paraId:6,tocIndex:2},{value:" - All examples follow best practices",paraId:6,tocIndex:2},{value:"Select a component above to view interactive demos. Each demo includes:",paraId:7,tocIndex:3},{value:"Complete, runnable code",paraId:8,tocIndex:3},{value:"Real-time preview",paraId:8,tocIndex:3},{value:"Editable source code",paraId:8,tocIndex:3},{value:"Usage examples and patterns",paraId:8,tocIndex:3}]},29531:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Interactive demos for the RenderIf component.",paraId:0,tocIndex:0}]},43051:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Interactive demos for the RenderList component.",paraId:0,tocIndex:0}]},80620:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Interactive demos for the RenderMatch component.",paraId:0,tocIndex:0}]},16178:function(C,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return l}});const l=[{value:"Interactive demos for the RenderSwitch component.",paraId:0,tocIndex:0}]},14224:function(C){var s=C.exports={},e,l;function S(){throw new Error("setTimeout has not been defined")}function x(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=S}catch(d){e=S}try{typeof clearTimeout=="function"?l=clearTimeout:l=x}catch(d){l=x}})();function B(d){if(e===setTimeout)return setTimeout(d,0);if((e===S||!e)&&setTimeout)return e=setTimeout,setTimeout(d,0);try{return e(d,0)}catch(o){try{return e.call(null,d,0)}catch(c){return e.call(this,d,0)}}}function M(d){if(l===clearTimeout)return clearTimeout(d);if((l===x||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(d);try{return l(d)}catch(o){try{return l.call(null,d)}catch(c){return l.call(this,d)}}}var L=[],p=!1,t,E=-1;function h(){!p||!t||(p=!1,t.length?L=t.concat(L):E=-1,L.length&&f())}function f(){if(!p){var d=B(h);p=!0;for(var o=L.length;o;){for(t=L,L=[];++E<o;)t&&t[E].run();E=-1,o=L.length}t=null,p=!1,M(d)}}s.nextTick=function(d){var o=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)o[c-1]=arguments[c];L.push(new a(d,o)),L.length===1&&!p&&B(f)};function a(d,o){this.fun=d,this.array=o}a.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={};function u(){}s.on=u,s.addListener=u,s.once=u,s.off=u,s.removeListener=u,s.removeAllListeners=u,s.emit=u,s.prependListener=u,s.prependOnceListener=u,s.listeners=function(d){return[]},s.binding=function(d){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(d){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}}}]);
