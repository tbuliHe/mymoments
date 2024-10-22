import{ai as _,A as v,ay as C,az as V,e as T,ad as F,k as W,P as $,aA as M,aB as G}from"./c6lvz2om.js";const H=Object.freeze({left:0,top:0,width:16,height:16}),B=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),z=Object.freeze({...H,...B});Object.freeze({...z,body:"",hidden:!1});function U(s,t){let o=s.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)o+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+s+"</svg>"}const K=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Y=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function I(s,t,o){if(t===1)return s;if(o=o||100,typeof s=="number")return Math.ceil(s*t*o)/o;if(typeof s!="string")return s;const r=s.split(K);if(r===null||!r.length)return s;const e=[];let n=r.shift(),l=Y.test(n);for(;;){if(l){const i=parseFloat(n);isNaN(i)?e.push(n):e.push(Math.ceil(i*t*o)/o)}else e.push(n);if(n=r.shift(),n===void 0)return e.join("");l=!l}}function J(s){return s.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Q(s){return"data:image/svg+xml,"+J(s)}function X(s){return'url("'+Q(s)+'")'}function Z(s){const[t,o,r,e]=s;if(r!==e){const n=Math.max(r,e);return[t-(n-r)/2,o-(n-e)/2,n,n]}return s}const tt=Object.freeze({width:null,height:null}),et=Object.freeze({...tt,...B});function ot(s,t="defs"){let o="";const r=s.indexOf("<"+t);for(;r>=0;){const e=s.indexOf(">",r),n=s.indexOf("</"+t);if(e===-1||n===-1)break;const l=s.indexOf(">",n);if(l===-1)break;o+=s.slice(e+1,n).trim(),s=s.slice(0,r).trim()+s.slice(l+1)}return{defs:o,content:s}}function st(s,t){return s?"<defs>"+s+"</defs>"+t:t}function rt(s,t,o){const r=ot(s);return st(r.defs,t+r.content+o)}const nt=s=>s==="unset"||s==="undefined"||s==="none";function it(s,t){const o={...z,...s},r={...et,...t},e={left:o.left,top:o.top,width:o.width,height:o.height};let n=o.body;[o,r].forEach(y=>{const h=[],D=y.hFlip,j=y.vFlip;let m=y.rotate;D?j?m+=2:(h.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),h.push("scale(-1 1)"),e.top=e.left=0):j&&(h.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),h.push("scale(1 -1)"),e.top=e.left=0);let g;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:g=e.height/2+e.top,h.unshift("rotate(90 "+g.toString()+" "+g.toString()+")");break;case 2:h.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:g=e.width/2+e.left,h.unshift("rotate(-90 "+g.toString()+" "+g.toString()+")");break}m%2===1&&(e.left!==e.top&&(g=e.left,e.left=e.top,e.top=g),e.width!==e.height&&(g=e.width,e.width=e.height,e.height=g)),h.length&&(n=rt(n,'<g transform="'+h.join(" ")+'">',"</g>"))});const l=r.width,i=r.height,c=e.width,a=e.height;let u,d;l===null?(d=i===null?"1em":i==="auto"?a:i,u=I(d,c/a)):(u=l==="auto"?c:l,d=i===null?I(u,a/c):i==="auto"?a:i);const S={},A=(y,h)=>{nt(h)||(S[y]=h.toString())};A("width",u),A("height",d);const R=[e.left,e.top,c,a];return S.viewBox=R.join(" "),{attributes:S,viewBox:R,body:n}}function lt(s){const t={display:"inline-block",width:"1em",height:"1em"},o=s.varName;switch(s.pseudoSelector&&(t.content="''"),s.mode){case"background":o&&(t["background-image"]="var(--"+o+")"),t["background-repeat"]="no-repeat",t["background-size"]="100% 100%";break;case"mask":t["background-color"]="currentColor",o&&(t["mask-image"]=t["-webkit-mask-image"]="var(--"+o+")"),t["mask-repeat"]=t["-webkit-mask-repeat"]="no-repeat",t["mask-size"]=t["-webkit-mask-size"]="100% 100%";break}return t}function ct(s,t){const o={},r=t.varName,e=it(s);let n=e.viewBox;n[2]!==n[3]&&(t.forceSquare?n=Z(n):o.width=I("1em",n[2]/n[3]));const l=U(e.body.replace(/currentColor/g,t.color||"black"),{viewBox:`${n[0]} ${n[1]} ${n[2]} ${n[3]}`,width:`${n[2]}`,height:`${n[3]}`}),i=X(l);if(r)o["--"+r]=i;else switch(t.mode){case"background":o["background-image"]=i;break;case"mask":o["mask-image"]=o["-webkit-mask-image"]=i;break}return o}const b={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function at(s,t="expanded"){const o=[];for(let r=0;r<s.length;r++){const{selector:e,rules:n}=s[r];let i=(e instanceof Array?e.join(t==="compressed"?",":", "):e)+b.selectorStart[t],c=!0;for(const a in n)c||(i+=";"),i+=b.rule[t].replace("{key}",a)+n[a],c=!1;i+=b.selectorEnd[t],o.push(i)}return o.join(t==="compressed"?"":`
`)}function ut(s,t={}){const o=t.customise?t.customise(s.body):s.body,r=t.mode||(t.color||!o.includes("currentColor")?"background":"mask");let e=t.varName;e===void 0&&r==="mask"&&(e="svg");const n={...t,mode:r,varName:e};r==="background"&&delete n.varName;const l={...t.rules,...lt(n),...ct({...z,...s,body:o},n)},i=t.iconSelector||".icon";return at([{selector:i,rules:l}],n.format)}const p={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},O={silent:{level:-1},fatal:{level:p.fatal},error:{level:p.error},warn:{level:p.warn},log:{level:p.log},info:{level:p.info},success:{level:p.success},fail:{level:p.fail},ready:{level:p.info},start:{level:p.info},box:{level:p.info},debug:{level:p.debug},trace:{level:p.trace},verbose:{level:p.verbose}};function k(s){return s!==null&&typeof s=="object"}function N(s,t,o=".",r){if(!k(t))return N(s,{},o);const e=Object.assign({},t);for(const n in s){if(n==="__proto__"||n==="constructor")continue;const l=s[n];l!=null&&(Array.isArray(l)&&Array.isArray(e[n])?e[n]=[...l,...e[n]]:k(l)&&k(e[n])?e[n]=N(l,e[n],(o?`${o}.`:"")+n.toString()):e[n]=l)}return e}function ft(s){return(...t)=>t.reduce((o,r)=>N(o,r,""),{})}const pt=ft();function ht(s){return Object.prototype.toString.call(s)==="[object Object]"}function dt(s){return!(!ht(s)||!s.message&&!s.args||s.stack)}let x=!1;const P=[];class f{constructor(t={}){const o=t.types||O;this.options=pt({...t,defaults:{...t.defaults},level:L(t.level,o),reporters:[...t.reporters||[]]},{types:O,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(const r in o){const e={type:r,...this.options.defaults,...o[r]};this[r]=this._wrapLogFn(e),this[r].raw=this._wrapLogFn(e,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=L(t,this.options.types,this.options.level)}prompt(t,o){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,o)}create(t){const o=new f({...this.options,...t});return this._mockFn&&o.mockTypes(this._mockFn),o}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){const o=this.options.reporters.indexOf(t);if(o>=0)return this.options.reporters.splice(o,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(const t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(const t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,o){t&&(t.__write||(t.__write=t.write),t.write=r=>{this[o].raw(String(r).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){x=!0}resumeLogs(){x=!1;const t=P.splice(0);for(const o of t)o[0]._logFn(o[1],o[2])}mockTypes(t){const o=t||this.options.mockFn;if(this._mockFn=o,typeof o=="function")for(const r in this.options.types)this[r]=o(r,this.options.types[r])||this[r],this[r].raw=this[r]}_wrapLogFn(t,o){return(...r)=>{if(x){P.push([this,t,r,o]);return}return this._logFn(t,r,o)}}_logFn(t,o,r){if((t.level||0)>this.level)return!1;const e={date:new Date,args:[],...t,level:L(t.level,this.options.types)};!r&&o.length===1&&dt(o[0])?Object.assign(e,o[0]):e.args=[...o],e.message&&(e.args.unshift(e.message),delete e.message),e.additional&&(Array.isArray(e.additional)||(e.additional=e.additional.split(`
`)),e.args.push(`
`+e.additional.join(`
`)),delete e.additional),e.type=typeof e.type=="string"?e.type.toLowerCase():"log",e.tag=typeof e.tag=="string"?e.tag:"";const n=(i=!1)=>{const c=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&c>0){const a=[...this._lastLog.object.args];c>1&&a.push(`(repeated ${c} times)`),this._log({...this._lastLog.object,args:a}),this._lastLog.count=1}i&&(this._lastLog.object=e,this._log(e))};clearTimeout(this._lastLog.timeout);const l=this._lastLog.time&&e.date?e.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=e.date,l<this.options.throttle)try{const i=JSON.stringify([e.type,e.tag,e.args]),c=this._lastLog.serialized===i;if(this._lastLog.serialized=i,c&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(n,this.options.throttle);return}}catch{}n(!0)}_log(t){for(const o of this.options.reporters)o.log(t,{options:this.options})}}function L(s,t={},o=3){return s===void 0?o:typeof s=="number"?s:t[s]&&t[s].level!==void 0?t[s].level:o}f.prototype.add=f.prototype.addReporter;f.prototype.remove=f.prototype.removeReporter;f.prototype.clear=f.prototype.removeReporter;f.prototype.withScope=f.prototype.withTag;f.prototype.mock=f.prototype.mockTypes;f.prototype.pause=f.prototype.pauseLogs;f.prototype.resume=f.prototype.resumeLogs;function gt(s={}){return new f(s)}class mt{constructor(t){this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){const o=this._getLogFn(t.level),r=t.type==="log"?"":t.type,e=t.tag||"",l=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,i=`%c${[e,r].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?o(`${i}%c ${t.args[0]}`,l,"",...t.args.slice(1)):o(i,l,...t.args)}}function yt(s={}){return gt({reporters:s.reporters||[new mt({})],prompt(o,r={}){return r.type==="confirm"?Promise.resolve(confirm(o)):Promise.resolve(prompt(o))},...s})}const q=yt();async function wt(s,t){if(!s)return null;const o=C(s);if(o)return o;let r;const e=V(s).catch(()=>(q.warn(`[Icon] failed to load icon \`${s}\``),null)).finally(()=>clearTimeout(r));return t>0?await Promise.race([e,new Promise(n=>{r=setTimeout(()=>{q.warn(`[Icon] loading icon \`${s}\` timed out after ${t}ms`),n()},t)})]):await e,C(s)}function E(s){const t=_().icon,o=(t.collections||[]).sort((r,e)=>e.length-r.length);return v(()=>{var l;const r=s(),e=r.startsWith(t.cssSelectorPrefix)?r.slice(t.cssSelectorPrefix.length):r,n=((l=t.aliases)==null?void 0:l[e])||e;if(!n.includes(":")){const i=o.find(c=>n.startsWith(c+"-"));return i?i+":"+n.slice(i.length+1):n}return n})}let w;function vt(s){return s.replace(/([^\w-])/g,"\\$1")}function _t(){if(w)return w;w=new Set;const s=o=>{if(o=o.replace(/^:where\((.*)\)$/,"$1").trim(),o.startsWith("."))return o},t=o=>{if(o!=null&&o.length)for(const r of o){r!=null&&r.cssRules&&t(r.cssRules);const e=r==null?void 0:r.selectorText;if(typeof e=="string"){const n=s(e);n&&w.add(n)}}};for(const o of document.styleSheets)try{const r=o.cssRules||o.rules;t(r)}catch{}return w}const St=T({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(s){const t=F(),o=_().icon,r=v(()=>s.name?o.cssSelectorPrefix+s.name:"");function e(i){var u,d;if(!i)return;const c=C(i);if(c)return c;const a=(d=(u=t.payload)==null?void 0:u.data)==null?void 0:d[i];if(a)return M(i,a),a}const n=v(()=>"."+vt(r.value));function l(i,c=!0){let a=n.value;o.cssWherePseudo&&(a=`:where(${a})`);const u=ut(i,{iconSelector:a,format:"compressed",customise:s.customize});return o.cssLayer&&c?`@layer ${o.cssLayer} { ${u} }`:u}{const i=_t();async function c(a){if(i.has(n.value))return;const u=document.createElement("style");u.textContent=l(a);const d=document.head.querySelector('style, link[rel="stylesheet"]');d?document.head.insertBefore(u,d):document.head.appendChild(u),i.add(n.value)}W(()=>s.name,()=>{if(i.has(n.value))return;const a=e(s.name);a?c(a):wt(s.name,o.fetchTimeout).then(u=>{u&&c(u)}).catch(()=>null)},{immediate:!0})}return()=>$("span",{class:["iconify",r.value,o.class]})}}),bt=T({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},async setup(s,{slots:t}){const o=F(),r=_().icon,e=E(()=>s.name),n="i-"+e.value;if(e.value){const l=o.payload.data[n];l&&M(e.value,l)}return()=>$(G,{icon:e.value,ssr:!0,class:r.class,customise:s.customize},t)}}),xt=T({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1}},async setup(s,{slots:t}){const o=F(),r=_().icon,e=E(()=>s.name),n=v(()=>{var c;return((c=o.vueApp)==null?void 0:c.component(e.value))||((s.mode||r.mode)==="svg"?bt:St)}),l=v(()=>{const c=s.size||r.size;return c?{fontSize:Number.isNaN(+c)?c:c+"px"}:null}),i=s.customize||r.customize;return()=>$(n.value,{...r.attrs,name:e.value,class:r.class,style:l.value,customize:i},t)}});export{xt as default};
