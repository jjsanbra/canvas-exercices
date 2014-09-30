$(document).on('ready', function(){

	//Declaro las variables para el escenario donde se podrá dibujar
	var canvas = $('#canvas');
	var context = canvas[0].getContext('2d');

	var radius = 10;
	var dragging = false;

	//Asigno el ancho y alto del espacio para dibujar
	canvas.width($(window).innerWidth());
	canvas.height($(window).innerHeight());

	context.lineWidth = radius*2;

	//Creo la función para crear los puntos cuando se llame a través del evento
	//que se activa al hacer click sobre el área de trabajo.
	var putPoint = function(event){
		if(dragging){
			context.lineTo(event.pageX, event.pageY);
			context.stroke();
			context.beginPath();
			context.arc(event.pageX, event.pageY, radius, 0, Math.PI*2);
			context.fill();
			context.beginPath();
			context.moveTo(event.pageX, event.pageY);
		}
	};

	var engage = function(){
		dragging = true;
		putPoint(event);
	};

	var disengage = function(){
		dragging = false;
		context.beginPath();
	};

	canvas.on('mousedown', engage);
	canvas.on('mousemove', putPoint);
	canvas.on('mouseup', disengage);

	/* Scripts para cambiar dinámicamente el Radio del pincel (Tamaño) */
	var minRad = 0.5,
		maxRad = 100,
		defaultRad = 20,
		interval = 5,
		radSpan = $('#radval'),
		decRad = $('#decrad'),
		incRad = $('#incrad');
	
	var setRadius = function(newRadius){
		if(newRadius < minRad){
			newRadius = minRad;
		} else if(newRadius > maxRad) {
			newRadius = maxRad;
		};

		radius = newRadius;
		context.lineWidth = radius*2;

		radSpan.html(radius);

	};

	decRad.on('click', function(){
		setRadius(radius - interval);
	});

	incRad.on('click', function(){
		setRadius(radius + interval);
	});

	setRadius(defaultRad);

	/* Scripts para cambiar dinámicamente el Color del pincel */

	var colors = [ 'white', 'black', 'grey', 'lightgrey', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo'];

	for (var i = 0, n = colors.length; i < n; i++){
		var swatch = $('#colors').append('<div></div>');
		swatch.addClass = 'btn swatch';
		swatch.css('background-color', colors[i]);
		swatch.on('click', setSwatch);
		$('#colors').append(swatch);
	};

	var setColor = function(color){
		context.fillStyle = color;
		context.strokeStyle = color;
		var active = $('.active');

		if (active){
			active.addClass('btn');
			active.addClass('swatch');
		}

	};

	var setSwatch = function(event){
		var swatch = event.target;

		//Set the color
		setColor(swatch.css('background-color'));

		//
		swatch.addClass('active');

	};

	setSwatch({target: $('.swatch')[1]});




	$('#clearStage').on('click', function() {
		context.clearRect(0, 0, canvas.width(), canvas.height());
	});



});
