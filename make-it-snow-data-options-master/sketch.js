// MAKE IT SNOW

// Declare Global Variables
let snowFlakes;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

    // Initialize Global Variables
    snowFlakes = [];
    for (let n = 0; n < 50; n++) {
        snowFlakes.push({
            x: random(width),
            y: random(height),
            sz: random(2, 10),
            speed: random(1, 5),
            colR: random(1, 255),
            colG: random(1, 255),
            colB: random(1, 255)
        });
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);
    noStroke();
    for (let i = 0; i < snowFlakes.length; i++) {
        // Move Snowflakes
        snowFlakes[i].y += snowFlakes[i].speed;
        if (snowFlakes[i].y > height + 20) {
            snowFlakes[i].y = random(-50, 0);
            snowFlakes[i].x = random(width);
        }
        // Draw Snowflakes
        fill(snowFlakes[i].colR, snowFlakes[i].colG, snowFlakes[i].colB);
        ellipse(snowFlakes[i].x, snowFlakes[i].y, 2 * snowFlakes[i].sz);
    }

}