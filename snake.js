export const SNAKE_SPEED = 1;
const snake = [{ x: 11, y: 11 }];

export function update() {}

export function render(gameContainer) {
  snake.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    snakeElement.classList.add("snake");
    gameContainer.appendChild(snakeElement);
  });
}
