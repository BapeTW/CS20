// Everyting Notes, building them and placing them. Values taken from the beatmap file

// Define basics of the note and values to build from
class NoteBuilder {
    // Properties of the note, take in a noteLane and noteLength
    constructor(noteLane, noteLength, noteTime, mapSpeed) {
        // Define properties
        this.noteTVal = noteTime;
        this.length = noteLength;
        this.ySpeed = mapSpeed;
        this.y = 0 - this.length;
        // Set X position of note based on noteLane (with 5 pixel border around note)
        if (noteLane == 1) {
            this.x = 5;
        } else if (noteLane == 2) {
            this.x = 110;
        } else if (noteLane == 3) {
            this.x = 215;
        } else {
            this.x = 320;
        }
        
    }
    // Behaviours of the notes

    // Draw the note on the screen from defined values
    show() {
        fill(255);
        rect(this.x, this.y, 100, this.length);
        this.y += this.ySpeed;
    }
}