let board = document.getElementById('canvas');
let ctx = board.getContext('2d');

function clearCanvas() {
    ctx.clearRect(0, 0, 1024, 530);
}


var chips = [];

var tableroView = [];

function addChip(cant) {
    let src = 'img/gameDetail/characters/Chip (3).svg';
    let x = 50;
    let y = 50;
    let rows = cant / 11;
    let max = cant / rows;

    for (let i = 0; i < rows; i++) {
        for (let index = 0; index < max; index++) {
            let chip = new Ficha(x, y, 24, src);
            y += 40;
            chips.push(chip);
        }
        y = 50;
        x += 60;
    }
}

function addBoard(row, col) {
    for (let index = 0; index < row; index++) {
        let f = [];
        for (let index = 0; index < col; index++) {
            let img = new Image();
            img.src = 'img/gameDetail/Fractal.svg';
            f.push(img);
        }
        tableroView.push(f);
    }
}

function draw() {
    clearCanvas();

    //drawBoard
    let posX = 250;
    let posY = 50;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            img = tableroView[i][j];
            ctx.drawImage(img, posX, posY, 78, 78);
            posX += 50;
        }
        posX = 250;
        posY += 50;
    }

    //drawChips
    for (let index = this.cant - 1; index >= 0; index--) {
        chips[index].draw();
    }
}


function init() {
    addChip(cant = 27);
    addBoard(row = 6, col = 7);
    draw(cant = 27, row = 6, col = 7);
    initEvents();
    setInterval(draw, 500);
}

init();
function initEvents() {
    board.onmousedown = mouseDown;
    board.onmousemove = mouseMove;
    board.onmouseup = mouseUp;
}

function mouseDown(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    for (let i = 0; i < chips.length; i++) {
        if (chips[i].checkSelected(x, y)) {
            console.log('me clickearon');
            console.log(chips[i]);
            chips[i].setSelected(true);
        } else {
            console.log('no me clickearon');
            chips[i].setSelected(false);
        }
    }

}

function mouseMove(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    for (let i = 0; i < chips.length; i++) {
        if (chips[i].isSelected(e)) {
            console.log(e);
            if (x > 0 && x < board.width && y > 0 && y < board.height) { //chequear esta condicion por las dudas
                chips[i].move(x, y, e);
                return;
            } else {
                mouseUp();
            }
        }
    }
}

function mouseUp() {
    chips.forEach(chip => {
        chip.setSelected(false);
    });
}
