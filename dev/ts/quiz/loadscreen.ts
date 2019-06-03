import config from '../config.json';
import Translator from "../helpers/translator";
import QuizElement from "./quizelement";

export default class LoadScreen extends QuizElement {
    renderTemplate(): void {
        let $template = `
            <section id="pageloader" class="pageloader is-warning">
                <span data-ml data-ml-key="loading" class="title"></span>
            </section>
        `;

        this.quiz.$main.insertAdjacentHTML('beforeend', $template);
        this.renderTemplateDone();
    }

    renderTemplateDone(): void {
        setTimeout(() => {
            this.$element = document.getElementById("pageloader");
            this.renderProperties();
        }, 0);
    }

    public show(): void {
        this.$element.classList.add('is-active');
    }

    public hide(): void {
        this.$element.classList.remove('is-active');
    }

    public triggerNewQuestion(): void {
        this.show();
        setTimeout(() => {
            this.hide();
            window.dispatchEvent(new CustomEvent('quiz:questionNew'))
        }, config.game.loadScreenActiveTimeOut);
    }

    public changeTitle(value: string): void {
        this.$element.querySelector('.title').innerHTML = value;
    }

    /**
     * @param status
     */
    public setStatus(status: string): void {
        this.$element.classList.remove('is-warning', 'is-success', 'is-danger', 'is-primary');
        this.$element.classList.add(`is-${status}`);
    }

    public markEnd(): void {
        this.show();
        this.$element.classList.add('end-screen');
    }
}
