import Quiz from "./quiz";
import MultilingualElement from "../helpers/multilingualelement";

export default abstract class QuizElement extends MultilingualElement {
    protected quiz: Quiz;

    public constructor(quiz: Quiz) {
        super();
        this.quiz = quiz;
        this.renderTemplate();
    }

    abstract renderTemplate(): void;

    abstract renderTemplateDone(): void;
}
