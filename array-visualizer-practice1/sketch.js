// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 160;
	myArray = [];
	for (let n = 0; n < 41; n++) {
		myArray.push(n * 4);
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC

	// DRAW
	background(225);
	drawArray();
}

function keyPressed() {
	if (keyCode == 49) {
		for (let i = 0; i < myArray.length; i++) {
			myArray[i] += 10;
		}
	}
	if (keyCode == 50) {
		for (let i = 0; i < myArray.length; i++) {
			myArray[i] -= 10
		}
	}
}

