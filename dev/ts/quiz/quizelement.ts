import Quiz from "./quiz";

export default abstract class QuizElement {
    protected quiz: Quiz;

    public constructor(quiz: Quiz) {
        this.quiz = quiz;
        this.renderTemplate();
        window.addEventListener('translator:languageChange', () => this.renderTemplate());
    }

    abstract renderTemplate(): void;

    abstract renderTemplateDone(): void;
}
