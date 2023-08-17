function ra(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,e)}return t}function l(n){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?ra(Object(t),!0).forEach(function(e){y(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ra(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function kn(n){"@babel/helpers - typeof";return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},kn(n)}function it(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function ia(n,a){for(var t=0;t<a.length;t++){var e=a[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function ot(n,a,t){return a&&ia(n.prototype,a),t&&ia(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function y(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function Wn(n,a){return ft(n)||lt(n,a)||za(n,a)||mt()}function on(n){return st(n)||ct(n)||za(n)||ut()}function st(n){if(Array.isArray(n))return Pn(n)}function ft(n){if(Array.isArray(n))return n}function ct(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function lt(n,a){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var e=[],r=!0,o=!1,i,s;try{for(t=t.call(n);!(r=(i=t.next()).done)&&(e.push(i.value),!(a&&e.length===a));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&t.return!=null&&t.return()}finally{if(o)throw s}}return e}}function za(n,a){if(n){if(typeof n=="string")return Pn(n,a);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Pn(n,a)}}function Pn(n,a){(a==null||a>n.length)&&(a=n.length);for(var t=0,e=new Array(a);t<a;t++)e[t]=n[t];return e}function ut(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oa=function(){},Gn={},Pa={},Oa=null,Ia={mark:oa,measure:oa};try{typeof window<"u"&&(Gn=window),typeof document<"u"&&(Pa=document),typeof MutationObserver<"u"&&(Oa=MutationObserver),typeof performance<"u"&&(Ia=performance)}catch{}var dt=Gn.navigator||{},sa=dt.userAgent,fa=sa===void 0?"":sa,R=Gn,b=Pa,ca=Oa,cn=Ia;R.document;var I=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Ta=~fa.indexOf("MSIE")||~fa.indexOf("Trident/"),ln,un,mn,dn,vn,z="___FONT_AWESOME___",On=16,Ha="fa",Ra="svg-inline--fa",U="data-fa-i2svg",In="data-fa-pseudo-element",vt="data-fa-pseudo-element-pending",Xn="data-prefix",Bn="data-icon",la="fontawesome-i2svg",gt="async",pt=["HTML","HEAD","STYLE","SCRIPT"],Fa=function(){try{return!0}catch{return!1}}(),p="classic",h="sharp",qn=[p,h];function sn(n){return new Proxy(n,{get:function(t,e){return e in t?t[e]:t[p]}})}var nn=sn((ln={},y(ln,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),y(ln,h,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ln)),an=sn((un={},y(un,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(un,h,{solid:"fass",regular:"fasr",light:"fasl"}),un)),tn=sn((mn={},y(mn,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(mn,h,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),mn)),bt=sn((dn={},y(dn,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(dn,h,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),dn)),ht=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Va="fa-layers-text",yt=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,kt=sn((vn={},y(vn,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(vn,h,{900:"fass",400:"fasr",300:"fasl"}),vn)),Da=[1,2,3,4,5,6,7,8,9,10],xt=Da.concat([11,12,13,14,15,16,17,18,19,20]),wt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],j={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(an[p]).map(en.add.bind(en));Object.keys(an[h]).map(en.add.bind(en));var _t=[].concat(qn,on(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",j.GROUP,j.SWAP_OPACITY,j.PRIMARY,j.SECONDARY]).concat(Da.map(function(n){return"".concat(n,"x")})).concat(xt.map(function(n){return"w-".concat(n)})),J=R.FontAwesomeConfig||{};function At(n){var a=b.querySelector("script["+n+"]");if(a)return a.getAttribute(n)}function Ct(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(b&&typeof b.querySelector=="function"){var Lt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Lt.forEach(function(n){var a=Wn(n,2),t=a[0],e=a[1],r=Ct(At(t));r!=null&&(J[e]=r)})}var Ya={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ha,replacementClass:Ra,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);var q=l(l({},Ya),J);q.autoReplaceSvg||(q.observeMutations=!1);var m={};Object.keys(Ya).forEach(function(n){Object.defineProperty(m,n,{enumerable:!0,set:function(t){q[n]=t,Z.forEach(function(e){return e(m)})},get:function(){return q[n]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){q.cssPrefix=a,Z.forEach(function(t){return t(m)})},get:function(){return q.cssPrefix}});R.FontAwesomeConfig=m;var Z=[];function St(n){return Z.push(n),function(){Z.splice(Z.indexOf(n),1)}}var H=On,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Et(n){if(!(!n||!I)){var a=b.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=n;for(var t=b.head.childNodes,e=null,r=t.length-1;r>-1;r--){var o=t[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=o)}return b.head.insertBefore(a,e),n}}var Mt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rn(){for(var n=12,a="";n-- >0;)a+=Mt[Math.random()*62|0];return a}function K(n){for(var a=[],t=(n||[]).length>>>0;t--;)a[t]=n[t];return a}function Kn(n){return n.classList?K(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(a){return a})}function ja(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nt(n){return Object.keys(n||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(ja(n[t]),'" ')},"").trim()}function _n(n){return Object.keys(n||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(n[t].trim(),";")},"")}function Qn(n){return n.size!==N.size||n.x!==N.x||n.y!==N.y||n.rotate!==N.rotate||n.flipX||n.flipY}function zt(n){var a=n.transform,t=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Pt(n){var a=n.transform,t=n.width,e=t===void 0?On:t,r=n.height,o=r===void 0?On:r,i=n.startCentered,s=i===void 0?!1:i,f="";return s&&Ta?f+="translate(".concat(a.x/H-e/2,"em, ").concat(a.y/H-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(a.x/H,"em), calc(-50% + ").concat(a.y/H,"em)) "):f+="translate(".concat(a.x/H,"em, ").concat(a.y/H,"em) "),f+="scale(".concat(a.size/H*(a.flipX?-1:1),", ").concat(a.size/H*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Ot=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $a(){var n=Ha,a=Ra,t=m.cssPrefix,e=m.replacementClass,r=Ot;if(t!==n||e!==a){var o=new RegExp("\\.".concat(n,"\\-"),"g"),i=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(o,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(s,".".concat(e))}return r}var ua=!1;function En(){m.autoAddCss&&!ua&&(Et($a()),ua=!0)}var It={mixout:function(){return{dom:{css:$a,insertCss:En}}},hooks:function(){return{beforeDOMElementCreation:function(){En()},beforeI2svg:function(){En()}}}},P=R||{};P[z]||(P[z]={});P[z].styles||(P[z].styles={});P[z].hooks||(P[z].hooks={});P[z].shims||(P[z].shims=[]);var S=P[z],Ua=[],Tt=function n(){b.removeEventListener("DOMContentLoaded",n),xn=1,Ua.map(function(a){return a()})},xn=!1;I&&(xn=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),xn||b.addEventListener("DOMContentLoaded",Tt));function Ht(n){I&&(xn?setTimeout(n,0):Ua.push(n))}function fn(n){var a=n.tag,t=n.attributes,e=t===void 0?{}:t,r=n.children,o=r===void 0?[]:r;return typeof n=="string"?ja(n):"<".concat(a," ").concat(Nt(e),">").concat(o.map(fn).join(""),"</").concat(a,">")}function ma(n,a,t){if(n&&n[a]&&n[a][t])return{prefix:a,iconName:t,icon:n[a][t]}}var Rt=function(a,t){return function(e,r,o,i){return a.call(t,e,r,o,i)}},Mn=function(a,t,e,r){var o=Object.keys(a),i=o.length,s=r!==void 0?Rt(t,r):t,f,u,c;for(e===void 0?(f=1,c=a[o[0]]):(f=0,c=e);f<i;f++)u=o[f],c=s(c,a[u],u,a);return c};function Ft(n){for(var a=[],t=0,e=n.length;t<e;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<e){var o=n.charCodeAt(t++);(o&64512)==56320?a.push(((r&1023)<<10)+(o&1023)+65536):(a.push(r),t--)}else a.push(r)}return a}function Tn(n){var a=Ft(n);return a.length===1?a[0].toString(16):null}function Vt(n,a){var t=n.length,e=n.charCodeAt(a),r;return e>=55296&&e<=56319&&t>a+1&&(r=n.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function da(n){return Object.keys(n).reduce(function(a,t){var e=n[t],r=!!e.icon;return r?a[e.iconName]=e.icon:a[t]=e,a},{})}function Hn(n,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,r=e===void 0?!1:e,o=da(a);typeof S.hooks.addPack=="function"&&!r?S.hooks.addPack(n,da(a)):S.styles[n]=l(l({},S.styles[n]||{}),o),n==="fas"&&Hn("fa",a)}var gn,pn,bn,G=S.styles,Dt=S.shims,Yt=(gn={},y(gn,p,Object.values(tn[p])),y(gn,h,Object.values(tn[h])),gn),Jn=null,Wa={},Ga={},Xa={},Ba={},qa={},jt=(pn={},y(pn,p,Object.keys(nn[p])),y(pn,h,Object.keys(nn[h])),pn);function $t(n){return~_t.indexOf(n)}function Ut(n,a){var t=a.split("-"),e=t[0],r=t.slice(1).join("-");return e===n&&r!==""&&!$t(r)?r:null}var Ka=function(){var a=function(o){return Mn(G,function(i,s,f){return i[f]=Mn(s,o,{}),i},{})};Wa=a(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Ga=a(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),qa=a(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var t="far"in G||m.autoFetchSvg,e=Mn(Dt,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Xa=e.names,Ba=e.unicodes,Jn=An(m.styleDefault,{family:m.familyDefault})};St(function(n){Jn=An(n.styleDefault,{family:m.familyDefault})});Ka();function Zn(n,a){return(Wa[n]||{})[a]}function Wt(n,a){return(Ga[n]||{})[a]}function $(n,a){return(qa[n]||{})[a]}function Qa(n){return Xa[n]||{prefix:null,iconName:null}}function Gt(n){var a=Ba[n],t=Zn("fas",n);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function F(){return Jn}var na=function(){return{prefix:null,iconName:null,rest:[]}};function An(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,e=t===void 0?p:t,r=nn[e][n],o=an[e][n]||an[e][r],i=n in S.styles?n:null;return o||i||null}var va=(bn={},y(bn,p,Object.keys(tn[p])),y(bn,h,Object.keys(tn[h])),bn);function Cn(n){var a,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.skipLookups,r=e===void 0?!1:e,o=(a={},y(a,p,"".concat(m.cssPrefix,"-").concat(p)),y(a,h,"".concat(m.cssPrefix,"-").concat(h)),a),i=null,s=p;(n.includes(o[p])||n.some(function(u){return va[p].includes(u)}))&&(s=p),(n.includes(o[h])||n.some(function(u){return va[h].includes(u)}))&&(s=h);var f=n.reduce(function(u,c){var d=Ut(m.cssPrefix,c);if(G[c]?(c=Yt[s].includes(c)?bt[s][c]:c,i=c,u.prefix=c):jt[s].indexOf(c)>-1?(i=c,u.prefix=An(c,{family:s})):d?u.iconName=d:c!==m.replacementClass&&c!==o[p]&&c!==o[h]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var v=i==="fa"?Qa(u.iconName):{},g=$(u.prefix,u.iconName);v.prefix&&(i=null),u.iconName=v.iconName||g||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!G.far&&G.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},na());return(n.includes("fa-brands")||n.includes("fab"))&&(f.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===h&&(G.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=$(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=F()||"fas"),f}var Xt=function(){function n(){it(this,n),this.definitions={}}return ot(n,[{key:"add",value:function(){for(var t=this,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){t.definitions[s]=l(l({},t.definitions[s]||{}),i[s]),Hn(s,i[s]);var f=tn[p][s];f&&Hn(f,i[s]),Ka()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,u=i.icon,c=u[2];t[s]||(t[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(t[s][d]=u)}),t[s][f]=u}),t}}]),n}(),ga=[],X={},B={},Bt=Object.keys(B);function qt(n,a){var t=a.mixoutsTo;return ga=n,X={},Object.keys(B).forEach(function(e){Bt.indexOf(e)===-1&&delete B[e]}),ga.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(t[i]=r[i]),kn(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){t[i]||(t[i]={}),t[i][s]=r[i][s]})}),e.hooks){var o=e.hooks();Object.keys(o).forEach(function(i){X[i]||(X[i]=[]),X[i].push(o[i])})}e.provides&&e.provides(B)}),t}function Rn(n,a){for(var t=arguments.length,e=new Array(t>2?t-2:0),r=2;r<t;r++)e[r-2]=arguments[r];var o=X[n]||[];return o.forEach(function(i){a=i.apply(null,[a].concat(e))}),a}function W(n){for(var a=arguments.length,t=new Array(a>1?a-1:0),e=1;e<a;e++)t[e-1]=arguments[e];var r=X[n]||[];r.forEach(function(o){o.apply(null,t)})}function O(){var n=arguments[0],a=Array.prototype.slice.call(arguments,1);return B[n]?B[n].apply(null,a):void 0}function Fn(n){n.prefix==="fa"&&(n.prefix="fas");var a=n.iconName,t=n.prefix||F();if(a)return a=$(t,a)||a,ma(Ja.definitions,t,a)||ma(S.styles,t,a)}var Ja=new Xt,Kt=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,W("noAuto")},Qt={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(W("beforeI2svg",a),O("pseudoElements2svg",a),O("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ht(function(){Zt({autoReplaceSvgRoot:t}),W("watch",a)})}},Jt={icon:function(a){if(a===null)return null;if(kn(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:$(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=An(a[0]);return{prefix:e,iconName:$(e,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(ht))){var r=Cn(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:$(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var o=F();return{prefix:o,iconName:$(o,a)||a}}}},A={noAuto:Kt,config:m,dom:Qt,parse:Jt,library:Ja,findIconDefinition:Fn,toHtml:fn},Zt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,e=t===void 0?b:t;(Object.keys(S.styles).length>0||m.autoFetchSvg)&&I&&m.autoReplaceSvg&&A.dom.i2svg({node:e})};function Ln(n,a){return Object.defineProperty(n,"abstract",{get:a}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return fn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(I){var e=b.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function ne(n){var a=n.children,t=n.main,e=n.mask,r=n.attributes,o=n.styles,i=n.transform;if(Qn(i)&&t.found&&!e.found){var s=t.width,f=t.height,u={x:s/f/2,y:.5};r.style=_n(l(l({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function ae(n){var a=n.prefix,t=n.iconName,e=n.children,r=n.attributes,o=n.symbol,i=o===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:e}]}]}function aa(n){var a=n.icons,t=a.main,e=a.mask,r=n.prefix,o=n.iconName,i=n.transform,s=n.symbol,f=n.title,u=n.maskId,c=n.titleId,d=n.extra,v=n.watchable,g=v===void 0?!1:v,x=e.found?e:t,C=x.width,L=x.height,E=r==="fak",k=[m.replacementClass,o?"".concat(m.cssPrefix,"-").concat(o):""].filter(function(T){return d.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(d.classes).join(" "),w={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":r,"data-icon":o,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(L)})},M=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/L*16*.0625,"em")}:{};g&&(w.attributes[U]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||rn())},children:[f]}),delete w.attributes.title);var _=l(l({},w),{},{prefix:r,iconName:o,main:t,mask:e,maskId:u,transform:i,symbol:s,styles:l(l({},M),d.styles)}),D=e.found&&t.found?O("generateAbstractMask",_)||{children:[],attributes:{}}:O("generateAbstractIcon",_)||{children:[],attributes:{}},Y=D.children,Sn=D.attributes;return _.children=Y,_.attributes=Sn,s?ae(_):ne(_)}function pa(n){var a=n.content,t=n.width,e=n.height,r=n.transform,o=n.title,i=n.extra,s=n.watchable,f=s===void 0?!1:s,u=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(u[U]="");var c=l({},i.styles);Qn(r)&&(c.transform=Pt({transform:r,startCentered:!0,width:t,height:e}),c["-webkit-transform"]=c.transform);var d=_n(c);d.length>0&&(u.style=d);var v=[];return v.push({tag:"span",attributes:u,children:[a]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function te(n){var a=n.content,t=n.title,e=n.extra,r=l(l(l({},e.attributes),t?{title:t}:{}),{},{class:e.classes.join(" ")}),o=_n(e.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),t&&i.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),i}var Nn=S.styles;function Vn(n){var a=n[0],t=n[1],e=n.slice(4),r=Wn(e,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(j.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(j.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(j.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:a,height:t,icon:i}}var ee={found:!1,width:512,height:512};function re(n,a){!Fa&&!m.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(a,'" is missing.'))}function Dn(n,a){var t=a;return a==="fa"&&m.styleDefault!==null&&(a=F()),new Promise(function(e,r){if(O("missingIconAbstract"),t==="fa"){var o=Qa(n)||{};n=o.iconName||n,a=o.prefix||a}if(n&&a&&Nn[a]&&Nn[a][n]){var i=Nn[a][n];return e(Vn(i))}re(n,a),e(l(l({},ee),{},{icon:m.showMissingIcons&&n?O("missingIconAbstract")||{}:{}}))})}var ba=function(){},Yn=m.measurePerformance&&cn&&cn.mark&&cn.measure?cn:{mark:ba,measure:ba},Q='FA "6.4.2"',ie=function(a){return Yn.mark("".concat(Q," ").concat(a," begins")),function(){return Za(a)}},Za=function(a){Yn.mark("".concat(Q," ").concat(a," ends")),Yn.measure("".concat(Q," ").concat(a),"".concat(Q," ").concat(a," begins"),"".concat(Q," ").concat(a," ends"))},ta={begin:ie,end:Za},hn=function(){};function ha(n){var a=n.getAttribute?n.getAttribute(U):null;return typeof a=="string"}function oe(n){var a=n.getAttribute?n.getAttribute(Xn):null,t=n.getAttribute?n.getAttribute(Bn):null;return a&&t}function se(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(m.replacementClass)}function fe(){if(m.autoReplaceSvg===!0)return yn.replace;var n=yn[m.autoReplaceSvg];return n||yn.replace}function ce(n){return b.createElementNS("http://www.w3.org/2000/svg",n)}function le(n){return b.createElement(n)}function nt(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,e=t===void 0?n.tag==="svg"?ce:le:t;if(typeof n=="string")return b.createTextNode(n);var r=e(n.tag);Object.keys(n.attributes||[]).forEach(function(i){r.setAttribute(i,n.attributes[i])});var o=n.children||[];return o.forEach(function(i){r.appendChild(nt(i,{ceFn:e}))}),r}function ue(n){var a=" ".concat(n.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var yn={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(r){t.parentNode.insertBefore(nt(r),t)}),t.getAttribute(U)===null&&m.keepOriginalSource){var e=b.createComment(ue(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(a){var t=a[0],e=a[1];if(~Kn(t).indexOf(m.replacementClass))return yn.replace(a);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var o=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var i=e.map(function(s){return fn(s)}).join(`
`);t.setAttribute(U,""),t.innerHTML=i}};function ya(n){n()}function at(n,a){var t=typeof a=="function"?a:hn;if(n.length===0)t();else{var e=ya;m.mutateApproach===gt&&(e=R.requestAnimationFrame||ya),e(function(){var r=fe(),o=ta.begin("mutate");n.map(r),o(),t()})}}var ea=!1;function tt(){ea=!0}function jn(){ea=!1}var wn=null;function ka(n){if(ca&&m.observeMutations){var a=n.treeCallback,t=a===void 0?hn:a,e=n.nodeCallback,r=e===void 0?hn:e,o=n.pseudoElementsCallback,i=o===void 0?hn:o,s=n.observeMutationsRoot,f=s===void 0?b:s;wn=new ca(function(u){if(!ea){var c=F();K(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ha(d.addedNodes[0])&&(m.searchPseudoElements&&i(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&ha(d.target)&&~wt.indexOf(d.attributeName))if(d.attributeName==="class"&&oe(d.target)){var v=Cn(Kn(d.target)),g=v.prefix,x=v.iconName;d.target.setAttribute(Xn,g||c),x&&d.target.setAttribute(Bn,x)}else se(d.target)&&r(d.target)})}}),I&&wn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function me(){wn&&wn.disconnect()}function de(n){var a=n.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(e,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(e[i]=s.join(":").trim()),e},{})),t}function ve(n){var a=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),e=n.innerText!==void 0?n.innerText.trim():"",r=Cn(Kn(n));return r.prefix||(r.prefix=F()),a&&t&&(r.prefix=a,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Wt(r.prefix,n.innerText)||Zn(r.prefix,Tn(n.innerText))),!r.iconName&&m.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function ge(n){var a=K(n.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),t=n.getAttribute("title"),e=n.getAttribute("data-fa-title-id");return m.autoA11y&&(t?a["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||rn()):(a["aria-hidden"]="true",a.focusable="false")),a}function pe(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xa(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=ve(n),e=t.iconName,r=t.prefix,o=t.rest,i=ge(n),s=Rn("parseNodeAttributes",{},n),f=a.styleParser?de(n):[];return l({iconName:e,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var be=S.styles;function et(n){var a=m.autoReplaceSvg==="nest"?xa(n,{styleParser:!1}):xa(n);return~a.extra.classes.indexOf(Va)?O("generateLayersText",n,a):O("generateSvgReplacementMutation",n,a)}var V=new Set;qn.map(function(n){V.add("fa-".concat(n))});Object.keys(nn[p]).map(V.add.bind(V));Object.keys(nn[h]).map(V.add.bind(V));V=on(V);function wa(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var t=b.documentElement.classList,e=function(d){return t.add("".concat(la,"-").concat(d))},r=function(d){return t.remove("".concat(la,"-").concat(d))},o=m.autoFetchSvg?V:qn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(be));o.includes("fa")||o.push("fa");var i=[".".concat(Va,":not([").concat(U,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(U,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=K(n.querySelectorAll(i))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=ta.begin("onTree"),u=s.reduce(function(c,d){try{var v=et(d);v&&c.push(v)}catch(g){Fa||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(v){at(v,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),f(),c()})}).catch(function(v){f(),d(v)})})}function he(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;et(n).then(function(t){t&&at([t],a)})}function ye(n){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:Fn(a||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Fn(r||{})),n(e,l(l({},t),{},{mask:r}))}}var ke=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,r=e===void 0?N:e,o=t.symbol,i=o===void 0?!1:o,s=t.mask,f=s===void 0?null:s,u=t.maskId,c=u===void 0?null:u,d=t.title,v=d===void 0?null:d,g=t.titleId,x=g===void 0?null:g,C=t.classes,L=C===void 0?[]:C,E=t.attributes,k=E===void 0?{}:E,w=t.styles,M=w===void 0?{}:w;if(a){var _=a.prefix,D=a.iconName,Y=a.icon;return Ln(l({type:"icon"},a),function(){return W("beforeDOMElementCreation",{iconDefinition:a,params:t}),m.autoA11y&&(v?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(x||rn()):(k["aria-hidden"]="true",k.focusable="false")),aa({icons:{main:Vn(Y),mask:f?Vn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:D,transform:l(l({},N),r),symbol:i,title:v,maskId:c,titleId:x,extra:{attributes:k,styles:M,classes:L}})})}},xe={mixout:function(){return{icon:ye(ke)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=wa,t.nodeCallback=he,t}}},provides:function(a){a.i2svg=function(t){var e=t.node,r=e===void 0?b:e,o=t.callback,i=o===void 0?function(){}:o;return wa(r,i)},a.generateSvgReplacementMutation=function(t,e){var r=e.iconName,o=e.title,i=e.titleId,s=e.prefix,f=e.transform,u=e.symbol,c=e.mask,d=e.maskId,v=e.extra;return new Promise(function(g,x){Promise.all([Dn(r,s),c.iconName?Dn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var L=Wn(C,2),E=L[0],k=L[1];g([t,aa({icons:{main:E,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:o,titleId:i,extra:v,watchable:!0})])}).catch(x)})},a.generateAbstractIcon=function(t){var e=t.children,r=t.attributes,o=t.main,i=t.transform,s=t.styles,f=_n(s);f.length>0&&(r.style=f);var u;return Qn(i)&&(u=O("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),e.push(u||o.icon),{children:e,attributes:r}}}},we={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,o=r===void 0?[]:r;return Ln({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:t,params:e});var i=[];return t(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(on(o)).join(" ")},children:i}]})}}}},_e={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,o=r===void 0?null:r,i=e.classes,s=i===void 0?[]:i,f=e.attributes,u=f===void 0?{}:f,c=e.styles,d=c===void 0?{}:c;return Ln({type:"counter",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:e}),te({content:t.toString(),title:o,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(on(s))}})})}}}},Ae={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,o=r===void 0?N:r,i=e.title,s=i===void 0?null:i,f=e.classes,u=f===void 0?[]:f,c=e.attributes,d=c===void 0?{}:c,v=e.styles,g=v===void 0?{}:v;return Ln({type:"text",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:e}),pa({content:t,transform:l(l({},N),o),title:s,extra:{attributes:d,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(on(u))}})})}}},provides:function(a){a.generateLayersText=function(t,e){var r=e.title,o=e.transform,i=e.extra,s=null,f=null;if(Ta){var u=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/u,f=c.height/u}return m.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,pa({content:t.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Ce=new RegExp('"',"ug"),_a=[1105920,1112319];function Le(n){var a=n.replace(Ce,""),t=Vt(a,0),e=t>=_a[0]&&t<=_a[1],r=a.length===2?a[0]===a[1]:!1;return{value:Tn(r?a[0]:a),isSecondary:e||r}}function Aa(n,a){var t="".concat(vt).concat(a.replace(":","-"));return new Promise(function(e,r){if(n.getAttribute(t)!==null)return e();var o=K(n.children),i=o.filter(function(Y){return Y.getAttribute(In)===a})[0],s=R.getComputedStyle(n,a),f=s.getPropertyValue("font-family").match(yt),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!f)return n.removeChild(i),e();if(f&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?h:p,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?an[v][f[2].toLowerCase()]:kt[v][u],x=Le(d),C=x.value,L=x.isSecondary,E=f[0].startsWith("FontAwesome"),k=Zn(g,C),w=k;if(E){var M=Gt(C);M.iconName&&M.prefix&&(k=M.iconName,g=M.prefix)}if(k&&!L&&(!i||i.getAttribute(Xn)!==g||i.getAttribute(Bn)!==w)){n.setAttribute(t,w),i&&n.removeChild(i);var _=pe(),D=_.extra;D.attributes[In]=a,Dn(k,g).then(function(Y){var Sn=aa(l(l({},_),{},{icons:{main:Y,mask:na()},prefix:g,iconName:w,extra:D,watchable:!0})),T=b.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?n.insertBefore(T,n.firstChild):n.appendChild(T),T.outerHTML=Sn.map(function(rt){return fn(rt)}).join(`
`),n.removeAttribute(t),e()}).catch(r)}else e()}else e()})}function Se(n){return Promise.all([Aa(n,"::before"),Aa(n,"::after")])}function Ee(n){return n.parentNode!==document.head&&!~pt.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(In)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Ca(n){if(I)return new Promise(function(a,t){var e=K(n.querySelectorAll("*")).filter(Ee).map(Se),r=ta.begin("searchPseudoElements");tt(),Promise.all(e).then(function(){r(),jn(),a()}).catch(function(){r(),jn(),t()})})}var Me={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ca,t}}},provides:function(a){a.pseudoElements2svg=function(t){var e=t.node,r=e===void 0?b:e;m.searchPseudoElements&&Ca(r)}}},La=!1,Ne={mixout:function(){return{dom:{unwatch:function(){tt(),La=!0}}}},hooks:function(){return{bootstrap:function(){ka(Rn("mutationObserverCallbacks",{}))},noAuto:function(){me()},watch:function(t){var e=t.observeMutationsRoot;La?jn():ka(Rn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Sa=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},t)},ze={mixout:function(){return{parse:{transform:function(t){return Sa(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-transform");return r&&(t.transform=Sa(r)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var e=t.main,r=t.transform,o=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(c)},v={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:d,path:v};return{tag:"g",attributes:l({},g.outer),children:[{tag:"g",attributes:l({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),g.path)}]}]}}}},zn={x:0,y:0,width:"100%",height:"100%"};function Ea(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||a)&&(n.attributes.fill="black"),n}function Pe(n){return n.tag==="g"?n.children:[n]}var Oe={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-mask"),o=r?Cn(r.split(" ").map(function(i){return i.trim()})):na();return o.prefix||(o.prefix=F()),t.mask=o,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var e=t.children,r=t.attributes,o=t.main,i=t.mask,s=t.maskId,f=t.transform,u=o.width,c=o.icon,d=i.width,v=i.icon,g=zt({transform:f,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:l(l({},zn),{},{fill:"white"})},C=c.children?{children:c.children.map(Ea)}:{},L={tag:"g",attributes:l({},g.inner),children:[Ea(l({tag:c.tag,attributes:l(l({},c.attributes),g.path)},C))]},E={tag:"g",attributes:l({},g.outer),children:[L]},k="mask-".concat(s||rn()),w="clip-".concat(s||rn()),M={tag:"mask",attributes:l(l({},zn),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,E]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Pe(v)},M]};return e.push(_,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(k,")")},zn)}),{children:e,attributes:r}}}},Ie={provides:function(a){var t=!1;R.matchMedia&&(t=R.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Te={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return t.symbol=o,t}}}},He=[It,xe,we,_e,Ae,Me,Ne,ze,Oe,Ie,Te];qt(He,{mixoutsTo:A});A.noAuto;A.config;var Re=A.library,Fe=A.dom;A.parse;A.findIconDefinition;A.toHtml;A.icon;A.layer;A.text;A.counter;var Ve={prefix:"fal",iconName:"right",icon:[448,512,[11157,"arrow-alt-right"],"f356","M416 253.7l0 4.6c0 4.4-1.8 8.6-5 11.6L261.2 412.5c-2.3 2.2-5.4 3.5-8.7 3.5c-6.9 0-12.6-5.6-12.6-12.6l0-83.4c0-8.8-7.2-16-16-16L48 304c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l176 0c8.8 0 16-7.2 16-16l0-83.4c0-6.9 5.6-12.6 12.6-12.6c3.2 0 6.3 1.2 8.7 3.5L411 242.1c3.2 3 5 7.2 5 11.6zM252.6 448c11.4 0 22.5-4.4 30.7-12.3L433.1 293c9.5-9.1 14.9-21.6 14.9-34.8l0-4.6c0-13.1-5.4-25.7-14.9-34.8L283.3 76.3C275 68.4 264 64 252.6 64C228 64 208 84 208 108.6l0 67.4L48 176c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l160 0 0 67.4c0 24.6 20 44.6 44.6 44.6z"]},De={prefix:"fal",iconName:"list-tree",icon:[512,512,[],"e1d2","M32 112H64V80H32v32zM0 72C0 58.7 10.7 48 24 48H72c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H64v96h64v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-8H64V384c0 8.8 7.2 16 16 16h48v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-8H80c-26.5 0-48-21.5-48-48V256 144H24c-13.3 0-24-10.7-24-24V72zM160 96c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zM288 256c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16zm0 160c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16zM160 432h32V400H160v32zm0-192v32h32V240H160z"]},Ye={prefix:"fal",iconName:"file-user",icon:[384,512,[],"f65c","M320 480H304V464c0-44.2-35.8-80-80-80H160c-44.2 0-80 35.8-80 80v16H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H192V144c0 26.5 21.5 48 48 48H352V448c0 17.7-14.3 32-32 32zm-48-16v16H112V464c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48zM240 160c-8.8 0-16-7.2-16-16V32.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4H240zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},je={prefix:"fal",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 96c-17.7 0-32 14.3-32 32v39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H64zM32 207.6V384c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V207.6L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},$e={prefix:"fal",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235V432c0 44.2 35.8 80 80 80H432c44.2 0 80-35.8 80-80V235l37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432V206.7L288 37.3 480 206.7V432c0 26.5-21.5 48-48 48H368V320c0-17.7-14.3-32-32-32H240c-17.7 0-32 14.3-32 32V480H144c-26.5 0-48-21.5-48-48zm144 48V320h96V480H240z"]},Ue=$e,We={prefix:"fal",iconName:"hand-wave",icon:[512,512,[],"e1a7","M354.3 95.8c8.7-1.2 14.8-9.4 13.6-18.1l-1.2-8.5c-5-35.2-32.7-62.9-67.9-67.9L290.3 .2c-8.7-1.2-16.9 4.8-18.1 13.6s4.8 16.9 13.6 18.1l8.5 1.2c21.1 3 37.7 19.6 40.7 40.7l1.2 8.5c1.3 8.7 9.4 14.8 18.1 13.6zM13.7 368.2C5 369.4-1.1 377.5 .2 386.3l1.2 8.5c5 35.2 32.7 62.9 67.9 67.9l8.5 1.2c8.7 1.2 16.9-4.8 18.1-13.6s-4.8-16.9-13.6-18.1L73.8 431c-21.1-3-37.7-19.6-40.7-40.7l-1.2-8.5c-1.2-8.7-9.4-14.8-18.1-13.6zM150.4 62.4c-21-10.8-47.5-7.3-65.1 10.3s-21 44.1-10.3 65.1c-8.7 2.6-16.8 7.3-23.7 14.1c-21.9 21.9-21.9 57.3 0 79.2l9.5 9.5c-7.6 2.7-14.8 7.1-20.9 13.2c-21.8 21.8-21.9 57.2-.2 79.1L162.9 457.1c34.8 35.1 82.2 54.9 131.7 54.9C397 512 480 429 480 326.6l0-13.8 0 0 0-.7 0 0L480 152c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 11L243.7 38.7c-21.9-21.9-57.3-21.9-79.2 0c-6.8 6.8-11.5 15-14.1 23.7zM108 95.3c9.4-9.4 24.6-9.4 33.9 0l8.8 8.8 .1 .1L288 241.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L187.1 95.3l-.1-.1c-9.3-9.4-9.3-24.5 .1-33.9c9.4-9.4 24.6-9.4 33.9 0L372.7 212.9c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-49.6c0-13.3 10.7-24 24-24s24 10.7 24 24l0 160 0 0 0 .7 0 0 0 13.8C448 411.3 379.3 480 294.6 480c-40.9 0-80.1-16.4-109-45.4L62.6 310.3c-9.3-9.4-9.3-24.6 .1-34c9.4-9.4 24.7-9.4 34.1 0l36 36 .1 .1 42.1 42.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-42.2-42.2L105.6 240l-.1-.1L74 208.4c-9.4-9.4-9.4-24.6 0-33.9c9.3-9.3 24.4-9.4 33.8-.1L231.4 297.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-46.5-46.5-.1-.1L108 129.2c-9.4-9.4-9.4-24.6 0-33.9z"]},Ge={prefix:"fal",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"]},Xe={prefix:"fal",iconName:"hashtag",icon:[448,512,[62098],"23","M207.6 51.6c2-8.6-3.4-17.2-12-19.2s-17.2 3.4-19.2 12l-23 99.6H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h98L109.1 336H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h85.7L80.4 460.4c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l23-99.6H261.7l-21.3 92.4c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l23-99.6H400c8.8 0 16-7.2 16-16s-7.2-16-16-16H302l36.9-160H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H346.3l21.3-92.4c2-8.6-3.4-17.2-12-19.2s-17.2 3.4-19.2 12l-23 99.6H186.3l21.3-92.4zM178.9 176H306L269.1 336H142l36.9-160z"]},Be={prefix:"fal",iconName:"check",icon:[448,512,[10003,10004],"f00c","M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z"]},qe={prefix:"fal",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M96 160H64V64C64 28.7 92.7 0 128 0H357.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3V160H416V90.5c0-8.5-3.4-16.6-9.4-22.6L380.1 41.4c-6-6-14.1-9.4-22.6-9.4H128c-17.7 0-32 14.3-32 32v96zm352 64H64c-17.7 0-32 14.3-32 32V384H64V352c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32v32h32V256c0-17.7-14.3-32-32-32zm0 192v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V416H32c-17.7 0-32-14.3-32-32V256c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V384c0 17.7-14.3 32-32 32H448zM96 352l0 128H416V352H96zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Ke={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Qe={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Je={prefix:"fas",iconName:"file-user",icon:[384,512,[],"f65c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 432c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z"]},Ze={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},nr=Ze,ar={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},tr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},er={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},rr={prefix:"far",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M336 192c0-79.5-64.5-144-144-144S48 112.5 48 192c0 12.4 4.5 31.6 15.3 57.2c10.5 24.8 25.4 52.2 42.5 79.9c28.5 46.2 61.5 90.8 86.2 122.6c24.8-31.8 57.8-76.4 86.2-122.6c17.1-27.7 32-55.1 42.5-79.9C331.5 223.6 336 204.4 336 192zm48 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-112 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z"]},ir={prefix:"fad",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0",["M0 112V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V112c0 15.1-7.1 29.3-19.2 38.4L275.2 313.6c-11.4 8.5-27 8.5-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112z","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48z"]]},or={prefix:"fab",iconName:"github-alt",icon:[480,512,[],"f113","M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"]},sr={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},fr={prefix:"fab",iconName:"codepen",icon:[512,512,[],"f1cb","M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"]},cr={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},lr={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Re.add(fr,lr,or,cr,sr,ir,Ke,nr,Je,Qe,tr,ar,Be,je,Ye,We,Xe,Ue,De,Ge,qe,Ve,er,rr);Fe.watch();console.log(` ___  ___  ___  ________  _______           _____ ______   _______   ___
|\\  \\|\\  \\|\\  \\|\\   __  \\|\\  ___ \\         |\\   _ \\  _   \\|\\  ___ \\ |\\  \\
\\ \\  \\\\\\  \\ \\  \\ \\  \\|\\  \\ \\   __/|        \\ \\  \\\\\\__\\ \\  \\ \\   __/|\\ \\  \\     
 \\ \\   __  \\ \\  \\ \\   _  _\\ \\  \\_|/__       \\ \\  \\\\|__| \\  \\ \\  \\_|/_\\ \\  \\    
  \\ \\  \\ \\  \\ \\  \\ \\  \\\\  \\\\ \\  \\_|\\ \\       \\ \\  \\    \\ \\  \\ \\  \\_|\\ \\ \\__\\   
   \\ \\__\\ \\__\\ \\__\\ \\__\\\\ _\\\\ \\_______\\       \\ \\__\\    \\ \\__\\ \\_______\\|__|   
    \\|__|\\|__|\\|__|\\|__|\\|__|\\|_______|        \\|__|     \\|__|\\|_______|   ___ 
                                                                          |\\__\\
                                                                          \\|__|`);const $n=document.querySelector(".site-header"),Ma=document.querySelector(".site-header--container"),ur=document.querySelector(".site-header--hamburger");let Na=0,Un;document.addEventListener("scroll",n=>{Un&&clearTimeout(Un),Na<window.scrollY&&window.scrollY>0?$n?.classList.add("is-collapsed"):$n?.classList.remove("is-collapsed"),Na=window.scrollY});ur?.addEventListener("openmenu",n=>{const{detail:{isOpen:a}}=n;a?Ma?.classList.add("is-open"):Ma?.classList.remove("is-open")});document.addEventListener("scrollend",()=>{Un=setTimeout(()=>{$n?.classList.remove("is-collapsed")},2e3)});class mr extends HTMLElement{constructor(){super();const a=this.querySelector("button.hamburger-toggle--button");a?.addEventListener("click",()=>{this.dispatchEvent(dr(!a.classList.contains("is-active"))),a.classList.toggle("is-active")})}}function dr(n){return new CustomEvent("openmenu",{detail:{isOpen:n}})}customElements.define("hamburger-toggle",mr);
