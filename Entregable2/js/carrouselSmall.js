"use strict";

/* Data carrousel recommended*/

let carrousel1 = [{
        "picture": "01A",
        "hover": "01B",
        "name": "Among Us",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "02A",
        "hover": "02B",
        "name": "Fornite",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
    {
        "picture": "03a",
        "hover": "03B",
        "name": "Minecraft",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "04A",
        "hover": "04B",
        "name": "Fall Guys",
        "category": "Multiplayer",
        "price": "$0.",
        "cents": "99"
    },
    {
        "picture": "05A",
        "hover": "05B",
        "name": "League Of Legends",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "06A",
        "hover": "06B",
        "name": "Valorant",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
]
let carrousel2 = [{
        "picture": "01A",
        "hover": "01B",
        "name": "Among Us",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "02A",
        "hover": "02B",
        "name": "Fornite",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
    {
        "picture": "03a",
        "hover": "03B",
        "name": "Minecraft",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "04A",
        "hover": "04B",
        "name": "Fall Guys",
        "category": "Multiplayer",
        "price": "$0.",
        "cents": "99"
    },
    {
        "picture": "05A",
        "hover": "05B",
        "name": "League Of Legends",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "06A",
        "hover": "06B",
        "name": "Valorant",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
]
let carrousel3 = [{
        "picture": "01A",
        "hover": "01B",
        "name": "Among Us",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "02A",
        "hover": "02B",
        "name": "Fornite",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
    {
        "picture": "03a",
        "hover": "03B",
        "name": "Minecraft",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "04A",
        "hover": "04B",
        "name": "Fall Guys",
        "category": "Multiplayer",
        "price": "$0.",
        "cents": "99"
    },
    {
        "picture": "05A",
        "hover": "05B",
        "name": "League Of Legends",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "06A",
        "hover": "06B",
        "name": "Valorant",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
]
let carrousel4 = [{
        "picture": "01A",
        "hover": "01B",
        "name": "Among Us",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "02A",
        "hover": "02B",
        "name": "Fornite",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
    {
        "picture": "03a",
        "hover": "03B",
        "name": "Minecraft",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "04A",
        "hover": "04B",
        "name": "Fall Guys",
        "category": "Multiplayer",
        "price": "$0.",
        "cents": "99"
    },
    {
        "picture": "05A",
        "hover": "05B",
        "name": "League Of Legends",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "06A",
        "hover": "06B",
        "name": "Valorant",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
]
let carrousel5 = [{
        "picture": "01A",
        "hover": "01B",
        "name": "Among Us",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "02A",
        "hover": "02B",
        "name": "Fornite",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
    {
        "picture": "03a",
        "hover": "03B",
        "name": "Minecraft",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "04A",
        "hover": "04B",
        "name": "Fall Guys",
        "category": "Multiplayer",
        "price": "$0.",
        "cents": "99"
    },
    {
        "picture": "05A",
        "hover": "05B",
        "name": "League Of Legends",
        "category": "Multiplayer",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "06A",
        "hover": "06B",
        "name": "Valorant",
        "category": "Multiplayer",
        "price": "$1.",
        "cents": "99"
    },
]

let carrousels = [carrousel1, carrousel2, carrousel3, carrousel4, carrousel5];

let examples = document.getElementsByClassName("carrousel-examples");

function loadCarrousels() {
    for (let indice = 0; indice < carrousels.length; indice++) {
        for (let index = 0; index < carrousels[indice].length; index++) {
            let cardSmall = document.createElement("article");
            cardSmall.classList.add("card-small");

            let card = document.createElement("div");
            card.classList.add("close");
            let img = document.createElement("img");
            img.src = `img/examples/${carrousel1[index].picture}.svg`;
            let gameName = document.createElement("p");
            gameName.innerHTML = carrousel1[index].name;
            gameName.classList.add("gameName")
            card.appendChild(img);
            card.appendChild(gameName);
            cardSmall.appendChild(card);

            let hover = document.createElement("div");
            hover.classList.add('open');

            let imgHover = document.createElement("img");
            imgHover.src = `img/examples/${carrousel1[index].hover}.svg`;
            imgHover.classList.add("imageSmall");
            hover.appendChild(imgHover);

            let content = document.createElement("div");
            content.classList.add("contentSmall");

            let iconHeart = document.createElement("div");
            let vectorHeart = document.createElement("img");
            vectorHeart.src = `img/icons/heart-regular.svg`;
            vectorHeart.classList.add("vectorHeart");
            iconHeart.classList.add("iconHeart");
            iconHeart.appendChild(vectorHeart);
            content.appendChild(iconHeart);

            let title = document.createElement('p');
            title.innerHTML = carrousel1[index].name;
            title.classList.add("titleSmall");
            content.appendChild(title);

            let category = document.createElement('p');
            category.innerHTML = carrousel1[index].category;
            category.classList.add("bodySmall");
            content.appendChild(category);

            let bottomDiv = document.createElement('div');
            bottomDiv.classList.add("bottomDiv");


            let price = document.createElement('p');
            price.innerHTML = carrousel1[index].price;
            price.classList.add("bodyBold");
            let button = document.createElement('button');
            let buttonText = document.createElement('p');
            button.appendChild(buttonText);
            if (carrousel1[index].price != "Free") {
                let cents = document.createElement('span');
                cents.innerHTML = carrousel1[index].cents;
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
            cardSmall.appendChild(hover);

            examples[indice].appendChild(cardSmall);
            container[indice + 1].appendChild(examples[indice]);
        }
    }
}

loadCarrousels();