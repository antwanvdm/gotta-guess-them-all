import config from '../config.json';
import Pokemon from "./pokemon";
import Utils from "../helpers/utils";

export default class PokemonFactory {
    private readonly pokemons: Pokemon[] = [];
    private readonly totalToChooseFrom: number = config.game.activePokemon;
    private totalAmountForGame: number = this.totalToChooseFrom;
    private activePokemon: Pokemon = null;
    private $wrapper: HTMLElement;
    private lastUpdate: number = 0;

    constructor() {
        this.$wrapper = document.getElementById("pokemons");
        window.addEventListener('quiz:questionNew', () => this.spawn());
        window.addEventListener('quiz:start', (e) => this.initializePokemons((e as CustomEvent).detail.amount));
        window.addEventListener('timer:done', () => this.despawn());
        window.addEventListener('quiz:questionDone', () => this.despawn());
    }

    /**
     * @param amount
     */
    private initializePokemons(amount: number): void {
        this.totalAmountForGame = amount;
        let initialData = Array.from(Array(this.totalToChooseFrom)).map((_v, i) => i + 1);
        let filteredData = Utils.shuffleArray(initialData as []).slice(0, this.totalAmountForGame);

        for (let i = 0; i < filteredData.length; i++) {
            let pokemon = new Pokemon(filteredData[i]);
            this.pokemons.push(pokemon);
        }
    }

    private spawn(): void {
        if (this.pokemons.length === 0 || this.activePokemon !== null) {
            return;
        }

        this.activePokemon = this.pokemons.splice(Math.floor(Math.random() * this.pokemons.length), 1)[0];
        this.$wrapper.appendChild(this.activePokemon);
        window.dispatchEvent(new CustomEvent('pokemon:spawn', {detail: {pokemonName: this.activePokemon.name}}));
    }

    private despawn(): void {
        this.activePokemon.remove();
        this.activePokemon = null;
    }

    public update(): void {
        if (this.activePokemon == null) {
            return;
        }

        if (++this.lastUpdate % 10 == 0) {
            this.activePokemon.update();
        }
    }
}
