"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8042],{1241:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},89591:function(e,t,n){n.d(t,{b:function(){return a},k:function(){return i}});var r=n(67294),o=n(85893);function i(e,t){let n=r.createContext(t);function i(e){let{children:t,...i}=e,a=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:a,children:t})}return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function a(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let a=r.createContext(i),u=n.length;function s(t){let{scope:n,children:i,...s}=t,c=n?.[e][u]||a,l=r.useMemo(()=>s,Object.values(s));return(0,o.jsx)(c.Provider,{value:l,children:i})}return n=[...n,i],s.displayName=t+"Provider",[s,function(n,o){let s=o?.[e][u]||a,c=r.useContext(s);if(c)return c;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]}),{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},95251:function(e,t,n){n.d(t,{X:function(){return m}});var r,o=n(67294),i=n(1241),a=n(36255),u=n(93387),s=n(37403),c=n(85893),l="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),m=o.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:m,onPointerDownOutside:h,onFocusOutside:g,onInteractOutside:v,onDismiss:b,...E}=e,y=o.useContext(d),[w,$]=o.useState(null),x=w?.ownerDocument??globalThis?.document,[,C]=o.useState({}),P=(0,u.e)(t,e=>$(e)),k=Array.from(y.layers),[D]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),N=k.indexOf(D),R=w?k.indexOf(w):-1,T=y.layersWithOutsidePointerEventsDisabled.size>0,M=R>=N,O=function(e,t=globalThis?.document){let n=(0,s.W)(e),r=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let o=function(){p("dismissableLayer.pointerDownOutside",n,a,{discrete:!0})},a={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=o,t.addEventListener("click",i.current,{once:!0})):o()}else t.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...y.branches].some(e=>e.contains(t));M&&!n&&(h?.(e),v?.(e),e.defaultPrevented||b?.())},x),L=function(e,t=globalThis?.document){let n=(0,s.W)(e),r=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...y.branches].some(e=>e.contains(t))||(g?.(e),v?.(e),e.defaultPrevented||b?.())},x);return function(e,t=globalThis?.document){let n=(0,s.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{R===y.layers.size-1&&(m?.(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},x),o.useEffect(()=>{if(w)return n&&(0===y.layersWithOutsidePointerEventsDisabled.size&&(r=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(w)),y.layers.add(w),f(),()=>{n&&1===y.layersWithOutsidePointerEventsDisabled.size&&(x.body.style.pointerEvents=r)}},[w,x,n,y]),o.useEffect(()=>()=>{w&&(y.layers.delete(w),y.layersWithOutsidePointerEventsDisabled.delete(w),f())},[w,y]),o.useEffect(()=>{let e=()=>C({});return document.addEventListener(l,e),()=>document.removeEventListener(l,e)},[]),(0,c.jsx)(a.W.div,{...E,ref:P,style:{pointerEvents:T?M?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,L.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,O.onPointerDownCapture)})});function f(){let e=new CustomEvent(l);document.dispatchEvent(e)}function p(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,a.j)(o,i):o.dispatchEvent(i)}m.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),i=(0,u.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,c.jsx)(a.W.div,{...e,ref:i})}).displayName="DismissableLayerBranch"},42201:function(e,t,n){n.d(t,{M:function(){return s}});var r,o=n(67294),i=n(8023),a=(r||(r=n.t(o,2)))["useId".toString()]||(()=>{}),u=0;function s(e){let[t,n]=o.useState(a());return(0,i.b)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},44890:function(e,t,n){n.d(t,{z:function(){return u}});var r=n(67294),o=n(73935),i=n(93387),a=n(8023),u=e=>{let t;let{present:n,children:u}=e,c=function(e){var t;let[n,i]=r.useState(),u=r.useRef({}),c=r.useRef(e),l=r.useRef("none"),[d,m]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,n)=>t[e][n]??e,e?"mounted":"unmounted"));return r.useEffect(()=>{let e=s(u.current);l.current="mounted"===d?e:"none"},[d]),(0,a.b)(()=>{let t=u.current,n=c.current;if(n!==e){let r=l.current,o=s(t);e?m("MOUNT"):"none"===o||"none"===t?.display?m("UNMOUNT"):m(n&&r!==o?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,m]),(0,a.b)(()=>{if(n){let e=e=>{let t=s(u.current).includes(e.animationName);e.target===n&&t&&o.flushSync(()=>m("ANIMATION_END"))},t=e=>{e.target===n&&(l.current=s(u.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}m("ANIMATION_END")},[n,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(u.current=getComputedStyle(e)),i(e)},[])}}(n),l="function"==typeof u?u({present:c.isPresent}):r.Children.only(u),d=(0,i.e)(c.ref,(t=Object.getOwnPropertyDescriptor(l.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?l.ref:(t=Object.getOwnPropertyDescriptor(l,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?l.props.ref:l.props.ref||l.ref);return"function"==typeof u||c.isPresent?r.cloneElement(l,{ref:d}):null};function s(e){return e?.animationName||"none"}u.displayName="Presence"},37403:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(67294);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},52786:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(67294),o=n(37403);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,a]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,a=r.useRef(i),u=(0,o.W)(t);return r.useEffect(()=>{a.current!==i&&(u(i),a.current=i)},[i,a,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,s=(0,o.W)(n);return[u?e:i,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else a(t)},[u,e,a,s])]}},8023:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(67294),o=Boolean(globalThis?.document)?r.useLayoutEffect:()=>{}},28042:function(e,t,n){let r;n.d(t,{Z:function(){return eZ}});var o=n(67294),i=n(4204),a=n(1241),u=n(93387),s=n(89591),c=n(42201),l=n(52786),d=n(95251),m=n(36255),f=n(37403),p=n(85893),h="focusScope.autoFocusOnMount",g="focusScope.autoFocusOnUnmount",v={bubbles:!1,cancelable:!0},b=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:a,...s}=e,[c,l]=o.useState(null),d=(0,f.W)(i),b=(0,f.W)(a),x=o.useRef(null),C=(0,u.e)(t,e=>l(e)),P=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(P.paused||!c)return;let t=e.target;c.contains(t)?x.current=t:w(x.current,{select:!0})},t=function(e){if(P.paused||!c)return;let t=e.relatedTarget;null!==t&&(c.contains(t)||w(x.current,{select:!0}))};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&w(c)});return c&&n.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,c,P.paused]),o.useEffect(()=>{if(c){$.add(P);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(h,v);c.addEventListener(h,d),c.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(w(r,{select:t}),document.activeElement!==n)return}(E(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&w(c))}return()=>{c.removeEventListener(h,d),setTimeout(()=>{let t=new CustomEvent(g,v);c.addEventListener(g,b),c.dispatchEvent(t),t.defaultPrevented||w(e??document.body,{select:!0}),c.removeEventListener(g,b),$.remove(P)},0)}}},[c,d,b,P]);let k=o.useCallback(e=>{if(!n&&!r||P.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let i=e.currentTarget,[a,u]=function(e){let t=E(e),n=y(t,e),r=y(t.reverse(),e);return[n,r]}(i);a&&u?e.shiftKey||o!==u?e.shiftKey&&o===a&&(e.preventDefault(),n&&w(u,{select:!0})):(e.preventDefault(),n&&w(a,{select:!0})):o===i&&e.preventDefault()}},[n,r,P.paused]);return(0,p.jsx)(m.W.div,{tabIndex:-1,...s,ref:C,onKeyDown:k})});function E(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function y(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function w(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}b.displayName="FocusScope";var $=(r=[],{add(e){let t=r[0];e!==t&&t?.pause(),(r=x(r,e)).unshift(e)},remove(e){r=x(r,e),r[0]?.resume()}});function x(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var C=n(44890),P=0;function k(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var D=n(10993),N=n(43450),R=(0,n(54453)._)(),T=n(5312),M=function(){},O=o.forwardRef(function(e,t){var n=o.useRef(null),r=o.useState({onScrollCapture:M,onWheelCapture:M,onTouchMoveCapture:M}),i=r[0],a=r[1],u=e.forwardProps,s=e.children,c=e.className,l=e.removeScrollBar,d=e.enabled,m=e.shards,f=e.sideCar,p=e.noIsolation,h=e.inert,g=e.allowPinchZoom,v=e.as,b=e.gapMode,E=(0,D._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),y=(0,T.q)([n,t]),w=(0,D.pi)((0,D.pi)({},E),i);return o.createElement(o.Fragment,null,d&&o.createElement(f,{sideCar:R,removeScrollBar:l,shards:m,noIsolation:p,inert:h,setCallbacks:a,allowPinchZoom:!!g,lockRef:n,gapMode:b}),u?o.cloneElement(o.Children.only(s),(0,D.pi)((0,D.pi)({},w),{ref:y})):o.createElement(void 0===v?"div":v,(0,D.pi)({},w,{className:c,ref:y}),s))});O.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},O.classNames={fullWidth:N.zi,zeroRight:N.pF};var L=n(28432),S=n(25920),_=!1;if("undefined"!=typeof window)try{var I=Object.defineProperty({},"passive",{get:function(){return _=!0,!0}});window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch(W){_=!1}var F=!!_&&{passive:!1},j=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},A=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),H(e,r)){var o=z(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},H=function(e,t){return"v"===e?j(t,"overflowY"):j(t,"overflowX")},z=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},B=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),u=a*r,s=n.target,c=t.contains(s),l=!1,d=u>0,m=0,f=0;do{var p=z(e,s),h=p[0],g=p[1]-p[2]-a*h;(h||g)&&H(e,s)&&(m+=g,f+=h),s=s instanceof ShadowRoot?s.host:s.parentNode}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(d&&(o&&1>Math.abs(m)||!o&&u>m)||!d&&(o&&1>Math.abs(f)||!o&&-u>f))&&(l=!0),l},Z=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},U=function(e){return[e.deltaX,e.deltaY]},K=function(e){return e&&"current"in e?e.current:e},X=0,Y=[],q=(0,n(71322).L)(R,function(e){var t=o.useRef([]),n=o.useRef([0,0]),r=o.useRef(),i=o.useState(X++)[0],a=o.useState(S.W)[0],u=o.useRef(e);o.useEffect(function(){u.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var t=(0,D.ev)([e.lockRef.current],(e.shards||[]).map(K),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var s=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var o,i=Z(e),a=n.current,s="deltaX"in e?e.deltaX:a[0]-i[0],c="deltaY"in e?e.deltaY:a[1]-i[1],l=e.target,d=Math.abs(s)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===l.type)return!1;var m=A(d,l);if(!m)return!0;if(m?o=d:(o="v"===d?"h":"v",m=A(d,l)),!m)return!1;if(!r.current&&"changedTouches"in e&&(s||c)&&(r.current=o),!o)return!0;var f=r.current||o;return B(f,t,e,"h"===f?s:c,!0)},[]),c=o.useCallback(function(e){if(Y.length&&Y[Y.length-1]===a){var n="deltaY"in e?U(e):Z(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should)e.cancelable&&e.preventDefault();else if(!r){var o=(u.current.shards||[]).map(K).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?s(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=o.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),d=o.useCallback(function(e){n.current=Z(e),r.current=void 0},[]),m=o.useCallback(function(t){l(t.type,U(t),t.target,s(t,e.lockRef.current))},[]),f=o.useCallback(function(t){l(t.type,Z(t),t.target,s(t,e.lockRef.current))},[]);o.useEffect(function(){return Y.push(a),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:f}),document.addEventListener("wheel",c,F),document.addEventListener("touchmove",c,F),document.addEventListener("touchstart",d,F),function(){Y=Y.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,F),document.removeEventListener("touchmove",c,F),document.removeEventListener("touchstart",d,F)}},[]);var p=e.removeScrollBar,h=e.inert;return o.createElement(o.Fragment,null,h?o.createElement(a,{styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")}):null,p?o.createElement(L.jp,{gapMode:e.gapMode}):null)}),V=o.forwardRef(function(e,t){return o.createElement(O,(0,D.pi)({},e,{ref:t,sideCar:q}))});V.classNames=O.classNames;var G=n(38600),J=n(70768),Q="Dialog",[ee,et]=(0,s.b)(Q),[en,er]=ee(Q),eo=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:u=!0}=e,s=o.useRef(null),d=o.useRef(null),[m=!1,f]=(0,l.T)({prop:r,defaultProp:i,onChange:a});return(0,p.jsx)(en,{scope:t,triggerRef:s,contentRef:d,contentId:(0,c.M)(),titleId:(0,c.M)(),descriptionId:(0,c.M)(),open:m,onOpenChange:f,onOpenToggle:o.useCallback(()=>f(e=>!e),[f]),modal:u,children:n})};eo.displayName=Q;var ei="DialogTrigger",ea=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=er(ei,n),i=(0,u.e)(t,o.triggerRef);return(0,p.jsx)(m.W.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ex(o.open),...r,ref:i,onClick:(0,a.M)(e.onClick,o.onOpenToggle)})});ea.displayName=ei;var[eu,es]=ee("DialogPortal",{forceMount:void 0}),ec="DialogOverlay",el=o.forwardRef((e,t)=>{let n=es(ec,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=er(ec,e.__scopeDialog);return i.modal?(0,p.jsx)(C.z,{present:r||i.open,children:(0,p.jsx)(ed,{...o,ref:t})}):null});el.displayName=ec;var ed=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=er(ec,n);return(0,p.jsx)(V,{as:J.g,allowPinchZoom:!0,shards:[o.contentRef],children:(0,p.jsx)(m.W.div,{"data-state":ex(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),em="DialogContent",ef=o.forwardRef((e,t)=>{let n=es(em,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=er(em,e.__scopeDialog);return(0,p.jsx)(C.z,{present:r||i.open,children:i.modal?(0,p.jsx)(ep,{...o,ref:t}):(0,p.jsx)(eh,{...o,ref:t})})});ef.displayName=em;var ep=o.forwardRef((e,t)=>{let n=er(em,e.__scopeDialog),r=o.useRef(null),i=(0,u.e)(t,n.contentRef,r);return o.useEffect(()=>{let e=r.current;if(e)return(0,G.R)(e)},[]),(0,p.jsx)(eg,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:(0,a.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault())})}),eh=o.forwardRef((e,t)=>{let n=er(em,e.__scopeDialog),r=o.useRef(!1),i=o.useRef(!1);return(0,p.jsx)(eg,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,"pointerdown"===t.detail.originalEvent.type&&(i.current=!0));let o=t.target,a=n.triggerRef.current?.contains(o);a&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})}),eg=o.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,...s}=e,c=er(em,n),l=o.useRef(null),m=(0,u.e)(t,l);return o.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??k()),document.body.insertAdjacentElement("beforeend",e[1]??k()),P++,()=>{1===P&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),P--}},[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,p.jsx)(d.X,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":ex(c.open),...s,ref:m,onDismiss:()=>c.onOpenChange(!1)})}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(eD,{titleId:c.titleId}),(0,p.jsx)(eN,{contentRef:l,descriptionId:c.descriptionId})]})]})}),ev="DialogTitle",eb=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=er(ev,n);return(0,p.jsx)(m.W.h2,{id:o.titleId,...r,ref:t})});eb.displayName=ev;var eE="DialogDescription",ey=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=er(eE,n);return(0,p.jsx)(m.W.p,{id:o.descriptionId,...r,ref:t})});ey.displayName=eE;var ew="DialogClose",e$=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=er(ew,n);return(0,p.jsx)(m.W.button,{type:"button",...r,ref:t,onClick:(0,a.M)(e.onClick,()=>o.onOpenChange(!1))})});function ex(e){return e?"open":"closed"}e$.displayName=ew;var eC="DialogTitleWarning",[eP,ek]=(0,s.k)(eC,{contentName:em,titleName:ev,docsSlug:"dialog"}),eD=({titleId:e})=>{let t=ek(eC),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return o.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},eN=({contentRef:e,descriptionId:t})=>{let n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ek("DialogDescriptionWarning").contentName}}.`;return o.useEffect(()=>{let r=e.current?.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(n))},[n,e,t]),null},eR=n(59016);let eT={customPadding:{sm:"1rem",md:"1rem",lg:"2rem",xl:"2rem"},customMaxHeight:{sm:"80vh",md:"80vh",lg:"90vh",xl:"90vh"},customHeight:{sm:"max-content",md:"max-content",lg:"max-content",xl:"max-content"}},eM=eR.F4`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;function eO(e,t,n){return"object"==typeof e[n]&&t in e[n]?e[n][t]:t in e&&e[t]?e[t]:eT[t][n]}let eL=(0,eR.ZP)(el)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 9999;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${eM} 700ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`,eS=eR.ZP.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: ${({theme:e,customBackgroundColor:t})=>t||e.colors.white()};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  border-radius: ${({theme:e})=>e.borderRadius.md}
    ${({theme:e})=>e.borderRadius.md} 0 0;
  z-index: 9999;
  padding: ${e=>eO(e,"customPadding","sm")};
  height: ${e=>eO(e,"customHeight","sm")};
  max-height: ${e=>eO(e,"customMaxHeight","sm")};

  ${({scrollable:e})=>e?eR.iv`
        overflow: auto;
        ${({theme:e})=>e.scrollbar()};
      `:eR.iv`
      overflow: hidden;
    `}

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    padding: ${e=>eO(e,"customPadding","md")};
    height: ${e=>eO(e,"customHeight","md")};
    max-height: ${e=>eO(e,"customMaxHeight","md")};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktop}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${({theme:e})=>e.borderRadius.md};
    width: ${({customWidth:e})=>e||"max-content"};
    max-width: 60vw;
    padding: ${e=>eO(e,"customPadding","lg")};
    height: ${e=>eO(e,"customHeight","lg")};
    max-height: ${e=>eO(e,"customMaxHeight","lg")};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktopLarge}) {
    padding: ${e=>eO(e,"customPadding","xl")};
    height: ${e=>eO(e,"customHeight","xl")};
    max-height: ${e=>eO(e,"customMaxHeight","xl")};
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${eM} 700ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`,e_=(0,eR.ZP)(e$)`
  background: transparent;
  line-height: 0;
  position: absolute;
  top: ${({theme:e})=>e.spacing.sm};
  right: ${({theme:e})=>e.spacing.sm};
  translate: filter 250ms;

  &:hover {
    filter: brightness(0.7);
    cursor: pointer;
  }
`,eI=eR.ZP.div`
  ${({theme:e})=>e.font(14,24,400)};
  display: flex;
  align-self: baseline;
  flex-direction: column;
  padding: ${({headerPadding:e})=>e||0};
  background-color: ${({background:e,theme:t})=>e||t.colors.white(500)};
`,eW=eR.ZP.span`
  line-height: 0;

  & > svg {
    margin-right: ${({theme:e})=>e.spacing.xs};
    width: ${({theme:e})=>e.rem(13)};
    height: ${({theme:e})=>e.rem(13)};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    & > svg {
      width: ${({theme:e})=>e.rem(16)};
      height: ${({theme:e})=>e.rem(16)};
    }
  }
`,eF=eR.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: ${({titlePadding:e})=>e||0};
`,ej=(0,eR.ZP)(eb)`
  ${({theme:e})=>e.font(16,28,700)};
  color: ${({theme:e})=>e.colors.black(800)};
  text-transform: uppercase;
  margin: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    ${({theme:e})=>e.font(20,14,700)};
  }
