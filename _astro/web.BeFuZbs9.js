const u={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return D(this.context.count)},getNextContextId(){return D(this.context.count++)}};function D(e){const t=String(e),n=t.length-1;return u.context.id+(n?String.fromCharCode(96+n):"")+t}function v(e){u.context=e}function fe(){return{...u.context,id:u.getNextContextId(),count:0}}const ue=(e,t)=>e===t,He=Symbol("solid-proxy"),ke=Symbol("solid-track"),k={equals:ue};let ce=ne;const w=1,_=2,X={owned:null,cleanups:null,context:null,owner:null};var d=null;let L=null,ae=null,h=null,g=null,b=null,q=0;function Q(e,t){const n=h,s=d,i=e.length===0,r=t===void 0?s:t,f=i?X:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>T(()=>N(f)));d=f,h=null;try{return $(o,!0)}finally{h=n,d=s}}function M(e,t){t=t?Object.assign({},k,t):k;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),z(n,i));return[Z.bind(n),s]}function O(e,t,n){const s=ee(e,t,!1,w);F(s)}function m(e,t,n){n=n?Object.assign({},k,n):k;const s=ee(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,F(s),Z.bind(s)}function _e(e){return $(e,!1)}function T(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function de(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Oe(){return h}function he(){return d}function ge(e){b.push.apply(b,e),e.length=0}function J(e,t){const n=Symbol("context");return{id:n,Provider:Se(n),defaultValue:e}}function pe(e){let t;return d&&d.context&&(t=d.context[e.id])!==void 0?t:e.defaultValue}function ye(e){const t=m(e),n=m(()=>j(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let R;function be(){return R||(R=J())}function Z(){if(this.sources&&this.state)if(this.state===w)F(this);else{const e=g;g=null,$(()=>I(this),!1),g=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function z(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&$(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],f=L&&L.running;f&&L.disposed.has(r),(f?!r.tState:!r.state)&&(r.pure?g.push(r):b.push(r),r.observers&&se(r)),f||(r.state=w)}if(g.length>1e6)throw g=[],new Error},!1)),t}function F(e){if(!e.fn)return;N(e);const t=q;xe(e,e.value,t)}function xe(e,t,n){let s;const i=d,r=h;h=d=e;try{s=e.fn(t)}catch(f){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(N),e.owned=null),e.updatedAt=n+1,ie(f)}finally{h=r,d=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?z(e,s):e.value=s,e.updatedAt=n)}function ee(e,t,n,s=w,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return d===null||d!==X&&(d.owned?d.owned.push(r):d.owned=[r]),r}function te(e){if(e.state===0)return;if(e.state===_)return I(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<q);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===w)F(e);else if(e.state===_){const s=g;g=null,$(()=>I(e,t[0]),!1),g=s}}function $(e,t){if(g)return e();let n=!1;t||(g=[]),b?n=!0:b=[],q++;try{const s=e();return we(n),s}catch(s){n||(b=null),g=null,ie(s)}}function we(e){if(g&&(ne(g),g=null),e)return;const t=b;b=null,t.length&&$(()=>ce(t),!1)}function ne(e){for(let t=0;t<e.length;t++)te(e[t])}function I(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===w?s!==t&&(!s.updatedAt||s.updatedAt<q)&&te(s):i===_&&I(s,t)}}}function se(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=_,n.pure?g.push(n):b.push(n),n.observers&&se(n))}}function N(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),f=n.observerSlots.pop();s<i.length&&(r.sourceSlots[f]=s,i[s]=r,n.observerSlots[s]=f)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)N(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)N(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ce(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ie(e,t=d){throw Ce(e)}function j(e){if(typeof e=="function"&&!e.length)return j(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=j(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Se(e,t){return function(s){let i;return O(()=>i=T(()=>(d.context={...d.context,[e]:s.value},ye(()=>s.children))),void 0),i}}let re=!1;function Ae(){re=!0}function ve(e,t){if(re&&u.context){const n=u.context;v(fe());const s=T(()=>e(t||{}));return v(n),s}return T(()=>e(t||{}))}const $e=J();function Ie(e){let t=0,n,s,i,r,f;const[o,l]=M(!1),a=be(),c={increment:()=>{++t===1&&l(!0)},decrement:()=>{--t===0&&l(!1)},inFallback:o,effects:[],resolved:!1},p=he();if(u.context&&u.load){const x=u.getContextId();let S=u.load(x);if(S&&(typeof S!="object"||S.status!=="success"?i=S:u.gather(x)),i&&i!=="$$f"){const[Y,E]=M(void 0,{equals:!1});r=Y,i.then(()=>{if(u.done)return E();u.gather(x),v(s),E(),v()},B=>{f=B,E()})}}const C=pe($e);C&&(n=C.register(c.inFallback));let y;return de(()=>y&&y()),ve(a.Provider,{value:c,get children(){return m(()=>{if(f)throw f;if(s=u.context,r)return r(),r=void 0;s&&i==="$$f"&&v();const x=m(()=>e.children);return m(S=>{const Y=c.inFallback(),{showContent:E=!0,showFallback:B=!0}=n?n():{};if((!Y||i&&i!=="$$f")&&E)return c.resolved=!0,y&&y(),y=s=i=void 0,ge(c.effects),x();if(B)return y?S:Q(le=>(y=le,s&&(v({id:s.id+"F",count:0}),s=void 0),e.fallback),p)})})}})}function Ee(e,t,n){let s=n.length,i=t.length,r=s,f=0,o=0,l=t[i-1].nextSibling,a=null;for(;f<i||o<r;){if(t[f]===n[o]){f++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===f){const c=r<s?o?n[o-1].nextSibling:n[r-o]:l;for(;o<r;)e.insertBefore(n[o++],c)}else if(r===o)for(;f<i;)(!a||!a.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[r-1]&&n[o]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[o++],t[f++].nextSibling),e.insertBefore(n[--r],c),t[i]=n[r]}else{if(!a){a=new Map;let p=o;for(;p<r;)a.set(n[p],p++)}const c=a.get(t[f]);if(c!=null)if(o<c&&c<r){let p=f,C=1,y;for(;++p<i&&p<r&&!((y=a.get(t[p]))==null||y!==c+C);)C++;if(C>c-o){const x=t[f];for(;o<c;)e.insertBefore(n[o++],x)}else e.replaceChild(n[o++],t[f++])}else f++;else t[f++].remove()}}}const V="_$DX_DELEGATE";function G(e,t,n,s={}){let i;return Q(r=>{i=r,t===document?e():me(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Pe(e,t,n){let s;const i=()=>{const f=document.createElement("template");return f.innerHTML=e,f.content.firstChild},r=()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function qe(e,t=window.document){const n=t[V]||(t[V]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,oe))}}function Fe(e,t,n){H(e)||(e[t]=n)}function Ye(e,t,n){H(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function me(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return P(e,t,s,n);O(i=>P(e,t(),i,n),s)}function Te(e,t,n={}){if(globalThis._$HY.done)return G(e,t,[...t.childNodes],n);u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=s=>globalThis._$HY.r[s],u.has=s=>s in globalThis._$HY.r,u.gather=s=>W(t,s),u.registry=new Map,u.context={id:n.renderId||"",count:0};try{return W(t,n.renderId),G(e,t,[...t.childNodes],n)}finally{u.context=null}}function Be(e){let t,n;return!H()||!(t=u.registry.get(n=Ne()))?e():(u.completed&&u.completed.add(t),u.registry.delete(n),t)}function Le(e){let t=e,n=0,s=[];if(H(e))for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function je(){u.events&&!u.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=u;if(t){for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;t.shift(),oe(s)}u.done&&(u.events=_$HY.events=null,u.completed=_$HY.completed=null)}}),u.events.queued=!0)}function H(e){return!!u.context&&!u.done&&(!e||e.isConnected)}function oe(e){if(u.registry&&u.events&&u.events.find(([l,a])=>a===e))return;let t=e.target;const n=`$$${e.type}`,s=e.target,i=e.currentTarget,r=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),f=()=>{const l=t[n];if(l&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?l.call(t,a,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&r(t.host),!0},o=()=>{for(;f()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),u.registry&&!u.done&&(u.done=_$HY.done=!0),e.composedPath){const l=e.composedPath();r(l[0]);for(let a=0;a<l.length-2&&(t=l[a],!!f());a++){if(t._$host){t=t._$host,o();break}if(t.parentNode===i)break}}else o();r(s)}function P(e,t,n,s,i){const r=H(e);if(r){!n&&(n=[...e.childNodes]);let l=[];for(let a=0;a<n.length;a++){const c=n[a];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():l.push(c)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const f=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,f==="string"||f==="number"){if(r||f==="number"&&(t=t.toString(),t===n))return n;if(o){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=A(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||f==="boolean"){if(r)return n;n=A(e,n,s)}else{if(f==="function")return O(()=>{let l=t();for(;typeof l=="function";)l=l();n=P(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(U(l,t,n,i))return O(()=>n=P(e,l,n,s,!0)),()=>n;if(r){if(!l.length)return n;if(s===void 0)return n=[...e.childNodes];let c=l[0];if(c.parentNode!==e)return n;const p=[c];for(;(c=c.nextSibling)!==s;)p.push(c);return n=p}if(l.length===0){if(n=A(e,n,s),o)return n}else a?n.length===0?K(e,l,s):Ee(e,n,l):(n&&A(e),K(e,l));n=l}else if(t.nodeType){if(r&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=A(e,n,s,t);A(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function U(e,t,n,s){let i=!1;for(let r=0,f=t.length;r<f;r++){let o=t[r],l=n&&n[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=U(e,o,l)||i;else if(a==="function")if(s){for(;typeof o=="function";)o=o();i=U(e,Array.isArray(o)?o:[o],Array.isArray(l)?l:[l])||i}else e.push(o),i=!0;else{const c=String(o);l&&l.nodeType===3&&l.data===c?e.push(l):e.push(document.createTextNode(c))}}return i}function K(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function A(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let f=t.length-1;f>=0;f--){const o=t[f];if(i!==o){const l=o.parentNode===e;!r&&!f?l?e.replaceChild(i,o):e.insertBefore(i,n):l&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function W(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!u.registry.has(r)&&u.registry.set(r,i)}}function Ne(){return u.getNextContextId()}const Ue=(...e)=>(Ae(),Te(...e));export{He as $,Ie as S,ke as a,_e as b,M as c,ve as d,qe as e,Be as f,Oe as g,Ue as h,Le as i,me as j,m as k,O as l,je as m,Fe as n,G as r,Ye as s,Pe as t};
