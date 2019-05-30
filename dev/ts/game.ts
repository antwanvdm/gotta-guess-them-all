import config from './config.json'
import PokemonFactory from "./pokemon/pokemonfactory";
import Quiz from "./quiz/quiz";
import Translator from "./helpers/translator";

export default class Game {
    private readonly pokemonFactory: PokemonFactory;

    constructor() {
        this.pokemonFactory = new PokemonFactory();
    }

    /**
     * Make a initialise compatible with chain
     * @return Game
     */
    public async initialize() {
        await Translator.i().setT();
        return this;
    }

    public start() {
        setTimeout(() => new Quiz(), config.game.initialLoaderActiveTimeOut);
        document.title = Translator.i().t.title;
        this.gameLoop();
    }

    private gameLoop(): void {
        this.pokemonFactory.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }
}
