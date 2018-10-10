// PLATFORMER LIBRARY

// Declare Global Variables
let player1;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
	
	// Initialize Global Variables
	initPlayer1();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	movePlayer1();
	
	// DRAW
    background(GREEN);
	drawPlayer1();

	platform(200, 300, 150, 20, GREY, RED);
	platform(400, 500, 220, 20, GREY, ORANGE);

	powerUp(560, 480, "?");
	spike(260, 300, GREY);
	itemBox(430, 480, GREY, ORANGE);
}

// EVENT FUNCTIONS
function keyPressed() {
	jumpPlayer1();
}
