let angle = 0;
let scaling = 1;

function setup() {
  createCanvas();
  textSize(12);
}

function draw() {
  background(0);

  if (keyIsDown(' ')) angle += 0.05;

  if (mouseIsPressed && mouseY >= height / 2) { 
    if (scaling < 5) scaling *= 1.1;
  }
  else if (mouseIsPressed && mouseY < height / 2) {
    if (scaling < 5) scaling *= 1.1;
    angle += 0.05;
  }
  else if (scaling > 1) scaling /= 1.1;

  if (!(mouseIsPressed && mouseY < height / 2)) translate(mouseX, mouseY);
  rotate(angle);
  scale(scaling);
	
  for (let i = -40; i <= 40; i++) {
    for (let j = -10; j <= 10; j++) {
      let f = frameCount * 0.001 * i * j;
      let r = 0.5 + 0.5 * sin(f + mouseX / 100);
      let g = 0.5 + 0.5 * sin(f + mouseY / 100);
      let b = 0.5 + 0.5 * sin(f);
      fill(r, g, b);

      let x = j * 80;
      let y = i * 20;
      text('Hello, World!', x, y);
    }
  }
}

try {
  Q5.webgpu();
} catch (error) {
  push();
  background(10);
  fill(250);
  noStroke();
  textSize(10);
  // textWrap(WORD);
  textAlign(CENTER, CENTER);
  // text(error, width / 2, height / 10, width * 0.9);
  text(error, width / 2, height / 10);
  pop();
  noLoop();
  setTimeout( () => { loop() }, 5000 );
}

