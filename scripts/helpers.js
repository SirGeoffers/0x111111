var cos30 = Math.cos(Math.PI / 6);
var sin30 = Math.sin(Math.PI / 6);

function drawFlatSquare(x, y, width, height, color) {

	var w = width / 2;
	var h = height / 2;

	canvas.fillStyle = color;
	canvas.beginPath();
	canvas.moveTo(x + w - screenX, y + h - screenY); //bottom right
	canvas.lineTo(x + w - screenX, y - h - screenY); //bottom left
	canvas.lineTo(x - w - screenX, y - h - screenY); //top left
	canvas.lineTo(x - w - screenX, y + h - screenY); //top right
	canvas.closePath();
	canvas.fill();

}

function drawSquare(x, y, z, width, length, color) {

	var pwx = width * cos30 / 2;
	var pwy = width * sin30 / 2;

	var plx = length * cos30 / 2;
	var ply = length * sin30 / 2;

	var xi = x * cos30 + y * cos30;
	var yi = x * sin30 - y * sin30;

	canvas.fillStyle = color;
	canvas.beginPath();
	canvas.moveTo(xi + pwx - plx - screenX, yi + pwy + ply - z - screenY); //bottom right - base
	canvas.lineTo(xi - pwx - plx - screenX, yi - pwy + ply - z - screenY); //bottom left - base
	canvas.lineTo(xi - pwx + plx - screenX, yi - pwy - ply - z - screenY); //top left - base
	canvas.lineTo(xi + pwx + plx - screenX, yi + pwy - ply - z - screenY); //top right - base
	canvas.closePath();
	canvas.fill();

}

function drawCube(x, y, z, width, height, length, color) {

	var pwx = width * cos30 / 2;
	var pwy = width * sin30 / 2;

	var plx = length * cos30 / 2;
	var ply = length * sin30 / 2;

	var xi = x * cos30 + y * cos30;
	var yi = x * sin30 - y * sin30;

	//Top
	canvas.fillStyle = color;
	canvas.beginPath();
	canvas.moveTo(xi + pwx - plx - screenX, yi + pwy + ply - z - screenY); //bottom right - base
	canvas.lineTo(xi - pwx - plx - screenX, yi - pwy + ply - z - screenY); //bottom left - base
	canvas.lineTo(xi - pwx - plx - screenX, yi - pwy + ply - z - height - screenY); //bottom left
	canvas.lineTo(xi - pwx + plx - screenX, yi - pwy - ply - z - height - screenY); //top left
	canvas.lineTo(xi + pwx + plx - screenX, yi + pwy - ply - z - height - screenY); //top right
	canvas.lineTo(xi + pwx + plx - screenX, yi + pwy - ply - z - screenY); //top right - base
	canvas.closePath();
	canvas.fill();

	//Right
	canvas.fillStyle = shadeColor(color, -40);
	canvas.beginPath();
	canvas.moveTo(xi + pwx - plx - screenX, yi + pwy + ply - z - height - screenY);
	canvas.lineTo(xi + pwx + plx - screenX, yi + pwy - ply - z - height - screenY);
	canvas.lineTo(xi + pwx + plx - screenX, yi + pwy - ply - z - screenY);
	canvas.lineTo(xi + pwx - plx - screenX, yi + pwy + ply - z - screenY);
	canvas.closePath();
	canvas.fill();

	//Left
	canvas.fillStyle = shadeColor(color, -25);
	canvas.beginPath();
	canvas.moveTo(xi + pwx - plx - screenX, yi + pwy + ply - z - height - screenY);
	canvas.lineTo(xi - pwx - plx - screenX, yi - pwy + ply - z - height - screenY);
	canvas.lineTo(xi - pwx - plx - screenX, yi - pwy + ply - z - screenY);
	canvas.lineTo(xi + pwx - plx - screenX, yi + pwy + ply - z - screenY);
	canvas.closePath();
	canvas.fill();

}

drawFlatSquare

function shadeColor(color, percent) {  
    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}