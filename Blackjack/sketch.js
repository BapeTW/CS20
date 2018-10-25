// TOP DOWN PLAYER

// Declare Global Variables


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(800, 800);
	
	// Initialize Global Variables
	deck1 = new Deck();
	
	console.log(deck1);
	document.getElementById("shuffleButton").addEventListener("click", function() {
		deck1.shuffle();
	});

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background(255);

}
