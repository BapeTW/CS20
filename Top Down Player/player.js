function initVars() {
	player1 = {
		// Properties (STATE)
		x: width / 2,
		y: height / 2,
		r: 15,
		speed: 5,
		col: 80,
		// Methods (BEHAVIOUR)
		move: function () {
			if (keyIsDown(LEFT_ARROW)) {
				this.x += -this.speed;
			} else if (keyIsDown(RIGHT_ARROW)) {
				this.x += this.speed;
			} else if (keyIsDown(UP_ARROW)) {
				this.y += -this.speed;
			} else if (keyIsDown(DOWN_ARROW)) {
				this.y += this.speed;
			}
		},
		show: function () {
			fill(this.col);
			noStroke();
			ellipse(this.x, this.y, 2 * this.r);
		},
		teleport: function () {
			if (keyCode == 32) {
				this.x = Math.random() * 750 + this.r;
				this.y = Math.random() * 550 + this.r;
			}
		}
	};

	player2 = {
		// Properties (STATE)
		x: width / 3,
		y: height / 3,
		r: 15,
		xSpeed: 5,
		ySpeed: 5,
		col: 140,
		// Methods (BEHVIOUR)
		show: function () {
			fill(this.col);
			stroke(0);
			ellipse(this.x, this.y, 2 * this.r);
		},
		bounce: function () {
			this.x += this.xSpeed
			this.y += this.ySpeed
			if (this.x + this.r > width || this.x - this.r < 0) {
				this.xSpeed = -this.xSpeed;
			}

			if (this.y + this.r > height || this.y - this.r < 0) {
				this.ySpeed = -this.ySpeed;
			}
		}
	}

}