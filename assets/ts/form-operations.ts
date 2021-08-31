const get = (value: string) => {
	const storage: LocalStorage = getStorage(STORAGE_KEY);
	return storage[value];
};

const controlsOp = [
	{
		type: "text",
		name: "description",
		id: "description",
	},
	{
		type: "select",
		name: "category",
		id: "category",
		options: get("categories"),
	},
	{
		type: "date",
		name: "date",
		id: "date",
	},
	{
		type: "number",
		name: "amount",
		id: "amount",
	},
	{
		type: "select",
		name: "type",
		id: "type",
		options: [
			{
				id: "ganancia",
				name: "ganancia",
			},
			{
				id: "gasto",
				name: "gasto",
			},
		],
	},
];

const controlsCat = [
	{
		type: "text",
		name: "name",
		id: "name",
	},
];

const main = document.createElement("main");

const formOperations = document.createElement("form");

makeForm(formOperations, controlsOp, main);

document.body.appendChild(main);

const getCategory = (id: number) => {
	const storage: LocalStorage = getStorage(STORAGE_KEY);

	for (const cat of storage.categories) {
		if (id === cat.id) return cat;
	}

	return null;
};

const createOperation = (event) => {
	event.preventDefault();

	console.log("Funciona");

	const form = event.target;

	const storage: LocalStorage = getStorage(STORAGE_KEY);

	const newOperation: Operation = {
		category: parseInt(form.category.value),
		date: form.date.value,
		description: form.description.value,
		amount: form.amount.value,
		type: form.type.value,
	};

	storage.operations.push(newOperation);

	setStorage(STORAGE_KEY, storage);
};

formOperations.addEventListener("submit", createOperation);
