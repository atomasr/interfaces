"use strict";

let board = document.getElementById('canvas');
let ctx = board.getContext('2d');

class Ficha {

    constructor(posX, posY, r, pic) {
        this.r = r;
        this.posX = posX;
        this.posY = posY;
        this.char = new Image();
        this.char.src = pic;
    }

    setPosX(x) {
        this.posX = x;
    }

    setPosY(y) {
        this.posY = y;
    }

    setSrc(pic) {
        this.char.src = pic;
    }

    setR(r) {
        this.r = r;
    }

    drawChip(x, y) {
        let img = this.char;
        img.src = this.char.src;
        x = this.posX;
        y = this.posY;
        img.onload = function () {
            ctx.drawImage(img, x, y, 49, 49);
        }
    }

    checkSelected(x, y) {
        return x > (this.posX - this.r) && x < (this.posX + this.r) && (y > this.posY - this.r) && y < (this.posY + this.r);
    }

    isSelected() {
        return this.selected;
    }

    setSelected(selected) {
        this.selected = selected;
    }

    move(x, y, e) {
        if (x > this.r && x < (1024 - this.r) && y > this.r && y < (530 - this.r)) {
            this.posX = x;
            this.posY = y;
        }
    }

}