var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;

var FPS = 30;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH +
						"' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');

var screenX = -CANVAS_WIDTH/2;
var screenY = -CANVAS_HEIGHT/2;

var tiles = [];

var testCube = Object.create(cube);
	testCube.width = 15;
	testCube.height = 25;
	testCube.x = 0;
	testCube.y = 0;
	testCube.color = "#FF5577";

setInterval(function() {
	update();
	draw();
}, 1000/FPS );

function init() {

	addSquare(0, 0, 60, 60, "#FFFFFF");
	addSquare(60, 60, 60, 60, "#FFFFFF");
	addSquare(-60, 60, 60, 60, "#FFFFFF");
	addSquare(-60, -60, 60, 60, "#FFFFFF");
	addSquare(60, -60, 60, 60, "#FFFFFF");

}

function update() {

}

function draw() {

	canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	canvas.fillStyle = "#111111";
	canvas.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	canvas.fillStyle = "#FFFFFF";
	canvas.font = "bold 24px Arial";
	canvas.fillText("0x111111", 20, 40);

	for(i = 0; i < tiles.length; i++) {
		tiles[i].draw();
	}

	testCube.draw();

}

function addSquare(x, y, width, length, color) {

	var testSquare = Object.create(square);
		testSquare.width = width;
		testSquare.length = length;
		testSquare.x = x;
		testSquare.y = y;
		testSquare.color = color;

	tiles.push(testSquare);

}

init();