import{j as c}from"./jsx-runtime-DoEZbXM1.js";import{a as k,c as y}from"./cx-CjKSjrk3.js";import{c as x}from"./cva-B6Wyu4tH.js";import{B as C}from"./button-DHkYrrPp.js";import"./button-C3-eB2TV.js";import{r as n}from"./index-SP2qOBwU.js";import{s as b}from"./panic-helper-BEWS6D6P.js";import{S as w}from"./contexts-CBUbIPL_.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,a)=>a?a.toUpperCase():s.toLowerCase()),l=e=>{const t=S(e);return t.charAt(0).toUpperCase()+t.slice(1)},d=(...e)=>e.filter((t,s,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===s).join(" ").trim(),T=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:r,iconNode:p,...i},u)=>n.createElement("svg",{ref:u,...j,width:t,height:t,stroke:e,strokeWidth:a?Number(s)*24/Number(t):s,className:d("lucide",o),...!r&&!T(i)&&{"aria-hidden":"true"},...i},[...p.map(([f,g])=>n.createElement(f,g)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(e,t)=>{const s=n.forwardRef(({className:a,...o},r)=>n.createElement(N,{ref:r,iconNode:t,className:d(`lucide-${v(l(e))}`,`lucide-${e}`,a),...o}));return s.displayName=l(e),s};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],_=h("moon",A);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],M=h("sun",B),E=()=>n.useContext(w)??b("useSiteTheme must be used within a SiteThemeProvider"),m=x({base:{transition:"transform 0.4s ease, opacity 0.4s ease",opacity:0,"&[data-enabled='true']":{opacity:1,transform:"rotate(0deg) scale(1)"}},variants:{theme:{light:{transform:"rotate(-45deg) scale(0.8)"},dark:{transform:"rotate(45deg) scale(0.8)"},system:{transform:"rotate(-45deg) scale(1)"}},size:{"fit-content":{scale:"1.0"},xs:{scale:"0.8"},sm:{scale:"1.0"},md:{scale:"1.2"},lg:{scale:"1.4"},xl:{scale:"1.6"}}}}),L=({size:e="md",className:t,...s})=>{const{siteTheme:a,setSiteTheme:o}=E(),r=()=>{switch(a){case"light":{o("dark");break}case"dark":{o("light");break}case"system":{o("light");break}}};return c.jsxs(C,{"aria-checked":a==="dark","aria-label":a==="dark"?"ライトモードに切り替え":"ダークモードに切り替え",className:k(t,y({display:"inline-grid",placeContent:"center","& > *":{gridRow:1,gridColumn:1}})),onClick:r,role:"switch",size:e,type:"button",variant:"ghost",...s,children:[c.jsx(M,{"aria-hidden":"true",className:m({theme:a,size:e}),"data-enabled":a==="light"||a==="system",focusable:"false"}),c.jsx(_,{"aria-hidden":"true",className:m({theme:a,size:e}),"data-enabled":a==="dark",focusable:"false"})]})};L.__docgenInfo={description:"",methods:[],displayName:"SiteThemeToggleButton",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};export{L as S};
