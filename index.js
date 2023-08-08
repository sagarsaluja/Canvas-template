/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.font = "50px impact";


const animationLogic = (timestamp) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  timeToNextEvent += deltaTime;
  if (timeToNextEvent > eventThreshold) {
    //some logic here
    timeToNextEvent = 0;
  }
};
const animate = (timestamp) => {
  animationLogic(timestamp);
  if (!gameOver) {
    requestAnimationFrame(animate);
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //cleanup functions here
  }
};
animate(0);
