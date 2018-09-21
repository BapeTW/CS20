// TOP DOWN PLAYER

// Declare Global Variables
let player1, player2;
var gameState = "start"

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 600);

	// Initialize Global Variables
	38, 40, 37, 39,
	player1 = new TopDownPlayer(100, 300, 255, 87, 83, 65, 68, 84);
	player2 = new TopDownPlayer(700, 300, 0, 38, 40, 37, 39, 32);
	bounce1 = new BouncingCircle(200);
	bounce2 = new BouncingCircle(300);
	bounce3 = new BouncingCircle(400);
	bounce4 = new BouncingCircle(500);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	if (gameState == "start") {
		drawStartScreen();
	} else if (gameState == "gameOn") {
		background(140, 197, 66);
		gameLogic();
		drawGame();
	} else if (gameState == "gameOverP1") {
		drawGameOverP1();
	} else if (gameState == "gameOverP2") {
		drawGameOverP2();
	}
}

function keyPressed() {
	player1.teleport();
	player2.teleport();
}

function mousePressed() {
	if (gameState == "start") {
		gameState = "gameOn";
	} else if (gameState == "gameOverP1" || gameState == "gameOverP2") {
		setup();
		gameState = "start";
	}
}