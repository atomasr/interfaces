"use strict";

let paths =
[ "img/release/story1.jpg",
"img/release/story2.jpg",
"img/release/story3.jpg"];


let picture = document.getElementById("picStory");
let txt = document.getElementById("text1");


window.addEventListener('scroll',()=> {
  let top = Number(txt.offsetTop);
  let height = Number(txt.clientHeight);
  console.log(window.scrollY);
  console.log(top);
  console.log(height);
  console.log(top+height);
  if (window.scrollY > 0 && window.scrollY <= (top + 1.5*height)) {
    picture.src = paths[0];
  }
  if (window.scrollY > (top + 1.5*height) && window.scrollY <= (top + 2.5*height)) {
    picture.src = paths[1];
  }
  if (window.scrollY > (top + 2.5*height)) {
    picture.src = paths[2];
  }
}
);