const date = document.querySelector('[data-date]').dataset.date;
const inputDays = document.querySelector('[data-days]');
const inputHours = document.querySelector('[data-hours]');
const inputMinutes = document.querySelector('[data-minutes]');

counter();
setInterval(counter, 1000);


function counter() {
	let now = new Date();
	let future = new Date(date);

	let diff = (future - now) / 1000;

	let days = Math.floor(diff / (60 * 60 * 24));
	diff = diff % (60 * 60 * 24);
	let hours = Math.floor(diff / (60 * 60))
	diff = diff % (60 * 60);
	let minutes = Math.floor(diff / 60);
	diff = diff % 60;


	inputDays.innerHTML = insertZero(days);
	inputHours.innerHTML = insertZero(hours);
	inputMinutes.innerHTML = insertZero(minutes);
}

function insertZero(num) {
	if (num <= 9) {
		num = '0' + num;
	}
	return num;
}