let menu_hamburguesa = document.getElementById('menu-hamburguesa');

document.getElementById('boton-menu-hamburguesa').addEventListener("click", () => {
    
    let children = document.querySelectorAll('.linea');

    children[0].classList.toggle('rotar-arriba');
    children[1].classList.toggle('desaparecer');
    children[2].classList.toggle('rotar-abajo');
})