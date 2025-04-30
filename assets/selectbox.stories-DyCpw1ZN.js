import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{w as f,u as n,e as s,f as g}from"./index-BTpe-uK9.js";import{c as S}from"./cx-CjKSjrk3.js";import{S as r}from"./selectbox-ouFDOBYY.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cva-B6Wyu4tH.js";const k={title:"Components/Atoms/Selectbox/_Base/Selectbox",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[o=>e.jsx("div",{className:S({padding:"1rem"}),children:e.jsx(o,{})})]},t=g(),y=o=>{const p=o.currentTarget.value;t(p)},l={render:()=>e.jsxs(r,{"aria-label":"人口構成",onChange:y,children:[e.jsx("option",{value:"1",children:"総人口"}),e.jsx("option",{value:"2",children:"年少人口"}),e.jsx("option",{value:"3",children:"生産年齢人口"}),e.jsx("option",{value:"4",children:"老年人口"})]}),play:async({canvasElement:o})=>{const a=await f(o).findByRole("combobox");await n.selectOptions(a,"1"),s(t).toHaveBeenCalledWith("1"),await n.selectOptions(a,"2"),s(t).toHaveBeenCalledWith("2"),await n.selectOptions(a,"3"),s(t).toHaveBeenCalledWith("3"),await n.selectOptions(a,"4"),s(t).toHaveBeenCalledWith("4")}},i={render:()=>e.jsx("ul",{className:S({display:"flex",alignItems:"center",gap:"1rem",overflow:"auto",whiteSpace:"nowrap"}),children:["fit-content","xs","sm","md","lg","xl"].map(o=>e.jsx("li",{children:e.jsxs(r,{"aria-label":"人口構成",size:o,children:[e.jsx("option",{value:"1",children:"総人口"}),e.jsx("option",{value:"2",children:"年少人口"}),e.jsx("option",{value:"3",children:"生産年齢人口"}),e.jsx("option",{value:"4",children:"老年人口"})]})},o))})},c={render:()=>e.jsxs(r,{"aria-label":"人口構成",disabled:!0,children:[e.jsx("option",{value:"1",children:"総人口"}),e.jsx("option",{value:"2",children:"年少人口"}),e.jsx("option",{value:"3",children:"生産年齢人口"}),e.jsx("option",{value:"4",children:"老年人口"})]}),play:async({canvasElement:o})=>{const a=await f(o).findByRole("combobox");await n.selectOptions(a,"1"),s(t).not.toHaveBeenCalled()}};var d,u,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <Selectbox aria-label="人口構成" onChange={handleChange}>
        <option value="1">総人口</option>
        <option value="2">年少人口</option>
        <option value="3">生産年齢人口</option>
        <option value="4">老年人口</option>
      </Selectbox>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selectbox = await canvas.findByRole('combobox');
    await userEvent.selectOptions(selectbox, '1');
    expect(mockFn).toHaveBeenCalledWith('1');
    await userEvent.selectOptions(selectbox, '2');
    expect(mockFn).toHaveBeenCalledWith('2');
    await userEvent.selectOptions(selectbox, '3');
    expect(mockFn).toHaveBeenCalledWith('3');
    await userEvent.selectOptions(selectbox, '4');
    expect(mockFn).toHaveBeenCalledWith('4');
  }
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,x,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      overflow: 'auto',
      whiteSpace: 'nowrap'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <Selectbox aria-label="人口構成" size={size}>
                <option value="1">総人口</option>
                <option value="2">年少人口</option>
                <option value="3">生産年齢人口</option>
                <option value="4">老年人口</option>
              </Selectbox>
            </li>)}
      </ul>;
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,w,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <Selectbox aria-label="人口構成" disabled>
        <option value="1">総人口</option>
        <option value="2">年少人口</option>
        <option value="3">生産年齢人口</option>
        <option value="4">老年人口</option>
      </Selectbox>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selectbox = await canvas.findByRole('combobox');
    await userEvent.selectOptions(selectbox, '1');
    expect(mockFn).not.toHaveBeenCalled();
  }
}`,...(j=(w=c.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const F=["Default","Size","Disabled"];export{l as Default,c as Disabled,i as Size,F as __namedExportsOrder,k as default};
