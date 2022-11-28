"use strict";
document.addEventListener('DOMContentLoaded', function () {
  var card = document.querySelectorAll(".card-character");

  /*Animación on scroll para los titulos de las secciones en la página de Release */

  function scrollTitle() {
    var aos = document.querySelectorAll(".aos");


    for (var i = 0; i < aos.length; i++) {
      var windowHeight = window.innerHeight; //devuelve la altura interior de la ventana en píxeles
      var elementTop = aos[i].getBoundingClientRect().top; //getBoundingClientRect() devuelve un DOMRect que proporciona información tamaño y su posición relativa a la ventana gráfica (en este caso devuelve el top)
      var elementVisible = 150;

      /*Animación on scroll para las cards dentro del carrusel de personajes*/
      if (elementTop < windowHeight - elementVisible) { //cuando esta en la zona agrega animaciones
        aos[i].classList.add("active");

        for (var j = 0; j < card.length; j++) {
          card[j].classList.add("animation-card");
        }

      } else { //cuando no esta en la zona elimina las animaciones
        aos[i].classList.remove("active");
        for (var j = 0; j < card.length; j++) {
          card[j].classList.remove("animation-card");
        }

      }
    }
  }

  window.addEventListener("scroll", scrollTitle);
});