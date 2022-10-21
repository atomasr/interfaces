let board = document.getElementById('canvas');
let ctx = board.getContext('2d');

/*class Juego {
    constructor(player1, player2, size) {
        this.player1 = player1;
        this.player2 = player2;
        this.turner = player1.setTurn(true);
    }

    init() {
        this.player1.init();
        //this.player2.init();
    }


}*/
let chips = [];

function clearCanvas() {
    ctx.clearRect(0, 0, 1024, 530);
}

function addChip() {
    let src = 'img/gameDetail/characters/Chip (3).svg';
    let chip = new Ficha(200, 200, 24, src);
    chips.push(chip);
}

function drawChips() {
    clearCanvas();
    chips.forEach(chip => {
        chip.draw();
    });
}
function initEvents() {
    board.onmousedown = mouseDown;
    board.onmousemove = mouseMove;
    board.onmouseup = mouseUp;
}

function mouseDown(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    if (chips[0].checkSelected(x, y)) {
        console.log('me clickearon');
        chips[0].setSelected(true);
    } else {
        console.log('no me clickearon');
        chips[0].setSelected(false);
    }

}

function mouseMove(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    if (chips[0].isSelected(e)) {
        chips[0].move(x, y, e);
    }
}

function mouseUp() {
    chips.forEach(chip => {
        chip.setSelected(false);
    });
}

function init() {
    addChip();
    drawChips();
    initEvents();
    setInterval(drawChips, 20);
}

init();