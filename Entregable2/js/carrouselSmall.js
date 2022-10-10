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
        "picture": "03A",
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
        "picture": "07A",
        "hover": "07B",
        "name": "Tetris",
        "category": "Puzzle",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "08A",
        "hover": "08B",
        "name": "Breaking Bad: 4 in Line",
        "category": "Classic",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "09A",
        "hover": "09B",
        "name": "Cut The Rope",
        "category": "Puzzle",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "10A",
        "hover": "10B",
        "name": "Bubble Shooter",
        "category": "Party",
        "price": "$0.",
        "cents": "25"
    },
    {
        "picture": "11A",
        "hover": "11B",
        "name": "Scrabble Go",
        "category": "Party",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "12A",
        "hover": "12B",
        "name": "Wordle",
        "category": "Party",
        "price": "$1.",
        "cents": "99"
    },
]
let carrousel3 = [{
        "picture": "13A",
        "hover": "13B",
        "name": "Assassin's Creed: Valhalla",
        "category": "Role-playing",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "14A",
        "hover": "14B",
        "name": "Persona 5",
        "category": "Role-playing",
        "price": "$5.",
        "cents": "25"
    },
    {
        "picture": "15A",
        "hover": "15B",
        "name": "Pokémon Arceus",
        "category": "Role-playing",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "16A",
        "hover": "16B",
        "name": "Cyberpunk 2077",
        "category": "Role-playing",
        "price": "$89.",
        "cents": "95"
    },
    {
        "picture": "17A",
        "hover": "17B",
        "name": "Final Fantasy VII",
        "category": "Role-playing",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "18A",
        "hover": "18B",
        "name": "South Park",
        "category": "Role-playing",
        "price": "$25.",
        "cents": "99"
    },
]
let carrousel4 = [{
        "picture": "19A",
        "hover": "19B",
        "name": "Microsoft Flight Simulator",
        "category": "Simulation",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "20A",
        "hover": "20B",
        "name": "The Sims",
        "category": "Simulation",
        "price": "$22.",
        "cents": "22"
    },
    {
        "picture": "21A",
        "hover": "21B",
        "name": "Cooking Simulator",
        "category": "Simulation",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "22A",
        "hover": "22B",
        "name": "Arma III",
        "category": "Simulation",
        "price": "$11.",
        "cents": "99"
    },
    {
        "picture": "23A",
        "hover": "23B",
        "name": "Euro Truck Simulator 2",
        "category": "Simulation",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "24A",
        "hover": "24B",
        "name": "Thief Simulator",
        "category": "Simulation",
        "price": "$13.",
        "cents": "99"
    },
]
let carrousel5 = [{
        "picture": "25A",
        "hover": "25B",
        "name": "Valheim",
        "category": "Survival",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "26A",
        "hover": "26B",
        "name": "Frost Punk",
        "category": "Survival",
        "price": "$12.",
        "cents": "33"
    },
    {
        "picture": "27A",
        "hover": "27B",
        "name": "Terraria",
        "category": "Survival",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "28A",
        "hover": "28B",
        "name": "Astroneer",
        "category": "Survival",
        "price": "$18.",
        "cents": "99"
    },
    {
        "picture": "29A",
        "hover": "29B",
        "name": "Among Trees",
        "category": "Survival",
        "price": "Free",
        "cents": ""
    },
    {
        "picture": "30A",
        "hover": "30B",
        "name": "Resident Evil 4",
        "category": "Horror",
        "price": "$100.",
        "cents": "00"
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
            img.src = `img/examples/${carrousels[indice][index].picture}.svg`;
            let gameName = document.createElement("p");
            gameName.innerHTML = carrousels[indice][index].name;
            gameName.classList.add("gameName")
            card.appendChild(img);
            card.appendChild(gameName);
            cardSmall.appendChild(card);

            let hover = document.createElement("div");
            hover.classList.add('open');

            let imgHover = document.createElement("img");
            imgHover.src = `img/examples/${carrousels[indice][index].hover}.svg`;
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
            title.innerHTML = carrousels[indice][index].name;
            title.classList.add("titleSmall");
            content.appendChild(title);

            let category = document.createElement('p');
            category.innerHTML = carrousels[indice][index].category;
            category.classList.add("bodySmall");
            content.appendChild(category);

            let bottomDiv = document.createElement('div');
            bottomDiv.classList.add("bottomDiv");


            let price = document.createElement('p');
            price.innerHTML = carrousels[indice][index].price;
            price.classList.add("bodyBold");
            let button = document.createElement('a');
            let buttonText = document.createElement('p');
            button.appendChild(buttonText);
            if (carrousels[indice][index].price != "Free") {
                let cents = document.createElement('span');
                cents.innerHTML = carrousels[indice][index].cents;
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
            cardSmall.appendChild(hover);

            examples[indice].appendChild(cardSmall);
            container[indice + 1].appendChild(examples[indice]);
        }
    }
}

loadCarrousels();

window.addEventListener("load", function(event) {
    /* Button behaviour for carousel navigation */
    let btnsNext = document.querySelectorAll(".btn-next.example");
    let btnsPrevious = document.querySelectorAll('.btn-previous.example');

    let cardSmall = document.getElementsByClassName("card-small");
    let cardSmallWidth = cardSmall[0].offsetWidth;

    btnsPrevious.forEach(btn => {
        btn.addEventListener('click', function handleClick(event) {
            let parent = btn.parentElement;
            let example = parent.querySelector('.carrousel-examples');
            backward(example);
        });
    });

    btnsNext.forEach(btn => {
        btn.addEventListener('click', function handleClick(event) {
            let parent = btn.parentElement;
            let example = parent.querySelector('.carrousel-examples');
            forward(example);
        });
    });

    let width = examples[0].clientWidth;
    let scrollTotal = examples[0].scrollWidth;

    let pos = 0;
    let size = width;

    function backward(example) {
        if (size <= width) {
            pos = 0;
            size = width;
        } else {
            pos -= cardSmallWidth;
            size -= cardSmallWidth;

        };
        example.scrollTo({
            top: 0,
            left: pos,
            behavior: 'smooth'
        });
    }

    function forward(example) {
        if ((size + cardSmallWidth) > (scrollTotal + cardSmallWidth)) {
            pos = 0;
            size = width;
        } else {
            pos += cardSmallWidth;
            size += cardSmallWidth;
        };
        example.scrollTo({
            top: 0,
            left: pos,
            behavior: 'smooth'
        });
    }
});