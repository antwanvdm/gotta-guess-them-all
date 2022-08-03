/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/ts/languages lazy recursive ^\\.\\/.*\\.json$":
/*!****************************************************************!*\
  !*** ./dev/ts/languages/ lazy ^\.\/.*\.json$ namespace object ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": [
		"./dev/ts/languages/en.json",
		"dev_ts_languages_en_json"
	],
	"./nl.json": [
		"./dev/ts/languages/nl.json",
		"dev_ts_languages_nl_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./dev/ts/languages lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./dev/scss/style.scss":
/*!*****************************!*\
  !*** ./dev/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./dev/ts/game.ts":
/*!************************!*\
  !*** ./dev/ts/game.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.json */ "./dev/ts/config.json");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultilingualElement)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Translator)
/* harmony export */ });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
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

/***/ "./dev/ts/pokemon/pokemon.ts":
/*!***********************************!*\
  !*** ./dev/ts/pokemon/pokemon.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pokemon)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PokemonDataService)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PokemonFactory)
/* harmony export */ });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PokemonSprites)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GuessForm)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitialScreen)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadScreen)
/* harmony export */ });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quiz)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuizElement)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.json */ "./dev/ts/config.json");

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


/***/ }),

/***/ "./dev/ts/config.json":
/*!****************************!*\
  !*** ./dev/ts/config.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"languages":["en","nl"],"game":{"activePokemon":386,"scorePerQuestion":3,"secondsPerQuestion":8,"initialLoaderActiveTimeOut":400,"loadScreenActiveTimeOut":2000}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "pokemon:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpokemon"] = self["webpackChunkpokemon"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./dev/ts/main.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./dev/scss/style.scss");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRjRCO0FBQ0Y7QUFFMUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFTLEVBQUU7SUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSw2Q0FBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RDLENBQUMsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZW1vbi8uL2Rldi90cy9sYW5ndWFnZXMvIGxhenkgXlxcLlxcLy4qXFwuanNvbiQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vZGV2L3Njc3Mvc3R5bGUuc2Nzcz8zNzc5Iiwid2VicGFjazovL3Bva2Vtb24vLi9kZXYvdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vZGV2L3RzL2hlbHBlcnMvbXVsdGlsaW5ndWFsZWxlbWVudC50cyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vZGV2L3RzL2hlbHBlcnMvdHJhbnNsYXRvci50cyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vZGV2L3RzL2hlbHBlcnMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb24udHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb25kYXRhc2VydmljZS50cyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vZGV2L3RzL3Bva2Vtb24vcG9rZW1vbmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL2Rldi90cy9wb2tlbW9uL3Bva2Vtb25zcHJpdGVzLnRzIiwid2VicGFjazovL3Bva2Vtb24vLi9kZXYvdHMvcXVpei9ndWVzc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL2Rldi90cy9xdWl6L2luaXRpYWxzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL2Rldi90cy9xdWl6L2xvYWRzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL2Rldi90cy9xdWl6L3F1aXoudHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL2Rldi90cy9xdWl6L3F1aXplbGVtZW50LnRzIiwid2VicGFjazovL3Bva2Vtb24vLi9kZXYvdHMvcXVpei9zY29yZS50cyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vZGV2L3RzL3F1aXovdGltZXIudHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb2tlbW9uL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bva2Vtb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bva2Vtb24vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9wb2tlbW9uL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9wb2tlbW9uL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcG9rZW1vbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Bva2Vtb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb2tlbW9uL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9wb2tlbW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9rZW1vbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb2tlbW9uL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Bva2Vtb24vLi9kZXYvdHMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZW4uanNvblwiOiBbXG5cdFx0XCIuL2Rldi90cy9sYW5ndWFnZXMvZW4uanNvblwiLFxuXHRcdFwiZGV2X3RzX2xhbmd1YWdlc19lbl9qc29uXCJcblx0XSxcblx0XCIuL25sLmpzb25cIjogW1xuXHRcdFwiLi9kZXYvdHMvbGFuZ3VhZ2VzL25sLmpzb25cIixcblx0XHRcImRldl90c19sYW5ndWFnZXNfbmxfanNvblwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udChpZCwgMyB8IDE2KTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL2Rldi90cy9sYW5ndWFnZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanNvbiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nXG5pbXBvcnQgUG9rZW1vbkZhY3RvcnkgZnJvbSBcIi4vcG9rZW1vbi9wb2tlbW9uZmFjdG9yeVwiO1xuaW1wb3J0IFF1aXogZnJvbSBcIi4vcXVpei9xdWl6XCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiLi9oZWxwZXJzL3RyYW5zbGF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwb2tlbW9uRmFjdG9yeTogUG9rZW1vbkZhY3Rvcnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb2tlbW9uRmFjdG9yeSA9IG5ldyBQb2tlbW9uRmFjdG9yeSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2UgYSBpbml0aWFsaXNlIGNvbXBhdGlibGUgd2l0aCBjaGFpblxuICAgICAqIEByZXR1cm4gR2FtZVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBpbml0aWFsaXplKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGF3YWl0IFRyYW5zbGF0b3IuaSgpLnNldFQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG5ldyBRdWl6KCksIGNvbmZpZy5nYW1lLmluaXRpYWxMb2FkZXJBY3RpdmVUaW1lT3V0KTtcbiAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNsYXRvcjpsYW5ndWFnZUNoYW5nZScsICgpID0+IHRoaXMudXBkYXRlVGl0bGUoKSk7XG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRpdGxlKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFRyYW5zbGF0b3IuaSgpLnQoJ3RpdGxlJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnYW1lTG9vcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb2tlbW9uRmFjdG9yeS51cGRhdGUoKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmdhbWVMb29wKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuL3RyYW5zbGF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTXVsdGlsaW5ndWFsRWxlbWVudCB7XG4gICAgJGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNsYXRvcjpsYW5ndWFnZUNoYW5nZScsICgpID0+IHRoaXMucmVuZGVyUHJvcGVydGllcygpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcygpOiB2b2lkIHtcbiAgICAgICAgWy4uLnRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWxdJyldLmZvckVhY2goKCRjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhTUwgPSAkY2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1tbCcpO1xuICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZVN0cmluZyA9IFRyYW5zbGF0b3IuaSgpLnQoJGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWwta2V5JykpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YU1MID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgJGNoaWxkRWxlbWVudC5pbm5lckhUTUwgPSB0cmFuc2xhdGVTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRjaGlsZEVsZW1lbnQuc2V0QXR0cmlidXRlKGRhdGFNTCwgdHJhbnNsYXRlU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNsYXRvciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFRyYW5zbGF0b3I7XG4gICAgcHJpdmF0ZSBfY3VycmVudExhbmd1YWdlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXZhaWxhYmxlTGFuZ3VhZ2VzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIF90OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgICBnZXQgY3VycmVudExhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRMYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBhdmFpbGFibGVMYW5ndWFnZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlTGFuZ3VhZ2VzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZUxhbmd1YWdlcyA9IGNvbmZpZy5sYW5ndWFnZXM7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHRoaXMuX2F2YWlsYWJsZUxhbmd1YWdlc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5nbGV0b24gcmV3cml0dGVuIGFzICdpJyB0byBtYWtlIGNvZGUgaW4gYXBwbGljYXRpb24gY2xlYW5lclxuICAgICAqIEByZXR1cm4gVHJhbnNsYXRvclxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaSgpOiBUcmFuc2xhdG9yIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zbGF0b3IuaW5zdGFuY2UgfHwgKFRyYW5zbGF0b3IuaW5zdGFuY2UgPSBuZXcgVHJhbnNsYXRvcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHZhbHVlcyBmcm9tIHRyYW5zbGF0aW9uIGtleSAmIHByb2Nlc3MgdGhlbSBjb3JyZWN0bHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0cmFuc2xhdGVLZXlcbiAgICAgKiBAcGFyYW0gcmVwbGFjZW1lbnRzXG4gICAgICovXG4gICAgcHVibGljIHQodHJhbnNsYXRlS2V5OiBzdHJpbmcsIHJlcGxhY2VtZW50cz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBzdHJpbmcge1xuICAgICAgICBsZXQgdHJhbnNsYXRlU3RyaW5nID0gVXRpbHMuaHRtbEVudGl0eURlY29kZSh0aGlzLl90W3RyYW5zbGF0ZUtleV0pO1xuICAgICAgICBpZiAocmVwbGFjZW1lbnRzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZXBsYWNlbWVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVN0cmluZyA9IHRyYW5zbGF0ZVN0cmluZy5yZXBsYWNlKGBbWyR7a2V5fV1dYCwgcmVwbGFjZW1lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZVN0cmluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0VCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgdHJhbnNsYXRlSW1wb3J0ID0gYXdhaXQgaW1wb3J0KGAuLi9sYW5ndWFnZXMvJHt0aGlzLmN1cnJlbnRMYW5ndWFnZX0uanNvbmApIGFzIHsgW2tleTogc3RyaW5nXToge30gfTtcbiAgICAgICAgdGhpcy5fdCA9IHRyYW5zbGF0ZUltcG9ydC5kZWZhdWx0O1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3RyYW5zbGF0b3I6bGFuZ3VhZ2VDaGFuZ2UnKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAgIC8qKlxuICAgICAqIFNodWZmbGVzIGFycmF5IGluIHBsYWNlLiBFUzYgdmVyc2lvblxuICAgICAqIEBwYXJhbSB7W119IGEgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXG4gICAgICovXG4gICAgc3RhdGljIHNodWZmbGVBcnJheShhOiBbXSk6IFtdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW2FbaV0sIGFbal1dID0gW2Fbal0sIGFbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHJhbmRvbSBwcm9wZXJ0eSBmcm9tIGEgb2JqZWN0IHdpdGgga2V5c1xuICAgICAqIEBwYXJhbSBvYmpcbiAgICAgKi9cbiAgICBzdGF0aWMgcmFuZG9tUHJvcGVydHkob2JqOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIHJldHVybiBvYmpba2V5c1trZXlzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkgPDwgMF1dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83Mzk0Nzg3XG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKi9cbiAgICBzdGF0aWMgaHRtbEVudGl0eURlY29kZShodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0eHQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIHR4dC52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbGluayBodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tL1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYSA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvcjtcbiAgICAgICAgcmV0dXJuIC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kfGFkKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBVdGlscyBmcm9tIFwiLi4vaGVscGVycy91dGlsc1wiO1xuaW1wb3J0IFBva2Vtb25TcHJpdGVzIGZyb20gXCIuL3Bva2Vtb25zcHJpdGVzXCI7XG5pbXBvcnQgUG9rZW1vbkRhdGFTZXJ2aWNlIGZyb20gXCIuL3Bva2Vtb25kYXRhc2VydmljZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9rZWRleEVudHJ5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogUG9rZW1vbkRhdGFTZXJ2aWNlID0gUG9rZW1vbkRhdGFTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyID0gOTY7XG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlciA9IDk2O1xuICAgIHByaXZhdGUgeDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHk6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdHJpcEZyb21OYW1lOiBzdHJpbmdbXSA9IFsnLW0kJywgJy1mJCddO1xuICAgIHByaXZhdGUgX3Nwcml0ZXM6IFBva2Vtb25TcHJpdGVzID0gbnVsbDtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gd2F5IG9mIG1hcHBpbmcga2V5IHByb3BlcnRpZXMgdG8gdGhlIGFjdHVhbGx5IHJlcXVpcmVkIHByb3BlcnRpZXMpXG4gICAgICpcbiAgICAgKiBAdG9kbyBDaGVjayB3aXRoIE9ubm9cbiAgICAgKiBAcGFyYW0gb2JqXG4gICAgICovXG4gICAgc2V0IHNwcml0ZXMob2JqOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZXMgPSBuZXcgUG9rZW1vblNwcml0ZXMoKTtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3Nwcml0ZXMpKSk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW2tleV0gPSBvYmpba2V5XTtcblxuICAgICAgICAgICAgLy9KdXN0IHNvbWUgbGFtZSB3b3JrIGFyb3VuZCB0byBwcmVsb2FkIGltYWdlcyBpbnRvIGNhY2hlXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocG9rZWRleEVudHJ5OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wb2tlZGV4RW50cnkgPSBwb2tlZGV4RW50cnk7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0UG9rZW1vbkJ5UG9rZWRleEVudHJ5KHBva2VkZXhFbnRyeSwgdGhpcy5hc3NpZ25Mb2FkZWREYXRhLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXNzaWduTG9hZGVkRGF0YShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy9TdHJpcCBleGNlcHRpb25zXG4gICAgICAgIGxldCByZWdFeHAgPSBuZXcgUmVnRXhwKHRoaXMuc3RyaXBGcm9tTmFtZS5qb2luKCd8JyksIFwiZ2lcIik7XG4gICAgICAgIHRoaXMuX25hbWUgPSBkYXRhLnNwZWNpZXMubmFtZS5yZXBsYWNlKHJlZ0V4cCwgJycpO1xuICAgICAgICB0aGlzLnNwcml0ZXMgPSBkYXRhLnNwcml0ZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5kb21TcHJpdGUgPSBVdGlscy5yYW5kb21Qcm9wZXJ0eSh0aGlzLl9zcHJpdGVzKTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtyYW5kb21TcHJpdGV9XCIpYDtcbiAgICAgICAgdGhpcy5kcmF3KFV0aWxzLmdldFJhbmRvbUludCgwLCB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGgpLCBVdGlscy5nZXRSYW5kb21JbnQoNDYsIHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuaGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqL1xuICAgIHByaXZhdGUgZHJhdyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnggPSB4IC0gKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy55ID0geSAtICh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLnh9cHgsICR7dGhpcy55fXB4KWA7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjcC1wb2tlbW9uJywgUG9rZW1vbik7XG4iLCJ0eXBlIEZ1bmN0aW9uQ2FsbGJhY2sgPSAoZGF0YToge30pID0+IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9rZW1vbkRhdGFTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUG9rZW1vbkRhdGFTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVVybDogc3RyaW5nID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL1wiO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFBva2Vtb25EYXRhU2VydmljZSB7XG4gICAgICAgIHJldHVybiBQb2tlbW9uRGF0YVNlcnZpY2UuaW5zdGFuY2UgfHwgKFBva2Vtb25EYXRhU2VydmljZS5pbnN0YW5jZSA9IG5ldyBQb2tlbW9uRGF0YVNlcnZpY2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBva2VkZXhFbnRyeVxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb2tlbW9uQnlQb2tlZGV4RW50cnkocG9rZWRleEVudHJ5OiBudW1iZXIsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmV0Y2hBUElEYXRhKGBwb2tlbW9uLyR7cG9rZWRleEVudHJ5fWAsIHN1Y2Nlc3NIYW5kbGVyKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbmRwb2ludFxuICAgICAqIEBwYXJhbSBzdWNjZXNzSGFuZGxlclxuICAgICAqL1xuICAgIHByaXZhdGUgZmV0Y2hBUElEYXRhKGVuZHBvaW50OiBzdHJpbmcsIHN1Y2Nlc3NIYW5kbGVyOiBGdW5jdGlvbkNhbGxiYWNrKTogdm9pZCB7XG4gICAgICAgIGZldGNoKHRoaXMuYmFzZVVybCArIGVuZHBvaW50KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzdWNjZXNzSGFuZGxlcihkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZGF0YSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZGF0YSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB0b2RvIE1ha2Ugc29tZSBlcnJvciBoYW5kbGluZyB0aGF0IGRvZXMgbWFrZSBzZW5zZSA6KVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZGF0YToge30pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKVxuICAgIH1cbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IFBva2Vtb24gZnJvbSBcIi4vcG9rZW1vblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9oZWxwZXJzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25GYWN0b3J5IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBva2Vtb25zOiBQb2tlbW9uW10gPSBbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsVG9DaG9vc2VGcm9tOiBudW1iZXIgPSBjb25maWcuZ2FtZS5hY3RpdmVQb2tlbW9uO1xuICAgIHByaXZhdGUgdG90YWxBbW91bnRGb3JHYW1lOiBudW1iZXIgPSB0aGlzLnRvdGFsVG9DaG9vc2VGcm9tO1xuICAgIHByaXZhdGUgYWN0aXZlUG9rZW1vbjogUG9rZW1vbiA9IG51bGw7XG4gICAgcHJpdmF0ZSAkd3JhcHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYXN0VXBkYXRlOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBva2Vtb25zXCIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbk5ldycsICgpID0+IHRoaXMuc3Bhd24oKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdxdWl6OnN0YXJ0JywgKGUpID0+IHRoaXMuaW5pdGlhbGl6ZVBva2Vtb25zKChlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwuYW1vdW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0aW1lcjpkb25lJywgKCkgPT4gdGhpcy5kZXNwYXduKCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncXVpejpxdWVzdGlvbkRvbmUnLCAoKSA9PiB0aGlzLmRlc3Bhd24oKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFtb3VudFxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVBva2Vtb25zKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnRGb3JHYW1lID0gYW1vdW50O1xuICAgICAgICBsZXQgaW5pdGlhbERhdGEgPSBBcnJheS5mcm9tKEFycmF5KHRoaXMudG90YWxUb0Nob29zZUZyb20pKS5tYXAoKF92LCBpKSA9PiBpICsgMSk7XG4gICAgICAgIGxldCBmaWx0ZXJlZERhdGEgPSBVdGlscy5zaHVmZmxlQXJyYXkoaW5pdGlhbERhdGEgYXMgW10pLnNsaWNlKDAsIHRoaXMudG90YWxBbW91bnRGb3JHYW1lKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBva2Vtb24gPSBuZXcgUG9rZW1vbihmaWx0ZXJlZERhdGFbaV0pO1xuICAgICAgICAgICAgdGhpcy5wb2tlbW9ucy5wdXNoKHBva2Vtb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3bigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucG9rZW1vbnMubGVuZ3RoID09PSAwIHx8IHRoaXMuYWN0aXZlUG9rZW1vbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gdGhpcy5wb2tlbW9ucy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wb2tlbW9ucy5sZW5ndGgpLCAxKVswXTtcbiAgICAgICAgdGhpcy4kd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2ZVBva2Vtb24pO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Bva2Vtb246c3Bhd24nLCB7ZGV0YWlsOiB7cG9rZW1vbk5hbWU6IHRoaXMuYWN0aXZlUG9rZW1vbi5uYW1lfX0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Bhd24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQb2tlbW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb2tlbW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgrK3RoaXMubGFzdFVwZGF0ZSAlIDEwID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9rZW1vbi51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2Vtb25TcHJpdGVzIHtcbiAgICBwdWJsaWMgYmFja19kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBiYWNrX3NoaW55OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9kZWZhdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBmcm9udF9zaGlueTogc3RyaW5nID0gXCJcIjtcblxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cbiIsImltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuLi9oZWxwZXJzL3RyYW5zbGF0b3JcIjtcbmltcG9ydCBRdWl6RWxlbWVudCBmcm9tIFwiLi9xdWl6ZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzc0Zvcm0gZXh0ZW5kcyBRdWl6RWxlbWVudCB7XG4gICAgcHJpdmF0ZSAkZ3Vlc3NGb3JtSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybS1wb2tlbW9uLWd1ZXNzXCIgY2xhc3M9XCJpcy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgaWQ9XCJwcm9ncmVzc1wiIGNsYXNzPVwicHJvZ3Jlc3NcIiB2YWx1ZT1cIjBcIiBtYXg9XCIxMDBcIj48L3Byb2dyZXNzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBva2Vtb24tZ3Vlc3MtbmFtZVwiIGNsYXNzPVwiaXMtaGlkZGVuXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW1sPVwicGxhY2Vob2xkZXJcIiBkYXRhLW1sLWtleT1cImd1ZXNzUG9rZW1vblwiIGlkPVwicG9rZW1vbi1ndWVzcy1uYW1lXCIgY2xhc3M9XCJpbnB1dCBpcy1pbmZvIGlzLWV4cGFuZGVkXCIgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5xdWl6LiRtYWluLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZURvbmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUZW1wbGF0ZURvbmUoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXBva2Vtb24tZ3Vlc3MnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb3BlcnRpZXMoKTtcbiAgICAgICAgICAgIHRoaXMuJGd1ZXNzRm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb24tZ3Vlc3MtbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB0aGlzLmd1ZXNzRm9ybVN1Ym1pdEhhbmRsZXIoZSkpO1xuICAgICAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB0aGlzLnF1aXouaGFuZGxlQW5zd2VyKCkpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kZ3Vlc3NGb3JtSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLiRndWVzc0Zvcm1JbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy4kZ3Vlc3NGb3JtSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ3Vlc3NGb3JtU3VibWl0SGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucXVpei5oYW5kbGVBbnN3ZXIoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCIuLi9oZWxwZXJzL3RyYW5zbGF0b3JcIjtcbmltcG9ydCBRdWl6RWxlbWVudCBmcm9tIFwiLi9xdWl6ZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsU2NyZWVuIGV4dGVuZHMgUXVpekVsZW1lbnQge1xuICAgIHByaXZhdGUgJGluaXRpYWxGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG5cbiAgICByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiaW5pdGlhbFwiIGNsYXNzPVwicGFnZWxvYWRlciBpcy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybS1wb2tlbW9uLWluaXRpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLW1sIGRhdGEtbWwta2V5PVwiaW50cm9RdWVzdGlvblwiIGZvcj1cInBva2Vtb24tZ3Vlc3MtYW1vdW50XCIgY2xhc3M9XCJsYWJlbFwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRUZW1wbGF0ZUxhbmd1YWdlcygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicG9rZW1vbi1ndWVzcy1hbW91bnRcIiBjbGFzcz1cImlucHV0IGlzLXdhcm5pbmcgaXMtZXhwYW5kZWRcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiNVwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNVwiIGF1dG9mb2N1cy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtbWw9XCJwbGFjZWhvbGRlclwiIGRhdGEtbWwta2V5PVwiaW5wdXROYW1lXCIgaWQ9XCJwb2tlbW9uLWd1ZXNzLXVzZXJuYW1lXCIgY2xhc3M9XCJpbnB1dCBpcy13YXJuaW5nIGlzLWV4cGFuZGVkXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtbWw9XCJ2YWx1ZVwiIGRhdGEtbWwta2V5PVwiaW5wdXRTdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gaXMtd2FybmluZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5xdWl6LiRtYWluLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZURvbmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUZW1wbGF0ZURvbmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucXVpei4kbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRpYWwnKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvcGVydGllcygpO1xuICAgICAgICAgICAgdGhpcy4kaW5pdGlhbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wb2tlbW9uLWluaXRpYWwnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLiRpbml0aWFsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gdGhpcy5xdWl6LmluaXRpYWxGb3JtU3VibWl0SGFuZGxlcihlKSk7XG4gICAgICAgICAgICBbLi4udGhpcy4kaW5pdGlhbEZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1sYW5ndWFnZV0nKV0ubWFwKCgkZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4gdGhpcy5sYW5ndWFnZUNoYW5nZUhhbmRsZXIoZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIC8vVWdseSBidXQgYWxzbyBuZWVkZWQgdG8gdHJpZ2dlciBDU1MgYW5pbWF0aW9uIHRoZSByaWdodCB3YXkuLi4gOihcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxcIikuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyksIDUwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRlbXBsYXRlTGFuZ3VhZ2VzKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSBUcmFuc2xhdG9yLmkoKS5jdXJyZW50TGFuZ3VhZ2U7XG4gICAgICAgIHJldHVybiBUcmFuc2xhdG9yLmkoKS5hdmFpbGFibGVMYW5ndWFnZXMubWFwKChsYW5ndWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlzLWNoZWNrcmFkaW8gaXMtcnRsIGlzLXdhcm5pbmcgaXMtc21hbGxcIiBpZD1cImxhbmd1YWdlJHtpbmRleH1cIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7bGFuZ3VhZ2V9XCIgbmFtZT1cImxhbmd1YWdlXCIgJHtjdXJyZW50TGFuZ3VhZ2UgPT09IGxhbmd1YWdlID8gJ2NoZWNrZWQ9XCJjaGVja2VkXCInIDogJyd9Lz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFuZ3VhZ2Uke2luZGV4fVwiPiR7bGFuZ3VhZ2V9PC9sYWJlbD5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0pLmpvaW4oXCJcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsYW5ndWFnZUNoYW5nZUhhbmRsZXIoZTogRXZlbnQpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBUcmFuc2xhdG9yLmkoKS5jdXJyZW50TGFuZ3VhZ2UgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICBhd2FpdCBUcmFuc2xhdG9yLmkoKS5zZXRUKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kaW5pdGlhbEZvcm0ucmVtb3ZlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiLi4vaGVscGVycy90cmFuc2xhdG9yXCI7XG5pbXBvcnQgUXVpekVsZW1lbnQgZnJvbSBcIi4vcXVpemVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZFNjcmVlbiBleHRlbmRzIFF1aXpFbGVtZW50IHtcbiAgICByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0ICR0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicGFnZWxvYWRlclwiIGNsYXNzPVwicGFnZWxvYWRlciBpcy13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1tbCBkYXRhLW1sLWtleT1cImxvYWRpbmdcIiBjbGFzcz1cInRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBgO1xuXG4gICAgICAgIHRoaXMucXVpei4kbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICR0ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGVEb25lKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyVGVtcGxhdGVEb25lKCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2Vsb2FkZXJcIik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb3BlcnRpZXMoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyaWdnZXJOZXdRdWVzdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3F1aXo6cXVlc3Rpb25OZXcnKSlcbiAgICAgICAgfSwgY29uZmlnLmdhbWUubG9hZFNjcmVlbkFjdGl2ZVRpbWVPdXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VUaXRsZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHN0YXR1c1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy13YXJuaW5nJywgJ2lzLXN1Y2Nlc3MnLCAnaXMtZGFuZ2VyJywgJ2lzLXByaW1hcnknKTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBpcy0ke3N0YXR1c31gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0VuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZW5kLXNjcmVlbicpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IFNjb3JlIGZyb20gXCIuL3Njb3JlXCI7XG5pbXBvcnQgR3Vlc3NGb3JtIGZyb20gXCIuL2d1ZXNzZm9ybVwiO1xuaW1wb3J0IExvYWRTY3JlZW4gZnJvbSBcIi4vbG9hZHNjcmVlblwiO1xuaW1wb3J0IEluaXRpYWxTY3JlZW4gZnJvbSBcIi4vaW5pdGlhbHNjcmVlblwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIi4uL2hlbHBlcnMvdHJhbnNsYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWl6IHtcbiAgICBwdWJsaWMgJG1haW46IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50UXVlc3Rpb246IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpbml0aWFsU2NyZWVuOiBJbml0aWFsU2NyZWVuO1xuICAgIHByaXZhdGUgZ3Vlc3NGb3JtOiBHdWVzc0Zvcm07XG4gICAgcHJpdmF0ZSBsb2FkU2NyZWVuOiBMb2FkU2NyZWVuO1xuICAgIHByaXZhdGUgdGltZXI6IFRpbWVyO1xuICAgIHByaXZhdGUgc2NvcmU6IFNjb3JlO1xuICAgIHByaXZhdGUgZ3Vlc3NlZFBva2Vtb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEB0b2RvIFRoaXMgY2xhc3MgY29tYmluZWQgd2l0aCBJbml0aWFsU2NyZWVuLCBHdWVzc0Zvcm0gYW5kIExvYWRTY3JlZW4gc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgYSBsaXR0bGUuLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NyZWVuID0gbmV3IEluaXRpYWxTY3JlZW4odGhpcyk7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtID0gbmV3IEd1ZXNzRm9ybSh0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuID0gbmV3IExvYWRTY3JlZW4odGhpcyk7XG5cbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9rZW1vbjpzcGF3bicsIChlKSA9PiB0aGlzLnN0YXJ0UXVlc3Rpb24oZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGltZXI6ZG9uZScsICgpID0+IHRoaXMudGltZXJEb25lKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHRoZSBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0aWFsRm9ybVN1Ym1pdEhhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvdGFsUXVlc3Rpb25zID0gcGFyc2VJbnQoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uLWd1ZXNzLWFtb3VudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdxdWl6OnN0YXJ0Jywge2RldGFpbDoge2Ftb3VudDogdGhpcy50b3RhbFF1ZXN0aW9uc319KSk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsU2NyZWVuLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxcIikuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSgpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4udHJpZ2dlck5ld1F1ZXN0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXJ0UXVlc3Rpb24oZTogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb24rKztcbiAgICAgICAgdGhpcy50aW1lci5yZXN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZ3Vlc3NlZFBva2Vtb24gPSAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsLnBva2Vtb25OYW1lO1xuICAgICAgICB0aGlzLmd1ZXNzRm9ybS5zaG93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aW1lckRvbmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtLmhpZGUoKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb24gPT09IHRoaXMudG90YWxRdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kU2NyZWVuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uY2hhbmdlVGl0bGUoVHJhbnNsYXRvci5pKCkudCgnd3JvbmdBbnN3ZXInLCB7cG9rZW1vbjogdGhpcy5ndWVzc2VkUG9rZW1vbn0pKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnNldFN0YXR1cygnZGFuZ2VyJyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi50cmlnZ2VyTmV3UXVlc3Rpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlQW5zd2VyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ndWVzc2VkUG9rZW1vbiAhPT0gdGhpcy5ndWVzc0Zvcm0uZ2V0Q3VycmVudFZhbHVlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3Vlc3NGb3JtLmhpZGUoKTtcbiAgICAgICAgdGhpcy5zY29yZS52YWx1ZSsrO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3F1aXo6cXVlc3Rpb25Eb25lJykpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbiA9PT0gdGhpcy50b3RhbFF1ZXN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5lbmRTY3JlZW4oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5jaGFuZ2VUaXRsZShUcmFuc2xhdG9yLmkoKS50KCdnb29kQW5zd2VyJykpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4uc2V0U3RhdHVzKCdzdWNjZXNzJyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi50cmlnZ2VyTmV3UXVlc3Rpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZFNjcmVlbigpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1heFNjb3JlID0gdGhpcy5zY29yZS5nZXRNYXgodGhpcy50b3RhbFF1ZXN0aW9ucyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmVlbi5jaGFuZ2VUaXRsZShUcmFuc2xhdG9yLmkoKS50KCdlbmRNZXNzYWdlJywge1xuICAgICAgICAgICAgc2NvcmU6IHRoaXMuc2NvcmUudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1heFNjb3JlOiBtYXhTY29yZS50b1N0cmluZygpXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLnNldFN0YXR1cygncHJpbWFyeScpO1xuICAgICAgICB0aGlzLmxvYWRTY3JlZW4ubWFya0VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBRdWl6IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCBNdWx0aWxpbmd1YWxFbGVtZW50IGZyb20gXCIuLi9oZWxwZXJzL211bHRpbGluZ3VhbGVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUXVpekVsZW1lbnQgZXh0ZW5kcyBNdWx0aWxpbmd1YWxFbGVtZW50IHtcbiAgICBwcm90ZWN0ZWQgcXVpejogUXVpejtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihxdWl6OiBRdWl6KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucXVpeiA9IHF1aXo7XG4gICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCByZW5kZXJUZW1wbGF0ZSgpOiB2b2lkO1xuXG4gICAgYWJzdHJhY3QgcmVuZGVyVGVtcGxhdGVEb25lKCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpbmNyZW1lbnRWYWx1ZTogbnVtYmVyID0gY29uZmlnLmdhbWUuc2NvcmVQZXJRdWVzdGlvbjtcblxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgZGVmYXVsdCArKyBiZWhhdmlvdXIgYnkgaW5jcmVtZW50aW5nIHNjb3JlIHdpdGggY3VzdG9tIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX3ZhbHVlXG4gICAgICovXG4gICAgc2V0IHZhbHVlKF92YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gKHRoaXMuX3ZhbHVlICs9IHRoaXMuaW5jcmVtZW50VmFsdWUpO1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdGhpcy5fdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdG90YWxRdWVzdGlvbnNcbiAgICAgKiBAcmV0dXJuIG51bWJlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNYXgodG90YWxRdWVzdGlvbnM6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmluY3JlbWVudFZhbHVlICogdG90YWxRdWVzdGlvbnM7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjcC1zY29yZScsIFNjb3JlKTtcbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0b3RhbFNlY29uZHM6IG51bWJlciA9IGNvbmZpZy5nYW1lLnNlY29uZHNQZXJRdWVzdGlvbjtcbiAgICBwcml2YXRlIF9zZWNvbmRzOiBudW1iZXIgPSB0aGlzLnRvdGFsU2Vjb25kcztcbiAgICBwcml2YXRlIGludGVydmFsSWQ6IE5vZGVKUy5UaW1lcjtcbiAgICBwcml2YXRlIHByb2dyZXNzYmFySW50ZXJ2YWxJZDogTm9kZUpTLlRpbWVyO1xuICAgIHByaXZhdGUgcHJvZ3Jlc3NiYXJTdGFydFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlICRwcm9ncmVzczogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwZXJmb3JtYW5jZVN0YW1wOiBudW1iZXI7XG5cbiAgICBnZXQgc2Vjb25kcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vjb25kcztcbiAgICB9XG5cbiAgICBzZXQgc2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3F1aXo6cXVlc3Rpb25Eb25lJywgKCkgPT4gdGhpcy5kZXN0cm95KCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKTsgLy8gT25seSBoZXJlIGR1ZSB0byB0cmFuc2xhdGlvbiBAdG9kb1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCAxMDAwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhckludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzYmFyKCksIDEwKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2JhclN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnBlcmZvcm1hbmNlU3RhbXAgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Vjb25kcy0tO1xuXG4gICAgICAgIGlmICh0aGlzLnNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndGltZXI6ZG9uZScpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3NiYXIoKTogdm9pZCB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMudG90YWxTZWNvbmRzICogMTAwMDtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMucHJvZ3Jlc3NiYXJTdGFydFRpbWU7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRpZmYgLyBkdXJhdGlvbiAqIDEwMDtcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlID4gMTAwID8gMTAwIDogdmFsdWU7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnByb2dyZXNzYmFySW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudG90YWxTZWNvbmRzO1xuICAgICAgICB0aGlzLiRwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzAnKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcImpzL1wiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInBva2Vtb246XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwb2tlbW9uXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3Bva2Vtb25cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIChhd2FpdCBnYW1lLmluaXRpYWxpemUoKSkuc3RhcnQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9