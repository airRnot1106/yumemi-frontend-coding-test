import{j as u}from"./jsx-runtime-DoEZbXM1.js";import{w as O,u as w,a as h,e as a,f as X}from"./index-BTpe-uK9.js";import{c as q}from"./cx-CjKSjrk3.js";import{P as M,p as l}from"./prefecture-form.presentational-CD5AbAhr.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-Za3YRiuF.js";import"./index-SP2qOBwU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./button-DHkYrrPp.js";import"./ghost-button-DmZE5ofc.js";import"./button-C3-eB2TV.js";import"./cva-B6Wyu4tH.js";import"./normal-button-Coi8qj4b.js";import"./checkbox-CHBJi7EY.js";const te={title:"Features/Prefecture/Components/Molecules/PrefectureForm",component:M,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[d=>u.jsx("div",{className:q({padding:"1rem"}),children:u.jsx(d,{})})]},D=X(),W=X(),e=u.jsx(M,{onReset:W,onSubmit:D,prefectures:l}),n={render:()=>e,play:async({canvasElement:d})=>{const i=O(d),f=[];for(const r of l){const t=await i.findByRole("checkbox",{name:r.prefName});await w.click(t),await h(()=>a(t).toBeChecked()),f.push(r.prefCode),a(D).toHaveBeenCalledWith(f)}const _=await i.findByRole("button",{name:"リセット"});await w.click(_),await h(()=>a(W).toHaveBeenCalled());for(const r of l){const t=await i.findByRole("checkbox",{name:r.prefName});a(t).not.toBeChecked()}}},o={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xs"}},render:()=>e},s={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"sm"}},render:()=>e},c={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"md"}},render:()=>e},p={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"lg"}},render:()=>e},m={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xl"}},render:()=>e};var x,v,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return Component;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkedPrefCodes = [] as number[];
    for (const prefecture of prefectures) {
      const checkbox = await canvas.findByRole('checkbox', {
        name: prefecture.prefName
      });
      await userEvent.click(checkbox);
      await waitFor(() => expect(checkbox).toBeChecked());
      checkedPrefCodes.push(prefecture.prefCode);
      expect(handleSubmit).toHaveBeenCalledWith(checkedPrefCodes);
    }
    const resetButton = await canvas.findByRole('button', {
      name: 'リセット'
    });
    await userEvent.click(resetButton);
    await waitFor(() => expect(handleReset).toHaveBeenCalled());
    for (const prefecture of prefectures) {
      const checkbox = await canvas.findByRole('checkbox', {
        name: prefecture.prefName
      });
      expect(checkbox).not.toBeChecked();
    }
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var k,C,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xs'
    }
  },
  render: () => {
    return Component;
  }
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var B,S,y;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'sm'
    }
  },
  render: () => {
    return Component;
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var R,V,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'md'
    }
  },
  render: () => {
    return Component;
  }
}`,...(P=(V=c.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var E,F,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'lg'
    }
  },
  render: () => {
    return Component;
  }
}`,...(j=(F=p.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var N,H,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xl'
    }
  },
  render: () => {
    return Component;
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const ae=["Default","XSmall","Small","Medium","Large","XLarge"];export{n as Default,p as Large,c as Medium,s as Small,m as XLarge,o as XSmall,ae as __namedExportsOrder,te as default};
