import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{c as p}from"./cx-CjKSjrk3.js";import{L as n}from"./link-button-DbYqTAs9.js";import"./jsx-runtime-Bw5QeaCk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./add-base-path-C6R_RFSA.js";import"./index-Za3YRiuF.js";import"./button-DHkYrrPp.js";import"./ghost-button-DmZE5ofc.js";import"./button-C3-eB2TV.js";import"./cva-B6Wyu4tH.js";import"./normal-button-Coi8qj4b.js";const y={title:"Components/Atoms/LinkButton/_Base/_Variant/_Abstract/LinkButton",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{className:p({padding:"1rem"}),children:e.jsx(t,{})})]},r={render:()=>e.jsx(n,{href:"#",size:"md",children:"Button"})},s={render:()=>e.jsx("ul",{className:p({display:"flex",alignItems:"center",gap:"1rem"}),children:["fit-content","xs","sm","md","lg","xl"].map(t=>e.jsx("li",{children:e.jsx(n,{href:"#",size:t,children:"Button"})},t))})};var o,a,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <LinkButton href="#" size="md">
        Button
      </LinkButton>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,c,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <LinkButton href="#" size={size}>
                Button
              </LinkButton>
            </li>)}
      </ul>;
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const S=["Default","Size"];export{r as Default,s as Size,S as __namedExportsOrder,y as default};
