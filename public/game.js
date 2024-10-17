import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, headOutsideGrid, headOnBody} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import {soundtrack as playSoundtrack, gameOver as playGameOverAudio} from "./audio.js";
import {configureUserInput} from "./input.js";
import {draw as drawScore, getScore} from "./score.js";

const gameBoard = document.getElementById("gameBoard");
let lastRenderTime = 0
let isGameOver = false

function main(currentTime) {
    if(isGameOver) {
        playGameOverAudio();
        if(confirm(`You lost. Your score: ${getScore()}`)) {
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
    document.getElementById("gameBoard").style.display = 'grid'
    document.getElementById("startButton").style.display = 'none'
    document.getElementById("score").style.display = 'inherit'
    document.getElementById("commands").style.display = 'inherit'

    configureUserInput()
    playSoundtrack();

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
    drawScore()
}

function checkForGameOver() {
    return headOutsideGrid() || headOnBody()
}

document.getElementById("startButton").addEventListener('click', startGame)