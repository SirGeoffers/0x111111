var square = {

	color: "#FFFFFF",
	x: 0,
	y: 0,
	width: 0,
	length: 0,

	draw: function() {
		drawSquare(this.x, this.y, this.width, this.length, this.color);
	}

}

var cube = {

	color: "#FFFFFF",
	x: 0,
	y: 0,
	width: 0,
	height: 0,

	draw: function() {
		drawCube(this.x, this.y, this.width, this.height, this.width, this.color);
	}

}