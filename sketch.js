let angle = 0;
let scaling = 1;

function setup() {
	createCanvas();
	textSize(12);
}

function draw() {
	background(0);

	if (keyIsDown(' ')) angle += 0.05;

	if (mouseIsPressed) {
		if (scaling < 5) scaling *= 1.1;
	} else if (scaling > 1) scaling /= 1.1;

	translate(mouseX, mouseY);
	rotate(angle);
	scale(scaling);

	for (let i = -40; i <= 40; i++) {
		for (let j = -10; j <= 10; j++) {
			/* unique color */
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

Q5.webgpu();
