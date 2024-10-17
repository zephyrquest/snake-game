let score = 0
const scoreElement = document.getElementById("score")

export function getScore() {
    return score
}

export function increaseScore(amount) {
    score += amount
}

export function draw() {
    scoreElement.innerText = `Score: ${score}`
}