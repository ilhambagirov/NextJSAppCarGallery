webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/store */ "./stores/store.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\ilham.baghirov\\Desktop\\nextCarGallery\\NextJSAppCarGallery\\NextJSAppCarGallery\\pages\\index.js",
    _s = $RefreshSig$();





/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(_c = _s(function Index() {
  var _this = this;

  _s();

  var _useDarkMode = Object(_stores_store__WEBPACK_IMPORTED_MODULE_1__["useDarkMode"])(),
      carStore = _useDarkMode.carStore;

  var groupedCars = carStore.groupedCars,
      carRegistry = carStore.carRegistry;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    router.replace();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: groupedCars.map(function (car) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: car.value.brand
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}, "MjshhRc7kPh7KZIRD4Q1hUddRFI=", false, function () {
  return [_stores_store__WEBPACK_IMPORTED_MODULE_1__["useDarkMode"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
})));

var _c, _c2;

$RefreshReg$(_c, "%default%$observer");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsib2JzZXJ2ZXIiLCJJbmRleCIsInVzZURhcmtNb2RlIiwiY2FyU3RvcmUiLCJncm91cGVkQ2FycyIsImNhclJlZ2lzdHJ5Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicmVwbGFjZSIsIm1hcCIsImNhciIsInZhbHVlIiwiYnJhbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UscUVBQUFBLGdFQUFRLFNBQUMsU0FBU0MsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLHFCQUNsQkMsaUVBQVcsRUFETztBQUFBLE1BQy9CQyxRQUQrQixnQkFDL0JBLFFBRCtCOztBQUFBLE1BRS9CQyxXQUYrQixHQUVGRCxRQUZFLENBRS9CQyxXQUYrQjtBQUFBLE1BRWxCQyxXQUZrQixHQUVGRixRQUZFLENBRWxCRSxXQUZrQjtBQUd2QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsWUFBSTtBQUNaRixVQUFNLENBQUNHLE9BQVA7QUFDRCxHQUZRLENBQVQ7QUFHQSxzQkFDRTtBQUFBLGNBQ0dMLFdBQVcsQ0FBQ00sR0FBWixDQUFnQixVQUFDQyxHQUFEO0FBQUEsMEJBQ2Y7QUFBQSxrQkFBS0EsR0FBRyxDQUFDQyxLQUFKLENBQVVDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlO0FBQUEsS0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCxDQWRzQjtBQUFBLFVBQ0FYLHlEQURBLEVBR05LLHFEQUhNO0FBQUEsR0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjk1ZTAzZWMyN2QxYzRmZmU5YjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURhcmtNb2RlIH0gZnJvbSBcIi4uL3N0b3Jlcy9zdG9yZVwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0LWxpdGVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgeyBjYXJTdG9yZSB9ID0gdXNlRGFya01vZGUoKTtcclxuICBjb25zdCB7IGdyb3VwZWRDYXJzLCBjYXJSZWdpc3RyeSB9ID0gY2FyU3RvcmU7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHJvdXRlci5yZXBsYWNlKClcclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtncm91cGVkQ2Fycy5tYXAoKGNhcikgPT4gKFxyXG4gICAgICAgIDxsaT57Y2FyLnZhbHVlLmJyYW5kfTwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==