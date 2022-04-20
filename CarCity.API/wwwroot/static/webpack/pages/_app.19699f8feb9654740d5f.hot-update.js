webpackHotUpdate_N_E("pages/_app",{

/***/ "./api/agent.ts":
/*!**********************!*\
  !*** ./api/agent.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_ilham_baghirov_Desktop_nextCarGallery_NextJSAppCarGallery_NextJSAppCarGallery_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ilham_baghirov_Desktop_nextCarGallery_NextJSAppCarGallery_NextJSAppCarGallery_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ilham_baghirov_Desktop_nextCarGallery_NextJSAppCarGallery_NextJSAppCarGallery_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ilham_baghirov_Desktop_nextCarGallery_NextJSAppCarGallery_NextJSAppCarGallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);





var sleep = function sleep(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};

axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = "/api";
axios__WEBPACK_IMPORTED_MODULE_2___default.a.interceptors.response.use( /*#__PURE__*/function () {
  var _ref = Object(C_Users_ilham_baghirov_Desktop_nextCarGallery_NextJSAppCarGallery_NextJSAppCarGallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ilham_baghirov_Desktop_nextCarGallery_NextJSAppCarGallery_NextJSAppCarGallery_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(response) {
    return C_Users_ilham_baghirov_Desktop_nextCarGallery_NextJSAppCarGallery_NextJSAppCarGallery_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", response);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), function (error) {
  var _ref2 = error.response,
      data = _ref2.data,
      status = _ref2.status;

  switch (status) {
    case 400:
      console.log(data);
      sweetalert__WEBPACK_IMPORTED_MODULE_3___default()(data.errors[Object.keys(data.errors)[0]][0], {
        icon: "error"
      }); // dark.userStore.errorData = data.errors[Object.keys(data.errors)[0]][0]

      break;

    case 401:
      sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Your are not logged in!", {
        icon: "error"
      });
      break;

    case 404:
      // dark.commonStore.setServerError(data)
      sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Error ala", {
        icon: "error"
      });
      break;

    case 500:
      // dark.commonStore.setServerError(data)
      break;

    default:
      break;
  }

  return Promise.reject(error);
});

var responseBody = function responseBody(response) {
  return response.data;
};

