(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jl(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const _t={},Dr=[],Se=()=>{},fA=()=>!1,hA=/^on[^a-z]/,Jo=e=>hA.test(e),$l=e=>e.startsWith("onUpdate:"),Bt=Object.assign,zl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},dA=Object.prototype.hasOwnProperty,st=(e,t)=>dA.call(e,t),K=Array.isArray,Or=e=>ms(e)==="[object Map]",Zo=e=>ms(e)==="[object Set]",Nf=e=>ms(e)==="[object Date]",tt=e=>typeof e=="function",Dt=e=>typeof e=="string",Bi=e=>typeof e=="symbol",gt=e=>e!==null&&typeof e=="object",wm=e=>gt(e)&&tt(e.then)&&tt(e.catch),Im=Object.prototype.toString,ms=e=>Im.call(e),mA=e=>ms(e).slice(8,-1),bm=e=>ms(e)==="[object Object]",Hl=e=>Dt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,oo=jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ta=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},pA=/-(\w)/g,Qe=ta(e=>e.replace(pA,(t,n)=>n?n.toUpperCase():"")),gA=/\B([A-Z])/g,ei=ta(e=>e.replace(gA,"-$1").toLowerCase()),ea=ta(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xa=ta(e=>e?`on${ea(e)}`:""),Ui=(e,t)=>!Object.is(e,t),ao=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ao=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},vo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Mf;const Vc=()=>Mf||(Mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ql(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Dt(r)?vA(r):ql(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Dt(e))return e;if(gt(e))return e}}const yA=/;(?![^(]*\))/g,_A=/:([^]+)/,AA=/\/\*[^]*?\*\//g;function vA(e){const t={};return e.replace(AA,"").split(yA).forEach(n=>{if(n){const r=n.split(_A);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ps(e){let t="";if(Dt(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=ps(e[n]);r&&(t+=r+" ")}else if(gt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const EA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wA=jl(EA);function Tm(e){return!!e||e===""}function IA(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=na(e[r],t[r]);return n}function na(e,t){if(e===t)return!0;let n=Nf(e),r=Nf(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Bi(e),r=Bi(t),n||r)return e===t;if(n=K(e),r=K(t),n||r)return n&&r?IA(e,t):!1;if(n=gt(e),r=gt(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!na(e[o],t[o]))return!1}}return String(e)===String(t)}function bA(e,t){return e.findIndex(n=>na(n,t))}const bn=e=>Dt(e)?e:e==null?"":K(e)||gt(e)&&(e.toString===Im||!tt(e.toString))?JSON.stringify(e,Cm,2):String(e),Cm=(e,t)=>t&&t.__v_isRef?Cm(e,t.value):Or(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Zo(t)?{[`Set(${t.size})`]:[...t.values()]}:gt(t)&&!K(t)&&!bm(t)?String(t):t;let ge;class Rm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ge,!t&&ge&&(this.index=(ge.scopes||(ge.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ge;try{return ge=this,t()}finally{ge=n}}}on(){ge=this}off(){ge=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function TA(e){return new Rm(e)}function CA(e,t=ge){t&&t.active&&t.effects.push(e)}function Pm(){return ge}function RA(e){ge&&ge.cleanups.push(e)}const Kl=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Sm=e=>(e.w&kn)>0,xm=e=>(e.n&kn)>0,PA=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=kn},SA=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Sm(i)&&!xm(i)?i.delete(e):t[n++]=i,i.w&=~kn,i.n&=~kn}t.length=n}},Nc=new WeakMap;let yi=0,kn=1;const Mc=30;let Te;const rr=Symbol(""),Fc=Symbol("");class Ql{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,CA(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=Tn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,Tn=!0,kn=1<<++yi,yi<=Mc?PA(this):Ff(this),this.fn()}finally{yi<=Mc&&SA(this),kn=1<<--yi,Te=this.parent,Tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(Ff(this),this.onStop&&this.onStop(),this.active=!1)}}function Ff(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Tn=!0;const km=[];function ni(){km.push(Tn),Tn=!1}function ri(){const e=km.pop();Tn=e===void 0?!0:e}function me(e,t,n){if(Tn&&Te){let r=Nc.get(e);r||Nc.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Kl()),Dm(i)}}function Dm(e,t){let n=!1;yi<=Mc?xm(e)||(e.n|=kn,n=!Sm(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function rn(e,t,n,r,i,s){const o=Nc.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&K(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":K(e)?Hl(n)&&a.push(o.get("length")):(a.push(o.get(rr)),Or(e)&&a.push(o.get(Fc)));break;case"delete":K(e)||(a.push(o.get(rr)),Or(e)&&a.push(o.get(Fc)));break;case"set":Or(e)&&a.push(o.get(rr));break}if(a.length===1)a[0]&&Lc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Lc(Kl(c))}}function Lc(e,t){const n=K(e)?e:[...e];for(const r of n)r.computed&&Lf(r);for(const r of n)r.computed||Lf(r)}function Lf(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const xA=jl("__proto__,__v_isRef,__isVue"),Om=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Bi)),kA=Wl(),DA=Wl(!1,!0),OA=Wl(!0),Bf=VA();function VA(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=at(this);for(let s=0,o=this.length;s<o;s++)me(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(at)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ni();const r=at(this)[t].apply(this,n);return ri(),r}}),e}function NA(e){const t=at(this);return me(t,"has",e),t.hasOwnProperty(e)}function Wl(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?XA:Lm:t?Fm:Mm).get(r))return r;const o=K(r);if(!e){if(o&&st(Bf,i))return Reflect.get(Bf,i,s);if(i==="hasOwnProperty")return NA}const a=Reflect.get(r,i,s);return(Bi(i)?Om.has(i):xA(i))||(e||me(r,"get",i),t)?a:Qt(a)?o&&Hl(i)?a:a.value:gt(a)?e?Um(a):ia(a):a}}const MA=Vm(),FA=Vm(!0);function Vm(e=!1){return function(n,r,i,s){let o=n[r];if(jr(o)&&Qt(o)&&!Qt(i))return!1;if(!e&&(!Eo(i)&&!jr(i)&&(o=at(o),i=at(i)),!K(n)&&Qt(o)&&!Qt(i)))return o.value=i,!0;const a=K(n)&&Hl(r)?Number(r)<n.length:st(n,r),c=Reflect.set(n,r,i,s);return n===at(s)&&(a?Ui(i,o)&&rn(n,"set",r,i):rn(n,"add",r,i)),c}}function LA(e,t){const n=st(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&rn(e,"delete",t,void 0),r}function BA(e,t){const n=Reflect.has(e,t);return(!Bi(t)||!Om.has(t))&&me(e,"has",t),n}function UA(e){return me(e,"iterate",K(e)?"length":rr),Reflect.ownKeys(e)}const Nm={get:kA,set:MA,deleteProperty:LA,has:BA,ownKeys:UA},jA={get:OA,set(e,t){return!0},deleteProperty(e,t){return!0}},$A=Bt({},Nm,{get:DA,set:FA}),Gl=e=>e,ra=e=>Reflect.getPrototypeOf(e);function Ms(e,t,n=!1,r=!1){e=e.__v_raw;const i=at(e),s=at(t);n||(t!==s&&me(i,"get",t),me(i,"get",s));const{has:o}=ra(i),a=r?Gl:n?Zl:ji;if(o.call(i,t))return a(e.get(t));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(t)}function Fs(e,t=!1){const n=this.__v_raw,r=at(n),i=at(e);return t||(e!==i&&me(r,"has",e),me(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ls(e,t=!1){return e=e.__v_raw,!t&&me(at(e),"iterate",rr),Reflect.get(e,"size",e)}function Uf(e){e=at(e);const t=at(this);return ra(t).has.call(t,e)||(t.add(e),rn(t,"add",e,e)),this}function jf(e,t){t=at(t);const n=at(this),{has:r,get:i}=ra(n);let s=r.call(n,e);s||(e=at(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?Ui(t,o)&&rn(n,"set",e,t):rn(n,"add",e,t),this}function $f(e){const t=at(this),{has:n,get:r}=ra(t);let i=n.call(t,e);i||(e=at(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&rn(t,"delete",e,void 0),s}function zf(){const e=at(this),t=e.size!==0,n=e.clear();return t&&rn(e,"clear",void 0,void 0),n}function Bs(e,t){return function(r,i){const s=this,o=s.__v_raw,a=at(o),c=t?Gl:e?Zl:ji;return!e&&me(a,"iterate",rr),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Us(e,t,n){return function(...r){const i=this.__v_raw,s=at(i),o=Or(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=i[e](...r),u=n?Gl:t?Zl:ji;return!t&&me(s,"iterate",c?Fc:rr),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function _n(e){return function(...t){return e==="delete"?!1:this}}function zA(){const e={get(s){return Ms(this,s)},get size(){return Ls(this)},has:Fs,add:Uf,set:jf,delete:$f,clear:zf,forEach:Bs(!1,!1)},t={get(s){return Ms(this,s,!1,!0)},get size(){return Ls(this)},has:Fs,add:Uf,set:jf,delete:$f,clear:zf,forEach:Bs(!1,!0)},n={get(s){return Ms(this,s,!0)},get size(){return Ls(this,!0)},has(s){return Fs.call(this,s,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Bs(!0,!1)},r={get(s){return Ms(this,s,!0,!0)},get size(){return Ls(this,!0)},has(s){return Fs.call(this,s,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Us(s,!1,!1),n[s]=Us(s,!0,!1),t[s]=Us(s,!1,!0),r[s]=Us(s,!0,!0)}),[e,n,t,r]}const[HA,qA,KA,QA]=zA();function Yl(e,t){const n=t?e?QA:KA:e?qA:HA;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(st(n,i)&&i in r?n:r,i,s)}const WA={get:Yl(!1,!1)},GA={get:Yl(!1,!0)},YA={get:Yl(!0,!1)},Mm=new WeakMap,Fm=new WeakMap,Lm=new WeakMap,XA=new WeakMap;function JA(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ZA(e){return e.__v_skip||!Object.isExtensible(e)?0:JA(mA(e))}function ia(e){return jr(e)?e:Xl(e,!1,Nm,WA,Mm)}function Bm(e){return Xl(e,!1,$A,GA,Fm)}function Um(e){return Xl(e,!0,jA,YA,Lm)}function Xl(e,t,n,r,i){if(!gt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=ZA(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function Vr(e){return jr(e)?Vr(e.__v_raw):!!(e&&e.__v_isReactive)}function jr(e){return!!(e&&e.__v_isReadonly)}function Eo(e){return!!(e&&e.__v_isShallow)}function jm(e){return Vr(e)||jr(e)}function at(e){const t=e&&e.__v_raw;return t?at(t):e}function Jl(e){return Ao(e,"__v_skip",!0),e}const ji=e=>gt(e)?ia(e):e,Zl=e=>gt(e)?Um(e):e;function $m(e){Tn&&Te&&(e=at(e),Dm(e.dep||(e.dep=Kl())))}function zm(e,t){e=at(e);const n=e.dep;n&&Lc(n)}function Qt(e){return!!(e&&e.__v_isRef===!0)}function Ze(e){return Hm(e,!1)}function tv(e){return Hm(e,!0)}function Hm(e,t){return Qt(e)?e:new ev(e,t)}class ev{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:at(t),this._value=n?t:ji(t)}get value(){return $m(this),this._value}set value(t){const n=this.__v_isShallow||Eo(t)||jr(t);t=n?t:at(t),Ui(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ji(t),zm(this))}}function xe(e){return Qt(e)?e.value:e}const nv={get:(e,t,n)=>xe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Qt(i)&&!Qt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qm(e){return Vr(e)?e:new Proxy(e,nv)}class rv{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ql(t,()=>{this._dirty||(this._dirty=!0,zm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=at(this);return $m(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function iv(e,t,n=!1){let r,i;const s=tt(e);return s?(r=e,i=Se):(r=e.get,i=e.set),new rv(r,i,s||!i,n)}function Cn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){sa(s,t,n)}return i}function ke(e,t,n,r){if(tt(e)){const s=Cn(e,t,n,r);return s&&wm(s)&&s.catch(o=>{sa(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(ke(e[s],t,n,r));return i}function sa(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Cn(c,null,10,[e,o,a]);return}}sv(e,n,i,r)}function sv(e,t,n,r=!0){console.error(e)}let $i=!1,Bc=!1;const Zt=[];let Be=0;const Nr=[];let Je=null,Qn=0;const Km=Promise.resolve();let tu=null;function Qm(e){const t=tu||Km;return e?t.then(this?e.bind(this):e):t}function ov(e){let t=Be+1,n=Zt.length;for(;t<n;){const r=t+n>>>1;zi(Zt[r])<e?t=r+1:n=r}return t}function eu(e){(!Zt.length||!Zt.includes(e,$i&&e.allowRecurse?Be+1:Be))&&(e.id==null?Zt.push(e):Zt.splice(ov(e.id),0,e),Wm())}function Wm(){!$i&&!Bc&&(Bc=!0,tu=Km.then(Ym))}function av(e){const t=Zt.indexOf(e);t>Be&&Zt.splice(t,1)}function cv(e){K(e)?Nr.push(...e):(!Je||!Je.includes(e,e.allowRecurse?Qn+1:Qn))&&Nr.push(e),Wm()}function Hf(e,t=$i?Be+1:0){for(;t<Zt.length;t++){const n=Zt[t];n&&n.pre&&(Zt.splice(t,1),t--,n())}}function Gm(e){if(Nr.length){const t=[...new Set(Nr)];if(Nr.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>zi(n)-zi(r)),Qn=0;Qn<Je.length;Qn++)Je[Qn]();Je=null,Qn=0}}const zi=e=>e.id==null?1/0:e.id,lv=(e,t)=>{const n=zi(e)-zi(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ym(e){Bc=!1,$i=!0,Zt.sort(lv);const t=Se;try{for(Be=0;Be<Zt.length;Be++){const n=Zt[Be];n&&n.active!==!1&&Cn(n,null,14)}}finally{Be=0,Zt.length=0,Gm(),$i=!1,tu=null,(Zt.length||Nr.length)&&Ym()}}function uv(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||_t;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||_t;h&&(i=n.map(d=>Dt(d)?d.trim():d)),f&&(i=n.map(vo))}let a,c=r[a=Xa(t)]||r[a=Xa(Qe(t))];!c&&s&&(c=r[a=Xa(ei(t))]),c&&ke(c,e,6,i);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ke(l,e,6,i)}}function Xm(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!tt(e)){const c=l=>{const u=Xm(l,t,!0);u&&(a=!0,Bt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(gt(e)&&r.set(e,null),null):(K(s)?s.forEach(c=>o[c]=null):Bt(o,s),gt(e)&&r.set(e,o),o)}function oa(e,t){return!e||!Jo(t)?!1:(t=t.slice(2).replace(/Once$/,""),st(e,t[0].toLowerCase()+t.slice(1))||st(e,ei(t))||st(e,t))}let we=null,aa=null;function wo(e){const t=we;return we=e,aa=e&&e.type.__scopeId||null,t}function ca(e){aa=e}function la(){aa=null}function nu(e,t=we,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&eh(-1);const s=wo(t);let o;try{o=e(...i)}finally{wo(s),r._d&&eh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ja(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:d,ctx:_,inheritAttrs:E}=e;let I,y;const A=wo(e);try{if(n.shapeFlag&4){const S=i||r;I=Le(u.call(S,S,f,s,d,h,_)),y=c}else{const S=t;I=Le(S.length>1?S(s,{attrs:c,slots:a,emit:l}):S(s,null)),y=t.props?c:fv(c)}}catch(S){Ri.length=0,sa(S,e,1),I=Ct(cr)}let k=I;if(y&&E!==!1){const S=Object.keys(y),{shapeFlag:Q}=k;S.length&&Q&7&&(o&&S.some($l)&&(y=hv(y,o)),k=$r(k,y))}return n.dirs&&(k=$r(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),I=k,wo(A),I}const fv=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jo(n))&&((t||(t={}))[n]=e[n]);return t},hv=(e,t)=>{const n={};for(const r in e)(!$l(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dv(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?qf(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!oa(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?qf(r,o,l):!0:!!o;return!1}function qf(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!oa(n,s))return!0}return!1}function mv({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pv=e=>e.__isSuspense;function gv(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):cv(e)}const js={};function ir(e,t,n){return Jm(e,t,n)}function Jm(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=_t){var a;const c=Pm()===((a=Kt)==null?void 0:a.scope)?Kt:null;let l,u=!1,f=!1;if(Qt(e)?(l=()=>e.value,u=Eo(e)):Vr(e)?(l=()=>e,r=!0):K(e)?(f=!0,u=e.some(S=>Vr(S)||Eo(S)),l=()=>e.map(S=>{if(Qt(S))return S.value;if(Vr(S))return Yn(S);if(tt(S))return Cn(S,c,2)})):tt(e)?t?l=()=>Cn(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return h&&h(),ke(e,c,3,[d])}:l=Se,t&&r){const S=l;l=()=>Yn(S())}let h,d=S=>{h=A.onStop=()=>{Cn(S,c,4)}},_;if(Ki)if(d=Se,t?n&&ke(t,c,3,[l(),f?[]:void 0,d]):l(),i==="sync"){const S=c0();_=S.__watcherHandles||(S.__watcherHandles=[])}else return Se;let E=f?new Array(e.length).fill(js):js;const I=()=>{if(A.active)if(t){const S=A.run();(r||u||(f?S.some((Q,et)=>Ui(Q,E[et])):Ui(S,E)))&&(h&&h(),ke(t,c,3,[S,E===js?void 0:f&&E[0]===js?[]:E,d]),E=S)}else A.run()};I.allowRecurse=!!t;let y;i==="sync"?y=I:i==="post"?y=()=>he(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),y=()=>eu(I));const A=new Ql(l,y);t?n?I():E=A.run():i==="post"?he(A.run.bind(A),c&&c.suspense):A.run();const k=()=>{A.stop(),c&&c.scope&&zl(c.scope.effects,A)};return _&&_.push(k),k}function yv(e,t,n){const r=this.proxy,i=Dt(e)?e.includes(".")?Zm(r,e):()=>r[e]:e.bind(r,r);let s;tt(t)?s=t:(s=t.handler,n=t);const o=Kt;zr(this);const a=Jm(i,s.bind(r),n);return o?zr(o):sr(),a}function Zm(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Yn(e,t){if(!gt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Qt(e))Yn(e.value,t);else if(K(e))for(let n=0;n<e.length;n++)Yn(e[n],t);else if(Zo(e)||Or(e))e.forEach(n=>{Yn(n,t)});else if(bm(e))for(const n in e)Yn(e[n],t);return e}function tp(e,t){const n=we;if(n===null)return e;const r=da(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,a,c,l=_t]=t[s];o&&(tt(o)&&(o={mounted:o,updated:o}),o.deep&&Yn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Hn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ni(),ke(c,n,8,[e.el,a,e,t]),ri())}}function ru(e,t){return tt(e)?(()=>Bt({name:e.name},t,{setup:e}))():e}const co=e=>!!e.type.__asyncLoader,ep=e=>e.type.__isKeepAlive;function _v(e,t){np(e,"a",t)}function Av(e,t){np(e,"da",t)}function np(e,t,n=Kt){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ua(t,r,n),n){let i=n.parent;for(;i&&i.parent;)ep(i.parent.vnode)&&vv(r,t,n,i),i=i.parent}}function vv(e,t,n,r){const i=ua(t,e,r,!0);ip(()=>{zl(r[t],i)},n)}function ua(e,t,n=Kt,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;ni(),zr(n);const a=ke(t,n,e,o);return sr(),ri(),a});return r?i.unshift(s):i.push(s),s}}const dn=e=>(t,n=Kt)=>(!Ki||e==="sp")&&ua(e,(...r)=>t(...r),n),Ev=dn("bm"),rp=dn("m"),wv=dn("bu"),Iv=dn("u"),bv=dn("bum"),ip=dn("um"),Tv=dn("sp"),Cv=dn("rtg"),Rv=dn("rtc");function Pv(e,t=Kt){ua("ec",e,t)}const iu="components";function sp(e,t){return ap(iu,e,!0,t)||e}const op=Symbol.for("v-ndc");function Sv(e){return Dt(e)?ap(iu,e,!1)||e:e||op}function ap(e,t,n=!0,r=!1){const i=we||Kt;if(i){const s=i.type;if(e===iu){const a=s0(s,!1);if(a&&(a===t||a===Qe(t)||a===ea(Qe(t))))return s}const o=Kf(i[e]||s[e],t)||Kf(i.appContext[e],t);return!o&&r?s:o}}function Kf(e,t){return e&&(e[t]||e[Qe(t)]||e[ea(Qe(t))])}function Hi(e,t,n,r){let i;const s=n&&n[r];if(K(e)||Dt(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s&&s[o])}else if(gt(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,s&&s[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=t(e[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Uc=e=>e?_p(e)?da(e)||e.proxy:Uc(e.parent):null,Ci=Bt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Uc(e.parent),$root:e=>Uc(e.root),$emit:e=>e.emit,$options:e=>su(e),$forceUpdate:e=>e.f||(e.f=()=>eu(e.update)),$nextTick:e=>e.n||(e.n=Qm.bind(e.proxy)),$watch:e=>yv.bind(e)}),Za=(e,t)=>e!==_t&&!e.__isScriptSetup&&st(e,t),xv={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Za(r,t))return o[t]=1,r[t];if(i!==_t&&st(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&st(l,t))return o[t]=3,s[t];if(n!==_t&&st(n,t))return o[t]=4,n[t];jc&&(o[t]=0)}}const u=Ci[t];let f,h;if(u)return t==="$attrs"&&me(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==_t&&st(n,t))return o[t]=4,n[t];if(h=c.config.globalProperties,st(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Za(i,t)?(i[t]=n,!0):r!==_t&&st(r,t)?(r[t]=n,!0):st(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==_t&&st(e,o)||Za(t,o)||(a=s[0])&&st(a,o)||st(r,o)||st(Ci,o)||st(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:st(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Qf(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let jc=!0;function kv(e){const t=su(e),n=e.proxy,r=e.ctx;jc=!1,t.beforeCreate&&Wf(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:E,deactivated:I,beforeDestroy:y,beforeUnmount:A,destroyed:k,unmounted:S,render:Q,renderTracked:et,renderTriggered:yt,errorCaptured:le,serverPrefetch:$t,expose:se,inheritAttrs:gn,components:zn,directives:Ve,filters:fi}=t;if(l&&Dv(l,r,null),o)for(const mt in o){const ct=o[mt];tt(ct)&&(r[mt]=ct.bind(n))}if(i){const mt=i.call(n,n);gt(mt)&&(e.data=ia(mt))}if(jc=!0,s)for(const mt in s){const ct=s[mt],Ye=tt(ct)?ct.bind(n,n):tt(ct.get)?ct.get.bind(n,n):Se,yn=!tt(ct)&&tt(ct.set)?ct.set.bind(n):Se,Ne=Ht({get:Ye,set:yn});Object.defineProperty(r,mt,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:ue=>Ne.value=ue})}if(a)for(const mt in a)cp(a[mt],r,n,mt);if(c){const mt=tt(c)?c.call(n):c;Reflect.ownKeys(mt).forEach(ct=>{lo(ct,mt[ct])})}u&&Wf(u,e,"c");function Mt(mt,ct){K(ct)?ct.forEach(Ye=>mt(Ye.bind(n))):ct&&mt(ct.bind(n))}if(Mt(Ev,f),Mt(rp,h),Mt(wv,d),Mt(Iv,_),Mt(_v,E),Mt(Av,I),Mt(Pv,le),Mt(Rv,et),Mt(Cv,yt),Mt(bv,A),Mt(ip,S),Mt(Tv,$t),K(se))if(se.length){const mt=e.exposed||(e.exposed={});se.forEach(ct=>{Object.defineProperty(mt,ct,{get:()=>n[ct],set:Ye=>n[ct]=Ye})})}else e.exposed||(e.exposed={});Q&&e.render===Se&&(e.render=Q),gn!=null&&(e.inheritAttrs=gn),zn&&(e.components=zn),Ve&&(e.directives=Ve)}function Dv(e,t,n=Se){K(e)&&(e=$c(e));for(const r in e){const i=e[r];let s;gt(i)?"default"in i?s=He(i.from||r,i.default,!0):s=He(i.from||r):s=He(i),Qt(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Wf(e,t,n){ke(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function cp(e,t,n,r){const i=r.includes(".")?Zm(n,r):()=>n[r];if(Dt(e)){const s=t[e];tt(s)&&ir(i,s)}else if(tt(e))ir(i,e.bind(n));else if(gt(e))if(K(e))e.forEach(s=>cp(s,t,n,r));else{const s=tt(e.handler)?e.handler.bind(n):t[e.handler];tt(s)&&ir(i,s,e)}}function su(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>Io(c,l,o,!0)),Io(c,t,o)),gt(t)&&s.set(t,c),c}function Io(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Io(e,s,n,!0),i&&i.forEach(o=>Io(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Ov[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ov={data:Gf,props:Yf,emits:Yf,methods:_i,computed:_i,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:_i,directives:_i,watch:Nv,provide:Gf,inject:Vv};function Gf(e,t){return t?e?function(){return Bt(tt(e)?e.call(this,this):e,tt(t)?t.call(this,this):t)}:t:e}function Vv(e,t){return _i($c(e),$c(t))}function $c(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function _i(e,t){return e?Bt(Object.create(null),e,t):t}function Yf(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Bt(Object.create(null),Qf(e),Qf(t??{})):t}function Nv(e,t){if(!e)return t;if(!t)return e;const n=Bt(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function lp(){return{app:null,config:{isNativeTag:fA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mv=0;function Fv(e,t){return function(r,i=null){tt(r)||(r=Bt({},r)),i!=null&&!gt(i)&&(i=null);const s=lp(),o=new Set;let a=!1;const c=s.app={_uid:Mv++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:l0,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&tt(l.install)?(o.add(l),l.install(c,...u)):tt(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const h=Ct(r,i);return h.appContext=s,u&&t?t(h,l):e(h,l,f),a=!0,c._container=l,l.__vue_app__=c,da(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){bo=c;try{return l()}finally{bo=null}}};return c}}let bo=null;function lo(e,t){if(Kt){let n=Kt.provides;const r=Kt.parent&&Kt.parent.provides;r===n&&(n=Kt.provides=Object.create(r)),n[e]=t}}function He(e,t,n=!1){const r=Kt||we;if(r||bo){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:bo._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&tt(t)?t.call(r&&r.proxy):t}}function Lv(e,t,n,r=!1){const i={},s={};Ao(s,ha,1),e.propsDefaults=Object.create(null),up(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Bm(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Bv(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=at(i),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(oa(e.emitsOptions,h))continue;const d=t[h];if(c)if(st(s,h))d!==s[h]&&(s[h]=d,l=!0);else{const _=Qe(h);i[_]=zc(c,a,_,d,e,!1)}else d!==s[h]&&(s[h]=d,l=!0)}}}else{up(e,t,i,s)&&(l=!0);let u;for(const f in a)(!t||!st(t,f)&&((u=ei(f))===f||!st(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=zc(c,a,f,void 0,e,!0)):delete i[f]);if(s!==a)for(const f in s)(!t||!st(t,f))&&(delete s[f],l=!0)}l&&rn(e,"set","$attrs")}function up(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(oo(c))continue;const l=t[c];let u;i&&st(i,u=Qe(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:oa(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=at(n),l=a||_t;for(let u=0;u<s.length;u++){const f=s[u];n[f]=zc(i,c,f,l[f],e,!st(l,f))}}return o}function zc(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=st(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&tt(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(zr(i),r=l[n]=c.call(null,t),sr())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ei(n))&&(r=!0))}return r}function fp(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!tt(e)){const u=f=>{c=!0;const[h,d]=fp(f,t,!0);Bt(o,h),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return gt(e)&&r.set(e,Dr),Dr;if(K(s))for(let u=0;u<s.length;u++){const f=Qe(s[u]);Xf(f)&&(o[f]=_t)}else if(s)for(const u in s){const f=Qe(u);if(Xf(f)){const h=s[u],d=o[f]=K(h)||tt(h)?{type:h}:Bt({},h);if(d){const _=th(Boolean,d.type),E=th(String,d.type);d[0]=_>-1,d[1]=E<0||_<E,(_>-1||st(d,"default"))&&a.push(f)}}}const l=[o,a];return gt(e)&&r.set(e,l),l}function Xf(e){return e[0]!=="$"}function Jf(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Zf(e,t){return Jf(e)===Jf(t)}function th(e,t){return K(t)?t.findIndex(n=>Zf(n,e)):tt(t)&&Zf(t,e)?0:-1}const hp=e=>e[0]==="_"||e==="$stable",ou=e=>K(e)?e.map(Le):[Le(e)],Uv=(e,t,n)=>{if(t._n)return t;const r=nu((...i)=>ou(t(...i)),n);return r._c=!1,r},dp=(e,t,n)=>{const r=e._ctx;for(const i in e){if(hp(i))continue;const s=e[i];if(tt(s))t[i]=Uv(i,s,r);else if(s!=null){const o=ou(s);t[i]=()=>o}}},mp=(e,t)=>{const n=ou(t);e.slots.default=()=>n},jv=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=at(t),Ao(t,"_",n)):dp(t,e.slots={})}else e.slots={},t&&mp(e,t);Ao(e.slots,ha,1)},$v=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=_t;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Bt(i,t),!n&&a===1&&delete i._):(s=!t.$stable,dp(t,i)),o=t}else t&&(mp(e,t),o={default:1});if(s)for(const a in i)!hp(a)&&!(a in o)&&delete i[a]};function Hc(e,t,n,r,i=!1){if(K(e)){e.forEach((h,d)=>Hc(h,t&&(K(t)?t[d]:t),n,r,i));return}if(co(r)&&!i)return;const s=r.shapeFlag&4?da(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,l=t&&t.r,u=a.refs===_t?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Dt(l)?(u[l]=null,st(f,l)&&(f[l]=null)):Qt(l)&&(l.value=null)),tt(c))Cn(c,a,12,[o,u]);else{const h=Dt(c),d=Qt(c);if(h||d){const _=()=>{if(e.f){const E=h?st(f,c)?f[c]:u[c]:c.value;i?K(E)&&zl(E,s):K(E)?E.includes(s)||E.push(s):h?(u[c]=[s],st(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else h?(u[c]=o,st(f,c)&&(f[c]=o)):d&&(c.value=o,e.k&&(u[e.k]=o))};o?(_.id=-1,he(_,n)):_()}}}const he=gv;function zv(e){return Hv(e)}function Hv(e,t){const n=Vc();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Se,insertStaticContent:_}=e,E=(m,p,g,v=null,b=null,T=null,N=!1,x=null,D=!!p.dynamicChildren)=>{if(m===p)return;m&&!di(m,p)&&(v=w(m),ue(m,b,T,!0),m=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:R,ref:$,shapeFlag:L}=p;switch(R){case fa:I(m,p,g,v);break;case cr:y(m,p,g,v);break;case tc:m==null&&A(p,g,v,N);break;case ae:zn(m,p,g,v,b,T,N,x,D);break;default:L&1?Q(m,p,g,v,b,T,N,x,D):L&6?Ve(m,p,g,v,b,T,N,x,D):(L&64||L&128)&&R.process(m,p,g,v,b,T,N,x,D,O)}$!=null&&b&&Hc($,m&&m.ref,T,p||m,!p)},I=(m,p,g,v)=>{if(m==null)r(p.el=a(p.children),g,v);else{const b=p.el=m.el;p.children!==m.children&&l(b,p.children)}},y=(m,p,g,v)=>{m==null?r(p.el=c(p.children||""),g,v):p.el=m.el},A=(m,p,g,v)=>{[m.el,m.anchor]=_(m.children,p,g,v,m.el,m.anchor)},k=({el:m,anchor:p},g,v)=>{let b;for(;m&&m!==p;)b=h(m),r(m,g,v),m=b;r(p,g,v)},S=({el:m,anchor:p})=>{let g;for(;m&&m!==p;)g=h(m),i(m),m=g;i(p)},Q=(m,p,g,v,b,T,N,x,D)=>{N=N||p.type==="svg",m==null?et(p,g,v,b,T,N,x,D):$t(m,p,b,T,N,x,D)},et=(m,p,g,v,b,T,N,x)=>{let D,R;const{type:$,props:L,shapeFlag:z,transition:Y,dirs:nt}=m;if(D=m.el=o(m.type,T,L&&L.is,L),z&8?u(D,m.children):z&16&&le(m.children,D,null,v,b,T&&$!=="foreignObject",N,x),nt&&Hn(m,null,v,"created"),yt(D,m,m.scopeId,N,v),L){for(const dt in L)dt!=="value"&&!oo(dt)&&s(D,dt,null,L[dt],T,m.children,v,b,Gt);"value"in L&&s(D,"value",null,L.value),(R=L.onVnodeBeforeMount)&&Fe(R,v,m)}nt&&Hn(m,null,v,"beforeMount");const pt=(!b||b&&!b.pendingBranch)&&Y&&!Y.persisted;pt&&Y.beforeEnter(D),r(D,p,g),((R=L&&L.onVnodeMounted)||pt||nt)&&he(()=>{R&&Fe(R,v,m),pt&&Y.enter(D),nt&&Hn(m,null,v,"mounted")},b)},yt=(m,p,g,v,b)=>{if(g&&d(m,g),v)for(let T=0;T<v.length;T++)d(m,v[T]);if(b){let T=b.subTree;if(p===T){const N=b.vnode;yt(m,N,N.scopeId,N.slotScopeIds,b.parent)}}},le=(m,p,g,v,b,T,N,x,D=0)=>{for(let R=D;R<m.length;R++){const $=m[R]=x?En(m[R]):Le(m[R]);E(null,$,p,g,v,b,T,N,x)}},$t=(m,p,g,v,b,T,N)=>{const x=p.el=m.el;let{patchFlag:D,dynamicChildren:R,dirs:$}=p;D|=m.patchFlag&16;const L=m.props||_t,z=p.props||_t;let Y;g&&qn(g,!1),(Y=z.onVnodeBeforeUpdate)&&Fe(Y,g,p,m),$&&Hn(p,m,g,"beforeUpdate"),g&&qn(g,!0);const nt=b&&p.type!=="foreignObject";if(R?se(m.dynamicChildren,R,x,g,v,nt,T):N||ct(m,p,x,null,g,v,nt,T,!1),D>0){if(D&16)gn(x,p,L,z,g,v,b);else if(D&2&&L.class!==z.class&&s(x,"class",null,z.class,b),D&4&&s(x,"style",L.style,z.style,b),D&8){const pt=p.dynamicProps;for(let dt=0;dt<pt.length;dt++){const St=pt[dt],be=L[St],Ir=z[St];(Ir!==be||St==="value")&&s(x,St,be,Ir,b,m.children,g,v,Gt)}}D&1&&m.children!==p.children&&u(x,p.children)}else!N&&R==null&&gn(x,p,L,z,g,v,b);((Y=z.onVnodeUpdated)||$)&&he(()=>{Y&&Fe(Y,g,p,m),$&&Hn(p,m,g,"updated")},v)},se=(m,p,g,v,b,T,N)=>{for(let x=0;x<p.length;x++){const D=m[x],R=p[x],$=D.el&&(D.type===ae||!di(D,R)||D.shapeFlag&70)?f(D.el):g;E(D,R,$,null,v,b,T,N,!0)}},gn=(m,p,g,v,b,T,N)=>{if(g!==v){if(g!==_t)for(const x in g)!oo(x)&&!(x in v)&&s(m,x,g[x],null,N,p.children,b,T,Gt);for(const x in v){if(oo(x))continue;const D=v[x],R=g[x];D!==R&&x!=="value"&&s(m,x,R,D,N,p.children,b,T,Gt)}"value"in v&&s(m,"value",g.value,v.value)}},zn=(m,p,g,v,b,T,N,x,D)=>{const R=p.el=m?m.el:a(""),$=p.anchor=m?m.anchor:a("");let{patchFlag:L,dynamicChildren:z,slotScopeIds:Y}=p;Y&&(x=x?x.concat(Y):Y),m==null?(r(R,g,v),r($,g,v),le(p.children,g,$,b,T,N,x,D)):L>0&&L&64&&z&&m.dynamicChildren?(se(m.dynamicChildren,z,g,b,T,N,x),(p.key!=null||b&&p===b.subTree)&&pp(m,p,!0)):ct(m,p,g,$,b,T,N,x,D)},Ve=(m,p,g,v,b,T,N,x,D)=>{p.slotScopeIds=x,m==null?p.shapeFlag&512?b.ctx.activate(p,g,v,N,D):fi(p,g,v,b,T,N,D):vr(m,p,D)},fi=(m,p,g,v,b,T,N)=>{const x=m.component=t0(m,v,b);if(ep(m)&&(x.ctx.renderer=O),e0(x),x.asyncDep){if(b&&b.registerDep(x,Mt),!m.el){const D=x.subTree=Ct(cr);y(null,D,p,g)}return}Mt(x,m,p,g,b,T,N)},vr=(m,p,g)=>{const v=p.component=m.component;if(dv(m,p,g))if(v.asyncDep&&!v.asyncResolved){mt(v,p,g);return}else v.next=p,av(v.update),v.update();else p.el=m.el,v.vnode=p},Mt=(m,p,g,v,b,T,N)=>{const x=()=>{if(m.isMounted){let{next:$,bu:L,u:z,parent:Y,vnode:nt}=m,pt=$,dt;qn(m,!1),$?($.el=nt.el,mt(m,$,N)):$=nt,L&&ao(L),(dt=$.props&&$.props.onVnodeBeforeUpdate)&&Fe(dt,Y,$,nt),qn(m,!0);const St=Ja(m),be=m.subTree;m.subTree=St,E(be,St,f(be.el),w(be),m,b,T),$.el=St.el,pt===null&&mv(m,St.el),z&&he(z,b),(dt=$.props&&$.props.onVnodeUpdated)&&he(()=>Fe(dt,Y,$,nt),b)}else{let $;const{el:L,props:z}=p,{bm:Y,m:nt,parent:pt}=m,dt=co(p);if(qn(m,!1),Y&&ao(Y),!dt&&($=z&&z.onVnodeBeforeMount)&&Fe($,pt,p),qn(m,!0),L&&lt){const St=()=>{m.subTree=Ja(m),lt(L,m.subTree,m,b,null)};dt?p.type.__asyncLoader().then(()=>!m.isUnmounted&&St()):St()}else{const St=m.subTree=Ja(m);E(null,St,g,v,m,b,T),p.el=St.el}if(nt&&he(nt,b),!dt&&($=z&&z.onVnodeMounted)){const St=p;he(()=>Fe($,pt,St),b)}(p.shapeFlag&256||pt&&co(pt.vnode)&&pt.vnode.shapeFlag&256)&&m.a&&he(m.a,b),m.isMounted=!0,p=g=v=null}},D=m.effect=new Ql(x,()=>eu(R),m.scope),R=m.update=()=>D.run();R.id=m.uid,qn(m,!0),R()},mt=(m,p,g)=>{p.component=m;const v=m.vnode.props;m.vnode=p,m.next=null,Bv(m,p.props,v,g),$v(m,p.children,g),ni(),Hf(),ri()},ct=(m,p,g,v,b,T,N,x,D=!1)=>{const R=m&&m.children,$=m?m.shapeFlag:0,L=p.children,{patchFlag:z,shapeFlag:Y}=p;if(z>0){if(z&128){yn(R,L,g,v,b,T,N,x,D);return}else if(z&256){Ye(R,L,g,v,b,T,N,x,D);return}}Y&8?($&16&&Gt(R,b,T),L!==R&&u(g,L)):$&16?Y&16?yn(R,L,g,v,b,T,N,x,D):Gt(R,b,T,!0):($&8&&u(g,""),Y&16&&le(L,g,v,b,T,N,x,D))},Ye=(m,p,g,v,b,T,N,x,D)=>{m=m||Dr,p=p||Dr;const R=m.length,$=p.length,L=Math.min(R,$);let z;for(z=0;z<L;z++){const Y=p[z]=D?En(p[z]):Le(p[z]);E(m[z],Y,g,null,b,T,N,x,D)}R>$?Gt(m,b,T,!0,!1,L):le(p,g,v,b,T,N,x,D,L)},yn=(m,p,g,v,b,T,N,x,D)=>{let R=0;const $=p.length;let L=m.length-1,z=$-1;for(;R<=L&&R<=z;){const Y=m[R],nt=p[R]=D?En(p[R]):Le(p[R]);if(di(Y,nt))E(Y,nt,g,null,b,T,N,x,D);else break;R++}for(;R<=L&&R<=z;){const Y=m[L],nt=p[z]=D?En(p[z]):Le(p[z]);if(di(Y,nt))E(Y,nt,g,null,b,T,N,x,D);else break;L--,z--}if(R>L){if(R<=z){const Y=z+1,nt=Y<$?p[Y].el:v;for(;R<=z;)E(null,p[R]=D?En(p[R]):Le(p[R]),g,nt,b,T,N,x,D),R++}}else if(R>z)for(;R<=L;)ue(m[R],b,T,!0),R++;else{const Y=R,nt=R,pt=new Map;for(R=nt;R<=z;R++){const pe=p[R]=D?En(p[R]):Le(p[R]);pe.key!=null&&pt.set(pe.key,R)}let dt,St=0;const be=z-nt+1;let Ir=!1,Df=0;const hi=new Array(be);for(R=0;R<be;R++)hi[R]=0;for(R=Y;R<=L;R++){const pe=m[R];if(St>=be){ue(pe,b,T,!0);continue}let Me;if(pe.key!=null)Me=pt.get(pe.key);else for(dt=nt;dt<=z;dt++)if(hi[dt-nt]===0&&di(pe,p[dt])){Me=dt;break}Me===void 0?ue(pe,b,T,!0):(hi[Me-nt]=R+1,Me>=Df?Df=Me:Ir=!0,E(pe,p[Me],g,null,b,T,N,x,D),St++)}const Of=Ir?qv(hi):Dr;for(dt=Of.length-1,R=be-1;R>=0;R--){const pe=nt+R,Me=p[pe],Vf=pe+1<$?p[pe+1].el:v;hi[R]===0?E(null,Me,g,Vf,b,T,N,x,D):Ir&&(dt<0||R!==Of[dt]?Ne(Me,g,Vf,2):dt--)}}},Ne=(m,p,g,v,b=null)=>{const{el:T,type:N,transition:x,children:D,shapeFlag:R}=m;if(R&6){Ne(m.component.subTree,p,g,v);return}if(R&128){m.suspense.move(p,g,v);return}if(R&64){N.move(m,p,g,O);return}if(N===ae){r(T,p,g);for(let L=0;L<D.length;L++)Ne(D[L],p,g,v);r(m.anchor,p,g);return}if(N===tc){k(m,p,g);return}if(v!==2&&R&1&&x)if(v===0)x.beforeEnter(T),r(T,p,g),he(()=>x.enter(T),b);else{const{leave:L,delayLeave:z,afterLeave:Y}=x,nt=()=>r(T,p,g),pt=()=>{L(T,()=>{nt(),Y&&Y()})};z?z(T,nt,pt):pt()}else r(T,p,g)},ue=(m,p,g,v=!1,b=!1)=>{const{type:T,props:N,ref:x,children:D,dynamicChildren:R,shapeFlag:$,patchFlag:L,dirs:z}=m;if(x!=null&&Hc(x,null,g,m,!0),$&256){p.ctx.deactivate(m);return}const Y=$&1&&z,nt=!co(m);let pt;if(nt&&(pt=N&&N.onVnodeBeforeUnmount)&&Fe(pt,p,m),$&6)Ns(m.component,g,v);else{if($&128){m.suspense.unmount(g,v);return}Y&&Hn(m,null,p,"beforeUnmount"),$&64?m.type.remove(m,p,g,b,O,v):R&&(T!==ae||L>0&&L&64)?Gt(R,p,g,!1,!0):(T===ae&&L&384||!b&&$&16)&&Gt(D,p,g),v&&Er(m)}(nt&&(pt=N&&N.onVnodeUnmounted)||Y)&&he(()=>{pt&&Fe(pt,p,m),Y&&Hn(m,null,p,"unmounted")},g)},Er=m=>{const{type:p,el:g,anchor:v,transition:b}=m;if(p===ae){wr(g,v);return}if(p===tc){S(m);return}const T=()=>{i(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(m.shapeFlag&1&&b&&!b.persisted){const{leave:N,delayLeave:x}=b,D=()=>N(g,T);x?x(m.el,T,D):D()}else T()},wr=(m,p)=>{let g;for(;m!==p;)g=h(m),i(m),m=g;i(p)},Ns=(m,p,g)=>{const{bum:v,scope:b,update:T,subTree:N,um:x}=m;v&&ao(v),b.stop(),T&&(T.active=!1,ue(N,m,p,g)),x&&he(x,p),he(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Gt=(m,p,g,v=!1,b=!1,T=0)=>{for(let N=T;N<m.length;N++)ue(m[N],p,g,v,b)},w=m=>m.shapeFlag&6?w(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),F=(m,p,g)=>{m==null?p._vnode&&ue(p._vnode,null,null,!0):E(p._vnode||null,m,p,null,null,null,g),Hf(),Gm(),p._vnode=m},O={p:E,um:ue,m:Ne,r:Er,mt:fi,mc:le,pc:ct,pbc:se,n:w,o:e};let j,lt;return t&&([j,lt]=t(O)),{render:F,hydrate:j,createApp:Fv(F,j)}}function qn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function pp(e,t,n=!1){const r=e.children,i=t.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=En(i[s]),a.el=o.el),n||pp(o,a)),a.type===fa&&(a.el=o.el)}}function qv(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const Kv=e=>e.__isTeleport,ae=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),tc=Symbol.for("v-stc"),Ri=[];let Ce=null;function Pt(e=!1){Ri.push(Ce=e?null:[])}function Qv(){Ri.pop(),Ce=Ri[Ri.length-1]||null}let qi=1;function eh(e){qi+=e}function gp(e){return e.dynamicChildren=qi>0?Ce||Dr:null,Qv(),qi>0&&Ce&&Ce.push(e),e}function Lt(e,t,n,r,i,s){return gp(J(e,t,n,r,i,s,!0))}function au(e,t,n,r,i){return gp(Ct(e,t,n,r,i,!0))}function qc(e){return e?e.__v_isVNode===!0:!1}function di(e,t){return e.type===t.type&&e.key===t.key}const ha="__vInternal",yp=({key:e})=>e??null,uo=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Dt(e)||Qt(e)||tt(e)?{i:we,r:e,k:t,f:!!n}:e:null);function J(e,t=null,n=null,r=0,i=null,s=e===ae?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yp(t),ref:t&&uo(t),scopeId:aa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:we};return a?(cu(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Dt(n)?8:16),qi>0&&!o&&Ce&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ce.push(c),c}const Ct=Wv;function Wv(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===op)&&(e=cr),qc(e)){const a=$r(e,t,!0);return n&&cu(a,n),qi>0&&!s&&Ce&&(a.shapeFlag&6?Ce[Ce.indexOf(e)]=a:Ce.push(a)),a.patchFlag|=-2,a}if(o0(e)&&(e=e.__vccOpts),t){t=Gv(t);let{class:a,style:c}=t;a&&!Dt(a)&&(t.class=ps(a)),gt(c)&&(jm(c)&&!K(c)&&(c=Bt({},c)),t.style=ql(c))}const o=Dt(e)?1:pv(e)?128:Kv(e)?64:gt(e)?4:tt(e)?2:0;return J(e,t,n,r,i,o,s,!0)}function Gv(e){return e?jm(e)||ha in e?Bt({},e):e:null}function $r(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?Xv(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&yp(a),ref:t&&t.ref?n&&i?K(i)?i.concat(uo(t)):[i,uo(t)]:uo(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ae?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$r(e.ssContent),ssFallback:e.ssFallback&&$r(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function fo(e=" ",t=0){return Ct(fa,null,e,t)}function Yv(e="",t=!1){return t?(Pt(),au(cr,null,e)):Ct(cr,null,e)}function Le(e){return e==null||typeof e=="boolean"?Ct(cr):K(e)?Ct(ae,null,e.slice()):typeof e=="object"?En(e):Ct(fa,null,String(e))}function En(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$r(e)}function cu(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),cu(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(ha in t)?t._ctx=we:i===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else tt(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[fo(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xv(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=ps([t.class,r.class]));else if(i==="style")t.style=ql([t.style,r.style]);else if(Jo(i)){const s=t[i],o=r[i];o&&s!==o&&!(K(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function Fe(e,t,n,r=null){ke(e,t,7,[n,r])}const Jv=lp();let Zv=0;function t0(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Jv,s={uid:Zv++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fp(r,i),emitsOptions:Xm(r,i),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:r.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=uv.bind(null,s),e.ce&&e.ce(s),s}let Kt=null,lu,br,nh="__VUE_INSTANCE_SETTERS__";(br=Vc()[nh])||(br=Vc()[nh]=[]),br.push(e=>Kt=e),lu=e=>{br.length>1?br.forEach(t=>t(e)):br[0](e)};const zr=e=>{lu(e),e.scope.on()},sr=()=>{Kt&&Kt.scope.off(),lu(null)};function _p(e){return e.vnode.shapeFlag&4}let Ki=!1;function e0(e,t=!1){Ki=t;const{props:n,children:r}=e.vnode,i=_p(e);Lv(e,n,i,t),jv(e,r);const s=i?n0(e,t):void 0;return Ki=!1,s}function n0(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Jl(new Proxy(e.ctx,xv));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?i0(e):null;zr(e),ni();const s=Cn(r,e,0,[e.props,i]);if(ri(),sr(),wm(s)){if(s.then(sr,sr),t)return s.then(o=>{rh(e,o,t)}).catch(o=>{sa(o,e,0)});e.asyncDep=s}else rh(e,s,t)}else Ap(e,t)}function rh(e,t,n){tt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:gt(t)&&(e.setupState=qm(t)),Ap(e,n)}let ih;function Ap(e,t,n){const r=e.type;if(!e.render){if(!t&&ih&&!r.render){const i=r.template||su(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Bt(Bt({isCustomElement:s,delimiters:a},o),c);r.render=ih(i,l)}}e.render=r.render||Se}zr(e),ni(),kv(e),ri(),sr()}function r0(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function i0(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return r0(e)},slots:e.slots,emit:e.emit,expose:t}}function da(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(qm(Jl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ci)return Ci[n](e)},has(t,n){return n in t||n in Ci}}))}function s0(e,t=!0){return tt(e)?e.displayName||e.name:e.name||t&&e.__name}function o0(e){return tt(e)&&"__vccOpts"in e}const Ht=(e,t)=>iv(e,t,Ki);function uu(e,t,n){const r=arguments.length;return r===2?gt(t)&&!K(t)?qc(t)?Ct(e,null,[t]):Ct(e,t):Ct(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qc(n)&&(n=[n]),Ct(e,t,n))}const a0=Symbol.for("v-scx"),c0=()=>He(a0),l0="3.3.4",u0="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,sh=Wn&&Wn.createElement("template"),f0={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Wn.createElementNS(u0,e):Wn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Wn.createTextNode(e),createComment:e=>Wn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Wn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{sh.innerHTML=r?`<svg>${e}</svg>`:e;const a=sh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function h0(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d0(e,t,n){const r=e.style,i=Dt(n);if(n&&!i){if(t&&!Dt(t))for(const s in t)n[s]==null&&Kc(r,s,"");for(const s in n)Kc(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const oh=/\s*!important$/;function Kc(e,t,n){if(K(n))n.forEach(r=>Kc(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=m0(e,t);oh.test(n)?e.setProperty(ei(r),n.replace(oh,""),"important"):e[r]=n}}const ah=["Webkit","Moz","ms"],ec={};function m0(e,t){const n=ec[t];if(n)return n;let r=Qe(t);if(r!=="filter"&&r in e)return ec[t]=r;r=ea(r);for(let i=0;i<ah.length;i++){const s=ah[i]+r;if(s in e)return ec[t]=s}return t}const ch="http://www.w3.org/1999/xlink";function p0(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ch,t.slice(6,t.length)):e.setAttributeNS(ch,t,n);else{const s=wA(t);n==null||s&&!Tm(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function g0(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Tm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Gn(e,t,n,r){e.addEventListener(t,n,r)}function y0(e,t,n,r){e.removeEventListener(t,n,r)}function _0(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[a,c]=A0(t);if(r){const l=s[t]=w0(r,i);Gn(e,a,l,c)}else o&&(y0(e,a,o,c),s[t]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function A0(e){let t;if(lh.test(e)){t={};let r;for(;r=e.match(lh);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ei(e.slice(2)),t]}let nc=0;const v0=Promise.resolve(),E0=()=>nc||(v0.then(()=>nc=0),nc=Date.now());function w0(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ke(I0(r,n.value),t,5,[r])};return n.value=e,n.attached=E0(),n}function I0(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const uh=/^on[a-z]/,b0=(e,t,n,r,i=!1,s,o,a,c)=>{t==="class"?h0(e,r,i):t==="style"?d0(e,n,r):Jo(t)?$l(t)||_0(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):T0(e,t,r,i))?g0(e,t,r,s,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),p0(e,t,r,i))};function T0(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&uh.test(t)&&tt(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||uh.test(t)&&Dt(n)?!1:t in e}const To=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>ao(t,n):t};function C0(e){e.target.composing=!0}function fh(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const R0={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=To(i);const s=r||i.props&&i.props.type==="number";Gn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=vo(a)),e._assign(a)}),n&&Gn(e,"change",()=>{e.value=e.value.trim()}),t||(Gn(e,"compositionstart",C0),Gn(e,"compositionend",fh),Gn(e,"change",fh))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=To(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&vo(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},P0={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const i=Zo(t);Gn(e,"change",()=>{const s=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?vo(Co(o)):Co(o));e._assign(e.multiple?i?new Set(s):s:s[0])}),e._assign=To(r)},mounted(e,{value:t}){hh(e,t)},beforeUpdate(e,t,n){e._assign=To(n)},updated(e,{value:t}){hh(e,t)}};function hh(e,t){const n=e.multiple;if(!(n&&!K(t)&&!Zo(t))){for(let r=0,i=e.options.length;r<i;r++){const s=e.options[r],o=Co(s);if(n)K(t)?s.selected=bA(t,o)>-1:s.selected=t.has(o);else if(na(Co(s),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Co(e){return"_value"in e?e._value:e.value}const S0=Bt({patchProp:b0},f0);let dh;function x0(){return dh||(dh=zv(S0))}const k0=(...e)=>{const t=x0().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=D0(r);if(!i)return;const s=t._component;!tt(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function D0(e){return Dt(e)?document.querySelector(e):e}var O0=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const V0=Symbol();var mh;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(mh||(mh={}));function N0(){const e=TA(!0),t=e.run(()=>Ze({}));let n=[],r=[];const i=Jl({install(s){i._a=s,s.provide(V0,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!O0?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Cr=typeof window<"u";function M0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ft=Object.assign;function rc(e,t){const n={};for(const r in t){const i=t[r];n[r]=De(i)?i.map(e):e(i)}return n}const Pi=()=>{},De=Array.isArray,F0=/\/$/,L0=e=>e.replace(F0,"");function ic(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=$0(r??t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function B0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ph(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function U0(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Hr(t.matched[r],n.matched[i])&&vp(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Hr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!j0(e[n],t[n]))return!1;return!0}function j0(e,t){return De(e)?gh(e,t):De(t)?gh(t,e):e===t}function gh(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function $0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Qi;(function(e){e.pop="pop",e.push="push"})(Qi||(Qi={}));var Si;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Si||(Si={}));function z0(e){if(!e)if(Cr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),L0(e)}const H0=/^[^#]+#/;function q0(e,t){return e.replace(H0,"#")+t}function K0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function Q0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=K0(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function yh(e,t){return(history.state?history.state.position-t:-1)+e}const Qc=new Map;function W0(e,t){Qc.set(e,t)}function G0(e){const t=Qc.get(e);return Qc.delete(e),t}let Y0=()=>location.protocol+"//"+location.host;function Ep(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),ph(c,"")}return ph(n,e)+r+i}function X0(e,t,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const d=Ep(e,location),_=n.value,E=t.value;let I=0;if(h){if(n.value=d,t.value=h,o&&o===_){o=null;return}I=E?h.position-E.position:0}else r(d);i.forEach(y=>{y(n.value,_,{delta:I,type:Qi.pop,direction:I?I>0?Si.forward:Si.back:Si.unknown})})};function c(){o=n.value}function l(h){i.push(h);const d=()=>{const _=i.indexOf(h);_>-1&&i.splice(_,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(ft({},h.state,{scroll:ma()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function _h(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ma():null}}function J0(e){const{history:t,location:n}=window,r={value:Ep(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Y0()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(c,l){const u=ft({},t.state,_h(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=ft({},i.value,t.state,{forward:c,scroll:ma()});s(u.current,u,!0);const f=ft({},_h(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function Z0(e){e=z0(e);const t=J0(e),n=X0(e,t.state,t.location,t.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ft({location:"",base:e,go:r,createHref:q0.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function tE(e){return typeof e=="string"||e&&typeof e=="object"}function wp(e){return typeof e=="string"||typeof e=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ip=Symbol("");var Ah;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ah||(Ah={}));function qr(e,t){return ft(new Error,{type:e,[Ip]:!0},t)}function Xe(e,t){return e instanceof Error&&Ip in e&&(t==null||!!(e.type&t))}const vh="[^/]+?",eE={sensitive:!1,strict:!1,start:!0,end:!0},nE=/[.+*?^${}()[\]/\\]/g;function rE(e,t){const n=ft({},eE,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(nE,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:E,optional:I,regexp:y}=h;s.push({name:_,repeatable:E,optional:I});const A=y||vh;if(A!==vh){d+=10;try{new RegExp(`(${A})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+S.message)}}let k=E?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(k=I&&l.length<2?`(?:/${k})`:"/"+k),I&&(k+="?"),i+=k,d+=20,I&&(d+=-8),E&&(d+=-20),A===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:E,optional:I}=d,y=_ in l?l[_]:"";if(De(y)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=De(y)?y.join("/"):y;if(!A)if(I)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function iE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function sE(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=iE(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Eh(r))return 1;if(Eh(i))return-1}return i.length-r.length}function Eh(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const oE={type:0,value:""},aE=/[a-zA-Z0-9_]/;function cE(e){if(!e)return[[]];if(e==="/")return[[oE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:aE.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function lE(e,t,n){const r=rE(cE(e.path),n),i=ft(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function uE(e,t){const n=[],r=new Map;t=bh({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,h){const d=!h,_=fE(u);_.aliasOf=h&&h.record;const E=bh(t,u),I=[_];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of k)I.push(ft({},_,{components:h?h.record.components:_.components,path:S,aliasOf:h?h.record:_}))}let y,A;for(const k of I){const{path:S}=k;if(f&&S[0]!=="/"){const Q=f.record.path,et=Q[Q.length-1]==="/"?"":"/";k.path=f.record.path+(S&&et+S)}if(y=lE(k,f,E),h?h.alias.push(y):(A=A||y,A!==y&&A.alias.push(y),d&&u.name&&!Ih(y)&&o(u.name)),_.children){const Q=_.children;for(let et=0;et<Q.length;et++)s(Q[et],y,h&&h.children[et])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return A?()=>{o(A)}:Pi}function o(u){if(wp(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&sE(u,n[f])>=0&&(u.record.path!==n[f].record.path||!bp(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Ih(u)&&r.set(u.record.name,u)}function l(u,f){let h,d={},_,E;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw qr(1,{location:u});E=h.record.name,d=ft(wh(f.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&wh(u.params,h.keys.map(A=>A.name))),_=h.stringify(d)}else if("path"in u)_=u.path,h=n.find(A=>A.re.test(_)),h&&(d=h.parse(_),E=h.record.name);else{if(h=f.name?r.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw qr(1,{location:u,currentLocation:f});E=h.record.name,d=ft({},f.params,u.params),_=h.stringify(d)}const I=[];let y=h;for(;y;)I.unshift(y.record),y=y.parent;return{name:E,path:_,params:d,matched:I,meta:dE(I)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function wh(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fE(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:hE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function hE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ih(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function dE(e){return e.reduce((t,n)=>ft(t,n.meta),{})}function bh(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function bp(e,t){return t.children.some(n=>n===e||bp(e,n))}const Tp=/#/g,mE=/&/g,pE=/\//g,gE=/=/g,yE=/\?/g,Cp=/\+/g,_E=/%5B/g,AE=/%5D/g,Rp=/%5E/g,vE=/%60/g,Pp=/%7B/g,EE=/%7C/g,Sp=/%7D/g,wE=/%20/g;function fu(e){return encodeURI(""+e).replace(EE,"|").replace(_E,"[").replace(AE,"]")}function IE(e){return fu(e).replace(Pp,"{").replace(Sp,"}").replace(Rp,"^")}function Wc(e){return fu(e).replace(Cp,"%2B").replace(wE,"+").replace(Tp,"%23").replace(mE,"%26").replace(vE,"`").replace(Pp,"{").replace(Sp,"}").replace(Rp,"^")}function bE(e){return Wc(e).replace(gE,"%3D")}function TE(e){return fu(e).replace(Tp,"%23").replace(yE,"%3F")}function CE(e){return e==null?"":TE(e).replace(pE,"%2F")}function Ro(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function RE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Cp," "),o=s.indexOf("="),a=Ro(o<0?s:s.slice(0,o)),c=o<0?null:Ro(s.slice(o+1));if(a in t){let l=t[a];De(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Th(e){let t="";for(let n in e){const r=e[n];if(n=bE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(s=>s&&Wc(s)):[r&&Wc(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function PE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const SE=Symbol(""),Ch=Symbol(""),hu=Symbol(""),du=Symbol(""),Gc=Symbol("");function mi(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function wn(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(qr(4,{from:n,to:t})):f instanceof Error?a(f):tE(f)?a(qr(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function sc(e,t,n,r){const i=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(xE(a)){const l=(a.__vccOpts||a)[t];l&&i.push(wn(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=M0(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&wn(h,n,r,s,o)()}))}}return i}function xE(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Rh(e){const t=He(hu),n=He(du),r=Ht(()=>t.resolve(xe(e.to))),i=Ht(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Hr.bind(null,u));if(h>-1)return h;const d=Ph(c[l-2]);return l>1&&Ph(u)===d&&f[f.length-1].path!==d?f.findIndex(Hr.bind(null,c[l-2])):h}),s=Ht(()=>i.value>-1&&OE(n.params,r.value.params)),o=Ht(()=>i.value>-1&&i.value===n.matched.length-1&&vp(n.params,r.value.params));function a(c={}){return DE(c)?t[xe(e.replace)?"replace":"push"](xe(e.to)).catch(Pi):Promise.resolve()}return{route:r,href:Ht(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const kE=ru({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rh,setup(e,{slots:t}){const n=ia(Rh(e)),{options:r}=He(hu),i=Ht(()=>({[Sh(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sh(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:uu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),xp=kE;function DE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function OE(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!De(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Ph(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Sh=(e,t,n)=>e??t??n,VE=ru({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=He(Gc),i=Ht(()=>e.route||r.value),s=He(Ch,0),o=Ht(()=>{let l=xe(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ht(()=>i.value.matched[o.value]);lo(Ch,Ht(()=>o.value+1)),lo(SE,a),lo(Gc,i);const c=Ze();return ir(()=>[c.value,a.value,e.name],([l,u,f],[h,d,_])=>{u&&(u.instances[f]=l,d&&d!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Hr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=a.value,h=f&&f.components[u];if(!h)return xh(n.default,{Component:h,route:l});const d=f.props[u],_=d?d===!0?l.params:typeof d=="function"?d(l):d:null,I=uu(h,ft({},_,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return xh(n.default,{Component:I,route:l})||I}}});function xh(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const kp=VE;function NE(e){const t=uE(e.routes,e),n=e.parseQuery||RE,r=e.stringifyQuery||Th,i=e.history,s=mi(),o=mi(),a=mi(),c=tv(An);let l=An;Cr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rc.bind(null,w=>""+w),f=rc.bind(null,CE),h=rc.bind(null,Ro);function d(w,F){let O,j;return wp(w)?(O=t.getRecordMatcher(w),j=F):j=w,t.addRoute(j,O)}function _(w){const F=t.getRecordMatcher(w);F&&t.removeRoute(F)}function E(){return t.getRoutes().map(w=>w.record)}function I(w){return!!t.getRecordMatcher(w)}function y(w,F){if(F=ft({},F||c.value),typeof w=="string"){const g=ic(n,w,F.path),v=t.resolve({path:g.path},F),b=i.createHref(g.fullPath);return ft(g,v,{params:h(v.params),hash:Ro(g.hash),redirectedFrom:void 0,href:b})}let O;if("path"in w)O=ft({},w,{path:ic(n,w.path,F.path).path});else{const g=ft({},w.params);for(const v in g)g[v]==null&&delete g[v];O=ft({},w,{params:f(g)}),F.params=f(F.params)}const j=t.resolve(O,F),lt=w.hash||"";j.params=u(h(j.params));const m=B0(r,ft({},w,{hash:IE(lt),path:j.path})),p=i.createHref(m);return ft({fullPath:m,hash:lt,query:r===Th?PE(w.query):w.query||{}},j,{redirectedFrom:void 0,href:p})}function A(w){return typeof w=="string"?ic(n,w,c.value.path):ft({},w)}function k(w,F){if(l!==w)return qr(8,{from:F,to:w})}function S(w){return yt(w)}function Q(w){return S(ft(A(w),{replace:!0}))}function et(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:O}=F;let j=typeof O=="function"?O(w):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=A(j):{path:j},j.params={}),ft({query:w.query,hash:w.hash,params:"path"in j?{}:w.params},j)}}function yt(w,F){const O=l=y(w),j=c.value,lt=w.state,m=w.force,p=w.replace===!0,g=et(O);if(g)return yt(ft(A(g),{state:typeof g=="object"?ft({},lt,g.state):lt,force:m,replace:p}),F||O);const v=O;v.redirectedFrom=F;let b;return!m&&U0(r,j,O)&&(b=qr(16,{to:v,from:j}),Ne(j,j,!0,!1)),(b?Promise.resolve(b):se(v,j)).catch(T=>Xe(T)?Xe(T,2)?T:yn(T):ct(T,v,j)).then(T=>{if(T){if(Xe(T,2))return yt(ft({replace:p},A(T.to),{state:typeof T.to=="object"?ft({},lt,T.to.state):lt,force:m}),F||v)}else T=zn(v,j,!0,p,lt);return gn(v,j,T),T})}function le(w,F){const O=k(w,F);return O?Promise.reject(O):Promise.resolve()}function $t(w){const F=wr.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function se(w,F){let O;const[j,lt,m]=ME(w,F);O=sc(j.reverse(),"beforeRouteLeave",w,F);for(const g of j)g.leaveGuards.forEach(v=>{O.push(wn(v,w,F))});const p=le.bind(null,w,F);return O.push(p),Gt(O).then(()=>{O=[];for(const g of s.list())O.push(wn(g,w,F));return O.push(p),Gt(O)}).then(()=>{O=sc(lt,"beforeRouteUpdate",w,F);for(const g of lt)g.updateGuards.forEach(v=>{O.push(wn(v,w,F))});return O.push(p),Gt(O)}).then(()=>{O=[];for(const g of m)if(g.beforeEnter)if(De(g.beforeEnter))for(const v of g.beforeEnter)O.push(wn(v,w,F));else O.push(wn(g.beforeEnter,w,F));return O.push(p),Gt(O)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),O=sc(m,"beforeRouteEnter",w,F),O.push(p),Gt(O))).then(()=>{O=[];for(const g of o.list())O.push(wn(g,w,F));return O.push(p),Gt(O)}).catch(g=>Xe(g,8)?g:Promise.reject(g))}function gn(w,F,O){a.list().forEach(j=>$t(()=>j(w,F,O)))}function zn(w,F,O,j,lt){const m=k(w,F);if(m)return m;const p=F===An,g=Cr?history.state:{};O&&(j||p?i.replace(w.fullPath,ft({scroll:p&&g&&g.scroll},lt)):i.push(w.fullPath,lt)),c.value=w,Ne(w,F,O,p),yn()}let Ve;function fi(){Ve||(Ve=i.listen((w,F,O)=>{if(!Ns.listening)return;const j=y(w),lt=et(j);if(lt){yt(ft(lt,{replace:!0}),j).catch(Pi);return}l=j;const m=c.value;Cr&&W0(yh(m.fullPath,O.delta),ma()),se(j,m).catch(p=>Xe(p,12)?p:Xe(p,2)?(yt(p.to,j).then(g=>{Xe(g,20)&&!O.delta&&O.type===Qi.pop&&i.go(-1,!1)}).catch(Pi),Promise.reject()):(O.delta&&i.go(-O.delta,!1),ct(p,j,m))).then(p=>{p=p||zn(j,m,!1),p&&(O.delta&&!Xe(p,8)?i.go(-O.delta,!1):O.type===Qi.pop&&Xe(p,20)&&i.go(-1,!1)),gn(j,m,p)}).catch(Pi)}))}let vr=mi(),Mt=mi(),mt;function ct(w,F,O){yn(w);const j=Mt.list();return j.length?j.forEach(lt=>lt(w,F,O)):console.error(w),Promise.reject(w)}function Ye(){return mt&&c.value!==An?Promise.resolve():new Promise((w,F)=>{vr.add([w,F])})}function yn(w){return mt||(mt=!w,fi(),vr.list().forEach(([F,O])=>w?O(w):F()),vr.reset()),w}function Ne(w,F,O,j){const{scrollBehavior:lt}=e;if(!Cr||!lt)return Promise.resolve();const m=!O&&G0(yh(w.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return Qm().then(()=>lt(w,F,m)).then(p=>p&&Q0(p)).catch(p=>ct(p,w,F))}const ue=w=>i.go(w);let Er;const wr=new Set,Ns={currentRoute:c,listening:!0,addRoute:d,removeRoute:_,hasRoute:I,getRoutes:E,resolve:y,options:e,push:S,replace:Q,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Mt.add,isReady:Ye,install(w){const F=this;w.component("RouterLink",xp),w.component("RouterView",kp),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(c)}),Cr&&!Er&&c.value===An&&(Er=!0,S(i.location).catch(lt=>{}));const O={};for(const lt in An)Object.defineProperty(O,lt,{get:()=>c.value[lt],enumerable:!0});w.provide(hu,F),w.provide(du,Bm(O)),w.provide(Gc,c);const j=w.unmount;wr.add(w),w.unmount=function(){wr.delete(w),wr.size<1&&(l=An,Ve&&Ve(),Ve=null,c.value=An,Er=!1,mt=!1),j()}}};function Gt(w){return w.reduce((F,O)=>F.then(()=>$t(O)),Promise.resolve())}return Ns}function ME(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(l=>Hr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Hr(l,c))||i.push(c))}return[n,r,i]}function FE(){return He(du)}const mn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},LE={class:"menu"},BE=["title"],UE={__name:"Menu",setup(e){const t=FE();console.log(t.path);const n=[{path:"/",name:"home",icon:"dumbbell"},{path:"/stats",name:"stats",icon:"chart-simple"},{path:"/user",name:"user",icon:"user"}];return(r,i)=>{const s=sp("font-awesome-icon");return Pt(),Lt("nav",LE,[(Pt(),Lt(ae,null,Hi(n,o=>Ct(xe(xp),{to:o.path},{default:nu(()=>[J("abbr",{class:"center",title:o.name},[Ct(s,{icon:o.icon,class:ps(xe(t).path==o.path?"text-orange":"text-white"),alt:"elm.name"},null,8,["icon","class"])],8,BE)]),_:2},1032,["to"])),64))])}}},jE=mn(UE,[["__scopeId","data-v-b0c73329"]]);const $E={class:"view"},zE={class:"footer"},HE={__name:"App",setup(e){return(t,n)=>(Pt(),Lt(ae,null,[J("div",$E,[Ct(xe(kp),null,{default:nu(({Component:r,route:i})=>[(Pt(),au(Sv(r)))]),_:1})]),J("div",zE,[Ct(jE)])],64))}},qE=mn(HE,[["__scopeId","data-v-24ef64b6"]]),KE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA2eSURBVHhe7d3bjttGFgXQli+JE8Tzu/Yn2N8bZJyLnZ5SRCB2j9ySKF7q1F4LMEg9BAjI6jq7TpHSAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAOg7TEbr2+OHhcTqF7h3em1vpn0HKrhR2kgkK7MngYxMKPVxPMGALBhmrUPBhOQIBazCoWISCD9sRCFiCQcQsCj70QyBgDoOGqyn60D9hgGsZKFyk8EM9ggCXGCCcpejDOIQBzjEo+IbCD+MSBPiawcDRi1b4v0znQABhAAMgmNU+IAjkcuMDKfzAU4JAHjc8iMIPXCII5HgxHRnbcY9f8QcumuYKtSGApDc4hR+YSzdgbG7uoBR+YCmCwJi0ecbzWvEHljTNKa9OnxiFVDcQhR9Ym27AONzIASj8wNYEgfrcwOIUf2AvQkBtngGo66XiD+xpmoNenj5RjfRWkMIP9EY3oB43rBjFH+iVEFCLLYA6tPyBrtkSqEVaK0DhB6rRDeifG9Q5xR+oSgjom5vTMcUfqE4I6Jcb0ynFHxiFENAnDwH256D4AyOZ5jT1pjNuSF+OP+Tz93QOMIw2t31pBz8o1BEBoB8/tD+QP6dzgOG0Oe6vdnhz+sTeBIA+/Nz+MP6YzgGG1ea6T+3wy+kTexIA9ve2/UH8Np0DDK/Neb+2w9vTJ/biycx9HVf+ij8Q6fD+n06AOXAnAsB+jnv+2v5AtBYCjs8EmAt3IADs4/i9/p+nc4BoLQS8bgdz4sYEgO29aMX/+DoMAJMWAo4/IuQ16A0JABtrxd+X/ACc4RsDt+Vib0jxB3ieELAdF3ojij/AdYSAbbjIG1D8AW4jBKzPBV6Z4g8wjxCwLt8EuC7XF2C+45sBrES6WpHVP8B9dAHW48KuRPEHWIYQsA4XdQWKP8CyhIDl2aNenmsKsDzPAyxMolqY1T/AOnQBluViLkjxB1iXELAc7eqFKP4Am/hpOnInAQCAMtpi67/TKXfSSlmA1T/AtmwF3E8H4H6vpiMA2zH33kmCupPVP8A+dAHu4+LdQfEH2JcQMJ8tAAAIJDnNZPUP0AddgHl0AOZx3QD6IQDM4KLNYPUP0BddgNu5YDdS/AH6JATcRisbAAJJSzew+gfomy7A9XQAACCQpHQlq3+AGnQBrqMDAACBBIDrSJMAdahtV1DYrqD9D1CLbYDLpCQACCQhXWD1D1CTLsDzdAAAIJB09Ayrf4DadAG+TwcAAAIJAAAQSGvkO7T/AcZgG+A8HQAACCQAnGH1D8DoBAAAhmZRd54AAACBPBjxhKQIMCYPA35LBwAAAgkAABBIAACAQPZDvmL/H2BsngP4lw4AAAQSAAAgkAAAAIHshUzs/wNk8BzAiQ4AAAQSAAAgkAAAAIHsgzT2/wGyeA5ABwAAIgkAABBIAACAQAIAAAQSAAAgUPxTkN4AAMiU/iaADgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAJDo3eO3/4A4vgfA9wCQ4NYi/9EPhTI+3wMAjGvuCl9nAIYXHQCs/hnaEgVcCIBhRbc/BACGtFbRti3AgJK3AWwBwEjWXLHrBsBQBAAYxRYFWgiAYQgAABBIAIARbLky1wWAIQgAUN0eBVkIgPIEAAAIJABAZXuuxHUBoDQBAAACCQAAEEgAAIBAAgBU1cMevOcAoCwBAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAoMN0jPT44eFxOmU079xaFvQxeqoc2uF9bh0UABiDgs+WBIJhJAcAWwDUdiz8ij9bM+4YgABAXSZg9mYMUpgAQD1WX/TEeKQoAYBaTLT0ytikGAGAOkyw9M4YpRABAAACCQDUYGVFFcYqRQgA9M+ESjXGLAUIAAAQSACgb1ZSVGXs0jkBAAACCQAAEEgAAIBAAgD9sodKdcYwHRMAACCQAAAAgQQAAAgkANCvj4fpBIoyhumYAAAAgQQAAAgkAABAIAGAvtlDpSpjl84JAAAQSACgf1ZSVGPMUoAAQA0mVKowVilCAACAQAIAdVhZ0TtjlEIEAGoxwdIrY5NiBADqOU60Jlt6YTxSlABAXSZd9mYMUpgAQG1WX+zBuGMA0SP48cPD43TKaN65tSxIsR/W4X1uHRQAoKpeQo7iSGHJAcAWAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAVPXxMJ3sqIf/B2AWAQAAAgkAABBIAACAQAIAVLbnHrz9fyhNAACAQAIAVLfHStzqH8oTAGAEWxZkxR+GIAAAQCABAEaxxcrc6h+GIQDASNYs0Io/DCX6L/rxw8PjdArjebfQ8Fb4GdThfXYNjO4ApN98BrdE4Vb8YVi2AGBkxwI+p4jP/e+AMuL/wm0DEOnp9oBiT6D0LrAAIAAARPIMAAAQRwAAgEACAAAEEgAAIJAAAACBBAAACOTl38argABZfBOsDgAARBIAACCQAAAAgQQAAAgkAABAIG8BTLwJAJDBGwAnOgAAEEgAAIBAAgAABLIP8hXPAQCMzf7/v3QAACCQAAAAgQQAAAhkL+QJzwEAjMn+/7d0AAAgkAAAAIEEAAAIZD/kDM8BAIzF/v//0wEAgEACAABDs/o/TwA4w2ABYHQCAAAEstJ9hocBAWrT0f0+HQAACCQAAEAgrZELbAMA1KT9/zwdAAAIJB1dQRcAoBar/8t0AAAgkABwhZYkXSeAIszZ13GRrmMLAKAOc/YVBAAACOQhiRt4GBCgbx7+u54OAAAEkpRupAsA0Cer/9voAABAIGlpBl0AgL5Y/d9OB2AG75gC9MOcPI+LNo8OAEA/zMkzaJncwVYAwL60/ufTAQCAQJLTnXQBAPZh9X8fHYA7tQH4ejoFYCNt7n01nTKTAHC/z9MRgO18mY7MpH2yEFsBANvQ+l+GDgAAZbTi/9N0yp0EgIVIpACb+H06cidFa2G2AgDWYaG1LB2AhbUB+nI6BWAhbW711P/CBIDl/T0dAViOp/4Xpp2yElsBAMvQ+l+Hi7oiIQDgPor/emwBrMjzAADz2fdflwCwLs8DAMxn339FWisbsBUAcBut//W5wBsRAgCuo/hvw0XekBAA8DzFfzsu9MaEAIDzFP9teQhwY22AezMA4Ik2N6pHG3PBt/d3G+hebQGYtDnxdTvojm5MANjHlzbgf5zOAWK1ufBNO3w+fWJLAsB+/mwD/+fpHCBOmwN/aYc/Tp/YmgCwr0/tD+A/0zlAjDb3vW2H306f2IMnLvvw4+OHh9+nc4ChTd3PT6dP7EUA6McPLQRohQFDa8X/uOdvruuAANCXVy0E/DWdAwylFf/jG1C+378TAkB/Di0E+BEhYCit+B+/A8Xc1hEBoFO+MRAYRSv+ak2H3JSOCQFAdYp/v9yYzgkBQFWKf9/cnAKEAKAaxb9/blAdHg4EuudhvzoEgGJ0A4BeWfXX4mYVJAQAvVH863HD6rIlAOxOy78uAaA43QBgL1b9tbl5Y3jTgoAf1gA20Qr/8Wd8/ZJfcQLAQHQDgLVZ9Y/DjRzPyxYEPk/nAItohd8P+QxGABiUbgCwFKv+MbmpgxMEgLkU/rG5uRm8MghcrRX+F+1g8TA4ASCIbgBwiVV/Djc6kCAAPKXw53HDgwkCgMKfy43nH8IAZFH4MQD4hiAA41L0+ZrBwFmCAIxD4eccg4KLhAGoR9HnEgOEmwgD0C9Fn1sYLMwiCEA/FH7mMGhYhEAA21HwWYJBxCoEAliOgs8aDCo2IRDA9RR8tmCQsSvBgGQKPXsy+ChBUKAShR0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFgPD/8DZqUz3JyENfkAAAAASUVORK5CYII=";const mu=e=>(ca("data-v-ac096e49"),e=e(),la(),e),QE={class:"center exeCard"},WE={class:"text-2xl font-bold"},GE={class:"props"},YE=mu(()=>J("h2",null,"Series:",-1)),XE=mu(()=>J("h2",null,"Reps:",-1)),JE=mu(()=>J("div",null,[J("h2",null,"Type:"),J("p",null,"Power")],-1)),ZE={__name:"ExeCard",props:{name:"Exercise",series:0,reps:"0"},setup(e){const t=e;return(n,r)=>(Pt(),Lt("div",QE,[J("h3",WE,bn(t.name),1),J("div",GE,[J("div",null,[YE,J("p",null,bn(t.series),1)]),J("div",null,[XE,J("p",null,bn(t.reps),1)]),JE])]))}},tw=mn(ZE,[["__scopeId","data-v-ac096e49"]]);const ew={},nw=e=>(ca("data-v-711c362a"),e=e(),la(),e),rw={class:"exeCard center"},iw=nw(()=>J("h3",{class:"text-xl"},[fo("Add a "),J("strong",null," New Exercise "),fo(),J("br"),fo(" to your workout ")],-1));function sw(e,t){const n=sp("font-awesome-icon");return Pt(),Lt("div",rw,[iw,Ct(n,{class:"icon",icon:"circle-plus"})])}const ow=mn(ew,[["render",sw],["__scopeId","data-v-711c362a"]]),aw="/Flex/assets/addExe-bbc541e7.png";const pa=e=>(ca("data-v-9606078a"),e=e(),la(),e),cw={class:"modal"},lw=pa(()=>J("header",{class:"center"},[J("img",{src:aw,alt:"addWorkout"})],-1)),uw={class:"card"},fw=pa(()=>J("h1",{class:"title"},"Create a new workout",-1)),hw=pa(()=>J("h3",null,"Name:",-1)),dw={class:"frequency"},mw=pa(()=>J("h1",null,"Frequency:",-1)),pw={class:"days"},gw=["onClick"],yw={__name:"ModalRoutine",props:{onCancel:"closeModal",onAccept:"accept"},setup(e){const t=e;let n=Ze("");const r=Ze([{name:"M",isSelected:!1},{name:"TU",isSelected:!1},{name:"W",isSelected:!1},{name:"TH",isSelected:!1},{name:"F",isSelected:!1},{name:"SA",isSelected:!1},{name:"SU",isSelected:!1}]),i=()=>{t.onCancel(),n.value=""},s=()=>{t.onAccept(n.value)};return(o,a)=>(Pt(),Lt("div",cw,[lw,J("div",uw,[fw,J("section",null,[hw,tp(J("input",{class:"name",type:"text",placeholder:"Ex: Push B","onUpdate:modelValue":a[0]||(a[0]=c=>Qt(n)?n.value=c:n=c)},null,512),[[R0,xe(n)]])]),J("section",dw,[mw,J("div",pw,[(Pt(!0),Lt(ae,null,Hi(r.value,c=>(Pt(),Lt("button",{class:ps(["day",c.isSelected?"bg-orange":"bg-salmon"]),onClick:l=>c.isSelected=!c.isSelected},bn(c.name),11,gw))),256))])]),J("section",{class:"buttons center"},[J("button",{onClick:s},"ACCEPT"),J("button",{onClick:i},"CANCEL")])])]))}},_w=mn(yw,[["__scopeId","data-v-9606078a"]]);/**
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
 */const Dp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Aw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(h=64)),r.push(n[u],n[f],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Dp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Aw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new vw;const h=s<<2|a>>4;if(r.push(h),l!==64){const d=a<<4&240|l>>2;if(r.push(d),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ew=function(e){const t=Dp(e);return Op.encodeByteArray(t,!0)},Po=function(e){return Ew(e).replace(/\./g,"")},ww=function(e){try{return Op.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bw=()=>Iw().__FIREBASE_DEFAULTS__,Tw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Cw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ww(e[1]);return t&&JSON.parse(t)},Vp=()=>{try{return bw()||Tw()||Cw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Rw=e=>{var t,n;return(n=(t=Vp())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Pw=e=>{const t=Rw(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Np=()=>{var e;return(e=Vp())===null||e===void 0?void 0:e.config};/**
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
 */class Sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function xw(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Po(JSON.stringify(n)),Po(JSON.stringify(o)),a].join(".")}function kw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Mp(){try{return typeof indexedDB=="object"}catch{return!1}}function Fp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Dw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ow="FirebaseError";class Un extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ow,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ga.prototype.create)}}class ga{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Vw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Un(i,a,r)}}function Vw(e,t){return e.replace(Nw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Nw=/\{\$([^}]+)}/g;function So(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(kh(s)&&kh(o)){if(!So(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kh(e){return e!==null&&typeof e=="object"}/**
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
 */const Mw=1e3,Fw=2,Lw=4*60*60*1e3,Bw=.5;function Dh(e,t=Mw,n=Fw){const r=t*Math.pow(n,e),i=Math.round(Bw*r*(Math.random()-.5)*2);return Math.min(Lw,r+i)}/**
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
 */function Dn(e){return e&&e._delegate?e._delegate:e}class sn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Uw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($w(t))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kn){return this.instances.has(t)}getOptions(t=Kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kn){return this.component?this.component.multipleInstances?t:Kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jw(e){return e===Kn?void 0:e}function $w(e){return e.instantiationMode==="EAGER"}/**
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
 */class zw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Uw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ut;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ut||(ut={}));const Hw={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},qw=ut.INFO,Kw={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},Qw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Kw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pu{constructor(t){this.name=t,this._logLevel=qw,this._logHandler=Qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ut))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...t),this._logHandler(this,ut.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...t),this._logHandler(this,ut.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...t),this._logHandler(this,ut.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...t),this._logHandler(this,ut.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...t),this._logHandler(this,ut.ERROR,...t)}}const Ww=(e,t)=>t.some(n=>e instanceof n);let Oh,Vh;function Gw(){return Oh||(Oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yw(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,Yc=new WeakMap,Bp=new WeakMap,oc=new WeakMap,gu=new WeakMap;function Xw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Rn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Lp.set(n,e)}).catch(()=>{}),gu.set(t,e),t}function Jw(e){if(Yc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Yc.set(e,t)}let Xc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Yc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zw(e){Xc=e(Xc)}function tI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ac(this),t,...n);return Bp.set(r,t.sort?t.sort():[t]),Rn(r)}:Yw().includes(e)?function(...t){return e.apply(ac(this),t),Rn(Lp.get(this))}:function(...t){return Rn(e.apply(ac(this),t))}}function eI(e){return typeof e=="function"?tI(e):(e instanceof IDBTransaction&&Jw(e),Ww(e,Gw())?new Proxy(e,Xc):e)}function Rn(e){if(e instanceof IDBRequest)return Xw(e);if(oc.has(e))return oc.get(e);const t=eI(e);return t!==e&&(oc.set(e,t),gu.set(t,e)),t}const ac=e=>gu.get(e);function nI(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Rn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Rn(o.result),c.oldVersion,c.newVersion,Rn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const rI=["get","getKey","getAll","getAllKeys","count"],iI=["put","add","delete","clear"],cc=new Map;function Nh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cc.get(t))return cc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=iI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rI.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return cc.set(t,s),s}Zw(e=>({...e,get:(t,n,r)=>Nh(t,n)||e.get(t,n,r),has:(t,n)=>!!Nh(t,n)||e.has(t,n)}));/**
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
 */class sI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oI(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jc="@firebase/app",Mh="0.9.15";/**
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
 */const lr=new pu("@firebase/app"),aI="@firebase/app-compat",cI="@firebase/analytics-compat",lI="@firebase/analytics",uI="@firebase/app-check-compat",fI="@firebase/app-check",hI="@firebase/auth",dI="@firebase/auth-compat",mI="@firebase/database",pI="@firebase/database-compat",gI="@firebase/functions",yI="@firebase/functions-compat",_I="@firebase/installations",AI="@firebase/installations-compat",vI="@firebase/messaging",EI="@firebase/messaging-compat",wI="@firebase/performance",II="@firebase/performance-compat",bI="@firebase/remote-config",TI="@firebase/remote-config-compat",CI="@firebase/storage",RI="@firebase/storage-compat",PI="@firebase/firestore",SI="@firebase/firestore-compat",xI="firebase",kI="10.1.0";/**
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
 */const Zc="[DEFAULT]",DI={[Jc]:"fire-core",[aI]:"fire-core-compat",[lI]:"fire-analytics",[cI]:"fire-analytics-compat",[fI]:"fire-app-check",[uI]:"fire-app-check-compat",[hI]:"fire-auth",[dI]:"fire-auth-compat",[mI]:"fire-rtdb",[pI]:"fire-rtdb-compat",[gI]:"fire-fn",[yI]:"fire-fn-compat",[_I]:"fire-iid",[AI]:"fire-iid-compat",[vI]:"fire-fcm",[EI]:"fire-fcm-compat",[wI]:"fire-perf",[II]:"fire-perf-compat",[bI]:"fire-rc",[TI]:"fire-rc-compat",[CI]:"fire-gcs",[RI]:"fire-gcs-compat",[PI]:"fire-fst",[SI]:"fire-fst-compat","fire-js":"fire-js",[xI]:"fire-js-all"};/**
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
 */const xo=new Map,tl=new Map;function OI(e,t){try{e.container.addComponent(t)}catch(n){lr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function On(e){const t=e.name;if(tl.has(t))return lr.debug(`There were multiple attempts to register component ${t}.`),!1;tl.set(t,e);for(const n of xo.values())OI(n,e);return!0}function gs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const VI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new ga("app","Firebase",VI);/**
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
 */class NI{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const MI=kI;function Up(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=Np()),!n)throw Pn.create("no-options");const s=xo.get(i);if(s){if(So(n,s.options)&&So(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i})}const o=new zw(i);for(const c of tl.values())o.addComponent(c);const a=new NI(n,r,o);return xo.set(i,a),a}function jp(e=Zc){const t=xo.get(e);if(!t&&e===Zc&&Np())return Up();if(!t)throw Pn.create("no-app",{appName:e});return t}function qe(e,t,n){var r;let i=(r=DI[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),lr.warn(a.join(" "));return}On(new sn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const FI="firebase-heartbeat-database",LI=1,Wi="firebase-heartbeat-store";let lc=null;function $p(){return lc||(lc=nI(FI,LI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Wi)}}}).catch(e=>{throw Pn.create("idb-open",{originalErrorMessage:e.message})})),lc}async function BI(e){try{return await(await $p()).transaction(Wi).objectStore(Wi).get(zp(e))}catch(t){if(t instanceof Un)lr.warn(t.message);else{const n=Pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});lr.warn(n.message)}}}async function Fh(e,t){try{const r=(await $p()).transaction(Wi,"readwrite");await r.objectStore(Wi).put(t,zp(e)),await r.done}catch(n){if(n instanceof Un)lr.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function zp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const UI=1024,jI=30*24*60*60*1e3;class $I{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=jI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lh(),{heartbeatsToSend:n,unsentEntries:r}=zI(this._heartbeatsCache.heartbeats),i=Po(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lh(){return new Date().toISOString().substring(0,10)}function zI(e,t=UI){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bh(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mp()?Fp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Bh(e){return Po(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function qI(e){On(new sn("platform-logger",t=>new sI(t),"PRIVATE")),On(new sn("heartbeat",t=>new $I(t),"PRIVATE")),qe(Jc,Mh,e),qe(Jc,Mh,"esm2017"),qe("fire-js","")}qI("");var KI="firebase",QI="10.1.0";/**
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
 */qe(KI,QI,"app");const WI=(e,t)=>t.some(n=>e instanceof n);let Uh,jh;function GI(){return Uh||(Uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YI(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hp=new WeakMap,el=new WeakMap,qp=new WeakMap,uc=new WeakMap,yu=new WeakMap;function XI(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Sn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Hp.set(n,e)}).catch(()=>{}),yu.set(t,e),t}function JI(e){if(el.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});el.set(e,t)}let nl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return el.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ZI(e){nl=e(nl)}function tb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(fc(this),t,...n);return qp.set(r,t.sort?t.sort():[t]),Sn(r)}:YI().includes(e)?function(...t){return e.apply(fc(this),t),Sn(Hp.get(this))}:function(...t){return Sn(e.apply(fc(this),t))}}function eb(e){return typeof e=="function"?tb(e):(e instanceof IDBTransaction&&JI(e),WI(e,GI())?new Proxy(e,nl):e)}function Sn(e){if(e instanceof IDBRequest)return XI(e);if(uc.has(e))return uc.get(e);const t=eb(e);return t!==e&&(uc.set(e,t),yu.set(t,e)),t}const fc=e=>yu.get(e);function nb(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Sn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Sn(o.result),c.oldVersion,c.newVersion,Sn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const rb=["get","getKey","getAll","getAllKeys","count"],ib=["put","add","delete","clear"],hc=new Map;function $h(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(hc.get(t))return hc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ib.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rb.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return hc.set(t,s),s}ZI(e=>({...e,get:(t,n,r)=>$h(t,n)||e.get(t,n,r),has:(t,n)=>!!$h(t,n)||e.has(t,n)}));const Kp="@firebase/installations",_u="0.6.4";/**
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
 */const Qp=1e4,Wp=`w:${_u}`,Gp="FIS_v2",sb="https://firebaseinstallations.googleapis.com/v1",ob=60*60*1e3,ab="installations",cb="Installations";/**
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
 */const lb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ur=new ga(ab,cb,lb);function Yp(e){return e instanceof Un&&e.code.includes("request-failed")}/**
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
 */function Xp({projectId:e}){return`${sb}/projects/${e}/installations`}function Jp(e){return{token:e.token,requestStatus:2,expiresIn:fb(e.expiresIn),creationTime:Date.now()}}async function Zp(e,t){const r=(await t.json()).error;return ur.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ub(e,{refreshToken:t}){const n=tg(e);return n.append("Authorization",hb(t)),n}async function eg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function fb(e){return Number(e.replace("s","000"))}function hb(e){return`${Gp} ${e}`}/**
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
 */async function db({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Xp(e),i=tg(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Gp,appId:e.appId,sdkVersion:Wp},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await eg(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Jp(l.authToken)}}else throw await Zp("Create Installation",c)}/**
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
 */function ng(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function mb(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pb=/^[cdef][\w-]{21}$/,rl="";function gb(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=yb(e);return pb.test(n)?n:rl}catch{return rl}}function yb(e){return mb(e).substr(0,22)}/**
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
 */function ya(e){return`${e.appName}!${e.appId}`}/**
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
 */const rg=new Map;function ig(e,t){const n=ya(e);sg(n,t),_b(n,t)}function sg(e,t){const n=rg.get(e);if(n)for(const r of n)r(t)}function _b(e,t){const n=Ab();n&&n.postMessage({key:e,fid:t}),vb()}let Xn=null;function Ab(){return!Xn&&"BroadcastChannel"in self&&(Xn=new BroadcastChannel("[Firebase] FID Change"),Xn.onmessage=e=>{sg(e.data.key,e.data.fid)}),Xn}function vb(){rg.size===0&&Xn&&(Xn.close(),Xn=null)}/**
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
 */const Eb="firebase-installations-database",wb=1,fr="firebase-installations-store";let dc=null;function Au(){return dc||(dc=nb(Eb,wb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fr)}}})),dc}async function ko(e,t){const n=ya(e),i=(await Au()).transaction(fr,"readwrite"),s=i.objectStore(fr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&ig(e,t.fid),t}async function og(e){const t=ya(e),r=(await Au()).transaction(fr,"readwrite");await r.objectStore(fr).delete(t),await r.done}async function _a(e,t){const n=ya(e),i=(await Au()).transaction(fr,"readwrite"),s=i.objectStore(fr),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ig(e,a.fid),a}/**
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
 */async function vu(e){let t;const n=await _a(e.appConfig,r=>{const i=Ib(r),s=bb(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===rl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ib(e){const t=e||{fid:gb(),registrationStatus:0};return ag(t)}function bb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ur.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Tb(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Cb(e)}:{installationEntry:t}}async function Tb(e,t){try{const n=await db(e,t);return ko(e.appConfig,n)}catch(n){throw Yp(n)&&n.customData.serverCode===409?await og(e.appConfig):await ko(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Cb(e){let t=await zh(e.appConfig);for(;t.registrationStatus===1;)await ng(100),t=await zh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vu(e);return r||n}return t}function zh(e){return _a(e,t=>{if(!t)throw ur.create("installation-not-found");return ag(t)})}function ag(e){return Rb(e)?{fid:e.fid,registrationStatus:0}:e}function Rb(e){return e.registrationStatus===1&&e.registrationTime+Qp<Date.now()}/**
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
 */async function Pb({appConfig:e,heartbeatServiceProvider:t},n){const r=Sb(e,n),i=ub(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Wp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await eg(()=>fetch(r,a));if(c.ok){const l=await c.json();return Jp(l)}else throw await Zp("Generate Auth Token",c)}function Sb(e,{fid:t}){return`${Xp(e)}/${t}/authTokens:generate`}/**
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
 */async function Eu(e,t=!1){let n;const r=await _a(e.appConfig,s=>{if(!cg(s))throw ur.create("not-registered");const o=s.authToken;if(!t&&Db(o))return s;if(o.requestStatus===1)return n=xb(e,t),s;{if(!navigator.onLine)throw ur.create("app-offline");const a=Vb(s);return n=kb(e,a),a}});return n?await n:r.authToken}async function xb(e,t){let n=await Hh(e.appConfig);for(;n.authToken.requestStatus===1;)await ng(100),n=await Hh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Eu(e,t):r}function Hh(e){return _a(e,t=>{if(!cg(t))throw ur.create("not-registered");const n=t.authToken;return Nb(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function kb(e,t){try{const n=await Pb(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ko(e.appConfig,r),n}catch(n){if(Yp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await og(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ko(e.appConfig,r)}throw n}}function cg(e){return e!==void 0&&e.registrationStatus===2}function Db(e){return e.requestStatus===2&&!Ob(e)}function Ob(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ob}function Vb(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Nb(e){return e.requestStatus===1&&e.requestTime+Qp<Date.now()}/**
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
 */async function Mb(e){const t=e,{installationEntry:n,registrationPromise:r}=await vu(t);return r?r.catch(console.error):Eu(t).catch(console.error),n.fid}/**
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
 */async function Fb(e,t=!1){const n=e;return await Lb(n),(await Eu(n,t)).token}async function Lb(e){const{registrationPromise:t}=await vu(e);t&&await t}/**
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
 */function Bb(e){if(!e||!e.options)throw mc("App Configuration");if(!e.name)throw mc("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw mc(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function mc(e){return ur.create("missing-app-config-values",{valueName:e})}/**
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
 */const lg="installations",Ub="installations-internal",jb=e=>{const t=e.getProvider("app").getImmediate(),n=Bb(t),r=gs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$b=e=>{const t=e.getProvider("app").getImmediate(),n=gs(t,lg).getImmediate();return{getId:()=>Mb(n),getToken:i=>Fb(n,i)}};function zb(){On(new sn(lg,jb,"PUBLIC")),On(new sn(Ub,$b,"PRIVATE"))}zb();qe(Kp,_u);qe(Kp,_u,"esm2017");/**
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
 */const Do="analytics",Hb="firebase_id",qb="origin",Kb=60*1e3,Qb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wu="https://www.googletagmanager.com/gtag/js";/**
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
 */const de=new pu("@firebase/analytics");/**
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
 */const Wb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ye=new ga("analytics","Analytics",Wb);/**
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
 */function Gb(e){if(!e.startsWith(wu)){const t=ye.create("invalid-gtag-resource",{gtagURL:e});return de.warn(t.message),""}return e}function ug(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Yb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Xb(e,t){const n=Yb("firebase-js-sdk-policy",{createScriptURL:Gb}),r=document.createElement("script"),i=`${wu}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Jb(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Zb(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const c=(await ug(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){de.error(a)}e("config",i,s)}async function t1(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await ug(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){de.error(s)}}function e1(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await t1(e,t,n,a,c)}else if(s==="config"){const[a,c]=o;await Zb(e,t,n,r,a,c)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){de.error(a)}}return i}function n1(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=e1(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function r1(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(wu)&&n.src.includes(e))return n;return null}/**
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
 */const i1=30,s1=1e3;class o1{constructor(t={},n=s1){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const fg=new o1;function a1(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function c1(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:a1(r)},s=Qb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ye.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function l1(e,t=fg,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ye.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ye.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new h1;return setTimeout(async()=>{a.abort()},n!==void 0?n:Kb),hg({appId:r,apiKey:i,measurementId:s},o,a,t)}async function hg(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=fg){var s;const{appId:o,measurementId:a}=e;try{await u1(r,t)}catch(c){if(a)return de.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await c1(e);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!f1(l)){if(i.deleteThrottleMetadata(o),a)return de.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Dh(n,i.intervalMillis,i1):Dh(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,f),de.debug(`Calling attemptFetch again in ${u} millis`),hg(e,f,r,i)}}function u1(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(ye.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function f1(e){if(!(e instanceof Un)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class h1{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function d1(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function m1(){if(Mp())try{await Fp()}catch(e){return de.warn(ye.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return de.warn(ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function p1(e,t,n,r,i,s,o){var a;const c=l1(e);c.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&de.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>de.error(d)),t.push(c);const l=m1().then(d=>{if(d)return r.getId()}),[u,f]=await Promise.all([c,l]);r1(s)||Xb(s,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[qb]="firebase",h.update=!0,f!=null&&(h[Hb]=f),i("config",u.measurementId,h),u.measurementId}/**
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
 */class g1{constructor(t){this.app=t}_delete(){return delete xi[this.app.options.appId],Promise.resolve()}}let xi={},qh=[];const Kh={};let pc="dataLayer",y1="gtag",Qh,dg,Wh=!1;function _1(){const e=[];if(kw()&&e.push("This is a browser extension environment."),Dw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ye.create("invalid-analytics-context",{errorInfo:t});de.warn(n.message)}}function A1(e,t,n){_1();const r=e.options.appId;if(!r)throw ye.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)de.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ye.create("no-api-key");if(xi[r]!=null)throw ye.create("already-exists",{id:r});if(!Wh){Jb(pc);const{wrappedGtag:s,gtagCore:o}=n1(xi,qh,Kh,pc,y1);dg=s,Qh=o,Wh=!0}return xi[r]=p1(e,qh,Kh,t,Qh,pc,n),new g1(e)}function v1(e=jp()){e=Dn(e);const t=gs(e,Do);return t.isInitialized()?t.getImmediate():E1(e)}function E1(e,t={}){const n=gs(e,Do);if(n.isInitialized()){const i=n.getImmediate();if(So(t,n.getOptions()))return i;throw ye.create("already-initialized")}return n.initialize({options:t})}function w1(e,t,n,r){e=Dn(e),d1(dg,xi[e.app.options.appId],t,n,r).catch(i=>de.error(i))}const Gh="@firebase/analytics",Yh="0.10.0";function I1(){On(new sn(Do,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return A1(r,i,n)},"PUBLIC")),On(new sn("analytics-internal",e,"PRIVATE")),qe(Gh,Yh),qe(Gh,Yh,"esm2017");function e(t){try{const n=t.getProvider(Do).getImmediate();return{logEvent:(r,i,s)=>w1(n,r,i,s)}}catch(n){throw ye.create("interop-component-reg-failed",{reason:n})}}}I1();var b1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Iu=Iu||{},G=b1||self;function Aa(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ys(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function T1(e){return Object.prototype.hasOwnProperty.call(e,gc)&&e[gc]||(e[gc]=++C1)}var gc="closure_uid_"+(1e9*Math.random()>>>0),C1=0;function R1(e,t,n){return e.call.apply(e.bind,arguments)}function P1(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ee(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ee=R1:ee=P1,ee.apply(null,arguments)}function $s(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function jt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function jn(){this.s=this.s,this.o=this.o}var S1=0;jn.prototype.s=!1;jn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),S1!=0)&&T1(this)};jn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mg=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function bu(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Xh(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Aa(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ne(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var x1=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{G.addEventListener("test",()=>{},t),G.removeEventListener("test",()=>{},t)}catch{}return e}();function Gi(e){return/^[\s\xa0]*$/.test(e)}function va(){var e=G.navigator;return e&&(e=e.userAgent)?e:""}function Ue(e){return va().indexOf(e)!=-1}function Tu(e){return Tu[" "](e),e}Tu[" "]=function(){};function k1(e,t){var n=IT;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var D1=Ue("Opera"),Kr=Ue("Trident")||Ue("MSIE"),pg=Ue("Edge"),il=pg||Kr,gg=Ue("Gecko")&&!(va().toLowerCase().indexOf("webkit")!=-1&&!Ue("Edge"))&&!(Ue("Trident")||Ue("MSIE"))&&!Ue("Edge"),O1=va().toLowerCase().indexOf("webkit")!=-1&&!Ue("Edge");function yg(){var e=G.document;return e?e.documentMode:void 0}var sl;t:{var yc="",_c=function(){var e=va();if(gg)return/rv:([^\);]+)(\)|;)/.exec(e);if(pg)return/Edge\/([\d\.]+)/.exec(e);if(Kr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(O1)return/WebKit\/(\S+)/.exec(e);if(D1)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(_c&&(yc=_c?_c[1]:""),Kr){var Ac=yg();if(Ac!=null&&Ac>parseFloat(yc)){sl=String(Ac);break t}}sl=yc}var ol;if(G.document&&Kr){var Jh=yg();ol=Jh||parseInt(sl,10)||void 0}else ol=void 0;var V1=ol;function Yi(e,t){if(ne.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(gg){t:{try{Tu(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:N1[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Yi.$.h.call(this)}}jt(Yi,ne);var N1={2:"touch",3:"pen",4:"mouse"};Yi.prototype.h=function(){Yi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var _s="closure_listenable_"+(1e6*Math.random()|0),M1=0;function F1(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++M1,this.fa=this.ia=!1}function Ea(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Cu(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function L1(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function _g(e){const t={};for(const n in e)t[n]=e[n];return t}const Zh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ag(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Zh.length;s++)n=Zh[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function wa(e){this.src=e,this.g={},this.h=0}wa.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=cl(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new F1(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function al(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=mg(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ea(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function cl(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Ru="closure_lm_"+(1e6*Math.random()|0),vc={};function vg(e,t,n,r,i){if(r&&r.once)return wg(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)vg(e,t[s],n,r,i);return null}return n=xu(n),e&&e[_s]?e.O(t,n,ys(r)?!!r.capture:!!r,i):Eg(e,t,n,!1,r,i)}function Eg(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ys(i)?!!i.capture:!!i,a=Su(e);if(a||(e[Ru]=a=new wa(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=B1(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)x1||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(bg(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function B1(){function e(n){return t.call(e.src,e.listener,n)}const t=U1;return e}function wg(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)wg(e,t[s],n,r,i);return null}return n=xu(n),e&&e[_s]?e.P(t,n,ys(r)?!!r.capture:!!r,i):Eg(e,t,n,!0,r,i)}function Ig(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ig(e,t[s],n,r,i);else r=ys(r)?!!r.capture:!!r,n=xu(n),e&&e[_s]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=cl(s,n,r,i),-1<n&&(Ea(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Su(e))&&(t=e.g[t.toString()],e=-1,t&&(e=cl(t,n,r,i)),(n=-1<e?t[e]:null)&&Pu(n))}function Pu(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[_s])al(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(bg(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Su(t))?(al(n,e),n.h==0&&(n.src=null,t[Ru]=null)):Ea(e)}}}function bg(e){return e in vc?vc[e]:vc[e]="on"+e}function U1(e,t){if(e.fa)e=!0;else{t=new Yi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Pu(e),e=n.call(r,t)}return e}function Su(e){return e=e[Ru],e instanceof wa?e:null}var Ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function xu(e){return typeof e=="function"?e:(e[Ec]||(e[Ec]=function(t){return e.handleEvent(t)}),e[Ec])}function Ut(){jn.call(this),this.i=new wa(this),this.S=this,this.J=null}jt(Ut,jn);Ut.prototype[_s]=!0;Ut.prototype.removeEventListener=function(e,t,n,r){Ig(this,e,t,n,r)};function Wt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ne(t,e);else if(t instanceof ne)t.target=t.target||e;else{var i=t;t=new ne(r,e),Ag(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=zs(o,r,!0,t)&&i}if(o=t.g=e,i=zs(o,r,!0,t)&&i,i=zs(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=zs(o,r,!1,t)&&i}Ut.prototype.N=function(){if(Ut.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ea(n[r]);delete e.g[t],e.h--}}this.J=null};Ut.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ut.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function zs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&al(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var ku=G.JSON.stringify;class j1{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function $1(){var e=Du;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class z1{constructor(){this.h=this.g=null}add(t,n){const r=Tg.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Tg=new j1(()=>new H1,e=>e.reset());class H1{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function q1(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function K1(e){G.setTimeout(()=>{throw e},0)}let Xi,Ji=!1,Du=new z1,Cg=()=>{const e=G.Promise.resolve(void 0);Xi=()=>{e.then(Q1)}};var Q1=()=>{for(var e;e=$1();){try{e.h.call(e.g)}catch(n){K1(n)}var t=Tg;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ji=!1};function Ia(e,t){Ut.call(this),this.h=e||1,this.g=t||G,this.j=ee(this.qb,this),this.l=Date.now()}jt(Ia,Ut);V=Ia.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Wt(this,"tick"),this.ga&&(Ou(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ou(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}V.N=function(){Ia.$.N.call(this),Ou(this),delete this.g};function Vu(e,t,n){if(typeof e=="function")n&&(e=ee(e,n));else if(e&&typeof e.handleEvent=="function")e=ee(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:G.setTimeout(e,t||0)}function Rg(e){e.g=Vu(()=>{e.g=null,e.i&&(e.i=!1,Rg(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class W1 extends jn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Rg(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(e){jn.call(this),this.h=e,this.g={}}jt(Zi,jn);var td=[];function Pg(e,t,n,r){Array.isArray(n)||(n&&(td[0]=n.toString()),n=td);for(var i=0;i<n.length;i++){var s=vg(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Sg(e){Cu(e.g,function(t,n){this.g.hasOwnProperty(n)&&Pu(t)},e),e.g={}}Zi.prototype.N=function(){Zi.$.N.call(this),Sg(this)};Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ba(){this.g=!0}ba.prototype.Ea=function(){this.g=!1};function G1(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Y1(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Sr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+J1(e,n)+(r?" "+r:"")})}function X1(e,t){e.info(function(){return"TIMEOUT: "+t})}ba.prototype.info=function(){};function J1(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ku(n)}catch{return t}}var yr={},ed=null;function Ta(){return ed=ed||new Ut}yr.Ta="serverreachability";function xg(e){ne.call(this,yr.Ta,e)}jt(xg,ne);function ts(e){const t=Ta();Wt(t,new xg(t))}yr.STAT_EVENT="statevent";function kg(e,t){ne.call(this,yr.STAT_EVENT,e),this.stat=t}jt(kg,ne);function ce(e){const t=Ta();Wt(t,new kg(t,e))}yr.Ua="timingevent";function Dg(e,t){ne.call(this,yr.Ua,e),this.size=t}jt(Dg,ne);function As(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){e()},t)}var Ca={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Og={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Nu(){}Nu.prototype.h=null;function nd(e){return e.h||(e.h=e.i())}function Vg(){}var vs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mu(){ne.call(this,"d")}jt(Mu,ne);function Fu(){ne.call(this,"c")}jt(Fu,ne);var ll;function Ra(){}jt(Ra,Nu);Ra.prototype.g=function(){return new XMLHttpRequest};Ra.prototype.i=function(){return{}};ll=new Ra;function Es(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Zi(this),this.P=Z1,e=il?125:void 0,this.V=new Ia(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ng}function Ng(){this.i=null,this.g="",this.h=!1}var Z1=45e3,ul={},Oo={};V=Es.prototype;V.setTimeout=function(e){this.P=e};function fl(e,t,n){e.L=1,e.v=Sa(on(t)),e.s=n,e.S=!0,Mg(e,null)}function Mg(e,t){e.G=Date.now(),ws(e),e.A=on(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Hg(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Ng,e.g=fy(e.l,n?t:null,!e.s),0<e.O&&(e.M=new W1(ee(e.Pa,e,e.g),e.O)),Pg(e.U,e.g,"readystatechange",e.nb),t=e.I?_g(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ts(),G1(e.j,e.u,e.A,e.m,e.W,e.s)}V.nb=function(e){e=e.target;const t=this.M;t&&je(e)==3?t.l():this.Pa(e)};V.Pa=function(e){try{if(e==this.g)t:{const u=je(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||il||this.g&&(this.h.h||this.g.ja()||od(this.g)))){this.J||u!=4||t==7||(t==8||0>=f?ts(3):ts(2)),Pa(this);var n=this.g.da();this.ca=n;e:if(Fg(this)){var r=od(this.g);e="";var i=r.length,s=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),ki(this);var o="";break e}this.h.i=new G.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Y1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gi(a)){var l=a;break e}}l=null}if(n=l)Sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hl(this,n);else{this.i=!1,this.o=3,ce(12),Jn(this),ki(this);break t}}this.S?(Lg(this,u,o),il&&this.i&&u==3&&(Pg(this.U,this.V,"tick",this.mb),this.V.start())):(Sr(this.j,this.m,o,null),hl(this,o)),u==4&&Jn(this),this.i&&!this.J&&(u==4?ay(this.l,this):(this.i=!1,ws(this)))}else vT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Jn(this),ki(this)}}}catch{}finally{}};function Fg(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Lg(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=tT(e,n),i==Oo){t==4&&(e.o=4,ce(14),r=!1),Sr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ul){e.o=4,ce(15),Sr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Sr(e.j,e.m,i,null),hl(e,i);Fg(e)&&i!=Oo&&i!=ul&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ce(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zu(t),t.M=!0,ce(11))):(Sr(e.j,e.m,n,"[Invalid Chunked Response]"),Jn(e),ki(e))}V.mb=function(){if(this.g){var e=je(this.g),t=this.g.ja();this.C<t.length&&(Pa(this),Lg(this,e,t),this.i&&e!=4&&ws(this))}};function tT(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Oo:(n=Number(t.substring(n,r)),isNaN(n)?ul:(r+=1,r+n>t.length?Oo:(t=t.slice(r,r+n),e.C=r+n,t)))}V.cancel=function(){this.J=!0,Jn(this)};function ws(e){e.Y=Date.now()+e.P,Bg(e,e.P)}function Bg(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=As(ee(e.lb,e),t)}function Pa(e){e.B&&(G.clearTimeout(e.B),e.B=null)}V.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(X1(this.j,this.A),this.L!=2&&(ts(),ce(17)),Jn(this),this.o=2,ki(this)):Bg(this,this.Y-e)};function ki(e){e.l.H==0||e.J||ay(e.l,e)}function Jn(e){Pa(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ou(e.V),Sg(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function hl(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||dl(n.i,e))){if(!e.K&&dl(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Mo(n),Da(n);else break t;$u(n),ce(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=As(ee(n.ib,n),6e3));if(1>=Qg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zn(n,11)}else if((e.K||n.g==e)&&Mo(n),!Gi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=l[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const _=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Lu(s,s.h),s.h=null))}if(r.F){const E=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,vt(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=uy(r,r.J?r.pa:null,r.Y),o.K){Wg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Pa(a),ws(a)),r.g=o}else sy(r);0<n.j.length&&Oa(n)}else l[0]!="stop"&&l[0]!="close"||Zn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Zn(n,7):ju(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ts(4)}catch{}}function eT(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Aa(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function nT(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Aa(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ug(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Aa(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=nT(e),r=eT(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var jg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rT(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function or(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof or){this.h=e.h,Vo(this,e.j),this.s=e.s,this.g=e.g,No(this,e.m),this.l=e.l;var t=e.i,n=new es;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),rd(this,n),this.o=e.o}else e&&(t=String(e).match(jg))?(this.h=!1,Vo(this,t[1]||"",!0),this.s=Ai(t[2]||""),this.g=Ai(t[3]||"",!0),No(this,t[4]),this.l=Ai(t[5]||"",!0),rd(this,t[6]||"",!0),this.o=Ai(t[7]||"")):(this.h=!1,this.i=new es(null,this.h))}or.prototype.toString=function(){var e=[],t=this.j;t&&e.push(vi(t,id,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(vi(t,id,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(vi(n,n.charAt(0)=="/"?oT:sT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",vi(n,cT)),e.join("")};function on(e){return new or(e)}function Vo(e,t,n){e.j=n?Ai(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function No(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function rd(e,t,n){t instanceof es?(e.i=t,lT(e.i,e.h)):(n||(t=vi(t,aT)),e.i=new es(t,e.h))}function vt(e,t,n){e.i.set(t,n)}function Sa(e){return vt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ai(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function vi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,iT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function iT(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var id=/[#\/\?@]/g,sT=/[#\?:]/g,oT=/[#\?]/g,aT=/[#\?@]/g,cT=/#/g;function es(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function $n(e){e.g||(e.g=new Map,e.h=0,e.i&&rT(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}V=es.prototype;V.add=function(e,t){$n(this),this.i=null,e=ii(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function $g(e,t){$n(e),t=ii(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function zg(e,t){return $n(e),t=ii(e,t),e.g.has(t)}V.forEach=function(e,t){$n(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};V.ta=function(){$n(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};V.Z=function(e){$n(this);let t=[];if(typeof e=="string")zg(this,e)&&(t=t.concat(this.g.get(ii(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};V.set=function(e,t){return $n(this),this.i=null,e=ii(this,e),zg(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};V.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Hg(e,t,n){$g(e,t),0<n.length&&(e.i=null,e.g.set(ii(e,t),bu(n)),e.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ii(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function lT(e,t){t&&!e.j&&($n(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($g(this,r),Hg(this,i,n))},e)),e.j=t}var uT=class{constructor(e,t){this.g=e,this.map=t}};function qg(e){this.l=e||fT,G.PerformanceNavigationTiming?(e=G.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fT=10;function Kg(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Qg(e){return e.h?1:e.g?e.g.size:0}function dl(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Lu(e,t){e.g?e.g.add(t):e.h=t}function Wg(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}qg.prototype.cancel=function(){if(this.i=Gg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Gg(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return bu(e.i)}var hT=class{stringify(e){return G.JSON.stringify(e,void 0)}parse(e){return G.JSON.parse(e,void 0)}};function dT(){this.g=new hT}function mT(e,t,n){const r=n||"";try{Ug(e,function(i,s){let o=i;ys(i)&&(o=ku(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function pT(e,t){const n=new ba;if(G.Image){const r=new Image;r.onload=$s(Hs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=$s(Hs,n,r,"TestLoadImage: error",!1,t),r.onabort=$s(Hs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=$s(Hs,n,r,"TestLoadImage: timeout",!1,t),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Hs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Is(e){this.l=e.fc||null,this.j=e.ob||!1}jt(Is,Nu);Is.prototype.g=function(){return new xa(this.l,this.j)};Is.prototype.i=function(e){return function(){return e}}({});function xa(e,t){Ut.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Bu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}jt(xa,Ut);var Bu=0;V=xa.prototype;V.open=function(e,t){if(this.readyState!=Bu)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ns(this)};V.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||G).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=Bu};V.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yg(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Yg(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}V.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?bs(this):ns(this),this.readyState==3&&Yg(this)}};V.Za=function(e){this.g&&(this.response=this.responseText=e,bs(this))};V.Ya=function(e){this.g&&(this.response=e,bs(this))};V.ka=function(){this.g&&bs(this)};function bs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ns(e)}V.setRequestHeader=function(e,t){this.v.append(e,t)};V.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ns(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var gT=G.JSON.parse;function Rt(e){Ut.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xg,this.L=this.M=!1}jt(Rt,Ut);var Xg="",yT=/^https?$/i,_T=["POST","PUT"];V=Rt.prototype;V.Oa=function(e){this.M=e};V.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ll.g(),this.C=this.u?nd(this.u):nd(ll),this.g.onreadystatechange=ee(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){sd(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&e instanceof G.FormData,!(0<=mg(_T,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ty(this),0<this.B&&((this.L=AT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ee(this.ua,this)):this.A=Vu(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){sd(this,s)}};function AT(e){return Kr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}V.ua=function(){typeof Iu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Wt(this,"timeout"),this.abort(8))};function sd(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Jg(e),ka(e)}function Jg(e){e.F||(e.F=!0,Wt(e,"complete"),Wt(e,"error"))}V.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Wt(this,"complete"),Wt(this,"abort"),ka(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ka(this,!0)),Rt.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Zg(this):this.kb())};V.kb=function(){Zg(this)};function Zg(e){if(e.h&&typeof Iu<"u"&&(!e.C[1]||je(e)!=4||e.da()!=2)){if(e.v&&je(e)==4)Vu(e.La,0,e);else if(Wt(e,"readystatechange"),je(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(jg)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),r=!yT.test(i?i.toLowerCase():"")}n=r}if(n)Wt(e,"complete"),Wt(e,"success");else{e.m=6;try{var s=2<je(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Jg(e)}}finally{ka(e)}}}}function ka(e,t){if(e.g){ty(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Wt(e,"ready");try{n.onreadystatechange=r}catch{}}}function ty(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(G.clearTimeout(e.A),e.A=null)}V.isActive=function(){return!!this.g};function je(e){return e.g?e.g.readyState:0}V.da=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),gT(t)}};function od(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Xg:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function vT(e){const t={};e=(e.g&&2<=je(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Gi(e[r]))continue;var n=q1(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}L1(t,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ey(e){let t="";return Cu(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Uu(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ey(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):vt(e,t,n))}function pi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ny(e){this.Ga=0,this.j=[],this.l=new ba,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pi("baseRetryDelayMs",5e3,e),this.hb=pi("retryDelaySeedMs",1e4,e),this.eb=pi("forwardChannelMaxRetries",2,e),this.xa=pi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new qg(e&&e.concurrentRequestLimit),this.Ja=new dT,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=ny.prototype;V.ra=8;V.H=1;function ju(e){if(ry(e),e.H==3){var t=e.W++,n=on(e.I);if(vt(n,"SID",e.K),vt(n,"RID",t),vt(n,"TYPE","terminate"),Ts(e,n),t=new Es(e,e.l,t),t.L=2,t.v=Sa(on(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=t.v,n=!0),n||(t.g=fy(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ws(t)}ly(e)}function Da(e){e.g&&(zu(e),e.g.cancel(),e.g=null)}function ry(e){Da(e),e.u&&(G.clearTimeout(e.u),e.u=null),Mo(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&G.clearTimeout(e.m),e.m=null)}function Oa(e){if(!Kg(e.i)&&!e.m){e.m=!0;var t=e.Na;Xi||Cg(),Ji||(Xi(),Ji=!0),Du.add(t,e),e.C=0}}function ET(e,t){return Qg(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=As(ee(e.Na,e,t),cy(e,e.C)),e.C++,!0)}V.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Es(this,this.l,e);let s=this.s;if(this.U&&(s?(s=_g(s),Ag(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=iy(this,i,t),n=on(this.I),vt(n,"RID",e),vt(n,"CVER",22),this.F&&vt(n,"X-HTTP-Session-Id",this.F),Ts(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ey(s)))+"&"+t:this.o&&Uu(n,this.o,s)),Lu(this.i,i),this.bb&&vt(n,"TYPE","init"),this.P?(vt(n,"$req",t),vt(n,"SID","null"),i.aa=!0,fl(i,n,null)):fl(i,n,t),this.H=2}}else this.H==3&&(e?ad(this,e):this.j.length==0||Kg(this.i)||ad(this))};function ad(e,t){var n;t?n=t.m:n=e.W++;const r=on(e.I);vt(r,"SID",e.K),vt(r,"RID",n),vt(r,"AID",e.V),Ts(e,r),e.o&&e.s&&Uu(r,e.o,e.s),n=new Es(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=iy(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Lu(e.i,n),fl(n,r,t)}function Ts(e,t){e.na&&Cu(e.na,function(n,r){vt(t,r,n)}),e.h&&Ug({},function(n,r){vt(t,r,n)})}function iy(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ee(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{mT(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function sy(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Xi||Cg(),Ji||(Xi(),Ji=!0),Du.add(t,e),e.A=0}}function $u(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=As(ee(e.Ma,e),cy(e,e.A)),e.A++,!0)}V.Ma=function(){if(this.u=null,oy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=As(ee(this.jb,this),e)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ce(10),Da(this),oy(this))};function zu(e){e.B!=null&&(G.clearTimeout(e.B),e.B=null)}function oy(e){e.g=new Es(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=on(e.wa);vt(t,"RID","rpc"),vt(t,"SID",e.K),vt(t,"AID",e.V),vt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&vt(t,"TO",e.qa),vt(t,"TYPE","xmlhttp"),Ts(e,t),e.o&&e.s&&Uu(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Sa(on(t)),n.s=null,n.S=!0,Mg(n,e)}V.ib=function(){this.v!=null&&(this.v=null,Da(this),$u(this),ce(19))};function Mo(e){e.v!=null&&(G.clearTimeout(e.v),e.v=null)}function ay(e,t){var n=null;if(e.g==t){Mo(e),zu(e),e.g=null;var r=2}else if(dl(e.i,t))n=t.F,Wg(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Ta(),Wt(r,new Dg(r,n)),Oa(e)}else sy(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&ET(e,t)||r==2&&$u(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Zn(e,5);break;case 4:Zn(e,10);break;case 3:Zn(e,6);break;default:Zn(e,2)}}}function cy(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Zn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ee(e.pb,e);n||(n=new or("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Vo(n,"https"),Sa(n)),pT(n.toString(),r)}else ce(2);e.H=0,e.h&&e.h.za(t),ly(e),ry(e)}V.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ce(2)):(this.l.info("Failed to ping google.com"),ce(1))};function ly(e){if(e.H=0,e.ma=[],e.h){const t=Gg(e.i);(t.length!=0||e.j.length!=0)&&(Xh(e.ma,t),Xh(e.ma,e.j),e.i.i.length=0,bu(e.j),e.j.length=0),e.h.ya()}}function uy(e,t,n){var r=n instanceof or?on(n):new or(n);if(r.g!="")t&&(r.g=t+"."+r.g),No(r,r.m);else{var i=G.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new or(null);r&&Vo(s,r),t&&(s.g=t),i&&No(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&vt(r,n,t),vt(r,"VER",e.ra),Ts(e,r),r}function fy(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Rt(new Is({ob:!0})):new Rt(e.va),t.Oa(e.J),t}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function hy(){}V=hy.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Fo(){if(Kr&&!(10<=Number(V1)))throw Error("Environmental error: no available transport.")}Fo.prototype.g=function(e,t){return new _e(e,t)};function _e(e,t){Ut.call(this),this.g=new ny(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Gi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Gi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new si(this)}jt(_e,Ut);_e.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ce(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=uy(e,null,e.Y),Oa(e)};_e.prototype.close=function(){ju(this.g)};_e.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ku(e),e=n);t.j.push(new uT(t.fb++,e)),t.H==3&&Oa(t)};_e.prototype.N=function(){this.g.h=null,delete this.j,ju(this.g),delete this.g,_e.$.N.call(this)};function dy(e){Mu.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}jt(dy,Mu);function my(){Fu.call(this),this.status=1}jt(my,Fu);function si(e){this.g=e}jt(si,hy);si.prototype.Ba=function(){Wt(this.g,"a")};si.prototype.Aa=function(e){Wt(this.g,new dy(e))};si.prototype.za=function(e){Wt(this.g,new my)};si.prototype.ya=function(){Wt(this.g,"b")};function wT(){this.blockSize=-1}function Oe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}jt(Oe,wT);Oe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function wc(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Oe.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)wc(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){wc(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){wc(this,r),i=0;break}}this.h=i,this.i+=t};Oe.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ht(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var IT={};function Hu(e){return-128<=e&&128>e?k1(e,function(t){return new ht([t|0],0>t?-1:0)}):new ht([e|0],0>e?-1:0)}function $e(e){if(isNaN(e)||!isFinite(e))return Mr;if(0>e)return qt($e(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ml;return new ht(t,0)}function py(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return qt(py(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=$e(Math.pow(t,8)),r=Mr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=$e(Math.pow(t,s)),r=r.R(s).add($e(o))):(r=r.R(n),r=r.add($e(o)))}return r}var ml=4294967296,Mr=Hu(0),pl=Hu(1),cd=Hu(16777216);V=ht.prototype;V.ea=function(){if(ve(this))return-qt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ml+r)*t,t*=ml}return e};V.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(en(this))return"0";if(ve(this))return"-"+qt(this).toString(e);for(var t=$e(Math.pow(e,6)),n=this,r="";;){var i=Bo(n,t).g;n=Lo(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,en(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function en(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ve(e){return e.h==-1}V.X=function(e){return e=Lo(this,e),ve(e)?-1:en(e)?0:1};function qt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ht(n,~e.h).add(pl)}V.abs=function(){return ve(this)?qt(this):this};V.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ht(n,n[n.length-1]&-2147483648?-1:0)};function Lo(e,t){return e.add(qt(t))}V.R=function(e){if(en(this)||en(e))return Mr;if(ve(this))return ve(e)?qt(this).R(qt(e)):qt(qt(this).R(e));if(ve(e))return qt(this.R(qt(e)));if(0>this.X(cd)&&0>e.X(cd))return $e(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,qs(n,2*r+2*i),n[2*r+2*i+1]+=s*c,qs(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,qs(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,qs(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ht(n,0)};function qs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function gi(e,t){this.g=e,this.h=t}function Bo(e,t){if(en(t))throw Error("division by zero");if(en(e))return new gi(Mr,Mr);if(ve(e))return t=Bo(qt(e),t),new gi(qt(t.g),qt(t.h));if(ve(t))return t=Bo(e,qt(t)),new gi(qt(t.g),t.h);if(30<e.g.length){if(ve(e)||ve(t))throw Error("slowDivide_ only works with positive integers.");for(var n=pl,r=t;0>=r.X(e);)n=ld(n),r=ld(r);var i=Tr(n,1),s=Tr(r,1);for(r=Tr(r,2),n=Tr(n,2);!en(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Tr(r,1),n=Tr(n,1)}return t=Lo(e,i.R(t)),new gi(i,t)}for(i=Mr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=$e(n),o=s.R(t);ve(o)||0<o.X(e);)n-=r,s=$e(n),o=s.R(t);en(s)&&(s=pl),i=i.add(s),e=Lo(e,o)}return new gi(i,e)}V.gb=function(e){return Bo(this,e).h};V.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ht(n,this.h&e.h)};V.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ht(n,this.h|e.h)};V.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ht(n,this.h^e.h)};function ld(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ht(n,e.h)}function Tr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ht(i,e.h)}Fo.prototype.createWebChannel=Fo.prototype.g;_e.prototype.send=_e.prototype.u;_e.prototype.open=_e.prototype.m;_e.prototype.close=_e.prototype.close;Ca.NO_ERROR=0;Ca.TIMEOUT=8;Ca.HTTP_ERROR=6;Og.COMPLETE="complete";Vg.EventType=vs;vs.OPEN="a";vs.CLOSE="b";vs.ERROR="c";vs.MESSAGE="d";Ut.prototype.listen=Ut.prototype.O;Rt.prototype.listenOnce=Rt.prototype.P;Rt.prototype.getLastError=Rt.prototype.Sa;Rt.prototype.getLastErrorCode=Rt.prototype.Ia;Rt.prototype.getStatus=Rt.prototype.da;Rt.prototype.getResponseJson=Rt.prototype.Wa;Rt.prototype.getResponseText=Rt.prototype.ja;Rt.prototype.send=Rt.prototype.ha;Rt.prototype.setWithCredentials=Rt.prototype.Oa;Oe.prototype.digest=Oe.prototype.l;Oe.prototype.reset=Oe.prototype.reset;Oe.prototype.update=Oe.prototype.j;ht.prototype.add=ht.prototype.add;ht.prototype.multiply=ht.prototype.R;ht.prototype.modulo=ht.prototype.gb;ht.prototype.compare=ht.prototype.X;ht.prototype.toNumber=ht.prototype.ea;ht.prototype.toString=ht.prototype.toString;ht.prototype.getBits=ht.prototype.D;ht.fromNumber=$e;ht.fromString=py;var bT=function(){return new Fo},TT=function(){return Ta()},Ic=Ca,CT=Og,RT=yr,ud={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},PT=Is,Ks=Vg,ST=Rt,xT=Oe,Fr=ht;const fd="@firebase/firestore";/**
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
 */let Xt=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */const hr=new pu("@firebase/firestore");function hd(){return hr.logLevel}function U(e,...t){if(hr.logLevel<=ut.DEBUG){const n=t.map(qu);hr.debug(`Firestore (${oi}): ${e}`,...n)}}function an(e,...t){if(hr.logLevel<=ut.ERROR){const n=t.map(qu);hr.error(`Firestore (${oi}): ${e}`,...n)}}function Qr(e,...t){if(hr.logLevel<=ut.WARN){const n=t.map(qu);hr.warn(`Firestore (${oi}): ${e}`,...n)}}function qu(e){if(typeof e=="string")return e;try{/**
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
 */function W(e="Unexpected state"){const t=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: `+e;throw an(t),new Error(t)}function wt(e,t){e||W()}function Z(e,t){return e}/**
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
 */class gy{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class DT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OT{constructor(t){this.t=t,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ar,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ar)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(wt(typeof r.accessToken=="string"),new gy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return wt(t===null||typeof t=="string"),new Xt(t)}}class VT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class NT{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new VT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FT{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(wt(typeof n.token=="string"),this.R=n.token,new MT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function LT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yy{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=LT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ot(e,t){return e<t?-1:e>t?1:0}function Wr(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class rs{constructor(t,n,r){n===void 0?n=0:n>t.length&&W(),r===void 0?r=t.length-n:r>t.length-n&&W(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return rs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof rs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class It extends rs{construct(t,n,r){return new It(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new H(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new It(n)}static emptyPath(){return new It([])}}const BT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends rs{construct(t,n,r){return new te(t,n,r)}static isValidIdentifier(t){return BT.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new H(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new te(n)}static emptyPath(){return new te([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(It.fromString(t))}static fromName(t){return new q(It.fromString(t).popFirst(5))}static empty(){return new q(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&It.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return It.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new It(t.slice()))}}function UT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Vt(n+1,0):new Vt(n,r));return new Vn(i,q.empty(),t)}function jT(e){return new Vn(e.readTime,e.key,-1)}class Vn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Vn(X.min(),q.empty(),-1)}static max(){return new Vn(X.max(),q.empty(),-1)}}function $T(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=q.comparator(e.documentKey,t.documentKey),n!==0?n:ot(e.largestBatchId,t.largestBatchId))}/**
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
 */const zT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Cs(e){if(e.code!==C.FAILED_PRECONDITION||e.message!==zT)throw e;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):P.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):P.reject(n)}static resolve(t){return new P((n,r)=>{n(t)})}static reject(t){return new P((n,r)=>{r(t)})}static waitFor(t){return new P((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=P.resolve(!1);for(const r of t)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new P((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new P((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Rs(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Ku{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Ku.ae=-1;function Va(e){return e==null}function Uo(e){return e===0&&1/e==-1/0}function qT(e){return typeof e=="number"&&Number.isInteger(e)&&!Uo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function dd(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ai(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _y(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class bt{constructor(t,n){this.comparator=t,this.root=n||zt.EMPTY}insert(t,n){return new bt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(t){return new bt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,zt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qs(this.root,t,this.comparator,!0)}}class Qs{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class zt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??zt.RED,this.left=i??zt.EMPTY,this.right=s??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new zt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return zt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const t=this.left.check();if(t!==this.right.check())throw W();return t+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,n,r,i,s){return this}insert(t,n,r){return new zt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class re{constructor(t){this.comparator=t,this.data=new bt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(t){return new md(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof re)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new re(this.comparator);return n.data=t,n}}class md{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ay extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ie{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ay("Invalid base64 string: "+s):s}}(t);return new ie(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ie(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const KT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(e){if(wt(!!e),typeof e=="string"){let t=0;const n=KT.exec(e);if(wt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:kt(e.seconds),nanos:kt(e.nanos)}}function kt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function dr(e){return typeof e=="string"?ie.fromBase64String(e):ie.fromUint8Array(e)}/**
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
 */function Qu(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wu(e){const t=e.mapValue.fields.__previous_value__;return Qu(t)?Wu(t):t}function is(e){const t=Nn(e.mapValue.fields.__local_write_time__.timestampValue);return new Vt(t.seconds,t.nanos)}/**
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
 */class QT{constructor(t,n,r,i,s,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ss{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ss&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ws={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Qu(e)?4:WT(e)?9007199254740991:10:W()}function We(e,t){if(e===t)return!0;const n=mr(e);if(n!==mr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return is(e).isEqual(is(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nn(i.timestampValue),a=Nn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return dr(i.bytesValue).isEqual(dr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return kt(i.geoPointValue.latitude)===kt(s.geoPointValue.latitude)&&kt(i.geoPointValue.longitude)===kt(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return kt(i.integerValue)===kt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=kt(i.doubleValue),a=kt(s.doubleValue);return o===a?Uo(o)===Uo(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Wr(e.arrayValue.values||[],t.arrayValue.values||[],We);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(dd(o)!==dd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!We(o[c],a[c])))return!1;return!0}(e,t);default:return W()}}function os(e,t){return(e.values||[]).find(n=>We(n,t))!==void 0}function Gr(e,t){if(e===t)return 0;const n=mr(e),r=mr(t);if(n!==r)return ot(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ot(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=kt(s.integerValue||s.doubleValue),c=kt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return pd(e.timestampValue,t.timestampValue);case 4:return pd(is(e),is(t));case 5:return ot(e.stringValue,t.stringValue);case 6:return function(s,o){const a=dr(s),c=dr(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ot(a[l],c[l]);if(u!==0)return u}return ot(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ot(kt(s.latitude),kt(o.latitude));return a!==0?a:ot(kt(s.longitude),kt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Gr(a[l],c[l]);if(u)return u}return ot(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Ws.mapValue&&o===Ws.mapValue)return 0;if(s===Ws.mapValue)return 1;if(o===Ws.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let f=0;f<c.length&&f<u.length;++f){const h=ot(c[f],u[f]);if(h!==0)return h;const d=Gr(a[c[f]],l[u[f]]);if(d!==0)return d}return ot(c.length,u.length)}(e.mapValue,t.mapValue);default:throw W()}}function pd(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ot(e,t);const n=Nn(e),r=Nn(t),i=ot(n.seconds,r.seconds);return i!==0?i:ot(n.nanos,r.nanos)}function Yr(e){return gl(e)}function gl(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Nn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return dr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return q.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=gl(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gl(n.fields[o])}`;return i+"}"}(e.mapValue):W()}function yl(e){return!!e&&"integerValue"in e}function Gu(e){return!!e&&"arrayValue"in e}function gd(e){return!!e&&"nullValue"in e}function yd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ho(e){return!!e&&"mapValue"in e}function Di(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ai(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Di(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Di(e.arrayValue.values[n]);return t}return Object.assign({},e)}function WT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ee{constructor(t){this.value=t}static empty(){return new Ee({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ho(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Di(n)}setAll(t){let n=te.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Di(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return We(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];ho(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){ai(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ee(Di(this.value))}}function vy(e){const t=[];return ai(e.fields,(n,r)=>{const i=new te([n]);if(ho(r)){const s=vy(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Re(t)}/**
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
 */class Jt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Jt(t,0,X.min(),X.min(),X.min(),Ee.empty(),0)}static newFoundDocument(t,n,r,i){return new Jt(t,1,n,X.min(),r,i,0)}static newNoDocument(t,n){return new Jt(t,2,n,X.min(),X.min(),Ee.empty(),0)}static newUnknownDocument(t,n){return new Jt(t,3,n,X.min(),X.min(),Ee.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jo{constructor(t,n){this.position=t,this.inclusive=n}}function _d(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Gr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ad(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!We(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Oi{constructor(t,n="asc"){this.field=t,this.dir=n}}function GT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Ey{}class Ot extends Ey{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new XT(t,n,r):n==="array-contains"?new tC(t,r):n==="in"?new eC(t,r):n==="not-in"?new nC(t,r):n==="array-contains-any"?new rC(t,r):new Ot(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new JT(t,r):new ZT(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gr(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(Gr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ge extends Ey{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Ge(t,n)}matches(t){return wy(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function wy(e){return e.op==="and"}function Iy(e){return YT(e)&&wy(e)}function YT(e){for(const t of e.filters)if(t instanceof Ge)return!1;return!0}function _l(e){if(e instanceof Ot)return e.field.canonicalString()+e.op.toString()+Yr(e.value);if(Iy(e))return e.filters.map(t=>_l(t)).join(",");{const t=e.filters.map(n=>_l(n)).join(",");return`${e.op}(${t})`}}function by(e,t){return e instanceof Ot?function(r,i){return i instanceof Ot&&r.op===i.op&&r.field.isEqual(i.field)&&We(r.value,i.value)}(e,t):e instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&by(o,i.filters[a]),!0):!1}(e,t):void W()}function Ty(e){return e instanceof Ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Yr(n.value)}`}(e):e instanceof Ge?function(n){return n.op.toString()+" {"+n.getFilters().map(Ty).join(" ,")+"}"}(e):"Filter"}class XT extends Ot{constructor(t,n,r){super(t,n,r),this.key=q.fromName(r.referenceValue)}matches(t){const n=q.comparator(t.key,this.key);return this.matchesComparison(n)}}class JT extends Ot{constructor(t,n){super(t,"in",n),this.keys=Cy("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ZT extends Ot{constructor(t,n){super(t,"not-in",n),this.keys=Cy("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Cy(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class tC extends Ot{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gu(n)&&os(n.arrayValue,this.value)}}class eC extends Ot{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&os(this.value.arrayValue,n)}}class nC extends Ot{constructor(t,n){super(t,"not-in",n)}matches(t){if(os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!os(this.value.arrayValue,n)}}class rC extends Ot{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>os(this.value.arrayValue,r))}}/**
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
 */class iC{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function vd(e,t=null,n=[],r=[],i=null,s=null,o=null){return new iC(e,t,n,r,i,s,o)}function Yu(e){const t=Z(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>_l(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Va(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Yr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Yr(r)).join(",")),t.he=n}return t.he}function Xu(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!GT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!by(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ad(e.startAt,t.startAt)&&Ad(e.endAt,t.endAt)}function Al(e){return q.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Na{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function sC(e,t,n,r,i,s,o,a){return new Na(e,t,n,r,i,s,o,a)}function Ju(e){return new Na(e)}function Ed(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function oC(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function aC(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function cC(e){return e.collectionGroup!==null}function Lr(e){const t=Z(e);if(t.Pe===null){t.Pe=[];const n=aC(t),r=oC(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Oi(n)),t.Pe.push(new Oi(te.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Oi(te.keyField(),s))}}}return t.Pe}function cn(e){const t=Z(e);if(!t.Ie)if(t.limitType==="F")t.Ie=vd(t.path,t.collectionGroup,Lr(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Lr(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Oi(s.field,o))}const r=t.endAt?new jo(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new jo(t.startAt.position,t.startAt.inclusive):null;t.Ie=vd(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function vl(e,t,n){return new Na(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ma(e,t){return Xu(cn(e),cn(t))&&e.limitType===t.limitType}function Ry(e){return`${Yu(cn(e))}|lt:${e.limitType}`}function El(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ty(i)).join(", ")}]`),Va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Yr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Yr(i)).join(",")),`Target(${r})`}(cn(e))}; limitType=${e.limitType})`}function Fa(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Lr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=_d(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Lr(r),i)||r.endAt&&!function(o,a,c){const l=_d(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Lr(r),i))}(e,t)}function lC(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Py(e){return(t,n)=>{let r=!1;for(const i of Lr(e)){const s=uC(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uC(e,t,n){const r=e.field.isKeyField()?q.comparator(t.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?Gr(c,l):W()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class ci{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ai(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return _y(this.inner)}size(){return this.innerSize}}/**
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
 */const fC=new bt(q.comparator);function ln(){return fC}const Sy=new bt(q.comparator);function Ei(...e){let t=Sy;for(const n of e)t=t.insert(n.key,n);return t}function xy(e){let t=Sy;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function tr(){return Vi()}function ky(){return Vi()}function Vi(){return new ci(e=>e.toString(),(e,t)=>e.isEqual(t))}const hC=new bt(q.comparator),dC=new re(q.comparator);function rt(...e){let t=dC;for(const n of e)t=t.add(n);return t}const mC=new re(ot);function pC(){return mC}/**
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
 */function Dy(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(t)?"-0":t}}function Oy(e){return{integerValue:""+e}}function gC(e,t){return qT(t)?Oy(t):Dy(e,t)}/**
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
 */class La{constructor(){this._=void 0}}function yC(e,t,n){return e instanceof $o?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qu(s)&&(s=Wu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof as?Ny(e,t):e instanceof cs?My(e,t):function(i,s){const o=Vy(i,s),a=wd(o)+wd(i.Te);return yl(o)&&yl(i.Te)?Oy(a):Dy(i.serializer,a)}(e,t)}function _C(e,t,n){return e instanceof as?Ny(e,t):e instanceof cs?My(e,t):n}function Vy(e,t){return e instanceof zo?function(r){return yl(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class $o extends La{}class as extends La{constructor(t){super(),this.elements=t}}function Ny(e,t){const n=Fy(t);for(const r of e.elements)n.some(i=>We(i,r))||n.push(r);return{arrayValue:{values:n}}}class cs extends La{constructor(t){super(),this.elements=t}}function My(e,t){let n=Fy(t);for(const r of e.elements)n=n.filter(i=>!We(i,r));return{arrayValue:{values:n}}}class zo extends La{constructor(t,n){super(),this.serializer=t,this.Te=n}}function wd(e){return kt(e.integerValue||e.doubleValue)}function Fy(e){return Gu(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function AC(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof as&&i instanceof as||r instanceof cs&&i instanceof cs?Wr(r.elements,i.elements,We):r instanceof zo&&i instanceof zo?We(r.Te,i.Te):r instanceof $o&&i instanceof $o}(e.transform,t.transform)}class vC{constructor(t,n){this.version=t,this.transformResults=n}}class nn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new nn}static exists(t){return new nn(void 0,t)}static updateTime(t){return new nn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mo(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ba{}function Ly(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Uy(e.key,nn.none()):new Ps(e.key,e.data,nn.none());{const n=e.data,r=Ee.empty();let i=new re(te.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _r(e.key,r,new Re(i.toArray()),nn.none())}}function EC(e,t,n){e instanceof Ps?function(i,s,o){const a=i.value.clone(),c=bd(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof _r?function(i,s,o){if(!mo(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=bd(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(By(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ni(e,t,n,r){return e instanceof Ps?function(s,o,a,c){if(!mo(s.precondition,o))return a;const l=s.value.clone(),u=Td(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof _r?function(s,o,a,c){if(!mo(s.precondition,o))return a;const l=Td(s.fieldTransforms,c,o),u=o.data;return u.setAll(By(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(e,t,n,r):function(s,o,a){return mo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function wC(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Vy(r.transform,i||null);s!=null&&(n===null&&(n=Ee.empty()),n.set(r.field,s))}return n||null}function Id(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wr(r,i,(s,o)=>AC(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ps extends Ba{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _r extends Ba{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function By(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function bd(e,t,n){const r=new Map;wt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,_C(o,a,n[i]))}return r}function Td(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yC(s,o,t))}return r}class Uy extends Ba{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IC extends Ba{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bC{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&EC(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ni(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ni(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=ky();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Ly(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),rt())}isEqual(t){return this.batchId===t.batchId&&Wr(this.mutations,t.mutations,(n,r)=>Id(n,r))&&Wr(this.baseMutations,t.baseMutations,(n,r)=>Id(n,r))}}class Zu{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){wt(t.mutations.length===r.length);let i=function(){return hC}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zu(t,n,r,i)}}/**
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
 */class TC{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class CC{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var xt,it;function RC(e){switch(e){default:return W();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function jy(e){if(e===void 0)return an("GRPC error has no .code"),C.UNKNOWN;switch(e){case xt.OK:return C.OK;case xt.CANCELLED:return C.CANCELLED;case xt.UNKNOWN:return C.UNKNOWN;case xt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case xt.INTERNAL:return C.INTERNAL;case xt.UNAVAILABLE:return C.UNAVAILABLE;case xt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case xt.NOT_FOUND:return C.NOT_FOUND;case xt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case xt.ABORTED:return C.ABORTED;case xt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case xt.DATA_LOSS:return C.DATA_LOSS;default:return W()}}(it=xt||(xt={}))[it.OK=0]="OK",it[it.CANCELLED=1]="CANCELLED",it[it.UNKNOWN=2]="UNKNOWN",it[it.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",it[it.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",it[it.NOT_FOUND=5]="NOT_FOUND",it[it.ALREADY_EXISTS=6]="ALREADY_EXISTS",it[it.PERMISSION_DENIED=7]="PERMISSION_DENIED",it[it.UNAUTHENTICATED=16]="UNAUTHENTICATED",it[it.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",it[it.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",it[it.ABORTED=10]="ABORTED",it[it.OUT_OF_RANGE=11]="OUT_OF_RANGE",it[it.UNIMPLEMENTED=12]="UNIMPLEMENTED",it[it.INTERNAL=13]="INTERNAL",it[it.UNAVAILABLE=14]="UNAVAILABLE",it[it.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class tf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Gs}static getOrCreateInstance(){return Gs===null&&(Gs=new tf),Gs}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Gs=null;/**
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
 */function PC(){return new TextEncoder}/**
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
 */const SC=new Fr([4294967295,4294967295],0);function Cd(e){const t=PC().encode(e),n=new xT;return n.update(t),new Uint8Array(n.digest())}function Rd(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Fr([n,r],0),new Fr([i,s],0)]}class ef{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wi(`Invalid padding: ${n}`);if(r<0)throw new wi(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new wi(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new wi(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=Fr.fromNumber(this.de)}Re(t,n,r){let i=t.add(n.multiply(Fr.fromNumber(r)));return i.compare(SC)===1&&(i=new Fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=Cd(t),[r,i]=Rd(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new ef(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=Cd(t),[r,i]=Rd(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ua{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Ss.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Ua(X.min(),i,new bt(ot),ln(),rt())}}class Ss{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ss(r,n,rt(),rt(),rt())}}/**
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
 */class po{constructor(t,n,r,i){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=i}}class $y{constructor(t,n){this.targetId=t,this.pe=n}}class zy{constructor(t,n,r=ie.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Pd{constructor(){this.ye=0,this.we=xd(),this.Se=ie.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=rt(),n=rt(),r=rt();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Ss(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=xd()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class xC{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=ln(),this.$e=Sd(),this.Ue=new bt(ot)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:W()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(t){var n,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Al(a))if(s===0){const c=new q(a.path);this.ze(i,c,Jt.newNoDocument(c,X.min()))}else wt(s===1);else{const c=this.et(i);if(c!==s){const l=this.tt(t,c);if(l.status!==0){this.Ye(i);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=tf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(f,h,d,_){var E,I,y,A,k,S;const Q={localCacheCount:d,existenceFilterCount:_.count},et=_.unchangedNames;return et&&(Q.bloomFilter={applied:f===0,hashCount:(E=et==null?void 0:et.hashCount)!==null&&E!==void 0?E:0,bitmapLength:(A=(y=(I=et==null?void 0:et.bits)===null||I===void 0?void 0:I.bitmap)===null||y===void 0?void 0:y.length)!==null&&A!==void 0?A:0,padding:(S=(k=et==null?void 0:et.bits)===null||k===void 0?void 0:k.padding)!==null&&S!==void 0?S:0},h&&(Q.bloomFilter.mightContain=h)),Q}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=dr(s).toUint8Array()}catch(f){if(f instanceof Ay)return Qr("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw f}try{l=new ef(c,o,a)}catch(f){return Qr(f instanceof wi?"BloomFilter error: ":"Applying bloom filter failed: ",f),{status:1}}const u=f=>{const h=this.qe.rt();return l.mightContain(`projects/${h.projectId}/databases/${h.database}/documents/${f}`)};return l.de===0?{status:1}:{status:i===n-this.it(t.targetId,u)?0:2,nt:u}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Al(a.target)){const c=new q(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,Jt.newNoDocument(c,t))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=rt();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new Ua(t,n,this.Ue,this.Ke,r);return this.Ke=ln(),this.$e=Sd(),this.Ue=new bt(ot),i}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Pd,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new re(ot),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||U("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Pd),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Sd(){return new bt(q.comparator)}function xd(){return new bt(q.comparator)}const kC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),DC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),OC=(()=>({and:"AND",or:"OR"}))();class VC{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function wl(e,t){return e.useProto3Json||Va(t)?t:{value:t}}function Ho(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hy(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function NC(e,t){return Ho(e,t.toTimestamp())}function Ke(e){return wt(!!e),X.fromTimestamp(function(n){const r=Nn(n);return new Vt(r.seconds,r.nanos)}(e))}function nf(e,t){return function(r){return new It(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function qy(e){const t=It.fromString(e);return wt(Gy(t)),t}function Il(e,t){return nf(e.databaseId,t.path)}function bc(e,t){const n=qy(t);if(n.get(1)!==e.databaseId.projectId)throw new H(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new H(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new q(Ky(n))}function bl(e,t){return nf(e.databaseId,t)}function MC(e){const t=qy(e);return t.length===4?It.emptyPath():Ky(t)}function Tl(e){return new It(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ky(e){return wt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function kd(e,t,n){return{name:Il(e,t),fields:n.value.mapValue.fields}}function FC(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:W()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(wt(u===void 0||typeof u=="string"),ie.fromBase64String(u||"")):(wt(u===void 0||u instanceof Uint8Array),ie.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:jy(l.code);return new H(u,l.message||"")}(o);n=new zy(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=bc(e,r.document.name),s=Ke(r.document.updateTime),o=r.document.createTime?Ke(r.document.createTime):X.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=Jt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new po(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=bc(e,r.document),s=r.readTime?Ke(r.readTime):X.min(),o=Jt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new po([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=bc(e,r.document),s=r.removedTargetIds||[];n=new po([],s,i,null)}else{if(!("filter"in t))return W();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CC(i,s),a=r.targetId;n=new $y(a,o)}}return n}function LC(e,t){let n;if(t instanceof Ps)n={update:kd(e,t.key,t.value)};else if(t instanceof Uy)n={delete:Il(e,t.key)};else if(t instanceof _r)n={update:kd(e,t.key,t.data),updateMask:QC(t.fieldMask)};else{if(!(t instanceof IC))return W();n={verify:Il(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof $o)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof as)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw W()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:NC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(e,t.precondition)),n}function BC(e,t){return e&&e.length>0?(wt(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Ke(i.updateTime):Ke(s);return o.isEqual(X.min())&&(o=Ke(s)),new vC(o,i.transformResults||[])}(n,t))):[]}function UC(e,t){return{documents:[bl(e,t.path)]}}function jC(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=bl(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=bl(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Wy(Ge.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(f){return{field:Rr(f.field),direction:HC(f.dir)}}(l))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=wl(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function $C(e){let t=MC(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){wt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(f){const h=Qy(f);return h instanceof Ge&&Iy(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(_){return new Oi(Pr(_.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,Va(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(f){const h=!!f.before,d=f.values||[];return new jo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(f){const h=!f.before,d=f.values||[];return new jo(d,h)}(n.endAt)),sC(t,i,o,s,a,"F",c,l)}function zC(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Qy(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Pr(n.unaryFilter.field);return Ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pr(n.unaryFilter.field);return Ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pr(n.unaryFilter.field);return Ot.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pr(n.unaryFilter.field);return Ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(e):e.fieldFilter!==void 0?function(n){return Ot.create(Pr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Ge.create(n.compositeFilter.filters.map(r=>Qy(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(e):W()}function HC(e){return kC[e]}function qC(e){return DC[e]}function KC(e){return OC[e]}function Rr(e){return{fieldPath:e.canonicalString()}}function Pr(e){return te.fromServerFormat(e.fieldPath)}function Wy(e){return e instanceof Ot?function(n){if(n.op==="=="){if(yd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NAN"}};if(gd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NOT_NAN"}};if(gd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rr(n.field),op:qC(n.op),value:n.value}}}(e):e instanceof Ge?function(n){const r=n.getFilters().map(i=>Wy(i));return r.length===1?r[0]:{compositeFilter:{op:KC(n.op),filters:r}}}(e):W()}function QC(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Gy(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class In{constructor(t,n,r,i,s=X.min(),o=X.min(),a=ie.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new In(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class WC{constructor(t){this.ct=t}}function GC(e){const t=$C({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?vl(t,t.limit,"L"):t}/**
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
 */class YC{constructor(){this.sn=new XC}addToCollectionParentIndex(t,n){return this.sn.add(n),P.resolve()}getCollectionParents(t,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return P.resolve()}deleteFieldIndex(t,n){return P.resolve()}getDocumentsMatchingTarget(t,n){return P.resolve(null)}getIndexType(t,n){return P.resolve(0)}getFieldIndexes(t,n){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,n){return P.resolve(Vn.min())}getMinOffsetFromCollectionGroup(t,n){return P.resolve(Vn.min())}updateCollectionGroup(t,n,r){return P.resolve()}updateIndexEntries(t,n){return P.resolve()}}class XC{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new re(It.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new re(It.comparator)).toArray()}}/**
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
 */class JC{constructor(){this.changes=new ci(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Jt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ZC{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class tR{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Ni(r.mutation,i,Re.empty(),Vt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,rt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=rt()){const i=tr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ei();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=tr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,rt()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=ln();const o=Vi(),a=function(){return Vi()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof _r)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ni(u.mutation,l,u.mutation.getFieldMask(),Vt.now())):o.set(l.key,Re.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new ZC(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Vi();let i=new bt((o,a)=>o-a),s=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Re.empty();u=a.applyToLocalView(l,u),r.set(c,u);const f=(i.get(a.batchId)||rt()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=ky();u.forEach(h=>{if(!s.has(h)){const d=Ly(n.get(h),r.get(h));d!==null&&f.set(h,d),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,f))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):cC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):P.resolve(tr());let a=-1,c=s;return o.next(l=>P.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?P.resolve():this.remoteDocumentCache.getEntry(t,u).next(h=>{c=c.insert(u,h)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,c,l,rt())).next(u=>({batchId:a,changes:xy(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new q(n)).next(r=>{let i=Ei();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Ei();return this.indexManager.getCollectionParents(t,i).next(o=>P.forEach(o,a=>{const c=function(u,f){return new Na(f,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,f)=>{s=s.insert(u,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Jt.newInvalidDocument(l)))});let o=Ei();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ni(l.mutation,c,Re.empty(),Vt.now()),Fa(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class eR{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return P.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ke(i.createTime)}}(n)),P.resolve()}getNamedQuery(t,n){return P.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:GC(i.bundledQuery),readTime:Ke(i.readTime)}}(n)),P.resolve()}}/**
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
 */class nR{constructor(){this.overlays=new bt(q.comparator),this.cr=new Map}getOverlay(t,n){return P.resolve(this.overlays.get(n))}getOverlays(t,n){const r=tr();return P.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),P.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),P.resolve()}getOverlaysForCollection(t,n,r){const i=tr(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return P.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new bt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=tr(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=tr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return P.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TC(n,r));let s=this.cr.get(n);s===void 0&&(s=rt(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class rf{constructor(){this.lr=new re(Ft.hr),this.Pr=new re(Ft.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new Ft(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new Ft(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new q(new It([])),r=new Ft(n,t),i=new Ft(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new q(new It([])),r=new Ft(n,t),i=new Ft(n,t+1);let s=rt();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ft(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ft{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return q.comparator(t.key,n.key)||ot(t.mr,n.mr)}static Ir(t,n){return ot(t.mr,n.mr)||q.comparator(t.key,n.key)}}/**
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
 */class rR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new re(Ft.hr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bC(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ft(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(t,n){return P.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ft(n,0),i=new Ft(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new re(ot);return n.forEach(i=>{const s=new Ft(i,0),o=new Ft(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),P.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ft(new q(s),0);let a=new re(ot);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.mr)),!0)},o),P.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){wt(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return P.forEach(n.mutations,i=>{const s=new Ft(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new Ft(n,0),i=this.pr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iR{constructor(t){this.Dr=t,this.docs=function(){return new bt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(t,n){let r=ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Jt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=ln();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||$T(jT(u),r)<=0||(i.has(u.key)||Fa(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(t,n,r,i){W()}vr(t,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new sR(this)}getSize(t){return P.resolve(this.size)}}class sR extends JC{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),P.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
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
 */class oR{constructor(t){this.persistence=t,this.Cr=new ci(n=>Yu(n),Xu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new rf,this.targetCount=0,this.Or=Xr.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),P.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new Xr(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,P.resolve()}updateTargetData(t,n){return this.Ln(n),P.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return P.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),P.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),P.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return P.resolve(r)}containsKey(t,n){return P.resolve(this.Mr.containsKey(n))}}/**
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
 */class aR{constructor(t,n){this.Nr={},this.overlays={},this.Br=new Ku(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new oR(this),this.indexManager=new YC,this.remoteDocumentCache=function(i){return new iR(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new WC(n),this.Qr=new eR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new nR,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new rR(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){U("MemoryPersistence","Starting transaction:",t);const i=new cR(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return P.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class cR extends HT{constructor(t){super(),this.currentSequenceNumber=t}}class sf{constructor(t){this.persistence=t,this.Wr=new rf,this.Gr=null}static zr(t){return new sf(t)}get jr(){if(this.Gr)return this.Gr;throw W()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),P.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),P.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.jr,r=>{const i=q.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return P.or([()=>P.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
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
 */class of{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=rt(),i=rt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new of(t,n.fromCache,r,i)}}/**
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
 */class lR{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if(Ed(n))return P.resolve(null);let r=cn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vl(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=rt(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(t,vl(n,null,"F")):this.ji(t,l,n,c)}))})))}Ui(t,n,r,i){return Ed(n)||i.isEqual(X.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(hd()<=ut.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),El(n)),this.ji(t,o,n,UT(i,-1)))})}Gi(t,n){let r=new re(Py(t));return n.forEach((i,s)=>{Fa(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return hd()<=ut.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",El(n)),this.Ki.getDocumentsMatchingQuery(t,n,Vn.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class uR{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new bt(ot),this.Yi=new ci(s=>Yu(s),Xu),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tR(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function fR(e,t,n,r){return new uR(e,t,n,r)}async function Yy(e,t){const n=Z(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=rt();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function hR(e,t){const n=Z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const f=l.batch,h=f.keys();let d=P.resolve();return h.forEach(_=>{d=d.next(()=>u.getEntry(c,_)).next(E=>{const I=l.docVersions.get(_);wt(I!==null),E.version.compareTo(I)<0&&(f.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=rt();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Xy(e){const t=Z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function dR(e,t){const n=Z(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((u,f)=>{const h=i.get(f);if(!h)return;a.push(n.kr.removeMatchingKeys(s,u.removedDocuments,f).next(()=>n.kr.addMatchingKeys(s,u.addedDocuments,f)));let d=h.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?d=d.withResumeToken(ie.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(f,d),function(E,I,y){return E.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(h,d,u)&&a.push(n.kr.updateTargetData(s,d))});let c=ln(),l=rt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(mR(s,o,t.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(X.min())){const u=n.kr.getLastRemoteSnapshotVersion(s).next(f=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Ji=i,s))}function mR(e,t,n){let r=rt(),i=rt();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=ln();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:i}})}function pR(e,t){const n=Z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function gR(e,t){const n=Z(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,t).next(s=>s?(i=s,P.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new In(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function Cl(e,t,n){const r=Z(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rs(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Dd(e,t,n){const r=Z(e);let i=X.min(),s=rt();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const f=Z(c),h=f.Yi.get(u);return h!==void 0?P.resolve(f.Ji.get(h)):f.kr.getTargetData(l,u)}(r,o,cn(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?i:X.min(),n?s:rt())).next(a=>(yR(r,lC(t),a),{documents:a,ss:s})))}function yR(e,t,n){let r=e.Zi.get(t)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Zi.set(t,r)}class Od{constructor(){this.activeTargetIds=pC()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _R{constructor(){this.Hs=new Od,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Od,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class AR{Ys(t){}shutdown(){}}/**
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
 */class Vd{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ys=null;function Tc(){return Ys===null?Ys=function(){return 268435456+Math.round(2147483648*Math.random())}():Ys++,"0x"+Ys.toString(16)}/**
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
 */const vR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ER{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
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
 */const Yt="WebChannelConnection";class wR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Tc(),c=this.mo(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,s,o),this.po(n,c,l,i).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Qr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=vR[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){const s=Tc();return new Promise((o,a)=>{const c=new ST;c.setWithCredentials(!0),c.listenOnce(CT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ic.NO_ERROR:const u=c.getResponseJson();U(Yt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Ic.TIMEOUT:U(Yt,`RPC '${t}' ${s} timed out`),a(new H(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const f=c.getStatus();if(U(Yt,`RPC '${t}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let h=c.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const _=function(I){const y=I.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(y)>=0?y:C.UNKNOWN}(d.status);a(new H(_,d.message))}else a(new H(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(C.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U(Yt,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);U(Yt,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}wo(t,n,r){const i=Tc(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=bT(),a=TT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new PT({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");U(Yt,`Creating RPC '${t}' stream ${i}: ${u}`,c);const f=o.createWebChannel(u,c);let h=!1,d=!1;const _=new ER({so:I=>{d?U(Yt,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(h||(U(Yt,`Opening RPC '${t}' stream ${i} transport.`),f.open(),h=!0),U(Yt,`RPC '${t}' stream ${i} sending:`,I),f.send(I))},oo:()=>f.close()}),E=(I,y,A)=>{I.listen(y,k=>{try{A(k)}catch(S){setTimeout(()=>{throw S},0)}})};return E(f,Ks.EventType.OPEN,()=>{d||U(Yt,`RPC '${t}' stream ${i} transport opened.`)}),E(f,Ks.EventType.CLOSE,()=>{d||(d=!0,U(Yt,`RPC '${t}' stream ${i} transport closed`),_.Po())}),E(f,Ks.EventType.ERROR,I=>{d||(d=!0,Qr(Yt,`RPC '${t}' stream ${i} transport errored:`,I),_.Po(new H(C.UNAVAILABLE,"The operation could not be completed")))}),E(f,Ks.EventType.MESSAGE,I=>{var y;if(!d){const A=I.data[0];wt(!!A);const k=A,S=k.error||((y=k[0])===null||y===void 0?void 0:y.error);if(S){U(Yt,`RPC '${t}' stream ${i} received error:`,S);const Q=S.status;let et=function($t){const se=xt[$t];if(se!==void 0)return jy(se)}(Q),yt=S.message;et===void 0&&(et=C.INTERNAL,yt="Unknown error status: "+Q+" with message "+S.message),d=!0,_.Po(new H(et,yt)),f.close()}else U(Yt,`RPC '${t}' stream ${i} received:`,A),_.Io(A)}}),E(a,RT.STAT_EVENT,I=>{I.stat===ud.PROXY?U(Yt,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===ud.NOPROXY&&U(Yt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.ho()},0),_}}function Cc(){return typeof document<"u"?document:null}/**
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
 */function ja(e){return new VC(e,!0)}/**
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
 */class Jy{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Zy{constructor(t,n,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Jy(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{const i=new H(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IR extends Zy{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=FC(this.serializer,t),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Ke(o.readTime):X.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=Tl(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Al(c)?{documents:UC(s,c)}:{query:jC(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Hy(s,o.resumeToken);const l=wl(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Ho(s,o.snapshotVersion.toTimestamp());const l=wl(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=zC(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=Tl(this.serializer),n.removeTarget=t,this.Ho(n)}}class bR extends Zy{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(wt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=BC(t.writeResults,t.commitTime),r=Ke(t.commitTime);return this.listener.u_(r,n)}return wt(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Tl(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>LC(this.serializer,r))};this.Ho(n)}}/**
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
 */class TR extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new H(C.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(C.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(C.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class CR{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(an(n),this.d_=!1):U("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class RR{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Ar(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Z(c);l.y_.add(4),await xs(l),l.b_.set("Unknown"),l.y_.delete(4),await $a(l)}(this))})}),this.b_=new CR(r,i)}}async function $a(e){if(Ar(e))for(const t of e.w_)await t(!0)}async function xs(e){for(const t of e.w_)await t(!1)}function t_(e,t){const n=Z(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),lf(n)?cf(n):li(n).Uo()&&af(n,t))}function e_(e,t){const n=Z(e),r=li(n);n.p_.delete(t),r.Uo()&&n_(n,t),n.p_.size===0&&(r.Uo()?r.zo():Ar(n)&&n.b_.set("Unknown"))}function af(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}li(e).i_(t)}function n_(e,t){e.D_.Be(t),li(e).s_(t)}function cf(e){e.D_=new xC({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),li(e).start(),e.b_.A_()}function lf(e){return Ar(e)&&!li(e).$o()&&e.p_.size>0}function Ar(e){return Z(e).y_.size===0}function r_(e){e.D_=void 0}async function PR(e){e.p_.forEach((t,n)=>{af(e,t)})}async function SR(e,t){r_(e),lf(e)?(e.b_.m_(t),cf(e)):e.b_.set("Unknown")}async function xR(e,t,n){if(e.b_.set("Online"),t instanceof zy&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(e,t)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await qo(e,r)}else if(t instanceof po?e.D_.We(t):t instanceof $y?e.D_.Ze(t):e.D_.je(t),!n.isEqual(X.min()))try{const r=await Xy(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.p_.get(l);u&&s.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.p_.get(c);if(!u)return;s.p_.set(c,u.withResumeToken(ie.EMPTY_BYTE_STRING,u.snapshotVersion)),n_(s,c);const f=new In(u.target,c,l,u.sequenceNumber);af(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await qo(e,r)}}async function qo(e,t,n){if(!Rs(t))throw t;e.y_.add(1),await xs(e),e.b_.set("Offline"),n||(n=()=>Xy(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await $a(e)})}function i_(e,t){return t().catch(n=>qo(e,n,t))}async function za(e){const t=Z(e),n=Mn(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;kR(t);)try{const i=await pR(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,DR(t,i)}catch(i){await qo(t,i)}s_(t)&&o_(t)}function kR(e){return Ar(e)&&e.g_.length<10}function DR(e,t){e.g_.push(t);const n=Mn(e);n.Uo()&&n.__&&n.a_(t.mutations)}function s_(e){return Ar(e)&&!Mn(e).$o()&&e.g_.length>0}function o_(e){Mn(e).start()}async function OR(e){Mn(e).l_()}async function VR(e){const t=Mn(e);for(const n of e.g_)t.a_(n.mutations)}async function NR(e,t,n){const r=e.g_.shift(),i=Zu.from(r,t,n);await i_(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await za(e)}async function MR(e,t){t&&Mn(e).__&&await async function(r,i){if(function(o){return RC(o)&&o!==C.ABORTED}(i.code)){const s=r.g_.shift();Mn(r).Go(),await i_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await za(r)}}(e,t),s_(e)&&o_(e)}async function Nd(e,t){const n=Z(e);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Ar(n);n.y_.add(3),await xs(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await $a(n)}async function FR(e,t){const n=Z(e);t?(n.y_.delete(2),await $a(n)):t||(n.y_.add(2),await xs(n),n.b_.set("Unknown"))}function li(e){return e.v_||(e.v_=function(n,r,i){const s=Z(n);return s.P_(),new IR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:PR.bind(null,e),uo:SR.bind(null,e),r_:xR.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),lf(e)?cf(e):e.b_.set("Unknown")):(await e.v_.stop(),r_(e))})),e.v_}function Mn(e){return e.C_||(e.C_=function(n,r,i){const s=Z(n);return s.P_(),new bR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:OR.bind(null,e),uo:MR.bind(null,e),c_:VR.bind(null,e),u_:NR.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await za(e)):(await e.C_.stop(),e.g_.length>0&&(U("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
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
 */class uf{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new uf(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ff(e,t){if(an("AsyncQueue",`${t}: ${e}`),Rs(e))return new H(C.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Md{constructor(){this.F_=new bt(q.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):W():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Jr{constructor(t,n,r,i,s,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Jr(t,n,Br.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ma(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class LR{constructor(){this.x_=void 0,this.listeners=[]}}class BR{constructor(){this.queries=new ci(t=>Ry(t),Ma),this.onlineState="Unknown",this.O_=new Set}}async function UR(e,t){const n=Z(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new LR),i)try{s.x_=await n.onListen(r)}catch(o){const a=ff(o,`Initialization of query '${El(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&hf(n)}async function jR(e,t){const n=Z(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $R(e,t){const n=Z(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&hf(n)}function zR(e,t,n){const r=Z(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function hf(e){e.O_.forEach(t=>{t.next()})}class HR{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Jr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=Jr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
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
 */class a_{constructor(t){this.key=t}}class c_{constructor(t){this.key=t}}class qR{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=rt(),this.mutatedKeys=rt(),this.na=Py(t),this.ra=new Br(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new Md,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,f)=>{const h=i.get(u),d=Fa(this.query,f)?f:null,_=!!h&&this.mutatedKeys.has(h.key),E=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let I=!1;h&&d?h.data.isEqual(d.data)?_!==E&&(r.track({type:3,doc:d}),I=!0):this._a(h,d)||(r.track({type:2,doc:d}),I=!0,(c&&this.na(d,c)>0||l&&this.na(d,l)<0)&&(a=!0)):!h&&d?(r.track({type:0,doc:d}),I=!0):h&&!d&&(r.track({type:1,doc:h}),I=!0,(c||l)&&(a=!0)),I&&(d?(o=o.add(d),s=E?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((l,u)=>function(h,d){const _=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return _(h)-_(d)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new Jr(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Md,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=rt(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new c_(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new a_(r))}),n}ha(t){this.X_=t.ss,this.ta=rt();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return Jr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class KR{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class QR{constructor(t){this.key=t,this.Ia=!1}}class WR{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ci(a=>Ry(a),Ma),this.da=new Map,this.Aa=new Set,this.Ra=new bt(q.comparator),this.Va=new Map,this.ma=new rf,this.fa={},this.ga=new Map,this.pa=Xr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function GR(e,t){const n=sP(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await gR(n.localStore,cn(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await YR(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&t_(n.remoteStore,o)}return i}async function YR(e,t,n,r,i){e.wa=(f,h,d)=>async function(E,I,y,A){let k=I.view.sa(y);k.zi&&(k=await Dd(E.localStore,I.query,!1).then(({documents:et})=>I.view.sa(et,k)));const S=A&&A.targetChanges.get(I.targetId),Q=I.view.applyChanges(k,E.isPrimaryClient,S);return Ld(E,I.targetId,Q.ca),Q.snapshot}(e,f,h,d);const s=await Dd(e.localStore,t,!0),o=new qR(t,s.ss),a=o.sa(s.documents),c=Ss.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),l=o.applyChanges(a,e.isPrimaryClient,c);Ld(e,n,l.ca);const u=new KR(t,n,o);return e.Ea.set(t,u),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),l.snapshot}async function XR(e,t){const n=Z(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Ma(s,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Cl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e_(n.remoteStore,r.targetId),Rl(n,r.targetId)}).catch(Cs)):(Rl(n,r.targetId),await Cl(n.localStore,r.targetId,!0))}async function JR(e,t,n){const r=oP(e);try{const i=await function(o,a){const c=Z(o),l=Vt.now(),u=a.reduce((d,_)=>d.add(_.key),rt());let f,h;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let _=ln(),E=rt();return c.Xi.getEntries(d,u).next(I=>{_=I,_.forEach((y,A)=>{A.isValidDocument()||(E=E.add(y))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,_)).next(I=>{f=I;const y=[];for(const A of a){const k=wC(A,f.get(A.key).overlayedDocument);k!=null&&y.push(new _r(A.key,k,vy(k.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(d,l,y,a)}).next(I=>{h=I;const y=I.applyToLocalDocumentSet(f,E);return c.documentOverlayCache.saveOverlays(d,I.batchId,y)})}).then(()=>({batchId:h.batchId,changes:xy(f)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new bt(ot)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,i.batchId,n),await ks(r,i.changes),await za(r.remoteStore)}catch(i){const s=ff(i,"Failed to persist write");n.reject(s)}}async function l_(e,t){const n=Z(e);try{const r=await dR(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(wt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?wt(o.Ia):i.removedDocuments.size>0&&(wt(o.Ia),o.Ia=!1))}),await ks(n,r,t)}catch(r){await Cs(r)}}function Fd(e,t,n){const r=Z(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=Z(o);c.onlineState=a;let l=!1;c.queries.forEach((u,f)=>{for(const h of f.listeners)h.N_(a)&&(l=!0)}),l&&hf(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ZR(e,t,n){const r=Z(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new bt(q.comparator);o=o.insert(s,Jt.newNoDocument(s,X.min()));const a=rt().add(s),c=new Ua(X.min(),new Map,new bt(ot),o,a);await l_(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),df(r)}else await Cl(r.localStore,t,!1).then(()=>Rl(r,t,n)).catch(Cs)}async function tP(e,t){const n=Z(e),r=t.batch.batchId;try{const i=await hR(n.localStore,t);f_(n,r,null),u_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ks(n,i)}catch(i){await Cs(i)}}async function eP(e,t,n){const r=Z(e);try{const i=await function(o,a){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(f=>(wt(f!==null),u=f.keys(),c.mutationQueue.removeMutationBatch(l,f))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);f_(r,t,n),u_(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ks(r,i)}catch(i){await Cs(i)}}function u_(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function f_(e,t,n){const r=Z(e);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function Rl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||h_(e,r)})}function h_(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(e_(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),df(e))}function Ld(e,t,n){for(const r of n)r instanceof a_?(e.ma.addReference(r.key,t),nP(e,r)):r instanceof c_?(U("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||h_(e,r.key)):W()}function nP(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(U("SyncEngine","New document in limbo: "+n),e.Aa.add(r),df(e))}function df(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new q(It.fromString(t)),r=e.pa.next();e.Va.set(r,new QR(n)),e.Ra=e.Ra.insert(n,r),t_(e.remoteStore,new In(cn(Ju(n.path)),r,"TargetPurposeLimboResolution",Ku.ae))}}async function ks(e,t,n){const r=Z(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=of.qi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,l){const u=Z(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>P.forEach(l,h=>P.forEach(h.Li,d=>u.persistence.referenceDelegate.addReference(f,h.targetId,d)).next(()=>P.forEach(h.ki,d=>u.persistence.referenceDelegate.removeReference(f,h.targetId,d)))))}catch(f){if(!Rs(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of l){const h=f.targetId;if(!f.fromCache){const d=u.Ji.get(h),_=d.snapshotVersion,E=d.withLastLimboFreeSnapshotVersion(_);u.Ji=u.Ji.insert(h,E)}}}(r.localStore,s))}async function rP(e,t){const n=Z(e);if(!n.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await Yy(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new H(C.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ks(n,r.ts)}}function iP(e,t){const n=Z(e),r=n.Va.get(t);if(r&&r.Ia)return rt().add(r.key);{let i=rt();const s=n.da.get(t);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function sP(e){const t=Z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=l_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=iP.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ZR.bind(null,t),t.Ta.r_=$R.bind(null,t.eventManager),t.Ta.Sa=zR.bind(null,t.eventManager),t}function oP(e){const t=Z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tP.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=eP.bind(null,t),t}class Bd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ja(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return fR(this.persistence,new lR,t.initialUser,this.serializer)}createPersistence(t){return new aR(sf.zr,this.serializer)}createSharedClientState(t){return new _R}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aP{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rP.bind(null,this.syncEngine),await FR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new BR}()}createDatastore(t){const n=ja(t.databaseInfo.databaseId),r=function(s){return new wR(s)}(t.databaseInfo);return function(s,o,a,c){return new TR(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new RR(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Fd(this.syncEngine,n,0),function(){return Vd.v()?new Vd:new AR}())}createSyncEngine(t,n){return function(i,s,o,a,c,l,u){const f=new WR(i,s,o,a,c,l);return u&&(f.ya=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);U("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await xs(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class cP{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):an("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class lP{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=yy.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ff(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Rc(e,t){e.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Yy(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ud(e,t){e.asyncQueue.verifyOperationInProgress();const n=await fP(e);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Nd(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Nd(t.remoteStore,s)),e._onlineComponents=t}function uP(e){return e.name==="FirebaseError"?e.code===C.FAILED_PRECONDITION||e.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function fP(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!uP(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await Rc(e,new Bd)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Rc(e,new Bd);return e._offlineComponents}async function d_(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Ud(e,e._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Ud(e,new aP))),e._onlineComponents}function hP(e){return d_(e).then(t=>t.syncEngine)}async function jd(e){const t=await d_(e),n=t.eventManager;return n.onListen=GR.bind(null,t.syncEngine),n.onUnlisten=XR.bind(null,t.syncEngine),n}/**
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
 */function m_(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const $d=new Map;/**
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
 */function p_(e,t,n){if(!n)throw new H(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function dP(e,t,n,r){if(t===!0&&r===!0)throw new H(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function zd(e){if(!q.isDocumentKey(e))throw new H(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Hd(e){if(q.isDocumentKey(e))throw new H(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function mf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":W()}function Mi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new H(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mf(e);throw new H(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class qd{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new H(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new H(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dP("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=m_((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ha{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new H(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qd(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kT;switch(r.type){case"firstParty":return new NT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$d.get(n);r&&(U("ComponentProvider","Removing Datastore"),$d.delete(n),r.terminate())}(this),Promise.resolve()}}function mP(e,t,n,r={}){var i;const s=(e=Mi(e,Ha))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Xt.MOCK_USER;else{a=xw(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new H(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Xt(l)}e._authCredentials=new DT(new gy(a,c))}}/**
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
 */class qa{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new qa(this.firestore,t,this._query)}}class Ie{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ie(this.firestore,t,this._key)}}class xn extends qa{constructor(t,n,r){super(t,n,Ju(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ie(this.firestore,null,new q(t))}withConverter(t){return new xn(this.firestore,t,this._path)}}function g_(e,t,...n){if(e=Dn(e),p_("collection","path",t),e instanceof Ha){const r=It.fromString(t,...n);return Hd(r),new xn(e,null,r)}{if(!(e instanceof Ie||e instanceof xn))throw new H(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(It.fromString(t,...n));return Hd(r),new xn(e.firestore,null,r)}}function y_(e,t,...n){if(e=Dn(e),arguments.length===1&&(t=yy.V()),p_("doc","path",t),e instanceof Ha){const r=It.fromString(t,...n);return zd(r),new Ie(e,null,new q(r))}{if(!(e instanceof Ie||e instanceof xn))throw new H(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(It.fromString(t,...n));return zd(r),new Ie(e.firestore,e instanceof xn?e.converter:null,new q(r))}}/**
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
 */class pP{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Jy(this,"async_queue_retry"),this.Xa=()=>{const n=Cc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=Cc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new ar;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Rs(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw an("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const i=uf.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&W()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}function Kd(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Ko extends Ha{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new pP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||A_(this),this._firestoreClient.terminate()}}function gP(e,t){const n=typeof e=="object"?e:jp(),r=typeof e=="string"?e:t||"(default)",i=gs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Pw("firestore");s&&mP(i,...s)}return i}function __(e){return e._firestoreClient||A_(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function A_(e){var t,n,r;const i=e._freezeSettings(),s=function(a,c,l,u){return new QT(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,m_(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new lP(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class pf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new H(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class v_{constructor(t){this._methodName=t}}/**
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
 */class gf{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new H(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new H(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ot(this._lat,t._lat)||ot(this._long,t._long)}}/**
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
 */const yP=/^__.*__$/;class _P{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new _r(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ps(t,this.data,n,this.fieldTransforms)}}function E_(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class yf{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new yf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Qo(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(E_(this.uu)&&yP.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class AP{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ja(t)}Ru(t,n,r,i=!1){return new yf({uu:t,methodName:n,Au:r,path:te.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vP(e){const t=e._freezeSettings(),n=ja(e._databaseId);return new AP(e._databaseId,!!t.ignoreUndefinedProperties,n)}function EP(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);T_("Data must be an object, but it was:",o,r);const a=I_(r,o);let c,l;if(s.merge)c=new Re(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const h=wP(t,f,n);if(!o.contains(h))throw new H(C.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);bP(u,h)||u.push(h)}c=new Re(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new _P(new Ee(a),c,l)}function w_(e,t){if(b_(e=Dn(e)))return T_("Unsupported field value:",t,e),I_(e,t);if(e instanceof v_)return function(r,i){if(!E_(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=w_(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Dn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Vt.fromDate(r);return{timestampValue:Ho(i.serializer,s)}}if(r instanceof Vt){const s=new Vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ho(i.serializer,s)}}if(r instanceof gf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:Hy(i.serializer,r._byteString)};if(r instanceof Ie){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nf(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${mf(r)}`)}(e,t)}function I_(e,t){const n={};return _y(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ai(e,(r,i)=>{const s=w_(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function b_(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Vt||e instanceof gf||e instanceof Zr||e instanceof Ie||e instanceof v_)}function T_(e,t,n){if(!b_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=mf(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function wP(e,t,n){if((t=Dn(t))instanceof pf)return t._internalPath;if(typeof t=="string")return C_(e,t);throw Qo("Field path arguments must be of type string or ",e,!1,void 0,n)}const IP=new RegExp("[~\\*/\\[\\]]");function C_(e,t,n){if(t.search(IP)>=0)throw Qo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pf(...t.split("."))._internalPath}catch{throw Qo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Qo(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new H(C.INVALID_ARGUMENT,a+e+c)}function bP(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class R_{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new TP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(P_("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TP extends R_{data(){return super.data()}}function P_(e,t){return typeof t=="string"?C_(e,t):t instanceof pf?t._internalPath:t._delegate._internalPath}/**
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
 */function CP(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new H(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class RP{convertValue(t,n="none"){switch(mr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return kt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(dr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw W()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ai(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new gf(kt(t.latitude),kt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Wu(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(is(t));default:return null}}convertTimestamp(t){const n=Nn(t);return new Vt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=It.fromString(t);wt(Gy(r));const i=new ss(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||an(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function PP(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Ii{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class S_ extends R_{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(P_("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class go extends S_{data(t={}){return super.data(t)}}class SP{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ii(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new go(this._firestore,this._userDataWriter,r.key,r,new Ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new go(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ii(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new go(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ii(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:xP(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xP(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}class x_ extends RP{constructor(t){super(),this.firestore=t}convertBytes(t){return new Zr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ie(this.firestore,null,n)}}function kP(e,t){const n=Mi(e.firestore,Ko),r=y_(e),i=PP(e.converter,t);return DP(n,[EP(vP(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function k_(e,...t){var n,r,i;e=Dn(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Kd(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Kd(t[o])){const f=t[o];t[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),t[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),t[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let c,l,u;if(e instanceof Ie)l=Mi(e.firestore,Ko),u=Ju(e._key.path),c={next:f=>{t[o]&&t[o](OP(l,e,f))},error:t[o+1],complete:t[o+2]};else{const f=Mi(e,qa);l=Mi(f.firestore,Ko),u=f._query;const h=new x_(l);c={next:d=>{t[o]&&t[o](new SP(l,h,f,d))},error:t[o+1],complete:t[o+2]},CP(e._query)}return function(h,d,_,E){const I=new cP(E),y=new HR(d,I,_);return h.asyncQueue.enqueueAndForget(async()=>UR(await jd(h),y)),()=>{I.Ca(),h.asyncQueue.enqueueAndForget(async()=>jR(await jd(h),y))}}(__(l),u,a,c)}function DP(e,t){return function(r,i){const s=new ar;return r.asyncQueue.enqueueAndForget(async()=>JR(await hP(r),i,s)),s.promise}(__(e),t)}function OP(e,t,n){const r=n.docs.get(t._key),i=new x_(e);return new S_(e,i,t._key,r,new Ii(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){oi=i})(MI),On(new sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ko(new OT(r.getProvider("auth-internal")),new FT(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new H(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ss(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),qe(fd,"4.1.0",t),qe(fd,"4.1.0","esm2017")})();const VP={apiKey:"AIzaSyDPHqqYyhuEJ7fIpRksToVYC5zbM1onZ3w",authDomain:"flex-fa8c8.firebaseapp.com",projectId:"flex-fa8c8",storageBucket:"flex-fa8c8.appspot.com",messagingSenderId:"824163771541",appId:"1:824163771541:web:83622e1bb9f3aada3f679c",measurementId:"G-SY23L7GKQC"},NP=Up(VP),_f=gP();v1(NP);const MP=e=>k_(g_(_f,"/routines"),e),FP=(e,t)=>k_(y_(_f,"/exercises",e),t),LP=async e=>{await kP(g_(_f,"routines"),e)};function BP(e){return Pm()?(RA(e),!0):!1}function D_(e){return typeof e=="function"?e():xe(e)}const O_=typeof window<"u",Pl=()=>{},UP=jP();function jP(){var e;return O_&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function bi(e){var t;const n=D_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const V_=O_?window:void 0;function Pc(...e){let t,n,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,i]=e,t=V_):[t,n,r,i]=e,!t)return Pl;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,h,d)=>(u.addEventListener(f,h,d),()=>u.removeEventListener(f,h,d)),c=ir(()=>[bi(t),D_(i)],([u,f])=>{o(),u&&s.push(...n.flatMap(h=>r.map(d=>a(u,h,d,f))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return BP(l),l}let Qd=!1;function $P(e,t,n={}){const{window:r=V_,ignore:i=[],capture:s=!0,detectIframe:o=!1}=n;if(!r)return;UP&&!Qd&&(Qd=!0,Array.from(r.document.body.children).forEach(h=>h.addEventListener("click",Pl)),r.document.documentElement.addEventListener("click",Pl));let a=!0;const c=h=>i.some(d=>{if(typeof d=="string")return Array.from(r.document.querySelectorAll(d)).some(_=>_===h.target||h.composedPath().includes(_));{const _=bi(d);return _&&(h.target===_||h.composedPath().includes(_))}}),u=[Pc(r,"click",h=>{const d=bi(e);if(!(!d||d===h.target||h.composedPath().includes(d))){if(h.detail===0&&(a=!c(h)),!a){a=!0;return}t(h)}},{passive:!0,capture:s}),Pc(r,"pointerdown",h=>{const d=bi(e);d&&(a=!h.composedPath().includes(d)&&!c(h))},{passive:!0}),o&&Pc(r,"blur",h=>{setTimeout(()=>{var d;const _=bi(e);((d=r.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(_!=null&&_.contains(r.document.activeElement))&&t(h)},0)})].filter(Boolean);return()=>u.forEach(h=>h())}const zP={class:"page"},HP={class:"selector-container"},qP=["value"],KP={class:"exercises-container center"},QP={key:0,class:"modal-bg center"},WP={__name:"Workouts",setup(e){const t=Ze([]),n=Ze({}),r=Ze([]),i=Ze(!1),s=Ze(null);$P(s,()=>i.value=!1);const o=()=>{MP(u=>{u.forEach(f=>{t.value.push({id:f.id,...f.data()})}),n.value=t.value[0]})},a=()=>{r.value=[],n.value[["exercises"]].forEach(u=>{FP(u,f=>{r.value.push({id:f.id,...f.data()})})})};ir(n,u=>a()),rp(()=>o());const c=()=>{i.value=!1},l=u=>{if(u=="")console.log("No ha rellenado el campo");else try{LP({name:u,exercises:[]}),t.value=[],i.value=!1}catch(f){console.log("Error al añadir: ",f)}};return(u,f)=>(Pt(),Lt("div",zP,[J("div",HP,[tp(J("select",{class:"selector","onUpdate:modelValue":f[0]||(f[0]=h=>n.value=h)},[(Pt(!0),Lt(ae,null,Hi(t.value,h=>(Pt(),Lt("option",{value:h},bn(h.name),9,qP))),256))],512),[[P0,n.value]]),J("img",{class:"h-9 w-9",src:KE,alt:"add",onClick:f[1]||(f[1]=h=>i.value=!0)})]),J("div",KP,[(Pt(!0),Lt(ae,null,Hi(r.value,h=>(Pt(),au(tw,{class:"exeCard",name:h.name,series:h.series,reps:h.reps},null,8,["name","series","reps"]))),256)),Ct(ow)]),i.value?(Pt(),Lt("div",QP,[Ct(_w,{ref_key:"modal",ref:s,onCancel:c,onAccept:l},null,512)])):Yv("",!0)]))}},GP=mn(WP,[["__scopeId","data-v-0f286444"]]);const YP={},XP={class:"page"};function JP(e,t){return Pt(),Lt("div",XP,"stats")}const ZP=mn(YP,[["render",JP],["__scopeId","data-v-1a10bf87"]]);const tS={class:"component"},eS={class:"title"},nS={class:"card"},rS={class:"row"},iS={__name:"TableData",props:{title:"",data:{type:Array,required:!0}},setup(e){const t=e;return(n,r)=>(Pt(),Lt("div",tS,[J("h1",eS,bn(t.title),1),J("div",nS,[(Pt(!0),Lt(ae,null,Hi(t.data,i=>(Pt(),Lt("div",rS,[J("h1",null,bn(i.key),1),J("h1",null,bn(i.value),1)]))),256))])]))}},Wd=mn(iS,[["__scopeId","data-v-a97af99a"]]);const sS=e=>(ca("data-v-22efc643"),e=e(),la(),e),oS={class:"page"},aS=sS(()=>J("header",null,[J("h1",null,"Hi, user"),J("h3",null,"You will achive your goals")],-1)),cS={__name:"User",setup(e){const t=[{key:"Height",value:"178"},{key:"Weight",value:"88"},{key:"IMC",value:"28.1"}],n=[{key:"Height",value:"178"},{key:"Weight",value:"95"},{key:"IMC",value:"30"}];return(r,i)=>(Pt(),Lt("div",oS,[aS,Ct(Wd,{data:t,title:"Current Data"}),Ct(Wd,{data:n,title:"Objectives"})]))}},lS=mn(cS,[["__scopeId","data-v-22efc643"]]),uS=NE({history:Z0("/Flex/"),routes:[{path:"/",name:"home",component:GP},{path:"/stats",name:"stats",component:ZP},{path:"/user",name:"user",component:lS}]});function Gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gd(Object(n),!0).forEach(function(r){Nt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wo(e){"@babel/helpers - typeof";return Wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wo(e)}function fS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hS(e,t,n){return t&&Yd(e.prototype,t),n&&Yd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Nt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Af(e,t){return mS(e)||gS(e,t)||N_(e,t)||_S()}function Ds(e){return dS(e)||pS(e)||N_(e)||yS()}function dS(e){if(Array.isArray(e))return Sl(e)}function mS(e){if(Array.isArray(e))return e}function pS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function N_(e,t){if(e){if(typeof e=="string")return Sl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sl(e,t)}}function Sl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xd=function(){},vf={},M_={},F_=null,L_={mark:Xd,measure:Xd};try{typeof window<"u"&&(vf=window),typeof document<"u"&&(M_=document),typeof MutationObserver<"u"&&(F_=MutationObserver),typeof performance<"u"&&(L_=performance)}catch{}var AS=vf.navigator||{},Jd=AS.userAgent,Zd=Jd===void 0?"":Jd,Fn=vf,Et=M_,tm=F_,Xs=L_;Fn.document;var pn=!!Et.documentElement&&!!Et.head&&typeof Et.addEventListener=="function"&&typeof Et.createElement=="function",B_=~Zd.indexOf("MSIE")||~Zd.indexOf("Trident/"),Js,Zs,to,eo,no,un="___FONT_AWESOME___",xl=16,U_="fa",j_="svg-inline--fa",pr="data-fa-i2svg",kl="data-fa-pseudo-element",vS="data-fa-pseudo-element-pending",Ef="data-prefix",wf="data-icon",em="fontawesome-i2svg",ES="async",wS=["HTML","HEAD","STYLE","SCRIPT"],$_=function(){try{return!0}catch{return!1}}(),At="classic",Tt="sharp",If=[At,Tt];function Os(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[At]}})}var ls=Os((Js={},Nt(Js,At,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Nt(Js,Tt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Js)),us=Os((Zs={},Nt(Zs,At,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Nt(Zs,Tt,{solid:"fass",regular:"fasr",light:"fasl"}),Zs)),fs=Os((to={},Nt(to,At,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Nt(to,Tt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),to)),IS=Os((eo={},Nt(eo,At,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Nt(eo,Tt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),eo)),bS=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,z_="fa-layers-text",TS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,CS=Os((no={},Nt(no,At,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Nt(no,Tt,{900:"fass",400:"fasr",300:"fasl"}),no)),H_=[1,2,3,4,5,6,7,8,9,10],RS=H_.concat([11,12,13,14,15,16,17,18,19,20]),PS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],er={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hs=new Set;Object.keys(us[At]).map(hs.add.bind(hs));Object.keys(us[Tt]).map(hs.add.bind(hs));var SS=[].concat(If,Ds(hs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",er.GROUP,er.SWAP_OPACITY,er.PRIMARY,er.SECONDARY]).concat(H_.map(function(e){return"".concat(e,"x")})).concat(RS.map(function(e){return"w-".concat(e)})),Fi=Fn.FontAwesomeConfig||{};function xS(e){var t=Et.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function kS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Et&&typeof Et.querySelector=="function"){var DS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DS.forEach(function(e){var t=Af(e,2),n=t[0],r=t[1],i=kS(xS(n));i!=null&&(Fi[r]=i)})}var q_={styleDefault:"solid",familyDefault:"classic",cssPrefix:U_,replacementClass:j_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fi.familyPrefix&&(Fi.cssPrefix=Fi.familyPrefix);var ti=M(M({},q_),Fi);ti.autoReplaceSvg||(ti.observeMutations=!1);var B={};Object.keys(q_).forEach(function(e){Object.defineProperty(B,e,{enumerable:!0,set:function(n){ti[e]=n,Li.forEach(function(r){return r(B)})},get:function(){return ti[e]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(t){ti.cssPrefix=t,Li.forEach(function(n){return n(B)})},get:function(){return ti.cssPrefix}});Fn.FontAwesomeConfig=B;var Li=[];function OS(e){return Li.push(e),function(){Li.splice(Li.indexOf(e),1)}}var vn=xl,ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function VS(e){if(!(!e||!pn)){var t=Et.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Et.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Et.head.insertBefore(t,r),e}}var NS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ds(){for(var e=12,t="";e-- >0;)t+=NS[Math.random()*62|0];return t}function ui(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function bf(e){return e.classList?ui(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function K_(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function MS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(K_(e[n]),'" ')},"").trim()}function Ka(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Tf(e){return e.size!==ze.size||e.x!==ze.x||e.y!==ze.y||e.rotate!==ze.rotate||e.flipX||e.flipY}function FS(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function LS(e){var t=e.transform,n=e.width,r=n===void 0?xl:n,i=e.height,s=i===void 0?xl:i,o=e.startCentered,a=o===void 0?!1:o,c="";return a&&B_?c+="translate(".concat(t.x/vn-r/2,"em, ").concat(t.y/vn-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(t.x/vn,"em), calc(-50% + ").concat(t.y/vn,"em)) "):c+="translate(".concat(t.x/vn,"em, ").concat(t.y/vn,"em) "),c+="scale(".concat(t.size/vn*(t.flipX?-1:1),", ").concat(t.size/vn*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var BS=`:root, :host {
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
}`;function Q_(){var e=U_,t=j_,n=B.cssPrefix,r=B.replacementClass,i=BS;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var nm=!1;function Sc(){B.autoAddCss&&!nm&&(VS(Q_()),nm=!0)}var US={mixout:function(){return{dom:{css:Q_,insertCss:Sc}}},hooks:function(){return{beforeDOMElementCreation:function(){Sc()},beforeI2svg:function(){Sc()}}}},fn=Fn||{};fn[un]||(fn[un]={});fn[un].styles||(fn[un].styles={});fn[un].hooks||(fn[un].hooks={});fn[un].shims||(fn[un].shims=[]);var Pe=fn[un],W_=[],jS=function e(){Et.removeEventListener("DOMContentLoaded",e),Go=1,W_.map(function(t){return t()})},Go=!1;pn&&(Go=(Et.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Et.readyState),Go||Et.addEventListener("DOMContentLoaded",jS));function $S(e){pn&&(Go?setTimeout(e,0):W_.push(e))}function Vs(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?K_(e):"<".concat(t," ").concat(MS(r),">").concat(s.map(Vs).join(""),"</").concat(t,">")}function rm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zS=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},xc=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?zS(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,t[l],l,t);return u};function HS(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Dl(e){var t=HS(e);return t.length===1?t[0].toString(16):null}function qS(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function im(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ol(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=im(t);typeof Pe.hooks.addPack=="function"&&!i?Pe.hooks.addPack(e,im(t)):Pe.styles[e]=M(M({},Pe.styles[e]||{}),s),e==="fas"&&Ol("fa",t)}var ro,io,so,xr=Pe.styles,KS=Pe.shims,QS=(ro={},Nt(ro,At,Object.values(fs[At])),Nt(ro,Tt,Object.values(fs[Tt])),ro),Cf=null,G_={},Y_={},X_={},J_={},Z_={},WS=(io={},Nt(io,At,Object.keys(ls[At])),Nt(io,Tt,Object.keys(ls[Tt])),io);function GS(e){return~SS.indexOf(e)}function YS(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!GS(i)?i:null}var tA=function(){var t=function(s){return xc(xr,function(o,a,c){return o[c]=xc(a,s,{}),o},{})};G_=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),Y_=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),Z_=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in xr||B.autoFetchSvg,r=xc(KS,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});X_=r.names,J_=r.unicodes,Cf=Qa(B.styleDefault,{family:B.familyDefault})};OS(function(e){Cf=Qa(e.styleDefault,{family:B.familyDefault})});tA();function Rf(e,t){return(G_[e]||{})[t]}function XS(e,t){return(Y_[e]||{})[t]}function nr(e,t){return(Z_[e]||{})[t]}function eA(e){return X_[e]||{prefix:null,iconName:null}}function JS(e){var t=J_[e],n=Rf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ln(){return Cf}var Pf=function(){return{prefix:null,iconName:null,rest:[]}};function Qa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?At:n,i=ls[r][e],s=us[r][e]||us[r][i],o=e in Pe.styles?e:null;return s||o||null}var sm=(so={},Nt(so,At,Object.keys(fs[At])),Nt(so,Tt,Object.keys(fs[Tt])),so);function Wa(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Nt(t,At,"".concat(B.cssPrefix,"-").concat(At)),Nt(t,Tt,"".concat(B.cssPrefix,"-").concat(Tt)),t),o=null,a=At;(e.includes(s[At])||e.some(function(l){return sm[At].includes(l)}))&&(a=At),(e.includes(s[Tt])||e.some(function(l){return sm[Tt].includes(l)}))&&(a=Tt);var c=e.reduce(function(l,u){var f=YS(B.cssPrefix,u);if(xr[u]?(u=QS[a].includes(u)?IS[a][u]:u,o=u,l.prefix=u):WS[a].indexOf(u)>-1?(o=u,l.prefix=Qa(u,{family:a})):f?l.iconName=f:u!==B.replacementClass&&u!==s[At]&&u!==s[Tt]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var h=o==="fa"?eA(l.iconName):{},d=nr(l.prefix,l.iconName);h.prefix&&(o=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!xr.far&&xr.fas&&!B.autoFetchSvg&&(l.prefix="fas")}return l},Pf());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Tt&&(xr.fass||B.autoFetchSvg)&&(c.prefix="fass",c.iconName=nr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Ln()||"fas"),c}var ZS=function(){function e(){fS(this,e),this.definitions={}}return hS(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),Ol(a,o[a]);var c=fs[At][a];c&&Ol(c,o[a]),tA()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=l)}),n[a][c]=l}),n}}]),e}(),om=[],kr={},Ur={},t2=Object.keys(Ur);function e2(e,t){var n=t.mixoutsTo;return om=e,kr={},Object.keys(Ur).forEach(function(r){t2.indexOf(r)===-1&&delete Ur[r]}),om.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Wo(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){kr[o]||(kr[o]=[]),kr[o].push(s[o])})}r.provides&&r.provides(Ur)}),n}function Vl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=kr[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=kr[e]||[];i.forEach(function(s){s.apply(null,n)})}function hn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ur[e]?Ur[e].apply(null,t):void 0}function Nl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ln();if(t)return t=nr(n,t)||t,rm(nA.definitions,n,t)||rm(Pe.styles,n,t)}var nA=new ZS,n2=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,gr("noAuto")},r2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pn?(gr("beforeI2svg",t),hn("pseudoElements2svg",t),hn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,$S(function(){s2({autoReplaceSvgRoot:n}),gr("watch",t)})}},i2={icon:function(t){if(t===null)return null;if(Wo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:nr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Qa(t[0]);return{prefix:r,iconName:nr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(B.cssPrefix,"-"))>-1||t.match(bS))){var i=Wa(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ln(),iconName:nr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Ln();return{prefix:s,iconName:nr(s,t)||t}}}},Ae={noAuto:n2,config:B,dom:r2,parse:i2,library:nA,findIconDefinition:Nl,toHtml:Vs},s2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Et:n;(Object.keys(Pe.styles).length>0||B.autoFetchSvg)&&pn&&B.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function Ga(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Vs(r)})}}),Object.defineProperty(e,"node",{get:function(){if(pn){var r=Et.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function o2(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Tf(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=Ka(M(M({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function a2(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function Sf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,h=e.watchable,d=h===void 0?!1:h,_=r.found?r:n,E=_.width,I=_.height,y=i==="fak",A=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function($t){return f.classes.indexOf($t)===-1}).filter(function($t){return $t!==""||!!$t}).concat(f.classes).join(" "),k={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:A,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(I)})},S=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(E/I*16*.0625,"em")}:{};d&&(k.attributes[pr]=""),c&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||ds())},children:[c]}),delete k.attributes.title);var Q=M(M({},k),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:M(M({},S),f.styles)}),et=r.found&&n.found?hn("generateAbstractMask",Q)||{children:[],attributes:{}}:hn("generateAbstractIcon",Q)||{children:[],attributes:{}},yt=et.children,le=et.attributes;return Q.children=yt,Q.attributes=le,a?a2(Q):o2(Q)}function am(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,c=a===void 0?!1:a,l=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[pr]="");var u=M({},o.styles);Tf(i)&&(u.transform=LS({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Ka(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function c2(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ka(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kc=Pe.styles;function Ml(e){var t=e[0],n=e[1],r=e.slice(4),i=Af(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(er.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(er.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(er.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var l2={found:!1,width:512,height:512};function u2(e,t){!$_&&!B.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Fl(e,t){var n=t;return t==="fa"&&B.styleDefault!==null&&(t=Ln()),new Promise(function(r,i){if(hn("missingIconAbstract"),n==="fa"){var s=eA(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&kc[t]&&kc[t][e]){var o=kc[t][e];return r(Ml(o))}u2(e,t),r(M(M({},l2),{},{icon:B.showMissingIcons&&e?hn("missingIconAbstract")||{}:{}}))})}var cm=function(){},Ll=B.measurePerformance&&Xs&&Xs.mark&&Xs.measure?Xs:{mark:cm,measure:cm},Ti='FA "6.4.2"',f2=function(t){return Ll.mark("".concat(Ti," ").concat(t," begins")),function(){return rA(t)}},rA=function(t){Ll.mark("".concat(Ti," ").concat(t," ends")),Ll.measure("".concat(Ti," ").concat(t),"".concat(Ti," ").concat(t," begins"),"".concat(Ti," ").concat(t," ends"))},xf={begin:f2,end:rA},yo=function(){};function lm(e){var t=e.getAttribute?e.getAttribute(pr):null;return typeof t=="string"}function h2(e){var t=e.getAttribute?e.getAttribute(Ef):null,n=e.getAttribute?e.getAttribute(wf):null;return t&&n}function d2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(B.replacementClass)}function m2(){if(B.autoReplaceSvg===!0)return _o.replace;var e=_o[B.autoReplaceSvg];return e||_o.replace}function p2(e){return Et.createElementNS("http://www.w3.org/2000/svg",e)}function g2(e){return Et.createElement(e)}function iA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?p2:g2:n;if(typeof e=="string")return Et.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(iA(o,{ceFn:r}))}),i}function y2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _o={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(iA(i),n)}),n.getAttribute(pr)===null&&B.keepOriginalSource){var r=Et.createComment(y2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~bf(n).indexOf(B.replacementClass))return _o.replace(t);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===B.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Vs(a)}).join(`
`);n.setAttribute(pr,""),n.innerHTML=o}};function um(e){e()}function sA(e,t){var n=typeof t=="function"?t:yo;if(e.length===0)n();else{var r=um;B.mutateApproach===ES&&(r=Fn.requestAnimationFrame||um),r(function(){var i=m2(),s=xf.begin("mutate");e.map(i),s(),n()})}}var kf=!1;function oA(){kf=!0}function Bl(){kf=!1}var Yo=null;function fm(e){if(tm&&B.observeMutations){var t=e.treeCallback,n=t===void 0?yo:t,r=e.nodeCallback,i=r===void 0?yo:r,s=e.pseudoElementsCallback,o=s===void 0?yo:s,a=e.observeMutationsRoot,c=a===void 0?Et:a;Yo=new tm(function(l){if(!kf){var u=Ln();ui(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!lm(f.addedNodes[0])&&(B.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&B.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&lm(f.target)&&~PS.indexOf(f.attributeName))if(f.attributeName==="class"&&h2(f.target)){var h=Wa(bf(f.target)),d=h.prefix,_=h.iconName;f.target.setAttribute(Ef,d||u),_&&f.target.setAttribute(wf,_)}else d2(f.target)&&i(f.target)})}}),pn&&Yo.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _2(){Yo&&Yo.disconnect()}function A2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function v2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Wa(bf(e));return i.prefix||(i.prefix=Ln()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=XS(i.prefix,e.innerText)||Rf(i.prefix,Dl(e.innerText))),!i.iconName&&B.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function E2(e){var t=ui(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return B.autoA11y&&(n?t["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||ds()):(t["aria-hidden"]="true",t.focusable="false")),t}function w2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=v2(e),r=n.iconName,i=n.prefix,s=n.rest,o=E2(e),a=Vl("parseNodeAttributes",{},e),c=t.styleParser?A2(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var I2=Pe.styles;function aA(e){var t=B.autoReplaceSvg==="nest"?hm(e,{styleParser:!1}):hm(e);return~t.extra.classes.indexOf(z_)?hn("generateLayersText",e,t):hn("generateSvgReplacementMutation",e,t)}var Bn=new Set;If.map(function(e){Bn.add("fa-".concat(e))});Object.keys(ls[At]).map(Bn.add.bind(Bn));Object.keys(ls[Tt]).map(Bn.add.bind(Bn));Bn=Ds(Bn);function dm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pn)return Promise.resolve();var n=Et.documentElement.classList,r=function(f){return n.add("".concat(em,"-").concat(f))},i=function(f){return n.remove("".concat(em,"-").concat(f))},s=B.autoFetchSvg?Bn:If.map(function(u){return"fa-".concat(u)}).concat(Object.keys(I2));s.includes("fa")||s.push("fa");var o=[".".concat(z_,":not([").concat(pr,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(pr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ui(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=xf.begin("onTree"),l=a.reduce(function(u,f){try{var h=aA(f);h&&u.push(h)}catch(d){$_||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){sA(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(h){c(),f(h)})})}function b2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;aA(e).then(function(n){n&&sA([n],t)})}function T2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Nl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Nl(i||{})),e(r,M(M({},n),{},{mask:i}))}}var C2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ze:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,d=n.titleId,_=d===void 0?null:d,E=n.classes,I=E===void 0?[]:E,y=n.attributes,A=y===void 0?{}:y,k=n.styles,S=k===void 0?{}:k;if(t){var Q=t.prefix,et=t.iconName,yt=t.icon;return Ga(M({type:"icon"},t),function(){return gr("beforeDOMElementCreation",{iconDefinition:t,params:n}),B.autoA11y&&(h?A["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(_||ds()):(A["aria-hidden"]="true",A.focusable="false")),Sf({icons:{main:Ml(yt),mask:c?Ml(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Q,iconName:et,transform:M(M({},ze),i),symbol:o,title:h,maskId:u,titleId:_,extra:{attributes:A,styles:S,classes:I}})})}},R2={mixout:function(){return{icon:T2(C2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=dm,n.nodeCallback=b2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Et:r,s=n.callback,o=s===void 0?function(){}:s;return dm(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(d,_){Promise.all([Fl(i,a),u.iconName?Fl(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var I=Af(E,2),y=I[0],A=I[1];d([n,Sf({icons:{main:y,mask:A},prefix:a,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=Ka(a);c.length>0&&(i.style=c);var l;return Tf(o)&&(l=hn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},P2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ga({type:"layer"},function(){gr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(Ds(s)).join(" ")},children:o}]})}}}},S2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Ga({type:"counter",content:n},function(){return gr("beforeDOMElementCreation",{content:n,params:r}),c2({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(Ds(a))}})})}}}},x2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?ze:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,h=r.styles,d=h===void 0?{}:h;return Ga({type:"text",content:n},function(){return gr("beforeDOMElementCreation",{content:n,params:r}),am({content:n,transform:M(M({},ze),s),title:a,extra:{attributes:f,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(Ds(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(B_){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return B.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,am({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},k2=new RegExp('"',"ug"),mm=[1105920,1112319];function D2(e){var t=e.replace(k2,""),n=qS(t,0),r=n>=mm[0]&&n<=mm[1],i=t.length===2?t[0]===t[1]:!1;return{value:Dl(i?t[0]:t),isSecondary:r||i}}function pm(e,t){var n="".concat(vS).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=ui(e.children),o=s.filter(function(yt){return yt.getAttribute(kl)===t})[0],a=Fn.getComputedStyle(e,t),c=a.getPropertyValue("font-family").match(TS),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?Tt:At,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?us[h][c[2].toLowerCase()]:CS[h][l],_=D2(f),E=_.value,I=_.isSecondary,y=c[0].startsWith("FontAwesome"),A=Rf(d,E),k=A;if(y){var S=JS(E);S.iconName&&S.prefix&&(A=S.iconName,d=S.prefix)}if(A&&!I&&(!o||o.getAttribute(Ef)!==d||o.getAttribute(wf)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var Q=w2(),et=Q.extra;et.attributes[kl]=t,Fl(A,d).then(function(yt){var le=Sf(M(M({},Q),{},{icons:{main:yt,mask:Pf()},prefix:d,iconName:k,extra:et,watchable:!0})),$t=Et.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore($t,e.firstChild):e.appendChild($t),$t.outerHTML=le.map(function(se){return Vs(se)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function O2(e){return Promise.all([pm(e,"::before"),pm(e,"::after")])}function V2(e){return e.parentNode!==document.head&&!~wS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(kl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gm(e){if(pn)return new Promise(function(t,n){var r=ui(e.querySelectorAll("*")).filter(V2).map(O2),i=xf.begin("searchPseudoElements");oA(),Promise.all(r).then(function(){i(),Bl(),t()}).catch(function(){i(),Bl(),n()})})}var N2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gm,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Et:r;B.searchPseudoElements&&gm(i)}}},ym=!1,M2={mixout:function(){return{dom:{unwatch:function(){oA(),ym=!0}}}},hooks:function(){return{bootstrap:function(){fm(Vl("mutationObserverCallbacks",{}))},noAuto:function(){_2()},watch:function(n){var r=n.observeMutationsRoot;ym?Bl():fm(Vl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_m=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},F2={mixout:function(){return{parse:{transform:function(n){return _m(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=_m(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:f,path:h};return{tag:"g",attributes:M({},d.outer),children:[{tag:"g",attributes:M({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),d.path)}]}]}}}},Dc={x:0,y:0,width:"100%",height:"100%"};function Am(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function L2(e){return e.tag==="g"?e.children:[e]}var B2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Wa(i.split(" ").map(function(o){return o.trim()})):Pf();return s.prefix||(s.prefix=Ln()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,f=o.width,h=o.icon,d=FS({transform:c,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:M(M({},Dc),{},{fill:"white"})},E=u.children?{children:u.children.map(Am)}:{},I={tag:"g",attributes:M({},d.inner),children:[Am(M({tag:u.tag,attributes:M(M({},u.attributes),d.path)},E))]},y={tag:"g",attributes:M({},d.outer),children:[I]},A="mask-".concat(a||ds()),k="clip-".concat(a||ds()),S={tag:"mask",attributes:M(M({},Dc),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,y]},Q={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:L2(h)},S]};return r.push(Q,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(A,")")},Dc)}),{children:r,attributes:i}}}},U2={provides:function(t){var n=!1;Fn.matchMedia&&(n=Fn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},j2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},$2=[US,R2,P2,S2,x2,N2,M2,F2,B2,U2,j2];e2($2,{mixoutsTo:Ae});Ae.noAuto;Ae.config;var z2=Ae.library;Ae.dom;var Ul=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var H2=Ae.icon;Ae.layer;Ae.text;Ae.counter;function vm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vm(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xo(e){"@babel/helpers - typeof";return Xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xo(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function K2(e,t){if(e==null)return{};var n=q2(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Q2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cA={exports:{}};(function(e){(function(t){var n=function(y,A,k){if(!l(A)||f(A)||h(A)||d(A)||c(A))return A;var S,Q=0,et=0;if(u(A))for(S=[],et=A.length;Q<et;Q++)S.push(n(y,A[Q],k));else{S={};for(var yt in A)Object.prototype.hasOwnProperty.call(A,yt)&&(S[y(yt,k)]=n(y,A[yt],k))}return S},r=function(y,A){A=A||{};var k=A.separator||"_",S=A.split||/(?=[A-Z])/;return y.split(S).join(k)},i=function(y){return _(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(A,k){return k?k.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},s=function(y){var A=i(y);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(y,A){return r(y,A).toLowerCase()},a=Object.prototype.toString,c=function(y){return typeof y=="function"},l=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},f=function(y){return a.call(y)=="[object Date]"},h=function(y){return a.call(y)=="[object RegExp]"},d=function(y){return a.call(y)=="[object Boolean]"},_=function(y){return y=y-0,y===y},E=function(y,A){var k=A&&"process"in A?A.process:A;return typeof k!="function"?y:function(S,Q){return k(S,y,Q)}},I={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(y,A){return n(E(i,A),y)},decamelizeKeys:function(y,A){return n(E(o,A),y,A)},pascalizeKeys:function(y,A){return n(E(s,A),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=I:t.humps=I})(Q2)})(cA);var W2=cA.exports,G2=["class","style"];function Y2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=W2.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function X2(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function lA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return lA(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=X2(u);break;case"style":c.style=Y2(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=K2(n,G2);return uu(e.tag,tn(tn(tn({},t),{},{class:i.class,style:tn(tn({},i.style),o)},i.attrs),a),r)}var uA=!1;try{uA=!0}catch{}function J2(){if(!uA&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Oc(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function Z2(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Em(e){if(e&&Xo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ul.icon)return Ul.icon(e);if(e===null)return null;if(Xo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var tx=ru({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=Ht(function(){return Em(t.icon)}),s=Ht(function(){return Oc("classes",Z2(t))}),o=Ht(function(){return Oc("transform",typeof t.transform=="string"?Ul.transform(t.transform):t.transform)}),a=Ht(function(){return Oc("mask",Em(t.mask))}),c=Ht(function(){return H2(i.value,tn(tn(tn(tn({},s.value),o.value),a.value),{},{symbol:t.symbol,title:t.title}))});ir(c,function(u){if(!u)return J2("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=Ht(function(){return c.value?lA(c.value.abstract[0],{},r):null});return function(){return l.value}}}),ex={prefix:"fas",iconName:"chart-simple",icon:[448,512,[],"e473","M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"]},nx={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},rx={prefix:"fas",iconName:"dumbbell",icon:[640,512,[],"f44b","M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"]},ix={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};z2.add(nx,rx,ex,ix);const Ya=k0(qE);Ya.component("font-awesome-icon",tx);Ya.use(N0());Ya.use(uS);Ya.mount("#app");
