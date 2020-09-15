import { canvas, ctx, ballSize } from './constants.js';

// import Ball from './Ball.js';
import Background from './Background.js';
import Generator from './BallGenerator.js';

// set canvas to fullscreen
(function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
})();

const background = new Background();
const ballGenerator = new Generator();
// const test = new Test();

const pos = {
  maxX: canvas.width - ballSize,
  maxY: 600,
  x: undefined,
  y: undefined,
};

function start() {
  window.requestAnimationFrame(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    ballGenerator.draw();
    start();
  });
}

start();
