import{l as v,z as V,L as k,q as x,n as N,r as i,o as d,e as B,f as l,t as a,a as o,s as t,b as f,w as C,x as E,c as b,M as g}from"./index.ab8274cf.js";const y={__name:"pop",setup(R){const n=v({name:"\u5C0F\u738B",age:12});let{name:e,age:T}=V(n),c=k(()=>e.value+"-\u7565\u7565\u8DEF"),r="",u="";const _=x([()=>n.name],(p,s)=>{r=p+"+watch"},{immediate:!0});return N(()=>{u=c.value+"+watchEffect"}),(p,s)=>{const w=i("el-button"),h=i("el-input");return d(),B("div",null,[l(" reactive : "+a(n)+" ",1),o("div",null," torRefs : "+a(t(e))+" -- "+a(t(c)),1),o("div",null,[o("p",null,"watch: "+a(t(r)),1),l(),f(w,{onClick:t(_)},{default:C(()=>[l("\u6682\u505C\u76D1\u542C")]),_:1},8,["onClick"]),o("p",null," watchEffect: "+a(t(u)),1)]),f(h,{modelValue:t(e),"onUpdate:modelValue":s[0]||(s[0]=m=>E(e)?e.value=m:e=m),placeholder:"\u4F60\u7684\u540D\u5B57"},null,8,["modelValue"]),(d(),b(g,{to:"#teleport"},[l(" teleport : "+a(t(e)),1)]))])}}};export{y as default};