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

export function headOutsideGrid() {
    const snakeHead = snakeBody[0]
    return snakeHead.x < 1 || snakeHead.x > 21
        || snakeHead.y < 1 || snakeHead.y > 21
}

export function headOnBody() {
    return snakeBody.some((piece, index) => {
        if(index === 0 || snakeBody.length === 2) {
            return false
        }
        return piece.x === snakeBody[0].x && piece.y === snakeBody[0].y
    })
}