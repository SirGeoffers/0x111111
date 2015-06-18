var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;

var FPS = 30;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH +
						"' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');

var screenX = 0;
var screenY = 0;

var tiles = [];

var testCube = Object.create(cube);
	testCube.width = 15;
	testCube.height = 25;
	testCube.x = CANVAS_WIDTH / 2;
	testCube.y = CANVAS_HEIGHT / 2;
	testCube.color = "#FF5577";

var testSquare = Object.create(square);
	testSquare.width = 60;
	testSquare.length = 60;
	testSquare.x = CANVAS_WIDTH / 2;
	testSquare.y = CANVAS_HEIGHT / 2;
	testSquare.color = "#FFFFFF";

setInterval(function() {
	update();
	draw();
}, 1000/FPS );

function update() {

}

function draw() {

	canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	canvas.fillStyle = "#111111";
	canvas.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	canvas.fillStyle = "#FFFFFF";
	canvas.font = "bold 24px Arial";
	canvas.fillText("#Tight", 20, 40);

	testSquare.draw()
	testCube.draw();

}