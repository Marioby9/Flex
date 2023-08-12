(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function dc(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const gt={},ir=[],ye=()=>{},_m=()=>!1,Am=/^on[^a-z]/,Yi=e=>Am.test(e),pc=e=>e.startsWith("onUpdate:"),Dt=Object.assign,gc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ym=Object.prototype.hasOwnProperty,et=(e,t)=>ym.call(e,t),H=Array.isArray,or=e=>Vs(e)==="[object Map]",Ji=e=>Vs(e)==="[object Set]",zl=e=>Vs(e)==="[object Date]",Y=e=>typeof e=="function",wt=e=>typeof e=="string",os=e=>typeof e=="symbol",pt=e=>e!==null&&typeof e=="object",of=e=>pt(e)&&Y(e.then)&&Y(e.catch),af=Object.prototype.toString,Vs=e=>af.call(e),Em=e=>Vs(e).slice(8,-1),cf=e=>Vs(e)==="[object Object]",mc=e=>wt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hi=dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vm=/-(\w)/g,Fe=Xi(e=>e.replace(vm,(t,n)=>n?n.toUpperCase():"")),Im=/\B([A-Z])/g,Cr=Xi(e=>e.replace(Im,"-$1").toLowerCase()),Zi=Xi(e=>e.charAt(0).toUpperCase()+e.slice(1)),jo=Xi(e=>e?`on${Zi(e)}`:""),as=(e,t)=>!Object.is(e,t),fi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ei=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},vi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Kl;const ya=()=>Kl||(Kl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _c(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=wt(r)?Cm(r):_c(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(wt(e))return e;if(pt(e))return e}}const Tm=/;(?![^(]*\))/g,wm=/:([^]+)/,Rm=/\/\*[^]*?\*\//g;function Cm(e){const t={};return e.replace(Rm,"").split(Tm).forEach(n=>{if(n){const r=n.split(wm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function cs(e){let t="";if(wt(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=cs(e[n]);r&&(t+=r+" ")}else if(pt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sm=dc(Pm);function lf(e){return!!e||e===""}function bm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=to(e[r],t[r]);return n}function to(e,t){if(e===t)return!0;let n=zl(e),r=zl(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=os(e),r=os(t),n||r)return e===t;if(n=H(e),r=H(t),n||r)return n&&r?bm(e,t):!1;if(n=pt(e),r=pt(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!to(e[o],t[o]))return!1}}return String(e)===String(t)}function Dm(e,t){return e.findIndex(n=>to(n,t))}const On=e=>wt(e)?e:e==null?"":H(e)||pt(e)&&(e.toString===af||!Y(e.toString))?JSON.stringify(e,uf,2):String(e),uf=(e,t)=>t&&t.__v_isRef?uf(e,t.value):or(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ji(t)?{[`Set(${t.size})`]:[...t.values()]}:pt(t)&&!H(t)&&!cf(t)?String(t):t;let de;class hf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=de,!t&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=de;try{return de=this,t()}finally{de=n}}}on(){de=this}off(){de=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Vm(e){return new hf(e)}function xm(e,t=de){t&&t.active&&t.effects.push(e)}function km(){return de}const Ac=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ff=e=>(e.w&dn)>0,df=e=>(e.n&dn)>0,Mm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dn},Om=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];ff(s)&&!df(s)?s.delete(e):t[n++]=s,s.w&=~dn,s.n&=~dn}t.length=n}},Ea=new WeakMap;let $r=0,dn=1;const va=30;let ge;const Nn=Symbol(""),Ia=Symbol("");class yc{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xm(this,r)}run(){if(!this.active)return this.fn();let t=ge,n=an;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ge,ge=this,an=!0,dn=1<<++$r,$r<=va?Mm(this):Wl(this),this.fn()}finally{$r<=va&&Om(this),dn=1<<--$r,ge=this.parent,an=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(Wl(this),this.onStop&&this.onStop(),this.active=!1)}}function Wl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let an=!0;const pf=[];function Pr(){pf.push(an),an=!1}function Sr(){const e=pf.pop();an=e===void 0?!0:e}function ne(e,t,n){if(an&&ge){let r=Ea.get(e);r||Ea.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Ac()),gf(s)}}function gf(e,t){let n=!1;$r<=va?df(e)||(e.n|=dn,n=!ff(e)):n=!e.has(ge),n&&(e.add(ge),ge.deps.push(e))}function Qe(e,t,n,r,s,i){const o=Ea.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&H(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":H(e)?mc(n)&&a.push(o.get("length")):(a.push(o.get(Nn)),or(e)&&a.push(o.get(Ia)));break;case"delete":H(e)||(a.push(o.get(Nn)),or(e)&&a.push(o.get(Ia)));break;case"set":or(e)&&a.push(o.get(Nn));break}if(a.length===1)a[0]&&Ta(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ta(Ac(c))}}function Ta(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&Gl(r);for(const r of n)r.computed||Gl(r)}function Gl(e,t){(e!==ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Nm=dc("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(os)),Fm=Ec(),Lm=Ec(!1,!0),Bm=Ec(!0),Yl=Um();function Um(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=rt(this);for(let i=0,o=this.length;i<o;i++)ne(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(rt)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pr();const r=rt(this)[t].apply(this,n);return Sr(),r}}),e}function $m(e){const t=rt(this);return ne(t,"has",e),t.hasOwnProperty(e)}function Ec(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?r_:vf:t?Ef:yf).get(r))return r;const o=H(r);if(!e){if(o&&et(Yl,s))return Reflect.get(Yl,s,i);if(s==="hasOwnProperty")return $m}const a=Reflect.get(r,s,i);return(os(s)?mf.has(s):Nm(s))||(e||ne(r,"get",s),t)?a:Nt(a)?o&&mc(s)?a:a.value:pt(a)?e?Tf(a):no(a):a}}const jm=_f(),Hm=_f(!0);function _f(e=!1){return function(n,r,s,i){let o=n[r];if(dr(o)&&Nt(o)&&!Nt(s))return!1;if(!e&&(!Ii(s)&&!dr(s)&&(o=rt(o),s=rt(s)),!H(n)&&Nt(o)&&!Nt(s)))return o.value=s,!0;const a=H(n)&&mc(r)?Number(r)<n.length:et(n,r),c=Reflect.set(n,r,s,i);return n===rt(i)&&(a?as(s,o)&&Qe(n,"set",r,s):Qe(n,"add",r,s)),c}}function qm(e,t){const n=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Qe(e,"delete",t,void 0),r}function Qm(e,t){const n=Reflect.has(e,t);return(!os(t)||!mf.has(t))&&ne(e,"has",t),n}function zm(e){return ne(e,"iterate",H(e)?"length":Nn),Reflect.ownKeys(e)}const Af={get:Fm,set:jm,deleteProperty:qm,has:Qm,ownKeys:zm},Km={get:Bm,set(e,t){return!0},deleteProperty(e,t){return!0}},Wm=Dt({},Af,{get:Lm,set:Hm}),vc=e=>e,eo=e=>Reflect.getPrototypeOf(e);function Ys(e,t,n=!1,r=!1){e=e.__v_raw;const s=rt(e),i=rt(t);n||(t!==i&&ne(s,"get",t),ne(s,"get",i));const{has:o}=eo(s),a=r?vc:n?Rc:ls;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Js(e,t=!1){const n=this.__v_raw,r=rt(n),s=rt(e);return t||(e!==s&&ne(r,"has",e),ne(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Xs(e,t=!1){return e=e.__v_raw,!t&&ne(rt(e),"iterate",Nn),Reflect.get(e,"size",e)}function Jl(e){e=rt(e);const t=rt(this);return eo(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function Xl(e,t){t=rt(t);const n=rt(this),{has:r,get:s}=eo(n);let i=r.call(n,e);i||(e=rt(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?as(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function Zl(e){const t=rt(this),{has:n,get:r}=eo(t);let s=n.call(t,e);s||(e=rt(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&Qe(t,"delete",e,void 0),i}function tu(){const e=rt(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function Zs(e,t){return function(r,s){const i=this,o=i.__v_raw,a=rt(o),c=t?vc:e?Rc:ls;return!e&&ne(a,"iterate",Nn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ti(e,t,n){return function(...r){const s=this.__v_raw,i=rt(s),o=or(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?vc:t?Rc:ls;return!t&&ne(i,"iterate",c?Ia:Nn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function en(e){return function(...t){return e==="delete"?!1:this}}function Gm(){const e={get(i){return Ys(this,i)},get size(){return Xs(this)},has:Js,add:Jl,set:Xl,delete:Zl,clear:tu,forEach:Zs(!1,!1)},t={get(i){return Ys(this,i,!1,!0)},get size(){return Xs(this)},has:Js,add:Jl,set:Xl,delete:Zl,clear:tu,forEach:Zs(!1,!0)},n={get(i){return Ys(this,i,!0)},get size(){return Xs(this,!0)},has(i){return Js.call(this,i,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:Zs(!0,!1)},r={get(i){return Ys(this,i,!0,!0)},get size(){return Xs(this,!0)},has(i){return Js.call(this,i,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:Zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ti(i,!1,!1),n[i]=ti(i,!0,!1),t[i]=ti(i,!1,!0),r[i]=ti(i,!0,!0)}),[e,n,t,r]}const[Ym,Jm,Xm,Zm]=Gm();function Ic(e,t){const n=t?e?Zm:Xm:e?Jm:Ym;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(et(n,s)&&s in r?n:r,s,i)}const t_={get:Ic(!1,!1)},e_={get:Ic(!1,!0)},n_={get:Ic(!0,!1)},yf=new WeakMap,Ef=new WeakMap,vf=new WeakMap,r_=new WeakMap;function s_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function i_(e){return e.__v_skip||!Object.isExtensible(e)?0:s_(Em(e))}function no(e){return dr(e)?e:Tc(e,!1,Af,t_,yf)}function If(e){return Tc(e,!1,Wm,e_,Ef)}function Tf(e){return Tc(e,!0,Km,n_,vf)}function Tc(e,t,n,r,s){if(!pt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=i_(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function ar(e){return dr(e)?ar(e.__v_raw):!!(e&&e.__v_isReactive)}function dr(e){return!!(e&&e.__v_isReadonly)}function Ii(e){return!!(e&&e.__v_isShallow)}function wf(e){return ar(e)||dr(e)}function rt(e){const t=e&&e.__v_raw;return t?rt(t):e}function wc(e){return Ei(e,"__v_skip",!0),e}const ls=e=>pt(e)?no(e):e,Rc=e=>pt(e)?Tf(e):e;function Rf(e){an&&ge&&(e=rt(e),gf(e.dep||(e.dep=Ac())))}function Cf(e,t){e=rt(e);const n=e.dep;n&&Ta(n)}function Nt(e){return!!(e&&e.__v_isRef===!0)}function pe(e){return Pf(e,!1)}function o_(e){return Pf(e,!0)}function Pf(e,t){return Nt(e)?e:new a_(e,t)}class a_{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:rt(t),this._value=n?t:ls(t)}get value(){return Rf(this),this._value}set value(t){const n=this.__v_isShallow||Ii(t)||dr(t);t=n?t:rt(t),as(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ls(t),Cf(this))}}function ke(e){return Nt(e)?e.value:e}const c_={get:(e,t,n)=>ke(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Nt(s)&&!Nt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Sf(e){return ar(e)?e:new Proxy(e,c_)}class l_{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new yc(t,()=>{this._dirty||(this._dirty=!0,Cf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=rt(this);return Rf(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function u_(e,t,n=!1){let r,s;const i=Y(e);return i?(r=e,s=ye):(r=e.get,s=e.set),new l_(r,s,i||!s,n)}function cn(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){ro(i,t,n)}return s}function Ee(e,t,n,r){if(Y(e)){const i=cn(e,t,n,r);return i&&of(i)&&i.catch(o=>{ro(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Ee(e[i],t,n,r));return s}function ro(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,o,a]);return}}h_(e,n,s,r)}function h_(e,t,n,r=!0){console.error(e)}let us=!1,wa=!1;const jt=[];let be=0;const cr=[];let je=null,Pn=0;const bf=Promise.resolve();let Cc=null;function Df(e){const t=Cc||bf;return e?t.then(this?e.bind(this):e):t}function f_(e){let t=be+1,n=jt.length;for(;t<n;){const r=t+n>>>1;hs(jt[r])<e?t=r+1:n=r}return t}function Pc(e){(!jt.length||!jt.includes(e,us&&e.allowRecurse?be+1:be))&&(e.id==null?jt.push(e):jt.splice(f_(e.id),0,e),Vf())}function Vf(){!us&&!wa&&(wa=!0,Cc=bf.then(kf))}function d_(e){const t=jt.indexOf(e);t>be&&jt.splice(t,1)}function p_(e){H(e)?cr.push(...e):(!je||!je.includes(e,e.allowRecurse?Pn+1:Pn))&&cr.push(e),Vf()}function eu(e,t=us?be+1:0){for(;t<jt.length;t++){const n=jt[t];n&&n.pre&&(jt.splice(t,1),t--,n())}}function xf(e){if(cr.length){const t=[...new Set(cr)];if(cr.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>hs(n)-hs(r)),Pn=0;Pn<je.length;Pn++)je[Pn]();je=null,Pn=0}}const hs=e=>e.id==null?1/0:e.id,g_=(e,t)=>{const n=hs(e)-hs(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function kf(e){wa=!1,us=!0,jt.sort(g_);const t=ye;try{for(be=0;be<jt.length;be++){const n=jt[be];n&&n.active!==!1&&cn(n,null,14)}}finally{be=0,jt.length=0,xf(),us=!1,Cc=null,(jt.length||cr.length)&&kf()}}function m_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||gt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||gt;f&&(s=n.map(g=>wt(g)?g.trim():g)),h&&(s=n.map(vi))}let a,c=r[a=jo(t)]||r[a=jo(Fe(t))];!c&&i&&(c=r[a=jo(Cr(t))]),c&&Ee(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ee(l,e,6,s)}}function Mf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Y(e)){const c=l=>{const u=Mf(l,t,!0);u&&(a=!0,Dt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(pt(e)&&r.set(e,null),null):(H(i)?i.forEach(c=>o[c]=null):Dt(o,i),pt(e)&&r.set(e,o),o)}function so(e,t){return!e||!Yi(t)?!1:(t=t.slice(2).replace(/Once$/,""),et(e,t[0].toLowerCase()+t.slice(1))||et(e,Cr(t))||et(e,t))}let ue=null,io=null;function Ti(e){const t=ue;return ue=e,io=e&&e.type.__scopeId||null,t}function Sc(e){io=e}function bc(){io=null}function Dc(e,t=ue,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&fu(-1);const i=Ti(t);let o;try{o=e(...s)}finally{Ti(i),r._d&&fu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ho(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:I}=e;let R,S;const k=Ti(e);try{if(n.shapeFlag&4){const O=s||r;R=Se(u.call(O,O,h,i,g,f,y)),S=c}else{const O=t;R=Se(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),S=t.props?c:__(c)}}catch(O){Yr.length=0,ro(O,e,1),R=bt(fs)}let q=R;if(S&&I!==!1){const O=Object.keys(S),{shapeFlag:ft}=q;O.length&&ft&7&&(o&&O.some(pc)&&(S=A_(S,o)),q=pr(q,S))}return n.dirs&&(q=pr(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),R=q,Ti(k),R}const __=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yi(n))&&((t||(t={}))[n]=e[n]);return t},A_=(e,t)=>{const n={};for(const r in e)(!pc(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function y_(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?nu(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!so(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nu(r,o,l):!0:!!o;return!1}function nu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!so(n,i))return!0}return!1}function E_({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const v_=e=>e.__isSuspense;function I_(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):p_(e)}const ei={};function Wr(e,t,n){return Of(e,t,n)}function Of(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=gt){var a;const c=km()===((a=Ot)==null?void 0:a.scope)?Ot:null;let l,u=!1,h=!1;if(Nt(e)?(l=()=>e.value,u=Ii(e)):ar(e)?(l=()=>e,r=!0):H(e)?(h=!0,u=e.some(O=>ar(O)||Ii(O)),l=()=>e.map(O=>{if(Nt(O))return O.value;if(ar(O))return Dn(O);if(Y(O))return cn(O,c,2)})):Y(e)?t?l=()=>cn(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ee(e,c,3,[g])}:l=ye,t&&r){const O=l;l=()=>Dn(O())}let f,g=O=>{f=k.onStop=()=>{cn(O,c,4)}},y;if(ps)if(g=ye,t?n&&Ee(t,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const O=gA();y=O.__watcherHandles||(O.__watcherHandles=[])}else return ye;let I=h?new Array(e.length).fill(ei):ei;const R=()=>{if(k.active)if(t){const O=k.run();(r||u||(h?O.some((ft,at)=>as(ft,I[at])):as(O,I)))&&(f&&f(),Ee(t,c,3,[O,I===ei?void 0:h&&I[0]===ei?[]:I,g]),I=O)}else k.run()};R.allowRecurse=!!t;let S;s==="sync"?S=R:s==="post"?S=()=>Xt(R,c&&c.suspense):(R.pre=!0,c&&(R.id=c.uid),S=()=>Pc(R));const k=new yc(l,S);t?n?R():I=k.run():s==="post"?Xt(k.run.bind(k),c&&c.suspense):k.run();const q=()=>{k.stop(),c&&c.scope&&gc(c.scope.effects,k)};return y&&y.push(q),q}function T_(e,t,n){const r=this.proxy,s=wt(e)?e.includes(".")?Nf(r,e):()=>r[e]:e.bind(r,r);let i;Y(t)?i=t:(i=t.handler,n=t);const o=Ot;gr(this);const a=Of(s,i.bind(r),n);return o?gr(o):Fn(),a}function Nf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Dn(e,t){if(!pt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Nt(e))Dn(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Dn(e[n],t);else if(Ji(e)||or(e))e.forEach(n=>{Dn(n,t)});else if(cf(e))for(const n in e)Dn(e[n],t);return e}function Ff(e,t){const n=ue;if(n===null)return e;const r=lo(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=gt]=t[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Dn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function wn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Pr(),Ee(c,n,8,[e.el,a,e,t]),Sr())}}function Lf(e,t){return Y(e)?(()=>Dt({name:e.name},t,{setup:e}))():e}const di=e=>!!e.type.__asyncLoader,Bf=e=>e.type.__isKeepAlive;function w_(e,t){Uf(e,"a",t)}function R_(e,t){Uf(e,"da",t)}function Uf(e,t,n=Ot){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(oo(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Bf(s.parent.vnode)&&C_(r,t,n,s),s=s.parent}}function C_(e,t,n,r){const s=oo(t,e,r,!0);jf(()=>{gc(r[t],s)},n)}function oo(e,t,n=Ot,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Pr(),gr(n);const a=Ee(t,n,e,o);return Fn(),Sr(),a});return r?s.unshift(i):s.push(i),i}}const Je=e=>(t,n=Ot)=>(!ps||e==="sp")&&oo(e,(...r)=>t(...r),n),P_=Je("bm"),$f=Je("m"),S_=Je("bu"),b_=Je("u"),D_=Je("bum"),jf=Je("um"),V_=Je("sp"),x_=Je("rtg"),k_=Je("rtc");function M_(e,t=Ot){oo("ec",e,t)}const Hf="components",qf=Symbol.for("v-ndc");function O_(e){return wt(e)?N_(Hf,e,!1)||e:e||qf}function N_(e,t,n=!0,r=!1){const s=ue||Ot;if(s){const i=s.type;if(e===Hf){const a=fA(i,!1);if(a&&(a===t||a===Fe(t)||a===Zi(Fe(t))))return i}const o=ru(s[e]||i[e],t)||ru(s.appContext[e],t);return!o&&r?i:o}}function ru(e,t){return e&&(e[t]||e[Fe(t)]||e[Zi(Fe(t))])}function wi(e,t,n,r){let s;const i=n&&n[r];if(H(e)||wt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(pt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ra=e=>e?nd(e)?lo(e)||e.proxy:Ra(e.parent):null,Gr=Dt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ra(e.parent),$root:e=>Ra(e.root),$emit:e=>e.emit,$options:e=>Vc(e),$forceUpdate:e=>e.f||(e.f=()=>Pc(e.update)),$nextTick:e=>e.n||(e.n=Df.bind(e.proxy)),$watch:e=>T_.bind(e)}),qo=(e,t)=>e!==gt&&!e.__isScriptSetup&&et(e,t),F_={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(qo(r,t))return o[t]=1,r[t];if(s!==gt&&et(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&et(l,t))return o[t]=3,i[t];if(n!==gt&&et(n,t))return o[t]=4,n[t];Ca&&(o[t]=0)}}const u=Gr[t];let h,f;if(u)return t==="$attrs"&&ne(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==gt&&et(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,et(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return qo(s,t)?(s[t]=n,!0):r!==gt&&et(r,t)?(r[t]=n,!0):et(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==gt&&et(e,o)||qo(t,o)||(a=i[0])&&et(a,o)||et(r,o)||et(Gr,o)||et(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:et(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function su(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ca=!0;function L_(e){const t=Vc(e),n=e.proxy,r=e.ctx;Ca=!1,t.beforeCreate&&iu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:I,deactivated:R,beforeDestroy:S,beforeUnmount:k,destroyed:q,unmounted:O,render:ft,renderTracked:at,renderTriggered:re,errorCaptured:Te,serverPrefetch:Xe,expose:se,inheritAttrs:Ze,components:Tn,directives:we,filters:Or}=t;if(l&&B_(l,r,null),o)for(const ht in o){const st=o[ht];Y(st)&&(r[ht]=st.bind(n))}if(s){const ht=s.call(n,n);pt(ht)&&(e.data=no(ht))}if(Ca=!0,i)for(const ht in i){const st=i[ht],Ue=Y(st)?st.bind(n,n):Y(st.get)?st.get.bind(n,n):ye,tn=!Y(st)&&Y(st.set)?st.set.bind(n):ye,Re=me({get:Ue,set:tn});Object.defineProperty(r,ht,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Jt=>Re.value=Jt})}if(a)for(const ht in a)Qf(a[ht],r,n,ht);if(c){const ht=Y(c)?c.call(n):c;Reflect.ownKeys(ht).forEach(st=>{pi(st,ht[st])})}u&&iu(u,e,"c");function Pt(ht,st){H(st)?st.forEach(Ue=>ht(Ue.bind(n))):st&&ht(st.bind(n))}if(Pt(P_,h),Pt($f,f),Pt(S_,g),Pt(b_,y),Pt(w_,I),Pt(R_,R),Pt(M_,Te),Pt(k_,at),Pt(x_,re),Pt(D_,k),Pt(jf,O),Pt(V_,Xe),H(se))if(se.length){const ht=e.exposed||(e.exposed={});se.forEach(st=>{Object.defineProperty(ht,st,{get:()=>n[st],set:Ue=>n[st]=Ue})})}else e.exposed||(e.exposed={});ft&&e.render===ye&&(e.render=ft),Ze!=null&&(e.inheritAttrs=Ze),Tn&&(e.components=Tn),we&&(e.directives=we)}function B_(e,t,n=ye){H(e)&&(e=Pa(e));for(const r in e){const s=e[r];let i;pt(s)?"default"in s?i=Me(s.from||r,s.default,!0):i=Me(s.from||r):i=Me(s),Nt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function iu(e,t,n){Ee(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qf(e,t,n,r){const s=r.includes(".")?Nf(n,r):()=>n[r];if(wt(e)){const i=t[e];Y(i)&&Wr(s,i)}else if(Y(e))Wr(s,e.bind(n));else if(pt(e))if(H(e))e.forEach(i=>Qf(i,t,n,r));else{const i=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(i)&&Wr(s,i,e)}}function Vc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Ri(c,l,o,!0)),Ri(c,t,o)),pt(t)&&i.set(t,c),c}function Ri(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Ri(e,i,n,!0),s&&s.forEach(o=>Ri(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=U_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const U_={data:ou,props:au,emits:au,methods:jr,computed:jr,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:jr,directives:jr,watch:j_,provide:ou,inject:$_};function ou(e,t){return t?e?function(){return Dt(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function $_(e,t){return jr(Pa(e),Pa(t))}function Pa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Gt(e,t){return e?[...new Set([].concat(e,t))]:t}function jr(e,t){return e?Dt(Object.create(null),e,t):t}function au(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Dt(Object.create(null),su(e),su(t??{})):t}function j_(e,t){if(!e)return t;if(!t)return e;const n=Dt(Object.create(null),e);for(const r in t)n[r]=Gt(e[r],t[r]);return n}function zf(){return{app:null,config:{isNativeTag:_m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let H_=0;function q_(e,t){return function(r,s=null){Y(r)||(r=Dt({},r)),s!=null&&!pt(s)&&(s=null);const i=zf(),o=new Set;let a=!1;const c=i.app={_uid:H_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mA,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=bt(r,s);return f.appContext=i,u&&t?t(f,l):e(f,l,h),a=!0,c._container=l,l.__vue_app__=c,lo(f.component)||f.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ci=c;try{return l()}finally{Ci=null}}};return c}}let Ci=null;function pi(e,t){if(Ot){let n=Ot.provides;const r=Ot.parent&&Ot.parent.provides;r===n&&(n=Ot.provides=Object.create(r)),n[e]=t}}function Me(e,t,n=!1){const r=Ot||ue;if(r||Ci){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ci._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}function Q_(e,t,n,r=!1){const s={},i={};Ei(i,co,1),e.propsDefaults=Object.create(null),Kf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:If(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function z_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=rt(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(so(e.emitsOptions,f))continue;const g=t[f];if(c)if(et(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Fe(f);s[y]=Sa(c,a,y,g,e,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Kf(e,t,s,i)&&(l=!0);let u;for(const h in a)(!t||!et(t,h)&&((u=Cr(h))===h||!et(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Sa(c,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!et(t,h))&&(delete i[h],l=!0)}l&&Qe(e,"set","$attrs")}function Kf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(hi(c))continue;const l=t[c];let u;s&&et(s,u=Fe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:so(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=rt(n),l=a||gt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Sa(s,c,h,l[h],e,!et(l,h))}}return o}function Sa(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=et(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(gr(s),r=l[n]=c.call(null,t),Fn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Cr(n))&&(r=!0))}return r}function Wf(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Y(e)){const u=h=>{c=!0;const[f,g]=Wf(h,t,!0);Dt(o,f),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return pt(e)&&r.set(e,ir),ir;if(H(i))for(let u=0;u<i.length;u++){const h=Fe(i[u]);cu(h)&&(o[h]=gt)}else if(i)for(const u in i){const h=Fe(u);if(cu(h)){const f=i[u],g=o[h]=H(f)||Y(f)?{type:f}:Dt({},f);if(g){const y=hu(Boolean,g.type),I=hu(String,g.type);g[0]=y>-1,g[1]=I<0||y<I,(y>-1||et(g,"default"))&&a.push(h)}}}const l=[o,a];return pt(e)&&r.set(e,l),l}function cu(e){return e[0]!=="$"}function lu(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function uu(e,t){return lu(e)===lu(t)}function hu(e,t){return H(t)?t.findIndex(n=>uu(n,e)):Y(t)&&uu(t,e)?0:-1}const Gf=e=>e[0]==="_"||e==="$stable",xc=e=>H(e)?e.map(Se):[Se(e)],K_=(e,t,n)=>{if(t._n)return t;const r=Dc((...s)=>xc(t(...s)),n);return r._c=!1,r},Yf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Gf(s))continue;const i=e[s];if(Y(i))t[s]=K_(s,i,r);else if(i!=null){const o=xc(i);t[s]=()=>o}}},Jf=(e,t)=>{const n=xc(t);e.slots.default=()=>n},W_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=rt(t),Ei(t,"_",n)):Yf(t,e.slots={})}else e.slots={},t&&Jf(e,t);Ei(e.slots,co,1)},G_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=gt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Dt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Yf(t,s)),o=t}else t&&(Jf(e,t),o={default:1});if(i)for(const a in s)!Gf(a)&&!(a in o)&&delete s[a]};function ba(e,t,n,r,s=!1){if(H(e)){e.forEach((f,g)=>ba(f,t&&(H(t)?t[g]:t),n,r,s));return}if(di(r)&&!s)return;const i=r.shapeFlag&4?lo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===gt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(wt(l)?(u[l]=null,et(h,l)&&(h[l]=null)):Nt(l)&&(l.value=null)),Y(c))cn(c,a,12,[o,u]);else{const f=wt(c),g=Nt(c);if(f||g){const y=()=>{if(e.f){const I=f?et(h,c)?h[c]:u[c]:c.value;s?H(I)&&gc(I,i):H(I)?I.includes(i)||I.push(i):f?(u[c]=[i],et(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else f?(u[c]=o,et(h,c)&&(h[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(y.id=-1,Xt(y,n)):y()}}}const Xt=I_;function Y_(e){return J_(e)}function J_(e,t){const n=ya();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=ye,insertStaticContent:y}=e,I=(d,p,m,_=null,E=null,v=null,x=!1,P=null,b=!!p.dynamicChildren)=>{if(d===p)return;d&&!Fr(d,p)&&(_=A(d),Jt(d,E,v,!0),d=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:w,ref:B,shapeFlag:N}=p;switch(w){case ao:R(d,p,m,_);break;case fs:S(d,p,m,_);break;case Qo:d==null&&k(p,m,_,x);break;case Zt:Tn(d,p,m,_,E,v,x,P,b);break;default:N&1?ft(d,p,m,_,E,v,x,P,b):N&6?we(d,p,m,_,E,v,x,P,b):(N&64||N&128)&&w.process(d,p,m,_,E,v,x,P,b,D)}B!=null&&E&&ba(B,d&&d.ref,v,p||d,!p)},R=(d,p,m,_)=>{if(d==null)r(p.el=a(p.children),m,_);else{const E=p.el=d.el;p.children!==d.children&&l(E,p.children)}},S=(d,p,m,_)=>{d==null?r(p.el=c(p.children||""),m,_):p.el=d.el},k=(d,p,m,_)=>{[d.el,d.anchor]=y(d.children,p,m,_,d.el,d.anchor)},q=({el:d,anchor:p},m,_)=>{let E;for(;d&&d!==p;)E=f(d),r(d,m,_),d=E;r(p,m,_)},O=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},ft=(d,p,m,_,E,v,x,P,b)=>{x=x||p.type==="svg",d==null?at(p,m,_,E,v,x,P,b):Xe(d,p,E,v,x,P,b)},at=(d,p,m,_,E,v,x,P)=>{let b,w;const{type:B,props:N,shapeFlag:U,transition:K,dirs:X}=d;if(b=d.el=o(d.type,v,N&&N.is,N),U&8?u(b,d.children):U&16&&Te(d.children,b,null,_,E,v&&B!=="foreignObject",x,P),X&&wn(d,null,_,"created"),re(b,d,d.scopeId,x,_),N){for(const ut in N)ut!=="value"&&!hi(ut)&&i(b,ut,null,N[ut],v,d.children,_,E,Lt);"value"in N&&i(b,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Pe(w,_,d)}X&&wn(d,null,_,"beforeMount");const dt=(!E||E&&!E.pendingBranch)&&K&&!K.persisted;dt&&K.beforeEnter(b),r(b,p,m),((w=N&&N.onVnodeMounted)||dt||X)&&Xt(()=>{w&&Pe(w,_,d),dt&&K.enter(b),X&&wn(d,null,_,"mounted")},E)},re=(d,p,m,_,E)=>{if(m&&g(d,m),_)for(let v=0;v<_.length;v++)g(d,_[v]);if(E){let v=E.subTree;if(p===v){const x=E.vnode;re(d,x,x.scopeId,x.slotScopeIds,E.parent)}}},Te=(d,p,m,_,E,v,x,P,b=0)=>{for(let w=b;w<d.length;w++){const B=d[w]=P?rn(d[w]):Se(d[w]);I(null,B,p,m,_,E,v,x,P)}},Xe=(d,p,m,_,E,v,x)=>{const P=p.el=d.el;let{patchFlag:b,dynamicChildren:w,dirs:B}=p;b|=d.patchFlag&16;const N=d.props||gt,U=p.props||gt;let K;m&&Rn(m,!1),(K=U.onVnodeBeforeUpdate)&&Pe(K,m,p,d),B&&wn(p,d,m,"beforeUpdate"),m&&Rn(m,!0);const X=E&&p.type!=="foreignObject";if(w?se(d.dynamicChildren,w,P,m,_,X,v):x||st(d,p,P,null,m,_,X,v,!1),b>0){if(b&16)Ze(P,p,N,U,m,_,E);else if(b&2&&N.class!==U.class&&i(P,"class",null,U.class,E),b&4&&i(P,"style",N.style,U.style,E),b&8){const dt=p.dynamicProps;for(let ut=0;ut<dt.length;ut++){const vt=dt[ut],fe=N[vt],Xn=U[vt];(Xn!==fe||vt==="value")&&i(P,vt,fe,Xn,E,d.children,m,_,Lt)}}b&1&&d.children!==p.children&&u(P,p.children)}else!x&&w==null&&Ze(P,p,N,U,m,_,E);((K=U.onVnodeUpdated)||B)&&Xt(()=>{K&&Pe(K,m,p,d),B&&wn(p,d,m,"updated")},_)},se=(d,p,m,_,E,v,x)=>{for(let P=0;P<p.length;P++){const b=d[P],w=p[P],B=b.el&&(b.type===Zt||!Fr(b,w)||b.shapeFlag&70)?h(b.el):m;I(b,w,B,null,_,E,v,x,!0)}},Ze=(d,p,m,_,E,v,x)=>{if(m!==_){if(m!==gt)for(const P in m)!hi(P)&&!(P in _)&&i(d,P,m[P],null,x,p.children,E,v,Lt);for(const P in _){if(hi(P))continue;const b=_[P],w=m[P];b!==w&&P!=="value"&&i(d,P,w,b,x,p.children,E,v,Lt)}"value"in _&&i(d,"value",m.value,_.value)}},Tn=(d,p,m,_,E,v,x,P,b)=>{const w=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:K}=p;K&&(P=P?P.concat(K):K),d==null?(r(w,m,_),r(B,m,_),Te(p.children,m,B,E,v,x,P,b)):N>0&&N&64&&U&&d.dynamicChildren?(se(d.dynamicChildren,U,m,E,v,x,P),(p.key!=null||E&&p===E.subTree)&&Xf(d,p,!0)):st(d,p,m,B,E,v,x,P,b)},we=(d,p,m,_,E,v,x,P,b)=>{p.slotScopeIds=P,d==null?p.shapeFlag&512?E.ctx.activate(p,m,_,x,b):Or(p,m,_,E,v,x,b):Gn(d,p,b)},Or=(d,p,m,_,E,v,x)=>{const P=d.component=aA(d,_,E);if(Bf(d)&&(P.ctx.renderer=D),cA(P),P.asyncDep){if(E&&E.registerDep(P,Pt),!d.el){const b=P.subTree=bt(fs);S(null,b,p,m)}return}Pt(P,d,p,m,E,v,x)},Gn=(d,p,m)=>{const _=p.component=d.component;if(y_(d,p,m))if(_.asyncDep&&!_.asyncResolved){ht(_,p,m);return}else _.next=p,d_(_.update),_.update();else p.el=d.el,_.vnode=p},Pt=(d,p,m,_,E,v,x)=>{const P=()=>{if(d.isMounted){let{next:B,bu:N,u:U,parent:K,vnode:X}=d,dt=B,ut;Rn(d,!1),B?(B.el=X.el,ht(d,B,x)):B=X,N&&fi(N),(ut=B.props&&B.props.onVnodeBeforeUpdate)&&Pe(ut,K,B,X),Rn(d,!0);const vt=Ho(d),fe=d.subTree;d.subTree=vt,I(fe,vt,h(fe.el),A(fe),d,E,v),B.el=vt.el,dt===null&&E_(d,vt.el),U&&Xt(U,E),(ut=B.props&&B.props.onVnodeUpdated)&&Xt(()=>Pe(ut,K,B,X),E)}else{let B;const{el:N,props:U}=p,{bm:K,m:X,parent:dt}=d,ut=di(p);if(Rn(d,!1),K&&fi(K),!ut&&(B=U&&U.onVnodeBeforeMount)&&Pe(B,dt,p),Rn(d,!0),N&&it){const vt=()=>{d.subTree=Ho(d),it(N,d.subTree,d,E,null)};ut?p.type.__asyncLoader().then(()=>!d.isUnmounted&&vt()):vt()}else{const vt=d.subTree=Ho(d);I(null,vt,m,_,d,E,v),p.el=vt.el}if(X&&Xt(X,E),!ut&&(B=U&&U.onVnodeMounted)){const vt=p;Xt(()=>Pe(B,dt,vt),E)}(p.shapeFlag&256||dt&&di(dt.vnode)&&dt.vnode.shapeFlag&256)&&d.a&&Xt(d.a,E),d.isMounted=!0,p=m=_=null}},b=d.effect=new yc(P,()=>Pc(w),d.scope),w=d.update=()=>b.run();w.id=d.uid,Rn(d,!0),w()},ht=(d,p,m)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,z_(d,p.props,_,m),G_(d,p.children,m),Pr(),eu(),Sr()},st=(d,p,m,_,E,v,x,P,b=!1)=>{const w=d&&d.children,B=d?d.shapeFlag:0,N=p.children,{patchFlag:U,shapeFlag:K}=p;if(U>0){if(U&128){tn(w,N,m,_,E,v,x,P,b);return}else if(U&256){Ue(w,N,m,_,E,v,x,P,b);return}}K&8?(B&16&&Lt(w,E,v),N!==w&&u(m,N)):B&16?K&16?tn(w,N,m,_,E,v,x,P,b):Lt(w,E,v,!0):(B&8&&u(m,""),K&16&&Te(N,m,_,E,v,x,P,b))},Ue=(d,p,m,_,E,v,x,P,b)=>{d=d||ir,p=p||ir;const w=d.length,B=p.length,N=Math.min(w,B);let U;for(U=0;U<N;U++){const K=p[U]=b?rn(p[U]):Se(p[U]);I(d[U],K,m,null,E,v,x,P,b)}w>B?Lt(d,E,v,!0,!1,N):Te(p,m,_,E,v,x,P,b,N)},tn=(d,p,m,_,E,v,x,P,b)=>{let w=0;const B=p.length;let N=d.length-1,U=B-1;for(;w<=N&&w<=U;){const K=d[w],X=p[w]=b?rn(p[w]):Se(p[w]);if(Fr(K,X))I(K,X,m,null,E,v,x,P,b);else break;w++}for(;w<=N&&w<=U;){const K=d[N],X=p[U]=b?rn(p[U]):Se(p[U]);if(Fr(K,X))I(K,X,m,null,E,v,x,P,b);else break;N--,U--}if(w>N){if(w<=U){const K=U+1,X=K<B?p[K].el:_;for(;w<=U;)I(null,p[w]=b?rn(p[w]):Se(p[w]),m,X,E,v,x,P,b),w++}}else if(w>U)for(;w<=N;)Jt(d[w],E,v,!0),w++;else{const K=w,X=w,dt=new Map;for(w=X;w<=U;w++){const ie=p[w]=b?rn(p[w]):Se(p[w]);ie.key!=null&&dt.set(ie.key,w)}let ut,vt=0;const fe=U-X+1;let Xn=!1,Hl=0;const Nr=new Array(fe);for(w=0;w<fe;w++)Nr[w]=0;for(w=K;w<=N;w++){const ie=d[w];if(vt>=fe){Jt(ie,E,v,!0);continue}let Ce;if(ie.key!=null)Ce=dt.get(ie.key);else for(ut=X;ut<=U;ut++)if(Nr[ut-X]===0&&Fr(ie,p[ut])){Ce=ut;break}Ce===void 0?Jt(ie,E,v,!0):(Nr[Ce-X]=w+1,Ce>=Hl?Hl=Ce:Xn=!0,I(ie,p[Ce],m,null,E,v,x,P,b),vt++)}const ql=Xn?X_(Nr):ir;for(ut=ql.length-1,w=fe-1;w>=0;w--){const ie=X+w,Ce=p[ie],Ql=ie+1<B?p[ie+1].el:_;Nr[w]===0?I(null,Ce,m,Ql,E,v,x,P,b):Xn&&(ut<0||w!==ql[ut]?Re(Ce,m,Ql,2):ut--)}}},Re=(d,p,m,_,E=null)=>{const{el:v,type:x,transition:P,children:b,shapeFlag:w}=d;if(w&6){Re(d.component.subTree,p,m,_);return}if(w&128){d.suspense.move(p,m,_);return}if(w&64){x.move(d,p,m,D);return}if(x===Zt){r(v,p,m);for(let N=0;N<b.length;N++)Re(b[N],p,m,_);r(d.anchor,p,m);return}if(x===Qo){q(d,p,m);return}if(_!==2&&w&1&&P)if(_===0)P.beforeEnter(v),r(v,p,m),Xt(()=>P.enter(v),E);else{const{leave:N,delayLeave:U,afterLeave:K}=P,X=()=>r(v,p,m),dt=()=>{N(v,()=>{X(),K&&K()})};U?U(v,X,dt):dt()}else r(v,p,m)},Jt=(d,p,m,_=!1,E=!1)=>{const{type:v,props:x,ref:P,children:b,dynamicChildren:w,shapeFlag:B,patchFlag:N,dirs:U}=d;if(P!=null&&ba(P,null,m,d,!0),B&256){p.ctx.deactivate(d);return}const K=B&1&&U,X=!di(d);let dt;if(X&&(dt=x&&x.onVnodeBeforeUnmount)&&Pe(dt,p,d),B&6)Gs(d.component,m,_);else{if(B&128){d.suspense.unmount(m,_);return}K&&wn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,E,D,_):w&&(v!==Zt||N>0&&N&64)?Lt(w,p,m,!1,!0):(v===Zt&&N&384||!E&&B&16)&&Lt(b,p,m),_&&Yn(d)}(X&&(dt=x&&x.onVnodeUnmounted)||K)&&Xt(()=>{dt&&Pe(dt,p,d),K&&wn(d,null,p,"unmounted")},m)},Yn=d=>{const{type:p,el:m,anchor:_,transition:E}=d;if(p===Zt){Jn(m,_);return}if(p===Qo){O(d);return}const v=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:P}=E,b=()=>x(m,v);P?P(d.el,v,b):b()}else v()},Jn=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},Gs=(d,p,m)=>{const{bum:_,scope:E,update:v,subTree:x,um:P}=d;_&&fi(_),E.stop(),v&&(v.active=!1,Jt(x,d,p,m)),P&&Xt(P,p),Xt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Lt=(d,p,m,_=!1,E=!1,v=0)=>{for(let x=v;x<d.length;x++)Jt(d[x],p,m,_,E)},A=d=>d.shapeFlag&6?A(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,p,m)=>{d==null?p._vnode&&Jt(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),eu(),xf(),p._vnode=d},D={p:I,um:Jt,m:Re,r:Yn,mt:Or,mc:Te,pc:st,pbc:se,n:A,o:e};let L,it;return t&&([L,it]=t(D)),{render:M,hydrate:L,createApp:q_(M,L)}}function Rn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Xf(e,t,n=!1){const r=e.children,s=t.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=rn(s[i]),a.el=o.el),n||Xf(o,a)),a.type===ao&&(a.el=o.el)}}function X_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Z_=e=>e.__isTeleport,Zt=Symbol.for("v-fgt"),ao=Symbol.for("v-txt"),fs=Symbol.for("v-cmt"),Qo=Symbol.for("v-stc"),Yr=[];let _e=null;function Ht(e=!1){Yr.push(_e=e?null:[])}function tA(){Yr.pop(),_e=Yr[Yr.length-1]||null}let ds=1;function fu(e){ds+=e}function Zf(e){return e.dynamicChildren=ds>0?_e||ir:null,tA(),ds>0&&_e&&_e.push(e),e}function te(e,t,n,r,s,i){return Zf(J(e,t,n,r,s,i,!0))}function td(e,t,n,r,s){return Zf(bt(e,t,n,r,s,!0))}function Da(e){return e?e.__v_isVNode===!0:!1}function Fr(e,t){return e.type===t.type&&e.key===t.key}const co="__vInternal",ed=({key:e})=>e??null,gi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?wt(e)||Nt(e)||Y(e)?{i:ue,r:e,k:t,f:!!n}:e:null);function J(e,t=null,n=null,r=0,s=null,i=e===Zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ed(t),ref:t&&gi(t),scopeId:io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ue};return a?(kc(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=wt(n)?8:16),ds>0&&!o&&_e&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_e.push(c),c}const bt=eA;function eA(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===qf)&&(e=fs),Da(e)){const a=pr(e,t,!0);return n&&kc(a,n),ds>0&&!i&&_e&&(a.shapeFlag&6?_e[_e.indexOf(e)]=a:_e.push(a)),a.patchFlag|=-2,a}if(dA(e)&&(e=e.__vccOpts),t){t=nA(t);let{class:a,style:c}=t;a&&!wt(a)&&(t.class=cs(a)),pt(c)&&(wf(c)&&!H(c)&&(c=Dt({},c)),t.style=_c(c))}const o=wt(e)?1:v_(e)?128:Z_(e)?64:pt(e)?4:Y(e)?2:0;return J(e,t,n,r,s,o,i,!0)}function nA(e){return e?wf(e)||co in e?Dt({},e):e:null}function pr(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?sA(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ed(a),ref:t&&t.ref?n&&s?H(s)?s.concat(gi(t)):[s,gi(t)]:gi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Zt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pr(e.ssContent),ssFallback:e.ssFallback&&pr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function rA(e=" ",t=0){return bt(ao,null,e,t)}function Se(e){return e==null||typeof e=="boolean"?bt(fs):H(e)?bt(Zt,null,e.slice()):typeof e=="object"?rn(e):bt(ao,null,String(e))}function rn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pr(e)}function kc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),kc(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(co in t)?t._ctx=ue:s===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),r&64?(n=16,t=[rA(t)]):n=8);e.children=t,e.shapeFlag|=n}function sA(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=cs([t.class,r.class]));else if(s==="style")t.style=_c([t.style,r.style]);else if(Yi(s)){const i=t[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Pe(e,t,n,r=null){Ee(e,t,7,[n,r])}const iA=zf();let oA=0;function aA(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||iA,i={uid:oA++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new hf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(r,s),emitsOptions:Mf(r,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:r.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=m_.bind(null,i),e.ce&&e.ce(i),i}let Ot=null,Mc,Zn,du="__VUE_INSTANCE_SETTERS__";(Zn=ya()[du])||(Zn=ya()[du]=[]),Zn.push(e=>Ot=e),Mc=e=>{Zn.length>1?Zn.forEach(t=>t(e)):Zn[0](e)};const gr=e=>{Mc(e),e.scope.on()},Fn=()=>{Ot&&Ot.scope.off(),Mc(null)};function nd(e){return e.vnode.shapeFlag&4}let ps=!1;function cA(e,t=!1){ps=t;const{props:n,children:r}=e.vnode,s=nd(e);Q_(e,n,s,t),W_(e,r);const i=s?lA(e,t):void 0;return ps=!1,i}function lA(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=wc(new Proxy(e.ctx,F_));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?hA(e):null;gr(e),Pr();const i=cn(r,e,0,[e.props,s]);if(Sr(),Fn(),of(i)){if(i.then(Fn,Fn),t)return i.then(o=>{pu(e,o,t)}).catch(o=>{ro(o,e,0)});e.asyncDep=i}else pu(e,i,t)}else rd(e,t)}function pu(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pt(t)&&(e.setupState=Sf(t)),rd(e,n)}let gu;function rd(e,t,n){const r=e.type;if(!e.render){if(!t&&gu&&!r.render){const s=r.template||Vc(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Dt(Dt({isCustomElement:i,delimiters:a},o),c);r.render=gu(s,l)}}e.render=r.render||ye}gr(e),Pr(),L_(e),Sr(),Fn()}function uA(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ne(e,"get","$attrs"),t[n]}}))}function hA(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return uA(e)},slots:e.slots,emit:e.emit,expose:t}}function lo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Sf(wc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gr)return Gr[n](e)},has(t,n){return n in t||n in Gr}}))}function fA(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function dA(e){return Y(e)&&"__vccOpts"in e}const me=(e,t)=>u_(e,t,ps);function sd(e,t,n){const r=arguments.length;return r===2?pt(t)&&!H(t)?Da(t)?bt(e,null,[t]):bt(e,t):bt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Da(n)&&(n=[n]),bt(e,t,n))}const pA=Symbol.for("v-scx"),gA=()=>Me(pA),mA="3.3.4",_A="http://www.w3.org/2000/svg",Sn=typeof document<"u"?document:null,mu=Sn&&Sn.createElement("template"),AA={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Sn.createElementNS(_A,e):Sn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Sn.createTextNode(e),createComment:e=>Sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mu.innerHTML=r?`<svg>${e}</svg>`:e;const a=mu.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function yA(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function EA(e,t,n){const r=e.style,s=wt(n);if(n&&!s){if(t&&!wt(t))for(const i in t)n[i]==null&&Va(r,i,"");for(const i in n)Va(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const _u=/\s*!important$/;function Va(e,t,n){if(H(n))n.forEach(r=>Va(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vA(e,t);_u.test(n)?e.setProperty(Cr(r),n.replace(_u,""),"important"):e[r]=n}}const Au=["Webkit","Moz","ms"],zo={};function vA(e,t){const n=zo[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return zo[t]=r;r=Zi(r);for(let s=0;s<Au.length;s++){const i=Au[s]+r;if(i in e)return zo[t]=i}return t}const yu="http://www.w3.org/1999/xlink";function IA(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(yu,t.slice(6,t.length)):e.setAttributeNS(yu,t,n);else{const i=Sm(t);n==null||i&&!lf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function TA(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=lf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function bn(e,t,n,r){e.addEventListener(t,n,r)}function wA(e,t,n,r){e.removeEventListener(t,n,r)}function RA(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=CA(t);if(r){const l=i[t]=bA(r,s);bn(e,a,l,c)}else o&&(wA(e,a,o,c),i[t]=void 0)}}const Eu=/(?:Once|Passive|Capture)$/;function CA(e){let t;if(Eu.test(e)){t={};let r;for(;r=e.match(Eu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Cr(e.slice(2)),t]}let Ko=0;const PA=Promise.resolve(),SA=()=>Ko||(PA.then(()=>Ko=0),Ko=Date.now());function bA(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(DA(r,n.value),t,5,[r])};return n.value=e,n.attached=SA(),n}function DA(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const vu=/^on[a-z]/,VA=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?yA(e,r,s):t==="style"?EA(e,n,r):Yi(t)?pc(t)||RA(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xA(e,t,r,s))?TA(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),IA(e,t,r,s))};function xA(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&vu.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||vu.test(t)&&wt(n)?!1:t in e}const Pi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>fi(t,n):t};function kA(e){e.target.composing=!0}function Iu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const MA={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=Pi(s);const i=r||s.props&&s.props.type==="number";bn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=vi(a)),e._assign(a)}),n&&bn(e,"change",()=>{e.value=e.value.trim()}),t||(bn(e,"compositionstart",kA),bn(e,"compositionend",Iu),bn(e,"change",Iu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=Pi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&vi(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},OA={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Ji(t);bn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?vi(Si(o)):Si(o));e._assign(e.multiple?s?new Set(i):i:i[0])}),e._assign=Pi(r)},mounted(e,{value:t}){Tu(e,t)},beforeUpdate(e,t,n){e._assign=Pi(n)},updated(e,{value:t}){Tu(e,t)}};function Tu(e,t){const n=e.multiple;if(!(n&&!H(t)&&!Ji(t))){for(let r=0,s=e.options.length;r<s;r++){const i=e.options[r],o=Si(i);if(n)H(t)?i.selected=Dm(t,o)>-1:i.selected=t.has(o);else if(to(Si(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Si(e){return"_value"in e?e._value:e.value}const NA=Dt({patchProp:VA},AA);let wu;function FA(){return wu||(wu=Y_(NA))}const LA=(...e)=>{const t=FA().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=BA(r);if(!s)return;const i=t._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function BA(e){return wt(e)?document.querySelector(e):e}var UA=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $A=Symbol();var Ru;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ru||(Ru={}));function jA(){const e=Vm(!0),t=e.run(()=>pe({}));let n=[],r=[];const s=wc({install(i){s._a=i,i.provide($A,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!UA?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const er=typeof window<"u";function HA(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ct=Object.assign;function Wo(e,t){const n={};for(const r in t){const s=t[r];n[r]=ve(s)?s.map(e):e(s)}return n}const Jr=()=>{},ve=Array.isArray,qA=/\/$/,QA=e=>e.replace(qA,"");function Go(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=GA(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function zA(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Cu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function KA(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mr(t.matched[r],n.matched[s])&&id(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function id(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!WA(e[n],t[n]))return!1;return!0}function WA(e,t){return ve(e)?Pu(e,t):ve(t)?Pu(t,e):e===t}function Pu(e,t){return ve(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function GA(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var gs;(function(e){e.pop="pop",e.push="push"})(gs||(gs={}));var Xr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Xr||(Xr={}));function YA(e){if(!e)if(er){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),QA(e)}const JA=/^[^#]+#/;function XA(e,t){return e.replace(JA,"#")+t}function ZA(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const uo=()=>({left:window.pageXOffset,top:window.pageYOffset});function ty(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ZA(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Su(e,t){return(history.state?history.state.position-t:-1)+e}const xa=new Map;function ey(e,t){xa.set(e,t)}function ny(e){const t=xa.get(e);return xa.delete(e),t}let ry=()=>location.protocol+"//"+location.host;function od(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Cu(c,"")}return Cu(n,e)+r+s}function sy(e,t,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=od(e,location),y=n.value,I=t.value;let R=0;if(f){if(n.value=g,t.value=f,o&&o===y){o=null;return}R=I?f.position-I.position:0}else r(g);s.forEach(S=>{S(n.value,y,{delta:R,type:gs.pop,direction:R?R>0?Xr.forward:Xr.back:Xr.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ct({},f.state,{scroll:uo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function bu(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?uo():null}}function iy(e){const{history:t,location:n}=window,r={value:od(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:ry()+e+c;try{t[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ct({},t.state,bu(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ct({},s.value,t.state,{forward:c,scroll:uo()});i(u.current,u,!0);const h=ct({},bu(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function oy(e){e=YA(e);const t=iy(e),n=sy(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ct({location:"",base:e,go:r,createHref:XA.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ay(e){return typeof e=="string"||e&&typeof e=="object"}function ad(e){return typeof e=="string"||typeof e=="symbol"}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cd=Symbol("");var Du;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Du||(Du={}));function _r(e,t){return ct(new Error,{type:e,[cd]:!0},t)}function $e(e,t){return e instanceof Error&&cd in e&&(t==null||!!(e.type&t))}const Vu="[^/]+?",cy={sensitive:!1,strict:!1,start:!0,end:!0},ly=/[.+*?^${}()[\]/\\]/g;function uy(e,t){const n=ct({},cy,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(ly,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:I,optional:R,regexp:S}=f;i.push({name:y,repeatable:I,optional:R});const k=S||Vu;if(k!==Vu){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+O.message)}}let q=I?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(q=R&&l.length<2?`(?:/${q})`:"/"+q),R&&(q+="?"),s+=q,g+=20,R&&(g+=-8),I&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:I,optional:R}=g,S=y in l?l[y]:"";if(ve(S)&&!I)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=ve(S)?S.join("/"):S;if(!k)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function hy(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function fy(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=hy(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xu(r))return 1;if(xu(s))return-1}return s.length-r.length}function xu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const dy={type:0,value:""},py=/[a-zA-Z0-9_]/;function gy(e){if(!e)return[[]];if(e==="/")return[[dy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:py.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function my(e,t,n){const r=uy(gy(e.path),n),s=ct(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function _y(e,t){const n=[],r=new Map;t=Ou({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=Ay(u);y.aliasOf=f&&f.record;const I=Ou(t,u),R=[y];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of q)R.push(ct({},y,{components:f?f.record.components:y.components,path:O,aliasOf:f?f.record:y}))}let S,k;for(const q of R){const{path:O}=q;if(h&&O[0]!=="/"){const ft=h.record.path,at=ft[ft.length-1]==="/"?"":"/";q.path=h.record.path+(O&&at+O)}if(S=my(q,h,I),f?f.alias.push(S):(k=k||S,k!==S&&k.alias.push(S),g&&u.name&&!Mu(S)&&o(u.name)),y.children){const ft=y.children;for(let at=0;at<ft.length;at++)i(ft[at],S,f&&f.children[at])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return k?()=>{o(k)}:Jr}function o(u){if(ad(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&fy(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ld(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Mu(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},y,I;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw _r(1,{location:u});I=f.record.name,g=ct(ku(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&ku(u.params,f.keys.map(k=>k.name))),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(k=>k.re.test(y)),f&&(g=f.parse(y),I=f.record.name);else{if(f=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw _r(1,{location:u,currentLocation:h});I=f.record.name,g=ct({},h.params,u.params),y=f.stringify(g)}const R=[];let S=f;for(;S;)R.unshift(S.record),S=S.parent;return{name:I,path:y,params:g,matched:R,meta:Ey(R)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ku(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ay(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:yy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function yy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Mu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ey(e){return e.reduce((t,n)=>ct(t,n.meta),{})}function Ou(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ld(e,t){return t.children.some(n=>n===e||ld(e,n))}const ud=/#/g,vy=/&/g,Iy=/\//g,Ty=/=/g,wy=/\?/g,hd=/\+/g,Ry=/%5B/g,Cy=/%5D/g,fd=/%5E/g,Py=/%60/g,dd=/%7B/g,Sy=/%7C/g,pd=/%7D/g,by=/%20/g;function Oc(e){return encodeURI(""+e).replace(Sy,"|").replace(Ry,"[").replace(Cy,"]")}function Dy(e){return Oc(e).replace(dd,"{").replace(pd,"}").replace(fd,"^")}function ka(e){return Oc(e).replace(hd,"%2B").replace(by,"+").replace(ud,"%23").replace(vy,"%26").replace(Py,"`").replace(dd,"{").replace(pd,"}").replace(fd,"^")}function Vy(e){return ka(e).replace(Ty,"%3D")}function xy(e){return Oc(e).replace(ud,"%23").replace(wy,"%3F")}function ky(e){return e==null?"":xy(e).replace(Iy,"%2F")}function bi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function My(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(hd," "),o=i.indexOf("="),a=bi(o<0?i:i.slice(0,o)),c=o<0?null:bi(i.slice(o+1));if(a in t){let l=t[a];ve(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Nu(e){let t="";for(let n in e){const r=e[n];if(n=Vy(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ve(r)?r.map(i=>i&&ka(i)):[r&&ka(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Oy(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Ny=Symbol(""),Fu=Symbol(""),Nc=Symbol(""),Fc=Symbol(""),Ma=Symbol("");function Lr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function sn(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(_r(4,{from:n,to:t})):h instanceof Error?a(h):ay(h)?a(_r(2,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Yo(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Fy(a)){const l=(a.__vccOpts||a)[t];l&&s.push(sn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=HA(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&sn(f,n,r,i,o)()}))}}return s}function Fy(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Lu(e){const t=Me(Nc),n=Me(Fc),r=me(()=>t.resolve(ke(e.to))),s=me(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(mr.bind(null,u));if(f>-1)return f;const g=Bu(c[l-2]);return l>1&&Bu(u)===g&&h[h.length-1].path!==g?h.findIndex(mr.bind(null,c[l-2])):f}),i=me(()=>s.value>-1&&Uy(n.params,r.value.params)),o=me(()=>s.value>-1&&s.value===n.matched.length-1&&id(n.params,r.value.params));function a(c={}){return By(c)?t[ke(e.replace)?"replace":"push"](ke(e.to)).catch(Jr):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ly=Lf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lu,setup(e,{slots:t}){const n=no(Lu(e)),{options:r}=Me(Nc),s=me(()=>({[Uu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Uu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:sd("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gd=Ly;function By(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Uy(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Uu=(e,t,n)=>e??t??n,$y=Lf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Me(Ma),s=me(()=>e.route||r.value),i=Me(Fu,0),o=me(()=>{let l=ke(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=me(()=>s.value.matched[o.value]);pi(Fu,me(()=>o.value+1)),pi(Ny,a),pi(Ma,s);const c=pe();return Wr(()=>[c.value,a.value,e.name],([l,u,h],[f,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!mr(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return $u(n.default,{Component:f,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=sd(f,ct({},y,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return $u(n.default,{Component:R,route:l})||R}}});function $u(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const md=$y;function jy(e){const t=_y(e.routes,e),n=e.parseQuery||My,r=e.stringifyQuery||Nu,s=e.history,i=Lr(),o=Lr(),a=Lr(),c=o_(nn);let l=nn;er&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wo.bind(null,A=>""+A),h=Wo.bind(null,ky),f=Wo.bind(null,bi);function g(A,M){let D,L;return ad(A)?(D=t.getRecordMatcher(A),L=M):L=A,t.addRoute(L,D)}function y(A){const M=t.getRecordMatcher(A);M&&t.removeRoute(M)}function I(){return t.getRoutes().map(A=>A.record)}function R(A){return!!t.getRecordMatcher(A)}function S(A,M){if(M=ct({},M||c.value),typeof A=="string"){const m=Go(n,A,M.path),_=t.resolve({path:m.path},M),E=s.createHref(m.fullPath);return ct(m,_,{params:f(_.params),hash:bi(m.hash),redirectedFrom:void 0,href:E})}let D;if("path"in A)D=ct({},A,{path:Go(n,A.path,M.path).path});else{const m=ct({},A.params);for(const _ in m)m[_]==null&&delete m[_];D=ct({},A,{params:h(m)}),M.params=h(M.params)}const L=t.resolve(D,M),it=A.hash||"";L.params=u(f(L.params));const d=zA(r,ct({},A,{hash:Dy(it),path:L.path})),p=s.createHref(d);return ct({fullPath:d,hash:it,query:r===Nu?Oy(A.query):A.query||{}},L,{redirectedFrom:void 0,href:p})}function k(A){return typeof A=="string"?Go(n,A,c.value.path):ct({},A)}function q(A,M){if(l!==A)return _r(8,{from:M,to:A})}function O(A){return re(A)}function ft(A){return O(ct(k(A),{replace:!0}))}function at(A){const M=A.matched[A.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let L=typeof D=="function"?D(A):D;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=k(L):{path:L},L.params={}),ct({query:A.query,hash:A.hash,params:"path"in L?{}:A.params},L)}}function re(A,M){const D=l=S(A),L=c.value,it=A.state,d=A.force,p=A.replace===!0,m=at(D);if(m)return re(ct(k(m),{state:typeof m=="object"?ct({},it,m.state):it,force:d,replace:p}),M||D);const _=D;_.redirectedFrom=M;let E;return!d&&KA(r,L,D)&&(E=_r(16,{to:_,from:L}),Re(L,L,!0,!1)),(E?Promise.resolve(E):se(_,L)).catch(v=>$e(v)?$e(v,2)?v:tn(v):st(v,_,L)).then(v=>{if(v){if($e(v,2))return re(ct({replace:p},k(v.to),{state:typeof v.to=="object"?ct({},it,v.to.state):it,force:d}),M||_)}else v=Tn(_,L,!0,p,it);return Ze(_,L,v),v})}function Te(A,M){const D=q(A,M);return D?Promise.reject(D):Promise.resolve()}function Xe(A){const M=Jn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(A):A()}function se(A,M){let D;const[L,it,d]=Hy(A,M);D=Yo(L.reverse(),"beforeRouteLeave",A,M);for(const m of L)m.leaveGuards.forEach(_=>{D.push(sn(_,A,M))});const p=Te.bind(null,A,M);return D.push(p),Lt(D).then(()=>{D=[];for(const m of i.list())D.push(sn(m,A,M));return D.push(p),Lt(D)}).then(()=>{D=Yo(it,"beforeRouteUpdate",A,M);for(const m of it)m.updateGuards.forEach(_=>{D.push(sn(_,A,M))});return D.push(p),Lt(D)}).then(()=>{D=[];for(const m of d)if(m.beforeEnter)if(ve(m.beforeEnter))for(const _ of m.beforeEnter)D.push(sn(_,A,M));else D.push(sn(m.beforeEnter,A,M));return D.push(p),Lt(D)}).then(()=>(A.matched.forEach(m=>m.enterCallbacks={}),D=Yo(d,"beforeRouteEnter",A,M),D.push(p),Lt(D))).then(()=>{D=[];for(const m of o.list())D.push(sn(m,A,M));return D.push(p),Lt(D)}).catch(m=>$e(m,8)?m:Promise.reject(m))}function Ze(A,M,D){a.list().forEach(L=>Xe(()=>L(A,M,D)))}function Tn(A,M,D,L,it){const d=q(A,M);if(d)return d;const p=M===nn,m=er?history.state:{};D&&(L||p?s.replace(A.fullPath,ct({scroll:p&&m&&m.scroll},it)):s.push(A.fullPath,it)),c.value=A,Re(A,M,D,p),tn()}let we;function Or(){we||(we=s.listen((A,M,D)=>{if(!Gs.listening)return;const L=S(A),it=at(L);if(it){re(ct(it,{replace:!0}),L).catch(Jr);return}l=L;const d=c.value;er&&ey(Su(d.fullPath,D.delta),uo()),se(L,d).catch(p=>$e(p,12)?p:$e(p,2)?(re(p.to,L).then(m=>{$e(m,20)&&!D.delta&&D.type===gs.pop&&s.go(-1,!1)}).catch(Jr),Promise.reject()):(D.delta&&s.go(-D.delta,!1),st(p,L,d))).then(p=>{p=p||Tn(L,d,!1),p&&(D.delta&&!$e(p,8)?s.go(-D.delta,!1):D.type===gs.pop&&$e(p,20)&&s.go(-1,!1)),Ze(L,d,p)}).catch(Jr)}))}let Gn=Lr(),Pt=Lr(),ht;function st(A,M,D){tn(A);const L=Pt.list();return L.length?L.forEach(it=>it(A,M,D)):console.error(A),Promise.reject(A)}function Ue(){return ht&&c.value!==nn?Promise.resolve():new Promise((A,M)=>{Gn.add([A,M])})}function tn(A){return ht||(ht=!A,Or(),Gn.list().forEach(([M,D])=>A?D(A):M()),Gn.reset()),A}function Re(A,M,D,L){const{scrollBehavior:it}=e;if(!er||!it)return Promise.resolve();const d=!D&&ny(Su(A.fullPath,0))||(L||!D)&&history.state&&history.state.scroll||null;return Df().then(()=>it(A,M,d)).then(p=>p&&ty(p)).catch(p=>st(p,A,M))}const Jt=A=>s.go(A);let Yn;const Jn=new Set,Gs={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:R,getRoutes:I,resolve:S,options:e,push:O,replace:ft,go:Jt,back:()=>Jt(-1),forward:()=>Jt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Pt.add,isReady:Ue,install(A){const M=this;A.component("RouterLink",gd),A.component("RouterView",md),A.config.globalProperties.$router=M,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(c)}),er&&!Yn&&c.value===nn&&(Yn=!0,O(s.location).catch(it=>{}));const D={};for(const it in nn)Object.defineProperty(D,it,{get:()=>c.value[it],enumerable:!0});A.provide(Nc,M),A.provide(Fc,If(D)),A.provide(Ma,c);const L=A.unmount;Jn.add(A),A.unmount=function(){Jn.delete(A),Jn.size<1&&(l=nn,we&&we(),we=null,c.value=nn,Yn=!1,ht=!1),L()}}};function Lt(A){return A.reduce((M,D)=>M.then(()=>Xe(D)),Promise.resolve())}return Gs}function Hy(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>mr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>mr(l,c))||s.push(c))}return[n,r,s]}function qy(){return Me(Fc)}const yn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Qy={class:"menu"},zy=["title"],Ky=["src"],Wy={__name:"Menu",setup(e){const t=qy();console.log(t.path);const n=[{path:"/",name:"home",img:"src/assets/img/plan"},{path:"/stats",name:"stats",img:"src/assets/img/stats"},{path:"/user",name:"user",img:"src/assets/img/me"}];return(r,s)=>(Ht(),te("nav",Qy,[(Ht(),te(Zt,null,wi(n,i=>bt(ke(gd),{to:i.path},{default:Dc(()=>[J("abbr",{class:"center",title:i.name},[J("img",{src:ke(t).path==i.path?i.img+".png":i.img+"W.png",alt:"elm.name"},null,8,Ky)],8,zy)]),_:2},1032,["to"])),64))]))}},Gy=yn(Wy,[["__scopeId","data-v-b2cdced0"]]);const Yy={class:"view"},Jy={class:"footer"},Xy={__name:"App",setup(e){return(t,n)=>(Ht(),te(Zt,null,[J("div",Yy,[bt(ke(md),null,{default:Dc(({Component:r,route:s})=>[(Ht(),td(O_(r)))]),_:1})]),J("div",Jy,[bt(Gy)])],64))}},Zy=yn(Xy,[["__scopeId","data-v-24ef64b6"]]),tE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA2eSURBVHhe7d3bjttGFgXQli+JE8Tzu/Yn2N8bZJyLnZ5SRCB2j9ySKF7q1F4LMEg9BAjI6jq7TpHSAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAOg7TEbr2+OHhcTqF7h3em1vpn0HKrhR2kgkK7MngYxMKPVxPMGALBhmrUPBhOQIBazCoWISCD9sRCFiCQcQsCj70QyBgDoOGqyn60D9hgGsZKFyk8EM9ggCXGCCcpejDOIQBzjEo+IbCD+MSBPiawcDRi1b4v0znQABhAAMgmNU+IAjkcuMDKfzAU4JAHjc8iMIPXCII5HgxHRnbcY9f8QcumuYKtSGApDc4hR+YSzdgbG7uoBR+YCmCwJi0ecbzWvEHljTNKa9OnxiFVDcQhR9Ym27AONzIASj8wNYEgfrcwOIUf2AvQkBtngGo66XiD+xpmoNenj5RjfRWkMIP9EY3oB43rBjFH+iVEFCLLYA6tPyBrtkSqEVaK0DhB6rRDeifG9Q5xR+oSgjom5vTMcUfqE4I6Jcb0ynFHxiFENAnDwH256D4AyOZ5jT1pjNuSF+OP+Tz93QOMIw2t31pBz8o1BEBoB8/tD+QP6dzgOG0Oe6vdnhz+sTeBIA+/Nz+MP6YzgGG1ea6T+3wy+kTexIA9ve2/UH8Np0DDK/Neb+2w9vTJ/biycx9HVf+ij8Q6fD+n06AOXAnAsB+jnv+2v5AtBYCjs8EmAt3IADs4/i9/p+nc4BoLQS8bgdz4sYEgO29aMX/+DoMAJMWAo4/IuQ16A0JABtrxd+X/ACc4RsDt+Vib0jxB3ieELAdF3ojij/AdYSAbbjIG1D8AW4jBKzPBV6Z4g8wjxCwLt8EuC7XF2C+45sBrES6WpHVP8B9dAHW48KuRPEHWIYQsA4XdQWKP8CyhIDl2aNenmsKsDzPAyxMolqY1T/AOnQBluViLkjxB1iXELAc7eqFKP4Am/hpOnInAQCAMtpi67/TKXfSSlmA1T/AtmwF3E8H4H6vpiMA2zH33kmCupPVP8A+dAHu4+LdQfEH2JcQMJ8tAAAIJDnNZPUP0AddgHl0AOZx3QD6IQDM4KLNYPUP0BddgNu5YDdS/AH6JATcRisbAAJJSzew+gfomy7A9XQAACCQpHQlq3+AGnQBrqMDAACBBIDrSJMAdahtV1DYrqD9D1CLbYDLpCQACCQhXWD1D1CTLsDzdAAAIJB09Ayrf4DadAG+TwcAAAIJAAAQSGvkO7T/AcZgG+A8HQAACCQAnGH1D8DoBAAAhmZRd54AAACBPBjxhKQIMCYPA35LBwAAAgkAABBIAACAQPZDvmL/H2BsngP4lw4AAAQSAAAgkAAAAIHshUzs/wNk8BzAiQ4AAAQSAAAgkAAAAIHsgzT2/wGyeA5ABwAAIgkAABBIAACAQAIAAAQSAAAgUPxTkN4AAMiU/iaADgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAJDo3eO3/4A4vgfA9wCQ4NYi/9EPhTI+3wMAjGvuCl9nAIYXHQCs/hnaEgVcCIBhRbc/BACGtFbRti3AgJK3AWwBwEjWXLHrBsBQBAAYxRYFWgiAYQgAABBIAIARbLky1wWAIQgAUN0eBVkIgPIEAAAIJABAZXuuxHUBoDQBAAACCQAAEEgAAIBAAgBU1cMevOcAoCwBAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAoMN0jPT44eFxOmU079xaFvQxeqoc2uF9bh0UABiDgs+WBIJhJAcAWwDUdiz8ij9bM+4YgABAXSZg9mYMUpgAQD1WX/TEeKQoAYBaTLT0ytikGAGAOkyw9M4YpRABAAACCQDUYGVFFcYqRQgA9M+ESjXGLAUIAAAQSACgb1ZSVGXs0jkBAAACCQAAEEgAAIBAAgD9sodKdcYwHRMAACCQAAAAgQQAAAgkANCvj4fpBIoyhumYAAAAgQQAAAgkAABAIAGAvtlDpSpjl84JAAAQSACgf1ZSVGPMUoAAQA0mVKowVilCAACAQAIAdVhZ0TtjlEIEAGoxwdIrY5NiBADqOU60Jlt6YTxSlABAXSZd9mYMUpgAQG1WX+zBuGMA0SP48cPD43TKaN65tSxIsR/W4X1uHRQAoKpeQo7iSGHJAcAWAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAVPXxMJ3sqIf/B2AWAQAAAgkAABBIAACAQAIAVLbnHrz9fyhNAACAQAIAVLfHStzqH8oTAGAEWxZkxR+GIAAAQCABAEaxxcrc6h+GIQDASNYs0Io/DCX6L/rxw8PjdArjebfQ8Fb4GdThfXYNjO4ApN98BrdE4Vb8YVi2AGBkxwI+p4jP/e+AMuL/wm0DEOnp9oBiT6D0LrAAIAAARPIMAAAQRwAAgEACAAAEEgAAIJAAAACBBAAACOTl38argABZfBOsDgAARBIAACCQAAAAgQQAAAgkAABAIG8BTLwJAJDBGwAnOgAAEEgAAIBAAgAABLIP8hXPAQCMzf7/v3QAACCQAAAAgQQAAAhkL+QJzwEAjMn+/7d0AAAgkAAAAIEEAAAIZD/kDM8BAIzF/v//0wEAgEACAABDs/o/TwA4w2ABYHQCAAAEstJ9hocBAWrT0f0+HQAACCQAAEAgrZELbAMA1KT9/zwdAAAIJB1dQRcAoBar/8t0AAAgkABwhZYkXSeAIszZ13GRrmMLAKAOc/YVBAAACOQhiRt4GBCgbx7+u54OAAAEkpRupAsA0Cer/9voAABAIGlpBl0AgL5Y/d9OB2AG75gC9MOcPI+LNo8OAEA/zMkzaJncwVYAwL60/ufTAQCAQJLTnXQBAPZh9X8fHYA7tQH4ejoFYCNt7n01nTKTAHC/z9MRgO18mY7MpH2yEFsBANvQ+l+GDgAAZbTi/9N0yp0EgIVIpACb+H06cidFa2G2AgDWYaG1LB2AhbUB+nI6BWAhbW711P/CBIDl/T0dAViOp/4Xpp2yElsBAMvQ+l+Hi7oiIQDgPor/emwBrMjzAADz2fdflwCwLs8DAMxn339FWisbsBUAcBut//W5wBsRAgCuo/hvw0XekBAA8DzFfzsu9MaEAIDzFP9teQhwY22AezMA4Ik2N6pHG3PBt/d3G+hebQGYtDnxdTvojm5MANjHlzbgf5zOAWK1ufBNO3w+fWJLAsB+/mwD/+fpHCBOmwN/aYc/Tp/YmgCwr0/tD+A/0zlAjDb3vW2H306f2IMnLvvw4+OHh9+nc4ChTd3PT6dP7EUA6McPLQRohQFDa8X/uOdvruuAANCXVy0E/DWdAwylFf/jG1C+378TAkB/Di0E+BEhYCit+B+/A8Xc1hEBoFO+MRAYRSv+ak2H3JSOCQFAdYp/v9yYzgkBQFWKf9/cnAKEAKAaxb9/blAdHg4EuudhvzoEgGJ0A4BeWfXX4mYVJAQAvVH863HD6rIlAOxOy78uAaA43QBgL1b9tbl5Y3jTgoAf1gA20Qr/8Wd8/ZJfcQLAQHQDgLVZ9Y/DjRzPyxYEPk/nAItohd8P+QxGABiUbgCwFKv+MbmpgxMEgLkU/rG5uRm8MghcrRX+F+1g8TA4ASCIbgBwiVV/Djc6kCAAPKXw53HDgwkCgMKfy43nH8IAZFH4MQD4hiAA41L0+ZrBwFmCAIxD4eccg4KLhAGoR9HnEgOEmwgD0C9Fn1sYLMwiCEA/FH7mMGhYhEAA21HwWYJBxCoEAliOgs8aDCo2IRDA9RR8tmCQsSvBgGQKPXsy+ChBUKAShR0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFgPD/8DZqUz3JyENfkAAAAASUVORK5CYII=";const Lc=e=>(Sc("data-v-b5294e11"),e=e(),bc(),e),eE={class:"center exeCard"},nE={class:"text-2xl font-bold"},rE={class:"props"},sE=Lc(()=>J("h2",null,"Series:",-1)),iE=Lc(()=>J("h2",null,"Reps:",-1)),oE=Lc(()=>J("div",null,[J("h2",null,"Type:"),J("p",null,"Power")],-1)),aE={__name:"ExeCard",props:{name:"Exercise",series:0,reps:"0"},setup(e){const t=e;return(n,r)=>(Ht(),te("div",eE,[J("h3",nE,On(t.name),1),J("div",rE,[J("div",null,[sE,J("p",null,On(t.series),1)]),J("div",null,[iE,J("p",null,On(t.reps),1)]),oE])]))}},cE=yn(aE,[["__scopeId","data-v-b5294e11"]]),lE="/Flex/assets/addExe-bbc541e7.png";const xs=e=>(Sc("data-v-894f6427"),e=e(),bc(),e),uE={class:"card"},hE=xs(()=>J("header",{class:"center"},[J("img",{src:lE,alt:"addExe"})],-1)),fE={class:"form"},dE=xs(()=>J("h1",null,"Add a new plan",-1)),pE=xs(()=>J("h3",null,"Name:",-1)),gE=xs(()=>J("h3",null,"Description:",-1)),mE=xs(()=>J("input",{type:"text",placeholder:"Observations"},null,-1)),_E={__name:"AddRoutine",props:{onCancel:"onCancel",onAccept:"onAccept"},setup(e){const t=e;let n=pe("");const r=()=>{t.onCancel(),n.value=""},s=()=>{t.onAccept(n.value)};return(i,o)=>(Ht(),te("div",uE,[hE,J("div",fE,[dE,pE,Ff(J("input",{type:"text",placeholder:"Ex: Push B Routine","onUpdate:modelValue":o[0]||(o[0]=a=>Nt(n)?n.value=a:n=a)},null,512),[[MA,ke(n)]]),gE,mE]),J("div",{class:"options center"},[J("h3",{onClick:r},"CANCEL"),J("h3",{onClick:s},"ACCEPT")])]))}},AE=yn(_E,[["__scopeId","data-v-894f6427"]]);/**
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
 */const _d=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},yE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_d(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new EE;const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class EE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vE=function(e){const t=_d(e);return Ad.encodeByteArray(t,!0)},Di=function(e){return vE(e).replace(/\./g,"")},IE=function(e){try{return Ad.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function TE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wE=()=>TE().__FIREBASE_DEFAULTS__,RE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},CE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&IE(e[1]);return t&&JSON.parse(t)},yd=()=>{try{return wE()||RE()||CE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},PE=e=>{var t,n;return(n=(t=yd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},SE=e=>{const t=PE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ed=()=>{var e;return(e=yd())===null||e===void 0?void 0:e.config};/**
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
 */class bE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function DE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Di(JSON.stringify(n)),Di(JSON.stringify(o)),a].join(".")}function VE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function vd(){try{return typeof indexedDB=="object"}catch{return!1}}function Id(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function xE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const kE="FirebaseError";class En extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=kE,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ho.prototype.create)}}class ho{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?ME(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new En(s,a,r)}}function ME(e,t){return e.replace(OE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const OE=/\{\$([^}]+)}/g;function Vi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ju(i)&&ju(o)){if(!Vi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ju(e){return e!==null&&typeof e=="object"}/**
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
 */const NE=1e3,FE=2,LE=4*60*60*1e3,BE=.5;function Hu(e,t=NE,n=FE){const r=t*Math.pow(n,e),s=Math.round(BE*r*(Math.random()-.5)*2);return Math.min(LE,r+s)}/**
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
 */function pn(e){return e&&e._delegate?e._delegate:e}class ze{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Cn="[DEFAULT]";/**
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
 */class UE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new bE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jE(t))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Cn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cn){return this.instances.has(t)}getOptions(t=Cn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$E(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Cn){return this.component?this.component.multipleInstances?t:Cn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $E(e){return e===Cn?void 0:e}function jE(e){return e.instantiationMode==="EAGER"}/**
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
 */class HE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new UE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ot;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ot||(ot={}));const qE={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},QE=ot.INFO,zE={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},KE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=zE[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bc{constructor(t){this.name=t,this._logLevel=QE,this._logHandler=KE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...t),this._logHandler(this,ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...t),this._logHandler(this,ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...t),this._logHandler(this,ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...t),this._logHandler(this,ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...t),this._logHandler(this,ot.ERROR,...t)}}const WE=(e,t)=>t.some(n=>e instanceof n);let qu,Qu;function GE(){return qu||(qu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YE(){return Qu||(Qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Td=new WeakMap,Oa=new WeakMap,wd=new WeakMap,Jo=new WeakMap,Uc=new WeakMap;function JE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ln(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Td.set(n,e)}).catch(()=>{}),Uc.set(t,e),t}function XE(e){if(Oa.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Oa.set(e,t)}let Na={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Oa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ZE(e){Na=e(Na)}function tv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xo(this),t,...n);return wd.set(r,t.sort?t.sort():[t]),ln(r)}:YE().includes(e)?function(...t){return e.apply(Xo(this),t),ln(Td.get(this))}:function(...t){return ln(e.apply(Xo(this),t))}}function ev(e){return typeof e=="function"?tv(e):(e instanceof IDBTransaction&&XE(e),WE(e,GE())?new Proxy(e,Na):e)}function ln(e){if(e instanceof IDBRequest)return JE(e);if(Jo.has(e))return Jo.get(e);const t=ev(e);return t!==e&&(Jo.set(e,t),Uc.set(t,e)),t}const Xo=e=>Uc.get(e);function nv(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ln(o.result),c.oldVersion,c.newVersion,ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const rv=["get","getKey","getAll","getAllKeys","count"],sv=["put","add","delete","clear"],Zo=new Map;function zu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Zo.get(t))return Zo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=sv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Zo.set(t,i),i}ZE(e=>({...e,get:(t,n,r)=>zu(t,n)||e.get(t,n,r),has:(t,n)=>!!zu(t,n)||e.has(t,n)}));/**
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
 */class iv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ov(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ov(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fa="@firebase/app",Ku="0.9.15";/**
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
 */const Un=new Bc("@firebase/app"),av="@firebase/app-compat",cv="@firebase/analytics-compat",lv="@firebase/analytics",uv="@firebase/app-check-compat",hv="@firebase/app-check",fv="@firebase/auth",dv="@firebase/auth-compat",pv="@firebase/database",gv="@firebase/database-compat",mv="@firebase/functions",_v="@firebase/functions-compat",Av="@firebase/installations",yv="@firebase/installations-compat",Ev="@firebase/messaging",vv="@firebase/messaging-compat",Iv="@firebase/performance",Tv="@firebase/performance-compat",wv="@firebase/remote-config",Rv="@firebase/remote-config-compat",Cv="@firebase/storage",Pv="@firebase/storage-compat",Sv="@firebase/firestore",bv="@firebase/firestore-compat",Dv="firebase",Vv="10.1.0";/**
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
 */const La="[DEFAULT]",xv={[Fa]:"fire-core",[av]:"fire-core-compat",[lv]:"fire-analytics",[cv]:"fire-analytics-compat",[hv]:"fire-app-check",[uv]:"fire-app-check-compat",[fv]:"fire-auth",[dv]:"fire-auth-compat",[pv]:"fire-rtdb",[gv]:"fire-rtdb-compat",[mv]:"fire-fn",[_v]:"fire-fn-compat",[Av]:"fire-iid",[yv]:"fire-iid-compat",[Ev]:"fire-fcm",[vv]:"fire-fcm-compat",[Iv]:"fire-perf",[Tv]:"fire-perf-compat",[wv]:"fire-rc",[Rv]:"fire-rc-compat",[Cv]:"fire-gcs",[Pv]:"fire-gcs-compat",[Sv]:"fire-fst",[bv]:"fire-fst-compat","fire-js":"fire-js",[Dv]:"fire-js-all"};/**
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
 */const xi=new Map,Ba=new Map;function kv(e,t){try{e.container.addComponent(t)}catch(n){Un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function gn(e){const t=e.name;if(Ba.has(t))return Un.debug(`There were multiple attempts to register component ${t}.`),!1;Ba.set(t,e);for(const n of xi.values())kv(n,e);return!0}function ks(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Mv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new ho("app","Firebase",Mv);/**
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
 */class Ov{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const Nv=Vv;function Rd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:La,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(n||(n=Ed()),!n)throw un.create("no-options");const i=xi.get(s);if(i){if(Vi(n,i.options)&&Vi(r,i.config))return i;throw un.create("duplicate-app",{appName:s})}const o=new HE(s);for(const c of Ba.values())o.addComponent(c);const a=new Ov(n,r,o);return xi.set(s,a),a}function Cd(e=La){const t=xi.get(e);if(!t&&e===La&&Ed())return Rd();if(!t)throw un.create("no-app",{appName:e});return t}function Oe(e,t,n){var r;let s=(r=xv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}gn(new ze(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Fv="firebase-heartbeat-database",Lv=1,ms="firebase-heartbeat-store";let ta=null;function Pd(){return ta||(ta=nv(Fv,Lv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ms)}}}).catch(e=>{throw un.create("idb-open",{originalErrorMessage:e.message})})),ta}async function Bv(e){try{return await(await Pd()).transaction(ms).objectStore(ms).get(Sd(e))}catch(t){if(t instanceof En)Un.warn(t.message);else{const n=un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Un.warn(n.message)}}}async function Wu(e,t){try{const r=(await Pd()).transaction(ms,"readwrite");await r.objectStore(ms).put(t,Sd(e)),await r.done}catch(n){if(n instanceof En)Un.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function Sd(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Uv=1024,$v=30*24*60*60*1e3;class jv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=$v}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gu(),{heartbeatsToSend:n,unsentEntries:r}=Hv(this._heartbeatsCache.heartbeats),s=Di(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Gu(){return new Date().toISOString().substring(0,10)}function Hv(e,t=Uv){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vd()?Id().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Yu(e){return Di(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Qv(e){gn(new ze("platform-logger",t=>new iv(t),"PRIVATE")),gn(new ze("heartbeat",t=>new jv(t),"PRIVATE")),Oe(Fa,Ku,e),Oe(Fa,Ku,"esm2017"),Oe("fire-js","")}Qv("");var zv="firebase",Kv="10.1.0";/**
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
 */Oe(zv,Kv,"app");const Wv=(e,t)=>t.some(n=>e instanceof n);let Ju,Xu;function Gv(){return Ju||(Ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yv(){return Xu||(Xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bd=new WeakMap,Ua=new WeakMap,Dd=new WeakMap,ea=new WeakMap,$c=new WeakMap;function Jv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(hn(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&bd.set(n,e)}).catch(()=>{}),$c.set(t,e),t}function Xv(e){if(Ua.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ua.set(e,t)}let $a={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ua.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Dd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zv(e){$a=e($a)}function tI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(na(this),t,...n);return Dd.set(r,t.sort?t.sort():[t]),hn(r)}:Yv().includes(e)?function(...t){return e.apply(na(this),t),hn(bd.get(this))}:function(...t){return hn(e.apply(na(this),t))}}function eI(e){return typeof e=="function"?tI(e):(e instanceof IDBTransaction&&Xv(e),Wv(e,Gv())?new Proxy(e,$a):e)}function hn(e){if(e instanceof IDBRequest)return Jv(e);if(ea.has(e))return ea.get(e);const t=eI(e);return t!==e&&(ea.set(e,t),$c.set(t,e)),t}const na=e=>$c.get(e);function nI(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=hn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(hn(o.result),c.oldVersion,c.newVersion,hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const rI=["get","getKey","getAll","getAllKeys","count"],sI=["put","add","delete","clear"],ra=new Map;function Zu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ra.get(t))return ra.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=sI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ra.set(t,i),i}Zv(e=>({...e,get:(t,n,r)=>Zu(t,n)||e.get(t,n,r),has:(t,n)=>!!Zu(t,n)||e.has(t,n)}));const Vd="@firebase/installations",jc="0.6.4";/**
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
 */const xd=1e4,kd=`w:${jc}`,Md="FIS_v2",iI="https://firebaseinstallations.googleapis.com/v1",oI=60*60*1e3,aI="installations",cI="Installations";/**
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
 */const lI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$n=new ho(aI,cI,lI);function Od(e){return e instanceof En&&e.code.includes("request-failed")}/**
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
 */function Nd({projectId:e}){return`${iI}/projects/${e}/installations`}function Fd(e){return{token:e.token,requestStatus:2,expiresIn:hI(e.expiresIn),creationTime:Date.now()}}async function Ld(e,t){const r=(await t.json()).error;return $n.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Bd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function uI(e,{refreshToken:t}){const n=Bd(e);return n.append("Authorization",fI(t)),n}async function Ud(e){const t=await e();return t.status>=500&&t.status<600?e():t}function hI(e){return Number(e.replace("s","000"))}function fI(e){return`${Md} ${e}`}/**
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
 */async function dI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Nd(e),s=Bd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Md,appId:e.appId,sdkVersion:kd},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Ud(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Fd(l.authToken)}}else throw await Ld("Create Installation",c)}/**
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
 */function $d(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function pI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gI=/^[cdef][\w-]{21}$/,ja="";function mI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=_I(e);return gI.test(n)?n:ja}catch{return ja}}function _I(e){return pI(e).substr(0,22)}/**
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
 */function fo(e){return`${e.appName}!${e.appId}`}/**
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
 */const jd=new Map;function Hd(e,t){const n=fo(e);qd(n,t),AI(n,t)}function qd(e,t){const n=jd.get(e);if(n)for(const r of n)r(t)}function AI(e,t){const n=yI();n&&n.postMessage({key:e,fid:t}),EI()}let Vn=null;function yI(){return!Vn&&"BroadcastChannel"in self&&(Vn=new BroadcastChannel("[Firebase] FID Change"),Vn.onmessage=e=>{qd(e.data.key,e.data.fid)}),Vn}function EI(){jd.size===0&&Vn&&(Vn.close(),Vn=null)}/**
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
 */const vI="firebase-installations-database",II=1,jn="firebase-installations-store";let sa=null;function Hc(){return sa||(sa=nI(vI,II,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(jn)}}})),sa}async function ki(e,t){const n=fo(e),s=(await Hc()).transaction(jn,"readwrite"),i=s.objectStore(jn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Hd(e,t.fid),t}async function Qd(e){const t=fo(e),r=(await Hc()).transaction(jn,"readwrite");await r.objectStore(jn).delete(t),await r.done}async function po(e,t){const n=fo(e),s=(await Hc()).transaction(jn,"readwrite"),i=s.objectStore(jn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Hd(e,a.fid),a}/**
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
 */async function qc(e){let t;const n=await po(e.appConfig,r=>{const s=TI(r),i=wI(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===ja?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function TI(e){const t=e||{fid:mI(),registrationStatus:0};return zd(t)}function wI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject($n.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=RI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:CI(e)}:{installationEntry:t}}async function RI(e,t){try{const n=await dI(e,t);return ki(e.appConfig,n)}catch(n){throw Od(n)&&n.customData.serverCode===409?await Qd(e.appConfig):await ki(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function CI(e){let t=await th(e.appConfig);for(;t.registrationStatus===1;)await $d(100),t=await th(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qc(e);return r||n}return t}function th(e){return po(e,t=>{if(!t)throw $n.create("installation-not-found");return zd(t)})}function zd(e){return PI(e)?{fid:e.fid,registrationStatus:0}:e}function PI(e){return e.registrationStatus===1&&e.registrationTime+xd<Date.now()}/**
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
 */async function SI({appConfig:e,heartbeatServiceProvider:t},n){const r=bI(e,n),s=uI(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:kd,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Ud(()=>fetch(r,a));if(c.ok){const l=await c.json();return Fd(l)}else throw await Ld("Generate Auth Token",c)}function bI(e,{fid:t}){return`${Nd(e)}/${t}/authTokens:generate`}/**
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
 */async function Qc(e,t=!1){let n;const r=await po(e.appConfig,i=>{if(!Kd(i))throw $n.create("not-registered");const o=i.authToken;if(!t&&xI(o))return i;if(o.requestStatus===1)return n=DI(e,t),i;{if(!navigator.onLine)throw $n.create("app-offline");const a=MI(i);return n=VI(e,a),a}});return n?await n:r.authToken}async function DI(e,t){let n=await eh(e.appConfig);for(;n.authToken.requestStatus===1;)await $d(100),n=await eh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Qc(e,t):r}function eh(e){return po(e,t=>{if(!Kd(t))throw $n.create("not-registered");const n=t.authToken;return OI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function VI(e,t){try{const n=await SI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ki(e.appConfig,r),n}catch(n){if(Od(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ki(e.appConfig,r)}throw n}}function Kd(e){return e!==void 0&&e.registrationStatus===2}function xI(e){return e.requestStatus===2&&!kI(e)}function kI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+oI}function MI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function OI(e){return e.requestStatus===1&&e.requestTime+xd<Date.now()}/**
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
 */async function NI(e){const t=e,{installationEntry:n,registrationPromise:r}=await qc(t);return r?r.catch(console.error):Qc(t).catch(console.error),n.fid}/**
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
 */async function FI(e,t=!1){const n=e;return await LI(n),(await Qc(n,t)).token}async function LI(e){const{registrationPromise:t}=await qc(e);t&&await t}/**
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
 */function BI(e){if(!e||!e.options)throw ia("App Configuration");if(!e.name)throw ia("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ia(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ia(e){return $n.create("missing-app-config-values",{valueName:e})}/**
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
 */const Wd="installations",UI="installations-internal",$I=e=>{const t=e.getProvider("app").getImmediate(),n=BI(t),r=ks(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jI=e=>{const t=e.getProvider("app").getImmediate(),n=ks(t,Wd).getImmediate();return{getId:()=>NI(n),getToken:s=>FI(n,s)}};function HI(){gn(new ze(Wd,$I,"PUBLIC")),gn(new ze(UI,jI,"PRIVATE"))}HI();Oe(Vd,jc);Oe(Vd,jc,"esm2017");/**
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
 */const Mi="analytics",qI="firebase_id",QI="origin",zI=60*1e3,KI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zc="https://www.googletagmanager.com/gtag/js";/**
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
 */const ee=new Bc("@firebase/analytics");/**
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
 */const WI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},oe=new ho("analytics","Analytics",WI);/**
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
 */function GI(e){if(!e.startsWith(zc)){const t=oe.create("invalid-gtag-resource",{gtagURL:e});return ee.warn(t.message),""}return e}function Gd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function YI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function JI(e,t){const n=YI("firebase-js-sdk-policy",{createScriptURL:GI}),r=document.createElement("script"),s=`${zc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function XI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ZI(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Gd(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){ee.error(a)}e("config",s,i)}async function tT(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Gd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ee.error(i)}}function eT(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await tT(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await ZI(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ee.error(a)}}return s}function nT(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=eT(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function rT(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(zc)&&n.src.includes(e))return n;return null}/**
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
 */const sT=30,iT=1e3;class oT{constructor(t={},n=iT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Yd=new oT;function aT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function cT(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:aT(r)},i=KI.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw oe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function lT(e,t=Yd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw oe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw oe.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new fT;return setTimeout(async()=>{a.abort()},n!==void 0?n:zI),Jd({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Jd(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Yd){var i;const{appId:o,measurementId:a}=e;try{await uT(r,t)}catch(c){if(a)return ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await cT(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!hT(l)){if(s.deleteThrottleMetadata(o),a)return ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Hu(n,s.intervalMillis,sT):Hu(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ee.debug(`Calling attemptFetch again in ${u} millis`),Jd(e,h,r,s)}}function uT(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(oe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function hT(e){if(!(e instanceof En)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class fT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function dT(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function pT(){if(vd())try{await Id()}catch(e){return ee.warn(oe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ee.warn(oe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gT(e,t,n,r,s,i,o){var a;const c=lT(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ee.error(g)),t.push(c);const l=pT().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([c,l]);rT(i)||JI(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[QI]="firebase",f.update=!0,h!=null&&(f[qI]=h),s("config",u.measurementId,f),u.measurementId}/**
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
 */class mT{constructor(t){this.app=t}_delete(){return delete Zr[this.app.options.appId],Promise.resolve()}}let Zr={},nh=[];const rh={};let oa="dataLayer",_T="gtag",sh,Xd,ih=!1;function AT(){const e=[];if(VE()&&e.push("This is a browser extension environment."),xE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=oe.create("invalid-analytics-context",{errorInfo:t});ee.warn(n.message)}}function yT(e,t,n){AT();const r=e.options.appId;if(!r)throw oe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw oe.create("no-api-key");if(Zr[r]!=null)throw oe.create("already-exists",{id:r});if(!ih){XI(oa);const{wrappedGtag:i,gtagCore:o}=nT(Zr,nh,rh,oa,_T);Xd=i,sh=o,ih=!0}return Zr[r]=gT(e,nh,rh,t,sh,oa,n),new mT(e)}function ET(e=Cd()){e=pn(e);const t=ks(e,Mi);return t.isInitialized()?t.getImmediate():vT(e)}function vT(e,t={}){const n=ks(e,Mi);if(n.isInitialized()){const s=n.getImmediate();if(Vi(t,n.getOptions()))return s;throw oe.create("already-initialized")}return n.initialize({options:t})}function IT(e,t,n,r){e=pn(e),dT(Xd,Zr[e.app.options.appId],t,n,r).catch(s=>ee.error(s))}const oh="@firebase/analytics",ah="0.10.0";function TT(){gn(new ze(Mi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return yT(r,s,n)},"PUBLIC")),gn(new ze("analytics-internal",e,"PRIVATE")),Oe(oh,ah),Oe(oh,ah,"esm2017");function e(t){try{const n=t.getProvider(Mi).getImmediate();return{logEvent:(r,s,i)=>IT(n,r,s,i)}}catch(n){throw oe.create("interop-component-reg-failed",{reason:n})}}}TT();var wT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Kc=Kc||{},z=wT||self;function go(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ms(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function RT(e){return Object.prototype.hasOwnProperty.call(e,aa)&&e[aa]||(e[aa]=++CT)}var aa="closure_uid_"+(1e9*Math.random()>>>0),CT=0;function PT(e,t,n){return e.call.apply(e.bind,arguments)}function ST(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Qt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qt=PT:Qt=ST,Qt.apply(null,arguments)}function ni(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function xt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function vn(){this.s=this.s,this.o=this.o}var bT=0;vn.prototype.s=!1;vn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),bT!=0)&&RT(this)};vn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Wc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ch(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(go(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function zt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var DT=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{z.addEventListener("test",()=>{},t),z.removeEventListener("test",()=>{},t)}catch{}return e}();function _s(e){return/^[\s\xa0]*$/.test(e)}function mo(){var e=z.navigator;return e&&(e=e.userAgent)?e:""}function De(e){return mo().indexOf(e)!=-1}function Gc(e){return Gc[" "](e),e}Gc[" "]=function(){};function VT(e,t){var n=Tw;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var xT=De("Opera"),Ar=De("Trident")||De("MSIE"),tp=De("Edge"),Ha=tp||Ar,ep=De("Gecko")&&!(mo().toLowerCase().indexOf("webkit")!=-1&&!De("Edge"))&&!(De("Trident")||De("MSIE"))&&!De("Edge"),kT=mo().toLowerCase().indexOf("webkit")!=-1&&!De("Edge");function np(){var e=z.document;return e?e.documentMode:void 0}var qa;t:{var ca="",la=function(){var e=mo();if(ep)return/rv:([^\);]+)(\)|;)/.exec(e);if(tp)return/Edge\/([\d\.]+)/.exec(e);if(Ar)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(kT)return/WebKit\/(\S+)/.exec(e);if(xT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(la&&(ca=la?la[1]:""),Ar){var ua=np();if(ua!=null&&ua>parseFloat(ca)){qa=String(ua);break t}}qa=ca}var Qa;if(z.document&&Ar){var lh=np();Qa=lh||parseInt(qa,10)||void 0}else Qa=void 0;var MT=Qa;function As(e,t){if(zt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ep){t:{try{Gc(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:OT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&As.$.h.call(this)}}xt(As,zt);var OT={2:"touch",3:"pen",4:"mouse"};As.prototype.h=function(){As.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),NT=0;function FT(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++NT,this.fa=this.ia=!1}function _o(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Yc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function LT(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function rp(e){const t={};for(const n in e)t[n]=e[n];return t}const uh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sp(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<uh.length;i++)n=uh[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ao(e){this.src=e,this.g={},this.h=0}Ao.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ka(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new FT(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function za(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Zd(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(_o(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ka(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Jc="closure_lm_"+(1e6*Math.random()|0),ha={};function ip(e,t,n,r,s){if(r&&r.once)return ap(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ip(e,t[i],n,r,s);return null}return n=tl(n),e&&e[Os]?e.O(t,n,Ms(r)?!!r.capture:!!r,s):op(e,t,n,!1,r,s)}function op(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ms(s)?!!s.capture:!!s,a=Zc(e);if(a||(e[Jc]=a=new Ao(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=BT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)DT||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(lp(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BT(){function e(n){return t.call(e.src,e.listener,n)}const t=UT;return e}function ap(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ap(e,t[i],n,r,s);return null}return n=tl(n),e&&e[Os]?e.P(t,n,Ms(r)?!!r.capture:!!r,s):op(e,t,n,!0,r,s)}function cp(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)cp(e,t[i],n,r,s);else r=Ms(r)?!!r.capture:!!r,n=tl(n),e&&e[Os]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ka(i,n,r,s),-1<n&&(_o(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Zc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ka(t,n,r,s)),(n=-1<e?t[e]:null)&&Xc(n))}function Xc(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Os])za(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(lp(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Zc(t))?(za(n,e),n.h==0&&(n.src=null,t[Jc]=null)):_o(e)}}}function lp(e){return e in ha?ha[e]:ha[e]="on"+e}function UT(e,t){if(e.fa)e=!0;else{t=new As(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Xc(e),e=n.call(r,t)}return e}function Zc(e){return e=e[Jc],e instanceof Ao?e:null}var fa="__closure_events_fn_"+(1e9*Math.random()>>>0);function tl(e){return typeof e=="function"?e:(e[fa]||(e[fa]=function(t){return e.handleEvent(t)}),e[fa])}function Vt(){vn.call(this),this.i=new Ao(this),this.S=this,this.J=null}xt(Vt,vn);Vt.prototype[Os]=!0;Vt.prototype.removeEventListener=function(e,t,n,r){cp(this,e,t,n,r)};function Ft(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new zt(t,e);else if(t instanceof zt)t.target=t.target||e;else{var s=t;t=new zt(r,e),sp(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=ri(o,r,!0,t)&&s}if(o=t.g=e,s=ri(o,r,!0,t)&&s,s=ri(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=ri(o,r,!1,t)&&s}Vt.prototype.N=function(){if(Vt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)_o(n[r]);delete e.g[t],e.h--}}this.J=null};Vt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Vt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ri(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&za(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var el=z.JSON.stringify;class $T{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function jT(){var e=nl;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class HT{constructor(){this.h=this.g=null}add(t,n){const r=up.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var up=new $T(()=>new qT,e=>e.reset());class qT{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QT(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function zT(e){z.setTimeout(()=>{throw e},0)}let ys,Es=!1,nl=new HT,hp=()=>{const e=z.Promise.resolve(void 0);ys=()=>{e.then(KT)}};var KT=()=>{for(var e;e=jT();){try{e.h.call(e.g)}catch(n){zT(n)}var t=up;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Es=!1};function yo(e,t){Vt.call(this),this.h=e||1,this.g=t||z,this.j=Qt(this.qb,this),this.l=Date.now()}xt(yo,Vt);V=yo.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ft(this,"tick"),this.ga&&(rl(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rl(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}V.N=function(){yo.$.N.call(this),rl(this),delete this.g};function sl(e,t,n){if(typeof e=="function")n&&(e=Qt(e,n));else if(e&&typeof e.handleEvent=="function")e=Qt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:z.setTimeout(e,t||0)}function fp(e){e.g=sl(()=>{e.g=null,e.i&&(e.i=!1,fp(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class WT extends vn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:fp(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(e){vn.call(this),this.h=e,this.g={}}xt(vs,vn);var hh=[];function dp(e,t,n,r){Array.isArray(n)||(n&&(hh[0]=n.toString()),n=hh);for(var s=0;s<n.length;s++){var i=ip(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function pp(e){Yc(e.g,function(t,n){this.g.hasOwnProperty(n)&&Xc(t)},e),e.g={}}vs.prototype.N=function(){vs.$.N.call(this),pp(this)};vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Eo(){this.g=!0}Eo.prototype.Ea=function(){this.g=!1};function GT(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function YT(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function sr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+XT(e,n)+(r?" "+r:"")})}function JT(e,t){e.info(function(){return"TIMEOUT: "+t})}Eo.prototype.info=function(){};function XT(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return el(n)}catch{return t}}var zn={},fh=null;function vo(){return fh=fh||new Vt}zn.Ta="serverreachability";function gp(e){zt.call(this,zn.Ta,e)}xt(gp,zt);function Is(e){const t=vo();Ft(t,new gp(t))}zn.STAT_EVENT="statevent";function mp(e,t){zt.call(this,zn.STAT_EVENT,e),this.stat=t}xt(mp,zt);function Yt(e){const t=vo();Ft(t,new mp(t,e))}zn.Ua="timingevent";function _p(e,t){zt.call(this,zn.Ua,e),this.size=t}xt(_p,zt);function Ns(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){e()},t)}var Io={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ap={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function il(){}il.prototype.h=null;function dh(e){return e.h||(e.h=e.i())}function yp(){}var Fs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ol(){zt.call(this,"d")}xt(ol,zt);function al(){zt.call(this,"c")}xt(al,zt);var Wa;function To(){}xt(To,il);To.prototype.g=function(){return new XMLHttpRequest};To.prototype.i=function(){return{}};Wa=new To;function Ls(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new vs(this),this.P=ZT,e=Ha?125:void 0,this.V=new yo(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ep}function Ep(){this.i=null,this.g="",this.h=!1}var ZT=45e3,Ga={},Oi={};V=Ls.prototype;V.setTimeout=function(e){this.P=e};function Ya(e,t,n){e.L=1,e.v=Ro(Ke(t)),e.s=n,e.S=!0,vp(e,null)}function vp(e,t){e.G=Date.now(),Bs(e),e.A=Ke(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),bp(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Ep,e.g=Yp(e.l,n?t:null,!e.s),0<e.O&&(e.M=new WT(Qt(e.Pa,e,e.g),e.O)),dp(e.U,e.g,"readystatechange",e.nb),t=e.I?rp(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Is(),GT(e.j,e.u,e.A,e.m,e.W,e.s)}V.nb=function(e){e=e.target;const t=this.M;t&&Ve(e)==3?t.l():this.Pa(e)};V.Pa=function(e){try{if(e==this.g)t:{const u=Ve(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ha||this.g&&(this.h.h||this.g.ja()||_h(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Is(3):Is(2)),wo(this);var n=this.g.da();this.ca=n;e:if(Ip(this)){var r=_h(this.g);e="";var s=r.length,i=Ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),ts(this);var o="";break e}this.h.i=new z.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,YT(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_s(a)){var l=a;break e}}l=null}if(n=l)sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ja(this,n);else{this.i=!1,this.o=3,Yt(12),xn(this),ts(this);break t}}this.S?(Tp(this,u,o),Ha&&this.i&&u==3&&(dp(this.U,this.V,"tick",this.mb),this.V.start())):(sr(this.j,this.m,o,null),Ja(this,o)),u==4&&xn(this),this.i&&!this.J&&(u==4?zp(this.l,this):(this.i=!1,Bs(this)))}else Ew(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Yt(12)):(this.o=0,Yt(13)),xn(this),ts(this)}}}catch{}finally{}};function Ip(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Tp(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=tw(e,n),s==Oi){t==4&&(e.o=4,Yt(14),r=!1),sr(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Ga){e.o=4,Yt(15),sr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else sr(e.j,e.m,s,null),Ja(e,s);Ip(e)&&s!=Oi&&s!=Ga&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Yt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),dl(t),t.M=!0,Yt(11))):(sr(e.j,e.m,n,"[Invalid Chunked Response]"),xn(e),ts(e))}V.mb=function(){if(this.g){var e=Ve(this.g),t=this.g.ja();this.C<t.length&&(wo(this),Tp(this,e,t),this.i&&e!=4&&Bs(this))}};function tw(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Oi:(n=Number(t.substring(n,r)),isNaN(n)?Ga:(r+=1,r+n>t.length?Oi:(t=t.slice(r,r+n),e.C=r+n,t)))}V.cancel=function(){this.J=!0,xn(this)};function Bs(e){e.Y=Date.now()+e.P,wp(e,e.P)}function wp(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ns(Qt(e.lb,e),t)}function wo(e){e.B&&(z.clearTimeout(e.B),e.B=null)}V.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(JT(this.j,this.A),this.L!=2&&(Is(),Yt(17)),xn(this),this.o=2,ts(this)):wp(this,this.Y-e)};function ts(e){e.l.H==0||e.J||zp(e.l,e)}function xn(e){wo(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,rl(e.V),pp(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ja(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Xa(n.i,e))){if(!e.K&&Xa(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Li(n),So(n);else break t;fl(n),Yt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ns(Qt(n.ib,n),6e3));if(1>=xp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else kn(n,11)}else if((e.K||n.g==e)&&Li(n),!_s(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(cl(i,i.h),i.h=null))}if(r.F){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,mt(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Gp(r,r.J?r.pa:null,r.Y),o.K){kp(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(wo(a),Bs(a)),r.g=o}else qp(r);0<n.j.length&&bo(n)}else l[0]!="stop"&&l[0]!="close"||kn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?kn(n,7):hl(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Is(4)}catch{}}function ew(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(go(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function nw(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(go(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Rp(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(go(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=nw(e),r=ew(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rw(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ln(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ln){this.h=e.h,Ni(this,e.j),this.s=e.s,this.g=e.g,Fi(this,e.m),this.l=e.l;var t=e.i,n=new Ts;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ph(this,n),this.o=e.o}else e&&(t=String(e).match(Cp))?(this.h=!1,Ni(this,t[1]||"",!0),this.s=Hr(t[2]||""),this.g=Hr(t[3]||"",!0),Fi(this,t[4]),this.l=Hr(t[5]||"",!0),ph(this,t[6]||"",!0),this.o=Hr(t[7]||"")):(this.h=!1,this.i=new Ts(null,this.h))}Ln.prototype.toString=function(){var e=[],t=this.j;t&&e.push(qr(t,gh,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(qr(t,gh,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(qr(n,n.charAt(0)=="/"?ow:iw,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",qr(n,cw)),e.join("")};function Ke(e){return new Ln(e)}function Ni(e,t,n){e.j=n?Hr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Fi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ph(e,t,n){t instanceof Ts?(e.i=t,lw(e.i,e.h)):(n||(t=qr(t,aw)),e.i=new Ts(t,e.h))}function mt(e,t,n){e.i.set(t,n)}function Ro(e){return mt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Hr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function qr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,sw),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function sw(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var gh=/[#\/\?@]/g,iw=/[#\?:]/g,ow=/[#\?]/g,aw=/[#\?@]/g,cw=/#/g;function Ts(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function In(e){e.g||(e.g=new Map,e.h=0,e.i&&rw(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}V=Ts.prototype;V.add=function(e,t){In(this),this.i=null,e=br(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Pp(e,t){In(e),t=br(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Sp(e,t){return In(e),t=br(e,t),e.g.has(t)}V.forEach=function(e,t){In(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};V.ta=function(){In(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};V.Z=function(e){In(this);let t=[];if(typeof e=="string")Sp(this,e)&&(t=t.concat(this.g.get(br(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};V.set=function(e,t){return In(this),this.i=null,e=br(this,e),Sp(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};V.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function bp(e,t,n){Pp(e,t),0<n.length&&(e.i=null,e.g.set(br(e,t),Wc(n)),e.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function br(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function lw(e,t){t&&!e.j&&(In(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Pp(this,r),bp(this,s,n))},e)),e.j=t}var uw=class{constructor(e,t){this.g=e,this.map=t}};function Dp(e){this.l=e||hw,z.PerformanceNavigationTiming?(e=z.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hw=10;function Vp(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function xp(e){return e.h?1:e.g?e.g.size:0}function Xa(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function cl(e,t){e.g?e.g.add(t):e.h=t}function kp(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Dp.prototype.cancel=function(){if(this.i=Mp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Mp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Wc(e.i)}var fw=class{stringify(e){return z.JSON.stringify(e,void 0)}parse(e){return z.JSON.parse(e,void 0)}};function dw(){this.g=new fw}function pw(e,t,n){const r=n||"";try{Rp(e,function(s,i){let o=s;Ms(s)&&(o=el(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function gw(e,t){const n=new Eo;if(z.Image){const r=new Image;r.onload=ni(si,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ni(si,n,r,"TestLoadImage: error",!1,t),r.onabort=ni(si,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ni(si,n,r,"TestLoadImage: timeout",!1,t),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function si(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Us(e){this.l=e.fc||null,this.j=e.ob||!1}xt(Us,il);Us.prototype.g=function(){return new Co(this.l,this.j)};Us.prototype.i=function(e){return function(){return e}}({});function Co(e,t){Vt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ll,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xt(Co,Vt);var ll=0;V=Co.prototype;V.open=function(e,t){if(this.readyState!=ll)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ws(this)};V.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||z).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=ll};V.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Op(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Op(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}V.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?$s(this):ws(this),this.readyState==3&&Op(this)}};V.Za=function(e){this.g&&(this.response=this.responseText=e,$s(this))};V.Ya=function(e){this.g&&(this.response=e,$s(this))};V.ka=function(){this.g&&$s(this)};function $s(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ws(e)}V.setRequestHeader=function(e,t){this.v.append(e,t)};V.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ws(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var mw=z.JSON.parse;function Et(e){Vt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Np,this.L=this.M=!1}xt(Et,Vt);var Np="",_w=/^https?$/i,Aw=["POST","PUT"];V=Et.prototype;V.Oa=function(e){this.M=e};V.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wa.g(),this.C=this.u?dh(this.u):dh(Wa),this.g.onreadystatechange=Qt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){mh(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=z.FormData&&e instanceof z.FormData,!(0<=Zd(Aw,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bp(this),0<this.B&&((this.L=yw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qt(this.ua,this)):this.A=sl(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){mh(this,i)}};function yw(e){return Ar&&typeof e.timeout=="number"&&e.ontimeout!==void 0}V.ua=function(){typeof Kc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ft(this,"timeout"),this.abort(8))};function mh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Fp(e),Po(e)}function Fp(e){e.F||(e.F=!0,Ft(e,"complete"),Ft(e,"error"))}V.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ft(this,"complete"),Ft(this,"abort"),Po(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Po(this,!0)),Et.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Lp(this):this.kb())};V.kb=function(){Lp(this)};function Lp(e){if(e.h&&typeof Kc<"u"&&(!e.C[1]||Ve(e)!=4||e.da()!=2)){if(e.v&&Ve(e)==4)sl(e.La,0,e);else if(Ft(e,"readystatechange"),Ve(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Cp)[1]||null;!s&&z.self&&z.self.location&&(s=z.self.location.protocol.slice(0,-1)),r=!_w.test(s?s.toLowerCase():"")}n=r}if(n)Ft(e,"complete"),Ft(e,"success");else{e.m=6;try{var i=2<Ve(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Fp(e)}}finally{Po(e)}}}}function Po(e,t){if(e.g){Bp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ft(e,"ready");try{n.onreadystatechange=r}catch{}}}function Bp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(z.clearTimeout(e.A),e.A=null)}V.isActive=function(){return!!this.g};function Ve(e){return e.g?e.g.readyState:0}V.da=function(){try{return 2<Ve(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),mw(t)}};function _h(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Np:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Ew(e){const t={};e=(e.g&&2<=Ve(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(_s(e[r]))continue;var n=QT(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}LT(t,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Up(e){let t="";return Yc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ul(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Up(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):mt(e,t,n))}function Br(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function $p(e){this.Ga=0,this.j=[],this.l=new Eo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Br("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Br("baseRetryDelayMs",5e3,e),this.hb=Br("retryDelaySeedMs",1e4,e),this.eb=Br("forwardChannelMaxRetries",2,e),this.xa=Br("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Dp(e&&e.concurrentRequestLimit),this.Ja=new dw,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=$p.prototype;V.ra=8;V.H=1;function hl(e){if(jp(e),e.H==3){var t=e.W++,n=Ke(e.I);if(mt(n,"SID",e.K),mt(n,"RID",t),mt(n,"TYPE","terminate"),js(e,n),t=new Ls(e,e.l,t),t.L=2,t.v=Ro(Ke(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=t.v,n=!0),n||(t.g=Yp(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Bs(t)}Wp(e)}function So(e){e.g&&(dl(e),e.g.cancel(),e.g=null)}function jp(e){So(e),e.u&&(z.clearTimeout(e.u),e.u=null),Li(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&z.clearTimeout(e.m),e.m=null)}function bo(e){if(!Vp(e.i)&&!e.m){e.m=!0;var t=e.Na;ys||hp(),Es||(ys(),Es=!0),nl.add(t,e),e.C=0}}function vw(e,t){return xp(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ns(Qt(e.Na,e,t),Kp(e,e.C)),e.C++,!0)}V.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ls(this,this.l,e);let i=this.s;if(this.U&&(i?(i=rp(i),sp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Hp(this,s,t),n=Ke(this.I),mt(n,"RID",e),mt(n,"CVER",22),this.F&&mt(n,"X-HTTP-Session-Id",this.F),js(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Up(i)))+"&"+t:this.o&&ul(n,this.o,i)),cl(this.i,s),this.bb&&mt(n,"TYPE","init"),this.P?(mt(n,"$req",t),mt(n,"SID","null"),s.aa=!0,Ya(s,n,null)):Ya(s,n,t),this.H=2}}else this.H==3&&(e?Ah(this,e):this.j.length==0||Vp(this.i)||Ah(this))};function Ah(e,t){var n;t?n=t.m:n=e.W++;const r=Ke(e.I);mt(r,"SID",e.K),mt(r,"RID",n),mt(r,"AID",e.V),js(e,r),e.o&&e.s&&ul(r,e.o,e.s),n=new Ls(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Hp(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),cl(e.i,n),Ya(n,r,t)}function js(e,t){e.na&&Yc(e.na,function(n,r){mt(t,r,n)}),e.h&&Rp({},function(n,r){mt(t,r,n)})}function Hp(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Qt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{pw(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function qp(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ys||hp(),Es||(ys(),Es=!0),nl.add(t,e),e.A=0}}function fl(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ns(Qt(e.Ma,e),Kp(e,e.A)),e.A++,!0)}V.Ma=function(){if(this.u=null,Qp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ns(Qt(this.jb,this),e)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Yt(10),So(this),Qp(this))};function dl(e){e.B!=null&&(z.clearTimeout(e.B),e.B=null)}function Qp(e){e.g=new Ls(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ke(e.wa);mt(t,"RID","rpc"),mt(t,"SID",e.K),mt(t,"AID",e.V),mt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&mt(t,"TO",e.qa),mt(t,"TYPE","xmlhttp"),js(e,t),e.o&&e.s&&ul(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ro(Ke(t)),n.s=null,n.S=!0,vp(n,e)}V.ib=function(){this.v!=null&&(this.v=null,So(this),fl(this),Yt(19))};function Li(e){e.v!=null&&(z.clearTimeout(e.v),e.v=null)}function zp(e,t){var n=null;if(e.g==t){Li(e),dl(e),e.g=null;var r=2}else if(Xa(e.i,t))n=t.F,kp(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=vo(),Ft(r,new _p(r,n)),bo(e)}else qp(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&vw(e,t)||r==2&&fl(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:kn(e,5);break;case 4:kn(e,10);break;case 3:kn(e,6);break;default:kn(e,2)}}}function Kp(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function kn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Qt(e.pb,e);n||(n=new Ln("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Ni(n,"https"),Ro(n)),gw(n.toString(),r)}else Yt(2);e.H=0,e.h&&e.h.za(t),Wp(e),jp(e)}V.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Yt(2)):(this.l.info("Failed to ping google.com"),Yt(1))};function Wp(e){if(e.H=0,e.ma=[],e.h){const t=Mp(e.i);(t.length!=0||e.j.length!=0)&&(ch(e.ma,t),ch(e.ma,e.j),e.i.i.length=0,Wc(e.j),e.j.length=0),e.h.ya()}}function Gp(e,t,n){var r=n instanceof Ln?Ke(n):new Ln(n);if(r.g!="")t&&(r.g=t+"."+r.g),Fi(r,r.m);else{var s=z.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Ln(null);r&&Ni(i,r),t&&(i.g=t),s&&Fi(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&mt(r,n,t),mt(r,"VER",e.ra),js(e,r),r}function Yp(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Et(new Us({ob:!0})):new Et(e.va),t.Oa(e.J),t}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function Jp(){}V=Jp.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Bi(){if(Ar&&!(10<=Number(MT)))throw Error("Environmental error: no available transport.")}Bi.prototype.g=function(e,t){return new ae(e,t)};function ae(e,t){Vt.call(this),this.g=new $p(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!_s(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_s(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Dr(this)}xt(ae,Vt);ae.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Yt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Gp(e,null,e.Y),bo(e)};ae.prototype.close=function(){hl(this.g)};ae.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=el(e),e=n);t.j.push(new uw(t.fb++,e)),t.H==3&&bo(t)};ae.prototype.N=function(){this.g.h=null,delete this.j,hl(this.g),delete this.g,ae.$.N.call(this)};function Xp(e){ol.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}xt(Xp,ol);function Zp(){al.call(this),this.status=1}xt(Zp,al);function Dr(e){this.g=e}xt(Dr,Jp);Dr.prototype.Ba=function(){Ft(this.g,"a")};Dr.prototype.Aa=function(e){Ft(this.g,new Xp(e))};Dr.prototype.za=function(e){Ft(this.g,new Zp)};Dr.prototype.ya=function(){Ft(this.g,"b")};function Iw(){this.blockSize=-1}function Ie(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}xt(Ie,Iw);Ie.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function da(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Ie.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)da(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){da(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){da(this,r),s=0;break}}this.h=s,this.i+=t};Ie.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function lt(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Tw={};function pl(e){return-128<=e&&128>e?VT(e,function(t){return new lt([t|0],0>t?-1:0)}):new lt([e|0],0>e?-1:0)}function xe(e){if(isNaN(e)||!isFinite(e))return lr;if(0>e)return Mt(xe(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Za;return new lt(t,0)}function tg(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Mt(tg(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xe(Math.pow(t,8)),r=lr,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=xe(Math.pow(t,i)),r=r.R(i).add(xe(o))):(r=r.R(n),r=r.add(xe(o)))}return r}var Za=4294967296,lr=pl(0),tc=pl(1),yh=pl(16777216);V=lt.prototype;V.ea=function(){if(ce(this))return-Mt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Za+r)*t,t*=Za}return e};V.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(He(this))return"0";if(ce(this))return"-"+Mt(this).toString(e);for(var t=xe(Math.pow(e,6)),n=this,r="";;){var s=$i(n,t).g;n=Ui(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,He(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function He(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ce(e){return e.h==-1}V.X=function(e){return e=Ui(this,e),ce(e)?-1:He(e)?0:1};function Mt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new lt(n,~e.h).add(tc)}V.abs=function(){return ce(this)?Mt(this):this};V.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new lt(n,n[n.length-1]&-2147483648?-1:0)};function Ui(e,t){return e.add(Mt(t))}V.R=function(e){if(He(this)||He(e))return lr;if(ce(this))return ce(e)?Mt(this).R(Mt(e)):Mt(Mt(this).R(e));if(ce(e))return Mt(this.R(Mt(e)));if(0>this.X(yh)&&0>e.X(yh))return xe(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,ii(n,2*r+2*s),n[2*r+2*s+1]+=i*c,ii(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,ii(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,ii(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new lt(n,0)};function ii(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ur(e,t){this.g=e,this.h=t}function $i(e,t){if(He(t))throw Error("division by zero");if(He(e))return new Ur(lr,lr);if(ce(e))return t=$i(Mt(e),t),new Ur(Mt(t.g),Mt(t.h));if(ce(t))return t=$i(e,Mt(t)),new Ur(Mt(t.g),t.h);if(30<e.g.length){if(ce(e)||ce(t))throw Error("slowDivide_ only works with positive integers.");for(var n=tc,r=t;0>=r.X(e);)n=Eh(n),r=Eh(r);var s=tr(n,1),i=tr(r,1);for(r=tr(r,2),n=tr(n,2);!He(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=tr(r,1),n=tr(n,1)}return t=Ui(e,s.R(t)),new Ur(s,t)}for(s=lr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=xe(n),o=i.R(t);ce(o)||0<o.X(e);)n-=r,i=xe(n),o=i.R(t);He(i)&&(i=tc),s=s.add(i),e=Ui(e,o)}return new Ur(s,e)}V.gb=function(e){return $i(this,e).h};V.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new lt(n,this.h&e.h)};V.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new lt(n,this.h|e.h)};V.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new lt(n,this.h^e.h)};function Eh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new lt(n,e.h)}function tr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new lt(s,e.h)}Bi.prototype.createWebChannel=Bi.prototype.g;ae.prototype.send=ae.prototype.u;ae.prototype.open=ae.prototype.m;ae.prototype.close=ae.prototype.close;Io.NO_ERROR=0;Io.TIMEOUT=8;Io.HTTP_ERROR=6;Ap.COMPLETE="complete";yp.EventType=Fs;Fs.OPEN="a";Fs.CLOSE="b";Fs.ERROR="c";Fs.MESSAGE="d";Vt.prototype.listen=Vt.prototype.O;Et.prototype.listenOnce=Et.prototype.P;Et.prototype.getLastError=Et.prototype.Sa;Et.prototype.getLastErrorCode=Et.prototype.Ia;Et.prototype.getStatus=Et.prototype.da;Et.prototype.getResponseJson=Et.prototype.Wa;Et.prototype.getResponseText=Et.prototype.ja;Et.prototype.send=Et.prototype.ha;Et.prototype.setWithCredentials=Et.prototype.Oa;Ie.prototype.digest=Ie.prototype.l;Ie.prototype.reset=Ie.prototype.reset;Ie.prototype.update=Ie.prototype.j;lt.prototype.add=lt.prototype.add;lt.prototype.multiply=lt.prototype.R;lt.prototype.modulo=lt.prototype.gb;lt.prototype.compare=lt.prototype.X;lt.prototype.toNumber=lt.prototype.ea;lt.prototype.toString=lt.prototype.toString;lt.prototype.getBits=lt.prototype.D;lt.fromNumber=xe;lt.fromString=tg;var ww=function(){return new Bi},Rw=function(){return vo()},pa=Io,Cw=Ap,Pw=zn,vh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Sw=Us,oi=yp,bw=Et,Dw=Ie,ur=lt;const Ih="@firebase/firestore";/**
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
 */let Ut=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Vr="10.1.0";/**
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
 */const Hn=new Bc("@firebase/firestore");function Th(){return Hn.logLevel}function F(e,...t){if(Hn.logLevel<=ot.DEBUG){const n=t.map(gl);Hn.debug(`Firestore (${Vr}): ${e}`,...n)}}function We(e,...t){if(Hn.logLevel<=ot.ERROR){const n=t.map(gl);Hn.error(`Firestore (${Vr}): ${e}`,...n)}}function yr(e,...t){if(Hn.logLevel<=ot.WARN){const n=t.map(gl);Hn.warn(`Firestore (${Vr}): ${e}`,...n)}}function gl(e){if(typeof e=="string")return e;try{/**
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
 */function Q(e="Unexpected state"){const t=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: `+e;throw We(t),new Error(t)}function _t(e,t){e||Q()}function G(e,t){return e}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends En{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class eg{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ut.UNAUTHENTICATED))}shutdown(){}}class xw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kw{constructor(t){this.t=t,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_t(typeof r.accessToken=="string"),new eg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _t(t===null||typeof t=="string"),new Ut(t)}}class Mw{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ow{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Mw(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nw{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fw{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(_t(typeof n.token=="string"),this.R=n.token,new Nw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Lw(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ng{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Lw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function nt(e,t){return e<t?-1:e>t?1:0}function Er(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class Ct{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ct.fromMillis(Date.now())}static fromDate(t){return Ct.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new Ct(0,0))}static max(){return new W(new Ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Rs{constructor(t,n,r){n===void 0?n=0:n>t.length&&Q(),r===void 0?r=t.length-n:r>t.length-n&&Q(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Rs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Rs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class At extends Rs{construct(t,n,r){return new At(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new $(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new At(n)}static emptyPath(){return new At([])}}const Bw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends Rs{construct(t,n,r){return new qt(t,n,r)}static isValidIdentifier(t){return Bw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new $(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qt(n)}static emptyPath(){return new qt([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(At.fromString(t))}static fromName(t){return new j(At.fromString(t).popFirst(5))}static empty(){return new j(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&At.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return At.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new At(t.slice()))}}function Uw(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new Ct(n+1,0):new Ct(n,r));return new mn(s,j.empty(),t)}function $w(e){return new mn(e.readTime,e.key,-1)}class mn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new mn(W.min(),j.empty(),-1)}static max(){return new mn(W.max(),j.empty(),-1)}}function jw(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=j.comparator(e.documentKey,t.documentKey),n!==0?n:nt(e.largestBatchId,t.largestBatchId))}/**
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
 */const Hw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Hs(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==Hw)throw e;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):C.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):C.reject(n)}static resolve(t){return new C((n,r)=>{n(t)})}static reject(t){return new C((n,r)=>{r(t)})}static waitFor(t){return new C((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=C.resolve(!1);for(const r of t)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new C((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new C((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function qs(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class ml{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}ml.ae=-1;function Do(e){return e==null}function ji(e){return e===0&&1/e==-1/0}function Qw(e){return typeof e=="number"&&Number.isInteger(e)&&!ji(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function wh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class yt{constructor(t,n){this.comparator=t,this.root=n||kt.EMPTY}insert(t,n){return new yt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,kt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ai(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ai(this.root,t,this.comparator,!1)}getReverseIterator(){return new ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ai(this.root,t,this.comparator,!0)}}class ai{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class kt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??kt.RED,this.left=s??kt.EMPTY,this.right=i??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new kt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return kt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,n,r,s,i){return this}insert(t,n,r){return new kt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Kt{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rh(this.data.getIterator())}getIteratorFrom(t){return new Rh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Kt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Kt(this.comparator);return n.data=t,n}}class Rh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ae{constructor(t){this.fields=t,t.sort(qt.comparator)}static empty(){return new Ae([])}unionWith(t){let n=new Kt(qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ae(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Er(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class sg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Wt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sg("Invalid base64 string: "+i):i}}(t);return new Wt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Wt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const zw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(e){if(_t(!!e),typeof e=="string"){let t=0;const n=zw.exec(e);if(_t(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Tt(e.seconds),nanos:Tt(e.nanos)}}function Tt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qn(e){return typeof e=="string"?Wt.fromBase64String(e):Wt.fromUint8Array(e)}/**
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
 */function _l(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Al(e){const t=e.mapValue.fields.__previous_value__;return _l(t)?Al(t):t}function Cs(e){const t=_n(e.mapValue.fields.__local_write_time__.timestampValue);return new Ct(t.seconds,t.nanos)}/**
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
 */class Kw{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ps{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ps("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ps&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ci={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?_l(e)?4:Ww(e)?9007199254740991:10:Q()}function Le(e,t){if(e===t)return!0;const n=Qn(e);if(n!==Qn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Cs(e).isEqual(Cs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_n(s.timestampValue),a=_n(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return qn(s.bytesValue).isEqual(qn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Tt(s.geoPointValue.latitude)===Tt(i.geoPointValue.latitude)&&Tt(s.geoPointValue.longitude)===Tt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Tt(s.integerValue)===Tt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Tt(s.doubleValue),a=Tt(i.doubleValue);return o===a?ji(o)===ji(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Er(e.arrayValue.values||[],t.arrayValue.values||[],Le);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(wh(o)!==wh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Le(o[c],a[c])))return!1;return!0}(e,t);default:return Q()}}function Ss(e,t){return(e.values||[]).find(n=>Le(n,t))!==void 0}function vr(e,t){if(e===t)return 0;const n=Qn(e),r=Qn(t);if(n!==r)return nt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return nt(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Tt(i.integerValue||i.doubleValue),c=Tt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Ch(e.timestampValue,t.timestampValue);case 4:return Ch(Cs(e),Cs(t));case 5:return nt(e.stringValue,t.stringValue);case 6:return function(i,o){const a=qn(i),c=qn(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=nt(a[l],c[l]);if(u!==0)return u}return nt(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=nt(Tt(i.latitude),Tt(o.latitude));return a!==0?a:nt(Tt(i.longitude),Tt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=vr(a[l],c[l]);if(u)return u}return nt(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===ci.mapValue&&o===ci.mapValue)return 0;if(i===ci.mapValue)return 1;if(o===ci.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=nt(c[h],u[h]);if(f!==0)return f;const g=vr(a[c[h]],l[u[h]]);if(g!==0)return g}return nt(c.length,u.length)}(e.mapValue,t.mapValue);default:throw Q()}}function Ch(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return nt(e,t);const n=_n(e),r=_n(t),s=nt(n.seconds,r.seconds);return s!==0?s:nt(n.nanos,r.nanos)}function Ir(e){return ec(e)}function ec(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=_n(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return qn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return j.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ec(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ec(n.fields[o])}`;return s+"}"}(e.mapValue):Q()}function nc(e){return!!e&&"integerValue"in e}function yl(e){return!!e&&"arrayValue"in e}function Ph(e){return!!e&&"nullValue"in e}function Sh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function mi(e){return!!e&&"mapValue"in e}function es(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=es(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=es(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ww(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class le{constructor(t){this.value=t}static empty(){return new le({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!mi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=es(n)}setAll(t){let n=qt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=es(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Le(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){xr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new le(es(this.value))}}function ig(e){const t=[];return xr(e.fields,(n,r)=>{const s=new qt([n]);if(mi(r)){const i=ig(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Ae(t)}/**
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
 */class $t{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new $t(t,0,W.min(),W.min(),W.min(),le.empty(),0)}static newFoundDocument(t,n,r,s){return new $t(t,1,n,W.min(),r,s,0)}static newNoDocument(t,n){return new $t(t,2,n,W.min(),W.min(),le.empty(),0)}static newUnknownDocument(t,n){return new $t(t,3,n,W.min(),W.min(),le.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=le.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hi{constructor(t,n){this.position=t,this.inclusive=n}}function bh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=vr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Le(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ns{constructor(t,n="asc"){this.field=t,this.dir=n}}function Gw(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class og{}class Rt extends og{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Jw(t,n,r):n==="array-contains"?new t0(t,r):n==="in"?new e0(t,r):n==="not-in"?new n0(t,r):n==="array-contains-any"?new r0(t,r):new Rt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Xw(t,r):new Zw(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vr(n,this.value)):n!==null&&Qn(this.value)===Qn(n)&&this.matchesComparison(vr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Be extends og{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Be(t,n)}matches(t){return ag(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function ag(e){return e.op==="and"}function cg(e){return Yw(e)&&ag(e)}function Yw(e){for(const t of e.filters)if(t instanceof Be)return!1;return!0}function rc(e){if(e instanceof Rt)return e.field.canonicalString()+e.op.toString()+Ir(e.value);if(cg(e))return e.filters.map(t=>rc(t)).join(",");{const t=e.filters.map(n=>rc(n)).join(",");return`${e.op}(${t})`}}function lg(e,t){return e instanceof Rt?function(r,s){return s instanceof Rt&&r.op===s.op&&r.field.isEqual(s.field)&&Le(r.value,s.value)}(e,t):e instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&lg(o,s.filters[a]),!0):!1}(e,t):void Q()}function ug(e){return e instanceof Rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ir(n.value)}`}(e):e instanceof Be?function(n){return n.op.toString()+" {"+n.getFilters().map(ug).join(" ,")+"}"}(e):"Filter"}class Jw extends Rt{constructor(t,n,r){super(t,n,r),this.key=j.fromName(r.referenceValue)}matches(t){const n=j.comparator(t.key,this.key);return this.matchesComparison(n)}}class Xw extends Rt{constructor(t,n){super(t,"in",n),this.keys=hg("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Zw extends Rt{constructor(t,n){super(t,"not-in",n),this.keys=hg("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function hg(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class t0 extends Rt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return yl(n)&&Ss(n.arrayValue,this.value)}}class e0 extends Rt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ss(this.value.arrayValue,n)}}class n0 extends Rt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ss(this.value.arrayValue,n)}}class r0 extends Rt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!yl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ss(this.value.arrayValue,r))}}/**
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
 */class s0{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Vh(e,t=null,n=[],r=[],s=null,i=null,o=null){return new s0(e,t,n,r,s,i,o)}function El(e){const t=G(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>rc(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Do(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Ir(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Ir(r)).join(",")),t.he=n}return t.he}function vl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Gw(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!lg(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Dh(e.startAt,t.startAt)&&Dh(e.endAt,t.endAt)}function sc(e){return j.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Vo{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function i0(e,t,n,r,s,i,o,a){return new Vo(e,t,n,r,s,i,o,a)}function Il(e){return new Vo(e)}function xh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function o0(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function a0(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function c0(e){return e.collectionGroup!==null}function hr(e){const t=G(e);if(t.Pe===null){t.Pe=[];const n=a0(t),r=o0(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new ns(n)),t.Pe.push(new ns(qt.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new ns(qt.keyField(),i))}}}return t.Pe}function Ge(e){const t=G(e);if(!t.Ie)if(t.limitType==="F")t.Ie=Vh(t.path,t.collectionGroup,hr(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of hr(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new ns(i.field,o))}const r=t.endAt?new Hi(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Hi(t.startAt.position,t.startAt.inclusive):null;t.Ie=Vh(t.path,t.collectionGroup,n,t.filters,t.limit,r,s)}return t.Ie}function ic(e,t,n){return new Vo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xo(e,t){return vl(Ge(e),Ge(t))&&e.limitType===t.limitType}function fg(e){return`${El(Ge(e))}|lt:${e.limitType}`}function oc(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ug(s)).join(", ")}]`),Do(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ir(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ir(s)).join(",")),`Target(${r})`}(Ge(e))}; limitType=${e.limitType})`}function ko(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of hr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=bh(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,hr(r),s)||r.endAt&&!function(o,a,c){const l=bh(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,hr(r),s))}(e,t)}function l0(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function dg(e){return(t,n)=>{let r=!1;for(const s of hr(e)){const i=u0(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function u0(e,t,n){const r=e.field.isKeyField()?j.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?vr(c,l):Q()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class kr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){xr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return rg(this.inner)}size(){return this.innerSize}}/**
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
 */const h0=new yt(j.comparator);function Ye(){return h0}const pg=new yt(j.comparator);function Qr(...e){let t=pg;for(const n of e)t=t.insert(n.key,n);return t}function gg(e){let t=pg;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Mn(){return rs()}function mg(){return rs()}function rs(){return new kr(e=>e.toString(),(e,t)=>e.isEqual(t))}const f0=new yt(j.comparator),d0=new Kt(j.comparator);function Z(...e){let t=d0;for(const n of e)t=t.add(n);return t}const p0=new Kt(nt);function g0(){return p0}/**
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
 */function _g(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(t)?"-0":t}}function Ag(e){return{integerValue:""+e}}function m0(e,t){return Qw(t)?Ag(t):_g(e,t)}/**
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
 */class Mo{constructor(){this._=void 0}}function _0(e,t,n){return e instanceof qi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_l(i)&&(i=Al(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof bs?Eg(e,t):e instanceof Ds?vg(e,t):function(s,i){const o=yg(s,i),a=kh(o)+kh(s.Te);return nc(o)&&nc(s.Te)?Ag(a):_g(s.serializer,a)}(e,t)}function A0(e,t,n){return e instanceof bs?Eg(e,t):e instanceof Ds?vg(e,t):n}function yg(e,t){return e instanceof Qi?function(r){return nc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class qi extends Mo{}class bs extends Mo{constructor(t){super(),this.elements=t}}function Eg(e,t){const n=Ig(t);for(const r of e.elements)n.some(s=>Le(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ds extends Mo{constructor(t){super(),this.elements=t}}function vg(e,t){let n=Ig(t);for(const r of e.elements)n=n.filter(s=>!Le(s,r));return{arrayValue:{values:n}}}class Qi extends Mo{constructor(t,n){super(),this.serializer=t,this.Te=n}}function kh(e){return Tt(e.integerValue||e.doubleValue)}function Ig(e){return yl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function y0(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof bs&&s instanceof bs||r instanceof Ds&&s instanceof Ds?Er(r.elements,s.elements,Le):r instanceof Qi&&s instanceof Qi?Le(r.Te,s.Te):r instanceof qi&&s instanceof qi}(e.transform,t.transform)}class E0{constructor(t,n){this.version=t,this.transformResults=n}}class qe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qe}static exists(t){return new qe(void 0,t)}static updateTime(t){return new qe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _i(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Oo{}function Tg(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Rg(e.key,qe.none()):new Qs(e.key,e.data,qe.none());{const n=e.data,r=le.empty();let s=new Kt(qt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Kn(e.key,r,new Ae(s.toArray()),qe.none())}}function v0(e,t,n){e instanceof Qs?function(s,i,o){const a=s.value.clone(),c=Oh(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Kn?function(s,i,o){if(!_i(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Oh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(wg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ss(e,t,n,r){return e instanceof Qs?function(i,o,a,c){if(!_i(i.precondition,o))return a;const l=i.value.clone(),u=Nh(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Kn?function(i,o,a,c){if(!_i(i.precondition,o))return a;const l=Nh(i.fieldTransforms,c,o),u=o.data;return u.setAll(wg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return _i(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function I0(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=yg(r.transform,s||null);i!=null&&(n===null&&(n=le.empty()),n.set(r.field,i))}return n||null}function Mh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Er(r,s,(i,o)=>y0(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Qs extends Oo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kn extends Oo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wg(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Oh(e,t,n){const r=new Map;_t(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,A0(o,a,n[s]))}return r}function Nh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_0(i,o,t))}return r}class Rg extends Oo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class T0 extends Oo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class w0{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&v0(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ss(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ss(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=mg();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Tg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Z())}isEqual(t){return this.batchId===t.batchId&&Er(this.mutations,t.mutations,(n,r)=>Mh(n,r))&&Er(this.baseMutations,t.baseMutations,(n,r)=>Mh(n,r))}}class Tl{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){_t(t.mutations.length===r.length);let s=function(){return f0}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tl(t,n,r,s)}}/**
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
 */class R0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class C0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var It,tt;function P0(e){switch(e){default:return Q();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Cg(e){if(e===void 0)return We("GRPC error has no .code"),T.UNKNOWN;switch(e){case It.OK:return T.OK;case It.CANCELLED:return T.CANCELLED;case It.UNKNOWN:return T.UNKNOWN;case It.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case It.INTERNAL:return T.INTERNAL;case It.UNAVAILABLE:return T.UNAVAILABLE;case It.UNAUTHENTICATED:return T.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case It.NOT_FOUND:return T.NOT_FOUND;case It.ALREADY_EXISTS:return T.ALREADY_EXISTS;case It.PERMISSION_DENIED:return T.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case It.ABORTED:return T.ABORTED;case It.OUT_OF_RANGE:return T.OUT_OF_RANGE;case It.UNIMPLEMENTED:return T.UNIMPLEMENTED;case It.DATA_LOSS:return T.DATA_LOSS;default:return Q()}}(tt=It||(It={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class wl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return li}static getOrCreateInstance(){return li===null&&(li=new wl),li}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let li=null;/**
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
 */function S0(){return new TextEncoder}/**
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
 */const b0=new ur([4294967295,4294967295],0);function Fh(e){const t=S0().encode(e),n=new Dw;return n.update(t),new Uint8Array(n.digest())}function Lh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ur([n,r],0),new ur([s,i],0)]}class Rl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zr(`Invalid padding: ${n}`);if(r<0)throw new zr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new zr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new zr(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=ur.fromNumber(this.de)}Re(t,n,r){let s=t.add(n.multiply(ur.fromNumber(r)));return s.compare(b0)===1&&(s=new ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=Fh(t),[r,s]=Lh(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Rl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=Fh(t),[r,s]=Lh(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class No{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,zs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new No(W.min(),s,new yt(nt),Ye(),Z())}}class zs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new zs(r,n,Z(),Z(),Z())}}/**
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
 */class Ai{constructor(t,n,r,s){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=s}}class Pg{constructor(t,n){this.targetId=t,this.pe=n}}class Sg{constructor(t,n,r=Wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Bh{constructor(){this.ye=0,this.we=$h(),this.Se=Wt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=Z(),n=Z(),r=Z();return this.we.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new zs(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=$h()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class D0{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Ye(),this.$e=Uh(),this.Ue=new yt(nt)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:Q()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){var n,r;const s=t.targetId,i=t.pe.count,o=this.Xe(s);if(o){const a=o.target;if(sc(a))if(i===0){const c=new j(a.path);this.ze(s,c,$t.newNoDocument(c,W.min()))}else _t(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(t,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=wl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,g,y){var I,R,S,k,q,O;const ft={localCacheCount:g,existenceFilterCount:y.count},at=y.unchangedNames;return at&&(ft.bloomFilter={applied:h===0,hashCount:(I=at==null?void 0:at.hashCount)!==null&&I!==void 0?I:0,bitmapLength:(k=(S=(R=at==null?void 0:at.bits)===null||R===void 0?void 0:R.bitmap)===null||S===void 0?void 0:S.length)!==null&&k!==void 0?k:0,padding:(O=(q=at==null?void 0:at.bits)===null||q===void 0?void 0:q.padding)!==null&&O!==void 0?O:0},f&&(ft.bloomFilter.mightContain=f)),ft}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:s}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=qn(i).toUint8Array()}catch(h){if(h instanceof sg)return yr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new Rl(c,o,a)}catch(h){return yr(h instanceof zr?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return l.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(t.targetId,u)?0:2,nt:u}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(t,i,null),s++)}),s}st(t){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&sc(a.target)){const c=new j(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,$t.newNoDocument(c,t))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=Z();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(t));const s=new No(t,n,this.Ue,this.Ke,r);return this.Ke=Ye(),this.$e=Uh(),this.Ue=new yt(nt),s}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ot(t,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Bh,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Kt(nt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||F("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Bh),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Uh(){return new yt(j.comparator)}function $h(){return new yt(j.comparator)}const V0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),x0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),k0=(()=>({and:"AND",or:"OR"}))();class M0{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ac(e,t){return e.useProto3Json||Do(t)?t:{value:t}}function zi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function O0(e,t){return zi(e,t.toTimestamp())}function Ne(e){return _t(!!e),W.fromTimestamp(function(n){const r=_n(n);return new Ct(r.seconds,r.nanos)}(e))}function Cl(e,t){return function(r){return new At(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Dg(e){const t=At.fromString(e);return _t(Mg(t)),t}function cc(e,t){return Cl(e.databaseId,t.path)}function ga(e,t){const n=Dg(t);if(n.get(1)!==e.databaseId.projectId)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(Vg(n))}function lc(e,t){return Cl(e.databaseId,t)}function N0(e){const t=Dg(e);return t.length===4?At.emptyPath():Vg(t)}function uc(e){return new At(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Vg(e){return _t(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function jh(e,t,n){return{name:cc(e,t),fields:n.value.mapValue.fields}}function F0(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(_t(u===void 0||typeof u=="string"),Wt.fromBase64String(u||"")):(_t(u===void 0||u instanceof Uint8Array),Wt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Cg(l.code);return new $(u,l.message||"")}(o);n=new Sg(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ga(e,r.document.name),i=Ne(r.document.updateTime),o=r.document.createTime?Ne(r.document.createTime):W.min(),a=new le({mapValue:{fields:r.document.fields}}),c=$t.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ai(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ga(e,r.document),i=r.readTime?Ne(r.readTime):W.min(),o=$t.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ai([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ga(e,r.document),i=r.removedTargetIds||[];n=new Ai([],i,s,null)}else{if(!("filter"in t))return Q();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new C0(s,i),a=r.targetId;n=new Pg(a,o)}}return n}function L0(e,t){let n;if(t instanceof Qs)n={update:jh(e,t.key,t.value)};else if(t instanceof Rg)n={delete:cc(e,t.key)};else if(t instanceof Kn)n={update:jh(e,t.key,t.data),updateMask:K0(t.fieldMask)};else{if(!(t instanceof T0))return Q();n={verify:cc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof qi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ds)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Qi)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Q()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:O0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(e,t.precondition)),n}function B0(e,t){return e&&e.length>0?(_t(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Ne(s.updateTime):Ne(i);return o.isEqual(W.min())&&(o=Ne(i)),new E0(o,s.transformResults||[])}(n,t))):[]}function U0(e,t){return{documents:[lc(e,t.path)]}}function $0(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=lc(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=lc(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return kg(Be.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:nr(h.field),direction:q0(h.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ac(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function j0(e){let t=N0(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_t(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=xg(h);return f instanceof Be&&cg(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(y){return new ns(rr(y.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Do(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,g=h.values||[];return new Hi(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,g=h.values||[];return new Hi(g,f)}(n.endAt)),i0(t,s,o,i,a,"F",c,l)}function H0(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function xg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=rr(n.unaryFilter.field);return Rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=rr(n.unaryFilter.field);return Rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rr(n.unaryFilter.field);return Rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rr(n.unaryFilter.field);return Rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(e):e.fieldFilter!==void 0?function(n){return Rt.create(rr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Be.create(n.compositeFilter.filters.map(r=>xg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(e):Q()}function q0(e){return V0[e]}function Q0(e){return x0[e]}function z0(e){return k0[e]}function nr(e){return{fieldPath:e.canonicalString()}}function rr(e){return qt.fromServerFormat(e.fieldPath)}function kg(e){return e instanceof Rt?function(n){if(n.op==="=="){if(Sh(n.value))return{unaryFilter:{field:nr(n.field),op:"IS_NAN"}};if(Ph(n.value))return{unaryFilter:{field:nr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sh(n.value))return{unaryFilter:{field:nr(n.field),op:"IS_NOT_NAN"}};if(Ph(n.value))return{unaryFilter:{field:nr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(n.field),op:Q0(n.op),value:n.value}}}(e):e instanceof Be?function(n){const r=n.getFilters().map(s=>kg(s));return r.length===1?r[0]:{compositeFilter:{op:z0(n.op),filters:r}}}(e):Q()}function K0(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Mg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class on{constructor(t,n,r,s,i=W.min(),o=W.min(),a=Wt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new on(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class W0{constructor(t){this.ct=t}}function G0(e){const t=j0({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ic(t,t.limit,"L"):t}/**
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
 */class Y0{constructor(){this.sn=new J0}addToCollectionParentIndex(t,n){return this.sn.add(n),C.resolve()}getCollectionParents(t,n){return C.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return C.resolve()}deleteFieldIndex(t,n){return C.resolve()}getDocumentsMatchingTarget(t,n){return C.resolve(null)}getIndexType(t,n){return C.resolve(0)}getFieldIndexes(t,n){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,n){return C.resolve(mn.min())}getMinOffsetFromCollectionGroup(t,n){return C.resolve(mn.min())}updateCollectionGroup(t,n,r){return C.resolve()}updateIndexEntries(t,n){return C.resolve()}}class J0{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Kt(At.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Kt(At.comparator)).toArray()}}/**
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
 */class Tr{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Tr(0)}static On(){return new Tr(-1)}}/**
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
 */class X0{constructor(){this.changes=new kr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$t.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Z0{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class tR{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ss(r.mutation,s,Ae.empty(),Ct.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Z()){const s=Mn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Qr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Mn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Z()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Ye();const o=rs(),a=function(){return rs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Kn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ss(u.mutation,l,u.mutation.getFieldMask(),Ct.now())):o.set(l.key,Ae.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Z0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=rs();let s=new yt((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ae.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Z()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=mg();u.forEach(f=>{if(!i.has(f)){const g=Tg(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):c0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):C.resolve(Mn());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,Z())).next(u=>({batchId:a,changes:gg(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new j(n)).next(r=>{let s=Qr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=Qr();return this.indexManager.getCollectionParents(t,s).next(o=>C.forEach(o,a=>{const c=function(u,h){return new Vo(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,$t.newInvalidDocument(l)))});let o=Qr();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&ss(l.mutation,c,Ae.empty(),Ct.now()),ko(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class eR{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return C.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}}(n)),C.resolve()}getNamedQuery(t,n){return C.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(s){return{name:s.name,query:G0(s.bundledQuery),readTime:Ne(s.readTime)}}(n)),C.resolve()}}/**
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
 */class nR{constructor(){this.overlays=new yt(j.comparator),this.cr=new Map}getOverlay(t,n){return C.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Mn();return C.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),C.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),C.resolve()}getOverlaysForCollection(t,n,r){const s=Mn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new yt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Mn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Mn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new R0(n,r));let i=this.cr.get(n);i===void 0&&(i=Z(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class Pl{constructor(){this.lr=new Kt(St.hr),this.Pr=new Kt(St.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new St(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new St(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new j(new At([])),r=new St(n,t),s=new St(n,t+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new j(new At([])),r=new St(n,t),s=new St(n,t+1);let i=Z();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new St(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class St{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return j.comparator(t.key,n.key)||nt(t.mr,n.mr)}static Ir(t,n){return nt(t.mr,n.mr)||j.comparator(t.key,n.key)}}/**
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
 */class rR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Kt(St.hr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new w0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new St(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(t,n){return C.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new St(n,0),s=new St(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Kt(nt);return n.forEach(s=>{const i=new St(s,0),o=new St(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),C.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new St(new j(i),0);let a=new Kt(nt);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),C.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){_t(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return C.forEach(n.mutations,s=>{const i=new St(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new St(n,0),s=this.pr.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sR{constructor(t){this.Dr=t,this.docs=function(){return new yt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(t,n){let r=Ye();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():$t.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ye();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||jw($w(u),r)<=0||(s.has(u.key)||ko(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(t,n,r,s){Q()}vr(t,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new iR(this)}getSize(t){return C.resolve(this.size)}}class iR extends X0{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(t,s)):this.sr.removeEntry(r)}),C.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
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
 */class oR{constructor(t){this.persistence=t,this.Cr=new kr(n=>El(n),vl),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Pl,this.targetCount=0,this.Or=Tr.xn()}forEachTarget(t,n){return this.Cr.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),C.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new Tr(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,C.resolve()}updateTargetData(t,n){return this.Ln(n),C.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return C.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),C.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),C.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return C.resolve(r)}containsKey(t,n){return C.resolve(this.Mr.containsKey(n))}}/**
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
 */class aR{constructor(t,n){this.Nr={},this.overlays={},this.Br=new ml(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new oR(this),this.indexManager=new Y0,this.remoteDocumentCache=function(s){return new sR(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new W0(n),this.Qr=new eR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new nR,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new rR(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){F("MemoryPersistence","Starting transaction:",t);const s=new cR(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(t,n){return C.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class cR extends qw{constructor(t){super(),this.currentSequenceNumber=t}}class Sl{constructor(t){this.persistence=t,this.Wr=new Pl,this.Gr=null}static zr(t){return new Sl(t)}get jr(){if(this.Gr)return this.Gr;throw Q()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),C.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),C.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.jr,r=>{const s=j.fromPath(r);return this.Hr(t,s).next(i=>{i||n.removeEntry(s,W.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return C.or([()=>C.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
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
 */class bl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=s}static qi(t,n){let r=Z(),s=Z();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bl(t,n.fromCache,r,s)}}/**
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
 */class lR{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,s){return this.$i(t,n).next(i=>i||this.Ui(t,n,s,r)).next(i=>i||this.Wi(t,n))}$i(t,n){if(xh(n))return C.resolve(null);let r=Ge(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ic(n,null,"F"),r=Ge(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=Z(...i);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(t,ic(n,null,"F")):this.ji(t,l,n,c)}))})))}Ui(t,n,r,s){return xh(n)||s.isEqual(W.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(t,n):(Th()<=ot.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),oc(n)),this.ji(t,o,n,Uw(s,-1)))})}Gi(t,n){let r=new Kt(dg(t));return n.forEach((s,i)=>{ko(t,i)&&(r=r.add(i))}),r}zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(t,n){return Th()<=ot.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",oc(n)),this.Ki.getDocumentsMatchingQuery(t,n,mn.min())}ji(t,n,r,s){return this.Ki.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class uR{constructor(t,n,r,s){this.persistence=t,this.Hi=n,this.serializer=s,this.Ji=new yt(nt),this.Yi=new kr(i=>El(i),vl),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tR(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function hR(e,t,n,r){return new uR(e,t,n,r)}async function Og(e,t){const n=G(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Z();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function fR(e,t){const n=G(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let g=C.resolve();return f.forEach(y=>{g=g.next(()=>u.getEntry(c,y)).next(I=>{const R=l.docVersions.get(y);_t(R!==null),I.version.compareTo(R)<0&&(h.applyToRemoteDocument(I,l),I.isValidDocument()&&(I.setReadTime(l.commitVersion),u.addEntry(I)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Z();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ng(e){const t=G(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function dR(e,t){const n=G(e),r=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Wt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(I,R,S){return I.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,g,u)&&a.push(n.kr.updateTargetData(i,g))});let c=Ye(),l=Z();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(pR(i,o,t.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(W.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function pR(e,t,n){let r=Z(),s=Z();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Ye();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function gR(e,t){const n=G(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function mR(e,t){const n=G(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,t).next(i=>i?(s=i,C.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new on(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function hc(e,t,n){const r=G(e),s=r.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qs(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(s.target)}function Hh(e,t,n){const r=G(e);let s=W.min(),i=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=G(c),f=h.Yi.get(u);return f!==void 0?C.resolve(h.Ji.get(f)):h.kr.getTargetData(l,u)}(r,o,Ge(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?s:W.min(),n?i:Z())).next(a=>(_R(r,l0(t),a),{documents:a,ss:i})))}function _R(e,t,n){let r=e.Zi.get(t)||W.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Zi.set(t,r)}class qh{constructor(){this.activeTargetIds=g0()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class AR{constructor(){this.Hs=new qh,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new qh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class yR{Ys(t){}shutdown(){}}/**
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
 */class Qh{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ui=null;function ma(){return ui===null?ui=function(){return 268435456+Math.round(2147483648*Math.random())}():ui++,"0x"+ui.toString(16)}/**
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
 */const ER={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vR{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
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
 */const Bt="WebChannelConnection";class IR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=ma(),c=this.mo(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,i,o),this.po(n,c,l,s).then(u=>(F("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw yr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=ER[n];return`${this.To}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,s){const i=ma();return new Promise((o,a)=>{const c=new bw;c.setWithCredentials(!0),c.listenOnce(Cw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pa.NO_ERROR:const u=c.getResponseJson();F(Bt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case pa.TIMEOUT:F(Bt,`RPC '${t}' ${i} timed out`),a(new $(T.DEADLINE_EXCEEDED,"Request time out"));break;case pa.HTTP_ERROR:const h=c.getStatus();if(F(Bt,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(R){const S=R.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(S)>=0?S:T.UNKNOWN}(g.status);a(new $(y,g.message))}else a(new $(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(T.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{F(Bt,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);F(Bt,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}wo(t,n,r){const s=ma(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ww(),a=Rw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Sw({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");F(Bt,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const y=new vR({so:R=>{g?F(Bt,`Not sending because RPC '${t}' stream ${s} is closed:`,R):(f||(F(Bt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),F(Bt,`RPC '${t}' stream ${s} sending:`,R),h.send(R))},oo:()=>h.close()}),I=(R,S,k)=>{R.listen(S,q=>{try{k(q)}catch(O){setTimeout(()=>{throw O},0)}})};return I(h,oi.EventType.OPEN,()=>{g||F(Bt,`RPC '${t}' stream ${s} transport opened.`)}),I(h,oi.EventType.CLOSE,()=>{g||(g=!0,F(Bt,`RPC '${t}' stream ${s} transport closed`),y.Po())}),I(h,oi.EventType.ERROR,R=>{g||(g=!0,yr(Bt,`RPC '${t}' stream ${s} transport errored:`,R),y.Po(new $(T.UNAVAILABLE,"The operation could not be completed")))}),I(h,oi.EventType.MESSAGE,R=>{var S;if(!g){const k=R.data[0];_t(!!k);const q=k,O=q.error||((S=q[0])===null||S===void 0?void 0:S.error);if(O){F(Bt,`RPC '${t}' stream ${s} received error:`,O);const ft=O.status;let at=function(Xe){const se=It[Xe];if(se!==void 0)return Cg(se)}(ft),re=O.message;at===void 0&&(at=T.INTERNAL,re="Unknown error status: "+ft+" with message "+O.message),g=!0,y.Po(new $(at,re)),h.close()}else F(Bt,`RPC '${t}' stream ${s} received:`,k),y.Io(k)}}),I(a,Pw.STAT_EVENT,R=>{R.stat===vh.PROXY?F(Bt,`RPC '${t}' stream ${s} detected buffering proxy`):R.stat===vh.NOPROXY&&F(Bt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function _a(){return typeof document<"u"?document:null}/**
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
 */function Fo(e){return new M0(e,!0)}/**
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
 */class Fg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Lg{constructor(t,n,r,s,i,o,a,c){this.ii=t,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Fg(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{t(()=>{const s=new $(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TR extends Lg{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=F0(this.serializer,t),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Ne(o.readTime):W.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=uc(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=sc(c)?{documents:U0(i,c)}:{query:$0(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bg(i,o.resumeToken);const l=ac(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=zi(i,o.snapshotVersion.toTimestamp());const l=ac(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=H0(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=uc(this.serializer),n.removeTarget=t,this.Ho(n)}}class wR extends Lg{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(_t(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=B0(t.writeResults,t.commitTime),r=Ne(t.commitTime);return this.listener.u_(r,n)}return _t(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=uc(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>L0(this.serializer,r))};this.Ho(n)}}/**
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
 */class RR extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(T.UNKNOWN,s.toString())})}yo(t,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(T.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class CR{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(We(n),this.d_=!1):F("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class PR{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Wn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=G(c);l.y_.add(4),await Ks(l),l.b_.set("Unknown"),l.y_.delete(4),await Lo(l)}(this))})}),this.b_=new CR(r,s)}}async function Lo(e){if(Wn(e))for(const t of e.w_)await t(!0)}async function Ks(e){for(const t of e.w_)await t(!1)}function Bg(e,t){const n=G(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),xl(n)?Vl(n):Mr(n).Uo()&&Dl(n,t))}function Ug(e,t){const n=G(e),r=Mr(n);n.p_.delete(t),r.Uo()&&$g(n,t),n.p_.size===0&&(r.Uo()?r.zo():Wn(n)&&n.b_.set("Unknown"))}function Dl(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Mr(e).i_(t)}function $g(e,t){e.D_.Be(t),Mr(e).s_(t)}function Vl(e){e.D_=new D0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Mr(e).start(),e.b_.A_()}function xl(e){return Wn(e)&&!Mr(e).$o()&&e.p_.size>0}function Wn(e){return G(e).y_.size===0}function jg(e){e.D_=void 0}async function SR(e){e.p_.forEach((t,n)=>{Dl(e,t)})}async function bR(e,t){jg(e),xl(e)?(e.b_.m_(t),Vl(e)):e.b_.set("Unknown")}async function DR(e,t,n){if(e.b_.set("Online"),t instanceof Sg&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(e,t)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ki(e,r)}else if(t instanceof Ai?e.D_.We(t):t instanceof Pg?e.D_.Ze(t):e.D_.je(t),!n.isEqual(W.min()))try{const r=await Ng(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.p_.get(l);u&&i.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.p_.get(c);if(!u)return;i.p_.set(c,u.withResumeToken(Wt.EMPTY_BYTE_STRING,u.snapshotVersion)),$g(i,c);const h=new on(u.target,c,l,u.sequenceNumber);Dl(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Ki(e,r)}}async function Ki(e,t,n){if(!qs(t))throw t;e.y_.add(1),await Ks(e),e.b_.set("Offline"),n||(n=()=>Ng(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await Lo(e)})}function Hg(e,t){return t().catch(n=>Ki(e,n,t))}async function Bo(e){const t=G(e),n=An(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;VR(t);)try{const s=await gR(t.localStore,r);if(s===null){t.g_.length===0&&n.zo();break}r=s.batchId,xR(t,s)}catch(s){await Ki(t,s)}qg(t)&&Qg(t)}function VR(e){return Wn(e)&&e.g_.length<10}function xR(e,t){e.g_.push(t);const n=An(e);n.Uo()&&n.__&&n.a_(t.mutations)}function qg(e){return Wn(e)&&!An(e).$o()&&e.g_.length>0}function Qg(e){An(e).start()}async function kR(e){An(e).l_()}async function MR(e){const t=An(e);for(const n of e.g_)t.a_(n.mutations)}async function OR(e,t,n){const r=e.g_.shift(),s=Tl.from(r,t,n);await Hg(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Bo(e)}async function NR(e,t){t&&An(e).__&&await async function(r,s){if(function(o){return P0(o)&&o!==T.ABORTED}(s.code)){const i=r.g_.shift();An(r).Go(),await Hg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Bo(r)}}(e,t),qg(e)&&Qg(e)}async function zh(e,t){const n=G(e);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Wn(n);n.y_.add(3),await Ks(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await Lo(n)}async function FR(e,t){const n=G(e);t?(n.y_.delete(2),await Lo(n)):t||(n.y_.add(2),await Ks(n),n.b_.set("Unknown"))}function Mr(e){return e.v_||(e.v_=function(n,r,s){const i=G(n);return i.P_(),new TR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:SR.bind(null,e),uo:bR.bind(null,e),r_:DR.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),xl(e)?Vl(e):e.b_.set("Unknown")):(await e.v_.stop(),jg(e))})),e.v_}function An(e){return e.C_||(e.C_=function(n,r,s){const i=G(n);return i.P_(),new wR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:kR.bind(null,e),uo:NR.bind(null,e),c_:MR.bind(null,e),u_:OR.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await Bo(e)):(await e.C_.stop(),e.g_.length>0&&(F("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
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
 */class kl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new kl(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ml(e,t){if(We("AsyncQueue",`${t}: ${e}`),qs(e))return new $(T.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class fr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Qr(),this.sortedSet=new yt(this.comparator)}static emptySet(t){return new fr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof fr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new fr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Kh{constructor(){this.F_=new yt(j.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):Q():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class wr{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new wr(t,n,fr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class LR{constructor(){this.x_=void 0,this.listeners=[]}}class BR{constructor(){this.queries=new kr(t=>fg(t),xo),this.onlineState="Unknown",this.O_=new Set}}async function UR(e,t){const n=G(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new LR),s)try{i.x_=await n.onListen(r)}catch(o){const a=Ml(o,`Initialization of query '${oc(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.N_(n.onlineState),i.x_&&t.B_(i.x_)&&Ol(n)}async function $R(e,t){const n=G(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function jR(e,t){const n=G(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&Ol(n)}function HR(e,t,n){const r=G(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Ol(e){e.O_.forEach(t=>{t.next()})}class qR{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new wr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=wr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
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
 */class zg{constructor(t){this.key=t}}class Kg{constructor(t){this.key=t}}class QR{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=Z(),this.mutatedKeys=Z(),this.na=dg(t),this.ra=new fr(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new Kh,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),g=ko(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;f&&g?f.data.isEqual(g.data)?y!==I&&(r.track({type:3,doc:g}),R=!0):this._a(f,g)||(r.track({type:2,doc:g}),R=!0,(c&&this.na(g,c)>0||l&&this.na(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),R=!0):f&&!g&&(r.track({type:1,doc:f}),R=!0,(c||l)&&(a=!0)),R&&(g?(o=o.add(g),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const i=t.oa.M_();i.sort((l,u)=>function(f,g){const y=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return y(f)-y(g)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,i.length!==0||c?{snapshot:new wr(this.query,t.ra,s,i,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Kh,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=Z(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new Kg(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new zg(r))}),n}ha(t){this.X_=t.ss,this.ta=Z();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return wr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class zR{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class KR{constructor(t){this.key=t,this.Ia=!1}}class WR{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new kr(a=>fg(a),xo),this.da=new Map,this.Aa=new Set,this.Ra=new yt(j.comparator),this.Va=new Map,this.ma=new Pl,this.fa={},this.ga=new Map,this.pa=Tr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function GR(e,t){const n=iC(e);let r,s;const i=n.Ea.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await mR(n.localStore,Ge(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await YR(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Bg(n.remoteStore,o)}return s}async function YR(e,t,n,r,s){e.wa=(h,f,g)=>async function(I,R,S,k){let q=R.view.sa(S);q.zi&&(q=await Hh(I.localStore,R.query,!1).then(({documents:at})=>R.view.sa(at,q)));const O=k&&k.targetChanges.get(R.targetId),ft=R.view.applyChanges(q,I.isPrimaryClient,O);return Gh(I,R.targetId,ft.ca),ft.snapshot}(e,h,f,g);const i=await Hh(e.localStore,t,!0),o=new QR(t,i.ss),a=o.sa(i.documents),c=zs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);Gh(e,n,l.ca);const u=new zR(t,n,o);return e.Ea.set(t,u),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),l.snapshot}async function JR(e,t){const n=G(e),r=n.Ea.get(t),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!xo(i,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await hc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ug(n.remoteStore,r.targetId),fc(n,r.targetId)}).catch(Hs)):(fc(n,r.targetId),await hc(n.localStore,r.targetId,!0))}async function XR(e,t,n){const r=oC(e);try{const s=await function(o,a){const c=G(o),l=Ct.now(),u=a.reduce((g,y)=>g.add(y.key),Z());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=Ye(),I=Z();return c.Xi.getEntries(g,u).next(R=>{y=R,y.forEach((S,k)=>{k.isValidDocument()||(I=I.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,y)).next(R=>{h=R;const S=[];for(const k of a){const q=I0(k,h.get(k.key).overlayedDocument);q!=null&&S.push(new Kn(k.key,q,ig(q.value.mapValue),qe.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,S,a)}).next(R=>{f=R;const S=R.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(g,R.batchId,S)})}).then(()=>({batchId:f.batchId,changes:gg(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new yt(nt)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ws(r,s.changes),await Bo(r.remoteStore)}catch(s){const i=Ml(s,"Failed to persist write");n.reject(i)}}async function Wg(e,t){const n=G(e);try{const r=await dR(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(_t(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?_t(o.Ia):s.removedDocuments.size>0&&(_t(o.Ia),o.Ia=!1))}),await Ws(n,r,t)}catch(r){await Hs(r)}}function Wh(e,t,n){const r=G(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=G(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.N_(a)&&(l=!0)}),l&&Ol(c)}(r.eventManager,t),s.length&&r.Ta.r_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ZR(e,t,n){const r=G(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Va.get(t),i=s&&s.key;if(i){let o=new yt(j.comparator);o=o.insert(i,$t.newNoDocument(i,W.min()));const a=Z().add(i),c=new No(W.min(),new Map,new yt(nt),o,a);await Wg(r,c),r.Ra=r.Ra.remove(i),r.Va.delete(t),Nl(r)}else await hc(r.localStore,t,!1).then(()=>fc(r,t,n)).catch(Hs)}async function tC(e,t){const n=G(e),r=t.batch.batchId;try{const s=await fR(n.localStore,t);Yg(n,r,null),Gg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ws(n,s)}catch(s){await Hs(s)}}async function eC(e,t,n){const r=G(e);try{const s=await function(o,a){const c=G(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(_t(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);Yg(r,t,n),Gg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ws(r,s)}catch(s){await Hs(s)}}function Gg(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function Yg(e,t,n){const r=G(e);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.fa[r.currentUser.toKey()]=s}}function fc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||Jg(e,r)})}function Jg(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(Ug(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),Nl(e))}function Gh(e,t,n){for(const r of n)r instanceof zg?(e.ma.addReference(r.key,t),nC(e,r)):r instanceof Kg?(F("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||Jg(e,r.key)):Q()}function nC(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(F("SyncEngine","New document in limbo: "+n),e.Aa.add(r),Nl(e))}function Nl(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new j(At.fromString(t)),r=e.pa.next();e.Va.set(r,new KR(n)),e.Ra=e.Ra.insert(n,r),Bg(e.remoteStore,new on(Ge(Il(n.path)),r,"TargetPurposeLimboResolution",ml.ae))}}async function Ws(e,t,n){const r=G(e),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=bl.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(c,l){const u=G(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,f=>C.forEach(f.Li,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>C.forEach(f.ki,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!qs(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=u.Ji.get(f),y=g.snapshotVersion,I=g.withLastLimboFreeSnapshotVersion(y);u.Ji=u.Ji.insert(f,I)}}}(r.localStore,i))}async function rC(e,t){const n=G(e);if(!n.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const r=await Og(n.localStore,t);n.currentUser=t,function(i,o){i.ga.forEach(a=>{a.forEach(c=>{c.reject(new $(T.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ws(n,r.ts)}}function sC(e,t){const n=G(e),r=n.Va.get(t);if(r&&r.Ia)return Z().add(r.key);{let s=Z();const i=n.da.get(t);if(!i)return s;for(const o of i){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function iC(e){const t=G(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ZR.bind(null,t),t.Ta.r_=jR.bind(null,t.eventManager),t.Ta.Sa=HR.bind(null,t.eventManager),t}function oC(e){const t=G(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=eC.bind(null,t),t}class Yh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Fo(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return hR(this.persistence,new lR,t.initialUser,this.serializer)}createPersistence(t){return new aR(Sl.zr,this.serializer)}createSharedClientState(t){return new AR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aC{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rC.bind(null,this.syncEngine),await FR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new BR}()}createDatastore(t){const n=Fo(t.databaseInfo.databaseId),r=function(i){return new IR(i)}(t.databaseInfo);return function(i,o,a,c){return new RR(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new PR(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Wh(this.syncEngine,n,0),function(){return Qh.v()?new Qh:new yR}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new WR(s,i,o,a,c,l);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=G(n);F("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Ks(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class cC{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):We("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class lC{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ut.UNAUTHENTICATED,this.clientId=ng.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ml(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Aa(e,t){e.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Og(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Jh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await hC(e);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>zh(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>zh(t.remoteStore,i)),e._onlineComponents=t}function uC(e){return e.name==="FirebaseError"?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function hC(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Aa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!uC(n))throw n;yr("Error using user provided cache. Falling back to memory cache: "+n),await Aa(e,new Yh)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Aa(e,new Yh);return e._offlineComponents}async function Xg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Jh(e,e._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Jh(e,new aC))),e._onlineComponents}function fC(e){return Xg(e).then(t=>t.syncEngine)}async function Xh(e){const t=await Xg(e),n=t.eventManager;return n.onListen=GR.bind(null,t.syncEngine),n.onUnlisten=JR.bind(null,t.syncEngine),n}/**
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
 */function Zg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Zh=new Map;/**
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
 */function tm(e,t,n){if(!n)throw new $(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function dC(e,t,n,r){if(t===!0&&r===!0)throw new $(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function tf(e){if(!j.isDocumentKey(e))throw new $(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ef(e){if(j.isDocumentKey(e))throw new $(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Fl(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q()}function is(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new $(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(e);throw new $(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class nf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new $(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new $(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Uo{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new $(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vw;switch(r.type){case"firstParty":return new Ow(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zh.get(n);r&&(F("ComponentProvider","Removing Datastore"),Zh.delete(n),r.terminate())}(this),Promise.resolve()}}function pC(e,t,n,r={}){var s;const i=(e=is(e,Uo))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ut.MOCK_USER;else{a=DE(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ut(l)}e._authCredentials=new xw(new eg(a,c))}}/**
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
 */class $o{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $o(this.firestore,t,this._query)}}class he{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new he(this.firestore,t,this._key)}}class fn extends $o{constructor(t,n,r){super(t,n,Il(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new he(this.firestore,null,new j(t))}withConverter(t){return new fn(this.firestore,t,this._path)}}function em(e,t,...n){if(e=pn(e),tm("collection","path",t),e instanceof Uo){const r=At.fromString(t,...n);return ef(r),new fn(e,null,r)}{if(!(e instanceof he||e instanceof fn))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return ef(r),new fn(e.firestore,null,r)}}function nm(e,t,...n){if(e=pn(e),arguments.length===1&&(t=ng.V()),tm("doc","path",t),e instanceof Uo){const r=At.fromString(t,...n);return tf(r),new he(e,null,new j(r))}{if(!(e instanceof he||e instanceof fn))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return tf(r),new he(e.firestore,e instanceof fn?e.converter:null,new j(r))}}/**
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
 */class gC{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Fg(this,"async_queue_retry"),this.Xa=()=>{const n=_a();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=_a();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=_a();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new Bn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!qs(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw We("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const s=kl.createAndSchedule(this,t,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&Q()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}function rf(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Wi extends Uo{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new gC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sm(this),this._firestoreClient.terminate()}}function mC(e,t){const n=typeof e=="object"?e:Cd(),r=typeof e=="string"?e:t||"(default)",s=ks(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=SE("firestore");i&&pC(s,...i)}return s}function rm(e){return e._firestoreClient||sm(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sm(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new Kw(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Zg(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new lC(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Rr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rr(Wt.fromBase64String(t))}catch(n){throw new $(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Rr(Wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ll{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new $(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class im{constructor(t){this._methodName=t}}/**
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
 */class Bl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new $(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new $(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
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
 */const _C=/^__.*__$/;class AC{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Kn(t,this.data,this.fieldMask,n,this.fieldTransforms):new Qs(t,this.data,n,this.fieldTransforms)}}function om(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Ul{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Ul(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.cu({path:r,hu:!1});return s.Pu(t),s}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Gi(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(om(this.uu)&&_C.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class yC{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Fo(t)}Ru(t,n,r,s=!1){return new Ul({uu:t,methodName:n,Au:r,path:qt.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function EC(e){const t=e._freezeSettings(),n=Fo(e._databaseId);return new yC(e._databaseId,!!t.ignoreUndefinedProperties,n)}function vC(e,t,n,r,s,i={}){const o=e.Ru(i.merge||i.mergeFields?2:0,t,n,s);um("Data must be an object, but it was:",o,r);const a=cm(r,o);let c,l;if(i.merge)c=new Ae(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=IC(t,h,n);if(!o.contains(f))throw new $(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);wC(u,f)||u.push(f)}c=new Ae(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new AC(new le(a),c,l)}function am(e,t){if(lm(e=pn(e)))return um("Unsupported field value:",t,e),cm(e,t);if(e instanceof im)return function(r,s){if(!om(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=am(a,s.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=pn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return m0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ct.fromDate(r);return{timestampValue:zi(s.serializer,i)}}if(r instanceof Ct){const i=new Ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zi(s.serializer,i)}}if(r instanceof Bl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rr)return{bytesValue:bg(s.serializer,r._byteString)};if(r instanceof he){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${Fl(r)}`)}(e,t)}function cm(e,t){const n={};return rg(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xr(e,(r,s)=>{const i=am(s,t.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function lm(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ct||e instanceof Bl||e instanceof Rr||e instanceof he||e instanceof im)}function um(e,t,n){if(!lm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Fl(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function IC(e,t,n){if((t=pn(t))instanceof Ll)return t._internalPath;if(typeof t=="string")return hm(e,t);throw Gi("Field path arguments must be of type string or ",e,!1,void 0,n)}const TC=new RegExp("[~\\*/\\[\\]]");function hm(e,t,n){if(t.search(TC)>=0)throw Gi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ll(...t.split("."))._internalPath}catch{throw Gi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Gi(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(T.INVALID_ARGUMENT,a+e+c)}function wC(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class fm{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new RC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(dm("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RC extends fm{data(){return super.data()}}function dm(e,t){return typeof t=="string"?hm(e,t):t instanceof Ll?t._internalPath:t._delegate._internalPath}/**
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
 */function CC(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new $(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PC{convertValue(t,n="none"){switch(Qn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Q()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return xr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Bl(Tt(t.latitude),Tt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Al(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Cs(t));default:return null}}convertTimestamp(t){const n=_n(t);return new Ct(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=At.fromString(t);_t(Mg(r));const s=new Ps(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||We(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function SC(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Kr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pm extends fm{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(dm("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yi extends pm{data(t={}){return super.data(t)}}class bC{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Kr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new yi(this._firestore,this._userDataWriter,r.key,r,new Kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new yi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Kr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new yi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Kr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:DC(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DC(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class gm extends PC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new he(this.firestore,null,n)}}function VC(e,t){const n=is(e.firestore,Wi),r=nm(e),s=SC(e.converter,t);return xC(n,[vC(EC(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,qe.exists(!1))]).then(()=>r)}function mm(e,...t){var n,r,s;e=pn(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||rf(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(rf(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(e instanceof he)l=is(e.firestore,Wi),u=Il(e._key.path),c={next:h=>{t[o]&&t[o](kC(l,e,h))},error:t[o+1],complete:t[o+2]};else{const h=is(e,$o);l=is(h.firestore,Wi),u=h._query;const f=new gm(l);c={next:g=>{t[o]&&t[o](new bC(l,f,h,g))},error:t[o+1],complete:t[o+2]},CC(e._query)}return function(f,g,y,I){const R=new cC(I),S=new qR(g,R,y);return f.asyncQueue.enqueueAndForget(async()=>UR(await Xh(f),S)),()=>{R.Ca(),f.asyncQueue.enqueueAndForget(async()=>$R(await Xh(f),S))}}(rm(l),u,a,c)}function xC(e,t){return function(r,s){const i=new Bn;return r.asyncQueue.enqueueAndForget(async()=>XR(await fC(r),s,i)),i.promise}(rm(e),t)}function kC(e,t,n){const r=n.docs.get(t._key),s=new gm(e);return new pm(e,s,t._key,r,new Kr(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Vr=s})(Nv),gn(new ze("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Wi(new kw(r.getProvider("auth-internal")),new Fw(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ps(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Oe(Ih,"4.1.0",t),Oe(Ih,"4.1.0","esm2017")})();const MC={apiKey:"AIzaSyDPHqqYyhuEJ7fIpRksToVYC5zbM1onZ3w",authDomain:"flex-fa8c8.firebaseapp.com",projectId:"flex-fa8c8",storageBucket:"flex-fa8c8.appspot.com",messagingSenderId:"824163771541",appId:"1:824163771541:web:83622e1bb9f3aada3f679c",measurementId:"G-SY23L7GKQC"},OC=Rd(MC),$l=mC();ET(OC);const NC=e=>mm(em($l,"/routines"),e),FC=(e,t)=>mm(nm($l,"/exercises",e),t),LC=async e=>{await VC(em($l,"routines"),e)};const BC={class:"page"},UC={class:"selector-container"},$C=["value"],jC={__name:"Workouts",setup(e){const t=pe([]),n=pe({}),r=pe([]);pe([1,2,3,4,5,6,7]),pe("1");const s=pe(!1),i=pe(!1),o=pe(!0),a=()=>{NC(f=>{f.forEach(g=>{t.value.push({id:g.id,...g.data()})}),n.value=t.value[0]})},c=()=>{r.value=[],n.value[["exercises"]].forEach(f=>{FC(f,g=>{r.value.push({id:g.id,...g.data()})})})};Wr(n,f=>c()),$f(()=>a());const l=()=>{s.value=!0,i.value=!0,o.value=!1},u=()=>{s.value=!1,i.value=!1,o.value=!0},h=f=>{if(f=="")console.log("No ha rellenado el campo");else try{LC({name:f,exercises:[]}),t.value=[],u()}catch(g){console.log("Error al añadir: ",g)}};return(f,g)=>(Ht(),te("div",BC,[J("div",UC,[Ff(J("select",{class:"selector","onUpdate:modelValue":g[0]||(g[0]=y=>n.value=y)},[(Ht(!0),te(Zt,null,wi(t.value,y=>(Ht(),te("option",{value:y},On(y.name),9,$C))),256))],512),[[OA,n.value]]),J("img",{class:"h-9 w-9",src:tE,alt:"add",onClick:l})]),J("div",{class:cs(["exercises-container",{"opacity-10":s.value,"pointer-events-none":i.value}])},[(Ht(!0),te(Zt,null,wi(r.value,y=>(Ht(),td(cE,{class:"exeCard",name:y.name,series:y.series,reps:y.reps},null,8,["name","series","reps"]))),256))],2),J("div",{class:cs(["addExe absolute top-1/4 self-center",{hidden:o.value}])},[bt(AE,{onCancel:u,onAccept:h})],2)]))}},HC=yn(jC,[["__scopeId","data-v-ba3d683b"]]),qC={},QC={class:"page"};function zC(e,t){return Ht(),te("div",QC,"stats")}const KC=yn(qC,[["render",zC]]);const WC={class:"component"},GC={class:"title"},YC={class:"card"},JC={class:"row"},XC={__name:"TableData",props:{title:"",data:{type:Array,required:!0}},setup(e){const t=e;return(n,r)=>(Ht(),te("div",WC,[J("h1",GC,On(t.title),1),J("div",YC,[(Ht(!0),te(Zt,null,wi(t.data,s=>(Ht(),te("div",JC,[J("h1",null,On(s.key),1),J("h1",null,On(s.value),1)]))),256))])]))}},sf=yn(XC,[["__scopeId","data-v-a97af99a"]]);const ZC=e=>(Sc("data-v-877ed032"),e=e(),bc(),e),tP={class:"page"},eP=ZC(()=>J("header",null,[J("h1",null,"Hi, user"),J("h3",null,"You will achive your goals")],-1)),nP={__name:"User",setup(e){const t=[{key:"Height",value:"178"},{key:"Weight",value:"88"},{key:"IMC",value:"jose"}],n=[{key:"Height",value:"178"},{key:"Weight",value:"95"},{key:"IMC",value:"25"}];return(r,s)=>(Ht(),te("div",tP,[eP,bt(sf,{data:t,title:"Current Data"}),bt(sf,{data:n,title:"Objectives"})]))}},rP=yn(nP,[["__scopeId","data-v-877ed032"]]),sP=jy({history:oy("/Flex/"),routes:[{path:"/",name:"home",component:HC},{path:"/stats",name:"stats",component:KC},{path:"/user",name:"user",component:rP}]}),jl=LA(Zy);jl.use(jA());jl.use(sP);jl.mount("#app");
