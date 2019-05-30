/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 	};
/******/
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
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".main.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/scss/style.scss":
/*!*****************************!*\
  !*** ./dev/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./dev/ts/config.json":
/*!****************************!*\
  !*** ./dev/ts/config.json ***!
  \****************************/
/*! exports provided: languages, game, default */
/***/ (function(module) {

module.exports = {"languages":["en","nl"],"game":{"activePokemon":386,"scorePerQuestion":3,"secondsPerQuestion":8,"initialLoaderActiveTimeOut":400,"loadScreenActiveTimeOut":2000}};

/***/ }),

/***/ "./dev/ts/game.ts":
/*!************************!*\
  !*** ./dev/ts/game.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.json */ "./dev/ts/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./dev/ts/config.json", 1);
/* harmony import */ var _pokemon_pokemonfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemon/pokemonfactory */ "./dev/ts/pokemon/pokemonfactory.ts");
/* harmony import */ var _quiz_quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz/quiz */ "./dev/ts/quiz/quiz.ts");
/* harmony import */ var _helpers_translator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/translator */ "./dev/ts/helpers/translator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Game {
    constructor() {
        this.pokemonFactory = new _pokemon_pokemonfactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _helpers_translator__WEBPACK_IMPORTED_MODULE_3__["default"].i().setT();
            return this;
        });
    }
    start() {
        setTimeout(() => new _quiz_quiz__WEBPACK_IMPORTED_MODULE_2__["default"](), _config_json__WEBPACK_IMPORTED_MODULE_0__.game.initialLoaderActiveTimeOut);
        document.title = _helpers_translator__WEBPACK_IMPORTED_MODULE_3__["default"].i().t.title;
        this.gameLoop();
    }
    gameLoop() {
        this.pokemonFactory.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }
}


/***/ }),

/***/ "./dev/ts/helpers/translator.ts":
/*!**************************************!*\
  !*** ./dev/ts/helpers/translator.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Translator; });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./dev/ts/config.json", 1);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Translator {
    constructor() {
        this._t = {};
        this._availableLanguages = _config_json__WEBPACK_IMPORTED_MODULE_0__.languages;
        this._currentLanguage = this._availableLanguages[0];
    }
    get currentLanguage() {
        return this._currentLanguage;
    }
    set currentLanguage(value) {
        this._currentLanguage = value;
    }
    get availableLanguages() {
        return this._availableLanguages;
    }
    get t() {
        return this._t;
    }
    static i() {
        return Translator.instance || (Translator.instance = new Translator());
    }
    setT() {
        return __awaiter(this, void 0, void 0, function* () {
            let translateImport = yield __webpack_require__("./dev/ts/languages lazy recursive ^\\.\\/.*\\.json$")(`./${this.currentLanguage}.json`);
            this._t = translateImport.default;
            window.dispatchEvent(new Event('translator:languageChange'));
        });
    }
}


/***/ }),

/***/ "./dev/ts/helpers/utils.ts":
/*!*********************************!*\
  !*** ./dev/ts/helpers/utils.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils {
    static shuffleArray(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    static randomProperty(obj) {
        let keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    }
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static isMobile() {
        const a = navigator.userAgent || navigator.vendor;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
    }
}


/***/ }),

/***/ "./dev/ts/languages lazy recursive ^\\.\\/.*\\.json$":
/*!***************************************************************!*\
  !*** ./dev/ts/languages lazy ^\.\/.*\.json$ namespace object ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": [
		"./dev/ts/languages/en.json",
		0
	],
	"./nl.json": [
		"./dev/ts/languages/nl.json",
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./dev/ts/languages lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./dev/ts/main.ts":
/*!************************!*\
  !*** ./dev/ts/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./dev/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./dev/ts/game.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


window.addEventListener('load', () => __awaiter(undefined, void 0, void 0, function* () {
    const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
    (yield game.initialize()).start();
}));


/***/ }),

/***/ "./dev/ts/pokemon/pokemon.ts":
/*!***********************************!*\
  !*** ./dev/ts/pokemon/pokemon.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pokemon; });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ "./dev/ts/helpers/utils.ts");
/* harmony import */ var _pokemonsprites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemonsprites */ "./dev/ts/pokemon/pokemonsprites.ts");
/* harmony import */ var _pokemondataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemondataservice */ "./dev/ts/pokemon/pokemondataservice.ts");



class Pokemon extends HTMLElement {
    constructor(pokedexEntry) {
        super();
        this.dataService = _pokemondataservice__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance();
        this.width = 96;
        this.height = 96;
        this.x = 0;
        this.y = 0;
        this.stripFromName = ['-m$', '-f$'];
        this._sprites = null;
        this.pokedexEntry = pokedexEntry;
        this.dataService.getPokemonByPokedexEntry(pokedexEntry, this.assignLoadedData.bind(this));
    }
    set sprites(obj) {
        this._sprites = new _pokemonsprites__WEBPACK_IMPORTED_MODULE_1__["default"]();
        let keys = Object.keys(JSON.parse(JSON.stringify(this._sprites)));
        for (let key of keys) {
            this._sprites[key] = obj[key];
            let image = new Image();
            image.src = obj[key];
        }
    }
    get name() {
        return this._name;
    }
    assignLoadedData(data) {
        let regExp = new RegExp(this.stripFromName.join('|'), "gi");
        this._name = data.species.name.replace(regExp, '');
        this.sprites = data.sprites;
    }
    update() {
        if (this._sprites === null) {
            return;
        }
        let randomSprite = _helpers_utils__WEBPACK_IMPORTED_MODULE_0__["default"].randomProperty(this._sprites);
        this.style.backgroundImage = `url("${randomSprite}")`;
        this.draw(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomInt(0, window.innerWidth - this.width), _helpers_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomInt(46, window.innerHeight - this.height));
    }
    draw(x, y) {
        this.x = x - (this.width / 2);
        this.y = y - (this.height / 2);
        this.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
window.customElements.define('cp-pokemon', Pokemon);


/***/ }),

/***/ "./dev/ts/pokemon/pokemondataservice.ts":
/*!**********************************************!*\
  !*** ./dev/ts/pokemon/pokemondataservice.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PokemonDataService; });
class PokemonDataService {
    constructor() {
        this.baseUrl = "https://pokeapi.co/api/v2/";
    }
    static getInstance() {
        return PokemonDataService.instance || (PokemonDataService.instance = new PokemonDataService());
    }
    getPokemonByPokedexEntry(pokedexEntry, successHandler) {
        this.fetchAPIData(`pokemon/${pokedexEntry}`, successHandler);
    }
    fetchAPIData(endpoint, successHandler) {
        fetch(this.baseUrl + endpoint)
            .then((result) => result.json())
            .then((data) => successHandler(data))
            .catch((data) => this.errorHandler(data));
    }
    errorHandler(data) {
        console.error(data);
    }
}


/***/ }),

