function t(t,e,s,i){var r,a=arguments.length,n=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(n=(a<3?r(n):a>3?r(e,s,n):r(e,s))||n);return a>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let a=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new a(s,t,i)},o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,u=globalThis,_=u.trustedTypes,g=_?_.emptyScript:"",f=u.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!l(t,e),A={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const a=i?.call(this);r?.call(this,e),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const a=r.fromAttribute(e,t.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const a=this.constructor;if(!1===i&&(r=this[t]),s??=a.getPropertyOptions(t),!((s.hasChanged??v)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==r||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[$("elementProperties")]=new Map,b[$("finalized")]=new Map,f?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");const S=globalThis,E=t=>t,w=S.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,U=`<${P}>`,M=document,O=()=>M.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,z=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,G=M.createTreeWalker(M,129);function K(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let r,a=2===e?"<svg>":3===e?"<math>":"",n=R;for(let e=0;e<s;e++){const s=t[e];let o,l,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===R?"!--"===l[1]?n=D:void 0!==l[1]?n=z:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=I):void 0!==l[3]&&(n=I):n===I?">"===l[0]?(n=r??R,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?I:'"'===l[3]?L:j):n===L||n===j?n=I:n===D||n===z?n=R:(n=I,r=void 0);const d=n===I&&t[e+1].startsWith("/>")?" ":"";a+=n===R?s+U:c>=0?(i.push(o),s.slice(0,c)+k+s.slice(c)+C+d):s+C+(-2===c?e:d)}return[K(t,a+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,a=0;const n=t.length-1,o=this.parts,[l,c]=J(t,e);if(this.el=Z.createElement(l,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&o.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(k)){const e=c[a++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?et:"?"===n[1]?st:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(C)&&(o.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),G.nextNode(),o.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===P)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)o.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===F)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const a=T(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);G.currentNode=i;let r=G.nextNode(),a=0,n=0,o=s[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new X(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new rt(r,this,t)),this._$AV.push(e),o=s[++n]}a!==o?.index&&(r=G.nextNode(),a++)}return G.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),T(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Z(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new X(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let a=!1;if(void 0===r)t=Y(this,t,e,0),a=!T(t)||t!==this._$AH&&t!==F,a&&(this._$AH=t);else{const i=t;let n,o;for(t=r[0],n=0;n<r.length-1;n++)o=Y(this,i[s+n],e,n),o===F&&(o=this._$AH[n]),a||=!T(o)||o!==this._$AH[n],o===W?t=W:t!==W&&(t+=(o??"")+r[n+1]),this._$AH[n]=o}a&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends tt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??W)===F)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at=S.litHtmlPolyfillSupport;at?.(Z,X),(S.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class ot extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new X(e.insertBefore(O(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");const ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},ht=(t=ct,e,s)=>{const{kind:i,metadata:r}=s;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),a.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function dt(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const pt="0.7.0";let mt=class extends ot{static getConfigForm(){return{schema:[{name:"name",label:"Card Title",helper:"Optional display name for the card",selector:{text:{}}},{name:"updated",required:!0,label:"Mail Updated Sensor",helper:"Required: sensor.mail_updated from Mail and Packages integration",selector:{entity:{domain:"sensor"}}},{name:"deliveries_message",label:"Delivery Summary Message",helper:"Optional template sensor for custom delivery summary text",selector:{entity:{domain:"sensor"}}},{name:"packages_delivered",label:"Total Delivered (All Carriers)",helper:"Aggregate sensor: e.g., sensor.mail_packages_delivered - packages delivered today from all carriers",selector:{entity:{domain:"sensor"}}},{name:"packages_in_transit",label:"Total In Transit (All Carriers)",helper:"Aggregate sensor: e.g., sensor.mail_packages_in_transit - packages scheduled for delivery today, still in transit",selector:{entity:{domain:"sensor"}}},{name:"usps_mail",label:"USPS Mail Pieces",helper:"e.g., sensor.mail_usps_mail - mail piece count from USPS Informed Delivery",selector:{entity:{domain:"sensor"}}},{name:"usps_packages",label:"USPS Packages",helper:"e.g., sensor.mail_usps_packages - total USPS package count (or use mail_usps_delivered/mail_usps_delivering for specific status)",selector:{entity:{domain:"sensor"}}},{name:"ups_packages",label:"UPS Packages",helper:"e.g., sensor.mail_ups_packages - total UPS package count (or use mail_ups_delivered/mail_ups_delivering for specific status)",selector:{entity:{domain:"sensor"}}},{name:"fedex_packages",label:"FedEx Packages",helper:"e.g., sensor.mail_fedex_packages - total FedEx package count (or use mail_fedex_delivered/mail_fedex_delivering for specific status)",selector:{entity:{domain:"sensor"}}},{name:"amazon_packages",label:"Amazon Packages",helper:"e.g., sensor.mail_amazon_packages - total Amazon package count",selector:{entity:{domain:"sensor"}}},{name:"details",label:"Show Details Section",helper:"Display package counts and carrier information",selector:{boolean:{}}},{name:"image",label:"Show Mail Image (GIF)",helper:"Display USPS Informed Delivery mail image from gif_sensor",selector:{boolean:{}}},{name:"gif_sensor",label:"Mail Image GIF Sensor",helper:"sensor.mail_image_url or sensor.mail_image_system_path - USPS Informed Delivery image",selector:{entity:{domain:"sensor"}}},{name:"camera",label:"Show Camera Image",helper:"Display image from a local file camera entity",selector:{boolean:{}}},{name:"camera_entity",label:"Camera Entity (Primary)",helper:"First camera entity (e.g., generic delivery camera)",selector:{entity:{domain:"camera"}}},{name:"camera_entity_2",label:"Camera Entity (Secondary)",helper:"Optional second camera entity (stacks vertically below primary)",selector:{entity:{domain:"camera"}}}]}}static getStubConfig(){return{name:"Mail Summary",details:!0,image:!1,camera:!1}}setConfig(t){if(!t.updated)throw new Error('You must define the "updated" sensor (e.g., sensor.mail_updated)');this._config={details:!0,image:!1,camera:!1,...t}}shouldUpdate(t){if(t.has("_config"))return!0;if(!this._config||!this.hass)return!1;const e=t.get("hass");if(!e)return!0;return[this._config.updated,this._config.deliveries_message,this._config.packages_delivered,this._config.packages_in_transit,this._config.usps_mail,this._config.usps_packages,this._config.ups_packages,this._config.fedex_packages,this._config.amazon_packages,this._config.gif_sensor,this._config.camera_entity,this._config.camera_entity_2].filter(Boolean).some(t=>this.hass.states[t]!==e.states[t])}render(){if(!this._config||!this.hass)return q``;const t=this.hass.states[this._config.updated];return t?q`
      <ha-card @click="${this._handleClick}">
        ${!1!==this._config.details?this._renderDetails():""}
        ${!1!==this._config.image?this._renderImage():""}
        ${!1!==this._config.camera?this._renderCamera():""}
        <span class="update-info">v${pt} | Updated: ${t.state}</span>
      </ha-card>
    `:q`
        <ha-card>
          <div class="not-found">
            Entity not available: ${this._config.updated}
          </div>
        </ha-card>
      `}_getEntityState(t){if(!t)return!1;const e=this.hass.states[t];return!!e&&e.state}_renderDetails(){const t=this._getEntityState(this._config.deliveries_message),e=this._getEntityState(this._config.packages_delivered),s=this._getEntityState(this._config.packages_in_transit),i=this._getEntityState(this._config.fedex_packages),r=this._getEntityState(this._config.ups_packages),a=this._getEntityState(this._config.usps_packages),n=this._getEntityState(this._config.amazon_packages),o=this._getEntityState(this._config.usps_mail),l=o&&Number(o)>0?"mdi:mailbox-open-up":"mdi:mailbox-outline",c=a&&Number(a)>0?"mdi:package-variant":"mdi:package-variant-closed",h=r&&Number(r)>0?"mdi:package-variant":"mdi:package-variant-closed",d=i&&Number(i)>0?"mdi:package-variant":"mdi:package-variant-closed",p=n&&Number(n)>0?"mdi:package-variant":"mdi:package-variant-closed";return q`
      <div class="details">
        ${this._config.name?q`<div class="title">${this._config.name}</div>`:""}

        <ul class="summary-list">
          ${e?q`
                <li>
                  <ha-icon icon="mdi:package"></ha-icon>
                  <span>Delivered Today: ${e}</span>
                </li>
              `:""}
          ${s?q`
                <li>
                  <ha-icon icon="mdi:truck-delivery"></ha-icon>
                  <span>In Transit Today: ${s}</span>
                </li>
              `:""}
        </ul>

        ${t?q`<p class="delivery-message">${t}</p>`:""}

        <ul class="carriers-list">
          ${o?q`
                <li class="carrier-item">
                  <ha-icon icon="${l}"></ha-icon>
                  <a href="https://informeddelivery.usps.com/" target="_blank" rel="noopener noreferrer">
                    Mail: ${o}
                  </a>
                </li>
              `:""}
          ${a?q`
                <li class="carrier-item">
                  <ha-icon icon="${c}"></ha-icon>
                  <a href="https://informeddelivery.usps.com/" target="_blank" rel="noopener noreferrer">
                    USPS: ${a}
                  </a>
                </li>
              `:""}
          ${r?q`
                <li class="carrier-item">
                  <ha-icon icon="${h}"></ha-icon>
                  <a href="https://wwwapps.ups.com/mcdp" target="_blank" rel="noopener noreferrer">
                    UPS: ${r}
                  </a>
                </li>
              `:""}
          ${i?q`
                <li class="carrier-item">
                  <ha-icon icon="${d}"></ha-icon>
                  <a href="https://www.fedex.com/apps/fedextracking" target="_blank" rel="noopener noreferrer">
                    FedEx: ${i}
                  </a>
                </li>
              `:""}
          ${n?q`
                <li class="carrier-item">
                  <ha-icon icon="${p}"></ha-icon>
                  <a href="https://www.amazon.com/gp/css/order-history/" target="_blank" rel="noopener noreferrer">
                    Amazon: ${n}
                  </a>
                </li>
              `:""}
        </ul>
      </div>
    `}_renderImage(){const t=this._config.gif_sensor;if(!t)return q``;const e=this._getEntityState(t);return e?q`<img class="mail-image" src="${e}" alt="Mail preview" />`:q``}_renderCamera(){const t=this._config.camera_entity,e=this._config.camera_entity_2,s=[];if(t){const e=this.hass.states[t];if(e&&e.attributes.entity_picture){const t=Date.now();s.push(q`<img class="mail-image" src="${e.attributes.entity_picture}&_t=${t}" alt="Mail camera 1" />`)}}if(e){const t=this.hass.states[e];if(t&&t.attributes.entity_picture){const e=Date.now();s.push(q`<img class="mail-image" src="${t.attributes.entity_picture}&_t=${e}" alt="Mail camera 2" />`)}}return 0===s.length?q``:q`<div class="camera-container">${s}</div>`}_handleClick(){((t,e,s)=>{const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:s??{}});t.dispatchEvent(i)})(this,"hass-more-info",{entityId:this._config.updated})}getCardSize(){return 3}static get styles(){return n`
      ha-card {
        cursor: pointer;
        padding: 16px;
        box-sizing: border-box;
      }

      .not-found {
        background-color: var(--warning-color, yellow);
        padding: 8px;
        border-radius: 4px;
      }

      .title {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--primary-text-color);
        margin-bottom: 12px;
      }

      .details {
        margin-bottom: 8px;
      }

      .summary-list,
      .carriers-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 8px 16px;
      }

      .summary-list {
        justify-content: space-evenly;
        margin-bottom: 8px;
      }

      .carriers-list {
        justify-content: center;
      }

      .summary-list li,
      .carrier-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .carrier-item {
        white-space: nowrap;
      }

      ha-icon {
        color: var(--paper-item-icon-color, var(--secondary-text-color));
        --mdc-icon-size: 18px;
      }

      a {
        color: var(--secondary-text-color);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      .delivery-message {
        margin: 8px 0;
        color: var(--secondary-text-color);
      }

      .camera-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .mail-image {
        width: 100%;
        height: auto;
        margin-top: 12px;
        border-radius: 4px;
      }

      .camera-container .mail-image {
        margin-top: 0;
      }

      .camera-container .mail-image:first-child {
        margin-top: 12px;
      }

      .update-info {
        display: block;
        font-size: 0.7rem;
        color: var(--secondary-text-color);
        margin-top: 8px;
        text-align: right;
      }
    `}};t([dt({attribute:!1})],mt.prototype,"hass",void 0),t([function(t){return dt({...t,state:!0,attribute:!1})}()],mt.prototype,"_config",void 0),mt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("ha-mail-and-packages-card")],mt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-mail-and-packages-card",name:"HA Mail and Packages",description:"Display mail and package delivery information from USPS, UPS, FedEx, and Amazon",preview:!0,documentationURL:"https://github.com/derekslenk/Home-Assistant-Mail-And-Packages-Custom-Card"}),console.info(`%c HA-MAIL-AND-PACKAGES-CARD %c v${pt} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");export{mt as MailAndPackagesCard};
