module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Lbqh");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F0+R":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "NewCarForm_form__1-3jZ",
	"cardAdd": "NewCarForm_cardAdd__2nmMG",
	"control": "NewCarForm_control__1Jbd2",
	"actions": "NewCarForm_actions__2sDYH",
	"formRow": "NewCarForm_formRow__3LHac"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HmCi":
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),

/***/ "Lbqh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YaM9");
/* harmony import */ var _components_meetups_NewCarForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bHkH");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





function CarUpdate(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const createCarHandler = async newCar => {
    console.log(newCar);
    console.log(router.query.updateCarId);
    var response = await _api_agent__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Cars.edit(router.query.updateCarId, newCar);
    router.replace("/cars");
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_meetups_NewCarForm__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onAddMeetup: createCarHandler,
    carData: props.carData,
    carTypeData: props.carTypeData
  });
}

async function getServerSideProps(context) {
  const carId = context.params.updateCarId;
  const response = await _api_agent__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Cars.get(carId);
  const responseCarType = await _api_agent__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].CarTypes.getAll();
  console.log("salam");

  if (response === "") {
    return {
      notFound: true
    };
  }

  return {
    props: {
      carData: response,
      carTypeData: responseCarType
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (CarUpdate);

/***/ }),

/***/ "YaM9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HmCi");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);



const sleep = delay => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "/api";
axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(async response => {
  // if (process.env.NODE_ENV === 'development') await sleep(0);
  return response;
}, error => {
  const {
    data,
    status
  } = error.response;

  switch (status) {
    case 400:
      console.log(data);
      sweetalert__WEBPACK_IMPORTED_MODULE_1___default()(data.errors[Object.keys(data.errors)[0]][0], {
        icon: "error"
      }); // dark.userStore.errorData = data.errors[Object.keys(data.errors)[0]][0]

      break;

    case 401:
      sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Your are not logged in!", {
        icon: "error"
      });
      break;

    case 404:
      // dark.commonStore.setServerError(data)
      sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Error ala", {
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

const responseBody = response => response.data;

const request = {
  get: url => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(responseBody),
  post: (url, body) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, body).then(responseBody),
  put: (id, body) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(id, body).then(responseBody),
  delete: url => axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(url).then(responseBody)
};
const Cars = {
  getAll: () => request.get(`/Car/GetAllCars`),
  get: id => request.get(`/Car/GetCar/${id}`),
  create: post => request.post(`/Car/createCar`, post),
  edit: (id, post) => request.put(`/Car/updateCar/${id}`, post),
  delete: id => request.delete(`/Car/deleteCar/${id}`),
  search: word => request.get(`/Car/searchCars/${word}`)
};
const CarTypes = {
  getAll: () => request.get(`CarType/GetAllCarTypes`)
};
const agent = {
  Cars,
  CarTypes
};
/* harmony default export */ __webpack_exports__["a"] = (agent);

/***/ }),

/***/ "bHkH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("leqP");
/* harmony import */ var _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F0+R");
/* harmony import */ var _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3__);






function NewCarForm(props) {
  var _props$carTypeData;

  const brandInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const modelInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const yearInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const KMInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const colorInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const carTypeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function submitHandler(event) {
    event.preventDefault();
    const enteredBrand = brandInputRef.current.value;
    const enteredModel = modelInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    const enteredKM = KMInputRef.current.value;
    const enteredColor = colorInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredCarType = props.carTypeData.filter(x => x.type === carTypeInputRef.current.value)[0].id;
    const newCar = {
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

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "container mt-2",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: `row justify-content-center ${_NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formRow} `,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        style: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardAdd,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
          className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
          onSubmit: submitHandler,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              htmlFor: "title",
              children: "Brand"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "text",
              required: true,
              id: "title",
              defaultValue: props.carData ? props.carData.brand : "",
              ref: brandInputRef
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              htmlFor: "model",
              children: "Model"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "text",
              required: true,
              id: "model",
              defaultValue: props.carData ? props.carData.model : "",
              ref: modelInputRef
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              htmlFor: "year",
              children: "Year"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "text",
              required: true,
              id: "year",
              defaultValue: props.carData ? props.carData.year : "",
              ref: yearInputRef
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              htmlFor: "km",
              children: "KM"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              id: "km",
              type: "text",
              defaultValue: props.carData ? props.carData.km : "",
              ref: KMInputRef
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              htmlFor: "color",
              children: "Color"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              required: true,
              type: "text",
              id: "color",
              defaultValue: props.carData ? props.carData.color : "",
              ref: colorInputRef
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              htmlFor: "image",
              children: "Image"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "text",
              required: true,
              id: "image",
              defaultValue: props.carData ? props.carData.imageUrl : "",
              ref: imageInputRef
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              htmlFor: "carType",
              children: "CarTypeId"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("select", {
              ref: carTypeInputRef,
              name: "cars",
              id: "cars",
              children: (_props$carTypeData = props.carTypeData) === null || _props$carTypeData === void 0 ? void 0 : _props$carTypeData.map(x => {
                var _props$carData;

                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                  selected: x.id === ((_props$carData = props.carData) === null || _props$carData === void 0 ? void 0 : _props$carData.carType.id) ? "selected" : "",
                  value: x.type,
                  children: x.type
                });
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _NewCarForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              children: "Add Meetup"
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (NewCarForm);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "leqP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rQAc");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);



function Card(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: `${_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card} ${props.style}`,
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "rQAc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });