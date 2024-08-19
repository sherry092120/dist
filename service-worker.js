(function(){"use strict";var t={8221:function(){try{self["workbox:core:6.5.4"]&&_()}catch(t){}},4186:function(){try{self["workbox:precaching:6.5.4"]&&_()}catch(t){}},2432:function(){try{self["workbox:routing:6.5.4"]&&_()}catch(t){}},9687:function(){try{self["workbox:strategies:6.5.4"]&&_()}catch(t){}},9306:function(t,e,n){var r=n(4901),o=n(6823),i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not a function")}},7080:function(t,e,n){var r=n(4402).has;t.exports=function(t){return r(t),t}},8551:function(t,e,n){var r=n(34),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not an object")}},9617:function(t,e,n){var r=n(5397),o=n(5610),i=n(6198),s=function(t){return function(e,n,s){var a=r(e),c=i(a);if(0===c)return!t&&-1;var u,f=o(s,c);if(t&&n!==n){while(c>f)if(u=a[f++],u!==u)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},4527:function(t,e,n){var r=n(3724),o=n(4376),i=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(o(t)&&!s(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},2195:function(t,e,n){var r=n(9504),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},6955:function(t,e,n){var r=n(2140),o=n(4901),i=n(2195),s=n(8227),a=s("toStringTag"),c=Object,u="Arguments"===i(function(){return arguments}()),f=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=f(e=c(t),a))?n:u?i(e):"Object"===(r=i(e))&&o(e.callee)?"Arguments":r}},7740:function(t,e,n){var r=n(9297),o=n(5031),i=n(7347),s=n(4913);t.exports=function(t,e,n){for(var a=o(e),c=s.f,u=i.f,f=0;f<a.length;f++){var h=a[f];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},6699:function(t,e,n){var r=n(3724),o=n(4913),i=n(6980);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2106:function(t,e,n){var r=n(283),o=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},6840:function(t,e,n){var r=n(4901),o=n(4913),i=n(283),s=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&i(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(f){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},9433:function(t,e,n){var r=n(4576),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(t,e,n){var r=n(4576),o=n(34),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2839:function(t,e,n){var r=n(4576),o=r.navigator,i=o&&o.userAgent;t.exports=i?String(i):""},9519:function(t,e,n){var r,o,i=n(4576),s=n(2839),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,f=u&&u.v8;f&&(r=f.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},6518:function(t,e,n){var r=n(4576),o=n(7347).f,i=n(6699),s=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,f,h,l,p,d,y=t.target,g=t.global,v=t.stat;if(f=g?r:v?r[y]||a(y,{}):r[y]&&r[y].prototype,f)for(h in e){if(p=e[h],t.dontCallGetSet?(d=o(f,h),l=d&&d.value):l=f[h],n=u(g?h:y+(v?".":"#")+h,t.forced),!n&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),s(f,h,p,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},616:function(t,e,n){var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){var r=n(616),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},350:function(t,e,n){var r=n(3724),o=n(9297),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(t,e,n){var r=n(9504),o=n(9306);t.exports=function(t,e,n){try{return r(o(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(i){}}},9504:function(t,e,n){var r=n(616),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);t.exports=r?s:function(t){return function(){return i.apply(t,arguments)}}},7751:function(t,e,n){var r=n(4576),o=n(4901),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},5966:function(t,e,n){var r=n(9306),o=n(4117);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},3789:function(t,e,n){var r=n(9306),o=n(8551),i=n(9565),s=n(1291),a=n(1767),c="Invalid size",u=RangeError,f=TypeError,h=Math.max,l=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};l.prototype={getIterator:function(){return a(o(i(this.keys,this.set)))},includes:function(t){return i(this.has,this.set,t)}},t.exports=function(t){o(t);var e=+t.size;if(e!==e)throw new f(c);var n=s(e);if(n<0)throw new u(c);return new l(t,n)}},4576:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var r=n(9504),o=n(8981),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},421:function(t){t.exports={}},5917:function(t,e,n){var r=n(3724),o=n(9039),i=n(4055);t.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){var r=n(9504),o=n(9039),i=n(2195),s=Object,a=r("".split);t.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?a(t,""):s(t)}:s},3706:function(t,e,n){var r=n(9504),o=n(4901),i=n(7629),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},1181:function(t,e,n){var r,o,i,s=n(8622),a=n(4576),c=n(34),u=n(6699),f=n(9297),h=n(7629),l=n(6119),p=n(421),d="Object already initialized",y=a.TypeError,g=a.WeakMap,v=function(t){return i(t)?o(t):r(t,{})},w=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw new y("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var m=h.state||(h.state=new g);m.get=m.get,m.has=m.has,m.set=m.set,r=function(t,e){if(m.has(t))throw new y(d);return e.facade=t,m.set(t,e),e},o=function(t){return m.get(t)||{}},i=function(t){return m.has(t)}}else{var b=l("state");p[b]=!0,r=function(t,e){if(f(t,b))throw new y(d);return e.facade=t,u(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:v,getterFor:w}},4376:function(t,e,n){var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var r=n(9039),o=n(4901),i=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n===f||n!==u&&(o(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",f=s.POLYFILL="P";t.exports=s},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},6395:function(t){t.exports=!1},757:function(t,e,n){var r=n(7751),o=n(4901),i=n(1625),s=n(7040),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,a(t))}},507:function(t,e,n){var r=n(9565);t.exports=function(t,e,n){var o,i,s=n?t:t.iterator,a=t.next;while(!(o=r(a,s)).done)if(i=e(o.value),void 0!==i)return i}},9539:function(t,e,n){var r=n(9565),o=n(8551),i=n(5966);t.exports=function(t,e,n){var s,a;o(t);try{if(s=i(t,"return"),!s){if("throw"===e)throw n;return n}s=r(s,t)}catch(c){a=!0,s=c}if("throw"===e)throw n;if(a)throw s;return o(s),n}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){var r=n(9504),o=n(9039),i=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),f=n(1181),h=f.enforce,l=f.get,p=String,d=Object.defineProperty,y=r("".slice),g=r("".replace),v=r([].join),w=a&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),m=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===y(p(e),0,7)&&(e="["+g(p(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?d(t,"name",{value:e,configurable:!0}):t.name=e),w&&n&&s(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=h(t);return s(r,"source")||(r.source=v(m,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return i(this)&&l(this).source||u(this)}),"toString")},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},4913:function(t,e,n){var r=n(3724),o=n(5917),i=n(8686),s=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,h="enumerable",l="configurable",p="writable";e.f=r?i?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=f(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:l in n?n[l]:r[l],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var r=n(3724),o=n(9565),i=n(8773),s=n(6980),a=n(5397),c=n(6969),u=n(9297),f=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),f)try{return h(t,e)}catch(n){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},8480:function(t,e,n){var r=n(1828),o=n(8727),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){var r=n(9504),o=n(9297),i=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,f=[];for(n in r)!o(a,n)&&o(r,n)&&c(f,n);while(e.length>u)o(r,n=e[u++])&&(~s(f,n)||c(f,n));return f}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},4270:function(t,e,n){var r=n(9565),o=n(4901),i=n(34),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&o(n=t.toString)&&!i(a=r(n,t)))return a;if(o(n=t.valueOf)&&!i(a=r(n,t)))return a;if("string"!==e&&o(n=t.toString)&&!i(a=r(n,t)))return a;throw new s("Can't convert object to primitive value")}},5031:function(t,e,n){var r=n(7751),o=n(9504),i=n(8480),s=n(3717),a=n(8551),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=s.f;return n?c(e,n(t)):e}},7750:function(t,e,n){var r=n(4117),o=TypeError;t.exports=function(t){if(r(t))throw new o("Can't call method on "+t);return t}},9286:function(t,e,n){var r=n(4402),o=n(8469),i=r.Set,s=r.add;t.exports=function(t){var e=new i;return o(t,(function(t){s(e,t)})),e}},3440:function(t,e,n){var r=n(7080),o=n(4402),i=n(9286),s=n(5170),a=n(3789),c=n(8469),u=n(507),f=o.has,h=o.remove;t.exports=function(t){var e=r(this),n=a(t),o=i(e);return s(e)<=n.size?c(e,(function(t){n.includes(t)&&h(o,t)})):u(n.getIterator(),(function(t){f(e,t)&&h(o,t)})),o}},4402:function(t,e,n){var r=n(9504),o=Set.prototype;t.exports={Set:Set,add:r(o.add),has:r(o.has),remove:r(o["delete"]),proto:o}},8750:function(t,e,n){var r=n(7080),o=n(4402),i=n(5170),s=n(3789),a=n(8469),c=n(507),u=o.Set,f=o.add,h=o.has;t.exports=function(t){var e=r(this),n=s(t),o=new u;return i(e)>n.size?c(n.getIterator(),(function(t){h(e,t)&&f(o,t)})):a(e,(function(t){n.includes(t)&&f(o,t)})),o}},4449:function(t,e,n){var r=n(7080),o=n(4402).has,i=n(5170),s=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=s(t);if(i(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var f=n.getIterator();return!1!==c(f,(function(t){if(o(e,t))return u(f,"normal",!1)}))}},3838:function(t,e,n){var r=n(7080),o=n(5170),i=n(8469),s=n(3789);t.exports=function(t){var e=r(this),n=s(t);return!(o(e)>n.size)&&!1!==i(e,(function(t){if(!n.includes(t))return!1}),!0)}},8527:function(t,e,n){var r=n(7080),o=n(4402).has,i=n(5170),s=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=s(t);if(i(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(t){if(!o(e,t))return c(u,"normal",!1)}))}},8469:function(t,e,n){var r=n(9504),o=n(507),i=n(4402),s=i.Set,a=i.proto,c=r(a.forEach),u=r(a.keys),f=u(new s).next;t.exports=function(t,e,n){return n?o({iterator:u(t),next:f},e):c(t,e)}},4916:function(t,e,n){var r=n(7751),o=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};t.exports=function(t){var e=r("Set");try{(new e)[t](o(0));try{return(new e)[t](o(-1)),!1}catch(n){return!0}}catch(i){return!1}}},5170:function(t,e,n){var r=n(6706),o=n(4402);t.exports=r(o.proto,"size","get")||function(t){return t.size}},3650:function(t,e,n){var r=n(7080),o=n(4402),i=n(9286),s=n(3789),a=n(507),c=o.add,u=o.has,f=o.remove;t.exports=function(t){var e=r(this),n=s(t).getIterator(),o=i(e);return a(n,(function(t){u(e,t)?f(o,t):c(o,t)})),o}},4204:function(t,e,n){var r=n(7080),o=n(4402).add,i=n(9286),s=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=s(t).getIterator(),c=i(e);return a(n,(function(t){o(c,t)})),c}},6119:function(t,e,n){var r=n(5745),o=n(3392),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},7629:function(t,e,n){var r=n(6395),o=n(4576),i=n(9433),s="__core-js_shared__",a=t.exports=o[s]||i(s,{});(a.versions||(a.versions=[])).push({version:"3.38.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},4495:function(t,e,n){var r=n(9519),o=n(9039),i=n(4576),s=i.String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(t,e,n){var r=n(1291),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5397:function(t,e,n){var r=n(7055),o=n(7750);t.exports=function(t){return r(o(t))}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){var r=n(1291),o=Math.min;t.exports=function(t){var e=r(t);return e>0?o(e,9007199254740991):0}},8981:function(t,e,n){var r=n(7750),o=Object;t.exports=function(t){return o(r(t))}},2777:function(t,e,n){var r=n(9565),o=n(34),i=n(757),s=n(5966),a=n(4270),c=n(8227),u=TypeError,f=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,c=s(t,f);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var r=n(2777),o=n(757);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},2140:function(t,e,n){var r=n(8227),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},655:function(t,e,n){var r=n(6955),o=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return o(t)}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var r=n(9504),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var r=n(3724),o=n(9039);t.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},8622:function(t,e,n){var r=n(4576),o=n(4901),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},8227:function(t,e,n){var r=n(4576),o=n(5745),i=n(9297),s=n(3392),a=n(4495),c=n(7040),u=r.Symbol,f=o("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return i(f,t)||(f[t]=a&&i(u,t)?u[t]:h("Symbol."+t)),f[t]}},4114:function(t,e,n){var r=n(6518),o=n(8981),i=n(6198),s=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),f=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!f();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=o(this),n=i(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},7642:function(t,e,n){var r=n(6518),o=n(3440),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("difference")},{difference:o})},8004:function(t,e,n){var r=n(6518),o=n(9039),i=n(8750),s=n(4916),a=!s("intersection")||o((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:i})},3853:function(t,e,n){var r=n(6518),o=n(4449),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isDisjointFrom")},{isDisjointFrom:o})},5876:function(t,e,n){var r=n(6518),o=n(3838),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSubsetOf")},{isSubsetOf:o})},2475:function(t,e,n){var r=n(6518),o=n(8527),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("isSupersetOf")},{isSupersetOf:o})},5024:function(t,e,n){var r=n(6518),o=n(3650),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("symmetricDifference")},{symmetricDifference:o})},1698:function(t,e,n){var r=n(6518),o=n(4204),i=n(4916);r({target:"Set",proto:!0,real:!0,forced:!i("union")},{union:o})},4603:function(t,e,n){var r=n(6840),o=n(9504),i=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=o(c.append),f=o(c["delete"]),h=o(c.forEach),l=o([].push),p=new a("a=1&a=2&b=3");p["delete"]("a",1),p["delete"]("b",void 0),p+""!=="a=2"&&r(c,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return f(this,t);var r=[];h(this,(function(t,e){l(r,{key:e,value:t})})),s(e,1);var o,a=i(t),c=i(n),p=0,d=0,y=!1,g=r.length;while(p<g)o=r[p++],y||o.key===a?(y=!0,f(this,o.key)):d++;while(d<g)o=r[d++],o.key===a&&o.value===c||u(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},7566:function(t,e,n){var r=n(6840),o=n(9504),i=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,u=o(c.getAll),f=o(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return f(this,t);var r=u(this,t);s(e,1);var o=i(n),a=0;while(a<r.length)if(r[a++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(t,e,n){var r=n(3724),o=n(9504),i=n(2106),s=URLSearchParams.prototype,a=o(s.forEach);r&&!("size"in s)&&i(s,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}!function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}();n(4603),n(7566),n(8721),n(8221);const r=(t,...e)=>{let n=t;return e.length>0&&(n+=` :: ${JSON.stringify(e)}`),n},o=r;class i extends Error{constructor(t,e){const n=o(t,e);super(n),this.name=t,this.details=e}}n(2432);const s="GET",a=t=>t&&"object"===typeof t?t:{handle:t};class c{constructor(t,e,n=s){this.handler=a(e),this.match=t,this.method=n}setCatchHandler(t){this.catchHandler=a(t)}}class u extends c{constructor(t,e,n){const r=({url:e})=>{const n=t.exec(e.href);if(n&&(e.origin===location.origin||0===n.index))return n.slice(1)};super(r,e,n)}}n(4114);const f=t=>{const e=new URL(String(t),location.href);return e.href.replace(new RegExp(`^${location.origin}`),"")};class h{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,n=this.handleRequest({request:e,event:t});n&&t.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data;0;const n=Promise.all(e.urlsToCache.map((e=>{"string"===typeof e&&(e=[e]);const n=new Request(...e);return this.handleRequest({request:n,event:t})})));t.waitUntil(n),t.ports&&t.ports[0]&&n.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const n=new URL(t.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const r=n.origin===location.origin,{params:o,route:i}=this.findMatchingRoute({event:e,request:t,sameOrigin:r,url:n});let s=i&&i.handler;const a=t.method;if(!s&&this._defaultHandlerMap.has(a)&&(s=this._defaultHandlerMap.get(a)),!s)return void 0;let c;try{c=s.handle({url:n,request:t,event:e,params:o})}catch(f){c=Promise.reject(f)}const u=i&&i.catchHandler;return c instanceof Promise&&(this._catchHandler||u)&&(c=c.catch((async r=>{if(u){0;try{return await u.handle({url:n,request:t,event:e,params:o})}catch(i){i instanceof Error&&(r=i)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:t,event:e});throw r}))),c}findMatchingRoute({url:t,sameOrigin:e,request:n,event:r}){const o=this._routes.get(n.method)||[];for(const i of o){let o;const s=i.match({url:t,sameOrigin:e,request:n,event:r});if(s)return o=s,(Array.isArray(o)&&0===o.length||s.constructor===Object&&0===Object.keys(s).length||"boolean"===typeof s)&&(o=void 0),{route:i,params:o}}return{}}setDefaultHandler(t,e=s){this._defaultHandlerMap.set(e,a(t))}setCatchHandler(t){this._catchHandler=a(t)}registerRoute(t){this._routes.has(t.method)||this._routes.set(t.method,[]),this._routes.get(t.method).push(t)}unregisterRoute(t){if(!this._routes.has(t.method))throw new i("unregister-route-but-not-found-with-method",{method:t.method});const e=this._routes.get(t.method).indexOf(t);if(!(e>-1))throw new i("unregister-route-route-not-registered");this._routes.get(t.method).splice(e,1)}}let l;const p=()=>(l||(l=new h,l.addFetchListener(),l.addCacheListener()),l);function d(t,e,n){let r;if("string"===typeof t){const o=new URL(t,location.href);0;const i=({url:t})=>t.href===o.href;r=new c(i,e,n)}else if(t instanceof RegExp)r=new u(t,e,n);else if("function"===typeof t)r=new c(t,e,n);else{if(!(t instanceof c))throw new i("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=t}const o=p();return o.registerRoute(r),r}n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);const y={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},g=t=>[y.prefix,t,y.suffix].filter((t=>t&&t.length>0)).join("-"),v=t=>{for(const e of Object.keys(y))t(e)},w={updateDetails:t=>{v((e=>{"string"===typeof t[e]&&(y[e]=t[e])}))},getGoogleAnalyticsName:t=>t||g(y.googleAnalytics),getPrecacheName:t=>t||g(y.precache),getPrefix:()=>y.prefix,getRuntimeName:t=>t||g(y.runtime),getSuffix:()=>y.suffix};function m(t,e){const n=e();return t.waitUntil(n),n}n(4186);const b="__WB_REVISION__";function x(t){if(!t)throw new i("add-to-cache-list-unexpected-type",{entry:t});if("string"===typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new i("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const r=new URL(n,location.href),o=new URL(n,location.href);return r.searchParams.set(b,e),{cacheKey:r.href,url:o.href}}class R{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:n})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;n?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return n}}}class S{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const n=(null===e||void 0===e?void 0:e.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return n?new Request(n,{headers:t.headers}):t},this._precacheController=t}}let C;function O(){if(void 0===C){const e=new Response("");if("body"in e)try{new Response(e.body),C=!0}catch(t){C=!1}C=!1}return C}async function P(t,e){let n=null;if(t.url){const e=new URL(t.url);n=e.origin}if(n!==self.location.origin)throw new i("cross-origin-copy-response",{origin:n});const r=t.clone(),o={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},s=e?e(o):o,a=O()?r.body:await r.blob();return new Response(a,s)}function L(t,e){const n=new URL(t);for(const r of e)n.searchParams.delete(r);return n.href}async function k(t,e,n,r){const o=L(e.url,n);if(e.url===o)return t.match(e,r);const i=Object.assign(Object.assign({},r),{ignoreSearch:!0}),s=await t.keys(e,i);for(const a of s){const e=L(a.url,n);if(o===e)return t.match(a,r)}}class j{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const T=new Set;async function U(){for(const t of T)await t()}function E(t){return new Promise((e=>setTimeout(e,t)))}n(9687);function q(t){return"string"===typeof t?new Request(t):t}class N{constructor(t,e){this._cacheKeys={},Object.assign(this,e),this.event=e.event,this._strategy=t,this._handlerDeferred=new j,this._extendLifetimePromises=[],this._plugins=[...t.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:e}=this;let n=q(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(s){if(s instanceof Error)throw new i("plugin-error-request-will-fetch",{thrownErrorMessage:s.message})}const o=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))t=await n({event:e,request:o,response:t});return t}catch(a){throw r&&await this.runCallbacks("fetchDidFail",{error:a,event:e,originalRequest:r.clone(),request:o.clone()}),a}}async fetchAndCachePut(t){const e=await this.fetch(t),n=e.clone();return this.waitUntil(this.cachePut(t,n)),e}async cacheMatch(t){const e=q(t);let n;const{cacheName:r,matchOptions:o}=this._strategy,i=await this.getCacheKey(e,"read"),s=Object.assign(Object.assign({},o),{cacheName:r});n=await caches.match(i,s);for(const a of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await a({cacheName:r,matchOptions:o,cachedResponse:n,request:i,event:this.event})||void 0;return n}async cachePut(t,e){const n=q(t);await E(0);const r=await this.getCacheKey(n,"write");if(!e)throw new i("cache-put-with-no-response",{url:f(r.url)});const o=await this._ensureResponseSafeToCache(e);if(!o)return!1;const{cacheName:s,matchOptions:a}=this._strategy,c=await self.caches.open(s),u=this.hasCallback("cacheDidUpdate"),h=u?await k(c,r.clone(),["__WB_REVISION__"],a):null;try{await c.put(r,u?o.clone():o)}catch(l){if(l instanceof Error)throw"QuotaExceededError"===l.name&&await U(),l}for(const i of this.iterateCallbacks("cacheDidUpdate"))await i({cacheName:s,oldResponse:h,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(t,e){const n=`${t.url} | ${e}`;if(!this._cacheKeys[n]){let r=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))r=q(await t({mode:e,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(t){for(const e of this._strategy.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const n of this.iterateCallbacks(t))await n(e)}*iterateCallbacks(t){for(const e of this._strategy.plugins)if("function"===typeof e[t]){const n=this._pluginStateMap.get(e),r=r=>{const o=Object.assign(Object.assign({},r),{state:n});return e[t](o)};yield r}}waitUntil(t){return this._extendLifetimePromises.push(t),t}async doneWaiting(){let t;while(t=this._extendLifetimePromises.shift())await t}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(t){let e=t,n=!1;for(const r of this.iterateCallbacks("cacheWillUpdate"))if(e=await r({request:this.request,response:e,event:this.event})||void 0,n=!0,!e)break;return n||e&&200!==e.status&&(e=void 0),e}}class K{constructor(t={}){this.cacheName=w.getRuntimeName(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,n="string"===typeof t.request?new Request(t.request):t.request,r="params"in t?t.params:void 0,o=new N(this,{event:e,request:n,params:r}),i=this._getResponse(o,n,e),s=this._awaitComplete(i,o,n,e);return[i,s]}async _getResponse(t,e,n){let r;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(r=await this._handle(e,t),!r||"error"===r.type)throw new i("no-response",{url:e.url})}catch(o){if(o instanceof Error)for(const i of t.iterateCallbacks("handlerDidError"))if(r=await i({error:o,event:n,request:e}),r)break;if(!r)throw o}for(const i of t.iterateCallbacks("handlerWillRespond"))r=await i({event:n,request:e,response:r});return r}async _awaitComplete(t,e,n,r){let o,i;try{o=await t}catch(i){}try{await e.runCallbacks("handlerDidRespond",{event:r,request:n,response:o}),await e.doneWaiting()}catch(s){s instanceof Error&&(i=s)}if(await e.runCallbacks("handlerDidComplete",{event:r,request:n,response:o,error:i}),e.destroy(),i)throw i}}class M extends K{constructor(t={}){t.cacheName=w.getPrecacheName(t.cacheName),super(t),this._fallbackToNetwork=!1!==t.fallbackToNetwork,this.plugins.push(M.copyRedirectedCacheableResponsesPlugin)}async _handle(t,e){const n=await e.cacheMatch(t);return n||(e.event&&"install"===e.event.type?await this._handleInstall(t,e):await this._handleFetch(t,e))}async _handleFetch(t,e){let n;const r=e.params||{};if(!this._fallbackToNetwork)throw new i("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{0;const o=r.integrity,i=t.integrity,s=!i||i===o;if(n=await e.fetch(new Request(t,{integrity:"no-cors"!==t.mode?i||o:void 0})),o&&s&&"no-cors"!==t.mode){this._useDefaultCacheabilityPluginIfNeeded();await e.cachePut(t,n.clone());0}}return n}async _handleInstall(t,e){this._useDefaultCacheabilityPluginIfNeeded();const n=await e.fetch(t),r=await e.cachePut(t,n.clone());if(!r)throw new i("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let t=null,e=0;for(const[n,r]of this.plugins.entries())r!==M.copyRedirectedCacheableResponsesPlugin&&(r===M.defaultPrecacheCacheabilityPlugin&&(t=n),r.cacheWillUpdate&&e++);0===e?this.plugins.push(M.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}M.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:t}){return!t||t.status>=400?null:t}},M.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:t}){return t.redirected?await P(t):t}};class I{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new M({cacheName:w.getPrecacheName(t),plugins:[...e,new S({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(t){this.addToCacheList(t),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const e=[];for(const n of t){"string"===typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:r}=x(n),o="string"!==typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==t)throw new i("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:t});if("string"!==typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new i("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(r,t),this._urlsToCacheModes.set(r,o),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return m(t,(async()=>{const e=new R;this.strategy.plugins.push(e);for(const[o,i]of this._urlsToCacheKeys){const e=this._cacheKeysToIntegrities.get(i),n=this._urlsToCacheModes.get(o),r=new Request(o,{integrity:e,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:i},request:r,event:t}))}const{updatedURLs:n,notUpdatedURLs:r}=e;return{updatedURLs:n,notUpdatedURLs:r}}))}activate(t){return m(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const o of e)n.has(o.url)||(await t.delete(o),r.push(o.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this._urlsToCacheKeys.get(e.href)}getIntegrityForCacheKey(t){return this._cacheKeysToIntegrities.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,n=this.getCacheKeyForURL(e);if(n){const t=await self.caches.open(this.strategy.cacheName);return t.match(n)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new i("non-precached-url",{url:t});return n=>(n.request=new Request(t),n.params=Object.assign({cacheKey:e},n.params),this.strategy.handle(n))}}let A;const F=()=>(A||(A=new I),A);function D(t,e=[]){for(const n of[...t.searchParams.keys()])e.some((t=>t.test(n)))&&t.searchParams.delete(n);return t}function*W(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:o}={}){const i=new URL(t,location.href);i.hash="",yield i.href;const s=D(i,e);if(yield s.href,n&&s.pathname.endsWith("/")){const t=new URL(s.href);t.pathname+=n,yield t.href}if(r){const t=new URL(s.href);t.pathname+=".html",yield t.href}if(o){const t=o({url:i});for(const e of t)yield e.href}}class z extends c{constructor(t,e){const n=({request:n})=>{const r=t.getURLsToCacheKeys();for(const o of W(n.url,e)){const e=r.get(o);if(e){const n=t.getIntegrityForCacheKey(e);return{cacheKey:e,integrity:n}}}};super(n,t.strategy)}}function H(t){const e=F(),n=new z(e,t);d(n)}function B(t){const e=F();e.precache(t)}function $(t,e){B(t),H(e)}$([{'revision':null,'url':'/dist/css/app.4d6ee24a.css'},{'revision':'1ba2ae710d927f13d483fd5d1e548c9b','url':'/dist/favicon.ico'},{'revision':'f130a0b70e386170cf6f011c0ca8c4f4','url':'/dist/img/icons/android-chrome-192x192.png'},{'revision':'0ff1bc4d14e5c9abcacba7c600d97814','url':'/dist/img/icons/android-chrome-512x512.png'},{'revision':'845a39478d0e2d4d5d32a092de2de250','url':'/dist/img/icons/android-chrome-maskable-192x192.png'},{'revision':'2695f5feb66cdb0c6f09d0e415824cf9','url':'/dist/img/icons/android-chrome-maskable-512x512.png'},{'revision':'936d6e411cabd71f0e627011c3f18fe2','url':'/dist/img/icons/apple-touch-icon-120x120.png'},{'revision':'1a034e64d80905128113e5272a5ab95e','url':'/dist/img/icons/apple-touch-icon-152x152.png'},{'revision':'c43cd371a49ee4ca17ab3a60e72bdd51','url':'/dist/img/icons/apple-touch-icon-180x180.png'},{'revision':'9a2b5c0f19de617685b7b5b42464e7db','url':'/dist/img/icons/apple-touch-icon-60x60.png'},{'revision':'af28d69d59284dd202aa55e57227b11b','url':'/dist/img/icons/apple-touch-icon-76x76.png'},{'revision':'66830ea6be8e7e94fb55df9f7b778f2e','url':'/dist/img/icons/apple-touch-icon.png'},{'revision':'4bb1a55479d61843b89a2fdafa7849b3','url':'/dist/img/icons/favicon-16x16.png'},{'revision':'98b614336d9a12cb3f7bedb001da6fca','url':'/dist/img/icons/favicon-32x32.png'},{'revision':'b89032a4a5a1879f30ba05a13947f26f','url':'/dist/img/icons/msapplication-icon-144x144.png'},{'revision':'058a3335d15a3eb84e7ae3707ba09620','url':'/dist/img/icons/mstile-150x150.png'},{'revision':'4e857233cbd3bb2d2db4f78bed62a52f','url':'/dist/img/icons/safari-pinned-tab.svg'},{'revision':null,'url':'/dist/js/about.e6df4a06.js'},{'revision':'a09c860e9534e6c1015165ab5f6a97f3','url':'/dist/js/about.e6df4a06.js.map'},{'revision':null,'url':'/dist/js/app.21d13d07.js'},{'revision':'b22254bc3010eefda56f9b1b820ebc29','url':'/dist/js/app.21d13d07.js.map'},{'revision':null,'url':'/dist/js/chunk-vendors.fae88792.js'},{'revision':'4be051351d2349552c33d36c1a179fd4','url':'/dist/js/chunk-vendors.fae88792.js.map'},{'revision':'e3e3f3ef2eee9cfa7c48e1ca7572e37b','url':'/dist/manifest.json'},{'revision':'b6216d61c03e6ce0c9aea6ca7808f7ca','url':'/dist/robots.txt'},{'revision':'f9c630c8d0a9841e8188e72bc9d2982e','url':'/dist/service-worker.js.map'}]);const G="static-1";self.addEventListener("install",(t=>{t.waitUntil((async()=>{const t=await caches.open(G);t.add("/index.html")})())})),self.addEventListener("activate",(t=>{t.waitUntil((async()=>{const t=await caches.keys();Promise.allSettled(t.map((t=>t!==G?caches.delete(t):null)))})()),clients.claim()})),self.addEventListener("fetch",(t=>{t.respondWith((async()=>{const e=await caches.match(t.request);return e||fetch(t.request)})())}))})();
//# sourceMappingURL=service-worker.js.map