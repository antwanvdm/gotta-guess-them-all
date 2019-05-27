/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
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
/*! exports provided: game, default */
/***/ (function(module) {

module.exports = {"game":{"activePokemon":386,"scorePerQuestion":3,"secondsPerQuestion":8,"initialLoaderActiveTimeOut":400,"loadScreenActiveTimeOut":2000}};

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



class Game {
    constructor() {
        this.pokemonFactory = new _pokemon_pokemonfactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
        setTimeout(() => new _quiz_quiz__WEBPACK_IMPORTED_MODULE_2__["default"](), _config_json__WEBPACK_IMPORTED_MODULE_0__.game.initialLoaderActiveTimeOut);
        this.gameLoop();
    }
    gameLoop() {
        this.pokemonFactory.update();
        window.requestAnimationFrame(() => this.gameLoop());
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


window.addEventListener('load', () => new _game__WEBPACK_IMPORTED_MODULE_1__["default"]());


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
class GuessForm {
    constructor(quiz) {
        this.quiz = quiz;
        this.renderTemplate();
        setTimeout(() => {
            this.$guessForm = document.getElementById('form-pokemon-guess');
            this.$guessFormInput = document.getElementById('pokemon-guess-name');
            this.$guessForm.addEventListener('submit', (e) => this.guessFormSubmitHandler(e));
            this.$guessFormInput.addEventListener('keyup', () => this.quiz.handleAnswer());
        }, 0);
    }
    renderTemplate() {
        let $template = `
            <form id="form-pokemon-guess" class="is-hidden">
                <progress id="progress" class="progress" value="0" max="100"></progress>
                <div class="field">
                    <div class="control">
                        <label for="pokemon-guess-name" class="is-hidden"></label>
                        <input id="pokemon-guess-name" class="input is-info is-expanded" type="text" placeholder="Who is this Pokémon?!" autocomplete="off" autocorrect="off" autocapitalize="none"/>
                    </div>
                </div>
            </form>
        `;
        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
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
class InitialScreen {
    constructor(quiz) {
        this.quiz = quiz;
        this.renderTemplate();
        setTimeout(() => {
            this.$initialForm = document.getElementById('form-pokemon-initial');
            this.$initialForm.addEventListener('submit', (e) => this.quiz.initialFormSubmitHandler(e));
        }, 0);
        setTimeout(() => document.getElementById("initial").classList.add('is-active'), 50);
    }
    renderTemplate() {
        let $template = `
            <section id="initial" class="pageloader is-info">
                <div class="title">
                    <form id="form-pokemon-initial">
                        <label for="pokemon-guess-amount" class="label">How many Pokémon from gen I, II & III can you recognise in the blink of an eye?</label>
        
                        <div class="field">
                            <div class="control">
                                <input id="pokemon-guess-amount" class="input is-warning is-expanded" type="number" min="5" max="100" value="5" autofocus/>
                            </div>
                            <div class="control">
                                <input id="pokemon-guess-username" class="input is-warning is-expanded" type="text" placeholder="your name"/>
                            </div>
                            <div class="control">
                                <input type="submit" class="button is-warning" value="I'm gonna guess them all! &#x1F525;"/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        `;
        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.quiz.$main.classList.remove('is-loading');
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

class LoadScreen {
    constructor(quiz) {
        this.quiz = quiz;
        this.renderTemplate();
        setTimeout(() => {
            this.$loadScreen = document.getElementById("pageloader");
        }, 0);
    }
    renderTemplate() {
        let $template = `
            <section id="pageloader" class="pageloader is-warning">
                <span class="title">Pokémons are loaded into the system</span>
            </section>
        `;
        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
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
        this.loadScreen.changeTitle(`Nope! This Pokémon was ${this.guessedPokemon}! New Pokémon incoming!`);
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
        this.loadScreen.changeTitle('That\'s as good as it gets! New Pokémon incoming!');
        this.loadScreen.setStatus('success');
        this.loadScreen.triggerNewQuestion();
    }
    endScreen() {
        let maxScore = this.score.getMax(this.totalQuestions);
        this.loadScreen.changeTitle(`Thanks for playing, your total score is: ${this.score.value} / ${maxScore}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvaGVscGVycy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb25kYXRhc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uc3ByaXRlcy50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9ndWVzc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovaW5pdGlhbHNjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9sb2Fkc2NyZWVuLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L3F1aXoudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovc2NvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3F1aXovdGltZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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LE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQUVPLGlCQUFpQjtRQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4QyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUM1RCxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVsQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxPQUFPO1FBQ1YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVNLE9BQU87UUFDVixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0NBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGV2L3RzL21haW4udHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nXG5pbXBvcnQgUG9rZW1vbkZhY3RvcnkgZnJvbSBcIi4vcG9rZW1vbi9wb2tlbW9uZmFjdG9yeVwiO1xuaW1wb3J0IFF1aXogZnJvbSBcIi4vcXVpei9xdWl6XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9rZW1vbkZhY3Rvcnk6IFBva2Vtb25GYWN0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9rZW1vbkZhY3RvcnkgPSBuZXcgUG9rZW1vbkZhY3RvcnkoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBuZXcgUXVpeigpLCBjb25maWcuZ2FtZS5pbml0aWFsTG9hZGVyQWN0aXZlVGltZU91dCk7XG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdhbWVMb29wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBva2Vtb25GYWN0b3J5LnVwZGF0ZSgpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZ2FtZUxvb3AoKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAgIC8qKlxuICAgICAqIFNodWZmbGVzIGFycmF5IGluIHBsYWNlLiBFUzYgdmVyc2lvblxuICAgICAqIEBwYXJhbSB7W119IGEgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXG4gICAgICovXG4gICAgc3RhdGljIHNodWZmbGVBcnJheShhOiBbXSk6IFtdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW2FbaV0sIGFbal1dID0gW2Fbal0sIGFbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHJhbmRvbSBwcm9wZXJ0eSBmcm9tIGEgb2JqZWN0IHdpdGgga2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKi9cbiAgICBzdGF0aWMgcmFuZG9tUHJvcGVydHkob2JqOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIHJldHVybiBvYmpba2V5c1trZXlzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkgPDwgMF1dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaW5rIGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yO1xuICAgICAgICByZXR1cm4gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2R8YWQpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBuZXcgR2FtZSgpKTtcbiIsImltcG9ydCBVdGlscyBmcm9tIFwiLi4vaGVscGVycy91dGlsc1wiO1xuaW1wb3J0IFBva2Vtb25TcHJpdGVzIGZyb20gXCIuL3Bva2Vtb25zcHJpdGVzXCI7XG5pbXBvcnQgUG9rZW1vbkRhdGFTZXJ2aWNlIGZyb20gXCIuL3Bva2Vtb25kYXRhc2VydmljZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9rZWRleEVudHJ5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogUG9rZW1vbkRhdGFTZXJ2aWNlID0gUG9rZW1vbkRhdGFTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyID0gOTY7XG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlciA9IDk2O1xuICAgIHByaXZhdGUgeDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHk6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdHJpcEZyb21OYW1lOiBzdHJpbmdbXSA9IFsnLW0kJywgJy1mJCddO1xuICAgIHByaXZhdGUgX3Nwcml0ZXM6IFBva2Vtb25TcHJpdGVzID0gbnVsbDtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gd2F5IG9mIG1hcHBpbmcga2V5IHByb3BlcnRpZXMgdG8gdGhlIGFjdHVhbGx5IHJlcXVpcmVkIHByb3BlcnRpZXMpXG4gICAgICpcbiAgICAgKiBAdG9kbyBDaGVjayB3aXRoIE9ubm9cbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICovXG4gICAgc2V0IHNwcml0ZXMob2JqOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZXMgPSBuZXcgUG9rZW1vblNwcml0ZXMoKTtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3Nwcml0ZXMpKSk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW2tleV0gPSBvYmpba2V5XTtcblxuICAgICAgICAgICAgLy9KdXN0IHNvbWUgbGFtZSB3b3JrIGFyb3VuZCB0byBwcmVsb2FkIGltYWdlcyBpbnRvIGNhY2hlXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocG9rZWRleEVudHJ5OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wb2tlZGV4RW50cnkgPSBwb2tlZGV4RW50cnk7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0UG9rZW1vbkJ5UG9rZWRleEVudHJ5KHBva2VkZXhFbnRyeSwgdGhpcy5hc3NpZ25Mb2FkZWREYXRhLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNzaWduTG9hZGVkRGF0YShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy9TdHJpcCBleGNlcHRpb25zXG4gICAgICAgIGxldCByZWdFeHAgPSBuZXcgUmVnRXhwKHRoaXMuc3RyaXBGcm9tTmFtZS5qb2luKCd8JyksIFwiZ2lcIik7XG4gICAgICAgIHRoaXMuX25hbWUgPSBkYXRhLnNwZWNpZXMubmFtZS5yZXBsYWNlKHJlZ0V4cCwgJycpO1xuICAgICAgICB0aGlzLnNwcml0ZXMgPSBkYXRhLnNwcml0ZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5kb21TcHJpdGUgPSBVdGlscy5yYW5kb21Qcm9wZXJ0eSh0aGlzLl9zcHJpdGVzKTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtyYW5kb21TcHJpdGV9XCIpYDtcbiAgICAgICAgdGhpcy5kcmF3KFV0aWxzLmdldFJhbmRvbUludCgwLCB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGgpLCBVdGlscy5nZXRSYW5kb21JbnQoNDYsIHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuaGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqL1xuICAgIHByaXZhdGUgZHJhdyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnggPSB4IC0gKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy55ID0geSAtICh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLnh9cHgsICR7dGhpcy55fXB4KWA7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjcC1wb2tlbW9uJywgUG9rZW1vbik7XG4iLCJ0eXBlIEZ1bmN0aW9uQ2FsbGJhY2sgPSAoZGF0YToge30pID0+IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZW1vbkRhdGFTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUG9rZW1vbkRhdGFTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVVybDogc3RyaW5nID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL1wiO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFBva2Vtb25EYXRhU2VydmljZSB7XG4gICAgICAgIHJldHVybiBQb2tlbW9uRGF0YVNlcnZpY2UuaW5zdGFuY2UgfHwgKFBva2Vtb25EYXRhU2VydmljZS5pbnN0YW5jZSA9IG5ldyBQb2tlbW9uRGF0YVNlcnZpY2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBva2VkZXhFbnRyeVxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb2tlbW9uQnlQb2tlZGV4RW50cnkocG9rZWRleEVudHJ5OiBudW1iZXIsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmV0Y2hBUElEYXRhKGBwb2tlbW9uLyR7cG9rZWRleEVudHJ5fWAsIHN1Y2Nlc3NIYW5kbGVyKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbmRwb2ludFxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHByaXZhdGUgZmV0Y2hBUElEYXRhKGVuZHBvaW50OiBzdHJpbmcsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIGZldGNoKHRoaXMuYmFzZVVybCArIGVuZHBvaW50KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzdWNjZXNzSGFuZGxlcihkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZGF0YSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZGF0YSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB0b2RvIE1ha2Ugc29tZSBlcnJvciBoYW5kbGluZyB0aGF0IGRvZXMgbWFrZSBzZW5zZSA6KVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZGF0YToge30pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKVxuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFBva2Vtb24gZnJvbSBcIi4vcG9rZW1vblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9oZWxwZXJzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25GYWN0b3J5IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBva2Vtb25zOiBQb2tlbW9uW10gPSBbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsVG9DaG9vc2VGcm9tOiBudW1iZXIgPSBjb25maWcuZ2FtZS5hY3RpdmVQb2tlbW9uO1xuICAgIHByaXZhdGUgdG90YWxBbW91bnRGb3JHYW1lOiBudW1iZXIgPSB0aGlzLnRvdGFsVG9DaG9vc2VGcm9tO1xuICAgIHByaXZhdGUgYWN0aXZlUG9rZW1vbjogUG9rZW1vbiA9IG51bGw7XG4gICAgcHJpdmF0ZSAkd3JhcHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYXN0VXBkYXRlOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBva2Vtb25zXCIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbk5ldycsICgpID0+IHRoaXMuc3Bhd24oKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdxdWl6OnN0YXJ0JywgKGUpID0+IHRoaXMuaW5pdGlhbGl6ZVBva2Vtb25zKChlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwuYW1vdW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0aW1lcjpkb25lJywgKCkgPT4gdGhpcy5kZXNwYXduKCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbkRvbmUnLCAoKSA9PiB0aGlzLmRlc3Bhd24oKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFtb3VudFxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVBva2Vtb25zKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnRGb3JHYW1lID0gYW1vdW50O1xuICAgICAgICBsZXQgaW5pdGlhbERhdGEgPSBBcnJheS5mcm9tKEFycmF5KHRoaXMudG90YWxUb0Nob29zZUZyb20pKS5tYXAoKF92LCBpKSA9PiBpICsgMSk7XG4gICAgICAgIGxldCBmaWx0ZXJlZERhdGEgPSBVdGlscy5zaHVmZmxlQXJyYXkoaW5pdGlhbERhdGEgYXMgW10pLnNsaWNlKDAsIHRoaXMudG90YWxBbW91bnRGb3JHYW1lKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBva2Vtb24gPSBuZXcgUG9rZW1vbihmaWx0ZXJlZERhdGFbaV0pO1xuICAgICAgICAgICAgdGhpcy5wb2tlbW9ucy5wdXNoKHBva2Vtb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3bigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9rZW1vbnMubGVuZ3RoID09PSAwIHx8IHRoaXMuYWN0aXZlUG9rZW1vbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gdGhpcy5wb2tlbW9ucy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wb2tlbW9ucy5sZW5ndGgpLCAxKVswXTtcbiAgICAgICAgdGhpcy4kd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2ZVBva2Vtb24pO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Bva2Vtb246c3Bhd24nLCB7ZGV0YWlsOiB7cG9rZW1vbk5hbWU6IHRoaXMuYWN0aXZlUG9rZW1vbi5uYW1lfX0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Bhd24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb2tlbW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgrK3RoaXMubGFzdFVwZGF0ZSAlIDEwID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25TcHJpdGVzIHtcbiAgICBwdWJsaWMgYmFja19kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBiYWNrX3NoaW55OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9zaGlueTogc3RyaW5nID0gXCJcIjtcblxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cbiIsImltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXpcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Vlc3NGb3JtIHtcbiAgICBwcml2YXRlICRndWVzc0Zvcm06IEhUTUxGb3JtRWxlbWVudDtcbiAgICBwcml2YXRlICRndWVzc0Zvcm1JbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHF1aXo6IFF1aXo7XG5cbiAgICBjb25zdHJ1Y3RvcihxdWl6OiBRdWl6KSB7XG4gICAgICAgIHRoaXMucXVpeiA9IHF1aXo7XG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGd1ZXNzRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXBva2Vtb24tZ3Vlc3MnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLiRndWVzc0Zvcm1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uLWd1ZXNzLW5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB0aGlzLmd1ZXNzRm9ybVN1Ym1pdEhhbmRsZXIoZSkpO1xuICAgICAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB0aGlzLnF1aXouaGFuZGxlQW5zd2VyKCkpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclRlbXBsYXRlKCk6IHZvaWQge1xuICAgICAgICBsZXQgJHRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtLXBva2Vtb24tZ3Vlc3NcIiBjbGFzcz1cImlzLWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxwcm9ncmVzcyBpZD1cInByb2dyZXNzXCIgY2xhc3M9XCJwcm9ncmVzc1wiIHZhbHVlPVwiMFwiIG1heD1cIjEwMFwiPjwvcHJvZ3Jlc3M+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicG9rZW1vbi1ndWVzcy1uYW1lXCIgY2xhc3M9XCJpcy1oaWRkZW5cIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicG9rZW1vbi1ndWVzcy1uYW1lXCIgY2xhc3M9XCJpbnB1dCBpcy1pbmZvIGlzLWV4cGFuZGVkXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldobyBpcyB0aGlzIFBva8OpbW9uPyFcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5xdWl6LiRtYWluLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJHRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLiRndWVzc0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuJGd1ZXNzRm9ybUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDdXJyZW50VmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGd1ZXNzRm9ybUlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGd1ZXNzRm9ybVN1Ym1pdEhhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnF1aXouaGFuZGxlQW5zd2VyKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgUXVpeiBmcm9tIFwiLi9xdWl6XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRpYWxTY3JlZW4ge1xuICAgIHByaXZhdGUgJGluaXRpYWxGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBxdWl6OiBRdWl6O1xuXG4gICAgY29uc3RydWN0b3IocXVpejogUXVpeikge1xuICAgICAgICB0aGlzLnF1aXogPSBxdWl6O1xuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRpbml0aWFsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXBva2Vtb24taW5pdGlhbCcpIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuJGluaXRpYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB0aGlzLnF1aXouaW5pdGlhbEZvcm1TdWJtaXRIYW5kbGVyKGUpKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgLy9VZ2x5IGJ1dCBhbHNvIG5lZWRlZCB0byB0cmlnZ2VyIENTUyBhbmltYXRpb24gdGhlIHJpZ2h0IHdheS4uLiA6KFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdGlhbFwiKS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKSwgNTApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyVGVtcGxhdGUoKTogdm9pZCB7XG4gICAgICAgIGxldCAkdGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImluaXRpYWxcIiBjbGFzcz1cInBhZ2Vsb2FkZXIgaXMtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm0tcG9rZW1vbi1pbml0aWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicG9rZW1vbi1ndWVzcy1hbW91bnRcIiBjbGFzcz1cImxhYmVsXCI+SG93IG1hbnkgUG9rw6ltb24gZnJvbSBnZW4gSSwgSUkgJiBJSUkgY2FuIHlvdSByZWNvZ25pc2UgaW4gdGhlIGJsaW5rIG9mIGFuIGV5ZT88L2xhYmVsPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBva2Vtb24tZ3Vlc3MtYW1vdW50XCIgY2xhc3M9XCJpbnB1dCBpcy13YXJuaW5nIGlzLWV4cGFuZGVkXCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjVcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjVcIiBhdXRvZm9jdXMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBva2Vtb24tZ3Vlc3MtdXNlcm5hbWVcIiBjbGFzcz1cImlucHV0IGlzLXdhcm5pbmcgaXMtZXhwYW5kZWRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwieW91ciBuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gaXMtd2FybmluZ1wiIHZhbHVlPVwiSSdtIGdvbm5hIGd1ZXNzIHRoZW0gYWxsISAmI3gxRjUyNTtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBgO1xuXG4gICAgICAgIHRoaXMucXVpei4kbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICR0ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMucXVpei4kbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy4kaW5pdGlhbEZvcm0ucmVtb3ZlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5pbXBvcnQgUXVpeiBmcm9tIFwiLi9xdWl6XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRTY3JlZW4ge1xuICAgIHByaXZhdGUgJGxvYWRTY3JlZW46IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgcXVpejogUXVpejtcblxuICAgIGNvbnN0cnVjdG9yKHF1aXo6IFF1aXopIHtcbiAgICAgICAgdGhpcy5xdWl6ID0gcXVpejtcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kbG9hZFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZWxvYWRlclwiKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnZWxvYWRlclwiIGNsYXNzPVwicGFnZWxvYWRlciBpcy13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPlBva8OpbW9ucyBhcmUgbG9hZGVkIGludG8gdGhlIHN5c3RlbTwvc3Bhbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLnF1aXouJG1haW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAkdGVtcGxhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLiRsb2FkU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLiRsb2FkU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmlnZ2VyTmV3UXVlc3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdxdWl6OnF1ZXN0aW9uTmV3JykpXG4gICAgICAgIH0sIGNvbmZpZy5nYW1lLmxvYWRTY3JlZW5BY3RpdmVUaW1lT3V0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlVGl0bGUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLiRsb2FkU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzdGF0dXNcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3RhdHVzKHN0YXR1czogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtd2FybmluZycsICdpcy1zdWNjZXNzJywgJ2lzLWRhbmdlcicsICdpcy1wcmltYXJ5Jyk7XG4gICAgICAgIHRoaXMuJGxvYWRTY3JlZW4uY2xhc3NMaXN0LmFkZChgaXMtJHtzdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtFbmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB0aGlzLiRsb2FkU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2VuZC1zY3JlZW4nKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIjtcbmltcG9ydCBTY29yZSBmcm9tIFwiLi9zY29yZVwiO1xuaW1wb3J0IEd1ZXNzRm9ybSBmcm9tIFwiLi9ndWVzc2Zvcm1cIjtcbmltcG9ydCBMb2FkU2NyZWVuIGZyb20gXCIuL2xvYWRzY3JlZW5cIjtcbmltcG9ydCBJbml0aWFsU2NyZWVuIGZyb20gXCIuL2luaXRpYWxzY3JlZW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpeiB7XG4gICAgcHVibGljICRtYWluOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHRvdGFsUXVlc3Rpb25zOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgaW5pdGlhbFNjcmVlbjogSW5pdGlhbFNjcmVlbjtcbiAgICBwcml2YXRlIGd1ZXNzRm9ybTogR3Vlc3NGb3JtO1xuICAgIHByaXZhdGUgbG9hZFNjcmVlbjogTG9hZFNjcmVlbjtcbiAgICBwcml2YXRlIHRpbWVyOiBUaW1lcjtcbiAgICBwcml2YXRlIHNjb3JlOiBTY29yZTtcbiAgICBwcml2YXRlIGd1ZXNzZWRQb2tlbW9uOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAdG9kbyBUaGlzIGNsYXNzIGNvbWJpbmVkIHdpdGggSW5pdGlhbFNjcmVlbiwgR3Vlc3NGb3JtIGFuZCBMb2FkU2NyZWVuIHNob3VsZCBwcm9iYWJseSBiZSByZWZhY3RvcmVkIGEgbGl0dGxlLi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNjcmVlbiA9IG5ldyBJbml0aWFsU2NyZWVuKHRoaXMpO1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybSA9IG5ldyBHdWVzc0Zvcm0odGhpcyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbiA9IG5ldyBMb2FkU2NyZWVuKHRoaXMpO1xuXG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bva2Vtb246c3Bhd24nLCAoZSkgPT4gdGhpcy5zdGFydFF1ZXN0aW9uKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWVyOmRvbmUnLCAoKSA9PiB0aGlzLnRpbWVyRG9uZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciB0aGUgZm9ybVxuICAgICAqXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdGlhbEZvcm1TdWJtaXRIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b3RhbFF1ZXN0aW9ucyA9IHBhcnNlSW50KChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1ndWVzcy1hbW91bnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncXVpejpzdGFydCcsIHtkZXRhaWw6IHthbW91bnQ6IHRoaXMudG90YWxRdWVzdGlvbnN9fSkpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFNjcmVlbi5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWFsXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSBuZXcgU2NvcmUoKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnRyaWdnZXJOZXdRdWVzdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGFydFF1ZXN0aW9uKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XG4gICAgICAgIHRoaXMudGltZXIucmVzdGFydCgpO1xuICAgICAgICB0aGlzLmd1ZXNzZWRQb2tlbW9uID0gKGUgYXMgQ3VzdG9tRXZlbnQpLmRldGFpbC5wb2tlbW9uTmFtZTtcbiAgICAgICAgdGhpcy5ndWVzc0Zvcm0uc2hvdygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdGltZXJEb25lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybS5oaWRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uID09PSB0aGlzLnRvdGFsUXVlc3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmVuZFNjcmVlbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNoYW5nZVRpdGxlKGBOb3BlISBUaGlzIFBva8OpbW9uIHdhcyAke3RoaXMuZ3Vlc3NlZFBva2Vtb259ISBOZXcgUG9rw6ltb24gaW5jb21pbmchYCk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5zZXRTdGF0dXMoJ2RhbmdlcicpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4udHJpZ2dlck5ld1F1ZXN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZUFuc3dlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZ3Vlc3NlZFBva2Vtb24gIT09IHRoaXMuZ3Vlc3NGb3JtLmdldEN1cnJlbnRWYWx1ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmd1ZXNzRm9ybS5oaWRlKCk7XG4gICAgICAgIHRoaXMuc2NvcmUudmFsdWUrKztcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdxdWl6OnF1ZXN0aW9uRG9uZScpKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gPT09IHRoaXMudG90YWxRdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2NyZWVuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uY2hhbmdlVGl0bGUoJ1RoYXRcXCdzIGFzIGdvb2QgYXMgaXQgZ2V0cyEgTmV3IFBva8OpbW9uIGluY29taW5nIScpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uc2V0U3RhdHVzKCdzdWNjZXNzJyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi50cmlnZ2VyTmV3UXVlc3Rpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZFNjcmVlbigpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1heFNjb3JlID0gdGhpcy5zY29yZS5nZXRNYXgodGhpcy50b3RhbFF1ZXN0aW9ucyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5jaGFuZ2VUaXRsZShgVGhhbmtzIGZvciBwbGF5aW5nLCB5b3VyIHRvdGFsIHNjb3JlIGlzOiAke3RoaXMuc2NvcmUudmFsdWV9IC8gJHttYXhTY29yZX1gKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnNldFN0YXR1cygncHJpbWFyeScpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4ubWFya0VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGluY3JlbWVudFZhbHVlOiBudW1iZXIgPSBjb25maWcuZ2FtZS5zY29yZVBlclF1ZXN0aW9uO1xuXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBkZWZhdWx0ICsrIGJlaGF2aW91ciBieSBpbmNyZW1lbnRpbmcgc2NvcmUgd2l0aCBjdXN0b20gdmFsdWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBfdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgdmFsdWUoX3ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAodGhpcy5fdmFsdWUgKz0gdGhpcy5pbmNyZW1lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSB0aGlzLl92YWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB0b3RhbFF1ZXN0aW9uc1xuICAgICAqIEByZXR1cm4gbnVtYmVyXG4gICAgICovXG4gICAgcHVibGljIGdldE1heCh0b3RhbFF1ZXN0aW9uczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5jcmVtZW50VmFsdWUgKiB0b3RhbFF1ZXN0aW9ucztcbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NwLXNjb3JlJywgU2NvcmUpO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsU2Vjb25kczogbnVtYmVyID0gY29uZmlnLmdhbWUuc2Vjb25kc1BlclF1ZXN0aW9uO1xuICAgIHByaXZhdGUgX3NlY29uZHM6IG51bWJlciA9IHRoaXMudG90YWxTZWNvbmRzO1xuICAgIHByaXZhdGUgaW50ZXJ2YWxJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcHJvZ3Jlc3NiYXJJbnRlcnZhbElkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwcm9ncmVzc2JhclN0YXJ0VGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgJHByb2dyZXNzOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHBlcmZvcm1hbmNlU3RhbXA6IG51bWJlcjtcblxuICAgIGdldCBzZWNvbmRzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWNvbmRzO1xuICAgIH1cblxuICAgIHNldCBzZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2Vjb25kcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcycpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbkRvbmUnLCAoKSA9PiB0aGlzLmRlc3Ryb3koKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCAxMDAwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhckludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzYmFyKCksIDEwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhclN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlU3RhbXAgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Vjb25kcy0tO1xuXG4gICAgICAgIGlmICh0aGlzLnNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndGltZXI6ZG9uZScpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3NiYXIoKTogdm9pZCB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMudG90YWxTZWNvbmRzICogMTAwMDtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMucHJvZ3Jlc3NiYXJTdGFydFRpbWU7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRpZmYgLyBkdXJhdGlvbiAqIDEwMDtcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlID4gMTAwID8gMTAwIDogdmFsdWU7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnByb2dyZXNzYmFySW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudG90YWxTZWNvbmRzO1xuICAgICAgICB0aGlzLiRwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzAnKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=