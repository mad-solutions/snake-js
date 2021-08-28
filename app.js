let lastRenderTime = 0;
const SNAKE_SPEED = 1;

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

function update() {}

function render() {}
