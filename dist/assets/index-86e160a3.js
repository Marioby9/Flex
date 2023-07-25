(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Za(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const vt={},er=[],ve=()=>{},Fg=()=>!1,Bg=/^on[^a-z]/,Si=e=>Bg.test(e),tc=e=>e.startsWith("onUpdate:"),bt=Object.assign,ec=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$g=Object.prototype.hasOwnProperty,nt=(e,t)=>$g.call(e,t),H=Array.isArray,nr=e=>bi(e)==="[object Map]",zh=e=>bi(e)==="[object Set]",X=e=>typeof e=="function",At=e=>typeof e=="string",nc=e=>typeof e=="symbol",Et=e=>e!==null&&typeof e=="object",Kh=e=>Et(e)&&X(e.then)&&X(e.catch),Wh=Object.prototype.toString,bi=e=>Wh.call(e),Ug=e=>bi(e).slice(8,-1),Gh=e=>bi(e)==="[object Object]",rc=e=>At(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qs=Za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Di=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},jg=/-(\w)/g,ke=Di(e=>e.replace(jg,(t,n)=>n?n.toUpperCase():"")),qg=/\B([A-Z])/g,wr=Di(e=>e.replace(qg,"-$1").toLowerCase()),Vi=Di(e=>e.charAt(0).toUpperCase()+e.slice(1)),yo=Di(e=>e?`on${Vi(e)}`:""),Zr=(e,t)=>!Object.is(e,t),Eo=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},si=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Hg=e=>{const t=parseFloat(e);return isNaN(t)?e:t},zg=e=>{const t=At(e)?Number(e):NaN;return isNaN(t)?e:t};let Sl;const ta=()=>Sl||(Sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sc(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=At(r)?Qg(r):sc(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(At(e))return e;if(Et(e))return e}}const Kg=/;(?![^(]*\))/g,Wg=/:([^]+)/,Gg=/\/\*[^]*?\*\//g;function Qg(e){const t={};return e.replace(Gg,"").split(Kg).forEach(n=>{if(n){const r=n.split(Wg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ic(e){let t="";if(At(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=ic(e[n]);r&&(t+=r+" ")}else if(Et(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xg=Za(Yg);function Qh(e){return!!e||e===""}const MR=e=>At(e)?e:e==null?"":H(e)||Et(e)&&(e.toString===Wh||!X(e.toString))?JSON.stringify(e,Yh,2):String(e),Yh=(e,t)=>t&&t.__v_isRef?Yh(e,t.value):nr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:zh(t)?{[`Set(${t.size})`]:[...t.values()]}:Et(t)&&!H(t)&&!Gh(t)?String(t):t;let me;class Xh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=me,!t&&me&&(this.index=(me.scopes||(me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=me;try{return me=this,t()}finally{me=n}}}on(){me=this}off(){me=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Jg(e){return new Xh(e)}function Zg(e,t=me){t&&t.active&&t.effects.push(e)}function tm(){return me}const oc=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Jh=e=>(e.w&hn)>0,Zh=e=>(e.n&hn)>0,em=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=hn},nm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Jh(s)&&!Zh(s)?s.delete(e):t[n++]=s,s.w&=~hn,s.n&=~hn}t.length=n}},ea=new WeakMap;let Mr=0,hn=1;const na=30;let _e;const xn=Symbol(""),ra=Symbol("");class ac{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zg(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=sn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,sn=!0,hn=1<<++Mr,Mr<=na?em(this):bl(this),this.fn()}finally{Mr<=na&&nm(this),hn=1<<--Mr,_e=this.parent,sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(bl(this),this.onStop&&this.onStop(),this.active=!1)}}function bl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let sn=!0;const tf=[];function Ar(){tf.push(sn),sn=!1}function Rr(){const e=tf.pop();sn=e===void 0?!0:e}function oe(e,t,n){if(sn&&_e){let r=ea.get(e);r||ea.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=oc()),ef(s)}}function ef(e,t){let n=!1;Mr<=na?Zh(e)||(e.n|=hn,n=!Jh(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function qe(e,t,n,r,s,i){const o=ea.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&H(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":H(e)?rc(n)&&a.push(o.get("length")):(a.push(o.get(xn)),nr(e)&&a.push(o.get(ra)));break;case"delete":H(e)||(a.push(o.get(xn)),nr(e)&&a.push(o.get(ra)));break;case"set":nr(e)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&sa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);sa(oc(c))}}function sa(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&Dl(r);for(const r of n)r.computed||Dl(r)}function Dl(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const rm=Za("__proto__,__v_isRef,__isVue"),nf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nc)),sm=cc(),im=cc(!1,!0),om=cc(!0),Vl=am();function am(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=st(this);for(let i=0,o=this.length;i<o;i++)oe(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(st)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ar();const r=st(this)[t].apply(this,n);return Rr(),r}}),e}function cm(e){const t=st(this);return oe(t,"has",e),t.hasOwnProperty(e)}function cc(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?Am:cf:t?af:of).get(r))return r;const o=H(r);if(!e){if(o&&nt(Vl,s))return Reflect.get(Vl,s,i);if(s==="hasOwnProperty")return cm}const a=Reflect.get(r,s,i);return(nc(s)?nf.has(s):rm(s))||(e||oe(r,"get",s),t)?a:Kt(a)?o&&rc(s)?a:a.value:Et(a)?e?uf(a):ki(a):a}}const lm=rf(),um=rf(!0);function rf(e=!1){return function(n,r,s,i){let o=n[r];if(fr(o)&&Kt(o)&&!Kt(s))return!1;if(!e&&(!ii(s)&&!fr(s)&&(o=st(o),s=st(s)),!H(n)&&Kt(o)&&!Kt(s)))return o.value=s,!0;const a=H(n)&&rc(r)?Number(r)<n.length:nt(n,r),c=Reflect.set(n,r,s,i);return n===st(i)&&(a?Zr(s,o)&&qe(n,"set",r,s):qe(n,"add",r,s)),c}}function hm(e,t){const n=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&qe(e,"delete",t,void 0),r}function fm(e,t){const n=Reflect.has(e,t);return(!nc(t)||!nf.has(t))&&oe(e,"has",t),n}function dm(e){return oe(e,"iterate",H(e)?"length":xn),Reflect.ownKeys(e)}const sf={get:sm,set:lm,deleteProperty:hm,has:fm,ownKeys:dm},pm={get:om,set(e,t){return!0},deleteProperty(e,t){return!0}},gm=bt({},sf,{get:im,set:um}),lc=e=>e,xi=e=>Reflect.getPrototypeOf(e);function Os(e,t,n=!1,r=!1){e=e.__v_raw;const s=st(e),i=st(t);n||(t!==i&&oe(s,"get",t),oe(s,"get",i));const{has:o}=xi(s),a=r?lc:n?dc:ts;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Ns(e,t=!1){const n=this.__v_raw,r=st(n),s=st(e);return t||(e!==s&&oe(r,"has",e),oe(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Ms(e,t=!1){return e=e.__v_raw,!t&&oe(st(e),"iterate",xn),Reflect.get(e,"size",e)}function xl(e){e=st(e);const t=st(this);return xi(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function kl(e,t){t=st(t);const n=st(this),{has:r,get:s}=xi(n);let i=r.call(n,e);i||(e=st(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Zr(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function Ol(e){const t=st(this),{has:n,get:r}=xi(t);let s=n.call(t,e);s||(e=st(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&qe(t,"delete",e,void 0),i}function Nl(){const e=st(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function Ls(e,t){return function(r,s){const i=this,o=i.__v_raw,a=st(o),c=t?lc:e?dc:ts;return!e&&oe(a,"iterate",xn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Fs(e,t,n){return function(...r){const s=this.__v_raw,i=st(s),o=nr(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?lc:t?dc:ts;return!t&&oe(i,"iterate",c?ra:xn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function mm(){const e={get(i){return Os(this,i)},get size(){return Ms(this)},has:Ns,add:xl,set:kl,delete:Ol,clear:Nl,forEach:Ls(!1,!1)},t={get(i){return Os(this,i,!1,!0)},get size(){return Ms(this)},has:Ns,add:xl,set:kl,delete:Ol,clear:Nl,forEach:Ls(!1,!0)},n={get(i){return Os(this,i,!0)},get size(){return Ms(this,!0)},has(i){return Ns.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:Ls(!0,!1)},r={get(i){return Os(this,i,!0,!0)},get size(){return Ms(this,!0)},has(i){return Ns.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:Ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Fs(i,!1,!1),n[i]=Fs(i,!0,!1),t[i]=Fs(i,!1,!0),r[i]=Fs(i,!0,!0)}),[e,n,t,r]}const[_m,ym,Em,vm]=mm();function uc(e,t){const n=t?e?vm:Em:e?ym:_m;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(nt(n,s)&&s in r?n:r,s,i)}const Tm={get:uc(!1,!1)},Im={get:uc(!1,!0)},wm={get:uc(!0,!1)},of=new WeakMap,af=new WeakMap,cf=new WeakMap,Am=new WeakMap;function Rm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cm(e){return e.__v_skip||!Object.isExtensible(e)?0:Rm(Ug(e))}function ki(e){return fr(e)?e:hc(e,!1,sf,Tm,of)}function lf(e){return hc(e,!1,gm,Im,af)}function uf(e){return hc(e,!0,pm,wm,cf)}function hc(e,t,n,r,s){if(!Et(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Cm(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function rr(e){return fr(e)?rr(e.__v_raw):!!(e&&e.__v_isReactive)}function fr(e){return!!(e&&e.__v_isReadonly)}function ii(e){return!!(e&&e.__v_isShallow)}function hf(e){return rr(e)||fr(e)}function st(e){const t=e&&e.__v_raw;return t?st(t):e}function fc(e){return si(e,"__v_skip",!0),e}const ts=e=>Et(e)?ki(e):e,dc=e=>Et(e)?uf(e):e;function ff(e){sn&&_e&&(e=st(e),ef(e.dep||(e.dep=oc())))}function df(e,t){e=st(e);const n=e.dep;n&&sa(n)}function Kt(e){return!!(e&&e.__v_isRef===!0)}function pf(e){return gf(e,!1)}function Pm(e){return gf(e,!0)}function gf(e,t){return Kt(e)?e:new Sm(e,t)}class Sm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:st(t),this._value=n?t:ts(t)}get value(){return ff(this),this._value}set value(t){const n=this.__v_isShallow||ii(t)||fr(t);t=n?t:st(t),Zr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ts(t),df(this))}}function on(e){return Kt(e)?e.value:e}const bm={get:(e,t,n)=>on(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Kt(s)&&!Kt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function mf(e){return rr(e)?e:new Proxy(e,bm)}class Dm{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ac(t,()=>{this._dirty||(this._dirty=!0,df(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=st(this);return ff(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Vm(e,t,n=!1){let r,s;const i=X(e);return i?(r=e,s=ve):(r=e.get,s=e.set),new Dm(r,s,i||!s,n)}function an(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Oi(i,t,n)}return s}function pe(e,t,n,r){if(X(e)){const i=an(e,t,n,r);return i&&Kh(i)&&i.catch(o=>{Oi(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(pe(e[i],t,n,r));return s}function Oi(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){an(c,null,10,[e,o,a]);return}}xm(e,n,s,r)}function xm(e,t,n,r=!0){console.error(e)}let es=!1,ia=!1;const zt=[];let Pe=0;const sr=[];let Be=null,Rn=0;const _f=Promise.resolve();let pc=null;function yf(e){const t=pc||_f;return e?t.then(this?e.bind(this):e):t}function km(e){let t=Pe+1,n=zt.length;for(;t<n;){const r=t+n>>>1;ns(zt[r])<e?t=r+1:n=r}return t}function gc(e){(!zt.length||!zt.includes(e,es&&e.allowRecurse?Pe+1:Pe))&&(e.id==null?zt.push(e):zt.splice(km(e.id),0,e),Ef())}function Ef(){!es&&!ia&&(ia=!0,pc=_f.then(Tf))}function Om(e){const t=zt.indexOf(e);t>Pe&&zt.splice(t,1)}function Nm(e){H(e)?sr.push(...e):(!Be||!Be.includes(e,e.allowRecurse?Rn+1:Rn))&&sr.push(e),Ef()}function Ml(e,t=es?Pe+1:0){for(;t<zt.length;t++){const n=zt[t];n&&n.pre&&(zt.splice(t,1),t--,n())}}function vf(e){if(sr.length){const t=[...new Set(sr)];if(sr.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>ns(n)-ns(r)),Rn=0;Rn<Be.length;Rn++)Be[Rn]();Be=null,Rn=0}}const ns=e=>e.id==null?1/0:e.id,Mm=(e,t)=>{const n=ns(e)-ns(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Tf(e){ia=!1,es=!0,zt.sort(Mm);const t=ve;try{for(Pe=0;Pe<zt.length;Pe++){const n=zt[Pe];n&&n.active!==!1&&an(n,null,14)}}finally{Pe=0,zt.length=0,vf(),es=!1,pc=null,(zt.length||sr.length)&&Tf()}}function Lm(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||vt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||vt;f&&(s=n.map(g=>At(g)?g.trim():g)),h&&(s=n.map(Hg))}let a,c=r[a=yo(t)]||r[a=yo(ke(t))];!c&&i&&(c=r[a=yo(wr(t))]),c&&pe(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,pe(l,e,6,s)}}function If(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!X(e)){const c=l=>{const u=If(l,t,!0);u&&(a=!0,bt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(Et(e)&&r.set(e,null),null):(H(i)?i.forEach(c=>o[c]=null):bt(o,i),Et(e)&&r.set(e,o),o)}function Ni(e,t){return!e||!Si(t)?!1:(t=t.slice(2).replace(/Once$/,""),nt(e,t[0].toLowerCase()+t.slice(1))||nt(e,wr(t))||nt(e,t))}let de=null,Mi=null;function oi(e){const t=de;return de=e,Mi=e&&e.type.__scopeId||null,t}function Fm(e){Mi=e}function Bm(){Mi=null}function ai(e,t=de,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Gl(-1);const i=oi(t);let o;try{o=e(...s)}finally{oi(i),r._d&&Gl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vo(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:v,inheritAttrs:T}=e;let R,P;const k=oi(e);try{if(n.shapeFlag&4){const x=s||r;R=Ce(u.call(x,x,h,i,g,f,v)),P=c}else{const x=t;R=Ce(x.length>1?x(i,{attrs:c,slots:a,emit:l}):x(i,null)),P=t.props?c:$m(c)}}catch(x){Hr.length=0,Oi(x,e,1),R=Wt(je)}let j=R;if(P&&T!==!1){const x=Object.keys(P),{shapeFlag:J}=j;x.length&&J&7&&(o&&x.some(tc)&&(P=Um(P,o)),j=fn(j,P))}return n.dirs&&(j=fn(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),R=j,oi(k),R}const $m=e=>{let t;for(const n in e)(n==="class"||n==="style"||Si(n))&&((t||(t={}))[n]=e[n]);return t},Um=(e,t)=>{const n={};for(const r in e)(!tc(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function jm(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ll(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ni(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ll(r,o,l):!0:!!o;return!1}function Ll(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Ni(n,i))return!0}return!1}function qm({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Hm=e=>e.__isSuspense;function zm(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Nm(e)}const Bs={};function Ys(e,t,n){return wf(e,t,n)}function wf(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=vt){var a;const c=tm()===((a=Nt)==null?void 0:a.scope)?Nt:null;let l,u=!1,h=!1;if(Kt(e)?(l=()=>e.value,u=ii(e)):rr(e)?(l=()=>e,r=!0):H(e)?(h=!0,u=e.some(x=>rr(x)||ii(x)),l=()=>e.map(x=>{if(Kt(x))return x.value;if(rr(x))return Zn(x);if(X(x))return an(x,c,2)})):X(e)?t?l=()=>an(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),pe(e,c,3,[g])}:l=ve,t&&r){const x=l;l=()=>Zn(x())}let f,g=x=>{f=k.onStop=()=>{an(x,c,4)}},v;if(ss)if(g=ve,t?n&&pe(t,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const x=q_();v=x.__watcherHandles||(x.__watcherHandles=[])}else return ve;let T=h?new Array(e.length).fill(Bs):Bs;const R=()=>{if(k.active)if(t){const x=k.run();(r||u||(h?x.some((J,tt)=>Zr(J,T[tt])):Zr(x,T)))&&(f&&f(),pe(t,c,3,[x,T===Bs?void 0:h&&T[0]===Bs?[]:T,g]),T=x)}else k.run()};R.allowRecurse=!!t;let P;s==="sync"?P=R:s==="post"?P=()=>ne(R,c&&c.suspense):(R.pre=!0,c&&(R.id=c.uid),P=()=>gc(R));const k=new ac(l,P);t?n?R():T=k.run():s==="post"?ne(k.run.bind(k),c&&c.suspense):k.run();const j=()=>{k.stop(),c&&c.scope&&ec(c.scope.effects,k)};return v&&v.push(j),j}function Km(e,t,n){const r=this.proxy,s=At(e)?e.includes(".")?Af(r,e):()=>r[e]:e.bind(r,r);let i;X(t)?i=t:(i=t.handler,n=t);const o=Nt;dr(this);const a=wf(s,i.bind(r),n);return o?dr(o):kn(),a}function Af(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Zn(e,t){if(!Et(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Kt(e))Zn(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Zn(e[n],t);else if(zh(e)||nr(e))e.forEach(n=>{Zn(n,t)});else if(Gh(e))for(const n in e)Zn(e[n],t);return e}function vn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ar(),pe(c,n,8,[e.el,a,e,t]),Rr())}}function Wm(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Df(()=>{e.isMounted=!0}),Vf(()=>{e.isUnmounting=!0}),e}const ue=[Function,Array],Rf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ue,onEnter:ue,onAfterEnter:ue,onEnterCancelled:ue,onBeforeLeave:ue,onLeave:ue,onAfterLeave:ue,onLeaveCancelled:ue,onBeforeAppear:ue,onAppear:ue,onAfterAppear:ue,onAppearCancelled:ue},Gm={name:"BaseTransition",props:Rf,setup(e,{slots:t}){const n=N_(),r=Wm();let s;return()=>{const i=t.default&&Pf(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==je){o=T;break}}const a=st(e),{mode:c}=a;if(r.isLeaving)return To(o);const l=Fl(o);if(!l)return To(o);const u=oa(l,a,r,n);aa(l,u);const h=n.subTree,f=h&&Fl(h);let g=!1;const{getTransitionKey:v}=l.type;if(v){const T=v();s===void 0?s=T:T!==s&&(s=T,g=!0)}if(f&&f.type!==je&&(!Cn(l,f)||g)){const T=oa(f,a,r,n);if(aa(f,T),c==="out-in")return r.isLeaving=!0,T.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},To(o);c==="in-out"&&l.type!==je&&(T.delayLeave=(R,P,k)=>{const j=Cf(r,f);j[String(f.key)]=f,R._leaveCb=()=>{P(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=k})}return o}}},Qm=Gm;function Cf(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function oa(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:T,onAppear:R,onAfterAppear:P,onAppearCancelled:k}=t,j=String(e.key),x=Cf(n,e),J=(Q,gt)=>{Q&&pe(Q,r,9,gt)},tt=(Q,gt)=>{const ot=gt[1];J(Q,gt),H(Q)?Q.every(Vt=>Vt.length<=1)&&ot():Q.length<=1&&ot()},Dt={mode:i,persisted:o,beforeEnter(Q){let gt=a;if(!n.isMounted)if(s)gt=T||a;else return;Q._leaveCb&&Q._leaveCb(!0);const ot=x[j];ot&&Cn(e,ot)&&ot.el._leaveCb&&ot.el._leaveCb(),J(gt,[Q])},enter(Q){let gt=c,ot=l,Vt=u;if(!n.isMounted)if(s)gt=R||c,ot=P||l,Vt=k||u;else return;let F=!1;const ht=Q._enterCb=Jt=>{F||(F=!0,Jt?J(Vt,[Q]):J(ot,[Q]),Dt.delayedLeave&&Dt.delayedLeave(),Q._enterCb=void 0)};gt?tt(gt,[Q,ht]):ht()},leave(Q,gt){const ot=String(e.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return gt();J(h,[Q]);let Vt=!1;const F=Q._leaveCb=ht=>{Vt||(Vt=!0,gt(),ht?J(v,[Q]):J(g,[Q]),Q._leaveCb=void 0,x[ot]===e&&delete x[ot])};x[ot]=e,f?tt(f,[Q,F]):F()},clone(Q){return oa(Q,t,n,r)}};return Dt}function To(e){if(Li(e))return e=fn(e),e.children=null,e}function Fl(e){return Li(e)?e.children?e.children[0]:void 0:e}function aa(e,t){e.shapeFlag&6&&e.component?aa(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Pf(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===he?(o.patchFlag&128&&s++,r=r.concat(Pf(o.children,t,a))):(t||o.type!==je)&&r.push(a!=null?fn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Sf(e,t){return X(e)?(()=>bt({name:e.name},t,{setup:e}))():e}const Xs=e=>!!e.type.__asyncLoader,Li=e=>e.type.__isKeepAlive;function Ym(e,t){bf(e,"a",t)}function Xm(e,t){bf(e,"da",t)}function bf(e,t,n=Nt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Fi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Li(s.parent.vnode)&&Jm(r,t,n,s),s=s.parent}}function Jm(e,t,n,r){const s=Fi(t,e,r,!0);xf(()=>{ec(r[t],s)},n)}function Fi(e,t,n=Nt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ar(),dr(n);const a=pe(t,n,e,o);return kn(),Rr(),a});return r?s.unshift(i):s.push(i),i}}const Ge=e=>(t,n=Nt)=>(!ss||e==="sp")&&Fi(e,(...r)=>t(...r),n),Zm=Ge("bm"),Df=Ge("m"),t_=Ge("bu"),e_=Ge("u"),Vf=Ge("bum"),xf=Ge("um"),n_=Ge("sp"),r_=Ge("rtg"),s_=Ge("rtc");function i_(e,t=Nt){Fi("ec",e,t)}const kf="components",Of=Symbol.for("v-ndc");function o_(e){return At(e)?a_(kf,e,!1)||e:e||Of}function a_(e,t,n=!0,r=!1){const s=de||Nt;if(s){const i=s.type;if(e===kf){const a=$_(i,!1);if(a&&(a===t||a===ke(t)||a===Vi(ke(t))))return i}const o=Bl(s[e]||i[e],t)||Bl(s.appContext[e],t);return!o&&r?i:o}}function Bl(e,t){return e&&(e[t]||e[ke(t)]||e[Vi(ke(t))])}function c_(e,t,n,r){let s;const i=n&&n[r];if(H(e)||At(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(Et(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ca=e=>e?zf(e)?vc(e)||e.proxy:ca(e.parent):null,qr=bt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ca(e.parent),$root:e=>ca(e.root),$emit:e=>e.emit,$options:e=>mc(e),$forceUpdate:e=>e.f||(e.f=()=>gc(e.update)),$nextTick:e=>e.n||(e.n=yf.bind(e.proxy)),$watch:e=>Km.bind(e)}),Io=(e,t)=>e!==vt&&!e.__isScriptSetup&&nt(e,t),l_={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Io(r,t))return o[t]=1,r[t];if(s!==vt&&nt(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&nt(l,t))return o[t]=3,i[t];if(n!==vt&&nt(n,t))return o[t]=4,n[t];la&&(o[t]=0)}}const u=qr[t];let h,f;if(u)return t==="$attrs"&&oe(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==vt&&nt(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,nt(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Io(s,t)?(s[t]=n,!0):r!==vt&&nt(r,t)?(r[t]=n,!0):nt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==vt&&nt(e,o)||Io(t,o)||(a=i[0])&&nt(a,o)||nt(r,o)||nt(qr,o)||nt(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:nt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $l(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let la=!0;function u_(e){const t=mc(e),n=e.proxy,r=e.ctx;la=!1,t.beforeCreate&&Ul(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:v,activated:T,deactivated:R,beforeDestroy:P,beforeUnmount:k,destroyed:j,unmounted:x,render:J,renderTracked:tt,renderTriggered:Dt,errorCaptured:Q,serverPrefetch:gt,expose:ot,inheritAttrs:Vt,components:F,directives:ht,filters:Jt}=t;if(l&&h_(l,r,null),o)for(const mt in o){const at=o[mt];X(at)&&(r[mt]=at.bind(n))}if(s){const mt=s.call(n,n);Et(mt)&&(e.data=ki(mt))}if(la=!0,i)for(const mt in i){const at=i[mt],Le=X(at)?at.bind(n,n):X(at.get)?at.get.bind(n,n):ve,Qe=!X(at)&&X(at.set)?at.set.bind(n):ve,we=ye({get:Le,set:Qe});Object.defineProperty(r,mt,{enumerable:!0,configurable:!0,get:()=>we.value,set:ee=>we.value=ee})}if(a)for(const mt in a)Nf(a[mt],r,n,mt);if(c){const mt=X(c)?c.call(n):c;Reflect.ownKeys(mt).forEach(at=>{Js(at,mt[at])})}u&&Ul(u,e,"c");function wt(mt,at){H(at)?at.forEach(Le=>mt(Le.bind(n))):at&&mt(at.bind(n))}if(wt(Zm,h),wt(Df,f),wt(t_,g),wt(e_,v),wt(Ym,T),wt(Xm,R),wt(i_,Q),wt(s_,tt),wt(r_,Dt),wt(Vf,k),wt(xf,x),wt(n_,gt),H(ot))if(ot.length){const mt=e.exposed||(e.exposed={});ot.forEach(at=>{Object.defineProperty(mt,at,{get:()=>n[at],set:Le=>n[at]=Le})})}else e.exposed||(e.exposed={});J&&e.render===ve&&(e.render=J),Vt!=null&&(e.inheritAttrs=Vt),F&&(e.components=F),ht&&(e.directives=ht)}function h_(e,t,n=ve){H(e)&&(e=ua(e));for(const r in e){const s=e[r];let i;Et(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),Kt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ul(e,t,n){pe(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nf(e,t,n,r){const s=r.includes(".")?Af(n,r):()=>n[r];if(At(e)){const i=t[e];X(i)&&Ys(s,i)}else if(X(e))Ys(s,e.bind(n));else if(Et(e))if(H(e))e.forEach(i=>Nf(i,t,n,r));else{const i=X(e.handler)?e.handler.bind(n):t[e.handler];X(i)&&Ys(s,i,e)}}function mc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>ci(c,l,o,!0)),ci(c,t,o)),Et(t)&&i.set(t,c),c}function ci(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&ci(e,i,n,!0),s&&s.forEach(o=>ci(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=f_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const f_={data:jl,props:ql,emits:ql,methods:Lr,computed:Lr,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Lr,directives:Lr,watch:p_,provide:jl,inject:d_};function jl(e,t){return t?e?function(){return bt(X(e)?e.call(this,this):e,X(t)?t.call(this,this):t)}:t:e}function d_(e,t){return Lr(ua(e),ua(t))}function ua(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Zt(e,t){return e?[...new Set([].concat(e,t))]:t}function Lr(e,t){return e?bt(Object.create(null),e,t):t}function ql(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:bt(Object.create(null),$l(e),$l(t??{})):t}function p_(e,t){if(!e)return t;if(!t)return e;const n=bt(Object.create(null),e);for(const r in t)n[r]=Zt(e[r],t[r]);return n}function Mf(){return{app:null,config:{isNativeTag:Fg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let g_=0;function m_(e,t){return function(r,s=null){X(r)||(r=bt({},r)),s!=null&&!Et(s)&&(s=null);const i=Mf(),o=new Set;let a=!1;const c=i.app={_uid:g_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:H_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Wt(r,s);return f.appContext=i,u&&t?t(f,l):e(f,l,h),a=!0,c._container=l,l.__vue_app__=c,vc(f.component)||f.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){li=c;try{return l()}finally{li=null}}};return c}}let li=null;function Js(e,t){if(Nt){let n=Nt.provides;const r=Nt.parent&&Nt.parent.provides;r===n&&(n=Nt.provides=Object.create(r)),n[e]=t}}function Ue(e,t,n=!1){const r=Nt||de;if(r||li){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:li._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&X(t)?t.call(r&&r.proxy):t}}function __(e,t,n,r=!1){const s={},i={};si(i,$i,1),e.propsDefaults=Object.create(null),Lf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:lf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function y_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=st(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ni(e.emitsOptions,f))continue;const g=t[f];if(c)if(nt(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const v=ke(f);s[v]=ha(c,a,v,g,e,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Lf(e,t,s,i)&&(l=!0);let u;for(const h in a)(!t||!nt(t,h)&&((u=wr(h))===h||!nt(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ha(c,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!nt(t,h))&&(delete i[h],l=!0)}l&&qe(e,"set","$attrs")}function Lf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Qs(c))continue;const l=t[c];let u;s&&nt(s,u=ke(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ni(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=st(n),l=a||vt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ha(s,c,h,l[h],e,!nt(l,h))}}return o}function ha(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=nt(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(dr(s),r=l[n]=c.call(null,t),kn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===wr(n))&&(r=!0))}return r}function Ff(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!X(e)){const u=h=>{c=!0;const[f,g]=Ff(h,t,!0);bt(o,f),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return Et(e)&&r.set(e,er),er;if(H(i))for(let u=0;u<i.length;u++){const h=ke(i[u]);Hl(h)&&(o[h]=vt)}else if(i)for(const u in i){const h=ke(u);if(Hl(h)){const f=i[u],g=o[h]=H(f)||X(f)?{type:f}:bt({},f);if(g){const v=Wl(Boolean,g.type),T=Wl(String,g.type);g[0]=v>-1,g[1]=T<0||v<T,(v>-1||nt(g,"default"))&&a.push(h)}}}const l=[o,a];return Et(e)&&r.set(e,l),l}function Hl(e){return e[0]!=="$"}function zl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Kl(e,t){return zl(e)===zl(t)}function Wl(e,t){return H(t)?t.findIndex(n=>Kl(n,e)):X(t)&&Kl(t,e)?0:-1}const Bf=e=>e[0]==="_"||e==="$stable",_c=e=>H(e)?e.map(Ce):[Ce(e)],E_=(e,t,n)=>{if(t._n)return t;const r=ai((...s)=>_c(t(...s)),n);return r._c=!1,r},$f=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Bf(s))continue;const i=e[s];if(X(i))t[s]=E_(s,i,r);else if(i!=null){const o=_c(i);t[s]=()=>o}}},Uf=(e,t)=>{const n=_c(t);e.slots.default=()=>n},v_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=st(t),si(t,"_",n)):$f(t,e.slots={})}else e.slots={},t&&Uf(e,t);si(e.slots,$i,1)},T_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=vt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(bt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,$f(t,s)),o=t}else t&&(Uf(e,t),o={default:1});if(i)for(const a in s)!Bf(a)&&!(a in o)&&delete s[a]};function fa(e,t,n,r,s=!1){if(H(e)){e.forEach((f,g)=>fa(f,t&&(H(t)?t[g]:t),n,r,s));return}if(Xs(r)&&!s)return;const i=r.shapeFlag&4?vc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===vt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(At(l)?(u[l]=null,nt(h,l)&&(h[l]=null)):Kt(l)&&(l.value=null)),X(c))an(c,a,12,[o,u]);else{const f=At(c),g=Kt(c);if(f||g){const v=()=>{if(e.f){const T=f?nt(h,c)?h[c]:u[c]:c.value;s?H(T)&&ec(T,i):H(T)?T.includes(i)||T.push(i):f?(u[c]=[i],nt(h,c)&&(h[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else f?(u[c]=o,nt(h,c)&&(h[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(v.id=-1,ne(v,n)):v()}}}const ne=zm;function I_(e){return w_(e)}function w_(e,t){const n=ta();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=ve,insertStaticContent:v}=e,T=(d,p,m,_=null,E=null,I=null,O=!1,C=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Cn(d,p)&&(_=y(d),ee(d,E,I,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:w,ref:$,shapeFlag:M}=p;switch(w){case Bi:R(d,p,m,_);break;case je:P(d,p,m,_);break;case wo:d==null&&k(p,m,_,O);break;case he:F(d,p,m,_,E,I,O,C,S);break;default:M&1?J(d,p,m,_,E,I,O,C,S):M&6?ht(d,p,m,_,E,I,O,C,S):(M&64||M&128)&&w.process(d,p,m,_,E,I,O,C,S,b)}$!=null&&E&&fa($,d&&d.ref,I,p||d,!p)},R=(d,p,m,_)=>{if(d==null)r(p.el=a(p.children),m,_);else{const E=p.el=d.el;p.children!==d.children&&l(E,p.children)}},P=(d,p,m,_)=>{d==null?r(p.el=c(p.children||""),m,_):p.el=d.el},k=(d,p,m,_)=>{[d.el,d.anchor]=v(d.children,p,m,_,d.el,d.anchor)},j=({el:d,anchor:p},m,_)=>{let E;for(;d&&d!==p;)E=f(d),r(d,m,_),d=E;r(p,m,_)},x=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},J=(d,p,m,_,E,I,O,C,S)=>{O=O||p.type==="svg",d==null?tt(p,m,_,E,I,O,C,S):gt(d,p,E,I,O,C,S)},tt=(d,p,m,_,E,I,O,C)=>{let S,w;const{type:$,props:M,shapeFlag:U,transition:W,dirs:Z}=d;if(S=d.el=o(d.type,I,M&&M.is,M),U&8?u(S,d.children):U&16&&Q(d.children,S,null,_,E,I&&$!=="foreignObject",O,C),Z&&vn(d,null,_,"created"),Dt(S,d,d.scopeId,O,_),M){for(const pt in M)pt!=="value"&&!Qs(pt)&&i(S,pt,null,M[pt],I,d.children,_,E,Ut);"value"in M&&i(S,"value",null,M.value),(w=M.onVnodeBeforeMount)&&Re(w,_,d)}Z&&vn(d,null,_,"beforeMount");const _t=(!E||E&&!E.pendingBranch)&&W&&!W.persisted;_t&&W.beforeEnter(S),r(S,p,m),((w=M&&M.onVnodeMounted)||_t||Z)&&ne(()=>{w&&Re(w,_,d),_t&&W.enter(S),Z&&vn(d,null,_,"mounted")},E)},Dt=(d,p,m,_,E)=>{if(m&&g(d,m),_)for(let I=0;I<_.length;I++)g(d,_[I]);if(E){let I=E.subTree;if(p===I){const O=E.vnode;Dt(d,O,O.scopeId,O.slotScopeIds,E.parent)}}},Q=(d,p,m,_,E,I,O,C,S=0)=>{for(let w=S;w<d.length;w++){const $=d[w]=C?tn(d[w]):Ce(d[w]);T(null,$,p,m,_,E,I,O,C)}},gt=(d,p,m,_,E,I,O)=>{const C=p.el=d.el;let{patchFlag:S,dynamicChildren:w,dirs:$}=p;S|=d.patchFlag&16;const M=d.props||vt,U=p.props||vt;let W;m&&Tn(m,!1),(W=U.onVnodeBeforeUpdate)&&Re(W,m,p,d),$&&vn(p,d,m,"beforeUpdate"),m&&Tn(m,!0);const Z=E&&p.type!=="foreignObject";if(w?ot(d.dynamicChildren,w,C,m,_,Z,I):O||at(d,p,C,null,m,_,Z,I,!1),S>0){if(S&16)Vt(C,p,M,U,m,_,E);else if(S&2&&M.class!==U.class&&i(C,"class",null,U.class,E),S&4&&i(C,"style",M.style,U.style,E),S&8){const _t=p.dynamicProps;for(let pt=0;pt<_t.length;pt++){const Ct=_t[pt],ge=M[Ct],Wn=U[Ct];(Wn!==ge||Ct==="value")&&i(C,Ct,ge,Wn,E,d.children,m,_,Ut)}}S&1&&d.children!==p.children&&u(C,p.children)}else!O&&w==null&&Vt(C,p,M,U,m,_,E);((W=U.onVnodeUpdated)||$)&&ne(()=>{W&&Re(W,m,p,d),$&&vn(p,d,m,"updated")},_)},ot=(d,p,m,_,E,I,O)=>{for(let C=0;C<p.length;C++){const S=d[C],w=p[C],$=S.el&&(S.type===he||!Cn(S,w)||S.shapeFlag&70)?h(S.el):m;T(S,w,$,null,_,E,I,O,!0)}},Vt=(d,p,m,_,E,I,O)=>{if(m!==_){if(m!==vt)for(const C in m)!Qs(C)&&!(C in _)&&i(d,C,m[C],null,O,p.children,E,I,Ut);for(const C in _){if(Qs(C))continue;const S=_[C],w=m[C];S!==w&&C!=="value"&&i(d,C,w,S,O,p.children,E,I,Ut)}"value"in _&&i(d,"value",m.value,_.value)}},F=(d,p,m,_,E,I,O,C,S)=>{const w=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:U,slotScopeIds:W}=p;W&&(C=C?C.concat(W):W),d==null?(r(w,m,_),r($,m,_),Q(p.children,m,$,E,I,O,C,S)):M>0&&M&64&&U&&d.dynamicChildren?(ot(d.dynamicChildren,U,m,E,I,O,C),(p.key!=null||E&&p===E.subTree)&&jf(d,p,!0)):at(d,p,m,$,E,I,O,C,S)},ht=(d,p,m,_,E,I,O,C,S)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?E.ctx.activate(p,m,_,O,S):Jt(p,m,_,E,I,O,S):Me(d,p,S)},Jt=(d,p,m,_,E,I,O)=>{const C=d.component=O_(d,_,E);if(Li(d)&&(C.ctx.renderer=b),M_(C),C.asyncDep){if(E&&E.registerDep(C,wt),!d.el){const S=C.subTree=Wt(je);P(null,S,p,m)}return}wt(C,d,p,m,E,I,O)},Me=(d,p,m)=>{const _=p.component=d.component;if(jm(d,p,m))if(_.asyncDep&&!_.asyncResolved){mt(_,p,m);return}else _.next=p,Om(_.update),_.update();else p.el=d.el,_.vnode=p},wt=(d,p,m,_,E,I,O)=>{const C=()=>{if(d.isMounted){let{next:$,bu:M,u:U,parent:W,vnode:Z}=d,_t=$,pt;Tn(d,!1),$?($.el=Z.el,mt(d,$,O)):$=Z,M&&Eo(M),(pt=$.props&&$.props.onVnodeBeforeUpdate)&&Re(pt,W,$,Z),Tn(d,!0);const Ct=vo(d),ge=d.subTree;d.subTree=Ct,T(ge,Ct,h(ge.el),y(ge),d,E,I),$.el=Ct.el,_t===null&&qm(d,Ct.el),U&&ne(U,E),(pt=$.props&&$.props.onVnodeUpdated)&&ne(()=>Re(pt,W,$,Z),E)}else{let $;const{el:M,props:U}=p,{bm:W,m:Z,parent:_t}=d,pt=Xs(p);if(Tn(d,!1),W&&Eo(W),!pt&&($=U&&U.onVnodeBeforeMount)&&Re($,_t,p),Tn(d,!0),M&&ct){const Ct=()=>{d.subTree=vo(d),ct(M,d.subTree,d,E,null)};pt?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ct()):Ct()}else{const Ct=d.subTree=vo(d);T(null,Ct,m,_,d,E,I),p.el=Ct.el}if(Z&&ne(Z,E),!pt&&($=U&&U.onVnodeMounted)){const Ct=p;ne(()=>Re($,_t,Ct),E)}(p.shapeFlag&256||_t&&Xs(_t.vnode)&&_t.vnode.shapeFlag&256)&&d.a&&ne(d.a,E),d.isMounted=!0,p=m=_=null}},S=d.effect=new ac(C,()=>gc(w),d.scope),w=d.update=()=>S.run();w.id=d.uid,Tn(d,!0),w()},mt=(d,p,m)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,y_(d,p.props,_,m),T_(d,p.children,m),Ar(),Ml(),Rr()},at=(d,p,m,_,E,I,O,C,S=!1)=>{const w=d&&d.children,$=d?d.shapeFlag:0,M=p.children,{patchFlag:U,shapeFlag:W}=p;if(U>0){if(U&128){Qe(w,M,m,_,E,I,O,C,S);return}else if(U&256){Le(w,M,m,_,E,I,O,C,S);return}}W&8?($&16&&Ut(w,E,I),M!==w&&u(m,M)):$&16?W&16?Qe(w,M,m,_,E,I,O,C,S):Ut(w,E,I,!0):($&8&&u(m,""),W&16&&Q(M,m,_,E,I,O,C,S))},Le=(d,p,m,_,E,I,O,C,S)=>{d=d||er,p=p||er;const w=d.length,$=p.length,M=Math.min(w,$);let U;for(U=0;U<M;U++){const W=p[U]=S?tn(p[U]):Ce(p[U]);T(d[U],W,m,null,E,I,O,C,S)}w>$?Ut(d,E,I,!0,!1,M):Q(p,m,_,E,I,O,C,S,M)},Qe=(d,p,m,_,E,I,O,C,S)=>{let w=0;const $=p.length;let M=d.length-1,U=$-1;for(;w<=M&&w<=U;){const W=d[w],Z=p[w]=S?tn(p[w]):Ce(p[w]);if(Cn(W,Z))T(W,Z,m,null,E,I,O,C,S);else break;w++}for(;w<=M&&w<=U;){const W=d[M],Z=p[U]=S?tn(p[U]):Ce(p[U]);if(Cn(W,Z))T(W,Z,m,null,E,I,O,C,S);else break;M--,U--}if(w>M){if(w<=U){const W=U+1,Z=W<$?p[W].el:_;for(;w<=U;)T(null,p[w]=S?tn(p[w]):Ce(p[w]),m,Z,E,I,O,C,S),w++}}else if(w>U)for(;w<=M;)ee(d[w],E,I,!0),w++;else{const W=w,Z=w,_t=new Map;for(w=Z;w<=U;w++){const ae=p[w]=S?tn(p[w]):Ce(p[w]);ae.key!=null&&_t.set(ae.key,w)}let pt,Ct=0;const ge=U-Z+1;let Wn=!1,Rl=0;const Vr=new Array(ge);for(w=0;w<ge;w++)Vr[w]=0;for(w=W;w<=M;w++){const ae=d[w];if(Ct>=ge){ee(ae,E,I,!0);continue}let Ae;if(ae.key!=null)Ae=_t.get(ae.key);else for(pt=Z;pt<=U;pt++)if(Vr[pt-Z]===0&&Cn(ae,p[pt])){Ae=pt;break}Ae===void 0?ee(ae,E,I,!0):(Vr[Ae-Z]=w+1,Ae>=Rl?Rl=Ae:Wn=!0,T(ae,p[Ae],m,null,E,I,O,C,S),Ct++)}const Cl=Wn?A_(Vr):er;for(pt=Cl.length-1,w=ge-1;w>=0;w--){const ae=Z+w,Ae=p[ae],Pl=ae+1<$?p[ae+1].el:_;Vr[w]===0?T(null,Ae,m,Pl,E,I,O,C,S):Wn&&(pt<0||w!==Cl[pt]?we(Ae,m,Pl,2):pt--)}}},we=(d,p,m,_,E=null)=>{const{el:I,type:O,transition:C,children:S,shapeFlag:w}=d;if(w&6){we(d.component.subTree,p,m,_);return}if(w&128){d.suspense.move(p,m,_);return}if(w&64){O.move(d,p,m,b);return}if(O===he){r(I,p,m);for(let M=0;M<S.length;M++)we(S[M],p,m,_);r(d.anchor,p,m);return}if(O===wo){j(d,p,m);return}if(_!==2&&w&1&&C)if(_===0)C.beforeEnter(I),r(I,p,m),ne(()=>C.enter(I),E);else{const{leave:M,delayLeave:U,afterLeave:W}=C,Z=()=>r(I,p,m),_t=()=>{M(I,()=>{Z(),W&&W()})};U?U(I,Z,_t):_t()}else r(I,p,m)},ee=(d,p,m,_=!1,E=!1)=>{const{type:I,props:O,ref:C,children:S,dynamicChildren:w,shapeFlag:$,patchFlag:M,dirs:U}=d;if(C!=null&&fa(C,null,m,d,!0),$&256){p.ctx.deactivate(d);return}const W=$&1&&U,Z=!Xs(d);let _t;if(Z&&(_t=O&&O.onVnodeBeforeUnmount)&&Re(_t,p,d),$&6)ks(d.component,m,_);else{if($&128){d.suspense.unmount(m,_);return}W&&vn(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,m,E,b,_):w&&(I!==he||M>0&&M&64)?Ut(w,p,m,!1,!0):(I===he&&M&384||!E&&$&16)&&Ut(S,p,m),_&&zn(d)}(Z&&(_t=O&&O.onVnodeUnmounted)||W)&&ne(()=>{_t&&Re(_t,p,d),W&&vn(d,null,p,"unmounted")},m)},zn=d=>{const{type:p,el:m,anchor:_,transition:E}=d;if(p===he){Kn(m,_);return}if(p===wo){x(d);return}const I=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:C}=E,S=()=>O(m,I);C?C(d.el,I,S):S()}else I()},Kn=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},ks=(d,p,m)=>{const{bum:_,scope:E,update:I,subTree:O,um:C}=d;_&&Eo(_),E.stop(),I&&(I.active=!1,ee(O,d,p,m)),C&&ne(C,p),ne(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ut=(d,p,m,_=!1,E=!1,I=0)=>{for(let O=I;O<d.length;O++)ee(d[O],p,m,_,E)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),N=(d,p,m)=>{d==null?p._vnode&&ee(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),Ml(),vf(),p._vnode=d},b={p:T,um:ee,m:we,r:zn,mt:Jt,mc:Q,pc:at,pbc:ot,n:y,o:e};let B,ct;return t&&([B,ct]=t(b)),{render:N,hydrate:B,createApp:m_(N,B)}}function Tn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function jf(e,t,n=!1){const r=e.children,s=t.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=tn(s[i]),a.el=o.el),n||jf(o,a)),a.type===Bi&&(a.el=o.el)}}function A_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const R_=e=>e.__isTeleport,he=Symbol.for("v-fgt"),Bi=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),Hr=[];let Ee=null;function ui(e=!1){Hr.push(Ee=e?null:[])}function C_(){Hr.pop(),Ee=Hr[Hr.length-1]||null}let rs=1;function Gl(e){rs+=e}function qf(e){return e.dynamicChildren=rs>0?Ee||er:null,C_(),rs>0&&Ee&&Ee.push(e),e}function da(e,t,n,r,s,i){return qf(Mn(e,t,n,r,s,i,!0))}function P_(e,t,n,r,s){return qf(Wt(e,t,n,r,s,!0))}function pa(e){return e?e.__v_isVNode===!0:!1}function Cn(e,t){return e.type===t.type&&e.key===t.key}const $i="__vInternal",Hf=({key:e})=>e??null,Zs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?At(e)||Kt(e)||X(e)?{i:de,r:e,k:t,f:!!n}:e:null);function Mn(e,t=null,n=null,r=0,s=null,i=e===he?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hf(t),ref:t&&Zs(t),scopeId:Mi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:de};return a?(yc(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=At(n)?8:16),rs>0&&!o&&Ee&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ee.push(c),c}const Wt=S_;function S_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Of)&&(e=je),pa(e)){const a=fn(e,t,!0);return n&&yc(a,n),rs>0&&!i&&Ee&&(a.shapeFlag&6?Ee[Ee.indexOf(e)]=a:Ee.push(a)),a.patchFlag|=-2,a}if(U_(e)&&(e=e.__vccOpts),t){t=b_(t);let{class:a,style:c}=t;a&&!At(a)&&(t.class=ic(a)),Et(c)&&(hf(c)&&!H(c)&&(c=bt({},c)),t.style=sc(c))}const o=At(e)?1:Hm(e)?128:R_(e)?64:Et(e)?4:X(e)?2:0;return Mn(e,t,n,r,s,o,i,!0)}function b_(e){return e?hf(e)||$i in e?bt({},e):e:null}function fn(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?V_(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Hf(a),ref:t&&t.ref?n&&s?H(s)?s.concat(Zs(t)):[s,Zs(t)]:Zs(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fn(e.ssContent),ssFallback:e.ssFallback&&fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function D_(e=" ",t=0){return Wt(Bi,null,e,t)}function Ce(e){return e==null||typeof e=="boolean"?Wt(je):H(e)?Wt(he,null,e.slice()):typeof e=="object"?tn(e):Wt(Bi,null,String(e))}function tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:fn(e)}function yc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),yc(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!($i in t)?t._ctx=de:s===3&&de&&(de.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:de},n=32):(t=String(t),r&64?(n=16,t=[D_(t)]):n=8);e.children=t,e.shapeFlag|=n}function V_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ic([t.class,r.class]));else if(s==="style")t.style=sc([t.style,r.style]);else if(Si(s)){const i=t[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Re(e,t,n,r=null){pe(e,t,7,[n,r])}const x_=Mf();let k_=0;function O_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||x_,i={uid:k_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ff(r,s),emitsOptions:If(r,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:r.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Lm.bind(null,i),e.ce&&e.ce(i),i}let Nt=null;const N_=()=>Nt||de;let Ec,Gn,Ql="__VUE_INSTANCE_SETTERS__";(Gn=ta()[Ql])||(Gn=ta()[Ql]=[]),Gn.push(e=>Nt=e),Ec=e=>{Gn.length>1?Gn.forEach(t=>t(e)):Gn[0](e)};const dr=e=>{Ec(e),e.scope.on()},kn=()=>{Nt&&Nt.scope.off(),Ec(null)};function zf(e){return e.vnode.shapeFlag&4}let ss=!1;function M_(e,t=!1){ss=t;const{props:n,children:r}=e.vnode,s=zf(e);__(e,n,s,t),v_(e,r);const i=s?L_(e,t):void 0;return ss=!1,i}function L_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=fc(new Proxy(e.ctx,l_));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?B_(e):null;dr(e),Ar();const i=an(r,e,0,[e.props,s]);if(Rr(),kn(),Kh(i)){if(i.then(kn,kn),t)return i.then(o=>{Yl(e,o,t)}).catch(o=>{Oi(o,e,0)});e.asyncDep=i}else Yl(e,i,t)}else Kf(e,t)}function Yl(e,t,n){X(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Et(t)&&(e.setupState=mf(t)),Kf(e,n)}let Xl;function Kf(e,t,n){const r=e.type;if(!e.render){if(!t&&Xl&&!r.render){const s=r.template||mc(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=bt(bt({isCustomElement:i,delimiters:a},o),c);r.render=Xl(s,l)}}e.render=r.render||ve}dr(e),Ar(),u_(e),Rr(),kn()}function F_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return oe(e,"get","$attrs"),t[n]}}))}function B_(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return F_(e)},slots:e.slots,emit:e.emit,expose:t}}function vc(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mf(fc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qr)return qr[n](e)},has(t,n){return n in t||n in qr}}))}function $_(e,t=!0){return X(e)?e.displayName||e.name:e.name||t&&e.__name}function U_(e){return X(e)&&"__vccOpts"in e}const ye=(e,t)=>Vm(e,t,ss);function Tc(e,t,n){const r=arguments.length;return r===2?Et(t)&&!H(t)?pa(t)?Wt(e,null,[t]):Wt(e,t):Wt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pa(n)&&(n=[n]),Wt(e,t,n))}const j_=Symbol.for("v-scx"),q_=()=>Ue(j_),H_="3.3.4",z_="http://www.w3.org/2000/svg",Pn=typeof document<"u"?document:null,Jl=Pn&&Pn.createElement("template"),K_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Pn.createElementNS(z_,e):Pn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Pn.createTextNode(e),createComment:e=>Pn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Jl.innerHTML=r?`<svg>${e}</svg>`:e;const a=Jl.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function W_(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function G_(e,t,n){const r=e.style,s=At(n);if(n&&!s){if(t&&!At(t))for(const i in t)n[i]==null&&ga(r,i,"");for(const i in n)ga(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Zl=/\s*!important$/;function ga(e,t,n){if(H(n))n.forEach(r=>ga(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Q_(e,t);Zl.test(n)?e.setProperty(wr(r),n.replace(Zl,""),"important"):e[r]=n}}const tu=["Webkit","Moz","ms"],Ao={};function Q_(e,t){const n=Ao[t];if(n)return n;let r=ke(t);if(r!=="filter"&&r in e)return Ao[t]=r;r=Vi(r);for(let s=0;s<tu.length;s++){const i=tu[s]+r;if(i in e)return Ao[t]=i}return t}const eu="http://www.w3.org/1999/xlink";function Y_(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(eu,t.slice(6,t.length)):e.setAttributeNS(eu,t,n);else{const i=Xg(t);n==null||i&&!Qh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function X_(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Qh(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function J_(e,t,n,r){e.addEventListener(t,n,r)}function Z_(e,t,n,r){e.removeEventListener(t,n,r)}function ty(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=ey(t);if(r){const l=i[t]=sy(r,s);J_(e,a,l,c)}else o&&(Z_(e,a,o,c),i[t]=void 0)}}const nu=/(?:Once|Passive|Capture)$/;function ey(e){let t;if(nu.test(e)){t={};let r;for(;r=e.match(nu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):wr(e.slice(2)),t]}let Ro=0;const ny=Promise.resolve(),ry=()=>Ro||(ny.then(()=>Ro=0),Ro=Date.now());function sy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pe(iy(r,n.value),t,5,[r])};return n.value=e,n.attached=ry(),n}function iy(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ru=/^on[a-z]/,oy=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?W_(e,r,s):t==="style"?G_(e,n,r):Si(t)?tc(t)||ty(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ay(e,t,r,s))?X_(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Y_(e,t,r,s))};function ay(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ru.test(t)&&X(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ru.test(t)&&At(n)?!1:t in e}const Xe="transition",xr="animation",Ic=(e,{slots:t})=>Tc(Qm,cy(e),t);Ic.displayName="Transition";const Wf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ic.props=bt({},Rf,Wf);const In=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},su=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function cy(e){const t={};for(const F in e)F in Wf||(t[F]=e[F]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,v=ly(s),T=v&&v[0],R=v&&v[1],{onBeforeEnter:P,onEnter:k,onEnterCancelled:j,onLeave:x,onLeaveCancelled:J,onBeforeAppear:tt=P,onAppear:Dt=k,onAppearCancelled:Q=j}=t,gt=(F,ht,Jt)=>{wn(F,ht?u:a),wn(F,ht?l:o),Jt&&Jt()},ot=(F,ht)=>{F._isLeaving=!1,wn(F,h),wn(F,g),wn(F,f),ht&&ht()},Vt=F=>(ht,Jt)=>{const Me=F?Dt:k,wt=()=>gt(ht,F,Jt);In(Me,[ht,wt]),iu(()=>{wn(ht,F?c:i),Je(ht,F?u:a),su(Me)||ou(ht,r,T,wt)})};return bt(t,{onBeforeEnter(F){In(P,[F]),Je(F,i),Je(F,o)},onBeforeAppear(F){In(tt,[F]),Je(F,c),Je(F,l)},onEnter:Vt(!1),onAppear:Vt(!0),onLeave(F,ht){F._isLeaving=!0;const Jt=()=>ot(F,ht);Je(F,h),fy(),Je(F,f),iu(()=>{F._isLeaving&&(wn(F,h),Je(F,g),su(x)||ou(F,r,R,Jt))}),In(x,[F,Jt])},onEnterCancelled(F){gt(F,!1),In(j,[F])},onAppearCancelled(F){gt(F,!0),In(Q,[F])},onLeaveCancelled(F){ot(F),In(J,[F])}})}function ly(e){if(e==null)return null;if(Et(e))return[Co(e.enter),Co(e.leave)];{const t=Co(e);return[t,t]}}function Co(e){return zg(e)}function Je(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function wn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function iu(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let uy=0;function ou(e,t,n,r){const s=e._endId=++uy,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=hy(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,f),i()},f=g=>{g.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),e.addEventListener(l,f)}function hy(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),s=r(`${Xe}Delay`),i=r(`${Xe}Duration`),o=au(s,i),a=r(`${xr}Delay`),c=r(`${xr}Duration`),l=au(a,c);let u=null,h=0,f=0;t===Xe?o>0&&(u=Xe,h=o,f=i.length):t===xr?l>0&&(u=xr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?Xe:xr:null,f=u?u===Xe?i.length:c.length:0);const g=u===Xe&&/\b(transform|all)(,|$)/.test(r(`${Xe}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:g}}function au(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>cu(n)+cu(e[r])))}function cu(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function fy(){return document.body.offsetHeight}const dy=bt({patchProp:oy},K_);let lu;function py(){return lu||(lu=I_(dy))}const gy=(...e)=>{const t=py().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=my(r);if(!s)return;const i=t._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function my(e){return At(e)?document.querySelector(e):e}var _y=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const yy=Symbol();var uu;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(uu||(uu={}));function Ey(){const e=Jg(!0),t=e.run(()=>pf({}));let n=[],r=[];const s=fc({install(i){s._a=i,i.provide(yy,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_y?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yn=typeof window<"u";function vy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ft=Object.assign;function Po(e,t){const n={};for(const r in t){const s=t[r];n[r]=Te(s)?s.map(e):e(s)}return n}const zr=()=>{},Te=Array.isArray,Ty=/\/$/,Iy=e=>e.replace(Ty,"");function So(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Cy(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function wy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function hu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ay(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&pr(t.matched[r],n.matched[s])&&Gf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function pr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Gf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ry(e[n],t[n]))return!1;return!0}function Ry(e,t){return Te(e)?fu(e,t):Te(t)?fu(t,e):e===t}function fu(e,t){return Te(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Cy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var is;(function(e){e.pop="pop",e.push="push"})(is||(is={}));var Kr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Kr||(Kr={}));function Py(e){if(!e)if(Yn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Iy(e)}const Sy=/^[^#]+#/;function by(e,t){return e.replace(Sy,"#")+t}function Dy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ui=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vy(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Dy(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function du(e,t){return(history.state?history.state.position-t:-1)+e}const ma=new Map;function xy(e,t){ma.set(e,t)}function ky(e){const t=ma.get(e);return ma.delete(e),t}let Oy=()=>location.protocol+"//"+location.host;function Qf(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),hu(c,"")}return hu(n,e)+r+s}function Ny(e,t,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=Qf(e,location),v=n.value,T=t.value;let R=0;if(f){if(n.value=g,t.value=f,o&&o===v){o=null;return}R=T?f.position-T.position:0}else r(g);s.forEach(P=>{P(n.value,v,{delta:R,type:is.pop,direction:R?R>0?Kr.forward:Kr.back:Kr.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ft({},f.state,{scroll:Ui()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function pu(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ui():null}}function My(e){const{history:t,location:n}=window,r={value:Qf(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:Oy()+e+c;try{t[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ft({},t.state,pu(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ft({},s.value,t.state,{forward:c,scroll:Ui()});i(u.current,u,!0);const h=ft({},pu(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ly(e){e=Py(e);const t=My(e),n=Ny(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ft({location:"",base:e,go:r,createHref:by.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Fy(e){return typeof e=="string"||e&&typeof e=="object"}function Yf(e){return typeof e=="string"||typeof e=="symbol"}const Ze={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xf=Symbol("");var gu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(gu||(gu={}));function gr(e,t){return ft(new Error,{type:e,[Xf]:!0},t)}function Fe(e,t){return e instanceof Error&&Xf in e&&(t==null||!!(e.type&t))}const mu="[^/]+?",By={sensitive:!1,strict:!1,start:!0,end:!0},$y=/[.+*?^${}()[\]/\\]/g;function Uy(e,t){const n=ft({},By,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace($y,"\\$&"),g+=40;else if(f.type===1){const{value:v,repeatable:T,optional:R,regexp:P}=f;i.push({name:v,repeatable:T,optional:R});const k=P||mu;if(k!==mu){g+=10;try{new RegExp(`(${k})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+x.message)}}let j=T?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(j=R&&l.length<2?`(?:/${j})`:"/"+j),R&&(j+="?"),s+=j,g+=20,R&&(g+=-8),T&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",v=i[f-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:T,optional:R}=g,P=v in l?l[v]:"";if(Te(P)&&!T)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=Te(P)?P.join("/"):P;if(!k)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function jy(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function qy(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=jy(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(_u(r))return 1;if(_u(s))return-1}return s.length-r.length}function _u(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Hy={type:0,value:""},zy=/[a-zA-Z0-9_]/;function Ky(e){if(!e)return[[]];if(e==="/")return[[Hy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:zy.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Wy(e,t,n){const r=Uy(Ky(e.path),n),s=ft(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Gy(e,t){const n=[],r=new Map;t=vu({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,f){const g=!f,v=Qy(u);v.aliasOf=f&&f.record;const T=vu(t,u),R=[v];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of j)R.push(ft({},v,{components:f?f.record.components:v.components,path:x,aliasOf:f?f.record:v}))}let P,k;for(const j of R){const{path:x}=j;if(h&&x[0]!=="/"){const J=h.record.path,tt=J[J.length-1]==="/"?"":"/";j.path=h.record.path+(x&&tt+x)}if(P=Wy(j,h,T),f?f.alias.push(P):(k=k||P,k!==P&&k.alias.push(P),g&&u.name&&!Eu(P)&&o(u.name)),v.children){const J=v.children;for(let tt=0;tt<J.length;tt++)i(J[tt],P,f&&f.children[tt])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return k?()=>{o(k)}:zr}function o(u){if(Yf(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&qy(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Jf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Eu(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},v,T;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw gr(1,{location:u});T=f.record.name,g=ft(yu(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&yu(u.params,f.keys.map(k=>k.name))),v=f.stringify(g)}else if("path"in u)v=u.path,f=n.find(k=>k.re.test(v)),f&&(g=f.parse(v),T=f.record.name);else{if(f=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw gr(1,{location:u,currentLocation:h});T=f.record.name,g=ft({},h.params,u.params),v=f.stringify(g)}const R=[];let P=f;for(;P;)R.unshift(P.record),P=P.parent;return{name:T,path:v,params:g,matched:R,meta:Xy(R)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function yu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Qy(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Yy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Yy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Eu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Xy(e){return e.reduce((t,n)=>ft(t,n.meta),{})}function vu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Jf(e,t){return t.children.some(n=>n===e||Jf(e,n))}const Zf=/#/g,Jy=/&/g,Zy=/\//g,tE=/=/g,eE=/\?/g,td=/\+/g,nE=/%5B/g,rE=/%5D/g,ed=/%5E/g,sE=/%60/g,nd=/%7B/g,iE=/%7C/g,rd=/%7D/g,oE=/%20/g;function wc(e){return encodeURI(""+e).replace(iE,"|").replace(nE,"[").replace(rE,"]")}function aE(e){return wc(e).replace(nd,"{").replace(rd,"}").replace(ed,"^")}function _a(e){return wc(e).replace(td,"%2B").replace(oE,"+").replace(Zf,"%23").replace(Jy,"%26").replace(sE,"`").replace(nd,"{").replace(rd,"}").replace(ed,"^")}function cE(e){return _a(e).replace(tE,"%3D")}function lE(e){return wc(e).replace(Zf,"%23").replace(eE,"%3F")}function uE(e){return e==null?"":lE(e).replace(Zy,"%2F")}function hi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function hE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(td," "),o=i.indexOf("="),a=hi(o<0?i:i.slice(0,o)),c=o<0?null:hi(i.slice(o+1));if(a in t){let l=t[a];Te(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Tu(e){let t="";for(let n in e){const r=e[n];if(n=cE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Te(r)?r.map(i=>i&&_a(i)):[r&&_a(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function fE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Te(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const dE=Symbol(""),Iu=Symbol(""),Ac=Symbol(""),sd=Symbol(""),ya=Symbol("");function kr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function en(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(gr(4,{from:n,to:t})):h instanceof Error?a(h):Fy(h)?a(gr(2,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function bo(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(pE(a)){const l=(a.__vccOpts||a)[t];l&&s.push(en(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=vy(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&en(f,n,r,i,o)()}))}}return s}function pE(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wu(e){const t=Ue(Ac),n=Ue(sd),r=ye(()=>t.resolve(on(e.to))),s=ye(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(pr.bind(null,u));if(f>-1)return f;const g=Au(c[l-2]);return l>1&&Au(u)===g&&h[h.length-1].path!==g?h.findIndex(pr.bind(null,c[l-2])):f}),i=ye(()=>s.value>-1&&_E(n.params,r.value.params)),o=ye(()=>s.value>-1&&s.value===n.matched.length-1&&Gf(n.params,r.value.params));function a(c={}){return mE(c)?t[on(e.replace)?"replace":"push"](on(e.to)).catch(zr):Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const gE=Sf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wu,setup(e,{slots:t}){const n=ki(wu(e)),{options:r}=Ue(Ac),s=ye(()=>({[Ru(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ru(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Tc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),id=gE;function mE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function _E(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Te(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Au(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ru=(e,t,n)=>e??t??n,yE=Sf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ue(ya),s=ye(()=>e.route||r.value),i=Ue(Iu,0),o=ye(()=>{let l=on(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ye(()=>s.value.matched[o.value]);Js(Iu,ye(()=>o.value+1)),Js(dE,a),Js(ya,s);const c=pf();return Ys(()=>[c.value,a.value,e.name],([l,u,h],[f,g,v])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!pr(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return Cu(n.default,{Component:f,route:l});const g=h.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=Tc(f,ft({},v,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Cu(n.default,{Component:R,route:l})||R}}});function Cu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const od=yE;function EE(e){const t=Gy(e.routes,e),n=e.parseQuery||hE,r=e.stringifyQuery||Tu,s=e.history,i=kr(),o=kr(),a=kr(),c=Pm(Ze);let l=Ze;Yn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Po.bind(null,y=>""+y),h=Po.bind(null,uE),f=Po.bind(null,hi);function g(y,N){let b,B;return Yf(y)?(b=t.getRecordMatcher(y),B=N):B=y,t.addRoute(B,b)}function v(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function T(){return t.getRoutes().map(y=>y.record)}function R(y){return!!t.getRecordMatcher(y)}function P(y,N){if(N=ft({},N||c.value),typeof y=="string"){const m=So(n,y,N.path),_=t.resolve({path:m.path},N),E=s.createHref(m.fullPath);return ft(m,_,{params:f(_.params),hash:hi(m.hash),redirectedFrom:void 0,href:E})}let b;if("path"in y)b=ft({},y,{path:So(n,y.path,N.path).path});else{const m=ft({},y.params);for(const _ in m)m[_]==null&&delete m[_];b=ft({},y,{params:h(m)}),N.params=h(N.params)}const B=t.resolve(b,N),ct=y.hash||"";B.params=u(f(B.params));const d=wy(r,ft({},y,{hash:aE(ct),path:B.path})),p=s.createHref(d);return ft({fullPath:d,hash:ct,query:r===Tu?fE(y.query):y.query||{}},B,{redirectedFrom:void 0,href:p})}function k(y){return typeof y=="string"?So(n,y,c.value.path):ft({},y)}function j(y,N){if(l!==y)return gr(8,{from:N,to:y})}function x(y){return Dt(y)}function J(y){return x(ft(k(y),{replace:!0}))}function tt(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:b}=N;let B=typeof b=="function"?b(y):b;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=k(B):{path:B},B.params={}),ft({query:y.query,hash:y.hash,params:"path"in B?{}:y.params},B)}}function Dt(y,N){const b=l=P(y),B=c.value,ct=y.state,d=y.force,p=y.replace===!0,m=tt(b);if(m)return Dt(ft(k(m),{state:typeof m=="object"?ft({},ct,m.state):ct,force:d,replace:p}),N||b);const _=b;_.redirectedFrom=N;let E;return!d&&Ay(r,B,b)&&(E=gr(16,{to:_,from:B}),we(B,B,!0,!1)),(E?Promise.resolve(E):ot(_,B)).catch(I=>Fe(I)?Fe(I,2)?I:Qe(I):at(I,_,B)).then(I=>{if(I){if(Fe(I,2))return Dt(ft({replace:p},k(I.to),{state:typeof I.to=="object"?ft({},ct,I.to.state):ct,force:d}),N||_)}else I=F(_,B,!0,p,ct);return Vt(_,B,I),I})}function Q(y,N){const b=j(y,N);return b?Promise.reject(b):Promise.resolve()}function gt(y){const N=Kn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function ot(y,N){let b;const[B,ct,d]=vE(y,N);b=bo(B.reverse(),"beforeRouteLeave",y,N);for(const m of B)m.leaveGuards.forEach(_=>{b.push(en(_,y,N))});const p=Q.bind(null,y,N);return b.push(p),Ut(b).then(()=>{b=[];for(const m of i.list())b.push(en(m,y,N));return b.push(p),Ut(b)}).then(()=>{b=bo(ct,"beforeRouteUpdate",y,N);for(const m of ct)m.updateGuards.forEach(_=>{b.push(en(_,y,N))});return b.push(p),Ut(b)}).then(()=>{b=[];for(const m of d)if(m.beforeEnter)if(Te(m.beforeEnter))for(const _ of m.beforeEnter)b.push(en(_,y,N));else b.push(en(m.beforeEnter,y,N));return b.push(p),Ut(b)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),b=bo(d,"beforeRouteEnter",y,N),b.push(p),Ut(b))).then(()=>{b=[];for(const m of o.list())b.push(en(m,y,N));return b.push(p),Ut(b)}).catch(m=>Fe(m,8)?m:Promise.reject(m))}function Vt(y,N,b){a.list().forEach(B=>gt(()=>B(y,N,b)))}function F(y,N,b,B,ct){const d=j(y,N);if(d)return d;const p=N===Ze,m=Yn?history.state:{};b&&(B||p?s.replace(y.fullPath,ft({scroll:p&&m&&m.scroll},ct)):s.push(y.fullPath,ct)),c.value=y,we(y,N,b,p),Qe()}let ht;function Jt(){ht||(ht=s.listen((y,N,b)=>{if(!ks.listening)return;const B=P(y),ct=tt(B);if(ct){Dt(ft(ct,{replace:!0}),B).catch(zr);return}l=B;const d=c.value;Yn&&xy(du(d.fullPath,b.delta),Ui()),ot(B,d).catch(p=>Fe(p,12)?p:Fe(p,2)?(Dt(p.to,B).then(m=>{Fe(m,20)&&!b.delta&&b.type===is.pop&&s.go(-1,!1)}).catch(zr),Promise.reject()):(b.delta&&s.go(-b.delta,!1),at(p,B,d))).then(p=>{p=p||F(B,d,!1),p&&(b.delta&&!Fe(p,8)?s.go(-b.delta,!1):b.type===is.pop&&Fe(p,20)&&s.go(-1,!1)),Vt(B,d,p)}).catch(zr)}))}let Me=kr(),wt=kr(),mt;function at(y,N,b){Qe(y);const B=wt.list();return B.length?B.forEach(ct=>ct(y,N,b)):console.error(y),Promise.reject(y)}function Le(){return mt&&c.value!==Ze?Promise.resolve():new Promise((y,N)=>{Me.add([y,N])})}function Qe(y){return mt||(mt=!y,Jt(),Me.list().forEach(([N,b])=>y?b(y):N()),Me.reset()),y}function we(y,N,b,B){const{scrollBehavior:ct}=e;if(!Yn||!ct)return Promise.resolve();const d=!b&&ky(du(y.fullPath,0))||(B||!b)&&history.state&&history.state.scroll||null;return yf().then(()=>ct(y,N,d)).then(p=>p&&Vy(p)).catch(p=>at(p,y,N))}const ee=y=>s.go(y);let zn;const Kn=new Set,ks={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:R,getRoutes:T,resolve:P,options:e,push:x,replace:J,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:wt.add,isReady:Le,install(y){const N=this;y.component("RouterLink",id),y.component("RouterView",od),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>on(c)}),Yn&&!zn&&c.value===Ze&&(zn=!0,x(s.location).catch(ct=>{}));const b={};for(const ct in Ze)Object.defineProperty(b,ct,{get:()=>c.value[ct],enumerable:!0});y.provide(Ac,N),y.provide(sd,lf(b)),y.provide(ya,c);const B=y.unmount;Kn.add(y),y.unmount=function(){Kn.delete(y),Kn.size<1&&(l=Ze,ht&&ht(),ht=null,c.value=Ze,zn=!1,mt=!1),B()}}};function Ut(y){return y.reduce((N,b)=>N.then(()=>gt(b)),Promise.resolve())}return ks}function vE(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>pr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>pr(l,c))||s.push(c))}return[n,r,s]}const ad=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},TE={class:"menu"},IE=["title"],wE=["src"],AE={__name:"Header",setup(e){const t=[{path:"/plans",name:"Plan",img:"src/assets/img/plan.png"},{path:"/stats",name:"Stats",img:"src/assets/img/stats.png"},{path:"/me",name:"Me",img:"src/assets/img/me.png"}];return(n,r)=>(ui(),da("nav",TE,[(ui(),da(he,null,c_(t,s=>Wt(on(id),{to:s.path},{default:ai(()=>[Mn("abbr",{title:s.name},[Mn("img",{src:s.img,alt:"elm.name"},null,8,wE)],8,IE)]),_:2},1032,["to"])),64))]))}},RE=ad(AE,[["__scopeId","data-v-ec016711"]]);const CE=e=>(Fm("data-v-672e77c3"),e=e(),Bm(),e),PE=CE(()=>Mn("div",{class:"center bg-coal text-6xl p-5 font-mono"},[Mn("h1",null,"FLEX")],-1)),SE={class:"view"},bE={__name:"App",setup(e){return(t,n)=>(ui(),da(he,null,[PE,Mn("div",SE,[Wt(on(od),null,{default:ai(({Component:r,route:s})=>[Wt(Ic,{name:"fade",mode:"out-in"},{default:ai(()=>[(ui(),P_(o_(r)))]),_:2},1024)]),_:1})]),Wt(RE)],64))}},DE=ad(bE,[["__scopeId","data-v-672e77c3"]]),VE="modulepreload",xE=function(e){return"/flex/"+e},Pu={},Do=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=xE(i),i in Pu)return;Pu[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":VE,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/**
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
 */const cd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},kE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(cd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):kE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new OE;const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class OE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NE=function(e){const t=cd(e);return ld.encodeByteArray(t,!0)},fi=function(e){return NE(e).replace(/\./g,"")},ME=function(e){try{return ld.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function LE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FE=()=>LE().__FIREBASE_DEFAULTS__,BE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},$E=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ME(e[1]);return t&&JSON.parse(t)},ud=()=>{try{return FE()||BE()||$E()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},UE=e=>{var t,n;return(n=(t=ud())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},jE=e=>{const t=UE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},hd=()=>{var e;return(e=ud())===null||e===void 0?void 0:e.config};/**
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
 */class qE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function HE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[fi(JSON.stringify(n)),fi(JSON.stringify(o)),a].join(".")}function zE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function fd(){try{return typeof indexedDB=="object"}catch{return!1}}function dd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function KE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const WE="FirebaseError";class _n extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=WE,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?GE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _n(s,a,r)}}function GE(e,t){return e.replace(QE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const QE=/\{\$([^}]+)}/g;function di(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Su(i)&&Su(o)){if(!di(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Su(e){return e!==null&&typeof e=="object"}/**
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
 */const YE=1e3,XE=2,JE=4*60*60*1e3,ZE=.5;function bu(e,t=YE,n=XE){const r=t*Math.pow(n,e),s=Math.round(ZE*r*(Math.random()-.5)*2);return Math.min(JE,r+s)}/**
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
 */function qi(e){return e&&e._delegate?e._delegate:e}class He{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const An="[DEFAULT]";/**
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
 */class tv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new qE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nv(t))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=An){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=An){return this.instances.has(t)}getOptions(t=An){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ev(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=An){return this.component?this.component.multipleInstances?t:An:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ev(e){return e===An?void 0:e}function nv(e){return e.instantiationMode==="EAGER"}/**
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
 */class rv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new tv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var lt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(lt||(lt={}));const sv={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},iv=lt.INFO,ov={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},av=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=ov[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Rc{constructor(t){this.name=t,this._logLevel=iv,this._logHandler=av,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const cv=(e,t)=>t.some(n=>e instanceof n);let Du,Vu;function lv(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uv(){return Vu||(Vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pd=new WeakMap,Ea=new WeakMap,gd=new WeakMap,Vo=new WeakMap,Cc=new WeakMap;function hv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(cn(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&pd.set(n,e)}).catch(()=>{}),Cc.set(t,e),t}function fv(e){if(Ea.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ea.set(e,t)}let va={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ea.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dv(e){va=e(va)}function pv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(xo(this),t,...n);return gd.set(r,t.sort?t.sort():[t]),cn(r)}:uv().includes(e)?function(...t){return e.apply(xo(this),t),cn(pd.get(this))}:function(...t){return cn(e.apply(xo(this),t))}}function gv(e){return typeof e=="function"?pv(e):(e instanceof IDBTransaction&&fv(e),cv(e,lv())?new Proxy(e,va):e)}function cn(e){if(e instanceof IDBRequest)return hv(e);if(Vo.has(e))return Vo.get(e);const t=gv(e);return t!==e&&(Vo.set(e,t),Cc.set(t,e)),t}const xo=e=>Cc.get(e);function mv(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=cn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(cn(o.result),c.oldVersion,c.newVersion,cn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const _v=["get","getKey","getAll","getAllKeys","count"],yv=["put","add","delete","clear"],ko=new Map;function xu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ko.get(t))return ko.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=yv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_v.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ko.set(t,i),i}dv(e=>({...e,get:(t,n,r)=>xu(t,n)||e.get(t,n,r),has:(t,n)=>!!xu(t,n)||e.has(t,n)}));/**
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
 */class Ev{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ta="@firebase/app",ku="0.9.14";/**
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
 */const Ln=new Rc("@firebase/app"),Tv="@firebase/app-compat",Iv="@firebase/analytics-compat",wv="@firebase/analytics",Av="@firebase/app-check-compat",Rv="@firebase/app-check",Cv="@firebase/auth",Pv="@firebase/auth-compat",Sv="@firebase/database",bv="@firebase/database-compat",Dv="@firebase/functions",Vv="@firebase/functions-compat",xv="@firebase/installations",kv="@firebase/installations-compat",Ov="@firebase/messaging",Nv="@firebase/messaging-compat",Mv="@firebase/performance",Lv="@firebase/performance-compat",Fv="@firebase/remote-config",Bv="@firebase/remote-config-compat",$v="@firebase/storage",Uv="@firebase/storage-compat",jv="@firebase/firestore",qv="@firebase/firestore-compat",Hv="firebase",zv="10.0.0";/**
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
 */const Ia="[DEFAULT]",Kv={[Ta]:"fire-core",[Tv]:"fire-core-compat",[wv]:"fire-analytics",[Iv]:"fire-analytics-compat",[Rv]:"fire-app-check",[Av]:"fire-app-check-compat",[Cv]:"fire-auth",[Pv]:"fire-auth-compat",[Sv]:"fire-rtdb",[bv]:"fire-rtdb-compat",[Dv]:"fire-fn",[Vv]:"fire-fn-compat",[xv]:"fire-iid",[kv]:"fire-iid-compat",[Ov]:"fire-fcm",[Nv]:"fire-fcm-compat",[Mv]:"fire-perf",[Lv]:"fire-perf-compat",[Fv]:"fire-rc",[Bv]:"fire-rc-compat",[$v]:"fire-gcs",[Uv]:"fire-gcs-compat",[jv]:"fire-fst",[qv]:"fire-fst-compat","fire-js":"fire-js",[Hv]:"fire-js-all"};/**
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
 */const pi=new Map,wa=new Map;function Wv(e,t){try{e.container.addComponent(t)}catch(n){Ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dn(e){const t=e.name;if(wa.has(t))return Ln.debug(`There were multiple attempts to register component ${t}.`),!1;wa.set(t,e);for(const n of pi.values())Wv(n,e);return!0}function Es(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Gv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ln=new ji("app","Firebase",Gv);/**
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
 */class Qv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Yv=zv;function md(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ia,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ln.create("bad-app-name",{appName:String(s)});if(n||(n=hd()),!n)throw ln.create("no-options");const i=pi.get(s);if(i){if(di(n,i.options)&&di(r,i.config))return i;throw ln.create("duplicate-app",{appName:s})}const o=new rv(s);for(const c of wa.values())o.addComponent(c);const a=new Qv(n,r,o);return pi.set(s,a),a}function _d(e=Ia){const t=pi.get(e);if(!t&&e===Ia&&hd())return md();if(!t)throw ln.create("no-app",{appName:e});return t}function xe(e,t,n){var r;let s=(r=Kv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ln.warn(a.join(" "));return}dn(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Xv="firebase-heartbeat-database",Jv=1,os="firebase-heartbeat-store";let Oo=null;function yd(){return Oo||(Oo=mv(Xv,Jv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(os)}}}).catch(e=>{throw ln.create("idb-open",{originalErrorMessage:e.message})})),Oo}async function Zv(e){try{return await(await yd()).transaction(os).objectStore(os).get(Ed(e))}catch(t){if(t instanceof _n)Ln.warn(t.message);else{const n=ln.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(n.message)}}}async function Ou(e,t){try{const r=(await yd()).transaction(os,"readwrite");await r.objectStore(os).put(t,Ed(e)),await r.done}catch(n){if(n instanceof _n)Ln.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function Ed(e){return`${e.name}!${e.options.appId}`}/**
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
 */const tT=1024,eT=30*24*60*60*1e3;class nT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Nu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=eT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nu(),{heartbeatsToSend:n,unsentEntries:r}=rT(this._heartbeatsCache.heartbeats),s=fi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nu(){return new Date().toISOString().substring(0,10)}function rT(e,t=tT){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fd()?dd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Mu(e){return fi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function iT(e){dn(new He("platform-logger",t=>new Ev(t),"PRIVATE")),dn(new He("heartbeat",t=>new nT(t),"PRIVATE")),xe(Ta,ku,e),xe(Ta,ku,"esm2017"),xe("fire-js","")}iT("");var oT="firebase",aT="10.0.0";/**
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
 */xe(oT,aT,"app");const cT=(e,t)=>t.some(n=>e instanceof n);let Lu,Fu;function lT(){return Lu||(Lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uT(){return Fu||(Fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vd=new WeakMap,Aa=new WeakMap,Td=new WeakMap,No=new WeakMap,Pc=new WeakMap;function hT(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(un(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&vd.set(n,e)}).catch(()=>{}),Pc.set(t,e),t}function fT(e){if(Aa.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Aa.set(e,t)}let Ra={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Aa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Td.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dT(e){Ra=e(Ra)}function pT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Mo(this),t,...n);return Td.set(r,t.sort?t.sort():[t]),un(r)}:uT().includes(e)?function(...t){return e.apply(Mo(this),t),un(vd.get(this))}:function(...t){return un(e.apply(Mo(this),t))}}function gT(e){return typeof e=="function"?pT(e):(e instanceof IDBTransaction&&fT(e),cT(e,lT())?new Proxy(e,Ra):e)}function un(e){if(e instanceof IDBRequest)return hT(e);if(No.has(e))return No.get(e);const t=gT(e);return t!==e&&(No.set(e,t),Pc.set(t,e)),t}const Mo=e=>Pc.get(e);function mT(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(un(o.result),c.oldVersion,c.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const _T=["get","getKey","getAll","getAllKeys","count"],yT=["put","add","delete","clear"],Lo=new Map;function Bu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Lo.get(t))return Lo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=yT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_T.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Lo.set(t,i),i}dT(e=>({...e,get:(t,n,r)=>Bu(t,n)||e.get(t,n,r),has:(t,n)=>!!Bu(t,n)||e.has(t,n)}));const Id="@firebase/installations",Sc="0.6.4";/**
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
 */const wd=1e4,Ad=`w:${Sc}`,Rd="FIS_v2",ET="https://firebaseinstallations.googleapis.com/v1",vT=60*60*1e3,TT="installations",IT="Installations";/**
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
 */const wT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fn=new ji(TT,IT,wT);function Cd(e){return e instanceof _n&&e.code.includes("request-failed")}/**
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
 */function Pd({projectId:e}){return`${ET}/projects/${e}/installations`}function Sd(e){return{token:e.token,requestStatus:2,expiresIn:RT(e.expiresIn),creationTime:Date.now()}}async function bd(e,t){const r=(await t.json()).error;return Fn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Dd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function AT(e,{refreshToken:t}){const n=Dd(e);return n.append("Authorization",CT(t)),n}async function Vd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function RT(e){return Number(e.replace("s","000"))}function CT(e){return`${Rd} ${e}`}/**
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
 */async function PT({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Pd(e),s=Dd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Rd,appId:e.appId,sdkVersion:Ad},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Vd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Sd(l.authToken)}}else throw await bd("Create Installation",c)}/**
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
 */function xd(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function ST(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const bT=/^[cdef][\w-]{21}$/,Ca="";function DT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=VT(e);return bT.test(n)?n:Ca}catch{return Ca}}function VT(e){return ST(e).substr(0,22)}/**
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
 */function Hi(e){return`${e.appName}!${e.appId}`}/**
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
 */const kd=new Map;function Od(e,t){const n=Hi(e);Nd(n,t),xT(n,t)}function Nd(e,t){const n=kd.get(e);if(n)for(const r of n)r(t)}function xT(e,t){const n=kT();n&&n.postMessage({key:e,fid:t}),OT()}let Sn=null;function kT(){return!Sn&&"BroadcastChannel"in self&&(Sn=new BroadcastChannel("[Firebase] FID Change"),Sn.onmessage=e=>{Nd(e.data.key,e.data.fid)}),Sn}function OT(){kd.size===0&&Sn&&(Sn.close(),Sn=null)}/**
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
 */const NT="firebase-installations-database",MT=1,Bn="firebase-installations-store";let Fo=null;function bc(){return Fo||(Fo=mT(NT,MT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bn)}}})),Fo}async function gi(e,t){const n=Hi(e),s=(await bc()).transaction(Bn,"readwrite"),i=s.objectStore(Bn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Od(e,t.fid),t}async function Md(e){const t=Hi(e),r=(await bc()).transaction(Bn,"readwrite");await r.objectStore(Bn).delete(t),await r.done}async function zi(e,t){const n=Hi(e),s=(await bc()).transaction(Bn,"readwrite"),i=s.objectStore(Bn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Od(e,a.fid),a}/**
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
 */async function Dc(e){let t;const n=await zi(e.appConfig,r=>{const s=LT(r),i=FT(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ca?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function LT(e){const t=e||{fid:DT(),registrationStatus:0};return Ld(t)}function FT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Fn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=BT(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:$T(e)}:{installationEntry:t}}async function BT(e,t){try{const n=await PT(e,t);return gi(e.appConfig,n)}catch(n){throw Cd(n)&&n.customData.serverCode===409?await Md(e.appConfig):await gi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function $T(e){let t=await $u(e.appConfig);for(;t.registrationStatus===1;)await xd(100),t=await $u(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Dc(e);return r||n}return t}function $u(e){return zi(e,t=>{if(!t)throw Fn.create("installation-not-found");return Ld(t)})}function Ld(e){return UT(e)?{fid:e.fid,registrationStatus:0}:e}function UT(e){return e.registrationStatus===1&&e.registrationTime+wd<Date.now()}/**
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
 */async function jT({appConfig:e,heartbeatServiceProvider:t},n){const r=qT(e,n),s=AT(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ad,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Vd(()=>fetch(r,a));if(c.ok){const l=await c.json();return Sd(l)}else throw await bd("Generate Auth Token",c)}function qT(e,{fid:t}){return`${Pd(e)}/${t}/authTokens:generate`}/**
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
 */async function Vc(e,t=!1){let n;const r=await zi(e.appConfig,i=>{if(!Fd(i))throw Fn.create("not-registered");const o=i.authToken;if(!t&&KT(o))return i;if(o.requestStatus===1)return n=HT(e,t),i;{if(!navigator.onLine)throw Fn.create("app-offline");const a=GT(i);return n=zT(e,a),a}});return n?await n:r.authToken}async function HT(e,t){let n=await Uu(e.appConfig);for(;n.authToken.requestStatus===1;)await xd(100),n=await Uu(e.appConfig);const r=n.authToken;return r.requestStatus===0?Vc(e,t):r}function Uu(e){return zi(e,t=>{if(!Fd(t))throw Fn.create("not-registered");const n=t.authToken;return QT(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function zT(e,t){try{const n=await jT(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await gi(e.appConfig,r),n}catch(n){if(Cd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Md(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await gi(e.appConfig,r)}throw n}}function Fd(e){return e!==void 0&&e.registrationStatus===2}function KT(e){return e.requestStatus===2&&!WT(e)}function WT(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+vT}function GT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function QT(e){return e.requestStatus===1&&e.requestTime+wd<Date.now()}/**
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
 */async function YT(e){const t=e,{installationEntry:n,registrationPromise:r}=await Dc(t);return r?r.catch(console.error):Vc(t).catch(console.error),n.fid}/**
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
 */async function XT(e,t=!1){const n=e;return await JT(n),(await Vc(n,t)).token}async function JT(e){const{registrationPromise:t}=await Dc(e);t&&await t}/**
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
 */function ZT(e){if(!e||!e.options)throw Bo("App Configuration");if(!e.name)throw Bo("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Bo(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Bo(e){return Fn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Bd="installations",tI="installations-internal",eI=e=>{const t=e.getProvider("app").getImmediate(),n=ZT(t),r=Es(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},nI=e=>{const t=e.getProvider("app").getImmediate(),n=Es(t,Bd).getImmediate();return{getId:()=>YT(n),getToken:s=>XT(n,s)}};function rI(){dn(new He(Bd,eI,"PUBLIC")),dn(new He(tI,nI,"PRIVATE"))}rI();xe(Id,Sc);xe(Id,Sc,"esm2017");/**
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
 */const mi="analytics",sI="firebase_id",iI="origin",oI=60*1e3,aI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xc="https://www.googletagmanager.com/gtag/js";/**
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
 */const se=new Rc("@firebase/analytics");/**
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
 */const cI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ce=new ji("analytics","Analytics",cI);/**
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
 */function lI(e){if(!e.startsWith(xc)){const t=ce.create("invalid-gtag-resource",{gtagURL:e});return se.warn(t.message),""}return e}function $d(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function uI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function hI(e,t){const n=uI("firebase-js-sdk-policy",{createScriptURL:lI}),r=document.createElement("script"),s=`${xc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function fI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function dI(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await $d(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){se.error(a)}e("config",s,i)}async function pI(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await $d(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){se.error(i)}}function gI(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await pI(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await dI(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){se.error(a)}}return s}function mI(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=gI(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function _I(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(xc)&&n.src.includes(e))return n;return null}/**
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
 */const yI=30,EI=1e3;class vI{constructor(t={},n=EI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ud=new vI;function TI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function II(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:TI(r)},i=aI.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function wI(e,t=Ud,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw ce.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ce.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new CI;return setTimeout(async()=>{a.abort()},n!==void 0?n:oI),jd({appId:r,apiKey:s,measurementId:i},o,a,t)}async function jd(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Ud){var i;const{appId:o,measurementId:a}=e;try{await AI(r,t)}catch(c){if(a)return se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await II(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!RI(l)){if(s.deleteThrottleMetadata(o),a)return se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?bu(n,s.intervalMillis,yI):bu(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),se.debug(`Calling attemptFetch again in ${u} millis`),jd(e,h,r,s)}}function AI(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(ce.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function RI(e){if(!(e instanceof _n)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class CI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function PI(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function SI(){if(fd())try{await dd()}catch(e){return se.warn(ce.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return se.warn(ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bI(e,t,n,r,s,i,o){var a;const c=wI(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&se.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>se.error(g)),t.push(c);const l=SI().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([c,l]);_I(i)||hI(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[iI]="firebase",f.update=!0,h!=null&&(f[sI]=h),s("config",u.measurementId,f),u.measurementId}/**
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
 */class DI{constructor(t){this.app=t}_delete(){return delete Wr[this.app.options.appId],Promise.resolve()}}let Wr={},ju=[];const qu={};let $o="dataLayer",VI="gtag",Hu,qd,zu=!1;function xI(){const e=[];if(zE()&&e.push("This is a browser extension environment."),KE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ce.create("invalid-analytics-context",{errorInfo:t});se.warn(n.message)}}function kI(e,t,n){xI();const r=e.options.appId;if(!r)throw ce.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ce.create("no-api-key");if(Wr[r]!=null)throw ce.create("already-exists",{id:r});if(!zu){fI($o);const{wrappedGtag:i,gtagCore:o}=mI(Wr,ju,qu,$o,VI);qd=i,Hu=o,zu=!0}return Wr[r]=bI(e,ju,qu,t,Hu,$o,n),new DI(e)}function OI(e=_d()){e=qi(e);const t=Es(e,mi);return t.isInitialized()?t.getImmediate():NI(e)}function NI(e,t={}){const n=Es(e,mi);if(n.isInitialized()){const s=n.getImmediate();if(di(t,n.getOptions()))return s;throw ce.create("already-initialized")}return n.initialize({options:t})}function MI(e,t,n,r){e=qi(e),PI(qd,Wr[e.app.options.appId],t,n,r).catch(s=>se.error(s))}const Ku="@firebase/analytics",Wu="0.10.0";function LI(){dn(new He(mi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return kI(r,s,n)},"PUBLIC")),dn(new He("analytics-internal",e,"PRIVATE")),xe(Ku,Wu),xe(Ku,Wu,"esm2017");function e(t){try{const n=t.getProvider(mi).getImmediate();return{logEvent:(r,s,i)=>MI(n,r,s,i)}}catch(n){throw ce.create("interop-component-reg-failed",{reason:n})}}}LI();var FI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,kc=kc||{},K=FI||self;function Ki(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function vs(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function BI(e){return Object.prototype.hasOwnProperty.call(e,Uo)&&e[Uo]||(e[Uo]=++$I)}var Uo="closure_uid_"+(1e9*Math.random()>>>0),$I=0;function UI(e,t,n){return e.call.apply(e.bind,arguments)}function jI(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Gt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Gt=UI:Gt=jI,Gt.apply(null,arguments)}function $s(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Lt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function yn(){this.s=this.s,this.o=this.o}var qI=0;yn.prototype.s=!1;yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),qI!=0)&&BI(this)};yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Oc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Gu(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ki(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Qt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Qt.prototype.h=function(){this.defaultPrevented=!0};var HI=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{K.addEventListener("test",()=>{},t),K.removeEventListener("test",()=>{},t)}catch{}return e}();function as(e){return/^[\s\xa0]*$/.test(e)}function Wi(){var e=K.navigator;return e&&(e=e.userAgent)?e:""}function Se(e){return Wi().indexOf(e)!=-1}function Nc(e){return Nc[" "](e),e}Nc[" "]=function(){};function zI(e,t){var n=Lw;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var KI=Se("Opera"),mr=Se("Trident")||Se("MSIE"),zd=Se("Edge"),Pa=zd||mr,Kd=Se("Gecko")&&!(Wi().toLowerCase().indexOf("webkit")!=-1&&!Se("Edge"))&&!(Se("Trident")||Se("MSIE"))&&!Se("Edge"),WI=Wi().toLowerCase().indexOf("webkit")!=-1&&!Se("Edge");function Wd(){var e=K.document;return e?e.documentMode:void 0}var Sa;t:{var jo="",qo=function(){var e=Wi();if(Kd)return/rv:([^\);]+)(\)|;)/.exec(e);if(zd)return/Edge\/([\d\.]+)/.exec(e);if(mr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(WI)return/WebKit\/(\S+)/.exec(e);if(KI)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(qo&&(jo=qo?qo[1]:""),mr){var Ho=Wd();if(Ho!=null&&Ho>parseFloat(jo)){Sa=String(Ho);break t}}Sa=jo}var ba;if(K.document&&mr){var Qu=Wd();ba=Qu||parseInt(Sa,10)||void 0}else ba=void 0;var GI=ba;function cs(e,t){if(Qt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Kd){t:{try{Nc(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:QI[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&cs.$.h.call(this)}}Lt(cs,Qt);var QI={2:"touch",3:"pen",4:"mouse"};cs.prototype.h=function(){cs.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ts="closure_listenable_"+(1e6*Math.random()|0),YI=0;function XI(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++YI,this.fa=this.ia=!1}function Gi(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Mc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function JI(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Gd(e){const t={};for(const n in e)t[n]=e[n];return t}const Yu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qd(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Yu.length;i++)n=Yu[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Qi(e){this.src=e,this.g={},this.h=0}Qi.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Va(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new XI(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Da(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Hd(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Gi(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Va(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Lc="closure_lm_"+(1e6*Math.random()|0),zo={};function Yd(e,t,n,r,s){if(r&&r.once)return Jd(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Yd(e,t[i],n,r,s);return null}return n=$c(n),e&&e[Ts]?e.O(t,n,vs(r)?!!r.capture:!!r,s):Xd(e,t,n,!1,r,s)}function Xd(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=vs(s)?!!s.capture:!!s,a=Bc(e);if(a||(e[Lc]=a=new Qi(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=ZI(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)HI||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(tp(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZI(){function e(n){return t.call(e.src,e.listener,n)}const t=tw;return e}function Jd(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Jd(e,t[i],n,r,s);return null}return n=$c(n),e&&e[Ts]?e.P(t,n,vs(r)?!!r.capture:!!r,s):Xd(e,t,n,!0,r,s)}function Zd(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Zd(e,t[i],n,r,s);else r=vs(r)?!!r.capture:!!r,n=$c(n),e&&e[Ts]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Va(i,n,r,s),-1<n&&(Gi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Bc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Va(t,n,r,s)),(n=-1<e?t[e]:null)&&Fc(n))}function Fc(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ts])Da(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(tp(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Bc(t))?(Da(n,e),n.h==0&&(n.src=null,t[Lc]=null)):Gi(e)}}}function tp(e){return e in zo?zo[e]:zo[e]="on"+e}function tw(e,t){if(e.fa)e=!0;else{t=new cs(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Fc(e),e=n.call(r,t)}return e}function Bc(e){return e=e[Lc],e instanceof Qi?e:null}var Ko="__closure_events_fn_"+(1e9*Math.random()>>>0);function $c(e){return typeof e=="function"?e:(e[Ko]||(e[Ko]=function(t){return e.handleEvent(t)}),e[Ko])}function Mt(){yn.call(this),this.i=new Qi(this),this.S=this,this.J=null}Lt(Mt,yn);Mt.prototype[Ts]=!0;Mt.prototype.removeEventListener=function(e,t,n,r){Zd(this,e,t,n,r)};function $t(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Qt(t,e);else if(t instanceof Qt)t.target=t.target||e;else{var s=t;t=new Qt(r,e),Qd(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Us(o,r,!0,t)&&s}if(o=t.g=e,s=Us(o,r,!0,t)&&s,s=Us(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Us(o,r,!1,t)&&s}Mt.prototype.N=function(){if(Mt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Gi(n[r]);delete e.g[t],e.h--}}this.J=null};Mt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Mt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Us(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Da(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Uc=K.JSON.stringify;class ew{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function nw(){var e=jc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class rw{constructor(){this.h=this.g=null}add(t,n){const r=ep.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ep=new ew(()=>new sw,e=>e.reset());class sw{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iw(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function ow(e){K.setTimeout(()=>{throw e},0)}let ls,us=!1,jc=new rw,np=()=>{const e=K.Promise.resolve(void 0);ls=()=>{e.then(aw)}};var aw=()=>{for(var e;e=nw();){try{e.h.call(e.g)}catch(n){ow(n)}var t=ep;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}us=!1};function Yi(e,t){Mt.call(this),this.h=e||1,this.g=t||K,this.j=Gt(this.qb,this),this.l=Date.now()}Lt(Yi,Mt);V=Yi.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$t(this,"tick"),this.ga&&(qc(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}V.N=function(){Yi.$.N.call(this),qc(this),delete this.g};function Hc(e,t,n){if(typeof e=="function")n&&(e=Gt(e,n));else if(e&&typeof e.handleEvent=="function")e=Gt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:K.setTimeout(e,t||0)}function rp(e){e.g=Hc(()=>{e.g=null,e.i&&(e.i=!1,rp(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class cw extends yn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:rp(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(e){yn.call(this),this.h=e,this.g={}}Lt(hs,yn);var Xu=[];function sp(e,t,n,r){Array.isArray(n)||(n&&(Xu[0]=n.toString()),n=Xu);for(var s=0;s<n.length;s++){var i=Yd(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ip(e){Mc(e.g,function(t,n){this.g.hasOwnProperty(n)&&Fc(t)},e),e.g={}}hs.prototype.N=function(){hs.$.N.call(this),ip(this)};hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xi(){this.g=!0}Xi.prototype.Ea=function(){this.g=!1};function lw(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function uw(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function tr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+fw(e,n)+(r?" "+r:"")})}function hw(e,t){e.info(function(){return"TIMEOUT: "+t})}Xi.prototype.info=function(){};function fw(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Uc(n)}catch{return t}}var qn={},Ju=null;function Ji(){return Ju=Ju||new Mt}qn.Ta="serverreachability";function op(e){Qt.call(this,qn.Ta,e)}Lt(op,Qt);function fs(e){const t=Ji();$t(t,new op(t))}qn.STAT_EVENT="statevent";function ap(e,t){Qt.call(this,qn.STAT_EVENT,e),this.stat=t}Lt(ap,Qt);function te(e){const t=Ji();$t(t,new ap(t,e))}qn.Ua="timingevent";function cp(e,t){Qt.call(this,qn.Ua,e),this.size=t}Lt(cp,Qt);function Is(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){e()},t)}var Zi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},lp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zc(){}zc.prototype.h=null;function Zu(e){return e.h||(e.h=e.i())}function up(){}var ws={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kc(){Qt.call(this,"d")}Lt(Kc,Qt);function Wc(){Qt.call(this,"c")}Lt(Wc,Qt);var xa;function to(){}Lt(to,zc);to.prototype.g=function(){return new XMLHttpRequest};to.prototype.i=function(){return{}};xa=new to;function As(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new hs(this),this.P=dw,e=Pa?125:void 0,this.V=new Yi(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hp}function hp(){this.i=null,this.g="",this.h=!1}var dw=45e3,ka={},_i={};V=As.prototype;V.setTimeout=function(e){this.P=e};function Oa(e,t,n){e.L=1,e.v=no(ze(t)),e.s=n,e.S=!0,fp(e,null)}function fp(e,t){e.G=Date.now(),Rs(e),e.A=ze(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),vp(n.i,"t",r),e.C=0,n=e.l.J,e.h=new hp,e.g=Up(e.l,n?t:null,!e.s),0<e.O&&(e.M=new cw(Gt(e.Pa,e,e.g),e.O)),sp(e.U,e.g,"readystatechange",e.nb),t=e.I?Gd(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),fs(),lw(e.j,e.u,e.A,e.m,e.W,e.s)}V.nb=function(e){e=e.target;const t=this.M;t&&De(e)==3?t.l():this.Pa(e)};V.Pa=function(e){try{if(e==this.g)t:{const u=De(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Pa||this.g&&(this.h.h||this.g.ja()||rh(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?fs(3):fs(2)),eo(this);var n=this.g.da();this.ca=n;e:if(dp(this)){var r=rh(this.g);e="";var s=r.length,i=De(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Gr(this);var o="";break e}this.h.i=new K.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,uw(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!as(a)){var l=a;break e}}l=null}if(n=l)tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,n);else{this.i=!1,this.o=3,te(12),bn(this),Gr(this);break t}}this.S?(pp(this,u,o),Pa&&this.i&&u==3&&(sp(this.U,this.V,"tick",this.mb),this.V.start())):(tr(this.j,this.m,o,null),Na(this,o)),u==4&&bn(this),this.i&&!this.J&&(u==4?Lp(this.l,this):(this.i=!1,Rs(this)))}else Ow(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,te(12)):(this.o=0,te(13)),bn(this),Gr(this)}}}catch{}finally{}};function dp(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function pp(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=pw(e,n),s==_i){t==4&&(e.o=4,te(14),r=!1),tr(e.j,e.m,null,"[Incomplete Response]");break}else if(s==ka){e.o=4,te(15),tr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else tr(e.j,e.m,s,null),Na(e,s);dp(e)&&s!=_i&&s!=ka&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,te(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zc(t),t.M=!0,te(11))):(tr(e.j,e.m,n,"[Invalid Chunked Response]"),bn(e),Gr(e))}V.mb=function(){if(this.g){var e=De(this.g),t=this.g.ja();this.C<t.length&&(eo(this),pp(this,e,t),this.i&&e!=4&&Rs(this))}};function pw(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?_i:(n=Number(t.substring(n,r)),isNaN(n)?ka:(r+=1,r+n>t.length?_i:(t=t.slice(r,r+n),e.C=r+n,t)))}V.cancel=function(){this.J=!0,bn(this)};function Rs(e){e.Y=Date.now()+e.P,gp(e,e.P)}function gp(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Is(Gt(e.lb,e),t)}function eo(e){e.B&&(K.clearTimeout(e.B),e.B=null)}V.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(hw(this.j,this.A),this.L!=2&&(fs(),te(17)),bn(this),this.o=2,Gr(this)):gp(this,this.Y-e)};function Gr(e){e.l.H==0||e.J||Lp(e.l,e)}function bn(e){eo(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,qc(e.V),ip(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Na(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Ma(n.i,e))){if(!e.K&&Ma(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)vi(n),io(n);else break t;Jc(n),te(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Is(Gt(n.ib,n),6e3));if(1>=wp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Dn(n,11)}else if((e.K||n.g==e)&&vi(n),!as(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Gc(i,i.h),i.h=null))}if(r.F){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,yt(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=$p(r,r.J?r.pa:null,r.Y),o.K){Ap(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(eo(a),Rs(a)),r.g=o}else Np(r);0<n.j.length&&oo(n)}else l[0]!="stop"&&l[0]!="close"||Dn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Dn(n,7):Xc(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}fs(4)}catch{}}function gw(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ki(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function mw(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ki(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function mp(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ki(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=mw(e),r=gw(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var _p=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _w(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function On(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof On){this.h=e.h,yi(this,e.j),this.s=e.s,this.g=e.g,Ei(this,e.m),this.l=e.l;var t=e.i,n=new ds;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),th(this,n),this.o=e.o}else e&&(t=String(e).match(_p))?(this.h=!1,yi(this,t[1]||"",!0),this.s=Fr(t[2]||""),this.g=Fr(t[3]||"",!0),Ei(this,t[4]),this.l=Fr(t[5]||"",!0),th(this,t[6]||"",!0),this.o=Fr(t[7]||"")):(this.h=!1,this.i=new ds(null,this.h))}On.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Br(t,eh,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Br(t,eh,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Br(n,n.charAt(0)=="/"?vw:Ew,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Br(n,Iw)),e.join("")};function ze(e){return new On(e)}function yi(e,t,n){e.j=n?Fr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ei(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function th(e,t,n){t instanceof ds?(e.i=t,ww(e.i,e.h)):(n||(t=Br(t,Tw)),e.i=new ds(t,e.h))}function yt(e,t,n){e.i.set(t,n)}function no(e){return yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Fr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Br(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,yw),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function yw(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var eh=/[#\/\?@]/g,Ew=/[#\?:]/g,vw=/[#\?]/g,Tw=/[#\?@]/g,Iw=/#/g;function ds(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function En(e){e.g||(e.g=new Map,e.h=0,e.i&&_w(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}V=ds.prototype;V.add=function(e,t){En(this),this.i=null,e=Cr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function yp(e,t){En(e),t=Cr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ep(e,t){return En(e),t=Cr(e,t),e.g.has(t)}V.forEach=function(e,t){En(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};V.ta=function(){En(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};V.Z=function(e){En(this);let t=[];if(typeof e=="string")Ep(this,e)&&(t=t.concat(this.g.get(Cr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};V.set=function(e,t){return En(this),this.i=null,e=Cr(this,e),Ep(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};V.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function vp(e,t,n){yp(e,t),0<n.length&&(e.i=null,e.g.set(Cr(e,t),Oc(n)),e.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Cr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ww(e,t){t&&!e.j&&(En(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(yp(this,r),vp(this,s,n))},e)),e.j=t}var Aw=class{constructor(e,t){this.g=e,this.map=t}};function Tp(e){this.l=e||Rw,K.PerformanceNavigationTiming?(e=K.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rw=10;function Ip(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function wp(e){return e.h?1:e.g?e.g.size:0}function Ma(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Gc(e,t){e.g?e.g.add(t):e.h=t}function Ap(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Tp.prototype.cancel=function(){if(this.i=Rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Rp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Oc(e.i)}var Cw=class{stringify(e){return K.JSON.stringify(e,void 0)}parse(e){return K.JSON.parse(e,void 0)}};function Pw(){this.g=new Cw}function Sw(e,t,n){const r=n||"";try{mp(e,function(s,i){let o=s;vs(s)&&(o=Uc(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function bw(e,t){const n=new Xi;if(K.Image){const r=new Image;r.onload=$s(js,n,r,"TestLoadImage: loaded",!0,t),r.onerror=$s(js,n,r,"TestLoadImage: error",!1,t),r.onabort=$s(js,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=$s(js,n,r,"TestLoadImage: timeout",!1,t),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function js(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Cs(e){this.l=e.fc||null,this.j=e.ob||!1}Lt(Cs,zc);Cs.prototype.g=function(){return new ro(this.l,this.j)};Cs.prototype.i=function(e){return function(){return e}}({});function ro(e,t){Mt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Qc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Lt(ro,Mt);var Qc=0;V=ro.prototype;V.open=function(e,t){if(this.readyState!=Qc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ps(this)};V.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||K).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=Qc};V.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cp(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Cp(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}V.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ps(this):ps(this),this.readyState==3&&Cp(this)}};V.Za=function(e){this.g&&(this.response=this.responseText=e,Ps(this))};V.Ya=function(e){this.g&&(this.response=e,Ps(this))};V.ka=function(){this.g&&Ps(this)};function Ps(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ps(e)}V.setRequestHeader=function(e,t){this.v.append(e,t)};V.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ps(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Dw=K.JSON.parse;function It(e){Mt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pp,this.L=this.M=!1}Lt(It,Mt);var Pp="",Vw=/^https?$/i,xw=["POST","PUT"];V=It.prototype;V.Oa=function(e){this.M=e};V.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():xa.g(),this.C=this.u?Zu(this.u):Zu(xa),this.g.onreadystatechange=Gt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){nh(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=K.FormData&&e instanceof K.FormData,!(0<=Hd(xw,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Dp(this),0<this.B&&((this.L=kw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Gt(this.ua,this)):this.A=Hc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){nh(this,i)}};function kw(e){return mr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}V.ua=function(){typeof kc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$t(this,"timeout"),this.abort(8))};function nh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Sp(e),so(e)}function Sp(e){e.F||(e.F=!0,$t(e,"complete"),$t(e,"error"))}V.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,$t(this,"complete"),$t(this,"abort"),so(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),so(this,!0)),It.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?bp(this):this.kb())};V.kb=function(){bp(this)};function bp(e){if(e.h&&typeof kc<"u"&&(!e.C[1]||De(e)!=4||e.da()!=2)){if(e.v&&De(e)==4)Hc(e.La,0,e);else if($t(e,"readystatechange"),De(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(_p)[1]||null;!s&&K.self&&K.self.location&&(s=K.self.location.protocol.slice(0,-1)),r=!Vw.test(s?s.toLowerCase():"")}n=r}if(n)$t(e,"complete"),$t(e,"success");else{e.m=6;try{var i=2<De(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Sp(e)}}finally{so(e)}}}}function so(e,t){if(e.g){Dp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||$t(e,"ready");try{n.onreadystatechange=r}catch{}}}function Dp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(K.clearTimeout(e.A),e.A=null)}V.isActive=function(){return!!this.g};function De(e){return e.g?e.g.readyState:0}V.da=function(){try{return 2<De(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Dw(t)}};function rh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Pp:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Ow(e){const t={};e=(e.g&&2<=De(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(as(e[r]))continue;var n=iw(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}JI(t,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vp(e){let t="";return Mc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Yc(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Vp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):yt(e,t,n))}function Or(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function xp(e){this.Ga=0,this.j=[],this.l=new Xi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Or("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Or("baseRetryDelayMs",5e3,e),this.hb=Or("retryDelaySeedMs",1e4,e),this.eb=Or("forwardChannelMaxRetries",2,e),this.xa=Or("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Tp(e&&e.concurrentRequestLimit),this.Ja=new Pw,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=xp.prototype;V.ra=8;V.H=1;function Xc(e){if(kp(e),e.H==3){var t=e.W++,n=ze(e.I);if(yt(n,"SID",e.K),yt(n,"RID",t),yt(n,"TYPE","terminate"),Ss(e,n),t=new As(e,e.l,t),t.L=2,t.v=no(ze(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&K.Image&&(new Image().src=t.v,n=!0),n||(t.g=Up(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Rs(t)}Bp(e)}function io(e){e.g&&(Zc(e),e.g.cancel(),e.g=null)}function kp(e){io(e),e.u&&(K.clearTimeout(e.u),e.u=null),vi(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&K.clearTimeout(e.m),e.m=null)}function oo(e){if(!Ip(e.i)&&!e.m){e.m=!0;var t=e.Na;ls||np(),us||(ls(),us=!0),jc.add(t,e),e.C=0}}function Nw(e,t){return wp(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Is(Gt(e.Na,e,t),Fp(e,e.C)),e.C++,!0)}V.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new As(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Gd(i),Qd(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Op(this,s,t),n=ze(this.I),yt(n,"RID",e),yt(n,"CVER",22),this.F&&yt(n,"X-HTTP-Session-Id",this.F),Ss(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Vp(i)))+"&"+t:this.o&&Yc(n,this.o,i)),Gc(this.i,s),this.bb&&yt(n,"TYPE","init"),this.P?(yt(n,"$req",t),yt(n,"SID","null"),s.aa=!0,Oa(s,n,null)):Oa(s,n,t),this.H=2}}else this.H==3&&(e?sh(this,e):this.j.length==0||Ip(this.i)||sh(this))};function sh(e,t){var n;t?n=t.m:n=e.W++;const r=ze(e.I);yt(r,"SID",e.K),yt(r,"RID",n),yt(r,"AID",e.V),Ss(e,r),e.o&&e.s&&Yc(r,e.o,e.s),n=new As(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Op(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Gc(e.i,n),Oa(n,r,t)}function Ss(e,t){e.na&&Mc(e.na,function(n,r){yt(t,r,n)}),e.h&&mp({},function(n,r){yt(t,r,n)})}function Op(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Gt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Sw(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Np(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ls||np(),us||(ls(),us=!0),jc.add(t,e),e.A=0}}function Jc(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Is(Gt(e.Ma,e),Fp(e,e.A)),e.A++,!0)}V.Ma=function(){if(this.u=null,Mp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Is(Gt(this.jb,this),e)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,te(10),io(this),Mp(this))};function Zc(e){e.B!=null&&(K.clearTimeout(e.B),e.B=null)}function Mp(e){e.g=new As(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ze(e.wa);yt(t,"RID","rpc"),yt(t,"SID",e.K),yt(t,"AID",e.V),yt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&yt(t,"TO",e.qa),yt(t,"TYPE","xmlhttp"),Ss(e,t),e.o&&e.s&&Yc(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=no(ze(t)),n.s=null,n.S=!0,fp(n,e)}V.ib=function(){this.v!=null&&(this.v=null,io(this),Jc(this),te(19))};function vi(e){e.v!=null&&(K.clearTimeout(e.v),e.v=null)}function Lp(e,t){var n=null;if(e.g==t){vi(e),Zc(e),e.g=null;var r=2}else if(Ma(e.i,t))n=t.F,Ap(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=Ji(),$t(r,new cp(r,n)),oo(e)}else Np(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&Nw(e,t)||r==2&&Jc(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Dn(e,5);break;case 4:Dn(e,10);break;case 3:Dn(e,6);break;default:Dn(e,2)}}}function Fp(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Dn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Gt(e.pb,e);n||(n=new On("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||yi(n,"https"),no(n)),bw(n.toString(),r)}else te(2);e.H=0,e.h&&e.h.za(t),Bp(e),kp(e)}V.pb=function(e){e?(this.l.info("Successfully pinged google.com"),te(2)):(this.l.info("Failed to ping google.com"),te(1))};function Bp(e){if(e.H=0,e.ma=[],e.h){const t=Rp(e.i);(t.length!=0||e.j.length!=0)&&(Gu(e.ma,t),Gu(e.ma,e.j),e.i.i.length=0,Oc(e.j),e.j.length=0),e.h.ya()}}function $p(e,t,n){var r=n instanceof On?ze(n):new On(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ei(r,r.m);else{var s=K.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new On(null);r&&yi(i,r),t&&(i.g=t),s&&Ei(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&yt(r,n,t),yt(r,"VER",e.ra),Ss(e,r),r}function Up(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new It(new Cs({ob:!0})):new It(e.va),t.Oa(e.J),t}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function jp(){}V=jp.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Ti(){if(mr&&!(10<=Number(GI)))throw Error("Environmental error: no available transport.")}Ti.prototype.g=function(e,t){return new le(e,t)};function le(e,t){Mt.call(this),this.g=new xp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!as(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!as(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Pr(this)}Lt(le,Mt);le.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;te(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=$p(e,null,e.Y),oo(e)};le.prototype.close=function(){Xc(this.g)};le.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Uc(e),e=n);t.j.push(new Aw(t.fb++,e)),t.H==3&&oo(t)};le.prototype.N=function(){this.g.h=null,delete this.j,Xc(this.g),delete this.g,le.$.N.call(this)};function qp(e){Kc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Lt(qp,Kc);function Hp(){Wc.call(this),this.status=1}Lt(Hp,Wc);function Pr(e){this.g=e}Lt(Pr,jp);Pr.prototype.Ba=function(){$t(this.g,"a")};Pr.prototype.Aa=function(e){$t(this.g,new qp(e))};Pr.prototype.za=function(e){$t(this.g,new Hp)};Pr.prototype.ya=function(){$t(this.g,"b")};function Mw(){this.blockSize=-1}function Ie(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Lt(Ie,Mw);Ie.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wo(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Ie.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Wo(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Wo(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Wo(this,r),s=0;break}}this.h=s,this.i+=t};Ie.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function dt(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Lw={};function tl(e){return-128<=e&&128>e?zI(e,function(t){return new dt([t|0],0>t?-1:0)}):new dt([e|0],0>e?-1:0)}function Ve(e){if(isNaN(e)||!isFinite(e))return ir;if(0>e)return Bt(Ve(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=La;return new dt(t,0)}function zp(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Bt(zp(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ve(Math.pow(t,8)),r=ir,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=Ve(Math.pow(t,i)),r=r.R(i).add(Ve(o))):(r=r.R(n),r=r.add(Ve(o)))}return r}var La=4294967296,ir=tl(0),Fa=tl(1),ih=tl(16777216);V=dt.prototype;V.ea=function(){if(fe(this))return-Bt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:La+r)*t,t*=La}return e};V.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if($e(this))return"0";if(fe(this))return"-"+Bt(this).toString(e);for(var t=Ve(Math.pow(e,6)),n=this,r="";;){var s=wi(n,t).g;n=Ii(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,$e(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function $e(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function fe(e){return e.h==-1}V.X=function(e){return e=Ii(this,e),fe(e)?-1:$e(e)?0:1};function Bt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new dt(n,~e.h).add(Fa)}V.abs=function(){return fe(this)?Bt(this):this};V.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new dt(n,n[n.length-1]&-2147483648?-1:0)};function Ii(e,t){return e.add(Bt(t))}V.R=function(e){if($e(this)||$e(e))return ir;if(fe(this))return fe(e)?Bt(this).R(Bt(e)):Bt(Bt(this).R(e));if(fe(e))return Bt(this.R(Bt(e)));if(0>this.X(ih)&&0>e.X(ih))return Ve(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,qs(n,2*r+2*s),n[2*r+2*s+1]+=i*c,qs(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,qs(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,qs(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new dt(n,0)};function qs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Nr(e,t){this.g=e,this.h=t}function wi(e,t){if($e(t))throw Error("division by zero");if($e(e))return new Nr(ir,ir);if(fe(e))return t=wi(Bt(e),t),new Nr(Bt(t.g),Bt(t.h));if(fe(t))return t=wi(e,Bt(t)),new Nr(Bt(t.g),t.h);if(30<e.g.length){if(fe(e)||fe(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Fa,r=t;0>=r.X(e);)n=oh(n),r=oh(r);var s=Qn(n,1),i=Qn(r,1);for(r=Qn(r,2),n=Qn(n,2);!$e(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Qn(r,1),n=Qn(n,1)}return t=Ii(e,s.R(t)),new Nr(s,t)}for(s=ir;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Ve(n),o=i.R(t);fe(o)||0<o.X(e);)n-=r,i=Ve(n),o=i.R(t);$e(i)&&(i=Fa),s=s.add(i),e=Ii(e,o)}return new Nr(s,e)}V.gb=function(e){return wi(this,e).h};V.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new dt(n,this.h&e.h)};V.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new dt(n,this.h|e.h)};V.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new dt(n,this.h^e.h)};function oh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new dt(n,e.h)}function Qn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new dt(s,e.h)}Ti.prototype.createWebChannel=Ti.prototype.g;le.prototype.send=le.prototype.u;le.prototype.open=le.prototype.m;le.prototype.close=le.prototype.close;Zi.NO_ERROR=0;Zi.TIMEOUT=8;Zi.HTTP_ERROR=6;lp.COMPLETE="complete";up.EventType=ws;ws.OPEN="a";ws.CLOSE="b";ws.ERROR="c";ws.MESSAGE="d";Mt.prototype.listen=Mt.prototype.O;It.prototype.listenOnce=It.prototype.P;It.prototype.getLastError=It.prototype.Sa;It.prototype.getLastErrorCode=It.prototype.Ia;It.prototype.getStatus=It.prototype.da;It.prototype.getResponseJson=It.prototype.Wa;It.prototype.getResponseText=It.prototype.ja;It.prototype.send=It.prototype.ha;It.prototype.setWithCredentials=It.prototype.Oa;Ie.prototype.digest=Ie.prototype.l;Ie.prototype.reset=Ie.prototype.reset;Ie.prototype.update=Ie.prototype.j;dt.prototype.add=dt.prototype.add;dt.prototype.multiply=dt.prototype.R;dt.prototype.modulo=dt.prototype.gb;dt.prototype.compare=dt.prototype.X;dt.prototype.toNumber=dt.prototype.ea;dt.prototype.toString=dt.prototype.toString;dt.prototype.getBits=dt.prototype.D;dt.fromNumber=Ve;dt.fromString=zp;var Fw=function(){return new Ti},Bw=function(){return Ji()},Go=Zi,$w=lp,Uw=qn,ah={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jw=Cs,Hs=up,qw=It,Hw=Ie,or=dt;const ch="@firebase/firestore";/**
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
 */class qt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
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
 */let Sr="10.0.0";/**
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
 */const $n=new Rc("@firebase/firestore");function lh(){return $n.logLevel}function L(e,...t){if($n.logLevel<=lt.DEBUG){const n=t.map(el);$n.debug(`Firestore (${Sr}): ${e}`,...n)}}function Ke(e,...t){if($n.logLevel<=lt.ERROR){const n=t.map(el);$n.error(`Firestore (${Sr}): ${e}`,...n)}}function _r(e,...t){if($n.logLevel<=lt.WARN){const n=t.map(el);$n.warn(`Firestore (${Sr}): ${e}`,...n)}}function el(e){if(typeof e=="string")return e;try{/**
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
 */function Y(e="Unexpected state"){const t=`FIRESTORE (${Sr}) INTERNAL ASSERTION FAILED: `+e;throw Ke(t),new Error(t)}function kt(e,t){e||Y()}function it(e,t){return e}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends _n{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(qt.UNAUTHENTICATED))}shutdown(){}}class Kw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ww{constructor(t){this.t=t,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ar,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ar)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(kt(typeof r.accessToken=="string"),new Kp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return kt(t===null||typeof t=="string"),new qt(t)}}class Gw{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qw{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Gw(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yw{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xw{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(kt(typeof n.token=="string"),this.R=n.token,new Yw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Jw(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Zw{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Jw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function ut(e,t){return e<t?-1:e>t?1:0}function yr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class ie{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ie.fromMillis(Date.now())}static fromDate(t){return ie.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ut(this.nanoseconds,t.nanoseconds):ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new ie(0,0))}static max(){return new G(new ie(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gs{constructor(t,n,r){n===void 0?n=0:n>t.length&&Y(),r===void 0?r=t.length-n:r>t.length-n&&Y(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return gs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof gs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Tt extends gs{construct(t,n,r){return new Tt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new q(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Tt(n)}static emptyPath(){return new Tt([])}}const t0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends gs{construct(t,n,r){return new re(t,n,r)}static isValidIdentifier(t){return t0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new re(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new re(n)}static emptyPath(){return new re([])}}/**
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
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(Tt.fromString(t))}static fromName(t){return new z(Tt.fromString(t).popFirst(5))}static empty(){return new z(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Tt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new Tt(t.slice()))}}function e0(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new ie(n+1,0):new ie(n,r));return new pn(s,z.empty(),t)}function n0(e){return new pn(e.readTime,e.key,-1)}class pn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new pn(G.min(),z.empty(),-1)}static max(){return new pn(G.max(),z.empty(),-1)}}function r0(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=z.comparator(e.documentKey,t.documentKey),n!==0?n:ut(e.largestBatchId,t.largestBatchId))}/**
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
 */const s0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class i0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function nl(e){if(e.code!==D.FAILED_PRECONDITION||e.message!==s0)throw e;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):A.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):A.reject(n)}static resolve(t){return new A((n,r)=>{n(t)})}static reject(t){return new A((n,r)=>{r(t)})}static waitFor(t){return new A((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=A.resolve(!1);for(const r of t)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new A((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new A((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function bs(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class rl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}rl.ae=-1;function ao(e){return e==null}function Ba(e){return e===0&&1/e==-1/0}/**
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
 */function uh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function co(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function o0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Rt{constructor(t,n){this.comparator=t,this.root=n||Ft.EMPTY}insert(t,n){return new Rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zs(this.root,t,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zs(this.root,t,this.comparator,!0)}}class zs{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ft{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Ft.RED,this.left=s??Ft.EMPTY,this.right=i??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Ft(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const t=this.left.check();if(t!==this.right.check())throw Y();return t+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Ft(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Yt{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new hh(this.data.getIterator())}getIteratorFrom(t){return new hh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Yt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Yt(this.comparator);return n.data=t,n}}class hh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(t){this.fields=t,t.sort(re.comparator)}static empty(){return new nn([])}unionWith(t){let n=new Yt(re.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new nn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return yr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Wp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wp("Invalid base64 string: "+i):i}}(t);return new Xt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Xt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const a0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(e){if(kt(!!e),typeof e=="string"){let t=0;const n=a0.exec(e);if(kt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:St(e.seconds),nanos:St(e.nanos)}}function St(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Un(e){return typeof e=="string"?Xt.fromBase64String(e):Xt.fromUint8Array(e)}/**
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
 */function sl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function il(e){const t=e.mapValue.fields.__previous_value__;return sl(t)?il(t):t}function ms(e){const t=gn(e.mapValue.fields.__local_write_time__.timestampValue);return new ie(t.seconds,t.nanos)}/**
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
 */class c0{constructor(t,n,r,s,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class _s{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof _s&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ks={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?sl(e)?4:l0(e)?9007199254740991:10:Y()}function Oe(e,t){if(e===t)return!0;const n=jn(e);if(n!==jn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ms(e).isEqual(ms(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gn(s.timestampValue),a=gn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Un(s.bytesValue).isEqual(Un(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return St(s.geoPointValue.latitude)===St(i.geoPointValue.latitude)&&St(s.geoPointValue.longitude)===St(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return St(s.integerValue)===St(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=St(s.doubleValue),a=St(i.doubleValue);return o===a?Ba(o)===Ba(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return yr(e.arrayValue.values||[],t.arrayValue.values||[],Oe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(uh(o)!==uh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Oe(o[c],a[c])))return!1;return!0}(e,t);default:return Y()}}function ys(e,t){return(e.values||[]).find(n=>Oe(n,t))!==void 0}function Er(e,t){if(e===t)return 0;const n=jn(e),r=jn(t);if(n!==r)return ut(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ut(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=St(i.integerValue||i.doubleValue),c=St(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return fh(e.timestampValue,t.timestampValue);case 4:return fh(ms(e),ms(t));case 5:return ut(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Un(i),c=Un(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ut(a[l],c[l]);if(u!==0)return u}return ut(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=ut(St(i.latitude),St(o.latitude));return a!==0?a:ut(St(i.longitude),St(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Er(a[l],c[l]);if(u)return u}return ut(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Ks.mapValue&&o===Ks.mapValue)return 0;if(i===Ks.mapValue)return 1;if(o===Ks.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ut(c[h],u[h]);if(f!==0)return f;const g=Er(a[c[h]],l[u[h]]);if(g!==0)return g}return ut(c.length,u.length)}(e.mapValue,t.mapValue);default:throw Y()}}function fh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ut(e,t);const n=gn(e),r=gn(t),s=ut(n.seconds,r.seconds);return s!==0?s:ut(n.nanos,r.nanos)}function vr(e){return $a(e)}function $a(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=gn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Un(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return z.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$a(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$a(n.fields[o])}`;return s+"}"}(e.mapValue):Y()}function Ua(e){return!!e&&"integerValue"in e}function ol(e){return!!e&&"arrayValue"in e}function dh(e){return!!e&&"nullValue"in e}function ph(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qo(e){return!!e&&"mapValue"in e}function Qr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return co(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Qr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Qr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function l0(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class be{constructor(t){this.value=t}static empty(){return new be({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Qo(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qr(n)}setAll(t){let n=re.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Oe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){co(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new be(Qr(this.value))}}/**
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
 */class Ht{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ht(t,0,G.min(),G.min(),G.min(),be.empty(),0)}static newFoundDocument(t,n,r,s){return new Ht(t,1,n,G.min(),r,s,0)}static newNoDocument(t,n){return new Ht(t,2,n,G.min(),G.min(),be.empty(),0)}static newUnknownDocument(t,n){return new Ht(t,3,n,G.min(),G.min(),be.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ai{constructor(t,n){this.position=t,this.inclusive=n}}function gh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=Er(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function mh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Oe(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Yr{constructor(t,n="asc"){this.field=t,this.dir=n}}function u0(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Gp{}class xt extends Gp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new f0(t,n,r):n==="array-contains"?new g0(t,r):n==="in"?new m0(t,r):n==="not-in"?new _0(t,r):n==="array-contains-any"?new y0(t,r):new xt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new d0(t,r):new p0(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Er(n,this.value)):n!==null&&jn(this.value)===jn(n)&&this.matchesComparison(Er(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ne extends Gp{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Ne(t,n)}matches(t){return Qp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Qp(e){return e.op==="and"}function Yp(e){return h0(e)&&Qp(e)}function h0(e){for(const t of e.filters)if(t instanceof Ne)return!1;return!0}function ja(e){if(e instanceof xt)return e.field.canonicalString()+e.op.toString()+vr(e.value);if(Yp(e))return e.filters.map(t=>ja(t)).join(",");{const t=e.filters.map(n=>ja(n)).join(",");return`${e.op}(${t})`}}function Xp(e,t){return e instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.field.isEqual(s.field)&&Oe(r.value,s.value)}(e,t):e instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Xp(o,s.filters[a]),!0):!1}(e,t):void Y()}function Jp(e){return e instanceof xt?function(n){return`${n.field.canonicalString()} ${n.op} ${vr(n.value)}`}(e):e instanceof Ne?function(n){return n.op.toString()+" {"+n.getFilters().map(Jp).join(" ,")+"}"}(e):"Filter"}class f0 extends xt{constructor(t,n,r){super(t,n,r),this.key=z.fromName(r.referenceValue)}matches(t){const n=z.comparator(t.key,this.key);return this.matchesComparison(n)}}class d0 extends xt{constructor(t,n){super(t,"in",n),this.keys=Zp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class p0 extends xt{constructor(t,n){super(t,"not-in",n),this.keys=Zp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Zp(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class g0 extends xt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ol(n)&&ys(n.arrayValue,this.value)}}class m0 extends xt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ys(this.value.arrayValue,n)}}class _0 extends xt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ys(this.value.arrayValue,n)}}class y0 extends xt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ol(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ys(this.value.arrayValue,r))}}/**
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
 */class E0{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function _h(e,t=null,n=[],r=[],s=null,i=null,o=null){return new E0(e,t,n,r,s,i,o)}function al(e){const t=it(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ja(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ao(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>vr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>vr(r)).join(",")),t.he=n}return t.he}function cl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!u0(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Xp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!mh(e.startAt,t.startAt)&&mh(e.endAt,t.endAt)}function qa(e){return z.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class lo{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function v0(e,t,n,r,s,i,o,a){return new lo(e,t,n,r,s,i,o,a)}function ll(e){return new lo(e)}function yh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function T0(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function I0(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function w0(e){return e.collectionGroup!==null}function cr(e){const t=it(e);if(t.Pe===null){t.Pe=[];const n=I0(t),r=T0(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Yr(n)),t.Pe.push(new Yr(re.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Yr(re.keyField(),i))}}}return t.Pe}function We(e){const t=it(e);if(!t.Ie)if(t.limitType==="F")t.Ie=_h(t.path,t.collectionGroup,cr(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of cr(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Yr(i.field,o))}const r=t.endAt?new Ai(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ai(t.startAt.position,t.startAt.inclusive):null;t.Ie=_h(t.path,t.collectionGroup,n,t.filters,t.limit,r,s)}return t.Ie}function Ha(e,t,n){return new lo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function uo(e,t){return cl(We(e),We(t))&&e.limitType===t.limitType}function tg(e){return`${al(We(e))}|lt:${e.limitType}`}function za(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Jp(s)).join(", ")}]`),ao(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>vr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>vr(s)).join(",")),`Target(${r})`}(We(e))}; limitType=${e.limitType})`}function ho(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of cr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=gh(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,cr(r),s)||r.endAt&&!function(o,a,c){const l=gh(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,cr(r),s))}(e,t)}function A0(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function eg(e){return(t,n)=>{let r=!1;for(const s of cr(e)){const i=R0(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function R0(e,t,n){const r=e.field.isKeyField()?z.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Er(c,l):Y()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class br{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){co(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return o0(this.inner)}size(){return this.innerSize}}/**
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
 */const C0=new Rt(z.comparator);function mn(){return C0}const ng=new Rt(z.comparator);function $r(...e){let t=ng;for(const n of e)t=t.insert(n.key,n);return t}function P0(e){let t=ng;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Vn(){return Xr()}function rg(){return Xr()}function Xr(){return new br(e=>e.toString(),(e,t)=>e.isEqual(t))}const S0=new Yt(z.comparator);function rt(...e){let t=S0;for(const n of e)t=t.add(n);return t}const b0=new Yt(ut);function D0(){return b0}/**
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
 */function V0(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ba(t)?"-0":t}}function x0(e){return{integerValue:""+e}}/**
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
 */class fo{constructor(){this._=void 0}}function k0(e,t,n){return e instanceof Ka?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sl(i)&&(i=il(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Ri?sg(e,t):e instanceof Ci?ig(e,t):function(s,i){const o=N0(s,i),a=Eh(o)+Eh(s.Te);return Ua(o)&&Ua(s.Te)?x0(a):V0(s.serializer,a)}(e,t)}function O0(e,t,n){return e instanceof Ri?sg(e,t):e instanceof Ci?ig(e,t):n}function N0(e,t){return e instanceof Wa?function(r){return Ua(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Ka extends fo{}class Ri extends fo{constructor(t){super(),this.elements=t}}function sg(e,t){const n=og(t);for(const r of e.elements)n.some(s=>Oe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ci extends fo{constructor(t){super(),this.elements=t}}function ig(e,t){let n=og(t);for(const r of e.elements)n=n.filter(s=>!Oe(s,r));return{arrayValue:{values:n}}}class Wa extends fo{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Eh(e){return St(e.integerValue||e.doubleValue)}function og(e){return ol(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function M0(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Ci&&s instanceof Ci?yr(r.elements,s.elements,Oe):r instanceof Wa&&s instanceof Wa?Oe(r.Te,s.Te):r instanceof Ka&&s instanceof Ka}(e.transform,t.transform)}class Nn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Nn}static exists(t){return new Nn(void 0,t)}static updateTime(t){return new Nn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ti(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ul{}function ag(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new F0(e.key,Nn.none()):new hl(e.key,e.data,Nn.none());{const n=e.data,r=be.empty();let s=new Yt(re.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new po(e.key,r,new nn(s.toArray()),Nn.none())}}function L0(e,t,n){e instanceof hl?function(s,i,o){const a=s.value.clone(),c=Th(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof po?function(s,i,o){if(!ti(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Th(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(cg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Jr(e,t,n,r){return e instanceof hl?function(i,o,a,c){if(!ti(i.precondition,o))return a;const l=i.value.clone(),u=Ih(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof po?function(i,o,a,c){if(!ti(i.precondition,o))return a;const l=Ih(i.fieldTransforms,c,o),u=o.data;return u.setAll(cg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return ti(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function vh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yr(r,s,(i,o)=>M0(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class hl extends ul{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class po extends ul{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cg(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Th(e,t,n){const r=new Map;kt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,O0(o,a,n[s]))}return r}function Ih(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,k0(i,o,t))}return r}class F0 extends ul{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class B0{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&L0(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Jr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Jr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=rg();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=ag(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),rt())}isEqual(t){return this.batchId===t.batchId&&yr(this.mutations,t.mutations,(n,r)=>vh(n,r))&&yr(this.baseMutations,t.baseMutations,(n,r)=>vh(n,r))}}/**
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
 */class $0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class U0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Pt,et;function lg(e){if(e===void 0)return Ke("GRPC error has no .code"),D.UNKNOWN;switch(e){case Pt.OK:return D.OK;case Pt.CANCELLED:return D.CANCELLED;case Pt.UNKNOWN:return D.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return D.INTERNAL;case Pt.UNAVAILABLE:return D.UNAVAILABLE;case Pt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Pt.NOT_FOUND:return D.NOT_FOUND;case Pt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Pt.ABORTED:return D.ABORTED;case Pt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Pt.DATA_LOSS:return D.DATA_LOSS;default:return Y()}}(et=Pt||(Pt={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class fl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ws}static getOrCreateInstance(){return Ws===null&&(Ws=new fl),Ws}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Ws=null;/**
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
 */function j0(){return new TextEncoder}/**
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
 */const q0=new or([4294967295,4294967295],0);function wh(e){const t=j0().encode(e),n=new Hw;return n.update(t),new Uint8Array(n.digest())}function Ah(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new or([n,r],0),new or([s,i],0)]}class dl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ur(`Invalid padding: ${n}`);if(r<0)throw new Ur(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ur(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ur(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=or.fromNumber(this.de)}Re(t,n,r){let s=t.add(n.multiply(or.fromNumber(r)));return s.compare(q0)===1&&(s=new or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=wh(t),[r,s]=Ah(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new dl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=wh(t),[r,s]=Ah(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class go{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Ds.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new go(G.min(),s,new Rt(ut),mn(),rt())}}class Ds{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ds(r,n,rt(),rt(),rt())}}/**
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
 */class ei{constructor(t,n,r,s){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=s}}class ug{constructor(t,n){this.targetId=t,this.pe=n}}class hg{constructor(t,n,r=Xt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rh{constructor(){this.ye=0,this.we=Ph(),this.Se=Xt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=rt(),n=rt(),r=rt();return this.we.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new Ds(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Ph()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class H0{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=mn(),this.$e=Ch(),this.Ue=new Rt(ut)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:Y()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){var n,r;const s=t.targetId,i=t.pe.count,o=this.Xe(s);if(o){const a=o.target;if(qa(a))if(i===0){const c=new z(a.path);this.ze(s,c,Ht.newNoDocument(c,G.min()))}else kt(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(t,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=fl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,g,v){var T,R,P,k,j,x;const J={localCacheCount:g,existenceFilterCount:v.count},tt=v.unchangedNames;return tt&&(J.bloomFilter={applied:h===0,hashCount:(T=tt==null?void 0:tt.hashCount)!==null&&T!==void 0?T:0,bitmapLength:(k=(P=(R=tt==null?void 0:tt.bits)===null||R===void 0?void 0:R.bitmap)===null||P===void 0?void 0:P.length)!==null&&k!==void 0?k:0,padding:(x=(j=tt==null?void 0:tt.bits)===null||j===void 0?void 0:j.padding)!==null&&x!==void 0?x:0},f&&(J.bloomFilter.mightContain=f)),J}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:s}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=Un(i).toUint8Array()}catch(h){if(h instanceof Wp)return _r("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new dl(c,o,a)}catch(h){return _r(h instanceof Ur?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return l.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(t.targetId,u)?0:2,nt:u}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(t,i,null),s++)}),s}st(t){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&qa(a.target)){const c=new z(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,Ht.newNoDocument(c,t))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=rt();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(t));const s=new go(t,n,this.Ue,this.Ke,r);return this.Ke=mn(),this.$e=Ch(),this.Ue=new Rt(ut),s}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ot(t,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Rh,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Yt(ut),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||L("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Rh),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Ch(){return new Rt(z.comparator)}function Ph(){return new Rt(z.comparator)}const z0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),K0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),W0=(()=>({and:"AND",or:"OR"}))();class G0{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ga(e,t){return e.useProto3Json||ao(t)?t:{value:t}}function Q0(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Y0(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function lr(e){return kt(!!e),G.fromTimestamp(function(n){const r=gn(n);return new ie(r.seconds,r.nanos)}(e))}function X0(e,t){return function(r){return new Tt(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function fg(e){const t=Tt.fromString(e);return kt(mg(t)),t}function Yo(e,t){const n=fg(t);if(n.get(1)!==e.databaseId.projectId)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z(dg(n))}function Qa(e,t){return X0(e.databaseId,t)}function J0(e){const t=fg(e);return t.length===4?Tt.emptyPath():dg(t)}function Sh(e){return new Tt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function dg(e){return kt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Z0(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(kt(u===void 0||typeof u=="string"),Xt.fromBase64String(u||"")):(kt(u===void 0||u instanceof Uint8Array),Xt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?D.UNKNOWN:lg(l.code);return new q(u,l.message||"")}(o);n=new hg(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yo(e,r.document.name),i=lr(r.document.updateTime),o=r.document.createTime?lr(r.document.createTime):G.min(),a=new be({mapValue:{fields:r.document.fields}}),c=Ht.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ei(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Yo(e,r.document),i=r.readTime?lr(r.readTime):G.min(),o=Ht.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ei([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Yo(e,r.document),i=r.removedTargetIds||[];n=new ei([],i,s,null)}else{if(!("filter"in t))return Y();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new U0(s,i),a=r.targetId;n=new ug(a,o)}}return n}function tA(e,t){return{documents:[Qa(e,t.path)]}}function eA(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Qa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Qa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return gg(Ne.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Xn(h.field),direction:sA(h.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ga(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function nA(e){let t=J0(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){kt(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=pg(h);return f instanceof Ne&&Yp(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(v){return new Yr(Jn(v.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ao(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,g=h.values||[];return new Ai(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,g=h.values||[];return new Ai(g,f)}(n.endAt)),v0(t,s,o,i,a,"F",c,l)}function rA(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function pg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jn(n.unaryFilter.field);return xt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jn(n.unaryFilter.field);return xt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jn(n.unaryFilter.field);return xt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jn(n.unaryFilter.field);return xt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(e):e.fieldFilter!==void 0?function(n){return xt.create(Jn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Ne.create(n.compositeFilter.filters.map(r=>pg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(e):Y()}function sA(e){return z0[e]}function iA(e){return K0[e]}function oA(e){return W0[e]}function Xn(e){return{fieldPath:e.canonicalString()}}function Jn(e){return re.fromServerFormat(e.fieldPath)}function gg(e){return e instanceof xt?function(n){if(n.op==="=="){if(ph(n.value))return{unaryFilter:{field:Xn(n.field),op:"IS_NAN"}};if(dh(n.value))return{unaryFilter:{field:Xn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ph(n.value))return{unaryFilter:{field:Xn(n.field),op:"IS_NOT_NAN"}};if(dh(n.value))return{unaryFilter:{field:Xn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xn(n.field),op:iA(n.op),value:n.value}}}(e):e instanceof Ne?function(n){const r=n.getFilters().map(s=>gg(s));return r.length===1?r[0]:{compositeFilter:{op:oA(n.op),filters:r}}}(e):Y()}function mg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class rn{constructor(t,n,r,s,i=G.min(),o=G.min(),a=Xt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new rn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class aA{constructor(t){this.ct=t}}function cA(e){const t=nA({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ha(t,t.limit,"L"):t}/**
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
 */class lA{constructor(){this.sn=new uA}addToCollectionParentIndex(t,n){return this.sn.add(n),A.resolve()}getCollectionParents(t,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return A.resolve()}deleteFieldIndex(t,n){return A.resolve()}getDocumentsMatchingTarget(t,n){return A.resolve(null)}getIndexType(t,n){return A.resolve(0)}getFieldIndexes(t,n){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,n){return A.resolve(pn.min())}getMinOffsetFromCollectionGroup(t,n){return A.resolve(pn.min())}updateCollectionGroup(t,n,r){return A.resolve()}updateIndexEntries(t,n){return A.resolve()}}class uA{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Yt(Tt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Yt(Tt.comparator)).toArray()}}/**
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
 */class hA{constructor(){this.changes=new br(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ht.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class fA{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class dA{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Jr(r.mutation,s,nn.empty(),ie.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,rt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=rt()){const s=Vn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=$r();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Vn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,rt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=mn();const o=Xr(),a=function(){return Xr()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof po)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Jr(u.mutation,l,u.mutation.getFieldMask(),ie.now())):o.set(l.key,nn.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new fA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Xr();let s=new Rt((o,a)=>o-a),i=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||nn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||rt()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=rg();u.forEach(f=>{if(!i.has(f)){const g=ag(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):w0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):A.resolve(Vn());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,rt())).next(u=>({batchId:a,changes:P0(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new z(n)).next(r=>{let s=$r();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=$r();return this.indexManager.getCollectionParents(t,s).next(o=>A.forEach(o,a=>{const c=function(u,h){return new lo(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ht.newInvalidDocument(l)))});let o=$r();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Jr(l.mutation,c,nn.empty(),ie.now()),ho(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class pA{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return A.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:lr(s.createTime)}}(n)),A.resolve()}getNamedQuery(t,n){return A.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(s){return{name:s.name,query:cA(s.bundledQuery),readTime:lr(s.readTime)}}(n)),A.resolve()}}/**
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
 */class gA{constructor(){this.overlays=new Rt(z.comparator),this.cr=new Map}getOverlay(t,n){return A.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Vn();return A.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),A.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),A.resolve()}getOverlaysForCollection(t,n,r){const s=Vn(),i=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Rt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Vn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Vn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return A.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $0(n,r));let i=this.cr.get(n);i===void 0&&(i=rt(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class pl{constructor(){this.lr=new Yt(Ot.hr),this.Pr=new Yt(Ot.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new Ot(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new Ot(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new z(new Tt([])),r=new Ot(n,t),s=new Ot(n,t+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new z(new Tt([])),r=new Ot(n,t),s=new Ot(n,t+1);let i=rt();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Ot(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ot{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return z.comparator(t.key,n.key)||ut(t.mr,n.mr)}static Ir(t,n){return ut(t.mr,n.mr)||z.comparator(t.key,n.key)}}/**
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
 */class mA{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Yt(Ot.hr)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new B0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new Ot(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(t,n){return A.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ot(n,0),s=new Ot(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Yt(ut);return n.forEach(s=>{const i=new Ot(s,0),o=new Ot(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),A.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Ot(new z(i),0);let a=new Yt(ut);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),A.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){kt(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return A.forEach(n.mutations,s=>{const i=new Ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new Ot(n,0),s=this.pr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _A{constructor(t){this.Dr=t,this.docs=function(){return new Rt(z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(t,n){let r=mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ht.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=mn();const o=n.path,a=new z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||r0(n0(u),r)<=0||(s.has(u.key)||ho(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(t,n,r,s){Y()}vr(t,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new yA(this)}getSize(t){return A.resolve(this.size)}}class yA extends hA{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(t,s)):this.sr.removeEntry(r)}),A.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
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
 */class EA{constructor(t){this.persistence=t,this.Cr=new br(n=>al(n),cl),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new pl,this.targetCount=0,this.Or=Tr.xn()}forEachTarget(t,n){return this.Cr.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),A.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new Tr(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,A.resolve()}updateTargetData(t,n){return this.Ln(n),A.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return A.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),A.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),A.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return A.resolve(r)}containsKey(t,n){return A.resolve(this.Mr.containsKey(n))}}/**
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
 */class vA{constructor(t,n){this.Nr={},this.overlays={},this.Br=new rl(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new EA(this),this.indexManager=new lA,this.remoteDocumentCache=function(s){return new _A(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new aA(n),this.Qr=new pA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new gA,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new mA(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){L("MemoryPersistence","Starting transaction:",t);const s=new TA(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(t,n){return A.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class TA extends i0{constructor(t){super(),this.currentSequenceNumber=t}}class gl{constructor(t){this.persistence=t,this.Wr=new pl,this.Gr=null}static zr(t){return new gl(t)}get jr(){if(this.Gr)return this.Gr;throw Y()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),A.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),A.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.jr,r=>{const s=z.fromPath(r);return this.Hr(t,s).next(i=>{i||n.removeEntry(s,G.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return A.or([()=>A.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
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
 */class ml{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=s}static qi(t,n){let r=rt(),s=rt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ml(t,n.fromCache,r,s)}}/**
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
 */class IA{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,s){return this.$i(t,n).next(i=>i||this.Ui(t,n,s,r)).next(i=>i||this.Wi(t,n))}$i(t,n){if(yh(n))return A.resolve(null);let r=We(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ha(n,null,"F"),r=We(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=rt(...i);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(t,Ha(n,null,"F")):this.ji(t,l,n,c)}))})))}Ui(t,n,r,s){return yh(n)||s.isEqual(G.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(t,n):(lh()<=lt.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),za(n)),this.ji(t,o,n,e0(s,-1)))})}Gi(t,n){let r=new Yt(eg(t));return n.forEach((s,i)=>{ho(t,i)&&(r=r.add(i))}),r}zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(t,n){return lh()<=lt.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",za(n)),this.Ki.getDocumentsMatchingQuery(t,n,pn.min())}ji(t,n,r,s){return this.Ki.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class wA{constructor(t,n,r,s){this.persistence=t,this.Hi=n,this.serializer=s,this.Ji=new Rt(ut),this.Yi=new br(i=>al(i),cl),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new dA(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function AA(e,t,n,r){return new wA(e,t,n,r)}async function _g(e,t){const n=it(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=rt();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function yg(e){const t=it(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function RA(e,t){const n=it(e),r=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Xt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(T,R,P){return T.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(f,g,u)&&a.push(n.kr.updateTargetData(i,g))});let c=mn(),l=rt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(CA(i,o,t.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(G.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function CA(e,t,n){let r=rt(),s=rt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function PA(e,t){const n=it(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,t).next(i=>i?(s=i,A.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new rn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function Ya(e,t,n){const r=it(e),s=r.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bs(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(s.target)}function bh(e,t,n){const r=it(e);let s=G.min(),i=rt();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=it(c),f=h.Yi.get(u);return f!==void 0?A.resolve(h.Ji.get(f)):h.kr.getTargetData(l,u)}(r,o,We(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?s:G.min(),n?i:rt())).next(a=>(SA(r,A0(t),a),{documents:a,ss:i})))}function SA(e,t,n){let r=e.Zi.get(t)||G.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Zi.set(t,r)}class Dh{constructor(){this.activeTargetIds=D0()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bA{constructor(){this.Hs=new Dh,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Dh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class DA{Ys(t){}shutdown(){}}/**
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
 */class Vh{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gs=null;function Xo(){return Gs===null?Gs=function(){return 268435456+Math.round(2147483648*Math.random())}():Gs++,"0x"+Gs.toString(16)}/**
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
 */const VA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xA{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
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
 */const jt="WebChannelConnection";class kA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,s,i,o){const a=Xo(),c=this.Vo(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={};return this.mo(l,i,o),this.fo(n,c,l,s).then(u=>(L("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw _r("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}po(n,r,s,i,o,a){return this.Ro(n,r,s,i,o)}mo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Vo(n,r){const s=VA[n];return`${this.To}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}fo(t,n,r,s){const i=Xo();return new Promise((o,a)=>{const c=new qw;c.setWithCredentials(!0),c.listenOnce($w.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Go.NO_ERROR:const u=c.getResponseJson();L(jt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Go.TIMEOUT:L(jt,`RPC '${t}' ${i} timed out`),a(new q(D.DEADLINE_EXCEEDED,"Request time out"));break;case Go.HTTP_ERROR:const h=c.getStatus();if(L(jt,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const v=function(R){const P=R.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(P)>=0?P:D.UNKNOWN}(g.status);a(new q(v,g.message))}else a(new q(D.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(D.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{L(jt,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);L(jt,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}yo(t,n,r){const s=Xo(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Fw(),a=Bw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new jw({})),this.mo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");L(jt,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const v=new xA({so:R=>{g?L(jt,`Not sending because RPC '${t}' stream ${s} is closed:`,R):(f||(L(jt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),L(jt,`RPC '${t}' stream ${s} sending:`,R),h.send(R))},oo:()=>h.close()}),T=(R,P,k)=>{R.listen(P,j=>{try{k(j)}catch(x){setTimeout(()=>{throw x},0)}})};return T(h,Hs.EventType.OPEN,()=>{g||L(jt,`RPC '${t}' stream ${s} transport opened.`)}),T(h,Hs.EventType.CLOSE,()=>{g||(g=!0,L(jt,`RPC '${t}' stream ${s} transport closed`),v.Po())}),T(h,Hs.EventType.ERROR,R=>{g||(g=!0,_r(jt,`RPC '${t}' stream ${s} transport errored:`,R),v.Po(new q(D.UNAVAILABLE,"The operation could not be completed")))}),T(h,Hs.EventType.MESSAGE,R=>{var P;if(!g){const k=R.data[0];kt(!!k);const j=k,x=j.error||((P=j[0])===null||P===void 0?void 0:P.error);if(x){L(jt,`RPC '${t}' stream ${s} received error:`,x);const J=x.status;let tt=function(gt){const ot=Pt[gt];if(ot!==void 0)return lg(ot)}(J),Dt=x.message;tt===void 0&&(tt=D.INTERNAL,Dt="Unknown error status: "+J+" with message "+x.message),g=!0,v.Po(new q(tt,Dt)),h.close()}else L(jt,`RPC '${t}' stream ${s} received:`,k),v.Io(k)}}),T(a,Uw.STAT_EVENT,R=>{R.stat===ah.PROXY?L(jt,`RPC '${t}' stream ${s} detected buffering proxy`):R.stat===ah.NOPROXY&&L(jt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function Jo(){return typeof document<"u"?document:null}/**
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
 */function Eg(e){return new G0(e,!0)}/**
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
 */class vg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=n,this.wo=r,this.So=s,this.bo=i,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(t){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),t())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
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
 */class OA{constructor(t,n,r,s,i,o,a,c){this.ii=t,this.No=r,this.Bo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new vg(t,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(t,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,t!==4?this.Qo.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const t=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Lo===n&&this.Xo(r,s)},r=>{t(()=>{const s=new q(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(s)})})}Xo(t,n){const r=this.Zo(this.Lo);this.stream=this.t_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.e_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(t){return L("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Zo(t){return n=>{this.ii.enqueueAndForget(()=>this.Lo===t?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NA extends OA{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}t_(t,n){return this.connection.yo("Listen",t,n)}onMessage(t){this.Qo.reset();const n=Z0(this.serializer,t),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?lr(o.readTime):G.min()}(t);return this.listener.n_(n,r)}r_(t){const n={};n.database=Sh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=qa(c)?{documents:tA(i,c)}:{query:eA(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Y0(i,o.resumeToken);const l=Ga(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=Q0(i,o.snapshotVersion.toTimestamp());const l=Ga(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=rA(this.serializer,t);r&&(n.labels=r),this.jo(n)}i_(t){const n={};n.database=Sh(this.serializer),n.removeTarget=t,this.jo(n)}}/**
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
 */class MA extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.l_=!1}h_(){if(this.l_)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(t,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Ro(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(D.UNKNOWN,s.toString())})}po(t,n,r,s){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.po(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(D.UNKNOWN,i.toString())})}terminate(){this.l_=!0}}class LA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(t){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.A_("Offline")))}set(t){this.m_(),this.I_=0,t==="Online"&&(this.E_=!1),this.A_(t)}A_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}R_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(Ke(n),this.E_=!1):L("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
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
 */class FA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=i,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{xs(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=it(c);l.p_.add(4),await Vs(l),l.S_.set("Unknown"),l.p_.delete(4),await mo(l)}(this))})}),this.S_=new LA(r,s)}}async function mo(e){if(xs(e))for(const t of e.y_)await t(!0)}async function Vs(e){for(const t of e.y_)await t(!1)}function Tg(e,t){const n=it(e);n.g_.has(t.targetId)||(n.g_.set(t.targetId,t),El(n)?yl(n):Dr(n).$o()&&_l(n,t))}function Ig(e,t){const n=it(e),r=Dr(n);n.g_.delete(t),r.$o()&&wg(n,t),n.g_.size===0&&(r.$o()?r.Go():xs(n)&&n.S_.set("Unknown"))}function _l(e,t){if(e.b_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Dr(e).r_(t)}function wg(e,t){e.b_.Be(t),Dr(e).i_(t)}function yl(e){e.b_=new H0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.g_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Dr(e).start(),e.S_.d_()}function El(e){return xs(e)&&!Dr(e).Ko()&&e.g_.size>0}function xs(e){return it(e).p_.size===0}function Ag(e){e.b_=void 0}async function BA(e){e.g_.forEach((t,n)=>{_l(e,t)})}async function $A(e,t){Ag(e),El(e)?(e.S_.V_(t),yl(e)):e.S_.set("Unknown")}async function UA(e,t,n){if(e.S_.set("Online"),t instanceof hg&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.g_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.g_.delete(a),s.b_.removeTarget(a))}(e,t)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await xh(e,r)}else if(t instanceof ei?e.b_.We(t):t instanceof ug?e.b_.Ze(t):e.b_.je(t),!n.isEqual(G.min()))try{const r=await yg(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.b_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.g_.get(l);u&&i.g_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.g_.get(c);if(!u)return;i.g_.set(c,u.withResumeToken(Xt.EMPTY_BYTE_STRING,u.snapshotVersion)),wg(i,c);const h=new rn(u.target,c,l,u.sequenceNumber);_l(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await xh(e,r)}}async function xh(e,t,n){if(!bs(t))throw t;e.p_.add(1),await Vs(e),e.S_.set("Offline"),n||(n=()=>yg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),e.p_.delete(1),await mo(e)})}async function kh(e,t){const n=it(e);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=xs(n);n.p_.add(3),await Vs(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.p_.delete(3),await mo(n)}async function jA(e,t){const n=it(e);t?(n.p_.delete(2),await mo(n)):t||(n.p_.add(2),await Vs(n),n.S_.set("Unknown"))}function Dr(e){return e.D_||(e.D_=function(n,r,s){const i=it(n);return i.h_(),new NA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:BA.bind(null,e),uo:$A.bind(null,e),n_:UA.bind(null,e)}),e.y_.push(async t=>{t?(e.D_.Wo(),El(e)?yl(e):e.S_.set("Unknown")):(await e.D_.stop(),Ag(e))})),e.D_}/**
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
 */class vl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new vl(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rg(e,t){if(Ke("AsyncQueue",`${t}: ${e}`),bs(e))return new q(D.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ur{constructor(t){this.comparator=t?(n,r)=>t(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=$r(),this.sortedSet=new Rt(this.comparator)}static emptySet(t){return new ur(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ur)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ur;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Oh{constructor(){this.C_=new Rt(z.comparator)}track(t){const n=t.doc.key,r=this.C_.get(n);r?t.type!==0&&r.type===3?this.C_=this.C_.insert(n,t):t.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.C_=this.C_.remove(n):t.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:t.doc}):Y():this.C_=this.C_.insert(n,t)}F_(){const t=[];return this.C_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ir{constructor(t,n,r,s,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ir(t,n,ur.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&uo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class qA{constructor(){this.M_=void 0,this.listeners=[]}}class HA{constructor(){this.queries=new br(t=>tg(t),uo),this.onlineState="Unknown",this.x_=new Set}}async function zA(e,t){const n=it(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new qA),s)try{i.M_=await n.onListen(r)}catch(o){const a=Rg(o,`Initialization of query '${za(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.O_(n.onlineState),i.M_&&t.N_(i.M_)&&Tl(n)}async function KA(e,t){const n=it(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function WA(e,t){const n=it(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.N_(s)&&(r=!0);o.M_=s}}r&&Tl(n)}function GA(e,t,n){const r=it(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Tl(e){e.x_.forEach(t=>{t.next()})}class QA{constructor(t,n,r){this.query=t,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ir(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.L_?this.q_(t)&&(this.B_.next(t),n=!0):this.Q_(t,this.onlineState)&&(this.K_(t),n=!0),this.k_=t,n}onError(t){this.B_.error(t)}O_(t){this.onlineState=t;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,t)&&(this.K_(this.k_),n=!0),n}Q_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}q_(t){if(t.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(t){t=Ir.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.L_=!0,this.B_.next(t)}}/**
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
 */class Cg{constructor(t){this.key=t}}class Pg{constructor(t){this.key=t}}class YA{constructor(t,n){this.query=t,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=rt(),this.mutatedKeys=rt(),this.ta=eg(t),this.na=new ur(this.ta)}get ra(){return this.Z_}ia(t,n){const r=n?n.sa:new Oh,s=n?n.na:this.na;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),g=ho(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;f&&g?f.data.isEqual(g.data)?v!==T&&(r.track({type:3,doc:g}),R=!0):this.oa(f,g)||(r.track({type:2,doc:g}),R=!0,(c&&this.ta(g,c)>0||l&&this.ta(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),R=!0):f&&!g&&(r.track({type:1,doc:f}),R=!0,(c||l)&&(a=!0)),R&&(g?(o=o.add(g),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{na:o,sa:r,zi:a,mutatedKeys:i}}oa(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.na;this.na=t.na,this.mutatedKeys=t.mutatedKeys;const i=t.sa.F_();i.sort((l,u)=>function(f,g){const v=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return v(f)-v(g)}(l.type,u.type)||this.ta(l.doc,u.doc)),this._a(r);const o=n?this.aa():[],a=this.ea.size===0&&this.current?1:0,c=a!==this.X_;return this.X_=a,i.length!==0||c?{snapshot:new Ir(this.query,t.na,s,i,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new Oh,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(t){return!this.Z_.has(t)&&!!this.na.has(t)&&!this.na.get(t).hasLocalMutations}_a(t){t&&(t.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=t.current)}aa(){if(!this.current)return[];const t=this.ea;this.ea=rt(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return t.forEach(r=>{this.ea.has(r)||n.push(new Pg(r))}),this.ea.forEach(r=>{t.has(r)||n.push(new Cg(r))}),n}la(t){this.Z_=t.ss,this.ea=rt();const n=this.ia(t.documents);return this.applyChanges(n,!0)}ha(){return Ir.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class XA{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class JA{constructor(t){this.key=t,this.Pa=!1}}class ZA{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new br(a=>tg(a),uo),this.Ea=new Map,this.da=new Set,this.Aa=new Rt(z.comparator),this.Ra=new Map,this.Va=new pl,this.ma={},this.fa=new Map,this.ga=Tr.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function tR(e,t){const n=aR(e);let r,s;const i=n.Ta.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ha();else{const o=await PA(n.localStore,We(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await eR(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Tg(n.remoteStore,o)}return s}async function eR(e,t,n,r,s){e.ya=(h,f,g)=>async function(T,R,P,k){let j=R.view.ia(P);j.zi&&(j=await bh(T.localStore,R.query,!1).then(({documents:tt})=>R.view.ia(tt,j)));const x=k&&k.targetChanges.get(R.targetId),J=R.view.applyChanges(j,T.isPrimaryClient,x);return Mh(T,R.targetId,J.ua),J.snapshot}(e,h,f,g);const i=await bh(e.localStore,t,!0),o=new YA(t,i.ss),a=o.ia(i.documents),c=Ds.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,c);Mh(e,n,l.ua);const u=new XA(t,n,o);return e.Ta.set(t,u),e.Ea.has(n)?e.Ea.get(n).push(t):e.Ea.set(n,[t]),l.snapshot}async function nR(e,t){const n=it(e),r=n.Ta.get(t),s=n.Ea.get(r.targetId);if(s.length>1)return n.Ea.set(r.targetId,s.filter(i=>!uo(i,t))),void n.Ta.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ya(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ig(n.remoteStore,r.targetId),Xa(n,r.targetId)}).catch(nl)):(Xa(n,r.targetId),await Ya(n.localStore,r.targetId,!0))}async function Sg(e,t){const n=it(e);try{const r=await RA(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ra.get(i);o&&(kt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Pa=!0:s.modifiedDocuments.size>0?kt(o.Pa):s.removedDocuments.size>0&&(kt(o.Pa),o.Pa=!1))}),await Dg(n,r,t)}catch(r){await nl(r)}}function Nh(e,t,n){const r=it(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ta.forEach((i,o)=>{const a=o.view.O_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=it(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.O_(a)&&(l=!0)}),l&&Tl(c)}(r.eventManager,t),s.length&&r.Ia.n_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rR(e,t,n){const r=it(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ra.get(t),i=s&&s.key;if(i){let o=new Rt(z.comparator);o=o.insert(i,Ht.newNoDocument(i,G.min()));const a=rt().add(i),c=new go(G.min(),new Map,new Rt(ut),o,a);await Sg(r,c),r.Aa=r.Aa.remove(i),r.Ra.delete(t),Il(r)}else await Ya(r.localStore,t,!1).then(()=>Xa(r,t,n)).catch(nl)}function Xa(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ea.get(t))e.Ta.delete(r),n&&e.Ia.wa(r,n);e.Ea.delete(t),e.isPrimaryClient&&e.Va.Ar(t).forEach(r=>{e.Va.containsKey(r)||bg(e,r)})}function bg(e,t){e.da.delete(t.path.canonicalString());const n=e.Aa.get(t);n!==null&&(Ig(e.remoteStore,n),e.Aa=e.Aa.remove(t),e.Ra.delete(n),Il(e))}function Mh(e,t,n){for(const r of n)r instanceof Cg?(e.Va.addReference(r.key,t),sR(e,r)):r instanceof Pg?(L("SyncEngine","Document no longer in limbo: "+r.key),e.Va.removeReference(r.key,t),e.Va.containsKey(r.key)||bg(e,r.key)):Y()}function sR(e,t){const n=t.key,r=n.path.canonicalString();e.Aa.get(n)||e.da.has(r)||(L("SyncEngine","New document in limbo: "+n),e.da.add(r),Il(e))}function Il(e){for(;e.da.size>0&&e.Aa.size<e.maxConcurrentLimboResolutions;){const t=e.da.values().next().value;e.da.delete(t);const n=new z(Tt.fromString(t)),r=e.ga.next();e.Ra.set(r,new JA(n)),e.Aa=e.Aa.insert(n,r),Tg(e.remoteStore,new rn(We(ll(n.path)),r,"TargetPurposeLimboResolution",rl.ae))}}async function Dg(e,t,n){const r=it(e),s=[],i=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,c)=>{o.push(r.ya(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=ml.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ia.n_(s),await async function(c,l){const u=it(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(l,f=>A.forEach(f.Li,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>A.forEach(f.ki,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!bs(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=u.Ji.get(f),v=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(v);u.Ji=u.Ji.insert(f,T)}}}(r.localStore,i))}async function iR(e,t){const n=it(e);if(!n.currentUser.isEqual(t)){L("SyncEngine","User change. New user:",t.toKey());const r=await _g(n.localStore,t);n.currentUser=t,function(i,o){i.fa.forEach(a=>{a.forEach(c=>{c.reject(new q(D.CANCELLED,o))})}),i.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dg(n,r.ts)}}function oR(e,t){const n=it(e),r=n.Ra.get(t);if(r&&r.Pa)return rt().add(r.key);{let s=rt();const i=n.Ea.get(t);if(!i)return s;for(const o of i){const a=n.Ta.get(o);s=s.unionWith(a.view.ra)}return s}}function aR(e){const t=it(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Sg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=oR.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rR.bind(null,t),t.Ia.n_=WA.bind(null,t.eventManager),t.Ia.wa=GA.bind(null,t.eventManager),t}class Lh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Eg(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return AA(this.persistence,new IA,t.initialUser,this.serializer)}createPersistence(t){return new vA(gl.zr,this.serializer)}createSharedClientState(t){return new bA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cR{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iR.bind(null,this.syncEngine),await jA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new HA}()}createDatastore(t){const n=Eg(t.databaseInfo.databaseId),r=function(i){return new kA(i)}(t.databaseInfo);return function(i,o,a,c){return new MA(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new FA(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Nh(this.syncEngine,n,0),function(){return Vh.v()?new Vh:new DA}())}createSyncEngine(t,n){return function(s,i,o,a,c,l,u){const h=new ZA(s,i,o,a,c,l);return u&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=it(n);L("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await Vs(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
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
 */class lR{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Da(this.observer.next,t)}error(t){this.observer.error?this.Da(this.observer.error,t):Ke("Uncaught Error in snapshot listener:",t.toString())}va(){this.muted=!0}Da(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class uR{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=qt.UNAUTHENTICATED,this.clientId=Zw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Rg(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Zo(e,t){e.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _g(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Fh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await fR(e);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>kh(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>kh(t.remoteStore,i)),e._onlineComponents=t}function hR(e){return e.name==="FirebaseError"?e.code===D.FAILED_PRECONDITION||e.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function fR(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!hR(n))throw n;_r("Error using user provided cache. Falling back to memory cache: "+n),await Zo(e,new Lh)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Zo(e,new Lh);return e._offlineComponents}async function dR(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await Fh(e,e._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await Fh(e,new cR))),e._onlineComponents}async function Bh(e){const t=await dR(e),n=t.eventManager;return n.onListen=tR.bind(null,t.syncEngine),n.onUnlisten=nR.bind(null,t.syncEngine),n}/**
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
 */function Vg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const $h=new Map;/**
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
 */function pR(e,t,n){if(!n)throw new q(D.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gR(e,t,n,r){if(t===!0&&r===!0)throw new q(D.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Uh(e){if(z.isDocumentKey(e))throw new q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function mR(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Y()}function ni(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mR(e);throw new q(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class jh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}gR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wl{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jh(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zw;switch(r.type){case"firstParty":return new Qw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$h.get(n);r&&(L("ComponentProvider","Removing Datastore"),$h.delete(n),r.terminate())}(this),Promise.resolve()}}function _R(e,t,n,r={}){var s;const i=(e=ni(e,wl))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&_r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=qt.MOCK_USER;else{a=HE(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new qt(l)}e._authCredentials=new Kw(new Kp(a,c))}}/**
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
 */class _o{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new _o(this.firestore,t,this._query)}}class Hn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Hn(this.firestore,t,this._key)}}class hr extends _o{constructor(t,n,r){super(t,n,ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Hn(this.firestore,null,new z(t))}withConverter(t){return new hr(this.firestore,t,this._path)}}function yR(e,t,...n){if(e=qi(e),pR("collection","path",t),e instanceof wl){const r=Tt.fromString(t,...n);return Uh(r),new hr(e,null,r)}{if(!(e instanceof Hn||e instanceof hr))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tt.fromString(t,...n));return Uh(r),new hr(e.firestore,null,r)}}/**
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
 */class ER{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new vg(this,"async_queue_retry"),this.Za=()=>{const n=Jo();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const t=Jo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xa(),this.eu(t)}enterRestrictedMode(t){if(!this.Ga){this.Ga=!0,this.Ja=t||!1;const n=Jo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(t){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new ar;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Wa.push(t),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(t){if(!bs(t))throw t;L("AsyncQueue","Operation failed with retryable error: "+t)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(t){const n=this.Ua.then(()=>(this.Ha=!0,t().catch(r=>{this.ja=r,this.Ha=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(t,n,r){this.Xa(),this.Ya.indexOf(t)>-1&&(n=0);const s=vl.createAndSchedule(this,t,n,r,i=>this.nu(i));return this.za.push(s),s}Xa(){this.ja&&Y()}verifyOperationInProgress(){}async ru(){let t;do t=this.Ua,await t;while(t!==this.Ua)}iu(t){for(const n of this.za)if(n.timerId===t)return!0;return!1}su(t){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ru()})}ou(t){this.Ya.push(t)}nu(t){const n=this.za.indexOf(t);this.za.splice(n,1)}}function qh(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Ja extends wl{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new ER}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xg(this),this._firestoreClient.terminate()}}function vR(e,t){const n=typeof e=="object"?e:_d(),r=typeof e=="string"?e:t||"(default)",s=Es(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jE("firestore");i&&_R(s,...i)}return s}function TR(e){return e._firestoreClient||xg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function xg(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,l,u){return new c0(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Vg(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new uR(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Pi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pi(Xt.fromBase64String(t))}catch(n){throw new q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Pi(Xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class kg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class IR{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ut(this._lat,t._lat)||ut(this._long,t._long)}}const wR=new RegExp("[~\\*/\\[\\]]");function AR(e,t,n){if(t.search(wR)>=0)throw Hh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new kg(...t.split("."))._internalPath}catch{throw Hh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Hh(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new q(D.INVALID_ARGUMENT,a+e+c)}/**
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
 */class Og{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new RR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ng("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RR extends Og{data(){return super.data()}}function Ng(e,t){return typeof t=="string"?AR(e,t):t instanceof kg?t._internalPath:t._delegate._internalPath}/**
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
 */function CR(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new q(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PR{convertValue(t,n="none"){switch(jn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return St(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Un(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Y()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return co(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new IR(St(t.latitude),St(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=il(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ms(t));default:return null}}convertTimestamp(t){const n=gn(t);return new ie(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Tt.fromString(t);kt(mg(r));const s=new _s(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(n)||Ke(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class jr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Mg extends Og{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Ng("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ri extends Mg{data(t={}){return super.data(t)}}class SR{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new jr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new ri(this._firestore,this._userDataWriter,r.key,r,new jr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new ri(s._firestore,s._userDataWriter,a.doc.key,a.doc,new jr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new ri(s._firestore,s._userDataWriter,a.doc.key,a.doc,new jr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:bR(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bR(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class Lg extends PR{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pi(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Hn(this.firestore,null,n)}}function DR(e,...t){var n,r,s;e=qi(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||qh(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(qh(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(e instanceof Hn)l=ni(e.firestore,Ja),u=ll(e._key.path),c={next:h=>{t[o]&&t[o](VR(l,e,h))},error:t[o+1],complete:t[o+2]};else{const h=ni(e,_o);l=ni(h.firestore,Ja),u=h._query;const f=new Lg(l);c={next:g=>{t[o]&&t[o](new SR(l,f,h,g))},error:t[o+1],complete:t[o+2]},CR(e._query)}return function(f,g,v,T){const R=new lR(T),P=new QA(g,R,v);return f.asyncQueue.enqueueAndForget(async()=>zA(await Bh(f),P)),()=>{R.va(),f.asyncQueue.enqueueAndForget(async()=>KA(await Bh(f),P))}}(TR(l),u,a,c)}function VR(e,t,n){const r=n.docs.get(t._key),s=new Lg(e);return new Mg(e,s,t._key,r,new jr(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Sr=s})(Yv),dn(new He("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ja(new Ww(r.getProvider("auth-internal")),new Xw(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),xe(ch,"4.0.0",t),xe(ch,"4.0.0","esm2017")})();const xR={apiKey:"AIzaSyDPHqqYyhuEJ7fIpRksToVYC5zbM1onZ3w",authDomain:"flex-fa8c8.firebaseapp.com",projectId:"flex-fa8c8",storageBucket:"flex-fa8c8.appspot.com",messagingSenderId:"824163771541",appId:"1:824163771541:web:83622e1bb9f3aada3f679c",measurementId:"G-SY23L7GKQC"},kR=md(xR),OR=vR();OI(kR);const $R=e=>DR(yR(OR,"/routines"),e);const NR=EE({history:Ly("/flex/"),routes:[{path:"/plans",name:"plans",component:()=>Do(()=>import("./Plans-d4835c2b.js"),[])},{path:"/stats",name:"stats",component:()=>Do(()=>import("./Stats-85484b31.js"),[])},{path:"/me",name:"me",component:()=>Do(()=>import("./Me-00eccb36.js"),[])}]}),Al=gy(DE);Al.use(Ey());Al.use(NR);Al.mount("#app");export{he as F,ad as _,ui as a,Mn as b,da as c,c_ as d,Bm as e,$R as g,Df as o,Fm as p,pf as r,MR as t};
