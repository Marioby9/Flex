(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gc(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const gt={},or=[],Ae=()=>{},Rm=()=>!1,Cm=/^on[^a-z]/,Gi=e=>Cm.test(e),mc=e=>e.startsWith("onUpdate:"),Vt=Object.assign,_c=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pm=Object.prototype.hasOwnProperty,et=(e,t)=>Pm.call(e,t),q=Array.isArray,ar=e=>xs(e)==="[object Map]",Yi=e=>xs(e)==="[object Set]",Yl=e=>xs(e)==="[object Date]",J=e=>typeof e=="function",wt=e=>typeof e=="string",cs=e=>typeof e=="symbol",pt=e=>e!==null&&typeof e=="object",hf=e=>pt(e)&&J(e.then)&&J(e.catch),ff=Object.prototype.toString,xs=e=>ff.call(e),Sm=e=>xs(e).slice(8,-1),df=e=>xs(e)==="[object Object]",Ac=e=>wt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hi=gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ji=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bm=/-(\w)/g,Ne=Ji(e=>e.replace(bm,(t,n)=>n?n.toUpperCase():"")),Dm=/\B([A-Z])/g,Sr=Ji(e=>e.replace(Dm,"-$1").toLowerCase()),Xi=Ji(e=>e.charAt(0).toUpperCase()+e.slice(1)),jo=Ji(e=>e?`on${Xi(e)}`:""),ls=(e,t)=>!Object.is(e,t),fi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ei=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},vi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Jl;const Ea=()=>Jl||(Jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yc(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=wt(r)?Mm(r):yc(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(wt(e))return e;if(pt(e))return e}}const Vm=/;(?![^(]*\))/g,xm=/:([^]+)/,km=/\/\*[^]*?\*\//g;function Mm(e){const t={};return e.replace(km,"").split(Vm).forEach(n=>{if(n){const r=n.split(xm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ec(e){let t="";if(wt(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const r=Ec(e[n]);r&&(t+=r+" ")}else if(pt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Om="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nm=gc(Om);function pf(e){return!!e||e===""}function Fm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Zi(e[r],t[r]);return n}function Zi(e,t){if(e===t)return!0;let n=Yl(e),r=Yl(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=cs(e),r=cs(t),n||r)return e===t;if(n=q(e),r=q(t),n||r)return n&&r?Fm(e,t):!1;if(n=pt(e),r=pt(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!Zi(e[o],t[o]))return!1}}return String(e)===String(t)}function Lm(e,t){return e.findIndex(n=>Zi(n,t))}const an=e=>wt(e)?e:e==null?"":q(e)||pt(e)&&(e.toString===ff||!J(e.toString))?JSON.stringify(e,gf,2):String(e),gf=(e,t)=>t&&t.__v_isRef?gf(e,t.value):ar(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Yi(t)?{[`Set(${t.size})`]:[...t.values()]}:pt(t)&&!q(t)&&!df(t)?String(t):t;let oe;class mf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=oe,!t&&oe&&(this.index=(oe.scopes||(oe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=oe;try{return oe=this,t()}finally{oe=n}}}on(){oe=this}off(){oe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bm(e){return new mf(e)}function Um(e,t=oe){t&&t.active&&t.effects.push(e)}function _f(){return oe}function $m(e){oe&&oe.cleanups.push(e)}const vc=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Af=e=>(e.w&pn)>0,yf=e=>(e.n&pn)>0,jm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pn},qm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Af(s)&&!yf(s)?s.delete(e):t[n++]=s,s.w&=~pn,s.n&=~pn}t.length=n}},va=new WeakMap;let qr=0,pn=1;const Ia=30;let pe;const Nn=Symbol(""),Ta=Symbol("");class Ic{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Um(this,r)}run(){if(!this.active)return this.fn();let t=pe,n=cn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=pe,pe=this,cn=!0,pn=1<<++qr,qr<=Ia?jm(this):Xl(this),this.fn()}finally{qr<=Ia&&qm(this),pn=1<<--qr,pe=this.parent,cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pe===this?this.deferStop=!0:this.active&&(Xl(this),this.onStop&&this.onStop(),this.active=!1)}}function Xl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let cn=!0;const Ef=[];function br(){Ef.push(cn),cn=!1}function Dr(){const e=Ef.pop();cn=e===void 0?!0:e}function ne(e,t,n){if(cn&&pe){let r=va.get(e);r||va.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=vc()),vf(s)}}function vf(e,t){let n=!1;qr<=Ia?yf(e)||(e.n|=pn,n=!Af(e)):n=!e.has(pe),n&&(e.add(pe),pe.deps.push(e))}function He(e,t,n,r,s,i){const o=va.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&q(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":q(e)?Ac(n)&&a.push(o.get("length")):(a.push(o.get(Nn)),ar(e)&&a.push(o.get(Ta)));break;case"delete":q(e)||(a.push(o.get(Nn)),ar(e)&&a.push(o.get(Ta)));break;case"set":ar(e)&&a.push(o.get(Nn));break}if(a.length===1)a[0]&&wa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);wa(vc(c))}}function wa(e,t){const n=q(e)?e:[...e];for(const r of n)r.computed&&Zl(r);for(const r of n)r.computed||Zl(r)}function Zl(e,t){(e!==pe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Hm=gc("__proto__,__v_isRef,__isVue"),If=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(cs)),Qm=Tc(),zm=Tc(!1,!0),Km=Tc(!0),tu=Wm();function Wm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=rt(this);for(let i=0,o=this.length;i<o;i++)ne(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(rt)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){br();const r=rt(this)[t].apply(this,n);return Dr(),r}}),e}function Gm(e){const t=rt(this);return ne(t,"has",e),t.hasOwnProperty(e)}function Tc(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?h_:Pf:t?Cf:Rf).get(r))return r;const o=q(r);if(!e){if(o&&et(tu,s))return Reflect.get(tu,s,i);if(s==="hasOwnProperty")return Gm}const a=Reflect.get(r,s,i);return(cs(s)?If.has(s):Hm(s))||(e||ne(r,"get",s),t)?a:Ft(a)?o&&Ac(s)?a:a.value:pt(a)?e?bf(a):eo(a):a}}const Ym=Tf(),Jm=Tf(!0);function Tf(e=!1){return function(n,r,s,i){let o=n[r];if(gr(o)&&Ft(o)&&!Ft(s))return!1;if(!e&&(!Ii(s)&&!gr(s)&&(o=rt(o),s=rt(s)),!q(n)&&Ft(o)&&!Ft(s)))return o.value=s,!0;const a=q(n)&&Ac(r)?Number(r)<n.length:et(n,r),c=Reflect.set(n,r,s,i);return n===rt(i)&&(a?ls(s,o)&&He(n,"set",r,s):He(n,"add",r,s)),c}}function Xm(e,t){const n=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&He(e,"delete",t,void 0),r}function Zm(e,t){const n=Reflect.has(e,t);return(!cs(t)||!If.has(t))&&ne(e,"has",t),n}function t_(e){return ne(e,"iterate",q(e)?"length":Nn),Reflect.ownKeys(e)}const wf={get:Qm,set:Ym,deleteProperty:Xm,has:Zm,ownKeys:t_},e_={get:Km,set(e,t){return!0},deleteProperty(e,t){return!0}},n_=Vt({},wf,{get:zm,set:Jm}),wc=e=>e,to=e=>Reflect.getPrototypeOf(e);function Ys(e,t,n=!1,r=!1){e=e.__v_raw;const s=rt(e),i=rt(t);n||(t!==i&&ne(s,"get",t),ne(s,"get",i));const{has:o}=to(s),a=r?wc:n?Sc:us;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Js(e,t=!1){const n=this.__v_raw,r=rt(n),s=rt(e);return t||(e!==s&&ne(r,"has",e),ne(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Xs(e,t=!1){return e=e.__v_raw,!t&&ne(rt(e),"iterate",Nn),Reflect.get(e,"size",e)}function eu(e){e=rt(e);const t=rt(this);return to(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function nu(e,t){t=rt(t);const n=rt(this),{has:r,get:s}=to(n);let i=r.call(n,e);i||(e=rt(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?ls(t,o)&&He(n,"set",e,t):He(n,"add",e,t),this}function ru(e){const t=rt(this),{has:n,get:r}=to(t);let s=n.call(t,e);s||(e=rt(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&He(t,"delete",e,void 0),i}function su(){const e=rt(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function Zs(e,t){return function(r,s){const i=this,o=i.__v_raw,a=rt(o),c=t?wc:e?Sc:us;return!e&&ne(a,"iterate",Nn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ti(e,t,n){return function(...r){const s=this.__v_raw,i=rt(s),o=ar(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?wc:t?Sc:us;return!t&&ne(i,"iterate",c?Ta:Nn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function tn(e){return function(...t){return e==="delete"?!1:this}}function r_(){const e={get(i){return Ys(this,i)},get size(){return Xs(this)},has:Js,add:eu,set:nu,delete:ru,clear:su,forEach:Zs(!1,!1)},t={get(i){return Ys(this,i,!1,!0)},get size(){return Xs(this)},has:Js,add:eu,set:nu,delete:ru,clear:su,forEach:Zs(!1,!0)},n={get(i){return Ys(this,i,!0)},get size(){return Xs(this,!0)},has(i){return Js.call(this,i,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:Zs(!0,!1)},r={get(i){return Ys(this,i,!0,!0)},get size(){return Xs(this,!0)},has(i){return Js.call(this,i,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:Zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ti(i,!1,!1),n[i]=ti(i,!0,!1),t[i]=ti(i,!1,!0),r[i]=ti(i,!0,!0)}),[e,n,t,r]}const[s_,i_,o_,a_]=r_();function Rc(e,t){const n=t?e?a_:o_:e?i_:s_;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(et(n,s)&&s in r?n:r,s,i)}const c_={get:Rc(!1,!1)},l_={get:Rc(!1,!0)},u_={get:Rc(!0,!1)},Rf=new WeakMap,Cf=new WeakMap,Pf=new WeakMap,h_=new WeakMap;function f_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d_(e){return e.__v_skip||!Object.isExtensible(e)?0:f_(Sm(e))}function eo(e){return gr(e)?e:Cc(e,!1,wf,c_,Rf)}function Sf(e){return Cc(e,!1,n_,l_,Cf)}function bf(e){return Cc(e,!0,e_,u_,Pf)}function Cc(e,t,n,r,s){if(!pt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=d_(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function cr(e){return gr(e)?cr(e.__v_raw):!!(e&&e.__v_isReactive)}function gr(e){return!!(e&&e.__v_isReadonly)}function Ii(e){return!!(e&&e.__v_isShallow)}function Df(e){return cr(e)||gr(e)}function rt(e){const t=e&&e.__v_raw;return t?rt(t):e}function Pc(e){return Ei(e,"__v_skip",!0),e}const us=e=>pt(e)?eo(e):e,Sc=e=>pt(e)?bf(e):e;function Vf(e){cn&&pe&&(e=rt(e),vf(e.dep||(e.dep=vc())))}function xf(e,t){e=rt(e);const n=e.dep;n&&wa(n)}function Ft(e){return!!(e&&e.__v_isRef===!0)}function sn(e){return kf(e,!1)}function p_(e){return kf(e,!0)}function kf(e,t){return Ft(e)?e:new g_(e,t)}class g_{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:rt(t),this._value=n?t:us(t)}get value(){return Vf(this),this._value}set value(t){const n=this.__v_isShallow||Ii(t)||gr(t);t=n?t:rt(t),ls(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:us(t),xf(this))}}function ye(e){return Ft(e)?e.value:e}const m_={get:(e,t,n)=>ye(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ft(s)&&!Ft(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Mf(e){return cr(e)?e:new Proxy(e,m_)}class __{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ic(t,()=>{this._dirty||(this._dirty=!0,xf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=rt(this);return Vf(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function A_(e,t,n=!1){let r,s;const i=J(e);return i?(r=e,s=Ae):(r=e.get,s=e.set),new __(r,s,i||!s,n)}function ln(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){no(i,t,n)}return s}function Ee(e,t,n,r){if(J(e)){const i=ln(e,t,n,r);return i&&hf(i)&&i.catch(o=>{no(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Ee(e[i],t,n,r));return s}function no(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){ln(c,null,10,[e,o,a]);return}}y_(e,n,s,r)}function y_(e,t,n,r=!0){console.error(e)}let hs=!1,Ra=!1;const qt=[];let be=0;const lr=[];let $e=null,Sn=0;const Of=Promise.resolve();let bc=null;function Nf(e){const t=bc||Of;return e?t.then(this?e.bind(this):e):t}function E_(e){let t=be+1,n=qt.length;for(;t<n;){const r=t+n>>>1;fs(qt[r])<e?t=r+1:n=r}return t}function Dc(e){(!qt.length||!qt.includes(e,hs&&e.allowRecurse?be+1:be))&&(e.id==null?qt.push(e):qt.splice(E_(e.id),0,e),Ff())}function Ff(){!hs&&!Ra&&(Ra=!0,bc=Of.then(Bf))}function v_(e){const t=qt.indexOf(e);t>be&&qt.splice(t,1)}function I_(e){q(e)?lr.push(...e):(!$e||!$e.includes(e,e.allowRecurse?Sn+1:Sn))&&lr.push(e),Ff()}function iu(e,t=hs?be+1:0){for(;t<qt.length;t++){const n=qt[t];n&&n.pre&&(qt.splice(t,1),t--,n())}}function Lf(e){if(lr.length){const t=[...new Set(lr)];if(lr.length=0,$e){$e.push(...t);return}for($e=t,$e.sort((n,r)=>fs(n)-fs(r)),Sn=0;Sn<$e.length;Sn++)$e[Sn]();$e=null,Sn=0}}const fs=e=>e.id==null?1/0:e.id,T_=(e,t)=>{const n=fs(e)-fs(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bf(e){Ra=!1,hs=!0,qt.sort(T_);const t=Ae;try{for(be=0;be<qt.length;be++){const n=qt[be];n&&n.active!==!1&&ln(n,null,14)}}finally{be=0,qt.length=0,Lf(),hs=!1,bc=null,(qt.length||lr.length)&&Bf()}}function w_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||gt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||gt;f&&(s=n.map(g=>wt(g)?g.trim():g)),h&&(s=n.map(vi))}let a,c=r[a=jo(t)]||r[a=jo(Ne(t))];!c&&i&&(c=r[a=jo(Sr(t))]),c&&Ee(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ee(l,e,6,s)}}function Uf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!J(e)){const c=l=>{const u=Uf(l,t,!0);u&&(a=!0,Vt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(pt(e)&&r.set(e,null),null):(q(i)?i.forEach(c=>o[c]=null):Vt(o,i),pt(e)&&r.set(e,o),o)}function ro(e,t){return!e||!Gi(t)?!1:(t=t.slice(2).replace(/Once$/,""),et(e,t[0].toLowerCase()+t.slice(1))||et(e,Sr(t))||et(e,t))}let he=null,so=null;function Ti(e){const t=he;return he=e,so=e&&e.type.__scopeId||null,t}function Vc(e){so=e}function xc(){so=null}function kc(e,t=he,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&mu(-1);const i=Ti(t);let o;try{o=e(...s)}finally{Ti(i),r._d&&mu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qo(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:I}=e;let R,S;const k=Ti(e);try{if(n.shapeFlag&4){const O=s||r;R=Se(u.call(O,O,h,i,g,f,y)),S=c}else{const O=t;R=Se(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),S=t.props?c:R_(c)}}catch(O){Xr.length=0,no(O,e,1),R=Pt(Un)}let H=R;if(S&&I!==!1){const O=Object.keys(S),{shapeFlag:ft}=H;O.length&&ft&7&&(o&&O.some(mc)&&(S=C_(S,o)),H=mr(H,S))}return n.dirs&&(H=mr(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),R=H,Ti(k),R}const R_=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gi(n))&&((t||(t={}))[n]=e[n]);return t},C_=(e,t)=>{const n={};for(const r in e)(!mc(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function P_(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ou(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!ro(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ou(r,o,l):!0:!!o;return!1}function ou(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ro(n,i))return!0}return!1}function S_({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const b_=e=>e.__isSuspense;function D_(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):I_(e)}const ei={};function ur(e,t,n){return $f(e,t,n)}function $f(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=gt){var a;const c=_f()===((a=Nt)==null?void 0:a.scope)?Nt:null;let l,u=!1,h=!1;if(Ft(e)?(l=()=>e.value,u=Ii(e)):cr(e)?(l=()=>e,r=!0):q(e)?(h=!0,u=e.some(O=>cr(O)||Ii(O)),l=()=>e.map(O=>{if(Ft(O))return O.value;if(cr(O))return Vn(O);if(J(O))return ln(O,c,2)})):J(e)?t?l=()=>ln(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ee(e,c,3,[g])}:l=Ae,t&&r){const O=l;l=()=>Vn(O())}let f,g=O=>{f=k.onStop=()=>{ln(O,c,4)}},y;if(gs)if(g=Ae,t?n&&Ee(t,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const O=wA();y=O.__watcherHandles||(O.__watcherHandles=[])}else return Ae;let I=h?new Array(e.length).fill(ei):ei;const R=()=>{if(k.active)if(t){const O=k.run();(r||u||(h?O.some((ft,at)=>ls(ft,I[at])):ls(O,I)))&&(f&&f(),Ee(t,c,3,[O,I===ei?void 0:h&&I[0]===ei?[]:I,g]),I=O)}else k.run()};R.allowRecurse=!!t;let S;s==="sync"?S=R:s==="post"?S=()=>te(R,c&&c.suspense):(R.pre=!0,c&&(R.id=c.uid),S=()=>Dc(R));const k=new Ic(l,S);t?n?R():I=k.run():s==="post"?te(k.run.bind(k),c&&c.suspense):k.run();const H=()=>{k.stop(),c&&c.scope&&_c(c.scope.effects,k)};return y&&y.push(H),H}function V_(e,t,n){const r=this.proxy,s=wt(e)?e.includes(".")?jf(r,e):()=>r[e]:e.bind(r,r);let i;J(t)?i=t:(i=t.handler,n=t);const o=Nt;_r(this);const a=$f(s,i.bind(r),n);return o?_r(o):Fn(),a}function jf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vn(e,t){if(!pt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ft(e))Vn(e.value,t);else if(q(e))for(let n=0;n<e.length;n++)Vn(e[n],t);else if(Yi(e)||ar(e))e.forEach(n=>{Vn(n,t)});else if(df(e))for(const n in e)Vn(e[n],t);return e}function qf(e,t){const n=he;if(n===null)return e;const r=co(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=gt]=t[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Vn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Rn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(br(),Ee(c,n,8,[e.el,a,e,t]),Dr())}}function Hf(e,t){return J(e)?(()=>Vt({name:e.name},t,{setup:e}))():e}const di=e=>!!e.type.__asyncLoader,Qf=e=>e.type.__isKeepAlive;function x_(e,t){zf(e,"a",t)}function k_(e,t){zf(e,"da",t)}function zf(e,t,n=Nt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(io(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Qf(s.parent.vnode)&&M_(r,t,n,s),s=s.parent}}function M_(e,t,n,r){const s=io(t,e,r,!0);Wf(()=>{_c(r[t],s)},n)}function io(e,t,n=Nt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;br(),_r(n);const a=Ee(t,n,e,o);return Fn(),Dr(),a});return r?s.unshift(i):s.push(i),i}}const Ye=e=>(t,n=Nt)=>(!gs||e==="sp")&&io(e,(...r)=>t(...r),n),O_=Ye("bm"),Kf=Ye("m"),N_=Ye("bu"),F_=Ye("u"),L_=Ye("bum"),Wf=Ye("um"),B_=Ye("sp"),U_=Ye("rtg"),$_=Ye("rtc");function j_(e,t=Nt){io("ec",e,t)}const Gf="components",Yf=Symbol.for("v-ndc");function q_(e){return wt(e)?H_(Gf,e,!1)||e:e||Yf}function H_(e,t,n=!0,r=!1){const s=he||Nt;if(s){const i=s.type;if(e===Gf){const a=vA(i,!1);if(a&&(a===t||a===Ne(t)||a===Xi(Ne(t))))return i}const o=au(s[e]||i[e],t)||au(s.appContext[e],t);return!o&&r?i:o}}function au(e,t){return e&&(e[t]||e[Ne(t)]||e[Xi(Ne(t))])}function ds(e,t,n,r){let s;const i=n&&n[r];if(q(e)||wt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(pt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ca=e=>e?ad(e)?co(e)||e.proxy:Ca(e.parent):null,Jr=Vt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ca(e.parent),$root:e=>Ca(e.root),$emit:e=>e.emit,$options:e=>Mc(e),$forceUpdate:e=>e.f||(e.f=()=>Dc(e.update)),$nextTick:e=>e.n||(e.n=Nf.bind(e.proxy)),$watch:e=>V_.bind(e)}),Ho=(e,t)=>e!==gt&&!e.__isScriptSetup&&et(e,t),Q_={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ho(r,t))return o[t]=1,r[t];if(s!==gt&&et(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&et(l,t))return o[t]=3,i[t];if(n!==gt&&et(n,t))return o[t]=4,n[t];Pa&&(o[t]=0)}}const u=Jr[t];let h,f;if(u)return t==="$attrs"&&ne(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==gt&&et(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,et(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ho(s,t)?(s[t]=n,!0):r!==gt&&et(r,t)?(r[t]=n,!0):et(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==gt&&et(e,o)||Ho(t,o)||(a=i[0])&&et(a,o)||et(r,o)||et(Jr,o)||et(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:et(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cu(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Pa=!0;function z_(e){const t=Mc(e),n=e.proxy,r=e.ctx;Pa=!1,t.beforeCreate&&lu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:I,deactivated:R,beforeDestroy:S,beforeUnmount:k,destroyed:H,unmounted:O,render:ft,renderTracked:at,renderTriggered:re,errorCaptured:Te,serverPrefetch:Je,expose:se,inheritAttrs:Xe,components:wn,directives:we,filters:Fr}=t;if(l&&K_(l,r,null),o)for(const ht in o){const st=o[ht];J(st)&&(r[ht]=st.bind(n))}if(s){const ht=s.call(n,n);pt(ht)&&(e.data=eo(ht))}if(Pa=!0,i)for(const ht in i){const st=i[ht],Be=J(st)?st.bind(n,n):J(st.get)?st.get.bind(n,n):Ae,Ze=!J(st)&&J(st.set)?st.set.bind(n):Ae,Re=ge({get:Be,set:Ze});Object.defineProperty(r,ht,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Zt=>Re.value=Zt})}if(a)for(const ht in a)Jf(a[ht],r,n,ht);if(c){const ht=J(c)?c.call(n):c;Reflect.ownKeys(ht).forEach(st=>{pi(st,ht[st])})}u&&lu(u,e,"c");function bt(ht,st){q(st)?st.forEach(Be=>ht(Be.bind(n))):st&&ht(st.bind(n))}if(bt(O_,h),bt(Kf,f),bt(N_,g),bt(F_,y),bt(x_,I),bt(k_,R),bt(j_,Te),bt($_,at),bt(U_,re),bt(L_,k),bt(Wf,O),bt(B_,Je),q(se))if(se.length){const ht=e.exposed||(e.exposed={});se.forEach(st=>{Object.defineProperty(ht,st,{get:()=>n[st],set:Be=>n[st]=Be})})}else e.exposed||(e.exposed={});ft&&e.render===Ae&&(e.render=ft),Xe!=null&&(e.inheritAttrs=Xe),wn&&(e.components=wn),we&&(e.directives=we)}function K_(e,t,n=Ae){q(e)&&(e=Sa(e));for(const r in e){const s=e[r];let i;pt(s)?"default"in s?i=ke(s.from||r,s.default,!0):i=ke(s.from||r):i=ke(s),Ft(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function lu(e,t,n){Ee(q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Jf(e,t,n,r){const s=r.includes(".")?jf(n,r):()=>n[r];if(wt(e)){const i=t[e];J(i)&&ur(s,i)}else if(J(e))ur(s,e.bind(n));else if(pt(e))if(q(e))e.forEach(i=>Jf(i,t,n,r));else{const i=J(e.handler)?e.handler.bind(n):t[e.handler];J(i)&&ur(s,i,e)}}function Mc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>wi(c,l,o,!0)),wi(c,t,o)),pt(t)&&i.set(t,c),c}function wi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&wi(e,i,n,!0),s&&s.forEach(o=>wi(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=W_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const W_={data:uu,props:hu,emits:hu,methods:Hr,computed:Hr,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Hr,directives:Hr,watch:Y_,provide:uu,inject:G_};function uu(e,t){return t?e?function(){return Vt(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function G_(e,t){return Hr(Sa(e),Sa(t))}function Sa(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Yt(e,t){return e?[...new Set([].concat(e,t))]:t}function Hr(e,t){return e?Vt(Object.create(null),e,t):t}function hu(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:Vt(Object.create(null),cu(e),cu(t??{})):t}function Y_(e,t){if(!e)return t;if(!t)return e;const n=Vt(Object.create(null),e);for(const r in t)n[r]=Yt(e[r],t[r]);return n}function Xf(){return{app:null,config:{isNativeTag:Rm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let J_=0;function X_(e,t){return function(r,s=null){J(r)||(r=Vt({},r)),s!=null&&!pt(s)&&(s=null);const i=Xf(),o=new Set;let a=!1;const c=i.app={_uid:J_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:RA,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Pt(r,s);return f.appContext=i,u&&t?t(f,l):e(f,l,h),a=!0,c._container=l,l.__vue_app__=c,co(f.component)||f.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ri=c;try{return l()}finally{Ri=null}}};return c}}let Ri=null;function pi(e,t){if(Nt){let n=Nt.provides;const r=Nt.parent&&Nt.parent.provides;r===n&&(n=Nt.provides=Object.create(r)),n[e]=t}}function ke(e,t,n=!1){const r=Nt||he;if(r||Ri){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ri._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&J(t)?t.call(r&&r.proxy):t}}function Z_(e,t,n,r=!1){const s={},i={};Ei(i,ao,1),e.propsDefaults=Object.create(null),Zf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Sf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function tA(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=rt(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ro(e.emitsOptions,f))continue;const g=t[f];if(c)if(et(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Ne(f);s[y]=ba(c,a,y,g,e,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Zf(e,t,s,i)&&(l=!0);let u;for(const h in a)(!t||!et(t,h)&&((u=Sr(h))===h||!et(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ba(c,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!et(t,h))&&(delete i[h],l=!0)}l&&He(e,"set","$attrs")}function Zf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(hi(c))continue;const l=t[c];let u;s&&et(s,u=Ne(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ro(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=rt(n),l=a||gt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ba(s,c,h,l[h],e,!et(l,h))}}return o}function ba(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=et(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(_r(s),r=l[n]=c.call(null,t),Fn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Sr(n))&&(r=!0))}return r}function td(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!J(e)){const u=h=>{c=!0;const[f,g]=td(h,t,!0);Vt(o,f),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return pt(e)&&r.set(e,or),or;if(q(i))for(let u=0;u<i.length;u++){const h=Ne(i[u]);fu(h)&&(o[h]=gt)}else if(i)for(const u in i){const h=Ne(u);if(fu(h)){const f=i[u],g=o[h]=q(f)||J(f)?{type:f}:Vt({},f);if(g){const y=gu(Boolean,g.type),I=gu(String,g.type);g[0]=y>-1,g[1]=I<0||y<I,(y>-1||et(g,"default"))&&a.push(h)}}}const l=[o,a];return pt(e)&&r.set(e,l),l}function fu(e){return e[0]!=="$"}function du(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function pu(e,t){return du(e)===du(t)}function gu(e,t){return q(t)?t.findIndex(n=>pu(n,e)):J(t)&&pu(t,e)?0:-1}const ed=e=>e[0]==="_"||e==="$stable",Oc=e=>q(e)?e.map(Se):[Se(e)],eA=(e,t,n)=>{if(t._n)return t;const r=kc((...s)=>Oc(t(...s)),n);return r._c=!1,r},nd=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ed(s))continue;const i=e[s];if(J(i))t[s]=eA(s,i,r);else if(i!=null){const o=Oc(i);t[s]=()=>o}}},rd=(e,t)=>{const n=Oc(t);e.slots.default=()=>n},nA=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=rt(t),Ei(t,"_",n)):nd(t,e.slots={})}else e.slots={},t&&rd(e,t);Ei(e.slots,ao,1)},rA=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=gt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Vt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,nd(t,s)),o=t}else t&&(rd(e,t),o={default:1});if(i)for(const a in s)!ed(a)&&!(a in o)&&delete s[a]};function Da(e,t,n,r,s=!1){if(q(e)){e.forEach((f,g)=>Da(f,t&&(q(t)?t[g]:t),n,r,s));return}if(di(r)&&!s)return;const i=r.shapeFlag&4?co(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===gt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(wt(l)?(u[l]=null,et(h,l)&&(h[l]=null)):Ft(l)&&(l.value=null)),J(c))ln(c,a,12,[o,u]);else{const f=wt(c),g=Ft(c);if(f||g){const y=()=>{if(e.f){const I=f?et(h,c)?h[c]:u[c]:c.value;s?q(I)&&_c(I,i):q(I)?I.includes(i)||I.push(i):f?(u[c]=[i],et(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else f?(u[c]=o,et(h,c)&&(h[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(y.id=-1,te(y,n)):y()}}}const te=D_;function sA(e){return iA(e)}function iA(e,t){const n=Ea();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Ae,insertStaticContent:y}=e,I=(d,p,m,_=null,E=null,v=null,x=!1,P=null,b=!!p.dynamicChildren)=>{if(d===p)return;d&&!Br(d,p)&&(_=A(d),Zt(d,E,v,!0),d=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:w,ref:B,shapeFlag:N}=p;switch(w){case oo:R(d,p,m,_);break;case Un:S(d,p,m,_);break;case Qo:d==null&&k(p,m,_,x);break;case Jt:wn(d,p,m,_,E,v,x,P,b);break;default:N&1?ft(d,p,m,_,E,v,x,P,b):N&6?we(d,p,m,_,E,v,x,P,b):(N&64||N&128)&&w.process(d,p,m,_,E,v,x,P,b,D)}B!=null&&E&&Da(B,d&&d.ref,v,p||d,!p)},R=(d,p,m,_)=>{if(d==null)r(p.el=a(p.children),m,_);else{const E=p.el=d.el;p.children!==d.children&&l(E,p.children)}},S=(d,p,m,_)=>{d==null?r(p.el=c(p.children||""),m,_):p.el=d.el},k=(d,p,m,_)=>{[d.el,d.anchor]=y(d.children,p,m,_,d.el,d.anchor)},H=({el:d,anchor:p},m,_)=>{let E;for(;d&&d!==p;)E=f(d),r(d,m,_),d=E;r(p,m,_)},O=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},ft=(d,p,m,_,E,v,x,P,b)=>{x=x||p.type==="svg",d==null?at(p,m,_,E,v,x,P,b):Je(d,p,E,v,x,P,b)},at=(d,p,m,_,E,v,x,P)=>{let b,w;const{type:B,props:N,shapeFlag:U,transition:K,dirs:X}=d;if(b=d.el=o(d.type,v,N&&N.is,N),U&8?u(b,d.children):U&16&&Te(d.children,b,null,_,E,v&&B!=="foreignObject",x,P),X&&Rn(d,null,_,"created"),re(b,d,d.scopeId,x,_),N){for(const ut in N)ut!=="value"&&!hi(ut)&&i(b,ut,null,N[ut],v,d.children,_,E,Bt);"value"in N&&i(b,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Pe(w,_,d)}X&&Rn(d,null,_,"beforeMount");const dt=(!E||E&&!E.pendingBranch)&&K&&!K.persisted;dt&&K.beforeEnter(b),r(b,p,m),((w=N&&N.onVnodeMounted)||dt||X)&&te(()=>{w&&Pe(w,_,d),dt&&K.enter(b),X&&Rn(d,null,_,"mounted")},E)},re=(d,p,m,_,E)=>{if(m&&g(d,m),_)for(let v=0;v<_.length;v++)g(d,_[v]);if(E){let v=E.subTree;if(p===v){const x=E.vnode;re(d,x,x.scopeId,x.slotScopeIds,E.parent)}}},Te=(d,p,m,_,E,v,x,P,b=0)=>{for(let w=b;w<d.length;w++){const B=d[w]=P?nn(d[w]):Se(d[w]);I(null,B,p,m,_,E,v,x,P)}},Je=(d,p,m,_,E,v,x)=>{const P=p.el=d.el;let{patchFlag:b,dynamicChildren:w,dirs:B}=p;b|=d.patchFlag&16;const N=d.props||gt,U=p.props||gt;let K;m&&Cn(m,!1),(K=U.onVnodeBeforeUpdate)&&Pe(K,m,p,d),B&&Rn(p,d,m,"beforeUpdate"),m&&Cn(m,!0);const X=E&&p.type!=="foreignObject";if(w?se(d.dynamicChildren,w,P,m,_,X,v):x||st(d,p,P,null,m,_,X,v,!1),b>0){if(b&16)Xe(P,p,N,U,m,_,E);else if(b&2&&N.class!==U.class&&i(P,"class",null,U.class,E),b&4&&i(P,"style",N.style,U.style,E),b&8){const dt=p.dynamicProps;for(let ut=0;ut<dt.length;ut++){const vt=dt[ut],de=N[vt],Zn=U[vt];(Zn!==de||vt==="value")&&i(P,vt,de,Zn,E,d.children,m,_,Bt)}}b&1&&d.children!==p.children&&u(P,p.children)}else!x&&w==null&&Xe(P,p,N,U,m,_,E);((K=U.onVnodeUpdated)||B)&&te(()=>{K&&Pe(K,m,p,d),B&&Rn(p,d,m,"updated")},_)},se=(d,p,m,_,E,v,x)=>{for(let P=0;P<p.length;P++){const b=d[P],w=p[P],B=b.el&&(b.type===Jt||!Br(b,w)||b.shapeFlag&70)?h(b.el):m;I(b,w,B,null,_,E,v,x,!0)}},Xe=(d,p,m,_,E,v,x)=>{if(m!==_){if(m!==gt)for(const P in m)!hi(P)&&!(P in _)&&i(d,P,m[P],null,x,p.children,E,v,Bt);for(const P in _){if(hi(P))continue;const b=_[P],w=m[P];b!==w&&P!=="value"&&i(d,P,w,b,x,p.children,E,v,Bt)}"value"in _&&i(d,"value",m.value,_.value)}},wn=(d,p,m,_,E,v,x,P,b)=>{const w=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:K}=p;K&&(P=P?P.concat(K):K),d==null?(r(w,m,_),r(B,m,_),Te(p.children,m,B,E,v,x,P,b)):N>0&&N&64&&U&&d.dynamicChildren?(se(d.dynamicChildren,U,m,E,v,x,P),(p.key!=null||E&&p===E.subTree)&&sd(d,p,!0)):st(d,p,m,B,E,v,x,P,b)},we=(d,p,m,_,E,v,x,P,b)=>{p.slotScopeIds=P,d==null?p.shapeFlag&512?E.ctx.activate(p,m,_,x,b):Fr(p,m,_,E,v,x,b):Yn(d,p,b)},Fr=(d,p,m,_,E,v,x)=>{const P=d.component=mA(d,_,E);if(Qf(d)&&(P.ctx.renderer=D),_A(P),P.asyncDep){if(E&&E.registerDep(P,bt),!d.el){const b=P.subTree=Pt(Un);S(null,b,p,m)}return}bt(P,d,p,m,E,v,x)},Yn=(d,p,m)=>{const _=p.component=d.component;if(P_(d,p,m))if(_.asyncDep&&!_.asyncResolved){ht(_,p,m);return}else _.next=p,v_(_.update),_.update();else p.el=d.el,_.vnode=p},bt=(d,p,m,_,E,v,x)=>{const P=()=>{if(d.isMounted){let{next:B,bu:N,u:U,parent:K,vnode:X}=d,dt=B,ut;Cn(d,!1),B?(B.el=X.el,ht(d,B,x)):B=X,N&&fi(N),(ut=B.props&&B.props.onVnodeBeforeUpdate)&&Pe(ut,K,B,X),Cn(d,!0);const vt=qo(d),de=d.subTree;d.subTree=vt,I(de,vt,h(de.el),A(de),d,E,v),B.el=vt.el,dt===null&&S_(d,vt.el),U&&te(U,E),(ut=B.props&&B.props.onVnodeUpdated)&&te(()=>Pe(ut,K,B,X),E)}else{let B;const{el:N,props:U}=p,{bm:K,m:X,parent:dt}=d,ut=di(p);if(Cn(d,!1),K&&fi(K),!ut&&(B=U&&U.onVnodeBeforeMount)&&Pe(B,dt,p),Cn(d,!0),N&&it){const vt=()=>{d.subTree=qo(d),it(N,d.subTree,d,E,null)};ut?p.type.__asyncLoader().then(()=>!d.isUnmounted&&vt()):vt()}else{const vt=d.subTree=qo(d);I(null,vt,m,_,d,E,v),p.el=vt.el}if(X&&te(X,E),!ut&&(B=U&&U.onVnodeMounted)){const vt=p;te(()=>Pe(B,dt,vt),E)}(p.shapeFlag&256||dt&&di(dt.vnode)&&dt.vnode.shapeFlag&256)&&d.a&&te(d.a,E),d.isMounted=!0,p=m=_=null}},b=d.effect=new Ic(P,()=>Dc(w),d.scope),w=d.update=()=>b.run();w.id=d.uid,Cn(d,!0),w()},ht=(d,p,m)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,tA(d,p.props,_,m),rA(d,p.children,m),br(),iu(),Dr()},st=(d,p,m,_,E,v,x,P,b=!1)=>{const w=d&&d.children,B=d?d.shapeFlag:0,N=p.children,{patchFlag:U,shapeFlag:K}=p;if(U>0){if(U&128){Ze(w,N,m,_,E,v,x,P,b);return}else if(U&256){Be(w,N,m,_,E,v,x,P,b);return}}K&8?(B&16&&Bt(w,E,v),N!==w&&u(m,N)):B&16?K&16?Ze(w,N,m,_,E,v,x,P,b):Bt(w,E,v,!0):(B&8&&u(m,""),K&16&&Te(N,m,_,E,v,x,P,b))},Be=(d,p,m,_,E,v,x,P,b)=>{d=d||or,p=p||or;const w=d.length,B=p.length,N=Math.min(w,B);let U;for(U=0;U<N;U++){const K=p[U]=b?nn(p[U]):Se(p[U]);I(d[U],K,m,null,E,v,x,P,b)}w>B?Bt(d,E,v,!0,!1,N):Te(p,m,_,E,v,x,P,b,N)},Ze=(d,p,m,_,E,v,x,P,b)=>{let w=0;const B=p.length;let N=d.length-1,U=B-1;for(;w<=N&&w<=U;){const K=d[w],X=p[w]=b?nn(p[w]):Se(p[w]);if(Br(K,X))I(K,X,m,null,E,v,x,P,b);else break;w++}for(;w<=N&&w<=U;){const K=d[N],X=p[U]=b?nn(p[U]):Se(p[U]);if(Br(K,X))I(K,X,m,null,E,v,x,P,b);else break;N--,U--}if(w>N){if(w<=U){const K=U+1,X=K<B?p[K].el:_;for(;w<=U;)I(null,p[w]=b?nn(p[w]):Se(p[w]),m,X,E,v,x,P,b),w++}}else if(w>U)for(;w<=N;)Zt(d[w],E,v,!0),w++;else{const K=w,X=w,dt=new Map;for(w=X;w<=U;w++){const ie=p[w]=b?nn(p[w]):Se(p[w]);ie.key!=null&&dt.set(ie.key,w)}let ut,vt=0;const de=U-X+1;let Zn=!1,Kl=0;const Lr=new Array(de);for(w=0;w<de;w++)Lr[w]=0;for(w=K;w<=N;w++){const ie=d[w];if(vt>=de){Zt(ie,E,v,!0);continue}let Ce;if(ie.key!=null)Ce=dt.get(ie.key);else for(ut=X;ut<=U;ut++)if(Lr[ut-X]===0&&Br(ie,p[ut])){Ce=ut;break}Ce===void 0?Zt(ie,E,v,!0):(Lr[Ce-X]=w+1,Ce>=Kl?Kl=Ce:Zn=!0,I(ie,p[Ce],m,null,E,v,x,P,b),vt++)}const Wl=Zn?oA(Lr):or;for(ut=Wl.length-1,w=de-1;w>=0;w--){const ie=X+w,Ce=p[ie],Gl=ie+1<B?p[ie+1].el:_;Lr[w]===0?I(null,Ce,m,Gl,E,v,x,P,b):Zn&&(ut<0||w!==Wl[ut]?Re(Ce,m,Gl,2):ut--)}}},Re=(d,p,m,_,E=null)=>{const{el:v,type:x,transition:P,children:b,shapeFlag:w}=d;if(w&6){Re(d.component.subTree,p,m,_);return}if(w&128){d.suspense.move(p,m,_);return}if(w&64){x.move(d,p,m,D);return}if(x===Jt){r(v,p,m);for(let N=0;N<b.length;N++)Re(b[N],p,m,_);r(d.anchor,p,m);return}if(x===Qo){H(d,p,m);return}if(_!==2&&w&1&&P)if(_===0)P.beforeEnter(v),r(v,p,m),te(()=>P.enter(v),E);else{const{leave:N,delayLeave:U,afterLeave:K}=P,X=()=>r(v,p,m),dt=()=>{N(v,()=>{X(),K&&K()})};U?U(v,X,dt):dt()}else r(v,p,m)},Zt=(d,p,m,_=!1,E=!1)=>{const{type:v,props:x,ref:P,children:b,dynamicChildren:w,shapeFlag:B,patchFlag:N,dirs:U}=d;if(P!=null&&Da(P,null,m,d,!0),B&256){p.ctx.deactivate(d);return}const K=B&1&&U,X=!di(d);let dt;if(X&&(dt=x&&x.onVnodeBeforeUnmount)&&Pe(dt,p,d),B&6)Gs(d.component,m,_);else{if(B&128){d.suspense.unmount(m,_);return}K&&Rn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,E,D,_):w&&(v!==Jt||N>0&&N&64)?Bt(w,p,m,!1,!0):(v===Jt&&N&384||!E&&B&16)&&Bt(b,p,m),_&&Jn(d)}(X&&(dt=x&&x.onVnodeUnmounted)||K)&&te(()=>{dt&&Pe(dt,p,d),K&&Rn(d,null,p,"unmounted")},m)},Jn=d=>{const{type:p,el:m,anchor:_,transition:E}=d;if(p===Jt){Xn(m,_);return}if(p===Qo){O(d);return}const v=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:P}=E,b=()=>x(m,v);P?P(d.el,v,b):b()}else v()},Xn=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},Gs=(d,p,m)=>{const{bum:_,scope:E,update:v,subTree:x,um:P}=d;_&&fi(_),E.stop(),v&&(v.active=!1,Zt(x,d,p,m)),P&&te(P,p),te(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Bt=(d,p,m,_=!1,E=!1,v=0)=>{for(let x=v;x<d.length;x++)Zt(d[x],p,m,_,E)},A=d=>d.shapeFlag&6?A(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,p,m)=>{d==null?p._vnode&&Zt(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),iu(),Lf(),p._vnode=d},D={p:I,um:Zt,m:Re,r:Jn,mt:Fr,mc:Te,pc:st,pbc:se,n:A,o:e};let L,it;return t&&([L,it]=t(D)),{render:M,hydrate:L,createApp:X_(M,L)}}function Cn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function sd(e,t,n=!1){const r=e.children,s=t.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=nn(s[i]),a.el=o.el),n||sd(o,a)),a.type===oo&&(a.el=o.el)}}function oA(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const aA=e=>e.__isTeleport,Jt=Symbol.for("v-fgt"),oo=Symbol.for("v-txt"),Un=Symbol.for("v-cmt"),Qo=Symbol.for("v-stc"),Xr=[];let me=null;function Rt(e=!1){Xr.push(me=e?null:[])}function cA(){Xr.pop(),me=Xr[Xr.length-1]||null}let ps=1;function mu(e){ps+=e}function id(e){return e.dynamicChildren=ps>0?me||or:null,cA(),ps>0&&me&&me.push(e),e}function Ht(e,t,n,r,s,i){return id(G(e,t,n,r,s,i,!0))}function Nc(e,t,n,r,s){return id(Pt(e,t,n,r,s,!0))}function Va(e){return e?e.__v_isVNode===!0:!1}function Br(e,t){return e.type===t.type&&e.key===t.key}const ao="__vInternal",od=({key:e})=>e??null,gi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?wt(e)||Ft(e)||J(e)?{i:he,r:e,k:t,f:!!n}:e:null);function G(e,t=null,n=null,r=0,s=null,i=e===Jt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&od(t),ref:t&&gi(t),scopeId:so,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:he};return a?(Fc(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=wt(n)?8:16),ps>0&&!o&&me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&me.push(c),c}const Pt=lA;function lA(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Yf)&&(e=Un),Va(e)){const a=mr(e,t,!0);return n&&Fc(a,n),ps>0&&!i&&me&&(a.shapeFlag&6?me[me.indexOf(e)]=a:me.push(a)),a.patchFlag|=-2,a}if(IA(e)&&(e=e.__vccOpts),t){t=uA(t);let{class:a,style:c}=t;a&&!wt(a)&&(t.class=Ec(a)),pt(c)&&(Df(c)&&!q(c)&&(c=Vt({},c)),t.style=yc(c))}const o=wt(e)?1:b_(e)?128:aA(e)?64:pt(e)?4:J(e)?2:0;return G(e,t,n,r,s,o,i,!0)}function uA(e){return e?Df(e)||ao in e?Vt({},e):e:null}function mr(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?dA(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&od(a),ref:t&&t.ref?n&&s?q(s)?s.concat(gi(t)):[s,gi(t)]:gi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Jt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mr(e.ssContent),ssFallback:e.ssFallback&&mr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function hA(e=" ",t=0){return Pt(oo,null,e,t)}function fA(e="",t=!1){return t?(Rt(),Nc(Un,null,e)):Pt(Un,null,e)}function Se(e){return e==null||typeof e=="boolean"?Pt(Un):q(e)?Pt(Jt,null,e.slice()):typeof e=="object"?nn(e):Pt(oo,null,String(e))}function nn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mr(e)}function Fc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Fc(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(ao in t)?t._ctx=he:s===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:he},n=32):(t=String(t),r&64?(n=16,t=[hA(t)]):n=8);e.children=t,e.shapeFlag|=n}function dA(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ec([t.class,r.class]));else if(s==="style")t.style=yc([t.style,r.style]);else if(Gi(s)){const i=t[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Pe(e,t,n,r=null){Ee(e,t,7,[n,r])}const pA=Xf();let gA=0;function mA(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||pA,i={uid:gA++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new mf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:td(r,s),emitsOptions:Uf(r,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:r.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=w_.bind(null,i),e.ce&&e.ce(i),i}let Nt=null,Lc,tr,_u="__VUE_INSTANCE_SETTERS__";(tr=Ea()[_u])||(tr=Ea()[_u]=[]),tr.push(e=>Nt=e),Lc=e=>{tr.length>1?tr.forEach(t=>t(e)):tr[0](e)};const _r=e=>{Lc(e),e.scope.on()},Fn=()=>{Nt&&Nt.scope.off(),Lc(null)};function ad(e){return e.vnode.shapeFlag&4}let gs=!1;function _A(e,t=!1){gs=t;const{props:n,children:r}=e.vnode,s=ad(e);Z_(e,n,s,t),nA(e,r);const i=s?AA(e,t):void 0;return gs=!1,i}function AA(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Pc(new Proxy(e.ctx,Q_));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?EA(e):null;_r(e),br();const i=ln(r,e,0,[e.props,s]);if(Dr(),Fn(),hf(i)){if(i.then(Fn,Fn),t)return i.then(o=>{Au(e,o,t)}).catch(o=>{no(o,e,0)});e.asyncDep=i}else Au(e,i,t)}else cd(e,t)}function Au(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pt(t)&&(e.setupState=Mf(t)),cd(e,n)}let yu;function cd(e,t,n){const r=e.type;if(!e.render){if(!t&&yu&&!r.render){const s=r.template||Mc(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Vt(Vt({isCustomElement:i,delimiters:a},o),c);r.render=yu(s,l)}}e.render=r.render||Ae}_r(e),br(),z_(e),Dr(),Fn()}function yA(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ne(e,"get","$attrs"),t[n]}}))}function EA(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return yA(e)},slots:e.slots,emit:e.emit,expose:t}}function co(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Mf(Pc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jr)return Jr[n](e)},has(t,n){return n in t||n in Jr}}))}function vA(e,t=!0){return J(e)?e.displayName||e.name:e.name||t&&e.__name}function IA(e){return J(e)&&"__vccOpts"in e}const ge=(e,t)=>A_(e,t,gs);function ld(e,t,n){const r=arguments.length;return r===2?pt(t)&&!q(t)?Va(t)?Pt(e,null,[t]):Pt(e,t):Pt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Va(n)&&(n=[n]),Pt(e,t,n))}const TA=Symbol.for("v-scx"),wA=()=>ke(TA),RA="3.3.4",CA="http://www.w3.org/2000/svg",bn=typeof document<"u"?document:null,Eu=bn&&bn.createElement("template"),PA={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?bn.createElementNS(CA,e):bn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>bn.createTextNode(e),createComment:e=>bn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Eu.innerHTML=r?`<svg>${e}</svg>`:e;const a=Eu.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function SA(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bA(e,t,n){const r=e.style,s=wt(n);if(n&&!s){if(t&&!wt(t))for(const i in t)n[i]==null&&xa(r,i,"");for(const i in n)xa(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const vu=/\s*!important$/;function xa(e,t,n){if(q(n))n.forEach(r=>xa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=DA(e,t);vu.test(n)?e.setProperty(Sr(r),n.replace(vu,""),"important"):e[r]=n}}const Iu=["Webkit","Moz","ms"],zo={};function DA(e,t){const n=zo[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return zo[t]=r;r=Xi(r);for(let s=0;s<Iu.length;s++){const i=Iu[s]+r;if(i in e)return zo[t]=i}return t}const Tu="http://www.w3.org/1999/xlink";function VA(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Tu,t.slice(6,t.length)):e.setAttributeNS(Tu,t,n);else{const i=Nm(t);n==null||i&&!pf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xA(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=pf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Dn(e,t,n,r){e.addEventListener(t,n,r)}function kA(e,t,n,r){e.removeEventListener(t,n,r)}function MA(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=OA(t);if(r){const l=i[t]=LA(r,s);Dn(e,a,l,c)}else o&&(kA(e,a,o,c),i[t]=void 0)}}const wu=/(?:Once|Passive|Capture)$/;function OA(e){let t;if(wu.test(e)){t={};let r;for(;r=e.match(wu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Sr(e.slice(2)),t]}let Ko=0;const NA=Promise.resolve(),FA=()=>Ko||(NA.then(()=>Ko=0),Ko=Date.now());function LA(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(BA(r,n.value),t,5,[r])};return n.value=e,n.attached=FA(),n}function BA(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ru=/^on[a-z]/,UA=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?SA(e,r,s):t==="style"?bA(e,n,r):Gi(t)?mc(t)||MA(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$A(e,t,r,s))?xA(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),VA(e,t,r,s))};function $A(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ru.test(t)&&J(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ru.test(t)&&wt(n)?!1:t in e}const Ci=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>fi(t,n):t};function jA(e){e.target.composing=!0}function Cu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const qA={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=Ci(s);const i=r||s.props&&s.props.type==="number";Dn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=vi(a)),e._assign(a)}),n&&Dn(e,"change",()=>{e.value=e.value.trim()}),t||(Dn(e,"compositionstart",jA),Dn(e,"compositionend",Cu),Dn(e,"change",Cu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=Ci(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&vi(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},HA={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Yi(t);Dn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?vi(Pi(o)):Pi(o));e._assign(e.multiple?s?new Set(i):i:i[0])}),e._assign=Ci(r)},mounted(e,{value:t}){Pu(e,t)},beforeUpdate(e,t,n){e._assign=Ci(n)},updated(e,{value:t}){Pu(e,t)}};function Pu(e,t){const n=e.multiple;if(!(n&&!q(t)&&!Yi(t))){for(let r=0,s=e.options.length;r<s;r++){const i=e.options[r],o=Pi(i);if(n)q(t)?i.selected=Lm(t,o)>-1:i.selected=t.has(o);else if(Zi(Pi(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Pi(e){return"_value"in e?e._value:e.value}const QA=Vt({patchProp:UA},PA);let Su;function zA(){return Su||(Su=sA(QA))}const KA=(...e)=>{const t=zA().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=WA(r);if(!s)return;const i=t._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function WA(e){return wt(e)?document.querySelector(e):e}var GA=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const YA=Symbol();var bu;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(bu||(bu={}));function JA(){const e=Bm(!0),t=e.run(()=>sn({}));let n=[],r=[];const s=Pc({install(i){s._a=i,i.provide(YA,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!GA?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const nr=typeof window<"u";function XA(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ct=Object.assign;function Wo(e,t){const n={};for(const r in t){const s=t[r];n[r]=ve(s)?s.map(e):e(s)}return n}const Zr=()=>{},ve=Array.isArray,ZA=/\/$/,ty=e=>e.replace(ZA,"");function Go(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=sy(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function ey(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Du(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ny(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ar(t.matched[r],n.matched[s])&&ud(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ar(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ud(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ry(e[n],t[n]))return!1;return!0}function ry(e,t){return ve(e)?Vu(e,t):ve(t)?Vu(t,e):e===t}function Vu(e,t){return ve(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function sy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ms;(function(e){e.pop="pop",e.push="push"})(ms||(ms={}));var ts;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ts||(ts={}));function iy(e){if(!e)if(nr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ty(e)}const oy=/^[^#]+#/;function ay(e,t){return e.replace(oy,"#")+t}function cy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const lo=()=>({left:window.pageXOffset,top:window.pageYOffset});function ly(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=cy(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xu(e,t){return(history.state?history.state.position-t:-1)+e}const ka=new Map;function uy(e,t){ka.set(e,t)}function hy(e){const t=ka.get(e);return ka.delete(e),t}let fy=()=>location.protocol+"//"+location.host;function hd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Du(c,"")}return Du(n,e)+r+s}function dy(e,t,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=hd(e,location),y=n.value,I=t.value;let R=0;if(f){if(n.value=g,t.value=f,o&&o===y){o=null;return}R=I?f.position-I.position:0}else r(g);s.forEach(S=>{S(n.value,y,{delta:R,type:ms.pop,direction:R?R>0?ts.forward:ts.back:ts.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ct({},f.state,{scroll:lo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function ku(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?lo():null}}function py(e){const{history:t,location:n}=window,r={value:hd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:fy()+e+c;try{t[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ct({},t.state,ku(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ct({},s.value,t.state,{forward:c,scroll:lo()});i(u.current,u,!0);const h=ct({},ku(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function gy(e){e=iy(e);const t=py(e),n=dy(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ct({location:"",base:e,go:r,createHref:ay.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function my(e){return typeof e=="string"||e&&typeof e=="object"}function fd(e){return typeof e=="string"||typeof e=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dd=Symbol("");var Mu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Mu||(Mu={}));function yr(e,t){return ct(new Error,{type:e,[dd]:!0},t)}function Ue(e,t){return e instanceof Error&&dd in e&&(t==null||!!(e.type&t))}const Ou="[^/]+?",_y={sensitive:!1,strict:!1,start:!0,end:!0},Ay=/[.+*?^${}()[\]/\\]/g;function yy(e,t){const n=ct({},_y,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Ay,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:I,optional:R,regexp:S}=f;i.push({name:y,repeatable:I,optional:R});const k=S||Ou;if(k!==Ou){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+O.message)}}let H=I?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(H=R&&l.length<2?`(?:/${H})`:"/"+H),R&&(H+="?"),s+=H,g+=20,R&&(g+=-8),I&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:I,optional:R}=g,S=y in l?l[y]:"";if(ve(S)&&!I)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=ve(S)?S.join("/"):S;if(!k)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ey(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function vy(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Ey(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Nu(r))return 1;if(Nu(s))return-1}return s.length-r.length}function Nu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Iy={type:0,value:""},Ty=/[a-zA-Z0-9_]/;function wy(e){if(!e)return[[]];if(e==="/")return[[Iy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Ty.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Ry(e,t,n){const r=yy(wy(e.path),n),s=ct(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Cy(e,t){const n=[],r=new Map;t=Bu({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=Py(u);y.aliasOf=f&&f.record;const I=Bu(t,u),R=[y];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of H)R.push(ct({},y,{components:f?f.record.components:y.components,path:O,aliasOf:f?f.record:y}))}let S,k;for(const H of R){const{path:O}=H;if(h&&O[0]!=="/"){const ft=h.record.path,at=ft[ft.length-1]==="/"?"":"/";H.path=h.record.path+(O&&at+O)}if(S=Ry(H,h,I),f?f.alias.push(S):(k=k||S,k!==S&&k.alias.push(S),g&&u.name&&!Lu(S)&&o(u.name)),y.children){const ft=y.children;for(let at=0;at<ft.length;at++)i(ft[at],S,f&&f.children[at])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return k?()=>{o(k)}:Zr}function o(u){if(fd(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&vy(u,n[h])>=0&&(u.record.path!==n[h].record.path||!pd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Lu(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},y,I;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw yr(1,{location:u});I=f.record.name,g=ct(Fu(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Fu(u.params,f.keys.map(k=>k.name))),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(k=>k.re.test(y)),f&&(g=f.parse(y),I=f.record.name);else{if(f=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw yr(1,{location:u,currentLocation:h});I=f.record.name,g=ct({},h.params,u.params),y=f.stringify(g)}const R=[];let S=f;for(;S;)R.unshift(S.record),S=S.parent;return{name:I,path:y,params:g,matched:R,meta:by(R)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Fu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Py(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Sy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Sy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Lu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function by(e){return e.reduce((t,n)=>ct(t,n.meta),{})}function Bu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function pd(e,t){return t.children.some(n=>n===e||pd(e,n))}const gd=/#/g,Dy=/&/g,Vy=/\//g,xy=/=/g,ky=/\?/g,md=/\+/g,My=/%5B/g,Oy=/%5D/g,_d=/%5E/g,Ny=/%60/g,Ad=/%7B/g,Fy=/%7C/g,yd=/%7D/g,Ly=/%20/g;function Bc(e){return encodeURI(""+e).replace(Fy,"|").replace(My,"[").replace(Oy,"]")}function By(e){return Bc(e).replace(Ad,"{").replace(yd,"}").replace(_d,"^")}function Ma(e){return Bc(e).replace(md,"%2B").replace(Ly,"+").replace(gd,"%23").replace(Dy,"%26").replace(Ny,"`").replace(Ad,"{").replace(yd,"}").replace(_d,"^")}function Uy(e){return Ma(e).replace(xy,"%3D")}function $y(e){return Bc(e).replace(gd,"%23").replace(ky,"%3F")}function jy(e){return e==null?"":$y(e).replace(Vy,"%2F")}function Si(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function qy(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(md," "),o=i.indexOf("="),a=Si(o<0?i:i.slice(0,o)),c=o<0?null:Si(i.slice(o+1));if(a in t){let l=t[a];ve(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Uu(e){let t="";for(let n in e){const r=e[n];if(n=Uy(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ve(r)?r.map(i=>i&&Ma(i)):[r&&Ma(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Hy(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Qy=Symbol(""),$u=Symbol(""),Uc=Symbol(""),$c=Symbol(""),Oa=Symbol("");function Ur(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function rn(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(yr(4,{from:n,to:t})):h instanceof Error?a(h):my(h)?a(yr(2,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Yo(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(zy(a)){const l=(a.__vccOpts||a)[t];l&&s.push(rn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=XA(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&rn(f,n,r,i,o)()}))}}return s}function zy(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ju(e){const t=ke(Uc),n=ke($c),r=ge(()=>t.resolve(ye(e.to))),s=ge(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ar.bind(null,u));if(f>-1)return f;const g=qu(c[l-2]);return l>1&&qu(u)===g&&h[h.length-1].path!==g?h.findIndex(Ar.bind(null,c[l-2])):f}),i=ge(()=>s.value>-1&&Gy(n.params,r.value.params)),o=ge(()=>s.value>-1&&s.value===n.matched.length-1&&ud(n.params,r.value.params));function a(c={}){return Wy(c)?t[ye(e.replace)?"replace":"push"](ye(e.to)).catch(Zr):Promise.resolve()}return{route:r,href:ge(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ky=Hf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ju,setup(e,{slots:t}){const n=eo(ju(e)),{options:r}=ke(Uc),s=ge(()=>({[Hu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:ld("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ed=Ky;function Wy(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gy(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hu=(e,t,n)=>e??t??n,Yy=Hf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ke(Oa),s=ge(()=>e.route||r.value),i=ke($u,0),o=ge(()=>{let l=ye(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ge(()=>s.value.matched[o.value]);pi($u,ge(()=>o.value+1)),pi(Qy,a),pi(Oa,s);const c=sn();return ur(()=>[c.value,a.value,e.name],([l,u,h],[f,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Ar(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return Qu(n.default,{Component:f,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=ld(f,ct({},y,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Qu(n.default,{Component:R,route:l})||R}}});function Qu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const vd=Yy;function Jy(e){const t=Cy(e.routes,e),n=e.parseQuery||qy,r=e.stringifyQuery||Uu,s=e.history,i=Ur(),o=Ur(),a=Ur(),c=p_(en);let l=en;nr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wo.bind(null,A=>""+A),h=Wo.bind(null,jy),f=Wo.bind(null,Si);function g(A,M){let D,L;return fd(A)?(D=t.getRecordMatcher(A),L=M):L=A,t.addRoute(L,D)}function y(A){const M=t.getRecordMatcher(A);M&&t.removeRoute(M)}function I(){return t.getRoutes().map(A=>A.record)}function R(A){return!!t.getRecordMatcher(A)}function S(A,M){if(M=ct({},M||c.value),typeof A=="string"){const m=Go(n,A,M.path),_=t.resolve({path:m.path},M),E=s.createHref(m.fullPath);return ct(m,_,{params:f(_.params),hash:Si(m.hash),redirectedFrom:void 0,href:E})}let D;if("path"in A)D=ct({},A,{path:Go(n,A.path,M.path).path});else{const m=ct({},A.params);for(const _ in m)m[_]==null&&delete m[_];D=ct({},A,{params:h(m)}),M.params=h(M.params)}const L=t.resolve(D,M),it=A.hash||"";L.params=u(f(L.params));const d=ey(r,ct({},A,{hash:By(it),path:L.path})),p=s.createHref(d);return ct({fullPath:d,hash:it,query:r===Uu?Hy(A.query):A.query||{}},L,{redirectedFrom:void 0,href:p})}function k(A){return typeof A=="string"?Go(n,A,c.value.path):ct({},A)}function H(A,M){if(l!==A)return yr(8,{from:M,to:A})}function O(A){return re(A)}function ft(A){return O(ct(k(A),{replace:!0}))}function at(A){const M=A.matched[A.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let L=typeof D=="function"?D(A):D;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=k(L):{path:L},L.params={}),ct({query:A.query,hash:A.hash,params:"path"in L?{}:A.params},L)}}function re(A,M){const D=l=S(A),L=c.value,it=A.state,d=A.force,p=A.replace===!0,m=at(D);if(m)return re(ct(k(m),{state:typeof m=="object"?ct({},it,m.state):it,force:d,replace:p}),M||D);const _=D;_.redirectedFrom=M;let E;return!d&&ny(r,L,D)&&(E=yr(16,{to:_,from:L}),Re(L,L,!0,!1)),(E?Promise.resolve(E):se(_,L)).catch(v=>Ue(v)?Ue(v,2)?v:Ze(v):st(v,_,L)).then(v=>{if(v){if(Ue(v,2))return re(ct({replace:p},k(v.to),{state:typeof v.to=="object"?ct({},it,v.to.state):it,force:d}),M||_)}else v=wn(_,L,!0,p,it);return Xe(_,L,v),v})}function Te(A,M){const D=H(A,M);return D?Promise.reject(D):Promise.resolve()}function Je(A){const M=Xn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(A):A()}function se(A,M){let D;const[L,it,d]=Xy(A,M);D=Yo(L.reverse(),"beforeRouteLeave",A,M);for(const m of L)m.leaveGuards.forEach(_=>{D.push(rn(_,A,M))});const p=Te.bind(null,A,M);return D.push(p),Bt(D).then(()=>{D=[];for(const m of i.list())D.push(rn(m,A,M));return D.push(p),Bt(D)}).then(()=>{D=Yo(it,"beforeRouteUpdate",A,M);for(const m of it)m.updateGuards.forEach(_=>{D.push(rn(_,A,M))});return D.push(p),Bt(D)}).then(()=>{D=[];for(const m of d)if(m.beforeEnter)if(ve(m.beforeEnter))for(const _ of m.beforeEnter)D.push(rn(_,A,M));else D.push(rn(m.beforeEnter,A,M));return D.push(p),Bt(D)}).then(()=>(A.matched.forEach(m=>m.enterCallbacks={}),D=Yo(d,"beforeRouteEnter",A,M),D.push(p),Bt(D))).then(()=>{D=[];for(const m of o.list())D.push(rn(m,A,M));return D.push(p),Bt(D)}).catch(m=>Ue(m,8)?m:Promise.reject(m))}function Xe(A,M,D){a.list().forEach(L=>Je(()=>L(A,M,D)))}function wn(A,M,D,L,it){const d=H(A,M);if(d)return d;const p=M===en,m=nr?history.state:{};D&&(L||p?s.replace(A.fullPath,ct({scroll:p&&m&&m.scroll},it)):s.push(A.fullPath,it)),c.value=A,Re(A,M,D,p),Ze()}let we;function Fr(){we||(we=s.listen((A,M,D)=>{if(!Gs.listening)return;const L=S(A),it=at(L);if(it){re(ct(it,{replace:!0}),L).catch(Zr);return}l=L;const d=c.value;nr&&uy(xu(d.fullPath,D.delta),lo()),se(L,d).catch(p=>Ue(p,12)?p:Ue(p,2)?(re(p.to,L).then(m=>{Ue(m,20)&&!D.delta&&D.type===ms.pop&&s.go(-1,!1)}).catch(Zr),Promise.reject()):(D.delta&&s.go(-D.delta,!1),st(p,L,d))).then(p=>{p=p||wn(L,d,!1),p&&(D.delta&&!Ue(p,8)?s.go(-D.delta,!1):D.type===ms.pop&&Ue(p,20)&&s.go(-1,!1)),Xe(L,d,p)}).catch(Zr)}))}let Yn=Ur(),bt=Ur(),ht;function st(A,M,D){Ze(A);const L=bt.list();return L.length?L.forEach(it=>it(A,M,D)):console.error(A),Promise.reject(A)}function Be(){return ht&&c.value!==en?Promise.resolve():new Promise((A,M)=>{Yn.add([A,M])})}function Ze(A){return ht||(ht=!A,Fr(),Yn.list().forEach(([M,D])=>A?D(A):M()),Yn.reset()),A}function Re(A,M,D,L){const{scrollBehavior:it}=e;if(!nr||!it)return Promise.resolve();const d=!D&&hy(xu(A.fullPath,0))||(L||!D)&&history.state&&history.state.scroll||null;return Nf().then(()=>it(A,M,d)).then(p=>p&&ly(p)).catch(p=>st(p,A,M))}const Zt=A=>s.go(A);let Jn;const Xn=new Set,Gs={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:R,getRoutes:I,resolve:S,options:e,push:O,replace:ft,go:Zt,back:()=>Zt(-1),forward:()=>Zt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:bt.add,isReady:Be,install(A){const M=this;A.component("RouterLink",Ed),A.component("RouterView",vd),A.config.globalProperties.$router=M,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),nr&&!Jn&&c.value===en&&(Jn=!0,O(s.location).catch(it=>{}));const D={};for(const it in en)Object.defineProperty(D,it,{get:()=>c.value[it],enumerable:!0});A.provide(Uc,M),A.provide($c,Sf(D)),A.provide(Oa,c);const L=A.unmount;Xn.add(A),A.unmount=function(){Xn.delete(A),Xn.size<1&&(l=en,we&&we(),we=null,c.value=en,Jn=!1,ht=!1),L()}}};function Bt(A){return A.reduce((M,D)=>M.then(()=>Je(D)),Promise.resolve())}return Gs}function Xy(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Ar(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Ar(l,c))||s.push(c))}return[n,r,s]}function Zy(){return ke($c)}const En=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},tE={class:"menu"},eE=["title"],nE=["src"],rE={__name:"Menu",setup(e){const t=Zy();console.log(t.path);const n=[{path:"/",name:"home",img:"/Flex/src/assets/img/plan"},{path:"/stats",name:"stats",img:"/Flex/src/assets/img/stats"},{path:"/user",name:"user",img:"/Flex/src/assets/img/me"}];return(r,s)=>(Rt(),Ht("nav",tE,[(Rt(),Ht(Jt,null,ds(n,i=>Pt(ye(Ed),{to:i.path},{default:kc(()=>[G("abbr",{class:"center",title:i.name},[G("img",{src:ye(t).path==i.path?i.img+".png":i.img+"W.png",alt:"elm.name"},null,8,nE)],8,eE)]),_:2},1032,["to"])),64))]))}},sE=En(rE,[["__scopeId","data-v-cc5af806"]]);const iE={class:"view"},oE={class:"footer"},aE={__name:"App",setup(e){return(t,n)=>(Rt(),Ht(Jt,null,[G("div",iE,[Pt(ye(vd),null,{default:kc(({Component:r,route:s})=>[(Rt(),Nc(q_(r)))]),_:1})]),G("div",oE,[Pt(sE)])],64))}},cE=En(aE,[["__scopeId","data-v-24ef64b6"]]),lE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA2eSURBVHhe7d3bjttGFgXQli+JE8Tzu/Yn2N8bZJyLnZ5SRCB2j9ySKF7q1F4LMEg9BAjI6jq7TpHSAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAOg7TEbr2+OHhcTqF7h3em1vpn0HKrhR2kgkK7MngYxMKPVxPMGALBhmrUPBhOQIBazCoWISCD9sRCFiCQcQsCj70QyBgDoOGqyn60D9hgGsZKFyk8EM9ggCXGCCcpejDOIQBzjEo+IbCD+MSBPiawcDRi1b4v0znQABhAAMgmNU+IAjkcuMDKfzAU4JAHjc8iMIPXCII5HgxHRnbcY9f8QcumuYKtSGApDc4hR+YSzdgbG7uoBR+YCmCwJi0ecbzWvEHljTNKa9OnxiFVDcQhR9Ym27AONzIASj8wNYEgfrcwOIUf2AvQkBtngGo66XiD+xpmoNenj5RjfRWkMIP9EY3oB43rBjFH+iVEFCLLYA6tPyBrtkSqEVaK0DhB6rRDeifG9Q5xR+oSgjom5vTMcUfqE4I6Jcb0ynFHxiFENAnDwH256D4AyOZ5jT1pjNuSF+OP+Tz93QOMIw2t31pBz8o1BEBoB8/tD+QP6dzgOG0Oe6vdnhz+sTeBIA+/Nz+MP6YzgGG1ea6T+3wy+kTexIA9ve2/UH8Np0DDK/Neb+2w9vTJ/biycx9HVf+ij8Q6fD+n06AOXAnAsB+jnv+2v5AtBYCjs8EmAt3IADs4/i9/p+nc4BoLQS8bgdz4sYEgO29aMX/+DoMAJMWAo4/IuQ16A0JABtrxd+X/ACc4RsDt+Vib0jxB3ieELAdF3ojij/AdYSAbbjIG1D8AW4jBKzPBV6Z4g8wjxCwLt8EuC7XF2C+45sBrES6WpHVP8B9dAHW48KuRPEHWIYQsA4XdQWKP8CyhIDl2aNenmsKsDzPAyxMolqY1T/AOnQBluViLkjxB1iXELAc7eqFKP4Am/hpOnInAQCAMtpi67/TKXfSSlmA1T/AtmwF3E8H4H6vpiMA2zH33kmCupPVP8A+dAHu4+LdQfEH2JcQMJ8tAAAIJDnNZPUP0AddgHl0AOZx3QD6IQDM4KLNYPUP0BddgNu5YDdS/AH6JATcRisbAAJJSzew+gfomy7A9XQAACCQpHQlq3+AGnQBrqMDAACBBIDrSJMAdahtV1DYrqD9D1CLbYDLpCQACCQhXWD1D1CTLsDzdAAAIJB09Ayrf4DadAG+TwcAAAIJAAAQSGvkO7T/AcZgG+A8HQAACCQAnGH1D8DoBAAAhmZRd54AAACBPBjxhKQIMCYPA35LBwAAAgkAABBIAACAQPZDvmL/H2BsngP4lw4AAAQSAAAgkAAAAIHshUzs/wNk8BzAiQ4AAAQSAAAgkAAAAIHsgzT2/wGyeA5ABwAAIgkAABBIAACAQAIAAAQSAAAgUPxTkN4AAMiU/iaADgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAJDo3eO3/4A4vgfA9wCQ4NYi/9EPhTI+3wMAjGvuCl9nAIYXHQCs/hnaEgVcCIBhRbc/BACGtFbRti3AgJK3AWwBwEjWXLHrBsBQBAAYxRYFWgiAYQgAABBIAIARbLky1wWAIQgAUN0eBVkIgPIEAAAIJABAZXuuxHUBoDQBAAACCQAAEEgAAIBAAgBU1cMevOcAoCwBAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAoMN0jPT44eFxOmU079xaFvQxeqoc2uF9bh0UABiDgs+WBIJhJAcAWwDUdiz8ij9bM+4YgABAXSZg9mYMUpgAQD1WX/TEeKQoAYBaTLT0ytikGAGAOkyw9M4YpRABAAACCQDUYGVFFcYqRQgA9M+ESjXGLAUIAAAQSACgb1ZSVGXs0jkBAAACCQAAEEgAAIBAAgD9sodKdcYwHRMAACCQAAAAgQQAAAgkANCvj4fpBIoyhumYAAAAgQQAAAgkAABAIAGAvtlDpSpjl84JAAAQSACgf1ZSVGPMUoAAQA0mVKowVilCAACAQAIAdVhZ0TtjlEIEAGoxwdIrY5NiBADqOU60Jlt6YTxSlABAXSZd9mYMUpgAQG1WX+zBuGMA0SP48cPD43TKaN65tSxIsR/W4X1uHRQAoKpeQo7iSGHJAcAWAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAAAQSAAAgkAAAAIEEAAAIJAAAQCABAAACCQAAEEgAAIBAAgAABBIAACCQAAAAgQQAAAgkAABAIAEAAAIJAAAQSAAAgEACAAAEEgAAIJAAAACBBAAACCQAAEAgAQAAAgkAABBIAACAQAIAVPXxMJ3sqIf/B2AWAQAAAgkAABBIAACAQAIAVLbnHrz9fyhNAACAQAIAVLfHStzqH8oTAGAEWxZkxR+GIAAAQCABAEaxxcrc6h+GIQDASNYs0Io/DCX6L/rxw8PjdArjebfQ8Fb4GdThfXYNjO4ApN98BrdE4Vb8YVi2AGBkxwI+p4jP/e+AMuL/wm0DEOnp9oBiT6D0LrAAIAAARPIMAAAQRwAAgEACAAAEEgAAIJAAAACBBAAACOTl38argABZfBOsDgAARBIAACCQAAAAgQQAAAgkAABAIG8BTLwJAJDBGwAnOgAAEEgAAIBAAgAABLIP8hXPAQCMzf7/v3QAACCQAAAAgQQAAAhkL+QJzwEAjMn+/7d0AAAgkAAAAIEEAAAIZD/kDM8BAIzF/v//0wEAgEACAABDs/o/TwA4w2ABYHQCAAAEstJ9hocBAWrT0f0+HQAACCQAAEAgrZELbAMA1KT9/zwdAAAIJB1dQRcAoBar/8t0AAAgkABwhZYkXSeAIszZ13GRrmMLAKAOc/YVBAAACOQhiRt4GBCgbx7+u54OAAAEkpRupAsA0Cer/9voAABAIGlpBl0AgL5Y/d9OB2AG75gC9MOcPI+LNo8OAEA/zMkzaJncwVYAwL60/ufTAQCAQJLTnXQBAPZh9X8fHYA7tQH4ejoFYCNt7n01nTKTAHC/z9MRgO18mY7MpH2yEFsBANvQ+l+GDgAAZbTi/9N0yp0EgIVIpACb+H06cidFa2G2AgDWYaG1LB2AhbUB+nI6BWAhbW711P/CBIDl/T0dAViOp/4Xpp2yElsBAMvQ+l+Hi7oiIQDgPor/emwBrMjzAADz2fdflwCwLs8DAMxn339FWisbsBUAcBut//W5wBsRAgCuo/hvw0XekBAA8DzFfzsu9MaEAIDzFP9teQhwY22AezMA4Ik2N6pHG3PBt/d3G+hebQGYtDnxdTvojm5MANjHlzbgf5zOAWK1ufBNO3w+fWJLAsB+/mwD/+fpHCBOmwN/aYc/Tp/YmgCwr0/tD+A/0zlAjDb3vW2H306f2IMnLvvw4+OHh9+nc4ChTd3PT6dP7EUA6McPLQRohQFDa8X/uOdvruuAANCXVy0E/DWdAwylFf/jG1C+378TAkB/Di0E+BEhYCit+B+/A8Xc1hEBoFO+MRAYRSv+ak2H3JSOCQFAdYp/v9yYzgkBQFWKf9/cnAKEAKAaxb9/blAdHg4EuudhvzoEgGJ0A4BeWfXX4mYVJAQAvVH863HD6rIlAOxOy78uAaA43QBgL1b9tbl5Y3jTgoAf1gA20Qr/8Wd8/ZJfcQLAQHQDgLVZ9Y/DjRzPyxYEPk/nAItohd8P+QxGABiUbgCwFKv+MbmpgxMEgLkU/rG5uRm8MghcrRX+F+1g8TA4ASCIbgBwiVV/Djc6kCAAPKXw53HDgwkCgMKfy43nH8IAZFH4MQD4hiAA41L0+ZrBwFmCAIxD4eccg4KLhAGoR9HnEgOEmwgD0C9Fn1sYLMwiCEA/FH7mMGhYhEAA21HwWYJBxCoEAliOgs8aDCo2IRDA9RR8tmCQsSvBgGQKPXsy+ChBUKAShR0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFgPD/8DZqUz3JyENfkAAAAASUVORK5CYII=";const jc=e=>(Vc("data-v-b5294e11"),e=e(),xc(),e),uE={class:"center exeCard"},hE={class:"text-2xl font-bold"},fE={class:"props"},dE=jc(()=>G("h2",null,"Series:",-1)),pE=jc(()=>G("h2",null,"Reps:",-1)),gE=jc(()=>G("div",null,[G("h2",null,"Type:"),G("p",null,"Power")],-1)),mE={__name:"ExeCard",props:{name:"Exercise",series:0,reps:"0"},setup(e){const t=e;return(n,r)=>(Rt(),Ht("div",uE,[G("h3",hE,an(t.name),1),G("div",fE,[G("div",null,[dE,G("p",null,an(t.series),1)]),G("div",null,[pE,G("p",null,an(t.reps),1)]),gE])]))}},_E=En(mE,[["__scopeId","data-v-b5294e11"]]),AE="/Flex/assets/addExe-bbc541e7.png";const uo=e=>(Vc("data-v-977b51c1"),e=e(),xc(),e),yE={class:"modal"},EE=uo(()=>G("header",{class:"center"},[G("img",{src:AE,alt:"addWorkout"})],-1)),vE={class:"card"},IE=uo(()=>G("h1",{class:"title"},"Create a new workout",-1)),TE=uo(()=>G("h3",null,"Name:",-1)),wE={class:"frequency"},RE=uo(()=>G("h1",null,"Frequency:",-1)),CE={class:"days"},PE={class:"day"},SE={__name:"ModalRoutine",props:{onCancel:"closeModal",onAccept:"accept"},setup(e){const t=e;let n=sn("");const r=["M","T","W","TH","F","ST","SN"],s=()=>{t.onCancel(),n.value=""},i=()=>{t.onAccept(n.value)};return(o,a)=>(Rt(),Ht("div",yE,[EE,G("div",vE,[IE,G("section",null,[TE,qf(G("input",{class:"name",type:"text",placeholder:"Ex: Push B","onUpdate:modelValue":a[0]||(a[0]=c=>Ft(n)?n.value=c:n=c)},null,512),[[qA,ye(n)]])]),G("section",wE,[RE,G("div",CE,[(Rt(),Ht(Jt,null,ds(r,c=>G("button",PE,an(c),1)),64))])]),G("section",{class:"buttons center"},[G("button",{onClick:i},"ACCEPT"),G("button",{onClick:s},"CANCEL")])])]))}},bE=En(SE,[["__scopeId","data-v-977b51c1"]]);/**
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
 */const Id=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},DE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Id(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):DE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new VE;const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class VE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xE=function(e){const t=Id(e);return Td.encodeByteArray(t,!0)},bi=function(e){return xE(e).replace(/\./g,"")},kE=function(e){try{return Td.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ME(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OE=()=>ME().__FIREBASE_DEFAULTS__,NE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},FE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&kE(e[1]);return t&&JSON.parse(t)},wd=()=>{try{return OE()||NE()||FE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},LE=e=>{var t,n;return(n=(t=wd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},BE=e=>{const t=LE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Rd=()=>{var e;return(e=wd())===null||e===void 0?void 0:e.config};/**
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
 */class UE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function $E(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[bi(JSON.stringify(n)),bi(JSON.stringify(o)),a].join(".")}function jE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Cd(){try{return typeof indexedDB=="object"}catch{return!1}}function Pd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function qE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const HE="FirebaseError";class vn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=HE,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ho.prototype.create)}}class ho{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?QE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function QE(e,t){return e.replace(zE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const zE=/\{\$([^}]+)}/g;function Di(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(zu(i)&&zu(o)){if(!Di(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zu(e){return e!==null&&typeof e=="object"}/**
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
 */const KE=1e3,WE=2,GE=4*60*60*1e3,YE=.5;function Ku(e,t=KE,n=WE){const r=t*Math.pow(n,e),s=Math.round(YE*r*(Math.random()-.5)*2);return Math.min(GE,r+s)}/**
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
 */function gn(e){return e&&e._delegate?e._delegate:e}class Qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class JE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new UE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ZE(t))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Pn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pn){return this.instances.has(t)}getOptions(t=Pn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Pn){return this.component?this.component.multipleInstances?t:Pn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XE(e){return e===Pn?void 0:e}function ZE(e){return e.instantiationMode==="EAGER"}/**
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
 */class tv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new JE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ot;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ot||(ot={}));const ev={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},nv=ot.INFO,rv={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},sv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=rv[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qc{constructor(t){this.name=t,this._logLevel=nv,this._logHandler=sv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ev[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...t),this._logHandler(this,ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...t),this._logHandler(this,ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...t),this._logHandler(this,ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...t),this._logHandler(this,ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...t),this._logHandler(this,ot.ERROR,...t)}}const iv=(e,t)=>t.some(n=>e instanceof n);let Wu,Gu;function ov(){return Wu||(Wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function av(){return Gu||(Gu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sd=new WeakMap,Na=new WeakMap,bd=new WeakMap,Jo=new WeakMap,Hc=new WeakMap;function cv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(un(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Sd.set(n,e)}).catch(()=>{}),Hc.set(t,e),t}function lv(e){if(Na.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Na.set(e,t)}let Fa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Na.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function uv(e){Fa=e(Fa)}function hv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xo(this),t,...n);return bd.set(r,t.sort?t.sort():[t]),un(r)}:av().includes(e)?function(...t){return e.apply(Xo(this),t),un(Sd.get(this))}:function(...t){return un(e.apply(Xo(this),t))}}function fv(e){return typeof e=="function"?hv(e):(e instanceof IDBTransaction&&lv(e),iv(e,ov())?new Proxy(e,Fa):e)}function un(e){if(e instanceof IDBRequest)return cv(e);if(Jo.has(e))return Jo.get(e);const t=fv(e);return t!==e&&(Jo.set(e,t),Hc.set(t,e)),t}const Xo=e=>Hc.get(e);function dv(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(un(o.result),c.oldVersion,c.newVersion,un(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const pv=["get","getKey","getAll","getAllKeys","count"],gv=["put","add","delete","clear"],Zo=new Map;function Yu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Zo.get(t))return Zo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=gv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Zo.set(t,i),i}uv(e=>({...e,get:(t,n,r)=>Yu(t,n)||e.get(t,n,r),has:(t,n)=>!!Yu(t,n)||e.has(t,n)}));/**
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
 */class mv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_v(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _v(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const La="@firebase/app",Ju="0.9.15";/**
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
 */const $n=new qc("@firebase/app"),Av="@firebase/app-compat",yv="@firebase/analytics-compat",Ev="@firebase/analytics",vv="@firebase/app-check-compat",Iv="@firebase/app-check",Tv="@firebase/auth",wv="@firebase/auth-compat",Rv="@firebase/database",Cv="@firebase/database-compat",Pv="@firebase/functions",Sv="@firebase/functions-compat",bv="@firebase/installations",Dv="@firebase/installations-compat",Vv="@firebase/messaging",xv="@firebase/messaging-compat",kv="@firebase/performance",Mv="@firebase/performance-compat",Ov="@firebase/remote-config",Nv="@firebase/remote-config-compat",Fv="@firebase/storage",Lv="@firebase/storage-compat",Bv="@firebase/firestore",Uv="@firebase/firestore-compat",$v="firebase",jv="10.1.0";/**
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
 */const Ba="[DEFAULT]",qv={[La]:"fire-core",[Av]:"fire-core-compat",[Ev]:"fire-analytics",[yv]:"fire-analytics-compat",[Iv]:"fire-app-check",[vv]:"fire-app-check-compat",[Tv]:"fire-auth",[wv]:"fire-auth-compat",[Rv]:"fire-rtdb",[Cv]:"fire-rtdb-compat",[Pv]:"fire-fn",[Sv]:"fire-fn-compat",[bv]:"fire-iid",[Dv]:"fire-iid-compat",[Vv]:"fire-fcm",[xv]:"fire-fcm-compat",[kv]:"fire-perf",[Mv]:"fire-perf-compat",[Ov]:"fire-rc",[Nv]:"fire-rc-compat",[Fv]:"fire-gcs",[Lv]:"fire-gcs-compat",[Bv]:"fire-fst",[Uv]:"fire-fst-compat","fire-js":"fire-js",[$v]:"fire-js-all"};/**
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
 */const Vi=new Map,Ua=new Map;function Hv(e,t){try{e.container.addComponent(t)}catch(n){$n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mn(e){const t=e.name;if(Ua.has(t))return $n.debug(`There were multiple attempts to register component ${t}.`),!1;Ua.set(t,e);for(const n of Vi.values())Hv(n,e);return!0}function ks(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Qv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hn=new ho("app","Firebase",Qv);/**
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
 */class zv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
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
 */const Kv=jv;function Dd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ba,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw hn.create("bad-app-name",{appName:String(s)});if(n||(n=Rd()),!n)throw hn.create("no-options");const i=Vi.get(s);if(i){if(Di(n,i.options)&&Di(r,i.config))return i;throw hn.create("duplicate-app",{appName:s})}const o=new tv(s);for(const c of Ua.values())o.addComponent(c);const a=new zv(n,r,o);return Vi.set(s,a),a}function Vd(e=Ba){const t=Vi.get(e);if(!t&&e===Ba&&Rd())return Dd();if(!t)throw hn.create("no-app",{appName:e});return t}function Me(e,t,n){var r;let s=(r=qv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}mn(new Qe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Wv="firebase-heartbeat-database",Gv=1,_s="firebase-heartbeat-store";let ta=null;function xd(){return ta||(ta=dv(Wv,Gv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_s)}}}).catch(e=>{throw hn.create("idb-open",{originalErrorMessage:e.message})})),ta}async function Yv(e){try{return await(await xd()).transaction(_s).objectStore(_s).get(kd(e))}catch(t){if(t instanceof vn)$n.warn(t.message);else{const n=hn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$n.warn(n.message)}}}async function Xu(e,t){try{const r=(await xd()).transaction(_s,"readwrite");await r.objectStore(_s).put(t,kd(e)),await r.done}catch(n){if(n instanceof vn)$n.warn(n.message);else{const r=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function kd(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Jv=1024,Xv=30*24*60*60*1e3;class Zv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Xv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zu(),{heartbeatsToSend:n,unsentEntries:r}=tI(this._heartbeatsCache.heartbeats),s=bi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Zu(){return new Date().toISOString().substring(0,10)}function tI(e,t=Jv){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),th(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),th(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cd()?Pd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function th(e){return bi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function nI(e){mn(new Qe("platform-logger",t=>new mv(t),"PRIVATE")),mn(new Qe("heartbeat",t=>new Zv(t),"PRIVATE")),Me(La,Ju,e),Me(La,Ju,"esm2017"),Me("fire-js","")}nI("");var rI="firebase",sI="10.1.0";/**
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
 */Me(rI,sI,"app");const iI=(e,t)=>t.some(n=>e instanceof n);let eh,nh;function oI(){return eh||(eh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return nh||(nh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Md=new WeakMap,$a=new WeakMap,Od=new WeakMap,ea=new WeakMap,Qc=new WeakMap;function cI(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(fn(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Md.set(n,e)}).catch(()=>{}),Qc.set(t,e),t}function lI(e){if($a.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});$a.set(e,t)}let ja={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $a.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Od.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function uI(e){ja=e(ja)}function hI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(na(this),t,...n);return Od.set(r,t.sort?t.sort():[t]),fn(r)}:aI().includes(e)?function(...t){return e.apply(na(this),t),fn(Md.get(this))}:function(...t){return fn(e.apply(na(this),t))}}function fI(e){return typeof e=="function"?hI(e):(e instanceof IDBTransaction&&lI(e),iI(e,oI())?new Proxy(e,ja):e)}function fn(e){if(e instanceof IDBRequest)return cI(e);if(ea.has(e))return ea.get(e);const t=fI(e);return t!==e&&(ea.set(e,t),Qc.set(t,e)),t}const na=e=>Qc.get(e);function dI(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=fn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(fn(o.result),c.oldVersion,c.newVersion,fn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const pI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],ra=new Map;function rh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ra.get(t))return ra.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=gI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ra.set(t,i),i}uI(e=>({...e,get:(t,n,r)=>rh(t,n)||e.get(t,n,r),has:(t,n)=>!!rh(t,n)||e.has(t,n)}));const Nd="@firebase/installations",zc="0.6.4";/**
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
 */const Fd=1e4,Ld=`w:${zc}`,Bd="FIS_v2",mI="https://firebaseinstallations.googleapis.com/v1",_I=60*60*1e3,AI="installations",yI="Installations";/**
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
 */const EI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},jn=new ho(AI,yI,EI);function Ud(e){return e instanceof vn&&e.code.includes("request-failed")}/**
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
 */function $d({projectId:e}){return`${mI}/projects/${e}/installations`}function jd(e){return{token:e.token,requestStatus:2,expiresIn:II(e.expiresIn),creationTime:Date.now()}}async function qd(e,t){const r=(await t.json()).error;return jn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Hd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function vI(e,{refreshToken:t}){const n=Hd(e);return n.append("Authorization",TI(t)),n}async function Qd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function II(e){return Number(e.replace("s","000"))}function TI(e){return`${Bd} ${e}`}/**
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
 */async function wI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=$d(e),s=Hd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Bd,appId:e.appId,sdkVersion:Ld},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Qd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:jd(l.authToken)}}else throw await qd("Create Installation",c)}/**
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
 */function zd(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function RI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const CI=/^[cdef][\w-]{21}$/,qa="";function PI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=SI(e);return CI.test(n)?n:qa}catch{return qa}}function SI(e){return RI(e).substr(0,22)}/**
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
 */const Kd=new Map;function Wd(e,t){const n=fo(e);Gd(n,t),bI(n,t)}function Gd(e,t){const n=Kd.get(e);if(n)for(const r of n)r(t)}function bI(e,t){const n=DI();n&&n.postMessage({key:e,fid:t}),VI()}let xn=null;function DI(){return!xn&&"BroadcastChannel"in self&&(xn=new BroadcastChannel("[Firebase] FID Change"),xn.onmessage=e=>{Gd(e.data.key,e.data.fid)}),xn}function VI(){Kd.size===0&&xn&&(xn.close(),xn=null)}/**
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
 */const xI="firebase-installations-database",kI=1,qn="firebase-installations-store";let sa=null;function Kc(){return sa||(sa=dI(xI,kI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qn)}}})),sa}async function xi(e,t){const n=fo(e),s=(await Kc()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Wd(e,t.fid),t}async function Yd(e){const t=fo(e),r=(await Kc()).transaction(qn,"readwrite");await r.objectStore(qn).delete(t),await r.done}async function po(e,t){const n=fo(e),s=(await Kc()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Wd(e,a.fid),a}/**
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
 */async function Wc(e){let t;const n=await po(e.appConfig,r=>{const s=MI(r),i=OI(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===qa?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function MI(e){const t=e||{fid:PI(),registrationStatus:0};return Jd(t)}function OI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(jn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=NI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:FI(e)}:{installationEntry:t}}async function NI(e,t){try{const n=await wI(e,t);return xi(e.appConfig,n)}catch(n){throw Ud(n)&&n.customData.serverCode===409?await Yd(e.appConfig):await xi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function FI(e){let t=await sh(e.appConfig);for(;t.registrationStatus===1;)await zd(100),t=await sh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wc(e);return r||n}return t}function sh(e){return po(e,t=>{if(!t)throw jn.create("installation-not-found");return Jd(t)})}function Jd(e){return LI(e)?{fid:e.fid,registrationStatus:0}:e}function LI(e){return e.registrationStatus===1&&e.registrationTime+Fd<Date.now()}/**
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
 */async function BI({appConfig:e,heartbeatServiceProvider:t},n){const r=UI(e,n),s=vI(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ld,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Qd(()=>fetch(r,a));if(c.ok){const l=await c.json();return jd(l)}else throw await qd("Generate Auth Token",c)}function UI(e,{fid:t}){return`${$d(e)}/${t}/authTokens:generate`}/**
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
 */async function Gc(e,t=!1){let n;const r=await po(e.appConfig,i=>{if(!Xd(i))throw jn.create("not-registered");const o=i.authToken;if(!t&&qI(o))return i;if(o.requestStatus===1)return n=$I(e,t),i;{if(!navigator.onLine)throw jn.create("app-offline");const a=QI(i);return n=jI(e,a),a}});return n?await n:r.authToken}async function $I(e,t){let n=await ih(e.appConfig);for(;n.authToken.requestStatus===1;)await zd(100),n=await ih(e.appConfig);const r=n.authToken;return r.requestStatus===0?Gc(e,t):r}function ih(e){return po(e,t=>{if(!Xd(t))throw jn.create("not-registered");const n=t.authToken;return zI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function jI(e,t){try{const n=await BI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await xi(e.appConfig,r),n}catch(n){if(Ud(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await xi(e.appConfig,r)}throw n}}function Xd(e){return e!==void 0&&e.registrationStatus===2}function qI(e){return e.requestStatus===2&&!HI(e)}function HI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+_I}function QI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function zI(e){return e.requestStatus===1&&e.requestTime+Fd<Date.now()}/**
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
 */async function KI(e){const t=e,{installationEntry:n,registrationPromise:r}=await Wc(t);return r?r.catch(console.error):Gc(t).catch(console.error),n.fid}/**
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
 */async function WI(e,t=!1){const n=e;return await GI(n),(await Gc(n,t)).token}async function GI(e){const{registrationPromise:t}=await Wc(e);t&&await t}/**
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
 */function YI(e){if(!e||!e.options)throw ia("App Configuration");if(!e.name)throw ia("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ia(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ia(e){return jn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Zd="installations",JI="installations-internal",XI=e=>{const t=e.getProvider("app").getImmediate(),n=YI(t),r=ks(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ZI=e=>{const t=e.getProvider("app").getImmediate(),n=ks(t,Zd).getImmediate();return{getId:()=>KI(n),getToken:s=>WI(n,s)}};function tT(){mn(new Qe(Zd,XI,"PUBLIC")),mn(new Qe(JI,ZI,"PRIVATE"))}tT();Me(Nd,zc);Me(Nd,zc,"esm2017");/**
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
 */const ki="analytics",eT="firebase_id",nT="origin",rT=60*1e3,sT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yc="https://www.googletagmanager.com/gtag/js";/**
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
 */const ee=new qc("@firebase/analytics");/**
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
 */const iT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ae=new ho("analytics","Analytics",iT);/**
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
 */function oT(e){if(!e.startsWith(Yc)){const t=ae.create("invalid-gtag-resource",{gtagURL:e});return ee.warn(t.message),""}return e}function tp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function aT(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function cT(e,t){const n=aT("firebase-js-sdk-policy",{createScriptURL:oT}),r=document.createElement("script"),s=`${Yc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function lT(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function uT(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await tp(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){ee.error(a)}e("config",s,i)}async function hT(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await tp(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ee.error(i)}}function fT(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await hT(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await uT(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ee.error(a)}}return s}function dT(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=fT(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function pT(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Yc)&&n.src.includes(e))return n;return null}/**
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
 */const gT=30,mT=1e3;class _T{constructor(t={},n=mT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ep=new _T;function AT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function yT(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:AT(r)},i=sT.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ae.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ET(e,t=ep,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw ae.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ae.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new TT;return setTimeout(async()=>{a.abort()},n!==void 0?n:rT),np({appId:r,apiKey:s,measurementId:i},o,a,t)}async function np(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=ep){var i;const{appId:o,measurementId:a}=e;try{await vT(r,t)}catch(c){if(a)return ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await yT(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!IT(l)){if(s.deleteThrottleMetadata(o),a)return ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ku(n,s.intervalMillis,gT):Ku(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ee.debug(`Calling attemptFetch again in ${u} millis`),np(e,h,r,s)}}function vT(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function IT(e){if(!(e instanceof vn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class TT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function wT(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function RT(){if(Cd())try{await Pd()}catch(e){return ee.warn(ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ee.warn(ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CT(e,t,n,r,s,i,o){var a;const c=ET(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ee.error(g)),t.push(c);const l=RT().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([c,l]);pT(i)||cT(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[nT]="firebase",f.update=!0,h!=null&&(f[eT]=h),s("config",u.measurementId,f),u.measurementId}/**
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
 */class PT{constructor(t){this.app=t}_delete(){return delete es[this.app.options.appId],Promise.resolve()}}let es={},oh=[];const ah={};let oa="dataLayer",ST="gtag",ch,rp,lh=!1;function bT(){const e=[];if(jE()&&e.push("This is a browser extension environment."),qE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ae.create("invalid-analytics-context",{errorInfo:t});ee.warn(n.message)}}function DT(e,t,n){bT();const r=e.options.appId;if(!r)throw ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ae.create("no-api-key");if(es[r]!=null)throw ae.create("already-exists",{id:r});if(!lh){lT(oa);const{wrappedGtag:i,gtagCore:o}=dT(es,oh,ah,oa,ST);rp=i,ch=o,lh=!0}return es[r]=CT(e,oh,ah,t,ch,oa,n),new PT(e)}function VT(e=Vd()){e=gn(e);const t=ks(e,ki);return t.isInitialized()?t.getImmediate():xT(e)}function xT(e,t={}){const n=ks(e,ki);if(n.isInitialized()){const s=n.getImmediate();if(Di(t,n.getOptions()))return s;throw ae.create("already-initialized")}return n.initialize({options:t})}function kT(e,t,n,r){e=gn(e),wT(rp,es[e.app.options.appId],t,n,r).catch(s=>ee.error(s))}const uh="@firebase/analytics",hh="0.10.0";function MT(){mn(new Qe(ki,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return DT(r,s,n)},"PUBLIC")),mn(new Qe("analytics-internal",e,"PRIVATE")),Me(uh,hh),Me(uh,hh,"esm2017");function e(t){try{const n=t.getProvider(ki).getImmediate();return{logEvent:(r,s,i)=>kT(n,r,s,i)}}catch(n){throw ae.create("interop-component-reg-failed",{reason:n})}}}MT();var OT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Jc=Jc||{},z=OT||self;function go(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ms(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function NT(e){return Object.prototype.hasOwnProperty.call(e,aa)&&e[aa]||(e[aa]=++FT)}var aa="closure_uid_"+(1e9*Math.random()>>>0),FT=0;function LT(e,t,n){return e.call.apply(e.bind,arguments)}function BT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function zt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?zt=LT:zt=BT,zt.apply(null,arguments)}function ni(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function kt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function In(){this.s=this.s,this.o=this.o}var UT=0;In.prototype.s=!1;In.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),UT!=0)&&NT(this)};In.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sp=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Xc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function fh(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(go(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Kt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Kt.prototype.h=function(){this.defaultPrevented=!0};var $T=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{z.addEventListener("test",()=>{},t),z.removeEventListener("test",()=>{},t)}catch{}return e}();function As(e){return/^[\s\xa0]*$/.test(e)}function mo(){var e=z.navigator;return e&&(e=e.userAgent)?e:""}function De(e){return mo().indexOf(e)!=-1}function Zc(e){return Zc[" "](e),e}Zc[" "]=function(){};function jT(e,t){var n=Mw;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var qT=De("Opera"),Er=De("Trident")||De("MSIE"),ip=De("Edge"),Ha=ip||Er,op=De("Gecko")&&!(mo().toLowerCase().indexOf("webkit")!=-1&&!De("Edge"))&&!(De("Trident")||De("MSIE"))&&!De("Edge"),HT=mo().toLowerCase().indexOf("webkit")!=-1&&!De("Edge");function ap(){var e=z.document;return e?e.documentMode:void 0}var Qa;t:{var ca="",la=function(){var e=mo();if(op)return/rv:([^\);]+)(\)|;)/.exec(e);if(ip)return/Edge\/([\d\.]+)/.exec(e);if(Er)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(HT)return/WebKit\/(\S+)/.exec(e);if(qT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(la&&(ca=la?la[1]:""),Er){var ua=ap();if(ua!=null&&ua>parseFloat(ca)){Qa=String(ua);break t}}Qa=ca}var za;if(z.document&&Er){var dh=ap();za=dh||parseInt(Qa,10)||void 0}else za=void 0;var QT=za;function ys(e,t){if(Kt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(op){t:{try{Zc(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:zT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ys.$.h.call(this)}}kt(ys,Kt);var zT={2:"touch",3:"pen",4:"mouse"};ys.prototype.h=function(){ys.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),KT=0;function WT(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++KT,this.fa=this.ia=!1}function _o(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tl(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function GT(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function cp(e){const t={};for(const n in e)t[n]=e[n];return t}const ph="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lp(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<ph.length;i++)n=ph[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ao(e){this.src=e,this.g={},this.h=0}Ao.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Wa(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new WT(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Ka(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=sp(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(_o(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Wa(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var el="closure_lm_"+(1e6*Math.random()|0),ha={};function up(e,t,n,r,s){if(r&&r.once)return fp(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)up(e,t[i],n,r,s);return null}return n=sl(n),e&&e[Os]?e.O(t,n,Ms(r)?!!r.capture:!!r,s):hp(e,t,n,!1,r,s)}function hp(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ms(s)?!!s.capture:!!s,a=rl(e);if(a||(e[el]=a=new Ao(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=YT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)$T||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(pp(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function YT(){function e(n){return t.call(e.src,e.listener,n)}const t=JT;return e}function fp(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)fp(e,t[i],n,r,s);return null}return n=sl(n),e&&e[Os]?e.P(t,n,Ms(r)?!!r.capture:!!r,s):hp(e,t,n,!0,r,s)}function dp(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)dp(e,t[i],n,r,s);else r=Ms(r)?!!r.capture:!!r,n=sl(n),e&&e[Os]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Wa(i,n,r,s),-1<n&&(_o(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=rl(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Wa(t,n,r,s)),(n=-1<e?t[e]:null)&&nl(n))}function nl(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Os])Ka(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(pp(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=rl(t))?(Ka(n,e),n.h==0&&(n.src=null,t[el]=null)):_o(e)}}}function pp(e){return e in ha?ha[e]:ha[e]="on"+e}function JT(e,t){if(e.fa)e=!0;else{t=new ys(t,this);var n=e.listener,r=e.la||e.src;e.ia&&nl(e),e=n.call(r,t)}return e}function rl(e){return e=e[el],e instanceof Ao?e:null}var fa="__closure_events_fn_"+(1e9*Math.random()>>>0);function sl(e){return typeof e=="function"?e:(e[fa]||(e[fa]=function(t){return e.handleEvent(t)}),e[fa])}function xt(){In.call(this),this.i=new Ao(this),this.S=this,this.J=null}kt(xt,In);xt.prototype[Os]=!0;xt.prototype.removeEventListener=function(e,t,n,r){dp(this,e,t,n,r)};function Lt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Kt(t,e);else if(t instanceof Kt)t.target=t.target||e;else{var s=t;t=new Kt(r,e),lp(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=ri(o,r,!0,t)&&s}if(o=t.g=e,s=ri(o,r,!0,t)&&s,s=ri(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=ri(o,r,!1,t)&&s}xt.prototype.N=function(){if(xt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)_o(n[r]);delete e.g[t],e.h--}}this.J=null};xt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};xt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ri(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ka(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var il=z.JSON.stringify;class XT{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ZT(){var e=ol;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class tw{constructor(){this.h=this.g=null}add(t,n){const r=gp.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var gp=new XT(()=>new ew,e=>e.reset());class ew{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nw(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function rw(e){z.setTimeout(()=>{throw e},0)}let Es,vs=!1,ol=new tw,mp=()=>{const e=z.Promise.resolve(void 0);Es=()=>{e.then(sw)}};var sw=()=>{for(var e;e=ZT();){try{e.h.call(e.g)}catch(n){rw(n)}var t=gp;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}vs=!1};function yo(e,t){xt.call(this),this.h=e||1,this.g=t||z,this.j=zt(this.qb,this),this.l=Date.now()}kt(yo,xt);V=yo.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Lt(this,"tick"),this.ga&&(al(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function al(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}V.N=function(){yo.$.N.call(this),al(this),delete this.g};function cl(e,t,n){if(typeof e=="function")n&&(e=zt(e,n));else if(e&&typeof e.handleEvent=="function")e=zt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:z.setTimeout(e,t||0)}function _p(e){e.g=cl(()=>{e.g=null,e.i&&(e.i=!1,_p(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class iw extends In{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:_p(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(e){In.call(this),this.h=e,this.g={}}kt(Is,In);var gh=[];function Ap(e,t,n,r){Array.isArray(n)||(n&&(gh[0]=n.toString()),n=gh);for(var s=0;s<n.length;s++){var i=up(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function yp(e){tl(e.g,function(t,n){this.g.hasOwnProperty(n)&&nl(t)},e),e.g={}}Is.prototype.N=function(){Is.$.N.call(this),yp(this)};Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Eo(){this.g=!0}Eo.prototype.Ea=function(){this.g=!1};function ow(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function aw(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function ir(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+lw(e,n)+(r?" "+r:"")})}function cw(e,t){e.info(function(){return"TIMEOUT: "+t})}Eo.prototype.info=function(){};function lw(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return il(n)}catch{return t}}var Kn={},mh=null;function vo(){return mh=mh||new xt}Kn.Ta="serverreachability";function Ep(e){Kt.call(this,Kn.Ta,e)}kt(Ep,Kt);function Ts(e){const t=vo();Lt(t,new Ep(t))}Kn.STAT_EVENT="statevent";function vp(e,t){Kt.call(this,Kn.STAT_EVENT,e),this.stat=t}kt(vp,Kt);function Xt(e){const t=vo();Lt(t,new vp(t,e))}Kn.Ua="timingevent";function Ip(e,t){Kt.call(this,Kn.Ua,e),this.size=t}kt(Ip,Kt);function Ns(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){e()},t)}var Io={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ll(){}ll.prototype.h=null;function _h(e){return e.h||(e.h=e.i())}function wp(){}var Fs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ul(){Kt.call(this,"d")}kt(ul,Kt);function hl(){Kt.call(this,"c")}kt(hl,Kt);var Ga;function To(){}kt(To,ll);To.prototype.g=function(){return new XMLHttpRequest};To.prototype.i=function(){return{}};Ga=new To;function Ls(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Is(this),this.P=uw,e=Ha?125:void 0,this.V=new yo(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Rp}function Rp(){this.i=null,this.g="",this.h=!1}var uw=45e3,Ya={},Mi={};V=Ls.prototype;V.setTimeout=function(e){this.P=e};function Ja(e,t,n){e.L=1,e.v=Ro(ze(t)),e.s=n,e.S=!0,Cp(e,null)}function Cp(e,t){e.G=Date.now(),Bs(e),e.A=ze(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Mp(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Rp,e.g=eg(e.l,n?t:null,!e.s),0<e.O&&(e.M=new iw(zt(e.Pa,e,e.g),e.O)),Ap(e.U,e.g,"readystatechange",e.nb),t=e.I?cp(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ts(),ow(e.j,e.u,e.A,e.m,e.W,e.s)}V.nb=function(e){e=e.target;const t=this.M;t&&Ve(e)==3?t.l():this.Pa(e)};V.Pa=function(e){try{if(e==this.g)t:{const u=Ve(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ha||this.g&&(this.h.h||this.g.ja()||vh(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Ts(3):Ts(2)),wo(this);var n=this.g.da();this.ca=n;e:if(Pp(this)){var r=vh(this.g);e="";var s=r.length,i=Ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),ns(this);var o="";break e}this.h.i=new z.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,aw(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!As(a)){var l=a;break e}}l=null}if(n=l)ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,n);else{this.i=!1,this.o=3,Xt(12),kn(this),ns(this);break t}}this.S?(Sp(this,u,o),Ha&&this.i&&u==3&&(Ap(this.U,this.V,"tick",this.mb),this.V.start())):(ir(this.j,this.m,o,null),Xa(this,o)),u==4&&kn(this),this.i&&!this.J&&(u==4?Jp(this.l,this):(this.i=!1,Bs(this)))}else Vw(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xt(12)):(this.o=0,Xt(13)),kn(this),ns(this)}}}catch{}finally{}};function Pp(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Sp(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=hw(e,n),s==Mi){t==4&&(e.o=4,Xt(14),r=!1),ir(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Ya){e.o=4,Xt(15),ir(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ir(e.j,e.m,s,null),Xa(e,s);Pp(e)&&s!=Mi&&s!=Ya&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Xt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),_l(t),t.M=!0,Xt(11))):(ir(e.j,e.m,n,"[Invalid Chunked Response]"),kn(e),ns(e))}V.mb=function(){if(this.g){var e=Ve(this.g),t=this.g.ja();this.C<t.length&&(wo(this),Sp(this,e,t),this.i&&e!=4&&Bs(this))}};function hw(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Mi:(n=Number(t.substring(n,r)),isNaN(n)?Ya:(r+=1,r+n>t.length?Mi:(t=t.slice(r,r+n),e.C=r+n,t)))}V.cancel=function(){this.J=!0,kn(this)};function Bs(e){e.Y=Date.now()+e.P,bp(e,e.P)}function bp(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ns(zt(e.lb,e),t)}function wo(e){e.B&&(z.clearTimeout(e.B),e.B=null)}V.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(cw(this.j,this.A),this.L!=2&&(Ts(),Xt(17)),kn(this),this.o=2,ns(this)):bp(this,this.Y-e)};function ns(e){e.l.H==0||e.J||Jp(e.l,e)}function kn(e){wo(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,al(e.V),yp(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Xa(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Za(n.i,e))){if(!e.K&&Za(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Fi(n),So(n);else break t;ml(n),Xt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ns(zt(n.ib,n),6e3));if(1>=Fp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mn(n,11)}else if((e.K||n.g==e)&&Fi(n),!As(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(fl(i,i.h),i.h=null))}if(r.F){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,mt(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=tg(r,r.J?r.pa:null,r.Y),o.K){Lp(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(wo(a),Bs(a)),r.g=o}else Gp(r);0<n.j.length&&bo(n)}else l[0]!="stop"&&l[0]!="close"||Mn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mn(n,7):gl(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ts(4)}catch{}}function fw(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(go(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function dw(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(go(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Dp(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(go(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=dw(e),r=fw(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Vp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pw(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ln(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ln){this.h=e.h,Oi(this,e.j),this.s=e.s,this.g=e.g,Ni(this,e.m),this.l=e.l;var t=e.i,n=new ws;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ah(this,n),this.o=e.o}else e&&(t=String(e).match(Vp))?(this.h=!1,Oi(this,t[1]||"",!0),this.s=Qr(t[2]||""),this.g=Qr(t[3]||"",!0),Ni(this,t[4]),this.l=Qr(t[5]||"",!0),Ah(this,t[6]||"",!0),this.o=Qr(t[7]||"")):(this.h=!1,this.i=new ws(null,this.h))}Ln.prototype.toString=function(){var e=[],t=this.j;t&&e.push(zr(t,yh,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(zr(t,yh,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(zr(n,n.charAt(0)=="/"?_w:mw,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",zr(n,yw)),e.join("")};function ze(e){return new Ln(e)}function Oi(e,t,n){e.j=n?Qr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ni(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ah(e,t,n){t instanceof ws?(e.i=t,Ew(e.i,e.h)):(n||(t=zr(t,Aw)),e.i=new ws(t,e.h))}function mt(e,t,n){e.i.set(t,n)}function Ro(e){return mt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function zr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,gw),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function gw(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var yh=/[#\/\?@]/g,mw=/[#\?:]/g,_w=/[#\?]/g,Aw=/[#\?@]/g,yw=/#/g;function ws(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Tn(e){e.g||(e.g=new Map,e.h=0,e.i&&pw(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}V=ws.prototype;V.add=function(e,t){Tn(this),this.i=null,e=Vr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xp(e,t){Tn(e),t=Vr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function kp(e,t){return Tn(e),t=Vr(e,t),e.g.has(t)}V.forEach=function(e,t){Tn(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};V.ta=function(){Tn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};V.Z=function(e){Tn(this);let t=[];if(typeof e=="string")kp(this,e)&&(t=t.concat(this.g.get(Vr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};V.set=function(e,t){return Tn(this),this.i=null,e=Vr(this,e),kp(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};V.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Mp(e,t,n){xp(e,t),0<n.length&&(e.i=null,e.g.set(Vr(e,t),Xc(n)),e.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Vr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ew(e,t){t&&!e.j&&(Tn(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(xp(this,r),Mp(this,s,n))},e)),e.j=t}var vw=class{constructor(e,t){this.g=e,this.map=t}};function Op(e){this.l=e||Iw,z.PerformanceNavigationTiming?(e=z.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Iw=10;function Np(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Fp(e){return e.h?1:e.g?e.g.size:0}function Za(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function fl(e,t){e.g?e.g.add(t):e.h=t}function Lp(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Op.prototype.cancel=function(){if(this.i=Bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Bp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Xc(e.i)}var Tw=class{stringify(e){return z.JSON.stringify(e,void 0)}parse(e){return z.JSON.parse(e,void 0)}};function ww(){this.g=new Tw}function Rw(e,t,n){const r=n||"";try{Dp(e,function(s,i){let o=s;Ms(s)&&(o=il(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Cw(e,t){const n=new Eo;if(z.Image){const r=new Image;r.onload=ni(si,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ni(si,n,r,"TestLoadImage: error",!1,t),r.onabort=ni(si,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ni(si,n,r,"TestLoadImage: timeout",!1,t),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function si(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Us(e){this.l=e.fc||null,this.j=e.ob||!1}kt(Us,ll);Us.prototype.g=function(){return new Co(this.l,this.j)};Us.prototype.i=function(e){return function(){return e}}({});function Co(e,t){xt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=dl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}kt(Co,xt);var dl=0;V=Co.prototype;V.open=function(e,t){if(this.readyState!=dl)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Rs(this)};V.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||z).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=dl};V.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Up(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Up(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}V.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?$s(this):Rs(this),this.readyState==3&&Up(this)}};V.Za=function(e){this.g&&(this.response=this.responseText=e,$s(this))};V.Ya=function(e){this.g&&(this.response=e,$s(this))};V.ka=function(){this.g&&$s(this)};function $s(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Rs(e)}V.setRequestHeader=function(e,t){this.v.append(e,t)};V.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Rs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Pw=z.JSON.parse;function Et(e){xt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=$p,this.L=this.M=!1}kt(Et,xt);var $p="",Sw=/^https?$/i,bw=["POST","PUT"];V=Et.prototype;V.Oa=function(e){this.M=e};V.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ga.g(),this.C=this.u?_h(this.u):_h(Ga),this.g.onreadystatechange=zt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Eh(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=z.FormData&&e instanceof z.FormData,!(0<=sp(bw,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hp(this),0<this.B&&((this.L=Dw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=zt(this.ua,this)):this.A=cl(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Eh(this,i)}};function Dw(e){return Er&&typeof e.timeout=="number"&&e.ontimeout!==void 0}V.ua=function(){typeof Jc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Lt(this,"timeout"),this.abort(8))};function Eh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,jp(e),Po(e)}function jp(e){e.F||(e.F=!0,Lt(e,"complete"),Lt(e,"error"))}V.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Lt(this,"complete"),Lt(this,"abort"),Po(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Po(this,!0)),Et.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?qp(this):this.kb())};V.kb=function(){qp(this)};function qp(e){if(e.h&&typeof Jc<"u"&&(!e.C[1]||Ve(e)!=4||e.da()!=2)){if(e.v&&Ve(e)==4)cl(e.La,0,e);else if(Lt(e,"readystatechange"),Ve(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Vp)[1]||null;!s&&z.self&&z.self.location&&(s=z.self.location.protocol.slice(0,-1)),r=!Sw.test(s?s.toLowerCase():"")}n=r}if(n)Lt(e,"complete"),Lt(e,"success");else{e.m=6;try{var i=2<Ve(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",jp(e)}}finally{Po(e)}}}}function Po(e,t){if(e.g){Hp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Lt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Hp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(z.clearTimeout(e.A),e.A=null)}V.isActive=function(){return!!this.g};function Ve(e){return e.g?e.g.readyState:0}V.da=function(){try{return 2<Ve(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Pw(t)}};function vh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case $p:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Vw(e){const t={};e=(e.g&&2<=Ve(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(As(e[r]))continue;var n=nw(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}GT(t,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qp(e){let t="";return tl(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function pl(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Qp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):mt(e,t,n))}function $r(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zp(e){this.Ga=0,this.j=[],this.l=new Eo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$r("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$r("baseRetryDelayMs",5e3,e),this.hb=$r("retryDelaySeedMs",1e4,e),this.eb=$r("forwardChannelMaxRetries",2,e),this.xa=$r("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Op(e&&e.concurrentRequestLimit),this.Ja=new ww,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=zp.prototype;V.ra=8;V.H=1;function gl(e){if(Kp(e),e.H==3){var t=e.W++,n=ze(e.I);if(mt(n,"SID",e.K),mt(n,"RID",t),mt(n,"TYPE","terminate"),js(e,n),t=new Ls(e,e.l,t),t.L=2,t.v=Ro(ze(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=t.v,n=!0),n||(t.g=eg(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Bs(t)}Zp(e)}function So(e){e.g&&(_l(e),e.g.cancel(),e.g=null)}function Kp(e){So(e),e.u&&(z.clearTimeout(e.u),e.u=null),Fi(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&z.clearTimeout(e.m),e.m=null)}function bo(e){if(!Np(e.i)&&!e.m){e.m=!0;var t=e.Na;Es||mp(),vs||(Es(),vs=!0),ol.add(t,e),e.C=0}}function xw(e,t){return Fp(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ns(zt(e.Na,e,t),Xp(e,e.C)),e.C++,!0)}V.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ls(this,this.l,e);let i=this.s;if(this.U&&(i?(i=cp(i),lp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Wp(this,s,t),n=ze(this.I),mt(n,"RID",e),mt(n,"CVER",22),this.F&&mt(n,"X-HTTP-Session-Id",this.F),js(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Qp(i)))+"&"+t:this.o&&pl(n,this.o,i)),fl(this.i,s),this.bb&&mt(n,"TYPE","init"),this.P?(mt(n,"$req",t),mt(n,"SID","null"),s.aa=!0,Ja(s,n,null)):Ja(s,n,t),this.H=2}}else this.H==3&&(e?Ih(this,e):this.j.length==0||Np(this.i)||Ih(this))};function Ih(e,t){var n;t?n=t.m:n=e.W++;const r=ze(e.I);mt(r,"SID",e.K),mt(r,"RID",n),mt(r,"AID",e.V),js(e,r),e.o&&e.s&&pl(r,e.o,e.s),n=new Ls(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Wp(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fl(e.i,n),Ja(n,r,t)}function js(e,t){e.na&&tl(e.na,function(n,r){mt(t,r,n)}),e.h&&Dp({},function(n,r){mt(t,r,n)})}function Wp(e,t,n){n=Math.min(e.j.length,n);var r=e.h?zt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Rw(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Gp(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Es||mp(),vs||(Es(),vs=!0),ol.add(t,e),e.A=0}}function ml(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ns(zt(e.Ma,e),Xp(e,e.A)),e.A++,!0)}V.Ma=function(){if(this.u=null,Yp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ns(zt(this.jb,this),e)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Xt(10),So(this),Yp(this))};function _l(e){e.B!=null&&(z.clearTimeout(e.B),e.B=null)}function Yp(e){e.g=new Ls(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ze(e.wa);mt(t,"RID","rpc"),mt(t,"SID",e.K),mt(t,"AID",e.V),mt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&mt(t,"TO",e.qa),mt(t,"TYPE","xmlhttp"),js(e,t),e.o&&e.s&&pl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ro(ze(t)),n.s=null,n.S=!0,Cp(n,e)}V.ib=function(){this.v!=null&&(this.v=null,So(this),ml(this),Xt(19))};function Fi(e){e.v!=null&&(z.clearTimeout(e.v),e.v=null)}function Jp(e,t){var n=null;if(e.g==t){Fi(e),_l(e),e.g=null;var r=2}else if(Za(e.i,t))n=t.F,Lp(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=vo(),Lt(r,new Ip(r,n)),bo(e)}else Gp(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&xw(e,t)||r==2&&ml(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Mn(e,5);break;case 4:Mn(e,10);break;case 3:Mn(e,6);break;default:Mn(e,2)}}}function Xp(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Mn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=zt(e.pb,e);n||(n=new Ln("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Oi(n,"https"),Ro(n)),Cw(n.toString(),r)}else Xt(2);e.H=0,e.h&&e.h.za(t),Zp(e),Kp(e)}V.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Xt(2)):(this.l.info("Failed to ping google.com"),Xt(1))};function Zp(e){if(e.H=0,e.ma=[],e.h){const t=Bp(e.i);(t.length!=0||e.j.length!=0)&&(fh(e.ma,t),fh(e.ma,e.j),e.i.i.length=0,Xc(e.j),e.j.length=0),e.h.ya()}}function tg(e,t,n){var r=n instanceof Ln?ze(n):new Ln(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ni(r,r.m);else{var s=z.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Ln(null);r&&Oi(i,r),t&&(i.g=t),s&&Ni(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&mt(r,n,t),mt(r,"VER",e.ra),js(e,r),r}function eg(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Et(new Us({ob:!0})):new Et(e.va),t.Oa(e.J),t}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function ng(){}V=ng.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Li(){if(Er&&!(10<=Number(QT)))throw Error("Environmental error: no available transport.")}Li.prototype.g=function(e,t){return new ce(e,t)};function ce(e,t){xt.call(this),this.g=new zp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!As(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!As(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new xr(this)}kt(ce,xt);ce.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Xt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=tg(e,null,e.Y),bo(e)};ce.prototype.close=function(){gl(this.g)};ce.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=il(e),e=n);t.j.push(new vw(t.fb++,e)),t.H==3&&bo(t)};ce.prototype.N=function(){this.g.h=null,delete this.j,gl(this.g),delete this.g,ce.$.N.call(this)};function rg(e){ul.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}kt(rg,ul);function sg(){hl.call(this),this.status=1}kt(sg,hl);function xr(e){this.g=e}kt(xr,ng);xr.prototype.Ba=function(){Lt(this.g,"a")};xr.prototype.Aa=function(e){Lt(this.g,new rg(e))};xr.prototype.za=function(e){Lt(this.g,new sg)};xr.prototype.ya=function(){Lt(this.g,"b")};function kw(){this.blockSize=-1}function Ie(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}kt(Ie,kw);Ie.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function da(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Ie.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)da(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){da(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){da(this,r),s=0;break}}this.h=s,this.i+=t};Ie.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function lt(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Mw={};function Al(e){return-128<=e&&128>e?jT(e,function(t){return new lt([t|0],0>t?-1:0)}):new lt([e|0],0>e?-1:0)}function xe(e){if(isNaN(e)||!isFinite(e))return hr;if(0>e)return Ot(xe(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=tc;return new lt(t,0)}function ig(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ot(ig(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xe(Math.pow(t,8)),r=hr,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=xe(Math.pow(t,i)),r=r.R(i).add(xe(o))):(r=r.R(n),r=r.add(xe(o)))}return r}var tc=4294967296,hr=Al(0),ec=Al(1),Th=Al(16777216);V=lt.prototype;V.ea=function(){if(le(this))return-Ot(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:tc+r)*t,t*=tc}return e};V.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(je(this))return"0";if(le(this))return"-"+Ot(this).toString(e);for(var t=xe(Math.pow(e,6)),n=this,r="";;){var s=Ui(n,t).g;n=Bi(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,je(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function je(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function le(e){return e.h==-1}V.X=function(e){return e=Bi(this,e),le(e)?-1:je(e)?0:1};function Ot(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new lt(n,~e.h).add(ec)}V.abs=function(){return le(this)?Ot(this):this};V.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new lt(n,n[n.length-1]&-2147483648?-1:0)};function Bi(e,t){return e.add(Ot(t))}V.R=function(e){if(je(this)||je(e))return hr;if(le(this))return le(e)?Ot(this).R(Ot(e)):Ot(Ot(this).R(e));if(le(e))return Ot(this.R(Ot(e)));if(0>this.X(Th)&&0>e.X(Th))return xe(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,ii(n,2*r+2*s),n[2*r+2*s+1]+=i*c,ii(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,ii(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,ii(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new lt(n,0)};function ii(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function jr(e,t){this.g=e,this.h=t}function Ui(e,t){if(je(t))throw Error("division by zero");if(je(e))return new jr(hr,hr);if(le(e))return t=Ui(Ot(e),t),new jr(Ot(t.g),Ot(t.h));if(le(t))return t=Ui(e,Ot(t)),new jr(Ot(t.g),t.h);if(30<e.g.length){if(le(e)||le(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ec,r=t;0>=r.X(e);)n=wh(n),r=wh(r);var s=er(n,1),i=er(r,1);for(r=er(r,2),n=er(n,2);!je(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=er(r,1),n=er(n,1)}return t=Bi(e,s.R(t)),new jr(s,t)}for(s=hr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=xe(n),o=i.R(t);le(o)||0<o.X(e);)n-=r,i=xe(n),o=i.R(t);je(i)&&(i=ec),s=s.add(i),e=Bi(e,o)}return new jr(s,e)}V.gb=function(e){return Ui(this,e).h};V.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new lt(n,this.h&e.h)};V.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new lt(n,this.h|e.h)};V.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new lt(n,this.h^e.h)};function wh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new lt(n,e.h)}function er(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new lt(s,e.h)}Li.prototype.createWebChannel=Li.prototype.g;ce.prototype.send=ce.prototype.u;ce.prototype.open=ce.prototype.m;ce.prototype.close=ce.prototype.close;Io.NO_ERROR=0;Io.TIMEOUT=8;Io.HTTP_ERROR=6;Tp.COMPLETE="complete";wp.EventType=Fs;Fs.OPEN="a";Fs.CLOSE="b";Fs.ERROR="c";Fs.MESSAGE="d";xt.prototype.listen=xt.prototype.O;Et.prototype.listenOnce=Et.prototype.P;Et.prototype.getLastError=Et.prototype.Sa;Et.prototype.getLastErrorCode=Et.prototype.Ia;Et.prototype.getStatus=Et.prototype.da;Et.prototype.getResponseJson=Et.prototype.Wa;Et.prototype.getResponseText=Et.prototype.ja;Et.prototype.send=Et.prototype.ha;Et.prototype.setWithCredentials=Et.prototype.Oa;Ie.prototype.digest=Ie.prototype.l;Ie.prototype.reset=Ie.prototype.reset;Ie.prototype.update=Ie.prototype.j;lt.prototype.add=lt.prototype.add;lt.prototype.multiply=lt.prototype.R;lt.prototype.modulo=lt.prototype.gb;lt.prototype.compare=lt.prototype.X;lt.prototype.toNumber=lt.prototype.ea;lt.prototype.toString=lt.prototype.toString;lt.prototype.getBits=lt.prototype.D;lt.fromNumber=xe;lt.fromString=ig;var Ow=function(){return new Li},Nw=function(){return vo()},pa=Io,Fw=Tp,Lw=Kn,Rh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Bw=Us,oi=wp,Uw=Et,$w=Ie,fr=lt;const Ch="@firebase/firestore";/**
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
 */let $t=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let kr="10.1.0";/**
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
 */const Hn=new qc("@firebase/firestore");function Ph(){return Hn.logLevel}function F(e,...t){if(Hn.logLevel<=ot.DEBUG){const n=t.map(yl);Hn.debug(`Firestore (${kr}): ${e}`,...n)}}function Ke(e,...t){if(Hn.logLevel<=ot.ERROR){const n=t.map(yl);Hn.error(`Firestore (${kr}): ${e}`,...n)}}function vr(e,...t){if(Hn.logLevel<=ot.WARN){const n=t.map(yl);Hn.warn(`Firestore (${kr}): ${e}`,...n)}}function yl(e){if(typeof e=="string")return e;try{/**
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
 */function Q(e="Unexpected state"){const t=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: `+e;throw Ke(t),new Error(t)}function _t(e,t){e||Q()}function Y(e,t){return e}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends vn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class og{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class qw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Hw{constructor(t){this.t=t,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_t(typeof r.accessToken=="string"),new og(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _t(t===null||typeof t=="string"),new $t(t)}}class Qw{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zw{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Qw(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kw{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ww{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(_t(typeof n.token=="string"),this.R=n.token,new Kw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Gw(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ag{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Gw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function nt(e,t){return e<t?-1:e>t?1:0}function Ir(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class St{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new St(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new St(0,0))}static max(){return new W(new St(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Cs{constructor(t,n,r){n===void 0?n=0:n>t.length&&Q(),r===void 0?r=t.length-n:r>t.length-n&&Q(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Cs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Cs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class At extends Cs{construct(t,n,r){return new At(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new $(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new At(n)}static emptyPath(){return new At([])}}const Yw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Cs{construct(t,n,r){return new Qt(t,n,r)}static isValidIdentifier(t){return Yw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new $(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(At.fromString(t))}static fromName(t){return new j(At.fromString(t).popFirst(5))}static empty(){return new j(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&At.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return At.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new At(t.slice()))}}function Jw(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new St(n+1,0):new St(n,r));return new _n(s,j.empty(),t)}function Xw(e){return new _n(e.readTime,e.key,-1)}class _n{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new _n(W.min(),j.empty(),-1)}static max(){return new _n(W.max(),j.empty(),-1)}}function Zw(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=j.comparator(e.documentKey,t.documentKey),n!==0?n:nt(e.largestBatchId,t.largestBatchId))}/**
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
 */const t0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function qs(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==t0)throw e;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):C.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):C.reject(n)}static resolve(t){return new C((n,r)=>{n(t)})}static reject(t){return new C((n,r)=>{r(t)})}static waitFor(t){return new C((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=C.resolve(!1);for(const r of t)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new C((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new C((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function Hs(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class El{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}El.ae=-1;function Do(e){return e==null}function $i(e){return e===0&&1/e==-1/0}function n0(e){return typeof e=="number"&&Number.isInteger(e)&&!$i(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Sh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Mr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function cg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class yt{constructor(t,n){this.comparator=t,this.root=n||Mt.EMPTY}insert(t,n){return new yt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ai(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ai(this.root,t,this.comparator,!1)}getReverseIterator(){return new ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ai(this.root,t,this.comparator,!0)}}class ai{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Mt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Mt.RED,this.left=s??Mt.EMPTY,this.right=i??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Mt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Mt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Wt{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new bh(this.data.getIterator())}getIteratorFrom(t){return new bh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Wt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Wt(this.comparator);return n.data=t,n}}class bh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _e{constructor(t){this.fields=t,t.sort(Qt.comparator)}static empty(){return new _e([])}unionWith(t){let n=new Wt(Qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new _e(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ir(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Gt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lg("Invalid base64 string: "+i):i}}(t);return new Gt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Gt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const r0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(e){if(_t(!!e),typeof e=="string"){let t=0;const n=r0.exec(e);if(_t(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Tt(e.seconds),nanos:Tt(e.nanos)}}function Tt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Qn(e){return typeof e=="string"?Gt.fromBase64String(e):Gt.fromUint8Array(e)}/**
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
 */function vl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Il(e){const t=e.mapValue.fields.__previous_value__;return vl(t)?Il(t):t}function Ps(e){const t=An(e.mapValue.fields.__local_write_time__.timestampValue);return new St(t.seconds,t.nanos)}/**
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
 */class s0{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ss{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ss&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ci={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?vl(e)?4:i0(e)?9007199254740991:10:Q()}function Fe(e,t){if(e===t)return!0;const n=zn(e);if(n!==zn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ps(e).isEqual(Ps(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=An(s.timestampValue),a=An(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Qn(s.bytesValue).isEqual(Qn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Tt(s.geoPointValue.latitude)===Tt(i.geoPointValue.latitude)&&Tt(s.geoPointValue.longitude)===Tt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Tt(s.integerValue)===Tt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Tt(s.doubleValue),a=Tt(i.doubleValue);return o===a?$i(o)===$i(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ir(e.arrayValue.values||[],t.arrayValue.values||[],Fe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Sh(o)!==Sh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fe(o[c],a[c])))return!1;return!0}(e,t);default:return Q()}}function bs(e,t){return(e.values||[]).find(n=>Fe(n,t))!==void 0}function Tr(e,t){if(e===t)return 0;const n=zn(e),r=zn(t);if(n!==r)return nt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return nt(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Tt(i.integerValue||i.doubleValue),c=Tt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Dh(e.timestampValue,t.timestampValue);case 4:return Dh(Ps(e),Ps(t));case 5:return nt(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Qn(i),c=Qn(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=nt(a[l],c[l]);if(u!==0)return u}return nt(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=nt(Tt(i.latitude),Tt(o.latitude));return a!==0?a:nt(Tt(i.longitude),Tt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Tr(a[l],c[l]);if(u)return u}return nt(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===ci.mapValue&&o===ci.mapValue)return 0;if(i===ci.mapValue)return 1;if(o===ci.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=nt(c[h],u[h]);if(f!==0)return f;const g=Tr(a[c[h]],l[u[h]]);if(g!==0)return g}return nt(c.length,u.length)}(e.mapValue,t.mapValue);default:throw Q()}}function Dh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return nt(e,t);const n=An(e),r=An(t),s=nt(n.seconds,r.seconds);return s!==0?s:nt(n.nanos,r.nanos)}function wr(e){return nc(e)}function nc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=An(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Qn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return j.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nc(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nc(n.fields[o])}`;return s+"}"}(e.mapValue):Q()}function rc(e){return!!e&&"integerValue"in e}function Tl(e){return!!e&&"arrayValue"in e}function Vh(e){return!!e&&"nullValue"in e}function xh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function mi(e){return!!e&&"mapValue"in e}function rs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Mr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=rs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function i0(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ue{constructor(t){this.value=t}static empty(){return new ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!mi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=rs(n)}setAll(t){let n=Qt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=rs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Fe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Mr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ue(rs(this.value))}}function ug(e){const t=[];return Mr(e.fields,(n,r)=>{const s=new Qt([n]);if(mi(r)){const i=ug(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new _e(t)}/**
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
 */class jt{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new jt(t,0,W.min(),W.min(),W.min(),ue.empty(),0)}static newFoundDocument(t,n,r,s){return new jt(t,1,n,W.min(),r,s,0)}static newNoDocument(t,n){return new jt(t,2,n,W.min(),W.min(),ue.empty(),0)}static newUnknownDocument(t,n){return new jt(t,3,n,W.min(),W.min(),ue.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ji{constructor(t,n){this.position=t,this.inclusive=n}}function kh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Tr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fe(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ss{constructor(t,n="asc"){this.field=t,this.dir=n}}function o0(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class hg{}class Ct extends hg{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new c0(t,n,r):n==="array-contains"?new h0(t,r):n==="in"?new f0(t,r):n==="not-in"?new d0(t,r):n==="array-contains-any"?new p0(t,r):new Ct(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new l0(t,r):new u0(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Tr(n,this.value)):n!==null&&zn(this.value)===zn(n)&&this.matchesComparison(Tr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Le extends hg{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Le(t,n)}matches(t){return fg(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function fg(e){return e.op==="and"}function dg(e){return a0(e)&&fg(e)}function a0(e){for(const t of e.filters)if(t instanceof Le)return!1;return!0}function sc(e){if(e instanceof Ct)return e.field.canonicalString()+e.op.toString()+wr(e.value);if(dg(e))return e.filters.map(t=>sc(t)).join(",");{const t=e.filters.map(n=>sc(n)).join(",");return`${e.op}(${t})`}}function pg(e,t){return e instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.field.isEqual(s.field)&&Fe(r.value,s.value)}(e,t):e instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&pg(o,s.filters[a]),!0):!1}(e,t):void Q()}function gg(e){return e instanceof Ct?function(n){return`${n.field.canonicalString()} ${n.op} ${wr(n.value)}`}(e):e instanceof Le?function(n){return n.op.toString()+" {"+n.getFilters().map(gg).join(" ,")+"}"}(e):"Filter"}class c0 extends Ct{constructor(t,n,r){super(t,n,r),this.key=j.fromName(r.referenceValue)}matches(t){const n=j.comparator(t.key,this.key);return this.matchesComparison(n)}}class l0 extends Ct{constructor(t,n){super(t,"in",n),this.keys=mg("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class u0 extends Ct{constructor(t,n){super(t,"not-in",n),this.keys=mg("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function mg(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class h0 extends Ct{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Tl(n)&&bs(n.arrayValue,this.value)}}class f0 extends Ct{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&bs(this.value.arrayValue,n)}}class d0 extends Ct{constructor(t,n){super(t,"not-in",n)}matches(t){if(bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!bs(this.value.arrayValue,n)}}class p0 extends Ct{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Tl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bs(this.value.arrayValue,r))}}/**
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
 */class g0{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Oh(e,t=null,n=[],r=[],s=null,i=null,o=null){return new g0(e,t,n,r,s,i,o)}function wl(e){const t=Y(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>sc(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Do(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>wr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>wr(r)).join(",")),t.he=n}return t.he}function Rl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!o0(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!pg(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Mh(e.startAt,t.startAt)&&Mh(e.endAt,t.endAt)}function ic(e){return j.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Vo{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function m0(e,t,n,r,s,i,o,a){return new Vo(e,t,n,r,s,i,o,a)}function Cl(e){return new Vo(e)}function Nh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function _0(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function A0(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function y0(e){return e.collectionGroup!==null}function dr(e){const t=Y(e);if(t.Pe===null){t.Pe=[];const n=A0(t),r=_0(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new ss(n)),t.Pe.push(new ss(Qt.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new ss(Qt.keyField(),i))}}}return t.Pe}function We(e){const t=Y(e);if(!t.Ie)if(t.limitType==="F")t.Ie=Oh(t.path,t.collectionGroup,dr(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of dr(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new ss(i.field,o))}const r=t.endAt?new ji(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ji(t.startAt.position,t.startAt.inclusive):null;t.Ie=Oh(t.path,t.collectionGroup,n,t.filters,t.limit,r,s)}return t.Ie}function oc(e,t,n){return new Vo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xo(e,t){return Rl(We(e),We(t))&&e.limitType===t.limitType}function _g(e){return`${wl(We(e))}|lt:${e.limitType}`}function ac(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gg(s)).join(", ")}]`),Do(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>wr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>wr(s)).join(",")),`Target(${r})`}(We(e))}; limitType=${e.limitType})`}function ko(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of dr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=kh(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,dr(r),s)||r.endAt&&!function(o,a,c){const l=kh(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,dr(r),s))}(e,t)}function E0(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ag(e){return(t,n)=>{let r=!1;for(const s of dr(e)){const i=v0(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function v0(e,t,n){const r=e.field.isKeyField()?j.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Tr(c,l):Q()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Or{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Mr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return cg(this.inner)}size(){return this.innerSize}}/**
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
 */const I0=new yt(j.comparator);function Ge(){return I0}const yg=new yt(j.comparator);function Kr(...e){let t=yg;for(const n of e)t=t.insert(n.key,n);return t}function Eg(e){let t=yg;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function On(){return is()}function vg(){return is()}function is(){return new Or(e=>e.toString(),(e,t)=>e.isEqual(t))}const T0=new yt(j.comparator),w0=new Wt(j.comparator);function Z(...e){let t=w0;for(const n of e)t=t.add(n);return t}const R0=new Wt(nt);function C0(){return R0}/**
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
 */function Ig(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(t)?"-0":t}}function Tg(e){return{integerValue:""+e}}function P0(e,t){return n0(t)?Tg(t):Ig(e,t)}/**
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
 */class Mo{constructor(){this._=void 0}}function S0(e,t,n){return e instanceof qi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vl(i)&&(i=Il(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Ds?Rg(e,t):e instanceof Vs?Cg(e,t):function(s,i){const o=wg(s,i),a=Fh(o)+Fh(s.Te);return rc(o)&&rc(s.Te)?Tg(a):Ig(s.serializer,a)}(e,t)}function b0(e,t,n){return e instanceof Ds?Rg(e,t):e instanceof Vs?Cg(e,t):n}function wg(e,t){return e instanceof Hi?function(r){return rc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class qi extends Mo{}class Ds extends Mo{constructor(t){super(),this.elements=t}}function Rg(e,t){const n=Pg(t);for(const r of e.elements)n.some(s=>Fe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vs extends Mo{constructor(t){super(),this.elements=t}}function Cg(e,t){let n=Pg(t);for(const r of e.elements)n=n.filter(s=>!Fe(s,r));return{arrayValue:{values:n}}}class Hi extends Mo{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Fh(e){return Tt(e.integerValue||e.doubleValue)}function Pg(e){return Tl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function D0(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ds&&s instanceof Ds||r instanceof Vs&&s instanceof Vs?Ir(r.elements,s.elements,Fe):r instanceof Hi&&s instanceof Hi?Fe(r.Te,s.Te):r instanceof qi&&s instanceof qi}(e.transform,t.transform)}class V0{constructor(t,n){this.version=t,this.transformResults=n}}class qe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qe}static exists(t){return new qe(void 0,t)}static updateTime(t){return new qe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _i(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Oo{}function Sg(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Dg(e.key,qe.none()):new Qs(e.key,e.data,qe.none());{const n=e.data,r=ue.empty();let s=new Wt(Qt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Wn(e.key,r,new _e(s.toArray()),qe.none())}}function x0(e,t,n){e instanceof Qs?function(s,i,o){const a=s.value.clone(),c=Bh(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Wn?function(s,i,o){if(!_i(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Bh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(bg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function os(e,t,n,r){return e instanceof Qs?function(i,o,a,c){if(!_i(i.precondition,o))return a;const l=i.value.clone(),u=Uh(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Wn?function(i,o,a,c){if(!_i(i.precondition,o))return a;const l=Uh(i.fieldTransforms,c,o),u=o.data;return u.setAll(bg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return _i(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function k0(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=wg(r.transform,s||null);i!=null&&(n===null&&(n=ue.empty()),n.set(r.field,i))}return n||null}function Lh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ir(r,s,(i,o)=>D0(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Qs extends Oo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wn extends Oo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bg(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Bh(e,t,n){const r=new Map;_t(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,b0(o,a,n[s]))}return r}function Uh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,S0(i,o,t))}return r}class Dg extends Oo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M0 extends Oo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class O0{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&x0(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=os(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=os(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=vg();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Sg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Z())}isEqual(t){return this.batchId===t.batchId&&Ir(this.mutations,t.mutations,(n,r)=>Lh(n,r))&&Ir(this.baseMutations,t.baseMutations,(n,r)=>Lh(n,r))}}class Pl{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){_t(t.mutations.length===r.length);let s=function(){return T0}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Pl(t,n,r,s)}}/**
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
 */class N0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class F0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var It,tt;function L0(e){switch(e){default:return Q();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Vg(e){if(e===void 0)return Ke("GRPC error has no .code"),T.UNKNOWN;switch(e){case It.OK:return T.OK;case It.CANCELLED:return T.CANCELLED;case It.UNKNOWN:return T.UNKNOWN;case It.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case It.INTERNAL:return T.INTERNAL;case It.UNAVAILABLE:return T.UNAVAILABLE;case It.UNAUTHENTICATED:return T.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case It.NOT_FOUND:return T.NOT_FOUND;case It.ALREADY_EXISTS:return T.ALREADY_EXISTS;case It.PERMISSION_DENIED:return T.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case It.ABORTED:return T.ABORTED;case It.OUT_OF_RANGE:return T.OUT_OF_RANGE;case It.UNIMPLEMENTED:return T.UNIMPLEMENTED;case It.DATA_LOSS:return T.DATA_LOSS;default:return Q()}}(tt=It||(It={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Sl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return li}static getOrCreateInstance(){return li===null&&(li=new Sl),li}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let li=null;/**
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
 */function B0(){return new TextEncoder}/**
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
 */const U0=new fr([4294967295,4294967295],0);function $h(e){const t=B0().encode(e),n=new $w;return n.update(t),new Uint8Array(n.digest())}function jh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new fr([n,r],0),new fr([s,i],0)]}class bl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wr(`Invalid padding: ${n}`);if(r<0)throw new Wr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=fr.fromNumber(this.de)}Re(t,n,r){let s=t.add(n.multiply(fr.fromNumber(r)));return s.compare(U0)===1&&(s=new fr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=$h(t),[r,s]=jh(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new bl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=$h(t),[r,s]=jh(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class No{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,zs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new No(W.min(),s,new yt(nt),Ge(),Z())}}class zs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new zs(r,n,Z(),Z(),Z())}}/**
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
 */class Ai{constructor(t,n,r,s){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=s}}class xg{constructor(t,n){this.targetId=t,this.pe=n}}class kg{constructor(t,n,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qh{constructor(){this.ye=0,this.we=Qh(),this.Se=Gt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=Z(),n=Z(),r=Z();return this.we.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new zs(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Qh()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class $0{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Ge(),this.$e=Hh(),this.Ue=new yt(nt)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:Q()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){var n,r;const s=t.targetId,i=t.pe.count,o=this.Xe(s);if(o){const a=o.target;if(ic(a))if(i===0){const c=new j(a.path);this.ze(s,c,jt.newNoDocument(c,W.min()))}else _t(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(t,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=Sl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,g,y){var I,R,S,k,H,O;const ft={localCacheCount:g,existenceFilterCount:y.count},at=y.unchangedNames;return at&&(ft.bloomFilter={applied:h===0,hashCount:(I=at==null?void 0:at.hashCount)!==null&&I!==void 0?I:0,bitmapLength:(k=(S=(R=at==null?void 0:at.bits)===null||R===void 0?void 0:R.bitmap)===null||S===void 0?void 0:S.length)!==null&&k!==void 0?k:0,padding:(O=(H=at==null?void 0:at.bits)===null||H===void 0?void 0:H.padding)!==null&&O!==void 0?O:0},f&&(ft.bloomFilter.mightContain=f)),ft}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:s}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=Qn(i).toUint8Array()}catch(h){if(h instanceof lg)return vr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new bl(c,o,a)}catch(h){return vr(h instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return l.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(t.targetId,u)?0:2,nt:u}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(t,i,null),s++)}),s}st(t){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&ic(a.target)){const c=new j(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,jt.newNoDocument(c,t))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=Z();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(t));const s=new No(t,n,this.Ue,this.Ke,r);return this.Ke=Ge(),this.$e=Hh(),this.Ue=new yt(nt),s}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ot(t,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new qh,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Wt(nt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||F("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new qh),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Hh(){return new yt(j.comparator)}function Qh(){return new yt(j.comparator)}const j0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),q0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),H0=(()=>({and:"AND",or:"OR"}))();class Q0{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function cc(e,t){return e.useProto3Json||Do(t)?t:{value:t}}function Qi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function z0(e,t){return Qi(e,t.toTimestamp())}function Oe(e){return _t(!!e),W.fromTimestamp(function(n){const r=An(n);return new St(r.seconds,r.nanos)}(e))}function Dl(e,t){return function(r){return new At(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Og(e){const t=At.fromString(e);return _t(Bg(t)),t}function lc(e,t){return Dl(e.databaseId,t.path)}function ga(e,t){const n=Og(t);if(n.get(1)!==e.databaseId.projectId)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(Ng(n))}function uc(e,t){return Dl(e.databaseId,t)}function K0(e){const t=Og(e);return t.length===4?At.emptyPath():Ng(t)}function hc(e){return new At(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ng(e){return _t(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function zh(e,t,n){return{name:lc(e,t),fields:n.value.mapValue.fields}}function W0(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(_t(u===void 0||typeof u=="string"),Gt.fromBase64String(u||"")):(_t(u===void 0||u instanceof Uint8Array),Gt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Vg(l.code);return new $(u,l.message||"")}(o);n=new kg(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ga(e,r.document.name),i=Oe(r.document.updateTime),o=r.document.createTime?Oe(r.document.createTime):W.min(),a=new ue({mapValue:{fields:r.document.fields}}),c=jt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ai(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ga(e,r.document),i=r.readTime?Oe(r.readTime):W.min(),o=jt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ai([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ga(e,r.document),i=r.removedTargetIds||[];n=new Ai([],i,s,null)}else{if(!("filter"in t))return Q();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new F0(s,i),a=r.targetId;n=new xg(a,o)}}return n}function G0(e,t){let n;if(t instanceof Qs)n={update:zh(e,t.key,t.value)};else if(t instanceof Dg)n={delete:lc(e,t.key)};else if(t instanceof Wn)n={update:zh(e,t.key,t.data),updateMask:sR(t.fieldMask)};else{if(!(t instanceof M0))return Q();n={verify:lc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof qi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ds)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Hi)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Q()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:z0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(e,t.precondition)),n}function Y0(e,t){return e&&e.length>0?(_t(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Oe(s.updateTime):Oe(i);return o.isEqual(W.min())&&(o=Oe(i)),new V0(o,s.transformResults||[])}(n,t))):[]}function J0(e,t){return{documents:[uc(e,t.path)]}}function X0(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=uc(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=uc(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Lg(Le.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:rr(h.field),direction:eR(h.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=cc(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Z0(e){let t=K0(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_t(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Fg(h);return f instanceof Le&&dg(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(y){return new ss(sr(y.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Do(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,g=h.values||[];return new ji(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,g=h.values||[];return new ji(g,f)}(n.endAt)),m0(t,s,o,i,a,"F",c,l)}function tR(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Fg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=sr(n.unaryFilter.field);return Ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=sr(n.unaryFilter.field);return Ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=sr(n.unaryFilter.field);return Ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=sr(n.unaryFilter.field);return Ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(e):e.fieldFilter!==void 0?function(n){return Ct.create(sr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Le.create(n.compositeFilter.filters.map(r=>Fg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(e):Q()}function eR(e){return j0[e]}function nR(e){return q0[e]}function rR(e){return H0[e]}function rr(e){return{fieldPath:e.canonicalString()}}function sr(e){return Qt.fromServerFormat(e.fieldPath)}function Lg(e){return e instanceof Ct?function(n){if(n.op==="=="){if(xh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NAN"}};if(Vh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NOT_NAN"}};if(Vh(n.value))return{unaryFilter:{field:rr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(n.field),op:nR(n.op),value:n.value}}}(e):e instanceof Le?function(n){const r=n.getFilters().map(s=>Lg(s));return r.length===1?r[0]:{compositeFilter:{op:rR(n.op),filters:r}}}(e):Q()}function sR(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Bg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class on{constructor(t,n,r,s,i=W.min(),o=W.min(),a=Gt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new on(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class iR{constructor(t){this.ct=t}}function oR(e){const t=Z0({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?oc(t,t.limit,"L"):t}/**
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
 */class aR{constructor(){this.sn=new cR}addToCollectionParentIndex(t,n){return this.sn.add(n),C.resolve()}getCollectionParents(t,n){return C.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return C.resolve()}deleteFieldIndex(t,n){return C.resolve()}getDocumentsMatchingTarget(t,n){return C.resolve(null)}getIndexType(t,n){return C.resolve(0)}getFieldIndexes(t,n){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,n){return C.resolve(_n.min())}getMinOffsetFromCollectionGroup(t,n){return C.resolve(_n.min())}updateCollectionGroup(t,n,r){return C.resolve()}updateIndexEntries(t,n){return C.resolve()}}class cR{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Wt(At.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Wt(At.comparator)).toArray()}}/**
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
 */class Rr{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Rr(0)}static On(){return new Rr(-1)}}/**
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
 */class lR{constructor(){this.changes=new Or(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,jt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class uR{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class hR{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&os(r.mutation,s,_e.empty(),St.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Z()){const s=On();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Kr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=On();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Z()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Ge();const o=is(),a=function(){return is()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Wn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),os(u.mutation,l,u.mutation.getFieldMask(),St.now())):o.set(l.key,_e.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new uR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=is();let s=new yt((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||_e.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Z()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=vg();u.forEach(f=>{if(!i.has(f)){const g=Sg(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):y0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):C.resolve(On());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,Z())).next(u=>({batchId:a,changes:Eg(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new j(n)).next(r=>{let s=Kr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=Kr();return this.indexManager.getCollectionParents(t,s).next(o=>C.forEach(o,a=>{const c=function(u,h){return new Vo(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,jt.newInvalidDocument(l)))});let o=Kr();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&os(l.mutation,c,_e.empty(),St.now()),ko(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class fR{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return C.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Oe(s.createTime)}}(n)),C.resolve()}getNamedQuery(t,n){return C.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(s){return{name:s.name,query:oR(s.bundledQuery),readTime:Oe(s.readTime)}}(n)),C.resolve()}}/**
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
 */class dR{constructor(){this.overlays=new yt(j.comparator),this.cr=new Map}getOverlay(t,n){return C.resolve(this.overlays.get(n))}getOverlays(t,n){const r=On();return C.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),C.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),C.resolve()}getOverlaysForCollection(t,n,r){const s=On(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new yt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=On(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=On(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new N0(n,r));let i=this.cr.get(n);i===void 0&&(i=Z(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class Vl{constructor(){this.lr=new Wt(Dt.hr),this.Pr=new Wt(Dt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new Dt(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new Dt(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new j(new At([])),r=new Dt(n,t),s=new Dt(n,t+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new j(new At([])),r=new Dt(n,t),s=new Dt(n,t+1);let i=Z();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Dt(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Dt{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return j.comparator(t.key,n.key)||nt(t.mr,n.mr)}static Ir(t,n){return nt(t.mr,n.mr)||j.comparator(t.key,n.key)}}/**
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
 */class pR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Wt(Dt.hr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new O0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new Dt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(t,n){return C.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Dt(n,0),s=new Dt(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Wt(nt);return n.forEach(s=>{const i=new Dt(s,0),o=new Dt(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),C.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Dt(new j(i),0);let a=new Wt(nt);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),C.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){_t(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return C.forEach(n.mutations,s=>{const i=new Dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new Dt(n,0),s=this.pr.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gR{constructor(t){this.Dr=t,this.docs=function(){return new yt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(t,n){let r=Ge();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ge();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Zw(Xw(u),r)<=0||(s.has(u.key)||ko(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(t,n,r,s){Q()}vr(t,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new mR(this)}getSize(t){return C.resolve(this.size)}}class mR extends lR{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(t,s)):this.sr.removeEntry(r)}),C.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
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
 */class _R{constructor(t){this.persistence=t,this.Cr=new Or(n=>wl(n),Rl),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Vl,this.targetCount=0,this.Or=Rr.xn()}forEachTarget(t,n){return this.Cr.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),C.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new Rr(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,C.resolve()}updateTargetData(t,n){return this.Ln(n),C.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return C.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),C.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),C.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return C.resolve(r)}containsKey(t,n){return C.resolve(this.Mr.containsKey(n))}}/**
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
 */class AR{constructor(t,n){this.Nr={},this.overlays={},this.Br=new El(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new _R(this),this.indexManager=new aR,this.remoteDocumentCache=function(s){return new gR(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new iR(n),this.Qr=new fR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dR,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new pR(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){F("MemoryPersistence","Starting transaction:",t);const s=new yR(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(t,n){return C.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class yR extends e0{constructor(t){super(),this.currentSequenceNumber=t}}class xl{constructor(t){this.persistence=t,this.Wr=new Vl,this.Gr=null}static zr(t){return new xl(t)}get jr(){if(this.Gr)return this.Gr;throw Q()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),C.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),C.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.jr,r=>{const s=j.fromPath(r);return this.Hr(t,s).next(i=>{i||n.removeEntry(s,W.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return C.or([()=>C.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
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
 */class kl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=s}static qi(t,n){let r=Z(),s=Z();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kl(t,n.fromCache,r,s)}}/**
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
 */class ER{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,s){return this.$i(t,n).next(i=>i||this.Ui(t,n,s,r)).next(i=>i||this.Wi(t,n))}$i(t,n){if(Nh(n))return C.resolve(null);let r=We(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=oc(n,null,"F"),r=We(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=Z(...i);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(t,oc(n,null,"F")):this.ji(t,l,n,c)}))})))}Ui(t,n,r,s){return Nh(n)||s.isEqual(W.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(t,n):(Ph()<=ot.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ac(n)),this.ji(t,o,n,Jw(s,-1)))})}Gi(t,n){let r=new Wt(Ag(t));return n.forEach((s,i)=>{ko(t,i)&&(r=r.add(i))}),r}zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(t,n){return Ph()<=ot.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",ac(n)),this.Ki.getDocumentsMatchingQuery(t,n,_n.min())}ji(t,n,r,s){return this.Ki.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class vR{constructor(t,n,r,s){this.persistence=t,this.Hi=n,this.serializer=s,this.Ji=new yt(nt),this.Yi=new Or(i=>wl(i),Rl),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hR(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function IR(e,t,n,r){return new vR(e,t,n,r)}async function Ug(e,t){const n=Y(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Z();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function TR(e,t){const n=Y(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let g=C.resolve();return f.forEach(y=>{g=g.next(()=>u.getEntry(c,y)).next(I=>{const R=l.docVersions.get(y);_t(R!==null),I.version.compareTo(R)<0&&(h.applyToRemoteDocument(I,l),I.isValidDocument()&&(I.setReadTime(l.commitVersion),u.addEntry(I)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Z();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function $g(e){const t=Y(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function wR(e,t){const n=Y(e),r=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Gt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(I,R,S){return I.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,g,u)&&a.push(n.kr.updateTargetData(i,g))});let c=Ge(),l=Z();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(RR(i,o,t.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(W.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function RR(e,t,n){let r=Z(),s=Z();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Ge();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function CR(e,t){const n=Y(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function PR(e,t){const n=Y(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,t).next(i=>i?(s=i,C.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new on(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function fc(e,t,n){const r=Y(e),s=r.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Hs(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(s.target)}function Kh(e,t,n){const r=Y(e);let s=W.min(),i=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=Y(c),f=h.Yi.get(u);return f!==void 0?C.resolve(h.Ji.get(f)):h.kr.getTargetData(l,u)}(r,o,We(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?s:W.min(),n?i:Z())).next(a=>(SR(r,E0(t),a),{documents:a,ss:i})))}function SR(e,t,n){let r=e.Zi.get(t)||W.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Zi.set(t,r)}class Wh{constructor(){this.activeTargetIds=C0()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bR{constructor(){this.Hs=new Wh,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Wh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class DR{Ys(t){}shutdown(){}}/**
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
 */class Gh{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const VR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xR{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
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
 */const Ut="WebChannelConnection";class kR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=ma(),c=this.mo(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,i,o),this.po(n,c,l,s).then(u=>(F("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw vr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=VR[n];return`${this.To}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,s){const i=ma();return new Promise((o,a)=>{const c=new Uw;c.setWithCredentials(!0),c.listenOnce(Fw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pa.NO_ERROR:const u=c.getResponseJson();F(Ut,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case pa.TIMEOUT:F(Ut,`RPC '${t}' ${i} timed out`),a(new $(T.DEADLINE_EXCEEDED,"Request time out"));break;case pa.HTTP_ERROR:const h=c.getStatus();if(F(Ut,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(R){const S=R.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(S)>=0?S:T.UNKNOWN}(g.status);a(new $(y,g.message))}else a(new $(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(T.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{F(Ut,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);F(Ut,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}wo(t,n,r){const s=ma(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ow(),a=Nw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Bw({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");F(Ut,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const y=new xR({so:R=>{g?F(Ut,`Not sending because RPC '${t}' stream ${s} is closed:`,R):(f||(F(Ut,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),F(Ut,`RPC '${t}' stream ${s} sending:`,R),h.send(R))},oo:()=>h.close()}),I=(R,S,k)=>{R.listen(S,H=>{try{k(H)}catch(O){setTimeout(()=>{throw O},0)}})};return I(h,oi.EventType.OPEN,()=>{g||F(Ut,`RPC '${t}' stream ${s} transport opened.`)}),I(h,oi.EventType.CLOSE,()=>{g||(g=!0,F(Ut,`RPC '${t}' stream ${s} transport closed`),y.Po())}),I(h,oi.EventType.ERROR,R=>{g||(g=!0,vr(Ut,`RPC '${t}' stream ${s} transport errored:`,R),y.Po(new $(T.UNAVAILABLE,"The operation could not be completed")))}),I(h,oi.EventType.MESSAGE,R=>{var S;if(!g){const k=R.data[0];_t(!!k);const H=k,O=H.error||((S=H[0])===null||S===void 0?void 0:S.error);if(O){F(Ut,`RPC '${t}' stream ${s} received error:`,O);const ft=O.status;let at=function(Je){const se=It[Je];if(se!==void 0)return Vg(se)}(ft),re=O.message;at===void 0&&(at=T.INTERNAL,re="Unknown error status: "+ft+" with message "+O.message),g=!0,y.Po(new $(at,re)),h.close()}else F(Ut,`RPC '${t}' stream ${s} received:`,k),y.Io(k)}}),I(a,Lw.STAT_EVENT,R=>{R.stat===Rh.PROXY?F(Ut,`RPC '${t}' stream ${s} detected buffering proxy`):R.stat===Rh.NOPROXY&&F(Ut,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function _a(){return typeof document<"u"?document:null}/**
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
 */function Fo(e){return new Q0(e,!0)}/**
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
 */class jg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class qg{constructor(t,n,r,s,i,o,a,c){this.ii=t,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new jg(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{t(()=>{const s=new $(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MR extends qg{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=W0(this.serializer,t),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Oe(o.readTime):W.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=hc(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ic(c)?{documents:J0(i,c)}:{query:X0(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Mg(i,o.resumeToken);const l=cc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=Qi(i,o.snapshotVersion.toTimestamp());const l=cc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=tR(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=hc(this.serializer),n.removeTarget=t,this.Ho(n)}}class OR extends qg{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(_t(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=Y0(t.writeResults,t.commitTime),r=Oe(t.commitTime);return this.listener.u_(r,n)}return _t(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=hc(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>G0(this.serializer,r))};this.Ho(n)}}/**
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
 */class NR extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(T.UNKNOWN,s.toString())})}yo(t,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(T.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class FR{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Ke(n),this.d_=!1):F("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class LR{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Gn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Y(c);l.y_.add(4),await Ks(l),l.b_.set("Unknown"),l.y_.delete(4),await Lo(l)}(this))})}),this.b_=new FR(r,s)}}async function Lo(e){if(Gn(e))for(const t of e.w_)await t(!0)}async function Ks(e){for(const t of e.w_)await t(!1)}function Hg(e,t){const n=Y(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),Nl(n)?Ol(n):Nr(n).Uo()&&Ml(n,t))}function Qg(e,t){const n=Y(e),r=Nr(n);n.p_.delete(t),r.Uo()&&zg(n,t),n.p_.size===0&&(r.Uo()?r.zo():Gn(n)&&n.b_.set("Unknown"))}function Ml(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Nr(e).i_(t)}function zg(e,t){e.D_.Be(t),Nr(e).s_(t)}function Ol(e){e.D_=new $0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Nr(e).start(),e.b_.A_()}function Nl(e){return Gn(e)&&!Nr(e).$o()&&e.p_.size>0}function Gn(e){return Y(e).y_.size===0}function Kg(e){e.D_=void 0}async function BR(e){e.p_.forEach((t,n)=>{Ml(e,t)})}async function UR(e,t){Kg(e),Nl(e)?(e.b_.m_(t),Ol(e)):e.b_.set("Unknown")}async function $R(e,t,n){if(e.b_.set("Online"),t instanceof kg&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(e,t)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await zi(e,r)}else if(t instanceof Ai?e.D_.We(t):t instanceof xg?e.D_.Ze(t):e.D_.je(t),!n.isEqual(W.min()))try{const r=await $g(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.p_.get(l);u&&i.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.p_.get(c);if(!u)return;i.p_.set(c,u.withResumeToken(Gt.EMPTY_BYTE_STRING,u.snapshotVersion)),zg(i,c);const h=new on(u.target,c,l,u.sequenceNumber);Ml(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await zi(e,r)}}async function zi(e,t,n){if(!Hs(t))throw t;e.y_.add(1),await Ks(e),e.b_.set("Offline"),n||(n=()=>$g(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await Lo(e)})}function Wg(e,t){return t().catch(n=>zi(e,n,t))}async function Bo(e){const t=Y(e),n=yn(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;jR(t);)try{const s=await CR(t.localStore,r);if(s===null){t.g_.length===0&&n.zo();break}r=s.batchId,qR(t,s)}catch(s){await zi(t,s)}Gg(t)&&Yg(t)}function jR(e){return Gn(e)&&e.g_.length<10}function qR(e,t){e.g_.push(t);const n=yn(e);n.Uo()&&n.__&&n.a_(t.mutations)}function Gg(e){return Gn(e)&&!yn(e).$o()&&e.g_.length>0}function Yg(e){yn(e).start()}async function HR(e){yn(e).l_()}async function QR(e){const t=yn(e);for(const n of e.g_)t.a_(n.mutations)}async function zR(e,t,n){const r=e.g_.shift(),s=Pl.from(r,t,n);await Wg(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Bo(e)}async function KR(e,t){t&&yn(e).__&&await async function(r,s){if(function(o){return L0(o)&&o!==T.ABORTED}(s.code)){const i=r.g_.shift();yn(r).Go(),await Wg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Bo(r)}}(e,t),Gg(e)&&Yg(e)}async function Yh(e,t){const n=Y(e);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Gn(n);n.y_.add(3),await Ks(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await Lo(n)}async function WR(e,t){const n=Y(e);t?(n.y_.delete(2),await Lo(n)):t||(n.y_.add(2),await Ks(n),n.b_.set("Unknown"))}function Nr(e){return e.v_||(e.v_=function(n,r,s){const i=Y(n);return i.P_(),new MR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:BR.bind(null,e),uo:UR.bind(null,e),r_:$R.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),Nl(e)?Ol(e):e.b_.set("Unknown")):(await e.v_.stop(),Kg(e))})),e.v_}function yn(e){return e.C_||(e.C_=function(n,r,s){const i=Y(n);return i.P_(),new OR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:HR.bind(null,e),uo:KR.bind(null,e),c_:QR.bind(null,e),u_:zR.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await Bo(e)):(await e.C_.stop(),e.g_.length>0&&(F("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
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
 */class Fl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Fl(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ll(e,t){if(Ke("AsyncQueue",`${t}: ${e}`),Hs(e))return new $(T.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class pr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Kr(),this.sortedSet=new yt(this.comparator)}static emptySet(t){return new pr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof pr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new pr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Jh{constructor(){this.F_=new yt(j.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):Q():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Cr{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cr(t,n,pr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class GR{constructor(){this.x_=void 0,this.listeners=[]}}class YR{constructor(){this.queries=new Or(t=>_g(t),xo),this.onlineState="Unknown",this.O_=new Set}}async function JR(e,t){const n=Y(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new GR),s)try{i.x_=await n.onListen(r)}catch(o){const a=Ll(o,`Initialization of query '${ac(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.N_(n.onlineState),i.x_&&t.B_(i.x_)&&Bl(n)}async function XR(e,t){const n=Y(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function ZR(e,t){const n=Y(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&Bl(n)}function tC(e,t,n){const r=Y(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Bl(e){e.O_.forEach(t=>{t.next()})}class eC{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Cr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=Cr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
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
 */class Jg{constructor(t){this.key=t}}class Xg{constructor(t){this.key=t}}class nC{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=Z(),this.mutatedKeys=Z(),this.na=Ag(t),this.ra=new pr(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new Jh,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),g=ko(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;f&&g?f.data.isEqual(g.data)?y!==I&&(r.track({type:3,doc:g}),R=!0):this._a(f,g)||(r.track({type:2,doc:g}),R=!0,(c&&this.na(g,c)>0||l&&this.na(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),R=!0):f&&!g&&(r.track({type:1,doc:f}),R=!0,(c||l)&&(a=!0)),R&&(g?(o=o.add(g),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const i=t.oa.M_();i.sort((l,u)=>function(f,g){const y=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return y(f)-y(g)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,i.length!==0||c?{snapshot:new Cr(this.query,t.ra,s,i,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Jh,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=Z(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new Xg(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new Jg(r))}),n}ha(t){this.X_=t.ss,this.ta=Z();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return Cr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class rC{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class sC{constructor(t){this.key=t,this.Ia=!1}}class iC{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Or(a=>_g(a),xo),this.da=new Map,this.Aa=new Set,this.Ra=new yt(j.comparator),this.Va=new Map,this.ma=new Vl,this.fa={},this.ga=new Map,this.pa=Rr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function oC(e,t){const n=mC(e);let r,s;const i=n.Ea.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await PR(n.localStore,We(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await aC(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Hg(n.remoteStore,o)}return s}async function aC(e,t,n,r,s){e.wa=(h,f,g)=>async function(I,R,S,k){let H=R.view.sa(S);H.zi&&(H=await Kh(I.localStore,R.query,!1).then(({documents:at})=>R.view.sa(at,H)));const O=k&&k.targetChanges.get(R.targetId),ft=R.view.applyChanges(H,I.isPrimaryClient,O);return Zh(I,R.targetId,ft.ca),ft.snapshot}(e,h,f,g);const i=await Kh(e.localStore,t,!0),o=new nC(t,i.ss),a=o.sa(i.documents),c=zs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);Zh(e,n,l.ca);const u=new rC(t,n,o);return e.Ea.set(t,u),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),l.snapshot}async function cC(e,t){const n=Y(e),r=n.Ea.get(t),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!xo(i,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Qg(n.remoteStore,r.targetId),dc(n,r.targetId)}).catch(qs)):(dc(n,r.targetId),await fc(n.localStore,r.targetId,!0))}async function lC(e,t,n){const r=_C(e);try{const s=await function(o,a){const c=Y(o),l=St.now(),u=a.reduce((g,y)=>g.add(y.key),Z());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=Ge(),I=Z();return c.Xi.getEntries(g,u).next(R=>{y=R,y.forEach((S,k)=>{k.isValidDocument()||(I=I.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,y)).next(R=>{h=R;const S=[];for(const k of a){const H=k0(k,h.get(k.key).overlayedDocument);H!=null&&S.push(new Wn(k.key,H,ug(H.value.mapValue),qe.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,S,a)}).next(R=>{f=R;const S=R.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(g,R.batchId,S)})}).then(()=>({batchId:f.batchId,changes:Eg(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new yt(nt)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ws(r,s.changes),await Bo(r.remoteStore)}catch(s){const i=Ll(s,"Failed to persist write");n.reject(i)}}async function Zg(e,t){const n=Y(e);try{const r=await wR(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(_t(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?_t(o.Ia):s.removedDocuments.size>0&&(_t(o.Ia),o.Ia=!1))}),await Ws(n,r,t)}catch(r){await qs(r)}}function Xh(e,t,n){const r=Y(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Y(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.N_(a)&&(l=!0)}),l&&Bl(c)}(r.eventManager,t),s.length&&r.Ta.r_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function uC(e,t,n){const r=Y(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Va.get(t),i=s&&s.key;if(i){let o=new yt(j.comparator);o=o.insert(i,jt.newNoDocument(i,W.min()));const a=Z().add(i),c=new No(W.min(),new Map,new yt(nt),o,a);await Zg(r,c),r.Ra=r.Ra.remove(i),r.Va.delete(t),Ul(r)}else await fc(r.localStore,t,!1).then(()=>dc(r,t,n)).catch(qs)}async function hC(e,t){const n=Y(e),r=t.batch.batchId;try{const s=await TR(n.localStore,t);em(n,r,null),tm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ws(n,s)}catch(s){await qs(s)}}async function fC(e,t,n){const r=Y(e);try{const s=await function(o,a){const c=Y(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(_t(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);em(r,t,n),tm(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ws(r,s)}catch(s){await qs(s)}}function tm(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function em(e,t,n){const r=Y(e);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.fa[r.currentUser.toKey()]=s}}function dc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||nm(e,r)})}function nm(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(Qg(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),Ul(e))}function Zh(e,t,n){for(const r of n)r instanceof Jg?(e.ma.addReference(r.key,t),dC(e,r)):r instanceof Xg?(F("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||nm(e,r.key)):Q()}function dC(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(F("SyncEngine","New document in limbo: "+n),e.Aa.add(r),Ul(e))}function Ul(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new j(At.fromString(t)),r=e.pa.next();e.Va.set(r,new sC(n)),e.Ra=e.Ra.insert(n,r),Hg(e.remoteStore,new on(We(Cl(n.path)),r,"TargetPurposeLimboResolution",El.ae))}}async function Ws(e,t,n){const r=Y(e),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=kl.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(c,l){const u=Y(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,f=>C.forEach(f.Li,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>C.forEach(f.ki,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!Hs(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=u.Ji.get(f),y=g.snapshotVersion,I=g.withLastLimboFreeSnapshotVersion(y);u.Ji=u.Ji.insert(f,I)}}}(r.localStore,i))}async function pC(e,t){const n=Y(e);if(!n.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const r=await Ug(n.localStore,t);n.currentUser=t,function(i,o){i.ga.forEach(a=>{a.forEach(c=>{c.reject(new $(T.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ws(n,r.ts)}}function gC(e,t){const n=Y(e),r=n.Va.get(t);if(r&&r.Ia)return Z().add(r.key);{let s=Z();const i=n.da.get(t);if(!i)return s;for(const o of i){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function mC(e){const t=Y(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=uC.bind(null,t),t.Ta.r_=ZR.bind(null,t.eventManager),t.Ta.Sa=tC.bind(null,t.eventManager),t}function _C(e){const t=Y(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fC.bind(null,t),t}class tf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Fo(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return IR(this.persistence,new ER,t.initialUser,this.serializer)}createPersistence(t){return new AR(xl.zr,this.serializer)}createSharedClientState(t){return new bR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AC{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pC.bind(null,this.syncEngine),await WR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new YR}()}createDatastore(t){const n=Fo(t.databaseInfo.databaseId),r=function(i){return new kR(i)}(t.databaseInfo);return function(i,o,a,c){return new NR(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new LR(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Xh(this.syncEngine,n,0),function(){return Gh.v()?new Gh:new DR}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new iC(s,i,o,a,c,l);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Y(n);F("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Ks(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class yC{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Ke("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class EC{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=ag.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ll(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Aa(e,t){e.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ug(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ef(e,t){e.asyncQueue.verifyOperationInProgress();const n=await IC(e);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>Yh(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>Yh(t.remoteStore,i)),e._onlineComponents=t}function vC(e){return e.name==="FirebaseError"?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function IC(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Aa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!vC(n))throw n;vr("Error using user provided cache. Falling back to memory cache: "+n),await Aa(e,new tf)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Aa(e,new tf);return e._offlineComponents}async function rm(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await ef(e,e._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await ef(e,new AC))),e._onlineComponents}function TC(e){return rm(e).then(t=>t.syncEngine)}async function nf(e){const t=await rm(e),n=t.eventManager;return n.onListen=oC.bind(null,t.syncEngine),n.onUnlisten=cC.bind(null,t.syncEngine),n}/**
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
 */function sm(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const rf=new Map;/**
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
 */function im(e,t,n){if(!n)throw new $(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function wC(e,t,n,r){if(t===!0&&r===!0)throw new $(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sf(e){if(!j.isDocumentKey(e))throw new $(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function of(e){if(j.isDocumentKey(e))throw new $(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function $l(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q()}function as(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new $(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$l(e);throw new $(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class af{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new $(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new $(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sm((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Uo{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new $(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jw;switch(r.type){case"firstParty":return new zw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rf.get(n);r&&(F("ComponentProvider","Removing Datastore"),rf.delete(n),r.terminate())}(this),Promise.resolve()}}function RC(e,t,n,r={}){var s;const i=(e=as(e,Uo))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=$t.MOCK_USER;else{a=$E(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new $t(l)}e._authCredentials=new qw(new og(a,c))}}/**
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
 */class $o{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $o(this.firestore,t,this._query)}}class fe{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fe(this.firestore,t,this._key)}}class dn extends $o{constructor(t,n,r){super(t,n,Cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new fe(this.firestore,null,new j(t))}withConverter(t){return new dn(this.firestore,t,this._path)}}function om(e,t,...n){if(e=gn(e),im("collection","path",t),e instanceof Uo){const r=At.fromString(t,...n);return of(r),new dn(e,null,r)}{if(!(e instanceof fe||e instanceof dn))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return of(r),new dn(e.firestore,null,r)}}function am(e,t,...n){if(e=gn(e),arguments.length===1&&(t=ag.V()),im("doc","path",t),e instanceof Uo){const r=At.fromString(t,...n);return sf(r),new fe(e,null,new j(r))}{if(!(e instanceof fe||e instanceof dn))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return sf(r),new fe(e.firestore,e instanceof dn?e.converter:null,new j(r))}}/**
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
 */class CC{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new jg(this,"async_queue_retry"),this.Xa=()=>{const n=_a();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=_a();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=_a();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new Bn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Hs(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const s=Fl.createAndSchedule(this,t,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&Q()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}function cf(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Ki extends Uo{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new CC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lm(this),this._firestoreClient.terminate()}}function PC(e,t){const n=typeof e=="object"?e:Vd(),r=typeof e=="string"?e:t||"(default)",s=ks(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=BE("firestore");i&&RC(s,...i)}return s}function cm(e){return e._firestoreClient||lm(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lm(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new s0(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,sm(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new EC(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Pr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pr(Gt.fromBase64String(t))}catch(n){throw new $(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Pr(Gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class jl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new $(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class um{constructor(t){this._methodName=t}}/**
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
 */class ql{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new $(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new $(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
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
 */const SC=/^__.*__$/;class bC{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Wn(t,this.data,this.fieldMask,n,this.fieldTransforms):new Qs(t,this.data,n,this.fieldTransforms)}}function hm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Hl{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Hl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.cu({path:r,hu:!1});return s.Pu(t),s}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Wi(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(hm(this.uu)&&SC.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class DC{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Fo(t)}Ru(t,n,r,s=!1){return new Hl({uu:t,methodName:n,Au:r,path:Qt.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VC(e){const t=e._freezeSettings(),n=Fo(e._databaseId);return new DC(e._databaseId,!!t.ignoreUndefinedProperties,n)}function xC(e,t,n,r,s,i={}){const o=e.Ru(i.merge||i.mergeFields?2:0,t,n,s);gm("Data must be an object, but it was:",o,r);const a=dm(r,o);let c,l;if(i.merge)c=new _e(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=kC(t,h,n);if(!o.contains(f))throw new $(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);OC(u,f)||u.push(f)}c=new _e(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new bC(new ue(a),c,l)}function fm(e,t){if(pm(e=gn(e)))return gm("Unsupported field value:",t,e),dm(e,t);if(e instanceof um)return function(r,s){if(!hm(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=fm(a,s.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=gn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return P0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=St.fromDate(r);return{timestampValue:Qi(s.serializer,i)}}if(r instanceof St){const i=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qi(s.serializer,i)}}if(r instanceof ql)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pr)return{bytesValue:Mg(s.serializer,r._byteString)};if(r instanceof fe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${$l(r)}`)}(e,t)}function dm(e,t){const n={};return cg(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Mr(e,(r,s)=>{const i=fm(s,t.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function pm(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof St||e instanceof ql||e instanceof Pr||e instanceof fe||e instanceof um)}function gm(e,t,n){if(!pm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=$l(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function kC(e,t,n){if((t=gn(t))instanceof jl)return t._internalPath;if(typeof t=="string")return mm(e,t);throw Wi("Field path arguments must be of type string or ",e,!1,void 0,n)}const MC=new RegExp("[~\\*/\\[\\]]");function mm(e,t,n){if(t.search(MC)>=0)throw Wi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new jl(...t.split("."))._internalPath}catch{throw Wi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Wi(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(T.INVALID_ARGUMENT,a+e+c)}function OC(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class _m{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new NC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Am("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NC extends _m{data(){return super.data()}}function Am(e,t){return typeof t=="string"?mm(e,t):t instanceof jl?t._internalPath:t._delegate._internalPath}/**
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
 */function FC(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new $(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class LC{convertValue(t,n="none"){switch(zn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Qn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Q()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Mr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new ql(Tt(t.latitude),Tt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Il(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ps(t));default:return null}}convertTimestamp(t){const n=An(t);return new St(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=At.fromString(t);_t(Bg(r));const s=new Ss(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||Ke(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function BC(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Gr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ym extends _m{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Am("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yi extends ym{data(t={}){return super.data(t)}}class UC{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new yi(this._firestore,this._userDataWriter,r.key,r,new Gr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new yi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Gr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new yi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Gr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:$C(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $C(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class Em extends LC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new fe(this.firestore,null,n)}}function jC(e,t){const n=as(e.firestore,Ki),r=am(e),s=BC(e.converter,t);return qC(n,[xC(VC(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,qe.exists(!1))]).then(()=>r)}function vm(e,...t){var n,r,s;e=gn(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||cf(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(cf(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(e instanceof fe)l=as(e.firestore,Ki),u=Cl(e._key.path),c={next:h=>{t[o]&&t[o](HC(l,e,h))},error:t[o+1],complete:t[o+2]};else{const h=as(e,$o);l=as(h.firestore,Ki),u=h._query;const f=new Em(l);c={next:g=>{t[o]&&t[o](new UC(l,f,h,g))},error:t[o+1],complete:t[o+2]},FC(e._query)}return function(f,g,y,I){const R=new yC(I),S=new eC(g,R,y);return f.asyncQueue.enqueueAndForget(async()=>JR(await nf(f),S)),()=>{R.Ca(),f.asyncQueue.enqueueAndForget(async()=>XR(await nf(f),S))}}(cm(l),u,a,c)}function qC(e,t){return function(r,s){const i=new Bn;return r.asyncQueue.enqueueAndForget(async()=>lC(await TC(r),s,i)),i.promise}(cm(e),t)}function HC(e,t,n){const r=n.docs.get(t._key),s=new Em(e);return new ym(e,s,t._key,r,new Gr(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){kr=s})(Kv),mn(new Qe("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ki(new Hw(r.getProvider("auth-internal")),new Ww(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Me(Ch,"4.1.0",t),Me(Ch,"4.1.0","esm2017")})();const QC={apiKey:"AIzaSyDPHqqYyhuEJ7fIpRksToVYC5zbM1onZ3w",authDomain:"flex-fa8c8.firebaseapp.com",projectId:"flex-fa8c8",storageBucket:"flex-fa8c8.appspot.com",messagingSenderId:"824163771541",appId:"1:824163771541:web:83622e1bb9f3aada3f679c",measurementId:"G-SY23L7GKQC"},zC=Dd(QC),Ql=PC();VT(zC);const KC=e=>vm(om(Ql,"/routines"),e),WC=(e,t)=>vm(am(Ql,"/exercises",e),t),GC=async e=>{await jC(om(Ql,"routines"),e)};function YC(e){return _f()?($m(e),!0):!1}function Im(e){return typeof e=="function"?e():ye(e)}const Tm=typeof window<"u",pc=()=>{},JC=XC();function XC(){var e;return Tm&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Yr(e){var t;const n=Im(e);return(t=n==null?void 0:n.$el)!=null?t:n}const wm=Tm?window:void 0;function ya(...e){let t,n,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,s]=e,t=wm):[t,n,r,s]=e,!t)return pc;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,f,g)=>(u.addEventListener(h,f,g),()=>u.removeEventListener(h,f,g)),c=ur(()=>[Yr(t),Im(s)],([u,h])=>{o(),u&&i.push(...n.flatMap(f=>r.map(g=>a(u,f,g,h))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return YC(l),l}let lf=!1;function ZC(e,t,n={}){const{window:r=wm,ignore:s=[],capture:i=!0,detectIframe:o=!1}=n;if(!r)return;JC&&!lf&&(lf=!0,Array.from(r.document.body.children).forEach(f=>f.addEventListener("click",pc)),r.document.documentElement.addEventListener("click",pc));let a=!0;const c=f=>s.some(g=>{if(typeof g=="string")return Array.from(r.document.querySelectorAll(g)).some(y=>y===f.target||f.composedPath().includes(y));{const y=Yr(g);return y&&(f.target===y||f.composedPath().includes(y))}}),u=[ya(r,"click",f=>{const g=Yr(e);if(!(!g||g===f.target||f.composedPath().includes(g))){if(f.detail===0&&(a=!c(f)),!a){a=!0;return}t(f)}},{passive:!0,capture:i}),ya(r,"pointerdown",f=>{const g=Yr(e);g&&(a=!f.composedPath().includes(g)&&!c(f))},{passive:!0}),o&&ya(r,"blur",f=>{setTimeout(()=>{var g;const y=Yr(e);((g=r.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(y!=null&&y.contains(r.document.activeElement))&&t(f)},0)})].filter(Boolean);return()=>u.forEach(f=>f())}const tP={class:"page"},eP={class:"selector-container"},nP=["value"],rP={class:"exercises-container"},sP={key:0,class:"modal-bg center"},iP={__name:"Workouts",setup(e){const t=sn([]),n=sn({}),r=sn([]),s=sn(!1),i=sn(null);ZC(i,()=>s.value=!1);const o=()=>{KC(u=>{u.forEach(h=>{t.value.push({id:h.id,...h.data()})}),n.value=t.value[0]})},a=()=>{r.value=[],n.value[["exercises"]].forEach(u=>{WC(u,h=>{r.value.push({id:h.id,...h.data()})})})};ur(n,u=>a()),Kf(()=>o());const c=()=>{s.value=!1},l=u=>{if(u=="")console.log("No ha rellenado el campo");else try{GC({name:u,exercises:[]}),t.value=[],s.value=!1}catch(h){console.log("Error al añadir: ",h)}};return(u,h)=>(Rt(),Ht("div",tP,[G("div",eP,[qf(G("select",{class:"selector","onUpdate:modelValue":h[0]||(h[0]=f=>n.value=f)},[(Rt(!0),Ht(Jt,null,ds(t.value,f=>(Rt(),Ht("option",{value:f},an(f.name),9,nP))),256))],512),[[HA,n.value]]),G("img",{class:"h-9 w-9",src:lE,alt:"add",onClick:h[1]||(h[1]=f=>s.value=!0)})]),G("div",rP,[(Rt(!0),Ht(Jt,null,ds(r.value,f=>(Rt(),Nc(_E,{class:"exeCard",name:f.name,series:f.series,reps:f.reps},null,8,["name","series","reps"]))),256))]),s.value?(Rt(),Ht("div",sP,[Pt(bE,{ref_key:"modal",ref:i,onCancel:c,onAccept:l},null,512)])):fA("",!0)]))}},oP=En(iP,[["__scopeId","data-v-c2399b14"]]),aP={},cP={class:"page"};function lP(e,t){return Rt(),Ht("div",cP,"stats")}const uP=En(aP,[["render",lP]]);const hP={class:"component"},fP={class:"title"},dP={class:"card"},pP={class:"row"},gP={__name:"TableData",props:{title:"",data:{type:Array,required:!0}},setup(e){const t=e;return(n,r)=>(Rt(),Ht("div",hP,[G("h1",fP,an(t.title),1),G("div",dP,[(Rt(!0),Ht(Jt,null,ds(t.data,s=>(Rt(),Ht("div",pP,[G("h1",null,an(s.key),1),G("h1",null,an(s.value),1)]))),256))])]))}},uf=En(gP,[["__scopeId","data-v-a97af99a"]]);const mP=e=>(Vc("data-v-877ed032"),e=e(),xc(),e),_P={class:"page"},AP=mP(()=>G("header",null,[G("h1",null,"Hi, user"),G("h3",null,"You will achive your goals")],-1)),yP={__name:"User",setup(e){const t=[{key:"Height",value:"178"},{key:"Weight",value:"88"},{key:"IMC",value:"jose"}],n=[{key:"Height",value:"178"},{key:"Weight",value:"95"},{key:"IMC",value:"25"}];return(r,s)=>(Rt(),Ht("div",_P,[AP,Pt(uf,{data:t,title:"Current Data"}),Pt(uf,{data:n,title:"Objectives"})]))}},EP=En(yP,[["__scopeId","data-v-877ed032"]]),vP=Jy({history:gy("/Flex/"),routes:[{path:"/",name:"home",component:oP},{path:"/stats",name:"stats",component:uP},{path:"/user",name:"user",component:EP}]}),zl=KA(cE);zl.use(JA());zl.use(vP);zl.mount("#app");
