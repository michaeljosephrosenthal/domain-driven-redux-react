require("source-map-support").install(),module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(17)},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-router")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("strictduck")},function(e,t){e.exports=require("strictduck-domain-driven-fullstack")},function(e,t){e.exports=require("tcomb")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=(n(5),n(6)),u=n(19),i=r(u),a=n(13),c=r(a),f=n(15),s=r(f),l=n(16),d=r(l),p=n(18)["default"];t["default"]=o.reactiveClient.implement({name:"DomainDrivenReduxReactClient",constructor:function(e){var t=e.Domains,n=e.elementId,r=void 0===n?"app":n,o=e.DomainDrivenClientStore,u=void 0===o?i["default"]:o,a=e.DomainDrivenStorePersistencePlugin,f=e.routes,l=e.middlewareGenerators,p=void 0===l?[]:l,y=e.client,v=void 0===y?{}:y;return a instanceof Error||p.push(function(e){return a.middlewareGenerator({db:a.db,domains:e})}),u instanceof Error&&(u=i["default"]),t=(0,d["default"])(t),Object.assign(v,{routes:f||v.routes||(0,s["default"])(t),elementId:r}),a&&a.authenticateRoutes&&(v.routes=a.authenticateRoutes(v.routes)),v.store=new u({domains:t,routes:v.routes,middlewareGenerators:p}),v.router=(0,c["default"])(v.store,v.routes),[v]},provider:function(){return p.bind(this)()}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return(0,i["default"])(Object.keys(e).filter(function(t){return e[t].reducer}).reduce(function(t,n){return t[n]=e[n].reducer,t},{}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(10),i=r(u)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=function(e){if("object"!==("undefined"==typeof e?"undefined":o(e)))throw"Reactuate reducers should be an object (and not a function)";return(0,u.combineReducers)(r({router:i.routerStateReducer},e))};var u=n(1),i=n(2)},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(t,n){function r(){var t=arguments.length<=0||void 0===arguments[0]?i:arguments[0],n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],u=arguments.length<=2||void 0===arguments[2]?void 0:arguments[2],f=arguments.length<=3||void 0===arguments[3]?[o.displayName]:arguments[3];return r.is(t)?t:(t=o(t),"undefined"!=typeof u&&(u=a(u)),this instanceof r?(this.type=c,this.payload=t,n&&(this.error=!0),"undefined"!=typeof u&&(this.meta=u),void("production"!==e.env.NODE_ENV&&Object.freeze(this))):new r(t,n,u,f))}var o=arguments.length<=2||void 0===arguments[2]?u["default"].Any:arguments[2],i=arguments.length<=3||void 0===arguments[3]?void 0:arguments[3],a=arguments.length<=4||void 0===arguments[4]?u["default"].Any:arguments[4],c=t.withPrefix(n);return r.meta={kind:"actionCreator",payload:o,name:c,identity:!1},r.displayName="Action "+c+"("+o.displayName+")",r.actionCreator=!0,r.action=n,r.is=function(e){return e instanceof r},t.register("actions",n,r),r};var o=n(7),u=r(o)}).call(t,n(20))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),u=2;n>u;u++)r[u-2]=arguments[u];var a=function(){var n=arguments.length<=0||void 0===arguments[0]?t:arguments[0],u=arguments[1],a=u;if("@@reactuate/action"===u.type){var c=e.get("actions")[e.withoutPrefix(u.payload.type)];i["default"].Nil.is(c)||(a=c(u.payload.payload,u.payload.error,u.payload.meta))}Object.freeze(n);var f=r.map(function(e){return"function"==typeof e&&"undefined"==typeof e.meta?function(t){return e(n,t)}:e});return i["default"].match.apply(i["default"],[a].concat(o(f),[i["default"].Any,function(){return n}]))};return e.reducer=a,a};var u=n(7),i=r(u)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return i["default"].createElement(c.Provider,{store:e},i["default"].createElement(a.ReduxRouter,null,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(3),i=r(u),a=n(2),c=n(4)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.name;return t.toLowerCase().replace(/_([a-z])/g,function(e){return e[1].toUpperCase()})}function u(e){var t=e.prefix,n=e.name;return"@@"+t+"/"+n}function i(e,t){return p.utils.nameObj({name:o({prefix:e,name:t}),object:function(n){return{type:u({prefix:e,name:t}),payload:n}}})}function a(e,t,n){return function(r,o){var i=o.type,a=o.payload;return i===u({prefix:e,name:t})?n(r,a):r}}function c(e,t){return function(){var n=arguments.length<=0||void 0===arguments[0]?e:arguments[0],r=arguments[1];return t.reduce(function(e,t){return t(e,r)},n)}}function f(e){var t=e.get("dataFlows"),n=e.prefix;return t&&Object.keys(t).length&&(Object.keys(t).forEach(function(t){e.register("actions",o({prefix:n,name:t}),i(n,t))}),e.reducer=c(e.initialState||[],Object.keys(t).map(function(e){return a(n,e,t[e])}))),e}function s(e){return Object.keys(e).reduce(function(t,n){return t[n]=s(e[n]),t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.unpackDataFlowsIntoDomain=f,t["default"]=s;var l=n(12),d=(r(l),n(11)),p=(r(d),n(5))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return Object.keys(e).map(function(t){return e[t]}).filter(function(e){return Object.keys(e.get(t)).length})}function u(e){return e.get("route").route||f["default"].createElement(s.Route,{path:"/",component:e.get("route").component})}function i(e){return o(e,"route").filter(function(e){return"/"==e.get("route").path}).map(u)[0]}function a(e){return i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var c=n(3),f=r(c),s=n(23)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return e.get("actions")&&Object.keys(e.get("actions")).length||(e=(0,s.unpackDataFlowsIntoDomain)(e)),(0,f.connect)(function(t){return r({},e.prefix,t[e.prefix])},function(t){return{actions:(0,c.bindActionCreators)(e.get("actions"),t)}})(e.get("route").component)}function u(e){return e.get("actions")&&Object.keys(e.get("actions")).length||(e=(0,s.unpackDataFlowsIntoDomain)(e)),e.register("route","component",o(e)),e.register("route","isContainer",!0),e}function i(e){var t=e.get("dataFlows"),n=e.get("route").component;return Object.keys(t).length&&n&&(e=u(e)),e}function a(e){return Object.keys(e).reduce(function(t,n){return t[n]=i(e[n]),t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.domainReduxConnector=o,t.connectDomainRoutes=u,t.expandReduxDomain=i,t["default"]=a;var c=n(1),f=n(4),s=n(14)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(8),u=r(o);t["default"]=u["default"]},function(e,t,n){"use strict";function r(){(0,o.render)(this.router,document.getElementById(this.elementId))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(22)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),f=n(2),s=n(6),l=n(9),d=r(l),p=n(21).createHistory,y=function(e){function t(e){var n=e.domains,r=e.routes,a=e.store,s=void 0===a?c.createStore:a,l=e.defaultMiddlewareGenerators,y=void 0===l?[]:l,v=e.middlewareGenerators,m=void 0===v?[]:v;return u(this,t),i(this,Object.getPrototypeOf(t).call(this,(0,c.compose)(c.applyMiddleware.apply(void 0,o(y.map(function(e){return e(n)})).concat(o(m.map(function(e){return e(n)})))),(0,f.reduxReactRouter)({routes:r,createHistory:p}))(s)((0,d["default"])(n))))}return a(t,e),t}(s.clientStore["default"]);t["default"]=y},function(e,t){function n(){f=!1,i.length?c=i.concat(c):s=-1,c.length&&r()}function r(){if(!f){var e=setTimeout(n);f=!0;for(var t=c.length;t;){for(i=c,c=[];++s<t;)i&&i[s].run();s=-1,t=c.length}i=null,f=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function u(){}var i,a=e.exports={},c=[],f=!1,s=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new o(e,t)),1!==c.length||f||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=u,a.addListener=u,a.once=u,a.off=u,a.removeListener=u,a.removeAllListeners=u,a.emit=u,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){e.exports=require("history")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("react-router")}]);
//# sourceMappingURL=browser.js.map