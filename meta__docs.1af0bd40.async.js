(self.webpackChunkreact_render_controls_docs=self.webpackChunkreact_render_controls_docs||[]).push([[904],{79543:function(c,n,e){"use strict";e.r(n),e.d(n,{RenderIf:function(){return B},RenderList:function(){return P},RenderMatch:function(){return j},RenderSwitch:function(){return N}});var t=e(75271),f=e(14224),p=Object.defineProperty,S=Object.defineProperties,x=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,h=(u,l,m)=>l in u?p(u,l,{enumerable:!0,configurable:!0,writable:!0,value:m}):u[l]=m,v=(u,l)=>{for(var m in l||(l={}))g.call(l,m)&&h(u,m,l[m]);if(a)for(var m of a(l))R.call(l,m)&&h(u,m,l[m]);return u},I=(u,l)=>S(u,x(l)),d=(u,l)=>p(u,"name",{value:l,configurable:!0}),s,i=typeof f!="undefined"&&((s={NODE_ENV:"production",PUBLIC_PATH:"/react-render-controls-docs/"})==null?void 0:s.NODE_ENV)!=="production";function r(u){return typeof u=="function"}d(r,"isRenderFn");function o(u,l,m,y){if(y===void 0)return l;if(typeof y=="function")return y(u,l,m);let b=u[y];return b==null?(i&&console.warn(`RenderList: keyBy="${String(y)}" but the field is undefined in ${JSON.stringify(u)}`),l):b}d(o,"getKey");function P({items:u,render:l,keyBy:m}){return t.createElement(t.Fragment,null,u.map((y,b)=>{let w=o(y,b,u,m);if(r(l))return t.createElement(t.Fragment,{key:w},l(y,b,u));let{component:M,dataKey:W="item",props:F={}}=l,U=I(v({},F),{[W]:y});return t.createElement(t.Fragment,{key:w},t.createElement(M,U))}))}d(P,"RenderList");function C({when:u,children:l}){let m=t.Children.toArray(l);return m.length===0?null:(m.length>2&&i&&console.warn(`RenderIf: Expected at most 2 children, but got ${m.length}. Only the first 2 children will be used.`),m.length===1?u?m[0]:null:u?m[0]:m[1])}d(C,"RenderIf");var B=C;function E(u,l){for(let m=0;m<l.length;m++){let y=l[m];if(typeof y=="string"){if(y===u)return m}else if(y.includes(u))return m}return-1}d(E,"findMatchIndex");function D(u){let l=[];for(let m of u)typeof m=="string"?l.push(m):l.push(...m);return l}d(D,"getAllValues");function L({value:u,items:l,children:m}){var y;let b=E(u,l);if(b===-1){if(i){let M=D(l);console.warn(`RenderMatch: Value "${u}" not found in any of the items. Available values: [${M.join(", ")}]`)}return null}let w=t.Children.toArray(m).filter(M=>(0,t.isValidElement)(M));return b>=w.length?(i&&console.warn(`RenderMatch: Not enough children provided. Expected at least ${b+1}, but got ${w.length}.`),null):(y=w[b])!=null?y:null}d(L,"RenderMatch");var j=L;function k(u){for(let l=0;l<u.length;l++)if(u[l])return l;return-1}d(k,"findTrueCaseIndex");function A(u){let l=[];for(let m=0;m<u.length;m++)u[m]&&l.push(m);return l}d(A,"findAllTrueCaseIndices");function T(u,l,m){i&&u>l&&console.warn(`${m}: More cases (${u}) than children (${l}). Extra cases will be ignored.`)}d(T,"validateCasesLength");function O({cases:u,children:l,fallback:m=null,multiple:y=!1}){let b=t.Children.toArray(l).filter(w=>(0,t.isValidElement)(w));if(T(u.length,b.length,"RenderSwitch"),y){let w=A(u).filter(M=>M>=0&&M<b.length).map(M=>b[M]);if(w.length>0)return t.createElement(t.Fragment,null,w)}else{let w=k(u);if(w>=0&&w<b.length)return b[w]}return m}d(O,"RenderSwitch");var N=O},51998:function(c,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return f}});var t=e(75271),f={}},86455:function(c,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return f}});var t=e(75271),f={}},80443:function(c,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return f}});var t=e(75271),f={}},49697:function(c,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return f}});var t=e(75271),f={}},22796:function(c,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return f}});var t=e(75271),f={}},33953:function(c,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return f}});var t=e(75271),f={}},51552:function(c,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return f}});var t=e(75271),f={}},6657:function(c,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return f}});var t=e(75271),f={}},32047:function(c,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return f}});var t=e(75271),f={}},62310:function(c,n,e){"use strict";var t;e.r(n),e.d(n,{demos:function(){return R}});var f=e(90228),p=e.n(f),S=e(87999),x=e.n(S),a=e(75271),g=e(79543),R={"docs-playground-render-if-demo-render-if-basic":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,49147))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45374).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic Toggle"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}},"docs-playground-render-if-demo-render-if-else":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,49165))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-else",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18036).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Authentication"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}},"docs-playground-render-if-demo-render-if-multiple":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,96209))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-multiple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18923).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Role-Based Display"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}},"docs-playground-render-if-demo-render-if-loading":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,18656))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(11684).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Data Fetching"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}},"docs-playground-render-if-demo-render-if-feature":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,94334))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-feature",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37111).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Feature Flags"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}}}},48542:function(c,n,e){"use strict";var t;e.r(n),e.d(n,{demos:function(){return R}});var f=e(90228),p=e.n(f),S=e(87999),x=e.n(S),a=e(75271),g=e(79543),R={"docs-playground-render-match-demo-render-match-basic-status":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,75932))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-basic-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99753).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic Status Matching"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}},"docs-playground-render-match-demo-render-match-multiple-values":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,24266))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-multiple-values",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44856).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Multiple Values Per Match"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}},"docs-playground-render-match-demo-render-match-http-status":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,86402))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-http-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(85497).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"HTTP Status Codes"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}},"docs-playground-render-match-demo-render-match-theme-variant":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,31067))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-theme-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(72264).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Theme Variant Selector"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}},"docs-playground-render-match-demo-render-match-user-role":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,25565))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-user-role",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(84771).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"User Role Badges"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var h=x()(p()().mark(function I(){var d,s=arguments;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(417).then(e.bind(e,10417));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,s));case 3:case"end":return r.stop()}},I)}));function v(){return h.apply(this,arguments)}return v}()}}}},10548:function(c,n,e){"use strict";var t;e.r(n),e.d(n,{demos:function(){return h}});var f=e(90228),p=e.n(f),S=e(87999),x=e.n(S),a=e(75271),g=e(79543),R=e(17533),h={"docs-playground-render-switch-demo-render-switch-basic":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,71613))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16016).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic Switch"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var v=x()(p()().mark(function d(){var s,i=arguments;return p()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(417).then(e.bind(e,10417));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,i));case 3:case"end":return o.stop()}},d)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-render-switch-demo-render-switch-multiple":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,61542))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-multiple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88919).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"},"./render-switch-multiple.scss":{type:"FILE",value:e(4787).Z}},entry:"index.tsx",description:"Render all matching children when multiple is true",title:"Multiple Mode"},context:{"./render-switch-multiple.scss":R,"@jswork/react-render-controls":g,react:t||(t=e.t(a,2)),"/home/runner/work/react-render-controls-docs/react-render-controls-docs/docs/playground/demos/render-switch-multiple.scss":R},renderOpts:{compile:function(){var v=x()(p()().mark(function d(){var s,i=arguments;return p()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(417).then(e.bind(e,10417));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,i));case 3:case"end":return o.stop()}},d)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-render-switch-demo-render-switch-permission":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,98163))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-permission",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36578).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Permission Levels"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var v=x()(p()().mark(function d(){var s,i=arguments;return p()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(417).then(e.bind(e,10417));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,i));case 3:case"end":return o.stop()}},d)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-render-switch-demo-render-switch-connection":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,1462))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-connection",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34875).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Connection Status"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var v=x()(p()().mark(function d(){var s,i=arguments;return p()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(417).then(e.bind(e,10417));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,i));case 3:case"end":return o.stop()}},d)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-render-switch-demo-render-switch-form-validation":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,68800))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-form-validation",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92245).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Form Validation States"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var v=x()(p()().mark(function d(){var s,i=arguments;return p()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(417).then(e.bind(e,10417));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,i));case 3:case"end":return o.stop()}},d)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-render-switch-demo-render-switch-device-type":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,57535))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-device-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45878).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Device Type Detection"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var v=x()(p()().mark(function d(){var s,i=arguments;return p()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(417).then(e.bind(e,10417));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,i));case 3:case"end":return o.stop()}},d)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-render-switch-demo-render-switch-time-greeting":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,62616))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-time-greeting",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55350).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Time-based Greeting"},context:{"@jswork/react-render-controls":g,react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var v=x()(p()().mark(function d(){var s,i=arguments;return p()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(417).then(e.bind(e,10417));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,i));case 3:case"end":return o.stop()}},d)}));function I(){return v.apply(this,arguments)}return I}()}}}},17533:function(c,n,e){"use strict";e.r(n)},12616:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Complete type definitions and API documentation for all components.",paraId:0,tocIndex:0},{value:`import {
  RenderIf,
  RenderMatch,
  RenderSwitch
} from '@jswork/react-render-controls';

// Types
import type {
  RenderIfProps,
  RenderMatchProps,
  RenderSwitchProps
} from '@jswork/react-render-controls';
`,paraId:1,tocIndex:1},{value:`interface RenderIfProps {
  when: boolean;
  children: ReactNode;
}
`,paraId:2,tocIndex:3},{value:"Single child",paraId:3,tocIndex:4},{value:": Renders the child when ",paraId:3,tocIndex:4},{value:"when",paraId:3,tocIndex:4},{value:" is ",paraId:3,tocIndex:4},{value:"true",paraId:3,tocIndex:4},{value:", renders ",paraId:3,tocIndex:4},{value:"null",paraId:3,tocIndex:4},{value:" when ",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"Two children",paraId:3,tocIndex:4},{value:": Renders first child when ",paraId:3,tocIndex:4},{value:"when",paraId:3,tocIndex:4},{value:" is ",paraId:3,tocIndex:4},{value:"true",paraId:3,tocIndex:4},{value:", renders second child when ",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"Warns if more than 2 children are provided",paraId:4,tocIndex:5},{value:"Warns if children structure is invalid",paraId:4,tocIndex:5},{value:`interface RenderMatchProps<T = string> {
  value: T;
  items: readonly MatchValue[];
  children: ReactNode;
}
`,paraId:5,tocIndex:7},{value:`/**
 * Match value - either single string or array of strings
 */
type MatchValue = string | readonly string[];
`,paraId:6,tocIndex:8},{value:"Parameter",paraId:7,tocIndex:9},{value:"Description",paraId:7,tocIndex:9},{value:"T",paraId:7,tocIndex:9},{value:"The type of value to match (defaults to ",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:")",paraId:7,tocIndex:9},{value:"Matches ",paraId:8,tocIndex:10},{value:"value",paraId:8,tocIndex:10},{value:" against each item in ",paraId:8,tocIndex:10},{value:"items",paraId:8,tocIndex:10},{value:" array",paraId:8,tocIndex:10},{value:"Renders the child at the matching index",paraId:8,tocIndex:10},{value:"Supports multiple values per item using array syntax",paraId:8,tocIndex:10},{value:"Warns if value doesn't match any item",paraId:9,tocIndex:11},{value:"Warns if items length doesn't match children length",paraId:9,tocIndex:11},{value:`interface RenderSwitchProps {
  cases: readonly boolean[];
  children: ReactNode;
  fallback?: ReactNode;
  multiple?: boolean;
}
`,paraId:10,tocIndex:13},{value:"Evaluates each boolean in ",paraId:11,tocIndex:14},{value:"cases",paraId:11,tocIndex:14},{value:" array in order",paraId:11,tocIndex:14},{value:"When ",paraId:11,tocIndex:14},{value:"multiple",paraId:11,tocIndex:14},{value:" is ",paraId:11,tocIndex:14},{value:"false",paraId:11,tocIndex:14},{value:" (default)",paraId:11,tocIndex:14},{value:": Renders only the child at the first ",paraId:11,tocIndex:14},{value:"true",paraId:11,tocIndex:14},{value:" index",paraId:11,tocIndex:14},{value:"When ",paraId:11,tocIndex:14},{value:"multiple",paraId:11,tocIndex:14},{value:" is ",paraId:11,tocIndex:14},{value:"true",paraId:11,tocIndex:14},{value:": Renders all children whose corresponding case is ",paraId:11,tocIndex:14},{value:"true",paraId:11,tocIndex:14},{value:"Renders ",paraId:11,tocIndex:14},{value:"fallback",paraId:11,tocIndex:14},{value:" if no cases match (and ",paraId:11,tocIndex:14},{value:"multiple",paraId:11,tocIndex:14},{value:" is ",paraId:11,tocIndex:14},{value:"false",paraId:11,tocIndex:14},{value:")",paraId:11,tocIndex:14},{value:"If no ",paraId:11,tocIndex:14},{value:"fallback",paraId:11,tocIndex:14},{value:" provided, renders ",paraId:11,tocIndex:14},{value:"null",paraId:11,tocIndex:14},{value:" when no cases match",paraId:11,tocIndex:14},{value:"Warns if cases array is empty",paraId:12,tocIndex:15},{value:"Warns if cases length doesn't match children length",paraId:12,tocIndex:15},{value:`type ReactNode = React.ReactNode;
`,paraId:13,tocIndex:17},{value:"Standard React node type including elements, strings, numbers, fragments, etc.",paraId:14,tocIndex:17},{value:`type ElementType<P = any> = React.ElementType<P>;
`,paraId:15,tocIndex:18},{value:"Standard React element type for components.",paraId:16,tocIndex:18},{value:`type Status = 'pending' | 'processing' | 'completed' | 'failed';

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
`,paraId:17,tocIndex:20},{value:"For the best TypeScript experience, ensure your ",paraId:18,tocIndex:21},{value:"tsconfig.json",paraId:18,tocIndex:21},{value:" includes:",paraId:18,tocIndex:21},{value:`{
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node"
  }
}
`,paraId:19,tocIndex:21},{value:"All types are exported for use in your code:",paraId:20,tocIndex:22},{value:`import type {
  // RenderIf types
  RenderIfProps,
  // RenderMatch types
  RenderMatchProps,
  MatchValue,
  // RenderSwitch types
  RenderSwitchProps
} from '@jswork/react-render-controls';
`,paraId:21,tocIndex:22}]},27580:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"A collection of React components for declarative rendering control. Simplify conditional rendering and pattern matching in your React applications.",paraId:0,tocIndex:0},{value:"RenderIf",paraId:1,tocIndex:1},{value:"Conditional rendering component supporting if/else patterns with automatic warning for invalid usage.",paraId:2,tocIndex:2},{value:"Best for",paraId:3,tocIndex:2},{value:": Simple conditional rendering, if/else patterns",paraId:3,tocIndex:2},{value:`<RenderIf when={isLoggedIn}>
  <Dashboard />
  <Login />
</RenderIf>
`,paraId:4,tocIndex:2},{value:"RenderMatch",paraId:5,tocIndex:2},{value:"Pattern matching component that renders the child matching the given value.",paraId:6,tocIndex:3},{value:"Best for",paraId:7,tocIndex:3},{value:": Multi-way conditionals, switch-like patterns",paraId:7,tocIndex:3},{value:`<RenderMatch value={status} items={['loading', 'success', 'error']}>
  <Loader />
  <Success />
  <Error />
</RenderMatch>
`,paraId:8,tocIndex:3},{value:"RenderSwitch",paraId:9,tocIndex:3},{value:"Switch-style conditional rendering with multiple conditions and fallback support.",paraId:10,tocIndex:4},{value:"Best for",paraId:11,tocIndex:4},{value:": Complex multi-condition rendering, multiple boolean conditions",paraId:11,tocIndex:4},{value:`<RenderSwitch cases={[isAdmin, isPremium, isUser]} fallback={<GuestPanel />}>
  <AdminPanel />
  <PremiumPanel />
  <UserPanel />
</RenderSwitch>
`,paraId:12,tocIndex:4},{value:"Component",paraId:13,tocIndex:5},{value:"Use Case",paraId:13,tocIndex:5},{value:"Complexity",paraId:13,tocIndex:5},{value:"Flexibility",paraId:13,tocIndex:5},{value:"RenderIf",paraId:13,tocIndex:5},{value:"Simple conditions",paraId:13,tocIndex:5},{value:"Low",paraId:13,tocIndex:5},{value:"Limited",paraId:13,tocIndex:5},{value:"RenderMatch",paraId:13,tocIndex:5},{value:"Value matching",paraId:13,tocIndex:5},{value:"Medium",paraId:13,tocIndex:5},{value:"Medium",paraId:13,tocIndex:5},{value:"RenderSwitch",paraId:13,tocIndex:5},{value:"Complex patterns",paraId:13,tocIndex:5},{value:"High",paraId:13,tocIndex:5},{value:"High",paraId:13,tocIndex:5},{value:`npm install @jswork/react-render-controls
`,paraId:14,tocIndex:6},{value:`import { RenderIf, RenderMatch, RenderSwitch } from '@jswork/react-render-controls';
`,paraId:15,tocIndex:7},{value:"You have simple true/false conditions",paraId:16,tocIndex:9},{value:"You need if/else patterns",paraId:16,tocIndex:9},{value:"You want clean, readable conditional rendering",paraId:16,tocIndex:9},{value:"You have multiple conditions based on a single value",paraId:17,tocIndex:10},{value:"You want cleaner code than nested ternaries",paraId:17,tocIndex:10},{value:"You need to match specific values or patterns",paraId:17,tocIndex:10},{value:"You have complex conditional logic",paraId:18,tocIndex:11},{value:"You need predicate-based matching",paraId:18,tocIndex:11},{value:"You want the most flexibility for conditions",paraId:18,tocIndex:11}]},23214:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Conditional rendering component supporting if/else patterns with automatic warning for invalid usage.",paraId:0,tocIndex:0},{value:"Single child",paraId:1,tocIndex:1},{value:": Render when true, nothing when false",paraId:1,tocIndex:1},{value:"Two children",paraId:1,tocIndex:1},{value:": If/else pattern",paraId:1,tocIndex:1},{value:"Development warnings",paraId:1,tocIndex:1},{value:": Alerts for invalid children count",paraId:1,tocIndex:1},{value:"Zero runtime overhead",paraId:1,tocIndex:1},{value:": Optimized for production",paraId:1,tocIndex:1},{value:`import { RenderIf } from '@jswork/react-render-controls';

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
`,paraId:16,tocIndex:17},{value:`<RenderSwitch
  cases={[items.length > 0, items.length === 0]}
  fallback={<EmptyState />}
