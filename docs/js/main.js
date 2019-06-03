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
/* harmony import */ var _quizelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quizelement */ "./dev/ts/quiz/quizelement.ts");


class GuessForm extends _quizelement__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
        this.renderTemplateDone();
    }
    renderTemplateDone() {
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
/* harmony import */ var _quizelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quizelement */ "./dev/ts/quiz/quizelement.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class InitialScreen extends _quizelement__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
        this.renderTemplateDone();
    }
    renderTemplateDone() {
        this.quiz.$main.classList.remove('is-loading');
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
/* harmony import */ var _quizelement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quizelement */ "./dev/ts/quiz/quizelement.ts");



class LoadScreen extends _quizelement__WEBPACK_IMPORTED_MODULE_2__["default"] {
    renderTemplate() {
        document.getElementById('pageloader') !== null ? document.getElementById('pageloader').remove() : '';
        let $template = `
            <section id="pageloader" class="pageloader is-warning">
                <span class="title">${_helpers_translator__WEBPACK_IMPORTED_MODULE_1__["default"].i().t.loading}</span>
            </section>
        `;
        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.renderTemplateDone();
    }
    renderTemplateDone() {
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

/***/ "./dev/ts/quiz/quizelement.ts":
/*!************************************!*\
  !*** ./dev/ts/quiz/quizelement.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuizElement; });
class QuizElement {
    constructor(quiz) {
        this.quiz = quiz;
        this.renderTemplate();
        window.addEventListener('translator:languageChange', () => this.renderTemplate());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3Njc3Mvc3R5bGUuc2Nzcz81ZjY2Iiwid2VicGFjazovLy8uL2Rldi90cy9nYW1lLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9oZWxwZXJzL3RyYW5zbGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL2hlbHBlcnMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL2xhbmd1YWdlcyBsYXp5IF5cXC5cXC8uKlxcLmpzb24kIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3Bva2Vtb24vcG9rZW1vbi50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uZGF0YXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3Bva2Vtb24vcG9rZW1vbmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3Bva2Vtb24vcG9rZW1vbnNwcml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovZ3Vlc3Nmb3JtLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L2luaXRpYWxzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovbG9hZHNjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9xdWl6LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L3F1aXplbGVtZW50LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L3Njb3JlLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L3RpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7Q0FDSiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5tYWluLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kZXYvdHMvbWFpbi50c1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanNvbidcbmltcG9ydCBQb2tlbW9uRmFjdG9yeSBmcm9tIFwiLi9wb2tlbW9uL3Bva2Vtb25mYWN0b3J5XCI7XG5pbXBvcnQgUXVpeiBmcm9tIFwiLi9xdWl6L3F1aXpcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuL2hlbHBlcnMvdHJhbnNsYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBva2Vtb25GYWN0b3J5OiBQb2tlbW9uRmFjdG9yeTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBva2Vtb25GYWN0b3J5ID0gbmV3IFBva2Vtb25GYWN0b3J5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBhIGluaXRpYWxpc2UgY29tcGF0aWJsZSB3aXRoIGNoYWluXG4gICAgICogQHJldHVybiBHYW1lXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGF3YWl0IFRyYW5zbGF0b3IuaSgpLnNldFQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG5ldyBRdWl6KCksIGNvbmZpZy5nYW1lLmluaXRpYWxMb2FkZXJBY3RpdmVUaW1lT3V0KTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBUcmFuc2xhdG9yLmkoKS50LnRpdGxlO1xuICAgICAgICB0aGlzLmdhbWVMb29wKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnYW1lTG9vcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb2tlbW9uRmFjdG9yeS51cGRhdGUoKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmdhbWVMb29wKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2xhdG9yIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVHJhbnNsYXRvcjtcbiAgICBwcml2YXRlIF9jdXJyZW50TGFuZ3VhZ2U6IHN0cmluZztcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdmFpbGFibGVMYW5ndWFnZXM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgX3Q6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAgIGdldCBjdXJyZW50TGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5ndWFnZTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudExhbmd1YWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGF2YWlsYWJsZUxhbmd1YWdlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGVMYW5ndWFnZXM7XG4gICAgfVxuXG4gICAgZ2V0IHQoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90O1xuICAgIH1cblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZUxhbmd1YWdlcyA9IGNvbmZpZy5sYW5ndWFnZXM7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHRoaXMuX2F2YWlsYWJsZUxhbmd1YWdlc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5nbGV0b24gcmV3cml0dGVuIGFzICdpJyB0byBtYWtlIGNvZGUgaW4gYXBwbGljYXRpb24gY2xlYW5lclxuICAgICAqIEByZXR1cm4gVHJhbnNsYXRvclxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaSgpOiBUcmFuc2xhdG9yIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zbGF0b3IuaW5zdGFuY2UgfHwgKFRyYW5zbGF0b3IuaW5zdGFuY2UgPSBuZXcgVHJhbnNsYXRvcigpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0VCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgdHJhbnNsYXRlSW1wb3J0ID0gYXdhaXQgaW1wb3J0KGAuLi9sYW5ndWFnZXMvJHt0aGlzLmN1cnJlbnRMYW5ndWFnZX0uanNvbmApIGFzIHsgW2tleTogc3RyaW5nXToge30gfTtcbiAgICAgICAgdGhpcy5fdCA9IHRyYW5zbGF0ZUltcG9ydC5kZWZhdWx0O1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3RyYW5zbGF0b3I6bGFuZ3VhZ2VDaGFuZ2UnKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAgIC8qKlxuICAgICAqIFNodWZmbGVzIGFycmF5IGluIHBsYWNlLiBFUzYgdmVyc2lvblxuICAgICAqIEBwYXJhbSB7W119IGEgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXG4gICAgICovXG4gICAgc3RhdGljIHNodWZmbGVBcnJheShhOiBbXSk6IFtdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW2FbaV0sIGFbal1dID0gW2Fbal0sIGFbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHJhbmRvbSBwcm9wZXJ0eSBmcm9tIGEgb2JqZWN0IHdpdGgga2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKi9cbiAgICBzdGF0aWMgcmFuZG9tUHJvcGVydHkob2JqOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIHJldHVybiBvYmpba2V5c1trZXlzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkgPDwgMF1dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaW5rIGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yO1xuICAgICAgICByZXR1cm4gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2R8YWQpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSk7XG4gICAgfVxufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2VuLmpzb25cIjogW1xuXHRcdFwiLi9kZXYvdHMvbGFuZ3VhZ2VzL2VuLmpzb25cIixcblx0XHQwXG5cdF0sXG5cdFwiLi9ubC5qc29uXCI6IFtcblx0XHRcIi4vZGV2L3RzL2xhbmd1YWdlcy9ubC5qc29uXCIsXG5cdFx0MVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAzKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9kZXYvdHMvbGFuZ3VhZ2VzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzb24kXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgKGF3YWl0IGdhbWUuaW5pdGlhbGl6ZSgpKS5zdGFydCgpO1xufSk7XG4iLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uL2hlbHBlcnMvdXRpbHNcIjtcbmltcG9ydCBQb2tlbW9uU3ByaXRlcyBmcm9tIFwiLi9wb2tlbW9uc3ByaXRlc1wiO1xuaW1wb3J0IFBva2Vtb25EYXRhU2VydmljZSBmcm9tIFwiLi9wb2tlbW9uZGF0YXNlcnZpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZW1vbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBva2VkZXhFbnRyeTogbnVtYmVyO1xuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IFBva2Vtb25EYXRhU2VydmljZSA9IFBva2Vtb25EYXRhU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlciA9IDk2O1xuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIgPSA5NjtcbiAgICBwcml2YXRlIHg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB5OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RyaXBGcm9tTmFtZTogc3RyaW5nW10gPSBbJy1tJCcsICctZiQnXTtcbiAgICBwcml2YXRlIF9zcHJpdGVzOiBQb2tlbW9uU3ByaXRlcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIHdheSBvZiBtYXBwaW5nIGtleSBwcm9wZXJ0aWVzIHRvIHRoZSBhY3R1YWxseSByZXF1aXJlZCBwcm9wZXJ0aWVzKVxuICAgICAqXG4gICAgICogQHRvZG8gQ2hlY2sgd2l0aCBPbm5vXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqL1xuICAgIHNldCBzcHJpdGVzKG9iajogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgICAgICB0aGlzLl9zcHJpdGVzID0gbmV3IFBva2Vtb25TcHJpdGVzKCk7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9zcHJpdGVzKSkpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgdGhpcy5fc3ByaXRlc1trZXldID0gb2JqW2tleV07XG5cbiAgICAgICAgICAgIC8vSnVzdCBzb21lIGxhbWUgd29yayBhcm91bmQgdG8gcHJlbG9hZCBpbWFnZXMgaW50byBjYWNoZVxuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHBva2VkZXhFbnRyeTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucG9rZWRleEVudHJ5ID0gcG9rZWRleEVudHJ5O1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFBva2Vtb25CeVBva2VkZXhFbnRyeShwb2tlZGV4RW50cnksIHRoaXMuYXNzaWduTG9hZGVkRGF0YS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzc2lnbkxvYWRlZERhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIC8vU3RyaXAgZXhjZXB0aW9uc1xuICAgICAgICBsZXQgcmVnRXhwID0gbmV3IFJlZ0V4cCh0aGlzLnN0cmlwRnJvbU5hbWUuam9pbignfCcpLCBcImdpXCIpO1xuICAgICAgICB0aGlzLl9uYW1lID0gZGF0YS5zcGVjaWVzLm5hbWUucmVwbGFjZShyZWdFeHAsICcnKTtcbiAgICAgICAgdGhpcy5zcHJpdGVzID0gZGF0YS5zcHJpdGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFuZG9tU3ByaXRlID0gVXRpbHMucmFuZG9tUHJvcGVydHkodGhpcy5fc3ByaXRlcyk7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7cmFuZG9tU3ByaXRlfVwiKWA7XG4gICAgICAgIHRoaXMuZHJhdyhVdGlscy5nZXRSYW5kb21JbnQoMCwgd2luZG93LmlubmVyV2lkdGggLSB0aGlzLndpZHRoKSwgVXRpbHMuZ2V0UmFuZG9tSW50KDQ2LCB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLmhlaWdodCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB4XG4gICAgICogQHBhcmFtIHlcbiAgICAgKi9cbiAgICBwcml2YXRlIGRyYXcoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ID0geCAtICh0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIHRoaXMueSA9IHkgLSAodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy54fXB4LCAke3RoaXMueX1weClgO1xuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY3AtcG9rZW1vbicsIFBva2Vtb24pO1xuIiwidHlwZSBGdW5jdGlvbkNhbGxiYWNrID0gKGRhdGE6IHt9KSA9PiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25EYXRhU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFBva2Vtb25EYXRhU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJhc2VVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9cIjtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBQb2tlbW9uRGF0YVNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gUG9rZW1vbkRhdGFTZXJ2aWNlLmluc3RhbmNlIHx8IChQb2tlbW9uRGF0YVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgUG9rZW1vbkRhdGFTZXJ2aWNlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBwb2tlZGV4RW50cnlcbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0hhbmRsZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UG9rZW1vbkJ5UG9rZWRleEVudHJ5KHBva2VkZXhFbnRyeTogbnVtYmVyLCBzdWNjZXNzSGFuZGxlcjogRnVuY3Rpb25DYWxsYmFjayk6IHZvaWQge1xuICAgICAgICB0aGlzLmZldGNoQVBJRGF0YShgcG9rZW1vbi8ke3Bva2VkZXhFbnRyeX1gLCBzdWNjZXNzSGFuZGxlcilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0hhbmRsZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGZldGNoQVBJRGF0YShlbmRwb2ludDogc3RyaW5nLCBzdWNjZXNzSGFuZGxlcjogRnVuY3Rpb25DYWxsYmFjayk6IHZvaWQge1xuICAgICAgICBmZXRjaCh0aGlzLmJhc2VVcmwgKyBlbmRwb2ludClcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc3VjY2Vzc0hhbmRsZXIoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goKGRhdGEpID0+IHRoaXMuZXJyb3JIYW5kbGVyKGRhdGEpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAdG9kbyBNYWtlIHNvbWUgZXJyb3IgaGFuZGxpbmcgdGhhdCBkb2VzIG1ha2Ugc2Vuc2UgOilcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyKGRhdGE6IHt9KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSlcbiAgICB9XG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcbmltcG9ydCBQb2tlbW9uIGZyb20gXCIuL3Bva2Vtb25cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vaGVscGVycy91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uRmFjdG9yeSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwb2tlbW9uczogUG9rZW1vbltdID0gW107XG4gICAgcHJpdmF0ZSByZWFkb25seSB0b3RhbFRvQ2hvb3NlRnJvbTogbnVtYmVyID0gY29uZmlnLmdhbWUuYWN0aXZlUG9rZW1vbjtcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50Rm9yR2FtZTogbnVtYmVyID0gdGhpcy50b3RhbFRvQ2hvb3NlRnJvbTtcbiAgICBwcml2YXRlIGFjdGl2ZVBva2Vtb246IFBva2Vtb24gPSBudWxsO1xuICAgIHByaXZhdGUgJHdyYXBwZXI6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgbGFzdFVwZGF0ZTogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiR3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb2tlbW9uc1wiKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3F1aXo6cXVlc3Rpb25OZXcnLCAoKSA9PiB0aGlzLnNwYXduKCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpzdGFydCcsIChlKSA9PiB0aGlzLmluaXRpYWxpemVQb2tlbW9ucygoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsLmFtb3VudCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGltZXI6ZG9uZScsICgpID0+IHRoaXMuZGVzcGF3bigpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3F1aXo6cXVlc3Rpb25Eb25lJywgKCkgPT4gdGhpcy5kZXNwYXduKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhbW91bnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRpYWxpemVQb2tlbW9ucyhhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRvdGFsQW1vdW50Rm9yR2FtZSA9IGFtb3VudDtcbiAgICAgICAgbGV0IGluaXRpYWxEYXRhID0gQXJyYXkuZnJvbShBcnJheSh0aGlzLnRvdGFsVG9DaG9vc2VGcm9tKSkubWFwKChfdiwgaSkgPT4gaSArIDEpO1xuICAgICAgICBsZXQgZmlsdGVyZWREYXRhID0gVXRpbHMuc2h1ZmZsZUFycmF5KGluaXRpYWxEYXRhIGFzIFtdKS5zbGljZSgwLCB0aGlzLnRvdGFsQW1vdW50Rm9yR2FtZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb2tlbW9uID0gbmV3IFBva2Vtb24oZmlsdGVyZWREYXRhW2ldKTtcbiAgICAgICAgICAgIHRoaXMucG9rZW1vbnMucHVzaChwb2tlbW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBva2Vtb25zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmFjdGl2ZVBva2Vtb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbiA9IHRoaXMucG9rZW1vbnMuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9rZW1vbnMubGVuZ3RoKSwgMSlbMF07XG4gICAgICAgIHRoaXMuJHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3RpdmVQb2tlbW9uKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwb2tlbW9uOnNwYXduJywge2RldGFpbDoge3Bva2Vtb25OYW1lOiB0aGlzLmFjdGl2ZVBva2Vtb24ubmFtZX19KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXNwYXduKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZVBva2Vtb24ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbiA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9rZW1vbiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKyt0aGlzLmxhc3RVcGRhdGUgJSAxMCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBva2Vtb24udXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uU3ByaXRlcyB7XG4gICAgcHVibGljIGJhY2tfZGVmYXVsdDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgYmFja19zaGlueTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgZnJvbnRfZGVmYXVsdDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgZnJvbnRfc2hpbnk6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgUXVpeiBmcm9tIFwiLi9xdWl6XCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiLi4vaGVscGVycy90cmFuc2xhdG9yXCI7XG5pbXBvcnQgUXVpekVsZW1lbnQgZnJvbSBcIi4vcXVpemVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Vlc3NGb3JtIGV4dGVuZHMgUXVpekVsZW1lbnQge1xuICAgIHByaXZhdGUgJGd1ZXNzRm9ybTogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByaXZhdGUgJGd1ZXNzRm9ybUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcmVuZGVyVGVtcGxhdGUoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXBva2Vtb24tZ3Vlc3MnKSAhPT0gbnVsbCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXBva2Vtb24tZ3Vlc3MnKS5yZW1vdmUoKSA6ICcnO1xuXG4gICAgICAgIGxldCAkdGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm0tcG9rZW1vbi1ndWVzc1wiIGNsYXNzPVwiaXMtaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHByb2dyZXNzIGlkPVwicHJvZ3Jlc3NcIiBjbGFzcz1cInByb2dyZXNzXCIgdmFsdWU9XCIwXCIgbWF4PVwiMTAwXCI+PC9wcm9ncmVzcz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwb2tlbW9uLWd1ZXNzLW5hbWVcIiBjbGFzcz1cImlzLWhpZGRlblwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwb2tlbW9uLWd1ZXNzLW5hbWVcIiBjbGFzcz1cImlucHV0IGlzLWluZm8gaXMtZXhwYW5kZWRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJHtUcmFuc2xhdG9yLmkoKS50Lmd1ZXNzUG9rZW1vbn1cIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5xdWl6LiRtYWluLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZURvbmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUZW1wbGF0ZURvbmUoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcG9rZW1vbi1ndWVzcycpIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuJGd1ZXNzRm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb24tZ3Vlc3MtbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLiRndWVzc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHRoaXMuZ3Vlc3NGb3JtU3VibWl0SGFuZGxlcihlKSk7XG4gICAgICAgICAgICB0aGlzLiRndWVzc0Zvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHRoaXMucXVpei5oYW5kbGVBbnN3ZXIoKSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLiRndWVzc0Zvcm0uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGd1ZXNzRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLiRndWVzc0Zvcm1JbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy4kZ3Vlc3NGb3JtSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ3Vlc3NGb3JtU3VibWl0SGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucXVpei5oYW5kbGVBbnN3ZXIoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuLi9oZWxwZXJzL3RyYW5zbGF0b3JcIjtcbmltcG9ydCBRdWl6RWxlbWVudCBmcm9tIFwiLi9xdWl6ZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsU2NyZWVuIGV4dGVuZHMgUXVpekVsZW1lbnQge1xuICAgIHByaXZhdGUgJGluaXRpYWxGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG5cbiAgICByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRpYWwnKSAhPT0gbnVsbCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0aWFsJykucmVtb3ZlKCkgOiAnJztcblxuICAgICAgICBsZXQgJHRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJpbml0aWFsXCIgY2xhc3M9XCJwYWdlbG9hZGVyIGlzLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtLXBva2Vtb24taW5pdGlhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBva2Vtb24tZ3Vlc3MtYW1vdW50XCIgY2xhc3M9XCJsYWJlbFwiPiR7VHJhbnNsYXRvci5pKCkudC5pbnRyb1F1ZXN0aW9ufTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRUZW1wbGF0ZUxhbmd1YWdlcygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicG9rZW1vbi1ndWVzcy1hbW91bnRcIiBjbGFzcz1cImlucHV0IGlzLXdhcm5pbmcgaXMtZXhwYW5kZWRcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiNVwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNVwiIGF1dG9mb2N1cy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicG9rZW1vbi1ndWVzcy11c2VybmFtZVwiIGNsYXNzPVwiaW5wdXQgaXMtd2FybmluZyBpcy1leHBhbmRlZFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIke1RyYW5zbGF0b3IuaSgpLnQuaW5wdXROYW1lfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGlzLXdhcm5pbmdcIiB2YWx1ZT1cIiR7VHJhbnNsYXRvci5pKCkudC5pbnB1dFN1Ym1pdH0gJiN4MUY1MjU7XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLnF1aXouJG1haW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAkdGVtcGxhdGUpO1xuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlRG9uZSgpO1xuICAgIH1cblxuICAgIHJlbmRlclRlbXBsYXRlRG9uZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5xdWl6LiRtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGluaXRpYWxGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcG9rZW1vbi1pbml0aWFsJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICAgICAgdGhpcy4kaW5pdGlhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHRoaXMucXVpei5pbml0aWFsRm9ybVN1Ym1pdEhhbmRsZXIoZSkpO1xuICAgICAgICAgICAgWy4uLnRoaXMuJGluaXRpYWxGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9bGFuZ3VhZ2VdJyldLm1hcCgoJGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHRoaXMubGFuZ3VhZ2VDaGFuZ2VIYW5kbGVyKGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICAvL1VnbHkgYnV0IGFsc28gbmVlZGVkIHRvIHRyaWdnZXIgQ1NTIGFuaW1hdGlvbiB0aGUgcmlnaHQgd2F5Li4uIDooXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWFsXCIpLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpLCA1MCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUZW1wbGF0ZUxhbmd1YWdlcygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgY3VycmVudExhbmd1YWdlID0gVHJhbnNsYXRvci5pKCkuY3VycmVudExhbmd1YWdlO1xuICAgICAgICByZXR1cm4gVHJhbnNsYXRvci5pKCkuYXZhaWxhYmxlTGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2U6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpcy1jaGVja3JhZGlvIGlzLXJ0bCBpcy13YXJuaW5nIGlzLXNtYWxsXCIgaWQ9XCJsYW5ndWFnZSR7aW5kZXh9XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke2xhbmd1YWdlfVwiIG5hbWU9XCJsYW5ndWFnZVwiICR7Y3VycmVudExhbmd1YWdlID09PSBsYW5ndWFnZSA/ICdjaGVja2VkPVwiY2hlY2tlZFwiJyA6ICcnfS8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhbmd1YWdlJHtpbmRleH1cIj4ke2xhbmd1YWdlfTwvbGFiZWw+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9KS5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbGFuZ3VhZ2VDaGFuZ2VIYW5kbGVyKGU6IEV2ZW50KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgVHJhbnNsYXRvci5pKCkuY3VycmVudExhbmd1YWdlID0gKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgYXdhaXQgVHJhbnNsYXRvci5pKCkuc2V0VCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGluaXRpYWxGb3JtLnJlbW92ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4uL2hlbHBlcnMvdHJhbnNsYXRvclwiO1xuaW1wb3J0IFF1aXpFbGVtZW50IGZyb20gXCIuL3F1aXplbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRTY3JlZW4gZXh0ZW5kcyBRdWl6RWxlbWVudCB7XG4gICAgcHJpdmF0ZSAkbG9hZFNjcmVlbjogSFRNTEVsZW1lbnQ7XG5cbiAgICByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vsb2FkZXInKSAhPT0gbnVsbCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlbG9hZGVyJykucmVtb3ZlKCkgOiAnJztcblxuICAgICAgICBsZXQgJHRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwYWdlbG9hZGVyXCIgY2xhc3M9XCJwYWdlbG9hZGVyIGlzLXdhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+JHtUcmFuc2xhdG9yLmkoKS50LmxvYWRpbmd9PC9zcGFuPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBgO1xuXG4gICAgICAgIHRoaXMucXVpei4kbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICR0ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGVEb25lKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyVGVtcGxhdGVEb25lKCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2Vsb2FkZXJcIik7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLiRsb2FkU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLiRsb2FkU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmlnZ2VyTmV3UXVlc3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdxdWl6OnF1ZXN0aW9uTmV3JykpXG4gICAgICAgIH0sIGNvbmZpZy5nYW1lLmxvYWRTY3JlZW5BY3RpdmVUaW1lT3V0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlVGl0bGUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLiRsb2FkU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzdGF0dXNcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3RhdHVzKHN0YXR1czogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtd2FybmluZycsICdpcy1zdWNjZXNzJywgJ2lzLWRhbmdlcicsICdpcy1wcmltYXJ5Jyk7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LmFkZChgaXMtJHtzdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtFbmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB0aGlzLiRsb2FkU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2VuZC1zY3JlZW4nKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIjtcbmltcG9ydCBTY29yZSBmcm9tIFwiLi9zY29yZVwiO1xuaW1wb3J0IEd1ZXNzRm9ybSBmcm9tIFwiLi9ndWVzc2Zvcm1cIjtcbmltcG9ydCBMb2FkU2NyZWVuIGZyb20gXCIuL2xvYWRzY3JlZW5cIjtcbmltcG9ydCBJbml0aWFsU2NyZWVuIGZyb20gXCIuL2luaXRpYWxzY3JlZW5cIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuLi9oZWxwZXJzL3RyYW5zbGF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpeiB7XG4gICAgcHVibGljICRtYWluOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHRvdGFsUXVlc3Rpb25zOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgaW5pdGlhbFNjcmVlbjogSW5pdGlhbFNjcmVlbjtcbiAgICBwcml2YXRlIGd1ZXNzRm9ybTogR3Vlc3NGb3JtO1xuICAgIHByaXZhdGUgbG9hZFNjcmVlbjogTG9hZFNjcmVlbjtcbiAgICBwcml2YXRlIHRpbWVyOiBUaW1lcjtcbiAgICBwcml2YXRlIHNjb3JlOiBTY29yZTtcbiAgICBwcml2YXRlIGd1ZXNzZWRQb2tlbW9uOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAdG9kbyBUaGlzIGNsYXNzIGNvbWJpbmVkIHdpdGggSW5pdGlhbFNjcmVlbiwgR3Vlc3NGb3JtIGFuZCBMb2FkU2NyZWVuIHNob3VsZCBwcm9iYWJseSBiZSByZWZhY3RvcmVkIGEgbGl0dGxlLi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjcmVlbiA9IG5ldyBJbml0aWFsU2NyZWVuKHRoaXMpO1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybSA9IG5ldyBHdWVzc0Zvcm0odGhpcyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbiA9IG5ldyBMb2FkU2NyZWVuKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bva2Vtb246c3Bhd24nLCAoZSkgPT4gdGhpcy5zdGFydFF1ZXN0aW9uKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWVyOmRvbmUnLCAoKSA9PiB0aGlzLnRpbWVyRG9uZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciB0aGUgZm9ybVxuICAgICAqXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdGlhbEZvcm1TdWJtaXRIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b3RhbFF1ZXN0aW9ucyA9IHBhcnNlSW50KChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1ndWVzcy1hbW91bnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncXVpejpzdGFydCcsIHtkZXRhaWw6IHthbW91bnQ6IHRoaXMudG90YWxRdWVzdGlvbnN9fSkpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFNjcmVlbi5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWFsXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSBuZXcgU2NvcmUoKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnRyaWdnZXJOZXdRdWVzdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGFydFF1ZXN0aW9uKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XG4gICAgICAgIHRoaXMudGltZXIucmVzdGFydCgpO1xuICAgICAgICB0aGlzLmd1ZXNzZWRQb2tlbW9uID0gKGUgYXMgQ3VzdG9tRXZlbnQpLmRldGFpbC5wb2tlbW9uTmFtZTtcbiAgICAgICAgdGhpcy5ndWVzc0Zvcm0uc2hvdygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdGltZXJEb25lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybS5oaWRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uID09PSB0aGlzLnRvdGFsUXVlc3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmVuZFNjcmVlbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNoYW5nZVRpdGxlKFRyYW5zbGF0b3IuaSgpLnQud3JvbmdBbnN3ZXIucmVwbGFjZShcIltbcG9rZW1vbl1dXCIsIHRoaXMuZ3Vlc3NlZFBva2Vtb24pKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnNldFN0YXR1cygnZGFuZ2VyJyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi50cmlnZ2VyTmV3UXVlc3Rpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlQW5zd2VyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ndWVzc2VkUG9rZW1vbiAhPT0gdGhpcy5ndWVzc0Zvcm0uZ2V0Q3VycmVudFZhbHVlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtLmhpZGUoKTtcbiAgICAgICAgdGhpcy5zY29yZS52YWx1ZSsrO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3F1aXo6cXVlc3Rpb25Eb25lJykpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbiA9PT0gdGhpcy50b3RhbFF1ZXN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5lbmRTY3JlZW4oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5jaGFuZ2VUaXRsZShUcmFuc2xhdG9yLmkoKS50Lmdvb2RBbnN3ZXIpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uc2V0U3RhdHVzKCdzdWNjZXNzJyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi50cmlnZ2VyTmV3UXVlc3Rpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZFNjcmVlbigpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1heFNjb3JlID0gdGhpcy5zY29yZS5nZXRNYXgodGhpcy50b3RhbFF1ZXN0aW9ucyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5jaGFuZ2VUaXRsZShUcmFuc2xhdG9yLmkoKS50LmVuZE1lc3NhZ2UucmVwbGFjZShcIltbc2NvcmVdXVwiLCB0aGlzLnNjb3JlLnZhbHVlLnRvU3RyaW5nKCkpLnJlcGxhY2UoXCJbW21heFNjb3JlXV1cIiwgbWF4U2NvcmUudG9TdHJpbmcoKSkpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uc2V0U3RhdHVzKCdwcmltYXJ5Jyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5tYXJrRW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFF1aXogZnJvbSBcIi4vcXVpelwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBRdWl6RWxlbWVudCB7XG4gICAgcHJvdGVjdGVkIHF1aXo6IFF1aXo7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocXVpejogUXVpeikge1xuICAgICAgICB0aGlzLnF1aXogPSBxdWl6O1xuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2xhdG9yOmxhbmd1YWdlQ2hhbmdlJywgKCkgPT4gdGhpcy5yZW5kZXJUZW1wbGF0ZSgpKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkO1xuXG4gICAgYWJzdHJhY3QgcmVuZGVyVGVtcGxhdGVEb25lKCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpbmNyZW1lbnRWYWx1ZTogbnVtYmVyID0gY29uZmlnLmdhbWUuc2NvcmVQZXJRdWVzdGlvbjtcblxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgZGVmYXVsdCArKyBiZWhhdmlvdXIgYnkgaW5jcmVtZW50aW5nIHNjb3JlIHdpdGggY3VzdG9tIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX3ZhbHVlXG4gICAgICovXG4gICAgc2V0IHZhbHVlKF92YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gKHRoaXMuX3ZhbHVlICs9IHRoaXMuaW5jcmVtZW50VmFsdWUpO1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdG90YWxRdWVzdGlvbnNcbiAgICAgKiBAcmV0dXJuIG51bWJlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNYXgodG90YWxRdWVzdGlvbnM6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmluY3JlbWVudFZhbHVlICogdG90YWxRdWVzdGlvbnM7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjcC1zY29yZScsIFNjb3JlKTtcbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0b3RhbFNlY29uZHM6IG51bWJlciA9IGNvbmZpZy5nYW1lLnNlY29uZHNQZXJRdWVzdGlvbjtcbiAgICBwcml2YXRlIF9zZWNvbmRzOiBudW1iZXIgPSB0aGlzLnRvdGFsU2Vjb25kcztcbiAgICBwcml2YXRlIGludGVydmFsSWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHByb2dyZXNzYmFySW50ZXJ2YWxJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcHJvZ3Jlc3NiYXJTdGFydFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlICRwcm9ncmVzczogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwZXJmb3JtYW5jZVN0YW1wOiBudW1iZXI7XG5cbiAgICBnZXQgc2Vjb25kcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vjb25kcztcbiAgICB9XG5cbiAgICBzZXQgc2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3F1aXo6cXVlc3Rpb25Eb25lJywgKCkgPT4gdGhpcy5kZXN0cm95KCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKTsgLy8gT25seSBoZXJlIGR1ZSB0byB0cmFuc2xhdGlvbiBAdG9kb1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCAxMDAwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhckludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzYmFyKCksIDEwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhclN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlU3RhbXAgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Vjb25kcy0tO1xuXG4gICAgICAgIGlmICh0aGlzLnNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndGltZXI6ZG9uZScpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3NiYXIoKTogdm9pZCB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMudG90YWxTZWNvbmRzICogMTAwMDtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMucHJvZ3Jlc3NiYXJTdGFydFRpbWU7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRpZmYgLyBkdXJhdGlvbiAqIDEwMDtcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlID4gMTAwID8gMTAwIDogdmFsdWU7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnByb2dyZXNzYmFySW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudG90YWxTZWNvbmRzO1xuICAgICAgICB0aGlzLiRwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzAnKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=