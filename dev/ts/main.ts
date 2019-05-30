import '../scss/style.scss';
import Game from './game';

window.addEventListener('load', async () => {
    const game = new Game();
    (await game.initialize()).start();
});
