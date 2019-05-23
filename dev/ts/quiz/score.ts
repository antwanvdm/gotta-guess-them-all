import config from '../config.json';

export default class Score extends HTMLElement {
    private _value: number = 0;
    private incrementValue: number = config.game.scorePerQuestion;

    get value(): number {
        return this._value;
    }

    /**
     * Override default ++ behaviour by incrementing score with custom value
     *
     * @param _value
     */
    set value(_value: number) {
        this._value = (this._value += this.incrementValue);
        this.innerText = this._value.toString();
    }

    constructor() {
        super();
        document.getElementById('main').appendChild(this);
        this.innerText = this._value.toString();
    }

    /**
     * @param totalQuestions
     * @return number
     */
    public getMax(totalQuestions: number): number {
        return this.incrementValue * totalQuestions;
    }
}

window.customElements.define('cp-score', Score);
