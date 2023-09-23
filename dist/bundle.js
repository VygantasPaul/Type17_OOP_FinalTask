/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Animal.ts":
/*!***********************!*\
  !*** ./src/Animal.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Animal: () => (/* binding */ Animal)\n/* harmony export */ });\nvar Animal = /** @class */ (function () {\n    function Animal(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    return Animal;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Animal.ts?");

/***/ }),

/***/ "./src/Animals/Elephant.ts":
/*!*********************************!*\
  !*** ./src/Animals/Elephant.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Elephant: () => (/* binding */ Elephant)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animal */ \"./src/Animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Elephant = /** @class */ (function (_super) {\n    __extends(Elephant, _super);\n    function Elephant(name, age, weight) {\n        var _this = _super.call(this, name, age) || this;\n        _this.weight = weight;\n        return _this;\n    }\n    Elephant.prototype.swim = function () {\n        console.log(\"Elephant called \".concat(this.name, \" elephant can swim \"));\n    };\n    Elephant.prototype.hunt = function () {\n        console.log(\"Elephant called \".concat(this.name, \" can hunt.\"));\n    };\n    Elephant.prototype.makeSound = function () {\n        console.log(\"Elephant called \".concat(this.name, \" can make sound.\"));\n    };\n    Elephant.prototype.setWeight = function (newWeight) {\n        this.weight = newWeight;\n        console.log(\"Elephant called \".concat(this.name, \" weight \").concat(newWeight, \".\"));\n    };\n    return Elephant;\n}(_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Animals/Elephant.ts?");

/***/ }),

/***/ "./src/Animals/Tiger.ts":
/*!******************************!*\
  !*** ./src/Animals/Tiger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tiger: () => (/* binding */ Tiger)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animal */ \"./src/Animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Tiger = /** @class */ (function (_super) {\n    __extends(Tiger, _super);\n    function Tiger(name, age, outsideFromCage) {\n        var _this = _super.call(this, name, age) || this;\n        _this.outsideFromCage = outsideFromCage;\n        return _this;\n    }\n    Tiger.prototype.run = function () {\n        console.log(\"Tiger which name is \".concat(this.name, \" can run \"));\n    };\n    Tiger.prototype.jump = function () {\n        console.log(\"Tiger which name is \".concat(this.name, \" can jump.\"));\n    };\n    Tiger.prototype.makeSound = function () {\n        console.log(\"Tiger which name is \".concat(this.name, \" can makes sound.\"));\n    };\n    Tiger.prototype.setGoGoutsideCage = function (goOutsideFromCage) {\n        this.outsideFromCage = goOutsideFromCage;\n        if (goOutsideFromCage) {\n            console.log(\"Tiger which name is \".concat(this.name, \" is going outside the cage.\"));\n        }\n        else {\n            console.log(\"Tiger which name is \".concat(this.name, \" is staying inside the cage.\"));\n        }\n    };\n    return Tiger;\n}(_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Animals/Tiger.ts?");

/***/ }),

/***/ "./src/Animals/Zebra.ts":
/*!******************************!*\
  !*** ./src/Animals/Zebra.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Zebra: () => (/* binding */ Zebra)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animal */ \"./src/Animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Zebra = /** @class */ (function (_super) {\n    __extends(Zebra, _super);\n    function Zebra(name, age, max_speed, origin) {\n        var _this = _super.call(this, name, age) || this;\n        _this.max_speed = max_speed;\n        _this.origin = origin;\n        return _this;\n    }\n    Zebra.prototype.makeSound = function () {\n        console.log(\"Zebra which name is \".concat(this.name, \" is made sound\"));\n    };\n    Zebra.prototype.walk = function () {\n        console.log(\"Zebra which name is \".concat(this.name, \" is walking max speed \").concat(this.max_speed, \" km/h\"));\n    };\n    Zebra.prototype.setMaxSpeed = function (newSpeed) {\n        this.max_speed = newSpeed;\n        console.log(\"Zebra changed speed to \".concat(newSpeed, \" km/h\"));\n    };\n    Zebra.prototype.setOrigin = function (neworigin) {\n        this.origin = neworigin;\n        console.log(\"Zebra origin \".concat(neworigin));\n    };\n    Zebra.prototype.sleep = function () {\n        console.log(\"Zebra which name is \".concat(this.name, \" is sleep\"));\n    };\n    return Zebra;\n}(_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Animals/Zebra.ts?");

