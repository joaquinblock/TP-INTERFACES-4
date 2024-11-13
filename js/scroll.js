"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section-scroll');
    const mainImage = document.getElementById('main-image');
    const lastSection = sections[sections.length - 1];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const imageSrc = entry.target.getAttribute('data-image-src');
                    mainImage.src = imageSrc;

                    // Verifica si es la última sección y está centrada en la pantalla
                    if (entry.target === lastSection) {
                        const rect = entry.target.getBoundingClientRect();
                        const isCentered = rect.top >= window.innerHeight / 2 - rect.height / 2 &&
                                           rect.top <= window.innerHeight / 2;

                        if (isCentered) {
                            // Detén el scroll en la última sección
                            window.scrollTo(0, window.scrollY); // Fija el scroll
                        }
                    }
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
});


//PARALLAX SECTION-SUSCRIPCION
// Selección de los elementos de las nubes
const nube1 = document.querySelector('.nube1-suscripcion');
const nube2 = document.querySelector('.nube2-suscripcion');
const nube3 = document.querySelector('.nube3-suscripcion');

/*window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

      
    // Limita el movimiento de las nubes para que no se desplacen fuera del contenedor
    const maxTranslation = 500; // Limite máximo de desplazamiento en píxeles

    nube1.style.transform = `translateX(${Math.min(scrollPosition * 0.01, maxTranslation)}px)`;
    nube2.style.transform = `translateX(${Math.min(scrollPosition * -0.02, maxTranslation)}px)`;
    nube3.style.transform = `translateX(${Math.min(scrollPosition * -0.02, maxTranslation)}px)`;
});*/