/***/ "./dev/ts/pokemon/pokemonfactory.ts":
/*!******************************************!*\
  !*** ./dev/ts/pokemon/pokemonfactory.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PokemonFactory; });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./dev/ts/config.json", 1);
/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemon */ "./dev/ts/pokemon/pokemon.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utils */ "./dev/ts/helpers/utils.ts");



class PokemonFactory {
    constructor() {
        this.pokemons = [];
        this.totalToChooseFrom = _config_json__WEBPACK_IMPORTED_MODULE_0__.game.activePokemon;
        this.totalAmountForGame = this.totalToChooseFrom;
        this.activePokemon = null;
        this.lastUpdate = 0;
        this.$wrapper = document.getElementById("pokemons");
        window.addEventListener('quiz:questionNew', () => this.spawn());
        window.addEventListener('quiz:start', (e) => this.initializePokemons(e.detail.amount));
        window.addEventListener('timer:done', () => this.despawn());
        window.addEventListener('quiz:questionDone', () => this.despawn());
    }
    initializePokemons(amount) {
        this.totalAmountForGame = amount;
        let initialData = Array.from(Array(this.totalToChooseFrom)).map((_v, i) => i + 1);
        let filteredData = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["default"].shuffleArray(initialData).slice(0, this.totalAmountForGame);
        for (let i = 0; i < filteredData.length; i++) {
            let pokemon = new _pokemon__WEBPACK_IMPORTED_MODULE_1__["default"](filteredData[i]);
            this.pokemons.push(pokemon);
        }
    }
    spawn() {
        if (this.pokemons.length === 0 || this.activePokemon !== null) {
            return;
        }
        this.activePokemon = this.pokemons.splice(Math.floor(Math.random() * this.pokemons.length), 1)[0];
        this.$wrapper.appendChild(this.activePokemon);
        window.dispatchEvent(new CustomEvent('pokemon:spawn', { detail: { pokemonName: this.activePokemon.name } }));
    }
    despawn() {
        this.activePokemon.remove();
        this.activePokemon = null;
    }
    update() {
        if (this.activePokemon == null) {
            return;
        }
        if (++this.lastUpdate % 10 == 0) {
            this.activePokemon.update();
        }
    }
}


/***/ }),

/***/ "./dev/ts/pokemon/pokemonsprites.ts":
/*!******************************************!*\
  !*** ./dev/ts/pokemon/pokemonsprites.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PokemonSprites; });
class PokemonSprites {
    constructor() {
        this.back_default = "";
        this.back_shiny = "";
        this.front_default = "";
        this.front_shiny = "";
    }
}


/***/ }),

/***/ "./dev/ts/quiz/guessform.ts":
/*!**********************************!*\
  !*** ./dev/ts/quiz/guessform.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuessForm; });
/* harmony import */ var _helpers_translator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/translator */ "./dev/ts/helpers/translator.ts");

class GuessForm {
    constructor(quiz) {
        this.quiz = quiz;
        this.renderTemplate();
        window.addEventListener('translator:languageChange', () => this.renderTemplate());
    }
    renderTemplate() {
        document.getElementById('form-pokemon-guess') !== null ? document.getElementById('form-pokemon-guess').remove() : '';
        let $template = `
            <form id="form-pokemon-guess" class="is-hidden">
                <progress id="progress" class="progress" value="0" max="100"></progress>
                <div class="field">
                    <div class="control">
                        <label for="pokemon-guess-name" class="is-hidden"></label>
                        <input id="pokemon-guess-name" class="input is-info is-expanded" type="text" placeholder="${_helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().t.guessPokemon}" autocomplete="off" autocorrect="off" autocapitalize="none"/>
                    </div>
                </div>
            </form>
        `;
        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.renderDone();
    }
    renderDone() {
        setTimeout(() => {
            this.$guessForm = document.getElementById('form-pokemon-guess');
            this.$guessFormInput = document.getElementById('pokemon-guess-name');
            this.$guessForm.addEventListener('submit', (e) => this.guessFormSubmitHandler(e));
            this.$guessFormInput.addEventListener('keyup', () => this.quiz.handleAnswer());
        }, 0);
    }
    hide() {
        this.$guessForm.classList.add('is-hidden');
    }
    show() {
        this.$guessForm.classList.remove('is-hidden');
        this.$guessFormInput.value = "";
        this.$guessFormInput.focus();
    }
    getCurrentValue() {
        return this.$guessFormInput.value.toLowerCase();
    }
    guessFormSubmitHandler(e) {
        e.preventDefault();
        this.quiz.handleAnswer();
    }
}


/***/ }),

/***/ "./dev/ts/quiz/initialscreen.ts":
/*!**************************************!*\
  !*** ./dev/ts/quiz/initialscreen.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitialScreen; });
/* harmony import */ var _helpers_translator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/translator */ "./dev/ts/helpers/translator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class InitialScreen {
    constructor(quiz) {
        this.quiz = quiz;
        this.renderTemplate();
        window.addEventListener('translator:languageChange', () => this.renderTemplate());
    }
    renderTemplate() {
        document.getElementById('initial') !== null ? document.getElementById('initial').remove() : '';
        let $template = `
            <section id="initial" class="pageloader is-info">
                <div class="title">
                    <form id="form-pokemon-initial">
                        <label for="pokemon-guess-amount" class="label">${_helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().t.introQuestion}</label>
                        
                        <div class="field">
                            ${this.getTemplateLanguages()}
                        </div>
                    
                        <div class="field">
                            <div class="control">
                                <input id="pokemon-guess-amount" class="input is-warning is-expanded" type="number" min="5" max="100" value="5" autofocus/>
                            </div>
                            <div class="control">
                                <input id="pokemon-guess-username" class="input is-warning is-expanded" type="text" placeholder="${_helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().t.inputName}"/>
                            </div>
                            <div class="control">
                                <input type="submit" class="button is-warning" value="${_helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().t.inputSubmit} &#x1F525;"/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        `;
        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.quiz.$main.classList.remove('is-loading');
        this.renderDone();
    }
    renderDone() {
        setTimeout(() => {
            this.$initialForm = document.getElementById('form-pokemon-initial');
            this.$initialForm.addEventListener('submit', (e) => this.quiz.initialFormSubmitHandler(e));
            [...this.$initialForm.querySelectorAll('input[name=language]')].map(($el) => {
                $el.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () { return this.languageChangeHandler(e); }));
            });
        }, 0);
        setTimeout(() => document.getElementById("initial").classList.add('is-active'), 50);
    }
    getTemplateLanguages() {
        let currentLanguage = _helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().currentLanguage;
        return _helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().availableLanguages.map((language, index) => {
            return `
                <input class="is-checkradio is-rtl is-warning is-small" id="language${index}" type="radio" value="${language}" name="language" ${currentLanguage === language ? 'checked="checked"' : ''}/>
                <label for="language${index}">${language}</label>
            `;
        }).join("");
    }
    languageChangeHandler(e) {
        return __awaiter(this, void 0, void 0, function* () {
            _helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().currentLanguage = e.currentTarget.value;
            yield _helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().setT();
        });
    }
    remove() {
        this.$initialForm.remove();
    }
}


