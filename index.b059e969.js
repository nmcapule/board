function t(t,e){return Object.keys(e).forEach(function(i){"default"===i||"__esModule"===i||Object.prototype.hasOwnProperty.call(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[i]}})}),t}function e(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}var i,s,r={},u={},o={};function n(t,e,i,s){var r,u=arguments.length,o=u<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(o=(u<3?r(o):u>3?r(e,i,o):r(e,i))||o);return u>3&&o&&Object.defineProperty(e,i,o),o}e(o,"PinnableRenderer",()=>tU),"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=globalThis,a=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h=Symbol(),d=new WeakMap;class c{constructor(t,e,i){if(this._$cssResult$=!0,i!==h)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(a&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=d.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&d.set(e,t))}return t}toString(){return this.cssText}}const p=t=>new c("string"==typeof t?t:t+"",void 0,h),$=(t,...e)=>new c(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,h),f=(t,e)=>{if(a)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),s=l.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},g=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return p(e)})(t):t,{is:_,defineProperty:y,getOwnPropertyDescriptor:m,getOwnPropertyNames:b,getOwnPropertySymbols:v,getPrototypeOf:A}=Object,S=globalThis,E=S.trustedTypes,w=E?E.emptyScript:"",x=S.reactiveElementPolyfillSupport,C=(t,e)=>t,P={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},U=(t,e)=>!_(t,e),k={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:U};Symbol.metadata??=Symbol("metadata"),S.litPropertyMetadata??=new WeakMap;class O extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&y(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){let u=s?.call(this);r.call(this,e),this.requestUpdate(t,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let t=A(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let t=this.properties;for(let e of[...b(t),...v(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(g(i));else void 0!==t&&e.push(g(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return f(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:P).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){let t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:P;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(!((i??=this.constructor.getPropertyOptions(t)).hasChanged??U)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}}O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[C("elementProperties")]=new Map,O[C("finalized")]=new Map,x?.({ReactiveElement:O}),(S.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,N=T.trustedTypes,M=N?N.createPolicy("lit-html",{createHTML:t=>t}):void 0,R="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+H,j=`<${D}>`,z=document,L=()=>z.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,W=t=>I(t)||"function"==typeof t?.[Symbol.iterator],F="[ 	\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,K=/>/g,q=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,G=/"/g,Y=/^(?:script|style|textarea|title)$/i,Q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),X=Q(1),tt=(Q(2),Symbol.for("lit-noChange")),te=Symbol.for("lit-nothing"),ti=new WeakMap,ts=z.createTreeWalker(z,129);function tr(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const tu=(t,e)=>{let i=t.length-1,s=[],r,u=2===e?"<svg>":"",o=V;for(let e=0;e<i;e++){let i=t[e],n,l,a=-1,h=0;for(;h<i.length&&(o.lastIndex=h,null!==(l=o.exec(i)));)h=o.lastIndex,o===V?"!--"===l[1]?o=J:void 0!==l[1]?o=K:void 0!==l[2]?(Y.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=q):void 0!==l[3]&&(o=q):o===q?">"===l[0]?(o=r??V,a=-1):void 0===l[1]?a=-2:(a=o.lastIndex-l[2].length,n=l[1],o=void 0===l[3]?q:'"'===l[3]?G:Z):o===G||o===Z?o=q:o===J||o===K?o=V:(o=q,r=void 0);let d=o===q&&t[e+1].startsWith("/>")?" ":"";u+=o===V?i+j:a>=0?(s.push(n),i.slice(0,a)+R+i.slice(a)+H+d):i+H+(-2===a?e:d)}return[tr(t,u+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class to{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,u=0,o=t.length-1,n=this.parts,[l,a]=tu(t,e);if(this.el=to.createElement(l,i),ts.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=ts.nextNode())&&n.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(let t of s.getAttributeNames())if(t.endsWith(R)){let e=a[u++],i=s.getAttribute(t).split(H),o=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?td:"?"===o[1]?tc:"@"===o[1]?tp:th}),s.removeAttribute(t)}else t.startsWith(H)&&(n.push({type:6,index:r}),s.removeAttribute(t));if(Y.test(s.tagName)){let t=s.textContent.split(H),e=t.length-1;if(e>0){s.textContent=N?N.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],L()),ts.nextNode(),n.push({type:2,index:++r});s.append(t[e],L())}}}else if(8===s.nodeType){if(s.data===D)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(H,t+1));)n.push({type:7,index:r}),t+=H.length-1}}r++}}static createElement(t,e){let i=z.createElement("template");return i.innerHTML=t,i}}function tn(t,e,i=t,s){if(e===tt)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl,u=B(e)?void 0:e._$litDirective$;return r?.constructor!==u&&(r?._$AO?.(!1),void 0===u?r=void 0:(r=new u(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=tn(t,r._$AS(t,e.values),r,s)),e}class tl{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??z).importNode(e,!0);ts.currentNode=s;let r=ts.nextNode(),u=0,o=0,n=i[0];for(;void 0!==n;){if(u===n.index){let e;2===n.type?e=new ta(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new t$(r,this,t)),this._$AV.push(e),n=i[++o]}u!==n?.index&&(r=ts.nextNode(),u++)}return ts.currentNode=z,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ta{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){B(t=tn(this,t,e))?t===te||null==t||""===t?(this._$AH!==te&&this._$AR(),this._$AH=te):t!==this._$AH&&t!==tt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):W(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==te&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=to.createElement(tr(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new tl(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=ti.get(t.strings);return void 0===e&&ti.set(t.strings,e=new to(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new ta(this.S(L()),this.S(L()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class th{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=te,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=te}_$AI(t,e=this,i,s){let r=this.strings,u=!1;if(void 0===r)(u=!B(t=tn(this,t,e,0))||t!==this._$AH&&t!==tt)&&(this._$AH=t);else{let s,o;let n=t;for(t=r[0],s=0;s<r.length-1;s++)(o=tn(this,n[i+s],e,s))===tt&&(o=this._$AH[s]),u||=!B(o)||o!==this._$AH[s],o===te?t=te:t!==te&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}u&&!s&&this.j(t)}j(t){t===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class td extends th{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===te?void 0:t}}class tc extends th{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==te)}}class tp extends th{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=tn(this,t,e,0)??te)===tt)return;let i=this._$AH,s=t===te&&i!==te||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==te&&(i===te||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class t${constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tn(this,t)}}const tf=T.litHtmlPolyfillSupport;tf?.(to,ta),(T.litHtmlVersions??=[]).push("3.1.4");const tg=(t,e,i)=>{let s=i?.renderBefore??e,r=s._$litPart$;if(void 0===r){let t=i?.renderBefore??null;s._$litPart$=r=new ta(e.insertBefore(L(),t),t,void 0,i??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class t_ extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tg(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tt}}t_._$litElement$=!0,t_.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:t_});const ty=globalThis.litElementPolyfillSupport;ty?.({LitElement:t_}),(globalThis.litElementVersions??=[]).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tm=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},tb={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:U},tv=(t=tb,e,i)=>{let{kind:s,metadata:r}=i,u=globalThis.litPropertyMetadata.get(r);if(void 0===u&&globalThis.litPropertyMetadata.set(r,u=new Map),u.set(i.name,t),"accessor"===s){let{name:s}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){let{name:s}=i;return function(i){let r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function tA(t){return(e,i)=>"object"==typeof i?tv(t,e,i):((t,e,i)=>{let s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tS(t){return tA({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tE=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tw(t,e){return(i,s,r)=>{let u=e=>e.renderRoot?.querySelector(t)??null;if(e){let{get:t,set:e}="object"==typeof s?i:r??(()=>{let t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return tE(i,s,{get(){let i=t.call(this);return void 0===i&&(null!==(i=u(this))||this.hasUpdated)&&e.call(this,i),i}})}return tE(i,s,{get(){return u(this)}})}}class tx{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tC extends tx{constructor(t){if(super(t),this.it=te,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===te||null==t)return this._t=void 0,this.it=t;if(t===tt)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}tC.directiveName="unsafeHTML",tC.resultType=1;const tP=(...t)=>({_$litDirective$:tC,values:t});class tU extends t_{static{this.styles=$`
    .pinnable {
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      border-radius: 6px;
      padding: 8px;
      box-sizing: border-box;
      width: 200px;
      height: 200px;
    }
  `}render(){return X`
      <div
        class="pinnable"
        style="
          width: ${this.spec?.transform.w}px;
          height: ${this.spec?.transform.h}px;
          ${p(this.spec?.styles)}"
        @mouseenter=${t=>this.toggleSpec=!0}
        @mouseleave=${t=>this.toggleSpec=!1}
      >
        ${this.toggleSpec&&this.debugMode?X`<pre>${JSON.stringify(this.spec,null,2)}</pre>`:tP(this.spec?.html)}
      </div>
    `}constructor(...t){super(...t),this.debugMode=!1,this.toggleSpec=!1}}n([tA({type:Boolean})],tU.prototype,"debugMode",void 0),n([tA({type:Object})],tU.prototype,"spec",void 0),n([tS()],tU.prototype,"toggleSpec",void 0),tU=n([tm("pinnable-renderer")],tU);var tk={};e(tk,"PinnableEditor",()=>tN);var tO={};e(tO,"PinnableKind",()=>s),(i=s||(s={}))[i.DEFAULT=0]="DEFAULT";const tT={kind:s.DEFAULT,transform:{w:320,h:240},html:"",styles:""};class tN extends t_{static{this.styles=$`
    :host {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      position: relative;
      align-items: stretch;
      background-color: #efefef;
      box-sizing: border-box;
      padding: 8px;
      gap: 8px;

      /** magicpattern.design */
      background-color: #e5e5f7;
      opacity: 0.8;
      background-image: radial-gradient(#444cf7 0.5px, transparent 0.5px),
        radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
      background-size: 20px 20px;
      background-position: 0 0, 10px 10px;
    }

    :host > .preview {
      width: 50%;
      overflow: auto;
    }

    :host > .preview > .message {
      color: #6a6a6a;
    }

    :host > .editor {
      width: 50%;
      padding: 4px;
      margin: 0;
      border: 0;
      border-radius: 4px;
      box-sizing: border-box;
      background-color: #ffffff;
    }

    .editor:focus {
      border: 0;
      outline: 0;
    }
  `}render(){return X`
      <div class="preview">
        ${this.message?X`<pre class="message">${this.message}</pre>`:X``}
        <pinnable-renderer .spec=${this.spec}></pinnable-renderer>
      </div>
      <textarea
        class="editor"
        contenteditable
        .value=${JSON.stringify(this.spec,void 0,2)}
        @input=${this._onChange}
        @keydown=${this._onKeyDown}
      ></textarea>
    `}_onChange(t){this._updateSpecFromEditor(),this.dispatchEvent(new CustomEvent("change",{detail:this.spec,bubbles:!0,composed:!0}))}_onKeyDown(t){"Tab"===t.key&&(this.editor.setRangeText("  ",this.editor.selectionStart,this.editor.selectionEnd,"end"),t.preventDefault()),t.ctrlKey&&"s"===t.key&&(this._commit(),t.preventDefault()),t.ctrlKey&&"d"===t.key&&(this._delete(),t.preventDefault())}_updateSpecFromEditor(){this.message="";try{this.spec=JSON.parse(this.editor.value)}catch(t){this.message=t,console.warn("Error on editing pinnable spec:",t)}}_commit(){this._updateSpecFromEditor(),this.message="Saved!",this.dispatchEvent(new CustomEvent("commit",{detail:this.spec,bubbles:!0,composed:!0}))}_delete(){this.dispatchEvent(new CustomEvent("delete",{detail:this.spec,bubbles:!0,composed:!0}))}constructor(...t){super(...t),this.spec=tT}}n([tw("textarea.editor")],tN.prototype,"editor",void 0),n([tA({type:Object})],tN.prototype,"spec",void 0),n([tS()],tN.prototype,"message",void 0),tN=n([tm("pinnable-editor")],tN),t(u,o),t(u,tk),t(u,tO);var tM={};e(tM,"BoardPersistenceService",()=>tR),e(tM,"Board",()=>tH);class tR{constructor(t){this.key=t}save(t){console.debug(`Saving pinnable specs from key ${this.key}`,t),localStorage.setItem(this.key,JSON.stringify(t))}load(){try{let t=localStorage.getItem(this.key);if(!t)throw Error(`missing key for key ${this.key}`);return JSON.parse(t)}catch(t){console.error(`Error loading saved pinnable specs from key: ${this.key}`)}return null}reset(){localStorage.clear()}}class tH extends t_{static{this.styles=$`
    :host {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 12px;
    }

    .editor-dialog {
      z-index: 100;
      width: 80vw;
      height: 80vh;
      border-radius: 4px;
      outline: 0;
      border: 0;
      padding: 0;
      box-shadow: 0px 2px 32px #c3c3c3;
    }

    .pinnable {
      cursor: pointer;
    }
  `}connectedCallback(){super.connectedCallback(),this.specs=this.storage.load()??this.specs}render(){return X`
      <dialog class="editor-dialog">
        <pinnable-editor
          .spec=${this.editingSpecs}
          style="width: 100%; height: 100%"
          @commit=${t=>this.commitPinnableSpec(t.detail)}
          @delete=${t=>this.deletePinnableSpec(t.detail)}
        ></pinnable-editor>
      </dialog>
      ${this.specs.map(t=>X`<pinnable-renderer
            class="pinnable"
            .spec=${t}
            @click=${()=>this.editPinnableSpec(t)}
          ></pinnable-renderer>`)}
      <button @click=${()=>this.addPinnableSpec()}>Add new pinnable</button>
      <button @click=${()=>this.storage.reset()}>Clear localStorage</button>
    `}editPinnableSpec(t){this.editingSpecs=t,this.editorDialog?.show()}commitPinnableSpec(t){this.specs=this.specs.map(e=>e.id===t.id?t:e),this.storage.save(this.specs),this.editorDialog?.close()}deletePinnableSpec(t){this.specs=this.specs.filter(e=>e.id!==t.id),this.storage.save(this.specs),this.editorDialog?.close()}addPinnableSpec(){let t=Math.random().toString(36),e={id:t,kind:s.DEFAULT,transform:{w:120,h:80},html:`hello world ${t}`,styles:"border: 1px dashed gray"};this.specs=this.specs.concat(e),this.storage.save(this.specs),this.editPinnableSpec(e)}constructor(...t){super(...t),this.specs=[{id:"default",kind:s.DEFAULT,transform:{w:460,h:600},html:`
      <h1>Welcome a-board!</h1>
      <ul>
        <li>Click <code>Add new pinnable</code> to create pinnable
        <li>Click on a pinnable to edit
        <li><b>When editing</b>: <code>Ctrl+s</code> to save
        <li><b>When editing</b>: <code>Ctrl+d</code> to delete
      </ul>
      <pre>
        You can do more stuff here!
        \u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2584}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2584}\u{2591}\u{2591}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{258C}\u{2592}\u{2588}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2584}\u{2580}\u{2592}\u{258C}\u{2591}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{258C}\u{2592}\u{2592}\u{2588}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2584}\u{2580}\u{2592}\u{2592}\u{2592}\u{2590}\u{2591}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2590}\u{2584}\u{2580}\u{2592}\u{2592}\u{2580}\u{2580}\u{2580}\u{2580}\u{2584}\u{2584}\u{2584}\u{2580}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2590}\u{2591}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2584}\u{2584}\u{2580}\u{2592}\u{2591}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2588}\u{2592}\u{2592}\u{2584}\u{2588}\u{2592}\u{2590}\u{2591}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{2591}\u{2584}\u{2580}\u{2592}\u{2592}\u{2592}\u{2591}\u{2591}\u{2591}\u{2592}\u{2592}\u{2592}\u{2591}\u{2591}\u{2591}\u{2592}\u{2592}\u{2592}\u{2580}\u{2588}\u{2588}\u{2580}\u{2592}\u{258C}\u{2591}\u{2591}\u{2591} 
        \u{2591}\u{2591}\u{2590}\u{2592}\u{2592}\u{2592}\u{2584}\u{2584}\u{2592}\u{2592}\u{2592}\u{2592}\u{2591}\u{2591}\u{2591}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2580}\u{2584}\u{2592}\u{2592}\u{258C}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{258C}\u{2591}\u{2591}\u{258C}\u{2588}\u{2580}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2584}\u{2580}\u{2588}\u{2584}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2588}\u{2592}\u{2590}\u{2591}\u{2591}
        \u{2591}\u{2590}\u{2591}\u{2591}\u{2591}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{258C}\u{2588}\u{2588}\u{2580}\u{2592}\u{2592}\u{2591}\u{2591}\u{2591}\u{2592}\u{2592}\u{2592}\u{2580}\u{2584}\u{258C}\u{2591}
        \u{2591}\u{258C}\u{2591}\u{2592}\u{2584}\u{2588}\u{2588}\u{2584}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2592}\u{2592}\u{2592}\u{2592}\u{258C}\u{2591}
        \u{2590}\u{2592}\u{2580}\u{2590}\u{2584}\u{2588}\u{2584}\u{2588}\u{258C}\u{2584}\u{2591}\u{2580}\u{2592}\u{2592}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2592}\u{2592}\u{2592}\u{2590}\u{2591}
        \u{2590}\u{2592}\u{2592}\u{2590}\u{2580}\u{2590}\u{2580}\u{2592}\u{2591}\u{2584}\u{2584}\u{2592}\u{2584}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2591}\u{2592}\u{2591}\u{2592}\u{2591}\u{2592}\u{2592}\u{2592}\u{2592}\u{258C}
        \u{2590}\u{2592}\u{2592}\u{2592}\u{2580}\u{2580}\u{2584}\u{2584}\u{2592}\u{2592}\u{2592}\u{2584}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2591}\u{2592}\u{2591}\u{2592}\u{2591}\u{2592}\u{2592}\u{2590}\u{2591}
        \u{2591}\u{258C}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2580}\u{2580}\u{2580}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2591}\u{2592}so much\u{2592}\u{258C}\u{2591}
        \u{2591}\u{2590}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2591}\u{2592}\u{2591}wow\u{2592}\u{2584}\u{2592}\u{2592}\u{2590}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{2580}\u{2584}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2591}\u{2592}\u{2591}\u{2592}\u{2591}\u{2592}\u{2584}\u{2592}\u{2592}\u{2592}\u{2592}\u{258C}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{2591}\u{2591}\u{2580}\u{2584}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2584}\u{2584}\u{2584}\u{2580}\u{2592}\u{2592}\u{2592}\u{2592}\u{2584}\u{2580}\u{2591}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2580}\u{2584}\u{2584}\u{2584}\u{2584}\u{2584}\u{2584}\u{2580}\u{2580}\u{2580}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2584}\u{2584}\u{2580}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}
        \u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2592}\u{2580}\u{2580}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}\u{2591}
      </pre>
      `,styles:`
        font-family: Google Sans, Verdana, Arial;
        font-size: 16px;
      `}],this.storage=new tR("default")}}n([tw("dialog.editor-dialog")],tH.prototype,"editorDialog",void 0),n([tS()],tH.prototype,"specs",void 0),n([tS()],tH.prototype,"editingSpecs",void 0),tH=n([tm("the-board")],tH),t(r,u),t(r,tM);
//# sourceMappingURL=index.b059e969.js.map
