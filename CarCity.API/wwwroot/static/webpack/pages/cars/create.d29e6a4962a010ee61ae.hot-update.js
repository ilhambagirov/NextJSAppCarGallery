webpackHotUpdate_N_E("pages/cars/create",{

/***/ "./components/meetups/NewCarForm.js":
/*!******************************************!*\
  !*** ./components/meetups/NewCarForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewCarForm.module.css */ "./components/meetups/NewCarForm.module.css");
/* harmony import */ var _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ilham.baghirov\\Desktop\\nextCarGallery\\NextJSAppCarGallery\\NextJSAppCarGallery\\components\\meetups\\NewCarForm.js",
    _s = $RefreshSig$();





function NewCarForm(props) {
  _s();

  var _props$carTypeData,
      _this = this;

  var brandInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var modelInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var yearInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var KMInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var colorInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var carTypeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function submitHandler(event) {
    event.preventDefault();
    var enteredBrand = brandInputRef.current.value;
    var enteredModel = modelInputRef.current.value;
    var enteredYear = yearInputRef.current.value;
    var enteredKM = KMInputRef.current.value;
    var enteredColor = colorInputRef.current.value;
    var enteredImage = imageInputRef.current.value;
    var enteredCarType = props.carTypeData.filter(function (x) {
      return x.type === carTypeInputRef.current.value;
    })[0].id;
    var newCar = {
      brand: enteredBrand,
      model: enteredModel,
      year: enteredYear,
      km: enteredKM,
      color: enteredColor,
      imageUrl: enteredImage,
      carTypeId: enteredCarType
    };
    props.onAddMeetup(newCar);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row ",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardAdd,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
          onSubmit: submitHandler,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "title",
              children: "Brand"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "title",
              defaultValue: props.carData ? props.carData.brand : "",
              ref: brandInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "model",
              children: "Model"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "model",
              defaultValue: props.carData ? props.carData.model : "",
              ref: modelInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "year",
              children: "Year"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "year",
              defaultValue: props.carData ? props.carData.year : "",
              ref: yearInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "km",
              children: "KM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              id: "km",
              type: "text",
              defaultValue: props.carData ? props.carData.km : "",
              ref: KMInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "color",
              children: "Color"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              required: true,
              type: "text",
              id: "color",
              defaultValue: props.carData ? props.carData.color : "",
              ref: colorInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "image",
              children: "Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "image",
              defaultValue: props.carData ? props.carData.imageUrl : "",
              ref: imageInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "carType",
              children: "CarTypeId"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              ref: carTypeInputRef,
              name: "cars",
              id: "cars",
              children: (_props$carTypeData = props.carTypeData) === null || _props$carTypeData === void 0 ? void 0 : _props$carTypeData.map(function (x) {
                var _props$carData;

                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  selected: x.id === ((_props$carData = props.carData) === null || _props$carData === void 0 ? void 0 : _props$carData.carType.id) ? "selected" : "",
                  value: x.type,
                  children: x.type
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: "Add Meetup"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(NewCarForm, "W03vV6pVVNe8KIJO9rzUHZ5lYCs=");

_c = NewCarForm;
/* harmony default export */ __webpack_exports__["default"] = (NewCarForm);

var _c;

$RefreshReg$(_c, "NewCarForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld0NhckZvcm0uanMiXSwibmFtZXMiOlsiTmV3Q2FyRm9ybSIsInByb3BzIiwiYnJhbmRJbnB1dFJlZiIsInVzZVJlZiIsIm1vZGVsSW5wdXRSZWYiLCJ5ZWFySW5wdXRSZWYiLCJLTUlucHV0UmVmIiwiY29sb3JJbnB1dFJlZiIsImltYWdlSW5wdXRSZWYiLCJjYXJUeXBlSW5wdXRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRCcmFuZCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRNb2RlbCIsImVudGVyZWRZZWFyIiwiZW50ZXJlZEtNIiwiZW50ZXJlZENvbG9yIiwiZW50ZXJlZEltYWdlIiwiZW50ZXJlZENhclR5cGUiLCJjYXJUeXBlRGF0YSIsImZpbHRlciIsIngiLCJ0eXBlIiwiaWQiLCJuZXdDYXIiLCJicmFuZCIsIm1vZGVsIiwieWVhciIsImttIiwiY29sb3IiLCJpbWFnZVVybCIsImNhclR5cGVJZCIsIm9uQWRkTWVldHVwIiwiY2xhc3NlcyIsImNhcmRBZGQiLCJmb3JtIiwiY29udHJvbCIsImNhckRhdGEiLCJtYXAiLCJjYXJUeXBlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTtBQUFBOztBQUN6QixNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxvREFBTSxFQUE1QjtBQUNBLE1BQU1FLFlBQVksR0FBR0Ysb0RBQU0sRUFBM0I7QUFDQSxNQUFNRyxVQUFVLEdBQUdILG9EQUFNLEVBQXpCO0FBQ0EsTUFBTUksYUFBYSxHQUFHSixvREFBTSxFQUE1QjtBQUNBLE1BQU1LLGFBQWEsR0FBR0wsb0RBQU0sRUFBNUI7QUFDQSxNQUFN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QUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBM0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUZEOztHQXhIUTNDLFU7O0tBQUFBLFU7QUEwSE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnMvY3JlYXRlLmQyOWU2YTQ5NjJhMDEwZWU2MWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi91aS9DYXJkXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL05ld0NhckZvcm0ubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTmV3Q2FyRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IGJyYW5kSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBtb2RlbElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgeWVhcklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgS01JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNvbG9ySW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBpbWFnZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2FyVHlwZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBlbnRlcmVkQnJhbmQgPSBicmFuZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkTW9kZWwgPSBtb2RlbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkWWVhciA9IHllYXJJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZEtNID0gS01JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZENvbG9yID0gY29sb3JJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZEltYWdlID0gaW1hZ2VJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZENhclR5cGUgPSBwcm9wcy5jYXJUeXBlRGF0YS5maWx0ZXIoXHJcbiAgICAgICh4KSA9PiB4LnR5cGUgPT09IGNhclR5cGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlXHJcbiAgICApWzBdLmlkO1xyXG5cclxuICAgIGNvbnN0IG5ld0NhciA9IHtcclxuICAgICAgYnJhbmQ6IGVudGVyZWRCcmFuZCxcclxuICAgICAgbW9kZWw6IGVudGVyZWRNb2RlbCxcclxuICAgICAgeWVhcjogZW50ZXJlZFllYXIsXHJcbiAgICAgIGttOiBlbnRlcmVkS00sXHJcbiAgICAgIGNvbG9yOiBlbnRlcmVkQ29sb3IsXHJcbiAgICAgIGltYWdlVXJsOiBlbnRlcmVkSW1hZ2UsXHJcbiAgICAgIGNhclR5cGVJZDogZW50ZXJlZENhclR5cGUsXHJcbiAgICB9O1xyXG4gICAgcHJvcHMub25BZGRNZWV0dXAobmV3Q2FyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17Y2xhc3Nlcy5jYXJkQWRkfT5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5CcmFuZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNhckRhdGEgPyBwcm9wcy5jYXJEYXRhLmJyYW5kIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIHJlZj17YnJhbmRJbnB1dFJlZn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb2RlbFwiPk1vZGVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1vZGVsXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuY2FyRGF0YSA/IHByb3BzLmNhckRhdGEubW9kZWwgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgcmVmPXttb2RlbElucHV0UmVmfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInllYXJcIj5ZZWFyPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBpZD1cInllYXJcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5jYXJEYXRhID8gcHJvcHMuY2FyRGF0YS55ZWFyIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIHJlZj17eWVhcklucHV0UmVmfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImttXCI+S008L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJrbVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNhckRhdGEgPyBwcm9wcy5jYXJEYXRhLmttIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIHJlZj17S01JbnB1dFJlZn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2xvclwiPkNvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuY2FyRGF0YSA/IHByb3BzLmNhckRhdGEuY29sb3IgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgcmVmPXtjb2xvcklucHV0UmVmfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+SW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5jYXJEYXRhID8gcHJvcHMuY2FyRGF0YS5pbWFnZVVybCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICByZWY9e2ltYWdlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FyVHlwZVwiPkNhclR5cGVJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCByZWY9e2NhclR5cGVJbnB1dFJlZn0gbmFtZT1cImNhcnNcIiBpZD1cImNhcnNcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jYXJUeXBlRGF0YT8ubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LmlkID09PSBwcm9wcy5jYXJEYXRhPy5jYXJUeXBlLmlkID8gXCJzZWxlY3RlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3gudHlwZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24+QWRkIE1lZXR1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Q2FyRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==