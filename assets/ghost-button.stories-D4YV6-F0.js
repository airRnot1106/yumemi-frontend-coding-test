import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{w as x,u as y,e as g,f as k}from"./index-BTpe-uK9.js";import{c as b}from"./cx-CjKSjrk3.js";import{G as r}from"./ghost-button-DmZE5ofc.js";import"./jsx-runtime-Bw5QeaCk.js";import"./button-C3-eB2TV.js";import"./cva-B6Wyu4tH.js";const S={title:"Components/Atoms/Button/_Base/_Variant/Ghost/GhostButton",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{className:b({padding:"1rem"}),children:e.jsx(t,{})})]},o=k(),n={render:()=>e.jsx(r,{onClick:o,size:"md",children:"Button"}),play:async({canvasElement:t})=>{const c=x(t).getByRole("button");await y.click(c),g(o).toHaveBeenCalled()}},s={render:()=>e.jsx("ul",{className:b({display:"flex",alignItems:"center",gap:"1rem"}),children:["fit-content","xs","sm","md","lg","xl"].map(t=>e.jsx("li",{children:e.jsx(r,{size:t,children:"Button"})},t))})},a={render:()=>e.jsx(r,{disabled:!0,onClick:o,size:"md",children:"Button"}),play:async({canvasElement:t})=>{const c=x(t).getByRole("button");await y.click(c),g(o).not.toHaveBeenCalled()}};var l,i,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <GhostButton onClick={handleClick} size="md">
        Button
      </GhostButton>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  }
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <GhostButton size={size}>Button</GhostButton>
            </li>)}
      </ul>;
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var B,h,v;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <GhostButton disabled onClick={handleClick} size="md">
        Button
      </GhostButton>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const D=["Default","Size","Disabled"];export{n as Default,a as Disabled,s as Size,D as __namedExportsOrder,S as default};
