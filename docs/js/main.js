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

module.exports = {"game":{"activePokemon":386,"scorePerQuestion":3,"secondsPerQuestion":8}};

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
/* harmony import */ var _pokemon_pokemonfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemon/pokemonfactory */ "./dev/ts/pokemon/pokemonfactory.ts");
/* harmony import */ var _quiz_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz/quiz */ "./dev/ts/quiz/quiz.ts");


class Game {
    constructor() {
        this.pokemonFactory = new _pokemon_pokemonfactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.quiz = new _quiz_quiz__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
        this.dataService = new _pokemondataservice__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.width = 96;
        this.height = 96;
        this.x = 0;
        this.y = 0;
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
        this._name = data.name;
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


class Quiz {
    constructor() {
        this.totalQuestions = 0;
        this.currentQuestion = 0;
        this.initialForm = document.getElementById('form-pokemon-initial');
        this.initialForm.addEventListener('submit', (e) => this.initialFormSubmitHandler(e));
        this.loadScreen = document.getElementById("pageloader");
        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_0__["default"]();
        window.addEventListener('pokemon:spawn', (e) => this.startQuestion(e));
        window.addEventListener('timer:done', () => this.timerDone());
        this.guessForm = document.getElementById('form-pokemon-guess');
        this.guessFormInput = document.getElementById('pokemon-guess-name');
        this.guessForm.addEventListener('submit', (e) => this.guessFormSubmitHandler(e));
        this.guessFormInput.addEventListener('keyup', () => this.handleAnswer());
    }
    initialFormSubmitHandler(e) {
        e.preventDefault();
        this.totalQuestions = parseInt(document.getElementById('pokemon-guess-amount').value);
        window.dispatchEvent(new CustomEvent('quiz:start', { detail: { amount: this.totalQuestions } }));
        this.initialForm.remove();
        document.getElementById("initial").classList.remove('is-active');
        this.score = new _score__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.loadScreen.classList.add('is-active');
        setTimeout(() => {
            this.loadScreen.classList.remove('is-active');
            window.dispatchEvent(new CustomEvent('quiz:questionNew'));
        }, 2000);
    }
    startQuestion(e) {
        this.currentQuestion++;
        this.timer.restart();
        this.guessValue = e.detail.pokemonName;
        this.guessForm.classList.remove('is-hidden');
        this.guessFormInput.value = "";
        this.guessFormInput.focus();
    }
    timerDone() {
        this.guessForm.classList.add('is-hidden');
        if (this.currentQuestion === this.totalQuestions) {
            this.endScreen();
            return;
        }
        this.loadScreen.querySelector('.title').innerHTML = 'Nope! This Pokémon was ' + this.guessValue + '! New Pokémon incoming!';
        this.loadScreen.classList.remove('is-warning', 'is-success');
        this.loadScreen.classList.add('is-danger');
        this.loadNewQuestion();
    }
    handleAnswer() {
        if (this.guessValue !== this.guessFormInput.value) {
            return;
        }
        this.guessForm.classList.add('is-hidden');
        this.score.value++;
        window.dispatchEvent(new CustomEvent('quiz:questionDone'));
        if (this.currentQuestion === this.totalQuestions) {
            this.endScreen();
            return;
        }
        this.loadScreen.querySelector('.title').innerHTML = 'That\'s as good as it gets! New Pokémon incoming!';
        this.loadScreen.classList.remove('is-warning', 'is-danger');
        this.loadScreen.classList.add('is-success');
        this.loadNewQuestion();
    }
    loadNewQuestion() {
        this.loadScreen.classList.add('is-active');
        setTimeout(() => {
            this.loadScreen.classList.remove('is-active');
            window.dispatchEvent(new CustomEvent('quiz:questionNew'));
        }, 2000);
    }
    guessFormSubmitHandler(e) {
        e.preventDefault();
        this.handleAnswer();
    }
    endScreen() {
        let maxScore = this.score.getMax(this.totalQuestions);
        this.loadScreen.querySelector('.title').innerHTML = `Thanks for playing, your total score is: ${this.score.value} / ${maxScore}`;
        this.loadScreen.classList.remove('is-success', 'is-danger');
        this.loadScreen.classList.add('is-primary', 'end-screen');
        this.loadScreen.classList.add('is-active');
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
        this.progress = document.getElementById('progress');
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
        this.progress.setAttribute('value', value.toString());
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
        this.progress.setAttribute('value', '0');
        this.start();
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvaGVscGVycy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb25kYXRhc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcG9rZW1vbi9wb2tlbW9uc3ByaXRlcy50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvcXVpei9xdWl6LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L3Njb3JlLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9xdWl6L3RpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixF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QyxDQUFDO0lBQzFELENBQUM7SUFFTSxPQUFPO1FBQ1YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVNLE9BQU87UUFDVixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0NBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGV2L3RzL21haW4udHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUG9rZW1vbkZhY3RvcnkgZnJvbSBcIi4vcG9rZW1vbi9wb2tlbW9uZmFjdG9yeVwiO1xuaW1wb3J0IFF1aXogZnJvbSBcIi4vcXVpei9xdWl6XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9rZW1vbkZhY3Rvcnk6IFBva2Vtb25GYWN0b3J5O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcXVpejogUXVpejtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBva2Vtb25GYWN0b3J5ID0gbmV3IFBva2Vtb25GYWN0b3J5KCk7XG4gICAgICAgIHRoaXMucXVpeiA9IG5ldyBRdWl6KCk7XG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdhbWVMb29wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBva2Vtb25GYWN0b3J5LnVwZGF0ZSgpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZ2FtZUxvb3AoKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAgIC8qKlxuICAgICAqIFNodWZmbGVzIGFycmF5IGluIHBsYWNlLiBFUzYgdmVyc2lvblxuICAgICAqIEBwYXJhbSB7W119IGEgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXG4gICAgICovXG4gICAgc3RhdGljIHNodWZmbGVBcnJheShhOiBbXSk6IFtdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW2FbaV0sIGFbal1dID0gW2Fbal0sIGFbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHJhbmRvbSBwcm9wZXJ0eSBmcm9tIGEgb2JqZWN0IHdpdGgga2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKi9cbiAgICBzdGF0aWMgcmFuZG9tUHJvcGVydHkob2JqOiBhbnkpIHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICByZXR1cm4gb2JqW2tleXNba2V5cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpIDw8IDBdXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgc3RhdGljIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbGluayBodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tL1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYSA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvcjtcbiAgICAgICAgcmV0dXJuIC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kfGFkKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gbmV3IEdhbWUoKSk7XG4iLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uL2hlbHBlcnMvdXRpbHNcIjtcbmltcG9ydCBQb2tlbW9uU3ByaXRlcyBmcm9tIFwiLi9wb2tlbW9uc3ByaXRlc1wiO1xuaW1wb3J0IFBva2Vtb25EYXRhU2VydmljZSBmcm9tIFwiLi9wb2tlbW9uZGF0YXNlcnZpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZW1vbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBva2VkZXhFbnRyeTogbnVtYmVyO1xuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IFBva2Vtb25EYXRhU2VydmljZSA9IG5ldyBQb2tlbW9uRGF0YVNlcnZpY2UoKTtcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXIgPSA5NjtcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyID0gOTY7XG4gICAgcHJpdmF0ZSB4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgeTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zcHJpdGVzOiBQb2tlbW9uU3ByaXRlcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIHdheSBvZiBtYXBwaW5nIGtleSBwcm9wZXJ0aWVzIHRvIHRoZSBhY3R1YWxseSByZXF1aXJlZCBwcm9wZXJ0aWVzKVxuICAgICAqXG4gICAgICogQHRvZG8gQ2hlY2sgd2l0aCBPbm5vXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqL1xuICAgIHNldCBzcHJpdGVzKG9iajogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgICAgICB0aGlzLl9zcHJpdGVzID0gbmV3IFBva2Vtb25TcHJpdGVzKCk7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9zcHJpdGVzKSkpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgdGhpcy5fc3ByaXRlc1trZXldID0gb2JqW2tleV07XG5cbiAgICAgICAgICAgIC8vSnVzdCBzb21lIGxhbWUgd29yayBhcm91bmQgdG8gcHJlbG9hZCBpbWFnZXMgaW50byBjYWNoZVxuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHBva2VkZXhFbnRyeTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucG9rZWRleEVudHJ5ID0gcG9rZWRleEVudHJ5O1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFBva2Vtb25CeVBva2VkZXhFbnRyeShwb2tlZGV4RW50cnksIHRoaXMuYXNzaWduTG9hZGVkRGF0YS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzc2lnbkxvYWRlZERhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IGRhdGEuc3ByaXRlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3ByaXRlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhbmRvbVNwcml0ZSA9IFV0aWxzLnJhbmRvbVByb3BlcnR5KHRoaXMuX3Nwcml0ZXMpO1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3JhbmRvbVNwcml0ZX1cIilgO1xuICAgICAgICB0aGlzLmRyYXcoVXRpbHMuZ2V0UmFuZG9tSW50KDAsIHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy53aWR0aCksIFV0aWxzLmdldFJhbmRvbUludCg0Niwgd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5oZWlnaHQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geFxuICAgICAqIEBwYXJhbSB5XG4gICAgICovXG4gICAgcHJpdmF0ZSBkcmF3KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMueCA9IHggLSAodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICB0aGlzLnkgPSB5IC0gKHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMueH1weCwgJHt0aGlzLnl9cHgpYDtcbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NwLXBva2Vtb24nLCBQb2tlbW9uKTtcbiIsInR5cGUgRnVuY3Rpb25DYWxsYmFjayA9IChkYXRhOiB7fSkgPT4gYW55O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uRGF0YVNlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVVybDogc3RyaW5nID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL1wiO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBva2VkZXhFbnRyeVxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb2tlbW9uQnlQb2tlZGV4RW50cnkocG9rZWRleEVudHJ5OiBudW1iZXIsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hBUElEYXRhKGBwb2tlbW9uLyR7cG9rZWRleEVudHJ5fWAsIHN1Y2Nlc3NIYW5kbGVyKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbmRwb2ludFxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHByaXZhdGUgZmV0Y2hBUElEYXRhKGVuZHBvaW50OiBzdHJpbmcsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIGZldGNoKHRoaXMuYmFzZVVybCArIGVuZHBvaW50KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzdWNjZXNzSGFuZGxlcihkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZGF0YSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZGF0YSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB0b2RvIE1ha2Ugc29tZSBlcnJvciBoYW5kbGluZyB0aGF0IGRvZXMgbWFrZSBzZW5zZSA6KVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZGF0YToge30pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKVxuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFBva2Vtb24gZnJvbSBcIi4vcG9rZW1vblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9oZWxwZXJzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25GYWN0b3J5IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBva2Vtb25zOiBQb2tlbW9uW10gPSBbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsVG9DaG9vc2VGcm9tOiBudW1iZXIgPSBjb25maWcuZ2FtZS5hY3RpdmVQb2tlbW9uO1xuICAgIHByaXZhdGUgdG90YWxBbW91bnRGb3JHYW1lOiBudW1iZXIgPSB0aGlzLnRvdGFsVG9DaG9vc2VGcm9tO1xuICAgIHByaXZhdGUgYWN0aXZlUG9rZW1vbjogUG9rZW1vbiA9IG51bGw7XG4gICAgcHJpdmF0ZSAkd3JhcHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYXN0VXBkYXRlOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBva2Vtb25zXCIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbk5ldycsICgpID0+IHRoaXMuc3Bhd24oKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdxdWl6OnN0YXJ0JywgKGUpID0+IHRoaXMuaW5pdGlhbGl6ZVBva2Vtb25zKChlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwuYW1vdW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0aW1lcjpkb25lJywgKCkgPT4gdGhpcy5kZXNwYXduKCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbkRvbmUnLCAoKSA9PiB0aGlzLmRlc3Bhd24oKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFtb3VudFxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVBva2Vtb25zKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnRGb3JHYW1lID0gYW1vdW50O1xuICAgICAgICBsZXQgaW5pdGlhbERhdGEgPSBBcnJheS5mcm9tKEFycmF5KHRoaXMudG90YWxUb0Nob29zZUZyb20pKS5tYXAoKF92LCBpKSA9PiBpICsgMSk7XG4gICAgICAgIGxldCBmaWx0ZXJlZERhdGEgPSBVdGlscy5zaHVmZmxlQXJyYXkoaW5pdGlhbERhdGEgYXMgW10pLnNsaWNlKDAsIHRoaXMudG90YWxBbW91bnRGb3JHYW1lKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBva2Vtb24gPSBuZXcgUG9rZW1vbihmaWx0ZXJlZERhdGFbaV0pO1xuICAgICAgICAgICAgdGhpcy5wb2tlbW9ucy5wdXNoKHBva2Vtb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3bigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9rZW1vbnMubGVuZ3RoID09PSAwIHx8IHRoaXMuYWN0aXZlUG9rZW1vbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gdGhpcy5wb2tlbW9ucy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wb2tlbW9ucy5sZW5ndGgpLCAxKVswXTtcbiAgICAgICAgdGhpcy4kd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2ZVBva2Vtb24pO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Bva2Vtb246c3Bhd24nLCB7ZGV0YWlsOiB7cG9rZW1vbk5hbWU6IHRoaXMuYWN0aXZlUG9rZW1vbi5uYW1lfX0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Bhd24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb2tlbW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgrK3RoaXMubGFzdFVwZGF0ZSAlIDEwID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25TcHJpdGVzIHtcbiAgICBwdWJsaWMgYmFja19kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBiYWNrX3NoaW55OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9zaGlueTogc3RyaW5nID0gXCJcIjtcblxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cbiIsImltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IFNjb3JlIGZyb20gXCIuL3Njb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aXoge1xuICAgIHByaXZhdGUgaW5pdGlhbEZvcm06IEhUTUxGb3JtRWxlbWVudDtcbiAgICBwcml2YXRlIHRvdGFsUXVlc3Rpb25zOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudFF1ZXN0aW9uOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgZ3Vlc3NGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBndWVzc0Zvcm1JbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIHRpbWVyOiBUaW1lcjtcbiAgICBwcml2YXRlIHNjb3JlOiBTY29yZTtcbiAgICBwcml2YXRlIGxvYWRTY3JlZW46IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgZ3Vlc3NWYWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wb2tlbW9uLWluaXRpYWwnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5pdGlhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHRoaXMuaW5pdGlhbEZvcm1TdWJtaXRIYW5kbGVyKGUpKTtcblxuICAgICAgICB0aGlzLmxvYWRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2Vsb2FkZXJcIik7XG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bva2Vtb246c3Bhd24nLCAoZSkgPT4gdGhpcy5zdGFydFF1ZXN0aW9uKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWVyOmRvbmUnLCAoKSA9PiB0aGlzLnRpbWVyRG9uZSgpKTtcblxuICAgICAgICB0aGlzLmd1ZXNzRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXBva2Vtb24tZ3Vlc3MnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1ndWVzcy1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgdGhpcy5ndWVzc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHRoaXMuZ3Vlc3NGb3JtU3VibWl0SGFuZGxlcihlKSk7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciB0aGUgZm9ybVxuICAgICAqXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRpYWxGb3JtU3VibWl0SGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG90YWxRdWVzdGlvbnMgPSBwYXJzZUludCgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb24tZ3Vlc3MtYW1vdW50JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3F1aXo6c3RhcnQnLCB7ZGV0YWlsOiB7YW1vdW50OiB0aGlzLnRvdGFsUXVlc3Rpb25zfX0pKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxGb3JtLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxcIikuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSgpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdxdWl6OnF1ZXN0aW9uTmV3JykpXG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGFydFF1ZXN0aW9uKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uKys7XG4gICAgICAgIHRoaXMudGltZXIucmVzdGFydCgpO1xuICAgICAgICB0aGlzLmd1ZXNzVmFsdWUgPSAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsLnBva2Vtb25OYW1lO1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcblxuICAgICAgICB0aGlzLmd1ZXNzRm9ybUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5ndWVzc0Zvcm1JbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdGltZXJEb25lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gPT09IHRoaXMudG90YWxRdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2NyZWVuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRTY3JlZW4ucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gJ05vcGUhIFRoaXMgUG9rw6ltb24gd2FzICcgKyB0aGlzLmd1ZXNzVmFsdWUgKyAnISBOZXcgUG9rw6ltb24gaW5jb21pbmchJztcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXdhcm5pbmcnLCAnaXMtc3VjY2VzcycpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgICAgIHRoaXMubG9hZE5ld1F1ZXN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVBbnN3ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmd1ZXNzVmFsdWUgIT09IHRoaXMuZ3Vlc3NGb3JtSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICB0aGlzLnNjb3JlLnZhbHVlKys7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncXVpejpxdWVzdGlvbkRvbmUnKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uID09PSB0aGlzLnRvdGFsUXVlc3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmVuZFNjcmVlbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVySFRNTCA9ICdUaGF0XFwncyBhcyBnb29kIGFzIGl0IGdldHMhIE5ldyBQb2vDqW1vbiBpbmNvbWluZyEnO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtd2FybmluZycsICdpcy1kYW5nZXInKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgdGhpcy5sb2FkTmV3UXVlc3Rpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWROZXdRdWVzdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdxdWl6OnF1ZXN0aW9uTmV3JykpXG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlXG4gICAgICovXG4gICAgcHJpdmF0ZSBndWVzc0Zvcm1TdWJtaXRIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBbnN3ZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZFNjcmVlbigpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1heFNjb3JlID0gdGhpcy5zY29yZS5nZXRNYXgodGhpcy50b3RhbFF1ZXN0aW9ucyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5pbm5lckhUTUwgPSBgVGhhbmtzIGZvciBwbGF5aW5nLCB5b3VyIHRvdGFsIHNjb3JlIGlzOiAke3RoaXMuc2NvcmUudmFsdWV9IC8gJHttYXhTY29yZX1gO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnLCAnaXMtZGFuZ2VyJyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5jbGFzc0xpc3QuYWRkKCdpcy1wcmltYXJ5JywgJ2VuZC1zY3JlZW4nKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGluY3JlbWVudFZhbHVlOiBudW1iZXIgPSBjb25maWcuZ2FtZS5zY29yZVBlclF1ZXN0aW9uO1xuXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBkZWZhdWx0ICsrIGJlaGF2aW91ciBieSBpbmNyZW1lbnRpbmcgc2NvcmUgd2l0aCBjdXN0b20gdmFsdWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBfdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgdmFsdWUoX3ZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAodGhpcy5fdmFsdWUgKz0gdGhpcy5pbmNyZW1lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSB0aGlzLl92YWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB0b3RhbFF1ZXN0aW9uc1xuICAgICAqIEByZXR1cm4gbnVtYmVyXG4gICAgICovXG4gICAgcHVibGljIGdldE1heCh0b3RhbFF1ZXN0aW9uczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5jcmVtZW50VmFsdWUgKiB0b3RhbFF1ZXN0aW9ucztcbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NwLXNjb3JlJywgU2NvcmUpO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsU2Vjb25kczogbnVtYmVyID0gY29uZmlnLmdhbWUuc2Vjb25kc1BlclF1ZXN0aW9uO1xuICAgIHByaXZhdGUgX3NlY29uZHM6IG51bWJlciA9IHRoaXMudG90YWxTZWNvbmRzO1xuICAgIHByaXZhdGUgaW50ZXJ2YWxJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcHJvZ3Jlc3NiYXJJbnRlcnZhbElkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwcm9ncmVzc2JhclN0YXJ0VGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgcHJvZ3Jlc3M6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgcGVyZm9ybWFuY2VTdGFtcDogbnVtYmVyO1xuXG4gICAgZ2V0IHNlY29uZHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlY29uZHM7XG4gICAgfVxuXG4gICAgc2V0IHNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zZWNvbmRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3F1aXo6cXVlc3Rpb25Eb25lJywgKCkgPT4gdGhpcy5kZXN0cm95KCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGUoKSwgMTAwMCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NiYXJJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzc2JhcigpLCAxMCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NiYXJTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZVN0YW1wID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlY29uZHMtLTtcblxuICAgICAgICBpZiAodGhpcy5zZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3RpbWVyOmRvbmUnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb2dyZXNzYmFyKCk6IHZvaWQge1xuICAgICAgICBsZXQgZHVyYXRpb24gPSB0aGlzLnRvdGFsU2Vjb25kcyAqIDEwMDA7XG4gICAgICAgIGxldCBkaWZmID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnByb2dyZXNzYmFyU3RhcnRUaW1lO1xuICAgICAgICBsZXQgdmFsdWUgPSBkaWZmIC8gZHVyYXRpb24gKiAxMDA7XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA+IDEwMCA/IDEwMCA6IHZhbHVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnByb2dyZXNzYmFySW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudG90YWxTZWNvbmRzO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMCcpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==