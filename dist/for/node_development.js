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

	module.exports = __webpack_require__(19);


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

	module.exports = require("strictduck-domain-driven-fullstack");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("strictduck");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("tcomb");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _strictduck = __webpack_require__(7);
	
	var _strictduckDomainDrivenFullstack = __webpack_require__(3);
	
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
	
	var _redux = __webpack_require__(1);
	
	var _reduxRouter = __webpack_require__(2);

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
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxRouter = __webpack_require__(2);
	
	var _reactRedux = __webpack_require__(6);
	
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
	
	var _strictduck = __webpack_require__(7);
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.swapRouteComponentForContainer = swapRouteComponentForContainer;
	exports.default = domainRouteGenerator;
	
	var _react = __webpack_require__(5);
	
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
	
	var _redux = __webpack_require__(1);
	
	var _reactRedux = __webpack_require__(6);
	
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
	
	var _webpack = __webpack_require__(9);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _path = __webpack_require__(4);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _webpackDevMiddleware = __webpack_require__(29);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(30);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _express = __webpack_require__(23);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _webpackConfig = __webpack_require__(22);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _strictduckDomainDrivenFullstack = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function serverDomain() {
	    var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var config = (0, _webpackConfig2.default)(settings);
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
	            if (err) console.log('err', err);
	        });
	    }
	    return new _strictduckDomainDrivenFullstack.Domain.implementation({
	        name: '',
	        middleware:  true ? [(0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: config.output.publicPath }), (0, _webpackHotMiddleware2.default)(compiler), _express2.default.static('static')] : [],
	        routes: _extends({},  false ? {
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
	        order:  false ? ['static/bundle.js', '*'] : ['*']
	    });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(1);
	
	var _reduxRouter = __webpack_require__(2);
	
	var _strictduckDomainDrivenFullstack = __webpack_require__(3);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var path = __webpack_require__(4);
	var webpack = __webpack_require__(9);
	var HtmlWebpackPlugin = __webpack_require__(26);
	var nodeExternals = __webpack_require__(31);
	var HtmlWebpackHarddiskPlugin = __webpack_require__(25);
	
	module.exports = function (_ref) {
	    var _ref$title = _ref.title;
	    var title = _ref$title === undefined ? 'Bufflehead App' : _ref$title;
	
	    var settings = _objectWithoutProperties(_ref, ['title']);
	
	    var htmlPlugin = new HtmlWebpackPlugin({
	        alwaysWriteToDisk: true,
	        template: __webpack_require__(27),
	        appMountId: 'app',
	        title: title,
	        filename: 'index.html',
	        inject: false,
	        window: { settings: settings }
	    });
	    var compound_version = 'browser_' + ("DEVELOPMENT").toLowerCase();
	    var fallbacks = [path.join(process.cwd(), "node_modules/polypacker/node_modules"), path.join(process.cwd(), "node_modules/domain-driven-redux-react/node_modules")];
	    return _extends({},  true ? { devtool: 'source-map' } : {}, {
	        context: process.cwd(),
	        debug: ("DEVELOPMENT") != 'PRODUCTION',
	        target: 'web',
	        entry:  true ? ['webpack-hot-middleware/client', './src/index'] : ['./src/index'],
	        output: {
	            path: path.join(process.cwd(), "dist"),
	            filename: 'bundle.js',
	            publicPath: '/static/'
	        },
	        plugins:  true ? [new webpack.DefinePlugin({ $ES: { CONTEXT: JSON.stringify('BROWSER'), ENV: JSON.stringify(("DEVELOPMENT")) } }), new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(), htmlPlugin, new HtmlWebpackHarddiskPlugin()] : [new webpack.DefinePlugin({ $ES: { CONTEXT: JSON.stringify('BROWSER'), ENV: JSON.stringify($ES.ENV) } }), new webpack.DefinePlugin({ "process.env": { NODE_ENV: '"production"' } }), new webpack.optimize.DedupePlugin(), new webpack.optimize.OccurenceOrderPlugin(), htmlPlugin, new HtmlWebpackHarddiskPlugin()
	        //new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
	        ],
	        resolveLoader: {
	            moduleDirectories: ["node_modules"],
	            root: path.join(process.cwd(), "node_modules"),
	            fallback: fallbacks,
	            alias: { polypack: 'callback?polypack' }
	        },
	        callbackLoader: {
	            polypack: function polypack(mod) {
	                var compound_version = 'browser_' + ("DEVELOPMENT").toLowerCase();
	                if (mod) {
	                    return 'require("' + mod + '/dist/for/' + compound_version + '") //polypacked secondhand';
	                } else {
	                    return 'require("./for/' + compound_version + '") //polypacked by dist';
	                }
	            }
	        },
	        module: {
	            loaders: [{
	                test: /\.js$|\.jsx$/,
	                loader: 'babel',
	                exclude: /node_modules/,
	                include: [process.cwd()],
	                query: {
	                    presets: ['es2015', 'react', 'stage-0'].map(function (preset) {
	                        return 'babel-preset-' + preset;
	                    })
	                }
	            }, {
	                test: /\.json$/, loader: 'json'
	            }, {
	                test: /\.css$/, loader: 'style!css'
	            }, {
	                test: /\.less$/, loader: 'style!css!less'
	            }, {
	                test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded&includePaths[]=' + path.resolve(process.cwd(), "./node_modules")
	            }, {
	                test: /\.woff(2)?(\?.+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"
	            }, {
	                test: /\.ttf(\?.+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"
	            }, {
	                test: /\.eot(\?.+)?$/, loader: "file"
	            }, {
	                test: /\.svg(\?.+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"
	            }, {
	                test: /\.png$/, loader: "url-loader?limit=100000"
	            }, {
	                test: /\.jpg$/, loader: "file-loader"
	            }]
	        },
	        resolve: {
	            modulesDirectories: ["node_modules", "polypacker/node_modules"],
	            extensions: ["", ".json", ".js", ".jsx"],
	            root: path.join(process.cwd(), "node_modules"),
	            fallback: fallbacks,
	            alias: {
	                react: path.join(process.cwd(), './node_modules/react')
	            }
	        },
	        node: {
	            __dirname: true,
	            fs: 'empty'
	        }
	    });
	};

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

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("webpack-node-externals");

/***/ }
/******/ ]);
//# sourceMappingURL=node_development.js.map