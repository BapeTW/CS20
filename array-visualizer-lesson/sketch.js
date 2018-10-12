// SIMPLE ARRAY VISUALIZER

// Declare Global Variables
let myArray;
let yMin, yMax;
let randColorR;
let randColorG;
let randColorB;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	yMin = 0;
	yMax = 100;
	myArray = [];
	for (let n = 0; n < 50; n++) {
		myArray.push(random(100));
	}
	randColorR = random(255);
	randColorB = random(255);
	randColorG = random(255);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC

	// REPEATED LOOP SPLICING INTO/OUT OF ARRAY FROM MIDDLE
	// if (keyIsDown(UP_ARROW)) {
	// 	// Add element to a specific index (middle)
	// 	let middleIndex = Math.floor(myArray.length / 2);
	// 	myArray.splice(middleIndex, 0, random(25));
	// } else if (keyIsDown(DOWN_ARROW)) {
	// 	// Remove element from a specific index (middle)
	// 	let middleIndex = Math.floor(myArray.length / 2);
	// 	myArray.splice(middleIndex, 1);
	// }

	// DRAW
	background(225);
	drawArray();
}

// EVENT FUNCTION 
function keyPressed() {
	// BASIC ARRAY FUNCS
	if (keyCode == UP_ARROW) {
		// Add element to the end of the array
		// myArray.push(random(25));

		// Add element to the beginning of the array
		// myArray.unshift(random(25));

		// Add element to a specific index (middle)
		// let middleIndex = Math.floor(myArray.length / 2);
		// myArray.splice(middleIndex, 0, random(25));
	} else if (keyCode == DOWN_ARROW) {
		// Remove element from end of the array
		// let lastEl = myArray.pop();
		// console.log(lastEl);

		// Remove element from the beginning of the array
		// let firstEl = myArray.shift();
		// console.log(firstEl)

		// Remove element from a specific index (middle)
		// let middleIndex = Math.floor(myArray.length / 2);
		// myArray.splice(middleIndex, 1);
	}

	// LOOPS TO ADD TO ARRAYS
	// COUNT HOW MANY ELEMENTS IN THE ARRAY HAVE VALUES LESS THAN 50
	let count = 0;

	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i] < 50) {
			count++;
		}
	}
	console.log(`Number of elements less than 50 is ${count}`)
}
