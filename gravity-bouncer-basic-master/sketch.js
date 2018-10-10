// GRAVITY BOUNCER - BASIC
"use strict";

// Declare Global Variables
let x, y, r, ySpeed, a, launchSpeed;
let gravityBouncers;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

    // Initialize Global Variables
	gravityBouncers = [];
	for (let i = 0; i < 50; i++) {
		gravityBouncers.push({
			x: random(25, width - 25),
			y: random(25, height - 25),
			r: random(10, 30),
			ySpeed: 0,
			a: 0.5,
			launchSpeed: random(-10, -24)
		})
	}
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background("orange");
	
	// Move & Bounce
	for (let i = 0; i < gravityBouncers.length; i++) {
		gravityBouncers[i].y += gravityBouncers[i].ySpeed; //Move
		gravityBouncers[i].ySpeed += gravityBouncers[i].a; //Accelerate
		if (gravityBouncers[i].y + gravityBouncers[i].r > height) {
			gravityBouncers[i].ySpeed = gravityBouncers[i].launchSpeed; //Bounce
		}
		fill(100);
		ellipse(gravityBouncers[i].x, gravityBouncers[i].y, gravityBouncers[i].r)
	}
}
