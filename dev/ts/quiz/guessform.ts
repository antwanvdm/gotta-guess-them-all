import Quiz from "./quiz";
import Translator from "../helpers/translator";
import QuizElement from "./quizelement";

export default class GuessForm extends QuizElement {
    private $guessFormInput: HTMLInputElement;

    renderTemplate(): void {
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

    renderTemplateDone(): void {
        setTimeout(() => {
            this.$element = document.getElementById('form-pokemon-guess') as HTMLFormElement;
            this.renderProperties();
            this.$guessFormInput = document.getElementById('pokemon-guess-name') as HTMLInputElement;
            this.$element.addEventListener('submit', (e) => this.guessFormSubmitHandler(e));
            this.$guessFormInput.addEventListener('keyup', () => this.quiz.handleAnswer());
        }, 0);
    }

    public hide(): void {
        this.$element.classList.add('is-hidden');
    }

    public show(): void {
        this.$element.classList.remove('is-hidden');
        this.$guessFormInput.value = "";
        this.$guessFormInput.focus();
    }

    /**
     * @return string
     */
    public getCurrentValue(): string {
        return this.$guessFormInput.value.toLowerCase();
    }

    /**
     * @param e
     */
    private guessFormSubmitHandler(e: Event): void {
        e.preventDefault();
        this.quiz.handleAnswer();
    }

}
