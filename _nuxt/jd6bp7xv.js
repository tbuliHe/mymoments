import{_ as b,b as y,a as v}from"./cdhi6rl9.js";import{_ as B}from"./g5p2226n.js";import{_ as k}from"./m7278axk.js";import{_ as C,a as F}from"./ndlieawj.js";import{e as N,l as P,r as z,f as G,c as T,h as t,i as $,j,a as _,b as o,w as s,F as E,o as i,d as c,V as f,p as H}from"./gkw12r6h.js";import{a as I}from"./ga5t764d.js";import"./hbj4jthp.js";import"./ou69qqfo.js";import"./bb05g4e2.js";import"./c79akiu6.js";const M={class:"pb-20"},X=N({__name:"reg",setup(R){const a=P({username:"",password:"",repeatPassword:""}),r=z(!1),p=G("userinfo"),w=async()=>{if(a.username.length<3){f.warning("用户名最少3个字符");return}let l=!1;r.value=!0;try{await I("/user/reg",a),f.success("注册成功,快去登录吧!"),l=!0}finally{r.value=!1}l&&await H("/user/login")};return(l,e)=>{const V=b,u=y,m=B,d=v,x=k,g=F,U=C;return i(),T(E,null,[t(p)?(i(),$(V,{key:0,user:t(p)},null,8,["user"])):j("",!0),_("div",M,[o(U,{ui:{base:"w-4/5 mx-auto mt-20"}},{default:s(()=>[e[5]||(e[5]=_("p",{class:"text-center text-2xl font-sans"},"注册用户",-1)),o(g,{class:"space-y-4",size:"sm",state:t(a)},{default:s(()=>[o(m,{label:"用户名",name:"email"},{default:s(()=>[o(u,{modelValue:t(a).username,"onUpdate:modelValue":e[0]||(e[0]=n=>t(a).username=n)},null,8,["modelValue"])]),_:1}),o(m,{label:"密码",name:"password"},{default:s(()=>[o(u,{type:"password",modelValue:t(a).password,"onUpdate:modelValue":e[1]||(e[1]=n=>t(a).password=n)},null,8,["modelValue"])]),_:1}),o(m,{label:"重复密码",name:"repeatPassword"},{default:s(()=>[o(u,{type:"password",modelValue:t(a).repeatPassword,"onUpdate:modelValue":e[2]||(e[2]=n=>t(a).repeatPassword=n)},null,8,["modelValue"])]),_:1}),o(x,{size:"sm"},{default:s(()=>[o(d,{onClick:w,disabled:t(r),loading:t(r)},{default:s(()=>e[3]||(e[3]=[c("注册")])),_:1},8,["disabled","loading"]),o(d,{color:"gray",variant:"solid",to:"/user/login"},{default:s(()=>e[4]||(e[4]=[c("去登录")])),_:1})]),_:1})]),_:1},8,["state"])]),_:1})])],64)}}});export{X as default};
