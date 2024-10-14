import {onBody as onBodySnake, grow as growSnake} from "./snake.js"

let food = {x: 3, y: 4}

export function update() {
    if(onBodySnake(food)) {
        growSnake(1)
        food = generateRandomPosition()
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.classList.add('food')
    foodElement.style.gridColumnStart = food.x
    foodElement.style.gridRowStart = food.y

    gameBoard.appendChild(foodElement)
}

function generateRandomPosition() {
    let newPosition = {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }

    while(onBodySnake(newPosition)) {
        newPosition = {
            x: Math.floor(Math.random() * 21) + 1,
            y: Math.floor(Math.random() * 21) + 1
        }
    }

    return newPosition
}