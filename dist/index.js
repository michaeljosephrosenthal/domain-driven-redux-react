module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("tcomb");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("redux-router");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("redux-saga");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _tcomb = __webpack_require__(1);

	var _tcomb2 = _interopRequireDefault(_tcomb);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _createStore = __webpack_require__(14);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(9);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _createRouter = __webpack_require__(12);

	var _createRouter2 = _interopRequireDefault(_createRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Application = function () {
	  function Application(properties) {
	    _classCallCheck(this, Application);

	    this.routes = properties.routes;
	    this.element = properties.element || document.getElementById('app');
	    this.domains = properties.domains || {};
	    this.middlewareGenerators = properties.middlewareGenerators || [];
	    this.reducers = {};
	    for (var key in this.domains) {
	      if (!_tcomb2.default.Nil.is(this.domains[key].reducer)) {
	        this.reducers[key] = this.domains[key].reducer;
	      }
	    }
	    if (!!this.routes) {
	      this.store = (0, _createStore2.default)(this.routes, this.domains, this.middlewareGenerators)((0, _combineReducers2.default)(this.reducers));
	      this.router = (0, _createRouter2.default)(this.store, this.routes);
	    }
	  }

	  _createClass(Application, [{
	    key: 'render',
	    value: function render() {
	      _reactDom2.default.render(this.router, this.element);
	    }
	  }]);

	  return Application;
	}();

	exports.default = Application;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Domain = function () {
	  function Domain(prefix) {
	    _classCallCheck(this, Domain);

	    this.prefix = prefix || "";
	  }

	  _createClass(Domain, [{
	    key: "withPrefix",
	    value: function withPrefix(name) {
	      return (this.prefix == "" ? "" : this.prefix + "/") + name;
	    }
	  }, {
	    key: "withoutPrefix",
	    value: function withoutPrefix(name) {
	      return name.replace(new RegExp("^" + this.prefix + "/"), '');
	    }
	  }, {
	    key: "register",
	    value: function register(type, name, value) {
	      this[type] = this[type] || {};
	      this[type][name] = value;
	    }
	  }, {
	    key: "get",
	    value: function get(type) {
	      return this[type] || {};
	    }
	  }]);

	  return Domain;
	}();

	exports.default = Domain;

/***/ },
/* 9 */
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

	var _redux = __webpack_require__(3);

	var _reduxRouter = __webpack_require__(4);

