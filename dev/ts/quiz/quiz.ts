import Timer from "./timer";
import Score from "./score";
import GuessForm from "./guessform";
import LoadScreen from "./loadscreen";
import InitialScreen from "./initialscreen";
import Translator from "../helpers/translator";

export default class Quiz {
    public $main: HTMLElement;
    private totalQuestions: number = 0;
    private currentQuestion: number = 0;
    private initialScreen: InitialScreen;
    private guessForm: GuessForm;
    private loadScreen: LoadScreen;
    private timer: Timer;
    private score: Score;
    private guessedPokemon: string;

    /**
     * @todo This class combined with InitialScreen, GuessForm and LoadScreen should probably be refactored a little..
     */
    constructor() {
        this.$main = document.getElementById('main');
        this.initialScreen = new InitialScreen(this);
        this.guessForm = new GuessForm(this);
        this.loadScreen = new LoadScreen(this);

        this.timer = new Timer();
        window.addEventListener('pokemon:spawn', (e) => this.startQuestion(e));
        window.addEventListener('timer:done', () => this.timerDone());
    }

    /**
     * Handler for the form
     *
     * @param e
     */
    public initialFormSubmitHandler(e: Event): void {
        e.preventDefault();
        this.totalQuestions = parseInt((document.getElementById('pokemon-guess-amount') as HTMLInputElement).value);
        window.dispatchEvent(new CustomEvent('quiz:start', {detail: {amount: this.totalQuestions}}));

        this.initialScreen.remove();
        document.getElementById("initial").classList.remove('is-active');

        this.score = new Score();
        this.loadScreen.triggerNewQuestion();
    }

    /**
     * @param e
     */
    private startQuestion(e: Event): void {
        this.currentQuestion++;
        this.timer.restart();
        this.guessedPokemon = (e as CustomEvent).detail.pokemonName;
        this.guessForm.show();
    }

    private timerDone(): void {
        this.guessForm.hide();

        if (this.currentQuestion === this.totalQuestions) {
            this.endScreen();
            return;
        }

        this.loadScreen.changeTitle(Translator.i().t('wrongAnswer', {pokemon: this.guessedPokemon}));
        this.loadScreen.setStatus('danger');
        this.loadScreen.triggerNewQuestion();
    }

    public handleAnswer(): void {
        if (this.guessedPokemon !== this.guessForm.getCurrentValue()) {
            return;
        }

        this.guessForm.hide();
        this.score.value++;
        window.dispatchEvent(new CustomEvent('quiz:questionDone'));

        if (this.currentQuestion === this.totalQuestions) {
            this.endScreen();
            return;
        }

        this.loadScreen.changeTitle(Translator.i().t('goodAnswer'));
        this.loadScreen.setStatus('success');
        this.loadScreen.triggerNewQuestion();
    }

    private endScreen(): void {
        let maxScore = this.score.getMax(this.totalQuestions);
        this.loadScreen.changeTitle(Translator.i().t('endMessage', {
            score: this.score.value.toString(),
            maxScore: maxScore.toString()
        }));
        this.loadScreen.setStatus('primary');
        this.loadScreen.markEnd();
    }
}
