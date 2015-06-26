var squareObj = {

	color: "#FFFFFF",
	x: 0,
	y: 0,
	width: 0,
	length: 0,

	draw: function() {
		drawSquare(this.x, this.y, this.width, this.length, this.color);
	}

}

var cubeObj = {

	color: "#FFFFFF",
	x: 0,
	y: 0,
	width: 0,
	height: 0,

	draw: function() {
		drawCube(this.x, this.y, 0, this.width, this.height, this.width, this.color);
	}

}

var turtleObj = {

	x: 0,
	y: 0,
	z: 10,
	width: 18,
	height: 12,
	direction: "left",
	headColor: "#663300",
	tailColor: "#663300",
	bodyColor: "#339933",

	draw: function() {
		if (this.direction == "down") {
			this.drawTailTall(this.x, this.y + 13.5);
			this.drawBody(this.x, this.y);
			this.drawHead(this.x, this.y - 11.25);
		} else if (this.direction == "up") {
			this.drawHead(this.x, this.y + 13.5);
			this.drawBody(this.x, this.y);
			this.drawTailTall(this.x, this.y - 11.25);
		} else if (this.direction == "left") {
			this.drawHead(this.x - 13.5, this.y);
			this.drawBody(this.x, this.y);
			this.drawTailTall(this.x + 11.25, this.y);
		} else if (this.direction == "right") {
			this.drawTailTall(this.x - 11.25, this.y);
			this.drawBody(this.x, this.y);
			this.drawHead(this.x + 13.5, this.y);
		}
	},

	drawHead: function(x, y) {
		drawCube(x, y, this.z, this.width / 2, this.width / 2, this.width / 2, this.headColor);
	},

	drawBody: function(x, y) {
		drawCube(x, y, this.z, this.width, this.height, this.width, this.bodyColor);
	},

	drawTailTall: function(x, y) {
		drawCube(x, y, this.z, this.width / 4, this.width / 4, this.width / 4, this.tailColor);
	},

	drawTailWide: function(x, y) {
		drawCube(x, y, this.z, this.width / 2, this.width / 2, this.width / 2, this.tailColor);
	}

}

var wallObj = {

	x: 0,
	y: 0,
	width: 120,
	height: 10,
	direction: "horizontal",
	color: "#AA0000",

	draw: function() {
		if (this.direction == "horizontal") {
			drawCube(this.x, this.y, 0, this.width, this.height, 10, this.color);
		}
	}

}