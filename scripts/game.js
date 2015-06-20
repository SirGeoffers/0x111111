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
var computer = Object.create(cube);
	computer.width = 50;
	computer.height = 50;
	computer.x = 0;
	computer.y = 0;
	computer.color = "#FF5577"; //#FF5577

setInterval(function() {
	update();
	draw();
}, 1000/FPS );

function init() {

	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();

	addSquare(0, 0, 180, 180, "#FFFFFF");

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
	canvas.fillText("Width: " + canvas.width, 20, 100);
	canvas.fillText("Height: " + canvas.height, 20, 130);

	for(i = 0; i < tiles.length; i++) {
		tiles[i].draw();
	}

	computer.draw();

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

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

init();