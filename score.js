import {getSnakeLength} from "./snake.js";

let score = 1;

export function update(snakeBody) {
    score = getSnakeLength();
}

export function draw(scoreElement) {
    scoreElement.innerHTML = score;
}