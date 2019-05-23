import PokemonFactory from "./pokemon/pokemonfactory";
import Quiz from "./quiz/quiz";

export default class Game {
    private readonly pokemonFactory: PokemonFactory;
    private readonly quiz: Quiz;

    constructor() {
        this.pokemonFactory = new PokemonFactory();
        this.quiz = new Quiz();
        this.gameLoop();
    }

    private gameLoop(): void {
        this.pokemonFactory.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }
}