/***/ }),

/***/ "./dev/ts/quiz/loadscreen.ts":
/*!***********************************!*\
  !*** ./dev/ts/quiz/loadscreen.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadScreen; });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./dev/ts/config.json", 1);
/* harmony import */ var _helpers_translator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/translator */ "./dev/ts/helpers/translator.ts");


class LoadScreen {
    constructor(quiz) {
        this.quiz = quiz;
        this.renderTemplate();
        window.addEventListener('translator:languageChange', () => this.renderTemplate());
    }
    renderTemplate() {
        document.getElementById('pageloader') !== null ? document.getElementById('pageloader').remove() : '';
        let $template = `
            <section id="pageloader" class="pageloader is-warning">
                <span class="title">${_helpers_translator__WEBPACK_IMPORTED_MODULE_1__["default"].i().t.loading}</span>
            </section>
        `;
        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.renderDone();
    }
    renderDone() {
        setTimeout(() => {
            this.$loadScreen = document.getElementById("pageloader");
        }, 0);
    }
    show() {
        this.$loadScreen.classList.add('is-active');
    }
    hide() {
        this.$loadScreen.classList.remove('is-active');
    }
    triggerNewQuestion() {
        this.show();
        setTimeout(() => {
            this.hide();
            window.dispatchEvent(new CustomEvent('quiz:questionNew'));
        }, _config_json__WEBPACK_IMPORTED_MODULE_0__.game.loadScreenActiveTimeOut);
    }
    changeTitle(value) {
        this.$loadScreen.querySelector('.title').innerHTML = value;
    }
    setStatus(status) {
        this.$loadScreen.classList.remove('is-warning', 'is-success', 'is-danger', 'is-primary');
        this.$loadScreen.classList.add(`is-${status}`);
    }
    markEnd() {
        this.show();
        this.$loadScreen.classList.add('end-screen');
    }
}


/***/ }),

/***/ "./dev/ts/quiz/quiz.ts":
/*!*****************************!*\
  !*** ./dev/ts/quiz/quiz.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quiz; });
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./dev/ts/quiz/timer.ts");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score */ "./dev/ts/quiz/score.ts");
/* harmony import */ var _guessform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guessform */ "./dev/ts/quiz/guessform.ts");
/* harmony import */ var _loadscreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadscreen */ "./dev/ts/quiz/loadscreen.ts");
/* harmony import */ var _initialscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initialscreen */ "./dev/ts/quiz/initialscreen.ts");
/* harmony import */ var _helpers_translator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/translator */ "./dev/ts/helpers/translator.ts");






class Quiz {
    constructor() {
        this.totalQuestions = 0;
        this.currentQuestion = 0;
        this.$main = document.getElementById('main');
        this.initialScreen = new _initialscreen__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        this.guessForm = new _guessform__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.loadScreen = new _loadscreen__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_0__["default"]();
        window.addEventListener('pokemon:spawn', (e) => this.startQuestion(e));
        window.addEventListener('timer:done', () => this.timerDone());
    }
    initialFormSubmitHandler(e) {
        e.preventDefault();
        this.totalQuestions = parseInt(document.getElementById('pokemon-guess-amount').value);
        window.dispatchEvent(new CustomEvent('quiz:start', { detail: { amount: this.totalQuestions } }));
        this.initialScreen.remove();
        document.getElementById("initial").classList.remove('is-active');
        this.score = new _score__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.loadScreen.triggerNewQuestion();
    }
    startQuestion(e) {
        this.currentQuestion++;
        this.timer.restart();
        this.guessedPokemon = e.detail.pokemonName;
        this.guessForm.show();
    }
    timerDone() {
        this.guessForm.hide();
        if (this.currentQuestion === this.totalQuestions) {
            this.endScreen();
            return;
        }
        this.loadScreen.changeTitle(_helpers_translator__WEBPACK_IMPORTED_MODULE_5__["default"].i().t.wrongAnswer.replace("[[pokemon]]", this.guessedPokemon));
        this.loadScreen.setStatus('danger');
        this.loadScreen.triggerNewQuestion();
    }
    handleAnswer() {
        if (this.guessedPokemon !== this.guessForm.getCurrentValue()) {
            return;
        }
        this.guessForm.hide();
        this.score.value++;
        window.dispatchEvent(new CustomEvent('quiz:questionDone'));
        if (this.currentQuestion === this.totalQuestions) {
            this.endScreen();
            return;
        }
        this.loadScreen.changeTitle(_helpers_translator__WEBPACK_IMPORTED_MODULE_5__["default"].i().t.goodAnswer);
        this.loadScreen.setStatus('success');
        this.loadScreen.triggerNewQuestion();
    }
    endScreen() {
        let maxScore = this.score.getMax(this.totalQuestions);
        this.loadScreen.changeTitle(_helpers_translator__WEBPACK_IMPORTED_MODULE_5__["default"].i().t.endMessage.replace("[[score]]", this.score.value.toString()).replace("[[maxScore]]", maxScore.toString()));
        this.loadScreen.setStatus('primary');
        this.loadScreen.markEnd();
    }
}


/***/ }),

/***/ "./dev/ts/quiz/score.ts":
/*!******************************!*\
  !*** ./dev/ts/quiz/score.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./dev/ts/config.json", 1);

class Score extends HTMLElement {
    constructor() {
        super();
        this._value = 0;
        this.incrementValue = _config_json__WEBPACK_IMPORTED_MODULE_0__.game.scorePerQuestion;
        document.getElementById('main').appendChild(this);
        this.innerText = this._value.toString();
    }
    get value() {
        return this._value;
    }
    set value(_value) {
        this._value = (this._value += this.incrementValue);
        this.innerText = this._value.toString();
    }
    getMax(totalQuestions) {
        return this.incrementValue * totalQuestions;
    }
}
window.customElements.define('cp-score', Score);


/***/ }),

