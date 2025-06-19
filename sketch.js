const canvasW = 800;
const canvasH = 800;

let amountTracker = 1;
let direction = 1;

const generateButton = document.getElementById("generateButton");

function setup() {
  startLightShow();
  setInterval(startLightShow, 200);
}

function startLightShow() {
  createCanvas(canvasW, canvasH);
  background(0);

  drawLines(amountTracker);
  noStroke();
  // Top triangle
  fill(0, 240);
  triangle(0, 0, canvasW / 2, canvasH / 2, canvasW, 0);

  // Left triangle
  triangle(0, 0, canvasW / 2, canvasH / 2, 0, canvasH);

  // Right triangle
  triangle(canvasW, 0, canvasW / 2, canvasH / 2, canvasW, canvasH);

  strokeWeight(1);
  a = 0;
  b = 0;
  c = 0;
}

function drawLines(amount = 10) {
  let x = 0;
  let lineAmount = amount;
  let loops = canvasW / lineAmount + 2;
  let xLine = canvasW;

  let a = 0,
    b = 0,
    c = 0;

  strokeWeight(0.5);

  for (let i = 0; i < loops; i++) {
    for (let j = 0; j < lineAmount + 1; j++) {
      stroke(a, b, c);
      a += 5;
      b += 5;
      c += 5;
      if (a > 255) a = 0;
      if (b > 255) b = 0;
      if (c > 255) c = 0;

      line(x, 0, xLine, canvasH);
      x += canvasW / lineAmount;
    }
    x = 0;
    xLine -= 50;
  }

  if (amountTracker >= 50) {
    direction = -1;
  } else if (amountTracker <= 1) {
    direction = 1;
  }
  amountTracker += direction;
}
