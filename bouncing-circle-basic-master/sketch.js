// BOUNCING CIRCLE BASIC
"use strict";

// Declare Global Variables
let xVals, yVals, xSpeed, ySpeed;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

    // Initialize Global Variables
	xVals = [];
	yVals = [];
	xSpeed = [];
	ySpeed = [];
	for (let i = 0; i < 40; i++) {
		xVals.push(random(40, 760));
		yVals.push(random(40, 560));
		xSpeed.push(random(1, 8));
		ySpeed.push(random(3, 5));
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background(180);
	// Draw Circle
	fill("orange");
	noStroke();
	for (let i = 0; i < xVals.length; i++) {
		yVals[i] += ySpeed[i];
		xVals[i] += xSpeed[i];
		if (yVals[i] < 0 || yVals[i] > height) {
			ySpeed[i] = ySpeed[i] * -1;
		}
		if (xVals[i] < 0 || xVals[i] > width) {
			xSpeed[i] = xSpeed[i] * -1;
		}
		ellipse(xVals[i], yVals[i], 40);
	}
}