/***/ }),

/***/ "./src/Logger.ts":
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logger: () => (/* binding */ Logger)\n/* harmony export */ });\nvar Logger = /** @class */ (function () {\n    function Logger() {\n        this.messsages = [];\n    }\n    Logger.getObject = function () {\n        if (!Logger.instance) {\n            Logger.instance = new Logger();\n            return Logger.instance;\n        }\n        return Logger.instance;\n    };\n    Logger.prototype.log = function (message) {\n        console.log(message);\n        this.messsages.push(message);\n    };\n    Logger.prototype.getLogMessages = function () {\n        return this.messsages;\n    };\n    return Logger;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Logger.ts?");

/***/ }),

/***/ "./src/ZooKeeper.ts":
/*!**************************!*\
  !*** ./src/ZooKeeper.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ZooKeeper: () => (/* binding */ ZooKeeper)\n/* harmony export */ });\nvar ZooKeeper = /** @class */ (function () {\n    function ZooKeeper(name, surname) {\n        this.animals = [];\n        this.name = name;\n        this.surname = surname;\n    }\n    ZooKeeper.prototype.feedAnimal = function (animals) {\n        console.log(\"Zookeeper - \".concat(this.name, \" \").concat(this.surname, \" is feeding \").concat(animals.name, \" at \").concat(new Date().toLocaleTimeString()));\n    };\n    return ZooKeeper;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/ZooKeeper.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Animals_Zebra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animals/Zebra */ \"./src/Animals/Zebra.ts\");\n/* harmony import */ var _Animals_Elephant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animals/Elephant */ \"./src/Animals/Elephant.ts\");\n/* harmony import */ var _Animals_Tiger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animals/Tiger */ \"./src/Animals/Tiger.ts\");\n/* harmony import */ var _ZooKeeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZooKeeper */ \"./src/ZooKeeper.ts\");\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logger */ \"./src/Logger.ts\");\n\n\n\n\n\nvar zebra = new _Animals_Zebra__WEBPACK_IMPORTED_MODULE_0__.Zebra(\"Zebriukas dryzius\", 5, 60, \"Africa\");\nvar elephant = new _Animals_Elephant__WEBPACK_IMPORTED_MODULE_1__.Elephant(\"Dumbo\", 10, 5000);\nvar tiger = new _Animals_Tiger__WEBPACK_IMPORTED_MODULE_2__.Tiger(\"Symba\", 7, true);\nvar zooKeper = new _ZooKeeper__WEBPACK_IMPORTED_MODULE_3__.ZooKeeper(\"Johm\", \"Black\");\nconsole.groupCollapsed(\"zooKeper\");\nzooKeper.feedAnimal(zebra);\nzooKeper.feedAnimal(elephant);\nzooKeper.feedAnimal(tiger);\nconsole.groupEnd();\nconsole.groupCollapsed(\"zebra\");\nzebra.walk();\nzebra.makeSound();\nzebra.setMaxSpeed(90);\nzebra.setOrigin(\"Zimbabve\");\nconsole.groupEnd();\nconsole.groupCollapsed(\"elephant\");\nelephant.hunt();\nelephant.makeSound();\nelephant.swim();\nelephant.setWeight(120);\nconsole.groupEnd();\nconsole.groupCollapsed(\"tiger\");\ntiger.run();\ntiger.makeSound();\ntiger.jump();\ntiger.setGoGoutsideCage(false);\nconsole.groupEnd();\nconsole.groupCollapsed(\"Logger\");\nvar logger = _Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.getObject();\nlogger.log(\"This is a log message.\");\nlogger.log(\"Another log message.\");\nlogger.log(\"third log message.\");\nvar savedMessages = logger.getLogMessages();\nsavedMessages.forEach(function (message, i) {\n    i += 1;\n    console.log(message + \" - \" + i);\n});\nconsole.groupEnd();\n\n\n//# sourceURL=webpack://wbepack-setup/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;