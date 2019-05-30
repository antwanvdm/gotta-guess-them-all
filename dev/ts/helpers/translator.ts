import config from '../config.json';

export default class Translator {
    private static instance: Translator;
    private _currentLanguage: string;
    private readonly _availableLanguages: string[];
    private _t: { [key: string]: string } = {};

    get currentLanguage(): string {
        return this._currentLanguage;
    }

    set currentLanguage(value: string) {
        this._currentLanguage = value;
    }

    get availableLanguages(): string[] {
        return this._availableLanguages;
    }

    get t(): { [key: string]: string } {
        return this._t;
    }

    private constructor() {
        this._availableLanguages = config.languages;
        this._currentLanguage = this._availableLanguages[0];
    }

    /**
     * Singleton rewritten as 'i' to make code in application cleaner
     * @return Translator
     */
    public static i(): Translator {
        return Translator.instance || (Translator.instance = new Translator());
    }

    public async setT(): Promise<any> {
        let translateImport = await import(`../languages/${this.currentLanguage}.json`) as { [key: string]: {} };
        this._t = translateImport.default;
        window.dispatchEvent(new Event('translator:languageChange'));
    }
}
