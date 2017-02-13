webpackJsonp([0],[
/* 0 */
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 168);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 206);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 265);
	
	var _routes = __webpack_require__(/*! ./routes */ 270);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _configureStore = __webpack_require__(/*! ./store/configureStore */ 285);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	__webpack_require__(/*! babel-polyfill */ 646);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable import/default */
	
	var store = (0, _configureStore2.default)();
	
	// Create an enhanced history that syncs navigation events with the store
	
	
	// Import babel-polyfill to support Object.assign functions for deep-cloning of immutable objects.
	// Babel does not support Object.assign by default, so a pollyfill is needed.
	// 
	//      e.g. Object.assign({}, state, { someProperty: 'some value' });
	
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
	), document.getElementById('app'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */
/*!***********************!*\
  !*** ./app/routes.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 206);
	
	var _ShellComponent = __webpack_require__(/*! ./components/common/ShellComponent */ 271);
	
	var _ShellComponent2 = _interopRequireDefault(_ShellComponent);
	
	var _HomeComponent = __webpack_require__(/*! ./components/home/HomeComponent */ 274);
	
	var _HomeComponent2 = _interopRequireDefault(_HomeComponent);
	
	var _AboutComponent = __webpack_require__(/*! ./components/about/AboutComponent */ 275);
	
	var _AboutComponent2 = _interopRequireDefault(_AboutComponent);
	
	var _NotFoundComponent = __webpack_require__(/*! ./components/common/NotFoundComponent */ 276);
	
	var _NotFoundComponent2 = _interopRequireDefault(_NotFoundComponent);
	
	var _CoursesComponent = __webpack_require__(/*! ./components/demo/CoursesComponent */ 277);
	
	var _CoursesComponent2 = _interopRequireDefault(_CoursesComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _ShellComponent2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomeComponent2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _AboutComponent2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'courses', component: _CoursesComponent2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFoundComponent2.default })
	);

/***/ },
/* 271 */
/*!*************************************************!*\
  !*** ./app/components/common/ShellComponent.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavHeaderComponent = __webpack_require__(/*! ./NavHeaderComponent */ 272);
	
	var _NavHeaderComponent2 = _interopRequireDefault(_NavHeaderComponent);
	
	var _AppFooterComponent = __webpack_require__(/*! ./AppFooterComponent */ 273);
	
	var _AppFooterComponent2 = _interopRequireDefault(_AppFooterComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ShellComponent = function (_React$Component) {
	    _inherits(ShellComponent, _React$Component);
	
	    function ShellComponent() {
	        _classCallCheck(this, ShellComponent);
	
	        return _possibleConstructorReturn(this, (ShellComponent.__proto__ || Object.getPrototypeOf(ShellComponent)).apply(this, arguments));
	    }
	
	    _createClass(ShellComponent, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_NavHeaderComponent2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container body-content' },
	                    this.props.children
	                ),
	                _react2.default.createElement(_AppFooterComponent2.default, null)
	            );
	        }
	    }]);
	
	    return ShellComponent;
	}(_react2.default.Component);
	
	ShellComponent.propTypes = {
	    children: _react.PropTypes.element
	    //children: PropTypes.object.isRequired;
	};
	
	exports.default = ShellComponent;

/***/ },
/* 272 */
/*!*****************************************************!*\
  !*** ./app/components/common/NavHeaderComponent.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 206);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavHeaderComponent = function NavHeaderComponent() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { id: 'navbar', className: 'navbar navbar-inverse navbar-fixed-top' },
	      _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'navbar-header' },
	          _react2.default.createElement(
	            _reactRouter.IndexLink,
	            { className: 'navbar-brand', to: '/' },
	            'MRC'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'navbar-collapse collapse' },
	          _react2.default.createElement(
	            'div',
	            { className: 'float-right pad-top-10' },
	            _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement('i', { className: 'fa fa-info-circle gray-5 font-1-40' }),
	              ' ',
	              _react2.default.createElement(
	                'span',
	                { className: 'BebasNeue font-1-40 opacity-60 pad-left-5' },
	                ' user name '
	              )
	            ),
	            ' ',
	            _react2.default.createElement(
	              'span',
	              { className: 'gray-6' },
	              'o'
	            )
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: 'nav navbar-nav' },
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.IndexLink,
	                { activeClassName: 'active', to: '/' },
	                'Home'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/release' },
	                'Release'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/rfcs' },
	                'RFCs'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/runbooks' },
	                'Runbooks'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/templatelist' },
	                'Templates'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/builds' },
	                'Builds'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/links' },
	                'Applications'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/admin' },
	                'Admin'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/about' },
	                'About'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/demo' },
	                'Todo'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'active', to: '/courses' },
	                'Courses'
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = NavHeaderComponent;

/***/ },
/* 273 */
/*!*****************************************************!*\
  !*** ./app/components/common/AppFooterComponent.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 206);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AppFooterComponent = function AppFooterComponent() {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'div',
	            { id: 'footer', className: 'footer pointer' },
	            'message'
	        )
	    );
	};
	
	exports.default = AppFooterComponent;

/***/ },
/* 274 */
/*!**********************************************!*\
  !*** ./app/components/home/HomeComponent.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 206);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Possible issue with Hot-Reloading using Stateless Class.
	// If Hot-Reloading, consider using 'Class' syntax, e.g. ...
	// 
	//      class HomeComponent extends React.Component
	
	var HomeComponent = function HomeComponent() {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'div',
	            { className: 'pad-20 white' },
	            _react2.default.createElement(
	                'div',
	                { className: 'home-brand-button-block' },
	                _react2.default.createElement(
	                    _reactRouter.IndexLink,
	                    { to: '/templatelist', className: 'no-underline' },
	                    _react2.default.createElement('img', { src: '../app/images/Mega-Runbook-Creator-Button-04.png', className: 'pointer;', title: 'Runbooks' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'home-date-block' },
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            'todays full date'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'opacity-50' },
	                            'user display name'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            _react2.default.createElement('i', { className: 'fa fa-cog font-1-20 white opacity-10 margin-top-10 hidden' })
	                        ),
	                        _react2.default.createElement('img', { src: '../app/images/spiro.svg', className: 'spriro-03' })
	                    )
	                )
	            )
	        )
	    );
	};
	
	exports.default = HomeComponent;

/***/ },
/* 275 */
/*!************************************************!*\
  !*** ./app/components/about/AboutComponent.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 206);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AboutComponent = function AboutComponent() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'ABOUT COMPONENT'
	  );
	};
	
	exports.default = AboutComponent;

/***/ },
/* 276 */
/*!****************************************************!*\
  !*** ./app/components/common/NotFoundComponent.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 206);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NotFoundComponent = function NotFoundComponent() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h4',
	      null,
	      '404 Page Not Found'
	    ),
	    _react2.default.createElement(
	      _reactRouter.Link,
	      { to: '/' },
	      ' Go back to homepage '
	    )
	  );
	};
	
	exports.default = NotFoundComponent;

/***/ },
/* 277 */
/*!*************************************************!*\
  !*** ./app/components/demo/CoursesComponent.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 179);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 168);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 206);
	
	var _courseActions = __webpack_require__(/*! ../../actions/courseActions */ 278);
	
	var courseActions = _interopRequireWildcard(_courseActions);
	
	var _CourseList = __webpack_require__(/*! ./CourseList */ 283);
	
	var _CourseList2 = _interopRequireDefault(_CourseList);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CoursesComponent = function (_React$Component) {
	    _inherits(CoursesComponent, _React$Component);
	
	    function CoursesComponent(props, context) {
	        _classCallCheck(this, CoursesComponent);
	
	        var _this = _possibleConstructorReturn(this, (CoursesComponent.__proto__ || Object.getPrototypeOf(CoursesComponent)).call(this, props, context));
	
	        _this.initializeState();
	        _this.initializeEvents();
	        return _this;
	    }
	
	    _createClass(CoursesComponent, [{
	        key: 'initializeState',
	        value: function initializeState() {
	            this.state = {
	                course: {
	                    title: ''
	                }
	            };
	        }
	    }, {
	        key: 'initializeEvents',
	        value: function initializeEvents() {
	            this.onTitleChanged = this.onTitleChanged.bind(this);
	            this.onClickSaved = this.onClickSaved.bind(this);
	        }
	    }, {
	        key: 'onTitleChanged',
	        value: function onTitleChanged(event) {
	
	            var course = this.state.course;
	
	            course.title = event.target.value;
	
	            this.setState({ course: course });
	        }
	    }, {
	        key: 'onClickSaved',
	        value: function onClickSaved() {
	            alert('Saving ' + this.state.course.title); // Note the back-`ticks`. These are NOT apostrophe's
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var courses = this.props.courses;
	
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Courses'
	                ),
	                _react2.default.createElement('input', { type: 'text',
	                    onChange: this.onTitleChanged,
	                    value: this.state.course.title }),
	                _react2.default.createElement('input', { type: 'submit',
	                    value: 'Save',
	                    className: 'btn btn-primary',
	                    onClick: this.onClickSaved })
	            );
	        }
	    }]);
	
	    return CoursesComponent;
	}(_react2.default.Component);
	
	exports.default = CoursesComponent;

/***/ },
/* 278 */
/*!**************************************!*\
  !*** ./app/actions/courseActions.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loadCoursesSuccess = loadCoursesSuccess;
	exports.createCourseSuccess = createCourseSuccess;
	exports.updateCourseSuccess = updateCourseSuccess;
	exports.loadCourses = loadCourses;
	exports.saveCourse = saveCourse;
	
	var _mockCourseApi = __webpack_require__(/*! ../api/mockCourseApi */ 279);
	
	var _mockCourseApi2 = _interopRequireDefault(_mockCourseApi);
	
	var _ajaxStatusActions = __webpack_require__(/*! ./ajaxStatusActions */ 281);
	
	var _actionTypes = __webpack_require__(/*! ./actionTypes */ 282);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function loadCoursesSuccess(courses) {
	  return {
	    type: types.LOAD_COURSES_SUCCESS,
	    courses: courses
	  };
	}
	
	function createCourseSuccess(course) {
	  return { type: types.CREATE_COURSE_SUCCESS, course: course };
	}
	
	function updateCourseSuccess(course) {
	  return { type: types.UPDATE_COURSE_SUCCESS, course: course };
	}
	
	function loadCourses() {
	  return function (dispatch) {
	    dispatch((0, _ajaxStatusActions.beginAjaxCall)());
	    return _mockCourseApi2.default.getAllCourses().then(function (courses) {
	      dispatch(loadCoursesSuccess(courses));
	    }).catch(function (error) {
	      throw error;
	    });
	  };
	}
	
	function saveCourse(course) {
	  return function (dispatch, getState) {
	    dispatch((0, _ajaxStatusActions.beginAjaxCall)());
	    return _mockCourseApi2.default.saveCourse(course).then(function (course) {
	      course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
	    }).catch(function (error) {
	      dispatch((0, _ajaxStatusActions.ajaxCallError)(error));
	      throw error;
	    });
	  };
	}

/***/ },
/* 279 */
/*!**********************************!*\
  !*** ./app/api/mockCourseApi.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _delay = __webpack_require__(/*! ./delay */ 280);
	
	var _delay2 = _interopRequireDefault(_delay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// This file mocks a web API by working with the hard-coded data below.
	// It uses setTimeout to simulate the delay of an AJAX call.
	// All calls return promises.
	var courses = [{
	  id: "react-flux-building-applications",
	  title: "Building Applications in React and Flux",
	  watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
	  authorId: "cory-house",
	  length: "5:08",
	  category: "JavaScript"
	}, {
	  id: "clean-code",
	  title: "Clean Code: Writing Code for Humans",
	  watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
	  authorId: "cory-house",
	  length: "3:10",
	  category: "Software Practices"
	}, {
	  id: "architecture",
	  title: "Architecting Applications for the Real World",
	  watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
	  authorId: "cory-house",
	  length: "2:52",
	  category: "Software Architecture"
	}, {
	  id: "career-reboot-for-developer-mind",
	  title: "Becoming an Outlier: Reprogramming the Developer Mind",
	  watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
	  authorId: "cory-house",
	  length: "2:30",
	  category: "Career"
	}, {
	  id: "web-components-shadow-dom",
	  title: "Web Component Fundamentals",
	  watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
	  authorId: "cory-house",
	  length: "5:10",
	  category: "HTML5"
	}];
	
	function replaceAll(str, find, replace) {
	  return str.replace(new RegExp(find, 'g'), replace);
	}
	
	//This would be performed on the server in a real app. Just stubbing in.
	var generateId = function generateId(course) {
	  return replaceAll(course.title, ' ', '-');
	};
	
	var CourseApi = function () {
	  function CourseApi() {
	    _classCallCheck(this, CourseApi);
	  }
	
	  _createClass(CourseApi, null, [{
	    key: "getAllCourses",
	    value: function getAllCourses() {
	      return new Promise(function (resolve, reject) {
	        setTimeout(function () {
	          resolve(Object.assign([], courses));
	        }, _delay2.default);
	      });
	    }
	  }, {
	    key: "saveCourse",
	    value: function saveCourse(course) {
	      course = Object.assign({}, course); // to avoid manipulating object passed in.
	      return new Promise(function (resolve, reject) {
	        setTimeout(function () {
	          // Simulate server-side validation
	          var minCourseTitleLength = 1;
	          if (course.title.length < minCourseTitleLength) {
	            reject("Title must be at least " + minCourseTitleLength + " characters.");
	          }
	
	          if (course.id) {
	            var existingCourseIndex = courses.findIndex(function (a) {
	              return a.id == course.id;
	            });
	            courses.splice(existingCourseIndex, 1, course);
	          } else {
	            //Just simulating creation here.
	            //The server would generate ids and watchHref's for new courses in a real app.
	            //Cloning so copy returned is passed by value rather than by reference.
	            course.id = generateId(course);
	            course.watchHref = "http://www.pluralsight.com/courses/" + course.id;
	            courses.push(course);
	          }
	
	          resolve(course);
	        }, _delay2.default);
	      });
	    }
	  }, {
	    key: "deleteCourse",
	    value: function deleteCourse(courseId) {
	      return new Promise(function (resolve, reject) {
	        setTimeout(function () {
	          var indexOfCourseToDelete = courses.findIndex(function (course) {
	            course.courseId == courseId;
	          });
	          courses.splice(indexOfCourseToDelete, 1);
	          resolve();
	        }, _delay2.default);
	      });
	    }
	  }]);
	
	  return CourseApi;
	}();
	
	exports.default = CourseApi;

/***/ },
/* 280 */
/*!**************************!*\
  !*** ./app/api/delay.js ***!
  \**************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = 0;

/***/ },
/* 281 */
/*!******************************************!*\
  !*** ./app/actions/ajaxStatusActions.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.beginAjaxCall = beginAjaxCall;
	exports.ajaxCallError = ajaxCallError;
	
	var _actionTypes = __webpack_require__(/*! ./actionTypes */ 282);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function beginAjaxCall() {
	  return { type: types.BEGIN_AJAX_CALL };
	}
	
	function ajaxCallError() {
	  return { type: types.AJAX_CALL_ERROR };
	}

