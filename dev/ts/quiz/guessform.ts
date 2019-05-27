import Quiz from "./quiz";

export default class GuessForm {
    private $guessForm: HTMLFormElement;
    private $guessFormInput: HTMLInputElement;
    private quiz: Quiz;

    constructor(quiz: Quiz) {
        this.quiz = quiz;
        this.renderTemplate();

        setTimeout(() => {
            this.$guessForm = document.getElementById('form-pokemon-guess') as HTMLFormElement;
            this.$guessFormInput = document.getElementById('pokemon-guess-name') as HTMLInputElement;
            this.$guessForm.addEventListener('submit', (e) => this.guessFormSubmitHandler(e));
            this.$guessFormInput.addEventListener('keyup', () => this.quiz.handleAnswer());
        }, 0);
    }

    private renderTemplate(): void {
        let $template = `
            <form id="form-pokemon-guess" class="is-hidden">
                <progress id="progress" class="progress" value="0" max="100"></progress>
                <div class="field">
                    <div class="control">
                        <label for="pokemon-guess-name" class="is-hidden"></label>
                        <input id="pokemon-guess-name" class="input is-info is-expanded" type="text" placeholder="Who is this Pokémon?!" autocomplete="off"/>
                    </div>
                </div>
            </form>
        `;

        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
    }

    public hide(): void {
        this.$guessForm.classList.add('is-hidden');
    }

    public show(): void {
        this.$guessForm.classList.remove('is-hidden');
        this.$guessFormInput.value = "";
        this.$guessFormInput.focus();
    }

    /**
     * @return string
     */
    public getCurrentValue(): string {
        return this.$guessFormInput.value;
    }

    /**
     * @param e
     */
    private guessFormSubmitHandler(e: Event): void {
        e.preventDefault();
        this.quiz.handleAnswer();
    }

}
