import{j as n}from"./jsx-runtime-DoEZbXM1.js";import{w as t,e as r}from"./index-BTpe-uK9.js";import{H as s}from"./heading-BMDkeGV5.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cx-CjKSjrk3.js";import"./cva-B6Wyu4tH.js";const F={title:"Components/Atoms/Heading/_Base/Heading",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[a=>n.jsx("div",{style:{padding:"1rem"},children:n.jsx(a,{})})]},o={render:()=>n.jsx(s,{as:"h1",children:"タイトル"}),play:async({canvasElement:a})=>{const e=await t(a).findByRole("heading",{name:"タイトル"});r(e.tagName).toBe("H1")}},i={render:()=>n.jsx(s,{as:"h2",children:"タイトル"}),play:async({canvasElement:a})=>{const e=await t(a).findByRole("heading",{name:"タイトル"});r(e.tagName).toBe("H2")}},d={render:()=>n.jsx(s,{as:"h3",children:"タイトル"}),play:async({canvasElement:a})=>{const e=await t(a).findByRole("heading",{name:"タイトル"});r(e.tagName).toBe("H3")}},m={render:()=>n.jsx(s,{as:"h4",children:"タイトル"}),play:async({canvasElement:a})=>{const e=await t(a).findByRole("heading",{name:"タイトル"});r(e.tagName).toBe("H4")}},g={render:()=>n.jsx(s,{as:"h5",children:"タイトル"}),play:async({canvasElement:a})=>{const e=await t(a).findByRole("heading",{name:"タイトル"});r(e.tagName).toBe("H5")}},h={render:()=>n.jsx(s,{as:"h6",children:"タイトル"}),play:async({canvasElement:a})=>{const e=await t(a).findByRole("heading",{name:"タイトル"});r(e.tagName).toBe("H6")}};var p,l,H;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Heading as="h1">タイトル</Heading>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', {
      name: 'タイトル'
    });
    expect(heading.tagName).toBe('H1');
  }
}`,...(H=(l=o.parameters)==null?void 0:l.docs)==null?void 0:H.source}}};var y,v,u;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <Heading as="h2">タイトル</Heading>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', {
      name: 'タイトル'
    });
    expect(heading.tagName).toBe('H2');
  }
}`,...(u=(v=i.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var B,w,x;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <Heading as="h3">タイトル</Heading>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', {
      name: 'タイトル'
    });
    expect(heading.tagName).toBe('H3');
  }
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var f,E,R;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <Heading as="h4">タイトル</Heading>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', {
      name: 'タイトル'
    });
    expect(heading.tagName).toBe('H4');
  }
}`,...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var N,j,S;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    return <Heading as="h5">タイトル</Heading>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', {
      name: 'タイトル'
    });
    expect(heading.tagName).toBe('H5');
  }
}`,...(S=(j=g.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var _,A,C;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <Heading as="h6">タイトル</Heading>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', {
      name: 'タイトル'
    });
    expect(heading.tagName).toBe('H6');
  }
}`,...(C=(A=h.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const G=["H1","H2","H3","H4","H5","H6"];export{o as H1,i as H2,d as H3,m as H4,g as H5,h as H6,G as __namedExportsOrder,F as default};
