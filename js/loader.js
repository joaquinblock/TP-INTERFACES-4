"use strict"

let porcentaje = 0;
const porcentajeElement = document.getElementById("porcentaje");
const loadingScreen = document.getElementById("loading-screen");
const homeContent = document.getElementById("home-content");
const arcoirisImg = document.querySelector(".loading-arcoIris");

// Incrementar porcentaje cada 100ms
const intervalo = setInterval(() => {
    if (porcentaje < 100) {
        porcentaje++;
        porcentajeElement.textContent = `${porcentaje}%`;

         // Ajustar clip-path según el porcentaje
            arcoirisImg.style.clipPath = `inset(0 ${100 - porcentaje}% 0 0)`;
    } else {
        clearInterval(intervalo); // Detener el intervalo cuando llega al 100%
    
    // Ocultar pantalla de carga y mostrar contenido del home
        loadingScreen.style.display = "none";
        homeContent.style.display = "block";
}
}, 76); // Ajusta el tiempo según la duración de la animación








