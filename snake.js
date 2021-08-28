import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 1;
const snake = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 },
];

export function update() {
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
