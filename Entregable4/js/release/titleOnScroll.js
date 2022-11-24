"use strict";
document.addEventListener('DOMContentLoaded', function () {
  var card = document.querySelectorAll(".card-character");

  function scrollTitle() {
    var aos = document.querySelectorAll(".aos");


    for (var i = 0; i < aos.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = aos[i].getBoundingClientRect().top;
      var elementVisible = 150;

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