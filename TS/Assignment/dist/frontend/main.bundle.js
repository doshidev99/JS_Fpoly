/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/frontend/app.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend/app.ts":
/*!*****************************!*\
  !*** ./src/frontend/app.ts ***!
  \*****************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_GameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/GameController */ "./src/frontend/controllers/GameController.ts");
/* harmony import */ var _models_GameItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/GameItem */ "./src/frontend/models/GameItem.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const rootEl = document.querySelector('#app');
let gameApp = null;
const url = 'https://pokeapi.co/api/v2/pokemon/';
const AMOUNT_POKEMON = 5;
const targetResult = ((url, amount) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 1; i < amount + 1; i++) {
        const res = yield fetch(url + i);
        const data = yield res.json();
        const pokemon = {
            id: i,
            // name: data.species.name,
            image: data.sprites.front_default,
            // type: data.types[0].type.name
        };
        // eslint-disable-next-line no-console
        // console.log(pokemon.image, '<----');
        // const listPoke: [] = []
        // if (rootEl) {
        // 	gameApp = new GameController([...listPoke, new GameItem(pokemon.id, '', pokemon.image)], rootEl);
        // 	gameApp.renderGameBoard();
        // }
    }
}))(url, AMOUNT_POKEMON);
// const loadPoke = pokes.reduce((t, p): any => {
// 	[...t, new GameItem(p.id, '', p.image)]
// }, [])
if (rootEl) {
    gameApp = new _controllers_GameController__WEBPACK_IMPORTED_MODULE_0__[/* GameController */ "a"]([
        new _models_GameItem__WEBPACK_IMPORTED_MODULE_1__[/* GameItem */ "a"](1, '', 'pk1.png'),
        new _models_GameItem__WEBPACK_IMPORTED_MODULE_1__[/* GameItem */ "a"](2, '', 'pk2.png'),
        new _models_GameItem__WEBPACK_IMPORTED_MODULE_1__[/* GameItem */ "a"](3, '', 'pk3.png'),
    ], rootEl);
    gameApp.renderGameBoard();
}


/***/ }),

/***/ "./src/frontend/controllers/GameController.ts":
/*!****************************************************!*\
  !*** ./src/frontend/controllers/GameController.ts ***!
  \****************************************************/
/*! exports provided: GameController */
/*! exports used: GameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameController; });
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_GameItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/GameItem */ "./src/frontend/models/GameItem.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class GameController {
    constructor(items, element) {
        this.element = element;
        this.items = [];
        this.initGame(items);
    }
    initGame(initialData) {
        for (const item of initialData) {
            this.items.push(item);
            this.items.push(new _models_GameItem__WEBPACK_IMPORTED_MODULE_2__[/* GameItem */ "a"](item.id, item.divId, item.image));
            // duplicate item
        }
        let id = 1;
        this.items.forEach(v => {
            v.status = _models_GameItem__WEBPACK_IMPORTED_MODULE_2__[/* GameItemStatus */ "b"].Close;
            v.divId = 'd' + id,
                id++;
        });
    }
    reInitGame() {
    }
    // isWinnerGame(): boolean {
    // }
    renderHtml(rootEl, item) {
        const divItem = document.createElement('div');
        divItem.className = 'col-2 poke-card mx-1 my-3';
        divItem.id = item.divId;
        divItem.addEventListener('click', this.processGameItemClicked);
        const imgItem = document.createElement('img');
        imgItem.src = `images/${item.image}`;
        imgItem.className = 'w-100 h-100 img-poke visible';
        divItem.appendChild(imgItem);
        rootEl.appendChild(divItem);
    }
    renderResetBtn(rootEl) {
    }
    renderGameBoard() {
        this.shuffle();
        let boardDiv = this.element.querySelector('#board');
        if (boardDiv) {
            this.items.forEach(it => {
                this.renderHtml(boardDiv, it);
            });
        }
    }
    // isMatched(id: number, imgEl: HTMLImageElement): boolean { }
    changeMatchedBackground(imgEl, isMatched = true) { }
    processGameItemClicked(e) {
        let el = e.target;
        if (el.tagName === 'img') {
            el = el.parentElement;
        }
        for (const item of this.items) {
            switch (true) {
                case item.divId === (el === null || el === void 0 ? void 0 : el.id):
                case !item.isMatched:
                case item.status === _models_GameItem__WEBPACK_IMPORTED_MODULE_2__[/* GameItemStatus */ "b"].Close:
                    let imgEl = el === null || el === void 0 ? void 0 : el.querySelector('img');
                    if (imgEl) {
                        imgEl.className = "w-100 h-100 img-poke visible";
                    }
                    break;
                default: return;
            }
        }
    }
    processResetBtnClicked(e) { }
    shuffle() {
        this.items = lodash__WEBPACK_IMPORTED_MODULE_1__["shuffle"](this.items);
    }
}
__decorate([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
], GameController.prototype, "processGameItemClicked", null);


/***/ }),

/***/ "./src/frontend/models/GameItem.ts":
/*!*****************************************!*\
  !*** ./src/frontend/models/GameItem.ts ***!
  \*****************************************/
/*! exports provided: GameItemStatus, GameItem */
/*! exports used: GameItem, GameItemStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GameItemStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameItem; });
var GameItemStatus;
(function (GameItemStatus) {
    GameItemStatus[GameItemStatus["Open"] = 0] = "Open";
    GameItemStatus[GameItemStatus["Close"] = 1] = "Close";
})(GameItemStatus || (GameItemStatus = {}));
class GameItem {
    constructor(id, divId, image, status = GameItemStatus.Close, isMatched = false, imageEl = null) {
        this.id = id;
        this.divId = divId;
        this.image = image;
        this.status = status;
        this.isMatched = isMatched;
        this.imageEl = imageEl;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map