/***/ },
/* 282 */
/*!************************************!*\
  !*** ./app/actions/actionTypes.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BEGIN_AJAX_CALL = exports.BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
	var AJAX_CALL_ERROR = exports.AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';
	
	var LOAD_COURSES_SUCCESS = exports.LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
	var LOAD_AUTHORS_SUCCESS = exports.LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
	var CREATE_COURSE_SUCCESS = exports.CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
	var UPDATE_COURSE_SUCCESS = exports.UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';

/***/ },
/* 283 */
/*!*******************************************!*\
  !*** ./app/components/demo/CourseList.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CourseListRow = __webpack_require__(/*! ./CourseListRow */ 284);
	
	var _CourseListRow2 = _interopRequireDefault(_CourseListRow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CourseList = function CourseList(_ref) {
	  var courses = _ref.courses;
	
	  return _react2.default.createElement(
	    'table',
	    { className: 'table' },
	    _react2.default.createElement(
	      'thead',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'th',
	          null,
	          '\xA0'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Title'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Author'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Category'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Length'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'tbody',
	      null,
	      courses.map(function (course) {
	        return _react2.default.createElement(_CourseListRow2.default, { key: course.id, course: course });
	      })
	    )
	  );
	};
	
	CourseList.propTypes = {
	  courses: _react.PropTypes.array.isRequired
	};
	
	exports.default = CourseList;

/***/ },
/* 284 */
/*!**********************************************!*\
  !*** ./app/components/demo/CourseListRow.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 206);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CourseListRow = function CourseListRow(_ref) {
	  var course = _ref.course;
	
	  return _react2.default.createElement(
	    'tr',
	    null,
	    _react2.default.createElement(
	      'td',
	      null,
	      _react2.default.createElement(
	        'a',
	        { href: course.watchHref, target: '_blank' },
	        'Watch'
	      )
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/course/' + course.id },
	        course.title
	      )
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      course.authorId
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      course.category
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      course.length
	    )
	  );
	};
	
	CourseListRow.propTypes = {
	  course: _react.PropTypes.object.isRequired
	};
	
	exports.default = CourseListRow;

/***/ },
/* 285 */
/*!*************************************!*\
  !*** ./app/store/configureStore.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(/*! redux */ 179);
	
	var _reduxDevtools = __webpack_require__(/*! redux-devtools */ 286);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 424);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(/*! ../containers/DevTools */ 425);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(/*! ../reducers */ 645);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), _DevTools2.default.instrument(), (0, _reduxDevtools.persistState)(window.location.href.match(/[?&]debug_session=([^&#]+)\b/)));
	
	function configureStore(initialState) {
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
	
	  if (false) {
	    module.hot.accept('../reducers', function () {
	      return store.replaceReducer(require('../reducers').default);
	    });
	  }
	
	  return store;
	}

/***/ },
/* 286 */
/*!***************************************!*\
  !*** ./~/redux-devtools/lib/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _reduxDevtoolsInstrument = __webpack_require__(/*! redux-devtools-instrument */ 287);
	
	Object.defineProperty(exports, 'instrument', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_reduxDevtoolsInstrument).default;
	  }
	});
	Object.defineProperty(exports, 'ActionCreators', {
	  enumerable: true,
	  get: function get() {
	    return _reduxDevtoolsInstrument.ActionCreators;
	  }
	});
	Object.defineProperty(exports, 'ActionTypes', {
	  enumerable: true,
	  get: function get() {
	    return _reduxDevtoolsInstrument.ActionTypes;
	  }
	});
	
	var _persistState = __webpack_require__(/*! ./persistState */ 358);
	
	Object.defineProperty(exports, 'persistState', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_persistState).default;
	  }
	});
	
	var _createDevTools = __webpack_require__(/*! ./createDevTools */ 423);
	
	Object.defineProperty(exports, 'createDevTools', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_createDevTools).default;
	  }
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 287 */
/*!*******************************************************!*\
  !*** ./~/redux-devtools-instrument/lib/instrument.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.INIT_ACTION = exports.ActionCreators = exports.ActionTypes = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.liftAction = liftAction;
	exports.liftReducerWith = liftReducerWith;
	exports.unliftState = unliftState;
	exports.unliftStore = unliftStore;
	exports.default = instrument;
	
	var _difference = __webpack_require__(/*! lodash/difference */ 288);
	
	var _difference2 = _interopRequireDefault(_difference);
	
	var _union = __webpack_require__(/*! lodash/union */ 352);
	
	var _union2 = _interopRequireDefault(_union);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 181);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(/*! symbol-observable */ 191);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActionTypes = exports.ActionTypes = {
	  PERFORM_ACTION: 'PERFORM_ACTION',
	  RESET: 'RESET',
	  ROLLBACK: 'ROLLBACK',
	  COMMIT: 'COMMIT',
	  SWEEP: 'SWEEP',
	  TOGGLE_ACTION: 'TOGGLE_ACTION',
	  SET_ACTIONS_ACTIVE: 'SET_ACTIONS_ACTIVE',
	  JUMP_TO_STATE: 'JUMP_TO_STATE',
	  JUMP_TO_ACTION: 'JUMP_TO_ACTION',
	  REORDER_ACTION: 'REORDER_ACTION',
	  IMPORT_STATE: 'IMPORT_STATE',
	  LOCK_CHANGES: 'LOCK_CHANGES',
	  PAUSE_RECORDING: 'PAUSE_RECORDING'
	};
	
	/**
	 * Action creators to change the History state.
	 */
	var ActionCreators = exports.ActionCreators = {
	  performAction: function performAction(action) {
	    if (!(0, _isPlainObject2.default)(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    return { type: ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
	  },
	  reset: function reset() {
	    return { type: ActionTypes.RESET, timestamp: Date.now() };
	  },
	  rollback: function rollback() {
	    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
	  },
	  commit: function commit() {
	    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
	  },
	  sweep: function sweep() {
	    return { type: ActionTypes.SWEEP };
	  },
	  toggleAction: function toggleAction(id) {
	    return { type: ActionTypes.TOGGLE_ACTION, id: id };
	  },
	  setActionsActive: function setActionsActive(start, end) {
	    var active = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	
	    return { type: ActionTypes.SET_ACTIONS_ACTIVE, start: start, end: end, active: active };
	  },
	  reorderAction: function reorderAction(actionId, beforeActionId) {
	    return { type: ActionTypes.REORDER_ACTION, actionId: actionId, beforeActionId: beforeActionId };
	  },
	  jumpToState: function jumpToState(index) {
	    return { type: ActionTypes.JUMP_TO_STATE, index: index };
	  },
	  jumpToAction: function jumpToAction(actionId) {
	    return { type: ActionTypes.JUMP_TO_ACTION, actionId: actionId };
	  },
	  importState: function importState(nextLiftedState, noRecompute) {
	    return { type: ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState, noRecompute: noRecompute };
	  },
	  lockChanges: function lockChanges(status) {
	    return { type: ActionTypes.LOCK_CHANGES, status: status };
	  },
	  pauseRecording: function pauseRecording(status) {
	    return { type: ActionTypes.PAUSE_RECORDING, status: status };
	  }
	};
	
	var INIT_ACTION = exports.INIT_ACTION = { type: '@@INIT' };
	
	/**
	 * Computes the next entry with exceptions catching.
	 */
	function computeWithTryCatch(reducer, action, state) {
	  var nextState = state;
	  var nextError = void 0;
	  try {
	    nextState = reducer(state, action);
	  } catch (err) {
	    nextError = err.toString();
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && (typeof window.chrome !== 'undefined' || typeof window.process !== 'undefined' && window.process.type === 'renderer')) {
	      // In Chrome, rethrowing provides better source map support
	      setTimeout(function () {
	        throw err;
	      });
	    } else {
	      console.error(err);
	    }
	  }
	
	  return {
	    state: nextState,
	    error: nextError
	  };
	}
	
	/**
	 * Computes the next entry in the log by applying an action.
	 */
	function computeNextEntry(reducer, action, state, shouldCatchErrors) {
	  if (!shouldCatchErrors) {
	    return { state: reducer(state, action) };
	  }
	  return computeWithTryCatch(reducer, action, state);
	}
	
	/**
	 * Runs the reducer on invalidated actions to get a fresh computation log.
	 */
	function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, shouldCatchErrors) {
	  // Optimization: exit early and return the same reference
	  // if we know nothing could have changed.
	  if (!computedStates || minInvalidatedStateIndex === -1 || minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
	    return computedStates;
	  }
	
	  var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
	  for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
	    var actionId = stagedActionIds[i];
	    var action = actionsById[actionId].action;
	
	    var previousEntry = nextComputedStates[i - 1];
	    var previousState = previousEntry ? previousEntry.state : committedState;
	
	    var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
	    var entry = void 0;
	    if (shouldSkip) {
	      entry = previousEntry;
	    } else {
	      if (shouldCatchErrors && previousEntry && previousEntry.error) {
	        entry = {
	          state: previousState,
	          error: 'Interrupted by an error up the chain'
	        };
	      } else {
	        entry = computeNextEntry(reducer, action, previousState, shouldCatchErrors);
	      }
	    }
	    nextComputedStates.push(entry);
	  }
	
	  return nextComputedStates;
	}
	
	/**
	 * Lifts an app's action into an action on the lifted store.
	 */
	function liftAction(action) {
	  return ActionCreators.performAction(action);
	}
	
	/**
	 * Creates a history state reducer from an app's reducer.
	 */
	function liftReducerWith(reducer, initialCommittedState, monitorReducer, options) {
	  var initialLiftedState = {
	    monitorState: monitorReducer(undefined, {}),
	    nextActionId: 1,
	    actionsById: { 0: liftAction(INIT_ACTION) },
	    stagedActionIds: [0],
	    skippedActionIds: [],
	    committedState: initialCommittedState,
	    currentStateIndex: 0,
	    computedStates: [],
	    isLocked: options.shouldStartLocked === true,
	    isPaused: options.shouldRecordChanges === false
	  };
	
	  /**
	   * Manages how the history actions modify the history state.
	   */
	  return function (liftedState, liftedAction) {
	    var _ref = liftedState || initialLiftedState;
	
	    var monitorState = _ref.monitorState;
	    var actionsById = _ref.actionsById;
	    var nextActionId = _ref.nextActionId;
	    var stagedActionIds = _ref.stagedActionIds;
	    var skippedActionIds = _ref.skippedActionIds;
	    var committedState = _ref.committedState;
	    var currentStateIndex = _ref.currentStateIndex;
	    var computedStates = _ref.computedStates;
	    var isLocked = _ref.isLocked;
	    var isPaused = _ref.isPaused;
	
	
	    if (!liftedState) {
	      // Prevent mutating initialLiftedState
	      actionsById = _extends({}, actionsById);
	    }
	
	    function commitExcessActions(n) {
	      // Auto-commits n-number of excess actions.
	      var excess = n;
	      var idsToDelete = stagedActionIds.slice(1, excess + 1);
	
	      for (var i = 0; i < idsToDelete.length; i++) {
	        if (computedStates[i + 1].error) {
	          // Stop if error is found. Commit actions up to error.
	          excess = i;
	          idsToDelete = stagedActionIds.slice(1, excess + 1);
	          break;
	        } else {
	          delete actionsById[idsToDelete[i]];
	        }
	      }
	
	      skippedActionIds = skippedActionIds.filter(function (id) {
	        return idsToDelete.indexOf(id) === -1;
	      });
	      stagedActionIds = [0].concat(stagedActionIds.slice(excess + 1));
	      committedState = computedStates[excess].state;
	      computedStates = computedStates.slice(excess);
	      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
	    }
	
	    function computePausedAction(shouldInit) {
	      var _extends2;
	
	      var computedState = void 0;
	      if (shouldInit) {
	        computedState = computedStates[currentStateIndex];
	        monitorState = monitorReducer(monitorState, liftedAction);
	      } else {
	        computedState = computeNextEntry(reducer, liftedAction.action, computedStates[currentStateIndex].state, false);
	      }
	      if (!options.pauseActionType || nextActionId === 1) {
	        return {
	          monitorState: monitorState,
	          actionsById: { 0: liftAction(INIT_ACTION) },
	          nextActionId: 1,
	          stagedActionIds: [0],
	          skippedActionIds: [],
	          committedState: computedState.state,
	          currentStateIndex: 0,
	          computedStates: [computedState],
	          isLocked: isLocked,
	          isPaused: true
	        };
	      }
	      if (shouldInit) {
	        if (currentStateIndex === stagedActionIds.length - 1) {
	          currentStateIndex++;
	        }
	        stagedActionIds = [].concat(stagedActionIds, [nextActionId]);
	        nextActionId++;
	      }
	      return {
	        monitorState: monitorState,
	        actionsById: _extends({}, actionsById, (_extends2 = {}, _extends2[nextActionId - 1] = liftAction({ type: options.pauseActionType }), _extends2)),
	        nextActionId: nextActionId,
	        stagedActionIds: stagedActionIds,
	        skippedActionIds: skippedActionIds,
	        committedState: committedState,
	        currentStateIndex: currentStateIndex,
	        computedStates: [].concat(computedStates.slice(0, stagedActionIds.length - 1), [computedState]),
	        isLocked: isLocked,
	        isPaused: true
	      };
	    }
	
	    // By default, agressively recompute every state whatever happens.
	    // This has O(n) performance, so we'll override this to a sensible
	    // value whenever we feel like we don't have to recompute the states.
	    var minInvalidatedStateIndex = 0;
	
	    switch (liftedAction.type) {
	      case ActionTypes.PERFORM_ACTION:
	        {
	          if (isLocked) return liftedState || initialLiftedState;
	          if (isPaused) return computePausedAction();
	
	          // Auto-commit as new actions come in.
	          if (options.maxAge && stagedActionIds.length === options.maxAge) {
	            commitExcessActions(1);
	          }
	
	          if (currentStateIndex === stagedActionIds.length - 1) {
	            currentStateIndex++;
	          }
	          var actionId = nextActionId++;
	          // Mutation! This is the hottest path, and we optimize on purpose.
	          // It is safe because we set a new key in a cache dictionary.
	          actionsById[actionId] = liftedAction;
	          stagedActionIds = [].concat(stagedActionIds, [actionId]);
	          // Optimization: we know that only the new action needs computing.
	          minInvalidatedStateIndex = stagedActionIds.length - 1;
	          break;
	        }
	      case ActionTypes.RESET:
	        {
	          // Get back to the state the store was created with.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = initialCommittedState;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.COMMIT:
	        {
	          // Consider the last committed state the new starting point.
	          // Squash any staged actions into a single committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = computedStates[currentStateIndex].state;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.ROLLBACK:
	        {
	          // Forget about any staged actions.
	          // Start again from the last committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.TOGGLE_ACTION:
	        {
	          var _ret = function () {
	            // Toggle whether an action with given ID is skipped.
	            // Being skipped means it is a no-op during the computation.
	            var actionId = liftedAction.id;
	
	            var index = skippedActionIds.indexOf(actionId);
	            if (index === -1) {
	              skippedActionIds = [actionId].concat(skippedActionIds);
	            } else {
	              skippedActionIds = skippedActionIds.filter(function (id) {
	                return id !== actionId;
	              });
	            }
	            // Optimization: we know history before this action hasn't changed
	            minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
	            return 'break';
	          }();
	
	          if (_ret === 'break') break;
	        }
	      case ActionTypes.SET_ACTIONS_ACTIVE:
	        {
	          // Toggle whether an action with given ID is skipped.
	          // Being skipped means it is a no-op during the computation.
	          var start = liftedAction.start;
	          var end = liftedAction.end;
	          var active = liftedAction.active;
	
	          var actionIds = [];
	          for (var i = start; i < end; i++) {
	            actionIds.push(i);
	          }if (active) {
	            skippedActionIds = (0, _difference2.default)(skippedActionIds, actionIds);
	          } else {
	            skippedActionIds = (0, _union2.default)(skippedActionIds, actionIds);
	          }
	
	          // Optimization: we know history before this action hasn't changed
	          minInvalidatedStateIndex = stagedActionIds.indexOf(start);
	          break;
	        }
	      case ActionTypes.JUMP_TO_STATE:
	        {
	          // Without recomputing anything, move the pointer that tell us
	          // which state is considered the current one. Useful for sliders.
	          currentStateIndex = liftedAction.index;
	          // Optimization: we know the history has not changed.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	      case ActionTypes.JUMP_TO_ACTION:
	        {
	          // Jumps to a corresponding state to a specific action.
	          // Useful when filtering actions.
	          var _index = stagedActionIds.indexOf(liftedAction.actionId);
	          if (_index !== -1) currentStateIndex = _index;
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	      case ActionTypes.SWEEP:
	        {
	          // Forget any actions that are currently being skipped.
	          stagedActionIds = (0, _difference2.default)(stagedActionIds, skippedActionIds);
	          skippedActionIds = [];
	          currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
	          break;
	        }
	      case ActionTypes.REORDER_ACTION:
	        {
	          // Recompute actions in a new order.
	          var _actionId = liftedAction.actionId;
	          var idx = stagedActionIds.indexOf(_actionId);
	          // do nothing in case the action is already removed or trying to move the first action
	          if (idx < 1) break;
	          var beforeActionId = liftedAction.beforeActionId;
	          var newIdx = stagedActionIds.indexOf(beforeActionId);
	          if (newIdx < 1) {
	            // move to the beginning or to the end
	            var count = stagedActionIds.length;
	            newIdx = beforeActionId > stagedActionIds[count - 1] ? count : 1;
	          }
	          var diff = idx - newIdx;
	
	          if (diff > 0) {
	            // move left
	            stagedActionIds = [].concat(stagedActionIds.slice(0, newIdx), [_actionId], stagedActionIds.slice(newIdx, idx), stagedActionIds.slice(idx + 1));
	            minInvalidatedStateIndex = newIdx;
	          } else if (diff < 0) {
	            // move right
	            stagedActionIds = [].concat(stagedActionIds.slice(0, idx), stagedActionIds.slice(idx + 1, newIdx), [_actionId], stagedActionIds.slice(newIdx));
	            minInvalidatedStateIndex = idx;
	          }
	          break;
	        }
	      case ActionTypes.IMPORT_STATE:
	        {
	          if (Array.isArray(liftedAction.nextLiftedState)) {
	            // recompute array of actions
	            actionsById = { 0: liftAction(INIT_ACTION) };
	            nextActionId = 1;
	            stagedActionIds = [0];
	            skippedActionIds = [];
	            currentStateIndex = liftedAction.nextLiftedState.length;
	            computedStates = [];
	            committedState = liftedAction.preloadedState;
	            minInvalidatedStateIndex = 0;
	            // iterate through actions
	            liftedAction.nextLiftedState.forEach(function (action) {
	              actionsById[nextActionId] = liftAction(action);
	              stagedActionIds.push(nextActionId);
	              nextActionId++;
	            });
	          } else {
	            var _liftedAction$nextLif = liftedAction.nextLiftedState;
	            // Completely replace everything.
	
	            monitorState = _liftedAction$nextLif.monitorState;
	            actionsById = _liftedAction$nextLif.actionsById;
	            nextActionId = _liftedAction$nextLif.nextActionId;
	            stagedActionIds = _liftedAction$nextLif.stagedActionIds;
	            skippedActionIds = _liftedAction$nextLif.skippedActionIds;
	            committedState = _liftedAction$nextLif.committedState;
	            currentStateIndex = _liftedAction$nextLif.currentStateIndex;
	            computedStates = _liftedAction$nextLif.computedStates;
	
	
	            if (liftedAction.noRecompute) {
	              minInvalidatedStateIndex = Infinity;
	            }
	          }
	
	          break;
	        }
	      case ActionTypes.LOCK_CHANGES:
	        {
	          isLocked = liftedAction.status;
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	      case ActionTypes.PAUSE_RECORDING:
	        {
	          isPaused = liftedAction.status;
	          if (isPaused) {
	            return computePausedAction(true);
	          }
	          // Commit when unpausing
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = computedStates[currentStateIndex].state;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case '@@redux/INIT':
	        {
	          if (options.shouldHotReload === false && liftedState) {
	            return liftedState;
	          }
	
	          // Recompute states on hot reload and init.
	          minInvalidatedStateIndex = 0;
	
	          if (options.maxAge && stagedActionIds.length > options.maxAge) {
	            // States must be recomputed before committing excess.
	            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, options.shouldCatchErrors);
	
	            commitExcessActions(stagedActionIds.length - options.maxAge);
	
	            // Avoid double computation.
	            minInvalidatedStateIndex = Infinity;
	          }
	
	          break;
	        }
	      default:
	        {
	          // If the action is not recognized, it's a monitor action.
	          // Optimization: a monitor action can't change history.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	    }
	
	    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, options.shouldCatchErrors);
	    monitorState = monitorReducer(monitorState, liftedAction);
	    return {
	      monitorState: monitorState,
	      actionsById: actionsById,
	      nextActionId: nextActionId,
	      stagedActionIds: stagedActionIds,
	      skippedActionIds: skippedActionIds,
	      committedState: committedState,
	      currentStateIndex: currentStateIndex,
	      computedStates: computedStates,
	      isLocked: isLocked,
	      isPaused: isPaused
	    };
	  };
	}
	
	/**
	 * Provides an app's view into the state of the lifted store.
	 */
	function unliftState(liftedState) {
	  var computedStates = liftedState.computedStates;
	  var currentStateIndex = liftedState.currentStateIndex;
	  var state = computedStates[currentStateIndex].state;
	
	  return state;
	}
	
	/**
	 * Provides an app's view into the lifted store.
	 */
	function unliftStore(liftedStore, liftReducer) {
	  var _extends3;
	
	  var lastDefinedState = void 0;
	
	  function getState() {
	    var state = unliftState(liftedStore.getState());
	    if (state !== undefined) {
	      lastDefinedState = state;
	    }
	    return lastDefinedState;
	  }
	
	  return _extends({}, liftedStore, (_extends3 = {
	
	    liftedStore: liftedStore,
	
	    dispatch: function dispatch(action) {
	      liftedStore.dispatch(liftAction(action));
	      return action;
	    },
	
	
	    getState: getState,
	
	    replaceReducer: function replaceReducer(nextReducer) {
	      liftedStore.replaceReducer(liftReducer(nextReducer));
	    }
	  }, _extends3[_symbolObservable2.default] = function () {
	    return _extends({}, liftedStore[_symbolObservable2.default](), {
	      subscribe: function subscribe(observer) {
	        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = liftedStore.subscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    });
	  }, _extends3));
	}
	
	/**
	 * Redux instrumentation store enhancer.
	 */
	function instrument() {
	  var monitorReducer = arguments.length <= 0 || arguments[0] === undefined ? function () {
	    return null;
	  } : arguments[0];
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  /* eslint-disable no-eq-null */
	  if (options.maxAge != null && options.maxAge < 2) {
	    /* eslint-enable */
	    throw new Error('DevTools.instrument({ maxAge }) option, if specified, ' + 'may not be less than 2.');
	  }
	
	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	
	      function liftReducer(r) {
	        if (typeof r !== 'function') {
	          if (r && typeof r.default === 'function') {
	            throw new Error('Expected the reducer to be a function. ' + 'Instead got an object with a "default" field. ' + 'Did you pass a module instead of the default export? ' + 'Try passing require(...).default instead.');
	          }
	          throw new Error('Expected the reducer to be a function.');
	        }
	        return liftReducerWith(r, initialState, monitorReducer, options);
	      }
	
	      var liftedStore = createStore(liftReducer(reducer), enhancer);
	      if (liftedStore.liftedStore) {
	        throw new Error('DevTools instrumentation should not be applied more than once. ' + 'Check your store configuration.');
	      }
	
	      return unliftStore(liftedStore, liftReducer);
	    };
	  };
	}

/***/ },
/* 288 */
/*!********************************!*\
  !*** ./~/lodash/difference.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(/*! ./_baseDifference */ 289),
	    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ 334),
	    baseRest = __webpack_require__(/*! ./_baseRest */ 340),
	    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ 349);
	
	/**
	 * Creates an array of `array` values not included in the other given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * **Note:** Unlike `_.pullAll`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.without, _.xor
	 * @example
	 *
	 * _.difference([2, 1], [2, 3]);
	 * // => [1]
	 */
	var difference = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	    : [];
	});
	
	module.exports = difference;


/***/ },
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */
/*!**********************************************!*\
  !*** ./~/redux-devtools/lib/persistState.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = persistState;
	
	var _mapValues = __webpack_require__(/*! lodash/mapValues */ 359);
	
	var _mapValues2 = _interopRequireDefault(_mapValues);
	
	var _identity = __webpack_require__(/*! lodash/identity */ 341);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function persistState(sessionId) {
	  var deserializeState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity2.default;
	  var deserializeAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity2.default;
	
	  if (!sessionId) {
	    return function (next) {
	      return function () {
	        return next.apply(undefined, arguments);
	      };
	    };
	  }
	
	  function deserialize(state) {
	    return _extends({}, state, {
	      actionsById: (0, _mapValues2.default)(state.actionsById, function (liftedAction) {
	        return _extends({}, liftedAction, {
	          action: deserializeAction(liftedAction.action)
	        });
	      }),
	      committedState: deserializeState(state.committedState),
	      computedStates: state.computedStates.map(function (computedState) {
	        return _extends({}, computedState, {
	          state: deserializeState(computedState.state)
	        });
	      })
	    });
	  }
	
	  return function (next) {
	    return function (reducer, initialState, enhancer) {
	      var key = 'redux-dev-session-' + sessionId;
	
	      var finalInitialState = void 0;
	      try {
	        var json = localStorage.getItem(key);
	        if (json) {
	          finalInitialState = deserialize(JSON.parse(json)) || initialState;
	          next(reducer, initialState);
	        }
	      } catch (e) {
	        console.warn('Could not read debug session from localStorage:', e);
	        try {
	          localStorage.removeItem(key);
	        } finally {
	          finalInitialState = undefined;
	        }
	      }
	
	      var store = next(reducer, finalInitialState, enhancer);
	
	      return _extends({}, store, {
	        dispatch: function dispatch(action) {
	          store.dispatch(action);
	
	          try {
	            localStorage.setItem(key, JSON.stringify(store.getState()));
	          } catch (e) {
	            console.warn('Could not write debug session to localStorage:', e);
	          }
	
	          return action;
	        }
	      });
	    };
	  };
	}

/***/ },
/* 359 */
/*!*******************************!*\
  !*** ./~/lodash/mapValues.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 360),
	    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 361),
	    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 376);
	
	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapKeys
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee, 3);
	
	  baseForOwn(object, function(value, key, object) {
	    baseAssignValue(result, key, iteratee(value, key, object));
	  });
	  return result;
	}
	
	module.exports = mapValues;


/***/ },
/* 360 */,
/* 361 */
/*!*********************************!*\
  !*** ./~/lodash/_baseForOwn.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(/*! ./_baseFor */ 362),
	    keys = __webpack_require__(/*! ./keys */ 364);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 362 */
/*!******************************!*\
  !*** ./~/lodash/_baseFor.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 363);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 363 */
/*!************************************!*\
  !*** ./~/lodash/_createBaseFor.js ***!
  \************************************/
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 364 */
/*!**************************!*\
  !*** ./~/lodash/keys.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 365),
	    baseKeys = __webpack_require__(/*! ./_baseKeys */ 373),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 350);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */
/*!*******************************!*\
  !*** ./~/lodash/_baseKeys.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(/*! ./_isPrototype */ 374),
	    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ 375);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 374 */,
/* 375 */
/*!*********************************!*\
  !*** ./~/lodash/_nativeKeys.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 189);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 376 */
/*!***********************************!*\
  !*** ./~/lodash/_baseIteratee.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(/*! ./_baseMatches */ 377),
	    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ 405),
	    identity = __webpack_require__(/*! ./identity */ 341),
	    isArray = __webpack_require__(/*! ./isArray */ 339),
	    property = __webpack_require__(/*! ./property */ 420);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ },
/* 377 */
/*!**********************************!*\
  !*** ./~/lodash/_baseMatches.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ 378),
	    getMatchData = __webpack_require__(/*! ./_getMatchData */ 402),
	    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 404);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 378 */
/*!**********************************!*\
  !*** ./~/lodash/_baseIsMatch.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(/*! ./_Stack */ 379),
	    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 385);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 379 */
/*!****************************!*\
  !*** ./~/lodash/_Stack.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 308),
	    stackClear = __webpack_require__(/*! ./_stackClear */ 380),
	    stackDelete = __webpack_require__(/*! ./_stackDelete */ 381),
	    stackGet = __webpack_require__(/*! ./_stackGet */ 382),
	    stackHas = __webpack_require__(/*! ./_stackHas */ 383),
	    stackSet = __webpack_require__(/*! ./_stackSet */ 384);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 380 */
/*!*********************************!*\
  !*** ./~/lodash/_stackClear.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 308);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ },
/* 381 */
/*!**********************************!*\
  !*** ./~/lodash/_stackDelete.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ },
/* 382 */
/*!*******************************!*\
  !*** ./~/lodash/_stackGet.js ***!
  \*******************************/
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 383 */
/*!*******************************!*\
  !*** ./~/lodash/_stackHas.js ***!
  \*******************************/
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 384 */
/*!*******************************!*\
  !*** ./~/lodash/_stackSet.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 308),
	    Map = __webpack_require__(/*! ./_Map */ 316),
	    MapCache = __webpack_require__(/*! ./_MapCache */ 291);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 385 */
/*!**********************************!*\
  !*** ./~/lodash/_baseIsEqual.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ 386),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 190);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 386 */
/*!**************************************!*\
  !*** ./~/lodash/_baseIsEqualDeep.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(/*! ./_Stack */ 379),
	    equalArrays = __webpack_require__(/*! ./_equalArrays */ 387),
	    equalByTag = __webpack_require__(/*! ./_equalByTag */ 389),
	    equalObjects = __webpack_require__(/*! ./_equalObjects */ 392),
	    getTag = __webpack_require__(/*! ./_getTag */ 398),
	    isArray = __webpack_require__(/*! ./isArray */ 339),
	    isBuffer = __webpack_require__(/*! ./isBuffer */ 367),
	    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 370);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 387 */
/*!**********************************!*\
  !*** ./~/lodash/_equalArrays.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(/*! ./_SetCache */ 290),
	    arraySome = __webpack_require__(/*! ./_arraySome */ 388),
	    cacheHas = __webpack_require__(/*! ./_cacheHas */ 333);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 388 */
/*!********************************!*\
  !*** ./~/lodash/_arraySome.js ***!
  \********************************/
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 389 */
/*!*********************************!*\
  !*** ./~/lodash/_equalByTag.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 183),
	    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 390),
	    eq = __webpack_require__(/*! ./eq */ 312),
	    equalArrays = __webpack_require__(/*! ./_equalArrays */ 387),
	    mapToArray = __webpack_require__(/*! ./_mapToArray */ 391),
	    setToArray = __webpack_require__(/*! ./_setToArray */ 357);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 390 */
/*!*********************************!*\
  !*** ./~/lodash/_Uint8Array.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 184);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 391 */
/*!*********************************!*\
  !*** ./~/lodash/_mapToArray.js ***!
  \*********************************/
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 392 */
/*!***********************************!*\
  !*** ./~/lodash/_equalObjects.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 393);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 393 */
/*!*********************************!*\
  !*** ./~/lodash/_getAllKeys.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 394),
	    getSymbols = __webpack_require__(/*! ./_getSymbols */ 395),
	    keys = __webpack_require__(/*! ./keys */ 364);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ },
/* 394 */
/*!*************************************!*\
  !*** ./~/lodash/_baseGetAllKeys.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(/*! ./_arrayPush */ 335),
	    isArray = __webpack_require__(/*! ./isArray */ 339);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ },
/* 395 */
/*!*********************************!*\
  !*** ./~/lodash/_getSymbols.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ 396),
	    stubArray = __webpack_require__(/*! ./stubArray */ 397);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ },
/* 396 */,
/* 397 */
/*!*******************************!*\
  !*** ./~/lodash/stubArray.js ***!
  \*******************************/
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 398 */
/*!*****************************!*\
  !*** ./~/lodash/_getTag.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(/*! ./_DataView */ 399),
	    Map = __webpack_require__(/*! ./_Map */ 316),
	    Promise = __webpack_require__(/*! ./_Promise */ 400),
	    Set = __webpack_require__(/*! ./_Set */ 355),
	    WeakMap = __webpack_require__(/*! ./_WeakMap */ 401),
	    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 182),
	    toSource = __webpack_require__(/*! ./_toSource */ 302);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 399 */
/*!*******************************!*\
  !*** ./~/lodash/_DataView.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 296),
	    root = __webpack_require__(/*! ./_root */ 184);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 400 */
/*!******************************!*\
  !*** ./~/lodash/_Promise.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 296),
	    root = __webpack_require__(/*! ./_root */ 184);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 401 */
/*!******************************!*\
  !*** ./~/lodash/_WeakMap.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 296),
	    root = __webpack_require__(/*! ./_root */ 184);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 402 */
/*!***********************************!*\
  !*** ./~/lodash/_getMatchData.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 403),
	    keys = __webpack_require__(/*! ./keys */ 364);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 403 */
/*!*****************************************!*\
  !*** ./~/lodash/_isStrictComparable.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./isObject */ 299);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 404 */
/*!**********************************************!*\
  !*** ./~/lodash/_matchesStrictComparable.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ },
/* 405 */
/*!******************************************!*\
  !*** ./~/lodash/_baseMatchesProperty.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 385),
	    get = __webpack_require__(/*! ./get */ 406),
	    hasIn = __webpack_require__(/*! ./hasIn */ 417),
	    isKey = __webpack_require__(/*! ./_isKey */ 409),
	    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 403),
	    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 404),
	    toKey = __webpack_require__(/*! ./_toKey */ 416);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 406 */
/*!*************************!*\
  !*** ./~/lodash/get.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(/*! ./_baseGet */ 407);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 407 */
/*!******************************!*\
  !*** ./~/lodash/_baseGet.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(/*! ./_castPath */ 408),
	    toKey = __webpack_require__(/*! ./_toKey */ 416);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 408 */
/*!*******************************!*\
  !*** ./~/lodash/_castPath.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(/*! ./isArray */ 339),
	    isKey = __webpack_require__(/*! ./_isKey */ 409),
	    stringToPath = __webpack_require__(/*! ./_stringToPath */ 411),
	    toString = __webpack_require__(/*! ./toString */ 414);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ },
/* 409 */
/*!****************************!*\
  !*** ./~/lodash/_isKey.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(/*! ./isArray */ 339),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 410);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ },
/* 410 */
/*!******************************!*\
  !*** ./~/lodash/isSymbol.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 182),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 190);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 411 */
/*!***********************************!*\
  !*** ./~/lodash/_stringToPath.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 412);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ },
/* 412 */
/*!************************************!*\
  !*** ./~/lodash/_memoizeCapped.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(/*! ./memoize */ 413);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ },
/* 413 */,
/* 414 */
/*!******************************!*\
  !*** ./~/lodash/toString.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(/*! ./_baseToString */ 415);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ },
/* 415 */
/*!***********************************!*\
  !*** ./~/lodash/_baseToString.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 183),
	    arrayMap = __webpack_require__(/*! ./_arrayMap */ 331),
	    isArray = __webpack_require__(/*! ./isArray */ 339),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 410);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ },
/* 416 */
/*!****************************!*\
  !*** ./~/lodash/_toKey.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(/*! ./isSymbol */ 410);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ },
/* 417 */
/*!***************************!*\
  !*** ./~/lodash/hasIn.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ 418),
	    hasPath = __webpack_require__(/*! ./_hasPath */ 419);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ },
/* 418 */
/*!********************************!*\
  !*** ./~/lodash/_baseHasIn.js ***!
  \********************************/
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ },
/* 419 */
/*!******************************!*\
  !*** ./~/lodash/_hasPath.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(/*! ./_castPath */ 408),
	    isArguments = __webpack_require__(/*! ./isArguments */ 337),
	    isArray = __webpack_require__(/*! ./isArray */ 339),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 369),
	    isLength = __webpack_require__(/*! ./isLength */ 351),
	    toKey = __webpack_require__(/*! ./_toKey */ 416);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ },
/* 420 */
/*!******************************!*\
  !*** ./~/lodash/property.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(/*! ./_baseProperty */ 421),
	    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ 422),
	    isKey = __webpack_require__(/*! ./_isKey */ 409),
	    toKey = __webpack_require__(/*! ./_toKey */ 416);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 421 */
