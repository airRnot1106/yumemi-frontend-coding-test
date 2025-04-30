import{j as n}from"./jsx-runtime-DoEZbXM1.js";import{w as b,u as w,e as C,f as h}from"./index-BTpe-uK9.js";import{c as S}from"./cx-CjKSjrk3.js";import{P as g}from"./consts-DAoQdKVh.js";import{P as s}from"./population-composition-selectbox.presentational-pIydSnes.js";import"./jsx-runtime-Bw5QeaCk.js";import"./selectbox-ouFDOBYY.js";import"./cva-B6Wyu4tH.js";const R={title:"Features/PopulationComposition/Components/Atoms/PopulationCompositionSelectbox",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[e=>n.jsx("div",{className:S({padding:"1rem"}),children:n.jsx(e,{})})]},l=h(),y=e=>{const r=e.currentTarget.value;l(r)},a={render:()=>n.jsx(s,{onChange:y}),play:async({canvasElement:e})=>{const c=await b(e).findByRole("combobox");for(const{value:i}of g)await w.selectOptions(c,i),C(l).toHaveBeenCalledWith(i)}},o={render:()=>n.jsx("ul",{className:S({display:"flex",alignItems:"center",gap:"1rem",overflow:"auto",whiteSpace:"nowrap"}),children:["fit-content","xs","sm","md","lg","xl"].map(e=>n.jsx("li",{children:n.jsx(s,{size:e})},e))})},t={render:()=>n.jsx(s,{disabled:!0}),play:async({canvasElement:e})=>{const c=await b(e).findByRole("combobox");await w.selectOptions(c,g[1].value),C(l).not.toHaveBeenCalled()}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <PopulationCompositionSelectboxPresentational onChange={handleChange} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selectbox = await canvas.findByRole('combobox');
    for (const {
      value
    } of POPULATION_COMPOSITION_TYPE_OPTIONS) {
      await userEvent.selectOptions(selectbox, value);
      expect(mockFn).toHaveBeenCalledWith(value);
    }
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,x,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      overflow: 'auto',
      whiteSpace: 'nowrap'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <PopulationCompositionSelectboxPresentational size={size} />
            </li>)}
      </ul>;
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var P,O,f;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <PopulationCompositionSelectboxPresentational disabled />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selectbox = await canvas.findByRole('combobox');
    await userEvent.selectOptions(selectbox, POPULATION_COMPOSITION_TYPE_OPTIONS[1].value);
    expect(mockFn).not.toHaveBeenCalled();
  }
}`,...(f=(O=t.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const k=["Default","Size","Disabled"];export{a as Default,t as Disabled,o as Size,k as __namedExportsOrder,R as default};
