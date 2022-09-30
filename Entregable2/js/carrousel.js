"use strict";

/* Data carrousel recommended*/

let carrousel = [{
        "picture": "01A",
        "hover": "01B",
        "name": "Jurassic Park",
        "category": "Survival",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "02A",
        "hover": "02B",
        "name": "Star Wars",
        "category": "Role-playing",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "03a",
        "hover": "03B",
        "name": "Super Mario",
        "category": "Platformer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "04A",
        "hover": "04B",
        "name": "Pac-man",
        "category": "Survival",
        "price": "$0.",
        "cents": "98"
    },
    {
        "picture": "05A",
        "hover": "05B",
        "name": "Mortal Kombat",
        "category": "Battle",
        "price": "Free",
        "cents": ""
    },
]

let btnNext = document.getElementById("next");
btnNext.addEventListener("click", function() { move(forward); });

let btnPrevious = document.getElementById("previous");
btnPrevious.addEventListener("click", function() { move(backward); });

let container = document.getElementsByClassName("carrousel-container");
let recommended = document.getElementsByClassName("carrousel-recommended");

/*Create card components and include them in carousel*/

function loadCarrousel() {
    for (let index = 0; index < carrousel.length; index++) {
        let cardBig = document.createElement("article");
        cardBig.classList.add("card-big");

        let card = document.createElement("div");
        card.classList.add("close");
        let img = document.createElement("img");
        img.src = `img/recommended/${carrousel[index].picture}.svg`;
        let gameName = document.createElement("p");
        gameName.innerHTML = carrousel[index].name;
        gameName.classList.add("gameNameBig")
        card.appendChild(img);
        card.appendChild(gameName);
        cardBig.appendChild(card);

        let hover = document.createElement("div");
        hover.classList.add('open');

        let imgHover = document.createElement("img");
        imgHover.src = `img/recommended/${carrousel[index].hover}.svg`;
        imgHover.classList.add("imageBig");
        hover.appendChild(imgHover);

        let content = document.createElement("div");
        content.classList.add("contentBig");

        let iconHeart = document.createElement("div");
        let vectorHeart = document.createElement("img");
        vectorHeart.src = `img/icons/heart-regular.svg`;
        vectorHeart.classList.add("vectorHeart");
        iconHeart.classList.add("iconHeart");
        iconHeart.appendChild(vectorHeart);
        content.appendChild(iconHeart);

        let title = document.createElement('p');
        title.innerHTML = carrousel[index].name;
        title.classList.add("titleBig");
        content.appendChild(title);

        let category = document.createElement('p');
        category.innerHTML = carrousel[index].category;
        category.classList.add("bodySmall");
        content.appendChild(category);

        let bottomDiv = document.createElement('div');
        bottomDiv.classList.add("bottomDiv");
        let price = document.createElement('p');
        price.innerHTML = carrousel[index].price;
        price.classList.add("bodyBold");
        let cents = document.createElement('span');
        cents.innerHTML = carrousel[index].cents;
        cents.classList.add("bodyBoldSmall");
        price.appendChild(cents);
        bottomDiv.appendChild(price);
        let button = document.createElement('button');
        let buttonText = document.createElement('p');
        buttonText.innerHTML = "Play";
        buttonText.classList.add("btn");
        buttonText.classList.add("txtMedium");
        button.appendChild(buttonText);
        let iconPlay = document.createElement("div");
        let vectorPlay = document.createElement("img");
        vectorPlay.src = `img/icons/play.svg`;
        vectorPlay.classList.add("vectorPlay");
        iconPlay.appendChild(vectorPlay);
        iconPlay.classList.add("iconPlay");
        button.appendChild(iconPlay);
        button.classList.add("playButton");
        bottomDiv.appendChild(button);

        content.appendChild(bottomDiv);
        hover.appendChild(content);
        cardBig.appendChild(hover);

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
    if ((index > 0) && (index <= 2)) {
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
    if (index < 2) {
        recommended[0].style.left = recommended[0].offsetLeft - cardBig[0].offsetWidth + 3 + "px";
        index++;
        btnPrevious.style.visibility = "visible";
        btnNext.style.visibility = "visible";
    } else if (index == 2) {
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