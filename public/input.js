let snakeCurrentDirection = {x: 0, y: 0}

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            if(snakeCurrentDirection.y === 0) {
                snakeCurrentDirection = {x: 0, y: -1}
            }
            break
        case 's':
            if(snakeCurrentDirection.y === 0) {
                snakeCurrentDirection = {x: 0, y: 1}
            }
            break
        case 'a':
            if(snakeCurrentDirection.x === 0) {
                snakeCurrentDirection = {x: -1, y: 0}
            }
            break
        case 'd':
            if(snakeCurrentDirection.x === 0) {
                snakeCurrentDirection = {x: 1, y: 0}
            }
            break
    }
})

export function getSnakeDirection() {
    return snakeCurrentDirection
}