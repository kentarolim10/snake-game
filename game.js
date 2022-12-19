import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./snake.js";
import { update as updateFood, draw as drawFood} from "./food.js";
import {outsideGrid} from "./grid.js";
import {update as updateScore, draw as drawScore} from "./score.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
const scoreElement = document.getElementById("score");
let gameOver = false;

function main(currentTime) {

    if (gameOver) {
        if(confirm("Game Over. Press ok to restart")) {
            window.location = '/';
        } 
        return;
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if (secondsSinceLastRender < (1 / SNAKE_SPEED)) return;
    // console.log("render");
    lastRenderTime = currentTime;

    update();
    draw();
}

function update() {
    updateSnake();
    updateFood();
    updateScore();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
    drawScore(scoreElement);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

window.requestAnimationFrame(main);