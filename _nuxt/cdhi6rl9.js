import{i as Ie,l as Se,_ as U,n as Ce,c as ae}from"./ga5t764d.js";import{_ as te}from"./hbj4jthp.js";import{a8 as xe,a3 as Be,h as A,e as W,a7 as V,o as y,c as N,a as h,i as p,w as S,b as B,j as m,a6 as ze,t as K,I as F,r as D,z as o,M as ne,m as re,X as $e,a9 as ie,v as le,x as O,y as R,O as Oe,J as se,A as z,G as M,B as j,C as $,aa as je,E as X,S as Y,W as Ae}from"./gkw12r6h.js";import{_ as E}from"./ou69qqfo.js";const Z=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function G(e,i){i?i={...Z,...i}:i=Z;const r=oe(i);return r.dispatch(e),r.toString()}const Ne=Object.freeze(["prototype","__proto__","constructor"]);function oe(e){let i="",r=new Map;const t=a=>{i+=a};return{toString(){return i},getContext(){return r},dispatch(a){return e.replacer&&(a=e.replacer(a)),this[a===null?"null":typeof a](a)},object(a){if(a&&typeof a.toJSON=="function")return this.object(a.toJSON());const n=Object.prototype.toString.call(a);let l="";const s=n.length;s<10?l="unknown:["+n+"]":l=n.slice(8,s-1),l=l.toLowerCase();let d=null;if((d=r.get(a))===void 0)r.set(a,r.size);else return this.dispatch("[CIRCULAR:"+d+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(a))return t("buffer:"),t(a.toString("utf8"));if(l!=="object"&&l!=="function"&&l!=="asyncfunction")this[l]?this[l](a):e.ignoreUnknown||this.unkown(a,l);else{let c=Object.keys(a);e.unorderedObjects&&(c=c.sort());let u=[];e.respectType!==!1&&!_(a)&&(u=Ne),e.excludeKeys&&(c=c.filter(g=>!e.excludeKeys(g)),u=u.filter(g=>!e.excludeKeys(g))),t("object:"+(c.length+u.length)+":");const v=g=>{this.dispatch(g),t(":"),e.excludeValues||this.dispatch(a[g]),t(",")};for(const g of c)v(g);for(const g of u)v(g)}},array(a,n){if(n=n===void 0?e.unorderedArrays!==!1:n,t("array:"+a.length+":"),!n||a.length<=1){for(const d of a)this.dispatch(d);return}const l=new Map,s=a.map(d=>{const c=oe(e);c.dispatch(d);for(const[u,v]of c.getContext())l.set(u,v);return c.toString()});return r=l,s.sort(),this.array(s,!1)},date(a){return t("date:"+a.toJSON())},symbol(a){return t("symbol:"+a.toString())},unkown(a,n){if(t(n),!!a&&(t(":"),a&&typeof a.entries=="function"))return this.array(Array.from(a.entries()),!0)},error(a){return t("error:"+a.toString())},boolean(a){return t("bool:"+a)},string(a){t("string:"+a.length+":"),t(a)},function(a){t("fn:"),_(a)?this.dispatch("[native]"):this.dispatch(a.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(a.name)),e.respectFunctionProperties&&this.object(a)},number(a){return t("number:"+a)},xml(a){return t("xml:"+a.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(a){return t("regex:"+a.toString())},uint8array(a){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(a))},uint8clampedarray(a){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(a))},int8array(a){return t("int8array:"),this.dispatch(Array.prototype.slice.call(a))},uint16array(a){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(a))},int16array(a){return t("int16array:"),this.dispatch(Array.prototype.slice.call(a))},uint32array(a){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(a))},int32array(a){return t("int32array:"),this.dispatch(Array.prototype.slice.call(a))},float32array(a){return t("float32array:"),this.dispatch(Array.prototype.slice.call(a))},float64array(a){return t("float64array:"),this.dispatch(Array.prototype.slice.call(a))},arraybuffer(a){return t("arraybuffer:"),this.dispatch(new Uint8Array(a))},url(a){return t("url:"+a.toString())},map(a){t("map:");const n=[...a];return this.array(n,e.unorderedSets!==!1)},set(a){t("set:");const n=[...a];return this.array(n,e.unorderedSets!==!1)},file(a){return t("file:"),this.dispatch([a.name,a.size,a.type,a.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(a){return t("bigint:"+a.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const ue="[native code] }",qe=ue.length;function _(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-qe)===ue}function Fe(e,i,r={}){return e===i||G(e,r)===G(i,r)}function ca(e){return xe()?(Be(e),!0):!1}function P(e){return typeof e=="function"?e():A(e)}const Me=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ue=Object.prototype.toString,ga=e=>Ue.call(e)==="[object Object]",ee=()=>{},fa=Le();function Le(){var e,i;return Me&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((i=window==null?void 0:window.navigator)==null?void 0:i.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Te(e,i){function r(...t){return new Promise((a,n)=>{Promise.resolve(e(()=>i.apply(this,t),{fn:i,thisArg:this,args:t})).then(a).catch(n)})}return r}function Ve(e,i={}){let r,t,a=ee;const n=s=>{clearTimeout(s),a(),a=ee};return s=>{const d=P(e),c=P(i.maxWait);return r&&n(r),d<=0||c!==void 0&&c<=0?(t&&(n(t),t=null),Promise.resolve(s())):new Promise((u,v)=>{a=i.rejectOnCancel?v:u,c&&!t&&(t=setTimeout(()=>{r&&n(r),t=null,u(s())},c)),r=setTimeout(()=>{t&&n(t),t=null,u(s())},d)})}}function De(e,i=200,r={}){return Te(Ve(i,r),e)}const H={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},We=e=>Object.keys(H).reduce((r,t)=>(e[t]!==void 0&&(r[t]=e[t]),r),{}),Ke={key:0,class:"header relative mb-14"},Re={class:"dark:bg-neutral-800 hidden sm:flex sm:absolute sm:-right-10 sm:rounded sm:p-2 sm:flex-col sm:w-fit justify-end shadow w-full flex-row top-0 p-1 flex gap-2 bg-white"},Ee=["src"],He={class:"absolute right-2 bottom-[-40px]"},Je={class:"userinfo flex flex-col"},Qe={class:"flex flex-row items-center gap-4 justify-end"},Xe={class:"username text-lg font-bold text-white"},Ye=["src"],Ze={class:"slogon text-gray truncate w-full text-end text-xs mt-2"},va=W({__name:"Header",props:{user:{}},setup(e){const i=Ie(),r=e,t=Se(),a=()=>{t.value==="dark"?t.value="light":t.value="dark"};return(n,l)=>{const s=U,d=te;return(n._.provides[V]||n.$route).path!=="/new"&&(n._.provides[V]||n.$route).path.indexOf("/edit/")<0?(y(),N("div",Ke,[h("div",Re,[(n._.provides[V]||n.$route).path!=="/"?(y(),p(d,{key:0,to:"/",title:"返回主页"},{default:S(()=>[B(s,{name:"i-carbon-arrow-left",class:"text-[#9fc84a] w-5 h-5 cursor-pointer"})]),_:1})):m("",!0),A(t)==="light"?(y(),N("svg",{key:1,onClick:a,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#FDE047","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-moon-star-icon cursor-pointer"},l[0]||(l[0]=[h("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"},null,-1),h("path",{d:"M20 3v4"},null,-1),h("path",{d:"M22 5h-4"},null,-1)]))):(y(),N("svg",{key:2,onClick:a,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#FDE047","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-sun-icon cursor-pointer"},l[1]||(l[1]=[ze('<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>',9)]))),A(i).userinfo.token?(y(),p(d,{key:3,to:"/new",title:"发表"},{default:S(()=>[B(s,{name:"i-mage-edit",class:"text-[#9fc84a] w-5 h-5 cursor-pointer"})]),_:1})):m("",!0),A(i).userinfo.token?(y(),p(d,{key:4,to:"/user/calendar",title:"日历检索"},{default:S(()=>[B(s,{name:"i-jam-search-folder",class:"text-[#9fc84a] w-5 h-5 cursor-pointer"})]),_:1})):m("",!0),A(i).userinfo.id===1?(y(),p(d,{key:5,to:"/sys/settings",title:"系统设置"},{default:S(()=>[B(s,{name:"i-carbon-settings",class:"text-[#9fc84a] w-5 h-5 cursor-pointer"})]),_:1})):m("",!0),A(i).userinfo.token?(y(),p(d,{key:6,to:"/user/settings",title:"用户中心"},{default:S(()=>[B(s,{name:"i-carbon-user-avatar",class:"text-[#9fc84a] w-5 h-5 cursor-pointer"})]),_:1})):m("",!0),A(i).userinfo.token?m("",!0):(y(),p(d,{key:7,to:"/user/login",title:"登录"},{default:S(()=>[B(s,{name:"i-carbon-login",class:"text-[#9fc84a] w-5 h-5 cursor-pointer"})]),_:1}))]),h("img",{class:"header-img w-full",src:r.user.coverUrl,alt:""},null,8,Ee),h("div",He,[h("div",Je,[h("div",Qe,[h("div",Xe,K(r.user.nickname),1),h("img",{src:r.user.avatarUrl,class:"avatar w-[70px] h-[70px] rounded-xl"},null,8,Ye)]),h("div",Ze,K(r.user.slogan),1)])])])):m("",!0)}}}),Ge=(e,i,r=!0)=>{const t=F("form-events",void 0),a=F("form-group",void 0),n=F("form-inputs",void 0);a&&(!r||e!=null&&e.legend?a.inputId.value=void 0:e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),n&&(n.value[a.name.value]=a.inputId.value));const l=D(!1);function s(v,g){t&&t.emit({type:v,path:g})}function d(){s("blur",a==null?void 0:a.name.value),l.value=!0}function c(){s("change",a==null?void 0:a.name.value)}const u=De(()=>{(l.value||a!=null&&a.eagerValidation.value)&&s("input",a==null?void 0:a.name.value)},300);return{inputId:o(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:o(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:o(()=>{var g;const v=i.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??v??((g=i.default)==null?void 0:g.size)}),color:o(()=>{var v;return(v=a==null?void 0:a.error)!=null&&v.value?"red":e==null?void 0:e.color}),emitFormBlur:d,emitFormInput:u,emitFormChange:c}};function ya(e){const r=`group-${ie().uid}`,t=D({children:[],register(a){this.children.push(a)},unregister(a){const n=this.children.indexOf(a);n>-1&&this.children.splice(n,1)},...e});ne(r,t)}function de({ui:e,props:i}){const r=ie();if(ne("ButtonGroupContextConsumer",!0),F("ButtonGroupContextConsumer",!1))return{size:o(()=>i.size),rounded:o(()=>e.value.rounded)};let a=r.parent,n;for(;a&&!n;){if(a.type.name==="ButtonGroup"){n=F(`group-${a.uid}`);break}a=a.parent}const l=o(()=>n==null?void 0:n.value.children.indexOf(r));return re(()=>{n==null||n.value.register(r)}),$e(()=>{n==null||n.value.unregister(r)}),{size:o(()=>n!=null&&n.value?(n==null?void 0:n.value.size)??e.value.default.size:i.size),rounded:o(()=>!n||l.value===-1?e.value.rounded:n.value.children.length===1?n.value.ui.rounded:l.value===0?n.value.rounded.start:l.value===n.value.children.length-1?n.value.rounded.end:"rounded-none")}}const _e={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},w=le(O.ui.strategy,O.ui.input,Ce),Pe=W({components:{UIcon:U},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>w.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(w.size).includes(e)}},color:{type:String,default:()=>w.default.color,validator(e){return[...O.ui.colors,...Object.keys(w.color)].includes(e)}},variant:{type:String,default:()=>w.default.variant,validator(e){return[...Object.keys(w.variant),...Object.values(w.color).flatMap(i=>Object.keys(i))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:i,slots:r}){const{ui:t,attrs:a}=ae("input",R(e,"ui"),w,R(e,"class")),{size:n,rounded:l}=de({ui:t,props:e}),{emitFormBlur:s,emitFormInput:d,size:c,color:u,inputId:v,name:g}=Ge(e,w),b=o(()=>n.value??c.value),k=D(Oe({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),C=D(null),L=()=>{var f;e.autofocus&&((f=C.value)==null||f.focus())},q=f=>{k.value.trim&&(f=f.trim()),(k.value.number||e.type==="number")&&(f=je(f)),i("update:modelValue",f),d()},ge=f=>{k.value.lazy||q(f.target.value)},fe=f=>{if(e.type==="file"){const x=f.target.files;i("change",x)}else{const x=f.target.value;i("change",x),k.value.lazy&&q(x),k.value.trim&&(f.target.value=x.trim())}},ve=f=>{s(),i("blur",f)};re(()=>{setTimeout(()=>{L()},e.autofocusDelay)});const ye=o(()=>{var x,Q;const f=((Q=(x=t.value.color)==null?void 0:x[u.value])==null?void 0:Q[e.variant])||t.value.variant[e.variant];return se(z(t.value.base,t.value.form,l.value,t.value.placeholder,e.type==="file"&&t.value.file.base,t.value.size[b.value],e.padded?t.value.padding[b.value]:"p-0",f==null?void 0:f.replaceAll("{color}",u.value),(T.value||r.leading)&&t.value.leading.padding[b.value],(J.value||r.trailing)&&t.value.trailing.padding[b.value]),e.inputClass)}),T=o(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),J=o(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),be=o(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),he=o(()=>e.loading&&!T.value?e.loadingIcon:e.trailingIcon||e.icon),me=o(()=>z(t.value.icon.leading.wrapper,t.value.icon.leading.pointer,t.value.icon.leading.padding[b.value])),pe=o(()=>z(t.value.icon.base,u.value&&O.ui.colors.includes(u.value)&&t.value.icon.color.replaceAll("{color}",u.value),t.value.icon.size[b.value],e.loading&&t.value.icon.loading)),ke=o(()=>z(t.value.icon.trailing.wrapper,t.value.icon.trailing.pointer,t.value.icon.trailing.padding[b.value])),we=o(()=>z(t.value.icon.base,u.value&&O.ui.colors.includes(u.value)&&t.value.icon.color.replaceAll("{color}",u.value),t.value.icon.size[b.value],e.loading&&!T.value&&t.value.icon.loading));return{ui:t,attrs:a,name:g,inputId:v,input:C,isLeading:T,isTrailing:J,inputClass:ye,leadingIconName:be,leadingIconClass:pe,leadingWrapperIconClass:me,trailingIconName:he,trailingIconClass:we,trailingWrapperIconClass:ke,onInput:ge,onChange:fe,onBlur:ve}}}),ea=["id","name","type","required","placeholder","disabled"];function aa(e,i,r,t,a,n){const l=U;return y(),N("div",{class:$(e.type==="hidden"?"hidden":e.ui.wrapper)},[h("input",M({id:e.inputId,ref:"input",name:e.name,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.type==="file"?e.attrs:{...e.attrs,value:e.modelValue},{onInput:i[0]||(i[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:i[1]||(i[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:i[2]||(i[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,ea),j(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(y(),N("span",{key:0,class:$(e.leadingWrapperIconClass)},[j(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[B(l,{name:e.leadingIconName,class:$(e.leadingIconClass)},null,8,["name","class"])])],2)):m("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(y(),N("span",{key:1,class:$(e.trailingWrapperIconClass)},[j(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[B(l,{name:e.trailingIconName,class:$(e.trailingIconClass)},null,8,["name","class"])])],2)):m("",!0)],2)}const ba=E(Pe,[["render",aa]]),ta=W({inheritAttrs:!1,props:{...H,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function i(r,t,{isActive:a,isExactActive:n}){return e.exactQuery&&!Fe(r.query,t.query)||e.exactHash&&r.hash!==t.hash?e.inactiveClass:e.exact&&n||!e.exact&&a?e.activeClass:e.inactiveClass}return{resolveLinkClass:i}}}),na=["href","aria-disabled","role","rel","target","tabindex","onClick"];function ra(e,i,r,t,a,n){const l=te;return e.to?(y(),p(l,M({key:1},e.$props,{custom:""}),{default:S(({route:s,href:d,target:c,rel:u,navigate:v,isActive:g,isExactActive:b,isExternal:k})=>[h("a",M(e.$attrs,{href:e.disabled?void 0:d,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:u,target:c,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(s,e._.provides[V]||e.$route,{isActive:g,isExactActive:b}),tabindex:e.disabled?-1:void 0,onClick:C=>!k&&!e.disabled&&v(C)}),[j(e.$slots,"default",X(Y({isActive:e.active!==void 0?e.active:e.exact?b:g})))],16,na)]),_:3},16)):(y(),p(Ae(e.as),M({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:S(()=>[j(e.$slots,"default",X(Y({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const ce=E(ta,[["render",ra]]),I=le(O.ui.strategy,O.ui.button,_e),ia=W({components:{UIcon:U,ULink:ce},inheritAttrs:!1,props:{...H,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>I.default.size,validator(e){return Object.keys(I.size).includes(e)}},color:{type:String,default:()=>I.default.color,validator(e){return[...O.ui.colors,...Object.keys(I.color)].includes(e)}},variant:{type:String,default:()=>I.default.variant,validator(e){return[...Object.keys(I.variant),...Object.values(I.color).flatMap(i=>Object.keys(i))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>I.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:i}){const{ui:r,attrs:t}=ae("button",R(e,"ui"),I),{size:a,rounded:n}=de({ui:r,props:e}),l=o(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),s=o(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),d=o(()=>e.square||!i.default&&!e.label),c=o(()=>{var L,q;const C=((q=(L=r.value.color)==null?void 0:L[e.color])==null?void 0:q[e.variant])||r.value.variant[e.variant];return se(z(r.value.base,r.value.font,n.value,r.value.size[a.value],r.value.gap[a.value],e.padded&&r.value[d.value?"square":"padding"][a.value],C==null?void 0:C.replaceAll("{color}",e.color),e.block?r.value.block:r.value.inline),e.class)}),u=o(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),v=o(()=>e.loading&&!l.value?e.loadingIcon:e.trailingIcon||e.icon),g=o(()=>z(r.value.icon.base,r.value.icon.size[a.value],e.loading&&r.value.icon.loading)),b=o(()=>z(r.value.icon.base,r.value.icon.size[a.value],e.loading&&!l.value&&r.value.icon.loading)),k=o(()=>We(e));return{ui:r,attrs:t,isLeading:l,isTrailing:s,isSquare:d,buttonClass:c,leadingIconName:u,trailingIconName:v,leadingIconClass:g,trailingIconClass:b,linkProps:k}}});function la(e,i,r,t,a,n){const l=U,s=ce;return y(),p(s,M({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:S(()=>[j(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(y(),p(l,{key:0,name:e.leadingIconName,class:$(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):m("",!0)]),j(e.$slots,"default",{},()=>[e.label?(y(),N("span",{key:0,class:$([e.truncate?e.ui.truncate:""])},K(e.label),3)):m("",!0)]),j(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(y(),p(l,{key:0,name:e.trailingIconName,class:$(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):m("",!0)])]),_:3},16,["type","disabled","class"])}const ha=E(ia,[["render",la]]);export{va as _,ha as a,ba as b,ce as c,de as d,De as e,_e as f,ya as g,ga as h,fa as i,ca as j,Me as k,ee as n,P as t,Ge as u};