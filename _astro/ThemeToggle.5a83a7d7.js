import{S as M,i as N,s as A,e as _,a as b,c as f,b as E,g as p,d as y,f as C,h as c,t as v,n as S,j as w,k as h,l as L,m as H,r as B}from"./index.834f1e46.js";function D(i){let t,l,r="Switch Theme",o,s,d='<i class="fa-solid fa-sun"></i> <span class="sr-only">Set Light Theme</span>',u,e,T='<i class="fa-solid fa-moon"></i> <span class="sr-only">Set Dark Theme</span>',m,g,k;return{c(){t=_("div"),l=_("span"),l.textContent=r,o=b(),s=_("button"),s.innerHTML=d,u=b(),e=_("button"),e.innerHTML=T,this.h()},l(n){t=f(n,"DIV",{class:!0});var a=E(t);l=f(a,"SPAN",{class:!0,"data-svelte-h":!0}),p(l)!=="svelte-1frnke0"&&(l.textContent=r),o=y(a),s=f(a,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),p(s)!=="svelte-1aotwss"&&(s.innerHTML=d),u=y(a),e=f(a,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),p(e)!=="svelte-bf0z5l"&&(e.innerHTML=T),a.forEach(C),this.h()},h(){c(l,"class","sr-only"),c(s,"class","light svelte-1hhum2t"),c(s,"type","button"),v(s,"active",i[1]==="light"),c(e,"class","dark svelte-1hhum2t"),c(e,"type","button"),v(e,"active",i[1]==="dark"),c(t,"class",m=S(`toggle-container ${i[0]}`)+" svelte-1hhum2t")},m(n,a){w(n,t,a),h(t,l),h(t,o),h(t,s),h(t,u),h(t,e),g||(k=[L(s,"click",i[3]),L(e,"click",i[4])],g=!0)},p(n,[a]){a&2&&v(s,"active",n[1]==="light"),a&2&&v(e,"active",n[1]==="dark"),a&1&&m!==(m=S(`toggle-container ${n[0]}`)+" svelte-1hhum2t")&&c(t,"class",m)},i:H,o:H,d(n){n&&C(t),g=!1,B(k)}}}function I(i,t,l){let r=document.documentElement.getAttribute("data-theme"),{class:o=""}=t;function s(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),l(1,r=e)}const d=()=>s("light"),u=()=>s("dark");return i.$$set=e=>{"class"in e&&l(0,o=e.class)},[o,r,s,d,u]}class U extends M{constructor(t){super(),N(this,t,I,D,A,{class:0})}}export{U as default};
