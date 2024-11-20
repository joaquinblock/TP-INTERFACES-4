"use strict"

const btnPlay= document.querySelector('.btn-play');

btnPlay.addEventListener('click', function(){
    console.log("kjb");
    let portadaVideo= document.querySelector('.contenedor-video-imagen');
    let video= document.querySelector('.contenedor-video');

    portadaVideo.classList.add('hidden');
    video.classList.remove('hidden');

    


});



