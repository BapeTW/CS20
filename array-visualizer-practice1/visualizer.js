function drawArray() {
	// Calculate Relative Zero
	let zeroY = map(0, yMin, yMax, height, 0);

	// Draw Bars
	fill(255, 153, 0);
	stroke(80);
	strokeWeight(1);
	let w = width / myArray.length; // Calc width of bar based on # of elements
	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i] > 0) { // Positive Values
			valueY = map(myArray[i], 0, yMax, zeroY, 0);
			rect(i * w, valueY, w, zeroY - valueY);
		} else { // Negative Values
			valueY = map(myArray[i], yMin, 0, height, zeroY);
			rect(i * w, zeroY, w, valueY - zeroY);
		}
	}

	// Draw Zero Line if necessary
	if (zeroY <= height) {
		stroke(0);
		strokeWeight(3);
		line(0, zeroY, width, zeroY);
	}

	// Text for zero, yMin & yMax
	textSize(16);
	fill(0);
	strokeWeight(1);
	text(0, 2, zeroY - 2);
	text(yMin, 2, height - 2);
	text(yMax, 2, 18);
}
