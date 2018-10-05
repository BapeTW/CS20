// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 15;
	myArray = [10, 5, 5, 10, 5, 5, 5, 10, 5, 5, 5, 5, 10];
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
		for (let i = myArray.length - 1; i >= 0; i--) {
			if (myArray[i] == 10) {
				myArray.splice(i, 1);
				console.log(myArray);
			}
		}
	}
	if (keyCode == 50) {
		for (let i = myArray.length - 1; i >= 0; i--) {
			if (myArray[i] == 5) {
				myArray.splice(i, 1);
				console.log(myArray);
			}
		}
	}
}

