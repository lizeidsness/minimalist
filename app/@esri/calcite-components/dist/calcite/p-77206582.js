let e,t,n,l=0,o=!1,s=!1,i=!1,r=!1,c=!1;const a="undefined"!=typeof window?window:{},f=a.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},$=(()=>(f.head.attachShadow+"").includes("[native"))(),d=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p=new WeakMap,m=e=>p.get(e),h=(e,t)=>p.set(t.o=e,t),w=(e,t)=>t in e,y=e=>console.error(e),b=new Map,g=new Map,v=[],_=[],k=[],j=(e,t)=>n=>{e.push(n),o||(o=!0,t&&4&u.t?S(x):u.raf(x))},R=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){y(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},x=()=>{l++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){y(t)}e.length=0})(v);const e=2==(6&u.t)?performance.now()+10*Math.ceil(l*(1/22)):1/0;R(_,e),R(k,e),_.length>0&&(k.push(..._),_.length=0),(o=v.length+_.length+k.length>0)?u.raf(x):l=0},S=e=>Promise.resolve().then(e),M=j(_,!0),L={},O=e=>"object"==(e=typeof e)||"function"===e,U=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_calcite("./p-73bc5e11.js").then(()=>{u.s=a.__stencil_cssshim}),P=()=>{u.s=a.__stencil_cssshim;const e=Array.from(f.querySelectorAll("script")).find(e=>new RegExp("/calcite(\\.esm)?\\.js($|\\?|#)").test(e.src)||"calcite"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,a.location.href)).href,C(t.resourcesUrl,e),window.customElements?Promise.resolve(t):__sc_import_calcite("./p-3b66a627.js").then(()=>t))},C=(e,t)=>{const n=(()=>`__sc_import_${"calcite".replace(/\s|-/g,"_")}`)();try{a[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const o=new Map;a[n]=l=>{const s=new URL(l,e).href;let i=o.get(s);if(!i){const e=f.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),i=new Promise(t=>{e.onload=()=>{t(a[n].m),e.remove()}}),o.set(s,i),f.head.appendChild(e)}return i}}},E="http://www.w3.org/1999/xlink",T=new WeakMap,W=(e,t,n)=>{let l=g.get(e);d&&n?(l=l||new CSSStyleSheet).replace(t):l=t,g.set(e,l)},I=(e,t)=>{let n=A(t.i),l=g.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,o=T.get(e=e.head||e);o||T.set(e,o=new Set),o.has(n)||(e.host&&(t=e.firstElementChild)&&"STYLE"===t.tagName?t.innerHTML=l:((t=f.createElement("style")).innerHTML=l,e.insertBefore(t,e.querySelector("link"))),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n},A=e=>"sc-"+e,D=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),F=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!O(l))&&(l=String(l)),i&&r?c[c.length-1].u+=l:c.push(i?H(null,l):l),r=i)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,q);const f=H(e,null);return f.$=t,c.length>0&&(f.p=c),f.h=o,f.g=s,f},H=(e,t)=>({t:0,v:e,u:t,_:null,p:null,$:null,h:null,g:null}),N={},q={forEach:(e,t)=>e.map(B).forEach(t),map:(e,t)=>e.map(B).map(t).map(V)},B=e=>({vattrs:e.$,vchildren:e.p,vkey:e.h,vname:e.g,vtag:e.v,vtext:e.u}),V=e=>{const t=H(e.vtag,e.vtext);return t.$=e.vattrs,t.p=e.vchildren,t.h=e.vkey,t.g=e.vname,t},Y=(e,t,n,l,o,s)=>{if(n===l)return;let i=w(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=G(n),s=G(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const a=O(l);if((i||a&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(c){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==l||!1===l?f?e.removeAttributeNS(E,t):e.removeAttribute(t):(!i||4&s||o)&&!a&&(l=!0===l?"":l,f?e.setAttributeNS(E,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):w(a,r)?r.slice(2):r[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)},z=/\s/,G=e=>e?e.split(z):[],J=(e,t,n,l)=>{const o=11===t._.nodeType&&t._.host?t._.host:t._,s=e&&e.$||L,i=t.$||L;for(l in s)l in i||Y(o,l,s[l],void 0,n,t.t);for(l in i)Y(o,l,s[l],i[l],n,t.t)},K=(l,o,i,a)=>{let u,$,d,p=o.p[i],m=0;if(s||(r=!0,"slot"===p.v&&(e&&a.classList.add(e+"-s"),p.t|=p.p?2:1)),null!==p.u)u=p._=f.createTextNode(p.u);else if(1&p.t)u=p._=f.createTextNode("");else{if(c||(c="svg"===p.v),u=p._=f.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&p.t?"slot-fb":p.v),c&&"foreignObject"===p.v&&(c=!1),J(null,p,c),(e=>null!=e)(e)&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),p.p)for(m=0;m<p.p.length;++m)($=K(l,p,m,u))&&u.appendChild($);"svg"===p.v?c=!1:"foreignObject"===u.tagName&&(c=!0)}return u["s-hn"]=n,3&p.t&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=p.g||"",(d=l&&l.p&&l.p[i])&&d.v===p.v&&l._&&Q(l._,!1)),u},Q=(e,t)=>{u.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(ne(e).insertBefore(e,te(e)),e["s-ol"].remove(),e["s-ol"]=void 0,r=!0),t&&Q(e,t)}u.t&=-2},X=(e,t,l,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=K(null,l,s,e))&&(o[s]._=r,c.insertBefore(r,te(t)))},Z=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l._,re(l),i=!0,o["s-ol"]?o["s-ol"].remove():Q(o,!0),o.remove())},ee=(e,t)=>e.v===t.v&&("slot"===e.v?e.g===t.g:e.h===t.h),te=e=>e&&e["s-ol"]||e,ne=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,le=(e,t)=>{const n=t._=e._,l=e.p,o=t.p;let s;c=n&&n.parentNode&&void 0!==n.ownerSVGElement,c="svg"===t.v||"foreignObject"!==t.v&&c,null===t.u?("slot"===t.v||J(e,t,c),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],$=t[f],d=l.length-1,p=l[0],m=l[d];for(;i<=f&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--f];else if(null==p)p=l[++r];else if(null==m)m=l[--d];else if(ee(u,p))le(u,p),u=t[++i],p=l[++r];else if(ee($,m))le($,m),$=t[--f],m=l[--d];else if(ee(u,m))"slot"!==u.v&&"slot"!==m.v||Q(u._.parentNode,!1),le(u,m),e.insertBefore(u._,$._.nextSibling),u=t[++i],m=l[--d];else if(ee($,p))"slot"!==u.v&&"slot"!==m.v||Q($._.parentNode,!1),le($,p),e.insertBefore($._,u._),$=t[--f],p=l[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&null!==t[a].h&&t[a].h===p.h){c=a;break}c>=0?((s=t[c]).v!==p.v?o=K(t&&t[r],n,c,e):(le(s,p),t[c]=void 0,o=s._),p=l[++r]):(o=K(t&&t[r],n,r,e),p=l[++r]),o&&ne(u._).insertBefore(o,te(u._))}i>f?X(e,null==l[d+1]?null:l[d+1]._,n,l,r,d):r>d&&Z(t,i,f)})(n,l,t,o):null!==o?(null!==e.u&&(n.textContent=""),X(n,null,t,o,0,o.length-1)):null!==l&&Z(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=t.u:e.u!==t.u&&(n.data=t.u),c&&"svg"===t.v&&(c=!1)},oe=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(1===(t=r[n]).nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}oe(t)}},se=[],ie=e=>{let t,n,l,o,s=e.childNodes,r=s.length,c=0,a=0,f=0;for(r=s.length;c<r;c++){if((t=s[c])["s-sr"]&&(n=t["s-cr"]))for(o=t["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(se.some(e=>e.k===n)||(i=!0,n["s-sn"]=o,se.push({j:t,k:n})));1===t.nodeType&&ie(t)}},re=e=>{e.$&&e.$.ref&&e.$.ref(null),e.p&&e.p.forEach(re)},ce=(e,t)=>{t&&!e.R&&t["s-p"].push(new Promise(t=>e.R=t))},ae=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const o=t.o,s=()=>fe(e,t,n,o,l);let i;return ce(t,t.S),l?(t.t|=256,t.M&&(t.M.forEach(([e,t])=>pe(o,e,t)),t.M=null),i=pe(o,"componentWillLoad")):i=pe(o,"componentWillUpdate"),i=me(i,()=>pe(o,"componentWillRender")),me(i,()=>M(s))},fe=(l,o,c,a,d)=>{const p=l["s-rc"];d&&((e,t)=>{const n=I($&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(l,c),((l,o,c,a)=>{n=l.tagName;const d=o.L||H(null,null),p=(e=>e&&e.v===N)(a)?a:F(null,null,a);if(c.O&&(p.$=p.$||{},c.O.forEach(([e,t])=>p.$[t]=l[e])),p.v=null,p.t|=4,o.L=p,p._=d._=l.shadowRoot||l,e=l["s-sc"],t=l["s-cr"],s=$&&0!=(1&c.t),i=!1,le(d,p),r){ie(p._);for(let e=0;e<se.length;e++){const t=se[e];if(!t.k["s-ol"]){const e=f.createTextNode("");e["s-nr"]=t.k,t.k.parentNode.insertBefore(t.k["s-ol"]=e,t.k)}}u.t|=1;for(let e=0;e<se.length;e++){const t=se[e],n=t.j.parentNode;let l=t.j.nextSibling,o=t.k["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t.k["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){l=e;break}}(!l&&n!==t.k.parentNode||t.k.nextSibling!==l)&&t.k!==l&&n.insertBefore(t.k,l)}u.t&=-2}i&&oe(p._),se.length=0})(l,o,c,ue(a)),o.t&=-17,o.t|=2,p&&(p.forEach(e=>e()),l["s-rc"]=void 0);{const e=l["s-p"],t=()=>$e(l,o,c);0===e.length?t():(Promise.all(e).then(t),o.t|=4,e.length=0)}},ue=e=>{try{e=e.render()}catch(t){y(t)}return e},$e=(e,t,n)=>{const l=t.o,o=t.S;pe(l,"componentDidRender"),64&t.t||(t.t|=64,e.classList.add("hydrated"),pe(l,"componentDidLoad"),t.U(e),o||de()),t.P(e),t.R&&(t.R(),t.R=void 0),512&t.t&&S(()=>ae(e,t,n,!1)),t.t&=-517},de=()=>{f.documentElement.classList.add("hydrated"),u.t|=2},pe=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){y(l)}},me=(e,t)=>e&&e.then?e.then(t):t(),he=(e,t,n)=>{if(t.C){e.watchers&&(t.T=e.watchers);const l=Object.entries(t.C),o=e.prototype;if(l.forEach(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>m(e).W.get(t))(this,e)},set(n){((e,t,n,l)=>{const o=m(this),s=o.I,i=o.W.get(t),r=o.t,c=o.o;if(!((n=((e,t)=>null==e||O(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,l.C[t][0]))===i||8&r&&void 0!==i)&&(o.W.set(t,n),c)){if(l.T&&128&r){const e=l.T[t];e&&e.forEach(e=>{try{c[e](n,i,t)}catch(l){y(l)}})}2==(18&r)&&ae(s,o,l,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=m(this);return n.A.then(()=>n.o[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){u.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.O.push([e,o]),o})}}return e},we=(e,t,n,l,o,s,i)=>{let r,c,a,u;if(1===s.nodeType){for((r=s.getAttribute("c-id"))&&((c=r.split("."))[0]!==i&&"0"!==c[0]||(a={t:0,D:c[0],F:c[1],H:c[2],N:c[3],v:s.tagName.toLowerCase(),_:s,$:null,p:null,h:null,g:null,u:null},t.push(a),s.removeAttribute("c-id"),e.p||(e.p=[]),e.p[a.N]=a,e=a,l&&"0"===a.H&&(l[a.N]=a._))),u=s.childNodes.length-1;u>=0;u--)we(e,t,n,l,o,s.childNodes[u],i);if(s.shadowRoot)for(u=s.shadowRoot.childNodes.length-1;u>=0;u--)we(e,t,n,l,o,s.shadowRoot.childNodes[u],i)}else if(8===s.nodeType)(c=s.nodeValue.split("."))[1]!==i&&"0"!==c[1]||(a={t:0,D:c[1],F:c[2],H:c[3],N:c[4],_:s,$:null,p:null,h:null,g:null,v:null,u:null},"t"===(r=c[0])?(a._=s.nextSibling,a._&&3===a._.nodeType&&(a.u=a._.textContent,t.push(a),s.remove(),e.p||(e.p=[]),e.p[a.N]=a,l&&"0"===a.H&&(l[a.N]=a._))):a.D===i&&("s"===r?(a.v="slot",s["s-sn"]=c[5]?a.g=c[5]:"",s["s-sr"]=!0,l&&(a._=f.createElement(a.v),a.g&&a._.setAttribute("name",a.g),s.parentNode.insertBefore(a._,s),s.remove(),"0"===a.H&&(l[a.N]=a._)),n.push(a),e.p||(e.p=[]),e.p[a.N]=a):"r"===r&&(l?s.remove():(o["s-cr"]=s,s["s-cn"]=!0))));else if(e&&"style"===e.v){const t=H(null,s.textContent);t._=s,t.N="0",e.p=[t]}},ye=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)ye(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)ye(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},be=e=>{pe(e,"connectedCallback")},ge=e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ve=(e,t={})=>{const n=[],l=t.exclude||[],o=f.head,s=a.customElements,i=o.querySelector("meta[charset]"),r=f.createElement("style"),c=[];let d,h=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",f.baseURI).href,t.syncQueue&&(u.t|=4),u.t|=2;{const e=f.querySelectorAll("style[s-id]");for(let t=0;t<e.length;t++){const n=e[t];W(n.getAttribute("s-id"),D(n.innerHTML),!0)}}e.forEach(e=>e[1].forEach(t=>{const o={t:t[0],i:t[1],C:t[2],q:t[3]};o.C=t[2],o.q=t[3],o.O=[],o.T={},!$&&1&o.t&&(o.t|=8);const i=o.i,r=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,I:e,W:new Map};t.A=new Promise(e=>t.P=e),t.B=new Promise(e=>t.U=e),e["s-p"]=[],e["s-rc"]=[],p.set(e,t)})(e=this),1&o.t&&($?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){d&&(clearTimeout(d),d=null),h?c.push(this):u.jmp(()=>((e,t)=>{if(0==(1&u.t)){const n=()=>{},l=m(e);if(t.q&&(l.V=((e,t,n)=>{t.M=t.M||[];const l=n.map(([n,l,o])=>{const s=((e,t)=>8&t?a:32&t?f.body:16&t?e.parentElement:e)(e,n),i=((e,t)=>n=>{256&e.t?e.o[t](n):e.M.push([t,n])})(t,o),r=(e=>({passive:0!=(1&e),capture:0!=(2&e)}))(n);return u.ael(s,l,i,r),()=>u.rel(s,l,i,r)});return()=>l.forEach(e=>e())})(e,l,t.q)),!(1&l.t)){let n;if(l.t|=1,n=e.getAttribute("s-id")){if($&&1&t.t){const n=I(e.shadowRoot,t);e.classList.remove(n+"-h",n+"-s")}((e,t,n,l)=>{const o=e.shadowRoot,s=[],i=o?[]:null,r=l.L=H(t,null);u.Y||ye(f.body,u.Y=new Map),e["s-id"]=n,e.removeAttribute("s-id"),we(r,s,[],i,e,e,n),s.forEach(e=>{const n=e.D+"."+e.F,l=u.Y.get(n),s=e._;l&&$&&""===l["s-en"]&&l.parentNode.insertBefore(s,l.nextSibling),o||(s["s-hn"]=t,l&&(s["s-ol"]=l,s["s-ol"]["s-nr"]=s)),u.Y.delete(n)}),o&&i.forEach(e=>{e&&o.appendChild(e)})})(e,t.i,n,l)}n||(4&t.t||8&t.t)&&ge(e);{let t=e;for(;t=t.parentNode||t.host;)if(1===t.nodeType&&t.hasAttribute("s-id")||t["s-p"]){ce(l,l.S=t);break}}t.C&&Object.entries(t.C).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),S(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=(e=>{const t=e.i.replace(/-/g,"_"),n=e.G,l=b.get(n);return l?l[t]:__sc_import_calcite(`./${n}.entry.js`).then(e=>(b.set(n,e),e[t]),y)})(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.T=o.watchers,he(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){y(r)}t.t&=-9,t.t|=128,e(),be(t.o)}const e=A(n.i);if(!g.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_calcite("./p-affe7c09.js").then(t=>t.scopeCss(l,e,!1))),W(e,l,!!(1&n.t)),t()}}const s=t.S,i=()=>ae(e,t,n,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(e,l,t))}be(l.o),n()}})(this,o))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const e=m(this),t=e.o;e.V&&(e.V(),e.V=void 0),pe(t,"disconnectedCallback"),pe(t,"componentDidUnload")}})())}forceUpdate(){((e,t)=>{{const n=m(e);n.I.isConnected&&2==(18&n.t)&&ae(e,n,t,!1)}})(this,o)}componentOnReady(){return m(this).B}};o.G=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,he(r,o,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),h=!1,c.length>0?c.forEach(e=>e.connectedCallback()):u.jmp(()=>d=setTimeout(de,30,"timeout"))},_e=(e,t,n)=>{const l=je(e);return{emit:e=>{const o=new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e});return l.dispatchEvent(o),o}}},ke=e=>{const t=new URL(e,u.l);return t.origin!==a.location.origin?t.href:t.pathname},je=e=>m(e).I;export{N as H,U as a,ve as b,_e as c,ke as d,je as g,F as h,P as p,h as r};