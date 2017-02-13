webpackJsonp([0],{

/***/ 0:
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
	
	var _configureStore = __webpack_require__(/*! ./store/configureStore */ 292);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	__webpack_require__(/*! babel-polyfill */ 303);
	
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

/***/ 270:
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
	
	var _ManageCoursePage = __webpack_require__(/*! ./components/demo/ManageCoursePage */ 285);
	
	var _ManageCoursePage2 = _interopRequireDefault(_ManageCoursePage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _ShellComponent2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomeComponent2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _AboutComponent2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'courses', component: _CoursesComponent2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'course', component: _ManageCoursePage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'course/:id', component: _ManageCoursePage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFoundComponent2.default })
	);

/***/ },

/***/ 271:
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

/***/ 272:
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

/***/ 273:
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

/***/ 274:
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

/***/ 275:
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

/***/ 276:
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

/***/ 277:
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
	
	        _this.redirectToAddCoursePage = _this.redirectToAddCoursePage.bind(_this);
	        return _this;
	    }
	
	    _createClass(CoursesComponent, [{
	        key: 'courseRow',
	        value: function courseRow(course, index) {
	            return _react2.default.createElement(
	                'div',
	                { key: index },
	                course.title
	            );
	        }
	    }, {
	        key: 'redirectToAddCoursePage',
	        value: function redirectToAddCoursePage() {
	            _reactRouter.browserHistory.push('/course');
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
	                _react2.default.createElement('input', { type: 'submit',
	                    value: 'Add Course',
	                    className: 'btn btn-primary',
	                    onClick: this.redirectToAddCoursePage
	                }),
	                _react2.default.createElement(_CourseList2.default, { courses: courses })
	            );
	        }
	    }]);
	
	    return CoursesComponent;
	}(_react2.default.Component);
	
	CoursesComponent.propTypes = {
	    actions: _react.PropTypes.object.isRequired,
	    courses: _react.PropTypes.array.isRequired
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return { courses: state.courses };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(courseActions, dispatch)
	    };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CoursesComponent);

/***/ },

/***/ 278:
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
	    return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
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
	            dispatch((0, _ajaxStatusActions.ajaxCallError)(error));throw error;
	        });
	    };
	}

/***/ },

