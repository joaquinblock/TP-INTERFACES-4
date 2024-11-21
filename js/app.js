const logo_principal = document.querySelector("#logo-principal");
const logo_header = document.querySelector("#logo-header");

const menu_hamburguesa = document.getElementById('boton-menu-hamburguesa');

document.getElementById('boton-menu-hamburguesa').addEventListener("click", () => {

    let children = document.querySelectorAll('.linea');

    children[0].classList.toggle('rotar-arriba');
    children[1].classList.toggle('desaparecer');
    children[2].classList.toggle('rotar-abajo');

    let menu_desplegable= document.querySelector(".contenedor-menu");
    menu_desplegable.classList.toggle('active');
    
     // Reinicia la animación si el menú se cierra
      if (!menu_desplegable.classList.contains('active')) {
      let items = document.querySelectorAll('.menu-item');
      items.forEach((item) => {
          item.style.animation = 'none';
          setTimeout(() => {
              item.style.animation = ''; // Reactiva la animación
          }, 10);
      });
  }
});



// Parallax effect on scroll
document.addEventListener("scroll", function () {
    const parallaxLeft = document.querySelectorAll(".parallax-left");
    const parallaxRight = document.querySelectorAll(".parallax-right");
    //const parallaxNumeros = document.querySelectorAll(".parallax-nums");


      // Control de la opacidad del logo en función del desplazamiento vertical
      if (window.scrollY < 50) {
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

const header = document.getElementById('header');
const comprar = document.getElementById('boton-comprar');


// Ajustar el tamaño del espaciador dinámicamente
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    menu_hamburguesa.style.scale = 0.9;
    logo_header.style.scale = 0.9;
    comprar.style.scale = 0.9;
  } else {
    header.classList.remove('scrolled');
    menu_hamburguesa.style.scale = 1;
    logo_header.style.scale = 1;
    comprar.style.scale = 1;
  }
});

//CAMBIAR IMAGENES CADA 3 SEGUNDOS

const imagenes = [
  "../img/imagen-cambia.png", 
  "../img/imagen-cambia-1.png", 
  "../img/imagen-cambia-2.png",
  "../img/imagen-cambia-3.png"
];

let indice = 0;


function cambiarImagen() {
 
  const imagen = document.getElementById("imagen-cambia");
  imagen.src = imagenes[indice];

  // Actualiza el índice para la siguiente imagen
  indice = (indice + 1 >= imagenes.length) ? 0 : indice + 1; //para que no se pase de largo
}

// Cambiar la imagen cada 3 segundos (3000 milisegundos)
setInterval(cambiarImagen, 3000);


//Punto 7
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
document.addEventListener("scroll", () => {
    if (window.scrollY > 1350) { //Si la altura en Y es mayor a 1350, realizo la animacion en las cards
        card1.classList.add("animacion-card");
        card2.classList.add("animacion-card");
        card3.classList.add("animacion-card");
    }else{
      card1.classList.remove("animacion-card");
      card2.classList.remove("animacion-card");
      card3.classList.remove("animacion-card");
    }
});

//Punto 8

const fondoDescubre = document.querySelector('.fondoDescubre');

document.addEventListener('mousemove', (event) => {
    // Calcula el centro de la ventana
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calcula la distancia del mouse desde el centro
    const deltaX = (event.clientX - centerX) * -0.02; 
    const deltaY = (event.clientY - centerY) * -0.02; //negativo para que se mueva en la dirección opuesta a la que se mueve el mouse.


    // Aplica la transformación
    fondoDescubre.style.transform = ` scale(1.1) translate(${deltaX}px, ${deltaY}px)`;
});

document.addEventListener('mousemove', (event) => {
  // const mouseX = event.pageX; // Coordenada X relativa a toda la página
  // const mouseY = event.pageY; // Coordenada Y relativa a toda la página
  // console.log(`Mouse position relative to the page: X=${mouseX}, Y=${mouseY}`);
});

let currentImageIndex = null; // Variable para almacenar el índice actual de la imagen
const infoScroll = document.getElementsByClassName("section-scroll");

window.addEventListener('scroll', () => {
 // console.log(window.scrollY);

  const scroll = window.scrollY;

  let index;


  switch (true) {
    case scroll < 4300:
      index = 0;
      break;
    case scroll >= 4300 && scroll < 4750:
      index = 1;
      break;
    case scroll >= 4750 && scroll < 5200:
      index = 2;
      break;
    case scroll >= 5200 && scroll < 5780:
      index = 3;
      break;
    case scroll >= 5780 && scroll < 6180:
      index = 4;
      break;
    case scroll >= 6180 && scroll < 6690:
      index = 5;
      break;
    case scroll >= 6690 && scroll < 7190:
      index = 6;
      break;
    case scroll >= 7190 && scroll < 7630:
      index = 7;
      break;
    case scroll >= 7630 && scroll < 8110:
      index = 8;
      break;
    case scroll >= 8110 && scroll < 8530:
      index = 9;
      break;
    case scroll >= 8530:
      index = 10;
      break;
    default:
      index = null; 
  }



  if (index !== null && index !== currentImageIndex) {
    currentImageIndex = index;

    // Aplicar transición de opacidad directa
    mainImage.style.transition = 'opacity 0.1s ease-in-out';
    mainImage.style.opacity = 0; // Desvanece la imagen actual

    Array.from(infoScroll).forEach((section, i) => {
      if (i === index) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });

    setTimeout(() => {
      mainImage.src = imagenesScroll[index]; // Cambia la imagen
      mainImage.style.opacity = 1; // Muestra la nueva imagen
    }, 100); // Debe coincidir con la duración de la transición
  }
});

//punto 9
const mainImage = document.querySelector('#main-image');
const imagenesScroll = [
  "../img/scroll-0.png", 
  "../img/scroll-1.png", 
  "../img/scroll-2.png", 
  "../img/scroll-3.png", 
  "../img/scroll-4.png", 
  "../img/scroll-5.png", 
  "../img/scroll-6.png", 
  "../img/scroll-7.png", 
  "../img/scroll-8.png", 
  "../img/scroll-9.png", 
  "../img/scroll-10.png" 
];



