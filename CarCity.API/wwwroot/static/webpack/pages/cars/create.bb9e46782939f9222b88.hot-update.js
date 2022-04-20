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
              lineNumber: 47,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "title",
              defaultValue: props.carData ? props.carData.brand : "",
              ref: brandInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "model",
              children: "Model"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "model",
              defaultValue: props.carData ? props.carData.model : "",
              ref: modelInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "year",
              children: "Year"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "year",
              defaultValue: props.carData ? props.carData.year : "",
              ref: yearInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "km",
              children: "KM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              id: "km",
              type: "text",
              defaultValue: props.carData ? props.carData.km : "",
              ref: KMInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "color",
              children: "Color"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              required: true,
              type: "text",
              id: "color",
              defaultValue: props.carData ? props.carData.color : "",
              ref: colorInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "image",
              children: "Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "image",
              defaultValue: props.carData ? props.carData.imageUrl : "",
              ref: imageInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "carType",
              children: "CarTypeId"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 13
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
                  lineNumber: 109,
                  columnNumber: 17
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: "Add Meetup"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld0NhckZvcm0uanMiXSwibmFtZXMiOlsiTmV3Q2FyRm9ybSIsInByb3BzIiwiYnJhbmRJbnB1dFJlZiIsInVzZVJlZiIsIm1vZGVsSW5wdXRSZWYiLCJ5ZWFySW5wdXRSZWYiLCJLTUlucHV0UmVmIiwiY29sb3JJbnB1dFJlZiIsImltYWdlSW5wdXRSZWYiLCJjYXJUeXBlSW5wdXRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRCcmFuZCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRNb2RlbCIsImVudGVyZWRZZWFyIiwiZW50ZXJlZEtNIiwiZW50ZXJlZENvbG9yIiwiZW50ZXJlZEltYWdlIiwiZW50ZXJlZENhclR5cGUiLCJjYXJUeXBlRGF0YSIsImZpbHRlciIsIngiLCJ0eXBlIiwiaWQiLCJuZXdDYXIiLCJicmFuZCIsIm1vZGVsIiwieWVhciIsImttIiwiY29sb3IiLCJpbWFnZVVybCIsImNhclR5cGVJZCIsIm9uQWRkTWVldHVwIiwiY2xhc3NlcyIsImNhcmRBZGQiLCJmb3JtIiwiY29udHJvbCIsImNhckRhdGEiLCJtYXAiLCJjYXJUeXBlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTtBQUFBOztBQUN6QixNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxvREFBTSxFQUE1QjtBQUNBLE1BQU1FLFlBQVksR0FBR0Ysb0RBQU0sRUFBM0I7QUFDQSxNQUFNRyxVQUFVLEdBQUdILG9EQUFNLEVBQXpCO0FBQ0EsTUFBTUksYUFBYSxHQUFHSixvREFBTSxFQUE1QjtBQUNBLE1BQU1LLGFBQWEsR0FBR0wsb0RBQU0sRUFBNUI7QUFDQSxNQUFN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QUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdHRDs7R0FqSVEzQyxVOztLQUFBQSxVO0FBbUlNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJzL2NyZWF0ZS5iYjllNDY3ODI5MzlmOTIyMmI4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vdWkvQ2FyZFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9OZXdDYXJGb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE5ld0NhckZvcm0ocHJvcHMpIHtcclxuICBjb25zdCBicmFuZElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbW9kZWxJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHllYXJJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IEtNSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjb2xvcklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgaW1hZ2VJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNhclR5cGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZW50ZXJlZEJyYW5kID0gYnJhbmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZE1vZGVsID0gbW9kZWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFllYXIgPSB5ZWFySW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRLTSA9IEtNSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRDb2xvciA9IGNvbG9ySW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRJbWFnZSA9IGltYWdlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRDYXJUeXBlID0gcHJvcHMuY2FyVHlwZURhdGEuZmlsdGVyKFxyXG4gICAgICAoeCkgPT4geC50eXBlID09PSBjYXJUeXBlSW5wdXRSZWYuY3VycmVudC52YWx1ZVxyXG4gICAgKVswXS5pZDtcclxuXHJcbiAgICBjb25zdCBuZXdDYXIgPSB7XHJcbiAgICAgIGJyYW5kOiBlbnRlcmVkQnJhbmQsXHJcbiAgICAgIG1vZGVsOiBlbnRlcmVkTW9kZWwsXHJcbiAgICAgIHllYXI6IGVudGVyZWRZZWFyLFxyXG4gICAgICBrbTogZW50ZXJlZEtNLFxyXG4gICAgICBjb2xvcjogZW50ZXJlZENvbG9yLFxyXG4gICAgICBpbWFnZVVybDogZW50ZXJlZEltYWdlLFxyXG4gICAgICBjYXJUeXBlSWQ6IGVudGVyZWRDYXJUeXBlLFxyXG4gICAgfTtcclxuICAgIHByb3BzLm9uQWRkTWVldHVwKG5ld0Nhcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdj5cclxuXHJcbiAgICBcclxuICAgICAgPENhcmQgc3R5bGU9e2NsYXNzZXMuY2FyZEFkZH0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+QnJhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNhckRhdGEgPyBwcm9wcy5jYXJEYXRhLmJyYW5kIDogXCJcIn1cclxuICAgICAgICAgICAgICByZWY9e2JyYW5kSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vZGVsXCI+TW9kZWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGVsXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNhckRhdGEgPyBwcm9wcy5jYXJEYXRhLm1vZGVsIDogXCJcIn1cclxuICAgICAgICAgICAgICByZWY9e21vZGVsSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInllYXJcIj5ZZWFyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgaWQ9XCJ5ZWFyXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNhckRhdGEgPyBwcm9wcy5jYXJEYXRhLnllYXIgOiBcIlwifVxyXG4gICAgICAgICAgICAgIHJlZj17eWVhcklucHV0UmVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJrbVwiPktNPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJrbVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuY2FyRGF0YSA/IHByb3BzLmNhckRhdGEua20gOiBcIlwifVxyXG4gICAgICAgICAgICAgIHJlZj17S01JbnB1dFJlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29sb3JcIj5Db2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuY2FyRGF0YSA/IHByb3BzLmNhckRhdGEuY29sb3IgOiBcIlwifVxyXG4gICAgICAgICAgICAgIHJlZj17Y29sb3JJbnB1dFJlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuY2FyRGF0YSA/IHByb3BzLmNhckRhdGEuaW1hZ2VVcmwgOiBcIlwifVxyXG4gICAgICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dFJlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FyVHlwZVwiPkNhclR5cGVJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgcmVmPXtjYXJUeXBlSW5wdXRSZWZ9IG5hbWU9XCJjYXJzXCIgaWQ9XCJjYXJzXCI+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmNhclR5cGVEYXRhPy5tYXAoKHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHguaWQgPT09IHByb3BzLmNhckRhdGE/LmNhclR5cGUuaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3gudHlwZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3gudHlwZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiY2FyVHlwZVwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuY2FyRGF0YSA/IHByb3BzLmNhckRhdGEuY2FyVHlwZS50eXBlIDogXCJcIn1cclxuICAgICAgICAgICAgcmVmPXtjYXJUeXBlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgIDxidXR0b24+QWRkIE1lZXR1cDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Q2FyRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==