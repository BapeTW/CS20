// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 100;
	myArray = [];
	for (let i = 0; i < 30; i++) {
		myArray.push(random(100))
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
	let count = 0;
	let prevCount = 0;
	let prevTotal = 0;

	if (keyCode == 49) {
		for (let i = 0; i < myArray.length; i++) {
			if (myArray[i] < 50) {
				count++
			}
		}
		console.log(count);
	}
	if (keyCode == 50) {
		for (let i = 0; i < myArray.length; i++) {
			if (myArray[i] < 50) {
				myArray.splice(i, 1, 50);
			}
		}
	}
	if (keyCode == 51) {
		for (let i = 0; i < myArray.length; i++) {
			if (myArray[i] > prevCount) {
				prevCount = myArray[i];
			}
		}
		console.log(prevCount);
	}
	if (keyCode == 52) {
		for (let i = 0; i < myArray.length; i++) {
			prevTotal = myArray[i] + prevTotal;
		}
		prevTotal = prevTotal / myArray.length;
		console.log(prevTotal);
	}
}