/*!***********************************!*\
  !*** ./~/lodash/_baseProperty.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 422 */
/*!***************************************!*\
  !*** ./~/lodash/_basePropertyDeep.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(/*! ./_baseGet */ 407);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 423 */
/*!************************************************!*\
  !*** ./~/redux-devtools/lib/createDevTools.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = createDevTools;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 168);
	
	var _reduxDevtoolsInstrument = __webpack_require__(/*! redux-devtools-instrument */ 287);
	
	var _reduxDevtoolsInstrument2 = _interopRequireDefault(_reduxDevtoolsInstrument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function createDevTools(children) {
	  var _class, _temp;
	
	  var monitorElement = _react.Children.only(children);
	  var monitorProps = monitorElement.props;
	  var Monitor = monitorElement.type;
	  var ConnectedMonitor = (0, _reactRedux.connect)(function (state) {
	    return state;
	  })(Monitor);
	
	  return _temp = _class = function (_Component) {
	    _inherits(DevTools, _Component);
	
	    function DevTools(props, context) {
	      _classCallCheck(this, DevTools);
	
	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	      if (!props.store && !context.store) {
	        console.error('Redux DevTools could not render. You must pass the Redux store ' + 'to <DevTools> either as a "store" prop or by wrapping it in a ' + '<Provider store={store}>.');
	        return _possibleConstructorReturn(_this);
	      }
	
	      if (context.store) {
	        _this.liftedStore = context.store.liftedStore;
	      } else {
	        _this.liftedStore = props.store.liftedStore;
	      }
	
	      if (!_this.liftedStore) {
	        console.error('Redux DevTools could not render. Did you forget to include ' + 'DevTools.instrument() in your store enhancer chain before ' + 'using createStore()?');
	      }
	      return _this;
	    }
	
	    DevTools.prototype.render = function render() {
	      if (!this.liftedStore) {
	        return null;
	      }
	
	      return _react2.default.createElement(ConnectedMonitor, _extends({}, monitorProps, {
	        store: this.liftedStore }));
	    };
	
	    return DevTools;
	  }(_react.Component), _class.contextTypes = {
	    store: _react.PropTypes.object
	  }, _class.propTypes = {
	    store: _react.PropTypes.object
	  }, _class.instrument = function (options) {
	    return (0, _reduxDevtoolsInstrument2.default)(function (state, action) {
	      return Monitor.update(monitorProps, state, action);
	    }, options);
	  }, _temp;
	}

/***/ },
/* 424 */,
/* 425 */
/*!************************************!*\
  !*** ./app/containers/DevTools.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(/*! redux-devtools */ 286);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(/*! redux-devtools-log-monitor */ 426);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(/*! redux-devtools-dock-monitor */ 609);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
	  _reduxDevtoolsDockMonitor2.default,
	  { toggleVisibilityKey: 'ctrl-h', changePositionKey: 'ctrl-q' },
	  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
	));

/***/ },
/* 426 */
/*!***************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _LogMonitor = __webpack_require__(/*! ./LogMonitor */ 427);
	
	var _LogMonitor2 = _interopRequireDefault(_LogMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _LogMonitor2.default;

/***/ },
/* 427 */
/*!********************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/LogMonitor.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _function = __webpack_require__(/*! react-pure-render/function */ 428);
	
	var _function2 = _interopRequireDefault(_function);
	
	var _reduxDevtoolsThemes = __webpack_require__(/*! redux-devtools-themes */ 430);
	
	var themes = _interopRequireWildcard(_reduxDevtoolsThemes);
	
	var _reduxDevtools = __webpack_require__(/*! redux-devtools */ 286);
	
	var _actions = __webpack_require__(/*! ./actions */ 470);
	
	var _reducers = __webpack_require__(/*! ./reducers */ 471);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _LogMonitorButtonBar = __webpack_require__(/*! ./LogMonitorButtonBar */ 472);
	
	var _LogMonitorButtonBar2 = _interopRequireDefault(_LogMonitorButtonBar);
	
	var _LogMonitorEntryList = __webpack_require__(/*! ./LogMonitorEntryList */ 475);
	
	var _LogMonitorEntryList2 = _interopRequireDefault(_LogMonitorEntryList);
	
	var _lodash = __webpack_require__(/*! lodash.debounce */ 608);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var toggleAction = _reduxDevtools.ActionCreators.toggleAction;
	var setActionsActive = _reduxDevtools.ActionCreators.setActionsActive;
	
	
	var styles = {
	  container: {
	    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
	    position: 'relative',
	    overflowY: 'hidden',
	    width: '100%',
	    height: '100%',
	    minWidth: 300,
	    direction: 'ltr'
	  },
	  elements: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0,
	    overflowX: 'hidden',
	    overflowY: 'auto'
	  }
	};
	
	var LogMonitor = function (_Component) {
	  _inherits(LogMonitor, _Component);
	
	  function LogMonitor(props) {
	    _classCallCheck(this, LogMonitor);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	    _this.updateScrollTop = (0, _lodash2.default)(function () {
	      var node = _this.node;
	      _this.props.dispatch((0, _actions.updateScrollTop)(node ? node.scrollTop : 0));
	    }, 500);
	
	    _this.handleToggleAction = _this.handleToggleAction.bind(_this);
	    _this.handleToggleConsecutiveAction = _this.handleToggleConsecutiveAction.bind(_this);
	    _this.getRef = _this.getRef.bind(_this);
	    return _this;
	  }
	
	  LogMonitor.prototype.scroll = function scroll() {
	    var node = this.node;
	    if (!node) {
	      return;
	    }
	    if (this.scrollDown) {
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;
	
	      node.scrollTop = scrollHeight - offsetHeight;
	      this.scrollDown = false;
	    }
	  };
	
	  LogMonitor.prototype.componentDidMount = function componentDidMount() {
	    var node = this.node;
	    if (!node || !this.props.monitorState) {
	      return;
	    }
	
	    if (this.props.preserveScrollTop) {
	      node.scrollTop = this.props.monitorState.initialScrollTop;
	      node.addEventListener('scroll', this.updateScrollTop);
	    } else {
	      this.scrollDown = true;
	      this.scroll();
	    }
	  };
	
	  LogMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    var node = this.node;
	    if (node && this.props.preserveScrollTop) {
	      node.removeEventListener('scroll', this.updateScrollTop);
	    }
	  };
	
	  LogMonitor.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var node = this.node;
	    if (!node) {
	      this.scrollDown = true;
	    } else if (this.props.stagedActionIds.length < nextProps.stagedActionIds.length) {
	      var scrollTop = node.scrollTop;
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;
	
	
	      this.scrollDown = Math.abs(scrollHeight - (scrollTop + offsetHeight)) < 20;
	    } else {
	      this.scrollDown = false;
	    }
	  };
	
	  LogMonitor.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.scroll();
	  };
	
	  LogMonitor.prototype.handleToggleAction = function handleToggleAction(id) {
	    this.props.dispatch(toggleAction(id));
	  };
	
	  LogMonitor.prototype.handleToggleConsecutiveAction = function handleToggleConsecutiveAction(id) {
	    var _props = this.props;
	    var monitorState = _props.monitorState;
	    var actionsById = _props.actionsById;
	    var consecutiveToggleStartId = monitorState.consecutiveToggleStartId;
	
	    if (consecutiveToggleStartId && actionsById[consecutiveToggleStartId]) {
	      var skippedActionIds = this.props.skippedActionIds;
	
	      var start = Math.min(consecutiveToggleStartId, id);
	      var end = Math.max(consecutiveToggleStartId, id);
	      var active = skippedActionIds.indexOf(consecutiveToggleStartId) > -1;
	      this.props.dispatch(setActionsActive(start, end + 1, active));
	      this.props.dispatch((0, _actions.startConsecutiveToggle)(null));
	    } else if (id > 0) {
	      this.props.dispatch((0, _actions.startConsecutiveToggle)(id));
	    }
	  };
	
	  LogMonitor.prototype.getTheme = function getTheme() {
	    var theme = this.props.theme;
	
	    if (typeof theme !== 'string') {
	      return theme;
	    }
	
	    if (typeof themes[theme] !== 'undefined') {
	      return themes[theme];
	    }
	
	    console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
	    return themes.nicinabox;
	  };
	
	  LogMonitor.prototype.getRef = function getRef(node) {
	    this.node = node;
	  };
	
	  LogMonitor.prototype.render = function render() {
	    var theme = this.getTheme();
	    var consecutiveToggleStartId = this.props.monitorState.consecutiveToggleStartId;
	    var _props2 = this.props;
	    var dispatch = _props2.dispatch;
	    var actionsById = _props2.actionsById;
	    var skippedActionIds = _props2.skippedActionIds;
	    var stagedActionIds = _props2.stagedActionIds;
	    var computedStates = _props2.computedStates;
	    var currentStateIndex = _props2.currentStateIndex;
	    var select = _props2.select;
	    var expandActionRoot = _props2.expandActionRoot;
	    var expandStateRoot = _props2.expandStateRoot;
	    var markStateDiff = _props2.markStateDiff;
	
	
	    var entryListProps = {
	      theme: theme,
	      actionsById: actionsById,
	      skippedActionIds: skippedActionIds,
	      stagedActionIds: stagedActionIds,
	      computedStates: computedStates,
	      currentStateIndex: currentStateIndex,
	      consecutiveToggleStartId: consecutiveToggleStartId,
	      select: select,
	      expandActionRoot: expandActionRoot,
	      expandStateRoot: expandStateRoot,
	      markStateDiff: markStateDiff,
	      onActionClick: this.handleToggleAction,
	      onActionShiftClick: this.handleToggleConsecutiveAction
	    };
	
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.container, { backgroundColor: theme.base00 }) },
	      !this.props.hideMainButtons && _react2.default.createElement(_LogMonitorButtonBar2.default, {
	        theme: theme,
	        dispatch: dispatch,
	        hasStates: computedStates.length > 1,
	        hasSkippedActions: skippedActionIds.length > 0
	      }),
	      _react2.default.createElement(
	        'div',
	        {
	          style: this.props.hideMainButtons ? styles.elements : _extends({}, styles.elements, { top: 30 }),
	          ref: this.getRef
	        },
	        _react2.default.createElement(_LogMonitorEntryList2.default, entryListProps)
	      )
	    );
	  };
	
	  return LogMonitor;
	}(_react.Component);
	
	LogMonitor.update = _reducers2.default;
	LogMonitor.propTypes = {
	  dispatch: _react.PropTypes.func,
	  computedStates: _react.PropTypes.array,
	  actionsById: _react.PropTypes.object,
	  stagedActionIds: _react.PropTypes.array,
	  skippedActionIds: _react.PropTypes.array,
	  monitorState: _react.PropTypes.shape({
	    initialScrollTop: _react.PropTypes.number,
	    consecutiveToggleStartId: _react.PropTypes.number
	  }),
	
	  preserveScrollTop: _react.PropTypes.bool,
	  select: _react.PropTypes.func,
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool,
	  markStateDiff: _react.PropTypes.bool,
	  hideMainButtons: _react.PropTypes.bool
	};
	LogMonitor.defaultProps = {
	  select: function select(state) {
	    return state;
	  },
	  theme: 'nicinabox',
	  preserveScrollTop: true,
	  expandActionRoot: true,
	  expandStateRoot: true,
	  markStateDiff: false
	};
	exports.default = LogMonitor;

/***/ },
/* 428 */
/*!*****************************************!*\
  !*** ./~/react-pure-render/function.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldPureComponentUpdate;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _shallowEqual = __webpack_require__(/*! ./shallowEqual */ 429);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
	}
	
	module.exports = exports['default'];

/***/ },
/* 429 */
/*!*********************************************!*\
  !*** ./~/react-pure-render/shallowEqual.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 430 */
/*!**********************************************!*\
  !*** ./~/redux-devtools-themes/lib/index.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _base16 = __webpack_require__(/*! base16 */ 431);
	
	_defaults(exports, _interopExportWildcard(_base16, _defaults));
	
	var _nicinabox = __webpack_require__(/*! ./nicinabox */ 469);
	
	exports.nicinabox = _interopRequire(_nicinabox);

/***/ },
/* 431 */
/*!*******************************!*\
  !*** ./~/base16/lib/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _threezerotwofour = __webpack_require__(/*! ./threezerotwofour */ 432);
	
	exports.threezerotwofour = _interopRequire(_threezerotwofour);
	
	var _apathy = __webpack_require__(/*! ./apathy */ 433);
	
	exports.apathy = _interopRequire(_apathy);
	
	var _ashes = __webpack_require__(/*! ./ashes */ 434);
	
	exports.ashes = _interopRequire(_ashes);
	
	var _atelierDune = __webpack_require__(/*! ./atelier-dune */ 435);
	
	exports.atelierDune = _interopRequire(_atelierDune);
	
	var _atelierForest = __webpack_require__(/*! ./atelier-forest */ 436);
	
	exports.atelierForest = _interopRequire(_atelierForest);
	
	var _atelierHeath = __webpack_require__(/*! ./atelier-heath */ 437);
	
	exports.atelierHeath = _interopRequire(_atelierHeath);
	
	var _atelierLakeside = __webpack_require__(/*! ./atelier-lakeside */ 438);
	
	exports.atelierLakeside = _interopRequire(_atelierLakeside);
	
	var _atelierSeaside = __webpack_require__(/*! ./atelier-seaside */ 439);
	
	exports.atelierSeaside = _interopRequire(_atelierSeaside);
	
	var _bespin = __webpack_require__(/*! ./bespin */ 440);
	
	exports.bespin = _interopRequire(_bespin);
	
	var _brewer = __webpack_require__(/*! ./brewer */ 441);
	
	exports.brewer = _interopRequire(_brewer);
	
	var _bright = __webpack_require__(/*! ./bright */ 442);
	
	exports.bright = _interopRequire(_bright);
	
	var _chalk = __webpack_require__(/*! ./chalk */ 443);
	
	exports.chalk = _interopRequire(_chalk);
	
	var _codeschool = __webpack_require__(/*! ./codeschool */ 444);
	
	exports.codeschool = _interopRequire(_codeschool);
	
	var _colors = __webpack_require__(/*! ./colors */ 445);
	
	exports.colors = _interopRequire(_colors);
	
	var _default = __webpack_require__(/*! ./default */ 446);
	
	exports['default'] = _interopRequire(_default);
	
	var _eighties = __webpack_require__(/*! ./eighties */ 447);
	
	exports.eighties = _interopRequire(_eighties);
	
	var _embers = __webpack_require__(/*! ./embers */ 448);
	
	exports.embers = _interopRequire(_embers);
	
	var _flat = __webpack_require__(/*! ./flat */ 449);
	
	exports.flat = _interopRequire(_flat);
	
	var _google = __webpack_require__(/*! ./google */ 450);
	
	exports.google = _interopRequire(_google);
	
	var _grayscale = __webpack_require__(/*! ./grayscale */ 451);
	
	exports.grayscale = _interopRequire(_grayscale);
	
	var _greenscreen = __webpack_require__(/*! ./greenscreen */ 452);
	
	exports.greenscreen = _interopRequire(_greenscreen);
	
	var _harmonic = __webpack_require__(/*! ./harmonic */ 453);
	
	exports.harmonic = _interopRequire(_harmonic);
	
	var _hopscotch = __webpack_require__(/*! ./hopscotch */ 454);
	
	exports.hopscotch = _interopRequire(_hopscotch);
	
	var _isotope = __webpack_require__(/*! ./isotope */ 455);
	
	exports.isotope = _interopRequire(_isotope);
	
	var _marrakesh = __webpack_require__(/*! ./marrakesh */ 456);
	
	exports.marrakesh = _interopRequire(_marrakesh);
	
	var _mocha = __webpack_require__(/*! ./mocha */ 457);
	
	exports.mocha = _interopRequire(_mocha);
	
	var _monokai = __webpack_require__(/*! ./monokai */ 458);
	
	exports.monokai = _interopRequire(_monokai);
	
	var _ocean = __webpack_require__(/*! ./ocean */ 459);
	
	exports.ocean = _interopRequire(_ocean);
	
	var _paraiso = __webpack_require__(/*! ./paraiso */ 460);
	
	exports.paraiso = _interopRequire(_paraiso);
	
	var _pop = __webpack_require__(/*! ./pop */ 461);
	
	exports.pop = _interopRequire(_pop);
	
	var _railscasts = __webpack_require__(/*! ./railscasts */ 462);
	
	exports.railscasts = _interopRequire(_railscasts);
	
	var _shapeshifter = __webpack_require__(/*! ./shapeshifter */ 463);
	
	exports.shapeshifter = _interopRequire(_shapeshifter);
	
	var _solarized = __webpack_require__(/*! ./solarized */ 464);
	
	exports.solarized = _interopRequire(_solarized);
	
	var _summerfruit = __webpack_require__(/*! ./summerfruit */ 465);
	
	exports.summerfruit = _interopRequire(_summerfruit);
	
	var _tomorrow = __webpack_require__(/*! ./tomorrow */ 466);
	
	exports.tomorrow = _interopRequire(_tomorrow);
	
	var _tube = __webpack_require__(/*! ./tube */ 467);
	
	exports.tube = _interopRequire(_tube);
	
	var _twilight = __webpack_require__(/*! ./twilight */ 468);
	
	exports.twilight = _interopRequire(_twilight);

/***/ },
/* 432 */
/*!******************************************!*\
  !*** ./~/base16/lib/threezerotwofour.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'threezerotwofour',
	  author: 'jan t. sott (http://github.com/idleberg)',
	  base00: '#090300',
	  base01: '#3a3432',
	  base02: '#4a4543',
	  base03: '#5c5855',
	  base04: '#807d7c',
	  base05: '#a5a2a2',
	  base06: '#d6d5d4',
	  base07: '#f7f7f7',
	  base08: '#db2d20',
	  base09: '#e8bbd0',
	  base0A: '#fded02',
	  base0B: '#01a252',
	  base0C: '#b5e4f4',
	  base0D: '#01a0e4',
	  base0E: '#a16a94',
	  base0F: '#cdab53'
	};
	module.exports = exports['default'];

/***/ },
/* 433 */
/*!********************************!*\
  !*** ./~/base16/lib/apathy.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'apathy',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#031A16',
	  base01: '#0B342D',
	  base02: '#184E45',
	  base03: '#2B685E',
	  base04: '#5F9C92',
	  base05: '#81B5AC',
	  base06: '#A7CEC8',
	  base07: '#D2E7E4',
	  base08: '#3E9688',
	  base09: '#3E7996',
	  base0A: '#3E4C96',
	  base0B: '#883E96',
	  base0C: '#963E4C',
	  base0D: '#96883E',
	  base0E: '#4C963E',
	  base0F: '#3E965B'
	};
	module.exports = exports['default'];

/***/ },
/* 434 */
/*!*******************************!*\
  !*** ./~/base16/lib/ashes.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ashes',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#1C2023',
	  base01: '#393F45',
	  base02: '#565E65',
	  base03: '#747C84',
	  base04: '#ADB3BA',
	  base05: '#C7CCD1',
	  base06: '#DFE2E5',
	  base07: '#F3F4F5',
	  base08: '#C7AE95',
	  base09: '#C7C795',
	  base0A: '#AEC795',
	  base0B: '#95C7AE',
	  base0C: '#95AEC7',
	  base0D: '#AE95C7',
	  base0E: '#C795AE',
	  base0F: '#C79595'
	};
	module.exports = exports['default'];

/***/ },
/* 435 */
/*!**************************************!*\
  !*** ./~/base16/lib/atelier-dune.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier dune',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
	  base00: '#20201d',
	  base01: '#292824',
	  base02: '#6e6b5e',
	  base03: '#7d7a68',
	  base04: '#999580',
	  base05: '#a6a28c',
	  base06: '#e8e4cf',
	  base07: '#fefbec',
	  base08: '#d73737',
	  base09: '#b65611',
	  base0A: '#cfb017',
	  base0B: '#60ac39',
	  base0C: '#1fad83',
	  base0D: '#6684e1',
	  base0E: '#b854d4',
	  base0F: '#d43552'
	};
	module.exports = exports['default'];

/***/ },
/* 436 */
/*!****************************************!*\
  !*** ./~/base16/lib/atelier-forest.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier forest',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
	  base00: '#1b1918',
	  base01: '#2c2421',
	  base02: '#68615e',
	  base03: '#766e6b',
	  base04: '#9c9491',
	  base05: '#a8a19f',
	  base06: '#e6e2e0',
	  base07: '#f1efee',
	  base08: '#f22c40',
	  base09: '#df5320',
	  base0A: '#d5911a',
	  base0B: '#5ab738',
	  base0C: '#00ad9c',
	  base0D: '#407ee7',
	  base0E: '#6666ea',
	  base0F: '#c33ff3'
	};
	module.exports = exports['default'];

/***/ },
/* 437 */
/*!***************************************!*\
  !*** ./~/base16/lib/atelier-heath.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier heath',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
	  base00: '#1b181b',
	  base01: '#292329',
	  base02: '#695d69',
	  base03: '#776977',
	  base04: '#9e8f9e',
	  base05: '#ab9bab',
	  base06: '#d8cad8',
	  base07: '#f7f3f7',
	  base08: '#ca402b',
	  base09: '#a65926',
	  base0A: '#bb8a35',
	  base0B: '#379a37',
	  base0C: '#159393',
	  base0D: '#516aec',
	  base0E: '#7b59c0',
	  base0F: '#cc33cc'
	};
	module.exports = exports['default'];

/***/ },
/* 438 */
/*!******************************************!*\
  !*** ./~/base16/lib/atelier-lakeside.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier lakeside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
	  base00: '#161b1d',
	  base01: '#1f292e',
	  base02: '#516d7b',
	  base03: '#5a7b8c',
	  base04: '#7195a8',
	  base05: '#7ea2b4',
	  base06: '#c1e4f6',
	  base07: '#ebf8ff',
	  base08: '#d22d72',
	  base09: '#935c25',
	  base0A: '#8a8a0f',
	  base0B: '#568c3b',
	  base0C: '#2d8f6f',
	  base0D: '#257fad',
	  base0E: '#5d5db1',
	  base0F: '#b72dd2'
	};
	module.exports = exports['default'];

/***/ },
/* 439 */
/*!*****************************************!*\
  !*** ./~/base16/lib/atelier-seaside.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier seaside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
	  base00: '#131513',
	  base01: '#242924',
	  base02: '#5e6e5e',
	  base03: '#687d68',
	  base04: '#809980',
	  base05: '#8ca68c',
	  base06: '#cfe8cf',
	  base07: '#f0fff0',
	  base08: '#e6193c',
	  base09: '#87711d',
	  base0A: '#c3c322',
	  base0B: '#29a329',
	  base0C: '#1999b3',
	  base0D: '#3d62f5',
	  base0E: '#ad2bee',
	  base0F: '#e619c3'
	};
	module.exports = exports['default'];

/***/ },
/* 440 */
/*!********************************!*\
  !*** ./~/base16/lib/bespin.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bespin',
	  author: 'jan t. sott',
	  base00: '#28211c',
	  base01: '#36312e',
	  base02: '#5e5d5c',
	  base03: '#666666',
	  base04: '#797977',
	  base05: '#8a8986',
	  base06: '#9d9b97',
	  base07: '#baae9e',
	  base08: '#cf6a4c',
	  base09: '#cf7d34',
	  base0A: '#f9ee98',
	  base0B: '#54be0d',
	  base0C: '#afc4db',
	  base0D: '#5ea6ea',
	  base0E: '#9b859d',
	  base0F: '#937121'
	};
	module.exports = exports['default'];

/***/ },
/* 441 */
/*!********************************!*\
  !*** ./~/base16/lib/brewer.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'brewer',
	  author: 'timothée poisot (http://github.com/tpoisot)',
	  base00: '#0c0d0e',
	  base01: '#2e2f30',
	  base02: '#515253',
	  base03: '#737475',
	  base04: '#959697',
	  base05: '#b7b8b9',
	  base06: '#dadbdc',
	  base07: '#fcfdfe',
	  base08: '#e31a1c',
	  base09: '#e6550d',
	  base0A: '#dca060',
	  base0B: '#31a354',
	  base0C: '#80b1d3',
	  base0D: '#3182bd',
	  base0E: '#756bb1',
	  base0F: '#b15928'
	};
	module.exports = exports['default'];

/***/ },
/* 442 */
/*!********************************!*\
  !*** ./~/base16/lib/bright.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bright',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#303030',
	  base02: '#505050',
	  base03: '#b0b0b0',
	  base04: '#d0d0d0',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ffffff',
	  base08: '#fb0120',
	  base09: '#fc6d24',
	  base0A: '#fda331',
	  base0B: '#a1c659',
	  base0C: '#76c7b7',
	  base0D: '#6fb3d2',
	  base0E: '#d381c3',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 443 */
