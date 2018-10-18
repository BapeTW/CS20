// TOP DOWN PLAYER

// Declare Global Variables


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(425, 800);

	// Initialize Global Variables
	gamemap = new Beatmap();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background(0);
	noStroke();

	drawLanes();
	drawHitZones();
	gamemap.show();
}

// Add bars between each lane
function drawLanes() {
	fill(80);
	rect(0, 0, 5, height);
	rect(105, 0, 5, height);
	rect(210, 0, 5, height);
	rect(315, 0, 5, height);
	rect(420, 0, 5, height);
}

// Draw light blue hit zone boxes
function drawHitZones() {
	fill(153, 204, 255);
	rect(5, height - 60, 100, 60);
	rect(110, height - 60, 100, 60);
	rect(215, height - 60, 100, 60);
	rect(320, height - 60, 100, 60);
}