`,eA=eR.ZP.span`
  color: ${({theme:e})=>e.colors.secondary(500)};
  ${({theme:e})=>e.font(20)}
  margin-left: ${({theme:e})=>e.spacing.xxs};
`,eH=(0,eR.ZP)(ey)`
  ${({theme:e})=>e.font(14,21)};
  color: ${({theme:e})=>e.colors.black(700)};

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    ${({theme:e})=>e.font(16,24)};
  }
`,ez=eR.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background: ${({theme:e,background:t})=>t||e.colors.white()};
  background-image: url(${({image:e})=>e});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: ${({theme:e})=>e.rem(150)};

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    background-size: ${({theme:e})=>e.rem(250)};
  }
  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktop}) {
    background-size: ${({theme:e})=>e.rem(212)};
  }
`,eB=(0,eR.ZP)(eb)`
  ${({theme:e})=>e.font(12,18,700)};
  color: ${({theme:e})=>e.colors.white()};

  ${({image:e})=>e?eR.iv`
        margin: ${({theme:e})=>e.spacing.lg}
          ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.lg}
          ${({theme:e})=>e.rem(158)};
      `:eR.iv`
        margin: ${({theme:e})=>e.spacing.lg}
          ${({theme:e})=>e.rem(64)} ${({theme:e})=>e.spacing.lg}
          ${({theme:e})=>e.rem(64)};
      `}

  @media (min-width: ${({theme:e})=>e.breakpoints.minTablet}) {
    ${({theme:e})=>e.font(14,24,700)};

    ${({image:e})=>e?eR.iv`
          margin: ${({theme:e})=>e.rem(48)}
            ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.rem(280)};
        `:eR.iv`
          margin: ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)} ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)};
        `}
  }
  @media (min-width: ${({theme:e})=>e.breakpoints.minDesktop}) {
    ${({theme:e})=>e.font(20,30,700)};

    ${({image:e})=>e?eR.iv`
          margin: ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)} ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(244)};
        `:eR.iv`
          margin: ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)} ${({theme:e})=>e.spacing.lg}
            ${({theme:e})=>e.rem(64)};
        `}
  }
`,eZ={Dialog:function({modal:e=!0,open:t,onOpenChange:n,buttonTrigger:r,customPadding:a,customWidth:u,customHeight:s,customBackgroundColor:c,closeColor:l,closeSize:d=24,scrollable:m=!0,sm:f,md:p,lg:h,xl:g,children:v}){return o.createElement(eo,{modal:e,open:t,onOpenChange:n},!!r&&o.createElement(ea,{asChild:!0},r),o.createElement(eL,null),o.createElement(ef,{asChild:!0},o.createElement(eS,{customPadding:a,customWidth:u,customHeight:s,customBackgroundColor:c,scrollable:m,sm:f,md:p,lg:h,xl:g},o.createElement(e_,{"aria-label":"Fechar"},o.createElement(i.bMz,{color:l,width:d,height:d,"aria-hidden":"true"})),v)))},DialogHeaderWithText:function({title:e,icon:t,alternativeText:n,headerPadding:r,description:i,titlePadding:a,background:u}){return o.createElement(eI,{headerPadding:r,background:u},o.createElement(eF,{titlePadding:a},e&&o.createElement(o.Fragment,null,!!t&&o.createElement(eW,{"aria-hidden":"true"},t),o.createElement(ej,null,e),n&&o.createElement(eA,null,n))),i&&o.createElement(eH,null,i))},DialogHeaderWithCustomSettings:function({image:e,title:t,background:n}){return o.createElement(ez,{background:n,image:e,className:"DialogWithImage"},o.createElement(eB,{image:e,dangerouslySetInnerHTML:{__html:t}}))}}}}]);
//# sourceMappingURL=8042-d59140c26eed0a7b.js.map