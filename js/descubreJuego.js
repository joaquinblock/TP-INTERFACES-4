"use strict"

const fondoDescubre = document.querySelector('.fondoDescubre');

document.addEventListener('mousemove', (event) => {
    // Calcula el centro de la ventana
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calcula la distancia del mouse desde el centro
    const deltaX = (event.clientX - centerX) * -0.02; 
    const deltaY = (event.clientY - centerY) * -0.02;

    // Aplica la transformación
    fondoDescubre.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});