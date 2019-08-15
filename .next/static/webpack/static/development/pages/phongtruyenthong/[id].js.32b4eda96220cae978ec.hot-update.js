webpackHotUpdate("static/development/pages/phongtruyenthong/[id].js",{

/***/ "./pages/phongtruyenthong/[id].js":
/*!****************************************!*\
  !*** ./pages/phongtruyenthong/[id].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./pages/components/MyLayout.js");
/* harmony import */ var _constant_URL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant/URL */ "./pages/constant/URL.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ListImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ListImage */ "./pages/components/ListImage.js");



var _jsxFileName = "/home/piggy/Desktop/app/phongtruyenthong/pages/phongtruyenthong/[id].js";







var style_main = {
  display: "flex",
  flexDirection: "row",
  flex: 1
};
var style_item = {
  flex: 1,
  maxWidth: 800,
  maxHeight: 800
};
var style_text = {
  padding: 50
};

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/phongtruyenthong/[id]",
    as: "/phongtruyenthong/".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.id)));
};

var Post = function Post(props) {
  console.log("render", props);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var link_image = _constant_URL__WEBPACK_IMPORTED_MODULE_5__["LOCALHOST"] + _constant_URL__WEBPACK_IMPORTED_MODULE_5__["LINK_IMAGE"] + router.query.id + ".jpg";
  console.log(props.detail_image);

  if (props.detail_image == null) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "404 not found"));
  } else {
    var data = props.detail_image.data[0];

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.text_vn),
        _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
        text_vn = _useState2[0],
        set_text_vn = _useState2[1];

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.text_en),
        _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
        text_en = _useState4[0],
        set_text_en = _useState4[1];

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ListImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: router.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\u1EA2nh: ", router.query.id), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Thong tin cua anh "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      style: style_main,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
      style: style_item,
      src: link_image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      style: style_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Th\xF4ng tin ti\u1EBFng Vi\u1EC7t"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
      rows: "4",
      cols: "50",
      type: "text",
      name: "fname",
      value: text_vn,
      onChange: function onChange(event) {
        return set_text_vn(event.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Th\xF4ng tin ti\u1EBFng Anh"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
      rows: "4",
      cols: "50",
      type: "text",
      name: "fname",
      value: text_en,
      onChange: function onChange(event) {
        return set_text_en(event.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      type: "submit",
      value: "Submit",
      onClick: function onClick() {
        console.log();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    })))));
  }
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, uri, res, detail_image;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            uri = _constant_URL__WEBPACK_IMPORTED_MODULE_5__["LOCALHOST"] + _constant_URL__WEBPACK_IMPORTED_MODULE_5__["LINK_DETAIL"] + id;
            console.log(uri);
            _context.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(uri);

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            detail_image = _context.sent;

            if (!(detail_image.status == "error")) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              detail_image: null
            });

          case 11:
            return _context.abrupt("return", {
              detail_image: detail_image
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.32b4eda96220cae978ec.hot-update.js.map