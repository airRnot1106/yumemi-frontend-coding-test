import{j as t}from"./jsx-runtime-DoEZbXM1.js";import{w as y,u as b,e as g,f as k}from"./index-BTpe-uK9.js";import{c as f}from"./cx-CjKSjrk3.js";import{B as r}from"./button-C3-eB2TV.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cva-B6Wyu4tH.js";const S={title:"Components/Atoms/Button/_Base/_Variant/_Abstract/Button",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[e=>t.jsx("div",{className:f({padding:"1rem"}),children:t.jsx(e,{})})]},o=k(),n={render:()=>t.jsx(r,{onClick:o,size:"md",children:"Button"}),play:async({canvasElement:e})=>{const c=y(e).getByRole("button");await b.click(c),g(o).toHaveBeenCalled()}},a={render:()=>t.jsx("ul",{className:f({display:"flex",alignItems:"center",gap:"1rem"}),children:["fit-content","xs","sm","md","lg","xl"].map(e=>t.jsx("li",{children:t.jsx(r,{size:e,children:"Button"})},e))})},s={render:()=>t.jsx(r,{disabled:!0,onClick:o,size:"md",children:"Button"}),play:async({canvasElement:e})=>{const c=y(e).getByRole("button");await b.click(c),g(o).not.toHaveBeenCalled()}};var l,i,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Button onClick={handleClick} size="md">
        Button
      </Button>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  }
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <Button size={size}>Button</Button>
            </li>)}
      </ul>;
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var B,v,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <Button disabled onClick={handleClick} size="md">
        Button
      </Button>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const _=["Default","Size","Disabled"];export{n as Default,s as Disabled,a as Size,_ as __namedExportsOrder,S as default};
