import config from './config.json'
import PokemonFactory from "./pokemon/pokemonfactory";
import Quiz from "./quiz/quiz";

export default class Game {
    private readonly pokemonFactory: PokemonFactory;

    constructor() {
        this.pokemonFactory = new PokemonFactory();
        setTimeout(() => new Quiz(), config.game.initialLoaderActiveTimeOut);
        this.gameLoop();
    }

    private gameLoop(): void {
        this.pokemonFactory.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }
}
