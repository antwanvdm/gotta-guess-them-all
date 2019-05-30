import config from '../config.json';

export default class Timer {
    private readonly totalSeconds: number = config.game.secondsPerQuestion;
    private _seconds: number = this.totalSeconds;
    private intervalId: number;
    private progressbarIntervalId: number;
    private progressbarStartTime: number;
    private $progress: HTMLElement;
    private performanceStamp: number;

    get seconds(): number {
        return this._seconds;
    }

    set seconds(value: number) {
        this._seconds = value;
    }

    constructor() {
        this.$progress = document.getElementById('progress');
        window.addEventListener('quiz:questionDone', () => this.destroy());
    }

    public start(): void {
        this.$progress = document.getElementById('progress'); // Only here due to translation @todo
        this.intervalId = setInterval(() => this.update(), 1000);
        this.progressbarIntervalId = setInterval(() => this.updateProgressbar(), 10);
        this.progressbarStartTime = new Date().getTime();
        this.performanceStamp = window.performance.now();
    }

    private update(): void {
        this.seconds--;

        if (this.seconds === 0) {
            window.dispatchEvent(new Event('timer:done'));
        }
    }

    private updateProgressbar(): void {
        let duration = this.totalSeconds * 1000;
        let diff = new Date().getTime() - this.progressbarStartTime;
        let value = diff / duration * 100;

        value = value > 100 ? 100 : value;
        this.$progress.setAttribute('value', value.toString());
    }

    public destroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            clearInterval(this.progressbarIntervalId);
        }
    }

    public restart(): void {
        this.destroy();
        this.seconds = this.totalSeconds;
        this.$progress.setAttribute('value', '0');
        this.start();
    }
}
