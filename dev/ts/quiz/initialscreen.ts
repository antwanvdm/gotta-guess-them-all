import Quiz from "./quiz";

export default class InitialScreen {
    private $initialForm: HTMLFormElement;
    private quiz: Quiz;

    constructor(quiz: Quiz) {
        this.quiz = quiz;
        this.renderTemplate();

        setTimeout(() => {
            this.$initialForm = document.getElementById('form-pokemon-initial') as HTMLFormElement;
            this.$initialForm.addEventListener('submit', (e) => this.quiz.initialFormSubmitHandler(e));
        }, 0);
    }

    private renderTemplate(): void {
        let $template = `
            <section id="initial" class="pageloader is-info">
                <div class="title">
                    <form id="form-pokemon-initial">
                        <label for="pokemon-guess-amount" class="label">How many Pokémon from gen I, II & III can you recognise in the blink of an eye?</label>
        
                        <div class="field">
                            <div class="control">
                                <input id="pokemon-guess-amount" class="input is-warning is-expanded" type="number" min="5" max="100" value="5" autofocus/>
                            </div>
                            <div class="control">
                                <input id="pokemon-guess-username" class="input is-warning is-expanded" type="text" placeholder="your name"/>
                            </div>
                            <div class="control">
                                <input type="submit" class="button is-warning" value="I'm gonna guess them all! &#x1F525;"/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        `;

        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.quiz.$main.classList.remove('is-loading');
        document.getElementById("initial").classList.add('is-active');
    }

    public remove() {
        this.$initialForm.remove();
    }
}
