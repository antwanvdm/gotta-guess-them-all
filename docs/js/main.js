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
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
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

module.exports = JSON.parse("{\"languages\":[\"en\",\"nl\"],\"game\":{\"activePokemon\":386,\"scorePerQuestion\":3,\"secondsPerQuestion\":8,\"initialLoaderActiveTimeOut\":400,\"loadScreenActiveTimeOut\":2000}}");

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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
        this.updateTitle();
        window.addEventListener('translator:languageChange', () => this.updateTitle());
        this.gameLoop();
    }
    updateTitle() {
        document.title = _helpers_translator__WEBPACK_IMPORTED_MODULE_3__["default"].i().t('title');
    }
    gameLoop() {
        this.pokemonFactory.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }
}


/***/ }),

/***/ "./dev/ts/helpers/multilingualelement.ts":
/*!***********************************************!*\
  !*** ./dev/ts/helpers/multilingualelement.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultilingualElement; });
/* harmony import */ var _translator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translator */ "./dev/ts/helpers/translator.ts");

class MultilingualElement {
    constructor() {
        window.addEventListener('translator:languageChange', () => this.renderProperties());
    }
    renderProperties() {
        [...this.$element.querySelectorAll('[data-ml]')].forEach(($childElement) => {
            let dataML = $childElement.getAttribute('data-ml');
            let translateString = _translator__WEBPACK_IMPORTED_MODULE_0__["default"].i().t($childElement.getAttribute('data-ml-key'));
            if (dataML === "") {
                $childElement.innerHTML = translateString;
            }
            else {
                $childElement.setAttribute(dataML, translateString);
            }
        });
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./dev/ts/helpers/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    static i() {
        return Translator.instance || (Translator.instance = new Translator());
    }
    t(translateKey, replacements) {
        let translateString = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].htmlEntityDecode(this._t[translateKey]);
        if (replacements) {
            Object.keys(replacements).forEach((key) => {
                translateString = translateString.replace(`[[${key}]]`, replacements[key]);
            });
        }
        return translateString;
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
    static htmlEntityDecode(html) {
        let txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


window.addEventListener('load', () => __awaiter(void 0, void 0, void 0, function* () {
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
/* harmony import */ var _quizelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quizelement */ "./dev/ts/quiz/quizelement.ts");

class GuessForm extends _quizelement__WEBPACK_IMPORTED_MODULE_0__["default"] {
    renderTemplate() {
        let $template = `
            <form id="form-pokemon-guess" class="is-hidden">
                <progress id="progress" class="progress" value="0" max="100"></progress>
                <div class="field">
                    <div class="control">
                        <label for="pokemon-guess-name" class="is-hidden"></label>
                        <input data-ml="placeholder" data-ml-key="guessPokemon" id="pokemon-guess-name" class="input is-info is-expanded" type="text" autocomplete="off" autocorrect="off" autocapitalize="none"/>
                    </div>
                </div>
            </form>
        `;
        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.renderTemplateDone();
    }
    renderTemplateDone() {
        setTimeout(() => {
            this.$element = document.getElementById('form-pokemon-guess');
            this.renderProperties();
            this.$guessFormInput = document.getElementById('pokemon-guess-name');
            this.$element.addEventListener('submit', (e) => this.guessFormSubmitHandler(e));
            this.$guessFormInput.addEventListener('keyup', () => this.quiz.handleAnswer());
        }, 0);
    }
    hide() {
        this.$element.classList.add('is-hidden');
    }
    show() {
        this.$element.classList.remove('is-hidden');
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class InitialScreen extends _quizelement__WEBPACK_IMPORTED_MODULE_1__["default"] {
    renderTemplate() {
        let $template = `
            <section id="initial" class="pageloader is-info">
                <div class="title">
                    <form id="form-pokemon-initial">
                        <label data-ml data-ml-key="introQuestion" for="pokemon-guess-amount" class="label"></label>
                        
                        <div class="field">
                            ${this.getTemplateLanguages()}
                        </div>
                    
                        <div class="field">
                            <div class="control">
                                <input id="pokemon-guess-amount" class="input is-warning is-expanded" type="number" min="5" max="100" value="5" autofocus/>
                            </div>
                            <div class="control">
                                <input data-ml="placeholder" data-ml-key="inputName" id="pokemon-guess-username" class="input is-warning is-expanded" type="text"/>
                            </div>
                            <div class="control">
                                <input data-ml="value" data-ml-key="inputSubmit" type="submit" class="button is-warning"/>
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
            this.$element = document.getElementById('initial');
            this.renderProperties();
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
/* harmony import */ var _quizelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quizelement */ "./dev/ts/quiz/quizelement.ts");


class LoadScreen extends _quizelement__WEBPACK_IMPORTED_MODULE_1__["default"] {
    renderTemplate() {
        let $template = `
            <section id="pageloader" class="pageloader is-warning">
                <span data-ml data-ml-key="loading" class="title"></span>
            </section>
        `;
        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.renderTemplateDone();
    }
    renderTemplateDone() {
        setTimeout(() => {
            this.$element = document.getElementById("pageloader");
            this.renderProperties();
        }, 0);
    }
    show() {
        this.$element.classList.add('is-active');
    }
    hide() {
        this.$element.classList.remove('is-active');
    }
    triggerNewQuestion() {
        this.show();
        setTimeout(() => {
            this.hide();
            window.dispatchEvent(new CustomEvent('quiz:questionNew'));
        }, _config_json__WEBPACK_IMPORTED_MODULE_0__.game.loadScreenActiveTimeOut);
    }
    changeTitle(value) {
        this.$element.querySelector('.title').innerHTML = value;
    }
    setStatus(status) {
        this.$element.classList.remove('is-warning', 'is-success', 'is-danger', 'is-primary');
        this.$element.classList.add(`is-${status}`);
    }
    markEnd() {
        this.show();
        this.$element.classList.add('end-screen');
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
        this.loadScreen.changeTitle(_helpers_translator__WEBPACK_IMPORTED_MODULE_5__["default"].i().t('wrongAnswer', { pokemon: this.guessedPokemon }));
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
        this.loadScreen.changeTitle(_helpers_translator__WEBPACK_IMPORTED_MODULE_5__["default"].i().t('goodAnswer'));
        this.loadScreen.setStatus('success');
        this.loadScreen.triggerNewQuestion();
    }
    endScreen() {
        let maxScore = this.score.getMax(this.totalQuestions);
        this.loadScreen.changeTitle(_helpers_translator__WEBPACK_IMPORTED_MODULE_5__["default"].i().t('endMessage', {
            score: this.score.value.toString(),
            maxScore: maxScore.toString()
        }));
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
/* harmony import */ var _helpers_multilingualelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/multilingualelement */ "./dev/ts/helpers/multilingualelement.ts");

class QuizElement extends _helpers_multilingualelement__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(quiz) {
        super();
        this.quiz = quiz;
        this.renderTemplate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3Njc3Mvc3R5bGUuc2Nzcz84ZTg1Iiwid2VicGFjazovLy8uL2Rldi90cy9nYW1lLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9oZWxwZXJzL211bHRpbGluZ3VhbGVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL2hlbHBlcnMvdHJhbnNsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvaGVscGVycy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbGFuZ3VhZ2VzIGxhenkgXlxcLlxcLy4qXFwuanNvbiQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb25kYXRhc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uc3ByaXRlcy50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9ndWVzc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovaW5pdGlhbHNjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9sb2Fkc2NyZWVuLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L3F1aXoudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovcXVpemVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovc2NvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovdGltZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9C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Zm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rldi90cy9tYWluLnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qc29uJ1xuaW1wb3J0IFBva2Vtb25GYWN0b3J5IGZyb20gXCIuL3Bva2Vtb24vcG9rZW1vbmZhY3RvcnlcIjtcbmltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXovcXVpelwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4vaGVscGVycy90cmFuc2xhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9rZW1vbkZhY3Rvcnk6IFBva2Vtb25GYWN0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9rZW1vbkZhY3RvcnkgPSBuZXcgUG9rZW1vbkZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgaW5pdGlhbGlzZSBjb21wYXRpYmxlIHdpdGggY2hhaW5cbiAgICAgKiBAcmV0dXJuIEdhbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBhd2FpdCBUcmFuc2xhdG9yLmkoKS5zZXRUKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBuZXcgUXVpeigpLCBjb25maWcuZ2FtZS5pbml0aWFsTG9hZGVyQWN0aXZlVGltZU91dCk7XG4gICAgICAgIHRoaXMudXBkYXRlVGl0bGUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zbGF0b3I6bGFuZ3VhZ2VDaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRpdGxlKCkpO1xuICAgICAgICB0aGlzLmdhbWVMb29wKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUaXRsZSgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBUcmFuc2xhdG9yLmkoKS50KCd0aXRsZScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2FtZUxvb3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9rZW1vbkZhY3RvcnkudXBkYXRlKCk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5nYW1lTG9vcCgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiLi90cmFuc2xhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIE11bHRpbGluZ3VhbEVsZW1lbnQge1xuICAgICRlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zbGF0b3I6bGFuZ3VhZ2VDaGFuZ2UnLCAoKSA9PiB0aGlzLnJlbmRlclByb3BlcnRpZXMoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMoKTogdm9pZCB7XG4gICAgICAgIFsuLi50aGlzLiRlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1sXScpXS5mb3JFYWNoKCgkY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YU1MID0gJGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWwnKTtcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGVTdHJpbmcgPSBUcmFuc2xhdG9yLmkoKS50KCRjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW1sLWtleScpKTtcblxuICAgICAgICAgICAgaWYgKGRhdGFNTCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICRjaGlsZEVsZW1lbnQuaW5uZXJIVE1MID0gdHJhbnNsYXRlU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkY2hpbGRFbGVtZW50LnNldEF0dHJpYnV0ZShkYXRhTUwsIHRyYW5zbGF0ZVN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zbGF0b3Ige1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBUcmFuc2xhdG9yO1xuICAgIHByaXZhdGUgX2N1cnJlbnRMYW5ndWFnZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F2YWlsYWJsZUxhbmd1YWdlczogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBfdDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gICAgZ2V0IGN1cnJlbnRMYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50TGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgYXZhaWxhYmxlTGFuZ3VhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZUxhbmd1YWdlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9hdmFpbGFibGVMYW5ndWFnZXMgPSBjb25maWcubGFuZ3VhZ2VzO1xuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLl9hdmFpbGFibGVMYW5ndWFnZXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2luZ2xldG9uIHJld3JpdHRlbiBhcyAnaScgdG8gbWFrZSBjb2RlIGluIGFwcGxpY2F0aW9uIGNsZWFuZXJcbiAgICAgKiBAcmV0dXJuIFRyYW5zbGF0b3JcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGkoKTogVHJhbnNsYXRvciB7XG4gICAgICAgIHJldHVybiBUcmFuc2xhdG9yLmluc3RhbmNlIHx8IChUcmFuc2xhdG9yLmluc3RhbmNlID0gbmV3IFRyYW5zbGF0b3IoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJpYyBmdW5jdGlvbiB0byByZXRyaWV2ZSB2YWx1ZXMgZnJvbSB0cmFuc2xhdGlvbiBrZXkgJiBwcm9jZXNzIHRoZW0gY29ycmVjdGx5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHJhbnNsYXRlS2V5XG4gICAgICogQHBhcmFtIHJlcGxhY2VtZW50c1xuICAgICAqL1xuICAgIHB1YmxpYyB0KHRyYW5zbGF0ZUtleTogc3RyaW5nLCByZXBsYWNlbWVudHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVN0cmluZyA9IFV0aWxzLmh0bWxFbnRpdHlEZWNvZGUodGhpcy5fdFt0cmFuc2xhdGVLZXldKTtcbiAgICAgICAgaWYgKHJlcGxhY2VtZW50cykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVwbGFjZW1lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVTdHJpbmcgPSB0cmFuc2xhdGVTdHJpbmcucmVwbGFjZShgW1ske2tleX1dXWAsIHJlcGxhY2VtZW50c1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGVTdHJpbmc7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNldFQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZUltcG9ydCA9IGF3YWl0IGltcG9ydChgLi4vbGFuZ3VhZ2VzLyR7dGhpcy5jdXJyZW50TGFuZ3VhZ2V9Lmpzb25gKSBhcyB7IFtrZXk6IHN0cmluZ106IHt9IH07XG4gICAgICAgIHRoaXMuX3QgPSB0cmFuc2xhdGVJbXBvcnQuZGVmYXVsdDtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd0cmFuc2xhdG9yOmxhbmd1YWdlQ2hhbmdlJykpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbiAgICAvKipcbiAgICAgKiBTaHVmZmxlcyBhcnJheSBpbiBwbGFjZS4gRVM2IHZlcnNpb25cbiAgICAgKiBAcGFyYW0ge1tdfSBhIGl0ZW1zIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGl0ZW1zLlxuICAgICAqL1xuICAgIHN0YXRpYyBzaHVmZmxlQXJyYXkoYTogW10pOiBbXSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBhLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFthW2ldLCBhW2pdXSA9IFthW2pdLCBhW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSByYW5kb20gcHJvcGVydHkgZnJvbSBhIG9iamVjdCB3aXRoIGtleXNcbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICovXG4gICAgc3RhdGljIHJhbmRvbVByb3BlcnR5KG9iajogYW55KTogYW55IHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICByZXR1cm4gb2JqW2tleXNba2V5cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpIDw8IDBdXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgc3RhdGljIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzM5NDc4N1xuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICovXG4gICAgc3RhdGljIGh0bWxFbnRpdHlEZWNvZGUoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgdHh0LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiB0eHQudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGxpbmsgaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS9cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGEgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3I7XG4gICAgICAgIHJldHVybiAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZHxhZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKTtcbiAgICB9XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW4uanNvblwiOiBbXG5cdFx0XCIuL2Rldi90cy9sYW5ndWFnZXMvZW4uanNvblwiLFxuXHRcdDBcblx0XSxcblx0XCIuL25sLmpzb25cIjogW1xuXHRcdFwiLi9kZXYvdHMvbGFuZ3VhZ2VzL25sLmpzb25cIixcblx0XHQxXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL2Rldi90cy9sYW5ndWFnZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanNvbiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICAoYXdhaXQgZ2FtZS5pbml0aWFsaXplKCkpLnN0YXJ0KCk7XG59KTtcbiIsImltcG9ydCBVdGlscyBmcm9tIFwiLi4vaGVscGVycy91dGlsc1wiO1xuaW1wb3J0IFBva2Vtb25TcHJpdGVzIGZyb20gXCIuL3Bva2Vtb25zcHJpdGVzXCI7XG5pbXBvcnQgUG9rZW1vbkRhdGFTZXJ2aWNlIGZyb20gXCIuL3Bva2Vtb25kYXRhc2VydmljZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9rZWRleEVudHJ5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogUG9rZW1vbkRhdGFTZXJ2aWNlID0gUG9rZW1vbkRhdGFTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyID0gOTY7XG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlciA9IDk2O1xuICAgIHByaXZhdGUgeDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHk6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdHJpcEZyb21OYW1lOiBzdHJpbmdbXSA9IFsnLW0kJywgJy1mJCddO1xuICAgIHByaXZhdGUgX3Nwcml0ZXM6IFBva2Vtb25TcHJpdGVzID0gbnVsbDtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gd2F5IG9mIG1hcHBpbmcga2V5IHByb3BlcnRpZXMgdG8gdGhlIGFjdHVhbGx5IHJlcXVpcmVkIHByb3BlcnRpZXMpXG4gICAgICpcbiAgICAgKiBAdG9kbyBDaGVjayB3aXRoIE9ubm9cbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICovXG4gICAgc2V0IHNwcml0ZXMob2JqOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZXMgPSBuZXcgUG9rZW1vblNwcml0ZXMoKTtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3Nwcml0ZXMpKSk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW2tleV0gPSBvYmpba2V5XTtcblxuICAgICAgICAgICAgLy9KdXN0IHNvbWUgbGFtZSB3b3JrIGFyb3VuZCB0byBwcmVsb2FkIGltYWdlcyBpbnRvIGNhY2hlXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocG9rZWRleEVudHJ5OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wb2tlZGV4RW50cnkgPSBwb2tlZGV4RW50cnk7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0UG9rZW1vbkJ5UG9rZWRleEVudHJ5KHBva2VkZXhFbnRyeSwgdGhpcy5hc3NpZ25Mb2FkZWREYXRhLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNzaWduTG9hZGVkRGF0YShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy9TdHJpcCBleGNlcHRpb25zXG4gICAgICAgIGxldCByZWdFeHAgPSBuZXcgUmVnRXhwKHRoaXMuc3RyaXBGcm9tTmFtZS5qb2luKCd8JyksIFwiZ2lcIik7XG4gICAgICAgIHRoaXMuX25hbWUgPSBkYXRhLnNwZWNpZXMubmFtZS5yZXBsYWNlKHJlZ0V4cCwgJycpO1xuICAgICAgICB0aGlzLnNwcml0ZXMgPSBkYXRhLnNwcml0ZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5kb21TcHJpdGUgPSBVdGlscy5yYW5kb21Qcm9wZXJ0eSh0aGlzLl9zcHJpdGVzKTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtyYW5kb21TcHJpdGV9XCIpYDtcbiAgICAgICAgdGhpcy5kcmF3KFV0aWxzLmdldFJhbmRvbUludCgwLCB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGgpLCBVdGlscy5nZXRSYW5kb21JbnQoNDYsIHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuaGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqL1xuICAgIHByaXZhdGUgZHJhdyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnggPSB4IC0gKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy55ID0geSAtICh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLnh9cHgsICR7dGhpcy55fXB4KWA7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjcC1wb2tlbW9uJywgUG9rZW1vbik7XG4iLCJ0eXBlIEZ1bmN0aW9uQ2FsbGJhY2sgPSAoZGF0YToge30pID0+IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZW1vbkRhdGFTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUG9rZW1vbkRhdGFTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVVybDogc3RyaW5nID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL1wiO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFBva2Vtb25EYXRhU2VydmljZSB7XG4gICAgICAgIHJldHVybiBQb2tlbW9uRGF0YVNlcnZpY2UuaW5zdGFuY2UgfHwgKFBva2Vtb25EYXRhU2VydmljZS5pbnN0YW5jZSA9IG5ldyBQb2tlbW9uRGF0YVNlcnZpY2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBva2VkZXhFbnRyeVxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb2tlbW9uQnlQb2tlZGV4RW50cnkocG9rZWRleEVudHJ5OiBudW1iZXIsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmV0Y2hBUElEYXRhKGBwb2tlbW9uLyR7cG9rZWRleEVudHJ5fWAsIHN1Y2Nlc3NIYW5kbGVyKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbmRwb2ludFxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHByaXZhdGUgZmV0Y2hBUElEYXRhKGVuZHBvaW50OiBzdHJpbmcsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIGZldGNoKHRoaXMuYmFzZVVybCArIGVuZHBvaW50KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzdWNjZXNzSGFuZGxlcihkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZGF0YSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZGF0YSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB0b2RvIE1ha2Ugc29tZSBlcnJvciBoYW5kbGluZyB0aGF0IGRvZXMgbWFrZSBzZW5zZSA6KVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZGF0YToge30pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKVxuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFBva2Vtb24gZnJvbSBcIi4vcG9rZW1vblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9oZWxwZXJzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25GYWN0b3J5IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBva2Vtb25zOiBQb2tlbW9uW10gPSBbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsVG9DaG9vc2VGcm9tOiBudW1iZXIgPSBjb25maWcuZ2FtZS5hY3RpdmVQb2tlbW9uO1xuICAgIHByaXZhdGUgdG90YWxBbW91bnRGb3JHYW1lOiBudW1iZXIgPSB0aGlzLnRvdGFsVG9DaG9vc2VGcm9tO1xuICAgIHByaXZhdGUgYWN0aXZlUG9rZW1vbjogUG9rZW1vbiA9IG51bGw7XG4gICAgcHJpdmF0ZSAkd3JhcHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYXN0VXBkYXRlOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBva2Vtb25zXCIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbk5ldycsICgpID0+IHRoaXMuc3Bhd24oKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdxdWl6OnN0YXJ0JywgKGUpID0+IHRoaXMuaW5pdGlhbGl6ZVBva2Vtb25zKChlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwuYW1vdW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0aW1lcjpkb25lJywgKCkgPT4gdGhpcy5kZXNwYXduKCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbkRvbmUnLCAoKSA9PiB0aGlzLmRlc3Bhd24oKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFtb3VudFxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVBva2Vtb25zKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnRGb3JHYW1lID0gYW1vdW50O1xuICAgICAgICBsZXQgaW5pdGlhbERhdGEgPSBBcnJheS5mcm9tKEFycmF5KHRoaXMudG90YWxUb0Nob29zZUZyb20pKS5tYXAoKF92LCBpKSA9PiBpICsgMSk7XG4gICAgICAgIGxldCBmaWx0ZXJlZERhdGEgPSBVdGlscy5zaHVmZmxlQXJyYXkoaW5pdGlhbERhdGEgYXMgW10pLnNsaWNlKDAsIHRoaXMudG90YWxBbW91bnRGb3JHYW1lKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBva2Vtb24gPSBuZXcgUG9rZW1vbihmaWx0ZXJlZERhdGFbaV0pO1xuICAgICAgICAgICAgdGhpcy5wb2tlbW9ucy5wdXNoKHBva2Vtb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3bigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9rZW1vbnMubGVuZ3RoID09PSAwIHx8IHRoaXMuYWN0aXZlUG9rZW1vbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gdGhpcy5wb2tlbW9ucy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wb2tlbW9ucy5sZW5ndGgpLCAxKVswXTtcbiAgICAgICAgdGhpcy4kd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2ZVBva2Vtb24pO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Bva2Vtb246c3Bhd24nLCB7ZGV0YWlsOiB7cG9rZW1vbk5hbWU6IHRoaXMuYWN0aXZlUG9rZW1vbi5uYW1lfX0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Bhd24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb2tlbW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgrK3RoaXMubGFzdFVwZGF0ZSAlIDEwID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25TcHJpdGVzIHtcbiAgICBwdWJsaWMgYmFja19kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBiYWNrX3NoaW55OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9zaGlueTogc3RyaW5nID0gXCJcIjtcblxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cbiIsImltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuLi9oZWxwZXJzL3RyYW5zbGF0b3JcIjtcbmltcG9ydCBRdWl6RWxlbWVudCBmcm9tIFwiLi9xdWl6ZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzc0Zvcm0gZXh0ZW5kcyBRdWl6RWxlbWVudCB7XG4gICAgcHJpdmF0ZSAkZ3Vlc3NGb3JtSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybS1wb2tlbW9uLWd1ZXNzXCIgY2xhc3M9XCJpcy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgaWQ9XCJwcm9ncmVzc1wiIGNsYXNzPVwicHJvZ3Jlc3NcIiB2YWx1ZT1cIjBcIiBtYXg9XCIxMDBcIj48L3Byb2dyZXNzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBva2Vtb24tZ3Vlc3MtbmFtZVwiIGNsYXNzPVwiaXMtaGlkZGVuXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW1sPVwicGxhY2Vob2xkZXJcIiBkYXRhLW1sLWtleT1cImd1ZXNzUG9rZW1vblwiIGlkPVwicG9rZW1vbi1ndWVzcy1uYW1lXCIgY2xhc3M9XCJpbnB1dCBpcy1pbmZvIGlzLWV4cGFuZGVkXCIgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5xdWl6LiRtYWluLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZURvbmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUZW1wbGF0ZURvbmUoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXBva2Vtb24tZ3Vlc3MnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb3BlcnRpZXMoKTtcbiAgICAgICAgICAgIHRoaXMuJGd1ZXNzRm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb24tZ3Vlc3MtbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB0aGlzLmd1ZXNzRm9ybVN1Ym1pdEhhbmRsZXIoZSkpO1xuICAgICAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB0aGlzLnF1aXouaGFuZGxlQW5zd2VyKCkpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLiRndWVzc0Zvcm1JbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy4kZ3Vlc3NGb3JtSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ3Vlc3NGb3JtU3VibWl0SGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucXVpei5oYW5kbGVBbnN3ZXIoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuLi9oZWxwZXJzL3RyYW5zbGF0b3JcIjtcbmltcG9ydCBRdWl6RWxlbWVudCBmcm9tIFwiLi9xdWl6ZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsU2NyZWVuIGV4dGVuZHMgUXVpekVsZW1lbnQge1xuICAgIHByaXZhdGUgJGluaXRpYWxGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG5cbiAgICByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiaW5pdGlhbFwiIGNsYXNzPVwicGFnZWxvYWRlciBpcy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybS1wb2tlbW9uLWluaXRpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLW1sIGRhdGEtbWwta2V5PVwiaW50cm9RdWVzdGlvblwiIGZvcj1cInBva2Vtb24tZ3Vlc3MtYW1vdW50XCIgY2xhc3M9XCJsYWJlbFwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRUZW1wbGF0ZUxhbmd1YWdlcygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicG9rZW1vbi1ndWVzcy1hbW91bnRcIiBjbGFzcz1cImlucHV0IGlzLXdhcm5pbmcgaXMtZXhwYW5kZWRcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiNVwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNVwiIGF1dG9mb2N1cy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtbWw9XCJwbGFjZWhvbGRlclwiIGRhdGEtbWwta2V5PVwiaW5wdXROYW1lXCIgaWQ9XCJwb2tlbW9uLWd1ZXNzLXVzZXJuYW1lXCIgY2xhc3M9XCJpbnB1dCBpcy13YXJuaW5nIGlzLWV4cGFuZGVkXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtbWw9XCJ2YWx1ZVwiIGRhdGEtbWwta2V5PVwiaW5wdXRTdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gaXMtd2FybmluZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5xdWl6LiRtYWluLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZURvbmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUZW1wbGF0ZURvbmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucXVpei4kbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRpYWwnKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvcGVydGllcygpO1xuICAgICAgICAgICAgdGhpcy4kaW5pdGlhbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wb2tlbW9uLWluaXRpYWwnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLiRpbml0aWFsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdGhpcy5xdWl6LmluaXRpYWxGb3JtU3VibWl0SGFuZGxlcihlKSk7XG4gICAgICAgICAgICBbLi4udGhpcy4kaW5pdGlhbEZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1sYW5ndWFnZV0nKV0ubWFwKCgkZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4gdGhpcy5sYW5ndWFnZUNoYW5nZUhhbmRsZXIoZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIC8vVWdseSBidXQgYWxzbyBuZWVkZWQgdG8gdHJpZ2dlciBDU1MgYW5pbWF0aW9uIHRoZSByaWdodCB3YXkuLi4gOihcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxcIikuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyksIDUwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRlbXBsYXRlTGFuZ3VhZ2VzKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSBUcmFuc2xhdG9yLmkoKS5jdXJyZW50TGFuZ3VhZ2U7XG4gICAgICAgIHJldHVybiBUcmFuc2xhdG9yLmkoKS5hdmFpbGFibGVMYW5ndWFnZXMubWFwKChsYW5ndWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlzLWNoZWNrcmFkaW8gaXMtcnRsIGlzLXdhcm5pbmcgaXMtc21hbGxcIiBpZD1cImxhbmd1YWdlJHtpbmRleH1cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7bGFuZ3VhZ2V9XCIgbmFtZT1cImxhbmd1YWdlXCIgJHtjdXJyZW50TGFuZ3VhZ2UgPT09IGxhbmd1YWdlID8gJ2NoZWNrZWQ9XCJjaGVja2VkXCInIDogJyd9Lz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFuZ3VhZ2Uke2luZGV4fVwiPiR7bGFuZ3VhZ2V9PC9sYWJlbD5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0pLmpvaW4oXCJcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsYW5ndWFnZUNoYW5nZUhhbmRsZXIoZTogRXZlbnQpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBUcmFuc2xhdG9yLmkoKS5jdXJyZW50TGFuZ3VhZ2UgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICBhd2FpdCBUcmFuc2xhdG9yLmkoKS5zZXRUKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kaW5pdGlhbEZvcm0ucmVtb3ZlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiLi4vaGVscGVycy90cmFuc2xhdG9yXCI7XG5pbXBvcnQgUXVpekVsZW1lbnQgZnJvbSBcIi4vcXVpemVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZFNjcmVlbiBleHRlbmRzIFF1aXpFbGVtZW50IHtcbiAgICByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnZWxvYWRlclwiIGNsYXNzPVwicGFnZWxvYWRlciBpcy13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1tbCBkYXRhLW1sLWtleT1cImxvYWRpbmdcIiBjbGFzcz1cInRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBgO1xuXG4gICAgICAgIHRoaXMucXVpei4kbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICR0ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGVEb25lKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyVGVtcGxhdGVEb25lKCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2Vsb2FkZXJcIik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb3BlcnRpZXMoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyaWdnZXJOZXdRdWVzdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3F1aXo6cXVlc3Rpb25OZXcnKSlcbiAgICAgICAgfSwgY29uZmlnLmdhbWUubG9hZFNjcmVlbkFjdGl2ZVRpbWVPdXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VUaXRsZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHN0YXR1c1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy13YXJuaW5nJywgJ2lzLXN1Y2Nlc3MnLCAnaXMtZGFuZ2VyJywgJ2lzLXByaW1hcnknKTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBpcy0ke3N0YXR1c31gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0VuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZW5kLXNjcmVlbicpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IFNjb3JlIGZyb20gXCIuL3Njb3JlXCI7XG5pbXBvcnQgR3Vlc3NGb3JtIGZyb20gXCIuL2d1ZXNzZm9ybVwiO1xuaW1wb3J0IExvYWRTY3JlZW4gZnJvbSBcIi4vbG9hZHNjcmVlblwiO1xuaW1wb3J0IEluaXRpYWxTY3JlZW4gZnJvbSBcIi4vaW5pdGlhbHNjcmVlblwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4uL2hlbHBlcnMvdHJhbnNsYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWl6IHtcbiAgICBwdWJsaWMgJG1haW46IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50UXVlc3Rpb246IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpbml0aWFsU2NyZWVuOiBJbml0aWFsU2NyZWVuO1xuICAgIHByaXZhdGUgZ3Vlc3NGb3JtOiBHdWVzc0Zvcm07XG4gICAgcHJpdmF0ZSBsb2FkU2NyZWVuOiBMb2FkU2NyZWVuO1xuICAgIHByaXZhdGUgdGltZXI6IFRpbWVyO1xuICAgIHByaXZhdGUgc2NvcmU6IFNjb3JlO1xuICAgIHByaXZhdGUgZ3Vlc3NlZFBva2Vtb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEB0b2RvIFRoaXMgY2xhc3MgY29tYmluZWQgd2l0aCBJbml0aWFsU2NyZWVuLCBHdWVzc0Zvcm0gYW5kIExvYWRTY3JlZW4gc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgYSBsaXR0bGUuLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NyZWVuID0gbmV3IEluaXRpYWxTY3JlZW4odGhpcyk7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtID0gbmV3IEd1ZXNzRm9ybSh0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuID0gbmV3IExvYWRTY3JlZW4odGhpcyk7XG5cbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9rZW1vbjpzcGF3bicsIChlKSA9PiB0aGlzLnN0YXJ0UXVlc3Rpb24oZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGltZXI6ZG9uZScsICgpID0+IHRoaXMudGltZXJEb25lKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHRoZSBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0aWFsRm9ybVN1Ym1pdEhhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvdGFsUXVlc3Rpb25zID0gcGFyc2VJbnQoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uLWd1ZXNzLWFtb3VudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdxdWl6OnN0YXJ0Jywge2RldGFpbDoge2Ftb3VudDogdGhpcy50b3RhbFF1ZXN0aW9uc319KSk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsU2NyZWVuLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxcIikuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSgpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4udHJpZ2dlck5ld1F1ZXN0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXJ0UXVlc3Rpb24oZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24rKztcbiAgICAgICAgdGhpcy50aW1lci5yZXN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZ3Vlc3NlZFBva2Vtb24gPSAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsLnBva2Vtb25OYW1lO1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybS5zaG93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lckRvbmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtLmhpZGUoKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gPT09IHRoaXMudG90YWxRdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2NyZWVuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uY2hhbmdlVGl0bGUoVHJhbnNsYXRvci5pKCkudCgnd3JvbmdBbnN3ZXInLCB7cG9rZW1vbjogdGhpcy5ndWVzc2VkUG9rZW1vbn0pKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnNldFN0YXR1cygnZGFuZ2VyJyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi50cmlnZ2VyTmV3UXVlc3Rpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlQW5zd2VyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ndWVzc2VkUG9rZW1vbiAhPT0gdGhpcy5ndWVzc0Zvcm0uZ2V0Q3VycmVudFZhbHVlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtLmhpZGUoKTtcbiAgICAgICAgdGhpcy5zY29yZS52YWx1ZSsrO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3F1aXo6cXVlc3Rpb25Eb25lJykpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbiA9PT0gdGhpcy50b3RhbFF1ZXN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5lbmRTY3JlZW4oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5jaGFuZ2VUaXRsZShUcmFuc2xhdG9yLmkoKS50KCdnb29kQW5zd2VyJykpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uc2V0U3RhdHVzKCdzdWNjZXNzJyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi50cmlnZ2VyTmV3UXVlc3Rpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZFNjcmVlbigpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1heFNjb3JlID0gdGhpcy5zY29yZS5nZXRNYXgodGhpcy50b3RhbFF1ZXN0aW9ucyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5jaGFuZ2VUaXRsZShUcmFuc2xhdG9yLmkoKS50KCdlbmRNZXNzYWdlJywge1xuICAgICAgICAgICAgc2NvcmU6IHRoaXMuc2NvcmUudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1heFNjb3JlOiBtYXhTY29yZS50b1N0cmluZygpXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnNldFN0YXR1cygncHJpbWFyeScpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4ubWFya0VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCBNdWx0aWxpbmd1YWxFbGVtZW50IGZyb20gXCIuLi9oZWxwZXJzL211bHRpbGluZ3VhbGVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUXVpekVsZW1lbnQgZXh0ZW5kcyBNdWx0aWxpbmd1YWxFbGVtZW50IHtcbiAgICBwcm90ZWN0ZWQgcXVpejogUXVpejtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihxdWl6OiBRdWl6KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucXVpeiA9IHF1aXo7XG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkO1xuXG4gICAgYWJzdHJhY3QgcmVuZGVyVGVtcGxhdGVEb25lKCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpbmNyZW1lbnRWYWx1ZTogbnVtYmVyID0gY29uZmlnLmdhbWUuc2NvcmVQZXJRdWVzdGlvbjtcblxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgZGVmYXVsdCArKyBiZWhhdmlvdXIgYnkgaW5jcmVtZW50aW5nIHNjb3JlIHdpdGggY3VzdG9tIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX3ZhbHVlXG4gICAgICovXG4gICAgc2V0IHZhbHVlKF92YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gKHRoaXMuX3ZhbHVlICs9IHRoaXMuaW5jcmVtZW50VmFsdWUpO1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdG90YWxRdWVzdGlvbnNcbiAgICAgKiBAcmV0dXJuIG51bWJlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNYXgodG90YWxRdWVzdGlvbnM6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmluY3JlbWVudFZhbHVlICogdG90YWxRdWVzdGlvbnM7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjcC1zY29yZScsIFNjb3JlKTtcbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0b3RhbFNlY29uZHM6IG51bWJlciA9IGNvbmZpZy5nYW1lLnNlY29uZHNQZXJRdWVzdGlvbjtcbiAgICBwcml2YXRlIF9zZWNvbmRzOiBudW1iZXIgPSB0aGlzLnRvdGFsU2Vjb25kcztcbiAgICBwcml2YXRlIGludGVydmFsSWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHByb2dyZXNzYmFySW50ZXJ2YWxJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcHJvZ3Jlc3NiYXJTdGFydFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlICRwcm9ncmVzczogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwZXJmb3JtYW5jZVN0YW1wOiBudW1iZXI7XG5cbiAgICBnZXQgc2Vjb25kcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vjb25kcztcbiAgICB9XG5cbiAgICBzZXQgc2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3F1aXo6cXVlc3Rpb25Eb25lJywgKCkgPT4gdGhpcy5kZXN0cm95KCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKTsgLy8gT25seSBoZXJlIGR1ZSB0byB0cmFuc2xhdGlvbiBAdG9kb1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCAxMDAwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhckludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzYmFyKCksIDEwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhclN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlU3RhbXAgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Vjb25kcy0tO1xuXG4gICAgICAgIGlmICh0aGlzLnNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndGltZXI6ZG9uZScpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3NiYXIoKTogdm9pZCB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMudG90YWxTZWNvbmRzICogMTAwMDtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMucHJvZ3Jlc3NiYXJTdGFydFRpbWU7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRpZmYgLyBkdXJhdGlvbiAqIDEwMDtcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlID4gMTAwID8gMTAwIDogdmFsdWU7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnByb2dyZXNzYmFySW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudG90YWxTZWNvbmRzO1xuICAgICAgICB0aGlzLiRwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzAnKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=