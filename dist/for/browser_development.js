require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("redux-router");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("strictduck");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("strictduck-domain-driven-fullstack");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("tcomb");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _strictduck = __webpack_require__(5);
	
	var _strictduckDomainDrivenFullstack = __webpack_require__(6);
	
	var _store = __webpack_require__(19);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _createRouter = __webpack_require__(13);
	
	var _createRouter2 = _interopRequireDefault(_createRouter);
	
	var _domainRouteGenerator = __webpack_require__(15);
	
	var _domainRouteGenerator2 = _interopRequireDefault(_domainRouteGenerator);
	
	var _expandReduxDomains = __webpack_require__(16);
	
	var _expandReduxDomains2 = _interopRequireDefault(_expandReduxDomains);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _provider = ( false ? require('./provideServerDomain') : __webpack_require__(18)).default;
	
	exports.default = _strictduckDomainDrivenFullstack.reactiveClient.implement({
	    name: 'DomainDrivenReduxReactClient',
	    constructor: function constructor(_ref) {
	        var _ref$Domains = _ref.Domains;
	        var settings = _ref$Domains.settings;
	
	        var domains = _objectWithoutProperties(_ref$Domains, ['settings']);
	
	        var _ref$elementId = _ref.elementId;
	        var elementId = _ref$elementId === undefined ? 'app' : _ref$elementId;
	        var _ref$DomainDrivenClie = _ref.DomainDrivenClientStore;
	        var Store = _ref$DomainDrivenClie === undefined ? _store2.default : _ref$DomainDrivenClie;
	        var persister = _ref.DomainDrivenStorePersistencePlugin;
	        var routes = _ref.routes;
	        var _ref$middlewareGenera = _ref.middlewareGenerators;
	        var middlewareGenerators = _ref$middlewareGenera === undefined ? [] : _ref$middlewareGenera;
	        var _ref$client = _ref.client;
	        var client = _ref$client === undefined ? {} : _ref$client;
	
	        if (!(persister instanceof Error)) middlewareGenerators.push(function (domains) {
	            return persister.middlewareGenerator({ db: persister.db, domains: domains });
	        });
	
	        if (Store instanceof Error) Store = _store2.default;
	
	        domains = (0, _expandReduxDomains2.default)(domains);
	
	        Object.assign(client, {
	            routes: routes || client.routes || (0, _domainRouteGenerator2.default)(domains),
	            elementId: elementId
	        });
	        if (persister && persister.authenticateRoutes) client.routes = persister.authenticateRoutes(client.routes);
	
	        client.store = new Store({ domains: domains, routes: client.routes, middlewareGenerators: middlewareGenerators });
	        client.router = (0, _createRouter2.default)(client.store, client.routes);
	        client.settings =  false ? settings.client : settings;
	
	        return [client];
	    },
	    provider: function provider() {
	        return _provider.bind(this)(this.settings);
	    }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = combineAllDomainReducers;
	
	var _combineReducers = __webpack_require__(10);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function combineAllDomainReducers(domains) {
	    return (0, _combineReducers2.default)(Object.keys(domains).filter(function (key) {
	        return domains[key].reducer;
	    }).reduce(function (map, key) {
	        map[key] = domains[key].reducer;
	        return map;
	    }, {}));
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = function (reducers) {
	  if ((typeof reducers === 'undefined' ? 'undefined' : _typeof(reducers)) !== 'object') {
	    throw "Reactuate reducers should be an object (and not a function)";
	  }
	  return (0, _redux.combineReducers)(_extends({ router: _reduxRouter.routerStateReducer }, reducers));
	};
	
	var _redux = __webpack_require__(1);
	
	var _reduxRouter = __webpack_require__(2);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (domain, action) {
	  var payload = arguments.length <= 2 || arguments[2] === undefined ? _tcomb2.default.Any : arguments[2];
	  var defaultValue = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3];
	  var meta = arguments.length <= 4 || arguments[4] === undefined ? _tcomb2.default.Any : arguments[4];
	
	  var actionString = domain.withPrefix(action);
	  function ActionCreator() {
	    var value = arguments.length <= 0 || arguments[0] === undefined ? defaultValue : arguments[0];
	    var error = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var metaValue = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
	    var path = arguments.length <= 3 || arguments[3] === undefined ? [payload.displayName] : arguments[3];
	
	
	    if (ActionCreator.is(value)) {
	      return value;
	    }
	
	    value = payload(value);
	
	    if (typeof metaValue !== 'undefined') {
	      metaValue = meta(metaValue);
	    }
	
	    if (!(this instanceof ActionCreator)) {
	      return new ActionCreator(value, error, metaValue, path);
	    }
	
	    this.type = actionString;
	    this.payload = value;
	
	    if (!!error) {
	      this.error = true;
	    }
	
	    if (typeof metaValue !== 'undefined') {
	      this.meta = metaValue;
	    }
	
	    if (true) {
	      Object.freeze(this);
	    }
	  }
	
	  ActionCreator.meta = {
	    kind: 'actionCreator',
	    payload: payload,
	    name: actionString,
	    identity: false
	  };
	
	  ActionCreator.displayName = 'Action ' + actionString + '(' + payload.displayName + ')';
	  ActionCreator.actionCreator = true;
	  ActionCreator.action = action;
	
	  ActionCreator.is = function (x) {
	    return x instanceof ActionCreator;
	  };
	
	  domain.register('actions', action, ActionCreator);
	  return ActionCreator;
	};
	
	var _tcomb = __webpack_require__(7);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (domain, initialState) {
	  for (var _len = arguments.length, cases = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    cases[_key - 2] = arguments[_key];
	  }
	
	  var reducer = function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    var typedAction = action;
	    if (action['type'] === '@@reactuate/action') {
	      var actionCreator = domain.get('actions')[domain.withoutPrefix(action.payload.type)];
	      if (!_tcomb2.default.Nil.is(actionCreator)) {
	        typedAction = actionCreator(action.payload.payload, action.payload.error, action.payload.meta);
	      }
	    }
	    Object.freeze(state);
	    var stateCases = cases.map(function (f) {
	      if (typeof f === 'function' && typeof f.meta === 'undefined') {
	        return function (handler) {
	          return f(state, handler);
	        };
	      } else {
	        return f;
	      }
	    });
	    return _tcomb2.default.match.apply(_tcomb2.default, [typedAction].concat(_toConsumableArray(stateCases), [_tcomb2.default.Any, function () {
	      return state;
	    }]));
	  };
	  domain.reducer = reducer;
	  return reducer;
	};
	
	var _tcomb = __webpack_require__(7);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createRouter;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxRouter = __webpack_require__(2);
	
	var _reactRedux = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createRouter(store, routes) {
	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(
	      _reduxRouter.ReduxRouter,
	      null,
	      routes
	    )
	  );
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.unpackDataFlowsIntoDomain = unpackDataFlowsIntoDomain;
	exports.default = unpackDataFlowsIntoDomains;
	
	var _createReducer = __webpack_require__(12);
	
	var _createReducer2 = _interopRequireDefault(_createReducer);
	
	var _createAction = __webpack_require__(11);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	var _strictduck = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function nameActionCreator(_ref) {
	    var name = _ref.name;
	
	    return name.toLowerCase().replace(/_([a-z])/g, function (g) {
	        return g[1].toUpperCase();
	    });
	}
	
	function actionType(_ref2) {
	    var prefix = _ref2.prefix;
	    var name = _ref2.name;
	
	    return '@@' + prefix + '/' + name;
	}
	
	function flowToAction(prefix, name) {
	    return _strictduck.utils.nameObj({
	        name: nameActionCreator({ prefix: prefix, name: name }),
	        object: function object(payload) {
	            return {
	                type: actionType({ prefix: prefix, name: name }),
	                payload: payload
	            };
	        }
	    });
	}
	
	function flowToReducer(prefix, name, reducerCase) {
	    return function (state, _ref3) {
	        var type = _ref3.type;
	        var payload = _ref3.payload;
	        return type === actionType({ prefix: prefix, name: name }) ? reducerCase(state, payload) : state;
	    };
	}
	
	function mergeReducers(initialState, reducers) {
	    return function () {
	        var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	        var action = arguments[1];
	        return reducers.reduce(function (state, reducer) {
	            return reducer(state, action);
	        }, state);
	    };
	}
	
	function unpackDataFlowsIntoDomain(domain) {
	    var dataFlows = domain.get('dataFlows');
	    var prefix = domain.prefix;
	    if (dataFlows && Object.keys(dataFlows).length) {
	        Object.keys(dataFlows).forEach(function (name) {
	            domain.register('actions', nameActionCreator({ prefix: prefix, name: name }), flowToAction(prefix, name));
	        });
	        domain.reducer = mergeReducers(domain.initialState || [], Object.keys(dataFlows).map(function (name) {
	            return flowToReducer(prefix, name, dataFlows[name]);
	        }));
	    }
	    return domain;
	}
	
	function unpackDataFlowsIntoDomains(domains) {
	    return Object.keys(domains).reduce(function (newDomains, k) {
	        newDomains[k] = unpackDataFlowsIntoDomains(domains[k]);
	        return newDomains;
	    }, {});
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.swapRouteComponentForContainer = swapRouteComponentForContainer;
	exports.default = domainRouteGenerator;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function filterDomainsForType(domains, type) {
	    return Object.keys(domains).map(function (k) {
	        return domains[k];
	    }).filter(function (domain) {
	        return Object.keys(domain.get(type)).length;
	    });
	}
	
	function route(domain) {
	    return domain.get('route').route || _react2.default.createElement(_reactRouter.Route, { path: '/', component: domain.get('route').component });
	}
	
	function extractRootRoute(domains) {
	    return filterDomainsForType(domains, 'route').filter(function (domain) {
	        return domain.get('route').path == '/';
	    }).map(route)[0];
	}
	
	function findContainerizedRoutes(domains) {
	    return filterDomainsForType(domains, 'route').map(function (d) {
	        return d.get('route');
	    }).filter(function (route) {
	        return route.isContainer;
	    });
	}
	
	function swapRouteComponentForContainer(_ref) {
	    var route = _ref.route;
	    var domainRoutes = _ref.domainRoutes;
	
	    var match = domainRoutes.filter(function (r) {
	        return r.original == route.props.component;
	    })[0];
	    return _react2.default.cloneElement(route, match ? {
	        component: match.component,
	        key: route.props.key || route.props.path || '/'
	    } : { key: route.props.key || route.props.path || '/' }, route.props.children ? route.props.children.map(function (route) {
	        return swapRouteComponentForContainer({ route: route, domainRoutes: domainRoutes });
	    }) : undefined);
	}
	
	function swapContainersIntoRoutes(route, domains) {
	    return swapRouteComponentForContainer({
	        route: route,
	        domainRoutes: findContainerizedRoutes(domains)
	    });
	}
	
	function domainRouteGenerator(domains) {
	    return swapContainersIntoRoutes(extractRootRoute(domains), domains);
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.domainReduxConnector = domainReduxConnector;
	exports.connectDomainRoutes = connectDomainRoutes;
	exports.expandReduxDomain = expandReduxDomain;
	exports.default = expandReduxDomains;
	
	var _redux = __webpack_require__(1);
	
	var _reactRedux = __webpack_require__(4);
	
	var _dataFlow = __webpack_require__(14);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function domainReduxConnector(domain) {
	    if (!(domain.get('actions') && Object.keys(domain.get('actions')).length)) domain = (0, _dataFlow.unpackDataFlowsIntoDomain)(domain);
	    return (0, _reactRedux.connect)(function (state) {
	        return _defineProperty({}, domain.prefix, state[domain.prefix]);
	    }, function (dispatch) {
	        return {
	            actions: (0, _redux.bindActionCreators)(domain.get('actions'), dispatch)
	        };
	    })(domain.get('route').component);
	}
	
	function connectDomainRoutes(domain) {
	    if (!(domain.get('actions') && Object.keys(domain.get('actions')).length)) {
	        domain = (0, _dataFlow.unpackDataFlowsIntoDomain)(domain);
	    }
	    domain.register('route', 'original', domain.get('route').component);
	    domain.register('route', 'component', domainReduxConnector(domain));
	    domain.register('route', 'isContainer', true);
	    return domain;
	}
	
	function expandReduxDomain(domain) {
	    var _domain$get = domain.get('route');
	
	    var component = _domain$get.component;
	    var isContainer = _domain$get.isContainer;
	
	    if (component && !isContainer && Object.keys(domain.get('dataFlows')).length) {
	        domain = connectDomainRoutes(domain);
	    }
	    return domain;
	}
	
	function expandReduxDomains(domains) {
	    return Object.keys(domains).reduce(function (newDomains, k) {
	        newDomains[k] = expandReduxDomain(domains[k]);
	        return newDomains;
	    }, {});
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _client = __webpack_require__(8);
	
	var _client2 = _interopRequireDefault(_client);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _client2.default;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = renderClient;
	
	var _reactDom = __webpack_require__(21);
	
	function renderClient() {
	    (0, _reactDom.render)(this.router, document.getElementById(this.elementId));
	}
	
	/*
	import createHistory from 'history/lib/createMemoryHistory';
	import {Server} from "hapi"
	import React from "react"
	import { renderToString } from 'react-dom/server'
	import Router from "react-router";
	import Main from "../Main"
	import url from "url"
	import nodemailer from "nodemailer"
	import {routes} from "../Routes";

	const defaultTemplate = ({title, client, serverUrl}) => `\
	    <!doctype html>\
	    <html lang="en">\
	        <head>\
	            <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\
	            <meta charset="UTF-8">\
	            <title>${title}</title>\
	            <link rel="icon" type="image/png" href="/assets/logo2.png" />\
	            <link href='http://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>\
	        </head>\
	        <body>\
	            <div id="react-root">${string}</div>\
	        </body>\
	        <script type="text/javascript" src="${serverUrl}/dist/client.js"></script>\
	    </html>\
	`

	export function render({template = defaultTemplate, client}){
	server.ext("onPreResponse", (request, reply) => {
		if (typeof request.response.statusCode !== "undefined") {
			return reply.continue();
		}

	    try {
	        const history = createHistory()
	        const location = history.createLocation(request.url)
	        let reactString = renderToString(
	            <Main>
	                <Router location={location} history={history} routes={routes} />
	            </Main>
	        )
	        reply(
	            
	        );
	    } catch(error) {
	        reply(error.stack).type("text/plain").code(500);
	    }
	});

	}
	*/

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(1);
	
	var _reduxRouter = __webpack_require__(2);
	
	var _strictduckDomainDrivenFullstack = __webpack_require__(6);
	
	var _combineAllDomainReducers = __webpack_require__(9);
	
	var _combineAllDomainReducers2 = _interopRequireDefault(_combineAllDomainReducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var createHistory =  true ? __webpack_require__(20).createHistory : require('history/lib/createMemoryHistory');
	
	var DomainDrivenReduxStore = function (_ddStore$default) {
	    _inherits(DomainDrivenReduxStore, _ddStore$default);
	
	    function DomainDrivenReduxStore(_ref) {
	        var domains = _ref.domains;
	        var routes = _ref.routes;
	        var _ref$store = _ref.store;
	        var store = _ref$store === undefined ? _redux.createStore : _ref$store;
	        var _ref$defaultMiddlewar = _ref.defaultMiddlewareGenerators;
	        var defaultMiddlewareGenerators = _ref$defaultMiddlewar === undefined ? [] : _ref$defaultMiddlewar;
	        var _ref$middlewareGenera = _ref.middlewareGenerators;
	        var middlewareGenerators = _ref$middlewareGenera === undefined ? [] : _ref$middlewareGenera;
	
	        _classCallCheck(this, DomainDrivenReduxStore);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DomainDrivenReduxStore).call(this, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, _toConsumableArray(defaultMiddlewareGenerators.map(function (generator) {
	            return generator(domains);
	        })).concat(_toConsumableArray(middlewareGenerators.map(function (generator) {
	            return generator(domains);
	        })))), (0, _reduxRouter.reduxReactRouter)({ routes: routes, createHistory: createHistory }))(store)((0, _combineAllDomainReducers2.default)(domains))));
	    }
	
	    return DomainDrivenReduxStore;
	}(_strictduckDomainDrivenFullstack.clientStore.default);
	
	exports.default = DomainDrivenReduxStore;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("history");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ }
/******/ ]);
//# sourceMappingURL=browser_development.js.map