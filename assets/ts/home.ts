const createLayout = () => {
	const container = document.createElement("div");
	container.classList.add("container");

	const aside = document.createElement("aside");
	const main = document.createElement("main");

	container.appendChild(aside);
	container.appendChild(main);

	document.body.appendChild(container);
};
createLayout();
