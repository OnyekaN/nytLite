webpackHotUpdate("main",{

/***/ "./app/controllers/reader.component.js":
/*!*********************************************!*\
  !*** ./app/controllers/reader.component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar ReaderComponent =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ReaderComponent, _React$Component);\n\n  function ReaderComponent(props) {\n    var _this;\n\n    _classCallCheck(this, ReaderComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReaderComponent).call(this, props));\n    _this.state = {\n      articleMarkup: '',\n      dateOptions: {\n        weekday: 'short',\n        year: 'numeric',\n        month: 'long',\n        day: 'numeric'\n      }\n    };\n    _this.createMarkup = _this.createMarkup.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ReaderComponent, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      if (!!Object.keys(nextProps.article).length) {\n        this.createMarkup('articles/' + nextProps.article.article_path);\n      }\n    }\n  }, {\n    key: \"createMarkup\",\n    value: function createMarkup(href) {\n      var _this2 = this;\n\n      var html = '';\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(href).then(function (res) {\n        html = res.data;\n\n        _this2.setState({\n          articleMarkup: html\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var article = this.props.article,\n          article_date = article.article_date ? new Date(article.article_date).toLocaleString('en-us', this.state.dateOptions) : \"\",\n          article_href = \"https://nytimes.com/section/\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\".concat(article.article_section, \"/\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\").concat(article.article_path);\n      console.log(article.article_date);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"reader-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"rdr-header\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"rdr-title\"\n      }, article.article_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"rdr-author\"\n      }, article.article_author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"rdr-date\"\n      }, article_date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"rdr-article-body\",\n        dangerouslySetInnerHTML: {\n          __html: this.state.articleMarkup\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"rdr-footer\"\n      }, \"Read: \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        className: \"rdr-href\",\n        href: article_href\n      }, article.article_title), \" on the \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"nytimes.com\"\n      }, \"NyTimes\"), \" website.\"));\n    }\n  }]);\n\n  return ReaderComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReaderComponent);\n\n//# sourceURL=webpack:///./app/controllers/reader.component.js?");

/***/ })

})