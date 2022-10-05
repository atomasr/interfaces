"use strict";

let btn = document.querySelector('.trailerButton');
let videoContainer = document.querySelector('.video-container');
let close = document.querySelector('.closeButton');

btn.addEventListener('click', () => {
    videoContainer.classList.add('show');
});

close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
})