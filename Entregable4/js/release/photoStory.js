"use strict";

let pic = document.getElementById('picStory');

let paths =
[ "img/release/story1.jpg",
"img/release/story2.jpg",
"img/release/story3.jpg",
"img/release/story4.jpg",
"img/release/story5.jpg"];

let i = 0;
let timer = setInterval(function(){
  if(i >= paths.length){
    i = 0;
  }
  pic.src = paths[i++];
}, 3000);