>
  <ItemList items={items} />
  <p>No items available</p>
</RenderSwitch>
`,paraId:17,tocIndex:18},{value:"In development mode, ",paraId:18,tocIndex:19},{value:"RenderIf",paraId:18,tocIndex:19},{value:" will warn you if:",paraId:18,tocIndex:19},{value:"You provide more than 2 children",paraId:19,tocIndex:19},{value:"The children structure is invalid",paraId:19,tocIndex:19},{value:"These warnings help catch bugs early while maintaining zero runtime overhead in production.",paraId:20,tocIndex:19}]},60308:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Pattern matching component that renders the child matching the given value.",paraId:0,tocIndex:0},{value:"Single value matching",paraId:1,tocIndex:1},{value:": Match one value to one child",paraId:1,tocIndex:1},{value:"Multiple value matching",paraId:1,tocIndex:1},{value:": Match multiple values to the same child (array syntax)",paraId:1,tocIndex:1},{value:"Development warnings",paraId:1,tocIndex:1},{value:": Alerts for unmatched values",paraId:1,tocIndex:1},{value:"Status-based rendering",paraId:1,tocIndex:1},{value:": Perfect for state machines and status flows",paraId:1,tocIndex:1},{value:`import { RenderMatch } from '@jswork/react-render-controls';

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
`,paraId:20,tocIndex:19},{value:"In development mode, ",paraId:21,tocIndex:20},{value:"RenderMatch",paraId:21,tocIndex:20},{value:" will warn you if:",paraId:21,tocIndex:20},{value:"The value doesn't match any item in the list",paraId:22,tocIndex:20},{value:"The number of items doesn't match the number of children",paraId:22,tocIndex:20},{value:"These warnings help catch bugs early while maintaining zero runtime overhead in production.",paraId:23,tocIndex:20}]},54879:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Switch-style conditional rendering with multiple conditions, fallback support, and optional multi-match mode.",paraId:0,tocIndex:0},{value:"Multiple case conditions",paraId:1,tocIndex:1},{value:": Test multiple boolean conditions in order",paraId:1,tocIndex:1},{value:"First matching case wins",paraId:1,tocIndex:1},{value:" (default): Stops at the first true condition",paraId:1,tocIndex:1},{value:"Multiple matches mode",paraId:1,tocIndex:1},{value:": When ",paraId:1,tocIndex:1},{value:"multiple=true",paraId:1,tocIndex:1},{value:", renders all matching children",paraId:1,tocIndex:1},{value:"Optional fallback",paraId:1,tocIndex:1},{value:": Render content when no cases match",paraId:1,tocIndex:1},{value:"Development warnings",paraId:1,tocIndex:1},{value:": Alerts for cases/children mismatch",paraId:1,tocIndex:1},{value:`import { RenderSwitch } from '@jswork/react-render-controls';

