let count = 0;

const handleIncrease = () => {
	count++;
	countElement.innerText = count;
}

const handleDecrease = () => {
	count--;
	countElement.innerText = count;
}

const addButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');

addButton.addEventListener('click', handleIncrease);
downButton.addEventListener('click', handleDecrease);

const countElement = document.getElementById('count');
countElement.innerText = count;