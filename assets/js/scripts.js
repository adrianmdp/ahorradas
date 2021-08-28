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
];
var createNavbar = function () {
    var nav = document.createElement("nav");
    var divleft = document.createElement("div");
    var divRight = document.createElement("div");
    /* Lado izquierdo */
    var logo = document.createTextNode("Ahorradas");
    divleft.appendChild(logo);
    /* Lado derecho */
    var ul = document.createElement("ul");
    for (var _i = 0, itemsMenu_1 = itemsMenu; _i < itemsMenu_1.length; _i++) {
        var item = itemsMenu_1[_i];
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
createNavbar();
