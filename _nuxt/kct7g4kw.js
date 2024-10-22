import{_ as we}from"./l029o908.js";import{_ as Ce}from"./hbj4jthp.js";import{h as Z,i as F,j as he,a as R,_ as W,o as $e,k as Me,m as Se}from"./ga5t764d.js";import{_ as Ie,b as q,c as Ue,d as Be,a as Te,e as Ve,f as je,g as Ne,h as Ee,i as Re}from"./o72f34uc.js";import{a as Q,b as He}from"./cdhi6rl9.js";import{e as O,r as M,o as s,i as y,w as b,a as o,b as m,d as U,B as Oe,h as e,s as X,c as u,a6 as Ae,z as T,f as H,l as Le,j as d,F as E,V,t as w,g as ze,m as Pe,a7 as De,D as Fe,n as Y,E as Je,G as Ge,C as P,p as D}from"./gkw12r6h.js";import{_ as Ye}from"./n74k3onm.js";import{_ as Ke}from"./haj14tm7.js";const Ze={class:"px-4 py-2"},We={class:"flex gap-2 items-center"},ee=O({__name:"Confirm",emits:["ok","cancel"],setup(B,{emit:_}){const p=M(!1),x=_,r=()=>{p.value=!1,x("ok")},v=()=>{x("cancel"),p.value=!1};return(C,l)=>{const c=Q,S=Ie;return s(),y(S,{open:e(p),"onUpdate:open":l[3]||(l[3]=i=>X(p)?p.value=i:null)},{panel:b(()=>[o("div",Ze,[l[6]||(l[6]=o("p",{class:"text-gray-600 my-2"},"你确定要删除吗?",-1)),o("div",We,[m(c,{onClick:l[1]||(l[1]=i=>r())},{default:b(()=>l[4]||(l[4]=[U("确定")])),_:1}),m(c,{color:"white",onClick:l[2]||(l[2]=i=>v())},{default:b(()=>l[5]||(l[5]=[U("取消")])),_:1})])])]),default:b(()=>[Oe(C.$slots,"default",{onClick:l[0]||(l[0]=i=>p.value=!0)})]),_:3},8,["open"])}}}),K=Z("memo-list-reload"),J=Z("memo-changed"),qe=O({__name:"Emoji",emits:["selected"],setup(B,{emit:_}){const p=_,x=r=>{const v=r.target.innerHTML;p("selected",v)};return(r,v)=>(s(),u("div",{onClick:x,class:"flex flex-wrap gap-0.5 text-lg rounded border p-2 shadow-lg select-none mt-2 *:cursor-pointer"},v[0]||(v[0]=[Ae("<div>🤔</div><div>😐</div><div>😑</div><div>😶</div><div>🙄</div><div>😣</div><div>😏</div><div>😥</div><div>😮</div><div>🤐</div><div>😪</div><div>😯</div><div>😫</div><div>😴</div><div>😌</div><div>🤓</div><div>😛</div><div>😜</div><div>😝</div><div>🤤</div><div>😒</div><div>😓</div><div>😔</div><div>😕</div><div>🙃</div><div>🤑</div><div>😲</div><div>🤗</div><div>🙂</div><div>😚</div><div>😙</div><div>😗</div><div>😘</div><div>😍</div><div>😎</div><div>😋</div><div>😊</div><div>😉</div><div>😆</div><div>😅</div><div>😄</div><div>😃</div><div>🤣</div><div>😂</div><div>😁</div><div>😀</div><div>😷</div><div>🤒</div><div>🤕</div><div>🤢</div><div>🤧</div><div>😇</div><div>🤠</div><div>🤡</div><div>🤥</div><div>😈</div><div>👿</div><div>👹</div><div>👺</div><div>💀</div><div>☠️</div><div>👻</div><div>👽</div><div>💩</div>",64)])))}}),Qe={key:0,class:"px-4 py-2 flex flex-col gap-2 mt-2"},Xe={class:"relative"},et={class:"flex gap-1"},te=O({__name:"CommentBox",props:{commentId:{},memoId:{},replyTo:{}},setup(B){const _=B,p=T(()=>`${_.memoId}#${_.commentId}`),x=F(),r=he("localCommentUserinfo",{username:"",website:""}),v=M(!1),C=H("currentCommentBox"),l=H("sysConfig"),c=Le({content:"",memoId:_.memoId,replyTo:_.replyTo,username:r.value.username,website:r.value.website}),S=async()=>{l.value.enableGoogleRecaptcha?grecaptcha.ready(()=>{grecaptcha.execute(l.value.googleSiteKey,{action:"newComment"}).then(async f=>{await i(f)})}):await i()},i=async f=>{if(x.value.userinfo.token||(r.value={username:c.username,website:c.website}),c.content.length>l.value.maxCommentLength){V.error("评论字数超过限制长度:"+l.value.maxCommentLength);return}await R("/comment/add",{...c,token:f}),V.success("评论成功!"),C.value="",c.username="",c.content="",c.website="",J.emit(_.memoId)},t=()=>{v.value=!v.value},$=f=>{c.content=c.content+f};return(f,g)=>{const A=Ke,j=He,L=Q;return e(C)===e(p)?(s(),u("div",Qe,[o("div",Xe,[m(A,{rows:3,autofocus:"",placeholder:f.replyTo?`回复给${f.replyTo}`:"",modelValue:e(c).content,"onUpdate:modelValue":g[0]||(g[0]=I=>e(c).content=I)},null,8,["placeholder","modelValue"]),o("div",{class:"animate-bounce absolute right-2 bottom-1 cursor-pointer text-xl select-none",onClick:t},"😊 ")]),e(v)?(s(),y(qe,{key:0,onSelected:$})):d("",!0),o("div",et,[e(x).userinfo.token?d("",!0):(s(),u(E,{key:0},[m(j,{placeholder:"姓名",modelValue:e(c).username,"onUpdate:modelValue":g[1]||(g[1]=I=>e(c).username=I)},null,8,["modelValue"]),m(j,{placeholder:"网站",modelValue:e(c).website,"onUpdate:modelValue":g[2]||(g[2]=I=>e(c).website=I)},null,8,["modelValue"])],64)),m(L,{color:"white",onClick:S},{default:b(()=>g[3]||(g[3]=[U("发布评论")])),_:1})])])):d("",!0)}}}),tt={key:0,class:"text-[#576b95] text-nowrap"},ot={key:1,class:"text-[#576b95] text-nowrap"},nt={class:"text-[#576b95] text-nowrap"},st={class:"text-xs text-gray-400 ml-2 hidden sm:inline-block"},it={key:3,class:"text-xs text-gray-400 ml-2 inline-flex"},at=O({__name:"Comment",props:{comment:{},memoId:{},memoUserId:{}},setup(B){const _=F(),p=H("currentCommentBox"),x=()=>{const C=r.memoId+"#"+r.comment.id;if(p.value===C){p.value="";return}p.value=C},r=B,v=async()=>{await R("/comment/remove?id="+r.comment.id),V.success("删除成功!"),J.emit(r.memoId)};return(C,l)=>{const c=q,S=W,i=ee;return s(),u(E,null,[o("div",null,[r.comment.author==r.memoUserId?(s(),u("span",tt,[U(w(r.comment.username)+" ",1),m(c,{color:"gray",variant:"solid",size:"xs"},{default:b(()=>l[0]||(l[0]=[U("作者")])),_:1})])):(s(),u("span",ot,w(r.comment.username),1)),r.comment.replyTo?(s(),u(E,{key:2},[l[1]||(l[1]=o("span",{class:"mx-1"},"回复",-1)),o("span",nt,w(r.comment.replyTo),1)],64)):d("",!0),l[2]||(l[2]=o("span",{class:"mx-0.5"},":",-1)),o("span",{class:"inline break-all cursor-pointer",onClick:x},w(r.comment.content),1),o("span",st,w(C.$dayjs(r.comment.createdAt).fromNow()),1),e(_).userinfo.id===r.memoUserId||e(_).userinfo.id===1?(s(),u("span",it,[m(i,{onOk:v},{default:b(()=>[m(S,{name:"i-carbon-trash-can",class:"cursor-pointer text-red-400"})]),_:1})])):d("",!0)]),m(te,{"memo-id":r.memoId,"reply-to":r.comment.username,"comment-id":r.comment.id},null,8,["memo-id","reply-to","comment-id"])],64)}}}),lt={class:"avatar"},rt={class:"flex flex-col gap-1 flex-1"},dt={class:"username text-[#576b95] mb-1 dark:text-white flex justify-between"},mt={class:"mb-2"},ct=["innerHTML"],ut={key:1,class:"flex gap-2 mt-2"},vt={class:"flex flex-col gap-2"},pt={key:0,class:"text-[#576b95] font-medium dark:text-white text-xs mt-2 mb-1 select-none flex items-center gap-0.5"},ft={class:"flex justify-between items-center relative"},_t={class:"flex text-xs text-[#9DA4B0]"},xt={class:"flex flex-row gap-2"},gt={class:"flex items-center justify-center gap-8 p-4 text-gray-500 dark:text-white"},kt={class:"flex flex-col gap-1 cursor-pointer items-center"},yt={class:"rounded bottom-shadow bg-[#f7f7f7] dark:bg-[#202020] flex flex-col gap-1"},bt={key:0,class:"flex flex-row py-2 px-4 gap-2 items-center text-sm"},wt={class:"text-[#576b95]"},Ct={class:"mx-1"},ht={key:1,class:"flex flex-col gap-1"},jt=O({__name:"Memo",props:{memo:{}},setup(B){const _=M(!1),p=M(!1),x=T(()=>C.path.startsWith("/memo/")),r=M(null),v=H("sysConfig"),C=ze(),l=()=>x.value||p.value?"":v.value.memoMaxHeight?`max-height:${v.value.memoMaxHeight}px`:"",c=H("currentCommentBox"),S=B,i=T(()=>JSON.parse(S.memo.ext||"{}")),t=T(()=>S.memo),$=F(),f=M(!1),g=M(!1),A=M(null),j=M(!1);$e(A,()=>g.value=!1);const L=T(()=>(t.value.location||"").replaceAll(" "," · ")),I=T(()=>{const a=t.value.tags;if(!a)return[];const n=a.length;return a[n-1]===","?a.substring(0,n-1).split(","):a.split(",")}),oe=()=>{const a=t.value.id+"#0";c.value===a?c.value="":c.value=a,g.value=!1},ne=()=>{p.value=!p.value},se=async a=>{await D("/edit/"+a)},ie=async a=>{await R("/memo/remove?id="+a),V.success("删除成功!"),x.value?await D("/"):K.emit(),f.value=!1},ae=async a=>{await R("/memo/setPinned?id="+a),V.success("操作成功!"),x.value?await D("/"):K.emit(),f.value=!1},G=async(a,n="")=>{const N=JSON.parse(localStorage.getItem("likeMemos")||"[]");await R(`/memo/like?id=${a}&token=${n}`),V.success("点赞成功!"),N.push(a),localStorage.setItem("likeMemos",JSON.stringify(N)),J.emit(a),j.value=!0},le=async a=>{if(g.value=!1,JSON.parse(localStorage.getItem("likeMemos")||"[]").includes(a)){V.warning("您已经点赞过了!");return}v.value.enableGoogleRecaptcha?grecaptcha.ready(()=>{grecaptcha.execute(v.value.googleSiteKey,{action:"newComment"}).then(async N=>{await G(a,N)})}):await G(a)};Pe(()=>{const a=JSON.parse(localStorage.getItem("likeMemos")||"[]");j.value=a.findIndex(n=>n===t.value.id)>=0,x.value||setTimeout(()=>{const{height:n}=Me(r.value);n.value>v.value.memoMaxHeight&&(_.value=!0)},20)});const re=T(()=>{if(t.value.content&&t.value.content.length>0)try{return Se.render(t.value.content)}catch(a){return console.log("内容渲染错误,请重新编辑",a),"内容渲染错误,请重新编辑"}return""});return(a,n)=>{const N=we,z=Ce,h=W,de=q,me=Ue,ce=Be,ue=Te,ve=Ve,pe=je,fe=Ne,_e=Ee,xe=Re,ge=ee,ke=Ye,ye=te;return s(),u("div",null,[o("div",{class:P(["relative flex gap-4 text-sm dark:bg-neutral-800 p-4",[e(t).pinned?"bg-slate-100 dark:bg-neutral-700":""]])},[o("div",lt,[m(z,{to:`/memo/${e(t).id}`},{default:b(()=>[m(N,{src:e(t).user.avatarUrl,alt:"Avatar"},null,8,["src"])]),_:1},8,["to"])]),o("div",rt,[o("div",dt,[m(z,{class:"cursor-pointer",to:`/user/${e(t).user.id}`},{default:b(()=>[U(w(e(t).user.nickname),1)]),_:1},8,["to"]),o("div",null,[e(t).pinned?(s(),y(h,{key:0,name:"i-carbon-pin"})):d("",!0),e(t).showType===0?(s(),y(h,{key:1,name:"i-carbon-locked",class:"text-red-500 ml-2 dark:text-white"})):d("",!0),(a._.provides[De]||a.$route).path===`/memo/${e(t).id}`&&(e($).userinfo.id===1||e($).userinfo.id===e(t).userId)?(s(),y(h,{key:2,name:"i-iconamoon-menu-kebab-vertical-bold",class:"text-red-500 ml-2 dark:text-white cursor-pointer",onClick:n[0]||(n[0]=k=>f.value=!0)})):d("",!0)])]),o("div",mt,[o("div",{style:Fe(l()),class:"overflow-hidden"},[o("div",{class:"markdown-content",ref_key:"contentRef",ref:r,innerHTML:e(re)},null,8,ct)],4),e(_)?(s(),u("div",{key:0,class:"text-[#576b95] text-sm my-1 cursor-pointer",onClick:ne},w(l()===""?"收起":"全文"),1)):d("",!0),e(I).length>0?(s(),u("div",ut,[(s(!0),u(E,null,Y(e(I),(k,be)=>(s(),u("span",{key:`tag-${be}`},[m(z,{to:`/tags/${e(t).user.username}/${k}`},{default:b(()=>[m(de,{size:"xs",color:"gray",variant:"solid"},{default:b(()=>[U(w(k),1)]),_:2},1024)]),_:2},1032,["to"])]))),128))])):d("",!0)]),o("div",vt,[e(t).externalFavicon&&e(t).externalTitle&&e(t).externalUrl?(s(),y(me,{key:0,favicon:e(t).externalFavicon,title:e(t).externalTitle,url:e(t).externalUrl},null,8,["favicon","title","url"])):d("",!0),m(ce,{imgs:e(t).imgs||"","memo-id":e(t).id},null,8,["imgs","memo-id"]),e(i).music&&e(i).music.id?(s(),y(ue,Je(Ge({key:1},e(i).music)),null,16)):d("",!0),e(i).doubanBook&&e(i).doubanBook.title?(s(),y(ve,{key:2,book:e(i).doubanBook},null,8,["book"])):d("",!0),e(i).doubanMovie&&e(i).doubanMovie.title?(s(),y(pe,{key:3,movie:e(i).doubanMovie},null,8,["movie"])):d("",!0),e(i).video&&e(i).video.type==="youtube"&&e(i).video.value?(s(),y(fe,{key:4,url:e(i).video.value},null,8,["url"])):d("",!0),e(i).video&&e(i).video.type==="bilibili"&&e(i).video.value?(s(),y(_e,{key:5,url:e(i).video.value},null,8,["url"])):d("",!0),e(i).video&&e(i).video.type==="online"&&e(i).video.value?(s(),y(xe,{key:6,url:e(i).video.value},null,8,["url"])):d("",!0)]),e(L)?(s(),u("div",pt,[m(h,{name:"i-carbon-location"}),o("span",null,w(e(L)),1)])):d("",!0),o("div",ft,[o("div",_t,w(e(v).timeFormat==="timeAgo"?a.$dayjs(e(t).createdAt).fromNow():a.$dayjs(e(t).createdAt).format("YYYY-MM-DD HH:mm:ss")),1),o("div",{onClick:n[1]||(n[1]=k=>g.value=!0),class:"toolbar-icon px-2 py-1 bg-[#f7f7f7] dark:bg-slate-700 hover:bg-[#dedede] cursor-pointer rounded flex items-center justify-center"},n[8]||(n[8]=[o("img",{src:"data:image/svg+xml,%3csvg%20t='1709204592505'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='16237'%20width='16'%20height='16'%3e%3cpath%20d='M229.2%20512m-140%200a140%20140%200%201%200%20280%200%20140%20140%200%201%200-280%200Z'%20p-id='16238'%20fill='%238a8a8a'%3e%3c/path%3e%3cpath%20d='M794.8%20512m-140%200a140%20140%200%201%200%20280%200%20140%20140%200%201%200-280%200Z'%20p-id='16239'%20fill='%238a8a8a'%3e%3c/path%3e%3c/svg%3e",class:"w-3 h-3"},null,-1)])),e(g)?(s(),u("div",{key:0,ref_key:"toolbarRef",ref:A,class:"absolute top-[-8px] right-[32px] bg-[#4c4c4c] rounded text-white p-2"},[o("div",xt,[o("div",{class:"flex flex-row gap-1 cursor-pointer items-center px-4",onClick:n[2]||(n[2]=k=>le(e(t).id))},[m(h,{name:"i-carbon-favorite",class:P([e(j)?"text-red-400":""])},null,8,["class"]),n[9]||(n[9]=o("div",null,"赞",-1))]),e(v).enableComment?(s(),u(E,{key:0},[n[11]||(n[11]=o("span",{class:"bg-[#6b7280] h-[20px] w-[1px]"},null,-1)),o("div",{class:"flex flex-row gap-1 cursor-pointer items-center px-4",onClick:oe},[m(h,{name:"i-octicon-comment"}),n[10]||(n[10]=o("div",null,"评论",-1))])],64)):d("",!0)])],512)):d("",!0),o("template",null,[m(ke,{modelValue:e(f),"onUpdate:modelValue":n[7]||(n[7]=k=>X(f)?f.value=k:null),ui:{container:"sm:items-end"}},{default:b(()=>[o("div",gt,[e($).userinfo.id===1?(s(),u("div",{key:0,class:"flex flex-col gap-1 cursor-pointer items-center",onClick:n[3]||(n[3]=k=>ae(e(t).id))},[m(h,{class:"text-[#9fc84a] w-5 h-5",name:"i-carbon-pin"}),o("div",null,w(e(t).pinned?"取消":"")+"置顶",1)])):d("",!0),e($)&&e($).userinfo.id===e(t).userId?(s(),u("div",{key:1,class:"flex flex-col gap-1 cursor-pointer items-center",onClick:n[4]||(n[4]=k=>se(e(t).id))},[m(h,{class:"text-[#9fc84a] w-5 h-5",name:"i-carbon-edit"}),n[12]||(n[12]=o("div",null,"编辑",-1))])):d("",!0),e($).userinfo.id===1||e($).userinfo.id===e(t).userId?(s(),y(ge,{key:2,onOk:n[5]||(n[5]=k=>ie(e(t).id)),onCancel:n[6]||(n[6]=k=>f.value=!1)},{default:b(()=>[o("div",kt,[m(h,{class:"text-[#9fc84a] w-5 h-5",name:"i-carbon-trash-can"}),n[13]||(n[13]=o("div",null,"删除",-1))])]),_:1})):d("",!0)])]),_:1},8,["modelValue"])])]),o("div",yt,[e(t).favCount>0?(s(),u("div",bt,[m(h,{name:"i-carbon-favorite",class:"text-red-500"}),o("div",wt,[o("span",Ct,w(e(t).favCount),1),n[14]||(n[14]=U("位访客"))])])):d("",!0),e(v).enableComment?(s(),u("div",ht,[m(ye,{"comment-id":0,"memo-id":e(t).id},null,8,["memo-id"]),o("div",{class:P(["space-y-1",[e(t).comments&&e(t).comments.length>0?"py-2":""]])},[e(t).comments&&e(t).comments.length>0?(s(!0),u(E,{key:0},Y(e(t).comments,k=>(s(),u("div",{class:"px-4 relative flex-col text-sm",key:k.id},[m(at,{comment:k,"memo-id":e(t).id,"memo-user-id":e(t).user.id},null,8,["comment","memo-id","memo-user-id"])]))),128)):d("",!0)],2)])):d("",!0)])])],2)])}}});export{jt as _,J as a,K as m};