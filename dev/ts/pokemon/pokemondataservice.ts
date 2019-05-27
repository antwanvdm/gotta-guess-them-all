type FunctionCallback = (data: {}) => any;

export default class PokemonDataService {
    private static instance: PokemonDataService;
    private readonly baseUrl: string = "https://pokeapi.co/api/v2/";

    private constructor() {
    }

    public static getInstance(): PokemonDataService {
        return PokemonDataService.instance || (PokemonDataService.instance = new PokemonDataService());
    }

    /**
     * @param pokedexEntry
     * @param successHandler
     */
    public getPokemonByPokedexEntry(pokedexEntry: number, successHandler: FunctionCallback): void {
        this.fetchAPIData(`pokemon/${pokedexEntry}`, successHandler)
    }

    /**
     * @param endpoint
     * @param successHandler
     */
    private fetchAPIData(endpoint: string, successHandler: FunctionCallback): void {
        fetch(this.baseUrl + endpoint)
            .then((result) => result.json())
            .then((data) => successHandler(data))
            .catch((data) => this.errorHandler(data));
    }

    /**
     * @todo Make some error handling that does make sense :)
     * @param data
     */
    private errorHandler(data: {}): void {
        console.error(data)
    }
}
