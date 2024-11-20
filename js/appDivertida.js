"use strict"

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    // Ajuste de los elementos según la posición de desplazamiento
    let titulo = document.querySelector('.titulo-app-divertida');
    let descripcion = document.querySelector('.contenedor-p-app-divertida');
    let imagenes = document.querySelector('.contenedor-img-app-divertida');
    let personaje5 = document.querySelector('.contenedor-personaje5-app-divertida img');
    let cubo = document.querySelector('.contenedor-cubo-app-divertida');
    
    // Ajuste sutil de las posiciones con respecto al scroll
    // Desplazamiento de título
    titulo.style.transform = 'translateY(' + (scrollPosition *-0.2) + 'px)';
    
    // Desplazamiento de descripción
    descripcion.style.transform = 'translateY(' + (scrollPosition * -0.15) + 'px)';
    
    //desplazamiento contenedor img
    imagenes.style.transform= 'translateY(' + (scrollPosition * -0.15) + 'px)';
  
    
    // Desplazamiento de personaje 5
    personaje5.style.transform = 'translateX(' + (scrollPosition * -0.06) + 'px)';
    
    // Desplazamiento del cubo
    cubo.style.transform = 'translateY(' + (scrollPosition * -0.13) + 'px)';
});