/***/ 279:
/*!**********************************!*\
  !*** ./app/api/mockCourseApi.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _delay = __webpack_require__(/*! ./delay */ 280);
	
	var _delay2 = _interopRequireDefault(_delay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// This file mocks a web API by working with the hard-coded data below. It uses setTimeout to simulate the delay of an AJAX call. All calls return promises.
	var courses = [{
	    id: 'react-flux-building-applications',
	    title: 'Building Applications in React and Flux',
	    watchHref: 'http://www.pluralsight.com/courses/react-flux-building-applications',
	    authorId: 'cory-house',
	    length: '5:08',
	    category: 'JavaScript'
	}, {
	    id: 'clean-code',
	    title: 'Clean Code: Writing Code for Humans',
	    watchHref: 'http://www.pluralsight.com/courses/writing-clean-code-humans',
	    authorId: 'cory-house',
	    length: '3:10',
	    category: 'Software Practices'
	}, {
	    id: 'architecture',
	    title: 'Architecting Applications for the Real World',
	    watchHref: 'http://www.pluralsight.com/courses/architecting-applications-dotnet',
	    authorId: 'cory-house',
	    length: '2:52',
	    category: 'Software Architecture'
	}, {
	    id: 'career-reboot-for-developer-mind',
	    title: 'Becoming an Outlier: Reprogramming the Developer Mind',
	    watchHref: 'http://www.pluralsight.com/courses/career-reboot-for-developer-mind',
	    authorId: 'cory-house',
	    length: '2:30',
	    category: 'Career'
	}, {
	    id: 'web-components-shadow-dom',
	    title: 'Web Component Fundamentals',
	    watchHref: 'http://www.pluralsight.com/courses/web-components-shadow-dom',
	    authorId: 'cory-house',
	    length: '5:10',
	    category: 'HTML5'
	}];
	
	function replaceAll(str, find, replace) {
	    return str.replace(new RegExp(find, 'g'), replace);
	}
	
	// This would be performed on the server in a real app. Just stubbing in.
	
	var generateId = function generateId(course) {
	    return replaceAll(course.title, ' ', '-');
	};
	
	var CourseApi = function () {
	    function CourseApi() {
	        _classCallCheck(this, CourseApi);
	    }
	
	    _createClass(CourseApi, null, [{
	        key: 'getAllCourses',
	        value: function getAllCourses() {
	
	            return new Promise(function (resolve, reject) {
	                setTimeout(function () {
	                    resolve(Object.assign([], courses));
	                }, _delay2.default);
	            });
	        }
	    }, {
	        key: 'saveCourse',
	        value: function saveCourse(course) {
	
	            course = Object.assign({}, course); // to avoid manipulating object passed in.
	
	            return new Promise(function (resolve, reject) {
	
	                setTimeout(function () {
	
	                    // Simulate server-side validation
	                    var minCourseTitleLength = 1;
	                    if (course.title.length < minCourseTitleLength) {
	                        reject('Title must be at least ' + minCourseTitleLength + ' characters.');
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
	                        course.watchHref = 'http://www.pluralsight.com/courses/' + course.id;
	                        courses.push(course);
	                    }
	
	                    resolve(course);
	                }, _delay2.default);
	            });
	        }
	    }, {
	        key: 'deleteCourse',
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

/***/ 280:
/*!**************************!*\
  !*** ./app/api/delay.js ***!
  \**************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = 1000;

/***/ },

/***/ 281:
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

/***/ 282:
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

/***/ 283:
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

/***/ 284:
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

/***/ 285:
/*!*************************************************!*\
  !*** ./app/components/demo/ManageCoursePage.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 168);
	
	var _redux = __webpack_require__(/*! redux */ 179);
	
	var _toastr = __webpack_require__(/*! toastr */ 286);
	
	var _toastr2 = _interopRequireDefault(_toastr);
	
	var _courseActions = __webpack_require__(/*! ../../actions/courseActions */ 278);
	
	var courseActions = _interopRequireWildcard(_courseActions);
	
	var _CourseForm = __webpack_require__(/*! ./CourseForm */ 289);
	
	var _CourseForm2 = _interopRequireDefault(_CourseForm);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManageCoursePage = function (_React$Component) {
	    _inherits(ManageCoursePage, _React$Component);
	
	    function ManageCoursePage(props, context) {
	        _classCallCheck(this, ManageCoursePage);
	
	        var _this = _possibleConstructorReturn(this, (ManageCoursePage.__proto__ || Object.getPrototypeOf(ManageCoursePage)).call(this, props, context));
	
	        _this.state = {
	            course: Object.assign({}, _this.props.course),
	            errors: {},
	            saving: false
	        };
	
	        _this.updateCourseState = _this.updateCourseState.bind(_this);
	        _this.saveCourse = _this.saveCourse.bind(_this);
	        return _this;
	    }
	
	    _createClass(ManageCoursePage, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	
	            // Necessary to populate from when existing course is loaded directly
	            if (this.props.course.id != nextProps.course.id) {
	                this.setState({ course: Object.assign({}, nextProps.course) });
	            }
	        }
	    }, {
	        key: 'updateCourseState',
	        value: function updateCourseState(event) {
	            var field = event.target.name;
	            var course = this.state.course;
	            course[field] = event.target.value;
	            return this.setState({ course: course });
	        }
	    }, {
	        key: 'saveCourse',
	        value: function saveCourse(event) {
	            var _this2 = this;
	
	            event.preventDefault();
	            this.setState({ saving: true });
	            this.props.actions.saveCourse(this.state.course).then(function () {
	                return _this2.redirect();
	            }).catch(function (error) {
	                _toastr2.default.error(error);
	                _this2.setState({ saving: false });
	            });
	        }
	    }, {
	        key: 'redirect',
	        value: function redirect() {
	            this.setState({ saving: false });
	            _toastr2.default.success('Course saved');
	            this.context.router.push('/courses');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_CourseForm2.default, { allAuthors: this.props.authors,
	                onChange: this.updateCourseState,
	                onSave: this.saveCourse,
	                course: this.state.course,
	                errors: this.state.errors,
	                saving: this.state.saving
	            });
	        }
	    }]);
	
	    return ManageCoursePage;
	}(_react2.default.Component);
	
	ManageCoursePage.propTypes = {
	    course: _react.PropTypes.object.isRequired,
	    errors: _react.PropTypes.object,
	    authors: _react.PropTypes.array.isRequired,
	    actions: _react.PropTypes.object.isRequired
	};
	
	ManageCoursePage.contextTypes = {
	    router: _react.PropTypes.object.isRequired
	};
	
	var getCourseById = function getCourseById(courses, id) {
	    var course = courses.filter(function (course) {
	        return course.id == id;
	    });
	    if (course) return course[0];
	    return null;
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	
	    var courseId = ownProps.params.id; // From the path '/course/:id'
	
	    var course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
	
	    if (courseId && state.courses.length > 0) {
	        course = getCourseById(state.courses, courseId);
	    }
	
	    var authorsFormattedForDropdown = state.authors.map(function (author) {
	        return {
	            value: author.id,
	            text: author.firstName + ' ' + author.lastName
	        };
	    });
	
	    return {
	        course: course,
	        authors: authorsFormattedForDropdown
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(courseActions, dispatch)
	    };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

/***/ },

