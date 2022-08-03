let counterClicks = 0;
let userName = prompt(
	'Введите имя человека, которого вы хотите наказать пока взламывается Пентагон!',
	''
);

const dickElement = document.querySelector('.main__tool');

//функция для обновления счетчика
function onUpdCounter(counterClicks) {
	document.querySelector('.main__counter-clicks').innerHTML = counterClicks;
}

//функкция для увеличения
function onInc() {
	counterClicks += 1;
	const { width } = getComputedStyle(dickElement);
	const newWidth = Number.parseInt(width) + 300;
	dickElement.style.width = `${newWidth}px`;
	onUpdCounter(counterClicks);
}

//функкция для уменьшения члена
function onDec() {
	counterClicks -= 1;
	const { width } = getComputedStyle(dickElement);
	const newWidth = Number.parseInt(width) - 300;
	dickElement.style.width = `${newWidth}px`;
	onUpdCounter(counterClicks);
}

const baduser = document.createElement('div');
baduser.innerText = `${userName}`;
baduser.className = 'JsTextBad';
document.body.append(baduser);

//const label = document.createElement('div');
//const counter = document.createElement('div');
//let count = 0;
//label.innerText = `Накажи ${userName} пока взламывается Пентагон`;
//label.className = 'JsTextTop';

//counter.innerText = `${count}%`;
//counter.className = 'JsTextBot';
//document.body.append(label);
//document.body.append(counter);

//const timerId = setInterval(() => {
//	if (count < 100) {
//		count++;
//		counter.innerText = `${count}%`;
//	} else {
//		clearInterval(timerId);
//		label.innerText = `${userName} наказан! Пентагон взломан!`;
//		label.className = 'JsTextTop';
//		counter.hidden = true;
//	}
//}, 100);
