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
                        <input data-ml="placeholder" id="pokemon-guess-name" class="input is-info is-expanded" type="text" placeholder="${_helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().t.guessPokemon}" autocomplete="off" autocorrect="off" autocapitalize="none"/>
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
                                <input data-ml="value" type="submit" class="button is-warning" value="${_helpers_translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().t.inputSubmit}"/>
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
                <span data-ml="innerHTML" class="title">${_helpers_translator__WEBPACK_IMPORTED_MODULE_1__["default"].i().t.loading}</span>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvaGVscGVycy90cmFuc2xhdG9yLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9oZWxwZXJzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9sYW5ndWFnZXMgbGF6eSBeXFwuXFwvLipcXC5qc29uJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2Rldi90cy9tYWluLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb24udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3Bva2Vtb24vcG9rZW1vbmRhdGFzZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb25mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb25zcHJpdGVzLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L2d1ZXNzZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9pbml0aWFsc2NyZWVuLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L2xvYWRzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovcXVpei50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9xdWl6ZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9zY29yZS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei90aW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q2pDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknKTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rldi90cy9tYWluLnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qc29uJ1xuaW1wb3J0IFBva2Vtb25GYWN0b3J5IGZyb20gXCIuL3Bva2Vtb24vcG9rZW1vbmZhY3RvcnlcIjtcbmltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXovcXVpelwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4vaGVscGVycy90cmFuc2xhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9rZW1vbkZhY3Rvcnk6IFBva2Vtb25GYWN0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9rZW1vbkZhY3RvcnkgPSBuZXcgUG9rZW1vbkZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgaW5pdGlhbGlzZSBjb21wYXRpYmxlIHdpdGggY2hhaW5cbiAgICAgKiBAcmV0dXJuIEdhbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgYXdhaXQgVHJhbnNsYXRvci5pKCkuc2V0VCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbmV3IFF1aXooKSwgY29uZmlnLmdhbWUuaW5pdGlhbExvYWRlckFjdGl2ZVRpbWVPdXQpO1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFRyYW5zbGF0b3IuaSgpLnQudGl0bGU7XG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdhbWVMb29wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBva2Vtb25GYWN0b3J5LnVwZGF0ZSgpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZ2FtZUxvb3AoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zbGF0b3Ige1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBUcmFuc2xhdG9yO1xuICAgIHByaXZhdGUgX2N1cnJlbnRMYW5ndWFnZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F2YWlsYWJsZUxhbmd1YWdlczogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBfdDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gICAgZ2V0IGN1cnJlbnRMYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50TGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgYXZhaWxhYmxlTGFuZ3VhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZUxhbmd1YWdlcztcbiAgICB9XG5cbiAgICBnZXQgdCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTGFuZ3VhZ2VzID0gY29uZmlnLmxhbmd1YWdlcztcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdGhpcy5fYXZhaWxhYmxlTGFuZ3VhZ2VzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmdsZXRvbiByZXdyaXR0ZW4gYXMgJ2knIHRvIG1ha2UgY29kZSBpbiBhcHBsaWNhdGlvbiBjbGVhbmVyXG4gICAgICogQHJldHVybiBUcmFuc2xhdG9yXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBpKCk6IFRyYW5zbGF0b3Ige1xuICAgICAgICByZXR1cm4gVHJhbnNsYXRvci5pbnN0YW5jZSB8fCAoVHJhbnNsYXRvci5pbnN0YW5jZSA9IG5ldyBUcmFuc2xhdG9yKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZXRUKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGxldCB0cmFuc2xhdGVJbXBvcnQgPSBhd2FpdCBpbXBvcnQoYC4uL2xhbmd1YWdlcy8ke3RoaXMuY3VycmVudExhbmd1YWdlfS5qc29uYCkgYXMgeyBba2V5OiBzdHJpbmddOiB7fSB9O1xuICAgICAgICB0aGlzLl90ID0gdHJhbnNsYXRlSW1wb3J0LmRlZmF1bHQ7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndHJhbnNsYXRvcjpsYW5ndWFnZUNoYW5nZScpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gICAgLyoqXG4gICAgICogU2h1ZmZsZXMgYXJyYXkgaW4gcGxhY2UuIEVTNiB2ZXJzaW9uXG4gICAgICogQHBhcmFtIHtbXX0gYSBpdGVtcyBBbiBhcnJheSBjb250YWluaW5nIHRoZSBpdGVtcy5cbiAgICAgKi9cbiAgICBzdGF0aWMgc2h1ZmZsZUFycmF5KGE6IFtdKTogW10ge1xuICAgICAgICBmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbYVtpXSwgYVtqXV0gPSBbYVtqXSwgYVtpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgcmFuZG9tIHByb3BlcnR5IGZyb20gYSBvYmplY3Qgd2l0aCBrZXlzXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqL1xuICAgIHN0YXRpYyByYW5kb21Qcm9wZXJ0eShvYmo6IGFueSk6IGFueSB7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgcmV0dXJuIG9ialtrZXlzW2tleXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSA8PCAwXV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGxpbmsgaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS9cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGEgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3I7XG4gICAgICAgIHJldHVybiAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZHxhZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKTtcbiAgICB9XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW4uanNvblwiOiBbXG5cdFx0XCIuL2Rldi90cy9sYW5ndWFnZXMvZW4uanNvblwiLFxuXHRcdDBcblx0XSxcblx0XCIuL25sLmpzb25cIjogW1xuXHRcdFwiLi9kZXYvdHMvbGFuZ3VhZ2VzL25sLmpzb25cIixcblx0XHQxXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL2Rldi90cy9sYW5ndWFnZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanNvbiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICAoYXdhaXQgZ2FtZS5pbml0aWFsaXplKCkpLnN0YXJ0KCk7XG59KTtcbiIsImltcG9ydCBVdGlscyBmcm9tIFwiLi4vaGVscGVycy91dGlsc1wiO1xuaW1wb3J0IFBva2Vtb25TcHJpdGVzIGZyb20gXCIuL3Bva2Vtb25zcHJpdGVzXCI7XG5pbXBvcnQgUG9rZW1vbkRhdGFTZXJ2aWNlIGZyb20gXCIuL3Bva2Vtb25kYXRhc2VydmljZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9rZWRleEVudHJ5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogUG9rZW1vbkRhdGFTZXJ2aWNlID0gUG9rZW1vbkRhdGFTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyID0gOTY7XG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlciA9IDk2O1xuICAgIHByaXZhdGUgeDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHk6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdHJpcEZyb21OYW1lOiBzdHJpbmdbXSA9IFsnLW0kJywgJy1mJCddO1xuICAgIHByaXZhdGUgX3Nwcml0ZXM6IFBva2Vtb25TcHJpdGVzID0gbnVsbDtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gd2F5IG9mIG1hcHBpbmcga2V5IHByb3BlcnRpZXMgdG8gdGhlIGFjdHVhbGx5IHJlcXVpcmVkIHByb3BlcnRpZXMpXG4gICAgICpcbiAgICAgKiBAdG9kbyBDaGVjayB3aXRoIE9ubm9cbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICovXG4gICAgc2V0IHNwcml0ZXMob2JqOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZXMgPSBuZXcgUG9rZW1vblNwcml0ZXMoKTtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3Nwcml0ZXMpKSk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW2tleV0gPSBvYmpba2V5XTtcblxuICAgICAgICAgICAgLy9KdXN0IHNvbWUgbGFtZSB3b3JrIGFyb3VuZCB0byBwcmVsb2FkIGltYWdlcyBpbnRvIGNhY2hlXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocG9rZWRleEVudHJ5OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wb2tlZGV4RW50cnkgPSBwb2tlZGV4RW50cnk7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0UG9rZW1vbkJ5UG9rZWRleEVudHJ5KHBva2VkZXhFbnRyeSwgdGhpcy5hc3NpZ25Mb2FkZWREYXRhLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNzaWduTG9hZGVkRGF0YShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy9TdHJpcCBleGNlcHRpb25zXG4gICAgICAgIGxldCByZWdFeHAgPSBuZXcgUmVnRXhwKHRoaXMuc3RyaXBGcm9tTmFtZS5qb2luKCd8JyksIFwiZ2lcIik7XG4gICAgICAgIHRoaXMuX25hbWUgPSBkYXRhLnNwZWNpZXMubmFtZS5yZXBsYWNlKHJlZ0V4cCwgJycpO1xuICAgICAgICB0aGlzLnNwcml0ZXMgPSBkYXRhLnNwcml0ZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5kb21TcHJpdGUgPSBVdGlscy5yYW5kb21Qcm9wZXJ0eSh0aGlzLl9zcHJpdGVzKTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtyYW5kb21TcHJpdGV9XCIpYDtcbiAgICAgICAgdGhpcy5kcmF3KFV0aWxzLmdldFJhbmRvbUludCgwLCB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGgpLCBVdGlscy5nZXRSYW5kb21JbnQoNDYsIHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuaGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqL1xuICAgIHByaXZhdGUgZHJhdyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnggPSB4IC0gKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy55ID0geSAtICh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLnh9cHgsICR7dGhpcy55fXB4KWA7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjcC1wb2tlbW9uJywgUG9rZW1vbik7XG4iLCJ0eXBlIEZ1bmN0aW9uQ2FsbGJhY2sgPSAoZGF0YToge30pID0+IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZW1vbkRhdGFTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUG9rZW1vbkRhdGFTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVVybDogc3RyaW5nID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL1wiO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFBva2Vtb25EYXRhU2VydmljZSB7XG4gICAgICAgIHJldHVybiBQb2tlbW9uRGF0YVNlcnZpY2UuaW5zdGFuY2UgfHwgKFBva2Vtb25EYXRhU2VydmljZS5pbnN0YW5jZSA9IG5ldyBQb2tlbW9uRGF0YVNlcnZpY2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBva2VkZXhFbnRyeVxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb2tlbW9uQnlQb2tlZGV4RW50cnkocG9rZWRleEVudHJ5OiBudW1iZXIsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmV0Y2hBUElEYXRhKGBwb2tlbW9uLyR7cG9rZWRleEVudHJ5fWAsIHN1Y2Nlc3NIYW5kbGVyKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbmRwb2ludFxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHByaXZhdGUgZmV0Y2hBUElEYXRhKGVuZHBvaW50OiBzdHJpbmcsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIGZldGNoKHRoaXMuYmFzZVVybCArIGVuZHBvaW50KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzdWNjZXNzSGFuZGxlcihkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZGF0YSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZGF0YSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB0b2RvIE1ha2Ugc29tZSBlcnJvciBoYW5kbGluZyB0aGF0IGRvZXMgbWFrZSBzZW5zZSA6KVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZGF0YToge30pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKVxuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFBva2Vtb24gZnJvbSBcIi4vcG9rZW1vblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9oZWxwZXJzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25GYWN0b3J5IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBva2Vtb25zOiBQb2tlbW9uW10gPSBbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsVG9DaG9vc2VGcm9tOiBudW1iZXIgPSBjb25maWcuZ2FtZS5hY3RpdmVQb2tlbW9uO1xuICAgIHByaXZhdGUgdG90YWxBbW91bnRGb3JHYW1lOiBudW1iZXIgPSB0aGlzLnRvdGFsVG9DaG9vc2VGcm9tO1xuICAgIHByaXZhdGUgYWN0aXZlUG9rZW1vbjogUG9rZW1vbiA9IG51bGw7XG4gICAgcHJpdmF0ZSAkd3JhcHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYXN0VXBkYXRlOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBva2Vtb25zXCIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbk5ldycsICgpID0+IHRoaXMuc3Bhd24oKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdxdWl6OnN0YXJ0JywgKGUpID0+IHRoaXMuaW5pdGlhbGl6ZVBva2Vtb25zKChlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwuYW1vdW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0aW1lcjpkb25lJywgKCkgPT4gdGhpcy5kZXNwYXduKCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbkRvbmUnLCAoKSA9PiB0aGlzLmRlc3Bhd24oKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFtb3VudFxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVBva2Vtb25zKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnRGb3JHYW1lID0gYW1vdW50O1xuICAgICAgICBsZXQgaW5pdGlhbERhdGEgPSBBcnJheS5mcm9tKEFycmF5KHRoaXMudG90YWxUb0Nob29zZUZyb20pKS5tYXAoKF92LCBpKSA9PiBpICsgMSk7XG4gICAgICAgIGxldCBmaWx0ZXJlZERhdGEgPSBVdGlscy5zaHVmZmxlQXJyYXkoaW5pdGlhbERhdGEgYXMgW10pLnNsaWNlKDAsIHRoaXMudG90YWxBbW91bnRGb3JHYW1lKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBva2Vtb24gPSBuZXcgUG9rZW1vbihmaWx0ZXJlZERhdGFbaV0pO1xuICAgICAgICAgICAgdGhpcy5wb2tlbW9ucy5wdXNoKHBva2Vtb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3bigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9rZW1vbnMubGVuZ3RoID09PSAwIHx8IHRoaXMuYWN0aXZlUG9rZW1vbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gdGhpcy5wb2tlbW9ucy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wb2tlbW9ucy5sZW5ndGgpLCAxKVswXTtcbiAgICAgICAgdGhpcy4kd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2ZVBva2Vtb24pO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Bva2Vtb246c3Bhd24nLCB7ZGV0YWlsOiB7cG9rZW1vbk5hbWU6IHRoaXMuYWN0aXZlUG9rZW1vbi5uYW1lfX0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Bhd24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb2tlbW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgrK3RoaXMubGFzdFVwZGF0ZSAlIDEwID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25TcHJpdGVzIHtcbiAgICBwdWJsaWMgYmFja19kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBiYWNrX3NoaW55OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9zaGlueTogc3RyaW5nID0gXCJcIjtcblxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cbiIsImltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuLi9oZWxwZXJzL3RyYW5zbGF0b3JcIjtcbmltcG9ydCBRdWl6RWxlbWVudCBmcm9tIFwiLi9xdWl6ZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzc0Zvcm0gZXh0ZW5kcyBRdWl6RWxlbWVudCB7XG4gICAgcHJpdmF0ZSAkZ3Vlc3NGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSAkZ3Vlc3NGb3JtSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcG9rZW1vbi1ndWVzcycpICE9PSBudWxsID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcG9rZW1vbi1ndWVzcycpLnJlbW92ZSgpIDogJyc7XG5cbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybS1wb2tlbW9uLWd1ZXNzXCIgY2xhc3M9XCJpcy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgaWQ9XCJwcm9ncmVzc1wiIGNsYXNzPVwicHJvZ3Jlc3NcIiB2YWx1ZT1cIjBcIiBtYXg9XCIxMDBcIj48L3Byb2dyZXNzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBva2Vtb24tZ3Vlc3MtbmFtZVwiIGNsYXNzPVwiaXMtaGlkZGVuXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW1sPVwicGxhY2Vob2xkZXJcIiBpZD1cInBva2Vtb24tZ3Vlc3MtbmFtZVwiIGNsYXNzPVwiaW5wdXQgaXMtaW5mbyBpcy1leHBhbmRlZFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIke1RyYW5zbGF0b3IuaSgpLnQuZ3Vlc3NQb2tlbW9ufVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJub25lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLnF1aXouJG1haW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAkdGVtcGxhdGUpO1xuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlRG9uZSgpO1xuICAgIH1cblxuICAgIHJlbmRlclRlbXBsYXRlRG9uZSgpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRndWVzc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wb2tlbW9uLWd1ZXNzJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1ndWVzcy1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuJGd1ZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdGhpcy5ndWVzc0Zvcm1TdWJtaXRIYW5kbGVyKGUpKTtcbiAgICAgICAgICAgIHRoaXMuJGd1ZXNzRm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4gdGhpcy5xdWl6LmhhbmRsZUFuc3dlcigpKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGd1ZXNzRm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRndWVzc0Zvcm1JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuJGd1ZXNzRm9ybUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q3VycmVudFZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLiRndWVzc0Zvcm1JbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlXG4gICAgICovXG4gICAgcHJpdmF0ZSBndWVzc0Zvcm1TdWJtaXRIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5xdWl6LmhhbmRsZUFuc3dlcigpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFF1aXogZnJvbSBcIi4vcXVpelwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4uL2hlbHBlcnMvdHJhbnNsYXRvclwiO1xuaW1wb3J0IFF1aXpFbGVtZW50IGZyb20gXCIuL3F1aXplbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRpYWxTY3JlZW4gZXh0ZW5kcyBRdWl6RWxlbWVudCB7XG4gICAgcHJpdmF0ZSAkaW5pdGlhbEZvcm06IEhUTUxGb3JtRWxlbWVudDtcblxuICAgIHJlbmRlclRlbXBsYXRlKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdGlhbCcpICE9PSBudWxsID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRpYWwnKS5yZW1vdmUoKSA6ICcnO1xuXG4gICAgICAgIGxldCAkdGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImluaXRpYWxcIiBjbGFzcz1cInBhZ2Vsb2FkZXIgaXMtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm0tcG9rZW1vbi1pbml0aWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicG9rZW1vbi1ndWVzcy1hbW91bnRcIiBjbGFzcz1cImxhYmVsXCI+JHtUcmFuc2xhdG9yLmkoKS50LmludHJvUXVlc3Rpb259PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdldFRlbXBsYXRlTGFuZ3VhZ2VzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwb2tlbW9uLWd1ZXNzLWFtb3VudFwiIGNsYXNzPVwiaW5wdXQgaXMtd2FybmluZyBpcy1leHBhbmRlZFwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCI1XCIgbWF4PVwiMTAwXCIgdmFsdWU9XCI1XCIgYXV0b2ZvY3VzLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwb2tlbW9uLWd1ZXNzLXVzZXJuYW1lXCIgY2xhc3M9XCJpbnB1dCBpcy13YXJuaW5nIGlzLWV4cGFuZGVkXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiR7VHJhbnNsYXRvci5pKCkudC5pbnB1dE5hbWV9XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW1sPVwidmFsdWVcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gaXMtd2FybmluZ1wiIHZhbHVlPVwiJHtUcmFuc2xhdG9yLmkoKS50LmlucHV0U3VibWl0fVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5xdWl6LiRtYWluLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZURvbmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUZW1wbGF0ZURvbmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucXVpei4kbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRpbml0aWFsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXBva2Vtb24taW5pdGlhbCcpIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuJGluaXRpYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB0aGlzLnF1aXouaW5pdGlhbEZvcm1TdWJtaXRIYW5kbGVyKGUpKTtcbiAgICAgICAgICAgIFsuLi50aGlzLiRpbml0aWFsRm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPWxhbmd1YWdlXScpXS5tYXAoKCRlbDogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB0aGlzLmxhbmd1YWdlQ2hhbmdlSGFuZGxlcihlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgLy9VZ2x5IGJ1dCBhbHNvIG5lZWRlZCB0byB0cmlnZ2VyIENTUyBhbmltYXRpb24gdGhlIHJpZ2h0IHdheS4uLiA6KFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdGlhbFwiKS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKSwgNTApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VGVtcGxhdGVMYW5ndWFnZXMoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZSA9IFRyYW5zbGF0b3IuaSgpLmN1cnJlbnRMYW5ndWFnZTtcbiAgICAgICAgcmV0dXJuIFRyYW5zbGF0b3IuaSgpLmF2YWlsYWJsZUxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaXMtY2hlY2tyYWRpbyBpcy1ydGwgaXMtd2FybmluZyBpcy1zbWFsbFwiIGlkPVwibGFuZ3VhZ2Uke2luZGV4fVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiJHtsYW5ndWFnZX1cIiBuYW1lPVwibGFuZ3VhZ2VcIiAke2N1cnJlbnRMYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgPyAnY2hlY2tlZD1cImNoZWNrZWRcIicgOiAnJ30vPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYW5ndWFnZSR7aW5kZXh9XCI+JHtsYW5ndWFnZX08L2xhYmVsPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfSkuam9pbihcIlwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxhbmd1YWdlQ2hhbmdlSGFuZGxlcihlOiBFdmVudCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIFRyYW5zbGF0b3IuaSgpLmN1cnJlbnRMYW5ndWFnZSA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICAgIGF3YWl0IFRyYW5zbGF0b3IuaSgpLnNldFQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLiRpbml0aWFsRm9ybS5yZW1vdmUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuLi9oZWxwZXJzL3RyYW5zbGF0b3JcIjtcbmltcG9ydCBRdWl6RWxlbWVudCBmcm9tIFwiLi9xdWl6ZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkU2NyZWVuIGV4dGVuZHMgUXVpekVsZW1lbnQge1xuICAgIHByaXZhdGUgJGxvYWRTY3JlZW46IEhUTUxFbGVtZW50O1xuXG4gICAgcmVuZGVyVGVtcGxhdGUoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlbG9hZGVyJykgIT09IG51bGwgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWxvYWRlcicpLnJlbW92ZSgpIDogJyc7XG5cbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnZWxvYWRlclwiIGNsYXNzPVwicGFnZWxvYWRlciBpcy13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1tbD1cImlubmVySFRNTFwiIGNsYXNzPVwidGl0bGVcIj4ke1RyYW5zbGF0b3IuaSgpLnQubG9hZGluZ308L3NwYW4+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5xdWl6LiRtYWluLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZURvbmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUZW1wbGF0ZURvbmUoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kbG9hZFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZWxvYWRlclwiKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyaWdnZXJOZXdRdWVzdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3F1aXo6cXVlc3Rpb25OZXcnKSlcbiAgICAgICAgfSwgY29uZmlnLmdhbWUubG9hZFNjcmVlbkFjdGl2ZVRpbWVPdXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VUaXRsZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4ucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHN0YXR1c1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kbG9hZFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy13YXJuaW5nJywgJ2lzLXN1Y2Nlc3MnLCAnaXMtZGFuZ2VyJywgJ2lzLXByaW1hcnknKTtcbiAgICAgICAgdGhpcy4kbG9hZFNjcmVlbi5jbGFzc0xpc3QuYWRkKGBpcy0ke3N0YXR1c31gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0VuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnZW5kLXNjcmVlbicpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IFNjb3JlIGZyb20gXCIuL3Njb3JlXCI7XG5pbXBvcnQgR3Vlc3NGb3JtIGZyb20gXCIuL2d1ZXNzZm9ybVwiO1xuaW1wb3J0IExvYWRTY3JlZW4gZnJvbSBcIi4vbG9hZHNjcmVlblwiO1xuaW1wb3J0IEluaXRpYWxTY3JlZW4gZnJvbSBcIi4vaW5pdGlhbHNjcmVlblwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4uL2hlbHBlcnMvdHJhbnNsYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWl6IHtcbiAgICBwdWJsaWMgJG1haW46IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50UXVlc3Rpb246IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpbml0aWFsU2NyZWVuOiBJbml0aWFsU2NyZWVuO1xuICAgIHByaXZhdGUgZ3Vlc3NGb3JtOiBHdWVzc0Zvcm07XG4gICAgcHJpdmF0ZSBsb2FkU2NyZWVuOiBMb2FkU2NyZWVuO1xuICAgIHByaXZhdGUgdGltZXI6IFRpbWVyO1xuICAgIHByaXZhdGUgc2NvcmU6IFNjb3JlO1xuICAgIHByaXZhdGUgZ3Vlc3NlZFBva2Vtb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEB0b2RvIFRoaXMgY2xhc3MgY29tYmluZWQgd2l0aCBJbml0aWFsU2NyZWVuLCBHdWVzc0Zvcm0gYW5kIExvYWRTY3JlZW4gc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgYSBsaXR0bGUuLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NyZWVuID0gbmV3IEluaXRpYWxTY3JlZW4odGhpcyk7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtID0gbmV3IEd1ZXNzRm9ybSh0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuID0gbmV3IExvYWRTY3JlZW4odGhpcyk7XG5cbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9rZW1vbjpzcGF3bicsIChlKSA9PiB0aGlzLnN0YXJ0UXVlc3Rpb24oZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGltZXI6ZG9uZScsICgpID0+IHRoaXMudGltZXJEb25lKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHRoZSBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0aWFsRm9ybVN1Ym1pdEhhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvdGFsUXVlc3Rpb25zID0gcGFyc2VJbnQoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uLWd1ZXNzLWFtb3VudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdxdWl6OnN0YXJ0Jywge2RldGFpbDoge2Ftb3VudDogdGhpcy50b3RhbFF1ZXN0aW9uc319KSk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsU2NyZWVuLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxcIikuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSgpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4udHJpZ2dlck5ld1F1ZXN0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXJ0UXVlc3Rpb24oZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24rKztcbiAgICAgICAgdGhpcy50aW1lci5yZXN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZ3Vlc3NlZFBva2Vtb24gPSAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsLnBva2Vtb25OYW1lO1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybS5zaG93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lckRvbmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtLmhpZGUoKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gPT09IHRoaXMudG90YWxRdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2NyZWVuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uY2hhbmdlVGl0bGUoVHJhbnNsYXRvci5pKCkudC53cm9uZ0Fuc3dlci5yZXBsYWNlKFwiW1twb2tlbW9uXV1cIiwgdGhpcy5ndWVzc2VkUG9rZW1vbikpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uc2V0U3RhdHVzKCdkYW5nZXInKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnRyaWdnZXJOZXdRdWVzdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVBbnN3ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmd1ZXNzZWRQb2tlbW9uICE9PSB0aGlzLmd1ZXNzRm9ybS5nZXRDdXJyZW50VmFsdWUoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ndWVzc0Zvcm0uaGlkZSgpO1xuICAgICAgICB0aGlzLnNjb3JlLnZhbHVlKys7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncXVpejpxdWVzdGlvbkRvbmUnKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uID09PSB0aGlzLnRvdGFsUXVlc3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmVuZFNjcmVlbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNoYW5nZVRpdGxlKFRyYW5zbGF0b3IuaSgpLnQuZ29vZEFuc3dlcik7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5zZXRTdGF0dXMoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnRyaWdnZXJOZXdRdWVzdGlvbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW5kU2NyZWVuKCk6IHZvaWQge1xuICAgICAgICBsZXQgbWF4U2NvcmUgPSB0aGlzLnNjb3JlLmdldE1heCh0aGlzLnRvdGFsUXVlc3Rpb25zKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNoYW5nZVRpdGxlKFRyYW5zbGF0b3IuaSgpLnQuZW5kTWVzc2FnZS5yZXBsYWNlKFwiW1tzY29yZV1dXCIsIHRoaXMuc2NvcmUudmFsdWUudG9TdHJpbmcoKSkucmVwbGFjZShcIltbbWF4U2NvcmVdXVwiLCBtYXhTY29yZS50b1N0cmluZygpKSk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5zZXRTdGF0dXMoJ3ByaW1hcnknKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLm1hcmtFbmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUXVpeiBmcm9tIFwiLi9xdWl6XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFF1aXpFbGVtZW50IHtcbiAgICBwcm90ZWN0ZWQgcXVpejogUXVpejtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihxdWl6OiBRdWl6KSB7XG4gICAgICAgIHRoaXMucXVpeiA9IHF1aXo7XG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zbGF0b3I6bGFuZ3VhZ2VDaGFuZ2UnLCAoKSA9PiB0aGlzLnJlbmRlclRlbXBsYXRlKCkpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IHJlbmRlclRlbXBsYXRlKCk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCByZW5kZXJUZW1wbGF0ZURvbmUoKTogdm9pZDtcbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGluY3JlbWVudFZhbHVlOiBudW1iZXIgPSBjb25maWcuZ2FtZS5zY29yZVBlclF1ZXN0aW9uO1xuXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBkZWZhdWx0ICsrIGJlaGF2aW91ciBieSBpbmNyZW1lbnRpbmcgc2NvcmUgd2l0aCBjdXN0b20gdmFsdWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBfdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgdmFsdWUoX3ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAodGhpcy5fdmFsdWUgKz0gdGhpcy5pbmNyZW1lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSB0aGlzLl92YWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB0b3RhbFF1ZXN0aW9uc1xuICAgICAqIEByZXR1cm4gbnVtYmVyXG4gICAgICovXG4gICAgcHVibGljIGdldE1heCh0b3RhbFF1ZXN0aW9uczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5jcmVtZW50VmFsdWUgKiB0b3RhbFF1ZXN0aW9ucztcbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NwLXNjb3JlJywgU2NvcmUpO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsU2Vjb25kczogbnVtYmVyID0gY29uZmlnLmdhbWUuc2Vjb25kc1BlclF1ZXN0aW9uO1xuICAgIHByaXZhdGUgX3NlY29uZHM6IG51bWJlciA9IHRoaXMudG90YWxTZWNvbmRzO1xuICAgIHByaXZhdGUgaW50ZXJ2YWxJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcHJvZ3Jlc3NiYXJJbnRlcnZhbElkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwcm9ncmVzc2JhclN0YXJ0VGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgJHByb2dyZXNzOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHBlcmZvcm1hbmNlU3RhbXA6IG51bWJlcjtcblxuICAgIGdldCBzZWNvbmRzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWNvbmRzO1xuICAgIH1cblxuICAgIHNldCBzZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2Vjb25kcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcycpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbkRvbmUnLCAoKSA9PiB0aGlzLmRlc3Ryb3koKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLiRwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcycpOyAvLyBPbmx5IGhlcmUgZHVlIHRvIHRyYW5zbGF0aW9uIEB0b2RvXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlKCksIDEwMDApO1xuICAgICAgICB0aGlzLnByb2dyZXNzYmFySW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3NiYXIoKSwgMTApO1xuICAgICAgICB0aGlzLnByb2dyZXNzYmFyU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2VTdGFtcCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWNvbmRzLS07XG5cbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd0aW1lcjpkb25lJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9ncmVzc2JhcigpOiB2b2lkIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdGhpcy50b3RhbFNlY29uZHMgKiAxMDAwO1xuICAgICAgICBsZXQgZGlmZiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5wcm9ncmVzc2JhclN0YXJ0VGltZTtcbiAgICAgICAgbGV0IHZhbHVlID0gZGlmZiAvIGR1cmF0aW9uICogMTAwO1xuXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPiAxMDAgPyAxMDAgOiB2YWx1ZTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbElkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucHJvZ3Jlc3NiYXJJbnRlcnZhbElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gdGhpcy50b3RhbFNlY29uZHM7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMCcpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==