/***/ },
/* 10 */
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

	var _tcomb = __webpack_require__(1);

	var _tcomb2 = _interopRequireDefault(_tcomb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 11 */
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

	var _tcomb = __webpack_require__(1);

	var _tcomb2 = _interopRequireDefault(_tcomb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (store, routes) {
	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(
	      _reduxRouter.ReduxRouter,
	      null,
	      routes
	    )
	  );
	};

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reduxRouter = __webpack_require__(4);

	var _reactRedux = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (domain, name, saga) {
	  domain.register('sagas', name, saga);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (routes, domains) {
	    var middlewareGenerators = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	    return (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, [sagaMiddlewareGenerator(domains), _domainMiddleware2.default, _reduxThunk2.default].concat(_toConsumableArray(middlewareGenerators.map(function (generator) {
	        return generator(domains);
	    })), [(0, _reduxLogger2.default)({
	        predicate: function predicate(getState, action) {
	            return process.env.NODE_ENV === 'development' && action['type'] !== 'EFFECT_TRIGGERED' && action['type'] !== 'EFFECT_RESOLVED' && !action['type'].startsWith("@@redux");
	        },
	        actionTransformer: function actionTransformer(action) {
	            if (action['type'] === '@@reactuate/action') {
	                return action.payload;
	            } else {
	                return action;
	            }
	        }
	    })])), (0, _reduxRouter.reduxReactRouter)({ routes: routes, createHistory: _history.createHistory }))(_redux.createStore);
	};

	var _history = __webpack_require__(17);

	var _redux = __webpack_require__(3);

	var _reactRedux = __webpack_require__(2);

	var _reduxThunk = __webpack_require__(21);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxRouter = __webpack_require__(4);

	var _reduxLogger = __webpack_require__(20);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxSaga = __webpack_require__(6);

	var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

	var _domainMiddleware = __webpack_require__(15);

	var _domainMiddleware2 = _interopRequireDefault(_domainMiddleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function sagaMiddlewareGenerator(domains) {
	    var sagas = [];
	    for (var domainName in domains) {
	        var sagasDict = domains[domainName].get('sagas');
	        for (var sagaName in sagasDict) {
	            sagas.push(sagasDict[sagaName]);
	        }
	    }
	    return _reduxSaga2.default.apply(undefined, sagas);
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (_ref) {
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      if (!!action.constructor.actionCreator) {
	        var newAction = { type: "@@reactuate/action", payload: _extends({}, action), meta: { name: action.constructor.action } };
	        return next(newAction);
	      } else {
	        return next(action);
	      }
	    };
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	         value: true
	});
	exports.as = exports.cancel = exports.join = exports.fork = exports.cps = exports.apply = exports.call = exports.race = exports.put = exports.take = exports.t = exports.bindActionCreators = exports.connect = exports.Route = exports.React = exports.createSaga = exports.createAction = exports.createReducer = exports.Domain = exports.Application = undefined;

	var _reactRouter = __webpack_require__(19);

	Object.defineProperty(exports, 'Route', {
	         enumerable: true,
	         get: function get() {
	                  return _reactRouter.Route;
	         }
	});

	var _reactRedux = __webpack_require__(2);

	Object.defineProperty(exports, 'connect', {
	         enumerable: true,
	         get: function get() {
	                  return _reactRedux.connect;
	         }
	});

	var _redux = __webpack_require__(3);

	Object.defineProperty(exports, 'bindActionCreators', {
	         enumerable: true,
	         get: function get() {
	                  return _redux.bindActionCreators;
	         }
	});

	var _reduxSaga = __webpack_require__(6);

	Object.defineProperty(exports, 'take', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.take;
	         }
	});
	Object.defineProperty(exports, 'put', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.put;
	         }
	});
	Object.defineProperty(exports, 'race', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.race;
	         }
	});
	Object.defineProperty(exports, 'call', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.call;
	         }
	});
	Object.defineProperty(exports, 'apply', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.apply;
	         }
	});
	Object.defineProperty(exports, 'cps', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.cps;
	         }
	});
	Object.defineProperty(exports, 'fork', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.fork;
	         }
	});
	Object.defineProperty(exports, 'join', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.join;
	         }
	});
	Object.defineProperty(exports, 'cancel', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.cancel;
	         }
	});
	Object.defineProperty(exports, 'as', {
	         enumerable: true,
	         get: function get() {
	                  return _reduxSaga.as;
	         }
	});

	var _Application2 = __webpack_require__(7);

	var _Application3 = _interopRequireDefault(_Application2);

	var _Domain2 = __webpack_require__(8);

	var _Domain3 = _interopRequireDefault(_Domain2);

	var _createReducer2 = __webpack_require__(11);

	var _createReducer3 = _interopRequireDefault(_createReducer2);

	var _createAction2 = __webpack_require__(10);

	var _createAction3 = _interopRequireDefault(_createAction2);

	var _createSaga2 = __webpack_require__(13);

	var _createSaga3 = _interopRequireDefault(_createSaga2);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _tcomb = __webpack_require__(1);

	var _tcomb2 = _interopRequireDefault(_tcomb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Application = _Application3.default;
	exports.Domain = _Domain3.default;
	exports.createReducer = _createReducer3.default;
	exports.createAction = _createAction3.default;
	exports.createSaga = _createSaga3.default;
	exports.React = _react2.default;
	exports.t = _tcomb2.default;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("history");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }
/******/ ]);