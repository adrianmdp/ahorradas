var createLayout = function () {
    var container = document.createElement("div");
    container.classList.add("container");
    var aside = document.createElement("aside");
    var main = document.createElement("main");
    container.appendChild(aside);
    container.appendChild(main);
    document.body.appendChild(container);
};
createLayout();
