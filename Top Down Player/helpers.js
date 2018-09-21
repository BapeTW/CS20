function gameLogic() {
    player1.move();
    player2.move();
    bounce1.bounce();
    bounce2.bounce();
    bounce3.bounce();
    bounce4.bounce();
    checkPlayerBallCollision();
}

function drawGame() {
    player1.show();
    player2.show();
    bounce1.show();
    bounce2.show();
    bounce3.show();
    bounce4.show();
}

function drawStartScreen() {
    background(255);
    textSize(40);
    fill(0);
    textAlign(CENTER);
    text("CLICK TO START", width / 2, 300);
}

function drawGameOverP1() {
    background(0);
    fill(255);
    text("BLACK CIRCLE WINS", width / 2, 300);
    text("CLICK TO PLAY AGAIN", width / 2, 400);
}

function drawGameOverP2() {
    background(255);
    fill(0);
    text("WHITE CIRCLE WINS", width / 2, 300);
    text("CLICK TO PLAY AGAIN", width / 2, 400);
}

function checkPlayerBallCollision() {
    //Check P1
    if (circleIntersect(player1, bounce1) || circleIntersect(player1, bounce2) ||
        circleIntersect(player1, bounce3) || circleIntersect(player1, bounce4)) {
        gameState = "gameOverP1";
    }

    if (circleIntersect(player2, bounce1) || circleIntersect(player2, bounce2) ||
        circleIntersect(player2, bounce3) || circleIntersect(player2, bounce4)) {
        gameState = "gameOverP2";
    }
}