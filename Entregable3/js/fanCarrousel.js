"use strict";

let photos = document.querySelector(".fanCarrousel div:nth-child(2)");

function changePhotos() {
    setInterval(function() {
        photos.classList.toggle("show");
    }, 4000);
}

changePhotos();