/***/ "./dev/ts/quiz/timer.ts":
/*!******************************!*\
  !*** ./dev/ts/quiz/timer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./dev/ts/config.json", 1);

class Timer {
    constructor() {
        this.totalSeconds = _config_json__WEBPACK_IMPORTED_MODULE_0__.game.secondsPerQuestion;
        this._seconds = this.totalSeconds;
        this.$progress = document.getElementById('progress');
        window.addEventListener('quiz:questionDone', () => this.destroy());
    }
    get seconds() {
        return this._seconds;
    }
    set seconds(value) {
        this._seconds = value;
    }
    start() {
        this.$progress = document.getElementById('progress');
        this.intervalId = setInterval(() => this.update(), 1000);
        this.progressbarIntervalId = setInterval(() => this.updateProgressbar(), 10);
        this.progressbarStartTime = new Date().getTime();
        this.performanceStamp = window.performance.now();
    }
    update() {
        this.seconds--;
        if (this.seconds === 0) {
            window.dispatchEvent(new Event('timer:done'));
        }
    }
    updateProgressbar() {
        let duration = this.totalSeconds * 1000;
        let diff = new Date().getTime() - this.progressbarStartTime;
        let value = diff / duration * 100;
        value = value > 100 ? 100 : value;
        this.$progress.setAttribute('value', value.toString());
    }
    destroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            clearInterval(this.progressbarIntervalId);
        }
    }
    restart() {
        this.destroy();
        this.seconds = this.totalSeconds;
        this.$progress.setAttribute('value', '0');
        this.start();
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvaGVscGVycy90cmFuc2xhdG9yLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9oZWxwZXJzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9sYW5ndWFnZXMgbGF6eSBeXFwuXFwvLipcXC5qc29uJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2Rldi90cy9tYWluLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb24udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3Bva2Vtb24vcG9rZW1vbmRhdGFzZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb25mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb25zcHJpdGVzLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L2d1ZXNzZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9pbml0aWFsc2NyZWVuLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L2xvYWRzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovcXVpei50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9zY29yZS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei90aW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNB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QUFDLFVBQVUsRUFBRTtZQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7SUFFTSxPQUFPO1FBQ1YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknKTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rldi90cy9tYWluLnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qc29uJ1xuaW1wb3J0IFBva2Vtb25GYWN0b3J5IGZyb20gXCIuL3Bva2Vtb24vcG9rZW1vbmZhY3RvcnlcIjtcbmltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXovcXVpelwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4vaGVscGVycy90cmFuc2xhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9rZW1vbkZhY3Rvcnk6IFBva2Vtb25GYWN0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9rZW1vbkZhY3RvcnkgPSBuZXcgUG9rZW1vbkZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgaW5pdGlhbGlzZSBjb21wYXRpYmxlIHdpdGggY2hhaW5cbiAgICAgKiBAcmV0dXJuIEdhbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgYXdhaXQgVHJhbnNsYXRvci5pKCkuc2V0VCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbmV3IFF1aXooKSwgY29uZmlnLmdhbWUuaW5pdGlhbExvYWRlckFjdGl2ZVRpbWVPdXQpO1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFRyYW5zbGF0b3IuaSgpLnQudGl0bGU7XG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdhbWVMb29wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBva2Vtb25GYWN0b3J5LnVwZGF0ZSgpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZ2FtZUxvb3AoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zbGF0b3Ige1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBUcmFuc2xhdG9yO1xuICAgIHByaXZhdGUgX2N1cnJlbnRMYW5ndWFnZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F2YWlsYWJsZUxhbmd1YWdlczogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBfdDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gICAgZ2V0IGN1cnJlbnRMYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50TGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgYXZhaWxhYmxlTGFuZ3VhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZUxhbmd1YWdlcztcbiAgICB9XG5cbiAgICBnZXQgdCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTGFuZ3VhZ2VzID0gY29uZmlnLmxhbmd1YWdlcztcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdGhpcy5fYXZhaWxhYmxlTGFuZ3VhZ2VzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmdsZXRvbiByZXdyaXR0ZW4gYXMgJ2knIHRvIG1ha2UgY29kZSBpbiBhcHBsaWNhdGlvbiBjbGVhbmVyXG4gICAgICogQHJldHVybiBUcmFuc2xhdG9yXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBpKCk6IFRyYW5zbGF0b3Ige1xuICAgICAgICByZXR1cm4gVHJhbnNsYXRvci5pbnN0YW5jZSB8fCAoVHJhbnNsYXRvci5pbnN0YW5jZSA9IG5ldyBUcmFuc2xhdG9yKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZXRUKCkge1xuICAgICAgICBsZXQgdHJhbnNsYXRlSW1wb3J0ID0gYXdhaXQgaW1wb3J0KGAuLi9sYW5ndWFnZXMvJHt0aGlzLmN1cnJlbnRMYW5ndWFnZX0uanNvbmApIGFzIHsgW2tleTogc3RyaW5nXToge30gfTtcbiAgICAgICAgdGhpcy5fdCA9IHRyYW5zbGF0ZUltcG9ydC5kZWZhdWx0O1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3RyYW5zbGF0b3I6bGFuZ3VhZ2VDaGFuZ2UnKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAgIC8qKlxuICAgICAqIFNodWZmbGVzIGFycmF5IGluIHBsYWNlLiBFUzYgdmVyc2lvblxuICAgICAqIEBwYXJhbSB7W119IGEgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXG4gICAgICovXG4gICAgc3RhdGljIHNodWZmbGVBcnJheShhOiBbXSk6IFtdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW2FbaV0sIGFbal1dID0gW2Fbal0sIGFbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHJhbmRvbSBwcm9wZXJ0eSBmcm9tIGEgb2JqZWN0IHdpdGgga2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKi9cbiAgICBzdGF0aWMgcmFuZG9tUHJvcGVydHkob2JqOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIHJldHVybiBvYmpba2V5c1trZXlzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkgPDwgMF1dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaW5rIGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yO1xuICAgICAgICByZXR1cm4gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2R8YWQpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSk7XG4gICAgfVxufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2VuLmpzb25cIjogW1xuXHRcdFwiLi9kZXYvdHMvbGFuZ3VhZ2VzL2VuLmpzb25cIixcblx0XHQwXG5cdF0sXG5cdFwiLi9ubC5qc29uXCI6IFtcblx0XHRcIi4vZGV2L3RzL2xhbmd1YWdlcy9ubC5qc29uXCIsXG5cdFx0MVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAzKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9kZXYvdHMvbGFuZ3VhZ2VzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzb24kXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgKGF3YWl0IGdhbWUuaW5pdGlhbGl6ZSgpKS5zdGFydCgpO1xufSk7XG4iLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uL2hlbHBlcnMvdXRpbHNcIjtcbmltcG9ydCBQb2tlbW9uU3ByaXRlcyBmcm9tIFwiLi9wb2tlbW9uc3ByaXRlc1wiO1xuaW1wb3J0IFBva2Vtb25EYXRhU2VydmljZSBmcm9tIFwiLi9wb2tlbW9uZGF0YXNlcnZpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZW1vbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBva2VkZXhFbnRyeTogbnVtYmVyO1xuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IFBva2Vtb25EYXRhU2VydmljZSA9IFBva2Vtb25EYXRhU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlciA9IDk2O1xuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIgPSA5NjtcbiAgICBwcml2YXRlIHg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB5OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RyaXBGcm9tTmFtZTogc3RyaW5nW10gPSBbJy1tJCcsICctZiQnXTtcbiAgICBwcml2YXRlIF9zcHJpdGVzOiBQb2tlbW9uU3ByaXRlcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIHdheSBvZiBtYXBwaW5nIGtleSBwcm9wZXJ0aWVzIHRvIHRoZSBhY3R1YWxseSByZXF1aXJlZCBwcm9wZXJ0aWVzKVxuICAgICAqXG4gICAgICogQHRvZG8gQ2hlY2sgd2l0aCBPbm5vXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqL1xuICAgIHNldCBzcHJpdGVzKG9iajogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgICAgICB0aGlzLl9zcHJpdGVzID0gbmV3IFBva2Vtb25TcHJpdGVzKCk7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9zcHJpdGVzKSkpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgdGhpcy5fc3ByaXRlc1trZXldID0gb2JqW2tleV07XG5cbiAgICAgICAgICAgIC8vSnVzdCBzb21lIGxhbWUgd29yayBhcm91bmQgdG8gcHJlbG9hZCBpbWFnZXMgaW50byBjYWNoZVxuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHBva2VkZXhFbnRyeTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucG9rZWRleEVudHJ5ID0gcG9rZWRleEVudHJ5O1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFBva2Vtb25CeVBva2VkZXhFbnRyeShwb2tlZGV4RW50cnksIHRoaXMuYXNzaWduTG9hZGVkRGF0YS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzc2lnbkxvYWRlZERhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIC8vU3RyaXAgZXhjZXB0aW9uc1xuICAgICAgICBsZXQgcmVnRXhwID0gbmV3IFJlZ0V4cCh0aGlzLnN0cmlwRnJvbU5hbWUuam9pbignfCcpLCBcImdpXCIpO1xuICAgICAgICB0aGlzLl9uYW1lID0gZGF0YS5zcGVjaWVzLm5hbWUucmVwbGFjZShyZWdFeHAsICcnKTtcbiAgICAgICAgdGhpcy5zcHJpdGVzID0gZGF0YS5zcHJpdGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFuZG9tU3ByaXRlID0gVXRpbHMucmFuZG9tUHJvcGVydHkodGhpcy5fc3ByaXRlcyk7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cmFuZG9tU3ByaXRlfVwiKWA7XG4gICAgICAgIHRoaXMuZHJhdyhVdGlscy5nZXRSYW5kb21JbnQoMCwgd2luZG93LmlubmVyV2lkdGggLSB0aGlzLndpZHRoKSwgVXRpbHMuZ2V0UmFuZG9tSW50KDQ2LCB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLmhlaWdodCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB4XG4gICAgICogQHBhcmFtIHlcbiAgICAgKi9cbiAgICBwcml2YXRlIGRyYXcoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ID0geCAtICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIHRoaXMueSA9IHkgLSAodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy54fXB4LCAke3RoaXMueX1weClgO1xuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY3AtcG9rZW1vbicsIFBva2Vtb24pO1xuIiwidHlwZSBGdW5jdGlvbkNhbGxiYWNrID0gKGRhdGE6IHt9KSA9PiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25EYXRhU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFBva2Vtb25EYXRhU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJhc2VVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9cIjtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBQb2tlbW9uRGF0YVNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gUG9rZW1vbkRhdGFTZXJ2aWNlLmluc3RhbmNlIHx8IChQb2tlbW9uRGF0YVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgUG9rZW1vbkRhdGFTZXJ2aWNlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBwb2tlZGV4RW50cnlcbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0hhbmRsZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UG9rZW1vbkJ5UG9rZWRleEVudHJ5KHBva2VkZXhFbnRyeTogbnVtYmVyLCBzdWNjZXNzSGFuZGxlcjogRnVuY3Rpb25DYWxsYmFjayk6IHZvaWQge1xuICAgICAgICB0aGlzLmZldGNoQVBJRGF0YShgcG9rZW1vbi8ke3Bva2VkZXhFbnRyeX1gLCBzdWNjZXNzSGFuZGxlcilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0hhbmRsZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGZldGNoQVBJRGF0YShlbmRwb2ludDogc3RyaW5nLCBzdWNjZXNzSGFuZGxlcjogRnVuY3Rpb25DYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBmZXRjaCh0aGlzLmJhc2VVcmwgKyBlbmRwb2ludClcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc3VjY2Vzc0hhbmRsZXIoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goKGRhdGEpID0+IHRoaXMuZXJyb3JIYW5kbGVyKGRhdGEpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAdG9kbyBNYWtlIHNvbWUgZXJyb3IgaGFuZGxpbmcgdGhhdCBkb2VzIG1ha2Ugc2Vuc2UgOilcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyKGRhdGE6IHt9KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSlcbiAgICB9XG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcbmltcG9ydCBQb2tlbW9uIGZyb20gXCIuL3Bva2Vtb25cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vaGVscGVycy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uRmFjdG9yeSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwb2tlbW9uczogUG9rZW1vbltdID0gW107XG4gICAgcHJpdmF0ZSByZWFkb25seSB0b3RhbFRvQ2hvb3NlRnJvbTogbnVtYmVyID0gY29uZmlnLmdhbWUuYWN0aXZlUG9rZW1vbjtcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50Rm9yR2FtZTogbnVtYmVyID0gdGhpcy50b3RhbFRvQ2hvb3NlRnJvbTtcbiAgICBwcml2YXRlIGFjdGl2ZVBva2Vtb246IFBva2Vtb24gPSBudWxsO1xuICAgIHByaXZhdGUgJHdyYXBwZXI6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgbGFzdFVwZGF0ZTogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiR3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb2tlbW9uc1wiKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3F1aXo6cXVlc3Rpb25OZXcnLCAoKSA9PiB0aGlzLnNwYXduKCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpzdGFydCcsIChlKSA9PiB0aGlzLmluaXRpYWxpemVQb2tlbW9ucygoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsLmFtb3VudCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGltZXI6ZG9uZScsICgpID0+IHRoaXMuZGVzcGF3bigpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3F1aXo6cXVlc3Rpb25Eb25lJywgKCkgPT4gdGhpcy5kZXNwYXduKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhbW91bnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRpYWxpemVQb2tlbW9ucyhhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRvdGFsQW1vdW50Rm9yR2FtZSA9IGFtb3VudDtcbiAgICAgICAgbGV0IGluaXRpYWxEYXRhID0gQXJyYXkuZnJvbShBcnJheSh0aGlzLnRvdGFsVG9DaG9vc2VGcm9tKSkubWFwKChfdiwgaSkgPT4gaSArIDEpO1xuICAgICAgICBsZXQgZmlsdGVyZWREYXRhID0gVXRpbHMuc2h1ZmZsZUFycmF5KGluaXRpYWxEYXRhIGFzIFtdKS5zbGljZSgwLCB0aGlzLnRvdGFsQW1vdW50Rm9yR2FtZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb2tlbW9uID0gbmV3IFBva2Vtb24oZmlsdGVyZWREYXRhW2ldKTtcbiAgICAgICAgICAgIHRoaXMucG9rZW1vbnMucHVzaChwb2tlbW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBva2Vtb25zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmFjdGl2ZVBva2Vtb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbiA9IHRoaXMucG9rZW1vbnMuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9rZW1vbnMubGVuZ3RoKSwgMSlbMF07XG4gICAgICAgIHRoaXMuJHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3RpdmVQb2tlbW9uKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwb2tlbW9uOnNwYXduJywge2RldGFpbDoge3Bva2Vtb25OYW1lOiB0aGlzLmFjdGl2ZVBva2Vtb24ubmFtZX19KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXNwYXduKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZVBva2Vtb24ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbiA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9rZW1vbiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKyt0aGlzLmxhc3RVcGRhdGUgJSAxMCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBva2Vtb24udXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uU3ByaXRlcyB7XG4gICAgcHVibGljIGJhY2tfZGVmYXVsdDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgYmFja19zaGlueTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgZnJvbnRfZGVmYXVsdDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgZnJvbnRfc2hpbnk6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgUXVpeiBmcm9tIFwiLi9xdWl6XCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiLi4vaGVscGVycy90cmFuc2xhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1ZXNzRm9ybSB7XG4gICAgcHJpdmF0ZSAkZ3Vlc3NGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSAkZ3Vlc3NGb3JtSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBxdWl6OiBRdWl6O1xuXG4gICAgY29uc3RydWN0b3IocXVpejogUXVpeikge1xuICAgICAgICB0aGlzLnF1aXogPSBxdWl6O1xuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2xhdG9yOmxhbmd1YWdlQ2hhbmdlJywgKCkgPT4gdGhpcy5yZW5kZXJUZW1wbGF0ZSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclRlbXBsYXRlKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wb2tlbW9uLWd1ZXNzJykgIT09IG51bGwgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wb2tlbW9uLWd1ZXNzJykucmVtb3ZlKCkgOiAnJztcblxuICAgICAgICBsZXQgJHRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtLXBva2Vtb24tZ3Vlc3NcIiBjbGFzcz1cImlzLWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxwcm9ncmVzcyBpZD1cInByb2dyZXNzXCIgY2xhc3M9XCJwcm9ncmVzc1wiIHZhbHVlPVwiMFwiIG1heD1cIjEwMFwiPjwvcHJvZ3Jlc3M+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicG9rZW1vbi1ndWVzcy1uYW1lXCIgY2xhc3M9XCJpcy1oaWRkZW5cIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicG9rZW1vbi1ndWVzcy1uYW1lXCIgY2xhc3M9XCJpbnB1dCBpcy1pbmZvIGlzLWV4cGFuZGVkXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiR7VHJhbnNsYXRvci5pKCkudC5ndWVzc1Bva2Vtb259XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICBgO1xuXG4gICAgICAgIHRoaXMucXVpei4kbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICR0ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMucmVuZGVyRG9uZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRG9uZSgpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRndWVzc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wb2tlbW9uLWd1ZXNzJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1ndWVzcy1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuJGd1ZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdGhpcy5ndWVzc0Zvcm1TdWJtaXRIYW5kbGVyKGUpKTtcbiAgICAgICAgICAgIHRoaXMuJGd1ZXNzRm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4gdGhpcy5xdWl6LmhhbmRsZUFuc3dlcigpKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGd1ZXNzRm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRndWVzc0Zvcm1JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuJGd1ZXNzRm9ybUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q3VycmVudFZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLiRndWVzc0Zvcm1JbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlXG4gICAgICovXG4gICAgcHJpdmF0ZSBndWVzc0Zvcm1TdWJtaXRIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5xdWl6LmhhbmRsZUFuc3dlcigpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFF1aXogZnJvbSBcIi4vcXVpelwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4uL2hlbHBlcnMvdHJhbnNsYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsU2NyZWVuIHtcbiAgICBwcml2YXRlICRpbml0aWFsRm9ybTogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByaXZhdGUgcXVpejogUXVpejtcblxuICAgIGNvbnN0cnVjdG9yKHF1aXo6IFF1aXopIHtcbiAgICAgICAgdGhpcy5xdWl6ID0gcXVpejtcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNsYXRvcjpsYW5ndWFnZUNoYW5nZScsICgpID0+IHRoaXMucmVuZGVyVGVtcGxhdGUoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRpYWwnKSAhPT0gbnVsbCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0aWFsJykucmVtb3ZlKCkgOiAnJztcblxuICAgICAgICBsZXQgJHRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJpbml0aWFsXCIgY2xhc3M9XCJwYWdlbG9hZGVyIGlzLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtLXBva2Vtb24taW5pdGlhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBva2Vtb24tZ3Vlc3MtYW1vdW50XCIgY2xhc3M9XCJsYWJlbFwiPiR7VHJhbnNsYXRvci5pKCkudC5pbnRyb1F1ZXN0aW9ufTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRUZW1wbGF0ZUxhbmd1YWdlcygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicG9rZW1vbi1ndWVzcy1hbW91bnRcIiBjbGFzcz1cImlucHV0IGlzLXdhcm5pbmcgaXMtZXhwYW5kZWRcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiNVwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNVwiIGF1dG9mb2N1cy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicG9rZW1vbi1ndWVzcy11c2VybmFtZVwiIGNsYXNzPVwiaW5wdXQgaXMtd2FybmluZyBpcy1leHBhbmRlZFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIke1RyYW5zbGF0b3IuaSgpLnQuaW5wdXROYW1lfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGlzLXdhcm5pbmdcIiB2YWx1ZT1cIiR7VHJhbnNsYXRvci5pKCkudC5pbnB1dFN1Ym1pdH0gJiN4MUY1MjU7XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLnF1aXouJG1haW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAkdGVtcGxhdGUpO1xuICAgICAgICB0aGlzLnF1aXouJG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xuICAgICAgICB0aGlzLnJlbmRlckRvbmUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckRvbmUoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaW5pdGlhbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wb2tlbW9uLWluaXRpYWwnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLiRpbml0aWFsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdGhpcy5xdWl6LmluaXRpYWxGb3JtU3VibWl0SGFuZGxlcihlKSk7XG4gICAgICAgICAgICBbLi4udGhpcy4kaW5pdGlhbEZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1sYW5ndWFnZV0nKV0ubWFwKCgkZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4gdGhpcy5sYW5ndWFnZUNoYW5nZUhhbmRsZXIoZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIC8vVWdseSBidXQgYWxzbyBuZWVkZWQgdG8gdHJpZ2dlciBDU1MgYW5pbWF0aW9uIHRoZSByaWdodCB3YXkuLi4gOihcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxcIikuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyksIDUwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRlbXBsYXRlTGFuZ3VhZ2VzKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSBUcmFuc2xhdG9yLmkoKS5jdXJyZW50TGFuZ3VhZ2U7XG4gICAgICAgIHJldHVybiBUcmFuc2xhdG9yLmkoKS5hdmFpbGFibGVMYW5ndWFnZXMubWFwKChsYW5ndWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlzLWNoZWNrcmFkaW8gaXMtcnRsIGlzLXdhcm5pbmcgaXMtc21hbGxcIiBpZD1cImxhbmd1YWdlJHtpbmRleH1cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7bGFuZ3VhZ2V9XCIgbmFtZT1cImxhbmd1YWdlXCIgJHtjdXJyZW50TGFuZ3VhZ2UgPT09IGxhbmd1YWdlID8gJ2NoZWNrZWQ9XCJjaGVja2VkXCInIDogJyd9Lz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFuZ3VhZ2Uke2luZGV4fVwiPiR7bGFuZ3VhZ2V9PC9sYWJlbD5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0pLmpvaW4oXCJcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsYW5ndWFnZUNoYW5nZUhhbmRsZXIoZTogRXZlbnQpIHtcbiAgICAgICAgVHJhbnNsYXRvci5pKCkuY3VycmVudExhbmd1YWdlID0gKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgYXdhaXQgVHJhbnNsYXRvci5pKCkuc2V0VCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuJGluaXRpYWxGb3JtLnJlbW92ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFF1aXogZnJvbSBcIi4vcXVpelwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4uL2hlbHBlcnMvdHJhbnNsYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkU2NyZWVuIHtcbiAgICBwcml2YXRlICRsb2FkU2NyZWVuOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHF1aXo6IFF1aXo7XG5cbiAgICBjb25zdHJ1Y3RvcihxdWl6OiBRdWl6KSB7XG4gICAgICAgIHRoaXMucXVpeiA9IHF1aXo7XG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zbGF0b3I6bGFuZ3VhZ2VDaGFuZ2UnLCAoKSA9PiB0aGlzLnJlbmRlclRlbXBsYXRlKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyVGVtcGxhdGUoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlbG9hZGVyJykgIT09IG51bGwgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWxvYWRlcicpLnJlbW92ZSgpIDogJyc7XG5cbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnZWxvYWRlclwiIGNsYXNzPVwicGFnZWxvYWRlciBpcy13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPiR7VHJhbnNsYXRvci5pKCkudC5sb2FkaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLnF1aXouJG1haW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAkdGVtcGxhdGUpO1xuICAgICAgICB0aGlzLnJlbmRlckRvbmUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckRvbmUoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kbG9hZFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZWxvYWRlclwiKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyaWdnZXJOZXdRdWVzdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3F1aXo6cXVlc3Rpb25OZXcnKSlcbiAgICAgICAgfSwgY29uZmlnLmdhbWUubG9hZFNjcmVlbkFjdGl2ZVRpbWVPdXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VUaXRsZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4ucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHN0YXR1c1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kbG9hZFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy13YXJuaW5nJywgJ2lzLXN1Y2Nlc3MnLCAnaXMtZGFuZ2VyJywgJ2lzLXByaW1hcnknKTtcbiAgICAgICAgdGhpcy4kbG9hZFNjcmVlbi5jbGFzc0xpc3QuYWRkKGBpcy0ke3N0YXR1c31gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0VuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnZW5kLXNjcmVlbicpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IFNjb3JlIGZyb20gXCIuL3Njb3JlXCI7XG5pbXBvcnQgR3Vlc3NGb3JtIGZyb20gXCIuL2d1ZXNzZm9ybVwiO1xuaW1wb3J0IExvYWRTY3JlZW4gZnJvbSBcIi4vbG9hZHNjcmVlblwiO1xuaW1wb3J0IEluaXRpYWxTY3JlZW4gZnJvbSBcIi4vaW5pdGlhbHNjcmVlblwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4uL2hlbHBlcnMvdHJhbnNsYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWl6IHtcbiAgICBwdWJsaWMgJG1haW46IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50UXVlc3Rpb246IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpbml0aWFsU2NyZWVuOiBJbml0aWFsU2NyZWVuO1xuICAgIHByaXZhdGUgZ3Vlc3NGb3JtOiBHdWVzc0Zvcm07XG4gICAgcHJpdmF0ZSBsb2FkU2NyZWVuOiBMb2FkU2NyZWVuO1xuICAgIHByaXZhdGUgdGltZXI6IFRpbWVyO1xuICAgIHByaXZhdGUgc2NvcmU6IFNjb3JlO1xuICAgIHByaXZhdGUgZ3Vlc3NlZFBva2Vtb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEB0b2RvIFRoaXMgY2xhc3MgY29tYmluZWQgd2l0aCBJbml0aWFsU2NyZWVuLCBHdWVzc0Zvcm0gYW5kIExvYWRTY3JlZW4gc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgYSBsaXR0bGUuLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NyZWVuID0gbmV3IEluaXRpYWxTY3JlZW4odGhpcyk7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtID0gbmV3IEd1ZXNzRm9ybSh0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuID0gbmV3IExvYWRTY3JlZW4odGhpcyk7XG5cbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9rZW1vbjpzcGF3bicsIChlKSA9PiB0aGlzLnN0YXJ0UXVlc3Rpb24oZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGltZXI6ZG9uZScsICgpID0+IHRoaXMudGltZXJEb25lKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHRoZSBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0aWFsRm9ybVN1Ym1pdEhhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvdGFsUXVlc3Rpb25zID0gcGFyc2VJbnQoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uLWd1ZXNzLWFtb3VudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdxdWl6OnN0YXJ0Jywge2RldGFpbDoge2Ftb3VudDogdGhpcy50b3RhbFF1ZXN0aW9uc319KSk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsU2NyZWVuLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxcIikuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSgpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4udHJpZ2dlck5ld1F1ZXN0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXJ0UXVlc3Rpb24oZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24rKztcbiAgICAgICAgdGhpcy50aW1lci5yZXN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZ3Vlc3NlZFBva2Vtb24gPSAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsLnBva2Vtb25OYW1lO1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybS5zaG93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lckRvbmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtLmhpZGUoKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gPT09IHRoaXMudG90YWxRdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2NyZWVuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uY2hhbmdlVGl0bGUoVHJhbnNsYXRvci5pKCkudC53cm9uZ0Fuc3dlci5yZXBsYWNlKFwiW1twb2tlbW9uXV1cIiwgdGhpcy5ndWVzc2VkUG9rZW1vbikpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uc2V0U3RhdHVzKCdkYW5nZXInKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnRyaWdnZXJOZXdRdWVzdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVBbnN3ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmd1ZXNzZWRQb2tlbW9uICE9PSB0aGlzLmd1ZXNzRm9ybS5nZXRDdXJyZW50VmFsdWUoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ndWVzc0Zvcm0uaGlkZSgpO1xuICAgICAgICB0aGlzLnNjb3JlLnZhbHVlKys7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncXVpejpxdWVzdGlvbkRvbmUnKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uID09PSB0aGlzLnRvdGFsUXVlc3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmVuZFNjcmVlbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNoYW5nZVRpdGxlKFRyYW5zbGF0b3IuaSgpLnQuZ29vZEFuc3dlcik7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5zZXRTdGF0dXMoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnRyaWdnZXJOZXdRdWVzdGlvbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW5kU2NyZWVuKCk6IHZvaWQge1xuICAgICAgICBsZXQgbWF4U2NvcmUgPSB0aGlzLnNjb3JlLmdldE1heCh0aGlzLnRvdGFsUXVlc3Rpb25zKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNoYW5nZVRpdGxlKFRyYW5zbGF0b3IuaSgpLnQuZW5kTWVzc2FnZS5yZXBsYWNlKFwiW1tzY29yZV1dXCIsIHRoaXMuc2NvcmUudmFsdWUudG9TdHJpbmcoKSkucmVwbGFjZShcIltbbWF4U2NvcmVdXVwiLCBtYXhTY29yZS50b1N0cmluZygpKSk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5zZXRTdGF0dXMoJ3ByaW1hcnknKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLm1hcmtFbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpbmNyZW1lbnRWYWx1ZTogbnVtYmVyID0gY29uZmlnLmdhbWUuc2NvcmVQZXJRdWVzdGlvbjtcblxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgZGVmYXVsdCArKyBiZWhhdmlvdXIgYnkgaW5jcmVtZW50aW5nIHNjb3JlIHdpdGggY3VzdG9tIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX3ZhbHVlXG4gICAgICovXG4gICAgc2V0IHZhbHVlKF92YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gKHRoaXMuX3ZhbHVlICs9IHRoaXMuaW5jcmVtZW50VmFsdWUpO1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdG90YWxRdWVzdGlvbnNcbiAgICAgKiBAcmV0dXJuIG51bWJlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNYXgodG90YWxRdWVzdGlvbnM6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmluY3JlbWVudFZhbHVlICogdG90YWxRdWVzdGlvbnM7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjcC1zY29yZScsIFNjb3JlKTtcbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0b3RhbFNlY29uZHM6IG51bWJlciA9IGNvbmZpZy5nYW1lLnNlY29uZHNQZXJRdWVzdGlvbjtcbiAgICBwcml2YXRlIF9zZWNvbmRzOiBudW1iZXIgPSB0aGlzLnRvdGFsU2Vjb25kcztcbiAgICBwcml2YXRlIGludGVydmFsSWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHByb2dyZXNzYmFySW50ZXJ2YWxJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcHJvZ3Jlc3NiYXJTdGFydFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlICRwcm9ncmVzczogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwZXJmb3JtYW5jZVN0YW1wOiBudW1iZXI7XG5cbiAgICBnZXQgc2Vjb25kcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vjb25kcztcbiAgICB9XG5cbiAgICBzZXQgc2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3F1aXo6cXVlc3Rpb25Eb25lJywgKCkgPT4gdGhpcy5kZXN0cm95KCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKTsgLy8gT25seSBoZXJlIGR1ZSB0byB0cmFuc2xhdGlvbiBAdG9kb1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCAxMDAwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhckludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzYmFyKCksIDEwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhclN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlU3RhbXAgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Vjb25kcy0tO1xuXG4gICAgICAgIGlmICh0aGlzLnNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndGltZXI6ZG9uZScpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3NiYXIoKTogdm9pZCB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMudG90YWxTZWNvbmRzICogMTAwMDtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMucHJvZ3Jlc3NiYXJTdGFydFRpbWU7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRpZmYgLyBkdXJhdGlvbiAqIDEwMDtcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlID4gMTAwID8gMTAwIDogdmFsdWU7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnByb2dyZXNzYmFySW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudG90YWxTZWNvbmRzO1xuICAgICAgICB0aGlzLiRwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzAnKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=