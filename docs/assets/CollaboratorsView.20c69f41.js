import{c as f}from"./collaborators.94738893.js";import{_ as d}from"./index.11f17877.js";import{r as m,o as s,c as t,a,m as r,t as n,F as _,k as h,b as w,w as v,p as b,d as y,f as g,l as x}from"./vendor.894c581b.js";const o=e=>(b("data-v-a1cdf3ec"),e=e(),y(),e),C={class:"user"},$={class:"user--header"},I={key:0,class:"user--header-photo"},V=["src"],B={class:"user--header-info"},S={key:0,class:"user--header-info name"},N={key:1,class:"user--header-info email"},p={key:2,class:"user--header-description"},F={key:0,class:"user--skills"},U={key:1,class:"user--network"},j=["href"],q=o(()=>a("i",{class:"fad fa-browser"},null,-1)),D=[q],E=["href"],L=o(()=>a("i",{class:"fab fa-facebook-f"},null,-1)),O=[L],z=["href"],A=o(()=>a("i",{class:"fab fa-instagram"},null,-1)),G=[A],H=["href"],J=o(()=>a("i",{class:"fab fa-linkedin-in"},null,-1)),K=[J],M=o(()=>a("i",{class:"fad fa-address-card"},null,-1)),P={props:{user:{type:Object,required:!0}},setup(e){return(i,k)=>{const u=m("router-link");return s(),t("div",C,[a("div",$,[e.user.photo!=null?(s(),t("div",I,[a("img",{src:e.user.photo,alt:""},null,8,V)])):r("",!0),a("div",B,[e.user.name!=null?(s(),t("h2",S,n(e.user.name),1)):r("",!0),e.user.email!=null?(s(),t("p",N,n(e.user.email),1)):r("",!0),e.user.description!=null?(s(),t("div",p,n(e.user.description),1)):r("",!0)])]),e.user.skills?(s(),t("div",F,[(s(!0),t(_,null,h(e.user.skills,(l,c)=>(s(),t("div",{key:c,class:"user--skills-item"},[a("span",null,n(l),1)]))),128))])):r("",!0),e.user.network!=null?(s(),t("div",U,[e.user.network.site!=null?(s(),t("a",{key:0,href:e.user.network.site,target:"_blank"},D,8,j)):r("",!0),e.user.network.facebook!=null?(s(),t("a",{key:1,href:`https://www.facebook.com/${e.user.network.facebook}`,target:"_blank"},O,8,E)):r("",!0),e.user.network.instagram!=null?(s(),t("a",{key:2,href:`https://www.instagram.com/${e.user.network.instagram}`,target:"_blank"},G,8,z)):r("",!0),e.user.network.linkedin!=null?(s(),t("a",{key:3,href:`https://www.linkedin.com/in/${e.user.network.linkedin}`,target:"_blank"},K,8,H)):r("",!0),w(u,{style:{color:"#ffff3e"},to:`/#/collaborator/${e.user.id}`},{default:v(()=>[M]),_:1},8,["to"])])):r("",!0)])}}};var Q=d(P,[["__scopeId","data-v-a1cdf3ec"]]);const R={class:"about"},T={setup(e){const i=g(f);return(k,u)=>(s(),t("div",R,[(s(!0),t(_,null,h(i.value,(l,c)=>(s(),x(Q,{key:c,user:l},null,8,["user"]))),128))]))}};var Z=d(T,[["__scopeId","data-v-75cf01dc"]]);export{Z as default};
