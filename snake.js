import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snake = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 },
];
let newSegments = 0;

export function update() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snake.length - 2; i >= 0; i--) {
    snake[i + 1] = { ...snake[i] };
  }

  snake[0].x += inputDirection.x;
  snake[0].y += inputDirection.y;
}

export function render(gameContainer) {
  snake.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameContainer.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position) {
  return snake.some((segment) => {
    return equalPositions(segment, position);
  });
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y == pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snake.push({ ...snake[length - 1] });
  }

  newSegments = 0;
}
