var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode.removeChild(t)}let a;function s(t){a=t}const i=[],f=[],d=[],l=[],$=Promise.resolve();let p=!1;function h(t){d.push(t)}const m=new Set;let g=0;function y(){const t=a;do{for(;g<i.length;){const t=i[g];g++,s(t),b(t.$$)}for(s(null),i.length=0,g=0;f.length;)f.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];m.has(n)||(m.add(n),n())}d.length=0}while(i.length);for(;l.length;)l.pop()();p=!1,m.clear(),s(t)}function b(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(h)}}const _=new Set;function k(t,n){-1===t.$$.dirty[0]&&(i.push(t),p||(p=!0,$.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function x(c,i,f,d,l,$,p,m=[-1]){const g=a;s(c);const b=c.$$={fragment:null,ctx:null,props:$,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(g?g.$$.context:[])),callbacks:e(),dirty:m,skip_bound:!1,root:i.target||g.$$.root};p&&p(b.root);let x=!1;if(b.ctx=f?f(c,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return b.ctx&&l(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),x&&k(c,t)),n})):[],b.update(),x=!0,o(b.before_update),b.fragment=!!d&&d(b.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);b.fragment&&b.fragment.l(t),t.forEach(u)}else b.fragment&&b.fragment.c();i.intro&&((v=c.$$.fragment)&&v.i&&(_.delete(v),v.i(w))),function(t,e,c,u){const{fragment:a,on_mount:s,on_destroy:i,after_update:f}=t.$$;a&&a.m(e,c),u||h((()=>{const e=s.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(h)}(c,i.target,i.anchor,i.customElement),y()}var v,w;s(g)}function v(n){let e,o,r;return{c(){var t;t="main",e=document.createElement(t)},m(t,c){var u,a,s,i;!function(t,n,e){t.insertBefore(n,e||null)}(t,e,c),o||(u=window,a="keydown",s=n[0],u.addEventListener(a,s,i),r=()=>u.removeEventListener(a,s,i),o=!0)},p:t,i:t,o:t,d(t){t&&u(e),o=!1,r()}}}function w(t){let n=0,e=0,o=0,r=Math.round(50*Math.random()),c=50*Math.random(),u=50*Math.random();return[function(t){t.keyCode,n=(n+t.keyCode%r)%250,e=(e+t.keyCode%c)%250,o=(o+t.keyCode%u)%250,document.body.style.backgroundColor=`rgb(${n}, ${e}, ${o})`}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),x(this,t,w,v,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
