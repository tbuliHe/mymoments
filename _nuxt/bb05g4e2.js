import{n as w,i as P,t as g,h as C,j as S,k}from"./cdhi6rl9.js";import{s as I,r as A,a1 as b,Z as z,z as B,k as M,a8 as O}from"./gkw12r6h.js";function F(i,a,s){let t;I(s)?t={evaluating:s}:t=s||{};const{lazy:f=!1,evaluating:l=void 0,shallow:p=!0,onError:u=w}=t,r=A(!f),c=p?b(a):A(a);let n=0;return z(async m=>{if(!r.value)return;n++;const v=n;let e=!1;l&&Promise.resolve().then(()=>{l.value=!0});try{const o=await i(d=>{m(()=>{l&&(l.value=!1),e||d()})});v===n&&(c.value=o)}catch(o){u(o)}finally{l&&v===n&&(l.value=!1),e=!0}}),f?B(()=>(r.value=!0,c.value)):c}const L=k?window:void 0;function E(i){var a;const s=g(i);return(a=s==null?void 0:s.$el)!=null?a:s}function y(...i){let a,s,t,f;if(typeof i[0]=="string"||Array.isArray(i[0])?([s,t,f]=i,a=L):[a,s,t,f]=i,!a)return w;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const l=[],p=()=>{l.forEach(n=>n()),l.length=0},u=(n,m,v,e)=>(n.addEventListener(m,v,e),()=>n.removeEventListener(m,v,e)),r=M(()=>[E(a),g(f)],([n,m])=>{if(p(),!n)return;const v=C(m)?{...m}:m;l.push(...s.flatMap(e=>t.map(o=>u(n,e,o,v))))},{immediate:!0,flush:"post"}),c=()=>{r(),p()};return S(c),c}let _=!1;function T(i,a,s={}){const{window:t=L,ignore:f=[],capture:l=!0,detectIframe:p=!1}=s;if(!t)return w;P&&!_&&(_=!0,Array.from(t.document.body.children).forEach(e=>e.addEventListener("click",w)),t.document.documentElement.addEventListener("click",w));let u=!0;const r=e=>g(f).some(o=>{if(typeof o=="string")return Array.from(t.document.querySelectorAll(o)).some(d=>d===e.target||e.composedPath().includes(d));{const d=E(o);return d&&(e.target===d||e.composedPath().includes(d))}}),c=e=>{const o=E(i);if(!(!o||o===e.target||e.composedPath().includes(o))){if(e.detail===0&&(u=!r(e)),!u){u=!0;return}a(e)}};let n=!1;const m=[y(t,"click",e=>{n||(n=!0,setTimeout(()=>{n=!1},0),c(e))},{passive:!0,capture:l}),y(t,"pointerdown",e=>{const o=E(i);u=!r(e)&&!!(o&&!e.composedPath().includes(o))},{passive:!0}),p&&y(t,"blur",e=>{setTimeout(()=>{var o;const d=E(i);((o=t.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(d!=null&&d.contains(t.document.activeElement))&&a(e)},0)})].filter(Boolean);return()=>m.forEach(e=>e())}const h=new Map;function q(i){const a=O();function s(u){var r;const c=h.get(i)||new Set;c.add(u),h.set(i,c);const n=()=>f(u);return(r=a==null?void 0:a.cleanups)==null||r.push(n),n}function t(u){function r(...c){f(r),u(...c)}return s(r)}function f(u){const r=h.get(i);r&&(r.delete(u),r.size||l())}function l(){h.delete(i)}function p(u,r){var c;(c=h.get(i))==null||c.forEach(n=>n(u,r))}return{on:s,once:t,off:f,emit:p,reset:l}}export{q as a,F as c,T as o,E as u};