webpackHotUpdate("main",{

/***/ "./app/assets/articles.json":
false,

/***/ "./app/controllers/articles.component.js":
/*!***********************************************!*\
  !*** ./app/controllers/articles.component.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ \"./app/controllers/menu.component.js\");\n/* harmony import */ var _reader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reader.component */ \"./app/controllers/reader.component.js\");\n/* articles.component */\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar ArticlesComponent =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ArticlesComponent, _React$Component);\n\n  function ArticlesComponent(props) {\n    var _this;\n\n    _classCallCheck(this, ArticlesComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArticlesComponent).call(this, props));\n    _this.state = {\n      allArticles: [],\n      currentArticle: {}\n    };\n    _this.onArticleSelect = _this.onArticleSelect.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ArticlesComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var articles = [];\n      Object.keys(articlesJSON).forEach(function (key) {\n        if (articlesJSON[key].title.indexOf('Page Not Found') == -1) {\n          articles.push(articlesJSON[key]);\n        }\n      });\n      this.setState({\n        allArticles: articles\n      });\n    }\n  }, {\n    key: \"onArticleSelect\",\n    value: function onArticleSelect(article) {\n      if (false) {} else {\n        this.setState({\n          currentArticle: article\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"articles-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        articles: this.state.allArticles,\n        clickHandler: this.onArticleSelect\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reader_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        article: this.state.currentArticle\n      }));\n    }\n  }]);\n\n  return ArticlesComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesComponent);\n\n//# sourceURL=webpack:///./app/controllers/articles.component.js?");

/***/ })

})