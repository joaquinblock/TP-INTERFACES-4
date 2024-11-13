const logo_principal = document.querySelector("#logo-principal");
const logo_header = document.querySelector("#logo-header");

let menu_hamburguesa = document.getElementById('menu-hamburguesa');

document.getElementById('boton-menu-hamburguesa').addEventListener("click", () => {

    let children = document.querySelectorAll('.linea');

    children[0].classList.toggle('rotar-arriba');
    children[1].classList.toggle('desaparecer');
    children[2].classList.toggle('rotar-abajo');
});



// Parallax effect on scroll
document.addEventListener("scroll", function () {
    const parallaxLeft = document.querySelectorAll(".parallax-left");
    const parallaxRight = document.querySelectorAll(".parallax-right");
    const parallaxNumeros = document.querySelectorAll(".parallax-nums");


      // Control de la opacidad del logo en función del desplazamiento vertical
      if (window.scrollY < 100) {
        logo_header.style.opacity = 0; //si es menor al header el scroll, el logo no se ve
    }
    if (window.scrollY > 100) {
        logo_header.style.opacity = window.scrollY / 200; 
    }

    // Calcular opacidad, reduce gradualmente hasta 0 en el desplazamiento de 120px cuando llega a 120px desaparece del todo
    logo_principal.style.opacity = 1 - window.scrollY / 120;
    logo_principal.style.scale = 1 - window.scrollY / 200; 

    parallaxLeft.forEach(element => {
        const speed = parseFloat(element.getAttribute("data-speed"));
        const pos = window.scrollY * speed;
        element.style.transform = `translate(-${pos}px, ${pos}px)`;
        element.style.scale = 1 + window.scrollY / 500;
    });

    parallaxRight.forEach(element => {
        const speed = parseFloat(element.getAttribute("data-speed"));
        const pos = window.scrollY * speed;
        element.style.transform = `translate(${pos}px, ${pos}px)`;
        element.style.scale = 1 + window.scrollY / 500;
    });

    const numero1 = document.getElementById('numero-1');
    const numero2 = document.getElementById('numero-2');
    const numero3 = document.getElementById('numero-3');
    const sombra1 = document.getElementById('sombra-1');
    const sombra2 = document.getElementById('sombra-2');
    const sombra3 = document.getElementById('sombra-3');

    let speedUno = numero1.getAttribute('data-speed');
    let speedDos = numero2.getAttribute('data-speed');
    let speedTres = numero3.getAttribute('data-speed'); 
    numero1.style.transform = `translate(-${window.scrollY * speedUno }px,-${window.scrollY * speedUno / 10}px)`;
    numero2.style.transform = `translateY(-${window.scrollY * speedDos}px)`;
    numero3.style.transform = `translateX(${window.scrollY * speedTres}px)`;
    sombra1.style.transform = `translate(-${window.scrollY * speedUno}px, ${window.scrollY * speedUno}px)`;
    sombra2.style.transform = `translateY(-${window.scrollY * speedDos}px)`;
    sombra3.style.transform = `translate(${window.scrollY * speedTres}px, ${window.scrollY * speedTres / 2}px)`;
    numero1.style.scale = 1 + window.scrollY / 1000;
    numero2.style.scale = 1 + window.scrollY / 1000;
    numero3.style.scale = 1 + window.scrollY / 1000;
    sombra1.style.scale = 1 + window.scrollY / 1000;
    sombra2.style.scale = 1 + window.scrollY / 1000;
    sombra3.style.scale = 1 + window.scrollY / 1000;

    const section1 = document.querySelector(".section-1");

    section1.style.backgroundSize = Math.max(window.scrollY, 100) + "%";

});