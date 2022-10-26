let board = document.getElementById('canvas');
let ctx = board.getContext('2d');

function clearCanvas() {
    ctx.clearRect(0, 0, 1024, 530);
}


var chips = [];


function addChip(cant) {
    let src = 'img/gameDetail/characters/Chip (3).svg';
    let x = 200;
    let y = 50;
    let rows = cant / 11;
    let max = cant / rows;

    for (let i = 0; i < rows; i++) {
        for (let index = 0; index < max; index++) {
            let chip = new Ficha(x, y, 24, src);
            y += 40;
            chips.push(chip);
            console.log(chips);
        }
        y = 50;
        x += 60;
    }
}

function drawChips() {
    clearCanvas();
    for (let index = this.cant - 1; index >= 0; index--) {
        chips[index].draw();
    }
}

function init() {
    addChip(cant = 27);
    drawChips(cant = 27);
    initEvents();
    setInterval(drawChips, 20);
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
