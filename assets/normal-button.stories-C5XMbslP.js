import{j as t}from"./jsx-runtime-DoEZbXM1.js";import{w as y,u as g,e as b,f as k}from"./index-BTpe-uK9.js";import{c as f}from"./cx-CjKSjrk3.js";import{N as r}from"./normal-button-Coi8qj4b.js";import"./jsx-runtime-Bw5QeaCk.js";import"./button-C3-eB2TV.js";import"./cva-B6Wyu4tH.js";const S={title:"Components/Atoms/Button/_Base/_Variant/Normal/NormalButton",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[e=>t.jsx("div",{className:f({padding:"1rem"}),children:t.jsx(e,{})})]},o=k(),n={render:()=>t.jsx(r,{onClick:o,size:"md",children:"Button"}),play:async({canvasElement:e})=>{const c=y(e).getByRole("button");await g.click(c),b(o).toHaveBeenCalled()}},a={render:()=>t.jsx("ul",{className:f({display:"flex",alignItems:"center",gap:"1rem"}),children:["fit-content","xs","sm","md","lg","xl"].map(e=>t.jsx("li",{children:t.jsx(r,{size:e,children:"Button"})},e))})},s={render:()=>t.jsx(r,{disabled:!0,onClick:o,size:"md",children:"Button"}),play:async({canvasElement:e})=>{const c=y(e).getByRole("button");await g.click(c),b(o).not.toHaveBeenCalled()}};var l,i,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <NormalButton onClick={handleClick} size="md">
        Button
      </NormalButton>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <NormalButton size={size}>Button</NormalButton>
            </li>)}
      </ul>;
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var B,v,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <NormalButton disabled onClick={handleClick} size="md">
        Button
      </NormalButton>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const D=["Default","Size","Disabled"];export{n as Default,s as Disabled,a as Size,D as __namedExportsOrder,S as default};
