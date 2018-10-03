// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 50;
	myArray = [];
	for (let i = 0; i < 50; i++) {
		myArray.push(25);
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC

	// DRAW
	background(225);
	drawArray();

	if (keyIsDown(32)) {
		for (let i = 0; i < myArray.length; i++) {
			myArray.splice(i, 1, 25 + random(-1, 1))
		}
	}
}

function keyPressed() {
	if (keyCode == 82) {
		for (let i = 0; i < myArray.length; i++) {
			myArray.splice(i, 1, 25);
		}
	}
}
