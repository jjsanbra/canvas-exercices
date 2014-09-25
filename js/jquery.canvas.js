$(document).on('ready', function(){

	dbCanvas = $('#canvasMain');
    

	var context = dbCanvas[0].getContext('2d');
	context.fillStyle = "#FF0000";
	context.fillRect(0,0,100,300);
	context.moveTo(25,50);
	context.lineTo(75,50);
	context.lineWidth = 5;
	context.lineCap = 'round';
	context.strokeStyle = 'rgb(255,255,255)';
	context.stroke();


	var context2 = dbCanvas[0].getContext('2d');
	context2.fillStyle = "#FF9900";
	context2.fillRect(100,0,100,300);
	context2.beginPath();
	context2.arc(150,75,40,0,2*Math.PI);
	context2.lineWidth = 5;
	context2.moveTo(125,50);
	context2.lineTo(175,100);
	context2.moveTo(125,100);
	context2.lineTo(175,50);
	context2.lineCap = 'round';
	context2.strokeStyle = 'rgb(255,255,255)';
	context2.stroke();

	var context3 = dbCanvas[0].getContext('2d');
	context3.fillStyle = "#009922";
	context3.fillRect(200,0,100,300);

});
