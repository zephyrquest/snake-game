const eatFoodAudio = new Audio("resources/audio/eat.wav");
const gameOverAudio = new Audio("resources/audio/game-over.wav")

const soundtrackAudio = new Audio("resources/audio/soundtrack.mp3");
soundtrackAudio.loop = true;

export function eatFood() {
    eatFoodAudio.play();
}

export function gameOver() {
    gameOverAudio.play();
}

export function soundtrack() {
    soundtrackAudio.play();
}