// TOP DOWN PLAYER

// Declare Global Variables
let player1;
var isTeleported = true;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);
	
	// Initialize Global Variables
	initVars();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  	// LOGIC
	// Player 1/2 Movement
	player1.move();
	player2.bounce();
		
	// DRAW
	background(140, 197, 66);
	
	// Draw Player 1/2
	player1.show();
	player2.show();

}

function keyPressed() {
		player1.teleport();
}