/*!*******************************!*\
  !*** ./~/base16/lib/chalk.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'chalk',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#f5f5f5',
	  base08: '#fb9fb1',
	  base09: '#eda987',
	  base0A: '#ddb26f',
	  base0B: '#acc267',
	  base0C: '#12cfc0',
	  base0D: '#6fc2ef',
	  base0E: '#e1a3ee',
	  base0F: '#deaf8f'
	};
	module.exports = exports['default'];

/***/ },
/* 444 */
/*!************************************!*\
  !*** ./~/base16/lib/codeschool.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'codeschool',
	  author: 'brettof86',
	  base00: '#232c31',
	  base01: '#1c3657',
	  base02: '#2a343a',
	  base03: '#3f4944',
	  base04: '#84898c',
	  base05: '#9ea7a6',
	  base06: '#a7cfa3',
	  base07: '#b5d8f6',
	  base08: '#2a5491',
	  base09: '#43820d',
	  base0A: '#a03b1e',
	  base0B: '#237986',
	  base0C: '#b02f30',
	  base0D: '#484d79',
	  base0E: '#c59820',
	  base0F: '#c98344'
	};
	module.exports = exports['default'];

/***/ },
/* 445 */
/*!********************************!*\
  !*** ./~/base16/lib/colors.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'colors',
	  author: 'mrmrs (http://clrs.cc)',
	  base00: '#111111',
	  base01: '#333333',
	  base02: '#555555',
	  base03: '#777777',
	  base04: '#999999',
	  base05: '#bbbbbb',
	  base06: '#dddddd',
	  base07: '#ffffff',
	  base08: '#ff4136',
	  base09: '#ff851b',
	  base0A: '#ffdc00',
	  base0B: '#2ecc40',
	  base0C: '#7fdbff',
	  base0D: '#0074d9',
	  base0E: '#b10dc9',
	  base0F: '#85144b'
	};
	module.exports = exports['default'];

/***/ },
/* 446 */
/*!*********************************!*\
  !*** ./~/base16/lib/default.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'default',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#181818',
	  base01: '#282828',
	  base02: '#383838',
	  base03: '#585858',
	  base04: '#b8b8b8',
	  base05: '#d8d8d8',
	  base06: '#e8e8e8',
	  base07: '#f8f8f8',
	  base08: '#ab4642',
	  base09: '#dc9656',
	  base0A: '#f7ca88',
	  base0B: '#a1b56c',
	  base0C: '#86c1b9',
	  base0D: '#7cafc2',
	  base0E: '#ba8baf',
	  base0F: '#a16946'
	};
	module.exports = exports['default'];

/***/ },
/* 447 */
/*!**********************************!*\
  !*** ./~/base16/lib/eighties.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'eighties',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2d2d2d',
	  base01: '#393939',
	  base02: '#515151',
	  base03: '#747369',
	  base04: '#a09f93',
	  base05: '#d3d0c8',
	  base06: '#e8e6df',
	  base07: '#f2f0ec',
	  base08: '#f2777a',
	  base09: '#f99157',
	  base0A: '#ffcc66',
	  base0B: '#99cc99',
	  base0C: '#66cccc',
	  base0D: '#6699cc',
	  base0E: '#cc99cc',
	  base0F: '#d27b53'
	};
	module.exports = exports['default'];

/***/ },
/* 448 */
/*!********************************!*\
  !*** ./~/base16/lib/embers.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'embers',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#16130F',
	  base01: '#2C2620',
	  base02: '#433B32',
	  base03: '#5A5047',
	  base04: '#8A8075',
	  base05: '#A39A90',
	  base06: '#BEB6AE',
	  base07: '#DBD6D1',
	  base08: '#826D57',
	  base09: '#828257',
	  base0A: '#6D8257',
	  base0B: '#57826D',
	  base0C: '#576D82',
	  base0D: '#6D5782',
	  base0E: '#82576D',
	  base0F: '#825757'
	};
	module.exports = exports['default'];

/***/ },
/* 449 */
/*!******************************!*\
  !*** ./~/base16/lib/flat.js ***!
  \******************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'flat',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2C3E50',
	  base01: '#34495E',
	  base02: '#7F8C8D',
	  base03: '#95A5A6',
	  base04: '#BDC3C7',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ECF0F1',
	  base08: '#E74C3C',
	  base09: '#E67E22',
	  base0A: '#F1C40F',
	  base0B: '#2ECC71',
	  base0C: '#1ABC9C',
	  base0D: '#3498DB',
	  base0E: '#9B59B6',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 450 */
/*!********************************!*\
  !*** ./~/base16/lib/google.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'google',
	  author: 'seth wright (http://sethawright.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#CC342B',
	  base09: '#F96A38',
	  base0A: '#FBA922',
	  base0B: '#198844',
	  base0C: '#3971ED',
	  base0D: '#3971ED',
	  base0E: '#A36AC7',
	  base0F: '#3971ED'
	};
	module.exports = exports['default'];

/***/ },
/* 451 */
/*!***********************************!*\
  !*** ./~/base16/lib/grayscale.js ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'grayscale',
	  author: 'alexandre gavioli (https://github.com/alexx2/)',
	  base00: '#101010',
	  base01: '#252525',
	  base02: '#464646',
	  base03: '#525252',
	  base04: '#ababab',
	  base05: '#b9b9b9',
	  base06: '#e3e3e3',
	  base07: '#f7f7f7',
	  base08: '#7c7c7c',
	  base09: '#999999',
	  base0A: '#a0a0a0',
	  base0B: '#8e8e8e',
	  base0C: '#868686',
	  base0D: '#686868',
	  base0E: '#747474',
	  base0F: '#5e5e5e'
	};
	module.exports = exports['default'];

/***/ },
/* 452 */
/*!*************************************!*\
  !*** ./~/base16/lib/greenscreen.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'green screen',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#001100',
	  base01: '#003300',
	  base02: '#005500',
	  base03: '#007700',
	  base04: '#009900',
	  base05: '#00bb00',
	  base06: '#00dd00',
	  base07: '#00ff00',
	  base08: '#007700',
	  base09: '#009900',
	  base0A: '#007700',
	  base0B: '#00bb00',
	  base0C: '#005500',
	  base0D: '#009900',
	  base0E: '#00bb00',
	  base0F: '#005500'
	};
	module.exports = exports['default'];

/***/ },
/* 453 */
/*!**********************************!*\
  !*** ./~/base16/lib/harmonic.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'harmonic16',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#0b1c2c',
	  base01: '#223b54',
	  base02: '#405c79',
	  base03: '#627e99',
	  base04: '#aabcce',
	  base05: '#cbd6e2',
	  base06: '#e5ebf1',
	  base07: '#f7f9fb',
	  base08: '#bf8b56',
	  base09: '#bfbf56',
	  base0A: '#8bbf56',
	  base0B: '#56bf8b',
	  base0C: '#568bbf',
	  base0D: '#8b56bf',
	  base0E: '#bf568b',
	  base0F: '#bf5656'
	};
	module.exports = exports['default'];

/***/ },
/* 454 */
/*!***********************************!*\
  !*** ./~/base16/lib/hopscotch.js ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'hopscotch',
	  author: 'jan t. sott',
	  base00: '#322931',
	  base01: '#433b42',
	  base02: '#5c545b',
	  base03: '#797379',
	  base04: '#989498',
	  base05: '#b9b5b8',
	  base06: '#d5d3d5',
	  base07: '#ffffff',
	  base08: '#dd464c',
	  base09: '#fd8b19',
	  base0A: '#fdcc59',
	  base0B: '#8fc13e',
	  base0C: '#149b93',
	  base0D: '#1290bf',
	  base0E: '#c85e7c',
	  base0F: '#b33508'
	};
	module.exports = exports['default'];

/***/ },
/* 455 */
/*!*********************************!*\
  !*** ./~/base16/lib/isotope.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'isotope',
	  author: 'jan t. sott',
	  base00: '#000000',
	  base01: '#404040',
	  base02: '#606060',
	  base03: '#808080',
	  base04: '#c0c0c0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#ff0000',
	  base09: '#ff9900',
	  base0A: '#ff0099',
	  base0B: '#33ff00',
	  base0C: '#00ffff',
	  base0D: '#0066ff',
	  base0E: '#cc00ff',
	  base0F: '#3300ff'
	};
	module.exports = exports['default'];

/***/ },
/* 456 */
/*!***********************************!*\
  !*** ./~/base16/lib/marrakesh.js ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'marrakesh',
	  author: 'alexandre gavioli (http://github.com/alexx2/)',
	  base00: '#201602',
	  base01: '#302e00',
	  base02: '#5f5b17',
	  base03: '#6c6823',
	  base04: '#86813b',
	  base05: '#948e48',
	  base06: '#ccc37a',
	  base07: '#faf0a5',
	  base08: '#c35359',
	  base09: '#b36144',
	  base0A: '#a88339',
	  base0B: '#18974e',
	  base0C: '#75a738',
	  base0D: '#477ca1',
	  base0E: '#8868b3',
	  base0F: '#b3588e'
	};
	module.exports = exports['default'];

/***/ },
/* 457 */
/*!*******************************!*\
  !*** ./~/base16/lib/mocha.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'mocha',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#3B3228',
	  base01: '#534636',
	  base02: '#645240',
	  base03: '#7e705a',
	  base04: '#b8afad',
	  base05: '#d0c8c6',
	  base06: '#e9e1dd',
	  base07: '#f5eeeb',
	  base08: '#cb6077',
	  base09: '#d28b71',
	  base0A: '#f4bc87',
	  base0B: '#beb55b',
	  base0C: '#7bbda4',
	  base0D: '#8ab3b5',
	  base0E: '#a89bb9',
	  base0F: '#bb9584'
	};
	module.exports = exports['default'];

/***/ },
/* 458 */
/*!*********************************!*\
  !*** ./~/base16/lib/monokai.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'monokai',
	  author: 'wimer hazenberg (http://www.monokai.nl)',
	  base00: '#272822',
	  base01: '#383830',
	  base02: '#49483e',
	  base03: '#75715e',
	  base04: '#a59f85',
	  base05: '#f8f8f2',
	  base06: '#f5f4f1',
	  base07: '#f9f8f5',
	  base08: '#f92672',
	  base09: '#fd971f',
	  base0A: '#f4bf75',
	  base0B: '#a6e22e',
	  base0C: '#a1efe4',
	  base0D: '#66d9ef',
	  base0E: '#ae81ff',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 459 */
/*!*******************************!*\
  !*** ./~/base16/lib/ocean.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ocean',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2b303b',
	  base01: '#343d46',
	  base02: '#4f5b66',
	  base03: '#65737e',
	  base04: '#a7adba',
	  base05: '#c0c5ce',
	  base06: '#dfe1e8',
	  base07: '#eff1f5',
	  base08: '#bf616a',
	  base09: '#d08770',
	  base0A: '#ebcb8b',
	  base0B: '#a3be8c',
	  base0C: '#96b5b4',
	  base0D: '#8fa1b3',
	  base0E: '#b48ead',
	  base0F: '#ab7967'
	};
	module.exports = exports['default'];

/***/ },
/* 460 */
/*!*********************************!*\
  !*** ./~/base16/lib/paraiso.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'paraiso',
	  author: 'jan t. sott',
	  base00: '#2f1e2e',
	  base01: '#41323f',
	  base02: '#4f424c',
	  base03: '#776e71',
	  base04: '#8d8687',
	  base05: '#a39e9b',
	  base06: '#b9b6b0',
	  base07: '#e7e9db',
	  base08: '#ef6155',
	  base09: '#f99b15',
	  base0A: '#fec418',
	  base0B: '#48b685',
	  base0C: '#5bc4bf',
	  base0D: '#06b6ef',
	  base0E: '#815ba4',
	  base0F: '#e96ba8'
	};
	module.exports = exports['default'];

/***/ },
/* 461 */
/*!*****************************!*\
  !*** ./~/base16/lib/pop.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'pop',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#eb008a',
	  base09: '#f29333',
	  base0A: '#f8ca12',
	  base0B: '#37b349',
	  base0C: '#00aabb',
	  base0D: '#0e5a94',
	  base0E: '#b31e8d',
	  base0F: '#7a2d00'
	};
	module.exports = exports['default'];

/***/ },
/* 462 */
/*!************************************!*\
  !*** ./~/base16/lib/railscasts.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'railscasts',
	  author: 'ryan bates (http://railscasts.com)',
	  base00: '#2b2b2b',
	  base01: '#272935',
	  base02: '#3a4055',
	  base03: '#5a647e',
	  base04: '#d4cfc9',
	  base05: '#e6e1dc',
	  base06: '#f4f1ed',
	  base07: '#f9f7f3',
	  base08: '#da4939',
	  base09: '#cc7833',
	  base0A: '#ffc66d',
	  base0B: '#a5c261',
	  base0C: '#519f50',
	  base0D: '#6d9cbe',
	  base0E: '#b6b3eb',
	  base0F: '#bc9458'
	};
	module.exports = exports['default'];

/***/ },
/* 463 */
/*!**************************************!*\
  !*** ./~/base16/lib/shapeshifter.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'shapeshifter',
	  author: 'tyler benziger (http://tybenz.com)',
	  base00: '#000000',
	  base01: '#040404',
	  base02: '#102015',
	  base03: '#343434',
	  base04: '#555555',
	  base05: '#ababab',
	  base06: '#e0e0e0',
	  base07: '#f9f9f9',
	  base08: '#e92f2f',
	  base09: '#e09448',
	  base0A: '#dddd13',
	  base0B: '#0ed839',
	  base0C: '#23edda',
	  base0D: '#3b48e3',
	  base0E: '#f996e2',
	  base0F: '#69542d'
	};
	module.exports = exports['default'];

/***/ },
/* 464 */
/*!***********************************!*\
  !*** ./~/base16/lib/solarized.js ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 465 */
/*!*************************************!*\
  !*** ./~/base16/lib/summerfruit.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'summerfruit',
	  author: 'christopher corley (http://cscorley.github.io/)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#B0B0B0',
	  base05: '#D0D0D0',
	  base06: '#E0E0E0',
	  base07: '#FFFFFF',
	  base08: '#FF0086',
	  base09: '#FD8900',
	  base0A: '#ABA800',
	  base0B: '#00C918',
	  base0C: '#1faaaa',
	  base0D: '#3777E6',
	  base0E: '#AD00A1',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 466 */
/*!**********************************!*\
  !*** ./~/base16/lib/tomorrow.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'tomorrow',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#cc6666',
	  base09: '#de935f',
	  base0A: '#f0c674',
	  base0B: '#b5bd68',
	  base0C: '#8abeb7',
	  base0D: '#81a2be',
	  base0E: '#b294bb',
	  base0F: '#a3685a'
	};
	module.exports = exports['default'];

/***/ },
/* 467 */
/*!******************************!*\
  !*** ./~/base16/lib/tube.js ***!
  \******************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'london tube',
	  author: 'jan t. sott',
	  base00: '#231f20',
	  base01: '#1c3f95',
	  base02: '#5a5758',
	  base03: '#737171',
	  base04: '#959ca1',
	  base05: '#d9d8d8',
	  base06: '#e7e7e8',
	  base07: '#ffffff',
	  base08: '#ee2e24',
	  base09: '#f386a1',
	  base0A: '#ffd204',
	  base0B: '#00853e',
	  base0C: '#85cebc',
	  base0D: '#009ddc',
	  base0E: '#98005d',
	  base0F: '#b06110'
	};
	module.exports = exports['default'];

/***/ },
/* 468 */
/*!**********************************!*\
  !*** ./~/base16/lib/twilight.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'twilight',
	  author: 'david hart (http://hart-dev.com)',
	  base00: '#1e1e1e',
	  base01: '#323537',
	  base02: '#464b50',
	  base03: '#5f5a60',
	  base04: '#838184',
	  base05: '#a7a7a7',
	  base06: '#c3c3c3',
	  base07: '#ffffff',
	  base08: '#cf6a4c',
	  base09: '#cda869',
	  base0A: '#f9ee98',
	  base0B: '#8f9d6a',
	  base0C: '#afc4db',
	  base0D: '#7587a6',
	  base0E: '#9b859d',
	  base0F: '#9b703f'
	};
	module.exports = exports['default'];

/***/ },
/* 469 */
/*!**************************************************!*\
  !*** ./~/redux-devtools-themes/lib/nicinabox.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'nicinabox',
	  author: 'nicinabox (http://github.com/nicinabox)',
	  base00: '#2A2F3A',
	  base01: '#3C444F',
	  base02: '#4F5A65',
	  base03: '#BEBEBE',
	  base04: '#b0b0b0', // based on ocean theme
	  base05: '#d0d0d0', // based on ocean theme
	  base06: '#FFFFFF',
	  base07: '#f5f5f5', // based on ocean theme
	  base08: '#fb9fb1', // based on ocean theme
	  base09: '#FC6D24',
	  base0A: '#ddb26f', // based on ocean theme
	  base0B: '#A1C659',
	  base0C: '#12cfc0', // based on ocean theme
	  base0D: '#6FB3D2',
	  base0E: '#D381C3',
	  base0F: '#deaf8f' // based on ocean theme
	};
	module.exports = exports['default'];

/***/ },
/* 470 */
/*!*****************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/actions.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.updateScrollTop = updateScrollTop;
	exports.startConsecutiveToggle = startConsecutiveToggle;
	var UPDATE_SCROLL_TOP = exports.UPDATE_SCROLL_TOP = '@@redux-devtools-log-monitor/UPDATE_SCROLL_TOP';
	function updateScrollTop(scrollTop) {
	  return { type: UPDATE_SCROLL_TOP, scrollTop: scrollTop };
	}
	
	var START_CONSECUTIVE_TOGGLE = exports.START_CONSECUTIVE_TOGGLE = '@@redux-devtools-log-monitor/START_CONSECUTIVE_TOGGLE';
	function startConsecutiveToggle(id) {
	  return { type: START_CONSECUTIVE_TOGGLE, id: id };
	}

/***/ },
/* 471 */
/*!******************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/reducers.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = reducer;
	
	var _actions = __webpack_require__(/*! ./actions */ 470);
	
	function initialScrollTop(props) {
	  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var action = arguments[2];
	
	  if (!props.preserveScrollTop) {
	    return 0;
	  }
	
	  return action.type === _actions.UPDATE_SCROLL_TOP ? action.scrollTop : state;
	}
	
	function startConsecutiveToggle(props, state, action) {
	  return action.type === _actions.START_CONSECUTIVE_TOGGLE ? action.id : state;
	}
	
	function reducer(props) {
	  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var action = arguments[2];
	
	  return {
	    initialScrollTop: initialScrollTop(props, state.initialScrollTop, action),
	    consecutiveToggleStartId: startConsecutiveToggle(props, state.consecutiveToggleStartId, action)
	  };
	}

/***/ },
/* 472 */
/*!*****************************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/LogMonitorButtonBar.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _function = __webpack_require__(/*! react-pure-render/function */ 428);
	
	var _function2 = _interopRequireDefault(_function);
	
	var _reduxDevtools = __webpack_require__(/*! redux-devtools */ 286);
	
	var _LogMonitorButton = __webpack_require__(/*! ./LogMonitorButton */ 473);
	
	var _LogMonitorButton2 = _interopRequireDefault(_LogMonitorButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reset = _reduxDevtools.ActionCreators.reset;
	var rollback = _reduxDevtools.ActionCreators.rollback;
	var commit = _reduxDevtools.ActionCreators.commit;
	var sweep = _reduxDevtools.ActionCreators.sweep;
	
	
	var style = {
	  textAlign: 'center',
	  borderBottomWidth: 1,
	  borderBottomStyle: 'solid',
	  borderColor: 'transparent',
	  zIndex: 1,
	  display: 'flex',
	  flexDirection: 'row'
	};
	
	var LogMonitorButtonBar = function (_Component) {
	  _inherits(LogMonitorButtonBar, _Component);
	
	  function LogMonitorButtonBar(props) {
	    _classCallCheck(this, LogMonitorButtonBar);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	
	    _this.handleReset = _this.handleReset.bind(_this);
	    _this.handleRollback = _this.handleRollback.bind(_this);
	    _this.handleSweep = _this.handleSweep.bind(_this);
	    _this.handleCommit = _this.handleCommit.bind(_this);
	    return _this;
	  }
	
	  LogMonitorButtonBar.prototype.handleRollback = function handleRollback() {
	    this.props.dispatch(rollback());
	  };
	
	  LogMonitorButtonBar.prototype.handleSweep = function handleSweep() {
	    this.props.dispatch(sweep());
	  };
	
	  LogMonitorButtonBar.prototype.handleCommit = function handleCommit() {
	    this.props.dispatch(commit());
	  };
	
	  LogMonitorButtonBar.prototype.handleReset = function handleReset() {
	    this.props.dispatch(reset());
	  };
	
	  LogMonitorButtonBar.prototype.render = function render() {
	    var _props = this.props;
	    var theme = _props.theme;
	    var hasStates = _props.hasStates;
	    var hasSkippedActions = _props.hasSkippedActions;
	
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, style, { borderColor: theme.base02 }) },
	      _react2.default.createElement(
	        _LogMonitorButton2.default,
	        {
	          theme: theme,
	          onClick: this.handleReset,
	          enabled: true },
	        'Reset'
	      ),
	      _react2.default.createElement(
	        _LogMonitorButton2.default,
	        {
	          theme: theme,
	          onClick: this.handleRollback,
	          enabled: hasStates },
	        'Revert'
	      ),
	      _react2.default.createElement(
	        _LogMonitorButton2.default,
	        {
	          theme: theme,
	          onClick: this.handleSweep,
	          enabled: hasSkippedActions },
	        'Sweep'
	      ),
	      _react2.default.createElement(
	        _LogMonitorButton2.default,
	        {
	          theme: theme,
	          onClick: this.handleCommit,
	          enabled: hasStates },
	        'Commit'
	      )
	    );
	  };
	
	  return LogMonitorButtonBar;
	}(_react.Component);
	
	LogMonitorButtonBar.propTypes = {
	  dispatch: _react.PropTypes.func,
	  theme: _react.PropTypes.object
	};
	exports.default = LogMonitorButtonBar;

/***/ },
/* 473 */
/*!**************************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/LogMonitorButton.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _brighten = __webpack_require__(/*! ./brighten */ 474);
	
	var _brighten2 = _interopRequireDefault(_brighten);
	
	var _function = __webpack_require__(/*! react-pure-render/function */ 428);
	
	var _function2 = _interopRequireDefault(_function);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  base: {
	    cursor: 'pointer',
	    fontWeight: 'bold',
	    borderRadius: 3,
	    padding: 4,
	    marginLeft: 3,
	    marginRight: 3,
	    marginTop: 5,
	    marginBottom: 5,
	    flexGrow: 1,
	    display: 'inline-block',
	    fontSize: '0.8em',
	    color: 'white',
	    textDecoration: 'none'
	  }
	};
	
	var LogMonitorButton = function (_React$Component) {
	  _inherits(LogMonitorButton, _React$Component);
	
	  function LogMonitorButton(props) {
	    _classCallCheck(this, LogMonitorButton);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	
	
	    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
	    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	
	    _this.state = {
	      hovered: false,
	      active: false
	    };
	    return _this;
	  }
	
	  LogMonitorButton.prototype.handleMouseEnter = function handleMouseEnter() {
	    this.setState({ hovered: true });
	  };
	
	  LogMonitorButton.prototype.handleMouseLeave = function handleMouseLeave() {
	    this.setState({ hovered: false });
	  };
	
	  LogMonitorButton.prototype.handleMouseDown = function handleMouseDown() {
	    this.setState({ active: true });
	  };
	
	  LogMonitorButton.prototype.handleMouseUp = function handleMouseUp() {
	    this.setState({ active: false });
	  };
	
	  LogMonitorButton.prototype.onClick = function onClick() {
	    if (!this.props.enabled) {
	      return;
	    }
	    if (this.props.onClick) {
	      this.props.onClick();
	    }
	  };
	
	  LogMonitorButton.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      backgroundColor: this.props.theme.base02
	    });
	    if (this.props.enabled && this.state.hovered) {
	      style = _extends({}, style, {
	        backgroundColor: (0, _brighten2.default)(this.props.theme.base02, 0.2)
	      });
	    }
	    if (!this.props.enabled) {
	      style = _extends({}, style, {
	        opacity: 0.2,
	        cursor: 'text',
	        backgroundColor: 'transparent'
	      });
	    }
	    return _react2.default.createElement(
	      'a',
	      { onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onClick: this.onClick,
	        style: style },
	      this.props.children
	    );
	  };
	
	  return LogMonitorButton;
	}(_react2.default.Component);
	
	exports.default = LogMonitorButton;

/***/ },
/* 474 */
/*!******************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/brighten.js ***!
  \******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (hexColor, lightness) {
	  var hex = String(hexColor).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex.replace(/(.)/g, '$1$1');
	  }
	  var lum = lightness || 0;
	
	  var rgb = '#';
	  var c = void 0;
	  for (var i = 0; i < 3; ++i) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }
	  return rgb;
	};

/***/ },
/* 475 */
/*!*****************************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/LogMonitorEntryList.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LogMonitorEntry = __webpack_require__(/*! ./LogMonitorEntry */ 476);
	
	var _LogMonitorEntry2 = _interopRequireDefault(_LogMonitorEntry);
	
	var _function = __webpack_require__(/*! react-pure-render/function */ 428);
	
	var _function2 = _interopRequireDefault(_function);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LogMonitorEntryList = function (_Component) {
	  _inherits(LogMonitorEntryList, _Component);
	
	  function LogMonitorEntryList() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, LogMonitorEntryList);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.shouldComponentUpdate = _function2.default, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  LogMonitorEntryList.prototype.render = function render() {
	    var elements = [];
	    var _props = this.props;
	    var theme = _props.theme;
	    var actionsById = _props.actionsById;
	    var computedStates = _props.computedStates;
	    var currentStateIndex = _props.currentStateIndex;
	    var consecutiveToggleStartId = _props.consecutiveToggleStartId;
	    var select = _props.select;
	    var skippedActionIds = _props.skippedActionIds;
	    var stagedActionIds = _props.stagedActionIds;
	    var expandActionRoot = _props.expandActionRoot;
	    var expandStateRoot = _props.expandStateRoot;
	    var markStateDiff = _props.markStateDiff;
	    var onActionClick = _props.onActionClick;
	    var onActionShiftClick = _props.onActionShiftClick;
	
	
	    for (var i = 0; i < stagedActionIds.length; i++) {
	      var actionId = stagedActionIds[i];
	      var action = actionsById[actionId].action;
	      var _computedStates$i = computedStates[i];
	      var state = _computedStates$i.state;
	      var error = _computedStates$i.error;
	
	      var previousState = void 0;
	      if (i > 0) {
	        previousState = computedStates[i - 1].state;
	      }
	      elements.push(_react2.default.createElement(_LogMonitorEntry2.default, { key: actionId,
	        theme: theme,
	        select: select,
	        action: action,
	        actionId: actionId,
	        state: state,
	        previousState: previousState,
	        collapsed: skippedActionIds.indexOf(actionId) > -1,
	        inFuture: i > currentStateIndex,
	        selected: consecutiveToggleStartId === i,
	        error: error,
	        expandActionRoot: expandActionRoot,
	        expandStateRoot: expandStateRoot,
	        markStateDiff: markStateDiff,
	        onActionClick: onActionClick,
	        onActionShiftClick: onActionShiftClick }));
	    }
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      elements
	    );
	  };
	
	  return LogMonitorEntryList;
	}(_react.Component);
	
	LogMonitorEntryList.propTypes = {
	  actionsById: _react.PropTypes.object,
	  computedStates: _react.PropTypes.array,
	  stagedActionIds: _react.PropTypes.array,
	  skippedActionIds: _react.PropTypes.array,
	  currentStateIndex: _react.PropTypes.number,
	  consecutiveToggleStartId: _react.PropTypes.number,
	
	  select: _react.PropTypes.func.isRequired,
	  onActionClick: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool
	};
	exports.default = LogMonitorEntryList;

