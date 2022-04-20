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
    className: "container mt-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row justify-content-center form-row",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld0NhckZvcm0uanMiXSwibmFtZXMiOlsiTmV3Q2FyRm9ybSIsInByb3BzIiwiYnJhbmRJbnB1dFJlZiIsInVzZVJlZiIsIm1vZGVsSW5wdXRSZWYiLCJ5ZWFySW5wdXRSZWYiLCJLTUlucHV0UmVmIiwiY29sb3JJbnB1dFJlZiIsImltYWdlSW5wdXRSZWYiLCJjYXJUeXBlSW5wdXRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRCcmFuZCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRNb2RlbCIsImVudGVyZWRZZWFyIiwiZW50ZXJlZEtNIiwiZW50ZXJlZENvbG9yIiwiZW50ZXJlZEltYWdlIiwiZW50ZXJlZENhclR5cGUiLCJjYXJUeXBlRGF0YSIsImZpbHRlciIsIngiLCJ0eXBlIiwiaWQiLCJuZXdDYXIiLCJicmFuZCIsIm1vZGVsIiwieWVhciIsImttIiwiY29sb3IiLCJpbWFnZVVybCIsImNhclR5cGVJZCIsIm9uQWRkTWVldHVwIiwiY2xhc3NlcyIsImNhcmRBZGQiLCJmb3JtIiwiY29udHJvbCIsImNhckRhdGEiLCJtYXAiLCJjYXJUeXBlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTtBQUFBOztBQUN6QixNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxvREFBTSxFQUE1QjtBQUNBLE1BQU1FLFlBQVksR0FBR0Ysb0RBQU0sRUFBM0I7QUFDQSxNQUFNRyxVQUFVLEdBQUdILG9EQUFNLEVBQXpCO0FBQ0EsTUFBTUksYUFBYSxHQUFHSixvREFBTSxFQUE1QjtBQUNBLE1BQU1LLGFBQWEsR0FBR0wsb0RBQU0sRUFBNUI7QUFDQSxNQUFN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O0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1RkQ7O0dBeEhRM0MsVTs7S0FBQUEsVTtBQTBITUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2Fycy9jcmVhdGUuNjBhNDQ0YmY4MTllMTQ1NjM2MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTmV3Q2FyRm9ybS5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBOZXdDYXJGb3JtKHByb3BzKSB7XHJcbiAgY29uc3QgYnJhbmRJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG1vZGVsSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB5ZWFySW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBLTUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY29sb3JJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGltYWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYXJUeXBlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGVudGVyZWRCcmFuZCA9IGJyYW5kSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRNb2RlbCA9IG1vZGVsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRZZWFyID0geWVhcklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkS00gPSBLTUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkQ29sb3IgPSBjb2xvcklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkSW1hZ2UgPSBpbWFnZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkQ2FyVHlwZSA9IHByb3BzLmNhclR5cGVEYXRhLmZpbHRlcihcclxuICAgICAgKHgpID0+IHgudHlwZSA9PT0gY2FyVHlwZUlucHV0UmVmLmN1cnJlbnQudmFsdWVcclxuICAgIClbMF0uaWQ7XHJcblxyXG4gICAgY29uc3QgbmV3Q2FyID0ge1xyXG4gICAgICBicmFuZDogZW50ZXJlZEJyYW5kLFxyXG4gICAgICBtb2RlbDogZW50ZXJlZE1vZGVsLFxyXG4gICAgICB5ZWFyOiBlbnRlcmVkWWVhcixcclxuICAgICAga206IGVudGVyZWRLTSxcclxuICAgICAgY29sb3I6IGVudGVyZWRDb2xvcixcclxuICAgICAgaW1hZ2VVcmw6IGVudGVyZWRJbWFnZSxcclxuICAgICAgY2FyVHlwZUlkOiBlbnRlcmVkQ2FyVHlwZSxcclxuICAgIH07XHJcbiAgICBwcm9wcy5vbkFkZE1lZXR1cChuZXdDYXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBmb3JtLXJvd1wiPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXtjbGFzc2VzLmNhcmRBZGR9PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPkJyYW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuY2FyRGF0YSA/IHByb3BzLmNhckRhdGEuYnJhbmQgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgcmVmPXticmFuZElucHV0UmVmfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vZGVsXCI+TW9kZWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwibW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5jYXJEYXRhID8gcHJvcHMuY2FyRGF0YS5tb2RlbCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICByZWY9e21vZGVsSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwieWVhclwiPlllYXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwieWVhclwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNhckRhdGEgPyBwcm9wcy5jYXJEYXRhLnllYXIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgcmVmPXt5ZWFySW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwia21cIj5LTTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBpZD1cImttXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuY2FyRGF0YSA/IHByb3BzLmNhckRhdGEua20gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgcmVmPXtLTUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbG9yXCI+Q29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5jYXJEYXRhID8gcHJvcHMuY2FyRGF0YS5jb2xvciA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICByZWY9e2NvbG9ySW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmNhckRhdGEgPyBwcm9wcy5jYXJEYXRhLmltYWdlVXJsIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dFJlZn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXJUeXBlXCI+Q2FyVHlwZUlkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0IHJlZj17Y2FyVHlwZUlucHV0UmVmfSBuYW1lPVwiY2Fyc1wiIGlkPVwiY2Fyc1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNhclR5cGVEYXRhPy5tYXAoKHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgIHguaWQgPT09IHByb3BzLmNhckRhdGE/LmNhclR5cGUuaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt4LnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7eC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5BZGQgTWVldHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdDYXJGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9