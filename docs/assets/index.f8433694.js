import{o as l,c as d,a as i,b as k,d as _,r as h,e as c,w as p,p as v,f as m,g as E,h as P,t as S,F as A,i as x,j as C,k as I,l as L,m as N}from"./vendor.76dbdf51.js";const O=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};O();var u=(e,o)=>{const r=e.__vccOpts||e;for(const[s,t]of o)r[s]=t;return r};const D={data:()=>({shown:!1}),beforeMount(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.installEvent=e,this.shown=!0})},methods:{dismissPrompt(){this.shown=!1},installPWA(){this.installEvent.prompt(),this.installEvent.userChoice.then(e=>{this.dismissPrompt(),e.outcome})}}},R={key:0},V=_(" Add app to home screen? ");function z(e,o,r,s,t,n){return e.shown?(l(),d("div",R,[V,i("button",{onClick:o[0]||(o[0]=(...a)=>n.installPWA&&n.installPWA(...a))}," Install! "),i("button",{onClick:o[1]||(o[1]=(...a)=>n.dismissPrompt&&n.dismissPrompt(...a))}," No, thanks ")])):k("",!0)}var B=u(D,[["render",z]]);const F={},g=e=>(v("data-v-201e93ba"),e=e(),m(),e),T={class:"navigate"},W=g(()=>i("i",{class:"fad fa-home"},null,-1)),q=_("INICIO "),j=g(()=>i("i",{class:"fad fa-user-group"},null,-1)),H=_("COLABORADORES "),M=g(()=>i("i",{class:"fad fa-circle-info"},null,-1)),U=_("ACERCA DE ");function K(e,o){const r=h("router-link");return l(),d("nav",T,[i("ul",null,[i("li",null,[c(r,{to:"/"},{default:p(()=>[W,q]),_:1})]),i("li",null,[c(r,{to:"/collaborators"},{default:p(()=>[j,H]),_:1})]),i("li",null,[c(r,{to:"/about"},{default:p(()=>[M,U]),_:1})])])])}var Y=u(F,[["render",K],["__scopeId","data-v-201e93ba"]]);const G={width:"611.94",height:"320",version:"1.1",viewBox:"0 0 161.91 84.667",xmlns:"http://www.w3.org/2000/svg"},J=E('<g id="inteud"><rect id="bg" x="2.1362e-6" y="-1.2207e-6" width="161.91" height="84.667" fill="#2d2d2d"></rect><g id="inte" transform="translate(-108.51,-186.28)" fill="#fff"><path id="i" d="m142.65 233.54v26.824h16.878v-5.2917h-11.586v-5.271h11.586v-5.2917h-11.586v-5.6782h11.586v-5.2917z"></path><path id="n" d="m119.09 233.54v5.2917h6.4864v21.533h5.2916v-21.533h6.4864v-5.2917z"></path><path id="t" d="m119.09 196.86v5.2916h6.7634v15.832h-6.7634v5.2917h18.265v-5.2917h-6.2094v-15.832h6.7634v-5.2916z"></path><path id="e" d="m142.65 196.86v26.415h5.2917v-14.569c1.533 4.9493 7.6812 9.2616 7.6812 14.569h5.2916v-26.415h-5.2916v14.567c-1.5306-4.9483-7.6812-9.2616-7.6812-14.567z"></path></g><g id="ud" transform="matrix(4,0,0,4,-441.67,-356.9)"><path id="u" d="m125.56 91.872v10.583c3e-3 0.94614 0.2589 1.8554 0.7192 2.6458 0.45648 0.78381 1.114 1.4506 1.9266 1.9197 0.80278 0.47042 1.7154 0.72087 2.6458 0.72608h5.2916v-15.875h-2.6458v13.229h-2.6458c-1.4613 0-2.6458-1.1846-2.6458-2.6458v-10.583z" fill="#ffff3e"></path><path id="d" transform="scale(.26458)" d="m522.42 347.23v60h10v-0.084c15.705-1.1101 27.88-14.172 27.885-29.916v-30zm10 10h17.885v20c-4e-3 10.224-7.7179 18.8-17.885 19.881v-39.762z" fill="#dc0000"></path></g></g>',1),Q=[J],X={props:{bg:{type:String,default:"#2d2d2d"},inteud:{type:String},inte:{type:String,default:"#fff"},i:{type:String,default:"#fff"},n:{type:String,default:"#fff"},t:{type:String,default:"#fff"},e:{type:String,default:"#fff"},ud:{type:String},u:{type:String,default:"#fff"},d:{type:String,default:"#dc0000"}},setup(e){return(o,r)=>(l(),d("svg",G,Q))}};const Z=e=>(v("data-v-626da573"),e=e(),m(),e),ee={class:"header"},te={href:"/"},oe=Z(()=>i("h1",null,"Area de investigaci\xF3n Tecnol\xF3gica de la Universidad Distrital",-1)),re={setup(e){return(o,r)=>(l(),d("div",ee,[i("a",te,[c(X,{class:"logo"})]),oe]))}};var ne=u(re,[["__scopeId","data-v-626da573"]]);const se=e=>(v("data-v-62fa199e"),e=e(),m(),e),ae={class:"footer"},ie={style:{color:"#ffff3e"}},ce=_(" Creado y manenido por "),le=se(()=>i("br",null,null,-1)),de={setup(e){const o=P(new Date().getFullYear());return(r,s)=>{const t=h("router-link");return l(),d("footer",ae,[i("p",ie,[ce,le,c(t,{to:"/me"},{default:p(()=>[_("Edwin Marroquin ( 2021 -"+S(o.value)+" )",1)]),_:1})])])}}};var _e=u(de,[["__scopeId","data-v-62fa199e"]]);const ue={},fe={class:"main"};function pe(e,o){const r=h("router-view");return l(),d("main",fe,[c(r)])}var he=u(ue,[["render",pe],["__scopeId","data-v-1fc2e693"]]);const ve=i("link",{rel:"manifest",href:"/manifest.json"},null,-1),me={class:"main--wrapper"},ge={setup(e){return(o,r)=>(l(),d(A,null,[ve,c(B),c(ne),i("div",me,[c(Y),c(he)]),c(_e)],64))}},ye="modulepreload",w={},we="/",f=function(o,r){return!r||r.length===0?o():Promise.all(r.map(s=>{if(s=`${we}${s}`,s in w)return;w[s]=!0;const t=s.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":ye,t||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),t)return new Promise(($,b)=>{a.addEventListener("load",$),a.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>o())},$e=x({history:C(),base:"/",linkActiveClass:"link--active",linkExactActiveClass:"link--active",routes:[{path:"/",name:"home",component:()=>f(()=>import("./HomeView.cb261351.js"),["assets/HomeView.cb261351.js","assets/HomeView.b44e672d.css","assets/vendor.76dbdf51.js"])},{path:"/collaborators",name:"collaborators",component:()=>f(()=>import("./CollaboratorsView.4f2875e5.js"),["assets/CollaboratorsView.4f2875e5.js","assets/CollaboratorsView.dbf7b262.css","assets/collaborators.94738893.js","assets/vendor.76dbdf51.js"])},{path:"/collaborator/:id",name:"collaborator",props:!0,component:()=>f(()=>import("./CollaboratorView.7a35a273.js"),["assets/CollaboratorView.7a35a273.js","assets/collaborators.94738893.js","assets/vendor.76dbdf51.js"])},{path:"/comming",name:"comming",component:()=>f(()=>import("./CommingView.0b72424d.js"),["assets/CommingView.0b72424d.js","assets/CommingView.cffb6a84.css","assets/vendor.76dbdf51.js"])}]});I(`${{}.BASE_URL}service-worker.js`,{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const y=L(ge);y.use(N());y.use($e);y.mount("#app");export{u as _};
