import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, headOutsideGrid, headOnBody} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import {soundtrack as playSoundtrack, gameOver as playGameOverAudio} from "./audio.js";

const gameBoard = document.getElementById("gameBoard");
let lastRenderTime = 0
let isSoundtrackPlaying = false
let isGameOver = false

function main(currentTime) {
    if(isGameOver) {
        playGameOverAudio();
        if(confirm('You lost. Press ok to restart')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main);
    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if(secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return
    }

    lastRenderTime = currentTime;

    update()
    draw()
}

function startGame() {
    if (!isSoundtrackPlaying) {
        //playSoundtrack();
        isSoundtrackPlaying = true
    }

    window.requestAnimationFrame(main)
}

function update() {
    updateSnake()
    updateFood()
    if(checkForGameOver()) {
        isGameOver = true
    }
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkForGameOver() {
    return headOutsideGrid() || headOnBody()
}

startGame()