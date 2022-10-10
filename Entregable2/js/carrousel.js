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
        "picture": "03A",
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
        gameName.classList.add("gameName")
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
        let button = document.createElement('a');
        let buttonText = document.createElement('p');
        button.appendChild(buttonText);
        if (carrousel[index].price != "Free") {
            let cents = document.createElement('span');
            cents.innerHTML = carrousel[index].cents;
            cents.classList.add("bodyBoldSmall");
            price.appendChild(cents);
            buttonText.innerHTML = "Buy";
            buttonText.classList.add("btn");
            buttonText.classList.add("txtMedium");
            let iconBuy = document.createElement("div");
            let vectorBuy = document.createElement("img");
            vectorBuy.src = `img/icons/buy.svg`;
            vectorBuy.classList.add("vectorButton");
            iconBuy.appendChild(vectorBuy);
            iconBuy.classList.add("iconButton");
            button.appendChild(iconBuy);
            button.classList.add("buyButton");
        } else {
            button.setAttribute('href', 'gameDetail.html');
            buttonText.innerHTML = "Play";
            buttonText.classList.add("btn");
            buttonText.classList.add("txtMedium");
            let iconPlay = document.createElement("div");
            let vectorPlay = document.createElement("img");
            vectorPlay.src = `img/icons/play.svg`;
            vectorPlay.classList.add("vectorButton");
            iconPlay.appendChild(vectorPlay);
            iconPlay.classList.add("iconButton");
            button.appendChild(iconPlay);
            button.classList.add("playButton");
        }

        bottomDiv.appendChild(price);
        bottomDiv.appendChild(button);

        content.appendChild(bottomDiv);
        hover.appendChild(content);
        cardBig.appendChild(hover);

        recommended[0].appendChild(cardBig);
        container[0].appendChild(recommended[0]);
    }
}

loadCarrousel();


/* Button behaviour for carousel navigation */
let slider = document.querySelector("#slider");
let cardBig = document.getElementsByClassName("card-big");

let btnNext = document.getElementById("next");
btnNext.addEventListener("click", forward);

let btnPrevious = document.getElementById("previous");
btnPrevious.addEventListener("click", backward);


let width = slider.clientWidth;
let scrollTotal = slider.scrollWidth;
let cardBigWidth = cardBig[0].offsetWidth;

let pos = 0;
let size = width;

function backward() {
    if (size <= width) {
        pos = 0;
        size = width;
    } else {
        pos -= cardBigWidth;
        size -= cardBigWidth;

    };
    slider.scrollTo({
        top: 0,
        left: pos,
        behavior: 'smooth'
    });
}

function forward() {
    if ((size + cardBigWidth) > (scrollTotal + cardBigWidth)) {
        pos = 0;
        size = width;
    } else {
        pos += cardBigWidth;
        size += cardBigWidth;
    };
    slider.scrollTo({
        top: 0,
        left: pos,
        behavior: 'smooth'
    });
}