/***/ 289:
/*!*******************************************!*\
  !*** ./app/components/demo/CourseForm.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TextInput = __webpack_require__(/*! ../common/TextInput */ 290);
	
	var _TextInput2 = _interopRequireDefault(_TextInput);
	
	var _SelectInput = __webpack_require__(/*! ../common/SelectInput */ 291);
	
	var _SelectInput2 = _interopRequireDefault(_SelectInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CourseForm = function CourseForm(_ref) {
	      var course = _ref.course,
	          allAuthors = _ref.allAuthors,
	          onSave = _ref.onSave,
	          onChange = _ref.onChange,
	          saving = _ref.saving,
	          errors = _ref.errors;
	
	      return _react2.default.createElement(
	            'form',
	            null,
	            _react2.default.createElement(
	                  'h1',
	                  null,
	                  'Manage Course'
	            ),
	            _react2.default.createElement(_TextInput2.default, { name: 'title',
	                  label: 'Title',
	                  value: course.title,
	                  onChange: onChange,
	                  error: errors.title }),
	            _react2.default.createElement(_SelectInput2.default, { name: 'authorId',
	                  label: 'Author',
	                  value: course.authorId,
	                  defaultOption: 'Select Author',
	                  options: allAuthors,
	                  onChange: onChange,
	                  error: errors.authorId }),
	            _react2.default.createElement(_TextInput2.default, { name: 'category',
	                  label: 'Category',
	                  value: course.category,
	                  onChange: onChange,
	                  error: errors.category }),
	            _react2.default.createElement(_TextInput2.default, { name: 'length',
	                  label: 'Length',
	                  value: course.length,
	                  onChange: onChange,
	                  error: errors.length }),
	            _react2.default.createElement('input', { type: 'submit',
	                  disabled: saving,
	                  value: saving ? 'Saving...' : 'Save',
	                  className: 'btn btn-primary',
	                  onClick: onSave })
	      );
	};
	
	CourseForm.propTypes = {
	      course: _react2.default.PropTypes.object.isRequired,
	      allAuthors: _react2.default.PropTypes.array,
	      onSave: _react2.default.PropTypes.func.isRequired,
	      onChange: _react2.default.PropTypes.func.isRequired,
	      saving: _react2.default.PropTypes.bool,
	      errors: _react2.default.PropTypes.object
	};
	
	exports.default = CourseForm;

/***/ },

