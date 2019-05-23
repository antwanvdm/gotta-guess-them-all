import Timer from "./timer";
import Score from "./score";

export default class Quiz {
    private $initialForm: HTMLFormElement;
    private totalQuestions: number = 0;
    private currentQuestion: number = 0;
    private $guessForm: HTMLFormElement;
    private $guessFormInput: HTMLInputElement;
    private timer: Timer;
    private score: Score;
    private $loadScreen: HTMLElement;
    private guessValue: string;

    constructor() {
        this.$initialForm = document.getElementById('form-pokemon-initial') as HTMLFormElement;
        this.$initialForm.addEventListener('submit', (e) => this.initialFormSubmitHandler(e));

        this.$loadScreen = document.getElementById("pageloader");
        this.timer = new Timer();
        window.addEventListener('pokemon:spawn', (e) => this.startQuestion(e));
        window.addEventListener('timer:done', () => this.timerDone());

        this.$guessForm = document.getElementById('form-pokemon-guess') as HTMLFormElement;
        this.$guessFormInput = document.getElementById('pokemon-guess-name') as HTMLInputElement;
        this.$guessForm.addEventListener('submit', (e) => this.guessFormSubmitHandler(e));
        this.$guessFormInput.addEventListener('keyup', () => this.handleAnswer());
    }

    /**
     * Handler for the form
     *
     * @param e
     */
    private initialFormSubmitHandler(e: Event): void {
        e.preventDefault();
        this.totalQuestions = parseInt((document.getElementById('pokemon-guess-amount') as HTMLInputElement).value);
        window.dispatchEvent(new CustomEvent('quiz:start', {detail: {amount: this.totalQuestions}}));

        this.$initialForm.remove();
        document.getElementById("initial").classList.remove('is-active');

        this.score = new Score();
        this.$loadScreen.classList.add('is-active');
        setTimeout(() => {
            this.$loadScreen.classList.remove('is-active');
            window.dispatchEvent(new CustomEvent('quiz:questionNew'))
        }, 2000);
    }

    /**
     * @param e
     */
    private startQuestion(e: Event): void {
        this.currentQuestion++;
        this.timer.restart();
        this.guessValue = (e as CustomEvent).detail.pokemonName;
        this.$guessForm.classList.remove('is-hidden');

        this.$guessFormInput.value = "";
        this.$guessFormInput.focus();
    }

    private timerDone(): void {
        this.$guessForm.classList.add('is-hidden');

        if (this.currentQuestion === this.totalQuestions) {
            this.endScreen();
            return;
        }

        this.$loadScreen.querySelector('.title').innerHTML = 'Nope! This Pokémon was ' + this.guessValue + '! New Pokémon incoming!';
        this.$loadScreen.classList.remove('is-warning', 'is-success');
        this.$loadScreen.classList.add('is-danger');
        this.loadNewQuestion();
    }

    private handleAnswer(): void {
        if (this.guessValue !== this.$guessFormInput.value) {
            return;
        }

        this.$guessForm.classList.add('is-hidden');
        this.score.value++;
        window.dispatchEvent(new CustomEvent('quiz:questionDone'));

        if (this.currentQuestion === this.totalQuestions) {
            this.endScreen();
            return;
        }

        this.$loadScreen.querySelector('.title').innerHTML = 'That\'s as good as it gets! New Pokémon incoming!';
        this.$loadScreen.classList.remove('is-warning', 'is-danger');
        this.$loadScreen.classList.add('is-success');
        this.loadNewQuestion();
    }

    private loadNewQuestion(): void {
        this.$loadScreen.classList.add('is-active');

        setTimeout(() => {
            this.$loadScreen.classList.remove('is-active');
            window.dispatchEvent(new CustomEvent('quiz:questionNew'))
        }, 2000);
    }

    /**
     * @param e
     */
    private guessFormSubmitHandler(e: Event): void {
        e.preventDefault();
        this.handleAnswer();
    }

    private endScreen(): void {
        let maxScore = this.score.getMax(this.totalQuestions);
        this.$loadScreen.querySelector('.title').innerHTML = `Thanks for playing, your total score is: ${this.score.value} / ${maxScore}`;
        
        this.$loadScreen.classList.remove('is-success', 'is-danger');
        this.$loadScreen.classList.add('is-primary', 'end-screen');
        this.$loadScreen.classList.add('is-active');
    }
}
