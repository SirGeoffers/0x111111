var FPS = 30;
var canvasElement = $("<canvas width='" + window.innerWidth +
						"' height='" + window.innerHeight + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');

var screenX = -window.innerWidth/2;
var screenY = -window.innerHeight/2;

var TILE_SIZE = 60;
var TILE_HEIGHT = 10;
var tiles = [];
var turtle

function init() {

	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();

	turtle = Object.create(turtleObj);

	var startPos = 60 * 5;
	for (i = 0; i < 10; i++) {
		for (j = 0; j < 10; j++) {
			addCube(-startPos + TILE_SIZE * i, startPos - TILE_SIZE * j, TILE_SIZE - 2, TILE_SIZE - 2, TILE_HEIGHT, "#EEEEEE");
		}
	}

	setInterval(function() {
		update();
		draw();
	}, 1000/FPS );

}

function update() {

}

function draw() {

	canvas.clearRect(0, 0, canvas.width, canvas.height);

	canvas.fillStyle = "#111111";
	canvas.fillRect(0, 0, canvas.width, canvas.height);

	canvas.fillStyle = "#FFFFFF";
	canvas.font = "bold 24px Arial";
	canvas.fillText("0x111111", 20, 40);
	canvas.fillText("X: " + turtle.x, 20, 100);
	canvas.fillText("Y: " + turtle.y, 20, 130);

	for(i = 0; i < tiles.length; i++) {
		tiles[i].draw();
	}

	turtle.draw();

}

function addSquare(x, y, width, length, color) {

	var sq = Object.create(square);
		sq.width = width;
		sq.length = length;
		sq.x = x;
		sq.y = y;
		sq.color = color;

	//tiles.push(sq);

}

function addCube(x, y, width, length, height, color) {

	var cu = Object.create(cube);
		cu.width = width;
		cu.length = length;
		cu.height = height;
		cu.x = x;
		cu.y = y;
		cu.color = color;

	tiles.push(cu);

}

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

init();