import {
  update as updateSnake,
  render as renderSnake,
  SNAKE_SPEED,
} from "./snake.js";
let lastRenderTime = 0;
const gameContainer = document.getElementById("game-container");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log("Render");
  lastRenderTime = currentTime;

  update();
  render();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function render() {
  renderSnake(gameContainer);
}
