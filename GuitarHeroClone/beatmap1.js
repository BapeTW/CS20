class Beatmap {
    constructor() {
        this.note1 = new NoteBuilder(1, 200, 120, 5);
    }

    show() {
        this.note1.show();
    }
}