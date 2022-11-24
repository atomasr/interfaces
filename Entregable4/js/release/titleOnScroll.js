"use strict";

function scrollTitle() {
    var aos = document.querySelectorAll(".aos");
  
    for (var i = 0; i < spriteTitle.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = aos[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        aos[i].classList.add("active");
      } else {
        aos[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", scrollTitle);