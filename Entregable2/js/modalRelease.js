"use strict";

let btn = document.querySelector('.trailerButton');
let videoContainer = document.querySelector('.video-container');
let close = document.querySelector('.closeButton');

btn.addEventListener('click', () => {
    videoContainer.classList.add('show');
});

close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    var videos = document.querySelectorAll('iframe, video');
    Array.prototype.forEach.call(videos, function (video) {
        if (video.tagName.toLowerCase() === 'video') {
            video.pause();
        } else {
            var src = video.src;
            video.src = src;
        }
    });
})
