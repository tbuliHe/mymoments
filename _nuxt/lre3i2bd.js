import{M as A,H as I,I as S,Z as N,r as D,z as H,a4 as C,Q as U,F as R,e as q}from"./gkw12r6h.js";function _(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function W(){let e=[],t={addEventListener(n,r,o,i){return n.addEventListener(r,o,i),t.add(()=>n.removeEventListener(r,o,i))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return _(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let i=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:i})})},group(n){let r=W();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}var $;let P=Symbol("headlessui.useid"),K=0;const ge=($=I)!=null?$:function(){return S(P,()=>`${++K}`)()};function be(e){A(P,e)}function F(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function E(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}var V=Object.defineProperty,G=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t,n)=>(G(e,typeof t!="symbol"?t+"":t,n),n);let z=class{constructor(){L(this,"current",this.detect()),L(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},O=new z;function B(e){if(O.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=F(e);if(t)return t.ownerDocument}return document}let b=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var X=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(X||{}),Q=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Q||{}),Y=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Y||{});function Z(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(b)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var j=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(j||{});function J(e,t=0){var n;return e===((n=B(e))==null?void 0:n.body)?!1:E(t,{0(){return e.matches(b)},1(){let r=e;for(;r!==null;){if(r.matches(b))return!0;r=r.parentElement}return!1}})}var ee=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ee||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Oe(e){e==null||e.focus({preventScroll:!0})}let te=["textarea","input"].join(",");function ne(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,te))!=null?n:!1}function re(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),i=t(r);if(o===null||i===null)return 0;let u=o.compareDocumentPosition(i);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function $e(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var i;let u=(i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?i:document,a=Array.isArray(e)?n?re(e):e:Z(e);o.length>0&&a.length>1&&(a=a.filter(d=>!o.includes(d))),r=r??u.activeElement;let m=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=t&32?{preventScroll:!0}:{},p=0,v=a.length,f;do{if(p>=v||p+v<=0)return 0;let d=s+p;if(t&16)d=(d+v)%v;else{if(d<0)return 3;if(d>=v)return 1}f=a[d],f==null||f.focus(l),p+=m}while(f!==u.activeElement);return t&6&&ne(f)&&f.select(),2}function oe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ie(){return/Android/gi.test(window.navigator.userAgent)}function ae(){return oe()||ie()}function w(e,t,n){O.isServer||N(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function ue(e,t,n){O.isServer||N(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function Le(e,t,n=H(()=>!0)){function r(i,u){if(!n.value||i.defaultPrevented)return;let a=u(i);if(a===null||!a.getRootNode().contains(a))return;let m=function s(l){return typeof l=="function"?s(l()):Array.isArray(l)||l instanceof Set?l:[l]}(e);for(let s of m){if(s===null)continue;let l=s instanceof HTMLElement?s:F(s);if(l!=null&&l.contains(a)||i.composed&&i.composedPath().includes(l))return}return!J(a,j.Loose)&&a.tabIndex!==-1&&i.preventDefault(),t(i,a)}let o=D(null);w("pointerdown",i=>{var u,a;n.value&&(o.value=((a=(u=i.composedPath)==null?void 0:u.call(i))==null?void 0:a[0])||i.target)},!0),w("mousedown",i=>{var u,a;n.value&&(o.value=((a=(u=i.composedPath)==null?void 0:u.call(i))==null?void 0:a[0])||i.target)},!0),w("click",i=>{ae()||o.value&&(r(i,()=>o.value),o.value=null)},!0),w("touchend",i=>r(i,()=>i.target instanceof HTMLElement?i.target:null),!0),ue("blur",i=>r(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var se=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(se||{}),le=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(le||{});function de({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var i;let u=T(r,n),a=Object.assign(o,{props:u});if(e||t&2&&u.static)return g(a);if(t&1){let m=(i=u.unmount)==null||i?0:1;return E(m,{0(){return null},1(){return g({...o,props:{...u,hidden:!0,style:{display:"none"}}})}})}return g(a)}function g({props:e,attrs:t,slots:n,slot:r,name:o}){var i,u;let{as:a,...m}=ce(e,["unmount","static"]),s=(i=n.default)==null?void 0:i.call(n,r),l={};if(r){let p=!1,v=[];for(let[f,d]of Object.entries(r))typeof d=="boolean"&&(p=!0),d===!0&&v.push(f);p&&(l["data-headlessui-state"]=v.join(" "))}if(a==="template"){if(s=x(s??[]),Object.keys(m).length>0||Object.keys(t).length>0){let[p,...v]=s??[];if(!fe(p)||v.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(m).concat(Object.keys(t)).map(c=>c.trim()).filter((c,y,k)=>k.indexOf(c)===y).sort((c,y)=>c.localeCompare(y)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));let f=T((u=p.props)!=null?u:{},m,l),d=C(p,f,!0);for(let c in f)c.startsWith("on")&&(d.props||(d.props={}),d.props[c]=f[c]);return d}return Array.isArray(s)&&s.length===1?s[0]:s}return U(a,Object.assign({},m,l),{default:()=>s})}function x(e){return e.flatMap(t=>t.type===R?x(t.children):[t])}function T(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let u=n[r];for(let a of u){if(o instanceof Event&&o.defaultPrevented)return;a(o,...i)}}});return t}function Ae(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function ce(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function fe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var pe=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(pe||{});let Se=q({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var r;let{features:o,...i}=e,u={"aria-hidden":(o&2)===2?!0:(r=i["aria-hidden"])!=null?r:void 0,hidden:(o&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return de({ourProps:u,theirProps:i,slot:{},attrs:n,slots:t,name:"Hidden"})}}}),M=Symbol("Context");var me=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(me||{});function Ne(){return ve()!==null}function ve(){return S(M,null)}function Pe(e){A(M,e)}var he=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(he||{});function we(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let h=[];we(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&h[0]!==t.target&&(h.unshift(t.target),h=h.filter(n=>n!=null&&n.isConnected),h.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});export{de as A,Ae as E,se as N,re as O,$e as P,Oe as S,ce as T,he as a,W as b,B as c,E as d,me as e,Se as f,h as g,J as h,ge as i,j,Z as k,ve as l,X as m,ae as n,F as o,Q as p,_ as q,oe as r,be as s,Pe as t,pe as u,Ne as v,Le as w,le as x,O as y,ue as z};