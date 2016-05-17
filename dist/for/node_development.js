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

	module.exports = __webpack_require__(19);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("redux-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("strictduck-domain-driven-fullstack");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("polypacker");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("tcomb");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var storeShape = _react.PropTypes.shape({
	    subscribe: _react.PropTypes.func.isRequired,
	    dispatch: _react.PropTypes.func.isRequired,
	    getState: _react.PropTypes.func.isRequired
	});
	
	var Provider = function (_Component) {
	    _inherits(Provider, _Component);
	
	    _createClass(Provider, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return { store: this.store };
	        }
	    }]);
	
	    function Provider(props, context) {
	        _classCallCheck(this, Provider);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Provider).call(this, props, context));
	
	        _this.store = props.store;
	        return _this;
	    }
	
	    _createClass(Provider, [{
	        key: 'render',
	        value: function render() {
	            return _react.Children.only(this.props.children);
	        }
	    }]);
	
	    return Provider;
	}(_react.Component);
	
	exports.default = Provider;
	
	
	if (process.env.NODE_ENV !== 'production') {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	        var store = this.store;
	        var nextStore = nextProps.store;
	
	        if (store !== nextStore) {
	            store.replaceReducer(nextStore.reducer);
	        }
	    };
	}
	
	Provider.propTypes = {
	    store: storeShape.isRequired,
	    children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	    store: storeShape.isRequired
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _strictduckDomainDrivenFullstack = __webpack_require__(4);
	
	var _store = __webpack_require__(21);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _createRouter = __webpack_require__(15);
	
	var _createRouter2 = _interopRequireDefault(_createRouter);
	
	var _domainRouteGenerator = __webpack_require__(17);
	
	var _domainRouteGenerator2 = _interopRequireDefault(_domainRouteGenerator);
	
	var _expandReduxDomains = __webpack_require__(18);
	
	var _expandReduxDomains2 = _interopRequireDefault(_expandReduxDomains);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _provider = ( true ? __webpack_require__(20) : require('./render')).default;
	
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
	        client.settings =  true ? settings.client : settings;
	
	        return [client];
	    },
	    provider: function provider() {
	        return _provider.bind(this)(this.settings);
	    }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = combineAllDomainReducers;
	
	var _combineReducers = __webpack_require__(12);
	
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
/* 12 */
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
	
	var _redux = __webpack_require__(2);
	
	var _reduxRouter = __webpack_require__(3);