/***/ },
/* 476 */
/*!*************************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/LogMonitorEntry.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonTree = __webpack_require__(/*! react-json-tree */ 477);
	
	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);
	
	var _LogMonitorEntryAction = __webpack_require__(/*! ./LogMonitorEntryAction */ 607);
	
	var _LogMonitorEntryAction2 = _interopRequireDefault(_LogMonitorEntryAction);
	
	var _function = __webpack_require__(/*! react-pure-render/function */ 428);
	
	var _function2 = _interopRequireDefault(_function);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  entry: {
	    display: 'block',
	    WebkitUserSelect: 'none'
	  },
	
	  root: {
	    marginLeft: 0
	  },
	
	  changedData: {
	    backgroundColor: 'rgba(128, 128, 128, 0.3)'
	  }
	};
	
	var getDeepItem = function getDeepItem(data, path) {
	  return path.reduce(function (obj, key) {
	    return obj && obj[key];
	  }, data);
	};
	var dataIsEqual = function dataIsEqual(data, previousData, keyPath) {
	  var path = [].concat(keyPath).reverse().slice(1);
	
	  return getDeepItem(data, path) === getDeepItem(previousData, path);
	};
	
	var LogMonitorEntry = function (_Component) {
	  _inherits(LogMonitorEntry, _Component);
	
	  function LogMonitorEntry(props) {
	    _classCallCheck(this, LogMonitorEntry);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2.default;
	
	    _this.handleActionClick = _this.handleActionClick.bind(_this);
	    _this.shouldExpandNode = _this.shouldExpandNode.bind(_this);
	    return _this;
	  }
	
	  LogMonitorEntry.prototype.printState = function printState(state, error) {
	    var _this2 = this;
	
	    var errorText = error;
	    if (!errorText) {
	      try {
	        var _ret = function () {
	          var data = _this2.props.select(state);
	          var theme = _this2.props.theme;
	
	          if (_this2.props.markStateDiff) {
	            (function () {
	              var previousData = typeof _this2.props.previousState !== 'undefined' ? _this2.props.select(_this2.props.previousState) : undefined;
	              var getValueStyle = function getValueStyle(_ref, nodeType, keyPath) {
	                var style = _ref.style;
	                return {
	                  style: _extends({}, style, dataIsEqual(data, previousData, keyPath) ? {} : styles.changedData)
	                };
	              };
	              var getNestedNodeStyle = function getNestedNodeStyle(_ref2, keyPath) {
	                var style = _ref2.style;
	                return {
	                  style: _extends({}, style, keyPath.length > 1 ? {} : styles.root)
	                };
	              };
	              theme = {
	                extend: _this2.props.theme,
	                tree: styles.tree,
	                value: getValueStyle,
	                nestedNode: getNestedNodeStyle
	              };
	            })();
	          }
	
	          return {
	            v: _react2.default.createElement(_reactJsonTree2.default, {
	              theme: theme,
	              data: data,
	              invertTheme: false,
	              keyPath: ['state'],
	              shouldExpandNode: _this2.shouldExpandNode })
	          };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      } catch (err) {
	        errorText = 'Error selecting state.';
	      }
	    }
	
	    return _react2.default.createElement(
	      'div',
	      { style: {
	          color: this.props.theme.base08,
	          paddingTop: 20,
	          paddingLeft: 30,
	          paddingRight: 30,
	          paddingBottom: 35
	        } },
	      errorText
	    );
	  };
	
	  LogMonitorEntry.prototype.handleActionClick = function handleActionClick(e) {
	    var _props = this.props;
	    var actionId = _props.actionId;
	    var onActionClick = _props.onActionClick;
	    var onActionShiftClick = _props.onActionShiftClick;
	
	    if (actionId > 0) {
	      if (e.shiftKey) {
	        onActionShiftClick(actionId);
	      } else {
	        onActionClick(actionId);
	      }
	    }
	  };
	
	  LogMonitorEntry.prototype.shouldExpandNode = function shouldExpandNode(keyName, data, level) {
	    return this.props.expandStateRoot && level === 0;
	  };
	
	  LogMonitorEntry.prototype.render = function render() {
	    var _props2 = this.props;
	    var actionId = _props2.actionId;
	    var error = _props2.error;
	    var action = _props2.action;
	    var state = _props2.state;
	    var collapsed = _props2.collapsed;
	    var selected = _props2.selected;
	    var inFuture = _props2.inFuture;
	
	    var styleEntry = {
	      opacity: collapsed ? 0.5 : 1,
	      cursor: actionId > 0 ? 'pointer' : 'default'
	    };
	
	    return _react2.default.createElement(
	      'div',
	      { style: {
	          opacity: selected ? 0.4 : inFuture ? 0.6 : 1, // eslint-disable-line no-nested-ternary
	          textDecoration: collapsed ? 'line-through' : 'none',
	          color: this.props.theme.base06
	        } },
	      _react2.default.createElement(_LogMonitorEntryAction2.default, {
	        theme: this.props.theme,
	        collapsed: collapsed,
	        action: action,
	        expandActionRoot: this.props.expandActionRoot,
	        onClick: this.handleActionClick,
	        style: _extends({}, styles.entry, styleEntry) }),
	      !collapsed && _react2.default.createElement(
	        'div',
	        { style: { paddingLeft: 16 } },
	        this.printState(state, error)
	      )
	    );
	  };
	
	  return LogMonitorEntry;
	}(_react.Component);
	
	LogMonitorEntry.propTypes = {
	  state: _react.PropTypes.object.isRequired,
	  action: _react.PropTypes.object.isRequired,
	  actionId: _react.PropTypes.number.isRequired,
	  select: _react.PropTypes.func.isRequired,
	  inFuture: _react.PropTypes.bool,
	  error: _react.PropTypes.string,
	  onActionClick: _react.PropTypes.func.isRequired,
	  onActionShiftClick: _react.PropTypes.func.isRequired,
	  collapsed: _react.PropTypes.bool,
	  selected: _react.PropTypes.bool,
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool
	};
	exports.default = LogMonitorEntry;

/***/ },
/* 477 */
/*!****************************************!*\
  !*** ./~/react-json-tree/lib/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = undefined;
	
	var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ 478);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 479);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 480);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 549);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 562);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _class, _temp; // ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
	// all credits and original code to the author
	// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
	// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNode = __webpack_require__(/*! ./JSONNode */ 566);
	
	var _JSONNode2 = _interopRequireDefault(_JSONNode);
	
	var _createStylingFromTheme = __webpack_require__(/*! ./createStylingFromTheme */ 588);
	
	var _createStylingFromTheme2 = _interopRequireDefault(_createStylingFromTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var identity = function identity(value) {
	  return value;
	};
	
	function checkLegacyTheming(theme, props) {
	  var deprecatedStylingMethodsMap = {
	    getArrowStyle: 'arrow',
	    getListStyle: 'nestedNodeChildren',
	    getItemStringStyle: 'nestedNodeItemString',
	    getLabelStyle: 'label',
	    getValueStyle: 'valueText'
	  };
	
	  var deprecatedStylingMethods = (0, _keys2['default'])(deprecatedStylingMethodsMap).filter(function (name) {
	    return props[name];
	  });
	
	  if (deprecatedStylingMethods.length > 0) {
	    if (typeof theme === 'string') {
	      theme = {
	        extend: theme
	      };
	    } else {
	      theme = (0, _extends3['default'])({}, theme);
	    }
	
	    deprecatedStylingMethods.forEach(function (name) {
	      console.error( // eslint-disable-line no-console
	      'Styling method "' + name + '" is deprecated, use "theme" property instead');
	
	      theme[deprecatedStylingMethodsMap[name]] = function (_ref) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        var style = _ref.style;
	        return {
	          style: (0, _extends3['default'])({}, style, props[name].apply(props, args))
	        };
	      };
	    });
	  }
	
	  return theme;
	}
	
	var JSONTree = (_temp = _class = function (_React$Component) {
	  (0, _inherits3['default'])(JSONTree, _React$Component);
	
	  function JSONTree() {
	    (0, _classCallCheck3['default'])(this, JSONTree);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  JSONTree.prototype.render = function render() {
	    var _props = this.props;
	    var value = _props.data;
	    var keyPath = _props.keyPath;
	    var postprocessValue = _props.postprocessValue;
	    var hideRoot = _props.hideRoot;
	    var theme = _props.theme;
	    var invertTheme = _props.invertTheme;
	    var rest = (0, _objectWithoutProperties3['default'])(_props, ['data', 'keyPath', 'postprocessValue', 'hideRoot', 'theme', 'invertTheme']);
	
	
	    var styling = (0, _createStylingFromTheme2['default'])(checkLegacyTheming(theme, rest), invertTheme);
	
	    return _react2['default'].createElement(
	      'ul',
	      styling('tree'),
	      _react2['default'].createElement(_JSONNode2['default'], (0, _extends3['default'])({}, (0, _extends3['default'])({ postprocessValue: postprocessValue, hideRoot: hideRoot, styling: styling }, rest), {
	        keyPath: hideRoot ? [] : keyPath,
	        value: postprocessValue(value)
	      }))
	    );
	  };
	
	  return JSONTree;
	}(_react2['default'].Component), _class.propTypes = {
	  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]).isRequired,
	  hideRoot: _react.PropTypes.bool,
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	  invertTheme: _react.PropTypes.bool,
	  keyPath: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])),
	  postprocessValue: _react.PropTypes.func,
	  sortObjectKeys: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.bool])
	}, _class.defaultProps = {
	  shouldExpandNode: function shouldExpandNode(keyName, data, level) {
	    return level === 0;
	  }, // expands root by default,
	  hideRoot: false,
	  keyPath: ['root'],
	  getItemString: function getItemString(type, data, itemType, itemString) {
	    return _react2['default'].createElement(
	      'span',
	      null,
	      itemType,
	      ' ',
	      itemString
	    );
	  },
	  labelRenderer: function labelRenderer(_ref2) {
	    var label = _ref2[0];
	    return _react2['default'].createElement(
	      'span',
	      null,
	      label,
	      ':'
	    );
	  },
	  valueRenderer: identity,
	  postprocessValue: identity,
	  isCustomNode: function isCustomNode() {
	    return false;
	  },
	  collectionLimit: 50,
	  invertTheme: true
	}, _temp);
	exports['default'] = JSONTree;

/***/ },
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/object/keys.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 563), __esModule: true };

/***/ },
/* 563 */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/object/keys.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.keys */ 564);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 492).Object.keys;

/***/ },
/* 564 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.keys.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 527)
	  , $keys    = __webpack_require__(/*! ./_object-keys */ 511);
	
	__webpack_require__(/*! ./_object-sap */ 565)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 565 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-sap.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./_export */ 490)
	  , core    = __webpack_require__(/*! ./_core */ 492)
	  , fails   = __webpack_require__(/*! ./_fails */ 501);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 566 */
/*!*******************************************!*\
  !*** ./~/react-json-tree/lib/JSONNode.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ 478);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objType = __webpack_require__(/*! ./objType */ 567);
	
	var _objType2 = _interopRequireDefault(_objType);
	
	var _JSONObjectNode = __webpack_require__(/*! ./JSONObjectNode */ 568);
	
	var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);
	
	var _JSONArrayNode = __webpack_require__(/*! ./JSONArrayNode */ 581);
	
	var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);
	
	var _JSONIterableNode = __webpack_require__(/*! ./JSONIterableNode */ 582);
	
	var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);
	
	var _JSONValueNode = __webpack_require__(/*! ./JSONValueNode */ 587);
	
	var _JSONValueNode2 = _interopRequireDefault(_JSONValueNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var JSONNode = function JSONNode(_ref) {
	  var getItemString = _ref.getItemString;
	  var keyPath = _ref.keyPath;
	  var labelRenderer = _ref.labelRenderer;
	  var styling = _ref.styling;
	  var value = _ref.value;
	  var valueRenderer = _ref.valueRenderer;
	  var isCustomNode = _ref.isCustomNode;
	  var rest = (0, _objectWithoutProperties3['default'])(_ref, ['getItemString', 'keyPath', 'labelRenderer', 'styling', 'value', 'valueRenderer', 'isCustomNode']);
	
	  var nodeType = isCustomNode(value) ? 'Custom' : (0, _objType2['default'])(value);
	
	  var simpleNodeProps = {
	    getItemString: getItemString,
	    key: keyPath[0],
	    keyPath: keyPath,
	    labelRenderer: labelRenderer,
	    nodeType: nodeType,
	    styling: styling,
	    value: value,
	    valueRenderer: valueRenderer
	  };
	
	  var nestedNodeProps = (0, _extends3['default'])({}, rest, simpleNodeProps, {
	    data: value,
	    isCustomNode: isCustomNode
	  });
	
	  switch (nodeType) {
	    case 'Object':
	    case 'Error':
	      return _react2['default'].createElement(_JSONObjectNode2['default'], nestedNodeProps);
	    case 'Array':
	      return _react2['default'].createElement(_JSONArrayNode2['default'], nestedNodeProps);
	    case 'Iterable':
	      return _react2['default'].createElement(_JSONIterableNode2['default'], nestedNodeProps);
	    case 'String':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
	          return '"' + raw + '"';
	        } }));
	    case 'Number':
	      return _react2['default'].createElement(_JSONValueNode2['default'], simpleNodeProps);
	    case 'Boolean':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
	          return raw ? 'true' : 'false';
	        } }));
	    case 'Date':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
	          return raw.toISOString();
	        } }));
	    case 'Null':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter() {
	          return 'null';
	        } }));
	    case 'Undefined':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter() {
	          return 'undefined';
	        } }));
	    case 'Function':
	    case 'Symbol':
	      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
	          return raw.toString();
	        } }));
	    case 'Custom':
	      return _react2['default'].createElement(_JSONValueNode2['default'], simpleNodeProps);
	    default:
	      return null;
	  }
	};
	
	JSONNode.propTypes = {
	  getItemString: _react.PropTypes.func.isRequired,
	  keyPath: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])).isRequired,
	  labelRenderer: _react.PropTypes.func.isRequired,
	  styling: _react.PropTypes.func.isRequired,
	  value: _react.PropTypes.any,
	  valueRenderer: _react.PropTypes.func.isRequired,
	  isCustomNode: _react.PropTypes.func.isRequired
	};
	
	exports['default'] = JSONNode;

/***/ },
/* 567 */
/*!******************************************!*\
  !*** ./~/react-json-tree/lib/objType.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(/*! babel-runtime/core-js/symbol/iterator */ 482);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 481);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports['default'] = objType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function objType(obj) {
	  if (obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3['default'])(obj)) === 'object' && !Array.isArray(obj) && typeof obj[_iterator2['default']] === 'function') {
	    return 'Iterable';
	  }
	  return Object.prototype.toString.call(obj).slice(8, -1);
	}

/***/ },
/* 568 */
/*!*************************************************!*\
  !*** ./~/react-json-tree/lib/JSONObjectNode.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ 478);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ 569);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNestedNode = __webpack_require__(/*! ./JSONNestedNode */ 572);
	
	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// Returns the "n Items" string for this node,
	// generating and caching it if it hasn't been created yet.
	function createItemString(data) {
	  var len = (0, _getOwnPropertyNames2['default'])(data).length;
	  return len + ' ' + (len !== 1 ? 'keys' : 'key');
	}
	
	// Configures <JSONNestedNode> to render an Object
	var JSONObjectNode = function JSONObjectNode(_ref) {
	  var data = _ref.data;
	  var props = (0, _objectWithoutProperties3['default'])(_ref, ['data']);
	  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
	    data: data,
	    nodeType: 'Object',
	    nodeTypeIndicator: '{}',
	    createItemString: createItemString,
	    expandable: (0, _getOwnPropertyNames2['default'])(data).length > 0
	  }));
	};
	
	JSONObjectNode.propTypes = {
	  data: _react.PropTypes.object
	};
	
	exports['default'] = JSONObjectNode;

/***/ },
/* 569 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-names.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-names */ 570), __esModule: true };

/***/ },
/* 570 */
/*!***************************************************************!*\
  !*** ./~/core-js/library/fn/object/get-own-property-names.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.get-own-property-names */ 571);
	var $Object = __webpack_require__(/*! ../../modules/_core */ 492).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 571 */
/*!************************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-own-property-names.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(/*! ./_object-sap */ 565)('getOwnPropertyNames', function(){
	  return __webpack_require__(/*! ./_object-gopn-ext */ 543).f;
	});

/***/ },
/* 572 */
/*!*************************************************!*\
  !*** ./~/react-json-tree/lib/JSONNestedNode.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = undefined;
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 479);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 480);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 549);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _class, _temp;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONArrow = __webpack_require__(/*! ./JSONArrow */ 573);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	var _getCollectionEntries = __webpack_require__(/*! ./getCollectionEntries */ 574);
	
	var _getCollectionEntries2 = _interopRequireDefault(_getCollectionEntries);
	
	var _JSONNode = __webpack_require__(/*! ./JSONNode */ 566);
	
	var _JSONNode2 = _interopRequireDefault(_JSONNode);
	
	var _ItemRange = __webpack_require__(/*! ./ItemRange */ 580);
	
	var _ItemRange2 = _interopRequireDefault(_ItemRange);
	
	var _function = __webpack_require__(/*! react-pure-render/function */ 428);
	
	var _function2 = _interopRequireDefault(_function);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Renders nested values (eg. objects, arrays, lists, etc.)
	 */
	
	function renderChildNodes(props, from, to) {
	  var nodeType = props.nodeType;
	  var data = props.data;
	  var collectionLimit = props.collectionLimit;
	  var circularCache = props.circularCache;
	  var keyPath = props.keyPath;
	  var postprocessValue = props.postprocessValue;
	  var sortObjectKeys = props.sortObjectKeys;
	
	  var childNodes = [];
	
	  (0, _getCollectionEntries2['default'])(nodeType, data, sortObjectKeys, collectionLimit, from, to).forEach(function (entry) {
	    if (entry.to) {
	      childNodes.push(_react2['default'].createElement(_ItemRange2['default'], (0, _extends3['default'])({}, props, {
	        key: 'ItemRange--' + entry.from + '-' + entry.to,
	        from: entry.from,
	        to: entry.to,
	        renderChildNodes: renderChildNodes
	      })));
	    } else {
	      var key = entry.key;
	      var value = entry.value;
	
	      var isCircular = circularCache.indexOf(value) !== -1;
	
	      var node = _react2['default'].createElement(_JSONNode2['default'], (0, _extends3['default'])({}, props, { postprocessValue: postprocessValue, collectionLimit: collectionLimit }, {
	        key: 'Node--' + key,
	        keyPath: [key].concat(keyPath),
	        value: postprocessValue(value),
	        circularCache: [].concat(circularCache, [value]),
	        isCircular: isCircular,
	        hideRoot: false
	      }));
	
	      if (node !== false) {
	        childNodes.push(node);
	      }
	    }
	  });
	
	  return childNodes;
	}
	
	function getStateFromProps(props) {
	  // calculate individual node expansion if necessary
	  var expanded = props.shouldExpandNode && !props.isCircular ? props.shouldExpandNode(props.keyPath, props.data, props.level) : false;
	  return {
	    expanded: expanded
	  };
	}
	
	var JSONNestedNode = (_temp = _class = function (_React$Component) {
	  (0, _inherits3['default'])(JSONNestedNode, _React$Component);
	
	  function JSONNestedNode(props) {
	    (0, _classCallCheck3['default'])(this, JSONNestedNode);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2['default'];
	
	    _this.handleClick = function () {
	      return _this.setState({ expanded: !_this.state.expanded });
	    };
	
	    _this.state = getStateFromProps(props);
	    return _this;
	  }
	
	  JSONNestedNode.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    if (['shouldExpandNode', 'isCircular', 'keyPath', 'data', 'level'].find(function (k) {
	      return nextProps[k] !== _this2.props[k];
	    })) {
	      this.setState(getStateFromProps(nextProps));
	    }
	  };
	
	  JSONNestedNode.prototype.render = function render() {
	    var _props = this.props;
	    var getItemString = _props.getItemString;
	    var nodeTypeIndicator = _props.nodeTypeIndicator;
	    var nodeType = _props.nodeType;
	    var data = _props.data;
	    var hideRoot = _props.hideRoot;
	    var createItemString = _props.createItemString;
	    var styling = _props.styling;
	    var collectionLimit = _props.collectionLimit;
	    var keyPath = _props.keyPath;
	    var labelRenderer = _props.labelRenderer;
	    var expandable = _props.expandable;
	    var expanded = this.state.expanded;
	
	    var renderedChildren = expanded || hideRoot && this.props.level === 0 ? renderChildNodes((0, _extends3['default'])({}, this.props, { level: this.props.level + 1 })) : null;
	
	    var itemType = _react2['default'].createElement(
	      'span',
	      styling('nestedNodeItemType', expanded),
	      nodeTypeIndicator
	    );
	    var renderedItemString = getItemString(nodeType, data, itemType, createItemString(data, collectionLimit));
	    var stylingArgs = [keyPath, nodeType, expanded, expandable];
	
	    return hideRoot ? _react2['default'].createElement(
	      'li',
	      styling.apply(undefined, ['rootNode'].concat(stylingArgs)),
	      _react2['default'].createElement(
	        'ul',
	        styling.apply(undefined, ['rootNodeChildren'].concat(stylingArgs)),
	        renderedChildren
	      )
	    ) : _react2['default'].createElement(
	      'li',
	      styling.apply(undefined, ['nestedNode'].concat(stylingArgs)),
	      expandable && _react2['default'].createElement(_JSONArrow2['default'], {
	        styling: styling,
	        nodeType: nodeType,
	        expanded: expanded,
	        onClick: this.handleClick
	      }),
	      _react2['default'].createElement(
	        'label',
	        (0, _extends3['default'])({}, styling.apply(undefined, [['label', 'nestedNodeLabel']].concat(stylingArgs)), {
	          onClick: expandable && this.handleClick
	        }),
	        labelRenderer.apply(undefined, stylingArgs)
	      ),
	      _react2['default'].createElement(
	        'span',
	        (0, _extends3['default'])({}, styling.apply(undefined, ['nestedNodeItemString'].concat(stylingArgs)), {
	          onClick: expandable && this.handleClick
	        }),
	        renderedItemString
	      ),
	      _react2['default'].createElement(
	        'ul',
	        styling.apply(undefined, ['nestedNodeChildren'].concat(stylingArgs)),
	        renderedChildren
	      )
	    );
	  };
	
	  return JSONNestedNode;
	}(_react2['default'].Component), _class.propTypes = {
	  getItemString: _react.PropTypes.func.isRequired,
	  nodeTypeIndicator: _react.PropTypes.any,
	  nodeType: _react.PropTypes.string.isRequired,
	  data: _react.PropTypes.any,
	  hideRoot: _react.PropTypes.bool.isRequired,
	  createItemString: _react.PropTypes.func.isRequired,
	  styling: _react.PropTypes.func.isRequired,
	  collectionLimit: _react.PropTypes.number,
	  keyPath: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])).isRequired,
	  labelRenderer: _react.PropTypes.func.isRequired,
	  shouldExpandNode: _react.PropTypes.func,
	  level: _react.PropTypes.number.isRequired,
	  sortObjectKeys: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.bool]),
	  isCircular: _react.PropTypes.bool,
	  expandable: _react.PropTypes.bool
	}, _class.defaultProps = {
	  data: [],
	  circularCache: [],
	  level: 0,
	  expandable: true
	}, _temp);
	exports['default'] = JSONNestedNode;

