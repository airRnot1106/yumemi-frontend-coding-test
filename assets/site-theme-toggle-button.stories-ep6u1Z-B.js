import{j as s}from"./jsx-runtime-DoEZbXM1.js";import{w as g,u as i,e as n}from"./index-BTpe-uK9.js";import{c as h}from"./cx-CjKSjrk3.js";import{S as o}from"./site-theme-toggle-button-DlKrcEvn.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cva-B6Wyu4tH.js";import"./button-DHkYrrPp.js";import"./ghost-button-DmZE5ofc.js";import"./button-C3-eB2TV.js";import"./normal-button-Coi8qj4b.js";import"./index-SP2qOBwU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Za3YRiuF.js";import"./panic-helper-BEWS6D6P.js";import"./contexts-CBUbIPL_.js";const R={title:"Features/SiteTheme/Atoms/SiteThemeToggleButton",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},a={render:()=>s.jsx(o,{}),play:async({canvasElement:e})=>{const t=g(e).getByRole("switch");await i.click(t),n(t).toHaveAttribute("aria-checked","false"),n(document.documentElement.getAttribute("data-theme")).toBe("light"),await i.click(t),n(t).toHaveAttribute("aria-checked","true"),n(document.documentElement.getAttribute("data-theme")).toBe("dark")}},r={render:()=>s.jsx("ul",{className:h({display:"flex",alignItems:"center",gap:"1rem","& > li":{display:"grid",alignItems:"center"}}),children:["fit-content","xs","sm","md","lg","xl"].map(e=>s.jsx("li",{children:s.jsx(o,{size:e})},e))})};var c,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <SiteThemeToggleButton />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('switch');
    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-checked', 'false');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-checked', 'true');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      '& > li': {
        display: 'grid',
        alignItems: 'center'
      }
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <SiteThemeToggleButton size={size} />
            </li>)}
      </ul>;
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const D=["Default","Size"];export{a as Default,r as Size,D as __namedExportsOrder,R as default};
