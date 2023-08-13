(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ll(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const _t={},Dr=[],Se=()=>{},lA=()=>!1,uA=/^on[^a-z]/,Yo=e=>uA.test(e),Bl=e=>e.startsWith("onUpdate:"),Lt=Object.assign,Ul=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fA=Object.prototype.hasOwnProperty,st=(e,t)=>fA.call(e,t),K=Array.isArray,Or=e=>ms(e)==="[object Map]",Xo=e=>ms(e)==="[object Set]",Vf=e=>ms(e)==="[object Date]",tt=e=>typeof e=="function",kt=e=>typeof e=="string",Bi=e=>typeof e=="symbol",gt=e=>e!==null&&typeof e=="object",Em=e=>gt(e)&&tt(e.then)&&tt(e.catch),wm=Object.prototype.toString,ms=e=>wm.call(e),hA=e=>ms(e).slice(8,-1),Im=e=>ms(e)==="[object Object]",jl=e=>kt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,so=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},dA=/-(\w)/g,Qe=Jo(e=>e.replace(dA,(t,n)=>n?n.toUpperCase():"")),mA=/\B([A-Z])/g,ei=Jo(e=>e.replace(mA,"-$1").toLowerCase()),Zo=Jo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wa=Jo(e=>e?`on${Zo(e)}`:""),Ui=(e,t)=>!Object.is(e,t),oo=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},yo=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},_o=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Nf;const kc=()=>Nf||(Nf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $l(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=kt(r)?_A(r):$l(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(kt(e))return e;if(gt(e))return e}}const pA=/;(?![^(]*\))/g,gA=/:([^]+)/,yA=/\/\*[^]*?\*\//g;function _A(e){const t={};return e.replace(yA,"").split(pA).forEach(n=>{if(n){const r=n.split(gA);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ta(e){let t="";if(kt(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=ta(e[n]);r&&(t+=r+" ")}else if(gt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const AA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vA=Ll(AA);function bm(e){return!!e||e===""}function EA(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ea(e[r],t[r]);return n}function ea(e,t){if(e===t)return!0;let n=Vf(e),r=Vf(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Bi(e),r=Bi(t),n||r)return e===t;if(n=K(e),r=K(t),n||r)return n&&r?EA(e,t):!1;if(n=gt(e),r=gt(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!ea(e[o],t[o]))return!1}}return String(e)===String(t)}function wA(e,t){return e.findIndex(n=>ea(n,t))}const In=e=>kt(e)?e:e==null?"":K(e)||gt(e)&&(e.toString===wm||!tt(e.toString))?JSON.stringify(e,Tm,2):String(e),Tm=(e,t)=>t&&t.__v_isRef?Tm(e,t.value):Or(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Xo(t)?{[`Set(${t.size})`]:[...t.values()]}:gt(t)&&!K(t)&&!Im(t)?String(t):t;let ge;class Cm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ge,!t&&ge&&(this.index=(ge.scopes||(ge.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ge;try{return ge=this,t()}finally{ge=n}}}on(){ge=this}off(){ge=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function IA(e){return new Cm(e)}function bA(e,t=ge){t&&t.active&&t.effects.push(e)}function Rm(){return ge}function TA(e){ge&&ge.cleanups.push(e)}const zl=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Pm=e=>(e.w&xn)>0,Sm=e=>(e.n&xn)>0,CA=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=xn},RA=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Pm(i)&&!Sm(i)?i.delete(e):t[n++]=i,i.w&=~xn,i.n&=~xn}t.length=n}},Dc=new WeakMap;let yi=0,xn=1;const Oc=30;let Te;const rr=Symbol(""),Vc=Symbol("");class Hl{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bA(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=bn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,bn=!0,xn=1<<++yi,yi<=Oc?CA(this):Mf(this),this.fn()}finally{yi<=Oc&&RA(this),xn=1<<--yi,Te=this.parent,bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(Mf(this),this.onStop&&this.onStop(),this.active=!1)}}function Mf(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let bn=!0;const xm=[];function ni(){xm.push(bn),bn=!1}function ri(){const e=xm.pop();bn=e===void 0?!0:e}function me(e,t,n){if(bn&&Te){let r=Dc.get(e);r||Dc.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=zl()),km(i)}}function km(e,t){let n=!1;yi<=Oc?Sm(e)||(e.n|=xn,n=!Pm(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function nn(e,t,n,r,i,s){const o=Dc.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&K(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":K(e)?jl(n)&&a.push(o.get("length")):(a.push(o.get(rr)),Or(e)&&a.push(o.get(Vc)));break;case"delete":K(e)||(a.push(o.get(rr)),Or(e)&&a.push(o.get(Vc)));break;case"set":Or(e)&&a.push(o.get(rr));break}if(a.length===1)a[0]&&Nc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Nc(zl(c))}}function Nc(e,t){const n=K(e)?e:[...e];for(const r of n)r.computed&&Ff(r);for(const r of n)r.computed||Ff(r)}function Ff(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const PA=Ll("__proto__,__v_isRef,__isVue"),Dm=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Bi)),SA=ql(),xA=ql(!1,!0),kA=ql(!0),Lf=DA();function DA(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=at(this);for(let s=0,o=this.length;s<o;s++)me(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(at)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ni();const r=at(this)[t].apply(this,n);return ri(),r}}),e}function OA(e){const t=at(this);return me(t,"has",e),t.hasOwnProperty(e)}function ql(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?GA:Fm:t?Mm:Nm).get(r))return r;const o=K(r);if(!e){if(o&&st(Lf,i))return Reflect.get(Lf,i,s);if(i==="hasOwnProperty")return OA}const a=Reflect.get(r,i,s);return(Bi(i)?Dm.has(i):PA(i))||(e||me(r,"get",i),t)?a:Kt(a)?o&&jl(i)?a:a.value:gt(a)?e?Bm(a):ra(a):a}}const VA=Om(),NA=Om(!0);function Om(e=!1){return function(n,r,i,s){let o=n[r];if(jr(o)&&Kt(o)&&!Kt(i))return!1;if(!e&&(!Ao(i)&&!jr(i)&&(o=at(o),i=at(i)),!K(n)&&Kt(o)&&!Kt(i)))return o.value=i,!0;const a=K(n)&&jl(r)?Number(r)<n.length:st(n,r),c=Reflect.set(n,r,i,s);return n===at(s)&&(a?Ui(i,o)&&nn(n,"set",r,i):nn(n,"add",r,i)),c}}function MA(e,t){const n=st(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&nn(e,"delete",t,void 0),r}function FA(e,t){const n=Reflect.has(e,t);return(!Bi(t)||!Dm.has(t))&&me(e,"has",t),n}function LA(e){return me(e,"iterate",K(e)?"length":rr),Reflect.ownKeys(e)}const Vm={get:SA,set:VA,deleteProperty:MA,has:FA,ownKeys:LA},BA={get:kA,set(e,t){return!0},deleteProperty(e,t){return!0}},UA=Lt({},Vm,{get:xA,set:NA}),Kl=e=>e,na=e=>Reflect.getPrototypeOf(e);function Ns(e,t,n=!1,r=!1){e=e.__v_raw;const i=at(e),s=at(t);n||(t!==s&&me(i,"get",t),me(i,"get",s));const{has:o}=na(i),a=r?Kl:n?Yl:ji;if(o.call(i,t))return a(e.get(t));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(t)}function Ms(e,t=!1){const n=this.__v_raw,r=at(n),i=at(e);return t||(e!==i&&me(r,"has",e),me(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Fs(e,t=!1){return e=e.__v_raw,!t&&me(at(e),"iterate",rr),Reflect.get(e,"size",e)}function Bf(e){e=at(e);const t=at(this);return na(t).has.call(t,e)||(t.add(e),nn(t,"add",e,e)),this}function Uf(e,t){t=at(t);const n=at(this),{has:r,get:i}=na(n);let s=r.call(n,e);s||(e=at(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?Ui(t,o)&&nn(n,"set",e,t):nn(n,"add",e,t),this}function jf(e){const t=at(this),{has:n,get:r}=na(t);let i=n.call(t,e);i||(e=at(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&nn(t,"delete",e,void 0),s}function $f(){const e=at(this),t=e.size!==0,n=e.clear();return t&&nn(e,"clear",void 0,void 0),n}function Ls(e,t){return function(r,i){const s=this,o=s.__v_raw,a=at(o),c=t?Kl:e?Yl:ji;return!e&&me(a,"iterate",rr),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Bs(e,t,n){return function(...r){const i=this.__v_raw,s=at(i),o=Or(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=i[e](...r),u=n?Kl:t?Yl:ji;return!t&&me(s,"iterate",c?Vc:rr),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gn(e){return function(...t){return e==="delete"?!1:this}}function jA(){const e={get(s){return Ns(this,s)},get size(){return Fs(this)},has:Ms,add:Bf,set:Uf,delete:jf,clear:$f,forEach:Ls(!1,!1)},t={get(s){return Ns(this,s,!1,!0)},get size(){return Fs(this)},has:Ms,add:Bf,set:Uf,delete:jf,clear:$f,forEach:Ls(!1,!0)},n={get(s){return Ns(this,s,!0)},get size(){return Fs(this,!0)},has(s){return Ms.call(this,s,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Ls(!0,!1)},r={get(s){return Ns(this,s,!0,!0)},get size(){return Fs(this,!0)},has(s){return Ms.call(this,s,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Bs(s,!1,!1),n[s]=Bs(s,!0,!1),t[s]=Bs(s,!1,!0),r[s]=Bs(s,!0,!0)}),[e,n,t,r]}const[$A,zA,HA,qA]=jA();function Ql(e,t){const n=t?e?qA:HA:e?zA:$A;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(st(n,i)&&i in r?n:r,i,s)}const KA={get:Ql(!1,!1)},QA={get:Ql(!1,!0)},WA={get:Ql(!0,!1)},Nm=new WeakMap,Mm=new WeakMap,Fm=new WeakMap,GA=new WeakMap;function YA(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function XA(e){return e.__v_skip||!Object.isExtensible(e)?0:YA(hA(e))}function ra(e){return jr(e)?e:Wl(e,!1,Vm,KA,Nm)}function Lm(e){return Wl(e,!1,UA,QA,Mm)}function Bm(e){return Wl(e,!0,BA,WA,Fm)}function Wl(e,t,n,r,i){if(!gt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=XA(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function Vr(e){return jr(e)?Vr(e.__v_raw):!!(e&&e.__v_isReactive)}function jr(e){return!!(e&&e.__v_isReadonly)}function Ao(e){return!!(e&&e.__v_isShallow)}function Um(e){return Vr(e)||jr(e)}function at(e){const t=e&&e.__v_raw;return t?at(t):e}function Gl(e){return yo(e,"__v_skip",!0),e}const ji=e=>gt(e)?ra(e):e,Yl=e=>gt(e)?Bm(e):e;function jm(e){bn&&Te&&(e=at(e),km(e.dep||(e.dep=zl())))}function $m(e,t){e=at(e);const n=e.dep;n&&Nc(n)}function Kt(e){return!!(e&&e.__v_isRef===!0)}function En(e){return zm(e,!1)}function JA(e){return zm(e,!0)}function zm(e,t){return Kt(e)?e:new ZA(e,t)}class ZA{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:at(t),this._value=n?t:ji(t)}get value(){return jm(this),this._value}set value(t){const n=this.__v_isShallow||Ao(t)||jr(t);t=n?t:at(t),Ui(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ji(t),$m(this))}}function xe(e){return Kt(e)?e.value:e}const tv={get:(e,t,n)=>xe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Kt(i)&&!Kt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Hm(e){return Vr(e)?e:new Proxy(e,tv)}class ev{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Hl(t,()=>{this._dirty||(this._dirty=!0,$m(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=at(this);return jm(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function nv(e,t,n=!1){let r,i;const s=tt(e);return s?(r=e,i=Se):(r=e.get,i=e.set),new ev(r,i,s||!i,n)}function Tn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){ia(s,t,n)}return i}function ke(e,t,n,r){if(tt(e)){const s=Tn(e,t,n,r);return s&&Em(s)&&s.catch(o=>{ia(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(ke(e[s],t,n,r));return i}function ia(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Tn(c,null,10,[e,o,a]);return}}rv(e,n,i,r)}function rv(e,t,n,r=!0){console.error(e)}let $i=!1,Mc=!1;const Jt=[];let Be=0;const Nr=[];let Je=null,Qn=0;const qm=Promise.resolve();let Xl=null;function Km(e){const t=Xl||qm;return e?t.then(this?e.bind(this):e):t}function iv(e){let t=Be+1,n=Jt.length;for(;t<n;){const r=t+n>>>1;zi(Jt[r])<e?t=r+1:n=r}return t}function Jl(e){(!Jt.length||!Jt.includes(e,$i&&e.allowRecurse?Be+1:Be))&&(e.id==null?Jt.push(e):Jt.splice(iv(e.id),0,e),Qm())}function Qm(){!$i&&!Mc&&(Mc=!0,Xl=qm.then(Gm))}function sv(e){const t=Jt.indexOf(e);t>Be&&Jt.splice(t,1)}function ov(e){K(e)?Nr.push(...e):(!Je||!Je.includes(e,e.allowRecurse?Qn+1:Qn))&&Nr.push(e),Qm()}function zf(e,t=$i?Be+1:0){for(;t<Jt.length;t++){const n=Jt[t];n&&n.pre&&(Jt.splice(t,1),t--,n())}}function Wm(e){if(Nr.length){const t=[...new Set(Nr)];if(Nr.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>zi(n)-zi(r)),Qn=0;Qn<Je.length;Qn++)Je[Qn]();Je=null,Qn=0}}const zi=e=>e.id==null?1/0:e.id,av=(e,t)=>{const n=zi(e)-zi(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Gm(e){Mc=!1,$i=!0,Jt.sort(av);const t=Se;try{for(Be=0;Be<Jt.length;Be++){const n=Jt[Be];n&&n.active!==!1&&Tn(n,null,14)}}finally{Be=0,Jt.length=0,Wm(),$i=!1,Xl=null,(Jt.length||Nr.length)&&Gm()}}function cv(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||_t;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||_t;h&&(i=n.map(d=>kt(d)?d.trim():d)),f&&(i=n.map(_o))}let a,c=r[a=Wa(t)]||r[a=Wa(Qe(t))];!c&&s&&(c=r[a=Wa(ei(t))]),c&&ke(c,e,6,i);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ke(l,e,6,i)}}function Ym(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!tt(e)){const c=l=>{const u=Ym(l,t,!0);u&&(a=!0,Lt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(gt(e)&&r.set(e,null),null):(K(s)?s.forEach(c=>o[c]=null):Lt(o,s),gt(e)&&r.set(e,o),o)}function sa(e,t){return!e||!Yo(t)?!1:(t=t.slice(2).replace(/Once$/,""),st(e,t[0].toLowerCase()+t.slice(1))||st(e,ei(t))||st(e,t))}let we=null,oa=null;function vo(e){const t=we;return we=e,oa=e&&e.type.__scopeId||null,t}function Zl(e){oa=e}function tu(){oa=null}function eu(e,t=we,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&th(-1);const s=vo(t);let o;try{o=e(...i)}finally{vo(s),r._d&&th(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ga(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:d,ctx:_,inheritAttrs:E}=e;let I,y;const A=vo(e);try{if(n.shapeFlag&4){const S=i||r;I=Le(u.call(S,S,f,s,d,h,_)),y=c}else{const S=t;I=Le(S.length>1?S(s,{attrs:c,slots:a,emit:l}):S(s,null)),y=t.props?c:lv(c)}}catch(S){Ri.length=0,ia(S,e,1),I=xt(cr)}let k=I;if(y&&E!==!1){const S=Object.keys(y),{shapeFlag:Q}=k;S.length&&Q&7&&(o&&S.some(Bl)&&(y=uv(y,o)),k=$r(k,y))}return n.dirs&&(k=$r(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),I=k,vo(A),I}const lv=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yo(n))&&((t||(t={}))[n]=e[n]);return t},uv=(e,t)=>{const n={};for(const r in e)(!Bl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function fv(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hf(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!sa(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Hf(r,o,l):!0:!!o;return!1}function Hf(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!sa(n,s))return!0}return!1}function hv({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const dv=e=>e.__isSuspense;function mv(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):ov(e)}const Us={};function ir(e,t,n){return Xm(e,t,n)}function Xm(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=_t){var a;const c=Rm()===((a=qt)==null?void 0:a.scope)?qt:null;let l,u=!1,f=!1;if(Kt(e)?(l=()=>e.value,u=Ao(e)):Vr(e)?(l=()=>e,r=!0):K(e)?(f=!0,u=e.some(S=>Vr(S)||Ao(S)),l=()=>e.map(S=>{if(Kt(S))return S.value;if(Vr(S))return Yn(S);if(tt(S))return Tn(S,c,2)})):tt(e)?t?l=()=>Tn(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return h&&h(),ke(e,c,3,[d])}:l=Se,t&&r){const S=l;l=()=>Yn(S())}let h,d=S=>{h=A.onStop=()=>{Tn(S,c,4)}},_;if(Ki)if(d=Se,t?n&&ke(t,c,3,[l(),f?[]:void 0,d]):l(),i==="sync"){const S=c0();_=S.__watcherHandles||(S.__watcherHandles=[])}else return Se;let E=f?new Array(e.length).fill(Us):Us;const I=()=>{if(A.active)if(t){const S=A.run();(r||u||(f?S.some((Q,et)=>Ui(Q,E[et])):Ui(S,E)))&&(h&&h(),ke(t,c,3,[S,E===Us?void 0:f&&E[0]===Us?[]:E,d]),E=S)}else A.run()};I.allowRecurse=!!t;let y;i==="sync"?y=I:i==="post"?y=()=>he(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),y=()=>Jl(I));const A=new Hl(l,y);t?n?I():E=A.run():i==="post"?he(A.run.bind(A),c&&c.suspense):A.run();const k=()=>{A.stop(),c&&c.scope&&Ul(c.scope.effects,A)};return _&&_.push(k),k}function pv(e,t,n){const r=this.proxy,i=kt(e)?e.includes(".")?Jm(r,e):()=>r[e]:e.bind(r,r);let s;tt(t)?s=t:(s=t.handler,n=t);const o=qt;zr(this);const a=Xm(i,s.bind(r),n);return o?zr(o):sr(),a}function Jm(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Yn(e,t){if(!gt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Kt(e))Yn(e.value,t);else if(K(e))for(let n=0;n<e.length;n++)Yn(e[n],t);else if(Xo(e)||Or(e))e.forEach(n=>{Yn(n,t)});else if(Im(e))for(const n in e)Yn(e[n],t);return e}function Zm(e,t){const n=we;if(n===null)return e;const r=ua(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,a,c,l=_t]=t[s];o&&(tt(o)&&(o={mounted:o,updated:o}),o.deep&&Yn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Hn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ni(),ke(c,n,8,[e.el,a,e,t]),ri())}}function nu(e,t){return tt(e)?(()=>Lt({name:e.name},t,{setup:e}))():e}const ao=e=>!!e.type.__asyncLoader,tp=e=>e.type.__isKeepAlive;function gv(e,t){ep(e,"a",t)}function yv(e,t){ep(e,"da",t)}function ep(e,t,n=qt){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(aa(t,r,n),n){let i=n.parent;for(;i&&i.parent;)tp(i.parent.vnode)&&_v(r,t,n,i),i=i.parent}}function _v(e,t,n,r){const i=aa(t,e,r,!0);rp(()=>{Ul(r[t],i)},n)}function aa(e,t,n=qt,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;ni(),zr(n);const a=ke(t,n,e,o);return sr(),ri(),a});return r?i.unshift(s):i.push(s),s}}const hn=e=>(t,n=qt)=>(!Ki||e==="sp")&&aa(e,(...r)=>t(...r),n),Av=hn("bm"),np=hn("m"),vv=hn("bu"),Ev=hn("u"),wv=hn("bum"),rp=hn("um"),Iv=hn("sp"),bv=hn("rtg"),Tv=hn("rtc");function Cv(e,t=qt){aa("ec",e,t)}const ru="components";function Rv(e,t){return sp(ru,e,!0,t)||e}const ip=Symbol.for("v-ndc");function Pv(e){return kt(e)?sp(ru,e,!1)||e:e||ip}function sp(e,t,n=!0,r=!1){const i=we||qt;if(i){const s=i.type;if(e===ru){const a=s0(s,!1);if(a&&(a===t||a===Qe(t)||a===Zo(Qe(t))))return s}const o=qf(i[e]||s[e],t)||qf(i.appContext[e],t);return!o&&r?s:o}}function qf(e,t){return e&&(e[t]||e[Qe(t)]||e[Zo(Qe(t))])}function Hi(e,t,n,r){let i;const s=n&&n[r];if(K(e)||kt(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s&&s[o])}else if(gt(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,s&&s[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=t(e[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Fc=e=>e?gp(e)?ua(e)||e.proxy:Fc(e.parent):null,Ci=Lt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fc(e.parent),$root:e=>Fc(e.root),$emit:e=>e.emit,$options:e=>iu(e),$forceUpdate:e=>e.f||(e.f=()=>Jl(e.update)),$nextTick:e=>e.n||(e.n=Km.bind(e.proxy)),$watch:e=>pv.bind(e)}),Ya=(e,t)=>e!==_t&&!e.__isScriptSetup&&st(e,t),Sv={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Ya(r,t))return o[t]=1,r[t];if(i!==_t&&st(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&st(l,t))return o[t]=3,s[t];if(n!==_t&&st(n,t))return o[t]=4,n[t];Lc&&(o[t]=0)}}const u=Ci[t];let f,h;if(u)return t==="$attrs"&&me(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==_t&&st(n,t))return o[t]=4,n[t];if(h=c.config.globalProperties,st(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Ya(i,t)?(i[t]=n,!0):r!==_t&&st(r,t)?(r[t]=n,!0):st(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==_t&&st(e,o)||Ya(t,o)||(a=s[0])&&st(a,o)||st(r,o)||st(Ci,o)||st(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:st(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Kf(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Lc=!0;function xv(e){const t=iu(e),n=e.proxy,r=e.ctx;Lc=!1,t.beforeCreate&&Qf(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:E,deactivated:I,beforeDestroy:y,beforeUnmount:A,destroyed:k,unmounted:S,render:Q,renderTracked:et,renderTriggered:yt,errorCaptured:le,serverPrefetch:jt,expose:se,inheritAttrs:mn,components:zn,directives:Ve,filters:fi}=t;if(l&&kv(l,r,null),o)for(const mt in o){const ct=o[mt];tt(ct)&&(r[mt]=ct.bind(n))}if(i){const mt=i.call(n,n);gt(mt)&&(e.data=ra(mt))}if(Lc=!0,s)for(const mt in s){const ct=s[mt],Ye=tt(ct)?ct.bind(n,n):tt(ct.get)?ct.get.bind(n,n):Se,pn=!tt(ct)&&tt(ct.set)?ct.set.bind(n):Se,Ne=zt({get:Ye,set:pn});Object.defineProperty(r,mt,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:ue=>Ne.value=ue})}if(a)for(const mt in a)op(a[mt],r,n,mt);if(c){const mt=tt(c)?c.call(n):c;Reflect.ownKeys(mt).forEach(ct=>{co(ct,mt[ct])})}u&&Qf(u,e,"c");function Mt(mt,ct){K(ct)?ct.forEach(Ye=>mt(Ye.bind(n))):ct&&mt(ct.bind(n))}if(Mt(Av,f),Mt(np,h),Mt(vv,d),Mt(Ev,_),Mt(gv,E),Mt(yv,I),Mt(Cv,le),Mt(Tv,et),Mt(bv,yt),Mt(wv,A),Mt(rp,S),Mt(Iv,jt),K(se))if(se.length){const mt=e.exposed||(e.exposed={});se.forEach(ct=>{Object.defineProperty(mt,ct,{get:()=>n[ct],set:Ye=>n[ct]=Ye})})}else e.exposed||(e.exposed={});Q&&e.render===Se&&(e.render=Q),mn!=null&&(e.inheritAttrs=mn),zn&&(e.components=zn),Ve&&(e.directives=Ve)}function kv(e,t,n=Se){K(e)&&(e=Bc(e));for(const r in e){const i=e[r];let s;gt(i)?"default"in i?s=He(i.from||r,i.default,!0):s=He(i.from||r):s=He(i),Kt(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Qf(e,t,n){ke(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function op(e,t,n,r){const i=r.includes(".")?Jm(n,r):()=>n[r];if(kt(e)){const s=t[e];tt(s)&&ir(i,s)}else if(tt(e))ir(i,e.bind(n));else if(gt(e))if(K(e))e.forEach(s=>op(s,t,n,r));else{const s=tt(e.handler)?e.handler.bind(n):t[e.handler];tt(s)&&ir(i,s,e)}}function iu(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>Eo(c,l,o,!0)),Eo(c,t,o)),gt(t)&&s.set(t,c),c}function Eo(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Eo(e,s,n,!0),i&&i.forEach(o=>Eo(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Dv[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Dv={data:Wf,props:Gf,emits:Gf,methods:_i,computed:_i,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:_i,directives:_i,watch:Vv,provide:Wf,inject:Ov};function Wf(e,t){return t?e?function(){return Lt(tt(e)?e.call(this,this):e,tt(t)?t.call(this,this):t)}:t:e}function Ov(e,t){return _i(Bc(e),Bc(t))}function Bc(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function _i(e,t){return e?Lt(Object.create(null),e,t):t}function Gf(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Lt(Object.create(null),Kf(e),Kf(t??{})):t}function Vv(e,t){if(!e)return t;if(!t)return e;const n=Lt(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function ap(){return{app:null,config:{isNativeTag:lA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nv=0;function Mv(e,t){return function(r,i=null){tt(r)||(r=Lt({},r)),i!=null&&!gt(i)&&(i=null);const s=ap(),o=new Set;let a=!1;const c=s.app={_uid:Nv++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:l0,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&tt(l.install)?(o.add(l),l.install(c,...u)):tt(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const h=xt(r,i);return h.appContext=s,u&&t?t(h,l):e(h,l,f),a=!0,c._container=l,l.__vue_app__=c,ua(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){wo=c;try{return l()}finally{wo=null}}};return c}}let wo=null;function co(e,t){if(qt){let n=qt.provides;const r=qt.parent&&qt.parent.provides;r===n&&(n=qt.provides=Object.create(r)),n[e]=t}}function He(e,t,n=!1){const r=qt||we;if(r||wo){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:wo._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&tt(t)?t.call(r&&r.proxy):t}}function Fv(e,t,n,r=!1){const i={},s={};yo(s,la,1),e.propsDefaults=Object.create(null),cp(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Lm(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Lv(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=at(i),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(sa(e.emitsOptions,h))continue;const d=t[h];if(c)if(st(s,h))d!==s[h]&&(s[h]=d,l=!0);else{const _=Qe(h);i[_]=Uc(c,a,_,d,e,!1)}else d!==s[h]&&(s[h]=d,l=!0)}}}else{cp(e,t,i,s)&&(l=!0);let u;for(const f in a)(!t||!st(t,f)&&((u=ei(f))===f||!st(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Uc(c,a,f,void 0,e,!0)):delete i[f]);if(s!==a)for(const f in s)(!t||!st(t,f))&&(delete s[f],l=!0)}l&&nn(e,"set","$attrs")}function cp(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(so(c))continue;const l=t[c];let u;i&&st(i,u=Qe(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:sa(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=at(n),l=a||_t;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Uc(i,c,f,l[f],e,!st(l,f))}}return o}function Uc(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=st(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&tt(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(zr(i),r=l[n]=c.call(null,t),sr())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ei(n))&&(r=!0))}return r}function lp(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!tt(e)){const u=f=>{c=!0;const[h,d]=lp(f,t,!0);Lt(o,h),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return gt(e)&&r.set(e,Dr),Dr;if(K(s))for(let u=0;u<s.length;u++){const f=Qe(s[u]);Yf(f)&&(o[f]=_t)}else if(s)for(const u in s){const f=Qe(u);if(Yf(f)){const h=s[u],d=o[f]=K(h)||tt(h)?{type:h}:Lt({},h);if(d){const _=Zf(Boolean,d.type),E=Zf(String,d.type);d[0]=_>-1,d[1]=E<0||_<E,(_>-1||st(d,"default"))&&a.push(f)}}}const l=[o,a];return gt(e)&&r.set(e,l),l}function Yf(e){return e[0]!=="$"}function Xf(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Jf(e,t){return Xf(e)===Xf(t)}function Zf(e,t){return K(t)?t.findIndex(n=>Jf(n,e)):tt(t)&&Jf(t,e)?0:-1}const up=e=>e[0]==="_"||e==="$stable",su=e=>K(e)?e.map(Le):[Le(e)],Bv=(e,t,n)=>{if(t._n)return t;const r=eu((...i)=>su(t(...i)),n);return r._c=!1,r},fp=(e,t,n)=>{const r=e._ctx;for(const i in e){if(up(i))continue;const s=e[i];if(tt(s))t[i]=Bv(i,s,r);else if(s!=null){const o=su(s);t[i]=()=>o}}},hp=(e,t)=>{const n=su(t);e.slots.default=()=>n},Uv=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=at(t),yo(t,"_",n)):fp(t,e.slots={})}else e.slots={},t&&hp(e,t);yo(e.slots,la,1)},jv=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=_t;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Lt(i,t),!n&&a===1&&delete i._):(s=!t.$stable,fp(t,i)),o=t}else t&&(hp(e,t),o={default:1});if(s)for(const a in i)!up(a)&&!(a in o)&&delete i[a]};function jc(e,t,n,r,i=!1){if(K(e)){e.forEach((h,d)=>jc(h,t&&(K(t)?t[d]:t),n,r,i));return}if(ao(r)&&!i)return;const s=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,l=t&&t.r,u=a.refs===_t?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(kt(l)?(u[l]=null,st(f,l)&&(f[l]=null)):Kt(l)&&(l.value=null)),tt(c))Tn(c,a,12,[o,u]);else{const h=kt(c),d=Kt(c);if(h||d){const _=()=>{if(e.f){const E=h?st(f,c)?f[c]:u[c]:c.value;i?K(E)&&Ul(E,s):K(E)?E.includes(s)||E.push(s):h?(u[c]=[s],st(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else h?(u[c]=o,st(f,c)&&(f[c]=o)):d&&(c.value=o,e.k&&(u[e.k]=o))};o?(_.id=-1,he(_,n)):_()}}}const he=mv;function $v(e){return zv(e)}function zv(e,t){const n=kc();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Se,insertStaticContent:_}=e,E=(m,p,g,v=null,b=null,T=null,N=!1,x=null,D=!!p.dynamicChildren)=>{if(m===p)return;m&&!di(m,p)&&(v=w(m),ue(m,b,T,!0),m=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:R,ref:$,shapeFlag:L}=p;switch(R){case ca:I(m,p,g,v);break;case cr:y(m,p,g,v);break;case Xa:m==null&&A(p,g,v,N);break;case ae:zn(m,p,g,v,b,T,N,x,D);break;default:L&1?Q(m,p,g,v,b,T,N,x,D):L&6?Ve(m,p,g,v,b,T,N,x,D):(L&64||L&128)&&R.process(m,p,g,v,b,T,N,x,D,O)}$!=null&&b&&jc($,m&&m.ref,T,p||m,!p)},I=(m,p,g,v)=>{if(m==null)r(p.el=a(p.children),g,v);else{const b=p.el=m.el;p.children!==m.children&&l(b,p.children)}},y=(m,p,g,v)=>{m==null?r(p.el=c(p.children||""),g,v):p.el=m.el},A=(m,p,g,v)=>{[m.el,m.anchor]=_(m.children,p,g,v,m.el,m.anchor)},k=({el:m,anchor:p},g,v)=>{let b;for(;m&&m!==p;)b=h(m),r(m,g,v),m=b;r(p,g,v)},S=({el:m,anchor:p})=>{let g;for(;m&&m!==p;)g=h(m),i(m),m=g;i(p)},Q=(m,p,g,v,b,T,N,x,D)=>{N=N||p.type==="svg",m==null?et(p,g,v,b,T,N,x,D):jt(m,p,b,T,N,x,D)},et=(m,p,g,v,b,T,N,x)=>{let D,R;const{type:$,props:L,shapeFlag:z,transition:Y,dirs:nt}=m;if(D=m.el=o(m.type,T,L&&L.is,L),z&8?u(D,m.children):z&16&&le(m.children,D,null,v,b,T&&$!=="foreignObject",N,x),nt&&Hn(m,null,v,"created"),yt(D,m,m.scopeId,N,v),L){for(const dt in L)dt!=="value"&&!so(dt)&&s(D,dt,null,L[dt],T,m.children,v,b,Wt);"value"in L&&s(D,"value",null,L.value),(R=L.onVnodeBeforeMount)&&Fe(R,v,m)}nt&&Hn(m,null,v,"beforeMount");const pt=(!b||b&&!b.pendingBranch)&&Y&&!Y.persisted;pt&&Y.beforeEnter(D),r(D,p,g),((R=L&&L.onVnodeMounted)||pt||nt)&&he(()=>{R&&Fe(R,v,m),pt&&Y.enter(D),nt&&Hn(m,null,v,"mounted")},b)},yt=(m,p,g,v,b)=>{if(g&&d(m,g),v)for(let T=0;T<v.length;T++)d(m,v[T]);if(b){let T=b.subTree;if(p===T){const N=b.vnode;yt(m,N,N.scopeId,N.slotScopeIds,b.parent)}}},le=(m,p,g,v,b,T,N,x,D=0)=>{for(let R=D;R<m.length;R++){const $=m[R]=x?An(m[R]):Le(m[R]);E(null,$,p,g,v,b,T,N,x)}},jt=(m,p,g,v,b,T,N)=>{const x=p.el=m.el;let{patchFlag:D,dynamicChildren:R,dirs:$}=p;D|=m.patchFlag&16;const L=m.props||_t,z=p.props||_t;let Y;g&&qn(g,!1),(Y=z.onVnodeBeforeUpdate)&&Fe(Y,g,p,m),$&&Hn(p,m,g,"beforeUpdate"),g&&qn(g,!0);const nt=b&&p.type!=="foreignObject";if(R?se(m.dynamicChildren,R,x,g,v,nt,T):N||ct(m,p,x,null,g,v,nt,T,!1),D>0){if(D&16)mn(x,p,L,z,g,v,b);else if(D&2&&L.class!==z.class&&s(x,"class",null,z.class,b),D&4&&s(x,"style",L.style,z.style,b),D&8){const pt=p.dynamicProps;for(let dt=0;dt<pt.length;dt++){const Rt=pt[dt],be=L[Rt],Ir=z[Rt];(Ir!==be||Rt==="value")&&s(x,Rt,be,Ir,b,m.children,g,v,Wt)}}D&1&&m.children!==p.children&&u(x,p.children)}else!N&&R==null&&mn(x,p,L,z,g,v,b);((Y=z.onVnodeUpdated)||$)&&he(()=>{Y&&Fe(Y,g,p,m),$&&Hn(p,m,g,"updated")},v)},se=(m,p,g,v,b,T,N)=>{for(let x=0;x<p.length;x++){const D=m[x],R=p[x],$=D.el&&(D.type===ae||!di(D,R)||D.shapeFlag&70)?f(D.el):g;E(D,R,$,null,v,b,T,N,!0)}},mn=(m,p,g,v,b,T,N)=>{if(g!==v){if(g!==_t)for(const x in g)!so(x)&&!(x in v)&&s(m,x,g[x],null,N,p.children,b,T,Wt);for(const x in v){if(so(x))continue;const D=v[x],R=g[x];D!==R&&x!=="value"&&s(m,x,R,D,N,p.children,b,T,Wt)}"value"in v&&s(m,"value",g.value,v.value)}},zn=(m,p,g,v,b,T,N,x,D)=>{const R=p.el=m?m.el:a(""),$=p.anchor=m?m.anchor:a("");let{patchFlag:L,dynamicChildren:z,slotScopeIds:Y}=p;Y&&(x=x?x.concat(Y):Y),m==null?(r(R,g,v),r($,g,v),le(p.children,g,$,b,T,N,x,D)):L>0&&L&64&&z&&m.dynamicChildren?(se(m.dynamicChildren,z,g,b,T,N,x),(p.key!=null||b&&p===b.subTree)&&dp(m,p,!0)):ct(m,p,g,$,b,T,N,x,D)},Ve=(m,p,g,v,b,T,N,x,D)=>{p.slotScopeIds=x,m==null?p.shapeFlag&512?b.ctx.activate(p,g,v,N,D):fi(p,g,v,b,T,N,D):vr(m,p,D)},fi=(m,p,g,v,b,T,N)=>{const x=m.component=t0(m,v,b);if(tp(m)&&(x.ctx.renderer=O),e0(x),x.asyncDep){if(b&&b.registerDep(x,Mt),!m.el){const D=x.subTree=xt(cr);y(null,D,p,g)}return}Mt(x,m,p,g,b,T,N)},vr=(m,p,g)=>{const v=p.component=m.component;if(fv(m,p,g))if(v.asyncDep&&!v.asyncResolved){mt(v,p,g);return}else v.next=p,sv(v.update),v.update();else p.el=m.el,v.vnode=p},Mt=(m,p,g,v,b,T,N)=>{const x=()=>{if(m.isMounted){let{next:$,bu:L,u:z,parent:Y,vnode:nt}=m,pt=$,dt;qn(m,!1),$?($.el=nt.el,mt(m,$,N)):$=nt,L&&oo(L),(dt=$.props&&$.props.onVnodeBeforeUpdate)&&Fe(dt,Y,$,nt),qn(m,!0);const Rt=Ga(m),be=m.subTree;m.subTree=Rt,E(be,Rt,f(be.el),w(be),m,b,T),$.el=Rt.el,pt===null&&hv(m,Rt.el),z&&he(z,b),(dt=$.props&&$.props.onVnodeUpdated)&&he(()=>Fe(dt,Y,$,nt),b)}else{let $;const{el:L,props:z}=p,{bm:Y,m:nt,parent:pt}=m,dt=ao(p);if(qn(m,!1),Y&&oo(Y),!dt&&($=z&&z.onVnodeBeforeMount)&&Fe($,pt,p),qn(m,!0),L&&lt){const Rt=()=>{m.subTree=Ga(m),lt(L,m.subTree,m,b,null)};dt?p.type.__asyncLoader().then(()=>!m.isUnmounted&&Rt()):Rt()}else{const Rt=m.subTree=Ga(m);E(null,Rt,g,v,m,b,T),p.el=Rt.el}if(nt&&he(nt,b),!dt&&($=z&&z.onVnodeMounted)){const Rt=p;he(()=>Fe($,pt,Rt),b)}(p.shapeFlag&256||pt&&ao(pt.vnode)&&pt.vnode.shapeFlag&256)&&m.a&&he(m.a,b),m.isMounted=!0,p=g=v=null}},D=m.effect=new Hl(x,()=>Jl(R),m.scope),R=m.update=()=>D.run();R.id=m.uid,qn(m,!0),R()},mt=(m,p,g)=>{p.component=m;const v=m.vnode.props;m.vnode=p,m.next=null,Lv(m,p.props,v,g),jv(m,p.children,g),ni(),zf(),ri()},ct=(m,p,g,v,b,T,N,x,D=!1)=>{const R=m&&m.children,$=m?m.shapeFlag:0,L=p.children,{patchFlag:z,shapeFlag:Y}=p;if(z>0){if(z&128){pn(R,L,g,v,b,T,N,x,D);return}else if(z&256){Ye(R,L,g,v,b,T,N,x,D);return}}Y&8?($&16&&Wt(R,b,T),L!==R&&u(g,L)):$&16?Y&16?pn(R,L,g,v,b,T,N,x,D):Wt(R,b,T,!0):($&8&&u(g,""),Y&16&&le(L,g,v,b,T,N,x,D))},Ye=(m,p,g,v,b,T,N,x,D)=>{m=m||Dr,p=p||Dr;const R=m.length,$=p.length,L=Math.min(R,$);let z;for(z=0;z<L;z++){const Y=p[z]=D?An(p[z]):Le(p[z]);E(m[z],Y,g,null,b,T,N,x,D)}R>$?Wt(m,b,T,!0,!1,L):le(p,g,v,b,T,N,x,D,L)},pn=(m,p,g,v,b,T,N,x,D)=>{let R=0;const $=p.length;let L=m.length-1,z=$-1;for(;R<=L&&R<=z;){const Y=m[R],nt=p[R]=D?An(p[R]):Le(p[R]);if(di(Y,nt))E(Y,nt,g,null,b,T,N,x,D);else break;R++}for(;R<=L&&R<=z;){const Y=m[L],nt=p[z]=D?An(p[z]):Le(p[z]);if(di(Y,nt))E(Y,nt,g,null,b,T,N,x,D);else break;L--,z--}if(R>L){if(R<=z){const Y=z+1,nt=Y<$?p[Y].el:v;for(;R<=z;)E(null,p[R]=D?An(p[R]):Le(p[R]),g,nt,b,T,N,x,D),R++}}else if(R>z)for(;R<=L;)ue(m[R],b,T,!0),R++;else{const Y=R,nt=R,pt=new Map;for(R=nt;R<=z;R++){const pe=p[R]=D?An(p[R]):Le(p[R]);pe.key!=null&&pt.set(pe.key,R)}let dt,Rt=0;const be=z-nt+1;let Ir=!1,kf=0;const hi=new Array(be);for(R=0;R<be;R++)hi[R]=0;for(R=Y;R<=L;R++){const pe=m[R];if(Rt>=be){ue(pe,b,T,!0);continue}let Me;if(pe.key!=null)Me=pt.get(pe.key);else for(dt=nt;dt<=z;dt++)if(hi[dt-nt]===0&&di(pe,p[dt])){Me=dt;break}Me===void 0?ue(pe,b,T,!0):(hi[Me-nt]=R+1,Me>=kf?kf=Me:Ir=!0,E(pe,p[Me],g,null,b,T,N,x,D),Rt++)}const Df=Ir?Hv(hi):Dr;for(dt=Df.length-1,R=be-1;R>=0;R--){const pe=nt+R,Me=p[pe],Of=pe+1<$?p[pe+1].el:v;hi[R]===0?E(null,Me,g,Of,b,T,N,x,D):Ir&&(dt<0||R!==Df[dt]?Ne(Me,g,Of,2):dt--)}}},Ne=(m,p,g,v,b=null)=>{const{el:T,type:N,transition:x,children:D,shapeFlag:R}=m;if(R&6){Ne(m.component.subTree,p,g,v);return}if(R&128){m.suspense.move(p,g,v);return}if(R&64){N.move(m,p,g,O);return}if(N===ae){r(T,p,g);for(let L=0;L<D.length;L++)Ne(D[L],p,g,v);r(m.anchor,p,g);return}if(N===Xa){k(m,p,g);return}if(v!==2&&R&1&&x)if(v===0)x.beforeEnter(T),r(T,p,g),he(()=>x.enter(T),b);else{const{leave:L,delayLeave:z,afterLeave:Y}=x,nt=()=>r(T,p,g),pt=()=>{L(T,()=>{nt(),Y&&Y()})};z?z(T,nt,pt):pt()}else r(T,p,g)},ue=(m,p,g,v=!1,b=!1)=>{const{type:T,props:N,ref:x,children:D,dynamicChildren:R,shapeFlag:$,patchFlag:L,dirs:z}=m;if(x!=null&&jc(x,null,g,m,!0),$&256){p.ctx.deactivate(m);return}const Y=$&1&&z,nt=!ao(m);let pt;if(nt&&(pt=N&&N.onVnodeBeforeUnmount)&&Fe(pt,p,m),$&6)Vs(m.component,g,v);else{if($&128){m.suspense.unmount(g,v);return}Y&&Hn(m,null,p,"beforeUnmount"),$&64?m.type.remove(m,p,g,b,O,v):R&&(T!==ae||L>0&&L&64)?Wt(R,p,g,!1,!0):(T===ae&&L&384||!b&&$&16)&&Wt(D,p,g),v&&Er(m)}(nt&&(pt=N&&N.onVnodeUnmounted)||Y)&&he(()=>{pt&&Fe(pt,p,m),Y&&Hn(m,null,p,"unmounted")},g)},Er=m=>{const{type:p,el:g,anchor:v,transition:b}=m;if(p===ae){wr(g,v);return}if(p===Xa){S(m);return}const T=()=>{i(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(m.shapeFlag&1&&b&&!b.persisted){const{leave:N,delayLeave:x}=b,D=()=>N(g,T);x?x(m.el,T,D):D()}else T()},wr=(m,p)=>{let g;for(;m!==p;)g=h(m),i(m),m=g;i(p)},Vs=(m,p,g)=>{const{bum:v,scope:b,update:T,subTree:N,um:x}=m;v&&oo(v),b.stop(),T&&(T.active=!1,ue(N,m,p,g)),x&&he(x,p),he(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Wt=(m,p,g,v=!1,b=!1,T=0)=>{for(let N=T;N<m.length;N++)ue(m[N],p,g,v,b)},w=m=>m.shapeFlag&6?w(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),F=(m,p,g)=>{m==null?p._vnode&&ue(p._vnode,null,null,!0):E(p._vnode||null,m,p,null,null,null,g),zf(),Wm(),p._vnode=m},O={p:E,um:ue,m:Ne,r:Er,mt:fi,mc:le,pc:ct,pbc:se,n:w,o:e};let j,lt;return t&&([j,lt]=t(O)),{render:F,hydrate:j,createApp:Mv(F,j)}}function qn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function dp(e,t,n=!1){const r=e.children,i=t.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=An(i[s]),a.el=o.el),n||dp(o,a)),a.type===ca&&(a.el=o.el)}}function Hv(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const qv=e=>e.__isTeleport,ae=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),Xa=Symbol.for("v-stc"),Ri=[];let Ce=null;function Dt(e=!1){Ri.push(Ce=e?null:[])}function Kv(){Ri.pop(),Ce=Ri[Ri.length-1]||null}let qi=1;function th(e){qi+=e}function mp(e){return e.dynamicChildren=qi>0?Ce||Dr:null,Kv(),qi>0&&Ce&&Ce.push(e),e}function Zt(e,t,n,r,i,s){return mp(Z(e,t,n,r,i,s,!0))}function ou(e,t,n,r,i){return mp(xt(e,t,n,r,i,!0))}function $c(e){return e?e.__v_isVNode===!0:!1}function di(e,t){return e.type===t.type&&e.key===t.key}const la="__vInternal",pp=({key:e})=>e??null,lo=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?kt(e)||Kt(e)||tt(e)?{i:we,r:e,k:t,f:!!n}:e:null);function Z(e,t=null,n=null,r=0,i=null,s=e===ae?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pp(t),ref:t&&lo(t),scopeId:oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:we};return a?(au(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=kt(n)?8:16),qi>0&&!o&&Ce&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ce.push(c),c}const xt=Qv;function Qv(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===ip)&&(e=cr),$c(e)){const a=$r(e,t,!0);return n&&au(a,n),qi>0&&!s&&Ce&&(a.shapeFlag&6?Ce[Ce.indexOf(e)]=a:Ce.push(a)),a.patchFlag|=-2,a}if(o0(e)&&(e=e.__vccOpts),t){t=Wv(t);let{class:a,style:c}=t;a&&!kt(a)&&(t.class=ta(a)),gt(c)&&(Um(c)&&!K(c)&&(c=Lt({},c)),t.style=$l(c))}const o=kt(e)?1:dv(e)?128:qv(e)?64:gt(e)?4:tt(e)?2:0;return Z(e,t,n,r,i,o,s,!0)}function Wv(e){return e?Um(e)||la in e?Lt({},e):e:null}function $r(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?Xv(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&pp(a),ref:t&&t.ref?n&&i?K(i)?i.concat(lo(t)):[i,lo(t)]:lo(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ae?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$r(e.ssContent),ssFallback:e.ssFallback&&$r(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Gv(e=" ",t=0){return xt(ca,null,e,t)}function Yv(e="",t=!1){return t?(Dt(),ou(cr,null,e)):xt(cr,null,e)}function Le(e){return e==null||typeof e=="boolean"?xt(cr):K(e)?xt(ae,null,e.slice()):typeof e=="object"?An(e):xt(ca,null,String(e))}function An(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$r(e)}function au(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),au(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(la in t)?t._ctx=we:i===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else tt(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[Gv(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xv(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=ta([t.class,r.class]));else if(i==="style")t.style=$l([t.style,r.style]);else if(Yo(i)){const s=t[i],o=r[i];o&&s!==o&&!(K(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function Fe(e,t,n,r=null){ke(e,t,7,[n,r])}const Jv=ap();let Zv=0;function t0(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Jv,s={uid:Zv++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(r,i),emitsOptions:Ym(r,i),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:r.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=cv.bind(null,s),e.ce&&e.ce(s),s}let qt=null,cu,br,eh="__VUE_INSTANCE_SETTERS__";(br=kc()[eh])||(br=kc()[eh]=[]),br.push(e=>qt=e),cu=e=>{br.length>1?br.forEach(t=>t(e)):br[0](e)};const zr=e=>{cu(e),e.scope.on()},sr=()=>{qt&&qt.scope.off(),cu(null)};function gp(e){return e.vnode.shapeFlag&4}let Ki=!1;function e0(e,t=!1){Ki=t;const{props:n,children:r}=e.vnode,i=gp(e);Fv(e,n,i,t),Uv(e,r);const s=i?n0(e,t):void 0;return Ki=!1,s}function n0(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Gl(new Proxy(e.ctx,Sv));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?i0(e):null;zr(e),ni();const s=Tn(r,e,0,[e.props,i]);if(ri(),sr(),Em(s)){if(s.then(sr,sr),t)return s.then(o=>{nh(e,o,t)}).catch(o=>{ia(o,e,0)});e.asyncDep=s}else nh(e,s,t)}else yp(e,t)}function nh(e,t,n){tt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:gt(t)&&(e.setupState=Hm(t)),yp(e,n)}let rh;function yp(e,t,n){const r=e.type;if(!e.render){if(!t&&rh&&!r.render){const i=r.template||iu(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Lt(Lt({isCustomElement:s,delimiters:a},o),c);r.render=rh(i,l)}}e.render=r.render||Se}zr(e),ni(),xv(e),ri(),sr()}function r0(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function i0(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return r0(e)},slots:e.slots,emit:e.emit,expose:t}}function ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hm(Gl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ci)return Ci[n](e)},has(t,n){return n in t||n in Ci}}))}function s0(e,t=!0){return tt(e)?e.displayName||e.name:e.name||t&&e.__name}function o0(e){return tt(e)&&"__vccOpts"in e}const zt=(e,t)=>nv(e,t,Ki);function lu(e,t,n){const r=arguments.length;return r===2?gt(t)&&!K(t)?$c(t)?xt(e,null,[t]):xt(e,t):xt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$c(n)&&(n=[n]),xt(e,t,n))}const a0=Symbol.for("v-scx"),c0=()=>He(a0),l0="3.3.4",u0="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,ih=Wn&&Wn.createElement("template"),f0={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Wn.createElementNS(u0,e):Wn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Wn.createTextNode(e),createComment:e=>Wn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Wn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{ih.innerHTML=r?`<svg>${e}</svg>`:e;const a=ih.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function h0(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d0(e,t,n){const r=e.style,i=kt(n);if(n&&!i){if(t&&!kt(t))for(const s in t)n[s]==null&&zc(r,s,"");for(const s in n)zc(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const sh=/\s*!important$/;function zc(e,t,n){if(K(n))n.forEach(r=>zc(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=m0(e,t);sh.test(n)?e.setProperty(ei(r),n.replace(sh,""),"important"):e[r]=n}}const oh=["Webkit","Moz","ms"],Ja={};function m0(e,t){const n=Ja[t];if(n)return n;let r=Qe(t);if(r!=="filter"&&r in e)return Ja[t]=r;r=Zo(r);for(let i=0;i<oh.length;i++){const s=oh[i]+r;if(s in e)return Ja[t]=s}return t}const ah="http://www.w3.org/1999/xlink";function p0(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ah,t.slice(6,t.length)):e.setAttributeNS(ah,t,n);else{const s=vA(t);n==null||s&&!bm(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function g0(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=bm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Gn(e,t,n,r){e.addEventListener(t,n,r)}function y0(e,t,n,r){e.removeEventListener(t,n,r)}function _0(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[a,c]=A0(t);if(r){const l=s[t]=w0(r,i);Gn(e,a,l,c)}else o&&(y0(e,a,o,c),s[t]=void 0)}}const ch=/(?:Once|Passive|Capture)$/;function A0(e){let t;if(ch.test(e)){t={};let r;for(;r=e.match(ch);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ei(e.slice(2)),t]}let Za=0;const v0=Promise.resolve(),E0=()=>Za||(v0.then(()=>Za=0),Za=Date.now());function w0(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ke(I0(r,n.value),t,5,[r])};return n.value=e,n.attached=E0(),n}function I0(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const lh=/^on[a-z]/,b0=(e,t,n,r,i=!1,s,o,a,c)=>{t==="class"?h0(e,r,i):t==="style"?d0(e,n,r):Yo(t)?Bl(t)||_0(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):T0(e,t,r,i))?g0(e,t,r,s,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),p0(e,t,r,i))};function T0(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&lh.test(t)&&tt(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||lh.test(t)&&kt(n)?!1:t in e}const Io=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>oo(t,n):t};function C0(e){e.target.composing=!0}function uh(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const R0={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Io(i);const s=r||i.props&&i.props.type==="number";Gn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=_o(a)),e._assign(a)}),n&&Gn(e,"change",()=>{e.value=e.value.trim()}),t||(Gn(e,"compositionstart",C0),Gn(e,"compositionend",uh),Gn(e,"change",uh))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Io(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&_o(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},P0={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const i=Xo(t);Gn(e,"change",()=>{const s=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?_o(bo(o)):bo(o));e._assign(e.multiple?i?new Set(s):s:s[0])}),e._assign=Io(r)},mounted(e,{value:t}){fh(e,t)},beforeUpdate(e,t,n){e._assign=Io(n)},updated(e,{value:t}){fh(e,t)}};function fh(e,t){const n=e.multiple;if(!(n&&!K(t)&&!Xo(t))){for(let r=0,i=e.options.length;r<i;r++){const s=e.options[r],o=bo(s);if(n)K(t)?s.selected=wA(t,o)>-1:s.selected=t.has(o);else if(ea(bo(s),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function bo(e){return"_value"in e?e._value:e.value}const S0=Lt({patchProp:b0},f0);let hh;function x0(){return hh||(hh=$v(S0))}const k0=(...e)=>{const t=x0().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=D0(r);if(!i)return;const s=t._component;!tt(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function D0(e){return kt(e)?document.querySelector(e):e}var O0=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const V0=Symbol();var dh;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(dh||(dh={}));function N0(){const e=IA(!0),t=e.run(()=>En({}));let n=[],r=[];const i=Gl({install(s){i._a=s,s.provide(V0,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!O0?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Cr=typeof window<"u";function M0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ft=Object.assign;function tc(e,t){const n={};for(const r in t){const i=t[r];n[r]=De(i)?i.map(e):e(i)}return n}const Pi=()=>{},De=Array.isArray,F0=/\/$/,L0=e=>e.replace(F0,"");function ec(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=$0(r??t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function B0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function mh(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function U0(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Hr(t.matched[r],n.matched[i])&&_p(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Hr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _p(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!j0(e[n],t[n]))return!1;return!0}function j0(e,t){return De(e)?ph(e,t):De(t)?ph(t,e):e===t}function ph(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function $0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Qi;(function(e){e.pop="pop",e.push="push"})(Qi||(Qi={}));var Si;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Si||(Si={}));function z0(e){if(!e)if(Cr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),L0(e)}const H0=/^[^#]+#/;function q0(e,t){return e.replace(H0,"#")+t}function K0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Q0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=K0(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function gh(e,t){return(history.state?history.state.position-t:-1)+e}const Hc=new Map;function W0(e,t){Hc.set(e,t)}function G0(e){const t=Hc.get(e);return Hc.delete(e),t}let Y0=()=>location.protocol+"//"+location.host;function Ap(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),mh(c,"")}return mh(n,e)+r+i}function X0(e,t,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const d=Ap(e,location),_=n.value,E=t.value;let I=0;if(h){if(n.value=d,t.value=h,o&&o===_){o=null;return}I=E?h.position-E.position:0}else r(d);i.forEach(y=>{y(n.value,_,{delta:I,type:Qi.pop,direction:I?I>0?Si.forward:Si.back:Si.unknown})})};function c(){o=n.value}function l(h){i.push(h);const d=()=>{const _=i.indexOf(h);_>-1&&i.splice(_,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(ft({},h.state,{scroll:fa()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function yh(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?fa():null}}function J0(e){const{history:t,location:n}=window,r={value:Ap(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Y0()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(c,l){const u=ft({},t.state,yh(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=ft({},i.value,t.state,{forward:c,scroll:fa()});s(u.current,u,!0);const f=ft({},yh(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function Z0(e){e=z0(e);const t=J0(e),n=X0(e,t.state,t.location,t.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ft({location:"",base:e,go:r,createHref:q0.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function tE(e){return typeof e=="string"||e&&typeof e=="object"}function vp(e){return typeof e=="string"||typeof e=="symbol"}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ep=Symbol("");var _h;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_h||(_h={}));function qr(e,t){return ft(new Error,{type:e,[Ep]:!0},t)}function Xe(e,t){return e instanceof Error&&Ep in e&&(t==null||!!(e.type&t))}const Ah="[^/]+?",eE={sensitive:!1,strict:!1,start:!0,end:!0},nE=/[.+*?^${}()[\]/\\]/g;function rE(e,t){const n=ft({},eE,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(nE,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:E,optional:I,regexp:y}=h;s.push({name:_,repeatable:E,optional:I});const A=y||Ah;if(A!==Ah){d+=10;try{new RegExp(`(${A})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+S.message)}}let k=E?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(k=I&&l.length<2?`(?:/${k})`:"/"+k),I&&(k+="?"),i+=k,d+=20,I&&(d+=-8),E&&(d+=-20),A===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:E,optional:I}=d,y=_ in l?l[_]:"";if(De(y)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=De(y)?y.join("/"):y;if(!A)if(I)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function iE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function sE(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=iE(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(vh(r))return 1;if(vh(i))return-1}return i.length-r.length}function vh(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const oE={type:0,value:""},aE=/[a-zA-Z0-9_]/;function cE(e){if(!e)return[[]];if(e==="/")return[[oE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:aE.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function lE(e,t,n){const r=rE(cE(e.path),n),i=ft(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function uE(e,t){const n=[],r=new Map;t=Ih({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,h){const d=!h,_=fE(u);_.aliasOf=h&&h.record;const E=Ih(t,u),I=[_];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of k)I.push(ft({},_,{components:h?h.record.components:_.components,path:S,aliasOf:h?h.record:_}))}let y,A;for(const k of I){const{path:S}=k;if(f&&S[0]!=="/"){const Q=f.record.path,et=Q[Q.length-1]==="/"?"":"/";k.path=f.record.path+(S&&et+S)}if(y=lE(k,f,E),h?h.alias.push(y):(A=A||y,A!==y&&A.alias.push(y),d&&u.name&&!wh(y)&&o(u.name)),_.children){const Q=_.children;for(let et=0;et<Q.length;et++)s(Q[et],y,h&&h.children[et])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return A?()=>{o(A)}:Pi}function o(u){if(vp(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&sE(u,n[f])>=0&&(u.record.path!==n[f].record.path||!wp(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!wh(u)&&r.set(u.record.name,u)}function l(u,f){let h,d={},_,E;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw qr(1,{location:u});E=h.record.name,d=ft(Eh(f.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Eh(u.params,h.keys.map(A=>A.name))),_=h.stringify(d)}else if("path"in u)_=u.path,h=n.find(A=>A.re.test(_)),h&&(d=h.parse(_),E=h.record.name);else{if(h=f.name?r.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw qr(1,{location:u,currentLocation:f});E=h.record.name,d=ft({},f.params,u.params),_=h.stringify(d)}const I=[];let y=h;for(;y;)I.unshift(y.record),y=y.parent;return{name:E,path:_,params:d,matched:I,meta:dE(I)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Eh(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fE(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:hE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function hE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function wh(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function dE(e){return e.reduce((t,n)=>ft(t,n.meta),{})}function Ih(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function wp(e,t){return t.children.some(n=>n===e||wp(e,n))}const Ip=/#/g,mE=/&/g,pE=/\//g,gE=/=/g,yE=/\?/g,bp=/\+/g,_E=/%5B/g,AE=/%5D/g,Tp=/%5E/g,vE=/%60/g,Cp=/%7B/g,EE=/%7C/g,Rp=/%7D/g,wE=/%20/g;function uu(e){return encodeURI(""+e).replace(EE,"|").replace(_E,"[").replace(AE,"]")}function IE(e){return uu(e).replace(Cp,"{").replace(Rp,"}").replace(Tp,"^")}function qc(e){return uu(e).replace(bp,"%2B").replace(wE,"+").replace(Ip,"%23").replace(mE,"%26").replace(vE,"`").replace(Cp,"{").replace(Rp,"}").replace(Tp,"^")}function bE(e){return qc(e).replace(gE,"%3D")}function TE(e){return uu(e).replace(Ip,"%23").replace(yE,"%3F")}function CE(e){return e==null?"":TE(e).replace(pE,"%2F")}function To(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function RE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(bp," "),o=s.indexOf("="),a=To(o<0?s:s.slice(0,o)),c=o<0?null:To(s.slice(o+1));if(a in t){let l=t[a];De(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function bh(e){let t="";for(let n in e){const r=e[n];if(n=bE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(s=>s&&qc(s)):[r&&qc(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function PE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const SE=Symbol(""),Th=Symbol(""),fu=Symbol(""),hu=Symbol(""),Kc=Symbol("");function mi(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function vn(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(qr(4,{from:n,to:t})):f instanceof Error?a(f):tE(f)?a(qr(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function nc(e,t,n,r){const i=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(xE(a)){const l=(a.__vccOpts||a)[t];l&&i.push(vn(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=M0(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&vn(h,n,r,s,o)()}))}}return i}function xE(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ch(e){const t=He(fu),n=He(hu),r=zt(()=>t.resolve(xe(e.to))),i=zt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Hr.bind(null,u));if(h>-1)return h;const d=Rh(c[l-2]);return l>1&&Rh(u)===d&&f[f.length-1].path!==d?f.findIndex(Hr.bind(null,c[l-2])):h}),s=zt(()=>i.value>-1&&OE(n.params,r.value.params)),o=zt(()=>i.value>-1&&i.value===n.matched.length-1&&_p(n.params,r.value.params));function a(c={}){return DE(c)?t[xe(e.replace)?"replace":"push"](xe(e.to)).catch(Pi):Promise.resolve()}return{route:r,href:zt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const kE=nu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ch,setup(e,{slots:t}){const n=ra(Ch(e)),{options:r}=He(fu),i=zt(()=>({[Ph(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ph(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:lu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Pp=kE;function DE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function OE(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!De(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Rh(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ph=(e,t,n)=>e??t??n,VE=nu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=He(Kc),i=zt(()=>e.route||r.value),s=He(Th,0),o=zt(()=>{let l=xe(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=zt(()=>i.value.matched[o.value]);co(Th,zt(()=>o.value+1)),co(SE,a),co(Kc,i);const c=En();return ir(()=>[c.value,a.value,e.name],([l,u,f],[h,d,_])=>{u&&(u.instances[f]=l,d&&d!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Hr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=a.value,h=f&&f.components[u];if(!h)return Sh(n.default,{Component:h,route:l});const d=f.props[u],_=d?d===!0?l.params:typeof d=="function"?d(l):d:null,I=lu(h,ft({},_,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Sh(n.default,{Component:I,route:l})||I}}});function Sh(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Sp=VE;function NE(e){const t=uE(e.routes,e),n=e.parseQuery||RE,r=e.stringifyQuery||bh,i=e.history,s=mi(),o=mi(),a=mi(),c=JA(yn);let l=yn;Cr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tc.bind(null,w=>""+w),f=tc.bind(null,CE),h=tc.bind(null,To);function d(w,F){let O,j;return vp(w)?(O=t.getRecordMatcher(w),j=F):j=w,t.addRoute(j,O)}function _(w){const F=t.getRecordMatcher(w);F&&t.removeRoute(F)}function E(){return t.getRoutes().map(w=>w.record)}function I(w){return!!t.getRecordMatcher(w)}function y(w,F){if(F=ft({},F||c.value),typeof w=="string"){const g=ec(n,w,F.path),v=t.resolve({path:g.path},F),b=i.createHref(g.fullPath);return ft(g,v,{params:h(v.params),hash:To(g.hash),redirectedFrom:void 0,href:b})}let O;if("path"in w)O=ft({},w,{path:ec(n,w.path,F.path).path});else{const g=ft({},w.params);for(const v in g)g[v]==null&&delete g[v];O=ft({},w,{params:f(g)}),F.params=f(F.params)}const j=t.resolve(O,F),lt=w.hash||"";j.params=u(h(j.params));const m=B0(r,ft({},w,{hash:IE(lt),path:j.path})),p=i.createHref(m);return ft({fullPath:m,hash:lt,query:r===bh?PE(w.query):w.query||{}},j,{redirectedFrom:void 0,href:p})}function A(w){return typeof w=="string"?ec(n,w,c.value.path):ft({},w)}function k(w,F){if(l!==w)return qr(8,{from:F,to:w})}function S(w){return yt(w)}function Q(w){return S(ft(A(w),{replace:!0}))}function et(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:O}=F;let j=typeof O=="function"?O(w):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=A(j):{path:j},j.params={}),ft({query:w.query,hash:w.hash,params:"path"in j?{}:w.params},j)}}function yt(w,F){const O=l=y(w),j=c.value,lt=w.state,m=w.force,p=w.replace===!0,g=et(O);if(g)return yt(ft(A(g),{state:typeof g=="object"?ft({},lt,g.state):lt,force:m,replace:p}),F||O);const v=O;v.redirectedFrom=F;let b;return!m&&U0(r,j,O)&&(b=qr(16,{to:v,from:j}),Ne(j,j,!0,!1)),(b?Promise.resolve(b):se(v,j)).catch(T=>Xe(T)?Xe(T,2)?T:pn(T):ct(T,v,j)).then(T=>{if(T){if(Xe(T,2))return yt(ft({replace:p},A(T.to),{state:typeof T.to=="object"?ft({},lt,T.to.state):lt,force:m}),F||v)}else T=zn(v,j,!0,p,lt);return mn(v,j,T),T})}function le(w,F){const O=k(w,F);return O?Promise.reject(O):Promise.resolve()}function jt(w){const F=wr.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function se(w,F){let O;const[j,lt,m]=ME(w,F);O=nc(j.reverse(),"beforeRouteLeave",w,F);for(const g of j)g.leaveGuards.forEach(v=>{O.push(vn(v,w,F))});const p=le.bind(null,w,F);return O.push(p),Wt(O).then(()=>{O=[];for(const g of s.list())O.push(vn(g,w,F));return O.push(p),Wt(O)}).then(()=>{O=nc(lt,"beforeRouteUpdate",w,F);for(const g of lt)g.updateGuards.forEach(v=>{O.push(vn(v,w,F))});return O.push(p),Wt(O)}).then(()=>{O=[];for(const g of m)if(g.beforeEnter)if(De(g.beforeEnter))for(const v of g.beforeEnter)O.push(vn(v,w,F));else O.push(vn(g.beforeEnter,w,F));return O.push(p),Wt(O)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),O=nc(m,"beforeRouteEnter",w,F),O.push(p),Wt(O))).then(()=>{O=[];for(const g of o.list())O.push(vn(g,w,F));return O.push(p),Wt(O)}).catch(g=>Xe(g,8)?g:Promise.reject(g))}function mn(w,F,O){a.list().forEach(j=>jt(()=>j(w,F,O)))}function zn(w,F,O,j,lt){const m=k(w,F);if(m)return m;const p=F===yn,g=Cr?history.state:{};O&&(j||p?i.replace(w.fullPath,ft({scroll:p&&g&&g.scroll},lt)):i.push(w.fullPath,lt)),c.value=w,Ne(w,F,O,p),pn()}let Ve;function fi(){Ve||(Ve=i.listen((w,F,O)=>{if(!Vs.listening)return;const j=y(w),lt=et(j);if(lt){yt(ft(lt,{replace:!0}),j).catch(Pi);return}l=j;const m=c.value;Cr&&W0(gh(m.fullPath,O.delta),fa()),se(j,m).catch(p=>Xe(p,12)?p:Xe(p,2)?(yt(p.to,j).then(g=>{Xe(g,20)&&!O.delta&&O.type===Qi.pop&&i.go(-1,!1)}).catch(Pi),Promise.reject()):(O.delta&&i.go(-O.delta,!1),ct(p,j,m))).then(p=>{p=p||zn(j,m,!1),p&&(O.delta&&!Xe(p,8)?i.go(-O.delta,!1):O.type===Qi.pop&&Xe(p,20)&&i.go(-1,!1)),mn(j,m,p)}).catch(Pi)}))}let vr=mi(),Mt=mi(),mt;function ct(w,F,O){pn(w);const j=Mt.list();return j.length?j.forEach(lt=>lt(w,F,O)):console.error(w),Promise.reject(w)}function Ye(){return mt&&c.value!==yn?Promise.resolve():new Promise((w,F)=>{vr.add([w,F])})}function pn(w){return mt||(mt=!w,fi(),vr.list().forEach(([F,O])=>w?O(w):F()),vr.reset()),w}function Ne(w,F,O,j){const{scrollBehavior:lt}=e;if(!Cr||!lt)return Promise.resolve();const m=!O&&G0(gh(w.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return Km().then(()=>lt(w,F,m)).then(p=>p&&Q0(p)).catch(p=>ct(p,w,F))}const ue=w=>i.go(w);let Er;const wr=new Set,Vs={currentRoute:c,listening:!0,addRoute:d,removeRoute:_,hasRoute:I,getRoutes:E,resolve:y,options:e,push:S,replace:Q,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Mt.add,isReady:Ye,install(w){const F=this;w.component("RouterLink",Pp),w.component("RouterView",Sp),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(c)}),Cr&&!Er&&c.value===yn&&(Er=!0,S(i.location).catch(lt=>{}));const O={};for(const lt in yn)Object.defineProperty(O,lt,{get:()=>c.value[lt],enumerable:!0});w.provide(fu,F),w.provide(hu,Lm(O)),w.provide(Kc,c);const j=w.unmount;wr.add(w),w.unmount=function(){wr.delete(w),wr.size<1&&(l=yn,Ve&&Ve(),Ve=null,c.value=yn,Er=!1,mt=!1),j()}}};function Wt(w){return w.reduce((F,O)=>F.then(()=>jt(O)),Promise.resolve())}return Vs}function ME(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(l=>Hr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Hr(l,c))||i.push(c))}return[n,r,i]}function FE(){return He(hu)}const Bn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},LE={class:"menu"},BE=["title"],UE={__name:"Menu",setup(e){const t=FE();console.log(t.path);const n=[{path:"/",name:"home",icon:"dumbbell"},{path:"/stats",name:"stats",icon:"chart-simple"},{path:"/user",name:"user",icon:"user"}];return(r,i)=>{const s=Rv("font-awesome-icon");return Dt(),Zt("nav",LE,[(Dt(),Zt(ae,null,Hi(n,o=>xt(xe(Pp),{to:o.path},{default:eu(()=>[Z("abbr",{class:"center",title:o.name},[xt(s,{icon:o.icon,class:ta(xe(t).path==o.path?"text-orange":"text-white"),alt:"elm.name"},null,8,["icon","class"])],8,BE)]),_:2},1032,["to"])),64))])}}},jE=Bn(UE,[["__scopeId","data-v-c7104adb"]]);const $E={class:"view"},zE={class:"footer"},HE={__name:"App",setup(e){return(t,n)=>(Dt(),Zt(ae,null,[Z("div",$E,[xt(xe(Sp),null,{default:eu(({Component:r,route:i})=>[(Dt(),ou(Pv(r)))]),_:1})]),Z("div",zE,[xt(jE)])],64))}},qE=Bn(HE,[["__scopeId","data-v-24ef64b6"]]),KE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA2eSURBVHhe7d3bjttGFgXQli+JE8Tzu/Yn2N8bZJyLnZ5SRCB2j9ySKF7q1F4LMEg9BAjI6jq7TpHSAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAOg7TEbr2+OHhcTqF7h3em1vpn0HKrhR2kgkK7MngYxMKPVxPMGALBhmrUPBhOQIBazCoWISCD9sRCFiCQcQsCj70QyBgDoOGqyn60D9hgGsZKFyk8EM9ggCXGCCcpejDOIQBzjEo+IbCD+MSBPiawcDRi1b4v0znQABhAAMgmNU+IAjkcuMDKfzAU4JAHjc8iMIPXCII5HgxHRnbcY9f8QcumuYKtSGApDc4hR+YSzdgbG7uoBR+YCmCwJi0ecbzWvEHljTNKa9OnxiFVDcQhR9Ym27AONzIASj8wNYEgfrcwOIUf2AvQkBtngGo66XiD+xpmoNenj5RjfRWkMIP9EY3oB43rBjFH+iVEFCLLYA6tPyBrtkSqEVaK0DhB6rRDeifG9Q5xR+oSgjom5vTMcUfqE4I6Jcb0ynFHxiFENAnDwH256D4AyOZ5jT1pjNuSF+OP+Tz93QOMIw2t31pBz8o1BEBoB8/tD+QP6dzgOG0Oe6vdnhz+sTeBIA+/Nz+MP6YzgGG1ea6T+3wy+kTexIA9ve2/UH8Np0DDK/Neb+2w9vTJ/biycx9HVf+ij8Q6fD+n06AOXAnAsB+jnv+2v5AtBYCjs8EmAt3IADs4/i9/p+nc4BoLQS8bgdz4sYEgO29aMX/+DoMAJMWAo4/IuQ16A0JABtrxd+X/ACc4RsDt+Vib0jxB3ieELAdF3ojij/AdYSAbbjIG1D8AW4jBKzPBV6Z4g8wjxCwLt8EuC7XF2C+45sBrES6WpHVP8B9dAHW48KuRPEHWIYQsA4XdQWKP8CyhIDl2aNenmsKsDzPAyxMolqY1T/AOnQBluViLkjxB1iXELAc7eqFKP4Am/hpOnInAQCAMtpi67/TKXfSSlmA1T/AtmwF3E8H4H6vpiMA2zH33kmCupPVP8A+dAHu4+LdQfEH2JcQMJ8tAAAIJDnNZPUP0AddgHl0AOZx3QD6IQDM4KLNYPUP0BddgNu5YDdS/AH6JATcRisbAAJJSzew+gfomy7A9XQAACCQpHQlq3+AGnQBrqMDAACBBIDrSJMAdahtV1DYrqD9D1CLbYDLpCQACCQhXWD1D1CTLsDzdAAAIJB09Ayrf4DadAG+TwcAAAIJAAAQSGvkO7T/AcZgG+A8HQAACCQAnGH1D8DoBAAAhmZRd54AAACBPBjxhKQIMCYPA35LBwAAAgkAABBIAACAQPZDvmL/H2BsngP4lw4AAAQSAAAgkAAAAIHshUzs/wNk8BzAiQ4AAAQSAAAgkAAAAIHsgzT2/wGyeA5ABwAAIgkAABBIAACAQAIAAAQSAAAgUPxTkN4AAMiU/iaADgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAJDo3eO3/4A4vgfA9wCQ4NYi/9EPhTI+3wMAjGvuCl9nAIYXHQCs/hnaEgVcCIBhRbc/BACGtFbRti3AgJK3AWwBwEjWXLHrBsBQBAAYxRYFWgiAYQgAABBIAIARbLky1wWAIQgAUN0eBVkIgPIEAAAIJABAZXuuxHUBoDQBAAACCQAAEEgAAIBAAgBU1cMevOcAoCwBAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAoMN0jPT44eFxOmU079xaFvQxeqoc2uF9bh0UABiDgs+WBIJhJAcAWwDUdiz8ij9bM+4YgABAXSZg9mYMUpgAQD1WX/TEeKQoAYBaTLT0ytikGAGAOkyw9M4YpRABAAACCQDUYGVFFcYqRQgA9M+ESjXGLAUIAAAQSACgb1ZSVGXs0jkBAAACCQAAEEgAAIBAAgD9sodKdcYwHRMAACCQAAAAgQQAAAgkANCvj4fpBIoyhumYAAAAgQQAAAgkAABAIAGAvtlDpSpjl84JAAAQSACgf1ZSVGPMUoAAQA0mVKowVilCAACAQAIAdVhZ0TtjlEIEAGoxwdIrY5NiBADqOU60Jlt6YTxSlABAXSZd9mYMUpgAQG1WX+zBuGMA0SP48cPD43TKaN65tSxIsR/W4X1uHRQAoKpeQo7iSGHJAcAWAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAVPXxMJ3sqIf/B2AWAQAAAgkAABBIAACAQAIAVLbnHrz9fyhNAACAQAIAVLfHStzqH8oTAGAEWxZkxR+GIAAAQCABAEaxxcrc6h+GIQDASNYs0Io/DCX6L/rxw8PjdArjebfQ8Fb4GdThfXYNjO4ApN98BrdE4Vb8YVi2AGBkxwI+p4jP/e+AMuL/wm0DEOnp9oBiT6D0LrAAIAAARPIMAAAQRwAAgEACAAAEEgAAIJAAAACBBAAACOTl38argABZfBOsDgAARBIAACCQAAAAgQQAAAgkAABAIG8BTLwJAJDBGwAnOgAAEEgAAIBAAgAABLIP8hXPAQCMzf7/v3QAACCQAAAAgQQAAAhkL+QJzwEAjMn+/7d0AAAgkAAAAIEEAAAIZD/kDM8BAIzF/v//0wEAgEACAABDs/o/TwA4w2ABYHQCAAAEstJ9hocBAWrT0f0+HQAACCQAAEAgrZELbAMA1KT9/zwdAAAIJB1dQRcAoBar/8t0AAAgkABwhZYkXSeAIszZ13GRrmMLAKAOc/YVBAAACOQhiRt4GBCgbx7+u54OAAAEkpRupAsA0Cer/9voAABAIGlpBl0AgL5Y/d9OB2AG75gC9MOcPI+LNo8OAEA/zMkzaJncwVYAwL60/ufTAQCAQJLTnXQBAPZh9X8fHYA7tQH4ejoFYCNt7n01nTKTAHC/z9MRgO18mY7MpH2yEFsBANvQ+l+GDgAAZbTi/9N0yp0EgIVIpACb+H06cidFa2G2AgDWYaG1LB2AhbUB+nI6BWAhbW711P/CBIDl/T0dAViOp/4Xpp2yElsBAMvQ+l+Hi7oiIQDgPor/emwBrMjzAADz2fdflwCwLs8DAMxn339FWisbsBUAcBut//W5wBsRAgCuo/hvw0XekBAA8DzFfzsu9MaEAIDzFP9teQhwY22AezMA4Ik2N6pHG3PBt/d3G+hebQGYtDnxdTvojm5MANjHlzbgf5zOAWK1ufBNO3w+fWJLAsB+/mwD/+fpHCBOmwN/aYc/Tp/YmgCwr0/tD+A/0zlAjDb3vW2H306f2IMnLvvw4+OHh9+nc4ChTd3PT6dP7EUA6McPLQRohQFDa8X/uOdvruuAANCXVy0E/DWdAwylFf/jG1C+378TAkB/Di0E+BEhYCit+B+/A8Xc1hEBoFO+MRAYRSv+ak2H3JSOCQFAdYp/v9yYzgkBQFWKf9/cnAKEAKAaxb9/blAdHg4EuudhvzoEgGJ0A4BeWfXX4mYVJAQAvVH863HD6rIlAOxOy78uAaA43QBgL1b9tbl5Y3jTgoAf1gA20Qr/8Wd8/ZJfcQLAQHQDgLVZ9Y/DjRzPyxYEPk/nAItohd8P+QxGABiUbgCwFKv+MbmpgxMEgLkU/rG5uRm8MghcrRX+F+1g8TA4ASCIbgBwiVV/Djc6kCAAPKXw53HDgwkCgMKfy43nH8IAZFH4MQD4hiAA41L0+ZrBwFmCAIxD4eccg4KLhAGoR9HnEgOEmwgD0C9Fn1sYLMwiCEA/FH7mMGhYhEAA21HwWYJBxCoEAliOgs8aDCo2IRDA9RR8tmCQsSvBgGQKPXsy+ChBUKAShR0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFgPD/8DZqUz3JyENfkAAAAASUVORK5CYII=";const du=e=>(Zl("data-v-b5294e11"),e=e(),tu(),e),QE={class:"center exeCard"},WE={class:"text-2xl font-bold"},GE={class:"props"},YE=du(()=>Z("h2",null,"Series:",-1)),XE=du(()=>Z("h2",null,"Reps:",-1)),JE=du(()=>Z("div",null,[Z("h2",null,"Type:"),Z("p",null,"Power")],-1)),ZE={__name:"ExeCard",props:{name:"Exercise",series:0,reps:"0"},setup(e){const t=e;return(n,r)=>(Dt(),Zt("div",QE,[Z("h3",WE,In(t.name),1),Z("div",GE,[Z("div",null,[YE,Z("p",null,In(t.series),1)]),Z("div",null,[XE,Z("p",null,In(t.reps),1)]),JE])]))}},tw=Bn(ZE,[["__scopeId","data-v-b5294e11"]]),ew="/Flex/assets/addExe-bbc541e7.png";const ha=e=>(Zl("data-v-977b51c1"),e=e(),tu(),e),nw={class:"modal"},rw=ha(()=>Z("header",{class:"center"},[Z("img",{src:ew,alt:"addWorkout"})],-1)),iw={class:"card"},sw=ha(()=>Z("h1",{class:"title"},"Create a new workout",-1)),ow=ha(()=>Z("h3",null,"Name:",-1)),aw={class:"frequency"},cw=ha(()=>Z("h1",null,"Frequency:",-1)),lw={class:"days"},uw={class:"day"},fw={__name:"ModalRoutine",props:{onCancel:"closeModal",onAccept:"accept"},setup(e){const t=e;let n=En("");const r=["M","T","W","TH","F","ST","SN"],i=()=>{t.onCancel(),n.value=""},s=()=>{t.onAccept(n.value)};return(o,a)=>(Dt(),Zt("div",nw,[rw,Z("div",iw,[sw,Z("section",null,[ow,Zm(Z("input",{class:"name",type:"text",placeholder:"Ex: Push B","onUpdate:modelValue":a[0]||(a[0]=c=>Kt(n)?n.value=c:n=c)},null,512),[[R0,xe(n)]])]),Z("section",aw,[cw,Z("div",lw,[(Dt(),Zt(ae,null,Hi(r,c=>Z("button",uw,In(c),1)),64))])]),Z("section",{class:"buttons center"},[Z("button",{onClick:s},"ACCEPT"),Z("button",{onClick:i},"CANCEL")])])]))}},hw=Bn(fw,[["__scopeId","data-v-977b51c1"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},dw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},kp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(h=64)),r.push(n[u],n[f],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):dw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new mw;const h=s<<2|a>>4;if(r.push(h),l!==64){const d=a<<4&240|l>>2;if(r.push(d),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class mw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pw=function(e){const t=xp(e);return kp.encodeByteArray(t,!0)},Co=function(e){return pw(e).replace(/\./g,"")},gw=function(e){try{return kp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=()=>yw().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},vw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gw(e[1]);return t&&JSON.parse(t)},Dp=()=>{try{return _w()||Aw()||vw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ew=e=>{var t,n;return(n=(t=Dp())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ww=e=>{const t=Ew(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Op=()=>{var e;return(e=Dp())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Co(JSON.stringify(n)),Co(JSON.stringify(o)),a].join(".")}function Tw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Vp(){try{return typeof indexedDB=="object"}catch{return!1}}function Np(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Cw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="FirebaseError";class Un extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Rw,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,da.prototype.create)}}class da{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Pw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Un(i,a,r)}}function Pw(e,t){return e.replace(Sw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Sw=/\{\$([^}]+)}/g;function Ro(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(xh(s)&&xh(o)){if(!Ro(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=1e3,kw=2,Dw=4*60*60*1e3,Ow=.5;function kh(e,t=xw,n=kw){const r=t*Math.pow(n,e),i=Math.round(Ow*r*(Math.random()-.5)*2);return Math.min(Dw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e){return e&&e._delegate?e._delegate:e}class rn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Iw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Mw(t))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kn){return this.instances.has(t)}getOptions(t=Kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kn){return this.component?this.component.multipleInstances?t:Kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nw(e){return e===Kn?void 0:e}function Mw(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ut||(ut={}));const Lw={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},Bw=ut.INFO,Uw={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},jw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Uw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mu{constructor(t){this.name=t,this._logLevel=Bw,this._logHandler=jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ut))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...t),this._logHandler(this,ut.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...t),this._logHandler(this,ut.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...t),this._logHandler(this,ut.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...t),this._logHandler(this,ut.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...t),this._logHandler(this,ut.ERROR,...t)}}const $w=(e,t)=>t.some(n=>e instanceof n);let Dh,Oh;function zw(){return Dh||(Dh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hw(){return Oh||(Oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,Qc=new WeakMap,Fp=new WeakMap,rc=new WeakMap,pu=new WeakMap;function qw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Cn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Mp.set(n,e)}).catch(()=>{}),pu.set(t,e),t}function Kw(e){if(Qc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Qc.set(e,t)}let Wc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qw(e){Wc=e(Wc)}function Ww(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ic(this),t,...n);return Fp.set(r,t.sort?t.sort():[t]),Cn(r)}:Hw().includes(e)?function(...t){return e.apply(ic(this),t),Cn(Mp.get(this))}:function(...t){return Cn(e.apply(ic(this),t))}}function Gw(e){return typeof e=="function"?Ww(e):(e instanceof IDBTransaction&&Kw(e),$w(e,zw())?new Proxy(e,Wc):e)}function Cn(e){if(e instanceof IDBRequest)return qw(e);if(rc.has(e))return rc.get(e);const t=Gw(e);return t!==e&&(rc.set(e,t),pu.set(t,e)),t}const ic=e=>pu.get(e);function Yw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Cn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Cn(o.result),c.oldVersion,c.newVersion,Cn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Xw=["get","getKey","getAll","getAllKeys","count"],Jw=["put","add","delete","clear"],sc=new Map;function Vh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(sc.get(t))return sc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Jw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xw.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return sc.set(t,s),s}Qw(e=>({...e,get:(t,n,r)=>Vh(t,n)||e.get(t,n,r),has:(t,n)=>!!Vh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tI(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gc="@firebase/app",Nh="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new mu("@firebase/app"),eI="@firebase/app-compat",nI="@firebase/analytics-compat",rI="@firebase/analytics",iI="@firebase/app-check-compat",sI="@firebase/app-check",oI="@firebase/auth",aI="@firebase/auth-compat",cI="@firebase/database",lI="@firebase/database-compat",uI="@firebase/functions",fI="@firebase/functions-compat",hI="@firebase/installations",dI="@firebase/installations-compat",mI="@firebase/messaging",pI="@firebase/messaging-compat",gI="@firebase/performance",yI="@firebase/performance-compat",_I="@firebase/remote-config",AI="@firebase/remote-config-compat",vI="@firebase/storage",EI="@firebase/storage-compat",wI="@firebase/firestore",II="@firebase/firestore-compat",bI="firebase",TI="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="[DEFAULT]",CI={[Gc]:"fire-core",[eI]:"fire-core-compat",[rI]:"fire-analytics",[nI]:"fire-analytics-compat",[sI]:"fire-app-check",[iI]:"fire-app-check-compat",[oI]:"fire-auth",[aI]:"fire-auth-compat",[cI]:"fire-rtdb",[lI]:"fire-rtdb-compat",[uI]:"fire-fn",[fI]:"fire-fn-compat",[hI]:"fire-iid",[dI]:"fire-iid-compat",[mI]:"fire-fcm",[pI]:"fire-fcm-compat",[gI]:"fire-perf",[yI]:"fire-perf-compat",[_I]:"fire-rc",[AI]:"fire-rc-compat",[vI]:"fire-gcs",[EI]:"fire-gcs-compat",[wI]:"fire-fst",[II]:"fire-fst-compat","fire-js":"fire-js",[bI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,Xc=new Map;function RI(e,t){try{e.container.addComponent(t)}catch(n){lr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Dn(e){const t=e.name;if(Xc.has(t))return lr.debug(`There were multiple attempts to register component ${t}.`),!1;Xc.set(t,e);for(const n of Po.values())RI(n,e);return!0}function ps(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rn=new da("app","Firebase",PI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=TI;function Lp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Yc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Rn.create("bad-app-name",{appName:String(i)});if(n||(n=Op()),!n)throw Rn.create("no-options");const s=Po.get(i);if(s){if(Ro(n,s.options)&&Ro(r,s.config))return s;throw Rn.create("duplicate-app",{appName:i})}const o=new Fw(i);for(const c of Xc.values())o.addComponent(c);const a=new SI(n,r,o);return Po.set(i,a),a}function Bp(e=Yc){const t=Po.get(e);if(!t&&e===Yc&&Op())return Lp();if(!t)throw Rn.create("no-app",{appName:e});return t}function qe(e,t,n){var r;let i=(r=CI[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),lr.warn(a.join(" "));return}Dn(new rn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="firebase-heartbeat-database",DI=1,Wi="firebase-heartbeat-store";let oc=null;function Up(){return oc||(oc=Yw(kI,DI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Wi)}}}).catch(e=>{throw Rn.create("idb-open",{originalErrorMessage:e.message})})),oc}async function OI(e){try{return await(await Up()).transaction(Wi).objectStore(Wi).get(jp(e))}catch(t){if(t instanceof Un)lr.warn(t.message);else{const n=Rn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});lr.warn(n.message)}}}async function Mh(e,t){try{const r=(await Up()).transaction(Wi,"readwrite");await r.objectStore(Wi).put(t,jp(e)),await r.done}catch(n){if(n instanceof Un)lr.warn(n.message);else{const r=Rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function jp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=1024,NI=30*24*60*60*1e3;class MI{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=NI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fh(),{heartbeatsToSend:n,unsentEntries:r}=FI(this._heartbeatsCache.heartbeats),i=Co(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fh(){return new Date().toISOString().substring(0,10)}function FI(e,t=VI){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lh(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vp()?Np().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Lh(e){return Co(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(e){Dn(new rn("platform-logger",t=>new Zw(t),"PRIVATE")),Dn(new rn("heartbeat",t=>new MI(t),"PRIVATE")),qe(Gc,Nh,e),qe(Gc,Nh,"esm2017"),qe("fire-js","")}BI("");var UI="firebase",jI="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(UI,jI,"app");const $I=(e,t)=>t.some(n=>e instanceof n);let Bh,Uh;function zI(){return Bh||(Bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return Uh||(Uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $p=new WeakMap,Jc=new WeakMap,zp=new WeakMap,ac=new WeakMap,gu=new WeakMap;function qI(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Pn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$p.set(n,e)}).catch(()=>{}),gu.set(t,e),t}function KI(e){if(Jc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Jc.set(e,t)}let Zc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Jc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||zp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function QI(e){Zc=e(Zc)}function WI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(cc(this),t,...n);return zp.set(r,t.sort?t.sort():[t]),Pn(r)}:HI().includes(e)?function(...t){return e.apply(cc(this),t),Pn($p.get(this))}:function(...t){return Pn(e.apply(cc(this),t))}}function GI(e){return typeof e=="function"?WI(e):(e instanceof IDBTransaction&&KI(e),$I(e,zI())?new Proxy(e,Zc):e)}function Pn(e){if(e instanceof IDBRequest)return qI(e);if(ac.has(e))return ac.get(e);const t=GI(e);return t!==e&&(ac.set(e,t),gu.set(t,e)),t}const cc=e=>gu.get(e);function YI(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Pn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pn(o.result),c.oldVersion,c.newVersion,Pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const XI=["get","getKey","getAll","getAllKeys","count"],JI=["put","add","delete","clear"],lc=new Map;function jh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(lc.get(t))return lc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=JI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XI.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return lc.set(t,s),s}QI(e=>({...e,get:(t,n,r)=>jh(t,n)||e.get(t,n,r),has:(t,n)=>!!jh(t,n)||e.has(t,n)}));const Hp="@firebase/installations",yu="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=1e4,Kp=`w:${yu}`,Qp="FIS_v2",ZI="https://firebaseinstallations.googleapis.com/v1",tb=60*60*1e3,eb="installations",nb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ur=new da(eb,nb,rb);function Wp(e){return e instanceof Un&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp({projectId:e}){return`${ZI}/projects/${e}/installations`}function Yp(e){return{token:e.token,requestStatus:2,expiresIn:sb(e.expiresIn),creationTime:Date.now()}}async function Xp(e,t){const r=(await t.json()).error;return ur.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Jp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ib(e,{refreshToken:t}){const n=Jp(e);return n.append("Authorization",ob(t)),n}async function Zp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function sb(e){return Number(e.replace("s","000"))}function ob(e){return`${Qp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Gp(e),i=Jp(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Qp,appId:e.appId,sdkVersion:Kp},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Zp(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Yp(l.authToken)}}else throw await Xp("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=/^[cdef][\w-]{21}$/,tl="";function ub(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=fb(e);return lb.test(n)?n:tl}catch{return tl}}function fb(e){return cb(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Map;function ng(e,t){const n=ma(e);rg(n,t),hb(n,t)}function rg(e,t){const n=eg.get(e);if(n)for(const r of n)r(t)}function hb(e,t){const n=db();n&&n.postMessage({key:e,fid:t}),mb()}let Xn=null;function db(){return!Xn&&"BroadcastChannel"in self&&(Xn=new BroadcastChannel("[Firebase] FID Change"),Xn.onmessage=e=>{rg(e.data.key,e.data.fid)}),Xn}function mb(){eg.size===0&&Xn&&(Xn.close(),Xn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="firebase-installations-database",gb=1,fr="firebase-installations-store";let uc=null;function _u(){return uc||(uc=YI(pb,gb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fr)}}})),uc}async function So(e,t){const n=ma(e),i=(await _u()).transaction(fr,"readwrite"),s=i.objectStore(fr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&ng(e,t.fid),t}async function ig(e){const t=ma(e),r=(await _u()).transaction(fr,"readwrite");await r.objectStore(fr).delete(t),await r.done}async function pa(e,t){const n=ma(e),i=(await _u()).transaction(fr,"readwrite"),s=i.objectStore(fr),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ng(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(e){let t;const n=await pa(e.appConfig,r=>{const i=yb(r),s=_b(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===tl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yb(e){const t=e||{fid:ub(),registrationStatus:0};return sg(t)}function _b(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ur.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ab(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:vb(e)}:{installationEntry:t}}async function Ab(e,t){try{const n=await ab(e,t);return So(e.appConfig,n)}catch(n){throw Wp(n)&&n.customData.serverCode===409?await ig(e.appConfig):await So(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function vb(e){let t=await $h(e.appConfig);for(;t.registrationStatus===1;)await tg(100),t=await $h(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Au(e);return r||n}return t}function $h(e){return pa(e,t=>{if(!t)throw ur.create("installation-not-found");return sg(t)})}function sg(e){return Eb(e)?{fid:e.fid,registrationStatus:0}:e}function Eb(e){return e.registrationStatus===1&&e.registrationTime+qp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb({appConfig:e,heartbeatServiceProvider:t},n){const r=Ib(e,n),i=ib(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Kp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Zp(()=>fetch(r,a));if(c.ok){const l=await c.json();return Yp(l)}else throw await Xp("Generate Auth Token",c)}function Ib(e,{fid:t}){return`${Gp(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(e,t=!1){let n;const r=await pa(e.appConfig,s=>{if(!og(s))throw ur.create("not-registered");const o=s.authToken;if(!t&&Cb(o))return s;if(o.requestStatus===1)return n=bb(e,t),s;{if(!navigator.onLine)throw ur.create("app-offline");const a=Pb(s);return n=Tb(e,a),a}});return n?await n:r.authToken}async function bb(e,t){let n=await zh(e.appConfig);for(;n.authToken.requestStatus===1;)await tg(100),n=await zh(e.appConfig);const r=n.authToken;return r.requestStatus===0?vu(e,t):r}function zh(e){return pa(e,t=>{if(!og(t))throw ur.create("not-registered");const n=t.authToken;return Sb(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tb(e,t){try{const n=await wb(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await So(e.appConfig,r),n}catch(n){if(Wp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ig(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await So(e.appConfig,r)}throw n}}function og(e){return e!==void 0&&e.registrationStatus===2}function Cb(e){return e.requestStatus===2&&!Rb(e)}function Rb(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tb}function Pb(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Sb(e){return e.requestStatus===1&&e.requestTime+qp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(e){const t=e,{installationEntry:n,registrationPromise:r}=await Au(t);return r?r.catch(console.error):vu(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(e,t=!1){const n=e;return await Db(n),(await vu(n,t)).token}async function Db(e){const{registrationPromise:t}=await Au(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(e){if(!e||!e.options)throw fc("App Configuration");if(!e.name)throw fc("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw fc(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function fc(e){return ur.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="installations",Vb="installations-internal",Nb=e=>{const t=e.getProvider("app").getImmediate(),n=Ob(t),r=ps(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Mb=e=>{const t=e.getProvider("app").getImmediate(),n=ps(t,ag).getImmediate();return{getId:()=>xb(n),getToken:i=>kb(n,i)}};function Fb(){Dn(new rn(ag,Nb,"PUBLIC")),Dn(new rn(Vb,Mb,"PRIVATE"))}Fb();qe(Hp,yu);qe(Hp,yu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="analytics",Lb="firebase_id",Bb="origin",Ub=60*1e3,jb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Eu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new mu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ye=new da("analytics","Analytics",$b);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(e){if(!e.startsWith(Eu)){const t=ye.create("invalid-gtag-resource",{gtagURL:e});return de.warn(t.message),""}return e}function cg(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Hb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function qb(e,t){const n=Hb("firebase-js-sdk-policy",{createScriptURL:zb}),r=document.createElement("script"),i=`${Eu}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Kb(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Qb(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const c=(await cg(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){de.error(a)}e("config",i,s)}async function Wb(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await cg(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){de.error(s)}}function Gb(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await Wb(e,t,n,a,c)}else if(s==="config"){const[a,c]=o;await Qb(e,t,n,r,a,c)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){de.error(a)}}return i}function Yb(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Gb(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Xb(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Eu)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=30,Zb=1e3;class tT{constructor(t={},n=Zb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const lg=new tT;function eT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function nT(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:eT(r)},s=jb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ye.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function rT(e,t=lg,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ye.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ye.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new oT;return setTimeout(async()=>{a.abort()},n!==void 0?n:Ub),ug({appId:r,apiKey:i,measurementId:s},o,a,t)}async function ug(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=lg){var s;const{appId:o,measurementId:a}=e;try{await iT(r,t)}catch(c){if(a)return de.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await nT(e);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!sT(l)){if(i.deleteThrottleMetadata(o),a)return de.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?kh(n,i.intervalMillis,Jb):kh(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,f),de.debug(`Calling attemptFetch again in ${u} millis`),ug(e,f,r,i)}}function iT(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(ye.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function sT(e){if(!(e instanceof Un)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class oT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function aT(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(){if(Vp())try{await Np()}catch(e){return de.warn(ye.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return de.warn(ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lT(e,t,n,r,i,s,o){var a;const c=rT(e);c.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&de.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>de.error(d)),t.push(c);const l=cT().then(d=>{if(d)return r.getId()}),[u,f]=await Promise.all([c,l]);Xb(s)||qb(s,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Bb]="firebase",h.update=!0,f!=null&&(h[Lb]=f),i("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(t){this.app=t}_delete(){return delete xi[this.app.options.appId],Promise.resolve()}}let xi={},Hh=[];const qh={};let hc="dataLayer",fT="gtag",Kh,fg,Qh=!1;function hT(){const e=[];if(Tw()&&e.push("This is a browser extension environment."),Cw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ye.create("invalid-analytics-context",{errorInfo:t});de.warn(n.message)}}function dT(e,t,n){hT();const r=e.options.appId;if(!r)throw ye.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)de.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ye.create("no-api-key");if(xi[r]!=null)throw ye.create("already-exists",{id:r});if(!Qh){Kb(hc);const{wrappedGtag:s,gtagCore:o}=Yb(xi,Hh,qh,hc,fT);fg=s,Kh=o,Qh=!0}return xi[r]=lT(e,Hh,qh,t,Kh,hc,n),new uT(e)}function mT(e=Bp()){e=kn(e);const t=ps(e,xo);return t.isInitialized()?t.getImmediate():pT(e)}function pT(e,t={}){const n=ps(e,xo);if(n.isInitialized()){const i=n.getImmediate();if(Ro(t,n.getOptions()))return i;throw ye.create("already-initialized")}return n.initialize({options:t})}function gT(e,t,n,r){e=kn(e),aT(fg,xi[e.app.options.appId],t,n,r).catch(i=>de.error(i))}const Wh="@firebase/analytics",Gh="0.10.0";function yT(){Dn(new rn(xo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return dT(r,i,n)},"PUBLIC")),Dn(new rn("analytics-internal",e,"PRIVATE")),qe(Wh,Gh),qe(Wh,Gh,"esm2017");function e(t){try{const n=t.getProvider(xo).getImmediate();return{logEvent:(r,i,s)=>gT(n,r,i,s)}}catch(n){throw ye.create("interop-component-reg-failed",{reason:n})}}}yT();var _T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,wu=wu||{},G=_T||self;function ga(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function gs(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function AT(e){return Object.prototype.hasOwnProperty.call(e,dc)&&e[dc]||(e[dc]=++vT)}var dc="closure_uid_"+(1e9*Math.random()>>>0),vT=0;function ET(e,t,n){return e.call.apply(e.bind,arguments)}function wT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ee(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ee=ET:ee=wT,ee.apply(null,arguments)}function js(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Ut(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function jn(){this.s=this.s,this.o=this.o}var IT=0;jn.prototype.s=!1;jn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),IT!=0)&&AT(this)};jn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hg=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Iu(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Yh(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ga(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ne(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var bT=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{G.addEventListener("test",()=>{},t),G.removeEventListener("test",()=>{},t)}catch{}return e}();function Gi(e){return/^[\s\xa0]*$/.test(e)}function ya(){var e=G.navigator;return e&&(e=e.userAgent)?e:""}function Ue(e){return ya().indexOf(e)!=-1}function bu(e){return bu[" "](e),e}bu[" "]=function(){};function TT(e,t){var n=y1;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var CT=Ue("Opera"),Kr=Ue("Trident")||Ue("MSIE"),dg=Ue("Edge"),el=dg||Kr,mg=Ue("Gecko")&&!(ya().toLowerCase().indexOf("webkit")!=-1&&!Ue("Edge"))&&!(Ue("Trident")||Ue("MSIE"))&&!Ue("Edge"),RT=ya().toLowerCase().indexOf("webkit")!=-1&&!Ue("Edge");function pg(){var e=G.document;return e?e.documentMode:void 0}var nl;t:{var mc="",pc=function(){var e=ya();if(mg)return/rv:([^\);]+)(\)|;)/.exec(e);if(dg)return/Edge\/([\d\.]+)/.exec(e);if(Kr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(RT)return/WebKit\/(\S+)/.exec(e);if(CT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(pc&&(mc=pc?pc[1]:""),Kr){var gc=pg();if(gc!=null&&gc>parseFloat(mc)){nl=String(gc);break t}}nl=mc}var rl;if(G.document&&Kr){var Xh=pg();rl=Xh||parseInt(nl,10)||void 0}else rl=void 0;var PT=rl;function Yi(e,t){if(ne.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(mg){t:{try{bu(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ST[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Yi.$.h.call(this)}}Ut(Yi,ne);var ST={2:"touch",3:"pen",4:"mouse"};Yi.prototype.h=function(){Yi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ys="closure_listenable_"+(1e6*Math.random()|0),xT=0;function kT(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++xT,this.fa=this.ia=!1}function _a(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Tu(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function DT(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function gg(e){const t={};for(const n in e)t[n]=e[n];return t}const Jh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yg(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Jh.length;s++)n=Jh[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Aa(e){this.src=e,this.g={},this.h=0}Aa.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=sl(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new kT(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function il(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=hg(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_a(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function sl(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Cu="closure_lm_"+(1e6*Math.random()|0),yc={};function _g(e,t,n,r,i){if(r&&r.once)return vg(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)_g(e,t[s],n,r,i);return null}return n=Su(n),e&&e[ys]?e.O(t,n,gs(r)?!!r.capture:!!r,i):Ag(e,t,n,!1,r,i)}function Ag(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=gs(i)?!!i.capture:!!i,a=Pu(e);if(a||(e[Cu]=a=new Aa(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=OT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)bT||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(wg(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function OT(){function e(n){return t.call(e.src,e.listener,n)}const t=VT;return e}function vg(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)vg(e,t[s],n,r,i);return null}return n=Su(n),e&&e[ys]?e.P(t,n,gs(r)?!!r.capture:!!r,i):Ag(e,t,n,!0,r,i)}function Eg(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Eg(e,t[s],n,r,i);else r=gs(r)?!!r.capture:!!r,n=Su(n),e&&e[ys]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=sl(s,n,r,i),-1<n&&(_a(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Pu(e))&&(t=e.g[t.toString()],e=-1,t&&(e=sl(t,n,r,i)),(n=-1<e?t[e]:null)&&Ru(n))}function Ru(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ys])il(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(wg(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Pu(t))?(il(n,e),n.h==0&&(n.src=null,t[Cu]=null)):_a(e)}}}function wg(e){return e in yc?yc[e]:yc[e]="on"+e}function VT(e,t){if(e.fa)e=!0;else{t=new Yi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ru(e),e=n.call(r,t)}return e}function Pu(e){return e=e[Cu],e instanceof Aa?e:null}var _c="__closure_events_fn_"+(1e9*Math.random()>>>0);function Su(e){return typeof e=="function"?e:(e[_c]||(e[_c]=function(t){return e.handleEvent(t)}),e[_c])}function Bt(){jn.call(this),this.i=new Aa(this),this.S=this,this.J=null}Ut(Bt,jn);Bt.prototype[ys]=!0;Bt.prototype.removeEventListener=function(e,t,n,r){Eg(this,e,t,n,r)};function Qt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ne(t,e);else if(t instanceof ne)t.target=t.target||e;else{var i=t;t=new ne(r,e),yg(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=$s(o,r,!0,t)&&i}if(o=t.g=e,i=$s(o,r,!0,t)&&i,i=$s(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=$s(o,r,!1,t)&&i}Bt.prototype.N=function(){if(Bt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)_a(n[r]);delete e.g[t],e.h--}}this.J=null};Bt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Bt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function $s(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&il(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var xu=G.JSON.stringify;class NT{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function MT(){var e=ku;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class FT{constructor(){this.h=this.g=null}add(t,n){const r=Ig.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ig=new NT(()=>new LT,e=>e.reset());class LT{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BT(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function UT(e){G.setTimeout(()=>{throw e},0)}let Xi,Ji=!1,ku=new FT,bg=()=>{const e=G.Promise.resolve(void 0);Xi=()=>{e.then(jT)}};var jT=()=>{for(var e;e=MT();){try{e.h.call(e.g)}catch(n){UT(n)}var t=Ig;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ji=!1};function va(e,t){Bt.call(this),this.h=e||1,this.g=t||G,this.j=ee(this.qb,this),this.l=Date.now()}Ut(va,Bt);V=va.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qt(this,"tick"),this.ga&&(Du(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Du(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}V.N=function(){va.$.N.call(this),Du(this),delete this.g};function Ou(e,t,n){if(typeof e=="function")n&&(e=ee(e,n));else if(e&&typeof e.handleEvent=="function")e=ee(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:G.setTimeout(e,t||0)}function Tg(e){e.g=Ou(()=>{e.g=null,e.i&&(e.i=!1,Tg(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class $T extends jn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Tg(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(e){jn.call(this),this.h=e,this.g={}}Ut(Zi,jn);var Zh=[];function Cg(e,t,n,r){Array.isArray(n)||(n&&(Zh[0]=n.toString()),n=Zh);for(var i=0;i<n.length;i++){var s=_g(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Rg(e){Tu(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ru(t)},e),e.g={}}Zi.prototype.N=function(){Zi.$.N.call(this),Rg(this)};Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ea(){this.g=!0}Ea.prototype.Ea=function(){this.g=!1};function zT(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function HT(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Sr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+KT(e,n)+(r?" "+r:"")})}function qT(e,t){e.info(function(){return"TIMEOUT: "+t})}Ea.prototype.info=function(){};function KT(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xu(n)}catch{return t}}var yr={},td=null;function wa(){return td=td||new Bt}yr.Ta="serverreachability";function Pg(e){ne.call(this,yr.Ta,e)}Ut(Pg,ne);function ts(e){const t=wa();Qt(t,new Pg(t))}yr.STAT_EVENT="statevent";function Sg(e,t){ne.call(this,yr.STAT_EVENT,e),this.stat=t}Ut(Sg,ne);function ce(e){const t=wa();Qt(t,new Sg(t,e))}yr.Ua="timingevent";function xg(e,t){ne.call(this,yr.Ua,e),this.size=t}Ut(xg,ne);function _s(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){e()},t)}var Ia={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Vu(){}Vu.prototype.h=null;function ed(e){return e.h||(e.h=e.i())}function Dg(){}var As={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nu(){ne.call(this,"d")}Ut(Nu,ne);function Mu(){ne.call(this,"c")}Ut(Mu,ne);var ol;function ba(){}Ut(ba,Vu);ba.prototype.g=function(){return new XMLHttpRequest};ba.prototype.i=function(){return{}};ol=new ba;function vs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Zi(this),this.P=QT,e=el?125:void 0,this.V=new va(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Og}function Og(){this.i=null,this.g="",this.h=!1}var QT=45e3,al={},ko={};V=vs.prototype;V.setTimeout=function(e){this.P=e};function cl(e,t,n){e.L=1,e.v=Ca(sn(t)),e.s=n,e.S=!0,Vg(e,null)}function Vg(e,t){e.G=Date.now(),Es(e),e.A=sn(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),$g(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Og,e.g=ly(e.l,n?t:null,!e.s),0<e.O&&(e.M=new $T(ee(e.Pa,e,e.g),e.O)),Cg(e.U,e.g,"readystatechange",e.nb),t=e.I?gg(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ts(),zT(e.j,e.u,e.A,e.m,e.W,e.s)}V.nb=function(e){e=e.target;const t=this.M;t&&je(e)==3?t.l():this.Pa(e)};V.Pa=function(e){try{if(e==this.g)t:{const u=je(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||el||this.g&&(this.h.h||this.g.ja()||sd(this.g)))){this.J||u!=4||t==7||(t==8||0>=f?ts(3):ts(2)),Ta(this);var n=this.g.da();this.ca=n;e:if(Ng(this)){var r=sd(this.g);e="";var i=r.length,s=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),ki(this);var o="";break e}this.h.i=new G.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,HT(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gi(a)){var l=a;break e}}l=null}if(n=l)Sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ll(this,n);else{this.i=!1,this.o=3,ce(12),Jn(this),ki(this);break t}}this.S?(Mg(this,u,o),el&&this.i&&u==3&&(Cg(this.U,this.V,"tick",this.mb),this.V.start())):(Sr(this.j,this.m,o,null),ll(this,o)),u==4&&Jn(this),this.i&&!this.J&&(u==4?sy(this.l,this):(this.i=!1,Es(this)))}else m1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Jn(this),ki(this)}}}catch{}finally{}};function Ng(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Mg(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=WT(e,n),i==ko){t==4&&(e.o=4,ce(14),r=!1),Sr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==al){e.o=4,ce(15),Sr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Sr(e.j,e.m,i,null),ll(e,i);Ng(e)&&i!=ko&&i!=al&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ce(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$u(t),t.M=!0,ce(11))):(Sr(e.j,e.m,n,"[Invalid Chunked Response]"),Jn(e),ki(e))}V.mb=function(){if(this.g){var e=je(this.g),t=this.g.ja();this.C<t.length&&(Ta(this),Mg(this,e,t),this.i&&e!=4&&Es(this))}};function WT(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?ko:(n=Number(t.substring(n,r)),isNaN(n)?al:(r+=1,r+n>t.length?ko:(t=t.slice(r,r+n),e.C=r+n,t)))}V.cancel=function(){this.J=!0,Jn(this)};function Es(e){e.Y=Date.now()+e.P,Fg(e,e.P)}function Fg(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=_s(ee(e.lb,e),t)}function Ta(e){e.B&&(G.clearTimeout(e.B),e.B=null)}V.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(qT(this.j,this.A),this.L!=2&&(ts(),ce(17)),Jn(this),this.o=2,ki(this)):Fg(this,this.Y-e)};function ki(e){e.l.H==0||e.J||sy(e.l,e)}function Jn(e){Ta(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Du(e.V),Rg(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ll(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ul(n.i,e))){if(!e.K&&ul(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Vo(n),Sa(n);else break t;ju(n),ce(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=_s(ee(n.ib,n),6e3));if(1>=qg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zn(n,11)}else if((e.K||n.g==e)&&Vo(n),!Gi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=l[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const _=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Fu(s,s.h),s.h=null))}if(r.F){const E=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,vt(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=cy(r,r.J?r.pa:null,r.Y),o.K){Kg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ta(a),Es(a)),r.g=o}else ry(r);0<n.j.length&&xa(n)}else l[0]!="stop"&&l[0]!="close"||Zn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Zn(n,7):Uu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ts(4)}catch{}}function GT(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ga(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function YT(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ga(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Lg(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ga(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=YT(e),r=GT(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Bg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XT(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function or(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof or){this.h=e.h,Do(this,e.j),this.s=e.s,this.g=e.g,Oo(this,e.m),this.l=e.l;var t=e.i,n=new es;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),nd(this,n),this.o=e.o}else e&&(t=String(e).match(Bg))?(this.h=!1,Do(this,t[1]||"",!0),this.s=Ai(t[2]||""),this.g=Ai(t[3]||"",!0),Oo(this,t[4]),this.l=Ai(t[5]||"",!0),nd(this,t[6]||"",!0),this.o=Ai(t[7]||"")):(this.h=!1,this.i=new es(null,this.h))}or.prototype.toString=function(){var e=[],t=this.j;t&&e.push(vi(t,rd,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(vi(t,rd,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(vi(n,n.charAt(0)=="/"?t1:ZT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",vi(n,n1)),e.join("")};function sn(e){return new or(e)}function Do(e,t,n){e.j=n?Ai(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Oo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function nd(e,t,n){t instanceof es?(e.i=t,r1(e.i,e.h)):(n||(t=vi(t,e1)),e.i=new es(t,e.h))}function vt(e,t,n){e.i.set(t,n)}function Ca(e){return vt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ai(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function vi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,JT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function JT(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var rd=/[#\/\?@]/g,ZT=/[#\?:]/g,t1=/[#\?]/g,e1=/[#\?@]/g,n1=/#/g;function es(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function $n(e){e.g||(e.g=new Map,e.h=0,e.i&&XT(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}V=es.prototype;V.add=function(e,t){$n(this),this.i=null,e=ii(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ug(e,t){$n(e),t=ii(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function jg(e,t){return $n(e),t=ii(e,t),e.g.has(t)}V.forEach=function(e,t){$n(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};V.ta=function(){$n(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};V.Z=function(e){$n(this);let t=[];if(typeof e=="string")jg(this,e)&&(t=t.concat(this.g.get(ii(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};V.set=function(e,t){return $n(this),this.i=null,e=ii(this,e),jg(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};V.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function $g(e,t,n){Ug(e,t),0<n.length&&(e.i=null,e.g.set(ii(e,t),Iu(n)),e.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ii(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function r1(e,t){t&&!e.j&&($n(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ug(this,r),$g(this,i,n))},e)),e.j=t}var i1=class{constructor(e,t){this.g=e,this.map=t}};function zg(e){this.l=e||s1,G.PerformanceNavigationTiming?(e=G.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var s1=10;function Hg(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function qg(e){return e.h?1:e.g?e.g.size:0}function ul(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Fu(e,t){e.g?e.g.add(t):e.h=t}function Kg(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}zg.prototype.cancel=function(){if(this.i=Qg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Qg(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Iu(e.i)}var o1=class{stringify(e){return G.JSON.stringify(e,void 0)}parse(e){return G.JSON.parse(e,void 0)}};function a1(){this.g=new o1}function c1(e,t,n){const r=n||"";try{Lg(e,function(i,s){let o=i;gs(i)&&(o=xu(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function l1(e,t){const n=new Ea;if(G.Image){const r=new Image;r.onload=js(zs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=js(zs,n,r,"TestLoadImage: error",!1,t),r.onabort=js(zs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=js(zs,n,r,"TestLoadImage: timeout",!1,t),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function zs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ws(e){this.l=e.fc||null,this.j=e.ob||!1}Ut(ws,Vu);ws.prototype.g=function(){return new Ra(this.l,this.j)};ws.prototype.i=function(e){return function(){return e}}({});function Ra(e,t){Bt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Lu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ut(Ra,Bt);var Lu=0;V=Ra.prototype;V.open=function(e,t){if(this.readyState!=Lu)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ns(this)};V.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||G).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=Lu};V.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wg(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Wg(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}V.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Is(this):ns(this),this.readyState==3&&Wg(this)}};V.Za=function(e){this.g&&(this.response=this.responseText=e,Is(this))};V.Ya=function(e){this.g&&(this.response=e,Is(this))};V.ka=function(){this.g&&Is(this)};function Is(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ns(e)}V.setRequestHeader=function(e,t){this.v.append(e,t)};V.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ns(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var u1=G.JSON.parse;function Ct(e){Bt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gg,this.L=this.M=!1}Ut(Ct,Bt);var Gg="",f1=/^https?$/i,h1=["POST","PUT"];V=Ct.prototype;V.Oa=function(e){this.M=e};V.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ol.g(),this.C=this.u?ed(this.u):ed(ol),this.g.onreadystatechange=ee(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){id(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&e instanceof G.FormData,!(0<=hg(h1,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Jg(this),0<this.B&&((this.L=d1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ee(this.ua,this)):this.A=Ou(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){id(this,s)}};function d1(e){return Kr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}V.ua=function(){typeof wu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qt(this,"timeout"),this.abort(8))};function id(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Yg(e),Pa(e)}function Yg(e){e.F||(e.F=!0,Qt(e,"complete"),Qt(e,"error"))}V.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Qt(this,"complete"),Qt(this,"abort"),Pa(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pa(this,!0)),Ct.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Xg(this):this.kb())};V.kb=function(){Xg(this)};function Xg(e){if(e.h&&typeof wu<"u"&&(!e.C[1]||je(e)!=4||e.da()!=2)){if(e.v&&je(e)==4)Ou(e.La,0,e);else if(Qt(e,"readystatechange"),je(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Bg)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),r=!f1.test(i?i.toLowerCase():"")}n=r}if(n)Qt(e,"complete"),Qt(e,"success");else{e.m=6;try{var s=2<je(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Yg(e)}}finally{Pa(e)}}}}function Pa(e,t){if(e.g){Jg(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Qt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Jg(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(G.clearTimeout(e.A),e.A=null)}V.isActive=function(){return!!this.g};function je(e){return e.g?e.g.readyState:0}V.da=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),u1(t)}};function sd(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Gg:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function m1(e){const t={};e=(e.g&&2<=je(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Gi(e[r]))continue;var n=BT(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}DT(t,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zg(e){let t="";return Tu(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Bu(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Zg(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):vt(e,t,n))}function pi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ty(e){this.Ga=0,this.j=[],this.l=new Ea,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pi("baseRetryDelayMs",5e3,e),this.hb=pi("retryDelaySeedMs",1e4,e),this.eb=pi("forwardChannelMaxRetries",2,e),this.xa=pi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new zg(e&&e.concurrentRequestLimit),this.Ja=new a1,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=ty.prototype;V.ra=8;V.H=1;function Uu(e){if(ey(e),e.H==3){var t=e.W++,n=sn(e.I);if(vt(n,"SID",e.K),vt(n,"RID",t),vt(n,"TYPE","terminate"),bs(e,n),t=new vs(e,e.l,t),t.L=2,t.v=Ca(sn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=t.v,n=!0),n||(t.g=ly(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Es(t)}ay(e)}function Sa(e){e.g&&($u(e),e.g.cancel(),e.g=null)}function ey(e){Sa(e),e.u&&(G.clearTimeout(e.u),e.u=null),Vo(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&G.clearTimeout(e.m),e.m=null)}function xa(e){if(!Hg(e.i)&&!e.m){e.m=!0;var t=e.Na;Xi||bg(),Ji||(Xi(),Ji=!0),ku.add(t,e),e.C=0}}function p1(e,t){return qg(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=_s(ee(e.Na,e,t),oy(e,e.C)),e.C++,!0)}V.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new vs(this,this.l,e);let s=this.s;if(this.U&&(s?(s=gg(s),yg(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ny(this,i,t),n=sn(this.I),vt(n,"RID",e),vt(n,"CVER",22),this.F&&vt(n,"X-HTTP-Session-Id",this.F),bs(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Zg(s)))+"&"+t:this.o&&Bu(n,this.o,s)),Fu(this.i,i),this.bb&&vt(n,"TYPE","init"),this.P?(vt(n,"$req",t),vt(n,"SID","null"),i.aa=!0,cl(i,n,null)):cl(i,n,t),this.H=2}}else this.H==3&&(e?od(this,e):this.j.length==0||Hg(this.i)||od(this))};function od(e,t){var n;t?n=t.m:n=e.W++;const r=sn(e.I);vt(r,"SID",e.K),vt(r,"RID",n),vt(r,"AID",e.V),bs(e,r),e.o&&e.s&&Bu(r,e.o,e.s),n=new vs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ny(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Fu(e.i,n),cl(n,r,t)}function bs(e,t){e.na&&Tu(e.na,function(n,r){vt(t,r,n)}),e.h&&Lg({},function(n,r){vt(t,r,n)})}function ny(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ee(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{c1(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function ry(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Xi||bg(),Ji||(Xi(),Ji=!0),ku.add(t,e),e.A=0}}function ju(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=_s(ee(e.Ma,e),oy(e,e.A)),e.A++,!0)}V.Ma=function(){if(this.u=null,iy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=_s(ee(this.jb,this),e)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ce(10),Sa(this),iy(this))};function $u(e){e.B!=null&&(G.clearTimeout(e.B),e.B=null)}function iy(e){e.g=new vs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=sn(e.wa);vt(t,"RID","rpc"),vt(t,"SID",e.K),vt(t,"AID",e.V),vt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&vt(t,"TO",e.qa),vt(t,"TYPE","xmlhttp"),bs(e,t),e.o&&e.s&&Bu(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ca(sn(t)),n.s=null,n.S=!0,Vg(n,e)}V.ib=function(){this.v!=null&&(this.v=null,Sa(this),ju(this),ce(19))};function Vo(e){e.v!=null&&(G.clearTimeout(e.v),e.v=null)}function sy(e,t){var n=null;if(e.g==t){Vo(e),$u(e),e.g=null;var r=2}else if(ul(e.i,t))n=t.F,Kg(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=wa(),Qt(r,new xg(r,n)),xa(e)}else ry(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&p1(e,t)||r==2&&ju(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Zn(e,5);break;case 4:Zn(e,10);break;case 3:Zn(e,6);break;default:Zn(e,2)}}}function oy(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Zn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ee(e.pb,e);n||(n=new or("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Do(n,"https"),Ca(n)),l1(n.toString(),r)}else ce(2);e.H=0,e.h&&e.h.za(t),ay(e),ey(e)}V.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ce(2)):(this.l.info("Failed to ping google.com"),ce(1))};function ay(e){if(e.H=0,e.ma=[],e.h){const t=Qg(e.i);(t.length!=0||e.j.length!=0)&&(Yh(e.ma,t),Yh(e.ma,e.j),e.i.i.length=0,Iu(e.j),e.j.length=0),e.h.ya()}}function cy(e,t,n){var r=n instanceof or?sn(n):new or(n);if(r.g!="")t&&(r.g=t+"."+r.g),Oo(r,r.m);else{var i=G.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new or(null);r&&Do(s,r),t&&(s.g=t),i&&Oo(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&vt(r,n,t),vt(r,"VER",e.ra),bs(e,r),r}function ly(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Ct(new ws({ob:!0})):new Ct(e.va),t.Oa(e.J),t}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function uy(){}V=uy.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function No(){if(Kr&&!(10<=Number(PT)))throw Error("Environmental error: no available transport.")}No.prototype.g=function(e,t){return new _e(e,t)};function _e(e,t){Bt.call(this),this.g=new ty(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Gi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Gi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new si(this)}Ut(_e,Bt);_e.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ce(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=cy(e,null,e.Y),xa(e)};_e.prototype.close=function(){Uu(this.g)};_e.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xu(e),e=n);t.j.push(new i1(t.fb++,e)),t.H==3&&xa(t)};_e.prototype.N=function(){this.g.h=null,delete this.j,Uu(this.g),delete this.g,_e.$.N.call(this)};function fy(e){Nu.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Ut(fy,Nu);function hy(){Mu.call(this),this.status=1}Ut(hy,Mu);function si(e){this.g=e}Ut(si,uy);si.prototype.Ba=function(){Qt(this.g,"a")};si.prototype.Aa=function(e){Qt(this.g,new fy(e))};si.prototype.za=function(e){Qt(this.g,new hy)};si.prototype.ya=function(){Qt(this.g,"b")};function g1(){this.blockSize=-1}function Oe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ut(Oe,g1);Oe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ac(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Oe.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ac(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ac(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ac(this,r),i=0;break}}this.h=i,this.i+=t};Oe.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ht(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var y1={};function zu(e){return-128<=e&&128>e?TT(e,function(t){return new ht([t|0],0>t?-1:0)}):new ht([e|0],0>e?-1:0)}function $e(e){if(isNaN(e)||!isFinite(e))return Mr;if(0>e)return Ht($e(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=fl;return new ht(t,0)}function dy(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ht(dy(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=$e(Math.pow(t,8)),r=Mr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=$e(Math.pow(t,s)),r=r.R(s).add($e(o))):(r=r.R(n),r=r.add($e(o)))}return r}var fl=4294967296,Mr=zu(0),hl=zu(1),ad=zu(16777216);V=ht.prototype;V.ea=function(){if(ve(this))return-Ht(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:fl+r)*t,t*=fl}return e};V.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(tn(this))return"0";if(ve(this))return"-"+Ht(this).toString(e);for(var t=$e(Math.pow(e,6)),n=this,r="";;){var i=Fo(n,t).g;n=Mo(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,tn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function tn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ve(e){return e.h==-1}V.X=function(e){return e=Mo(this,e),ve(e)?-1:tn(e)?0:1};function Ht(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ht(n,~e.h).add(hl)}V.abs=function(){return ve(this)?Ht(this):this};V.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ht(n,n[n.length-1]&-2147483648?-1:0)};function Mo(e,t){return e.add(Ht(t))}V.R=function(e){if(tn(this)||tn(e))return Mr;if(ve(this))return ve(e)?Ht(this).R(Ht(e)):Ht(Ht(this).R(e));if(ve(e))return Ht(this.R(Ht(e)));if(0>this.X(ad)&&0>e.X(ad))return $e(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,Hs(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Hs(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Hs(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Hs(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ht(n,0)};function Hs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function gi(e,t){this.g=e,this.h=t}function Fo(e,t){if(tn(t))throw Error("division by zero");if(tn(e))return new gi(Mr,Mr);if(ve(e))return t=Fo(Ht(e),t),new gi(Ht(t.g),Ht(t.h));if(ve(t))return t=Fo(e,Ht(t)),new gi(Ht(t.g),t.h);if(30<e.g.length){if(ve(e)||ve(t))throw Error("slowDivide_ only works with positive integers.");for(var n=hl,r=t;0>=r.X(e);)n=cd(n),r=cd(r);var i=Tr(n,1),s=Tr(r,1);for(r=Tr(r,2),n=Tr(n,2);!tn(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Tr(r,1),n=Tr(n,1)}return t=Mo(e,i.R(t)),new gi(i,t)}for(i=Mr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=$e(n),o=s.R(t);ve(o)||0<o.X(e);)n-=r,s=$e(n),o=s.R(t);tn(s)&&(s=hl),i=i.add(s),e=Mo(e,o)}return new gi(i,e)}V.gb=function(e){return Fo(this,e).h};V.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ht(n,this.h&e.h)};V.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ht(n,this.h|e.h)};V.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ht(n,this.h^e.h)};function cd(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ht(n,e.h)}function Tr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ht(i,e.h)}No.prototype.createWebChannel=No.prototype.g;_e.prototype.send=_e.prototype.u;_e.prototype.open=_e.prototype.m;_e.prototype.close=_e.prototype.close;Ia.NO_ERROR=0;Ia.TIMEOUT=8;Ia.HTTP_ERROR=6;kg.COMPLETE="complete";Dg.EventType=As;As.OPEN="a";As.CLOSE="b";As.ERROR="c";As.MESSAGE="d";Bt.prototype.listen=Bt.prototype.O;Ct.prototype.listenOnce=Ct.prototype.P;Ct.prototype.getLastError=Ct.prototype.Sa;Ct.prototype.getLastErrorCode=Ct.prototype.Ia;Ct.prototype.getStatus=Ct.prototype.da;Ct.prototype.getResponseJson=Ct.prototype.Wa;Ct.prototype.getResponseText=Ct.prototype.ja;Ct.prototype.send=Ct.prototype.ha;Ct.prototype.setWithCredentials=Ct.prototype.Oa;Oe.prototype.digest=Oe.prototype.l;Oe.prototype.reset=Oe.prototype.reset;Oe.prototype.update=Oe.prototype.j;ht.prototype.add=ht.prototype.add;ht.prototype.multiply=ht.prototype.R;ht.prototype.modulo=ht.prototype.gb;ht.prototype.compare=ht.prototype.X;ht.prototype.toNumber=ht.prototype.ea;ht.prototype.toString=ht.prototype.toString;ht.prototype.getBits=ht.prototype.D;ht.fromNumber=$e;ht.fromString=dy;var _1=function(){return new No},A1=function(){return wa()},vc=Ia,v1=kg,E1=yr,ld={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},w1=ws,qs=Dg,I1=Ct,b1=Oe,Fr=ht;const ud="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new mu("@firebase/firestore");function fd(){return hr.logLevel}function U(e,...t){if(hr.logLevel<=ut.DEBUG){const n=t.map(Hu);hr.debug(`Firestore (${oi}): ${e}`,...n)}}function on(e,...t){if(hr.logLevel<=ut.ERROR){const n=t.map(Hu);hr.error(`Firestore (${oi}): ${e}`,...n)}}function Qr(e,...t){if(hr.logLevel<=ut.WARN){const n=t.map(Hu);hr.warn(`Firestore (${oi}): ${e}`,...n)}}function Hu(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e="Unexpected state"){const t=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: `+e;throw on(t),new Error(t)}function wt(e,t){e||W()}function J(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Un{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class T1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Yt.UNAUTHENTICATED))}shutdown(){}}class C1{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R1{constructor(t){this.t=t,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ar,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ar)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(wt(typeof r.accessToken=="string"),new my(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return wt(t===null||typeof t=="string"),new Yt(t)}}class P1{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class S1{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new P1(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x1{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k1{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(wt(typeof n.token=="string"),this.R=n.token,new x1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=D1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ot(e,t){return e<t?-1:e>t?1:0}function Wr(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new H(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new H(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Vt.fromMillis(Date.now())}static fromDate(t){return Vt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Vt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ot(this.nanoseconds,t.nanoseconds):ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.timestamp=t}static fromTimestamp(t){return new X(t)}static min(){return new X(new Vt(0,0))}static max(){return new X(new Vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n,r){n===void 0?n=0:n>t.length&&W(),r===void 0?r=t.length-n:r>t.length-n&&W(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return rs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof rs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class It extends rs{construct(t,n,r){return new It(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new H(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new It(n)}static emptyPath(){return new It([])}}const O1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends rs{construct(t,n,r){return new te(t,n,r)}static isValidIdentifier(t){return O1.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new H(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new te(n)}static emptyPath(){return new te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(It.fromString(t))}static fromName(t){return new q(It.fromString(t).popFirst(5))}static empty(){return new q(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&It.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return It.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new It(t.slice()))}}function V1(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Vt(n+1,0):new Vt(n,r));return new On(i,q.empty(),t)}function N1(e){return new On(e.readTime,e.key,-1)}class On{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new On(X.min(),q.empty(),-1)}static max(){return new On(X.max(),q.empty(),-1)}}function M1(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=q.comparator(e.documentKey,t.documentKey),n!==0?n:ot(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(e){if(e.code!==C.FAILED_PRECONDITION||e.message!==F1)throw e;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):P.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):P.reject(n)}static resolve(t){return new P((n,r)=>{n(t)})}static reject(t){return new P((n,r)=>{r(t)})}static waitFor(t){return new P((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=P.resolve(!1);for(const r of t)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new P((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new P((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Cs(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}qu.ae=-1;function ka(e){return e==null}function Lo(e){return e===0&&1/e==-1/0}function B1(e){return typeof e=="number"&&Number.isInteger(e)&&!Lo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ai(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function gy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,n){this.comparator=t,this.root=n||$t.EMPTY}insert(t,n){return new bt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(t){return new bt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$t.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ks(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ks(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ks(this.root,t,this.comparator,!0)}}class Ks{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class $t{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??$t.RED,this.left=i??$t.EMPTY,this.right=s??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new $t(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return $t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const t=this.left.check();if(t!==this.right.check())throw W();return t+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,n,r,i,s){return this}insert(t,n,r){return new $t(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.comparator=t,this.data=new bt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(t){return new dd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof re)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new re(this.comparator);return n.data=t,n}}class dd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.fields=t,t.sort(te.comparator)}static empty(){return new Re([])}unionWith(t){let n=new re(te.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Re(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Wr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yy("Invalid base64 string: "+s):s}}(t);return new ie(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ie(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const U1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(e){if(wt(!!e),typeof e=="string"){let t=0;const n=U1.exec(e);if(wt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:St(e.seconds),nanos:St(e.nanos)}}function St(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function dr(e){return typeof e=="string"?ie.fromBase64String(e):ie.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qu(e){const t=e.mapValue.fields.__previous_value__;return Ku(t)?Qu(t):t}function is(e){const t=Vn(e.mapValue.fields.__local_write_time__.timestampValue);return new Vt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(t,n,r,i,s,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ss{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ss&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ku(e)?4:$1(e)?9007199254740991:10:W()}function We(e,t){if(e===t)return!0;const n=mr(e);if(n!==mr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return is(e).isEqual(is(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vn(i.timestampValue),a=Vn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return dr(i.bytesValue).isEqual(dr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return St(i.geoPointValue.latitude)===St(s.geoPointValue.latitude)&&St(i.geoPointValue.longitude)===St(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return St(i.integerValue)===St(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=St(i.doubleValue),a=St(s.doubleValue);return o===a?Lo(o)===Lo(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Wr(e.arrayValue.values||[],t.arrayValue.values||[],We);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(hd(o)!==hd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!We(o[c],a[c])))return!1;return!0}(e,t);default:return W()}}function os(e,t){return(e.values||[]).find(n=>We(n,t))!==void 0}function Gr(e,t){if(e===t)return 0;const n=mr(e),r=mr(t);if(n!==r)return ot(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ot(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=St(s.integerValue||s.doubleValue),c=St(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return md(e.timestampValue,t.timestampValue);case 4:return md(is(e),is(t));case 5:return ot(e.stringValue,t.stringValue);case 6:return function(s,o){const a=dr(s),c=dr(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ot(a[l],c[l]);if(u!==0)return u}return ot(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ot(St(s.latitude),St(o.latitude));return a!==0?a:ot(St(s.longitude),St(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Gr(a[l],c[l]);if(u)return u}return ot(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Qs.mapValue&&o===Qs.mapValue)return 0;if(s===Qs.mapValue)return 1;if(o===Qs.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let f=0;f<c.length&&f<u.length;++f){const h=ot(c[f],u[f]);if(h!==0)return h;const d=Gr(a[c[f]],l[u[f]]);if(d!==0)return d}return ot(c.length,u.length)}(e.mapValue,t.mapValue);default:throw W()}}function md(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ot(e,t);const n=Vn(e),r=Vn(t),i=ot(n.seconds,r.seconds);return i!==0?i:ot(n.nanos,r.nanos)}function Yr(e){return dl(e)}function dl(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Vn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return dr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return q.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dl(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dl(n.fields[o])}`;return i+"}"}(e.mapValue):W()}function ml(e){return!!e&&"integerValue"in e}function Wu(e){return!!e&&"arrayValue"in e}function pd(e){return!!e&&"nullValue"in e}function gd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function uo(e){return!!e&&"mapValue"in e}function Di(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ai(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Di(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Di(e.arrayValue.values[n]);return t}return Object.assign({},e)}function $1(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.value=t}static empty(){return new Ee({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!uo(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Di(n)}setAll(t){let n=te.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Di(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return We(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];uo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){ai(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ee(Di(this.value))}}function _y(e){const t=[];return ai(e.fields,(n,r)=>{const i=new te([n]);if(uo(r)){const s=_y(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Re(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Xt(t,0,X.min(),X.min(),X.min(),Ee.empty(),0)}static newFoundDocument(t,n,r,i){return new Xt(t,1,n,X.min(),r,i,0)}static newNoDocument(t,n){return new Xt(t,2,n,X.min(),X.min(),Ee.empty(),0)}static newUnknownDocument(t,n){return new Xt(t,3,n,X.min(),X.min(),Ee.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,n){this.position=t,this.inclusive=n}}function yd(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Gr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _d(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!We(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,n="asc"){this.field=t,this.dir=n}}function z1(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{}class Ot extends Ay{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new q1(t,n,r):n==="array-contains"?new W1(t,r):n==="in"?new G1(t,r):n==="not-in"?new Y1(t,r):n==="array-contains-any"?new X1(t,r):new Ot(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new K1(t,r):new Q1(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gr(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(Gr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ge extends Ay{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Ge(t,n)}matches(t){return vy(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function vy(e){return e.op==="and"}function Ey(e){return H1(e)&&vy(e)}function H1(e){for(const t of e.filters)if(t instanceof Ge)return!1;return!0}function pl(e){if(e instanceof Ot)return e.field.canonicalString()+e.op.toString()+Yr(e.value);if(Ey(e))return e.filters.map(t=>pl(t)).join(",");{const t=e.filters.map(n=>pl(n)).join(",");return`${e.op}(${t})`}}function wy(e,t){return e instanceof Ot?function(r,i){return i instanceof Ot&&r.op===i.op&&r.field.isEqual(i.field)&&We(r.value,i.value)}(e,t):e instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&wy(o,i.filters[a]),!0):!1}(e,t):void W()}function Iy(e){return e instanceof Ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Yr(n.value)}`}(e):e instanceof Ge?function(n){return n.op.toString()+" {"+n.getFilters().map(Iy).join(" ,")+"}"}(e):"Filter"}class q1 extends Ot{constructor(t,n,r){super(t,n,r),this.key=q.fromName(r.referenceValue)}matches(t){const n=q.comparator(t.key,this.key);return this.matchesComparison(n)}}class K1 extends Ot{constructor(t,n){super(t,"in",n),this.keys=by("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Q1 extends Ot{constructor(t,n){super(t,"not-in",n),this.keys=by("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function by(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class W1 extends Ot{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Wu(n)&&os(n.arrayValue,this.value)}}class G1 extends Ot{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&os(this.value.arrayValue,n)}}class Y1 extends Ot{constructor(t,n){super(t,"not-in",n)}matches(t){if(os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!os(this.value.arrayValue,n)}}class X1 extends Ot{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Wu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>os(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ad(e,t=null,n=[],r=[],i=null,s=null,o=null){return new J1(e,t,n,r,i,s,o)}function Gu(e){const t=J(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>pl(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ka(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Yr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Yr(r)).join(",")),t.he=n}return t.he}function Yu(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!z1(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!wy(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!_d(e.startAt,t.startAt)&&_d(e.endAt,t.endAt)}function gl(e){return q.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Z1(e,t,n,r,i,s,o,a){return new Da(e,t,n,r,i,s,o,a)}function Xu(e){return new Da(e)}function vd(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function tC(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function eC(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function nC(e){return e.collectionGroup!==null}function Lr(e){const t=J(e);if(t.Pe===null){t.Pe=[];const n=eC(t),r=tC(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Oi(n)),t.Pe.push(new Oi(te.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Oi(te.keyField(),s))}}}return t.Pe}function an(e){const t=J(e);if(!t.Ie)if(t.limitType==="F")t.Ie=Ad(t.path,t.collectionGroup,Lr(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Lr(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Oi(s.field,o))}const r=t.endAt?new Bo(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Bo(t.startAt.position,t.startAt.inclusive):null;t.Ie=Ad(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function yl(e,t,n){return new Da(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Oa(e,t){return Yu(an(e),an(t))&&e.limitType===t.limitType}function Ty(e){return`${Gu(an(e))}|lt:${e.limitType}`}function _l(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Iy(i)).join(", ")}]`),ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Yr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Yr(i)).join(",")),`Target(${r})`}(an(e))}; limitType=${e.limitType})`}function Va(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Lr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=yd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Lr(r),i)||r.endAt&&!function(o,a,c){const l=yd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Lr(r),i))}(e,t)}function rC(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Cy(e){return(t,n)=>{let r=!1;for(const i of Lr(e)){const s=iC(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iC(e,t,n){const r=e.field.isKeyField()?q.comparator(t.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?Gr(c,l):W()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ai(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return gy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=new bt(q.comparator);function cn(){return sC}const Ry=new bt(q.comparator);function Ei(...e){let t=Ry;for(const n of e)t=t.insert(n.key,n);return t}function Py(e){let t=Ry;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function tr(){return Vi()}function Sy(){return Vi()}function Vi(){return new ci(e=>e.toString(),(e,t)=>e.isEqual(t))}const oC=new bt(q.comparator),aC=new re(q.comparator);function rt(...e){let t=aC;for(const n of e)t=t.add(n);return t}const cC=new re(ot);function lC(){return cC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lo(t)?"-0":t}}function ky(e){return{integerValue:""+e}}function uC(e,t){return B1(t)?ky(t):xy(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this._=void 0}}function fC(e,t,n){return e instanceof Uo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ku(s)&&(s=Qu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof as?Oy(e,t):e instanceof cs?Vy(e,t):function(i,s){const o=Dy(i,s),a=Ed(o)+Ed(i.Te);return ml(o)&&ml(i.Te)?ky(a):xy(i.serializer,a)}(e,t)}function hC(e,t,n){return e instanceof as?Oy(e,t):e instanceof cs?Vy(e,t):n}function Dy(e,t){return e instanceof jo?function(r){return ml(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Uo extends Na{}class as extends Na{constructor(t){super(),this.elements=t}}function Oy(e,t){const n=Ny(t);for(const r of e.elements)n.some(i=>We(i,r))||n.push(r);return{arrayValue:{values:n}}}class cs extends Na{constructor(t){super(),this.elements=t}}function Vy(e,t){let n=Ny(t);for(const r of e.elements)n=n.filter(i=>!We(i,r));return{arrayValue:{values:n}}}class jo extends Na{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Ed(e){return St(e.integerValue||e.doubleValue)}function Ny(e){return Wu(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function dC(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof as&&i instanceof as||r instanceof cs&&i instanceof cs?Wr(r.elements,i.elements,We):r instanceof jo&&i instanceof jo?We(r.Te,i.Te):r instanceof Uo&&i instanceof Uo}(e.transform,t.transform)}class mC{constructor(t,n){this.version=t,this.transformResults=n}}class en{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new en}static exists(t){return new en(void 0,t)}static updateTime(t){return new en(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fo(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ma{}function My(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ly(e.key,en.none()):new Rs(e.key,e.data,en.none());{const n=e.data,r=Ee.empty();let i=new re(te.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _r(e.key,r,new Re(i.toArray()),en.none())}}function pC(e,t,n){e instanceof Rs?function(i,s,o){const a=i.value.clone(),c=Id(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof _r?function(i,s,o){if(!fo(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Id(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Fy(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ni(e,t,n,r){return e instanceof Rs?function(s,o,a,c){if(!fo(s.precondition,o))return a;const l=s.value.clone(),u=bd(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof _r?function(s,o,a,c){if(!fo(s.precondition,o))return a;const l=bd(s.fieldTransforms,c,o),u=o.data;return u.setAll(Fy(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(e,t,n,r):function(s,o,a){return fo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function gC(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Dy(r.transform,i||null);s!=null&&(n===null&&(n=Ee.empty()),n.set(r.field,s))}return n||null}function wd(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wr(r,i,(s,o)=>dC(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Rs extends Ma{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _r extends Ma{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Fy(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Id(e,t,n){const r=new Map;wt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,hC(o,a,n[i]))}return r}function bd(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fC(s,o,t))}return r}class Ly extends Ma{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yC extends Ma{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&pC(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ni(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ni(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Sy();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=My(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),rt())}isEqual(t){return this.batchId===t.batchId&&Wr(this.mutations,t.mutations,(n,r)=>wd(n,r))&&Wr(this.baseMutations,t.baseMutations,(n,r)=>wd(n,r))}}class Ju{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){wt(t.mutations.length===r.length);let i=function(){return oC}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ju(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt,it;function EC(e){switch(e){default:return W();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function By(e){if(e===void 0)return on("GRPC error has no .code"),C.UNKNOWN;switch(e){case Pt.OK:return C.OK;case Pt.CANCELLED:return C.CANCELLED;case Pt.UNKNOWN:return C.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return C.INTERNAL;case Pt.UNAVAILABLE:return C.UNAVAILABLE;case Pt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Pt.NOT_FOUND:return C.NOT_FOUND;case Pt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Pt.ABORTED:return C.ABORTED;case Pt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Pt.DATA_LOSS:return C.DATA_LOSS;default:return W()}}(it=Pt||(Pt={}))[it.OK=0]="OK",it[it.CANCELLED=1]="CANCELLED",it[it.UNKNOWN=2]="UNKNOWN",it[it.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",it[it.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",it[it.NOT_FOUND=5]="NOT_FOUND",it[it.ALREADY_EXISTS=6]="ALREADY_EXISTS",it[it.PERMISSION_DENIED=7]="PERMISSION_DENIED",it[it.UNAUTHENTICATED=16]="UNAUTHENTICATED",it[it.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",it[it.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",it[it.ABORTED=10]="ABORTED",it[it.OUT_OF_RANGE=11]="OUT_OF_RANGE",it[it.UNIMPLEMENTED=12]="UNIMPLEMENTED",it[it.INTERNAL=13]="INTERNAL",it[it.UNAVAILABLE=14]="UNAVAILABLE",it[it.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ws}static getOrCreateInstance(){return Ws===null&&(Ws=new Zu),Ws}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Ws=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new Fr([4294967295,4294967295],0);function Td(e){const t=wC().encode(e),n=new b1;return n.update(t),new Uint8Array(n.digest())}function Cd(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Fr([n,r],0),new Fr([i,s],0)]}class tf{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wi(`Invalid padding: ${n}`);if(r<0)throw new wi(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new wi(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new wi(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=Fr.fromNumber(this.de)}Re(t,n,r){let i=t.add(n.multiply(Fr.fromNumber(r)));return i.compare(IC)===1&&(i=new Fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=Td(t),[r,i]=Cd(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new tf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=Td(t),[r,i]=Cd(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Ps.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Fa(X.min(),i,new bt(ot),cn(),rt())}}class Ps{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ps(r,n,rt(),rt(),rt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,n,r,i){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=i}}class Uy{constructor(t,n){this.targetId=t,this.pe=n}}class jy{constructor(t,n,r=ie.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Rd{constructor(){this.ye=0,this.we=Sd(),this.Se=ie.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=rt(),n=rt(),r=rt();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Ps(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Sd()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class bC{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=cn(),this.$e=Pd(),this.Ue=new bt(ot)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:W()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(t){var n,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(gl(a))if(s===0){const c=new q(a.path);this.ze(i,c,Xt.newNoDocument(c,X.min()))}else wt(s===1);else{const c=this.et(i);if(c!==s){const l=this.tt(t,c);if(l.status!==0){this.Ye(i);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=Zu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(f,h,d,_){var E,I,y,A,k,S;const Q={localCacheCount:d,existenceFilterCount:_.count},et=_.unchangedNames;return et&&(Q.bloomFilter={applied:f===0,hashCount:(E=et==null?void 0:et.hashCount)!==null&&E!==void 0?E:0,bitmapLength:(A=(y=(I=et==null?void 0:et.bits)===null||I===void 0?void 0:I.bitmap)===null||y===void 0?void 0:y.length)!==null&&A!==void 0?A:0,padding:(S=(k=et==null?void 0:et.bits)===null||k===void 0?void 0:k.padding)!==null&&S!==void 0?S:0},h&&(Q.bloomFilter.mightContain=h)),Q}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=dr(s).toUint8Array()}catch(f){if(f instanceof yy)return Qr("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw f}try{l=new tf(c,o,a)}catch(f){return Qr(f instanceof wi?"BloomFilter error: ":"Applying bloom filter failed: ",f),{status:1}}const u=f=>{const h=this.qe.rt();return l.mightContain(`projects/${h.projectId}/databases/${h.database}/documents/${f}`)};return l.de===0?{status:1}:{status:i===n-this.it(t.targetId,u)?0:2,nt:u}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&gl(a.target)){const c=new q(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,Xt.newNoDocument(c,t))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=rt();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new Fa(t,n,this.Ue,this.Ke,r);return this.Ke=cn(),this.$e=Pd(),this.Ue=new bt(ot),i}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Rd,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new re(ot),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||U("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Rd),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Pd(){return new bt(q.comparator)}function Sd(){return new bt(q.comparator)}const TC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),CC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RC=(()=>({and:"AND",or:"OR"}))();class PC{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Al(e,t){return e.useProto3Json||ka(t)?t:{value:t}}function $o(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $y(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function SC(e,t){return $o(e,t.toTimestamp())}function Ke(e){return wt(!!e),X.fromTimestamp(function(n){const r=Vn(n);return new Vt(r.seconds,r.nanos)}(e))}function ef(e,t){return function(r){return new It(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function zy(e){const t=It.fromString(e);return wt(Qy(t)),t}function vl(e,t){return ef(e.databaseId,t.path)}function Ec(e,t){const n=zy(t);if(n.get(1)!==e.databaseId.projectId)throw new H(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new H(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new q(Hy(n))}function El(e,t){return ef(e.databaseId,t)}function xC(e){const t=zy(e);return t.length===4?It.emptyPath():Hy(t)}function wl(e){return new It(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Hy(e){return wt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function xd(e,t,n){return{name:vl(e,t),fields:n.value.mapValue.fields}}function kC(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:W()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(wt(u===void 0||typeof u=="string"),ie.fromBase64String(u||"")):(wt(u===void 0||u instanceof Uint8Array),ie.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:By(l.code);return new H(u,l.message||"")}(o);n=new jy(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ec(e,r.document.name),s=Ke(r.document.updateTime),o=r.document.createTime?Ke(r.document.createTime):X.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=Xt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ho(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ec(e,r.document),s=r.readTime?Ke(r.readTime):X.min(),o=Xt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ho([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ec(e,r.document),s=r.removedTargetIds||[];n=new ho([],s,i,null)}else{if(!("filter"in t))return W();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vC(i,s),a=r.targetId;n=new Uy(a,o)}}return n}function DC(e,t){let n;if(t instanceof Rs)n={update:xd(e,t.key,t.value)};else if(t instanceof Ly)n={delete:vl(e,t.key)};else if(t instanceof _r)n={update:xd(e,t.key,t.data),updateMask:jC(t.fieldMask)};else{if(!(t instanceof yC))return W();n={verify:vl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Uo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof as)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw W()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:SC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(e,t.precondition)),n}function OC(e,t){return e&&e.length>0?(wt(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Ke(i.updateTime):Ke(s);return o.isEqual(X.min())&&(o=Ke(s)),new mC(o,i.transformResults||[])}(n,t))):[]}function VC(e,t){return{documents:[El(e,t.path)]}}function NC(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=El(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=El(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Ky(Ge.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(f){return{field:Rr(f.field),direction:LC(f.dir)}}(l))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Al(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function MC(e){let t=xC(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){wt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(f){const h=qy(f);return h instanceof Ge&&Ey(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(_){return new Oi(Pr(_.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,ka(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(f){const h=!!f.before,d=f.values||[];return new Bo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(f){const h=!f.before,d=f.values||[];return new Bo(d,h)}(n.endAt)),Z1(t,i,o,s,a,"F",c,l)}function FC(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function qy(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Pr(n.unaryFilter.field);return Ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pr(n.unaryFilter.field);return Ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pr(n.unaryFilter.field);return Ot.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pr(n.unaryFilter.field);return Ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(e):e.fieldFilter!==void 0?function(n){return Ot.create(Pr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Ge.create(n.compositeFilter.filters.map(r=>qy(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(e):W()}function LC(e){return TC[e]}function BC(e){return CC[e]}function UC(e){return RC[e]}function Rr(e){return{fieldPath:e.canonicalString()}}function Pr(e){return te.fromServerFormat(e.fieldPath)}function Ky(e){return e instanceof Ot?function(n){if(n.op==="=="){if(gd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NAN"}};if(pd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NOT_NAN"}};if(pd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rr(n.field),op:BC(n.op),value:n.value}}}(e):e instanceof Ge?function(n){const r=n.getFilters().map(i=>Ky(i));return r.length===1?r[0]:{compositeFilter:{op:UC(n.op),filters:r}}}(e):W()}function jC(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Qy(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,n,r,i,s=X.min(),o=X.min(),a=ie.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new wn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(t){this.ct=t}}function zC(e){const t=MC({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?yl(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.sn=new qC}addToCollectionParentIndex(t,n){return this.sn.add(n),P.resolve()}getCollectionParents(t,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return P.resolve()}deleteFieldIndex(t,n){return P.resolve()}getDocumentsMatchingTarget(t,n){return P.resolve(null)}getIndexType(t,n){return P.resolve(0)}getFieldIndexes(t,n){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,n){return P.resolve(On.min())}getMinOffsetFromCollectionGroup(t,n){return P.resolve(On.min())}updateCollectionGroup(t,n,r){return P.resolve()}updateIndexEntries(t,n){return P.resolve()}}class qC{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new re(It.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new re(It.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Xr(0)}static On(){return new Xr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.changes=new ci(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Xt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Ni(r.mutation,i,Re.empty(),Vt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,rt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=rt()){const i=tr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ei();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=tr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,rt()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=cn();const o=Vi(),a=function(){return Vi()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof _r)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ni(u.mutation,l,u.mutation.getFieldMask(),Vt.now())):o.set(l.key,Re.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new QC(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Vi();let i=new bt((o,a)=>o-a),s=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Re.empty();u=a.applyToLocalView(l,u),r.set(c,u);const f=(i.get(a.batchId)||rt()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=Sy();u.forEach(h=>{if(!s.has(h)){const d=My(n.get(h),r.get(h));d!==null&&f.set(h,d),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,f))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):nC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):P.resolve(tr());let a=-1,c=s;return o.next(l=>P.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?P.resolve():this.remoteDocumentCache.getEntry(t,u).next(h=>{c=c.insert(u,h)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,c,l,rt())).next(u=>({batchId:a,changes:Py(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new q(n)).next(r=>{let i=Ei();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Ei();return this.indexManager.getCollectionParents(t,i).next(o=>P.forEach(o,a=>{const c=function(u,f){return new Da(f,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,f)=>{s=s.insert(u,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Xt.newInvalidDocument(l)))});let o=Ei();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ni(l.mutation,c,Re.empty(),Vt.now()),Va(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return P.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ke(i.createTime)}}(n)),P.resolve()}getNamedQuery(t,n){return P.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:zC(i.bundledQuery),readTime:Ke(i.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.overlays=new bt(q.comparator),this.cr=new Map}getOverlay(t,n){return P.resolve(this.overlays.get(n))}getOverlays(t,n){const r=tr();return P.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),P.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),P.resolve()}getOverlaysForCollection(t,n,r){const i=tr(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return P.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new bt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=tr(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=tr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return P.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AC(n,r));let s=this.cr.get(n);s===void 0&&(s=rt(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.lr=new re(Ft.hr),this.Pr=new re(Ft.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new Ft(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new Ft(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new q(new It([])),r=new Ft(n,t),i=new Ft(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new q(new It([])),r=new Ft(n,t),i=new Ft(n,t+1);let s=rt();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ft(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ft{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return q.comparator(t.key,n.key)||ot(t.mr,n.mr)}static Ir(t,n){return ot(t.mr,n.mr)||q.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new re(Ft.hr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _C(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ft(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(t,n){return P.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ft(n,0),i=new Ft(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new re(ot);return n.forEach(i=>{const s=new Ft(i,0),o=new Ft(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),P.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ft(new q(s),0);let a=new re(ot);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.mr)),!0)},o),P.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){wt(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return P.forEach(n.mutations,i=>{const s=new Ft(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new Ft(n,0),i=this.pr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(t){this.Dr=t,this.docs=function(){return new bt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(t,n){let r=cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=cn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||M1(N1(u),r)<=0||(i.has(u.key)||Va(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(t,n,r,i){W()}vr(t,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new ZC(this)}getSize(t){return P.resolve(this.size)}}class ZC extends KC{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),P.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(t){this.persistence=t,this.Cr=new ci(n=>Gu(n),Yu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new nf,this.targetCount=0,this.Or=Xr.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),P.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new Xr(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,P.resolve()}updateTargetData(t,n){return this.Ln(n),P.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return P.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),P.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),P.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return P.resolve(r)}containsKey(t,n){return P.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(t,n){this.Nr={},this.overlays={},this.Br=new qu(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new tR(this),this.indexManager=new HC,this.remoteDocumentCache=function(i){return new JC(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new $C(n),this.Qr=new GC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new YC,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new XC(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){U("MemoryPersistence","Starting transaction:",t);const i=new nR(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return P.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class nR extends L1{constructor(t){super(),this.currentSequenceNumber=t}}class rf{constructor(t){this.persistence=t,this.Wr=new nf,this.Gr=null}static zr(t){return new rf(t)}get jr(){if(this.Gr)return this.Gr;throw W()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),P.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),P.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.jr,r=>{const i=q.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return P.or([()=>P.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=rt(),i=rt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sf(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if(vd(n))return P.resolve(null);let r=an(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yl(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=rt(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(t,yl(n,null,"F")):this.ji(t,l,n,c)}))})))}Ui(t,n,r,i){return vd(n)||i.isEqual(X.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(fd()<=ut.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_l(n)),this.ji(t,o,n,V1(i,-1)))})}Gi(t,n){let r=new re(Cy(t));return n.forEach((i,s)=>{Va(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return fd()<=ut.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",_l(n)),this.Ki.getDocumentsMatchingQuery(t,n,On.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new bt(ot),this.Yi=new ci(s=>Gu(s),Yu),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new WC(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function sR(e,t,n,r){return new iR(e,t,n,r)}async function Wy(e,t){const n=J(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=rt();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function oR(e,t){const n=J(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const f=l.batch,h=f.keys();let d=P.resolve();return h.forEach(_=>{d=d.next(()=>u.getEntry(c,_)).next(E=>{const I=l.docVersions.get(_);wt(I!==null),E.version.compareTo(I)<0&&(f.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=rt();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Gy(e){const t=J(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function aR(e,t){const n=J(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((u,f)=>{const h=i.get(f);if(!h)return;a.push(n.kr.removeMatchingKeys(s,u.removedDocuments,f).next(()=>n.kr.addMatchingKeys(s,u.addedDocuments,f)));let d=h.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?d=d.withResumeToken(ie.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(f,d),function(E,I,y){return E.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(h,d,u)&&a.push(n.kr.updateTargetData(s,d))});let c=cn(),l=rt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(cR(s,o,t.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(X.min())){const u=n.kr.getLastRemoteSnapshotVersion(s).next(f=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Ji=i,s))}function cR(e,t,n){let r=rt(),i=rt();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=cn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:i}})}function lR(e,t){const n=J(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function uR(e,t){const n=J(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,t).next(s=>s?(i=s,P.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new wn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function Il(e,t,n){const r=J(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cs(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function kd(e,t,n){const r=J(e);let i=X.min(),s=rt();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const f=J(c),h=f.Yi.get(u);return h!==void 0?P.resolve(f.Ji.get(h)):f.kr.getTargetData(l,u)}(r,o,an(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?i:X.min(),n?s:rt())).next(a=>(fR(r,rC(t),a),{documents:a,ss:s})))}function fR(e,t,n){let r=e.Zi.get(t)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Zi.set(t,r)}class Dd{constructor(){this.activeTargetIds=lC()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hR{constructor(){this.Hs=new Dd,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Dd,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs=null;function wc(){return Gs===null?Gs=function(){return 268435456+Math.round(2147483648*Math.random())}():Gs++,"0x"+Gs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="WebChannelConnection";class gR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=wc(),c=this.mo(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,s,o),this.po(n,c,l,i).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Qr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=mR[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){const s=wc();return new Promise((o,a)=>{const c=new I1;c.setWithCredentials(!0),c.listenOnce(v1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case vc.NO_ERROR:const u=c.getResponseJson();U(Gt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case vc.TIMEOUT:U(Gt,`RPC '${t}' ${s} timed out`),a(new H(C.DEADLINE_EXCEEDED,"Request time out"));break;case vc.HTTP_ERROR:const f=c.getStatus();if(U(Gt,`RPC '${t}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let h=c.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const _=function(I){const y=I.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(y)>=0?y:C.UNKNOWN}(d.status);a(new H(_,d.message))}else a(new H(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(C.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U(Gt,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);U(Gt,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}wo(t,n,r){const i=wc(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=_1(),a=A1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new w1({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");U(Gt,`Creating RPC '${t}' stream ${i}: ${u}`,c);const f=o.createWebChannel(u,c);let h=!1,d=!1;const _=new pR({so:I=>{d?U(Gt,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(h||(U(Gt,`Opening RPC '${t}' stream ${i} transport.`),f.open(),h=!0),U(Gt,`RPC '${t}' stream ${i} sending:`,I),f.send(I))},oo:()=>f.close()}),E=(I,y,A)=>{I.listen(y,k=>{try{A(k)}catch(S){setTimeout(()=>{throw S},0)}})};return E(f,qs.EventType.OPEN,()=>{d||U(Gt,`RPC '${t}' stream ${i} transport opened.`)}),E(f,qs.EventType.CLOSE,()=>{d||(d=!0,U(Gt,`RPC '${t}' stream ${i} transport closed`),_.Po())}),E(f,qs.EventType.ERROR,I=>{d||(d=!0,Qr(Gt,`RPC '${t}' stream ${i} transport errored:`,I),_.Po(new H(C.UNAVAILABLE,"The operation could not be completed")))}),E(f,qs.EventType.MESSAGE,I=>{var y;if(!d){const A=I.data[0];wt(!!A);const k=A,S=k.error||((y=k[0])===null||y===void 0?void 0:y.error);if(S){U(Gt,`RPC '${t}' stream ${i} received error:`,S);const Q=S.status;let et=function(jt){const se=Pt[jt];if(se!==void 0)return By(se)}(Q),yt=S.message;et===void 0&&(et=C.INTERNAL,yt="Unknown error status: "+Q+" with message "+S.message),d=!0,_.Po(new H(et,yt)),f.close()}else U(Gt,`RPC '${t}' stream ${i} received:`,A),_.Io(A)}}),E(a,E1.STAT_EVENT,I=>{I.stat===ld.PROXY?U(Gt,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===ld.NOPROXY&&U(Gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.ho()},0),_}}function Ic(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(e){return new PC(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(t,n,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Yy(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{const i=new H(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yR extends Xy{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=kC(this.serializer,t),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Ke(o.readTime):X.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=wl(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=gl(c)?{documents:VC(s,c)}:{query:NC(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$y(s,o.resumeToken);const l=Al(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=$o(s,o.snapshotVersion.toTimestamp());const l=Al(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=FC(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=wl(this.serializer),n.removeTarget=t,this.Ho(n)}}class _R extends Xy{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(wt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=OC(t.writeResults,t.commitTime),r=Ke(t.commitTime);return this.listener.u_(r,n)}return wt(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=wl(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>DC(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new H(C.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(C.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(C.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class vR{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(on(n),this.d_=!1):U("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Ar(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=J(c);l.y_.add(4),await Ss(l),l.b_.set("Unknown"),l.y_.delete(4),await Ba(l)}(this))})}),this.b_=new vR(r,i)}}async function Ba(e){if(Ar(e))for(const t of e.w_)await t(!0)}async function Ss(e){for(const t of e.w_)await t(!1)}function Jy(e,t){const n=J(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),cf(n)?af(n):li(n).Uo()&&of(n,t))}function Zy(e,t){const n=J(e),r=li(n);n.p_.delete(t),r.Uo()&&t_(n,t),n.p_.size===0&&(r.Uo()?r.zo():Ar(n)&&n.b_.set("Unknown"))}function of(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}li(e).i_(t)}function t_(e,t){e.D_.Be(t),li(e).s_(t)}function af(e){e.D_=new bC({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),li(e).start(),e.b_.A_()}function cf(e){return Ar(e)&&!li(e).$o()&&e.p_.size>0}function Ar(e){return J(e).y_.size===0}function e_(e){e.D_=void 0}async function wR(e){e.p_.forEach((t,n)=>{of(e,t)})}async function IR(e,t){e_(e),cf(e)?(e.b_.m_(t),af(e)):e.b_.set("Unknown")}async function bR(e,t,n){if(e.b_.set("Online"),t instanceof jy&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(e,t)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await zo(e,r)}else if(t instanceof ho?e.D_.We(t):t instanceof Uy?e.D_.Ze(t):e.D_.je(t),!n.isEqual(X.min()))try{const r=await Gy(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.p_.get(l);u&&s.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.p_.get(c);if(!u)return;s.p_.set(c,u.withResumeToken(ie.EMPTY_BYTE_STRING,u.snapshotVersion)),t_(s,c);const f=new wn(u.target,c,l,u.sequenceNumber);of(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await zo(e,r)}}async function zo(e,t,n){if(!Cs(t))throw t;e.y_.add(1),await Ss(e),e.b_.set("Offline"),n||(n=()=>Gy(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await Ba(e)})}function n_(e,t){return t().catch(n=>zo(e,n,t))}async function Ua(e){const t=J(e),n=Nn(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;TR(t);)try{const i=await lR(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,CR(t,i)}catch(i){await zo(t,i)}r_(t)&&i_(t)}function TR(e){return Ar(e)&&e.g_.length<10}function CR(e,t){e.g_.push(t);const n=Nn(e);n.Uo()&&n.__&&n.a_(t.mutations)}function r_(e){return Ar(e)&&!Nn(e).$o()&&e.g_.length>0}function i_(e){Nn(e).start()}async function RR(e){Nn(e).l_()}async function PR(e){const t=Nn(e);for(const n of e.g_)t.a_(n.mutations)}async function SR(e,t,n){const r=e.g_.shift(),i=Ju.from(r,t,n);await n_(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ua(e)}async function xR(e,t){t&&Nn(e).__&&await async function(r,i){if(function(o){return EC(o)&&o!==C.ABORTED}(i.code)){const s=r.g_.shift();Nn(r).Go(),await n_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ua(r)}}(e,t),r_(e)&&i_(e)}async function Vd(e,t){const n=J(e);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Ar(n);n.y_.add(3),await Ss(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await Ba(n)}async function kR(e,t){const n=J(e);t?(n.y_.delete(2),await Ba(n)):t||(n.y_.add(2),await Ss(n),n.b_.set("Unknown"))}function li(e){return e.v_||(e.v_=function(n,r,i){const s=J(n);return s.P_(),new yR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:wR.bind(null,e),uo:IR.bind(null,e),r_:bR.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),cf(e)?af(e):e.b_.set("Unknown")):(await e.v_.stop(),e_(e))})),e.v_}function Nn(e){return e.C_||(e.C_=function(n,r,i){const s=J(n);return s.P_(),new _R(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:RR.bind(null,e),uo:xR.bind(null,e),c_:PR.bind(null,e),u_:SR.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await Ua(e)):(await e.C_.stop(),e.g_.length>0&&(U("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new lf(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uf(e,t){if(on("AsyncQueue",`${t}: ${e}`),Cs(e))return new H(C.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t){this.comparator=t?(n,r)=>t(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ei(),this.sortedSet=new bt(this.comparator)}static emptySet(t){return new Br(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Br)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Br;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.F_=new bt(q.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):W():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Jr{constructor(t,n,r,i,s,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Jr(t,n,Br.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Oa(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.x_=void 0,this.listeners=[]}}class OR{constructor(){this.queries=new ci(t=>Ty(t),Oa),this.onlineState="Unknown",this.O_=new Set}}async function VR(e,t){const n=J(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new DR),i)try{s.x_=await n.onListen(r)}catch(o){const a=uf(o,`Initialization of query '${_l(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&ff(n)}async function NR(e,t){const n=J(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function MR(e,t){const n=J(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&ff(n)}function FR(e,t,n){const r=J(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function ff(e){e.O_.forEach(t=>{t.next()})}class LR{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Jr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=Jr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(t){this.key=t}}class o_{constructor(t){this.key=t}}class BR{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=rt(),this.mutatedKeys=rt(),this.na=Cy(t),this.ra=new Br(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new Nd,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,f)=>{const h=i.get(u),d=Va(this.query,f)?f:null,_=!!h&&this.mutatedKeys.has(h.key),E=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let I=!1;h&&d?h.data.isEqual(d.data)?_!==E&&(r.track({type:3,doc:d}),I=!0):this._a(h,d)||(r.track({type:2,doc:d}),I=!0,(c&&this.na(d,c)>0||l&&this.na(d,l)<0)&&(a=!0)):!h&&d?(r.track({type:0,doc:d}),I=!0):h&&!d&&(r.track({type:1,doc:h}),I=!0,(c||l)&&(a=!0)),I&&(d?(o=o.add(d),s=E?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((l,u)=>function(h,d){const _=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return _(h)-_(d)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new Jr(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Nd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=rt(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new o_(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new s_(r))}),n}ha(t){this.X_=t.ss,this.ta=rt();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return Jr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class UR{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class jR{constructor(t){this.key=t,this.Ia=!1}}class $R{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ci(a=>Ty(a),Oa),this.da=new Map,this.Aa=new Set,this.Ra=new bt(q.comparator),this.Va=new Map,this.ma=new nf,this.fa={},this.ga=new Map,this.pa=Xr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function zR(e,t){const n=ZR(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await uR(n.localStore,an(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await HR(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Jy(n.remoteStore,o)}return i}async function HR(e,t,n,r,i){e.wa=(f,h,d)=>async function(E,I,y,A){let k=I.view.sa(y);k.zi&&(k=await kd(E.localStore,I.query,!1).then(({documents:et})=>I.view.sa(et,k)));const S=A&&A.targetChanges.get(I.targetId),Q=I.view.applyChanges(k,E.isPrimaryClient,S);return Fd(E,I.targetId,Q.ca),Q.snapshot}(e,f,h,d);const s=await kd(e.localStore,t,!0),o=new BR(t,s.ss),a=o.sa(s.documents),c=Ps.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),l=o.applyChanges(a,e.isPrimaryClient,c);Fd(e,n,l.ca);const u=new UR(t,n,o);return e.Ea.set(t,u),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),l.snapshot}async function qR(e,t){const n=J(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Oa(s,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Il(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Zy(n.remoteStore,r.targetId),bl(n,r.targetId)}).catch(Ts)):(bl(n,r.targetId),await Il(n.localStore,r.targetId,!0))}async function KR(e,t,n){const r=tP(e);try{const i=await function(o,a){const c=J(o),l=Vt.now(),u=a.reduce((d,_)=>d.add(_.key),rt());let f,h;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let _=cn(),E=rt();return c.Xi.getEntries(d,u).next(I=>{_=I,_.forEach((y,A)=>{A.isValidDocument()||(E=E.add(y))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,_)).next(I=>{f=I;const y=[];for(const A of a){const k=gC(A,f.get(A.key).overlayedDocument);k!=null&&y.push(new _r(A.key,k,_y(k.value.mapValue),en.exists(!0)))}return c.mutationQueue.addMutationBatch(d,l,y,a)}).next(I=>{h=I;const y=I.applyToLocalDocumentSet(f,E);return c.documentOverlayCache.saveOverlays(d,I.batchId,y)})}).then(()=>({batchId:h.batchId,changes:Py(f)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new bt(ot)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,i.batchId,n),await xs(r,i.changes),await Ua(r.remoteStore)}catch(i){const s=uf(i,"Failed to persist write");n.reject(s)}}async function a_(e,t){const n=J(e);try{const r=await aR(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(wt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?wt(o.Ia):i.removedDocuments.size>0&&(wt(o.Ia),o.Ia=!1))}),await xs(n,r,t)}catch(r){await Ts(r)}}function Md(e,t,n){const r=J(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=J(o);c.onlineState=a;let l=!1;c.queries.forEach((u,f)=>{for(const h of f.listeners)h.N_(a)&&(l=!0)}),l&&ff(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function QR(e,t,n){const r=J(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new bt(q.comparator);o=o.insert(s,Xt.newNoDocument(s,X.min()));const a=rt().add(s),c=new Fa(X.min(),new Map,new bt(ot),o,a);await a_(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),hf(r)}else await Il(r.localStore,t,!1).then(()=>bl(r,t,n)).catch(Ts)}async function WR(e,t){const n=J(e),r=t.batch.batchId;try{const i=await oR(n.localStore,t);l_(n,r,null),c_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xs(n,i)}catch(i){await Ts(i)}}async function GR(e,t,n){const r=J(e);try{const i=await function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(f=>(wt(f!==null),u=f.keys(),c.mutationQueue.removeMutationBatch(l,f))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);l_(r,t,n),c_(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await xs(r,i)}catch(i){await Ts(i)}}function c_(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function l_(e,t,n){const r=J(e);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function bl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||u_(e,r)})}function u_(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(Zy(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),hf(e))}function Fd(e,t,n){for(const r of n)r instanceof s_?(e.ma.addReference(r.key,t),YR(e,r)):r instanceof o_?(U("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||u_(e,r.key)):W()}function YR(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(U("SyncEngine","New document in limbo: "+n),e.Aa.add(r),hf(e))}function hf(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new q(It.fromString(t)),r=e.pa.next();e.Va.set(r,new jR(n)),e.Ra=e.Ra.insert(n,r),Jy(e.remoteStore,new wn(an(Xu(n.path)),r,"TargetPurposeLimboResolution",qu.ae))}}async function xs(e,t,n){const r=J(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=sf.qi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,l){const u=J(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>P.forEach(l,h=>P.forEach(h.Li,d=>u.persistence.referenceDelegate.addReference(f,h.targetId,d)).next(()=>P.forEach(h.ki,d=>u.persistence.referenceDelegate.removeReference(f,h.targetId,d)))))}catch(f){if(!Cs(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of l){const h=f.targetId;if(!f.fromCache){const d=u.Ji.get(h),_=d.snapshotVersion,E=d.withLastLimboFreeSnapshotVersion(_);u.Ji=u.Ji.insert(h,E)}}}(r.localStore,s))}async function XR(e,t){const n=J(e);if(!n.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await Wy(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new H(C.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await xs(n,r.ts)}}function JR(e,t){const n=J(e),r=n.Va.get(t);if(r&&r.Ia)return rt().add(r.key);{let i=rt();const s=n.da.get(t);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function ZR(e){const t=J(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=a_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=JR.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=QR.bind(null,t),t.Ta.r_=MR.bind(null,t.eventManager),t.Ta.Sa=FR.bind(null,t.eventManager),t}function tP(e){const t=J(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=WR.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=GR.bind(null,t),t}class Ld{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=La(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return sR(this.persistence,new rR,t.initialUser,this.serializer)}createPersistence(t){return new eR(rf.zr,this.serializer)}createSharedClientState(t){return new hR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eP{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Md(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XR.bind(null,this.syncEngine),await kR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new OR}()}createDatastore(t){const n=La(t.databaseInfo.databaseId),r=function(s){return new gR(s)}(t.databaseInfo);return function(s,o,a,c){return new AR(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new ER(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Md(this.syncEngine,n,0),function(){return Od.v()?new Od:new dR}())}createSyncEngine(t,n){return function(i,s,o,a,c,l,u){const f=new $R(i,s,o,a,c,l);return u&&(f.ya=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=J(n);U("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Ss(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):on("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Yt.UNAUTHENTICATED,this.clientId=py.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=uf(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function bc(e,t){e.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Wy(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Bd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await sP(e);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Vd(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Vd(t.remoteStore,s)),e._onlineComponents=t}function iP(e){return e.name==="FirebaseError"?e.code===C.FAILED_PRECONDITION||e.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function sP(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await bc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!iP(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await bc(e,new Ld)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await bc(e,new Ld);return e._offlineComponents}async function f_(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Bd(e,e._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Bd(e,new eP))),e._onlineComponents}function oP(e){return f_(e).then(t=>t.syncEngine)}async function Ud(e){const t=await f_(e),n=t.eventManager;return n.onListen=zR.bind(null,t.syncEngine),n.onUnlisten=qR.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(e,t,n){if(!n)throw new H(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function aP(e,t,n,r){if(t===!0&&r===!0)throw new H(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function $d(e){if(!q.isDocumentKey(e))throw new H(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function zd(e){if(q.isDocumentKey(e))throw new H(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function df(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":W()}function Mi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new H(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=df(e);throw new H(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new H(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new H(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}aP("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=h_((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ja{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new H(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hd(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new T1;switch(r.type){case"firstParty":return new S1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jd.get(n);r&&(U("ComponentProvider","Removing Datastore"),jd.delete(n),r.terminate())}(this),Promise.resolve()}}function cP(e,t,n,r={}){var i;const s=(e=Mi(e,ja))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Yt.MOCK_USER;else{a=bw(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new H(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Yt(l)}e._authCredentials=new C1(new my(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $a(this.firestore,t,this._query)}}class Ie{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ie(this.firestore,t,this._key)}}class Sn extends $a{constructor(t,n,r){super(t,n,Xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ie(this.firestore,null,new q(t))}withConverter(t){return new Sn(this.firestore,t,this._path)}}function m_(e,t,...n){if(e=kn(e),d_("collection","path",t),e instanceof ja){const r=It.fromString(t,...n);return zd(r),new Sn(e,null,r)}{if(!(e instanceof Ie||e instanceof Sn))throw new H(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(It.fromString(t,...n));return zd(r),new Sn(e.firestore,null,r)}}function p_(e,t,...n){if(e=kn(e),arguments.length===1&&(t=py.V()),d_("doc","path",t),e instanceof ja){const r=It.fromString(t,...n);return $d(r),new Ie(e,null,new q(r))}{if(!(e instanceof Ie||e instanceof Sn))throw new H(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(It.fromString(t,...n));return $d(r),new Ie(e.firestore,e instanceof Sn?e.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Yy(this,"async_queue_retry"),this.Xa=()=>{const n=Ic();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=Ic();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=Ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new ar;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Cs(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw on("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const i=lf.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&W()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}function qd(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Ho extends ja{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new lP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||y_(this),this._firestoreClient.terminate()}}function uP(e,t){const n=typeof e=="object"?e:Bp(),r=typeof e=="string"?e:t||"(default)",i=ps(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ww("firestore");s&&cP(i,...s)}return i}function g_(e){return e._firestoreClient||y_(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function y_(e){var t,n,r;const i=e._freezeSettings(),s=function(a,c,l,u){return new j1(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,h_(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new rP(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Zr(ie.fromBase64String(t))}catch(n){throw new H(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Zr(ie.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new H(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new H(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new H(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ot(this._lat,t._lat)||ot(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=/^__.*__$/;class hP{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new _r(t,this.data,this.fieldMask,n,this.fieldTransforms):new Rs(t,this.data,n,this.fieldTransforms)}}function A_(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class gf{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new gf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return qo(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(A_(this.uu)&&fP.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class dP{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||La(t)}Ru(t,n,r,i=!1){return new gf({uu:t,methodName:n,Au:r,path:te.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mP(e){const t=e._freezeSettings(),n=La(e._databaseId);return new dP(e._databaseId,!!t.ignoreUndefinedProperties,n)}function pP(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);I_("Data must be an object, but it was:",o,r);const a=E_(r,o);let c,l;if(s.merge)c=new Re(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const h=gP(t,f,n);if(!o.contains(h))throw new H(C.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);_P(u,h)||u.push(h)}c=new Re(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new hP(new Ee(a),c,l)}function v_(e,t){if(w_(e=kn(e)))return I_("Unsupported field value:",t,e),E_(e,t);if(e instanceof __)return function(r,i){if(!A_(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=v_(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=kn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Vt.fromDate(r);return{timestampValue:$o(i.serializer,s)}}if(r instanceof Vt){const s=new Vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$o(i.serializer,s)}}if(r instanceof pf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:$y(i.serializer,r._byteString)};if(r instanceof Ie){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ef(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${df(r)}`)}(e,t)}function E_(e,t){const n={};return gy(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ai(e,(r,i)=>{const s=v_(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function w_(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Vt||e instanceof pf||e instanceof Zr||e instanceof Ie||e instanceof __)}function I_(e,t,n){if(!w_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=df(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function gP(e,t,n){if((t=kn(t))instanceof mf)return t._internalPath;if(typeof t=="string")return b_(e,t);throw qo("Field path arguments must be of type string or ",e,!1,void 0,n)}const yP=new RegExp("[~\\*/\\[\\]]");function b_(e,t,n){if(t.search(yP)>=0)throw qo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new mf(...t.split("."))._internalPath}catch{throw qo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qo(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new H(C.INVALID_ARGUMENT,a+e+c)}function _P(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new AP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(C_("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AP extends T_{data(){return super.data()}}function C_(e,t){return typeof t=="string"?b_(e,t):t instanceof mf?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new H(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class EP{convertValue(t,n="none"){switch(mr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return St(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(dr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw W()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ai(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new pf(St(t.latitude),St(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Qu(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(is(t));default:return null}}convertTimestamp(t){const n=Vn(t);return new Vt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=It.fromString(t);wt(Qy(r));const i=new ss(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||on(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class R_ extends T_{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(C_("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mo extends R_{data(t={}){return super.data(t)}}class IP{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ii(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new mo(this._firestore,this._userDataWriter,r.key,r,new Ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new mo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ii(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new mo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ii(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:bP(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bP(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}class P_ extends EP{constructor(t){super(),this.firestore=t}convertBytes(t){return new Zr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ie(this.firestore,null,n)}}function TP(e,t){const n=Mi(e.firestore,Ho),r=p_(e),i=wP(e.converter,t);return CP(n,[pP(mP(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function S_(e,...t){var n,r,i;e=kn(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||qd(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(qd(t[o])){const f=t[o];t[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),t[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),t[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let c,l,u;if(e instanceof Ie)l=Mi(e.firestore,Ho),u=Xu(e._key.path),c={next:f=>{t[o]&&t[o](RP(l,e,f))},error:t[o+1],complete:t[o+2]};else{const f=Mi(e,$a);l=Mi(f.firestore,Ho),u=f._query;const h=new P_(l);c={next:d=>{t[o]&&t[o](new IP(l,h,f,d))},error:t[o+1],complete:t[o+2]},vP(e._query)}return function(h,d,_,E){const I=new nP(E),y=new LR(d,I,_);return h.asyncQueue.enqueueAndForget(async()=>VR(await Ud(h),y)),()=>{I.Ca(),h.asyncQueue.enqueueAndForget(async()=>NR(await Ud(h),y))}}(g_(l),u,a,c)}function CP(e,t){return function(r,i){const s=new ar;return r.asyncQueue.enqueueAndForget(async()=>KR(await oP(r),i,s)),s.promise}(g_(e),t)}function RP(e,t,n){const r=n.docs.get(t._key),i=new P_(e);return new R_(e,i,t._key,r,new Ii(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){oi=i})(xI),Dn(new rn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ho(new R1(r.getProvider("auth-internal")),new k1(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new H(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ss(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),qe(ud,"4.1.0",t),qe(ud,"4.1.0","esm2017")})();const PP={apiKey:"AIzaSyDPHqqYyhuEJ7fIpRksToVYC5zbM1onZ3w",authDomain:"flex-fa8c8.firebaseapp.com",projectId:"flex-fa8c8",storageBucket:"flex-fa8c8.appspot.com",messagingSenderId:"824163771541",appId:"1:824163771541:web:83622e1bb9f3aada3f679c",measurementId:"G-SY23L7GKQC"},SP=Lp(PP),yf=uP();mT(SP);const xP=e=>S_(m_(yf,"/routines"),e),kP=(e,t)=>S_(p_(yf,"/exercises",e),t),DP=async e=>{await TP(m_(yf,"routines"),e)};function OP(e){return Rm()?(TA(e),!0):!1}function x_(e){return typeof e=="function"?e():xe(e)}const k_=typeof window<"u",Tl=()=>{},VP=NP();function NP(){var e;return k_&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function bi(e){var t;const n=x_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const D_=k_?window:void 0;function Tc(...e){let t,n,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,i]=e,t=D_):[t,n,r,i]=e,!t)return Tl;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,h,d)=>(u.addEventListener(f,h,d),()=>u.removeEventListener(f,h,d)),c=ir(()=>[bi(t),x_(i)],([u,f])=>{o(),u&&s.push(...n.flatMap(h=>r.map(d=>a(u,h,d,f))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return OP(l),l}let Kd=!1;function MP(e,t,n={}){const{window:r=D_,ignore:i=[],capture:s=!0,detectIframe:o=!1}=n;if(!r)return;VP&&!Kd&&(Kd=!0,Array.from(r.document.body.children).forEach(h=>h.addEventListener("click",Tl)),r.document.documentElement.addEventListener("click",Tl));let a=!0;const c=h=>i.some(d=>{if(typeof d=="string")return Array.from(r.document.querySelectorAll(d)).some(_=>_===h.target||h.composedPath().includes(_));{const _=bi(d);return _&&(h.target===_||h.composedPath().includes(_))}}),u=[Tc(r,"click",h=>{const d=bi(e);if(!(!d||d===h.target||h.composedPath().includes(d))){if(h.detail===0&&(a=!c(h)),!a){a=!0;return}t(h)}},{passive:!0,capture:s}),Tc(r,"pointerdown",h=>{const d=bi(e);d&&(a=!h.composedPath().includes(d)&&!c(h))},{passive:!0}),o&&Tc(r,"blur",h=>{setTimeout(()=>{var d;const _=bi(e);((d=r.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(_!=null&&_.contains(r.document.activeElement))&&t(h)},0)})].filter(Boolean);return()=>u.forEach(h=>h())}const FP={class:"page"},LP={class:"selector-container"},BP=["value"],UP={class:"exercises-container"},jP={key:0,class:"modal-bg center"},$P={__name:"Workouts",setup(e){const t=En([]),n=En({}),r=En([]),i=En(!1),s=En(null);MP(s,()=>i.value=!1);const o=()=>{xP(u=>{u.forEach(f=>{t.value.push({id:f.id,...f.data()})}),n.value=t.value[0]})},a=()=>{r.value=[],n.value[["exercises"]].forEach(u=>{kP(u,f=>{r.value.push({id:f.id,...f.data()})})})};ir(n,u=>a()),np(()=>o());const c=()=>{i.value=!1},l=u=>{if(u=="")console.log("No ha rellenado el campo");else try{DP({name:u,exercises:[]}),t.value=[],i.value=!1}catch(f){console.log("Error al añadir: ",f)}};return(u,f)=>(Dt(),Zt("div",FP,[Z("div",LP,[Zm(Z("select",{class:"selector","onUpdate:modelValue":f[0]||(f[0]=h=>n.value=h)},[(Dt(!0),Zt(ae,null,Hi(t.value,h=>(Dt(),Zt("option",{value:h},In(h.name),9,BP))),256))],512),[[P0,n.value]]),Z("img",{class:"h-9 w-9",src:KE,alt:"add",onClick:f[1]||(f[1]=h=>i.value=!0)})]),Z("div",UP,[(Dt(!0),Zt(ae,null,Hi(r.value,h=>(Dt(),ou(tw,{class:"exeCard",name:h.name,series:h.series,reps:h.reps},null,8,["name","series","reps"]))),256))]),i.value?(Dt(),Zt("div",jP,[xt(hw,{ref_key:"modal",ref:s,onCancel:c,onAccept:l},null,512)])):Yv("",!0)]))}},zP=Bn($P,[["__scopeId","data-v-c2399b14"]]),HP={},qP={class:"page"};function KP(e,t){return Dt(),Zt("div",qP,"stats")}const QP=Bn(HP,[["render",KP]]);const WP={class:"component"},GP={class:"title"},YP={class:"card"},XP={class:"row"},JP={__name:"TableData",props:{title:"",data:{type:Array,required:!0}},setup(e){const t=e;return(n,r)=>(Dt(),Zt("div",WP,[Z("h1",GP,In(t.title),1),Z("div",YP,[(Dt(!0),Zt(ae,null,Hi(t.data,i=>(Dt(),Zt("div",XP,[Z("h1",null,In(i.key),1),Z("h1",null,In(i.value),1)]))),256))])]))}},Qd=Bn(JP,[["__scopeId","data-v-a97af99a"]]);const ZP=e=>(Zl("data-v-bc960ca1"),e=e(),tu(),e),tS={class:"page"},eS=ZP(()=>Z("header",null,[Z("h1",null,"Hi, user"),Z("h3",null,"You will achive your goals")],-1)),nS={__name:"User",setup(e){const t=[{key:"Height",value:"178"},{key:"Weight",value:"88"},{key:"IMC",value:"jose"}],n=[{key:"Height",value:"178"},{key:"Weight",value:"95"},{key:"IMC",value:"25"}];return(r,i)=>(Dt(),Zt("div",tS,[eS,xt(Qd,{data:t,title:"Current Data"}),xt(Qd,{data:n,title:"Objectives"})]))}},rS=Bn(nS,[["__scopeId","data-v-bc960ca1"]]),iS=NE({history:Z0("/Flex/"),routes:[{path:"/",name:"home",component:zP},{path:"/stats",name:"stats",component:QP},{path:"/user",name:"user",component:rS}]});function Wd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wd(Object(n),!0).forEach(function(r){Nt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ko(e){"@babel/helpers - typeof";return Ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ko(e)}function sS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oS(e,t,n){return t&&Gd(e.prototype,t),n&&Gd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Nt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _f(e,t){return cS(e)||uS(e,t)||O_(e,t)||hS()}function ks(e){return aS(e)||lS(e)||O_(e)||fS()}function aS(e){if(Array.isArray(e))return Cl(e)}function cS(e){if(Array.isArray(e))return e}function lS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function O_(e,t){if(e){if(typeof e=="string")return Cl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cl(e,t)}}function Cl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Yd=function(){},Af={},V_={},N_=null,M_={mark:Yd,measure:Yd};try{typeof window<"u"&&(Af=window),typeof document<"u"&&(V_=document),typeof MutationObserver<"u"&&(N_=MutationObserver),typeof performance<"u"&&(M_=performance)}catch{}var dS=Af.navigator||{},Xd=dS.userAgent,Jd=Xd===void 0?"":Xd,Mn=Af,Et=V_,Zd=N_,Ys=M_;Mn.document;var dn=!!Et.documentElement&&!!Et.head&&typeof Et.addEventListener=="function"&&typeof Et.createElement=="function",F_=~Jd.indexOf("MSIE")||~Jd.indexOf("Trident/"),Xs,Js,Zs,to,eo,ln="___FONT_AWESOME___",Rl=16,L_="fa",B_="svg-inline--fa",pr="data-fa-i2svg",Pl="data-fa-pseudo-element",mS="data-fa-pseudo-element-pending",vf="data-prefix",Ef="data-icon",tm="fontawesome-i2svg",pS="async",gS=["HTML","HEAD","STYLE","SCRIPT"],U_=function(){try{return!0}catch{return!1}}(),At="classic",Tt="sharp",wf=[At,Tt];function Ds(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[At]}})}var ls=Ds((Xs={},Nt(Xs,At,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Nt(Xs,Tt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Xs)),us=Ds((Js={},Nt(Js,At,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Nt(Js,Tt,{solid:"fass",regular:"fasr",light:"fasl"}),Js)),fs=Ds((Zs={},Nt(Zs,At,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Nt(Zs,Tt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Zs)),yS=Ds((to={},Nt(to,At,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Nt(to,Tt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),to)),_S=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,j_="fa-layers-text",AS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vS=Ds((eo={},Nt(eo,At,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Nt(eo,Tt,{900:"fass",400:"fasr",300:"fasl"}),eo)),$_=[1,2,3,4,5,6,7,8,9,10],ES=$_.concat([11,12,13,14,15,16,17,18,19,20]),wS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],er={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hs=new Set;Object.keys(us[At]).map(hs.add.bind(hs));Object.keys(us[Tt]).map(hs.add.bind(hs));var IS=[].concat(wf,ks(hs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",er.GROUP,er.SWAP_OPACITY,er.PRIMARY,er.SECONDARY]).concat($_.map(function(e){return"".concat(e,"x")})).concat(ES.map(function(e){return"w-".concat(e)})),Fi=Mn.FontAwesomeConfig||{};function bS(e){var t=Et.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function TS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Et&&typeof Et.querySelector=="function"){var CS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];CS.forEach(function(e){var t=_f(e,2),n=t[0],r=t[1],i=TS(bS(n));i!=null&&(Fi[r]=i)})}var z_={styleDefault:"solid",familyDefault:"classic",cssPrefix:L_,replacementClass:B_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fi.familyPrefix&&(Fi.cssPrefix=Fi.familyPrefix);var ti=M(M({},z_),Fi);ti.autoReplaceSvg||(ti.observeMutations=!1);var B={};Object.keys(z_).forEach(function(e){Object.defineProperty(B,e,{enumerable:!0,set:function(n){ti[e]=n,Li.forEach(function(r){return r(B)})},get:function(){return ti[e]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(t){ti.cssPrefix=t,Li.forEach(function(n){return n(B)})},get:function(){return ti.cssPrefix}});Mn.FontAwesomeConfig=B;var Li=[];function RS(e){return Li.push(e),function(){Li.splice(Li.indexOf(e),1)}}var _n=Rl,ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function PS(e){if(!(!e||!dn)){var t=Et.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Et.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Et.head.insertBefore(t,r),e}}var SS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ds(){for(var e=12,t="";e-- >0;)t+=SS[Math.random()*62|0];return t}function ui(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function If(e){return e.classList?ui(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function H_(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(H_(e[n]),'" ')},"").trim()}function za(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function bf(e){return e.size!==ze.size||e.x!==ze.x||e.y!==ze.y||e.rotate!==ze.rotate||e.flipX||e.flipY}function kS(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function DS(e){var t=e.transform,n=e.width,r=n===void 0?Rl:n,i=e.height,s=i===void 0?Rl:i,o=e.startCentered,a=o===void 0?!1:o,c="";return a&&F_?c+="translate(".concat(t.x/_n-r/2,"em, ").concat(t.y/_n-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(t.x/_n,"em), calc(-50% + ").concat(t.y/_n,"em)) "):c+="translate(".concat(t.x/_n,"em, ").concat(t.y/_n,"em) "),c+="scale(".concat(t.size/_n*(t.flipX?-1:1),", ").concat(t.size/_n*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var OS=`:root, :host {
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
}`;function q_(){var e=L_,t=B_,n=B.cssPrefix,r=B.replacementClass,i=OS;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var em=!1;function Cc(){B.autoAddCss&&!em&&(PS(q_()),em=!0)}var VS={mixout:function(){return{dom:{css:q_,insertCss:Cc}}},hooks:function(){return{beforeDOMElementCreation:function(){Cc()},beforeI2svg:function(){Cc()}}}},un=Mn||{};un[ln]||(un[ln]={});un[ln].styles||(un[ln].styles={});un[ln].hooks||(un[ln].hooks={});un[ln].shims||(un[ln].shims=[]);var Pe=un[ln],K_=[],NS=function e(){Et.removeEventListener("DOMContentLoaded",e),Qo=1,K_.map(function(t){return t()})},Qo=!1;dn&&(Qo=(Et.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Et.readyState),Qo||Et.addEventListener("DOMContentLoaded",NS));function MS(e){dn&&(Qo?setTimeout(e,0):K_.push(e))}function Os(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?H_(e):"<".concat(t," ").concat(xS(r),">").concat(s.map(Os).join(""),"</").concat(t,">")}function nm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var FS=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Rc=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?FS(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,t[l],l,t);return u};function LS(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Sl(e){var t=LS(e);return t.length===1?t[0].toString(16):null}function BS(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function rm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function xl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=rm(t);typeof Pe.hooks.addPack=="function"&&!i?Pe.hooks.addPack(e,rm(t)):Pe.styles[e]=M(M({},Pe.styles[e]||{}),s),e==="fas"&&xl("fa",t)}var no,ro,io,xr=Pe.styles,US=Pe.shims,jS=(no={},Nt(no,At,Object.values(fs[At])),Nt(no,Tt,Object.values(fs[Tt])),no),Tf=null,Q_={},W_={},G_={},Y_={},X_={},$S=(ro={},Nt(ro,At,Object.keys(ls[At])),Nt(ro,Tt,Object.keys(ls[Tt])),ro);function zS(e){return~IS.indexOf(e)}function HS(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!zS(i)?i:null}var J_=function(){var t=function(s){return Rc(xr,function(o,a,c){return o[c]=Rc(a,s,{}),o},{})};Q_=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),W_=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),X_=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in xr||B.autoFetchSvg,r=Rc(US,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});G_=r.names,Y_=r.unicodes,Tf=Ha(B.styleDefault,{family:B.familyDefault})};RS(function(e){Tf=Ha(e.styleDefault,{family:B.familyDefault})});J_();function Cf(e,t){return(Q_[e]||{})[t]}function qS(e,t){return(W_[e]||{})[t]}function nr(e,t){return(X_[e]||{})[t]}function Z_(e){return G_[e]||{prefix:null,iconName:null}}function KS(e){var t=Y_[e],n=Cf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Fn(){return Tf}var Rf=function(){return{prefix:null,iconName:null,rest:[]}};function Ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?At:n,i=ls[r][e],s=us[r][e]||us[r][i],o=e in Pe.styles?e:null;return s||o||null}var im=(io={},Nt(io,At,Object.keys(fs[At])),Nt(io,Tt,Object.keys(fs[Tt])),io);function qa(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Nt(t,At,"".concat(B.cssPrefix,"-").concat(At)),Nt(t,Tt,"".concat(B.cssPrefix,"-").concat(Tt)),t),o=null,a=At;(e.includes(s[At])||e.some(function(l){return im[At].includes(l)}))&&(a=At),(e.includes(s[Tt])||e.some(function(l){return im[Tt].includes(l)}))&&(a=Tt);var c=e.reduce(function(l,u){var f=HS(B.cssPrefix,u);if(xr[u]?(u=jS[a].includes(u)?yS[a][u]:u,o=u,l.prefix=u):$S[a].indexOf(u)>-1?(o=u,l.prefix=Ha(u,{family:a})):f?l.iconName=f:u!==B.replacementClass&&u!==s[At]&&u!==s[Tt]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var h=o==="fa"?Z_(l.iconName):{},d=nr(l.prefix,l.iconName);h.prefix&&(o=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!xr.far&&xr.fas&&!B.autoFetchSvg&&(l.prefix="fas")}return l},Rf());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Tt&&(xr.fass||B.autoFetchSvg)&&(c.prefix="fass",c.iconName=nr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Fn()||"fas"),c}var QS=function(){function e(){sS(this,e),this.definitions={}}return oS(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),xl(a,o[a]);var c=fs[At][a];c&&xl(c,o[a]),J_()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=l)}),n[a][c]=l}),n}}]),e}(),sm=[],kr={},Ur={},WS=Object.keys(Ur);function GS(e,t){var n=t.mixoutsTo;return sm=e,kr={},Object.keys(Ur).forEach(function(r){WS.indexOf(r)===-1&&delete Ur[r]}),sm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ko(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){kr[o]||(kr[o]=[]),kr[o].push(s[o])})}r.provides&&r.provides(Ur)}),n}function kl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=kr[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=kr[e]||[];i.forEach(function(s){s.apply(null,n)})}function fn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ur[e]?Ur[e].apply(null,t):void 0}function Dl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Fn();if(t)return t=nr(n,t)||t,nm(tA.definitions,n,t)||nm(Pe.styles,n,t)}var tA=new QS,YS=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,gr("noAuto")},XS={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dn?(gr("beforeI2svg",t),fn("pseudoElements2svg",t),fn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,MS(function(){ZS({autoReplaceSvgRoot:n}),gr("watch",t)})}},JS={icon:function(t){if(t===null)return null;if(Ko(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:nr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ha(t[0]);return{prefix:r,iconName:nr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(B.cssPrefix,"-"))>-1||t.match(_S))){var i=qa(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Fn(),iconName:nr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Fn();return{prefix:s,iconName:nr(s,t)||t}}}},Ae={noAuto:YS,config:B,dom:XS,parse:JS,library:tA,findIconDefinition:Dl,toHtml:Os},ZS=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Et:n;(Object.keys(Pe.styles).length>0||B.autoFetchSvg)&&dn&&B.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function Ka(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Os(r)})}}),Object.defineProperty(e,"node",{get:function(){if(dn){var r=Et.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function t2(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(bf(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=za(M(M({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function e2(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function Pf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,h=e.watchable,d=h===void 0?!1:h,_=r.found?r:n,E=_.width,I=_.height,y=i==="fak",A=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(jt){return f.classes.indexOf(jt)===-1}).filter(function(jt){return jt!==""||!!jt}).concat(f.classes).join(" "),k={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:A,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(I)})},S=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(E/I*16*.0625,"em")}:{};d&&(k.attributes[pr]=""),c&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||ds())},children:[c]}),delete k.attributes.title);var Q=M(M({},k),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:M(M({},S),f.styles)}),et=r.found&&n.found?fn("generateAbstractMask",Q)||{children:[],attributes:{}}:fn("generateAbstractIcon",Q)||{children:[],attributes:{}},yt=et.children,le=et.attributes;return Q.children=yt,Q.attributes=le,a?e2(Q):t2(Q)}function om(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,c=a===void 0?!1:a,l=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[pr]="");var u=M({},o.styles);bf(i)&&(u.transform=DS({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=za(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function n2(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=za(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Pc=Pe.styles;function Ol(e){var t=e[0],n=e[1],r=e.slice(4),i=_f(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(er.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(er.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(er.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var r2={found:!1,width:512,height:512};function i2(e,t){!U_&&!B.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vl(e,t){var n=t;return t==="fa"&&B.styleDefault!==null&&(t=Fn()),new Promise(function(r,i){if(fn("missingIconAbstract"),n==="fa"){var s=Z_(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Pc[t]&&Pc[t][e]){var o=Pc[t][e];return r(Ol(o))}i2(e,t),r(M(M({},r2),{},{icon:B.showMissingIcons&&e?fn("missingIconAbstract")||{}:{}}))})}var am=function(){},Nl=B.measurePerformance&&Ys&&Ys.mark&&Ys.measure?Ys:{mark:am,measure:am},Ti='FA "6.4.2"',s2=function(t){return Nl.mark("".concat(Ti," ").concat(t," begins")),function(){return eA(t)}},eA=function(t){Nl.mark("".concat(Ti," ").concat(t," ends")),Nl.measure("".concat(Ti," ").concat(t),"".concat(Ti," ").concat(t," begins"),"".concat(Ti," ").concat(t," ends"))},Sf={begin:s2,end:eA},po=function(){};function cm(e){var t=e.getAttribute?e.getAttribute(pr):null;return typeof t=="string"}function o2(e){var t=e.getAttribute?e.getAttribute(vf):null,n=e.getAttribute?e.getAttribute(Ef):null;return t&&n}function a2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(B.replacementClass)}function c2(){if(B.autoReplaceSvg===!0)return go.replace;var e=go[B.autoReplaceSvg];return e||go.replace}function l2(e){return Et.createElementNS("http://www.w3.org/2000/svg",e)}function u2(e){return Et.createElement(e)}function nA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?l2:u2:n;if(typeof e=="string")return Et.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(nA(o,{ceFn:r}))}),i}function f2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var go={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(nA(i),n)}),n.getAttribute(pr)===null&&B.keepOriginalSource){var r=Et.createComment(f2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~If(n).indexOf(B.replacementClass))return go.replace(t);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===B.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Os(a)}).join(`
`);n.setAttribute(pr,""),n.innerHTML=o}};function lm(e){e()}function rA(e,t){var n=typeof t=="function"?t:po;if(e.length===0)n();else{var r=lm;B.mutateApproach===pS&&(r=Mn.requestAnimationFrame||lm),r(function(){var i=c2(),s=Sf.begin("mutate");e.map(i),s(),n()})}}var xf=!1;function iA(){xf=!0}function Ml(){xf=!1}var Wo=null;function um(e){if(Zd&&B.observeMutations){var t=e.treeCallback,n=t===void 0?po:t,r=e.nodeCallback,i=r===void 0?po:r,s=e.pseudoElementsCallback,o=s===void 0?po:s,a=e.observeMutationsRoot,c=a===void 0?Et:a;Wo=new Zd(function(l){if(!xf){var u=Fn();ui(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!cm(f.addedNodes[0])&&(B.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&B.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&cm(f.target)&&~wS.indexOf(f.attributeName))if(f.attributeName==="class"&&o2(f.target)){var h=qa(If(f.target)),d=h.prefix,_=h.iconName;f.target.setAttribute(vf,d||u),_&&f.target.setAttribute(Ef,_)}else a2(f.target)&&i(f.target)})}}),dn&&Wo.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function h2(){Wo&&Wo.disconnect()}function d2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function m2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=qa(If(e));return i.prefix||(i.prefix=Fn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=qS(i.prefix,e.innerText)||Cf(i.prefix,Sl(e.innerText))),!i.iconName&&B.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function p2(e){var t=ui(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return B.autoA11y&&(n?t["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||ds()):(t["aria-hidden"]="true",t.focusable="false")),t}function g2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=m2(e),r=n.iconName,i=n.prefix,s=n.rest,o=p2(e),a=kl("parseNodeAttributes",{},e),c=t.styleParser?d2(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var y2=Pe.styles;function sA(e){var t=B.autoReplaceSvg==="nest"?fm(e,{styleParser:!1}):fm(e);return~t.extra.classes.indexOf(j_)?fn("generateLayersText",e,t):fn("generateSvgReplacementMutation",e,t)}var Ln=new Set;wf.map(function(e){Ln.add("fa-".concat(e))});Object.keys(ls[At]).map(Ln.add.bind(Ln));Object.keys(ls[Tt]).map(Ln.add.bind(Ln));Ln=ks(Ln);function hm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dn)return Promise.resolve();var n=Et.documentElement.classList,r=function(f){return n.add("".concat(tm,"-").concat(f))},i=function(f){return n.remove("".concat(tm,"-").concat(f))},s=B.autoFetchSvg?Ln:wf.map(function(u){return"fa-".concat(u)}).concat(Object.keys(y2));s.includes("fa")||s.push("fa");var o=[".".concat(j_,":not([").concat(pr,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(pr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ui(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Sf.begin("onTree"),l=a.reduce(function(u,f){try{var h=sA(f);h&&u.push(h)}catch(d){U_||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){rA(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(h){c(),f(h)})})}function _2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sA(e).then(function(n){n&&rA([n],t)})}function A2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Dl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Dl(i||{})),e(r,M(M({},n),{},{mask:i}))}}var v2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ze:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,d=n.titleId,_=d===void 0?null:d,E=n.classes,I=E===void 0?[]:E,y=n.attributes,A=y===void 0?{}:y,k=n.styles,S=k===void 0?{}:k;if(t){var Q=t.prefix,et=t.iconName,yt=t.icon;return Ka(M({type:"icon"},t),function(){return gr("beforeDOMElementCreation",{iconDefinition:t,params:n}),B.autoA11y&&(h?A["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(_||ds()):(A["aria-hidden"]="true",A.focusable="false")),Pf({icons:{main:Ol(yt),mask:c?Ol(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Q,iconName:et,transform:M(M({},ze),i),symbol:o,title:h,maskId:u,titleId:_,extra:{attributes:A,styles:S,classes:I}})})}},E2={mixout:function(){return{icon:A2(v2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=hm,n.nodeCallback=_2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Et:r,s=n.callback,o=s===void 0?function(){}:s;return hm(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(d,_){Promise.all([Vl(i,a),u.iconName?Vl(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var I=_f(E,2),y=I[0],A=I[1];d([n,Pf({icons:{main:y,mask:A},prefix:a,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=za(a);c.length>0&&(i.style=c);var l;return bf(o)&&(l=fn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},w2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ka({type:"layer"},function(){gr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(ks(s)).join(" ")},children:o}]})}}}},I2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Ka({type:"counter",content:n},function(){return gr("beforeDOMElementCreation",{content:n,params:r}),n2({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(ks(a))}})})}}}},b2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?ze:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,h=r.styles,d=h===void 0?{}:h;return Ka({type:"text",content:n},function(){return gr("beforeDOMElementCreation",{content:n,params:r}),om({content:n,transform:M(M({},ze),s),title:a,extra:{attributes:f,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(ks(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(F_){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return B.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,om({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},T2=new RegExp('"',"ug"),dm=[1105920,1112319];function C2(e){var t=e.replace(T2,""),n=BS(t,0),r=n>=dm[0]&&n<=dm[1],i=t.length===2?t[0]===t[1]:!1;return{value:Sl(i?t[0]:t),isSecondary:r||i}}function mm(e,t){var n="".concat(mS).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=ui(e.children),o=s.filter(function(yt){return yt.getAttribute(Pl)===t})[0],a=Mn.getComputedStyle(e,t),c=a.getPropertyValue("font-family").match(AS),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?Tt:At,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?us[h][c[2].toLowerCase()]:vS[h][l],_=C2(f),E=_.value,I=_.isSecondary,y=c[0].startsWith("FontAwesome"),A=Cf(d,E),k=A;if(y){var S=KS(E);S.iconName&&S.prefix&&(A=S.iconName,d=S.prefix)}if(A&&!I&&(!o||o.getAttribute(vf)!==d||o.getAttribute(Ef)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var Q=g2(),et=Q.extra;et.attributes[Pl]=t,Vl(A,d).then(function(yt){var le=Pf(M(M({},Q),{},{icons:{main:yt,mask:Rf()},prefix:d,iconName:k,extra:et,watchable:!0})),jt=Et.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(jt,e.firstChild):e.appendChild(jt),jt.outerHTML=le.map(function(se){return Os(se)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function R2(e){return Promise.all([mm(e,"::before"),mm(e,"::after")])}function P2(e){return e.parentNode!==document.head&&!~gS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pm(e){if(dn)return new Promise(function(t,n){var r=ui(e.querySelectorAll("*")).filter(P2).map(R2),i=Sf.begin("searchPseudoElements");iA(),Promise.all(r).then(function(){i(),Ml(),t()}).catch(function(){i(),Ml(),n()})})}var S2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pm,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Et:r;B.searchPseudoElements&&pm(i)}}},gm=!1,x2={mixout:function(){return{dom:{unwatch:function(){iA(),gm=!0}}}},hooks:function(){return{bootstrap:function(){um(kl("mutationObserverCallbacks",{}))},noAuto:function(){h2()},watch:function(n){var r=n.observeMutationsRoot;gm?Ml():um(kl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ym=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},k2={mixout:function(){return{parse:{transform:function(n){return ym(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=ym(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:f,path:h};return{tag:"g",attributes:M({},d.outer),children:[{tag:"g",attributes:M({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),d.path)}]}]}}}},Sc={x:0,y:0,width:"100%",height:"100%"};function _m(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function D2(e){return e.tag==="g"?e.children:[e]}var O2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?qa(i.split(" ").map(function(o){return o.trim()})):Rf();return s.prefix||(s.prefix=Fn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,f=o.width,h=o.icon,d=kS({transform:c,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:M(M({},Sc),{},{fill:"white"})},E=u.children?{children:u.children.map(_m)}:{},I={tag:"g",attributes:M({},d.inner),children:[_m(M({tag:u.tag,attributes:M(M({},u.attributes),d.path)},E))]},y={tag:"g",attributes:M({},d.outer),children:[I]},A="mask-".concat(a||ds()),k="clip-".concat(a||ds()),S={tag:"mask",attributes:M(M({},Sc),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,y]},Q={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:D2(h)},S]};return r.push(Q,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(A,")")},Sc)}),{children:r,attributes:i}}}},V2={provides:function(t){var n=!1;Mn.matchMedia&&(n=Mn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},N2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},M2=[VS,E2,w2,I2,b2,S2,x2,k2,O2,V2,N2];GS(M2,{mixoutsTo:Ae});Ae.noAuto;Ae.config;var F2=Ae.library;Ae.dom;var Fl=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var L2=Ae.icon;Ae.layer;Ae.text;Ae.counter;function Am(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Am(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Am(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Go(e){"@babel/helpers - typeof";return Go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Go(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function U2(e,t){if(e==null)return{};var n=B2(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var j2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oA={exports:{}};(function(e){(function(t){var n=function(y,A,k){if(!l(A)||f(A)||h(A)||d(A)||c(A))return A;var S,Q=0,et=0;if(u(A))for(S=[],et=A.length;Q<et;Q++)S.push(n(y,A[Q],k));else{S={};for(var yt in A)Object.prototype.hasOwnProperty.call(A,yt)&&(S[y(yt,k)]=n(y,A[yt],k))}return S},r=function(y,A){A=A||{};var k=A.separator||"_",S=A.split||/(?=[A-Z])/;return y.split(S).join(k)},i=function(y){return _(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(A,k){return k?k.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},s=function(y){var A=i(y);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(y,A){return r(y,A).toLowerCase()},a=Object.prototype.toString,c=function(y){return typeof y=="function"},l=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},f=function(y){return a.call(y)=="[object Date]"},h=function(y){return a.call(y)=="[object RegExp]"},d=function(y){return a.call(y)=="[object Boolean]"},_=function(y){return y=y-0,y===y},E=function(y,A){var k=A&&"process"in A?A.process:A;return typeof k!="function"?y:function(S,Q){return k(S,y,Q)}},I={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(y,A){return n(E(i,A),y)},decamelizeKeys:function(y,A){return n(E(o,A),y,A)},pascalizeKeys:function(y,A){return n(E(s,A),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=I:t.humps=I})(j2)})(oA);var $2=oA.exports,z2=["class","style"];function H2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=$2.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function q2(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function aA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return aA(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=q2(u);break;case"style":c.style=H2(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=U2(n,z2);return lu(e.tag,Ze(Ze(Ze({},t),{},{class:i.class,style:Ze(Ze({},i.style),o)},i.attrs),a),r)}var cA=!1;try{cA=!0}catch{}function K2(){if(!cA&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xc(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function Q2(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function vm(e){if(e&&Go(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fl.icon)return Fl.icon(e);if(e===null)return null;if(Go(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var W2=nu({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=zt(function(){return vm(t.icon)}),s=zt(function(){return xc("classes",Q2(t))}),o=zt(function(){return xc("transform",typeof t.transform=="string"?Fl.transform(t.transform):t.transform)}),a=zt(function(){return xc("mask",vm(t.mask))}),c=zt(function(){return L2(i.value,Ze(Ze(Ze(Ze({},s.value),o.value),a.value),{},{symbol:t.symbol,title:t.title}))});ir(c,function(u){if(!u)return K2("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=zt(function(){return c.value?aA(c.value.abstract[0],{},r):null});return function(){return l.value}}}),G2={prefix:"fas",iconName:"chart-simple",icon:[448,512,[],"e473","M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"]},Y2={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},X2={prefix:"fas",iconName:"dumbbell",icon:[640,512,[],"f44b","M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"]};F2.add(Y2,X2,G2);const Qa=k0(qE);Qa.component("font-awesome-icon",W2);Qa.use(N0());Qa.use(iS);Qa.mount("#app");
