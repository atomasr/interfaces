"use strict";
document.addEventListener('DOMContentLoaded', function () {
  var card = document.querySelectorAll(".card-character");

  /*Animation on scroll for section titles in release page */

  function scrollTitle() {
    var aos = document.querySelectorAll(".aos");


    for (var i = 0; i < aos.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = aos[i].getBoundingClientRect().top;
      var elementVisible = 150;

      /*Animation on scroll for cards within the characters carousel*/
      if (elementTop < windowHeight - elementVisible) {
        aos[i].classList.add("active");

        for (var j = 0; j < card.length; j++) {
          card[j].classList.add("animation-card");
        }

      } else {
        aos[i].classList.remove("active");
        for (var j = 0; j < card.length; j++) {
          card[j].classList.remove("animation-card");
        }

      }
    }
  }

  window.addEventListener("scroll", scrollTitle);
});