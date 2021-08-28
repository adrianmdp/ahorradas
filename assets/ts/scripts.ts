type ItemMenu = {
	name: string;
	href: string;
};

type ItemsMenu = ItemMenu[];

const itemsMenu: ItemsMenu = [
	{
		name: "Balance",
		href: "/",
	},
	{
		name: "Categorías",
		href: "/categories",
	},
	{
		name: "Reportes",
		href: "/reportes",
	},
];

const createNavbar = () => {
	const nav = document.createElement("nav");
	const divleft = document.createElement("div");
	const divRight = document.createElement("div");

	/* Lado izquierdo */
	const logo = document.createTextNode("Ahorradas");
	divleft.appendChild(logo);

	/* Lado derecho */
	const ul = document.createElement("ul");

	for (const item of itemsMenu) {
		const li = document.createElement("li");
		const a = document.createElement("a");
		const text = document.createTextNode(item.name);

		a.href = item.href;
		a.appendChild(text);
		li.appendChild(a);

		ul.appendChild(li);
	}

	divRight.appendChild(ul);

	nav.appendChild(divleft);
	nav.appendChild(divRight);

	nav.classList.add("primary-nav");

	document.body.appendChild(nav);
};

createNavbar();