function Dashboard({ user }) {
  return (
    <RenderSwitch cases={[user.isAdmin, user.isModerator, user.isUser]}>
      <AdminPanel />
      <ModeratorPanel />
      <UserPanel />
    </RenderSwitch>
  );
}
`,paraId:2,tocIndex:3},{value:"Only renders the first matching child.",paraId:3,tocIndex:3},{value:`<RenderSwitch
  cases={[user.isAdmin, user.isModerator]}
  fallback={<AccessDenied />}
>
  <AdminPanel />
  <ModeratorPanel />
</RenderSwitch>
`,paraId:4,tocIndex:4},{value:"When no cases match, the ",paraId:5,tocIndex:4},{value:"fallback",paraId:5,tocIndex:4},{value:" is rendered.",paraId:5,tocIndex:4},{value:"Prop",paraId:6,tocIndex:6},{value:"Type",paraId:6,tocIndex:6},{value:"Required",paraId:6,tocIndex:6},{value:"Default",paraId:6,tocIndex:6},{value:"Description",paraId:6,tocIndex:6},{value:"cases",paraId:6,tocIndex:6},{value:"readonly boolean[]",paraId:6,tocIndex:6},{value:"Yes",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"Array of boolean conditions",paraId:6,tocIndex:6},{value:"children",paraId:6,tocIndex:6},{value:"ReactNode",paraId:6,tocIndex:6},{value:"Yes",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"Children corresponding to cases",paraId:6,tocIndex:6},{value:"fallback",paraId:6,tocIndex:6},{value:"ReactNode",paraId:6,tocIndex:6},{value:"No",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"Fallback content when no cases match",paraId:6,tocIndex:6},{value:"multiple",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"No",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"When ",paraId:6,tocIndex:6},{value:"true",paraId:6,tocIndex:6},{value:", render all matches; when ",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:", only first match",paraId:6,tocIndex:6},{value:`interface RenderSwitchProps {
  cases: readonly boolean[];
  children: ReactNode;
  fallback?: ReactNode;
  multiple?: boolean;
}
`,paraId:7,tocIndex:7},{value:"When ",paraId:8,tocIndex:9},{value:"multiple",paraId:8,tocIndex:9},{value:" is ",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:", all matching children are rendered:",paraId:8,tocIndex:9},{value:`const hasRead = user.permissions.includes('read');
const hasWrite = user.permissions.includes('write');
const hasDelete = user.permissions.includes('delete');

