"use strict";

let paths =
[ "img/release/story1.jpg",
"img/release/story2.jpg",
"img/release/story3.jpg"];


let picture = document.getElementById("picStory");
let txt = document.getElementById("text1");
let i = 0;


window.addEventListener('scroll',()=> {
  let top = Number(txt.offsetTop);
  let height = Number(txt.clientHeight);

  if (window.scrollY > 0 && window.scrollY <= (top + 1.5*height) && (i != 1)) {
    i = 1;
    picture.classList.remove("active");
    setTimeout( function() {   
      picture.src = paths[0];
      picture.classList.add("active");
    }, 50);
  }
  if (window.scrollY > (top + 1.5*height) && window.scrollY <= (top + 2.5*height) && (i != 2)) {
    i = 2;
    picture.classList.remove("active");
    setTimeout( function() {
      picture.src = paths[1];
      picture.classList.add("active");
    }, 50);
  }
  if (window.scrollY > (top + 2.5*height) && (i != 3)) {
    i = 3;
    picture.classList.remove("active");
    setTimeout( function() {
      picture.src = paths[2];
      picture.classList.add("active");
    }, 50);
  }
}
);