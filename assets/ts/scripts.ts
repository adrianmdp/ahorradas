const STORAGE_KEY = "ahorradas";

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

type Category = {
	id: number;
	name: string;
};

type Operation = {
	id?: number;
	description: string;
	category: Category;
	date: string;
	amount: number;
	type: "ganancia" | "gasto";
};

type LocalStorage = {
	categories?: Category[];
	operations?: Operation[];
};

const initialStorage: LocalStorage = {
	categories: [
		{
			id: 1,
			name: "Comida",
		},
		{
			id: 2,
			name: "Trabajo",
		},
	],
};

/**
 *
 * @param key
 * @returns
 */
const getStorage = (key) => {
	console.log(localStorage.getItem(key));

	if (!localStorage.getItem(key)) {
		setStorage(key, initialStorage);
	}

	return JSON.parse(localStorage.getItem(key));
};

/**
 *
 * @param key
 * @param value
 */
const setStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

/**
 *
 * @param ctrls
 */

const makeForm = (form, ctrls) => {
	for (const control of ctrls) {
		let elem;

		switch (control.type) {
			case "textarea":
				elem = document.createElement("textarea");

				break;

			case "select":
				elem = document.createElement("select");
				for (const option of control.options) {
					const op = document.createElement("option");
					elem.appendChild(op);
					op.value = option.id.toString();
					op.appendChild(document.createTextNode(option.name));
				}
				break;

			default:
				elem = document.createElement("input");
				elem.type = control.type;
				break;
		}

		elem.name = control.name;
		elem.id = control.id;

		form.appendChild(elem);
	}

	const button = document.createElement("button");
	button.type = "submit";
	button.appendChild(document.createTextNode("Agregar"));

	form.appendChild(button);

	document.body.appendChild(form);
};
