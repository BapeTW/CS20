// INVADER BLOCK BASIC
"use strict";

// Declare Global Variables
let x, y, xSpeed, invaderBlocks;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

    // Initialize Global Variables
	x = 50;
	y = 50;
	xSpeed = 2;

	invaderBlocks = [];
	xSpeed = [];
	for (let i = 0; i < 21; i++) {
		if (x < width - 100) {
			invaderBlocks.push([x, y])
			x = x + 100;
		}
		if (x == 750) {
			y = y + 100;
			x = 50;
		}
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(50);
	
	// Move & Bounce
	
	
	// Draw Block
	noFill();
	stroke("orange");
	for (let i = 0; i < invaderBlocks.length; i++) {
		if (invaderBlocks[i][0] < 0 || invaderBlocks[i][0] + 50 > width) {
			xSpeed = -xSpeed; // Change direction	 
			;// Shift down
			invaderBlocks[i][1] += 50;
		}
		invaderBlocks[i][0] += xSpeed
		
	}
	rect(invaderBlocks[i][0], invaderBlocks[i][1], 50, 50);

}
