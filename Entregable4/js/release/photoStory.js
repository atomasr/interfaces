"use strict";

let paths =
[ "img/release/story1.jpg",
"img/release/story2.jpg",
"img/release/story3.jpg"];


let picture = document.getElementById("picStory");
let txt = document.getElementById("text1");
let i = 0;

/*Animación para la section Game Story: el texto scrollea en la columna derecha mientras
que la img relacionada cambia en la columna izquierda*/

window.addEventListener('scroll',()=> {
  let top = Number(txt.offsetTop); //obtiene la posicion donde comienza el div del texto
  let height = Number(txt.clientHeight); //obtiene la altura de los divs con texto

  if (window.scrollY > 0 && window.scrollY <= (top + 1.5*height) && (i != 1)) { //si esta en la zona del div texto 1
    i = 1;
    picture.classList.remove("active"); //elimina esta clase para poder repetir la animacion fade
    setTimeout( function() {   
      picture.src = paths[0]; //cambia el src de la imagen a la primera
      picture.classList.add("active"); //vuelve a añadir la clase para que se produzca la animacion fade
    }, 50);
  }
  if (window.scrollY > (top + 2*height) && window.scrollY <= (top + 2.5*height) && (i != 2)) { //si esta en la zona del div texto 2
    i = 2;
    picture.classList.remove("active"); //elimina esta clase para poder repetir la animacion fade
    setTimeout( function() {
      picture.src = paths[1]; //cambia el src de la imagen a la segunda
      picture.classList.add("active"); //vuelve a añadir la clase para que se produzca la animacion fade
    }, 50);
  }
  if (window.scrollY > (top + 3*height) && (i != 3)) { //si esta en la zona del div texto 3
    i = 3;
    picture.classList.remove("active"); //elimina esta clase para poder repetir la animacion fade
    setTimeout( function() {
      picture.src = paths[2]; //cambia el src de la imagen a la tercera
      picture.classList.add("active"); //vuelve a añadir la clase para que se produzca la animacion fade
    }, 50);
  }
}
);