/***/ },
/* 573 */
/*!********************************************!*\
  !*** ./~/react-json-tree/lib/JSONArrow.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var JSONArrow = function JSONArrow(_ref) {
	  var styling = _ref.styling;
	  var arrowStyle = _ref.arrowStyle;
	  var expanded = _ref.expanded;
	  var nodeType = _ref.nodeType;
	  var onClick = _ref.onClick;
	  return _react2['default'].createElement(
	    'div',
	    (0, _extends3['default'])({}, styling('arrowContainer', arrowStyle), {
	      onClick: onClick
	    }),
	    _react2['default'].createElement(
	      'div',
	      styling(['arrow', 'arrowSign'], nodeType, expanded, arrowStyle),
	      '▶',
	      arrowStyle === 'double' && _react2['default'].createElement(
	        'div',
	        styling(['arrowSign', 'arrowSignInner']),
	        '▶'
	      )
	    )
	  );
	};
	
	JSONArrow.propTypes = {
	  styling: _react.PropTypes.func.isRequired,
	  arrowStyle: _react.PropTypes.oneOf(['single', 'double']),
	  expanded: _react.PropTypes.bool.isRequired,
	  nodeType: _react.PropTypes.string.isRequired,
	  onClick: _react.PropTypes.func.isRequired
	};
	
	JSONArrow.defaultProps = {
	  arrowStyle: 'single'
	};
	
	exports['default'] = JSONArrow;

/***/ },
/* 574 */
/*!*******************************************************!*\
  !*** ./~/react-json-tree/lib/getCollectionEntries.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 575);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ 569);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 562);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports['default'] = getCollectionEntries;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getLength(type, collection) {
	  if (type === 'Object') {
	    return (0, _keys2['default'])(collection).length;
	  } else if (type === 'Array') {
	    return collection.length;
	  }
	
	  return Infinity;
	}
	
	function isIterableMap(collection) {
	  return typeof collection.set === 'function';
	}
	
	function getEntries(type, collection, sortObjectKeys) {
	  var from = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	  var to = arguments.length <= 4 || arguments[4] === undefined ? Infinity : arguments[4];
	
	  var res = void 0;
	
	  if (type === 'Object') {
	    var keys = (0, _getOwnPropertyNames2['default'])(collection);
	
	    if (typeof sortObjectKeys !== 'undefined') {
	      keys.sort(sortObjectKeys);
	    }
	
	    keys = keys.slice(from, to + 1);
	
	    res = {
	      entries: keys.map(function (key) {
	        return { key: key, value: collection[key] };
	      })
	    };
	  } else if (type === 'Array') {
	    res = {
	      entries: collection.slice(from, to + 1).map(function (val, idx) {
	        return { key: idx + from, value: val };
	      })
	    };
	  } else {
	    var idx = 0;
	    var entries = [];
	    var done = true;
	
	    var isMap = isIterableMap(collection);
	
	    for (var _iterator = collection, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3['default'])(_iterator);;) {
	      var _ref;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }
	
	      var item = _ref;
	
	      if (idx > to) {
	        done = false;
	        break;
	      }if (from <= idx) {
	        if (isMap && Array.isArray(item)) {
	          entries.push({ key: item[0], value: item[1] });
	        } else {
	          entries.push({ key: idx, value: item });
	        }
	      }
	      idx++;
	    }
	
	    res = {
	      hasMore: !done,
	      entries: entries
	    };
	  }
	
	  return res;
	}
	
	function getRanges(from, to, limit) {
	  var ranges = [];
	  while (to - from > limit * limit) {
	    limit = limit * limit;
	  }
	  for (var i = from; i <= to; i += limit) {
	    ranges.push({ from: i, to: Math.min(to, i + limit - 1) });
	  }
	
	  return ranges;
	}
	
	function getCollectionEntries(type, collection, sortObjectKeys, limit) {
	  var from = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	  var to = arguments.length <= 5 || arguments[5] === undefined ? Infinity : arguments[5];
	
	  var getEntriesBound = getEntries.bind(null, type, collection, sortObjectKeys);
	
	  if (!limit) {
	    return getEntriesBound().entries;
	  }
	
	  var isSubset = to < Infinity;
	  var length = Math.min(to - from, getLength(type, collection));
	
	  if (type !== 'Iterable') {
	    if (length <= limit || limit < 7) {
	      return getEntriesBound(from, to).entries;
	    }
	  } else {
	    if (length <= limit && !isSubset) {
	      return getEntriesBound(from, to).entries;
	    }
	  }
	
	  var limitedEntries = void 0;
	  if (type === 'Iterable') {
	    var _getEntriesBound = getEntriesBound(from, from + limit - 1);
	
	    var hasMore = _getEntriesBound.hasMore;
	    var entries = _getEntriesBound.entries;
	
	
	    limitedEntries = hasMore ? [].concat(entries, getRanges(from + limit, from + 2 * limit - 1, limit)) : entries;
	  } else {
	    limitedEntries = isSubset ? getRanges(from, to, limit) : [].concat(getEntriesBound(0, limit - 5).entries, getRanges(limit - 4, length - 5, limit), getEntriesBound(length - 4, length - 1).entries);
	  }
	
	  return limitedEntries;
	}

/***/ },
/* 575 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 576), __esModule: true };

/***/ },
/* 576 */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/get-iterator.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 528);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 484);
	module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 577);

/***/ },
/* 577 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(/*! ./_an-object */ 497)
	  , get      = __webpack_require__(/*! ./core.get-iterator-method */ 578);
	module.exports = __webpack_require__(/*! ./_core */ 492).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 578 */,
/* 579 */,
/* 580 */
/*!********************************************!*\
  !*** ./~/react-json-tree/lib/ItemRange.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = undefined;
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 479);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 480);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 549);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class, _temp;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _function = __webpack_require__(/*! react-pure-render/function */ 428);
	
	var _function2 = _interopRequireDefault(_function);
	
	var _JSONArrow = __webpack_require__(/*! ./JSONArrow */ 573);
	
	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var ItemRange = (_temp = _class = function (_Component) {
	  (0, _inherits3['default'])(ItemRange, _Component);
	
	  function ItemRange(props) {
	    (0, _classCallCheck3['default'])(this, ItemRange);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));
	
	    _this.shouldComponentUpdate = _function2['default'];
	
	    _this.state = { expanded: false };
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  ItemRange.prototype.render = function render() {
	    var _props = this.props;
	    var styling = _props.styling;
	    var from = _props.from;
	    var to = _props.to;
	    var renderChildNodes = _props.renderChildNodes;
	    var nodeType = _props.nodeType;
	
	
	    return this.state.expanded ? _react2['default'].createElement(
	      'div',
	      styling('itemRange', this.state.expanded),
	      renderChildNodes(this.props, from, to)
	    ) : _react2['default'].createElement(
	      'div',
	      (0, _extends3['default'])({}, styling('itemRange', this.state.expanded), {
	        onClick: this.handleClick
	      }),
	      _react2['default'].createElement(_JSONArrow2['default'], {
	        nodeType: nodeType,
	        styling: styling,
	        expanded: false,
	        onClick: this.handleClick,
	        arrowStyle: 'double'
	      }),
	      from + ' ... ' + to
	    );
	  };
	
	  ItemRange.prototype.handleClick = function handleClick() {
	    this.setState({ expanded: !this.state.expanded });
	  };
	
	  return ItemRange;
	}(_react.Component), _class.propTypes = {
	  styling: _react.PropTypes.func.isRequired,
	  from: _react.PropTypes.number.isRequired,
	  to: _react.PropTypes.number.isRequired,
	  renderChildNodes: _react.PropTypes.func.isRequired,
	  nodeType: _react.PropTypes.string.isRequired
	}, _temp);
	exports['default'] = ItemRange;

/***/ },
/* 581 */
/*!************************************************!*\
  !*** ./~/react-json-tree/lib/JSONArrayNode.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ 478);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNestedNode = __webpack_require__(/*! ./JSONNestedNode */ 572);
	
	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// Returns the "n Items" string for this node,
	// generating and caching it if it hasn't been created yet.
	function createItemString(data) {
	  return data.length + ' ' + (data.length !== 1 ? 'items' : 'item');
	}
	
	// Configures <JSONNestedNode> to render an Array
	var JSONArrayNode = function JSONArrayNode(_ref) {
	  var data = _ref.data;
	  var props = (0, _objectWithoutProperties3['default'])(_ref, ['data']);
	  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
	    data: data,
	    nodeType: 'Array',
	    nodeTypeIndicator: '[]',
	    createItemString: createItemString,
	    expandable: data.length > 0
	  }));
	};
	
	JSONArrayNode.propTypes = {
	  data: _react.PropTypes.array
	};
	
	exports['default'] = JSONArrayNode;

/***/ },
/* 582 */
/*!***************************************************!*\
  !*** ./~/react-json-tree/lib/JSONIterableNode.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ 478);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 575);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _isSafeInteger = __webpack_require__(/*! babel-runtime/core-js/number/is-safe-integer */ 583);
	
	var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);
	
	exports['default'] = JSONIterableNode;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JSONNestedNode = __webpack_require__(/*! ./JSONNestedNode */ 572);
	
	var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// Returns the "n Items" string for this node,
	// generating and caching it if it hasn't been created yet.
	function createItemString(data, limit) {
	  var count = 0;
	  var hasMore = false;
	  if ((0, _isSafeInteger2['default'])(data.size)) {
	    count = data.size;
	  } else {
	    for (var _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3['default'])(_iterator);;) {
	      var _ref;
	
	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }
	
	      var entry = _ref;
	      // eslint-disable-line no-unused-vars
	      if (limit && count + 1 > limit) {
	        hasMore = true;
	        break;
	      }
	      count += 1;
	    }
	  }
	  return '' + (hasMore ? '>' : '') + count + ' ' + (count !== 1 ? 'entries' : 'entry');
	}
	
	// Configures <JSONNestedNode> to render an iterable
	function JSONIterableNode(_ref2) {
	  var props = (0, _objectWithoutProperties3['default'])(_ref2, []);
	
	  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
	    nodeType: 'Iterable',
	    nodeTypeIndicator: '()',
	    createItemString: createItemString
	  }));
	}

/***/ },
/* 583 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/number/is-safe-integer.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/number/is-safe-integer */ 584), __esModule: true };

/***/ },
/* 584 */
/*!********************************************************!*\
  !*** ./~/core-js/library/fn/number/is-safe-integer.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.number.is-safe-integer */ 585);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 492).Number.isSafeInteger;

/***/ },
/* 585 */
/*!*****************************************************************!*\
  !*** ./~/core-js/library/modules/es6.number.is-safe-integer.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(/*! ./_export */ 490)
	  , isInteger = __webpack_require__(/*! ./_is-integer */ 586)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 586 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_is-integer.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(/*! ./_is-object */ 498)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 587 */
/*!************************************************!*\
  !*** ./~/react-json-tree/lib/JSONValueNode.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Renders simple values (eg. strings, numbers, booleans, etc)
	 */
	
	var JSONValueNode = function JSONValueNode(_ref) {
	  var nodeType = _ref.nodeType;
	  var styling = _ref.styling;
	  var labelRenderer = _ref.labelRenderer;
	  var keyPath = _ref.keyPath;
	  var valueRenderer = _ref.valueRenderer;
	  var value = _ref.value;
	  var valueGetter = _ref.valueGetter;
	  return _react2['default'].createElement(
	    'li',
	    styling('value', nodeType, keyPath),
	    _react2['default'].createElement(
	      'label',
	      styling(['label', 'valueLabel'], nodeType, keyPath),
	      labelRenderer(keyPath, nodeType, false, false)
	    ),
	    _react2['default'].createElement(
	      'span',
	      styling('valueText', nodeType, keyPath),
	      valueRenderer.apply(undefined, [valueGetter(value), value].concat(keyPath))
	    )
	  );
	};
	
	JSONValueNode.propTypes = {
	  nodeType: _react.PropTypes.string.isRequired,
	  styling: _react.PropTypes.func.isRequired,
	  labelRenderer: _react.PropTypes.func.isRequired,
	  keyPath: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])).isRequired,
	  valueRenderer: _react.PropTypes.func.isRequired,
	  value: _react.PropTypes.any,
	  valueGetter: _react.PropTypes.func
	};
	
	JSONValueNode.defaultProps = {
	  valueGetter: function valueGetter(value) {
	    return value;
	  }
	};
	
	exports['default'] = JSONValueNode;

/***/ },
/* 588 */
/*!*********************************************************!*\
  !*** ./~/react-json-tree/lib/createStylingFromTheme.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _solarized = __webpack_require__(/*! ./themes/solarized */ 589);
	
	var _solarized2 = _interopRequireDefault(_solarized);
	
	var _reactBase16Styling = __webpack_require__(/*! react-base16-styling */ 590);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var colorMap = function colorMap(theme) {
	  return {
	    BACKGROUND_COLOR: theme.base00,
	    TEXT_COLOR: theme.base07,
	    STRING_COLOR: theme.base0B,
	    DATE_COLOR: theme.base0B,
	    NUMBER_COLOR: theme.base09,
	    BOOLEAN_COLOR: theme.base09,
	    NULL_COLOR: theme.base08,
	    UNDEFINED_COLOR: theme.base08,
	    FUNCTION_COLOR: theme.base08,
	    SYMBOL_COLOR: theme.base08,
	    LABEL_COLOR: theme.base0D,
	    ARROW_COLOR: theme.base0D,
	    ITEM_STRING_COLOR: theme.base0B,
	    ITEM_STRING_EXPANDED_COLOR: theme.base03
	  };
	};
	
	var valueColorMap = function valueColorMap(colors) {
	  return {
	    String: colors.STRING_COLOR,
	    Date: colors.DATE_COLOR,
	    Number: colors.NUMBER_COLOR,
	    Boolean: colors.BOOLEAN_COLOR,
	    Null: colors.NULL_COLOR,
	    Undefined: colors.UNDEFINED_COLOR,
	    Function: colors.FUNCTION_COLOR,
	    Symbol: colors.SYMBOL_COLOR
	  };
	};
	
	var getDefaultThemeStyling = function getDefaultThemeStyling(theme) {
	  var colors = colorMap(theme);
	
	  return {
	    tree: {
	      border: 0,
	      padding: 0,
	      marginTop: '0.5em',
	      marginBottom: '0.5em',
	      marginLeft: '0.125em',
	      marginRight: 0,
	      listStyle: 'none',
	      MozUserSelect: 'none',
	      WebkitUserSelect: 'none',
	      backgroundColor: colors.BACKGROUND_COLOR
	    },
	
	    value: function value(_ref, nodeType, keyPath) {
	      var style = _ref.style;
	      return {
	        style: (0, _extends3['default'])({}, style, {
	          paddingTop: '0.25em',
	          paddingRight: 0,
	          marginLeft: '0.875em',
	          WebkitUserSelect: 'text',
	          MozUserSelect: 'text',
	          wordWrap: 'break-word',
	          paddingLeft: keyPath.length > 1 ? '2.125em' : '1.25em',
	          textIndent: '-0.5em',
	          wordBreak: 'break-all'
	        })
	      };
	    },
	
	    label: {
	      display: 'inline-block',
	      color: colors.LABEL_COLOR
	    },
	
	    valueLabel: {
	      margin: '0 0.5em 0 0'
	    },
	
	    valueText: function valueText(_ref2, nodeType) {
	      var style = _ref2.style;
	      return {
	        style: (0, _extends3['default'])({}, style, {
	          color: valueColorMap(colors)[nodeType]
	        })
	      };
	    },
	
	    itemRange: function itemRange(_ref3, expanded) {
	      var style = _ref3.style;
	      return {
	        style: {
	          paddingTop: expanded ? 0 : '0.25em',
	          cursor: 'pointer',
	          color: colors.LABEL_COLOR
	        }
	      };
	    },
	
	    arrow: function arrow(_ref4, nodeType, expanded) {
	      var style = _ref4.style;
	      return {
	        style: (0, _extends3['default'])({}, style, {
	          marginLeft: 0,
	          transition: '150ms',
	          WebkitTransition: '150ms',
	          MozTransition: '150ms',
	          WebkitTransform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
	          MozTransform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
	          transform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
	          transformOrigin: '45% 50%',
	          WebkitTransformOrigin: '45% 50%',
	          MozTransformOrigin: '45% 50%',
	          position: 'relative',
	          lineHeight: '1.1em',
	          fontSize: '0.75em'
	        })
	      };
	    },
	
	    arrowContainer: function arrowContainer(_ref5, arrowStyle) {
	      var style = _ref5.style;
	      return {
	        style: (0, _extends3['default'])({}, style, {
	          display: 'inline-block',
	          paddingRight: '0.5em',
	          paddingLeft: arrowStyle === 'double' ? '1em' : 0,
	          cursor: 'pointer'
	        })
	      };
	    },
	
	    arrowSign: {
	      color: colors.ARROW_COLOR
	    },
	
	    arrowSignInner: {
	      position: 'absolute',
	      top: 0,
	      left: '-0.4em'
	    },
	
	    nestedNode: function nestedNode(_ref6, keyPath, nodeType, expanded, expandable) {
	      var style = _ref6.style;
	      return {
	        style: (0, _extends3['default'])({}, style, {
	          position: 'relative',
	          paddingTop: '0.25em',
	          marginLeft: keyPath.length > 1 ? '0.875em' : 0,
	          paddingLeft: !expandable ? '1.125em' : 0
	        })
	      };
	    },
	
	    rootNode: {
	      padding: 0,
	      margin: 0
	    },
	
	    nestedNodeLabel: function nestedNodeLabel(_ref7, keyPath, nodeType, expanded, expandable) {
	      var style = _ref7.style;
	      return {
	        style: (0, _extends3['default'])({}, style, {
	          margin: 0,
	          padding: 0,
	          WebkitUserSelect: expandable ? 'inherit' : 'text',
	          MozUserSelect: expandable ? 'inherit' : 'text',
	          cursor: expandable ? 'pointer' : 'default'
	        })
	      };
	    },
	
	    nestedNodeItemString: function nestedNodeItemString(_ref8, keyPath, nodeType, expanded) {
	      var style = _ref8.style;
	      return {
	        style: (0, _extends3['default'])({}, style, {
	          paddingLeft: '0.5em',
	          cursor: 'default',
	          color: expanded ? colors.ITEM_STRING_EXPANDED_COLOR : colors.ITEM_STRING_COLOR
	        })
	      };
	    },
	
	    nestedNodeItemType: {
	      marginLeft: '0.3em',
	      marginRight: '0.3em'
	    },
	
	    nestedNodeChildren: function nestedNodeChildren(_ref9, nodeType, expanded) {
	      var style = _ref9.style;
	      return {
	        style: (0, _extends3['default'])({}, style, {
	          padding: 0,
	          margin: 0,
	          listStyle: 'none',
	          display: expanded ? 'block' : 'none'
	        })
	      };
	    },
	
	    rootNodeChildren: {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none'
	    }
	  };
	};
	
	exports['default'] = (0, _reactBase16Styling.createStyling)(getDefaultThemeStyling, {
	  defaultBase16: _solarized2['default']
	});

/***/ },
/* 589 */
/*!***************************************************!*\
  !*** ./~/react-json-tree/lib/themes/solarized.js ***!
  \***************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};

/***/ },
/* 590 */
/*!*********************************************!*\
  !*** ./~/react-base16-styling/lib/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBase16Theme = exports.createStyling = undefined;
	
	var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 481);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 557);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 591);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 562);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _lodash = __webpack_require__(/*! lodash.curry */ 595);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _base = __webpack_require__(/*! base16 */ 431);
	
	var base16 = _interopRequireWildcard(_base);
	
	var _rgb2hex = __webpack_require__(/*! pure-color/convert/rgb2hex */ 596);
	
	var _rgb2hex2 = _interopRequireDefault(_rgb2hex);
	
	var _parse = __webpack_require__(/*! pure-color/parse */ 598);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	var _lodash3 = __webpack_require__(/*! lodash.flow */ 604);
	
	var _lodash4 = _interopRequireDefault(_lodash3);
	
	var _rgb = __webpack_require__(/*! color-space/rgb */ 605);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _yuv = __webpack_require__(/*! color-space/yuv */ 606);
	
	var _yuv2 = _interopRequireDefault(_yuv);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_BASE16 = base16.default;
	
	var BASE16_KEYS = (0, _keys2.default)(DEFAULT_BASE16);
	
	// we need a correcting factor, so that a dark, but not black background color
	// converts to bright enough inversed color
	var flip = function flip(x) {
	  return x < 0.25 ? 1 : x < 0.5 ? 0.9 - x : 1.1 - x;
	};
	
	var invertColor = (0, _lodash4.default)(_parse2.default, _rgb2.default.yuv, function (_ref) {
	  var _ref2 = (0, _slicedToArray3.default)(_ref, 3),
	      y = _ref2[0],
	      u = _ref2[1],
	      v = _ref2[2];
	
	  return [flip(y), u, v];
	}, _yuv2.default.rgb, _rgb2hex2.default);
	
	var invertThemeColors = function invertThemeColors(theme) {
	  return (0, _keys2.default)(theme).reduce(function (t, key) {
	    return (/^base/.test(key) ? (t[key] = invertColor(theme[key]), t) : t
	    );
	  }, {});
	};
	
	var merger = function merger(styling) {
	  return function (prevStyling) {
	    return {
	      className: [prevStyling.className, styling.className].filter(Boolean).join(' '),
	      style: (0, _extends3.default)({}, prevStyling || {}, styling || {})
	    };
	  };
	};
	
	var mergeStyling = function mergeStyling(customStyling, defaultStyling) {
	  if (customStyling === undefined) {
	    return defaultStyling;
	  }
	  if (defaultStyling === undefined) {
	    return customStyling;
	  }
	
	  var customType = typeof customStyling === 'undefined' ? 'undefined' : (0, _typeof3.default)(customStyling);
	  var defaultType = typeof defaultStyling === 'undefined' ? 'undefined' : (0, _typeof3.default)(defaultStyling);
	
	  switch (customType) {
	    case 'string':
	      switch (defaultType) {
	        case 'string':
	          return defaultStyling + ' ' + customStyling;
	        case 'object':
	          return merger({ className: customStyling, style: defaultStyling });
	        case 'function':
	          return function (styling) {
	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	              args[_key - 1] = arguments[_key];
	            }
	
	            return (0, _extends3.default)({}, defaultStyling.apply(undefined, [styling].concat(args)), {
	              className: customStyling
	            });
	          };
	      }
	    case 'object':
	      switch (defaultType) {
	        case 'string':
	          return merger({ className: defaultStyling, style: customStyling });
	        case 'object':
	          return (0, _extends3.default)({}, defaultStyling, customStyling);
	        case 'function':
	          return function (styling) {
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	              args[_key2 - 1] = arguments[_key2];
	            }
	
	            return (0, _extends3.default)({}, defaultStyling.apply(undefined, [styling].concat(args)), {
	              style: customStyling
	            });
	          };
	      }
	    case 'function':
	      switch (defaultType) {
	        case 'string':
	          return function (styling) {
	            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	              args[_key3 - 1] = arguments[_key3];
	            }
	
	            return customStyling.apply(undefined, [(0, _extends3.default)({}, styling, {
	              className: defaultStyling
	            })].concat(args));
	          };
	        case 'object':
	          return function (styling) {
	            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	              args[_key4 - 1] = arguments[_key4];
	            }
	
	            return customStyling.apply(undefined, [(0, _extends3.default)({}, styling, {
	              style: defaultStyling
	            })].concat(args));
	          };
	        case 'function':
	          return function (styling) {
	            for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	              args[_key5 - 1] = arguments[_key5];
	            }
	
	            return customStyling.apply(undefined, [defaultStyling.apply(undefined, [styling].concat(args))].concat(args));
	          };
	      }
	  }
	};
	
	var mergeStylings = function mergeStylings(customStylings, defaultStylings) {
	  var keys = (0, _keys2.default)(defaultStylings);
	  for (var key in customStylings) {
	    if (keys.indexOf(key) == -1) keys.push(key);
	  }
	
	  return keys.reduce(function (mergedStyling, key) {
	    return mergedStyling[key] = mergeStyling(customStylings[key], defaultStylings[key]), mergedStyling;
	  }, {});
	};
	
	var getStylingByKeys = function getStylingByKeys(mergedStyling, keys) {
	  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
	    args[_key6 - 2] = arguments[_key6];
	  }
	
	  if (keys === null) {
	    return mergedStyling;
	  }
	
	  if (!Array.isArray(keys)) {
	    keys = [keys];
	  }
	
	  var styles = keys.map(function (key) {
	    return mergedStyling[key];
	  }).filter(Boolean);
	
	  var props = styles.reduce(function (obj, s) {
	    if (typeof s === 'string') {
	      obj.className = [obj.className, s].filter(Boolean).join(' ');
	    } else if ((typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object') {
	      obj.style = (0, _extends3.default)({}, obj.style, s);
	    } else if (typeof s === 'function') {
	      obj = (0, _extends3.default)({}, obj, s.apply(undefined, [obj].concat(args)));
	    }
	
	    return obj;
	  }, { className: '', style: {} });
	
	  if (!props.className) {
	    delete props.className;
	  }
	
	  if ((0, _keys2.default)(props.style).length === 0) {
	    delete props.style;
	  }
	
	  return props;
	};
	
	var createStyling = exports.createStyling = (0, _lodash2.default)(function (getStylingFromBase16) {
	  for (var _len7 = arguments.length, args = Array(_len7 > 4 ? _len7 - 4 : 0), _key7 = 4; _key7 < _len7; _key7++) {
	    args[_key7 - 4] = arguments[_key7];
	  }
	
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var themeOrStyling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var invertTheme = arguments[3];
	  var _options$defaultBase = options.defaultBase16,
	      defaultBase16 = _options$defaultBase === undefined ? DEFAULT_BASE16 : _options$defaultBase,
	      _options$base16Themes = options.base16Themes,
	      base16Themes = _options$base16Themes === undefined ? null : _options$base16Themes;
	
	
	  var base16Theme = getBase16Theme(themeOrStyling, base16Themes);
	  if (base16Theme) {
	    themeOrStyling = (0, _extends3.default)({}, base16Theme, themeOrStyling);
	  }
	
	  var theme = BASE16_KEYS.reduce(function (t, key) {
	    return t[key] = themeOrStyling[key] || defaultBase16[key], t;
	  }, {});
	
	  var customStyling = (0, _keys2.default)(themeOrStyling).reduce(function (s, key) {
	    return BASE16_KEYS.indexOf(key) === -1 ? (s[key] = themeOrStyling[key], s) : s;
	  }, {});
	
	  var defaultStyling = getStylingFromBase16(invertTheme ? invertThemeColors(theme) : theme);
	
	  var mergedStyling = mergeStylings(customStyling, defaultStyling);
	
	  return (0, _lodash2.default)(getStylingByKeys, 2).apply(undefined, [mergedStyling].concat(args));
	}, 4);
	
	var getBase16Theme = exports.getBase16Theme = function getBase16Theme(theme, base16Themes) {
	  if (theme && theme.extend) {
	    theme = theme.extend;
	  }
	
	  if (typeof theme === 'string') {
	    theme = (base16Themes || {})[theme] || base16[theme];
	  }
	
	  return theme && theme.hasOwnProperty('base00') ? theme : undefined;
	};

