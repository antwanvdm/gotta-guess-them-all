import config from '../config.json';
import Quiz from "./quiz";

export default class LoadScreen {
    private $loadScreen: HTMLElement;
    private quiz: Quiz;

    constructor(quiz: Quiz) {
        this.quiz = quiz;
        this.renderTemplate();

        setTimeout(() => {
            this.$loadScreen = document.getElementById("pageloader");
        }, 0);
    }

    private renderTemplate(): void {
        let $template = `
            <section id="pageloader" class="pageloader is-warning">
                <span class="title">Pokémons are loaded into the system</span>
            </section>
        `;

        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
    }

    public show(): void {
        this.$loadScreen.classList.add('is-active');
    }

    public hide(): void {
        this.$loadScreen.classList.remove('is-active');
    }

    public triggerNewQuestion(): void {
        this.show();
        setTimeout(() => {
            this.hide();
            window.dispatchEvent(new CustomEvent('quiz:questionNew'))
        }, config.game.loadScreenActiveTimeOut);
    }

    public changeTitle(value: string): void {
        this.$loadScreen.querySelector('.title').innerHTML = value;
    }

    /**
     * @param status
     */
    public setStatus(status: string): void {
        this.$loadScreen.classList.remove('is-warning', 'is-success', 'is-danger', 'is-primary');
        this.$loadScreen.classList.add(`is-${status}`);
    }

    public markEnd(): void {
        this.show();
        this.$loadScreen.classList.add('end-screen');
    }
}
