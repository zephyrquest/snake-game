import {SNAKE_SPEED, update as updateSnake, draw as drawSnake} from "./snake.js";

const gameBoard = document.getElementById("gameBoard");
let lastRenderTime = 0

function main(currentTime) {
    window.requestAnimationFrame(main);
    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if(secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return
    }

    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main);

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
}