/***/ },
/* 591 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/helpers/slicedToArray.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ 592);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ 575);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 592 */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/is-iterable.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ 593), __esModule: true };

/***/ },
/* 593 */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/is-iterable.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 528);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 484);
	module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ 594);

/***/ },
/* 594 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/core.is-iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 579)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 525)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 507);
	module.exports = __webpack_require__(/*! ./_core */ 492).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 595 */
/*!*********************************!*\
  !*** ./~/lodash.curry/index.js ***!
  \*********************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_BOUND_FLAG = 4,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64,
	    ARY_FLAG = 128,
	    REARG_FLAG = 256,
	    FLIP_FLAG = 512;
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;
	
	/** Used to associate wrap methods with their bit flags. */
	var wrapFlags = [
	  ['ary', ARY_FLAG],
	  ['bind', BIND_FLAG],
	  ['bindKey', BIND_KEY_FLAG],
	  ['curry', CURRY_FLAG],
	  ['curryRight', CURRY_RIGHT_FLAG],
	  ['flip', FLIP_FLAG],
	  ['partial', PARTIAL_FLAG],
	  ['partialRight', PARTIAL_RIGHT_FLAG],
	  ['rearg', REARG_FLAG]
	];
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to match wrap detail comments. */
	var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
	    reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	    reSplitDetails = /,? & /;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}
	
	/**
	 * Gets the number of `placeholder` occurrences in `array`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} placeholder The placeholder to search for.
	 * @returns {number} Returns the placeholder count.
	 */
	function countHolders(array, placeholder) {
	  var length = array.length,
	      result = 0;
	
	  while (length--) {
	    if (array[length] === placeholder) {
	      result++;
	    }
	  }
	  return result;
	}
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */
	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (value === placeholder || value === PLACEHOLDER) {
	      array[index] = PLACEHOLDER;
	      result[resIndex++] = index;
	    }
	  }
	  return result;
	}
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/* Used to set `toString` methods. */
	var defineProperty = (function() {
	  var func = getNative(Object, 'defineProperty'),
	      name = getNative.name;
	
	  return (name && name.length > 2) ? func : undefined;
	}());
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgs(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersLength = holders.length,
	      leftIndex = -1,
	      leftLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(leftLength + rangeLength),
	      isUncurried = !isCurried;
	
	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }
	  while (++argsIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[holders[argsIndex]] = args[argsIndex];
	    }
	  }
	  while (rangeLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }
	  return result;
	}
	
	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgsRight(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersIndex = -1,
	      holdersLength = holders.length,
	      rightIndex = -1,
	      rightLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(rangeLength + rightLength),
	      isUncurried = !isCurried;
	
	  while (++argsIndex < rangeLength) {
	    result[argsIndex] = args[argsIndex];
	  }
	  var offset = argsIndex;
	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }
	  while (++holdersIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[offset + holders[holdersIndex]] = args[argsIndex++];
	    }
	  }
	  return result;
	}
	
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	/**
	 * Creates a function that wraps `func` to invoke it with the optional `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createBind(func, bitmask, thisArg) {
	  var isBind = bitmask & BIND_FLAG,
	      Ctor = createCtor(func);
	
	  function wrapper() {
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, arguments);
	  }
	  return wrapper;
	}
	
	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCtor(Ctor) {
	  return function() {
	    // Use a `switch` statement to work with class constructors. See
	    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;
	    switch (args.length) {
	      case 0: return new Ctor;
	      case 1: return new Ctor(args[0]);
	      case 2: return new Ctor(args[0], args[1]);
	      case 3: return new Ctor(args[0], args[1], args[2]);
	      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }
	    var thisBinding = baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args);
	
	    // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.
	    return isObject(result) ? result : thisBinding;
	  };
	}
	
	/**
	 * Creates a function that wraps `func` to enable currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {number} arity The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCurry(func, bitmask, arity) {
	  var Ctor = createCtor(func);
	
	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length,
	        placeholder = getHolder(wrapper);
	
	    while (index--) {
	      args[index] = arguments[index];
	    }
	    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	      ? []
	      : replaceHolders(args, placeholder);
	
	    length -= holders.length;
	    if (length < arity) {
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, undefined,
	        args, holders, undefined, undefined, arity - length);
	    }
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return apply(fn, this, args);
	  }
	  return wrapper;
	}
	
	/**
	 * Creates a function that wraps `func` to invoke it with optional `this`
	 * binding of `thisArg`, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided
	 *  to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & ARY_FLAG,
	      isBind = bitmask & BIND_FLAG,
	      isBindKey = bitmask & BIND_KEY_FLAG,
	      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
	      isFlip = bitmask & FLIP_FLAG,
	      Ctor = isBindKey ? undefined : createCtor(func);
	
	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length;
	
	    while (index--) {
	      args[index] = arguments[index];
	    }
	    if (isCurried) {
	      var placeholder = getHolder(wrapper),
	          holdersCount = countHolders(args, placeholder);
	    }
	    if (partials) {
	      args = composeArgs(args, partials, holders, isCurried);
	    }
	    if (partialsRight) {
	      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	    }
	    length -= holdersCount;
	    if (isCurried && length < arity) {
	      var newHolders = replaceHolders(args, placeholder);
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	        args, newHolders, argPos, ary, arity - length
	      );
	    }
	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;
	
	    length = args.length;
	    if (argPos) {
	      args = reorder(args, argPos);
	    } else if (isFlip && length > 1) {
	      args.reverse();
	    }
	    if (isAry && ary < length) {
	      args.length = ary;
	    }
	    if (this && this !== root && this instanceof wrapper) {
	      fn = Ctor || createCtor(fn);
	    }
	    return fn.apply(thisBinding, args);
	  }
	  return wrapper;
	}
	
	/**
	 * Creates a function that wraps `func` to invoke it with the `this` binding
	 * of `thisArg` and `partials` prepended to the arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to
	 *  the new function.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createPartial(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & BIND_FLAG,
	      Ctor = createCtor(func);
	
	  function wrapper() {
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength),
	        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	
	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }
	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }
	    return apply(fn, isBind ? thisArg : this, args);
	  }
	  return wrapper;
	}
	
	/**
	 * Creates a function that wraps `func` to continue currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {Function} wrapFunc The function to create the `func` wrapper.
	 * @param {*} placeholder The placeholder value.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	  var isCurry = bitmask & CURRY_FLAG,
	      newHolders = isCurry ? holders : undefined,
	      newHoldersRight = isCurry ? undefined : holders,
	      newPartials = isCurry ? partials : undefined,
	      newPartialsRight = isCurry ? undefined : partials;
	
	  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
	
	  if (!(bitmask & CURRY_BOUND_FLAG)) {
	    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	  }
	
	  var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
	  result.placeholder = placeholder;
	  return setWrapToString(result, func, bitmask);
	}
	
	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - `_.bind`
	 *     2 - `_.bindKey`
	 *     4 - `_.curry` or `_.curryRight` of a bound function
	 *     8 - `_.curry`
	 *    16 - `_.curryRight`
	 *    32 - `_.partial`
	 *    64 - `_.partialRight`
	 *   128 - `_.rearg`
	 *   256 - `_.ary`
	 *   512 - `_.flip`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & BIND_KEY_FLAG;
	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var length = partials ? partials.length : 0;
	  if (!length) {
	    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	    partials = holders = undefined;
	  }
	  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	  arity = arity === undefined ? arity : toInteger(arity);
	  length -= holders ? holders.length : 0;
	
	  if (bitmask & PARTIAL_RIGHT_FLAG) {
	    var partialsRight = partials,
	        holdersRight = holders;
	
	    partials = holders = undefined;
	  }
	
	  var newData = [
	    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	    argPos, ary, arity
	  ];
	
	  func = newData[0];
	  bitmask = newData[1];
	  thisArg = newData[2];
	  partials = newData[3];
	  holders = newData[4];
	  arity = newData[9] = newData[9] == null
	    ? (isBindKey ? 0 : func.length)
	    : nativeMax(newData[9] - length, 0);
	
	  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
	    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
	  }
	  if (!bitmask || bitmask == BIND_FLAG) {
	    var result = createBind(func, bitmask, thisArg);
	  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
	    result = createCurry(func, bitmask, arity);
	  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
	    result = createPartial(func, bitmask, thisArg, partials);
	  } else {
	    result = createHybrid.apply(undefined, newData);
	  }
	  return setWrapToString(result, func, bitmask);
	}
	
	/**
	 * Gets the argument placeholder value for `func`.
	 *
	 * @private
	 * @param {Function} func The function to inspect.
	 * @returns {*} Returns the placeholder value.
	 */
	function getHolder(func) {
	  var object = func;
	  return object.placeholder;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Extracts wrapper details from the `source` body comment.
	 *
	 * @private
	 * @param {string} source The source to inspect.
	 * @returns {Array} Returns the wrapper details.
	 */
	function getWrapDetails(source) {
	  var match = source.match(reWrapDetails);
	  return match ? match[1].split(reSplitDetails) : [];
	}
	
	/**
	 * Inserts wrapper `details` in a comment at the top of the `source` body.
	 *
	 * @private
	 * @param {string} source The source to modify.
	 * @returns {Array} details The details to insert.
	 * @returns {string} Returns the modified source.
	 */
	function insertWrapDetails(source, details) {
	  var length = details.length,
	      lastIndex = length - 1;
	
	  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	  details = details.join(length > 2 ? ', ' : ' ');
	  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */
	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = copyArray(array);
	
	  while (length--) {
	    var index = indexes[length];
	    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }
	  return array;
	}
	
	/**
	 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	 * with wrapper details in a comment at the top of the source body.
	 *
	 * @private
	 * @param {Function} wrapper The function to modify.
	 * @param {Function} reference The reference function.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Function} Returns `wrapper`.
	 */
	var setWrapToString = !defineProperty ? identity : function(wrapper, reference, bitmask) {
	  var source = (reference + '');
	  return defineProperty(wrapper, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
	  });
	};
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Updates wrapper `details` based on `bitmask` flags.
	 *
	 * @private
	 * @returns {Array} details The details to modify.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Array} Returns `details`.
	 */
	function updateWrapDetails(details, bitmask) {
	  arrayEach(wrapFlags, function(pair) {
	    var value = '_.' + pair[0];
	    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	      details.push(value);
	    }
	  });
	  return details.sort();
	}
	
	/**
	 * Creates a function that accepts arguments of `func` and either invokes
	 * `func` returning its result, if at least `arity` number of arguments have
	 * been provided, or returns a function that accepts the remaining `func`
	 * arguments, and so on. The arity of `func` may be specified if `func.length`
	 * is not sufficient.
	 *
	 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of curried functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Function
	 * @param {Function} func The function to curry.
	 * @param {number} [arity=func.length] The arity of `func`.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new curried function.
	 * @example
	 *
	 * var abc = function(a, b, c) {
	 *   return [a, b, c];
	 * };
	 *
	 * var curried = _.curry(abc);
	 *
	 * curried(1)(2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2, 3);
	 * // => [1, 2, 3]
	 *
	 * // Curried with placeholders.
	 * curried(1)(_, 3)(2);
	 * // => [1, 2, 3]
	 */
	function curry(func, arity, guard) {
	  arity = guard ? undefined : arity;
	  var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	  result.placeholder = curry.placeholder;
	  return result;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	// Assign default placeholders.
	curry.placeholder = {};
	
	module.exports = curry;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 596 */
/*!*****************************************!*\
  !*** ./~/pure-color/convert/rgb2hex.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var clamp = __webpack_require__(/*! ../util/clamp */ 597);
	
	function componentToHex(c) {
	  var value = Math.round(clamp(c, 0, 255));
	  var hex   = value.toString(16);
	
	  return hex.length == 1 ? "0" + hex : hex;
	}
	
	function rgb2hex(rgb) {
	  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
	}
	
	module.exports = rgb2hex;

/***/ },
/* 597 */
/*!************************************!*\
  !*** ./~/pure-color/util/clamp.js ***!
  \************************************/
/***/ function(module, exports) {

	function clamp(val, min, max) {
	  return Math.min(Math.max(val, min), max);
	}
	
	module.exports = clamp;

/***/ },
/* 598 */
/*!*************************************!*\
  !*** ./~/pure-color/parse/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var hsl = __webpack_require__(/*! ./hsl */ 599);
	var hex = __webpack_require__(/*! ./hex */ 601);
	var rgb = __webpack_require__(/*! ./rgb */ 602);
	var hsl2rgb = __webpack_require__(/*! ../convert/hsl2rgb */ 603);
	
	function hsl2rgbParse(color) {
	  var h = hsl(color);
	  var r = hsl2rgb(h);
	
	  // handle alpha since hsl2rgb doesn't know (or care!) about it
	  if(h.length === 4) {
	    r.push(h[3]);
	  }
	
	  return r;
	}
	
	var space2parser = {
	  "#" : hex,
	  "hsl" : hsl2rgbParse,
	  "rgb" : rgb
	};
	
	function parse(color) {
	  for(var scheme in space2parser) {
	    if(color.indexOf(scheme) === 0) {
	      return space2parser[scheme](color);
	    }
	  }
	}
	
	parse.rgb = rgb;
	parse.hsl = hsl;
	parse.hex = hex;
	
	module.exports = parse;

/***/ },
/* 599 */
/*!***********************************!*\
  !*** ./~/pure-color/parse/hsl.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var extractComponents = __webpack_require__(/*! ./extractComponents */ 600);
	var clamp = __webpack_require__(/*! ../util/clamp */ 597);
	
	function parseHslComponent(component, i) {
	  component = parseFloat(component);
	
	  switch(i) {
	    case 0:
	      return clamp(component, 0, 360);
	    case 1:
	    case 2:
	      return clamp(component, 0, 100);
	    case 3:
	      return clamp(component, 0, 1);
	  }
	}
	
	function hsl(color) {
	  return extractComponents(color).map(parseHslComponent);
	}
	
	module.exports = hsl;

/***/ },
/* 600 */
/*!*************************************************!*\
  !*** ./~/pure-color/parse/extractComponents.js ***!
  \*************************************************/
/***/ function(module, exports) {

	var component = /-?\d+(\.\d+)?%?/g;
	function extractComponents(color) {
	  return color.match(component);
	}
	
	module.exports = extractComponents;

/***/ },
/* 601 */
/*!***********************************!*\
  !*** ./~/pure-color/parse/hex.js ***!
  \***********************************/
/***/ function(module, exports) {

	function hex(hex) {
	  if (hex.length === 4) {
	    hex = '#' + hex.charAt(1) + hex.charAt(1) +
	      hex.charAt(2) + hex.charAt(2) + 
	      hex.charAt(3) + hex.charAt(3);
	  }
	  return [
	    parseInt(hex.substring(1,3), 16),
	    parseInt(hex.substring(3,5), 16),
	    parseInt(hex.substring(5,7), 16)
	  ];
	}
	
	module.exports = hex;

/***/ },
/* 602 */
/*!***********************************!*\
  !*** ./~/pure-color/parse/rgb.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var extractComponents = __webpack_require__(/*! ./extractComponents */ 600);
	var clamp = __webpack_require__(/*! ../util/clamp */ 597);
	
	function parseRgbComponent(component, i) {
	  if (i < 3) {
	    if (component.indexOf('%') != -1) {
	      return Math.round(255 * clamp(parseInt(component, 10), 0, 100)/100);
	    } else {
	      return clamp(parseInt(component, 10), 0, 255);
	    }
	  } else {
	    return clamp(parseFloat(component), 0, 1);
	  } 
	}
	
	function rgb(color) {
	  return extractComponents(color).map(parseRgbComponent);
	}
	
	module.exports = rgb;

/***/ },
/* 603 */
/*!*****************************************!*\
  !*** ./~/pure-color/convert/hsl2rgb.js ***!
  \*****************************************/
/***/ function(module, exports) {

	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360,
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      t1, t2, t3, rgb, val;
	
	  if (s == 0) {
	    val = l * 255;
	    return [val, val, val];
	  }
	
	  if (l < 0.5)
	    t2 = l * (1 + s);
	  else
	    t2 = l + s - l * s;
	  t1 = 2 * l - t2;
	
	  rgb = [0, 0, 0];
	  for (var i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * - (i - 1);
	    t3 < 0 && t3++;
	    t3 > 1 && t3--;
	
	    if (6 * t3 < 1)
	      val = t1 + (t2 - t1) * 6 * t3;
	    else if (2 * t3 < 1)
	      val = t2;
	    else if (3 * t3 < 2)
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    else
	      val = t1;
	
	    rgb[i] = val * 255;
	  }
	
	  return rgb;
	}
	
	module.exports = hsl2rgb;

/***/ },
/* 604 */
/*!********************************!*\
  !*** ./~/lodash.flow/index.js ***!
  \********************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var Symbol = root.Symbol,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	/**
	 * Creates a `_.flow` or `_.flowRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new flow function.
	 */
	function createFlow(fromRight) {
	  return baseRest(function(funcs) {
	    funcs = baseFlatten(funcs, 1);
	
	    var length = funcs.length,
	        index = length;
	
	    if (fromRight) {
	      funcs.reverse();
	    }
	    while (index--) {
	      if (typeof funcs[index] != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	    }
	    return function() {
	      var index = 0,
	          result = length ? funcs[index].apply(this, arguments) : arguments[0];
	
	      while (++index < length) {
	        result = funcs[index].call(this, result);
	      }
	      return result;
	    };
	  });
	}
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Creates a function that returns the result of invoking the given functions
	 * with the `this` binding of the created function, where each successive
	 * invocation is supplied the return value of the previous.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Util
	 * @param {...(Function|Function[])} [funcs] The functions to invoke.
	 * @returns {Function} Returns the new composite function.
	 * @see _.flowRight
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var addSquare = _.flow([_.add, square]);
	 * addSquare(1, 2);
	 * // => 9
	 */
	var flow = createFlow();
	
	module.exports = flow;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 605 */
/*!******************************!*\
  !*** ./~/color-space/rgb.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * RGB space.
	 *
	 * @module  color-space/rgb
	 */
	'use strict'
	
	module.exports = {
		name: 'rgb',
		min: [0,0,0],
		max: [255,255,255],
		channel: ['red', 'green', 'blue'],
		alias: ['RGB']
	};


/***/ },
/* 606 */
/*!******************************!*\
  !*** ./~/color-space/yuv.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * YUV https://en.wikipedia.org/?title=YUV
	 *
	 * @module  color-space/yuv
	 */
	'use strict'
	
	var rgb = __webpack_require__(/*! ./rgb */ 605);
	
	var yuv = module.exports = {
		name: 'yuv',
		min: [0,-0.5,-0.5],
		max: [1, 0.5, 0.5],
		channel: ['Y','U','V'],
		alias: ['YUV', 'EBU'],
	
	};
	
	yuv.rgb = function(yuv) {
		var y = yuv[0],
			u = yuv[1],
			v = yuv[2],
			r, g, b;
	
		r = (y * 1) + (u *  0) + (v * 1.13983);
		g = (y * 1) + (u * -0.39465) + (v * -0.58060);
		b = (y * 1) + (u * 2.02311) + (v * 0);
	
		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);
	
		return [r * 255, g * 255, b * 255];
	}
	
	
	//extend rgb
	rgb.yuv = function(rgb) {
		var r = rgb[0] / 255,
			g = rgb[1] / 255,
			b = rgb[2] / 255;
	
		var y = (r * 0.299) + (g * 0.587) + (b * 0.114);
		var u = (r * -0.14713) + (g * -0.28886) + (b * 0.436);
		var v = (r * 0.615) + (g * -0.51499) + (b * -0.10001);
	
		return [y, u, v];
	};


/***/ },
/* 607 */
/*!*******************************************************************!*\
  !*** ./~/redux-devtools-log-monitor/lib/LogMonitorEntryAction.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonTree = __webpack_require__(/*! react-json-tree */ 477);
	
	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  actionBar: {
	    paddingTop: 8,
	    paddingBottom: 7,
	    paddingLeft: 16
	  },
	  payload: {
	    margin: 0,
	    paddingLeft: 16,
	    overflow: 'auto'
	  }
	};
	
	var LogMonitorAction = function (_Component) {
	  _inherits(LogMonitorAction, _Component);
	
	  function LogMonitorAction(props) {
	    _classCallCheck(this, LogMonitorAction);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.shouldExpandNode = _this.shouldExpandNode.bind(_this);
	    return _this;
	  }
	
	  LogMonitorAction.prototype.renderPayload = function renderPayload(payload) {
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.payload, {
	          backgroundColor: this.props.theme.base00
	        }) },
	      Object.keys(payload).length > 0 ? _react2.default.createElement(_reactJsonTree2.default, { theme: this.props.theme,
	        invertTheme: false,
	        keyPath: ['action'],
	        data: payload,
	        shouldExpandNode: this.shouldExpandNode }) : ''
	    );
	  };
	
	  LogMonitorAction.prototype.shouldExpandNode = function shouldExpandNode(keyName, data, level) {
	    return this.props.expandActionRoot && level === 0;
	  };
	
	  LogMonitorAction.prototype.render = function render() {
	    var _props$action = this.props.action;
	    var type = _props$action.type;
	
	    var payload = _objectWithoutProperties(_props$action, ['type']);
	
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({
	          backgroundColor: this.props.theme.base02,
	          color: this.props.theme.base06
	        }, this.props.style) },
	      _react2.default.createElement(
	        'div',
	        { style: styles.actionBar,
	          onClick: this.props.onClick },
	        type !== null && type.toString()
	      ),
	      !this.props.collapsed ? this.renderPayload(payload) : ''
	    );
	  };
	
	  return LogMonitorAction;
	}(_react.Component);
	
	exports.default = LogMonitorAction;

/***/ },
/* 608 */
/*!*****************************************************************!*\
  !*** ./~/redux-devtools-log-monitor/~/lodash.debounce/index.js ***!
  \*****************************************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = debounce;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 609 */
/*!****************************************************!*\
  !*** ./~/redux-devtools-dock-monitor/lib/index.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _DockMonitor = __webpack_require__(/*! ./DockMonitor */ 610);
	
	var _DockMonitor2 = _interopRequireDefault(_DockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _DockMonitor2.default;

/***/ },
/* 610 */
/*!**********************************************************!*\
  !*** ./~/redux-devtools-dock-monitor/lib/DockMonitor.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDock = __webpack_require__(/*! react-dock */ 611);
	
	var _reactDock2 = _interopRequireDefault(_reactDock);
	
	var _constants = __webpack_require__(/*! ./constants */ 640);
	
	var _actions = __webpack_require__(/*! ./actions */ 641);
	
	var _reducers = __webpack_require__(/*! ./reducers */ 642);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _parseKey = __webpack_require__(/*! parse-key */ 643);
	
	var _parseKey2 = _interopRequireDefault(_parseKey);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DockMonitor = function (_Component) {
	  _inherits(DockMonitor, _Component);
	
	  function DockMonitor(props) {
	    _classCallCheck(this, DockMonitor);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.handleSizeChange = _this.handleSizeChange.bind(_this);
	
	    var childrenCount = _react.Children.count(props.children);
	    if (childrenCount === 0) {
	      console.error('<DockMonitor> requires at least one monitor inside. ' + 'Why don’t you try <LogMonitor>? You can get it at ' + 'https://github.com/gaearon/redux-devtools-log-monitor.');
	    } else if (childrenCount > 1 && !props.changeMonitorKey) {
	      console.error('You specified multiple monitors inside <DockMonitor> ' + 'but did not provide `changeMonitorKey` prop to change them. ' + 'Try specifying <DockMonitor changeMonitorKey="ctrl-m" /> ' + 'and then press Ctrl-M.');
	    }
	    return _this;
	  }
	
	  DockMonitor.prototype.componentDidMount = function componentDidMount() {
	    window.addEventListener('keydown', this.handleKeyDown);
	  };
	
	  DockMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('keydown', this.handleKeyDown);
	  };
	
	  DockMonitor.prototype.matchesKey = function matchesKey(key, event) {
	    if (!key) {
	      return false;
	    }
	
	    var charCode = event.keyCode || event.which;
	    var char = String.fromCharCode(charCode);
	    return key.name.toUpperCase() === char.toUpperCase() && key.alt === event.altKey && key.ctrl === event.ctrlKey && key.meta === event.metaKey && key.shift === event.shiftKey;
	  };
	
	  DockMonitor.prototype.handleKeyDown = function handleKeyDown(e) {
	    // Ignore regular keys when focused on a field
	    // and no modifiers are active.
	    if (!e.ctrlKey && !e.metaKey && !e.altKey && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
	      return;
	    }
	
	    var visibilityKey = (0, _parseKey2.default)(this.props.toggleVisibilityKey);
	    var positionKey = (0, _parseKey2.default)(this.props.changePositionKey);
	
	    var monitorKey = void 0;
	    if (this.props.changeMonitorKey) {
	      monitorKey = (0, _parseKey2.default)(this.props.changeMonitorKey);
	    }
	
	    if (this.matchesKey(visibilityKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.toggleVisibility)());
	    } else if (this.matchesKey(positionKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.changePosition)());
	    } else if (this.matchesKey(monitorKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.changeMonitor)());
	    }
	  };
	
	  DockMonitor.prototype.handleSizeChange = function handleSizeChange(requestedSize) {
	    this.props.dispatch((0, _actions.changeSize)(requestedSize));
	  };
	
	  DockMonitor.prototype.renderChild = function renderChild(child, index, otherProps) {
	    var monitorState = this.props.monitorState;
	    var childMonitorIndex = monitorState.childMonitorIndex;
	    var childMonitorStates = monitorState.childMonitorStates;
	
	
	    if (index !== childMonitorIndex) {
	      return null;
	    }
	
	    return (0, _react.cloneElement)(child, _extends({
	      monitorState: childMonitorStates[index]
	    }, otherProps));
	  };
	
	  DockMonitor.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props;
	    var monitorState = _props.monitorState;
	    var children = _props.children;
	    var fluid = _props.fluid;
	
	    var rest = _objectWithoutProperties(_props, ['monitorState', 'children', 'fluid']);
	
	    var position = monitorState.position;
	    var isVisible = monitorState.isVisible;
	    var size = monitorState.size;
	
	
	    return _react2.default.createElement(
	      _reactDock2.default,
	      { position: position,
	        isVisible: isVisible,
	        size: size,
	        fluid: fluid,
	        onSizeChange: this.handleSizeChange,
	        dimMode: 'none' },
	      _react.Children.map(children, function (child, index) {
	        return _this2.renderChild(child, index, rest);
	      })
	    );
	  };
	
	  return DockMonitor;
	}(_react.Component);
	
	DockMonitor.update = _reducers2.default;
	DockMonitor.propTypes = {
	  defaultPosition: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	  defaultIsVisible: _react.PropTypes.bool.isRequired,
	  defaultSize: _react.PropTypes.number.isRequired,
	  toggleVisibilityKey: _react.PropTypes.string.isRequired,
	  changePositionKey: _react.PropTypes.string.isRequired,
	  changeMonitorKey: _react.PropTypes.string,
	  fluid: _react.PropTypes.bool,
	
	  dispatch: _react.PropTypes.func,
	  monitorState: _react.PropTypes.shape({
	    position: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	    size: _react.PropTypes.number.isRequired,
	    isVisible: _react.PropTypes.bool.isRequired,
	    childMonitorState: _react.PropTypes.any
	  })
	};
	DockMonitor.defaultProps = {
	  defaultIsVisible: true,
	  defaultPosition: 'right',
	  defaultSize: 0.3,
	  fluid: true
	};
	exports.default = DockMonitor;

