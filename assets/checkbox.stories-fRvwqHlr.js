import{j as a}from"./jsx-runtime-DoEZbXM1.js";import{w as f,u as i,a as d,e as l}from"./index-BTpe-uK9.js";import{r as B}from"./index-SP2qOBwU.js";import{c as v}from"./cx-CjKSjrk3.js";import{C as o}from"./checkbox-CHBJi7EY.js";import"./jsx-runtime-Bw5QeaCk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Za3YRiuF.js";import"./cva-B6Wyu4tH.js";const I={title:"Components/Atoms/Checkbox/_Base/Checkbox",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[e=>a.jsx("div",{className:v({padding:"1rem"}),children:a.jsx(e,{})})]},n={render:()=>a.jsx(o,{children:"Button"}),play:async({canvasElement:e})=>{const c=await f(e).findByRole("checkbox");await i.click(c),await d(()=>l(c).toBeChecked()),await i.click(c),await d(()=>l(c).not.toBeChecked())}},t={render:()=>a.jsx("ul",{className:v({display:"flex",alignItems:"center",gap:"1rem",overflow:"auto",whiteSpace:"nowrap"}),children:["fit-content","xs","sm","md","lg","xl"].map(e=>a.jsx("li",{children:a.jsx(o,{size:e,children:"チェックボックス"})},e))})},s={render:()=>{const[e,r]=B.useState(!1),c=g=>{const y=g.currentTarget.checked;r(y)};return a.jsxs(o,{checked:e,disabled:!0,onChange:c,children:["チェックボックス ",e?"ON":"OFF"]})},play:async({canvasElement:e})=>{const c=await f(e).findByRole("checkbox");await i.click(c),await d(()=>l(c).not.toBeChecked())}};var h,m,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox>Button</Checkbox>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole('checkbox');
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).toBeChecked());
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).not.toBeChecked());
  }
}`,...(k=(m=n.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var p,x,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      overflow: 'auto',
      whiteSpace: 'nowrap'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <Checkbox size={size}>チェックボックス</Checkbox>
            </li>)}
      </ul>;
  }
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var w,b,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
      const checked = e.currentTarget.checked;
      setChecked(checked);
    };
    return <Checkbox checked={checked} disabled onChange={handleChange}>
        チェックボックス {checked ? 'ON' : 'OFF'}
      </Checkbox>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole('checkbox');
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).not.toBeChecked());
  }
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const T=["Default","Size","Disabled"];export{n as Default,s as Disabled,t as Size,T as __namedExportsOrder,I as default};
