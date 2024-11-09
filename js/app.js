const logo_principal = document.querySelector("#logo-principal");
const logo_header = document.querySelector("#logo-header");

document.addEventListener("scroll", () => {
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
});
  