
const createElements = () => {
	const root = document.createElement('div');
	const text = document.createElement('div');
	const container = document.createElement('div');
	const progress = document.createElement('div');
	return { root, text, container, progress };
}

const setAttributes = ({ root, text, container, progress }) => {
	root.setAttribute('class', 'root');
	text.setAttribute('class', 'text');
	container.setAttribute('class', 'container');
	progress.setAttribute('class', 'progress');
}

const startCounting = ({ width, progress, text }) => {
	let count = 0;
	let interval;
	const setCount = () => {
		progress.style.width = `${count}%`;
		text.textContent = `${count}%`;
		count++;
		if (count > width) {
			clearInterval(interval)
			location.reload();
			// const root = document.querySelector('.root');
			// root.remove();
			// const body = document.body;
			// body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
		}
	}
	interval = setInterval(setCount, 50)
}

const init = () => {
	const { root, text, container, progress } = createElements();
	setAttributes({ root, text, container, progress });
	document.body.appendChild(root);
	root.appendChild(text);
	root.appendChild(container);
	container.appendChild(progress);
	startCounting({ width: 100, progress, text });
}

init();
