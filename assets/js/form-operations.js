var get = function (value) {
    var storage = getStorage(STORAGE_KEY);
    return storage[value];
};
var controlsOp = [
    {
        type: "text",
        name: "description",
        id: "description"
    },
    {
        type: "select",
        name: "category",
        id: "category",
        options: get("categories")
    },
    {
        type: "date",
        name: "date",
        id: "date"
    },
    {
        type: "number",
        name: "amount",
        id: "amount"
    },
    {
        type: "select",
        name: "type",
        id: "type",
        options: [
            {
                id: "ganancia",
                name: "ganancia"
            },
            {
                id: "gasto",
                name: "gasto"
            },
        ]
    },
];
var controlsCat = [
    {
        type: "text",
        name: "name",
        id: "name"
    },
];
var main = document.createElement("main");
var formOperations = document.createElement("form");
makeForm(formOperations, controlsOp, main);
document.body.appendChild(main);
var getCategory = function (id) {
    var storage = getStorage(STORAGE_KEY);
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var cat = _a[_i];
        if (id === cat.id)
            return cat;
    }
    return null;
};
var createOperation = function (event) {
    event.preventDefault();
    console.log("Funciona");
    var form = event.target;
    var storage = getStorage(STORAGE_KEY);
    var newOperation = {
        category: parseInt(form.category.value),
        date: form.date.value,
        description: form.description.value,
        amount: form.amount.value,
        type: form.type.value
    };
    storage.operations.push(newOperation);
    setStorage(STORAGE_KEY, storage);
};
formOperations.addEventListener("submit", createOperation);
