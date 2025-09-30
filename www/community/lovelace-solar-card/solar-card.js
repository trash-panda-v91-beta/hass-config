/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,_=globalThis,p=_.trustedTypes,v=p?p.emptyScript:"",y=_.reactiveElementPolyfillSupport,m=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>!a(t,e),w={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...c(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??f)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[m("elementProperties")]=new Map,$[m("finalized")]=new Map,y?.({ReactiveElement:$}),(_.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b=globalThis,x=b.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+C,T=`<${S}>`,P=document,R=()=>P.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,O="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,L=/>/g,H=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,j=/"/g,F=/^(?:script|style|textarea|title)$/i,I=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=I(1),W=I(2),z=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),G=new WeakMap,V=P.createTreeWalker(P,129);function K(t,e){if(!k(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=M;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===M?"!--"===l[1]?r=N:void 0!==l[1]?r=L:void 0!==l[2]?(F.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=o??M,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?H:'"'===l[3]?j:U):r===j||r===U?r=H:r===N||r===L?r=M:(r=H,o=void 0);const h=r===H&&t[e+1].startsWith("/>")?" ":"";n+=r===M?i+T:d>=0?(s.push(a),i.slice(0,d)+E+i.slice(d)+C+h):i+C+(-2===d?e:h)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,d]=Y(t,e);if(this.el=Z.createElement(l,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=d[n++],i=s.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(F.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],R()),V.nextNode(),a.push({type:2,index:++o});s.append(t[e],R())}}}else if(8===s.nodeType)if(s.data===S)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===z)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=D(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);V.currentNode=s;let o=V.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new X(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=V.nextNode(),n++)}return V.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),D(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>k(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Z(t)),e}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new X(this.O(R()),this.O(R()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=J(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=J(this,s[i+r],e,r),a===z&&(a=this._$AH[r]),n||=!D(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??q)===z)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}(0,b.litHtmlPolyfillSupport)?.(Z,X),(b.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new X(e.insertBefore(R(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});(0,nt.litElementPolyfillSupport)?.({LitElement:rt}),(nt.litElementVersions??=[]).push("4.2.1");var at={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},lt={production:"Production",consumption:"Consumption",yield_today:"Yield today",grid_today:"Grid today",battery:"Battery",inverter_state:"Inverter state",total_yield:"Total yield",grid_consumption:"Grid consumption",battery_capacity:"Battery capacity",inverter_mode:"Inverter mode",weather_today:"Weather today",solar_forecast:"Solar forecast",expected_forecast:"Expected forecast"},dt={common:at,card:lt},ct={production:"Producción",consumption:"Consumo",yield_today:"Producción hoy",grid_today:"Red hoy",battery:"Batería",inverter_state:"Estado del inversor",total_yield:"Producción total",grid_consumption:"Consumo de red",battery_capacity:"Capacidad de la batería",inverter_mode:"Modo del inversor",weather_today:"Tiempo hoy",solar_forecast:"Pronóstico solar",expected_forecast:"Pronóstico esperado"},ht={card:ct},ut={production:"Production",consumption:"Consommation",yield_today:"Production aujourd'hui",grid_today:"Réseau aujourd'hui",battery:"Batterie",inverter_state:"État de l'onduleur",total_yield:"Production totale",grid_consumption:"Consommation réseau",battery_capacity:"Capacité de la batterie",inverter_mode:"Mode de l'onduleur",weather_today:"Météo aujourd'hui",solar_forecast:"Prévision solaire",expected_forecast:"Prévision attendue"},_t={card:ut},pt={production:"Erzeugung",consumption:"Verbrauch",yield_today:"Erzeugung heute",grid_today:"Netz heute",battery:"Batterie",inverter_state:"Wechselrichterstatus",total_yield:"Gesamterzeugung",grid_consumption:"Netzverbrauch",battery_capacity:"Batteriekapazität",inverter_mode:"Wechselrichtermodus",weather_today:"Wetter heute",solar_forecast:"Solarvorhersage",expected_forecast:"Erwartete Vorhersage"},vt={card:pt},yt={production:"Produção",consumption:"Consumo",yield_today:"Produção hoje",grid_today:"Rede hoje",battery:"Bateria",inverter_state:"Estado do inversor",total_yield:"Produção total",grid_consumption:"Consumo da rede",battery_capacity:"Capacidade da bateria",inverter_mode:"Modo do inversor",weather_today:"Tempo hoje",solar_forecast:"Previsão solar",expected_forecast:"Previsão esperada"},mt={card:yt},gt={production:"Productie",consumption:"Verbruik",yield_today:"Opbrengst vandaag",grid_today:"Net vandaag",battery:"Batterij",inverter_state:"Status omvormer",total_yield:"Totale opbrengst",grid_consumption:"Netverbruik",battery_capacity:"Batterijcapaciteit",inverter_mode:"Omvormermodus",weather_today:"Weer vandaag",solar_forecast:"Zonneprognose",expected_forecast:"Verwachte prognose"},ft={card:gt};const wt={en:Object.freeze({__proto__:null,card:lt,common:at,default:dt}),es:Object.freeze({__proto__:null,card:ct,default:ht}),fr:Object.freeze({__proto__:null,card:ut,default:_t}),de:Object.freeze({__proto__:null,card:pt,default:vt}),pt:Object.freeze({__proto__:null,card:yt,default:mt}),nl:Object.freeze({__proto__:null,card:gt,default:ft})};function $t(t,e="",i=""){var s,o,n;let r="en";try{const t=document.querySelector("home-assistant")||document.querySelector("hc-main")||document.querySelector("home-assistant-main"),e=null==t?void 0:t.hass;r=(null===(s=null==e?void 0:e.locale)||void 0===s?void 0:s.language)||(null==e?void 0:e.language)||(null===(o=document.documentElement)||void 0===o?void 0:o.lang)||navigator.language||"en"}catch(t){r=(null===(n=document.documentElement)||void 0===n?void 0:n.lang)||navigator.language||"en"}const a=String(r).replace(/['"]+/g,"").replace("-","_"),l=a.split("_")[0],d=wt[a]||wt[l]||wt.en;let c;try{c=t.split(".").reduce(((t,e)=>null==t?void 0:t[e]),d)}catch(t){c=void 0}return void 0===c&&(c=t.split(".").reduce(((t,e)=>null==t?void 0:t[e]),wt.en)),"string"!=typeof c&&(c=t),""!==e&&""!==i&&(c=c.replace(e,i)),c}class bt extends rt{static get properties(){return{_hass:{attribute:!1},config:{attribute:!1}}}constructor(){super(),this._valueChanged=t=>{t.stopPropagation();const e=Object.assign(Object.assign({},this.config),t.detail.value);this.config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))},this._computeLabel=t=>({production_entity:"PV production entity (W / kW)",current_consumption_entity:"Current consumption entity (W / kW)",show_energy_flow:"Show Energy Flow (built-in)",show_top_devices:"Show top devices row",top_devices_max:"Max device badges (1–8)",show_solar_forecast:"Show solar forecast panel",weather_entity:"Weather entity (optional)",solar_forecast_today_entity:"Solar forecast today entity (kWh, optional)",yield_today_entity:"Yield today entity (kWh)",grid_consumption_today_entity:"Grid consumption today entity (kWh)",battery_percentage_entity:"Battery percentage entity (%)",inverter_state_entity:"Inverter state entity (text)",total_yield_entity:"Total yield entity (kWh)",total_grid_consumption_entity:"Total grid consumption entity (kWh)",battery_capacity_entity:"Battery capacity entity (kWh)",inverter_mode_entity:"Inverter mode entity (text sensor)",image_url:"Image URL (optional)",trend_graph_entities:"Trend graph entities (multiple sensors)",trend_graph_hours_to_show:"Trend graph hours (default 24)"}[t.name]||t.name),this._computeHelper=t=>({yield_today_entity:"Optional. Leave empty to compute from 'Total yield' using today's history (00:00 → now).",grid_consumption_today_entity:"Optional. Leave empty to compute from 'Total grid consumption' using today's history (00:00 → now).",show_energy_flow:"Adds the built-in Energy Flow (Sankey) graph below this card (requires Energy configuration).",show_top_devices:"Adds a single-row list of top-consuming devices from Energy preferences (requires Energy configuration).",top_devices_max:"Number of top-consuming device badges to display",show_solar_forecast:"Shows a compact forecast panel aligned to the right.",weather_entity:"If set, shows temperature and condition for today.",solar_forecast_today_entity:"If set and no weather entity, shows today's expected solar production.",trend_graph_entities:"Optional. Select one or more sensor entities to render as individual trend graphs (Tile features).",trend_graph_hours_to_show:"Optional. Applies to all auto-generated trend graphs."}[t.name]),this.config={type:"solar-card"},this._hass=null}set hass(t){this._hass=t,this.requestUpdate()}get hass(){return this._hass}setConfig(t){this.config=t||{},this.requestUpdate()}_buildSchemas(){const t=this.config||{},e=[{name:"show_solar_forecast",selector:{boolean:{}}}];t.show_solar_forecast&&(e.push({name:"weather_entity",selector:{entity:{domain:"weather"}}}),e.push({name:"solar_forecast_today_entity",selector:{entity:{domain:"sensor",device_class:"energy"}}}));const i=[{name:"show_top_devices",selector:{boolean:{}}}];t.show_top_devices&&i.push({name:"top_devices_max",selector:{number:{min:1,max:8,mode:"box"}}});return{overview:[{name:"production_entity",required:!0,selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"current_consumption_entity",required:!0,selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"image_url",selector:{text:{}}}],today:[{name:"yield_today_entity",selector:{entity:{domain:"sensor",device_class:"energy"}}},{name:"grid_consumption_today_entity",selector:{entity:{domain:"sensor",device_class:"energy"}}},{name:"battery_percentage_entity",selector:{entity:{domain:"sensor",device_class:"battery"}}},{name:"inverter_state_entity",selector:{entity:{domain:"sensor"}}}],totals:[{name:"total_yield_entity",selector:{entity:{domain:"sensor",device_class:"energy"}}},{name:"total_grid_consumption_entity",selector:{entity:{domain:"sensor",device_class:"energy"}}},{name:"battery_capacity_entity",selector:{entity:{domain:"sensor"}}},{name:"inverter_mode_entity",selector:{entity:{domain:"sensor"}}}],weather:e,topDevices:i,trend:[{name:"trend_graph_entities",selector:{entity:{multiple:!0,domain:"sensor"}}},{name:"trend_graph_hours_to_show",selector:{number:{min:1,max:168,mode:"box"}}}],sankey:[{name:"show_energy_flow",selector:{boolean:{}}}]}}render(){const t=this._buildSchemas();return B`
      <div class="editor">
        <div class="section">
          <h3>Overview</h3>
          <ha-form
            .hass=${this._hass}
            .data=${this.config}
            .schema=${t.overview}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <div class="section">
          <h3>Today</h3>
          <ha-form
            .hass=${this._hass}
            .data=${this.config}
            .schema=${t.today}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <div class="section">
          <h3>Totals & Settings</h3>
          <ha-form
            .hass=${this._hass}
            .data=${this.config}
            .schema=${t.totals}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <div class="section">
          <h3>Weather forecast</h3>
          <ha-form
            .hass=${this._hass}
            .data=${this.config}
            .schema=${t.weather}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <div class="section">
          <h3>Top consuming devices</h3>
          <ha-form
            .hass=${this._hass}
            .data=${this.config}
            .schema=${t.topDevices}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <div class="section">
          <h3>Trend graphs</h3>
          <ha-form
            .hass=${this._hass}
            .data=${this.config}
            .schema=${t.trend}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <div class="section">
          <h3>Sankey flow graph</h3>
          <ha-form
            .hass=${this._hass}
            .data=${this.config}
            .schema=${t.sankey}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
      </div>
    `}}bt.styles=n`
    .editor {
      padding: 8px 0;
      display: grid;
      gap: 16px;
    }
    .section {
      display: grid;
      gap: 8px;
    }
    .section h3 {
      margin: 8px 0 0;
      font-weight: 600;
    }
  `,customElements.define("solar-card-editor",bt),window.customCards=window.customCards||[],window.customCards.push({type:"solar-card",name:"Solar Energy Card",description:"Left panel: yield today, current consumption, title, and image.",preview:!0,documentationURL:"https://github.com/victorigualada/lovelace-solar-card"});const xt=new Set(["unknown","unavailable","none"]);function At(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Et(t,e,i={}){var s;if(null==t||""===t)return"—";const o=Number(t);if(Number.isNaN(o))return String(t);const n=(null===(s=null==e?void 0:e.locale)||void 0===s?void 0:s.language)||(null==e?void 0:e.language)||navigator.language||"en";try{return new Intl.NumberFormat(n,i).format(o)}catch(t){return String(o)}}function Ct(t,e){var i;if(!e)return{value:"—",unit:""};const s=null===(i=null==t?void 0:t.states)||void 0===i?void 0:i[e];if(!s)return{value:"—",unit:""};const o=s.attributes.unit_of_measurement||"",n=s.state;if(xt.has(n))return{value:"—",unit:o};return{value:Et(n,t,{maximumFractionDigits:2}),unit:o}}class St extends rt{static get properties(){return{_hass:{attribute:!1},_config:{attribute:!1},_deviceBadges:{attribute:!1}}}constructor(){super(),this._onDevicesClick=t=>{var e,i,s;const o=t.composedPath?t.composedPath().find((t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.classList)||void 0===e?void 0:e.contains)||void 0===i?void 0:i.call(e,"badge")})):null===(i=(e=t.target).closest)||void 0===i?void 0:i.call(e,".badge"),n=null===(s=null==o?void 0:o.getAttribute)||void 0===s?void 0:s.call(o,"data-stat-id");n&&this._openBadgeDevice(n)},this._config={type:"solar-card"},this._hass=null,this._gridTodayCache={key:null,dateKey:null,result:null,inflight:!1},this._yieldTodayCache={key:null,dateKey:null,result:null,inflight:!1},this._energyFlowEl=null,this._gridKwhEl=null,this._trendGraphEls=null,this._trendGraphsSig=null,this._deviceBadges=[],this._devicesRefreshing=!1,this._devicesLastFetch=0,this._devicesTimer=null,this._entityRegistry=null,this._deviceRegistry=null,this._devicePowerMap=null,this._deviceList=[],this._deviceIconById=null,this._entityRegistryByEntityId=null,this._lastLang=null}setConfig(t){var e,i,s,o,n,r,a,l,d,c,h,u,_,p,v,y,m,g;const f=Object.assign({production_entity:null!==(i=null!==(e=t.production_entity)&&void 0!==e?e:t.yield_today_entity)&&void 0!==i?i:"",current_consumption_entity:null!==(s=t.current_consumption_entity)&&void 0!==s?s:"",image_url:null!==(o=t.image_url)&&void 0!==o?o:"",show_energy_flow:null!==(n=t.show_energy_flow)&&void 0!==n&&n,show_top_devices:null!==(r=t.show_top_devices)&&void 0!==r&&r,top_devices_max:Math.min(Math.max(parseInt(String(null!==(a=t.top_devices_max)&&void 0!==a?a:4),10)||4,1),8),show_solar_forecast:null!==(l=t.show_solar_forecast)&&void 0!==l&&l,weather_entity:null!==(d=t.weather_entity)&&void 0!==d?d:"",solar_forecast_today_entity:null!==(c=t.solar_forecast_today_entity)&&void 0!==c?c:"",trend_graph_entities:Array.isArray(t.trend_graph_entities)?t.trend_graph_entities:[],yield_today_entity:null!==(h=t.yield_today_entity)&&void 0!==h?h:"",grid_consumption_today_entity:null!==(u=t.grid_consumption_today_entity)&&void 0!==u?u:"",battery_percentage_entity:null!==(_=t.battery_percentage_entity)&&void 0!==_?_:"",inverter_state_entity:null!==(p=t.inverter_state_entity)&&void 0!==p?p:"",total_yield_entity:null!==(v=t.total_yield_entity)&&void 0!==v?v:"",total_grid_consumption_entity:null!==(y=t.total_grid_consumption_entity)&&void 0!==y?y:"",battery_capacity_entity:null!==(m=t.battery_capacity_entity)&&void 0!==m?m:"",inverter_mode_entity:null!==(g=t.inverter_mode_entity)&&void 0!==g?g:""},t);if(!f.production_entity||!f.current_consumption_entity)throw new Error("Solar Card: production_entity and current_consumption_entity are required.");this._config=f,this.requestUpdate()}static getConfigElement(){return document.createElement("solar-card-editor")}static getStubConfig(){return{production_entity:"",current_consumption_entity:"",image_url:"",show_energy_flow:!1,show_top_devices:!1,top_devices_max:4,show_solar_forecast:!1,weather_entity:"",solar_forecast_today_entity:"",trend_graph_entities:[],yield_today_entity:"",grid_consumption_today_entity:"",battery_percentage_entity:"",inverter_state_entity:"",total_yield_entity:"",total_grid_consumption_entity:"",battery_capacity_entity:"",inverter_mode_entity:""}}set hass(t){var e,i,s,o,n,r;const a=this._hass;if(this._energyFlowEl)try{this._energyFlowEl.hass=t}catch(t){}if(Array.isArray(this._trendGraphEls))for(const e of this._trendGraphEls)try{e.hass=t}catch(t){}if(this._gridKwhEl)try{this._gridKwhEl.hass=t}catch(t){}try{const s=null!==(i=(null===(e=null==t?void 0:t.locale)||void 0===e?void 0:e.language)||(null==t?void 0:t.language))&&void 0!==i?i:null;s&&s!==this._lastLang&&(this._lastLang=s)}catch(t){}const l=this._config||{},d=new Set,c=t=>{t&&d.add(t)};if(c(l.production_entity),c(l.current_consumption_entity),c(l.yield_today_entity),c(l.grid_consumption_today_entity),c(l.battery_percentage_entity),c(l.inverter_state_entity),c(l.total_yield_entity),c(l.total_grid_consumption_entity),c(l.battery_capacity_entity),c(l.inverter_mode_entity),c(l.weather_entity),c(l.solar_forecast_today_entity),Array.isArray(l.trend_graph_entities))for(const t of l.trend_graph_entities)c(t);if(l.show_top_devices&&this._devicePowerMap)for(const t of Object.keys(this._devicePowerMap)){const e=this._devicePowerMap[t]||[];for(const t of e)d.add(t)}let h=!a;if(a&&d.size){for(const e of d)if((null===(s=a.states)||void 0===s?void 0:s[e])!==(null===(o=t.states)||void 0===o?void 0:o[e])){h=!0;break}h||(null===(n=a.locale)||void 0===n?void 0:n.language)===(null===(r=t.locale)||void 0===r?void 0:r.language)||(h=!0)}this._hass=t,l.show_top_devices&&this._maybeRefreshTopDevices(),h&&this.requestUpdate()}get hass(){return this._hass}connectedCallback(){var t;super.connectedCallback(),(null===(t=this._config)||void 0===t?void 0:t.show_top_devices)&&this._maybeRefreshTopDevices()}disconnectedCallback(){super.disconnectedCallback(),this._devicesTimer&&(clearTimeout(this._devicesTimer),this._devicesTimer=null)}_defaultPanelsSvgHtml(){const t=Array.from({length:3}),e=Array.from({length:6}),i=t.flatMap(((t,i)=>e.map(((t,e)=>W`<rect x="${8+31*e}" y="${8+36*i}" width="28" height="28" rx="3" fill="rgba(255,255,255,0.25)" />`))));return B`
      <svg viewBox="0 0 240 200" part="image" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#2d6cdf" />
            <stop offset="100%" stop-color="#0d3fa6" />
          </linearGradient>
        </defs>
        <g transform="translate(20,20)">
          <rect x="0" y="0" width="200" height="120" rx="6" fill="url(#g1)" />
          ${i}
          <rect x="0" y="0" width="200" height="120" rx="6" fill="none" stroke="rgba(255,255,255,0.6)" />
        </g>
        <rect x="40" y="150" width="160" height="10" rx="5" fill="#8892a0" opacity="0.7" />
      </svg>
    `}render(){this._hass;const t=this._config||{},e=this._computeOverviewValues(t),i=this._computeTodayPanelValues(t),s=this._computeTotalsPanelValues(t),o=this._computeForecastValues(t),n=t.show_top_devices?this._computeTopDevicesLive(t.top_devices_max||4):[],r=[],a=Array.isArray(t.feature_tiles)?t.feature_tiles:[];for(const t of a)t&&"object"==typeof t&&r.push(Object.assign({type:"tile"},t));const l=[],d=Array.isArray(t.trend_graph_entities)?t.trend_graph_entities.filter((t=>"string"==typeof t&&t.includes("."))):[];l.push(...d);const c=Number(null==t?void 0:t.trend_graph_hours_to_show)||24,h=Number(null==t?void 0:t.trend_graph_detail)||2;for(const t of l)r.push({type:"tile",entity:t,features:[{type:"trend-graph",hours_to_show:c,detail:h}]});return B`
      <ha-card>
        <div class="container${t.show_solar_forecast?" has-forecast":""}">
          ${this._renderOverviewPanel(e.production,e.consumption,e.image_url)}
          <div class="metrics-panel">
            ${this._renderTodayPanel(t,i)} ${this._renderTotalsPanel(t,s)}
          </div>
          ${t.show_solar_forecast?this._renderForecastPanel(o):q}
        </div>

        ${t.show_top_devices&&n.length?this._renderDevicesRow(n):q}
        ${r.length?B`<div id="graphs-section" class="graphs-section"></div>`:q}
        ${t.show_energy_flow?B`<div id="energy-section" class="energy-section"><div id="energy-flow"></div></div>`:q}
      </ha-card>
    `}_computeOverviewValues(t){const e=this._hass;return{production:Ct(e,t.production_entity),consumption:Ct(e,t.current_consumption_entity),image_url:t.image_url||""}}_computeTodayPanelValues(t){var e,i,s,o,n,r;const a=this._hass;let l=Ct(a,t.yield_today_entity),d=Ct(a,t.grid_consumption_today_entity);if((!t.grid_consumption_today_entity||"—"===d.value)&&t.total_grid_consumption_entity){d=this._ensureGridTodayFromTotal(t.total_grid_consumption_entity)||{value:"…",unit:(null===(s=null===(i=null===(e=null==a?void 0:a.states)||void 0===e?void 0:e[t.total_grid_consumption_entity])||void 0===i?void 0:i.attributes)||void 0===s?void 0:s.unit_of_measurement)||""}}if((!t.yield_today_entity||"—"===l.value)&&t.total_yield_entity){l=this._ensureYieldTodayFromTotal(t.total_yield_entity)||{value:"…",unit:(null===(r=null===(n=null===(o=null==a?void 0:a.states)||void 0===o?void 0:o[t.total_yield_entity])||void 0===n?void 0:n.attributes)||void 0===r?void 0:r.unit_of_measurement)||""}}return{yieldToday:l,gridToday:d,batteryPct:Ct(a,t.battery_percentage_entity),inverterState:Ct(a,t.inverter_state_entity)}}_computeTotalsPanelValues(t){const e=this._hass;return{totalYield:Ct(e,t.total_yield_entity),totalGrid:Ct(e,t.total_grid_consumption_entity),batteryCapacity:Ct(e,t.battery_capacity_entity),inverterModeDisplay:Ct(e,t.inverter_mode_entity)}}_computeForecastValues(t){const e=this._hass,i=this._weatherDisplay(e,t.weather_entity),s=Ct(e,t.solar_forecast_today_entity),o=!!t.weather_entity,n=!!t.solar_forecast_today_entity||!o;return{title:$t(o?"card.weather_today":"card.solar_forecast"),icon:o?i.icon||"mdi:weather-partly-cloudy":"mdi:white-balance-sunny",majorValue:n?`${s.value}`:`${null!=i.temperature?i.temperature:"—"}`,majorUnit:n?`${s.unit}`:`${i.unit||""}`,minor:n?$t("card.expected_forecast"):i.condition||""}}_renderOverviewPanel(t,e,i){return B` <div class="overview-panel">
      <div class="content">
        <div class="metric">
          <div class="label"><ha-icon icon="mdi:solar-panel"></ha-icon> ${$t("card.production")}</div>
          <div class="value">${t.value} ${t.unit}</div>
        </div>
        <div class="metric">
          <div class="label"><ha-icon icon="mdi:power-socket-eu"></ha-icon> ${$t("card.consumption")}</div>
          <div class="value smaller">${e.value} ${e.unit}</div>
        </div>
      </div>
      <div class="image">
        ${i?B`<img src="${i}" alt="Solar panels" loading="lazy" />`:this._defaultPanelsSvgHtml()}
      </div>
    </div>`}_renderTodayPanel(t,e){const i=!(!t.yield_today_entity&&!t.total_yield_entity),s=!(!t.grid_consumption_today_entity&&!t.total_grid_consumption_entity),o=!!t.battery_percentage_entity,n=!!t.inverter_state_entity,r=[];return i&&r.push(B`<div class="metric metric-top">
          <ha-icon class="icon" icon="mdi:solar-power-variant"></ha-icon>
          <div class="label">${$t("card.yield_today")}</div>
          <div class="value smaller">${e.yieldToday.value} ${e.yieldToday.unit}</div>
        </div>`),s&&r.push(B`<div class="metric metric-top">
          <ha-icon class="icon" icon="mdi:transmission-tower"></ha-icon>
          <div class="label">${$t("card.grid_today")}</div>
          <div class="value smaller">${e.gridToday.value} ${e.gridToday.unit}</div>
        </div>`),o&&r.push(B`<div class="metric metric-top">
          <ha-icon class="icon" icon="mdi:battery"></ha-icon>
          <div class="label">${$t("card.battery")}</div>
          <div class="value smaller">${e.batteryPct.value} ${e.batteryPct.unit||"%"}</div>
        </div>`),n&&r.push(B`<div class="metric metric-top">
          <ha-icon class="icon" icon="mdi:power"></ha-icon>
          <div class="label">${$t("card.inverter_state")}</div>
          <div class="value smaller">${e.inverterState.value}</div>
        </div>`),r.length?B` <div class="today-panel metrics-grid" style="--metrics-cols: ${r.length}">${r}</div>`:q}_renderTotalsPanel(t,e){const i=[];return t.total_yield_entity&&i.push(B`<div class="metric metric-bottom">
          <div class="label">${$t("card.total_yield")}</div>
          <div class="value smaller">${e.totalYield.value} ${e.totalYield.unit}</div>
        </div>`),t.total_grid_consumption_entity&&i.push(B`<div class="metric metric-bottom">
          <div class="label">${$t("card.grid_consumption")}</div>
          <div class="value smaller">${e.totalGrid.value} ${e.totalGrid.unit}</div>
        </div>`),t.battery_capacity_entity&&i.push(B`<div class="metric metric-bottom">
          <div class="label">${$t("card.battery_capacity")}</div>
          <div class="value smaller">${e.batteryCapacity.value} ${e.batteryCapacity.unit}</div>
        </div>`),t.inverter_mode_entity&&i.push(B`<div class="metric metric-bottom">
          <div class="label">${$t("card.inverter_mode")}</div>
          <div class="value smaller">${e.inverterModeDisplay.value}</div>
        </div>`),i.length?B` <div class="totals-panel metrics-grid" style="--metrics-cols: ${i.length}">${i}</div>`:q}_renderForecastPanel(t){return B` <div class="forecast-panel">
      <div class="forecast" id="forecast">
        <div>
          <div class="title">${t.title}</div>
          <div class="subtle">${this._formatTodayDate()}</div>
          <div class="temp">${t.majorValue} ${t.majorUnit}</div>
          <div class="subtle">${t.minor}</div>
        </div>
        <div class="icon">
          <ha-icon icon="${t.icon}"></ha-icon>
        </div>
      </div>
    </div>`}_renderDevicesRow(t){return B` <div class="devices-row" id="devices-row" @click=${this._onDevicesClick}>
      <div class="badges">
        ${t.map((t=>B`<div class="badge" role="listitem" data-stat-id="${t.id}">
              <ha-icon icon="${t.icon||"mdi:power-plug"}"></ha-icon>
              <span class="name">${t.name}</span>
              <span class="value">${Et(t.watts,this._hass,{maximumFractionDigits:0})} W</span>
            </div>`))}
      </div>
    </div>`}updated(){var t;(null===(t=this._config)||void 0===t?void 0:t.show_energy_flow)&&this._renderEnergyFlow();const e=this._config,i=[],s=Array.isArray(null==e?void 0:e.feature_tiles)?e.feature_tiles:[];for(const t of s)t&&"object"==typeof t&&i.push(Object.assign({type:"tile"},t));const o=Array.isArray(null==e?void 0:e.trend_graph_entities)?e.trend_graph_entities:[],n=new Set(o),r=Number(null==e?void 0:e.trend_graph_hours_to_show)||24;for(const t of Array.from(n))i.push({type:"tile",entity:t,features:[{type:"trend-graph",hours_to_show:r}]});i.length&&this._renderTrendGraphs(i)}async _maybeRefreshTopDevices(){var t;const e=Date.now();if(this._hass&&!(this._devicesRefreshing||e-this._devicesLastFetch<6e4)){this._devicesRefreshing=!0;try{const e=await this._hass.callWS({type:"energy/get_prefs"});this._deviceList=Array.isArray(null==e?void 0:e.device_consumption)?e.device_consumption:[],await this._ensureDevicePowerMap(),this._devicesLastFetch=Date.now(),this.requestUpdate()}catch(t){}finally{this._devicesRefreshing=!1,this._devicesTimer&&clearTimeout(this._devicesTimer),(null===(t=this._config)||void 0===t?void 0:t.show_top_devices)&&(this._devicesTimer=setTimeout((()=>{this._devicesLastFetch=0,this._maybeRefreshTopDevices()}),6e4))}}}async _ensureDevicePowerMap(){var t;if(!this._hass)return;if(this._entityRegistry||(this._entityRegistry=await this._hass.callWS({type:"config/entity_registry/list"})),!this._deviceRegistry)try{this._deviceRegistry=await this._hass.callWS({type:"config/device_registry/list"})}catch(t){this._deviceRegistry=[]}const e=this._entityRegistry||[],i=this._deviceRegistry||[],s={};for(const t of e)(null==t?void 0:t.entity_id)&&(s[t.entity_id]=t);const o={};for(const t of i)(null==t?void 0:t.id)&&(null==t?void 0:t.icon)&&(o[t.id]=t.icon);const n={};for(const t of e)t.entity_id&&t.device_id&&(n[t.device_id]=n[t.device_id]||[]).push(t.entity_id);const r={},a={},l={},d=this._hass.states||{};for(const i of null!==(t=this._deviceList)&&void 0!==t?t:[]){const t=i.stat_consumption;if(!t||!t.includes("."))continue;const s=e.find((e=>e.entity_id===t)),o=null==s?void 0:s.device_id;if(!o)continue;const c=(n[o]||[]).filter((t=>{var e,i;const s=d[t],o=null===(e=null==s?void 0:s.attributes)||void 0===e?void 0:e.device_class,n=(null===(i=null==s?void 0:s.attributes)||void 0===i?void 0:i.unit_of_measurement)||"";return"power"===o&&/k?W/i.test(n)}));c.length&&(r[t]=c),a[t]=o,l[o]=n[o]||[]}this._devicePowerMap=r,this._statToDeviceId=a,this._deviceEntitiesMap=l,this._deviceIconById=o,this._entityRegistryByEntityId=s}_powerWattsFromState(t){var e,i,s;const o=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t];if(!o)return null;const n=Number(o.state);if(!isFinite(n))return null;let r=n;return((null===(s=o.attributes)||void 0===s?void 0:s.unit_of_measurement)||"").toLowerCase().includes("kw")&&(r=1e3*n),isFinite(r)?r:null}_iconForEntity(t){var e,i,s,o;const n=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t];if(!n)return"mdi:power-plug";const r=null===(s=n.attributes)||void 0===s?void 0:s.icon;if(r)return r;const a=t.split(".")[0],l=null===(o=n.attributes)||void 0===o?void 0:o.device_class;return"light"===a?"mdi:lightbulb":"switch"===a?"mdi:power-plug":"fan"===a?"mdi:fan":"climate"===a?"mdi:thermostat":"sensor"===a&&"power"===l?"mdi:flash":"sensor"===a&&"energy"===l?"mdi:lightning-bolt":"mdi:power-plug"}_iconForDeviceByStat(t){var e,i,s,o,n,r;const a=null===(e=this._statToDeviceId)||void 0===e?void 0:e[t];if(!a)return"mdi:power-plug";const l=null===(i=this._deviceIconById)||void 0===i?void 0:i[a];if(l)return l;const d=(null===(s=this._deviceEntitiesMap)||void 0===s?void 0:s[a])||[];if(!d.length)return"mdi:power-plug";const c=(null===(o=this._hass)||void 0===o?void 0:o.states)||{},h=this._entityRegistryByEntityId||{},u=["light","switch","climate","fan","vacuum","media_player","water_heater","humidifier","cover"];for(const t of u){const e=d.find((e=>e.startsWith(t+"."))),i=e?h[e]:void 0;if(null==i?void 0:i.icon)return i.icon}for(const t of d){const e=h[t];if(null==e?void 0:e.icon)return e.icon}for(const t of u){const e=d.find((e=>e.startsWith(t+"."))),i=e?c[e]:void 0;if(null===(n=null==i?void 0:i.attributes)||void 0===n?void 0:n.icon)return i.attributes.icon}for(const t of d){const e=c[t];if(null===(r=null==e?void 0:e.attributes)||void 0===r?void 0:r.icon)return e.attributes.icon}for(const t of u){const e=d.find((e=>e.startsWith(t+".")));if(e)return this._iconForEntity(e)}for(const t of d)if(c[t])return this._iconForEntity(t);return"mdi:power-plug"}_computeTopDevicesLive(t){var e;if(!this._devicePowerMap||!(null===(e=this._deviceList)||void 0===e?void 0:e.length))return[];const i=[];for(const t of this._deviceList){const e=t.stat_consumption,s=t.name||e,o=this._devicePowerMap[e]||[];let n=null;for(const t of o){const e=this._powerWattsFromState(t);null!=e&&((null==n||e>n)&&(n=Math.max(0,e)))}if(null!=n&&n>0){const t=this._iconForDeviceByStat(e);i.push({id:e,name:s,watts:n,icon:t})}}return i.sort(((t,e)=>e.watts-t.watts)),i.slice(0,t)}async _fetchTopConsumptionDevices(t){var e,i;const s=await this._hass.callWS({type:"energy/get_prefs"}),o=Array.isArray(null==s?void 0:s.device_consumption)?s.device_consumption:[],n=o.map((t=>t.stat_consumption)).filter((t=>!!t));if(!n.length)return[];const r=new Date,a=new Date(r.getTime()-36e5),l=await this._hass.callWS({type:"recorder/statistics_during_period",start_time:a.toISOString(),end_time:r.toISOString(),statistic_ids:n,period:"5minute"})||{},d=[];for(const t of o){const s=t.stat_consumption,o=null==l?void 0:l[s];if(!Array.isArray(o)||o.length<2)continue;let n=o.length-1;for(;n>=0&&(null==o[n].sum||isNaN(Number(o[n].sum)));)n--;if(n<=0)continue;let r=n-1;for(;r>=0&&(null==o[r].sum||isNaN(Number(o[r].sum)));)r--;if(r<0)continue;const a=o[n],c=o[r],h=(new Date(a.start).getTime()-new Date(c.start).getTime())/36e5;if(h<=0)continue;const u=Math.max(0,(null!==(e=a.sum)&&void 0!==e?e:0)-(null!==(i=c.sum)&&void 0!==i?i:0))/h*1e3;isFinite(u)&&d.push({id:s,name:t.name||s,watts:u})}d.sort(((t,e)=>e.watts-t.watts));return d.slice(0,t)}_renderTopDevicesRow(){var t,e,i,s,o,n;const r=(null===(t=this._config)||void 0===t?void 0:t.top_devices_max)||4,a=this._computeTopDevicesLive(r);let l=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("devices-row");if(!a.length)return l&&l.remove(),void(this._deviceBadges=[]);const d=Math.max(1,a.length);if(!l){l=document.createElement("div"),l.innerHTML=`\n        <div class="devices-row" id="devices-row">\n          <div class="devices-divider"></div>\n          <div class="badges" role="list" style="--dev-cols: ${d};"></div>\n        </div>`;const t=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("ha-card"),e=null===(s=this.shadowRoot)||void 0===s?void 0:s.getElementById("energy-section");t&&(e&&l.firstElementChild?t.insertBefore(l.firstElementChild,e):l.firstElementChild&&t.appendChild(l.firstElementChild)),l=null===(o=this.shadowRoot)||void 0===o?void 0:o.getElementById("devices-row")}const c=null===(n=this.shadowRoot)||void 0===n?void 0:n.getElementById("devices-row"),h=null==c?void 0:c.querySelector(".badges"),u=Array.isArray(this._deviceBadges)?this._deviceBadges.map((t=>t.id)):[],_=a.map((t=>t.id)),p=u.length===_.length&&u.every(((t,e)=>t===_[e]));if(h&&p)for(const t of a){const e=h.querySelector(`.badge[data-stat-id="${t.id}"]`);if(!e)continue;const i=e.querySelector(".value");if(i){const e=`${Et(t.watts,this._hass,{maximumFractionDigits:0})} W`;i.textContent!==e&&(i.textContent=e)}}else{const t=a.map((t=>`\n            <div class="badge" role="listitem" data-stat-id="${At(t.id)}">\n              <ha-icon icon="${At(t.icon||"mdi:power-plug")}"></ha-icon>\n              <span class="name">${At(t.name)}</span>\n              <span class="value">${At(Et(t.watts,this._hass,{maximumFractionDigits:0}))} W</span>\n            </div>`)).join("");h&&(h.setAttribute("style",`--dev-cols: ${d};`),h.innerHTML=t)}this._boundDeviceRowClick||(this._boundDeviceRowClick=new WeakSet),c&&!this._boundDeviceRowClick.has(c)&&(c.addEventListener("click",(t=>{var e,i;const s=null===(i=(e=t.target).closest)||void 0===i?void 0:i.call(e,".badge");if(!s)return;const o=s.getAttribute("data-stat-id");o&&this._openBadgeDevice(o)})),this._boundDeviceRowClick.add(c)),this._deviceBadges=a}async _openBadgeDevice(t){try{this._entityRegistry||(this._entityRegistry=await this._hass.callWS({type:"config/entity_registry/list"}));let e=t;if(!e.includes("."))return void window.open(`/developer-tools/statistics?statistic_id=${encodeURIComponent(t)}`,"_blank");const i=this._entityRegistry.find((t=>t.entity_id===e));if(null==i?void 0:i.device_id)return void window.open(`/config/devices/device/${i.device_id}`,"_blank");const s=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(s)}catch(e){window.open(`/developer-tools/statistics?statistic_id=${encodeURIComponent(t)}`,"_blank")}}_formatTodayDate(){var t,e;try{const i=new Date;return`${i.toLocaleDateString((null===(e=null===(t=this._hass)||void 0===t?void 0:t.locale)||void 0===e?void 0:e.language)||void 0,{weekday:"short"})} ${i.getDate()}/${i.getMonth()+1}`}catch(t){const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`}}_weatherDisplay(t,e){var i,s,o,n,r;if(!e)return{temperature:null};const a=null===(i=null==t?void 0:t.states)||void 0===i?void 0:i[e];if(!a)return{temperature:null};const l=null===(s=a.attributes)||void 0===s?void 0:s.temperature,d=(null===(o=a.attributes)||void 0===o?void 0:o.temperature_unit)||(null===(r=null===(n=null==t?void 0:t.config)||void 0===n?void 0:n.unit_system)||void 0===r?void 0:r.temperature)||"°C",c=a.state||"",h=this._weatherIcon(c);return{temperature:null!=l?String(l):null,unit:d,condition:c,icon:h}}_weatherIcon(t){return{clear:"mdi:weather-sunny","clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy",windy:"mdi:weather-windy",exceptional:"mdi:alert"}[t]||"mdi:weather-partly-cloudy"}async _renderEnergyFlow(){var t,e,i,s;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("energy-flow");if(!o)return;if(this._energyFlowEl&&this._energyFlowEl.parentElement===o)return void(this._energyFlowEl.hass=this._hass);let n=null;try{const t=await(null===(e=window.loadCardHelpers)||void 0===e?void 0:e.call(window));(null==t?void 0:t.createCardElement)&&(n=t.createCardElement({type:"energy-sankey"}))}catch(t){}n||(n=document.createElement("hui-energy-sankey-card"),null===(s=(i=n).setConfig)||void 0===s||s.call(i,{type:"energy-sankey"})),n.hass=this._hass,n.style.setProperty("--row-size","6"),o.innerHTML="",o.appendChild(n),this._energyFlowEl=n}async _renderTrendGraphs(t){var e,i,s,o,n,r,a,l;await this._ensureRegistriesForNames();const d=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("graphs-section");if(d&&(null==t?void 0:t.length))if(Array.isArray(this._trendGraphEls)&&this._trendGraphEls.length===t.length)for(const t of this._trendGraphEls)try{t.hass=this._hass}catch(t){}else{d.innerHTML="",this._trendGraphEls=[];for(const e of t){if(!e)continue;let t=null;const c=e.entity;let h=c&&(null===(n=null===(o=null===(s=null===(i=this._hass)||void 0===i?void 0:i.states)||void 0===s?void 0:s[c])||void 0===o?void 0:o.attributes)||void 0===n?void 0:n.friendly_name);const u=Object.assign({type:"tile"},e);!("name"in u)&&h&&(u.name=this._stripDeviceFromName(String(h),c));try{const e=await(null===(r=window.loadCardHelpers)||void 0===r?void 0:r.call(window));(null==e?void 0:e.createCardElement)&&(t=e.createCardElement(u))}catch(t){}t||(t=document.createElement("hui-tile-card"),null===(l=(a=t).setConfig)||void 0===l||l.call(a,u)),t.hass=this._hass,d.appendChild(t),this._trendGraphEls.push(t)}}}async _ensureRegistriesForNames(){if(this._hass)try{if(this._entityRegistry||(this._entityRegistry=await this._hass.callWS({type:"config/entity_registry/list"})),!this._deviceRegistry)try{this._deviceRegistry=await this._hass.callWS({type:"config/device_registry/list"})}catch(t){this._deviceRegistry=[]}}catch(t){}}_stripDeviceFromName(t,e){const i=(t||"").trim(),s=this._deviceNameForEntity(e||"")||"";if(!s)return i;const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");let n=i.replace(new RegExp(o,"i"),"").trim();return n=n.replace(/^[\s\-—–:|•·.]+/,"").trim(),n||i}_deviceNameForEntity(t){try{const e=this._entityRegistry,i=this._deviceRegistry;if(!t||!e||!i)return null;const s=e.find((e=>(null==e?void 0:e.entity_id)===t)),o=(null==s?void 0:s.device_id)?i.find((t=>(null==t?void 0:t.id)===s.device_id)):null;return(null==o?void 0:o.name)||null}catch(t){return null}}_ensureGridTodayFromTotal(t){if(!this._hass||!t)return null;const e=(new Date).toDateString();return this._gridTodayCache.key===t&&this._gridTodayCache.dateKey===e&&this._gridTodayCache.result?this._gridTodayCache.result:(this._gridTodayCache.inflight||(this._gridTodayCache.inflight=!0,this._gridTodayCache.key=t,this._gridTodayCache.dateKey=e,this._fetchTodayDiff(t).then((e=>{var i,s,o,n;const r=(null===(n=null===(o=null===(s=null===(i=this._hass)||void 0===i?void 0:i.states)||void 0===s?void 0:s[t])||void 0===o?void 0:o.attributes)||void 0===n?void 0:n.unit_of_measurement)||"",a=Et(e,this._hass,{maximumFractionDigits:2});this._gridTodayCache.result={value:a,unit:r}})).catch((()=>{var e,i,s,o;this._gridTodayCache.result={value:"—",unit:(null===(o=null===(s=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t])||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.unit_of_measurement)||""}})).finally((()=>{this._gridTodayCache.inflight=!1,this.requestUpdate()}))),null)}_ensureYieldTodayFromTotal(t){if(!this._hass||!t)return null;const e=(new Date).toDateString();return this._yieldTodayCache.key===t&&this._yieldTodayCache.dateKey===e&&this._yieldTodayCache.result?this._yieldTodayCache.result:(this._yieldTodayCache.inflight||(this._yieldTodayCache.inflight=!0,this._yieldTodayCache.key=t,this._yieldTodayCache.dateKey=e,this._fetchTodayDiff(t).then((e=>{var i,s,o,n;const r=(null===(n=null===(o=null===(s=null===(i=this._hass)||void 0===i?void 0:i.states)||void 0===s?void 0:s[t])||void 0===o?void 0:o.attributes)||void 0===n?void 0:n.unit_of_measurement)||"",a=Et(e,this._hass,{maximumFractionDigits:2});this._yieldTodayCache.result={value:a,unit:r}})).catch((()=>{var e,i,s,o;this._yieldTodayCache.result={value:"—",unit:(null===(o=null===(s=null===(i=null===(e=this._hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t])||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.unit_of_measurement)||""}})).finally((()=>{this._yieldTodayCache.inflight=!1,this.requestUpdate()}))),null)}async _fetchTodayDiff(t){const e=this._hass;if(!e)return 0;const i=new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate()).toISOString(),o=i.toISOString(),n=`history/period/${s}?filter_entity_id=${encodeURIComponent(t)}&end_time=${o}&minimal_response`,r=await e.callApi("GET",n);if(!Array.isArray(r)||!Array.isArray(r[0])||!r[0].length)return 0;const a=r[0].map((t=>{const e=Number(t.state);return Number.isFinite(e)?e:null})).filter((t=>null!==t));if(!a.length)return 0;const l=a[0],d=a[a.length-1]-l;return d>0?d:0}}St.styles=n`
    :host {
      display: block;
    }
    ha-card {
      padding: 16px;
      --label-color: var(--secondary-text-color);
      container-type: inline-size;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 0;
      align-items: stretch;
      grid-auto-rows: auto;
    }
    .container.has-forecast {
      grid-template-columns: 1fr 2fr auto;
    }

    /* Overview (content + image) */
    .overview-panel {
      display: flex;
      width: 100%;
      justify-content: space-between;
      gap: 40px;
      align-items: center;
      padding-right: 16px;
    }
    /* Metrics sections (separate items) */
    .today-panel,
    .totals-panel {
      border-left: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      padding-left: 16px;
      padding-right: 16px;
    }
    .today-panel {
      padding: 4px 16px 12px;
    }
    .totals-panel {
      padding: 12px 16px 0;
    }
    .right-divider {
      display: none;
    }
    .forecast-panel {
      border-left: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      padding-left: 16px;
      display: grid;
      align-content: start;
      align-self: stretch;
    }

    .content {
      display: grid;
      gap: 10px;
    }

    .metric .label {
      color: var(--secondary-text-color);
      font-size: 0.9rem;
    }
    /* Left panel labels keep icon inline */
    .overview-panel .metric .label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 1.2rem;
      padding-bottom: 4px;
    }
    .overview-panel .metric .label ha-icon {
      color: var(--secondary-text-color);
      width: 28px;
      height: 28px;
      --mdc-icon-size: 28px;
    }
    .overview-panel .metric .value {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Top row icons on the left, spanning two text rows */
    .metric-top {
      display: grid;
      grid-template-columns: 24px 1fr;
      grid-template-rows: auto auto;
      column-gap: 8px;
    }
    .metric-top > .icon {
      grid-row: 1 / span 2;
      align-self: center;
      color: var(--secondary-text-color);
    }
    .metric-top > .label {
      grid-column: 2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .metric-top > .value {
      grid-column: 2;
      white-space: nowrap;
    }

    .metric-bottom {
      padding-left: 32px;
    }

    .metric .value {
      font-weight: 700;
      font-size: 2rem;
      line-height: 1.1;
    }

    .metric .value.smaller {
      font-size: 1.4rem;
    }

    .image {
      width: 30%;
      max-width: 180px;
      min-width: 140px;
      justify-self: end;
    }

    .image > img,
    .image > svg {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 8px;
    }

    .energy-section {
      border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      margin-top: 12px;
      padding-top: 12px;
    }
    .grid-kwh-section {
      border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      margin-top: 12px;
      padding-top: 8px;
    }
    .graphs-section {
      border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      margin-top: 12px;
      padding-top: 8px;
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    /* Devices row */
    .devices-row {
      border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      margin-top: 12px;
      padding-top: 12px;
    }
    .devices-row .badges {
      display: flex;
      gap: 8px;
      align-items: stretch;
      width: 100%;
      cursor: pointer;
    }
    .devices-row .badge {
      display: grid;
      grid-template-columns: auto 1fr auto; /* icon | name | value */
      align-items: center;
      gap: 8px;
      background: var(--chip-background-color, rgba(0, 0, 0, 0.03));
      color: var(--primary-text-color);
      padding: 6px 10px;
      border-radius: 16px;
      border: 1px solid transparent;
      white-space: nowrap;
      width: 100%;
      min-width: 0; /* allow inner ellipsis */
      overflow: hidden; /* prevent overlap when space is tight */
      cursor: pointer;
      transition:
        background-color 120ms ease,
        border-color 120ms ease,
        box-shadow 120ms ease;
    }
    .devices-row .badge:hover {
      background: rgba(var(--rgb-primary-color), 0.08);
      border-color: var(--primary-color);
    }
    .devices-row .badge ha-icon {
      color: var(--secondary-text-color);
    }
    .devices-row .badge .name {
      max-width: 14ch;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    .devices-row .badge .value {
      font-weight: 600;
      justify-self: end;
      text-align: right;
    }

    /* Forecast mini panel */
    .forecast {
      border: 0;
      border-radius: 10px;
      padding: 12px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;
      align-items: center;
      max-width: 320px;
      justify-self: end;
    }
    .forecast .title {
      font-weight: 700;
    }
    .forecast .subtle {
      color: var(--secondary-text-color);
      font-size: 0.9rem;
    }
    .forecast .temp {
      font-weight: 800;
      font-size: 1.8rem;
    }
    .forecast .icon ha-icon {
      width: 40px;
      height: 40px;
      --mdc-icon-size: 40px;
    }

    /* Grids for top/bottom sections */
    .metrics-panel {
      display: grid;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(var(--metrics-cols, 4), minmax(0, 1fr));
      gap: 12px;
      align-items: start;
    }
    .metrics-grid .metric {
      min-width: 0;
    }
    .metrics-grid .metric .label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .metrics-grid .metric .value {
      font-size: 1.25rem;
    }

    /* Stack sections on narrower screens */
    @container (max-width: 1200px) {
      .container,
      .container.has-forecast {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .overview-panel {
        padding-right: 0;
        padding-bottom: 12px;
        display: flex;
        gap: 12px;
        align-items: start;
      }
      .forecast-panel {
        display: flex;
      }
      .metrics-panel {
        min-width: calc(100% - 320px);
      }
      .forecast {
        justify-self: stretch;
        max-width: none;
      }
      .image {
        width: clamp(100px, 28cqi, 150px);
        max-width: 150px;
        justify-self: end;
      }
      .metrics-grid {
        border-left: none;
        grid-template-columns: repeat(var(--metrics-cols, 4), minmax(0, 1fr));
        min-width: 0;
      }
      .today-panel, .totals-panel {
        padding-left: 0;
      }

      .today-panel .metric,
      .totals-panel .metric {
        min-width: 0;
      }
    }

    @container (max-width: 900px) {
      .metrics-panel {
        min-width: calc(100% - 215px);
      }
      .devices-row .badges {
        flex-wrap: wrap;
        justify-content: center;
      }
      .devices-row .badge {
        max-width: 40%;
      }
      /* Tighten big numbers and reduce columns to avoid overlap */
      .metric .value {
        font-size: 1.6rem;
      }
      .metric .value.smaller {
        font-size: 1.2rem;
      }
      .metrics-grid {
        grid-template-columns: repeat(min(var(--metrics-cols, 4), 2), minmax(0, 1fr));
      }
      .overview-panel {
        grid-template-columns: 1fr auto;
      }
      .image {
        width: clamp(90px, 26cqi, 130px);
        max-width: 130px;
      }
    }

    @container (max-width: 700px) {
      .overview-panel .content {
        order: 1;
      }
      .forecast-panel {
        order: 3;
        width: 100%;
        border-left: none;
        padding-left: 0;
        padding-top: 12px;
      }
      .metrics-panel {
        min-width: 100%;
      }
      .forecast {
        padding: 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
      .overview-panel .image {
        order: 2;
        justify-self: start;
        width: clamp(80px, 40cqi, 120px);
        max-width: 120px;
      }
      .metrics-grid {
        grid-template-columns: repeat(var(--metrics-cols, 4), minmax(0, 1fr));
      }
      .metric .value {
        font-size: 1.5rem;
      }
      .metric .value.smaller {
        font-size: 1.1rem;
      }
    }

    @container (max-width: 568px) {
      .overview-panel {
        grid-template-columns: 1fr auto;
      }
      .metrics-panel {
        width: 100%;
      }
      .image {
        width: clamp(90px, 32cqi, 130px);
        max-width: 130px;
      }
      /* Right panel: clamp to max 2 columns */
      .metrics-grid {
        grid-template-columns: repeat(min(var(--metrics-cols, 4), 2), minmax(0, 1fr));
        min-width: 0;
      }
    }
  `,customElements.define("solar-card",St);