var request = {
  get: function get(url) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(responseBody);
  },
  post: function post(url, body) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, body).then(responseBody);
  },
  put: function put(id, body) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(id, body).then(responseBody);
  },
  "delete": function _delete(url) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"](url).then(responseBody);
  }
};
var Cars = {
  getAll: function getAll() {
    return request.get("/Car/GetAllCars");
  },
  get: function get(id) {
    return request.get("/Car/GetCar/".concat(id));
  },
  create: function create(post) {
    return request.post("/Car/createCar", post);
  },
  edit: function edit(id, post) {
    return request.put("/Car/updateCar/".concat(id), post);
  },
  "delete": function _delete(id) {
    return request["delete"]("/Car/deleteCar/".concat(id));
  },
  search: function search(word) {
    return request.get("/Car/searchCars/".concat(word));
  }
};
var CarTypes = {
  getAll: function getAll() {
    return request.get("CarType/GetAllCarTypes");
  }
};
var agent = {
  Cars: Cars,
  CarTypes: CarTypes
};
/* harmony default export */ __webpack_exports__["default"] = (agent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2FnZW50LnRzIl0sIm5hbWVzIjpbInNsZWVwIiwiZGVsYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN3YWwiLCJlcnJvcnMiLCJPYmplY3QiLCJrZXlzIiwiaWNvbiIsInJlamVjdCIsInJlc3BvbnNlQm9keSIsInJlcXVlc3QiLCJnZXQiLCJ1cmwiLCJ0aGVuIiwicG9zdCIsImJvZHkiLCJwdXQiLCJpZCIsIkNhcnMiLCJnZXRBbGwiLCJjcmVhdGUiLCJlZGl0Iiwic2VhcmNoIiwid29yZCIsIkNhclR5cGVzIiwiYWdlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQW1CO0FBQy9CLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QkMsY0FBVSxDQUFDRCxPQUFELEVBQVVGLEtBQVYsQ0FBVjtBQUNELEdBRk0sQ0FBUDtBQUdELENBSkQ7O0FBTUFJLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF5QixNQUF6QjtBQUVBRiw0Q0FBSyxDQUFDRyxZQUFOLENBQW1CQyxRQUFuQixDQUE0QkMsR0FBNUI7QUFBQSxrWUFDRSxpQkFBT0QsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBRVNBLFFBRlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FERjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLFVBQUNFLEtBQUQsRUFBdUI7QUFBQSxjQUNJQSxLQUFLLENBQUNGLFFBRFY7QUFBQSxNQUNiRyxJQURhLFNBQ2JBLElBRGE7QUFBQSxNQUNQQyxNQURPLFNBQ1BBLE1BRE87O0FBRXJCLFVBQVFBLE1BQVI7QUFDRSxTQUFLLEdBQUw7QUFDRUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUksdURBQUksQ0FBQ0osSUFBSSxDQUFDSyxNQUFMLENBQVlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxJQUFJLENBQUNLLE1BQWpCLEVBQXlCLENBQXpCLENBQVosRUFBeUMsQ0FBekMsQ0FBRCxFQUE4QztBQUNoREcsWUFBSSxFQUFFO0FBRDBDLE9BQTlDLENBQUosQ0FGRixDQUtFOztBQUNBOztBQUNGLFNBQUssR0FBTDtBQUNFSix1REFBSSxDQUFDLHlCQUFELEVBQTRCO0FBQzlCSSxZQUFJLEVBQUU7QUFEd0IsT0FBNUIsQ0FBSjtBQUdBOztBQUNGLFNBQUssR0FBTDtBQUNFO0FBQ0FKLHVEQUFJLENBQUMsV0FBRCxFQUFjO0FBQ2hCSSxZQUFJLEVBQUU7QUFEVSxPQUFkLENBQUo7QUFHQTs7QUFDRixTQUFLLEdBQUw7QUFDRTtBQUNBOztBQUNGO0FBQ0U7QUF2Qko7O0FBeUJBLFNBQU9sQixPQUFPLENBQUNtQixNQUFSLENBQWVWLEtBQWYsQ0FBUDtBQUNELENBakNIOztBQW9DQSxJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFJYixRQUFKO0FBQUEsU0FBbUNBLFFBQVEsQ0FBQ0csSUFBNUM7QUFBQSxDQUFyQjs7QUFFQSxJQUFNVyxPQUFPLEdBQUc7QUFDZEMsS0FBRyxFQUFFLGFBQUlDLEdBQUo7QUFBQSxXQUFvQnBCLDRDQUFLLENBQUNtQixHQUFOLENBQWFDLEdBQWIsRUFBa0JDLElBQWxCLENBQXVCSixZQUF2QixDQUFwQjtBQUFBLEdBRFM7QUFFZEssTUFBSSxFQUFFLGNBQUlGLEdBQUosRUFBaUJHLElBQWpCO0FBQUEsV0FDSnZCLDRDQUFLLENBQUNzQixJQUFOLENBQWNGLEdBQWQsRUFBbUJHLElBQW5CLEVBQXlCRixJQUF6QixDQUE4QkosWUFBOUIsQ0FESTtBQUFBLEdBRlE7QUFJZE8sS0FBRyxFQUFFLGFBQUlDLEVBQUosRUFBZ0JGLElBQWhCO0FBQUEsV0FBNkJ2Qiw0Q0FBSyxDQUFDd0IsR0FBTixDQUFhQyxFQUFiLEVBQWlCRixJQUFqQixFQUF1QkYsSUFBdkIsQ0FBNEJKLFlBQTVCLENBQTdCO0FBQUEsR0FKUztBQUtkLFlBQVEsaUJBQUlHLEdBQUo7QUFBQSxXQUFvQnBCLDRDQUFLLFVBQUwsQ0FBZ0JvQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEJKLFlBQTFCLENBQXBCO0FBQUE7QUFMTSxDQUFoQjtBQU9BLElBQU1TLElBQUksR0FBRztBQUNYQyxRQUFNLEVBQUU7QUFBQSxXQUFNVCxPQUFPLENBQUNDLEdBQVIsbUJBQU47QUFBQSxHQURHO0FBRVhBLEtBQUcsRUFBRSxhQUFDTSxFQUFEO0FBQUEsV0FBZ0JQLE9BQU8sQ0FBQ0MsR0FBUix1QkFBZ0NNLEVBQWhDLEVBQWhCO0FBQUEsR0FGTTtBQUdYRyxRQUFNLEVBQUUsZ0JBQUNOLElBQUQ7QUFBQSxXQUF5QkosT0FBTyxDQUFDSSxJQUFSLG1CQUF1Q0EsSUFBdkMsQ0FBekI7QUFBQSxHQUhHO0FBSVhPLE1BQUksRUFBRSxjQUFDSixFQUFELEVBQWFILElBQWI7QUFBQSxXQUNKSixPQUFPLENBQUNNLEdBQVIsMEJBQW9DQyxFQUFwQyxHQUEwQ0gsSUFBMUMsQ0FESTtBQUFBLEdBSks7QUFNWCxZQUFRLGlCQUFDRyxFQUFEO0FBQUEsV0FBZ0JQLE9BQU8sVUFBUCwwQkFBdUNPLEVBQXZDLEVBQWhCO0FBQUEsR0FORztBQU9YSyxRQUFNLEVBQUUsZ0JBQUNDLElBQUQ7QUFBQSxXQUNOYixPQUFPLENBQUNDLEdBQVIsMkJBQTZDWSxJQUE3QyxFQURNO0FBQUE7QUFQRyxDQUFiO0FBVUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZMLFFBQU0sRUFBRTtBQUFBLFdBQU1ULE9BQU8sQ0FBQ0MsR0FBUiwwQkFBTjtBQUFBO0FBRE8sQ0FBakI7QUFJQSxJQUFNYyxLQUFLLEdBQUc7QUFDWlAsTUFBSSxFQUFKQSxJQURZO0FBRVpNLFVBQVEsRUFBUkE7QUFGWSxDQUFkO0FBSWVDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTk2OTlmOGZlYjk2NTQ3NDBkNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvcywgQXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgeyBDYXIsIENhckZvcm1WYWx1ZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2NhclwiO1xyXG5pbXBvcnQgeyBDYXJUeXBlIH0gZnJvbSBcIi4uL21vZGVscy9jYXJUeXBlXCI7XHJcblxyXG5jb25zdCBzbGVlcCA9IChkZWxheTogbnVtYmVyKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KTtcclxuICB9KTtcclxufTtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcIi9hcGlcIjtcclxuXHJcbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGF3YWl0IHNsZWVwKDApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sXHJcbiAgKGVycm9yOiBBeGlvc0Vycm9yKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gZXJyb3IucmVzcG9uc2UhO1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSA0MDA6XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc3dhbChkYXRhLmVycm9yc1tPYmplY3Qua2V5cyhkYXRhLmVycm9ycylbMF1dWzBdLCB7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZGFyay51c2VyU3RvcmUuZXJyb3JEYXRhID0gZGF0YS5lcnJvcnNbT2JqZWN0LmtleXMoZGF0YS5lcnJvcnMpWzBdXVswXVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQwMTpcclxuICAgICAgICBzd2FsKFwiWW91ciBhcmUgbm90IGxvZ2dlZCBpbiFcIiwge1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQwNDpcclxuICAgICAgICAvLyBkYXJrLmNvbW1vblN0b3JlLnNldFNlcnZlckVycm9yKGRhdGEpXHJcbiAgICAgICAgc3dhbChcIkVycm9yIGFsYVwiLCB7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgIC8vIGRhcmsuY29tbW9uU3RvcmUuc2V0U2VydmVyRXJyb3IoZGF0YSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgcmVzcG9uc2VCb2R5ID0gPFQ+KHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFQ+KSA9PiByZXNwb25zZS5kYXRhO1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IHtcclxuICBnZXQ6IDxUPih1cmw6IHN0cmluZykgPT4gYXhpb3MuZ2V0PFQ+KHVybCkudGhlbihyZXNwb25zZUJvZHkpLFxyXG4gIHBvc3Q6IDxUPih1cmw6IHN0cmluZywgYm9keToge30pID0+XHJcbiAgICBheGlvcy5wb3N0PFQ+KHVybCwgYm9keSkudGhlbihyZXNwb25zZUJvZHkpLFxyXG4gIHB1dDogPFQ+KGlkOiBzdHJpbmcsIGJvZHk6IHt9KSA9PiBheGlvcy5wdXQ8VD4oaWQsIGJvZHkpLnRoZW4ocmVzcG9uc2VCb2R5KSxcclxuICBkZWxldGU6IDxUPih1cmw6IHN0cmluZykgPT4gYXhpb3MuZGVsZXRlPFQ+KHVybCkudGhlbihyZXNwb25zZUJvZHkpLFxyXG59O1xyXG5jb25zdCBDYXJzID0ge1xyXG4gIGdldEFsbDogKCkgPT4gcmVxdWVzdC5nZXQ8Q2FyW10+KGAvQ2FyL0dldEFsbENhcnNgKSxcclxuICBnZXQ6IChpZDogbnVtYmVyKSA9PiByZXF1ZXN0LmdldDxDYXI+KGAvQ2FyL0dldENhci8ke2lkfWApLFxyXG4gIGNyZWF0ZTogKHBvc3Q6IENhckZvcm1WYWx1ZXMpID0+IHJlcXVlc3QucG9zdDxudW1iZXI+KGAvQ2FyL2NyZWF0ZUNhcmAsIHBvc3QpLFxyXG4gIGVkaXQ6IChpZDogbnVtYmVyLCBwb3N0OiBDYXJGb3JtVmFsdWVzKSA9PlxyXG4gICAgcmVxdWVzdC5wdXQ8dm9pZD4oYC9DYXIvdXBkYXRlQ2FyLyR7aWR9YCwgcG9zdCksXHJcbiAgZGVsZXRlOiAoaWQ6IG51bWJlcikgPT4gcmVxdWVzdC5kZWxldGU8dm9pZD4oYC9DYXIvZGVsZXRlQ2FyLyR7aWR9YCksXHJcbiAgc2VhcmNoOiAod29yZDogc3RyaW5nKSA9PlxyXG4gICAgcmVxdWVzdC5nZXQ8Q2FyW10gfCBudWxsPihgL0Nhci9zZWFyY2hDYXJzLyR7d29yZH1gKSxcclxufTtcclxuY29uc3QgQ2FyVHlwZXMgPSB7XHJcbiAgZ2V0QWxsOiAoKSA9PiByZXF1ZXN0LmdldDxDYXJUeXBlW10+KGBDYXJUeXBlL0dldEFsbENhclR5cGVzYCksXHJcbn07XHJcblxyXG5jb25zdCBhZ2VudCA9IHtcclxuICBDYXJzLFxyXG4gIENhclR5cGVzLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBhZ2VudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==