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
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(11);
	var path = __webpack_require__(12);
	var app = express();
	var compression = __webpack_require__(13);

	app.use(compression());

	// serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, 'public')));

	// send all requests to index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
		// match the routes to the url
		(0, _reactRouter.match)({ routes: _routes2.default, loaction: req.url }, function (err, redirect, props) {
			// `RouterContext` is what the `Router` renders. `Router` keeps these
			// `props` in its state as it listens to `browserHistory`. But on the
			// server our app is stateless, so we need to use `match` to
			// get these props before rendering.
			var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));

			// dump the HTML into a template, lots of ways to do this, but none are
			// really influenced by React Router, so we're just using a little
			// function, `renderPage`
			res.send(renderPage(appHtml));
		});
	});

	function renderPage(appHtml) {
		return '\n\t\t<!doctype html public="storage">\n\t\t<html>\n\t\t<meta charset=utf-8/>\n\t\t<title>My First React Router App</title>\n\t\t<link rel="stylesheet" href="/index.css">\n\t\t<div id=app>' + appHtml + '</div>\n\t\t<script src="/bundle.js"></script>\n\t';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
		console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _About = __webpack_require__(8);

	var _About2 = _interopRequireDefault(_About);

	var _Repos = __webpack_require__(9);

	var _Repos2 = _interopRequireDefault(_Repos);

	var _Repo = __webpack_require__(10);

	var _Repo2 = _interopRequireDefault(_Repo);

	var _Home = __webpack_require__(7);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = /*parent routes are active when child routes are active*/
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _App2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/repos', component: _Repos2.default },
			_react2.default.createElement(_reactRouter.Route, { path: '/repos/:userName/:repoName', component: _Repo2.default })
		),
		_react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
	);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _Home = __webpack_require__(7);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        'React Router Tutorial'
	      ),
	      _react2.default.createElement(
	        'ul',
	        { role: 'nav' },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/about', activeStyle: { color: 'black', textDecoration: 'none' } },
	            'About'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/repos', activeStyle: { color: 'black' } },
	            'Repos'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/about' },
	            'About'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/repos' },
	            'Repos'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.IndexLink,
	            { to: '/', activeClassName: 'active' },
	            'Home'
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    //{...this.props}复制props到所有使用该组件的地方，不用重复写一些props
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'Home',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Home'
			);
		}
	});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'About',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'About'
			);
		}
	});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'Repos',
		handleSubmit: function handleSubmit(event) {
			event.preventDefault();
			var userName = event.target.elements[0].value;
			var repo = event.target.elements[1].value;
			var path = '/repos/' + userName + '/' + repo;
			console.log(path);
			_reactRouter.browserHistory.push(path);
		},
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					'Repos'
				),
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/repos/reactjs/react-router', activeStyle: { color: 'black' } },
							'React Router'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/repos/facebook/react', activeStyle: { color: 'black' } },
							'React'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_NavLink2.default,
							{ to: '/repos/reactjs/react-router' },
							'React Router'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_NavLink2.default,
							{ to: '/repos/facebook/react' },
							'React'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'form',
							{ onSubmit: this.handleSubmit },
							_react2.default.createElement('input', { type: 'text', placeholder: 'userName' }),
							' / ',
							' ',
							_react2.default.createElement('input', { type: 'text', placeholder: 'repo' }),
							' ',
							_react2.default.createElement(
								'button',
								{ type: 'submit' },
								'Go'
							)
						)
					)
				),
				this.props.children
			);
		}
	});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
		displayName: 'Repo',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					this.props.params.repoName
				),
				_react2.default.createElement(
					'h4',
					null,
					this.props.params.userName
				)
			);
		}
	});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("compression");

/***/ })
/******/ ]);