/***/ 290:
/*!********************************************!*\
  !*** ./app/components/common/TextInput.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TextInput = function TextInput(_ref) {
	    var name = _ref.name,
	        label = _ref.label,
	        onChange = _ref.onChange,
	        placeholder = _ref.placeholder,
	        value = _ref.value,
	        error = _ref.error;
	
	    var wrapperClass = 'form-group';
	
	    if (error && error.length > 0) {
	        wrapperClass += ' has-error';
	    }
	
	    return _react2.default.createElement(
	        'div',
	        { className: wrapperClass },
	        _react2.default.createElement(
	            'label',
	            { htmlFor: '{ name }' },
	            label
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: 'field' },
	            _react2.default.createElement('input', { type: 'text',
	                className: 'form-control',
	                name: name,
	                value: value,
	                placeholder: placeholder,
	                onChange: onChange
	            }),
	            error && _react2.default.createElement(
	                'div',
	                { className: 'alert alert-danger' },
	                'error'
	            )
	        )
	    );
	};
	
	TextInput.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    label: _react.PropTypes.string.isRequired,
	    onChange: _react.PropTypes.func.isRequired,
	    placeholder: _react.PropTypes.string,
	    value: _react.PropTypes.string,
	    error: _react.PropTypes.string
	};
	
	exports.default = TextInput;

/***/ },

/***/ 291:
/*!**********************************************!*\
  !*** ./app/components/common/SelectInput.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SelectInput = function SelectInput(_ref) {
	    var name = _ref.name,
	        label = _ref.label,
	        onChange = _ref.onChange,
	        defaultOption = _ref.defaultOption,
	        value = _ref.value,
	        error = _ref.error,
	        options = _ref.options;
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'form-group' },
	        _react2.default.createElement(
	            'label',
	            { htmlFor: '{ name }' },
	            label
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: 'field' },
	            _react2.default.createElement(
	                'select',
	                { type: 'text',
	                    className: 'form-control',
	                    name: name,
	                    value: value,
	                    onChange: onChange
	                },
	                _react2.default.createElement(
	                    'option',
	                    { value: '' },
	                    defaultOption
	                ),
	                options.map(function (option) {
	                    return _react2.default.createElement(
	                        'option',
	                        { key: option.value, value: option.value },
	                        option.text
	                    );
	                })
	            ),
	            error && _react2.default.createElement(
	                'div',
	                { className: 'alert alert-danger' },
	                'error'
	            )
	        )
	    );
	};
	
	SelectInput.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    label: _react.PropTypes.string.isRequired,
	    onChange: _react.PropTypes.func.isRequired,
	    defaultOption: _react.PropTypes.string,
	    value: _react.PropTypes.string,
	    error: _react.PropTypes.string,
	    options: _react.PropTypes.arrayOf(_react.PropTypes.object)
	};
	
	exports.default = SelectInput;

/***/ },

/***/ 292:
/*!*************************************!*\
  !*** ./app/store/configureStore.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;
	
	var _reduxImmutableStateInvariant = __webpack_require__(/*! redux-immutable-state-invariant */ 293);
	
	var _reduxImmutableStateInvariant2 = _interopRequireDefault(_reduxImmutableStateInvariant);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 297);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _redux = __webpack_require__(/*! redux */ 179);
	
	var _reducers = __webpack_require__(/*! ../reducers */ 298);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureStore(initialState) {
	  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxImmutableStateInvariant2.default)()), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	    return f;
	  }));
	}

/***/ },

