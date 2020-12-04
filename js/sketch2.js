
let t = 0; 

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  fill(2,255,250,100);
}

function draw() {
  background(185,200,213);

  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      const xAngle = map(mouseX, 0, width, -4 * PI, 10* PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 10* PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);
      const myX = x + 20 * cos(6 * PI * t + angle);
      const myY = y + 20 * sin(6 * PI * t + angle);
      ellipse(myX, myY, 20);
    }
  }

  t = t + 0.01; 
}