/***/ },
/* 13 */
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
	
	    if (process.env.NODE_ENV !== 'production') {
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
	
	var _tcomb = __webpack_require__(8);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 14 */
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
	
	var _tcomb = __webpack_require__(8);
	
	var _tcomb2 = _interopRequireDefault(_tcomb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createRouter;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxRouter = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(7);
	
	var _HotReloadingProvider = __webpack_require__(9);
	
	var _HotReloadingProvider2 = _interopRequireDefault(_HotReloadingProvider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Provider =  false ? _reactRedux.Provider : _HotReloadingProvider2.default;
	
	function createRouter(store, routes) {
	  return _react2.default.createElement(
	    Provider,
	    { store: store },
	    _react2.default.createElement(
	      _reduxRouter.ReduxRouter,
	      null,
	      routes
	    )
	  );
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.unpackDataFlowsIntoDomain = unpackDataFlowsIntoDomain;
	exports.default = unpackDataFlowsIntoDomains;
	
	var _createReducer = __webpack_require__(14);
	
	var _createReducer2 = _interopRequireDefault(_createReducer);
	
	var _createAction = __webpack_require__(13);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	var _strictduck = __webpack_require__(29);
	
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
	        newDomains[k] = unpackDataFlowsIntoDomain(domains[k]);
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
	exports.swapRouteComponentForContainer = swapRouteComponentForContainer;
	exports.default = domainRouteGenerator;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(28);
	
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
	
	function applyToChildren(_ref) {
	    var children = _ref.children;
	    var block = _ref.block;
	
	    if (children) {
	        return Array.isArray(children) ? children.map(block) : block(children);
	    } else {
	        return children;
	    }
	}
	
	function swapChildrenComponentsForContainers(_ref2) {
	    var children = _ref2.children;
	    var domainRoutes = _ref2.domainRoutes;
	
	    return applyToChildren({
	        children: children,
	        block: function block(route) {
	            return swapRouteComponentForContainer({ route: route, domainRoutes: domainRoutes });
	        }
	    });
	}
	function swapRouteComponentForContainer(_ref3) {
	    var route = _ref3.route;
	    var domainRoutes = _ref3.domainRoutes;
	
	    console.log(route);
	    var children = route.props.children;
	    var match = domainRoutes.filter(function (r) {
	        return r.original == route.props.component;
	    })[0];
	    return _react2.default.cloneElement(route, match ? {
	        component: match.component,
	        key: route.props.key || route.props.path || '/'
	    } : { key: route.props.key || route.props.path || '/' }, swapChildrenComponentsForContainers({ children: children, domainRoutes: domainRoutes }));
	}
	
	function swapContainersIntoRoutes(route, domains) {
	    console.log(route);
	    return swapRouteComponentForContainer({
	        route: route,
	        domainRoutes: findContainerizedRoutes(domains)
	    });
	}
	
	function domainRouteGenerator(domains) {
	    return swapContainersIntoRoutes(extractRootRoute(domains), domains);
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.domainReduxConnector = domainReduxConnector;
	exports.connectDomainRoutes = connectDomainRoutes;
	exports.expandReduxDomain = expandReduxDomain;
	exports.default = expandReduxDomains;
	
	var _redux = __webpack_require__(2);
	
	var _reactRedux = __webpack_require__(7);
	
	var _dataFlow = __webpack_require__(16);
	
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
	
	function expandReactRouterRoute(_ref2) {
	    var domain = _ref2.domain;
	    var route = _ref2.route;
	
	    domain.register('route', 'component', route.props.component);
	    return domain;
	}
	
	function expandReduxDomain(domain) {
	    var _domain$get = domain.get('route');
	
	    var route = _domain$get.route;
	
	    if (route) domain = expandReactRouterRoute({ domain: domain, route: route });
	
	    var _domain$get2 = domain.get('route');
	
	    var component = _domain$get2.component;
	    var isContainer = _domain$get2.isContainer;
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _client = __webpack_require__(10);
	
	var _client2 = _interopRequireDefault(_client);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _client2.default;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = serverDomain;
	
	var _webpack = __webpack_require__(30);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _path = __webpack_require__(5);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _webpackDevMiddleware = __webpack_require__(31);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(32);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _express = __webpack_require__(23);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _webpackBuilder = __webpack_require__(22);
	
	var _webpackBuilder2 = _interopRequireDefault(_webpackBuilder);
	
	var _polypacker = __webpack_require__(6);
	
	var _strictduckDomainDrivenFullstack = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function serverDomain() {
	    var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var config = (0, _webpackBuilder2.default)(settings);
	    var compiler = (0, _webpack2.default)(config);
	    function returnIndex(req, res, next) {
	        compiler.outputFileSystem.readFile('index.html', function (err, result) {
	            if (err) {
	                return next(err);
	            }
	            res.set('content-type', 'text/html');
	            res.send(result);
	            res.end();
	        });
	    }
	    if (false) {
	        compiler.run(function (err, stats) {
	            return (0, _polypacker.logCompilation)(err, stats, { logLevel: 'VERBOSE', signature: 'client' });
	        });
	    }
	    return new _strictduckDomainDrivenFullstack.Domain.implementation({
	        name: '',
	        middleware:  true ? [(0, _webpackDevMiddleware2.default)(compiler, {
	            noInfo: true,
	            publicPath: config.output.publicPath,
	            stats: { colors: true }
	        }), (0, _webpackHotMiddleware2.default)(compiler), _express2.default.static('static')] : [],
	        routes: _extends({},  true ? {
	            'static/bundle.js': {
	                methods: ['get'],
	                handlers: [function (req, res, next) {
	                    return res.sendFile(_path2.default.join(process.cwd(), 'dist/bundle.js'));
	                }]
	            }
	        } : {}, {
	            '*': {
	                methods: ['get'],
	                handlers: [function (req, res, next) {
	                    return res.sendFile(_path2.default.join(process.cwd(), 'dist/index.html'));
	                }]
	            }
	        }),
	        order:  true ? ['static/bundle.js', '*'] : ['*']
	    });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(2);
	
	var _reduxRouter = __webpack_require__(3);
	
	var _strictduckDomainDrivenFullstack = __webpack_require__(4);
	
	var _combineAllDomainReducers = __webpack_require__(11);
	
	var _combineAllDomainReducers2 = _interopRequireDefault(_combineAllDomainReducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var createHistory =  false ? require('history').createHistory : __webpack_require__(24);
	
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
	
	        var reducer = (0, _combineAllDomainReducers2.default)(domains);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DomainDrivenReduxStore).call(this, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, _toConsumableArray(defaultMiddlewareGenerators.map(function (generator) {
	            return generator(domains);
	        })).concat(_toConsumableArray(middlewareGenerators.map(function (generator) {
	            return generator(domains);
	        })))), (0, _reduxRouter.reduxReactRouter)({ routes: routes, createHistory: createHistory }))(store)(reducer)));
	
	        _this.reducer = reducer;
	        return _this;
	    }
	
	    return DomainDrivenReduxStore;
	}(_strictduckDomainDrivenFullstack.clientStore.default);
	
	exports.default = DomainDrivenReduxStore;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = config;
	
	var _path = __webpack_require__(5);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _polypacker = __webpack_require__(6);
	
	var _htmlWebpackPlugin = __webpack_require__(26);
	
	var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);
	
	var _htmlWebpackHarddiskPlugin = __webpack_require__(25);
	
	var _htmlWebpackHarddiskPlugin2 = _interopRequireDefault(_htmlWebpackHarddiskPlugin);
	
	var _htmlWebpackTemplate = __webpack_require__(27);
	
	var _htmlWebpackTemplate2 = _interopRequireDefault(_htmlWebpackTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* TODO unused and probably the wrong approach
	                                                                                                                                                                                                                              * The right way to handle different polypacker templates is to make everything in the default overridable, AND have a "webpack template" option. Right now Polypacker is only really suitable for developing "fullstack components", not for the requirements of a webapp or framework
	                                                                                                                                                                                                                              */
	
	function config(_ref) {
	    var _ref$title = _ref.title;
	    var title = _ref$title === undefined ? 'Bufflehead App' : _ref$title;
	
	    var settings = _objectWithoutProperties(_ref, ['title']);
	
	    process.chdir(process.env.PWD);
	    var pwd = './';
	    var htmlPlugin = new _htmlWebpackPlugin2.default({
	        alwaysWriteToDisk: true,
	        template: _htmlWebpackTemplate2.default,
	        appMountId: 'app',
	        title: title,
	        filename: 'index.html',
	        inject: false,
	        window: { settings: settings }
	    });
	    var fallback = [_path2.default.join(__dirname, "node_modules"), _path2.default.join(pwd, "node_modules"), _path2.default.join(pwd, "node_modules/polypacker/node_modules"), _path2.default.join(pwd, "node_modules/domain-driven-redux-react/node_modules")];
	    return (0, _polypacker.configBuilder)({
	        entry: './src/index',
	        out: 'bundle.js',
	        hot: true,
	        context: 'BROWSER',
	        env: ("DEVELOPMENT"),
	        plugins: [htmlPlugin, new _htmlWebpackHarddiskPlugin2.default()],
	        babelPresets: ['react'],
	        overrides: {
	            output: {
	                path: _path2.default.resolve(_path2.default.join(pwd, "dist")),
	                filename: 'bundle.js',
	                publicPath: '/static/'
	            },
	            resolve: {
	                root: _path2.default.resolve(pwd),
	                modulesDirectories: ["node_modules", "node_modules/polypacker/node_modules"],
	                extensions: ["", ".json", ".js", ".jsx"],
	                fallback: fallback,
	                alias: {
	                    react: _path2.default.join(pwd, './node_modules/react')
	                }
	            },
	            node: {
	                __dirname: true,
	                fs: 'empty'
	            },
	            externals: []
	        }
	    });
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("html-webpack-harddisk-plugin");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("html-webpack-plugin");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("html-webpack-template");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("strictduck");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ }
/******/ ]);
//# sourceMappingURL=node_development.js.map