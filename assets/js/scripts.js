var STORAGE_KEY = "ahorradas";
var itemsMenu = [
    {
        name: "Balance",
        href: "/"
    },
    {
        name: "Categorías",
        href: "/categories"
    },
    {
        name: "Reportes",
        href: "/reportes"
    },
    {
        name: "Contacto",
        href: "/contacto"
    },
];
var createNavbar = function (items) {
    var nav = document.createElement("nav");
    var divleft = document.createElement("div");
    var divRight = document.createElement("div");
    /* Lado izquierdo */
    var logo = document.createTextNode("Ahorradas");
    divleft.appendChild(logo);
    /* Lado derecho */
    var ul = document.createElement("ul");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var li = document.createElement("li");
        var a = document.createElement("a");
        var text = document.createTextNode(item.name);
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
createNavbar(itemsMenu);
var initialStorage = {
    categories: [
        {
            id: 1,
            name: "Comidas"
        },
        {
            id: 2,
            name: "Trabajo"
        },
    ],
    operations: []
};
/**
 *
 * @param key
 * @returns
 */
var getStorage = function (key) {
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
var setStorage = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
/**
 *
 * @param ctrls
 */
var makeForm = function (form, ctrls, parent) {
    for (var _i = 0, ctrls_1 = ctrls; _i < ctrls_1.length; _i++) {
        var control = ctrls_1[_i];
        var elem = void 0;
        switch (control.type) {
            case "textarea":
                elem = document.createElement("textarea");
                break;
            case "select":
                elem = document.createElement("select");
                for (var _a = 0, _b = control.options; _a < _b.length; _a++) {
                    var option = _b[_a];
                    var op = document.createElement("option");
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
    var button = document.createElement("button");
    button.type = "submit";
    button.appendChild(document.createTextNode("Agregar"));
    form.appendChild(button);
    parent.appendChild(form);
};
