webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/SearchDropdown.js":
/*!*********************************************!*\
  !*** ./components/layout/SearchDropdown.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchDropdown.module.scss */ "./components/layout/SearchDropdown.module.scss");
/* harmony import */ var _SearchDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ "./components/layout/Search.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");



var _jsxFileName = "C:\\Users\\ilham.baghirov\\Desktop\\nextCarGallery\\NextJSAppCarGallery\\NextJSAppCarGallery\\components\\layout\\SearchDropdown.js",
    _this = undefined;






var SearchDropdown = function SearchDropdown(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "".concat("".concat(_SearchDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["searchDropdown-wrapper"], " d-flex justify-content-center"), " ", props.searchMode && _SearchDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["active"]),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineCloseCircle"], {
        onClick: function onClick() {
          return props.setSearchMode(!props.searchMode);
        },
        className: _SearchDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.closeSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _SearchDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["menu-content"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = SearchDropdown;
/* harmony default export */ __webpack_exports__["default"] = (SearchDropdown);

var _c;

$RefreshReg$(_c, "SearchDropdown");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2VhcmNoRHJvcGRvd24uanMiXSwibmFtZXMiOlsiU2VhcmNoRHJvcGRvd24iLCJwcm9wcyIsInN0eWxlcyIsInNlYXJjaE1vZGUiLCJzZXRTZWFyY2hNb2RlIiwiY2xvc2VTZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUNoQyxzQkFDRTtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxzQkFBUUMsa0VBQU0sQ0FBQyx3QkFBRCxDQUFkLDBDQUNQRCxLQUFLLENBQUNFLFVBQU4sSUFBb0JELGtFQUFNLENBQUMsUUFBRCxDQURuQixDQURYO0FBQUEsOEJBS0UscUVBQUMsbUVBQUQ7QUFBc0IsZUFBTyxFQUFFO0FBQUEsaUJBQUlELEtBQUssQ0FBQ0csYUFBTixDQUFvQixDQUFDSCxLQUFLLENBQUNFLFVBQTNCLENBQUo7QUFBQSxTQUEvQjtBQUEyRSxpQkFBUyxFQUFFRCxrRUFBTSxDQUFDRztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNRTtBQUFLLGlCQUFTLEVBQUVILGtFQUFNLENBQUMsY0FBRCxDQUF0QjtBQUFBLCtCQUNFLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFjRCxDQWZEOztLQUFNRixjO0FBaUJTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE2MjBkMDdmMjgzMjYxOGVkMTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VhcmNoRHJvcGRvd24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2hcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQ2xvc2VDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuXHJcbmNvbnN0IFNlYXJjaERyb3Bkb3duID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake2Ake3N0eWxlc1tcInNlYXJjaERyb3Bkb3duLXdyYXBwZXJcIl19IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyYH0gJHtcclxuICAgICAgICAgIHByb3BzLnNlYXJjaE1vZGUgJiYgc3R5bGVzW1wiYWN0aXZlXCJdXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8QWlPdXRsaW5lQ2xvc2VDaXJjbGUgb25DbGljaz17KCk9PnByb3BzLnNldFNlYXJjaE1vZGUoIXByb3BzLnNlYXJjaE1vZGUpfSBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZVNlYXJjaH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWVudS1jb250ZW50XCJdfT5cclxuICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRHJvcGRvd247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=