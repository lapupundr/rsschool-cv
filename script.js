let menuBig = document.getElementById("menu-big");

document.getElementById("menu-small").addEventListener('click', () => {
    menuBig.classList.toggle("show")
})

menuBig.addEventListener('click', () => {menuBig.classList.toggle("show")});
