function platform(x, y, w, h, col, topCol) {
    noStroke();
    // Main Platform
    fill(col);
    rect(x, y, w, h);
    // Platform Top
    fill(topCol);
    rect(x, y, w, 2);
}

function powerUp(x, y, char) {
    // Box
    noStroke();
    fill(0);
    rect(x, y, 20, 20);
    // Text
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text(char, x + 10, y + 16);
}

function spike(x, y, col) {
    // Triangle
    fill(col);
    triangle(x, y, x + 20, y, x + 10, y - 20);
}

function itemBox(x, y, outerCol, innerCol) {
    // Box
    fill(outerCol);
    rect(x, y, 20, 20);

    // Inner Circle
    fill(innerCol);
    ellipse(x + 10, y + 10, 10)
}