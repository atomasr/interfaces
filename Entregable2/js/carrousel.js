"use strict";

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

  let index = 1;
  let image = document.getElementById("image-recommended");
  image.src = `img/recommended/${carrousel[index].picture}.svg`;

  let gameName = document.getElementById("name");
  gameName.innerHTML = carrousel[index].name;

  let btnNext = document.getElementById("next");
  btnNext.addEventListener("click", function () { move(forward); });

  let btnPrevious = document.getElementById("previous");
  btnPrevious.addEventListener("click", function () { move(backward); });

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
  }
