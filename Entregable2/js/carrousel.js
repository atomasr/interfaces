"use strict";

/* Data carrousel recommended*/

let carrousel = [
  {
    "picture": "01A",
    "hover": "01B",
    "name": "Jurassic Park",
    "category": "Survival",
    "price": "Free"
  },
  {
    "picture": "02A",
    "hover": "02B",
    "name": "Star Wars",
    "category": "Role-playing",
    "price": "Free"
  },
  {
    "picture": "03a",
    "hover": "03B",
    "name": "Super Mario",
    "category": "Platformer",
    "price": "Free"
  },
  {
    "picture": "04A",
    "hover": "04B",
    "name": "Pac-man",
    "category": "Survival",
    "price": "$0.98"
  },
  {
    "picture": "05A",
    "hover": "05B",
    "name": "Mortal Kombat",
    "category": "Battle",
    "price": "Free"
  },
]

let btnNext = document.getElementById("next");
btnNext.addEventListener("click", function () { move(forward); });

let btnPrevious = document.getElementById("previous");
btnPrevious.addEventListener("click", function () { move(backward); });

let container = document.getElementsByClassName("carrousel-container");
let recommended = document.getElementsByClassName("carrousel-recommended");

/*Create card components and include them in carousel*/

function loadCarrousel() {
  for (let index = 0; index < carrousel.length; index++) {
    let cardBig = document.createElement("article");
    cardBig.classList.add("card-big");
    let card = document.createElement("div");
    card.classList.add("open");
    let img = document.createElement("img");
    img.src = `img/recommended/${carrousel[index].picture}.svg`;
    let gameName = document.createElement("p");
    gameName.innerHTML = carrousel[index].name;
    card.appendChild(img);
    card.appendChild(gameName);
    cardBig.appendChild(card);
    recommended[0].appendChild(cardBig);
    container[0].appendChild(recommended[0]);
  }
}

loadCarrousel();

/* 
Para crear la versión hover
<div hidden class="hover">  
    <img id="image-recommended-hover"></img>  
    <p id="name" class="card titleBig"> </p>  
    <p id="price" class="small"></p>  
    <button class="btn txtMedium"></button> 
</div>  
*/


/* Button behaviour for carousel navigation */

let cardBig = document.getElementsByClassName("card-big");
let index = 0;
btnPrevious.style.visibility = "hidden";

function move(direction) {
  direction();
}

function backward() {
  if ((index > 0) && (index <= cardBig.length - 1)) {
    recommended[0].style.left = recommended[0].offsetLeft + cardBig[0].offsetWidth + "px";
    index--;
    btnPrevious.style.visibility = "visible";
    btnNext.style.visibility = "visible";
  } else if (index == 0) {
    btnPrevious.style.visibility = "hidden";
    btnNext.style.visibility = "visible";
  }
}

function forward() {
  if (index < cardBig.length - 1) {
    recommended[0].style.left = recommended[0].offsetLeft - cardBig[0].offsetWidth + 3 + "px";
    index++;
    btnPrevious.style.visibility = "visible";
    btnNext.style.visibility = "visible";
  } else if (index == cardBig.length - 1) {
    btnNext.style.visibility = "hidden";
  }
}

//Carrousel que muestra de a una slide.
/*  let index = 1;
  let image = document.getElementById("image-recommended");
  image.src = `img/recommended/${carrousel[index].picture}.svg`;

  let gameName = document.getElementById("name");
  gameName.innerHTML = carrousel[index].name;
*/
/*
function move(direction) {
  direction();
  image.src = `img/recommended/${carrousel[index].picture}.svg`;
  gameName.innerHTML = carrousel[index].name;
}

function forward() {
  if (index < carrousel.length - 1) {
    index++;
  }
  else if (index = carrousel.length - 1) {
    index = 0;
  }
}

function backward() {
  if (index === 0) {
    index = carrousel.length - 1;
  }
  else if ((0 < index) && (index <= carrousel.length - 1)) {
    index--;
  }
}*/