export const SNAKE_SPEED = 1
const snakeBody =
    [
        {x: 11, y: 11},
        {x: 11, y: 12},
        {x: 11, y: 13},
        {x: 12, y: 13},
        {x: 13, y: 13},
        {x: 14, y: 13},
        {x: 15, y: 13}
    ]

export function update() {
    for(let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i].x = snakeBody[i - 1].x
        snakeBody[i].y = snakeBody[i - 1].y
    }

    snakeBody[0].x += 0;
    snakeBody[0].y -= 1;
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