/***/ },
/* 611 */
/*!***********************************!*\
  !*** ./~/react-dock/lib/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 612)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _Dock = __webpack_require__(/*! ./Dock */ 614);
	
	var _Dock2 = _interopRequireDefault(_Dock);
	
	exports['default'] = _Dock2['default'];
	module.exports = exports['default'];

/***/ },
/* 612 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-default.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./interopRequireDefault.js */ 613);

/***/ },
/* 613 */
/*!**********************************************************!*\
  !*** ./~/babel-runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	};

/***/ },
/* 614 */
/*!**********************************!*\
  !*** ./~/react-dock/lib/Dock.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 615)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 549)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 622)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 627)['default'];
	
	var _extends = __webpack_require__(/*! babel-runtime/helpers/extends */ 557)['default'];
	
	var _toConsumableArray = __webpack_require__(/*! babel-runtime/helpers/to-consumable-array */ 628)['default'];
	
	var _Object$keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 562)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 612)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashDebounce = __webpack_require__(/*! lodash.debounce */ 637);
	
	var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);
	
	var _objectAssign = __webpack_require__(/*! object-assign */ 4);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _autoprefix = __webpack_require__(/*! ./autoprefix */ 639);
	
	var _autoprefix2 = _interopRequireDefault(_autoprefix);
	
	function autoprefixes(styles) {
	  return _Object$keys(styles).reduce(function (obj, key) {
	    return (obj[key] = (0, _autoprefix2['default'])(styles[key]), obj);
	  }, {});
	}
	
	var styles = autoprefixes({
	  wrapper: {
	    position: 'fixed',
	    width: 0,
	    height: 0,
	    top: 0,
	    left: 0
	  },
	
	  dim: {
	    position: 'fixed',
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0,
	    zIndex: 0,
	    background: 'rgba(0, 0, 0, 0.2)',
	    opacity: 1
	  },
	
	  dimAppear: {
	    opacity: 0
	  },
	
	  dimTransparent: {
	    pointerEvents: 'none'
	  },
	
	  dimHidden: {
	    opacity: 0
	  },
	
	  dock: {
	    position: 'fixed',
	    zIndex: 1,
	    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
	    background: 'white',
	    left: 0,
	    top: 0,
	    width: '100%',
	    height: '100%'
	  },
	
	  dockHidden: {
	    opacity: 0
	  },
	
	  dockResizing: {
	    transition: 'none'
	  },
	
	  dockContent: {
	    width: '100%',
	    height: '100%',
	    overflow: 'auto'
	  },
	
	  resizer: {
	    position: 'absolute',
	    zIndex: 2,
	    opacity: 0
	  }
	});
	
	function getTransitions(duration) {
	  return ['left', 'top', 'width', 'height'].map(function (p) {
	    return p + ' ' + duration / 1000 + 's ease-out';
	  });
	}
	
	function getDockStyles(_ref, _ref2) {
	  var fluid = _ref.fluid;
	  var dockStyle = _ref.dockStyle;
	  var dockHiddenStyle = _ref.dockHiddenStyle;
	  var duration = _ref.duration;
	  var position = _ref.position;
	  var isVisible = _ref.isVisible;
	  var size = _ref2.size;
	  var isResizing = _ref2.isResizing;
	  var fullWidth = _ref2.fullWidth;
	  var fullHeight = _ref2.fullHeight;
	
	  var posStyle = undefined;
	  var absSize = fluid ? size * 100 + '%' : size + 'px';
	
	  function getRestSize(fullSize) {
	    return fluid ? 100 - size * 100 + '%' : fullSize - size + 'px';
	  }
	
	  switch (position) {
	    case 'left':
	      posStyle = {
	        width: absSize,
	        left: isVisible ? 0 : '-' + absSize
	      };
	      break;
	    case 'right':
	      posStyle = {
	        left: isVisible ? getRestSize(fullWidth) : fullWidth,
	        width: absSize
	      };
	      break;
	    case 'top':
	      posStyle = {
	        top: isVisible ? 0 : '-' + absSize,
	        height: absSize
	      };
	      break;
	    case 'bottom':
	      posStyle = {
	        top: isVisible ? getRestSize(fullHeight) : fullHeight,
	        height: absSize
	      };
	      break;
	  }
	
	  var transitions = getTransitions(duration);
	
	  return [styles.dock, (0, _autoprefix2['default'])({
	    transition: [].concat(_toConsumableArray(transitions), [!isVisible && 'opacity 0.01s linear ' + duration / 1000 + 's']).filter(function (t) {
	      return t;
	    }).join(',')
	  }), dockStyle, (0, _autoprefix2['default'])(posStyle), isResizing && styles.dockResizing, !isVisible && styles.dockHidden, !isVisible && dockHiddenStyle];
	}
	
	function getDimStyles(_ref3, _ref4) {
	  var dimMode = _ref3.dimMode;
	  var dimStyle = _ref3.dimStyle;
	  var duration = _ref3.duration;
	  var isVisible = _ref3.isVisible;
	  var isTransitionStarted = _ref4.isTransitionStarted;
	
	  return [styles.dim, (0, _autoprefix2['default'])({
	    transition: 'opacity ' + duration / 1000 + 's ease-out'
	  }), dimStyle, dimMode === 'transparent' && styles.dimTransparent, !isVisible && styles.dimHidden, isTransitionStarted && isVisible && styles.dimAppear, isTransitionStarted && !isVisible && styles.dimDisappear];
	}
	
	function getResizerStyles(position) {
	  var resizerStyle = undefined;
	  var size = 10;
	
	  switch (position) {
	    case 'left':
	      resizerStyle = {
	        right: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'right':
	      resizerStyle = {
	        left: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'top':
	      resizerStyle = {
	        bottom: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	    case 'bottom':
	      resizerStyle = {
	        top: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	  }
	
	  return [styles.resizer, (0, _autoprefix2['default'])(resizerStyle)];
	}
	
	function getFullSize(position, fullWidth, fullHeight) {
	  return position === 'left' || position === 'right' ? fullWidth : fullHeight;
	}
	
	var Dock = (function (_Component) {
	  _inherits(Dock, _Component);
	
	  function Dock(props) {
	    var _this = this;
	
	    _classCallCheck(this, Dock);
	
	    _get(Object.getPrototypeOf(Dock.prototype), 'constructor', this).call(this, props);
	
	    this.transitionEnd = function () {
	      _this.setState({ isTransitionStarted: false });
	    };
	
	    this.hideDim = function () {
	      if (!_this.props.isVisible) {
	        _this.setState({ isDimHidden: true });
	      }
	    };
	
	    this.handleDimClick = function () {
	      if (_this.props.dimMode === 'opaque') {
	        _this.props.onVisibleChange && _this.props.onVisibleChange(false);
	      }
	    };
	
	    this.handleResize = function () {
	      if (window.requestAnimationFrame) {
	        window.requestAnimationFrame(_this.updateWindowSize.bind(_this, true));
	      } else {
	        _this.updateWindowSize(true);
	      }
	    };
	
	    this.updateWindowSize = function (windowResize) {
	      var sizeState = {
	        fullWidth: window.innerWidth,
	        fullHeight: window.innerHeight
	      };
	
	      if (windowResize) {
	        _this.setState(_extends({}, sizeState, {
	          isResizing: true,
	          isWindowResizing: windowResize
	        }));
	
	        _this.debouncedUpdateWindowSizeEnd();
	      } else {
	        _this.setState(sizeState);
	      }
	    };
	
	    this.updateWindowSizeEnd = function () {
	      _this.setState({
	        isResizing: false,
	        isWindowResizing: false
	      });
	    };
	
	    this.debouncedUpdateWindowSizeEnd = (0, _lodashDebounce2['default'])(this.updateWindowSizeEnd, 30);
	
	    this.handleWrapperLeave = function () {
	      _this.setState({ isResizing: false });
	    };
	
	    this.handleMouseDown = function () {
	      _this.setState({ isResizing: true });
	    };
	
	    this.handleMouseUp = function () {
	      _this.setState({ isResizing: false });
	    };
	
	    this.handleMouseMove = function (e) {
	      if (!_this.state.isResizing || _this.state.isWindowResizing) return;
	      e.preventDefault();
	
	      var _props = _this.props;
	      var position = _props.position;
	      var fluid = _props.fluid;
	      var _state = _this.state;
	      var fullWidth = _state.fullWidth;
	      var fullHeight = _state.fullHeight;
	      var isControlled = _state.isControlled;
	      var x = e.clientX;
	      var y = e.clientY;
	
	      var size = undefined;
	
	      switch (position) {
	        case 'left':
	          size = fluid ? x / fullWidth : x;
	          break;
	        case 'right':
	          size = fluid ? (fullWidth - x) / fullWidth : fullWidth - x;
	          break;
	        case 'top':
	          size = fluid ? y / fullHeight : y;
	          break;
	        case 'bottom':
	          size = fluid ? (fullHeight - y) / fullHeight : fullHeight - y;
	          break;
	      }
	
	      _this.props.onSizeChange && _this.props.onSizeChange(size);
	
	      if (!isControlled) {
	        _this.setState({ size: size });
	      }
	    };
	
	    this.state = {
	      isControlled: typeof props.size !== 'undefined',
	      size: props.size || props.defaultSize,
	      isDimHidden: !props.isVisible,
	      fullWidth: typeof window !== 'undefined' && window.innerWidth,
	      fullHeight: typeof window !== 'undefined' && window.innerHeight,
	      isTransitionStarted: false,
	      isWindowResizing: false
	    };
	  }
	
	  _createClass(Dock, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('mouseup', this.handleMouseUp);
	      window.addEventListener('mousemove', this.handleMouseMove);
	      window.addEventListener('resize', this.handleResize);
	
	      if (!window.fullWidth) {
	        this.updateWindowSize();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('mouseup', this.handleMouseUp);
	      window.removeEventListener('mousemove', this.handleMouseMove);
	      window.removeEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var isControlled = typeof nextProps.size !== 'undefined';
	
	      this.setState({ isControlled: isControlled });
	
	      if (isControlled && this.props.size !== nextProps.size) {
	        this.setState({ size: nextProps.size });
	      } else if (this.props.fluid !== nextProps.fluid) {
	        this.updateSize(nextProps);
	      }
	
	      if (this.props.isVisible !== nextProps.isVisible) {
	        this.setState({
	          isTransitionStarted: true
	        });
	      }
	    }
	  }, {
	    key: 'updateSize',
	    value: function updateSize(props) {
	      var _state2 = this.state;
	      var fullWidth = _state2.fullWidth;
	      var fullHeight = _state2.fullHeight;
	
	      this.setState({
	        size: props.fluid ? this.state.size / getFullSize(props.position, fullWidth, fullHeight) : getFullSize(props.position, fullWidth, fullHeight) * this.state.size
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _this2 = this;
	
	      if (this.props.isVisible !== prevProps.isVisible) {
	        if (!this.props.isVisible) {
	          window.setTimeout(function () {
	            return _this2.hideDim();
	          }, this.props.duration);
	        } else {
	          this.setState({ isDimHidden: false });
	        }
	
	        window.setTimeout(function () {
	          return _this2.setState({ isTransitionStarted: false });
	        }, 0);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var children = _props2.children;
	      var zIndex = _props2.zIndex;
	      var dimMode = _props2.dimMode;
	      var position = _props2.position;
	      var isVisible = _props2.isVisible;
	      var _state3 = this.state;
	      var isResizing = _state3.isResizing;
	      var size = _state3.size;
	      var isDimHidden = _state3.isDimHidden;
	
	      var dimStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDimStyles(this.props, this.state))));
	      var dockStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDockStyles(this.props, this.state))));
	      var resizerStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getResizerStyles(position))));
	
	      return _react2['default'].createElement(
	        'div',
	        { style: (0, _objectAssign2['default'])({}, styles.wrapper, { zIndex: zIndex }) },
	        dimMode !== 'none' && !isDimHidden && _react2['default'].createElement('div', { style: dimStyles, onClick: this.handleDimClick }),
	        _react2['default'].createElement(
	          'div',
	          { style: dockStyles },
	          _react2['default'].createElement('div', { style: resizerStyles,
	            onMouseDown: this.handleMouseDown }),
	          _react2['default'].createElement(
	            'div',
	            { style: styles.dockContent },
	            typeof children === 'function' ? children({
	              position: position,
	              isResizing: isResizing,
	              size: size,
	              isVisible: isVisible
	            }) : children
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      position: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
	      zIndex: _react.PropTypes.number,
	      fluid: _react.PropTypes.bool,
	      size: _react.PropTypes.number,
	      defaultSize: _react.PropTypes.number,
	      dimMode: _react.PropTypes.oneOf(['none', 'transparent', 'opaque']),
	      isVisible: _react.PropTypes.bool,
	      onVisibleChange: _react.PropTypes.func,
	      onSizeChange: _react.PropTypes.func,
	      dimStyle: _react.PropTypes.object,
	      dockStyle: _react.PropTypes.object,
	      duration: _react.PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      position: 'left',
	      zIndex: 99999999,
	      fluid: true,
	      defaultSize: 0.3,
	      dimMode: 'opaque',
	      duration: 200
	    },
	    enumerable: true
	  }]);
	
	  return Dock;
	})(_react.Component);
	
	exports['default'] = Dock;
	module.exports = exports['default'];

/***/ },
/* 615 */
/*!****************************************!*\
  !*** ./~/babel-runtime/helpers/get.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ 616);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ 619);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);
	
	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};

/***/ },
/* 616 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-prototype-of.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ 617), __esModule: true };

/***/ },
/* 617 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/fn/object/get-prototype-of.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ 618);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 492).Object.getPrototypeOf;

/***/ },
/* 618 */
/*!******************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(/*! ./_to-object */ 527)
	  , $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 526);
	
	__webpack_require__(/*! ./_object-sap */ 565)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 619 */
/*!***********************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 620), __esModule: true };

/***/ },
/* 620 */
/*!********************************************************************!*\
  !*** ./~/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 621);
	var $Object = __webpack_require__(/*! ../../modules/_core */ 492).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 621 */
/*!*****************************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(/*! ./_to-iobject */ 513)
	  , $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 545).f;
	
	__webpack_require__(/*! ./_object-sap */ 565)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 622 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/helpers/create-class.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./createClass.js */ 623);

/***/ },
/* 623 */
/*!************************************************!*\
  !*** ./~/babel-runtime/helpers/createClass.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 624);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 624 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 625), __esModule: true };

/***/ },
/* 625 */
/*!********************************************************!*\
  !*** ./~/core-js/library/fn/object/define-property.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.define-property */ 626);
	var $Object = __webpack_require__(/*! ../../modules/_core */ 492).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 626 */
/*!*****************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.define-property.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 490);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 500), 'Object', {defineProperty: __webpack_require__(/*! ./_object-dp */ 496).f});

/***/ },
/* 627 */
/*!*****************************************************!*\
  !*** ./~/babel-runtime/helpers/class-call-check.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./classCallCheck.js */ 479);

/***/ },
/* 628 */
/*!********************************************************!*\
  !*** ./~/babel-runtime/helpers/to-consumable-array.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./toConsumableArray.js */ 629);

/***/ },
/* 629 */
/*!******************************************************!*\
  !*** ./~/babel-runtime/helpers/toConsumableArray.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(/*! ../core-js/array/from */ 630);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */
/*!************************************!*\
  !*** ./~/lodash.debounce/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(/*! lodash._getnative */ 638);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');
	
	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }
	
	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }
	
	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }
	
	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }
	
	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);
	
	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;
	
	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = debounce;


/***/ },
/* 638 */
/*!**************************************!*\
  !*** ./~/lodash._getnative/index.js ***!
  \**************************************/
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;


/***/ },
/* 639 */
/*!****************************************!*\
  !*** ./~/react-dock/lib/autoprefix.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// Same as https://github.com/SimenB/react-vendor-prefixes/blob/master/src/index.js,
	// but dumber
	
	'use strict';
	
	var _extends = __webpack_require__(/*! babel-runtime/helpers/extends */ 557)['default'];
	
	var _Object$keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 562)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoprefix;
	var vendorSpecificProperties = ['animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'backfaceVisibility', 'backgroundClip', 'borderImage', 'borderImageSlice', 'boxSizing', 'boxShadow', 'contentColumns', 'transform', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'perspective', 'perspectiveOrigin', 'userSelect'];
	
	var prefixes = ['Moz', 'Webkit', 'ms', 'O'];
	
	function prefixProp(key, value) {
	  return prefixes.reduce(function (obj, pre) {
	    return (obj[pre + key[0].toUpperCase() + key.substr(1)] = value, obj);
	  }, {});
	}
	
	function autoprefix(style) {
	  return _Object$keys(style).reduce(function (obj, key) {
	    return vendorSpecificProperties.indexOf(key) !== -1 ? _extends({}, obj, prefixProp(key, style[key])) : obj;
	  }, style);
	}
	
	module.exports = exports['default'];

/***/ },
/* 640 */
/*!********************************************************!*\
  !*** ./~/redux-devtools-dock-monitor/lib/constants.js ***!
  \********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var POSITIONS = exports.POSITIONS = ['left', 'top', 'right', 'bottom'];

/***/ },
/* 641 */
/*!******************************************************!*\
  !*** ./~/redux-devtools-dock-monitor/lib/actions.js ***!
  \******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.toggleVisibility = toggleVisibility;
	exports.changePosition = changePosition;
	exports.changeSize = changeSize;
	exports.changeMonitor = changeMonitor;
	var TOGGLE_VISIBILITY = exports.TOGGLE_VISIBILITY = '@@redux-devtools-log-monitor/TOGGLE_VISIBILITY';
	function toggleVisibility() {
	  return { type: TOGGLE_VISIBILITY };
	}
	
	var CHANGE_POSITION = exports.CHANGE_POSITION = '@@redux-devtools-log-monitor/CHANGE_POSITION';
	function changePosition() {
	  return { type: CHANGE_POSITION };
	}
	
	var CHANGE_SIZE = exports.CHANGE_SIZE = '@@redux-devtools-log-monitor/CHANGE_SIZE';
	function changeSize(size) {
	  return { type: CHANGE_SIZE, size: size };
	}
	
	var CHANGE_MONITOR = exports.CHANGE_MONITOR = '@@redux-devtools-log-monitor/CHANGE_MONITOR';
	function changeMonitor() {
	  return { type: CHANGE_MONITOR };
	}

/***/ },
/* 642 */
/*!*******************************************************!*\
  !*** ./~/redux-devtools-dock-monitor/lib/reducers.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = reducer;
	
	var _actions = __webpack_require__(/*! ./actions */ 641);
	
	var _constants = __webpack_require__(/*! ./constants */ 640);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	function position(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultPosition : arguments[1];
	  var action = arguments[2];
	
	  return action.type === _actions.CHANGE_POSITION ? _constants.POSITIONS[(_constants.POSITIONS.indexOf(state) + 1) % _constants.POSITIONS.length] : state;
	}
	
	function size(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultSize : arguments[1];
	  var action = arguments[2];
	
	  return action.type === _actions.CHANGE_SIZE ? action.size : state;
	}
	
	function isVisible(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultIsVisible : arguments[1];
	  var action = arguments[2];
	
	  return action.type === _actions.TOGGLE_VISIBILITY ? !state : state;
	}
	
	function childMonitorStates(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var action = arguments[2];
	
	  return _react.Children.map(props.children, function (child, index) {
	    return child.type.update(child.props, state[index], action);
	  });
	}
	
	function childMonitorIndex(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var action = arguments[2];
	
	  switch (action.type) {
	    case _actions.CHANGE_MONITOR:
	      return (state + 1) % _react.Children.count(props.children);
	    default:
	      return state;
	  }
	}
	
	function reducer(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var action = arguments[2];
	
	  if (!state.childMonitorStates) {
	    _react.Children.forEach(props.children, function (child, index) {
	      if (typeof child.type.update !== 'function') {
	        console.error('Child of <DockMonitor> with the index ' + index + ' ' + ('(' + (child.type.displayName || child.type.name || child.type) + ') ') + 'does not appear to be a valid Redux DevTools monitor.');
	      }
	    });
	  }
	
	  return {
	    position: position(props, state.position, action),
	    isVisible: isVisible(props, state.isVisible, action),
	    size: size(props, state.size, action),
	    childMonitorIndex: childMonitorIndex(props, state.childMonitorIndex, action),
	    childMonitorStates: childMonitorStates(props, state.childMonitorStates, action)
	  };
	}

/***/ },
/* 643 */
/*!**********************************!*\
  !*** ./~/parse-key/parse-key.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keycodes = __webpack_require__(/*! ./keycodes */ 644);
	
	function assertKeyString(s) {
	  if (!/^(ctrl-|shift-|alt-|meta-){0,4}\w+$/.test(s))
	    throw new Error('The string to parse needs to be of the format "c", "ctrl-c", "shift-ctrl-c".');
	}
	
	module.exports = function parse(s) {
	  var keyString = s.trim().toLowerCase();
	
	  assertKeyString(keyString);
	
	  var key = {
	      name     :  undefined
	    , ctrl     :  false
	    , meta     :  false
	    , shift    :  false
	    , alt      :  false
	    , sequence :  undefined
	  }
	  , parts = keyString.split('-')
	  , c;
	
	  key.name = parts.pop();
	  while((c = parts.pop())) key[c] = true;
	  key.sequence = key.ctrl 
	    ? keycodes.ctrl[key.name] || key.name
	    : keycodes.nomod[key.name] || key.name;
	
	  // uppercase sequence for single chars when shift was pressed
	  if (key.shift && key.sequence && key.sequence.length === 1)
	    key.sequence = key.sequence.toUpperCase();
	
	  return key;
	};


/***/ },
/* 644 */
/*!*********************************!*\
  !*** ./~/parse-key/keycodes.js ***!
  \*********************************/
/***/ function(module, exports) {

	// Most of these are according to this table: http://www.ssicom.org/js/x171166.htm
	// However where nodejs readline diverges, they are adjusted to conform to it
	module.exports = {
	  nomod: {
	      escape: '\u001b'
	    , space: ' ' // actually '\u0020'
	    }
	  , ctrl: {
	        ' ': '\u0000'
	      , 'a': '\u0001'
	      , 'b': '\u0002'
	      , 'c': '\u0003'
	      , 'd': '\u0004'
	      , 'e': '\u0005'
	      , 'f': '\u0006'
	      , 'g': '\u0007'
	      , 'h': '\u0008'
	      , 'i': '\u0009'
	      , 'j': '\u000a'
	      , 'k': '\u000b'
	      , 'm': '\u000c'
	      , 'n': '\u000d'
	      , 'l': '\u000e'
	      , 'o': '\u000f'
	      , 'p': '\u0010'
	      , 'q': '\u0011'
	      , 'r': '\u0012'
	      , 's': '\u0013'
	      , 't': '\u0014'
	      , 'u': '\u0015'
	      , 'v': '\u0016'
	      , 'w': '\u0017'
	      , 'x': '\u0018'
	      , 'y': '\u0019'
	      , 'z': '\u001a'
	      , '[': '\u001b'
	      , '\\':'\u001c'
	      , ']': '\u001d'
	      , '^': '\u001e'
	      , '_': '\u001f'
	
	      , 'space': '\u0000'
	    }
	};


/***/ },
/* 645 */
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 179);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 265);
	
	var rootReducer = (0, _redux.combineReducers)({
	  routing: _reactRouterRedux.routerReducer
	});
	
	exports.default = rootReducer;

/***/ }
]);
//# sourceMappingURL=main.js.map