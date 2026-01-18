(self.webpackChunkreact_render_controls_docs=self.webpackChunkreact_render_controls_docs||[]).push([[904],{81735:function(i,t,e){"use strict";e.r(t),e.d(t,{RenderIf:function(){return O},RenderList:function(){return P},RenderMatch:function(){return k},RenderSwitch:function(){return j}});var r=e(75271),h=e(14224),s=Object.defineProperty,b=Object.defineProperties,g=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,l=(I,m,v)=>m in I?s(I,m,{enumerable:!0,configurable:!0,writable:!0,value:v}):I[m]=v,p=(I,m)=>{for(var v in m||(m={}))f.call(m,v)&&l(I,v,m[v]);if(d)for(var v of d(m))y.call(m,v)&&l(I,v,m[v]);return I},u=(I,m)=>b(I,g(m)),a=(I,m)=>s(I,"name",{value:m,configurable:!0}),o,c=typeof h!="undefined"&&((o={NODE_ENV:"production",PUBLIC_PATH:"/react-render-controls-docs/"})==null?void 0:o.NODE_ENV)!=="production";function n(I){return typeof I=="function"}a(n,"isRenderFn");function S(I,m,v,x){if(x===void 0)return m;if(typeof x=="function")return x(I,m,v);let R=I[x];return R==null?(c&&console.warn(`RenderList: keyBy="${String(x)}" but the field is undefined in ${JSON.stringify(I)}`),m):R}a(S,"getKey");function P({items:I,render:m,keyBy:v}){return r.createElement(r.Fragment,null,I.map((x,R)=>{let w=S(x,R,I,v);if(n(m))return r.createElement(r.Fragment,{key:w},m(x,R,I));let{component:M,dataKey:U="item",props:N={}}=m,F=u(p({},N),{[U]:x});return r.createElement(r.Fragment,{key:w},r.createElement(M,F))}))}a(P,"RenderList");function C({when:I,children:m}){let v=r.Children.toArray(m);return v.length===0?null:(v.length>2&&c&&console.warn(`RenderIf: Expected at most 2 children, but got ${v.length}. Only the first 2 children will be used.`),v.length===1?I?v[0]:null:I?v[0]:v[1])}a(C,"RenderIf");var O=C;function L(I,m){for(let v=0;v<m.length;v++){let x=m[v];if(typeof x=="string"){if(x===I)return v}else if(x.includes(I))return v}return-1}a(L,"findMatchIndex");function E(I){let m=[];for(let v of I)typeof v=="string"?m.push(v):m.push(...v);return m}a(E,"getAllValues");function T({value:I,items:m,children:v}){var x;let R=L(I,m);if(R===-1){if(c){let M=E(m);console.warn(`RenderMatch: Value "${I}" not found in any of the items. Available values: [${M.join(", ")}]`)}return null}let w=r.Children.toArray(v).filter(M=>(0,r.isValidElement)(M));return R>=w.length?(c&&console.warn(`RenderMatch: Not enough children provided. Expected at least ${R+1}, but got ${w.length}.`),null):(x=w[R])!=null?x:null}a(T,"RenderMatch");var k=T;function D(I){for(let m=0;m<I.length;m++)if(I[m])return m;return-1}a(D,"findTrueCaseIndex");function A(I,m,v){c&&I>m&&console.warn(`${v}: More cases (${I}) than children (${m}). Extra cases will be ignored.`)}a(A,"validateCasesLength");function B({cases:I,children:m,fallback:v=null}){let x=r.Children.toArray(m).filter(w=>(0,r.isValidElement)(w));A(I.length,x.length,"RenderSwitch");let R=D(I);return R>=0&&R<x.length?x[R]:v}a(B,"RenderSwitch");var j=B},51998:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},86455:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},80443:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},71620:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},49697:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},22796:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},33953:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},51552:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},6657:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},32047:function(i,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return h}});var r=e(75271),h={}},62310:function(i,t,e){"use strict";var r;e.r(t),e.d(t,{demos:function(){return y}});var h=e(90228),s=e.n(h),b=e(87999),g=e.n(b),d=e(75271),f=e(81735),y={"docs-playground-render-if-demo-render-if-basic":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,49147))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45374).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic Toggle"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-if-demo-render-if-else":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,49165))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-else",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18036).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Authentication"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-if-demo-render-if-multiple":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,96209))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-multiple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18923).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Role-Based Display"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-if-demo-render-if-loading":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,18656))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(11684).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Data Fetching"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-if-demo-render-if-feature":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,94334))})),asset:{type:"BLOCK",id:"docs-playground-render-if-demo-render-if-feature",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37111).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Feature Flags"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}}}},54134:function(i,t,e){"use strict";var r;e.r(t),e.d(t,{demos:function(){return y}});var h=e(90228),s=e.n(h),b=e(87999),g=e.n(b),d=e(75271),f=e(81735),y={"docs-playground-render-list-demo-render-list-basic":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,69104))})),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-render-list-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66925).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx",title:"Simple List"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-list-demo-render-list-index":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,14152))})),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-render-list-index",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56409).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx",title:"Numbered List"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-list-demo-render-list-object":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,58685))})),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-render-list-object",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42404).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx",title:"User List"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-list-demo-render-list-interactive":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,1649))})),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-render-list-interactive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21917).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Todo List"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-list-demo-render-list-all-items":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,92570))})),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-render-list-all-items",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13297).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx",title:"Scores with Average"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-list-demo-render-list-component":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,34440))})),asset:{type:"BLOCK",id:"docs-playground-render-list-demo-render-list-component",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89160).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"}},entry:"index.tsx",title:"Component Style"},context:{"@jswork/react-render-controls":f},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}}}},48542:function(i,t,e){"use strict";var r;e.r(t),e.d(t,{demos:function(){return y}});var h=e(90228),s=e.n(h),b=e(87999),g=e.n(b),d=e(75271),f=e(81735),y={"docs-playground-render-match-demo-render-match-basic-status":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,75932))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-basic-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99753).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic Status Matching"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-match-demo-render-match-multiple-values":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,24266))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-multiple-values",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44856).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Multiple Values Per Match"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-match-demo-render-match-http-status":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,86402))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-http-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(85497).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"HTTP Status Codes"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-match-demo-render-match-theme-variant":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,31067))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-theme-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(72264).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Theme Variant Selector"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-match-demo-render-match-user-role":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,25565))})),asset:{type:"BLOCK",id:"docs-playground-render-match-demo-render-match-user-role",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(84771).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"User Role Badges"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}}}},10548:function(i,t,e){"use strict";var r;e.r(t),e.d(t,{demos:function(){return y}});var h=e(90228),s=e.n(h),b=e(87999),g=e.n(b),d=e(75271),f=e(81735),y={"docs-playground-render-switch-demo-render-switch-basic":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,71613))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16016).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic Switch"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-switch-demo-render-switch-permission":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,98163))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-permission",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36578).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Permission Levels"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-switch-demo-render-switch-connection":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,1462))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-connection",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34875).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Connection Status"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-switch-demo-render-switch-form-validation":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,68800))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-form-validation",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92245).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Form Validation States"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-switch-demo-render-switch-device-type":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,57535))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-device-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45878).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Device Type Detection"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}},"docs-playground-render-switch-demo-render-switch-time-greeting":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,62616))})),asset:{type:"BLOCK",id:"docs-playground-render-switch-demo-render-switch-time-greeting",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55350).Z},"@jswork/react-render-controls":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Time-based Greeting"},context:{"@jswork/react-render-controls":f,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var l=g()(s()().mark(function u(){var a,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(417).then(e.bind(e,10417));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},u)}));function p(){return l.apply(this,arguments)}return p}()}}}},12616:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Complete type definitions and API documentation for all components.",paraId:0,tocIndex:0},{value:`import {
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
`,paraId:26,tocIndex:28}]},27580:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"A collection of React components for declarative rendering control. Simplify conditional rendering, list rendering, and pattern matching in your React applications.",paraId:0,tocIndex:0},{value:"RenderIf",paraId:1,tocIndex:1},{value:"Conditional rendering component supporting if/else patterns with automatic warning for invalid usage.",paraId:2,tocIndex:2},{value:"Best for",paraId:3,tocIndex:2},{value:": Simple conditional rendering, if/else patterns",paraId:3,tocIndex:2},{value:`<RenderIf when={isLoggedIn}>
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
`,paraId:19,tocIndex:8},{value:"You have simple true/false conditions",paraId:20,tocIndex:10},{value:"You need if/else patterns",paraId:20,tocIndex:10},{value:"You want clean, readable conditional rendering",paraId:20,tocIndex:10},{value:"You need to render arrays of data",paraId:21,tocIndex:11},{value:"You want automatic empty state handling",paraId:21,tocIndex:11},{value:"You need to map over items consistently",paraId:21,tocIndex:11},{value:"You have multiple conditions based on a single value",paraId:22,tocIndex:12},{value:"You want cleaner code than nested ternaries",paraId:22,tocIndex:12},{value:"You need to match specific values or patterns",paraId:22,tocIndex:12},{value:"You have complex conditional logic",paraId:23,tocIndex:13},{value:"You need predicate-based matching",paraId:23,tocIndex:13},{value:"You want the most flexibility for conditions",paraId:23,tocIndex:13}]},23214:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Conditional rendering component supporting if/else patterns with automatic warning for invalid usage.",paraId:0,tocIndex:0},{value:"Single child",paraId:1,tocIndex:1},{value:": Render when true, nothing when false",paraId:1,tocIndex:1},{value:"Two children",paraId:1,tocIndex:1},{value:": If/else pattern",paraId:1,tocIndex:1},{value:"Development warnings",paraId:1,tocIndex:1},{value:": Alerts for invalid children count",paraId:1,tocIndex:1},{value:"Zero runtime overhead",paraId:1,tocIndex:1},{value:": Optimized for production",paraId:1,tocIndex:1},{value:`import { RenderIf } from '@jswork/react-render-controls';

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
`,paraId:17,tocIndex:18},{value:"In development mode, ",paraId:18,tocIndex:19},{value:"RenderIf",paraId:18,tocIndex:19},{value:" will warn you if:",paraId:18,tocIndex:19},{value:"You provide more than 2 children",paraId:19,tocIndex:19},{value:"The children structure is invalid",paraId:19,tocIndex:19},{value:"These warnings help catch bugs early while maintaining zero runtime overhead in production.",paraId:20,tocIndex:19}]},53331:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Declarative list rendering with support for both function and component-based rendering patterns.",paraId:0,tocIndex:0},{value:"Function-style rendering",paraId:1,tocIndex:1},{value:": ",paraId:1,tocIndex:1},{value:"(item, index, items) => ReactNode",paraId:1,tocIndex:1},{value:"Component-style rendering",paraId:1,tocIndex:1},{value:": Automatic prop mapping",paraId:1,tocIndex:1},{value:"Custom key generation",paraId:1,tocIndex:1},{value:": Multiple strategies for unique keys",paraId:1,tocIndex:1},{value:"Full context access",paraId:1,tocIndex:1},{value:": Index and full items array available",paraId:1,tocIndex:1},{value:`import { RenderList } from '@jswork/react-render-controls';

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
`,paraId:12,tocIndex:15},{value:"The ",paraId:13,tocIndex:16},{value:"keyBy",paraId:13,tocIndex:16},{value:" prop is recommended for proper React reconciliation",paraId:13,tocIndex:16},{value:"When using component-style rendering, ",paraId:13,tocIndex:16},{value:"dataKey",paraId:13,tocIndex:16},{value:" specifies which prop receives the item data",paraId:13,tocIndex:16},{value:"The function render style provides more flexibility for complex scenarios",paraId:13,tocIndex:16}]},60308:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Pattern matching component that renders the child matching the given value.",paraId:0,tocIndex:0},{value:"Single value matching",paraId:1,tocIndex:1},{value:": Match one value to one child",paraId:1,tocIndex:1},{value:"Multiple value matching",paraId:1,tocIndex:1},{value:": Match multiple values to the same child (array syntax)",paraId:1,tocIndex:1},{value:"Development warnings",paraId:1,tocIndex:1},{value:": Alerts for unmatched values",paraId:1,tocIndex:1},{value:"Status-based rendering",paraId:1,tocIndex:1},{value:": Perfect for state machines and status flows",paraId:1,tocIndex:1},{value:`import { RenderMatch } from '@jswork/react-render-controls';

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
`,paraId:20,tocIndex:19},{value:"In development mode, ",paraId:21,tocIndex:20},{value:"RenderMatch",paraId:21,tocIndex:20},{value:" will warn you if:",paraId:21,tocIndex:20},{value:"The value doesn't match any item in the list",paraId:22,tocIndex:20},{value:"The number of items doesn't match the number of children",paraId:22,tocIndex:20},{value:"These warnings help catch bugs early while maintaining zero runtime overhead in production.",paraId:23,tocIndex:20}]},54879:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Switch-style conditional rendering with multiple conditions and fallback support.",paraId:0,tocIndex:0},{value:"Multiple case conditions",paraId:1,tocIndex:1},{value:": Test multiple boolean conditions in order",paraId:1,tocIndex:1},{value:"First matching case wins",paraId:1,tocIndex:1},{value:": Stops at the first true condition",paraId:1,tocIndex:1},{value:"Optional fallback",paraId:1,tocIndex:1},{value:": Render content when no cases match",paraId:1,tocIndex:1},{value:"Development warnings",paraId:1,tocIndex:1},{value:": Alerts for cases/children mismatch",paraId:1,tocIndex:1},{value:`import { RenderSwitch } from '@jswork/react-render-controls';

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
`,paraId:24,tocIndex:22},{value:"Feature",paraId:25,tocIndex:23},{value:"RenderIf",paraId:25,tocIndex:23},{value:"RenderSwitch",paraId:25,tocIndex:23},{value:"Conditions",paraId:25,tocIndex:23},{value:"Single boolean",paraId:25,tocIndex:23},{value:"Multiple boolean cases",paraId:25,tocIndex:23},{value:"Children",paraId:25,tocIndex:23},{value:"1-2 children",paraId:25,tocIndex:23},{value:"Multiple children + fallback",paraId:25,tocIndex:23},{value:"Use case",paraId:25,tocIndex:23},{value:"Simple if/else",paraId:25,tocIndex:23},{value:"Multiple mutually exclusive states",paraId:25,tocIndex:23},{value:"Fallback",paraId:25,tocIndex:23},{value:"Implicit (second child)",paraId:25,tocIndex:23},{value:"Explicit fallback prop",paraId:25,tocIndex:23},{value:"In development mode, ",paraId:26,tocIndex:24},{value:"RenderSwitch",paraId:26,tocIndex:24},{value:" will warn you if:",paraId:26,tocIndex:24},{value:"The number of cases doesn't match the number of children",paraId:27,tocIndex:24},{value:"Cases array is empty",paraId:27,tocIndex:24},{value:"These warnings help catch bugs early while maintaining zero runtime overhead in production.",paraId:28,tocIndex:24}]},34914:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Welcome to the React Render Controls guide. Explore the documentation below:",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:0},{value:" - Installation and basic usage",paraId:2,tocIndex:0},{value:"Components",paraId:3,tocIndex:0},{value:" - Detailed component documentation",paraId:2,tocIndex:0},{value:"API Reference",paraId:4,tocIndex:0},{value:" - Complete type definitions",paraId:2,tocIndex:0}]},63961:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"React Render Controls is a lightweight, headless React component library for declarative conditional rendering, pattern matching, and list mapping.",paraId:0,tocIndex:0},{value:"Install the package using your favorite package manager:",paraId:1,tocIndex:1},{value:`# npm
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
`,paraId:9,tocIndex:8},{value:"Explore ",paraId:10,tocIndex:9},{value:"Component Documentation",paraId:11,tocIndex:9},{value:" for detailed usage",paraId:10,tocIndex:9},{value:"Check out ",paraId:10,tocIndex:9},{value:"API Reference",paraId:12,tocIndex:9},{value:" for complete type definitions",paraId:10,tocIndex:9}]},25921:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:`npm install @jswork/react-render-controls
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
`,paraId:1,tocIndex:1}]},1221:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Interactive demos for React Render Controls components. Click on any component below to explore live, editable examples.",paraId:0,tocIndex:0},{value:"RenderList Demos",paraId:1,tocIndex:1},{value:" - List rendering with function and component patterns",paraId:2,tocIndex:1},{value:"RenderIf Demos",paraId:3,tocIndex:1},{value:" - Conditional rendering with if/else patterns",paraId:2,tocIndex:1},{value:"RenderMatch Demos",paraId:4,tocIndex:1},{value:" - Pattern matching for status-based rendering",paraId:2,tocIndex:1},{value:"RenderSwitch Demos",paraId:5,tocIndex:1},{value:" - Switch-style conditional rendering",paraId:2,tocIndex:1},{value:"Live Editing",paraId:6,tocIndex:2},{value:" - All demos are editable in real-time",paraId:6,tocIndex:2},{value:"Interactive",paraId:6,tocIndex:2},{value:" - See changes immediately as you code",paraId:6,tocIndex:2},{value:"Type-Safe",paraId:6,tocIndex:2},{value:" - Full TypeScript support",paraId:6,tocIndex:2},{value:"Production Ready",paraId:6,tocIndex:2},{value:" - All examples follow best practices",paraId:6,tocIndex:2},{value:"Select a component above to view interactive demos. Each demo includes:",paraId:7,tocIndex:3},{value:"Complete, runnable code",paraId:8,tocIndex:3},{value:"Real-time preview",paraId:8,tocIndex:3},{value:"Editable source code",paraId:8,tocIndex:3},{value:"Usage examples and patterns",paraId:8,tocIndex:3}]},23772:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Interactive demos for the RenderIf component.",paraId:0,tocIndex:0}]},15719:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Interactive demos for the RenderList component.",paraId:0,tocIndex:0},{value:"Mui Slots Style",paraId:1}]},44269:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Interactive demos for the RenderMatch component.",paraId:0,tocIndex:0}]},47626:function(i,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return r}});const r=[{value:"Interactive demos for the RenderSwitch component.",paraId:0,tocIndex:0}]},14224:function(i){var t=i.exports={},e,r;function h(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=h}catch(c){e=h}try{typeof clearTimeout=="function"?r=clearTimeout:r=s}catch(c){r=s}})();function b(c){if(e===setTimeout)return setTimeout(c,0);if((e===h||!e)&&setTimeout)return e=setTimeout,setTimeout(c,0);try{return e(c,0)}catch(n){try{return e.call(null,c,0)}catch(S){return e.call(this,c,0)}}}function g(c){if(r===clearTimeout)return clearTimeout(c);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(c);try{return r(c)}catch(n){try{return r.call(null,c)}catch(S){return r.call(this,c)}}}var d=[],f=!1,y,l=-1;function p(){!f||!y||(f=!1,y.length?d=y.concat(d):l=-1,d.length&&u())}function u(){if(!f){var c=b(p);f=!0;for(var n=d.length;n;){for(y=d,d=[];++l<n;)y&&y[l].run();l=-1,n=d.length}y=null,f=!1,g(c)}}t.nextTick=function(c){var n=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)n[S-1]=arguments[S];d.push(new a(c,n)),d.length===1&&!f&&b(u)};function a(c,n){this.fun=c,this.array=n}a.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={};function o(){}t.on=o,t.addListener=o,t.once=o,t.off=o,t.removeListener=o,t.removeAllListeners=o,t.emit=o,t.prependListener=o,t.prependOnceListener=o,t.listeners=function(c){return[]},t.binding=function(c){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(c){throw new Error("process.chdir is not supported")},t.umask=function(){return 0}},45374:function(i,t){"use strict";t.Z=`import { RenderIf } from '@jswork/react-render-controls';
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
`},18036:function(i,t){"use strict";t.Z=`import { RenderIf } from '@jswork/react-render-controls';
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
`},37111:function(i,t){"use strict";t.Z=`import { RenderIf } from '@jswork/react-render-controls';
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
`},11684:function(i,t){"use strict";t.Z=`import { RenderIf } from '@jswork/react-render-controls';
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
`},18923:function(i,t){"use strict";t.Z=`import { RenderIf } from '@jswork/react-render-controls';
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
`},13297:function(i,t){"use strict";t.Z=`import { RenderList } from '@jswork/react-render-controls';

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
};
`},66925:function(i,t){"use strict";t.Z=`import { RenderList } from '@jswork/react-render-controls';

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
};
`},89160:function(i,t){"use strict";t.Z=`import { RenderList } from '@jswork/react-render-controls';

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
};
`},56409:function(i,t){"use strict";t.Z=`import { RenderList } from '@jswork/react-render-controls';

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
};
`},21917:function(i,t){"use strict";t.Z=`import { RenderList } from '@jswork/react-render-controls';
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
};
`},42404:function(i,t){"use strict";t.Z=`import { RenderList } from '@jswork/react-render-controls';

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
};
`},99753:function(i,t){"use strict";t.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
`},85497:function(i,t){"use strict";t.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
`},44856:function(i,t){"use strict";t.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
`},72264:function(i,t){"use strict";t.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
`},84771:function(i,t){"use strict";t.Z=`import { RenderMatch } from '@jswork/react-render-controls';
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
`},16016:function(i,t){"use strict";t.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
`},34875:function(i,t){"use strict";t.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
`},45878:function(i,t){"use strict";t.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
`},92245:function(i,t){"use strict";t.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
`},36578:function(i,t){"use strict";t.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
`},55350:function(i,t){"use strict";t.Z=`import { RenderSwitch } from '@jswork/react-render-controls';
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
