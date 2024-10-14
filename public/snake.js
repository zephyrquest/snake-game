import {getSnakeDirection} from "./input.js";

export const SNAKE_SPEED = 5
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

export function grow(amount) {
    for(let i = 0; i < amount; i++) {
        snakeBody.push({... snakeBody[snakeBody.length - 1]})
    }
}

export function onBody(obj) {
    return snakeBody.some(piece => {
        return piece.x === obj.x && piece.y === obj.y
    })
}