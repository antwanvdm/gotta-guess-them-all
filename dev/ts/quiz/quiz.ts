import Timer from "./timer";
import Score from "./score";
import GuessForm from "./guessform";
import LoadScreen from "./loadscreen";
import InitialScreen from "./initialscreen";

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

        this.loadScreen.changeTitle(`Nope! This Pokémon was ${this.guessedPokemon}! New Pokémon incoming!`);
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

        this.loadScreen.changeTitle('That\'s as good as it gets! New Pokémon incoming!');
        this.loadScreen.setStatus('success');
        this.loadScreen.triggerNewQuestion();
    }

    private endScreen(): void {
        let maxScore = this.score.getMax(this.totalQuestions);
        this.loadScreen.changeTitle(`Thanks for playing, your total score is: ${this.score.value} / ${maxScore}`);
        this.loadScreen.setStatus('primary');
        this.loadScreen.markEnd();
    }
}
