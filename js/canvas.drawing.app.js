//Declaro las variables para el escenario donde se podrá dibujar
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;
var e = "";

//Asigno el ancho y alto del espacio para dibujar
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

//Creo la función para crear los puntos cuando se llame a través del evento
//que se activa al hacer click sobre el área de trabajo.
var putPoint = function(e){
	if(dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
};

var engage = function(){
	dragging = true;
	putPoint(e);
};

var disengage = function(){
	dragging = false;
	context.beginPath();
};

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

/* Scripts para cambiar dinámicamente el Radio del pincel (Tamaño) */
var setRadius = function(newRadius){
	if(newRadius<minRad){
		newRadius = minRad;
	} else if(newRadius>maxRad) {
		newRadius = maxRad;
	};

	radius = newRadius;
	context.lineWidth = radius*2;

	radSpan.innerHTML = radius;

};

var minRad = 0.5,
	maxRad = 100,
	defaultRad = 20,
	interval = 5,
	radSpan = document.getElementById('radval'),
	decRad = document.getElementById('decrad'),
	incRad = document.getElementById('incrad');

decRad.addEventListener('click', function(){
	setRadius(radius - interval);
});

incRad.addEventListener('click', function(){
	setRadius(radius + interval);
});

setRadius(defaultRad);

/* Scripts para cambiar dinámicamente el Color del pincel */

var colors = ['black', 'grey', 'lightgrey', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for (var i = 0, n = colors.length; i < n; i++){
	var swatch = document.createElement('div');
	swatch.className = 'btn swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
};

function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];

	if (active){
		active.className = 'btn swatch';
	}

};

function setSwatch(e){
	var swatch = e.target;

	//Set the color
	setColor(swatch.style.backgroundColor);

	//
	swatch.className += ' active';

};

setSwatch({target: document.getElementsByClassName('swatch')[0]});

















