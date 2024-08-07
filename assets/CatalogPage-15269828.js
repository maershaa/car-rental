import{g as we,r as c,R as Te,a as ie,b as se,s as H,c as y,d as ae,_ as U,e as f,j as s,f as _,h as Y,C as je,k as te,l as oe,m as Be,n as ne,o as V,q as Me,B as be,t as A,v as Le,w as _e,x as Fe,y as Oe,p as q,z as Ae,A as De,D as We,E as ve,F as He,i as Ue,G as Ve,u as Q,H as qe,I as Ge}from"./index-14ad37ec.js";import{b as Ke,s as Ye,a as Xe}from"./cars.selectors-739f7957.js";var ye={exports:{}},Ze="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qe=Ze,Je=Qe;function Ce(){}function Ee(){}Ee.resetWarningCache=Ce;var et=function(){function e(n,r,i,a,l,d){if(d!==Je){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ee,resetWarningCache:Ce};return o.PropTypes=o,o};ye.exports=et();var tt=ye.exports;const ce=we(tt);function re(...e){return e.reduce((t,o)=>o==null?t:function(...r){t.apply(this,r),o.apply(this,r)},()=>{})}function ot(e,t=166){let o;function n(...r){const i=()=>{e.apply(this,r)};clearTimeout(o),o=setTimeout(i,t)}return n.clear=()=>{clearTimeout(o)},n}function nt(e,t){return()=>null}function rt(e,t){var o,n;return c.isValidElement(e)&&t.indexOf((o=e.type.muiName)!=null?o:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function j(e){return e&&e.ownerDocument||document}function X(e){return j(e).defaultView||window}function it(e,t){return()=>null}let de=0;function st(e){const[t,o]=c.useState(e),n=e||t;return c.useEffect(()=>{t==null&&(de+=1,o(`mui-${de}`))},[t]),n}const ue=Te["useId".toString()];function at(e){if(ue!==void 0){const t=ue();return e??t}return st(e)}function lt(e,t,o,n,r){return null}function ct(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function dt(e){return ie("MuiSvgIcon",e)}se("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const ut=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],pt=e=>{const{color:t,fontSize:o,classes:n}=e,r={root:["root",t!=="inherit"&&`color${y(t)}`,`fontSize${y(o)}`]};return Y(r,dt,n)},ft=H("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${y(o.color)}`],t[`fontSize${y(o.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var o,n,r,i,a,l,d,p,x,g,b,m,u;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(n=o.create)==null?void 0:n.call(o,"fill",{duration:(r=e.transitions)==null||(r=r.duration)==null?void 0:r.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(a=i.pxToRem)==null?void 0:a.call(i,20))||"1.25rem",medium:((l=e.typography)==null||(d=l.pxToRem)==null?void 0:d.call(l,24))||"1.5rem",large:((p=e.typography)==null||(x=p.pxToRem)==null?void 0:x.call(p,35))||"2.1875rem"}[t.fontSize],color:(g=(b=(e.vars||e).palette)==null||(b=b[t.color])==null?void 0:b.main)!=null?g:{action:(m=(e.vars||e).palette)==null||(m=m.action)==null?void 0:m.active,disabled:(u=(e.vars||e).palette)==null||(u=u.action)==null?void 0:u.disabled,inherit:void 0}[t.color]}}),Se=c.forwardRef(function(t,o){const n=ae({props:t,name:"MuiSvgIcon"}),{children:r,className:i,color:a="inherit",component:l="svg",fontSize:d="medium",htmlColor:p,inheritViewBox:x=!1,titleAccess:g,viewBox:b="0 0 24 24"}=n,m=U(n,ut),u=c.isValidElement(r)&&r.type==="svg",C=f({},n,{color:a,component:l,fontSize:d,instanceFontSize:t.fontSize,inheritViewBox:x,viewBox:b,hasSvgAsChild:u}),I={};x||(I.viewBox=b);const P=pt(C);return s.jsxs(ft,f({as:l,className:_(P.root,i),focusable:"false",color:p,"aria-hidden":g?void 0:!0,role:g?"img":void 0,ref:o},I,m,u&&r.props,{ownerState:C,children:[u?r.props.children:r,g?s.jsx("title",{children:g}):null]}))});Se.muiName="SvgIcon";const pe=Se;function gt(e,t){function o(n,r){return s.jsx(pe,f({"data-testid":`${t}Icon`,ref:r},n,{children:e}))}return o.muiName=pe.muiName,c.memo(c.forwardRef(o))}const xt={configure:e=>{je.configure(e)}},mt=Object.freeze(Object.defineProperty({__proto__:null,capitalize:y,createChainedFunction:re,createSvgIcon:gt,debounce:ot,deprecatedPropType:nt,isMuiElement:rt,ownerDocument:j,ownerWindow:X,requirePropFactory:it,setRef:te,unstable_ClassNameGenerator:xt,unstable_useEnhancedEffect:oe,unstable_useId:at,unsupportedProp:lt,useControlled:Be,useEventCallback:ne,useForkRef:V,useIsFocusVisible:Me},Symbol.toStringTag,{value:"Module"}));function ht(e){return typeof e=="string"}function bt(e,t,o){return e===void 0||ht(e)?t:f({},t,{ownerState:f({},t.ownerState,o)})}const vt={disableDefaultClasses:!1},yt=c.createContext(vt);function Ct(e){const{disableDefaultClasses:t}=c.useContext(yt);return o=>t?"":e(o)}function Ie(e,t=[]){if(e===void 0)return{};const o={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!t.includes(n)).forEach(n=>{o[n]=e[n]}),o}function Et(e,t,o){return typeof e=="function"?e(t,o):e}function fe(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(o=>!(o.match(/^on[A-Z]/)&&typeof e[o]=="function")).forEach(o=>{t[o]=e[o]}),t}function St(e){const{getSlotProps:t,additionalProps:o,externalSlotProps:n,externalForwardedProps:r,className:i}=e;if(!t){const m=_(o==null?void 0:o.className,i,r==null?void 0:r.className,n==null?void 0:n.className),u=f({},o==null?void 0:o.style,r==null?void 0:r.style,n==null?void 0:n.style),C=f({},o,r,n);return m.length>0&&(C.className=m),Object.keys(u).length>0&&(C.style=u),{props:C,internalRef:void 0}}const a=Ie(f({},r,n)),l=fe(n),d=fe(r),p=t(a),x=_(p==null?void 0:p.className,o==null?void 0:o.className,i,r==null?void 0:r.className,n==null?void 0:n.className),g=f({},p==null?void 0:p.style,o==null?void 0:o.style,r==null?void 0:r.style,n==null?void 0:n.style),b=f({},p,o,d,l);return x.length>0&&(b.className=x),Object.keys(g).length>0&&(b.style=g),{props:b,internalRef:p.ref}}const It=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ge(e){var t;const{elementType:o,externalSlotProps:n,ownerState:r,skipResolvingSlotProps:i=!1}=e,a=U(e,It),l=i?{}:Et(n,r),{props:d,internalRef:p}=St(f({},a,{externalSlotProps:l})),x=V(p,l==null?void 0:l.ref,(t=e.additionalProps)==null?void 0:t.ref);return bt(o,f({},d,{ref:x}),r)}function Rt(e){return ie("MuiIconButton",e)}const kt=se("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Nt=kt,$t=["edge","children","className","color","disabled","disableFocusRipple","size"],zt=e=>{const{classes:t,disabled:o,color:n,edge:r,size:i}=e,a={root:["root",o&&"disabled",n!=="default"&&`color${y(n)}`,r&&`edge${y(r)}`,`size${y(i)}`]};return Y(a,Rt,t)},Pt=H(be,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="default"&&t[`color${y(o.color)}`],o.edge&&t[`edge${y(o.edge)}`],t[`size${y(o.size)}`]]}})(({theme:e,ownerState:t})=>f({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:A(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var o;const n=(o=(e.vars||e).palette)==null?void 0:o[t.color];return f({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&f({color:n==null?void 0:n.main},!t.disableRipple&&{"&:hover":f({},n&&{backgroundColor:e.vars?`rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:A(n.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Nt.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),wt=c.forwardRef(function(t,o){const n=ae({props:t,name:"MuiIconButton"}),{edge:r=!1,children:i,className:a,color:l="default",disabled:d=!1,disableFocusRipple:p=!1,size:x="medium"}=n,g=U(n,$t),b=f({},n,{edge:r,color:l,disabled:d,disableFocusRipple:p,size:x}),m=zt(b);return s.jsx(Pt,f({className:_(m.root,a),centerRipple:!0,focusRipple:!p,disabled:d,ref:o},g,{ownerState:b,children:i}))}),Tt=wt,Re="base";function jt(e){return`${Re}--${e}`}function Bt(e,t){return`${Re}-${e}-${t}`}function ke(e,t){const o=Le[t];return o?jt(o):Bt(e,t)}function Mt(e,t){const o={};return t.forEach(n=>{o[n]=ke(e,n)}),o}const Lt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function _t(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ft(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Ot(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ft(e))}function At(e){const t=[],o=[];return Array.from(e.querySelectorAll(Lt)).forEach((n,r)=>{const i=_t(n);i===-1||!Ot(n)||(i===0?t.push(n):o.push({documentOrder:r,tabIndex:i,node:n}))}),o.sort((n,r)=>n.tabIndex===r.tabIndex?n.documentOrder-r.documentOrder:n.tabIndex-r.tabIndex).map(n=>n.node).concat(t)}function Dt(){return!0}function Wt(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:r=!1,getTabbable:i=At,isEnabled:a=Dt,open:l}=e,d=c.useRef(!1),p=c.useRef(null),x=c.useRef(null),g=c.useRef(null),b=c.useRef(null),m=c.useRef(!1),u=c.useRef(null),C=V(t.ref,u),I=c.useRef(null);c.useEffect(()=>{!l||!u.current||(m.current=!o)},[o,l]),c.useEffect(()=>{if(!l||!u.current)return;const h=j(u.current);return u.current.contains(h.activeElement)||(u.current.hasAttribute("tabIndex")||u.current.setAttribute("tabIndex","-1"),m.current&&u.current.focus()),()=>{r||(g.current&&g.current.focus&&(d.current=!0,g.current.focus()),g.current=null)}},[l]),c.useEffect(()=>{if(!l||!u.current)return;const h=j(u.current),$=E=>{I.current=E,!(n||!a()||E.key!=="Tab")&&h.activeElement===u.current&&E.shiftKey&&(d.current=!0,x.current&&x.current.focus())},z=()=>{const E=u.current;if(E===null)return;if(!h.hasFocus()||!a()||d.current){d.current=!1;return}if(E.contains(h.activeElement)||n&&h.activeElement!==p.current&&h.activeElement!==x.current)return;if(h.activeElement!==b.current)b.current=null;else if(b.current!==null)return;if(!m.current)return;let R=[];if((h.activeElement===p.current||h.activeElement===x.current)&&(R=i(u.current)),R.length>0){var B,k;const L=!!((B=I.current)!=null&&B.shiftKey&&((k=I.current)==null?void 0:k.key)==="Tab"),M=R[0],F=R[R.length-1];typeof M!="string"&&typeof F!="string"&&(L?F.focus():M.focus())}else E.focus()};h.addEventListener("focusin",z),h.addEventListener("keydown",$,!0);const w=setInterval(()=>{h.activeElement&&h.activeElement.tagName==="BODY"&&z()},50);return()=>{clearInterval(w),h.removeEventListener("focusin",z),h.removeEventListener("keydown",$,!0)}},[o,n,r,a,l,i]);const P=h=>{g.current===null&&(g.current=h.relatedTarget),m.current=!0,b.current=h.target;const $=t.props.onFocus;$&&$(h)},N=h=>{g.current===null&&(g.current=h.relatedTarget),m.current=!0};return s.jsxs(c.Fragment,{children:[s.jsx("div",{tabIndex:l?0:-1,onFocus:N,ref:p,"data-testid":"sentinelStart"}),c.cloneElement(t,{ref:C,onFocus:P}),s.jsx("div",{tabIndex:l?0:-1,onFocus:N,ref:x,"data-testid":"sentinelEnd"})]})}function Ht(e){return typeof e=="function"?e():e}const Ut=c.forwardRef(function(t,o){const{children:n,container:r,disablePortal:i=!1}=t,[a,l]=c.useState(null),d=V(c.isValidElement(n)?n.ref:null,o);if(oe(()=>{i||l(Ht(r)||document.body)},[r,i]),oe(()=>{if(a&&!i)return te(o,a),()=>{te(o,null)}},[o,a,i]),i){if(c.isValidElement(n)){const p={ref:d};return c.cloneElement(n,p)}return s.jsx(c.Fragment,{children:n})}return s.jsx(c.Fragment,{children:a&&_e.createPortal(n,a)})});function Vt(e){const t=j(e);return t.body===e?X(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function W(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function xe(e){return parseInt(X(e).getComputedStyle(e).paddingRight,10)||0}function qt(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function me(e,t,o,n,r){const i=[t,o,...n];[].forEach.call(e.children,a=>{const l=i.indexOf(a)===-1,d=!qt(a);l&&d&&W(a,r)})}function J(e,t){let o=-1;return e.some((n,r)=>t(n)?(o=r,!0):!1),o}function Gt(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Vt(n)){const a=ct(j(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${xe(n)+a}px`;const l=j(n).querySelectorAll(".mui-fixed");[].forEach.call(l,d=>{o.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${xe(d)+a}px`})}let i;if(n.parentNode instanceof DocumentFragment)i=j(n).body;else{const a=n.parentElement,l=X(n);i=(a==null?void 0:a.nodeName)==="HTML"&&l.getComputedStyle(a).overflowY==="scroll"?a:n}o.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{o.forEach(({value:i,el:a,property:l})=>{i?a.style.setProperty(l,i):a.style.removeProperty(l)})}}function Kt(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Yt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&W(t.modalRef,!1);const r=Kt(o);me(o,t.mount,t.modalRef,r,!0);const i=J(this.containers,a=>a.container===o);return i!==-1?(this.containers[i].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:r}),n)}mount(t,o){const n=J(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[n];r.restore||(r.restore=Gt(r,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const r=J(this.containers,a=>a.modals.indexOf(t)!==-1),i=this.containers[r];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(n,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&W(t.modalRef,o),me(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(r,1);else{const a=i.modals[i.modals.length-1];a.modalRef&&W(a.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Xt(e){return typeof e=="function"?e():e}function Zt(e){return e?e.props.hasOwnProperty("in"):!1}const Qt=new Yt;function Jt(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:r=Qt,closeAfterTransition:i=!1,onTransitionEnter:a,onTransitionExited:l,children:d,onClose:p,open:x,rootRef:g}=e,b=c.useRef({}),m=c.useRef(null),u=c.useRef(null),C=V(u,g),[I,P]=c.useState(!x),N=Zt(d);let h=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(h=!1);const $=()=>j(m.current),z=()=>(b.current.modalRef=u.current,b.current.mount=m.current,b.current),w=()=>{r.mount(z(),{disableScrollLock:n}),u.current&&(u.current.scrollTop=0)},E=ne(()=>{const S=Xt(t)||$().body;r.add(z(),S),u.current&&w()}),R=c.useCallback(()=>r.isTopModal(z()),[r]),B=ne(S=>{m.current=S,S&&(x&&R()?w():u.current&&W(u.current,h))}),k=c.useCallback(()=>{r.remove(z(),h)},[h,r]);c.useEffect(()=>()=>{k()},[k]),c.useEffect(()=>{x?E():(!N||!i)&&k()},[x,k,N,i,E]);const L=S=>v=>{var T;(T=S.onKeyDown)==null||T.call(S,v),!(v.key!=="Escape"||v.which===229||!R())&&(o||(v.stopPropagation(),p&&p(v,"escapeKeyDown")))},M=S=>v=>{var T;(T=S.onClick)==null||T.call(S,v),v.target===v.currentTarget&&p&&p(v,"backdropClick")};return{getRootProps:(S={})=>{const v=Ie(e);delete v.onTransitionEnter,delete v.onTransitionExited;const T=f({},v,S);return f({role:"presentation"},T,{onKeyDown:L(T),ref:C})},getBackdropProps:(S={})=>{const v=S;return f({"aria-hidden":!0},v,{onClick:M(v),open:x})},getTransitionProps:()=>{const S=()=>{P(!1),a&&a()},v=()=>{P(!0),l&&l(),i&&k()};return{onEnter:re(S,d==null?void 0:d.props.onEnter),onExited:re(v,d==null?void 0:d.props.onExited)}},rootRef:C,portalRef:B,isTopModal:R,exited:I,hasTransition:N}}const Ne="Modal";function eo(e){return ke(Ne,e)}Mt(Ne,["root","hidden","backdrop"]);const to=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],oo=e=>{const{open:t,exited:o}=e;return Y({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Ct(eo))},no=c.forwardRef(function(t,o){var n;const{children:r,closeAfterTransition:i=!1,container:a,disableAutoFocus:l=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:p=!1,disablePortal:x=!1,disableRestoreFocus:g=!1,disableScrollLock:b=!1,hideBackdrop:m=!1,keepMounted:u=!1,onBackdropClick:C,open:I,slotProps:P={},slots:N={}}=t,h=U(t,to),$=f({},t,{closeAfterTransition:i,disableAutoFocus:l,disableEnforceFocus:d,disableEscapeKeyDown:p,disablePortal:x,disableRestoreFocus:g,disableScrollLock:b,hideBackdrop:m,keepMounted:u}),{getRootProps:z,getBackdropProps:w,getTransitionProps:E,portalRef:R,isTopModal:B,exited:k,hasTransition:L}=Jt(f({},$,{rootRef:o})),M=f({},$,{exited:k,hasTransition:L}),F=oo(M),D={};if(r.props.tabIndex===void 0&&(D.tabIndex="-1"),L){const{onEnter:O,onExited:G}=E();D.onEnter=O,D.onExited=G}const Z=(n=N.root)!=null?n:"div",S=ge({elementType:Z,externalSlotProps:P.root,externalForwardedProps:h,getSlotProps:z,className:F.root,ownerState:M}),v=N.backdrop,T=ge({elementType:v,externalSlotProps:P.backdrop,getSlotProps:O=>w(f({},O,{onClick:G=>{C&&C(G),O!=null&&O.onClick&&O.onClick(G)}})),className:F.backdrop,ownerState:M});return!u&&!I&&(!L||k)?null:s.jsx(Ut,{ref:R,container:a,disablePortal:x,children:s.jsxs(Z,f({},S,{children:[!m&&v?s.jsx(v,f({},T)):null,s.jsx(Wt,{disableEnforceFocus:d,disableAutoFocus:l,disableRestoreFocus:g,isEnabled:B,open:I,children:c.cloneElement(r,D)})]}))})});function ro(e){return ie("MuiButton",e)}const io=se("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),K=io,so=c.createContext({}),ao=so,lo=c.createContext(void 0),co=lo,uo=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],po=e=>{const{color:t,disableElevation:o,fullWidth:n,size:r,variant:i,classes:a}=e,l={root:["root",i,`${i}${y(t)}`,`size${y(r)}`,`${i}Size${y(r)}`,`color${y(t)}`,o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${y(r)}`],endIcon:["icon","endIcon",`iconSize${y(r)}`]},d=Y(l,ro,a);return f({},a,d)},$e=e=>f({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),fo=H(be,{shouldForwardProp:e=>Fe(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${y(o.color)}`],t[`size${y(o.size)}`],t[`${o.variant}Size${y(o.size)}`],o.color==="inherit"&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var o,n;const r=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],i=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return f({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":f({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:A(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:A(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:A(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":f({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${K.focusVisible}`]:f({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${K.disabled}`]:f({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${A(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(o=(n=e.palette).getContrastText)==null?void 0:o.call(n,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:r,boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${K.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${K.disabled}`]:{boxShadow:"none"}}),go=H("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${y(o.size)}`]]}})(({ownerState:e})=>f({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},$e(e))),xo=H("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${y(o.size)}`]]}})(({ownerState:e})=>f({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},$e(e))),mo=c.forwardRef(function(t,o){const n=c.useContext(ao),r=c.useContext(co),i=Oe(n,t),a=ae({props:i,name:"MuiButton"}),{children:l,color:d="primary",component:p="button",className:x,disabled:g=!1,disableElevation:b=!1,disableFocusRipple:m=!1,endIcon:u,focusVisibleClassName:C,fullWidth:I=!1,size:P="medium",startIcon:N,type:h,variant:$="text"}=a,z=U(a,uo),w=f({},a,{color:d,component:p,disabled:g,disableElevation:b,disableFocusRipple:m,fullWidth:I,size:P,type:h,variant:$}),E=po(w),R=N&&s.jsx(go,{className:E.startIcon,ownerState:w,children:N}),B=u&&s.jsx(xo,{className:E.endIcon,ownerState:w,children:u}),k=r||"";return s.jsxs(fo,f({ownerState:w,className:_(n.className,E.root,x,k),component:p,disabled:g,focusRipple:!m,focusVisibleClassName:_(E.focusVisible,C),ref:o,type:h},z,{classes:E,children:[R,l,B]}))}),ho=mo,bo=q.li`
  margin-bottom: 40px;
  border-radius: 8px;
  max-width: 274px;
  @media (min-width: 768px) {
    margin-bottom: 80px;
    width: calc(150% - 20px);
  }

  @media (min-width: 1280px) {
    width: calc(100% - 60px);
  }

  .custom-image {
    display: block;
    object-fit: cover;
    margin-bottom: 14px;
    border-radius: 14px;
    width: 274px;
    height: 268px;
  }

  .carDetails {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .details {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .model {
    font-weight: bold;
    color: #3470ff;
  }

  .cost {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
  }

  .additionalInfo {
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: var(--additionalInfo-color);
    max-width: 270px;
    max-height: 40px;
    overflow: hidden;
    word-spacing: 2px;

    margin-bottom: 28px;
  }

  .LearnMoreLink {
    cursor: pointer;

    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    text-align: center;

    background: #3470ff;
    border-radius: 12px;
    padding: 12px;
    width: 274px;
    height: 44px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    .seeMoreLink {
      font-size: 16px;
      line-height: 1.125;
    }
  }
`,vo=({handleOpen:e})=>s.jsx(s.Fragment,{children:s.jsx(ho,{onClick:e,children:"Learn More"})}),yo=q.div`
  /* margin-bottom: 40px;
  border-radius: 8px;
  max-width: 274px;
  @media (min-width: 768px) {
    margin-bottom: 80px;
    width: calc(150% - 20px);
  }

  @media (min-width: 1280px) {
    width: calc(100% - 60px);
  } */

  /* .modal{
    position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 724px;  
  } */

  .modal-content{
   width: 400px;
   height:720px  ;   
   font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    border-radius: 8px;
    padding: 24px;  
  }
  
  .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

.modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      margin-bottom: 4px;
    }
  .custom-image {
    display: block;
    object-fit: cover;
    margin-bottom: 14px;
    border-radius: 14px;
    width: 274px;
    height: 268px;
  }

  .carDetails {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .details {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .model {
    font-weight: bold;
    color: #3470ff;
  }

  .cost {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
  }

  .additionalInfo {
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: var(--additionalInfo-color);
    max-width: 270px;
    max-height: 40px;
    overflow: hidden;
    word-spacing: 2px;

    margin-bottom: 28px;
  }

  .LearnMoreLink {
    cursor: pointer;

    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    text-align: center;

    background: #3470ff;
    border-radius: 12px;
    padding: 12px;
    width: 274px;
    height: 44px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    .seeMoreLink {
      font-size: 16px;
      line-height: 1.125;
    }
  }
`;var le={},ee={};const Co=Ae(mt);var he;function Eo(){return he||(he=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Co}(ee)),ee}var So=De;Object.defineProperty(le,"__esModule",{value:!0});var ze=le.default=void 0,Io=So(Eo()),Ro=s;ze=le.default=(0,Io.default)((0,Ro.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const ko=({open:e,handleClose:t,id:o,img:n,brand:r,model:i,year:a,cost:l,functionalities:d,rentalCompany:p,address:x,type:g,description:b,accessories:m})=>s.jsx(yo,{children:s.jsx(no,{className:"modal",open:e,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",slots:{backdrop:No},children:s.jsxs($o,{className:"modal-content",children:[s.jsx(Tt,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:-3,top:-3,color:u=>u.palette.grey[500]},children:s.jsx(ze,{})}),s.jsx("img",{src:n,alt:`${r} ${i}`,className:"custom-image"}),s.jsxs("div",{className:"carDetails",children:[s.jsxs("p",{className:"details",children:[r," ",s.jsx("span",{className:"model",children:i}),", ",a]}),s.jsx("p",{className:"cost",children:l}),s.jsxs("p",{className:"additionalInfo",children:["| ",p," | ",g," |"," ",i," | ",o," | ",d[0]]}),s.jsx("p",{id:"modal-description",children:b}),s.jsx("p",{children:"Accessories and functionalities:"}),s.jsxs("p",{children:[m," | ",d]}),s.jsx("p",{children:"Rental Conditions:"})]}),s.jsxs("ul",{className:"custom-list",children:[s.jsx("li",{className:"list-item",children:s.jsxs("p",{className:"item-label",children:["Minimum age: ",s.jsx("span",{className:"item-value",children:"25"})]})}),s.jsx("li",{className:"list-item",children:s.jsx("p",{className:"item-label",children:"Valid driver’s license"})}),s.jsx("li",{className:"list-item",children:s.jsx("p",{className:"item-label",children:"Security deposit required"})}),s.jsx("li",{className:"list-item",children:s.jsxs("p",{className:"item-label",children:["Mileage: ",s.jsx("span",{className:"item-value",children:"5,858"})]})}),s.jsx("li",{className:"list-item",children:s.jsxs("p",{className:"item-label",children:["Price: ",s.jsx("span",{className:"item-value",children:"40$"})]})})]})]})})}),Pe=We.forwardRef((e,t)=>{const{open:o,className:n,...r}=e;return s.jsx("div",{className:_({"base-Backdrop-open":o},n),ref:t,...r})});Pe.propTypes={className:ce.string.isRequired,open:ce.bool};const No=ve(Pe)`
  /* z-index: -1; */
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`,$o=ve("div")(({theme:e})=>He`
    background-color: ${e.palette.mode==="dark"?"#1C2025":"#fff"};
    border: 1px solid ${e.palette.mode==="dark"?"#434D5B":"#DAE2ED"};
    box-shadow: 0 4px 12px
      ${e.palette.mode==="dark"?"rgb(0 0 0 / 0.5)":"rgb(0 0 0 / 0.2)"};
    color: ${e.palette.mode==="dark"?"#F3F6F9":"#1C2025"};

    width: 400px;
    height: 600px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    border-radius: 8px;
    padding: 24px;
    top: 50%; /* Центрирование по вертикали */
    left: 50%; /* Центрирование по горизонтали */
    transform: translate(-50%, -50%); /* Смещение на половину ширины и высоты */

    & .modal-description {
      color: ${e.palette.mode==="dark"?"#808080[400]":"#808080[800]"};
    }
  `),zo=e=>{if(e){const t=e.split(", "),[o,n]=t.slice(-2);return`${o} | ${n}`}return null},Po=({id:e,img:t,brand:o,model:n,year:r,cost:i,functionalities:a,rentalCompany:l,address:d,type:p,description:x,accessories:g})=>{const[b,m]=c.useState(!1),u=()=>m(!0),C=()=>m(!1);return s.jsxs(bo,{children:[s.jsx("img",{src:t,alt:`${o} ${n}`,className:"custom-image"}),s.jsxs("div",{className:"carDetails",children:[s.jsxs("p",{className:"details",children:[o," ",s.jsxs("span",{className:"model",children:[n,","," "]}),r]}),s.jsx("p",{className:"cost",children:i})]}),s.jsxs("p",{className:"additionalInfo",children:[zo(d)," | ",l," | ",p," | ",n," | ",e," |"," ",a[0]]}),s.jsx(vo,{handleOpen:u}),s.jsx(ko,{open:b,handleClose:C,id:e,img:t,brand:o,model:n,year:r,cost:i,functionalities:a,rentalCompany:l,address:d,type:p,description:x,accessories:g})]})},wo=q.div`
    .carsList {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media (min-width: 768px) {
      gap: 20px;
    }

    @media (min-width: 1280px) {
      gap: 40px;
    }
  }
`,To=({cars:e})=>{const[t,o]=c.useState(4);c.useEffect(()=>{const r=()=>{const i=window.innerWidth;i>=1280?o(4):i>=768?o(2):o(1)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[]);const n=e.slice(0,t*3);return s.jsx(wo,{children:s.jsx("ul",{className:"carsList",children:n.map(r=>s.jsx(Po,{id:r.id,className:"carsListItem",img:r.img,brand:r.make,model:r.model,year:r.year,cost:r.rentalPrice,functionalities:r.functionalities,rentalCompany:r.rentalCompany,address:r.address,type:r.type},r.id))})})},jo=q.div`

    /* background-image: url(${Ue.center_blur_desktop});
    background-size: 549px 543px;
    background-repeat: no-repeat;
    background-position: top 343px right;
    background-clip: content-box; */
  
  .categoryListsContainer {
    margin-bottom: 60px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .otherDrinksLink {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 42px;
    padding: 14px 40px;
    width: 167px;
    height: 46px;
    background: var(--link-bg);

    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--link-text);

    margin-left: auto;
    margin-right: auto;

    transition:
      box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border-radius 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    @media (min-width: 768px) {
      padding: 18px 44px;
      width: 187px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;

      margin-bottom: 60px;
    }
  }

  .otherDrinksLink:hover,
  .otherDrinksLink:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    border-radius: 42px;
    box-shadow: 0 0 20px rgba(64, 112, 205, 0.7);
    background-color: var(--link-bg-hover);
  }
`,Bo=q.p`
font-weight: 500;
font-size: 16px;
line-height: 150%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #3470ff;

text-align: center;

`,Mo=()=>s.jsx(Bo,{children:s.jsx("a",{href:"https://www.youtube.com/watch?v=XQHu4UUc9-A&list=PLViULGko0FdhZ99yYnqB64F_4nVyvOPH5&index=8",className:"loadMoreBtn",children:"Load More "})}),Fo=()=>{const e=Ve(),t=Q(Ke),o=Q(Ye),n=Q(Xe);return c.useEffect(()=>{t||e(qe())},[t,e]),s.jsxs(jo,{className:"container",children:[o&&s.jsx(Ge,{}),n&&s.jsxs("p",{children:["Error: ",n]}),s.jsx(To,{cars:t}),s.jsx(Mo,{})]})};export{Fo as default};
