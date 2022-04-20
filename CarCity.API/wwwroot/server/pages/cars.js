module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4ONn");


/***/ }),

/***/ "4ONn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./api/agent.ts
var agent = __webpack_require__("YaM9");

// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__("leqP");

// EXTERNAL MODULE: ./components/meetups/CarItem.module.css
var CarItem_module = __webpack_require__("kypE");
var CarItem_module_default = /*#__PURE__*/__webpack_require__.n(CarItem_module);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/meetups/CarItem.js







function MeetupItem(props) {
  const router = Object(router_["useRouter"])();

  const showDetailHandler = () => {
    router.push("/cars/" + props.id);
  };

  const deleteHandler = async () => {
    await agent["a" /* default */].Cars.delete(props.id);
    router.push("/cars");
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
    className: `${CarItem_module_default.a.item} col-xl-3 col-lg-4 col-md-6 `,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
      style: CarItem_module_default.a.Card,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: CarItem_module_default.a.image,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: props.image,
          alt: props.brand
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: CarItem_module_default.a.content,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: props.brand
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          children: props.model
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: props.year
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: CarItem_module_default.a.actions,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "me-2",
          onClick: showDetailHandler,
          children: "Show Details"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: deleteHandler,
          children: "Delete"
        })]
      })]
    })
  });
}

/* harmony default export */ var CarItem = (MeetupItem);
// EXTERNAL MODULE: ./components/meetups/CarList.module.css
var CarList_module = __webpack_require__("kEFV");
var CarList_module_default = /*#__PURE__*/__webpack_require__.n(CarList_module);

// CONCATENATED MODULE: ./components/meetups/CarList.tsx



function CarList({
  cars
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: `${CarList_module_default.a.list} row`,
      children: cars === null || cars === void 0 ? void 0 : cars.map(car => /*#__PURE__*/Object(jsx_runtime_["jsx"])(CarItem, {
        id: car.id,
        brand: car.brand,
        model: car.model,
        image: car.imageUrl,
        year: car.year
      }, car.id))
    })
  });
}
// EXTERNAL MODULE: ./stores/store.ts + 1 modules
var store = __webpack_require__("RER4");

// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__("nazx");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./pages/cars/index.jsx






/* harmony default export */ var pages_cars = __webpack_exports__["default"] = (Object(external_mobx_react_lite_["observer"])(function Cars(props) {
  // const { carStore } = useDarkMode();
  // const { loadCars, groupedCars } = carStore;
  // useEffect(() => {
  //   loadCars(props.cars);
  // }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CarList, {
    cars: props.cars
  });
}));
async function getServerSideProps() {
  const res = await agent["a" /* default */].Cars.getAll();
  console.log(res);
  return {
    props: {
      cars: res
    }
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HmCi":
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),

/***/ "RER4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useDarkMode; });

// UNUSED EXPORTS: dark, Context

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__("VBo9");

// CONCATENATED MODULE: ./stores/carStore.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class carStore_CarStore {
  constructor() {
    _defineProperty(this, "carRegistry", new Map());

    _defineProperty(this, "loading", false);

    _defineProperty(this, "loadCars", async cars => {
      try {
        console.log(cars);
        cars.forEach(a => {
          this.setActivity(a);
        });
      } catch (error) {
        console.log(error);
      }
    });

    _defineProperty(this, "getPost", id => {
      return this.carRegistry.get(id);
    });

    _defineProperty(this, "setActivity", a => {
      this.carRegistry.set(a.id, a);
    });

    Object(external_mobx_["makeAutoObservable"])(this);
  }

  get groupedCars() {
    var result = Array.from(this.carRegistry, ([id, value]) => ({
      id,
      value
    })).sort(function (a, b) {
      var dateA = new Date(a.value.createdDate).getTime();
      var dateB = new Date(b.value.createdDate).getTime();
      return dateA < dateB ? 1 : -1;
    });
    return result;
  } // deletePost = async (id: number) => {
  //     try {
  //         const post = await agent.Posts.delete(id);
  //         runInAction(() => {
  //             this.postRegistry.delete(id)
  //         })
  //         var profile = dark.profileStore.profile as User
  //         profile.posts.length--
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }


}
// CONCATENATED MODULE: ./stores/store.ts



const dark = {
  carStore: new carStore_CarStore()
};
const Context = /*#__PURE__*/Object(external_react_["createContext"])(dark);
function useDarkMode() {
  return Object(external_react_["useContext"])(Context);
}

/***/ }),

/***/ "VBo9":
/***/ (function(module, exports) {

module.exports = require("mobx");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kEFV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "CarList_list__2Jf2v"
};


/***/ }),

/***/ "kypE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "CarItem_item__3NpTj",
	"image": "CarItem_image__2NjRC",
	"content": "CarItem_content__35GOo",
	"actions": "CarItem_actions__5uy5J"
};


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

/***/ "nazx":
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

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