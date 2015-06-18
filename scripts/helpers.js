function drawSquare(x, y, width, height, color) {

	var px = width * Math.cos(Math.PI / 6);
	var py = width * Math.sin(Math.PI / 6);

	var yi = y + py

	canvas.fillStyle = color;
	canvas.beginPath();
	canvas.moveTo(x, yi);
	canvas.lineTo(x + px, yi - py);
	canvas.lineTo(x, yi - py * 2);
	canvas.lineTo(x - px, yi - py);
	canvas.closePath();
	canvas.fill();

}

function drawCube(x, y, width, height, length, color) {

	var px = width * Math.cos(Math.PI / 6);
	var py = width * Math.sin(Math.PI / 6);

	var yi = y + py

	canvas.fillStyle = shadeColor(color, -50);
	canvas.beginPath();
	canvas.moveTo(x, yi);
	canvas.lineTo(x + px, yi - py);
	canvas.lineTo(x + px, yi - py - height);
	canvas.lineTo(x, yi - height);
	canvas.closePath();
	canvas.fill();

	canvas.fillStyle = color;
	canvas.beginPath();
	canvas.moveTo(x, yi);
	canvas.lineTo(x - px, yi - py);
	canvas.lineTo(x - px, yi - py - height);
	canvas.lineTo(x, yi - height);
	canvas.closePath();
	canvas.fill();

	canvas.fillStyle = shadeColor(color, -25);
	canvas.beginPath();
	canvas.moveTo(x, yi - height);
	canvas.lineTo(x + px, yi - py - height);
	canvas.lineTo(x, yi - height - py * 2);
	canvas.lineTo(x - px, yi - py - height);
	canvas.closePath();
	canvas.fill();

}

function shadeColor(color, percent) {  
    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}