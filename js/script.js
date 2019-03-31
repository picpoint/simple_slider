var arr = ['pict/01.jpg', 'pict/02.jpg', 'pict/03.jpg', 'pict/04.jpg', 'pict/05.jpg', 'pict/06.jpg', 'pict/07.jpg', 'pict/08.jpg'];
var elem = document.querySelector('.slider');
var btnprevious = document.querySelector('#btnprevious');
var btnnext = document.querySelector('#btnnext');
var pict = document.querySelector('#pict');

var n = 0;

function nextSlide() {
	n++;
	pict.src = arr[n];

	if (n >= arr.length) {
		n = 0;
		pict.src = arr[n];
	}
}


function previousSlide() {
	n--;
	pict.src = arr[n];
	
	if (n < 0) {
		n = arr.length - 1;
		pict.src = arr[n];
	}
}


btnprevious.addEventListener('click', previousSlide);
btnnext.addEventListener('click', nextSlide);



