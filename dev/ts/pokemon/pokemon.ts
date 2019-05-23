import Utils from "../helpers/utils";
import PokemonSprites from "./pokemonsprites";
import PokemonDataService from "./pokemondataservice";

export default class Pokemon extends HTMLElement {
    private readonly pokedexEntry: number;
    private dataService: PokemonDataService = new PokemonDataService();
    private width: number = 96;
    private height: number = 96;
    private x: number = 0;
    private y: number = 0;
    private _sprites: PokemonSprites = null;
    private _name: string;

    /**
     * Custom way of mapping key properties to the actually required properties)
     *
     * @todo Check with Onno
     * @param obj
     */
    set sprites(obj: { [key: string]: string }) {
        this._sprites = new PokemonSprites();
        let keys = Object.keys(JSON.parse(JSON.stringify(this._sprites)));
        for (let key of keys) {
            this._sprites[key] = obj[key];

            //Just some lame work around to preload images into cache
            let image = new Image();
            image.src = obj[key];
        }
    }

    get name(): string {
        return this._name;
    }

    constructor(pokedexEntry: number) {
        super();
        this.pokedexEntry = pokedexEntry;
        this.dataService.getPokemonByPokedexEntry(pokedexEntry, this.assignLoadedData.bind(this));
    }

    private assignLoadedData(data: any): void {
        this._name = data.name;
        this.sprites = data.sprites;
    }

    public update(): void {
        if (this._sprites === null) {
            return;
        }

        let randomSprite = Utils.randomProperty(this._sprites);
        this.style.backgroundImage = `url("${randomSprite}")`;
        this.draw(Utils.getRandomInt(0, window.innerWidth - this.width), Utils.getRandomInt(46, window.innerHeight - this.height));
    }

    /**
     * @param x
     * @param y
     */
    private draw(x: number, y: number): void {
        this.x = x - (this.width / 2);
        this.y = y - (this.height / 2);
        this.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

window.customElements.define('cp-pokemon', Pokemon);