<RenderSwitch cases={[hasRead, hasWrite, hasDelete]} multiple>
  <ReadPermission />
  <WritePermission />
  <DeletePermission />
</RenderSwitch>
`,paraId:9,tocIndex:9},{value:"If ",paraId:10,tocIndex:9},{value:"hasRead=true",paraId:10,tocIndex:9},{value:", ",paraId:10,tocIndex:9},{value:"hasWrite=true",paraId:10,tocIndex:9},{value:", ",paraId:10,tocIndex:9},{value:"hasDelete=false",paraId:10,tocIndex:9},{value:":",paraId:10,tocIndex:9},{value:"Renders both ",paraId:11,tocIndex:9},{value:"<ReadPermission />",paraId:11,tocIndex:9},{value:" and ",paraId:11,tocIndex:9},{value:"<WritePermission />",paraId:11,tocIndex:9},{value:`function DataLoader({ isLoading, isError, data }) {
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
`,paraId:12,tocIndex:10},{value:`function AuthGate({ user, isLoading }) {
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
`,paraId:13,tocIndex:11},{value:`function ResourceActions({ resource, user }) {
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
`,paraId:14,tocIndex:12},{value:`function ResponsiveLayout({ breakpoint }) {
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
`,paraId:15,tocIndex:13},{value:`function FormFeedback({ form }) {
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
`,paraId:16,tocIndex:14},{value:`function DocumentViewer({ doc }) {
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
`,paraId:17,tocIndex:15},{value:`function NewFeature({ flags }) {
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
`,paraId:18,tocIndex:16},{value:`function Greeting({ hour }) {
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
`,paraId:19,tocIndex:17},{value:`function ConnectionStatus({ status }) {
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
`,paraId:20,tocIndex:18},{value:"RenderSwitch",paraId:21,tocIndex:20},{value:" is ideal when you have multiple mutually exclusive conditions:",paraId:21,tocIndex:20},{value:`// Good
<RenderSwitch cases={[isAdmin, isModerator, isUser]}>
  <AdminPanel />
  <ModeratorPanel />
  <UserPanel />
</RenderSwitch>
`,paraId:22,tocIndex:20},{value:"Always provide a fallback for better UX:",paraId:23,tocIndex:21},{value:`<RenderSwitch
  cases={[status === 'active', status === 'pending']}
  fallback={<UnknownState />}
>
  <ActiveState />
  <PendingState />
</RenderSwitch>
`,paraId:24,tocIndex:21},{value:"Place most specific conditions first:",paraId:25,tocIndex:22},{value:`<RenderSwitch
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
`,paraId:26,tocIndex:22},{value:"true",paraId:27},{value:"Use ",paraId:28,tocIndex:23},{value:"true",paraId:28,tocIndex:23},{value:" as the last condition for a catch-all:",paraId:28,tocIndex:23},{value:`<RenderSwitch
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
`,paraId:29,tocIndex:23},{value:"Feature",paraId:30,tocIndex:24},{value:"RenderIf",paraId:30,tocIndex:24},{value:"RenderSwitch",paraId:30,tocIndex:24},{value:"Conditions",paraId:30,tocIndex:24},{value:"Single boolean",paraId:30,tocIndex:24},{value:"Multiple boolean cases",paraId:30,tocIndex:24},{value:"Children",paraId:30,tocIndex:24},{value:"1-2 children",paraId:30,tocIndex:24},{value:"Multiple children + fallback",paraId:30,tocIndex:24},{value:"Use case",paraId:30,tocIndex:24},{value:"Simple if/else",paraId:30,tocIndex:24},{value:"Multiple mutually exclusive states",paraId:30,tocIndex:24},{value:"Fallback",paraId:30,tocIndex:24},{value:"Implicit (second child)",paraId:30,tocIndex:24},{value:"Explicit fallback prop",paraId:30,tocIndex:24},{value:"In development mode, ",paraId:31,tocIndex:25},{value:"RenderSwitch",paraId:31,tocIndex:25},{value:" will warn you if:",paraId:31,tocIndex:25},{value:"The number of cases doesn't match the number of children",paraId:32,tocIndex:25},{value:"Cases array is empty",paraId:32,tocIndex:25},{value:"These warnings help catch bugs early while maintaining zero runtime overhead in production.",paraId:33,tocIndex:25}]},34914:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Welcome to the React Render Controls guide. Explore the documentation below:",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:0},{value:" - Installation and basic usage",paraId:2,tocIndex:0},{value:"Components",paraId:3,tocIndex:0},{value:" - Detailed component documentation",paraId:2,tocIndex:0},{value:"API Reference",paraId:4,tocIndex:0},{value:" - Complete type definitions",paraId:2,tocIndex:0}]},63961:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"React Render Controls is a lightweight, headless React component library for declarative conditional rendering and pattern matching.",paraId:0,tocIndex:0},{value:"Install the package using your favorite package manager:",paraId:1,tocIndex:1},{value:`# npm
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
`,paraId:4,tocIndex:4},{value:`import { RenderMatch } from '@jswork/react-render-controls';

function StatusDisplay({ status }) {
  return (
    <RenderMatch value={status} items={['pending', 'success', 'error']}>
      <PendingState />
      <SuccessState />
      <ErrorState />
    </RenderMatch>
  );
}
`,paraId:5,tocIndex:5},{value:`import { RenderSwitch } from '@jswork/react-render-controls';

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
`,paraId:6,tocIndex:6},{value:"If you need the default styles, you can import them:",paraId:7,tocIndex:7},{value:`import '@jswork/react-render-controls/dist/style.css';
`,paraId:8,tocIndex:7},{value:"Note: This is optional. The components are headless and have no built-in styling by default.",paraId:9,tocIndex:7},{value:"All components are fully typed. Import types as needed:",paraId:10,tocIndex:8},{value:`import type {
  RenderIfProps,
  RenderMatchProps,
  RenderSwitchProps
} from '@jswork/react-render-controls';
`,paraId:11,tocIndex:8},{value:"Explore ",paraId:12,tocIndex:9},{value:"Component Documentation",paraId:13,tocIndex:9},{value:" for detailed usage",paraId:12,tocIndex:9},{value:"Check out ",paraId:12,tocIndex:9},{value:"API Reference",paraId:14,tocIndex:9},{value:" for complete type definitions",paraId:12,tocIndex:9}]},25921:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:`npm install @jswork/react-render-controls
`,paraId:0,tocIndex:0},{value:`import { RenderIf, RenderMatch, RenderSwitch } from '@jswork/react-render-controls';

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
`,paraId:1,tocIndex:1}]},1221:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Interactive demos for React Render Controls components. Click on any component below to explore live, editable examples.",paraId:0,tocIndex:0},{value:"RenderIf Demos",paraId:1,tocIndex:1},{value:" - Conditional rendering with if/else patterns",paraId:2,tocIndex:1},{value:"RenderMatch Demos",paraId:3,tocIndex:1},{value:" - Pattern matching for status-based rendering",paraId:2,tocIndex:1},{value:"RenderSwitch Demos",paraId:4,tocIndex:1},{value:" - Switch-style conditional rendering",paraId:2,tocIndex:1},{value:"Live Editing",paraId:5,tocIndex:2},{value:" - All demos are editable in real-time",paraId:5,tocIndex:2},{value:"Interactive",paraId:5,tocIndex:2},{value:" - See changes immediately as you code",paraId:5,tocIndex:2},{value:"Type-Safe",paraId:5,tocIndex:2},{value:" - Full TypeScript support",paraId:5,tocIndex:2},{value:"Production Ready",paraId:5,tocIndex:2},{value:" - All examples follow best practices",paraId:5,tocIndex:2},{value:"Select a component above to view interactive demos. Each demo includes:",paraId:6,tocIndex:3},{value:"Complete, runnable code",paraId:7,tocIndex:3},{value:"Real-time preview",paraId:7,tocIndex:3},{value:"Editable source code",paraId:7,tocIndex:3},{value:"Usage examples and patterns",paraId:7,tocIndex:3}]},23772:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Interactive demos for the RenderIf component.",paraId:0,tocIndex:0}]},44269:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Interactive demos for the RenderMatch component.",paraId:0,tocIndex:0}]},47626:function(c,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Interactive demos for the RenderSwitch component.",paraId:0,tocIndex:0}]},14224:function(c){var n=c.exports={},e,t;function f(){throw new Error("setTimeout has not been defined")}function p(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=f}catch(i){e=f}try{typeof clearTimeout=="function"?t=clearTimeout:t=p}catch(i){t=p}})();function S(i){if(e===setTimeout)return setTimeout(i,0);if((e===f||!e)&&setTimeout)return e=setTimeout,setTimeout(i,0);try{return e(i,0)}catch(r){try{return e.call(null,i,0)}catch(o){return e.call(this,i,0)}}}function x(i){if(t===clearTimeout)return clearTimeout(i);if((t===p||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(i);try{return t(i)}catch(r){try{return t.call(null,i)}catch(o){return t.call(this,i)}}}var a=[],g=!1,R,h=-1;function v(){!g||!R||(g=!1,R.length?a=R.concat(a):h=-1,a.length&&I())}function I(){if(!g){var i=S(v);g=!0;for(var r=a.length;r;){for(R=a,a=[];++h<r;)R&&R[h].run();h=-1,r=a.length}R=null,g=!1,x(i)}}n.nextTick=function(i){var r=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)r[o-1]=arguments[o];a.push(new d(i,r)),a.length===1&&!g&&S(I)};function d(i,r){this.fun=i,this.array=r}d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function s(){}n.on=s,n.addListener=s,n.once=s,n.off=s,n.removeListener=s,n.removeAllListeners=s,n.emit=s,n.prependListener=s,n.prependOnceListener=s,n.listeners=function(i){return[]},n.binding=function(i){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(i){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},45374:function(c,n){"use strict";n.Z=`import { RenderIf } from '@jswork/react-render-controls';
import React, { useState } from 'react';

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
          cursor: 'pointer',
        }}
      >
        {showMessage ? 'Hide' : 'Show'} Message
      </button>

      <RenderIf when={showMessage}>
        <div
          style={{
            padding: '12px',
            background: '#e6f7ff',
            border: '1px solid #91d5ff',
            borderRadius: '4px',
          }}
        >
          This message is shown when showMessage is true!
        </div>
      </RenderIf>
    </div>
  );
};
`},18036:function(c,n){"use strict";n.Z=`import { RenderIf } from '@jswork/react-render-controls';
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
};
`},37111:function(c,n){"use strict";n.Z=`import { RenderIf } from '@jswork/react-render-controls';
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
};
`},11684:function(c,n){"use strict";n.Z=`import { RenderIf } from '@jswork/react-render-controls';
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
};
`},18923:function(c,n){"use strict";n.Z=`import { RenderIf } from '@jswork/react-render-controls';
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
};
`},99753:function(c,n){"use strict";n.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
};
`},85497:function(c,n){"use strict";n.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
};
`},44856:function(c,n){"use strict";n.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
};
`},72264:function(c,n){"use strict";n.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
};
`},84771:function(c,n){"use strict";n.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
};
`},16016:function(c,n){"use strict";n.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
};
`},34875:function(c,n){"use strict";n.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
};
`},45878:function(c,n){"use strict";n.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
            <div style={{ padding: '12px', background: 'white', borderRadius: '4px', marginBottom: '8px' }}>Row 3</div>
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
};
`},92245:function(c,n){"use strict";n.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
};
`},4787:function(c,n){"use strict";n.Z=`.render-switch-multiple-demo {
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;

  h3 {
    margin: 0 0 10px 0;
    font-size: 20px;
  }

  .description {
    color: #666;
    margin-bottom: 20px;

    code {
      background: #f0f0f0;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 14px;
    }
  }

  .demo-section {
    margin: 20px 0;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 8px;

    h4 {
      margin: 0 0 15px 0;
      font-size: 16px;
    }

    .permission-toggles {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .toggle {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        padding: 10px;
        background: white;
        border-radius: 6px;
        transition: background 0.2s;

        &:hover {
          background: #f0f0f0;
        }

        input[type='checkbox'] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        span {
          font-size: 14px;
          user-select: none;
        }
      }
    }

    .permissions {
      display: flex;
      gap: 15px;

      .permission {
        padding: 8px 12px;
        background: white;
        border-radius: 6px;
        font-size: 14px;

        &.active {
          background: #e8f5e9;
          color: #2e7d32;
          font-weight: 500;
        }
      }
    }

    .permission-badge {
      padding: 12px 16px;
      margin: 8px 0;
      border-radius: 6px;
      font-size: 14px;

      &.read {
        background: #e3f2fd;
        color: #1565c0;
      }

      &.write {
        background: #fff3e0;
        color: #e65100;
      }

      &.delete {
        background: #ffebee;
        color: #c62828;
      }
    }
  }

  .explanation {
    margin-top: 20px;
    padding: 15px;
    background: #fff9e6;
    border-left: 4px solid #ffc107;
    border-radius: 4px;

    p {
      margin: 8px 0;
      font-size: 14px;

      strong {
        color: #333;
      }

      code {
        background: #f0f0f0;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 13px;
      }
    }
  }
}

`},88919:function(c,n){"use strict";n.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';
import './render-switch-multiple.scss';

export default () => {
  const [hasRead, setHasRead] = useState(true);
  const [hasWrite, setHasWrite] = useState(true);
  const [hasDelete, setHasDelete] = useState(false);

  return (
    <div className="render-switch-multiple-demo">
      <h3>Multiple Mode Demo</h3>
      <p className="description">
        When <code>multiple</code> is <code>true</code>, all matching children are rendered.
      </p>

      <div className="demo-section">
        <h4>Toggle Permissions:</h4>
        <div className="permission-toggles">
          <label className="toggle">
            <input type="checkbox" checked={hasRead} onChange={() => setHasRead(!hasRead)} />
            <span>Read Permission</span>
          </label>
          <label className="toggle">
            <input type="checkbox" checked={hasWrite} onChange={() => setHasWrite(!hasWrite)} />
            <span>Write Permission</span>
          </label>
          <label className="toggle">
            <input type="checkbox" checked={hasDelete} onChange={() => setHasDelete(!hasDelete)} />
            <span>Delete Permission</span>
          </label>
        </div>
      </div>

      <div className="demo-section">
        <h4>Current Permissions:</h4>
        <div className="permissions">
          <span className={\`permission \${hasRead ? 'active' : ''}\`}>Read: {hasRead ? '\u2713' : '\u2717'}</span>
          <span className={\`permission \${hasWrite ? 'active' : ''}\`}>Write: {hasWrite ? '\u2713' : '\u2717'}</span>
          <span className={\`permission \${hasDelete ? 'active' : ''}\`}>Delete: {hasDelete ? '\u2713' : '\u2717'}</span>
        </div>
      </div>

      <div className="demo-section">
        <h4>Rendered Result:</h4>
        <RenderSwitch cases={[hasRead, hasWrite, hasDelete]} multiple>
          <div className="permission-badge read">Read Permission Granted</div>
          <div className="permission-badge write">Write Permission Granted</div>
          <div className="permission-badge delete">Delete Permission Granted</div>
        </RenderSwitch>
      </div>

      <div className="explanation">
        <p>
          <strong>Active permissions:</strong>{' '}
          {[hasRead && 'Read', hasWrite && 'Write', hasDelete && 'Delete']
            .filter(Boolean)
            .join(', ') || 'None'}
        </p>
        <p>
          Try toggling the checkboxes above to see how the <code>multiple</code> mode renders all
          matching children.
        </p>
      </div>
    </div>
  );
};
`},36578:function(c,n){"use strict";n.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
};
`},55350:function(c,n){"use strict";n.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
};
`}}]);