/***/ 293:
/*!*********************************************************!*\
  !*** ./~/redux-immutable-state-invariant/dist/index.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = immutableStateInvariantMiddleware;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(/*! invariant */ 174);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _jsonStringifySafe = __webpack_require__(/*! json-stringify-safe */ 294);
	
	var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);
	
	var _isImmutable = __webpack_require__(/*! ./isImmutable */ 295);
	
	var _isImmutable2 = _interopRequireDefault(_isImmutable);
	
	var _trackForMutations = __webpack_require__(/*! ./trackForMutations */ 296);
	
	var _trackForMutations2 = _interopRequireDefault(_trackForMutations);
	
	var BETWEEN_DISPATCHES_MESSAGE = ['A state mutation was detected between dispatches, in the path `%s`.', 'This may cause incorrect behavior.', '(http://redux.js.org/docs/Troubleshooting.html#never-mutate-reducer-arguments)'].join(' ');
	
	var INSIDE_DISPATCH_MESSAGE = ['A state mutation was detected inside a dispatch, in the path: `%s`.', 'Take a look at the reducer(s) handling the action %s.', '(http://redux.js.org/docs/Troubleshooting.html#never-mutate-reducer-arguments)'].join(' ');
	
	function immutableStateInvariantMiddleware() {
	  var isImmutable = arguments.length <= 0 || arguments[0] === undefined ? _isImmutable2['default'] : arguments[0];
	
	  var track = _trackForMutations2['default'].bind(null, isImmutable);
	
	  return function (_ref) {
	    var getState = _ref.getState;
	
	    var state = getState();
	    var tracker = track(state);
	
	    var result = undefined;
	    return function (next) {
	      return function (action) {
	        state = getState();
	
	        result = tracker.detectMutations();
	        // Track before potentially not meeting the invariant
	        tracker = track(state);
	
	        (0, _invariant2['default'])(!result.wasMutated, BETWEEN_DISPATCHES_MESSAGE, (result.path || []).join('.'));
	
	        var dispatchedAction = next(action);
	        state = getState();
	
	        result = tracker.detectMutations();
	        // Track before potentially not meeting the invariant
	        tracker = track(state);
	
	        (0, _invariant2['default'])(!result.wasMutated, INSIDE_DISPATCH_MESSAGE, (result.path || []).join('.'), (0, _jsonStringifySafe2['default'])(action));
	
	        return dispatchedAction;
	      };
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 294:
/*!********************************************!*\
  !*** ./~/json-stringify-safe/stringify.js ***!
  \********************************************/
/***/ function(module, exports) {

	exports = module.exports = stringify
	exports.getSerialize = serializer
	
	function stringify(obj, replacer, spaces, cycleReplacer) {
	  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
	}
	
	function serializer(replacer, cycleReplacer) {
	  var stack = [], keys = []
	
	  if (cycleReplacer == null) cycleReplacer = function(key, value) {
	    if (stack[0] === value) return "[Circular ~]"
	    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
	  }
	
	  return function(key, value) {
	    if (stack.length > 0) {
	      var thisPos = stack.indexOf(this)
	      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
	      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
	      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
	    }
	    else stack.push(value)
	
	    return replacer == null ? value : replacer.call(this, key, value)
	  }
	}


/***/ },

/***/ 295:
/*!***************************************************************!*\
  !*** ./~/redux-immutable-state-invariant/dist/isImmutable.js ***!
  \***************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = isImmutableDefault;
	
	function isImmutableDefault(value) {
	  return typeof value !== 'object' || value === null || typeof value === 'undefined';
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 296:
/*!*********************************************************************!*\
  !*** ./~/redux-immutable-state-invariant/dist/trackForMutations.js ***!
  \*********************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = trackForMutations;
	
	function trackForMutations(isImmutable, obj) {
	  var trackedProperties = trackProperties(isImmutable, obj);
	  return {
	    detectMutations: function detectMutations() {
	      return _detectMutations(isImmutable, trackedProperties, obj);
	    }
	  };
	}
	
	function trackProperties(isImmutable, obj) {
	  var tracked = { value: obj };
	
	  if (!isImmutable(obj)) {
	    tracked.children = {};
	
	    for (var key in obj) {
	      tracked.children[key] = trackProperties(isImmutable, obj[key]);
	    }
	  }
	  return tracked;
	}
	
	function _detectMutations(isImmutable, trackedProperty, obj) {
	  var sameParentRef = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	  var path = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	
	  var prevObj = trackedProperty ? trackedProperty.value : undefined;
	
	  var sameRef = prevObj === obj;
	
	  if (sameParentRef && !sameRef) {
	    return { wasMutated: true, path: path };
	  }
	
	  if (isImmutable(prevObj) || isImmutable(obj)) {
	    return { wasMutated: false };
	  }
	
	  // Gather all keys from prev (tracked) and after objs
	  var keysToDetect = {};
	  Object.keys(trackedProperty.children).forEach(function (key) {
	    keysToDetect[key] = true;
	  });
	  Object.keys(obj).forEach(function (key) {
	    keysToDetect[key] = true;
	  });
	
	  var keys = Object.keys(keysToDetect);
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var result = _detectMutations(isImmutable, trackedProperty.children[key], obj[key], sameRef, path.concat(key));
	
	    if (result.wasMutated) {
	      return result;
	    }
	  }
	  return { wasMutated: false };
	}
	module.exports = exports["default"];

/***/ },

/***/ 298:
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
	
	var _courseReducer = __webpack_require__(/*! ./courseReducer */ 299);
	
	var _courseReducer2 = _interopRequireDefault(_courseReducer);
	
	var _authorReducer = __webpack_require__(/*! ./authorReducer */ 301);
	
	var _authorReducer2 = _interopRequireDefault(_authorReducer);
	
	var _ajaxStatusReducer = __webpack_require__(/*! ./ajaxStatusReducer */ 302);
	
	var _ajaxStatusReducer2 = _interopRequireDefault(_ajaxStatusReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootReducer = (0, _redux.combineReducers)({
	    routing: _reactRouterRedux.routerReducer,
	    courses: _courseReducer2.default,
	    authors: _authorReducer2.default,
	    ajaxCallsInProgress: _ajaxStatusReducer2.default
	});
	
	exports.default = rootReducer;

/***/ },

/***/ 299:
/*!***************************************!*\
  !*** ./app/reducers/courseReducer.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = courseReducer;
	
	var _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ 282);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _initialState = __webpack_require__(/*! ./initialState */ 300);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function courseReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.courses;
	    var action = arguments[1];
	
	
	    switch (action.type) {
	
	        case types.LOAD_COURSES_SUCCESS:
	            return action.courses;
	
	        case types.CREATE_COURSE_SUCCESS:
	            return [].concat(_toConsumableArray(state), [Object.assign({}, action.course)]);
	
	        case types.UPDATE_COURSE_SUCCESS:
	            return [].concat(_toConsumableArray(state.filter(function (course) {
	                return course.id !== action.course.id;
	            })), [Object.assign({}, action.course)]);
	
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 300:
/*!**************************************!*\
  !*** ./app/reducers/initialState.js ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  authors: [],
	  courses: [],
	  ajaxCallsInProgress: 0
	};

/***/ },

/***/ 301:
/*!***************************************!*\
  !*** ./app/reducers/authorReducer.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = authorReducer;
	
	var _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ 282);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _initialState = __webpack_require__(/*! ./initialState */ 300);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function authorReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.authors;
	    var action = arguments[1];
	
	
	    switch (action.type) {
	
	        case types.LOAD_AUTHORS_SUCCESS:
	            return action.authors;
	
	        default:
	            return state;
	    }
	}

/***/ },

/***/ 302:
/*!*******************************************!*\
  !*** ./app/reducers/ajaxStatusReducer.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actionTypes = __webpack_require__(/*! ../actions/actionTypes.js */ 282);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _initialState = __webpack_require__(/*! ./initialState */ 300);
	
	var _initialState2 = _interopRequireDefault(_initialState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var actionTypeEndsInSuccess = function actionTypeEndsInSuccess(type) {
	  return type.substring(type.length - 8) === '_SUCCESS';
	};
	
	var ajaxStatusReducer = function ajaxStatusReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.ajaxCallsInProgress;
	  var action = arguments[1];
	
	
	  if (action.type === types.BEGIN_AJAX_CALL) {
	    return state + 1;
	  } else if (action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
	    return state - 1;
	  }
	
	  return state;
	};
	
	exports.default = ajaxStatusReducer;

/***/ }

});
//# sourceMappingURL=main.js.map