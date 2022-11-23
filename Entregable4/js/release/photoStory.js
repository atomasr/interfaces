"use strict";

let paths =
[ "img/release/story1.jpg",
"img/release/story2.jpg",
"img/release/story3.jpg"];


let picture = document.getElementById("picStory");


window.addEventListener('scroll',()=> {
  console.log(window.scrollY);
  if (window.scrollY > 0 && window.scrollY <= 2500) {
    picture.src = paths[0];
  }
  if (window.scrollY > 2950 && window.scrollY <= 3300) {
    picture.src = paths[1];
  }
  if (window.scrollY > 3700) {
    picture.src = paths[2];
  }
}
);