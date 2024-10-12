import {getSnakeDirection} from "./input.js";

export const SNAKE_SPEED = 1
const snakeBody =
    [
        {x: 11, y: 11}
    ]

export function update() {
    for(let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i].x = snakeBody[i - 1].x
        snakeBody[i].y = snakeBody[i - 1].y
    }

    const snakeDirection = getSnakeDirection()
    snakeBody[0].x += snakeDirection.x;
    snakeBody[0].y += snakeDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(piece => {
        const pieceElement = document.createElement('div')
        pieceElement.classList.add('snake')
        pieceElement.style.gridColumnStart = piece.x
        pieceElement.style.gridRowStart = piece.y

        gameBoard.appendChild(pieceElement)
    })
}