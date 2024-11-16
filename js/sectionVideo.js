"use strict"

const btnPlay= document.querySelector('.btn-play');

btnPlay.addEventListener('click', function(){
    console.log("kjb");
    let portadaVideo= document.querySelector('.contenedor-video-imagen');
    let video= document.querySelector('.contenedor-video');

    portadaVideo.classList.add('hidden');
    video.classList.remove('hidden');


});

// Seleccionar elementos
const personaje = document.querySelector('.contenedor-personaje-section');
const video = document.querySelector('.contenedor-video-imagen');

// Configurar límites de desplazamiento
const maxOffset = 50; // Máximo desplazamiento en píxeles
const minOffset = -20; // Mínimo desplazamiento en píxeles

// Función para manejar el scroll
function handleScroll() {
    const scrollPosition = window.scrollY; // Posición de desplazamiento

    // Calcular desplazamientos con límites
    const personajeOffset = Math.min(Math.max(scrollPosition * 0.2, minOffset), maxOffset);
    const videoOffset = Math.min(Math.max(scrollPosition * 0.4, minOffset), maxOffset);

    // Aplicar transformaciones
    personaje.style.transform = `translateY(${personajeOffset}px)`;
    video.style.transform = `translateY(${videoOffset}px)`;
}

// Escuchar el evento scroll
window.addEventListener('scroll', handleScroll);
