import Quiz from "./quiz";
import Translator from "../helpers/translator";

export default class InitialScreen {
    private $initialForm: HTMLFormElement;
    private quiz: Quiz;

    constructor(quiz: Quiz) {
        this.quiz = quiz;
        this.renderTemplate();
        window.addEventListener('translator:languageChange', () => this.renderTemplate());
    }

    private renderTemplate(): void {
        document.getElementById('initial') !== null ? document.getElementById('initial').remove() : '';

        let $template = `
            <section id="initial" class="pageloader is-info">
                <div class="title">
                    <form id="form-pokemon-initial">
                        <label for="pokemon-guess-amount" class="label">${Translator.i().t.introQuestion}</label>
                        
                        <div class="field">
                            ${this.getTemplateLanguages()}
                        </div>
                    
                        <div class="field">
                            <div class="control">
                                <input id="pokemon-guess-amount" class="input is-warning is-expanded" type="number" min="5" max="100" value="5" autofocus/>
                            </div>
                            <div class="control">
                                <input id="pokemon-guess-username" class="input is-warning is-expanded" type="text" placeholder="${Translator.i().t.inputName}"/>
                            </div>
                            <div class="control">
                                <input type="submit" class="button is-warning" value="${Translator.i().t.inputSubmit} &#x1F525;"/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        `;

        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.renderDone();
    }

    private renderDone(): void {
        this.quiz.$main.classList.remove('is-loading');

        setTimeout(() => {
            this.$initialForm = document.getElementById('form-pokemon-initial') as HTMLFormElement;
            this.$initialForm.addEventListener('submit', (e) => this.quiz.initialFormSubmitHandler(e));
            [...this.$initialForm.querySelectorAll('input[name=language]')].map(($el: Element) => {
                $el.addEventListener('click', async (e) => this.languageChangeHandler(e));
            });
        }, 0);

        //Ugly but also needed to trigger CSS animation the right way... :(
        setTimeout(() => document.getElementById("initial").classList.add('is-active'), 50);
    }

    private getTemplateLanguages(): string {
        let currentLanguage = Translator.i().currentLanguage;
        return Translator.i().availableLanguages.map((language: string, index: number) => {
            return `
                <input class="is-checkradio is-rtl is-warning is-small" id="language${index}" type="radio" value="${language}" name="language" ${currentLanguage === language ? 'checked="checked"' : ''}/>
                <label for="language${index}">${language}</label>
            `;
        }).join("");
    }

    private async languageChangeHandler(e: Event): Promise<any> {
        Translator.i().currentLanguage = (e.currentTarget as HTMLInputElement).value;
        await Translator.i().setT();
    }

    public remove(): void {
        this.$initialForm.remove();
    }
}
