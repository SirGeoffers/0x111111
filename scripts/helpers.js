var cos30 = Math.cos(Math.PI / 6);
var sin30 = Math.sin(Math.PI / 6);

function drawSquare(x, y, width, length, color) {

	var px = width * cos30;
	var py = length * sin30;

	var xi = x * cos30 + y * cos30;
	var yi = x * sin30 - y * sin30 + py;

	canvas.fillStyle = color;
	canvas.beginPath();
	canvas.moveTo(xi - screenX, yi - screenY);
	canvas.lineTo(xi + px - screenX, yi - py - screenY);
	canvas.lineTo(xi - screenX, yi - py * 2 - screenY);
	canvas.lineTo(xi - px - screenX, yi - py - screenY);
	canvas.closePath();
	canvas.fill();

}

function drawCube(x, y, width, height, length, color) {

	var px = width * Math.cos(Math.PI / 6);
	var py = width * Math.sin(Math.PI / 6);

	var xi = x * cos30 + y * cos30;
	var yi = x * sin30 - y * sin30 + py;

	canvas.fillStyle = shadeColor(color, -50);
	canvas.beginPath();
	canvas.moveTo(xi - screenX, yi - screenY);
	canvas.lineTo(xi + px - screenX, yi - py - screenY);
	canvas.lineTo(xi + px - screenX, yi - py - height - screenY);
	canvas.lineTo(xi - screenX, yi - height - screenY);
	canvas.closePath();
	canvas.fill();

	canvas.fillStyle = color;
	canvas.beginPath();
	canvas.moveTo(xi - screenX, yi - screenY);
	canvas.lineTo(xi - px - screenX, yi - py - screenY);
	canvas.lineTo(xi - px - screenX, yi - py - height - screenY);
	canvas.lineTo(xi - screenX, yi - height - screenY);
	canvas.closePath();
	canvas.fill();

	canvas.fillStyle = shadeColor(color, -25);
	canvas.beginPath();
	canvas.moveTo(xi - screenX, yi - height - screenY);
	canvas.lineTo(xi + px - screenX, yi - py - height - screenY);
	canvas.lineTo(xi - screenX, yi - height - py * 2 - screenY);
	canvas.lineTo(xi - px - screenX, yi - py - height - screenY);
	canvas.closePath();
	canvas.fill();

}

function shadeColor(color, percent) {  
    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}