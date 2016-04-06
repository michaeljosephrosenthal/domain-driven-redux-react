require("source-map-support").install(),module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(19)},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-router")},function(e,t){e.exports=require("strictduck-domain-driven-fullstack")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("strictduck")},function(e,t){e.exports=require("tcomb")},function(e,t){e.exports=require("webpack")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=(r(7),r(3)),u=r(21),i=n(u),a=r(15),c=n(a),s=r(17),l=n(s),d=r(18),f=n(d),p=r(20)["default"];t["default"]=o.reactiveClient.implement({name:"DomainDrivenReduxReactClient",constructor:function(e){var t=e.Domains,r=e.elementId,n=void 0===r?"app":r,o=e.DomainDrivenClientStore,u=void 0===o?i["default"]:o,a=e.DomainDrivenStorePersistencePlugin,s=e.routes,d=e.middlewareGenerators,p=void 0===d?[]:d,m=e.client,y=void 0===m?{}:m;return a instanceof Error||p.push(function(e){return a.middlewareGenerator({db:a.db,domains:e})}),u instanceof Error&&(u=i["default"]),t=(0,f["default"])(t),Object.assign(y,{routes:s||y.routes||(0,l["default"])(t),elementId:n}),a&&a.authenticateRoutes&&(y.routes=a.authenticateRoutes(y.routes)),y.store=new u({domains:t,routes:y.routes,middlewareGenerators:p}),y.router=(0,c["default"])(y.store,y.routes),[y]},provider:function(){return p.bind(this)()}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return(0,i["default"])(Object.keys(e).filter(function(t){return e[t].reducer}).reduce(function(t,r){return t[r]=e[r].reducer,t},{}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=r(12),i=n(u)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=function(e){if("object"!==("undefined"==typeof e?"undefined":o(e)))throw"Reactuate reducers should be an object (and not a function)";return(0,u.combineReducers)(n({router:i.routerStateReducer},e))};var u=r(1),i=r(2)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){function r(){var e=arguments.length<=0||void 0===arguments[0]?o:arguments[0],t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],u=arguments.length<=2||void 0===arguments[2]?void 0:arguments[2],c=arguments.length<=3||void 0===arguments[3]?[n.displayName]:arguments[3];return r.is(e)?e:(e=n(e),"undefined"!=typeof u&&(u=i(u)),this instanceof r?(this.type=a,this.payload=e,t&&(this.error=!0),"undefined"!=typeof u&&(this.meta=u),void("production"!==process.env.NODE_ENV&&Object.freeze(this))):new r(e,t,u,c))}var n=arguments.length<=2||void 0===arguments[2]?u["default"].Any:arguments[2],o=arguments.length<=3||void 0===arguments[3]?void 0:arguments[3],i=arguments.length<=4||void 0===arguments[4]?u["default"].Any:arguments[4],a=e.withPrefix(t);return r.meta={kind:"actionCreator",payload:n,name:a,identity:!1},r.displayName="Action "+a+"("+n.displayName+")",r.actionCreator=!0,r.action=t,r.is=function(e){return e instanceof r},e.register("actions",t,r),r};var o=r(8),u=n(o)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),u=2;r>u;u++)n[u-2]=arguments[u];var a=function(){var r=arguments.length<=0||void 0===arguments[0]?t:arguments[0],u=arguments[1],a=u;if("@@reactuate/action"===u.type){var c=e.get("actions")[e.withoutPrefix(u.payload.type)];i["default"].Nil.is(c)||(a=c(u.payload.payload,u.payload.error,u.payload.meta))}Object.freeze(r);var s=n.map(function(e){return"function"==typeof e&&"undefined"==typeof e.meta?function(t){return e(r,t)}:e});return i["default"].match.apply(i["default"],[a].concat(o(s),[i["default"].Any,function(){return r}]))};return e.reducer=a,a};var u=r(8),i=n(u)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return i["default"].createElement(c.Provider,{store:e},i["default"].createElement(a.ReduxRouter,null,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=r(5),i=n(u),a=r(2),c=r(6)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.name;return t.toLowerCase().replace(/_([a-z])/g,function(e){return e[1].toUpperCase()})}function u(e){var t=e.prefix,r=e.name;return"@@"+t+"/"+r}function i(e,t){return p.utils.nameObj({name:o({prefix:e,name:t}),object:function(r){return{type:u({prefix:e,name:t}),payload:r}}})}function a(e,t,r){return function(n,o){var i=o.type,a=o.payload;return i===u({prefix:e,name:t})?r(n,a):n}}function c(e,t){return function(){var r=arguments.length<=0||void 0===arguments[0]?e:arguments[0],n=arguments[1];return t.reduce(function(e,t){return t(e,n)},r)}}function s(e){var t=e.get("dataFlows"),r=e.prefix;return t&&Object.keys(t).length&&(Object.keys(t).forEach(function(t){e.register("actions",o({prefix:r,name:t}),i(r,t))}),e.reducer=c(e.initialState||[],Object.keys(t).map(function(e){return a(r,e,t[e])}))),e}function l(e){return Object.keys(e).reduce(function(t,r){return t[r]=l(e[r]),t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.unpackDataFlowsIntoDomain=s,t["default"]=l;var d=r(14),f=(n(d),r(13)),p=(n(f),r(7))},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return Object.keys(e).map(function(t){return e[t]}).filter(function(e){return Object.keys(e.get(t)).length})}function u(e){return e.get("route").route||f["default"].createElement(p.Route,{path:"/",component:e.get("route").component})}function i(e){return o(e,"route").filter(function(e){return"/"==e.get("route").path}).map(u)[0]}function a(e){return o(e,"route").map(function(e){return e.get("route")}).filter(function(e){return e.isContainer})}function c(e){var t=e.route,r=e.domainRoutes,n=r.filter(function(e){return e.original==t.props.component})[0];return f["default"].cloneElement(t,n?{component:n.component,key:t.props.key||t.props.path}:{key:t.props.key||t.props.path},t.props.children?t.props.children.map(function(e){return c({route:e,domainRoutes:r})}):void 0)}function s(e,t){return c({route:e,domainRoutes:a(t)})}function l(e){return s(i(e),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.swapRouteComponentForContainer=c,t["default"]=l;var d=r(5),f=n(d),p=r(25)},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return e.get("actions")&&Object.keys(e.get("actions")).length||(e=(0,l.unpackDataFlowsIntoDomain)(e)),(0,s.connect)(function(t){return n({},e.prefix,t[e.prefix])},function(t){return{actions:(0,c.bindActionCreators)(e.get("actions"),t)}})(e.get("route").component)}function u(e){return e.get("actions")&&Object.keys(e.get("actions")).length||(e=(0,l.unpackDataFlowsIntoDomain)(e)),e.register("route","original",e.get("route").component),e.register("route","component",o(e)),e.register("route","isContainer",!0),e}function i(e){var t=e.get("dataFlows"),r=e.get("route").component;return Object.keys(t).length&&r&&(e=u(e)),e}function a(e){return Object.keys(e).reduce(function(t,r){return t[r]=i(e[r]),t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.domainReduxConnector=o,t.connectDomainRoutes=u,t.expandReduxDomain=i,t["default"]=a;var c=r(1),s=r(6),l=r(16)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=r(10),u=n(o);t["default"]=u["default"]},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=(0,i["default"])(v["default"]);return new b.Domain.implementation({name:"",middleware:[(0,l["default"])(e,{noInfo:!0,publicPath:v["default"].output.publicPath}),(0,f["default"])(e),m["default"]["static"]("static")],routes:{"*":{methods:["get"],handlers:[function(e,t,r){return t.sendFile(c["default"].join(process.cwd(),"index.html"))}]}}})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=r(9),i=n(u),a=r(4),c=n(a),s=r(26),l=n(s),d=r(27),f=n(d),p=r(23),m=n(p),y=r(22),v=n(y),b=r(3)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=r(1),s=r(2),l=r(3),d=r(11),f=n(d),p=r(24),m=function(e){function t(e){var r=e.domains,n=e.routes,a=e.store,l=void 0===a?c.createStore:a,d=e.defaultMiddlewareGenerators,m=void 0===d?[]:d,y=e.middlewareGenerators,v=void 0===y?[]:y;return u(this,t),i(this,Object.getPrototypeOf(t).call(this,(0,c.compose)(c.applyMiddleware.apply(void 0,o(m.map(function(e){return e(r)})).concat(o(v.map(function(e){return e(r)})))),(0,s.reduxReactRouter)({routes:n,createHistory:p}))(l)((0,f["default"])(r))))}return a(t,e),t}(l.clientStore["default"]);t["default"]=m},function(e,t,r){"use strict";var n=r(4),o=r(9);e.exports={devtool:"source-map",context:process.cwd(),debug:!0,entry:["webpack-hot-middleware/client","./src/index"],output:{path:n.join(process.cwd(),"dist"),filename:"bundle.js",publicPath:"/static/"},plugins:[new o.DefinePlugin({$ES:{CONTEXT:JSON.stringify("BROWSER"),ENV:JSON.stringify("PRODUCTION")}}),new o.optimize.OccurenceOrderPlugin,new o.HotModuleReplacementPlugin,new o.NoErrorsPlugin],module:{loaders:[{test:/\.js$|\.jsx$/,loaders:["babel?presets[]=es2015&presets[]=stage-0&presets[]=react"],exclude:/node_modules/,include:[process.cwd()]},{test:/\.json$/,loader:"json"},{test:/\.css$/,loader:"style!css!postcss"},{test:/\.less$/,loader:"style!css!less"},{test:/\.scss$/,loader:"style-loader!css-loader!sass-loader?outputStyle=expanded&includePaths[]="+n.resolve(process.cwd(),"./node_modules")},{test:/\.woff(2)?(\?.+)?$/,loader:"url?limit=10000&mimetype=application/font-woff"},{test:/\.ttf(\?.+)?$/,loader:"url?limit=10000&mimetype=application/octet-stream"},{test:/\.eot(\?.+)?$/,loader:"file"},{test:/\.svg(\?.+)?$/,loader:"url?limit=10000&mimetype=image/svg+xml"},{test:/\.png$/,loader:"url-loader?limit=100000"},{test:/\.jpg$/,loader:"file-loader"}]},resolve:{modulesDirectories:["src","node_modules","web_modules"],extensions:["",".json",".js",".jsx"],fallback:n.join(process.cwd(),"node_modules"),alias:{react:n.join(process.cwd(),"./node_modules/react")}},resolveLoader:{fallback:n.join(process.cwd(),"node_modules")},node:{__dirname:!0,fs:"empty"}}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("history/lib/createMemoryHistory")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")}]);
//# sourceMappingURL=node.js.map