import{j as u}from"./jsx-runtime-DoEZbXM1.js";import{w as O,u as w,a as h,e as o,f as X}from"./index-BTpe-uK9.js";import{c as q}from"./cx-CjKSjrk3.js";import{P as M,p as l}from"./prefecture-form.presentational-B-_P7Nse.js";import"./jsx-runtime-Bw5QeaCk.js";import"./index-Za3YRiuF.js";import"./index-SP2qOBwU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./button-DHkYrrPp.js";import"./ghost-button-DmZE5ofc.js";import"./button-C3-eB2TV.js";import"./cva-B6Wyu4tH.js";import"./normal-button-Coi8qj4b.js";import"./checkbox-CHBJi7EY.js";const te={title:"Features/Prefecture/Components/Molecules/PrefectureForm",component:M,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[r=>u.jsx("div",{className:q({padding:"1rem"}),children:u.jsx(r,{})})]},D=X(r=>{console.log(r)}),W=X(()=>{console.log("reset")}),e=u.jsx(M,{onReset:W,onSubmit:D,prefectures:l}),n={render:()=>e,play:async({canvasElement:r})=>{const i=O(r),f=[];for(const t of l){const a=await i.findByRole("checkbox",{name:t.prefName});await w.click(a),await h(()=>o(a).toBeChecked()),f.push(t.prefCode),o(D).toHaveBeenCalledWith(f)}const _=await i.findByRole("button",{name:"Reset"});await w.click(_),await h(()=>o(W).toHaveBeenCalled());for(const t of l){const a=await i.findByRole("checkbox",{name:t.prefName});o(a).not.toBeChecked()}}},s={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xs"}},render:()=>e},c={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"sm"}},render:()=>e},p={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"md"}},render:()=>e},m={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"lg"}},render:()=>e},d={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xl"}},render:()=>e};var x,g,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      name: 'Reset'
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
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var k,C,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xs'
    }
  },
  render: () => {
    return Component;
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var B,S,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'sm'
    }
  },
  render: () => {
    return Component;
  }
}`,...(R=(S=c.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var y,V,P;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'md'
    }
  },
  render: () => {
    return Component;
  }
}`,...(P=(V=p.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var E,F,j;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'lg'
    }
  },
  render: () => {
    return Component;
  }
}`,...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var N,H,L;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xl'
    }
  },
  render: () => {
    return Component;
  }
}`,...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const ae=["Default","XSmall","Small","Medium","Large","XLarge"];export{n as Default,m as Large,p as Medium,c as Small,d as XLarge,s as XSmall,ae as __namedExportsOrder,te as default};
