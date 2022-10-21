'use strict';

class Ficha {

    board = document.getElementById('canvas');

    constructor(posX, posY, r, pic) {
        this.r = r;
        this.posX = posX;
        this.posY = posY;
        this.char = new Image();
        this.char.src = pic;
    }

    draw() {
/*         ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 255, 255, 0)";
        ctx.fill();
        ctx.stroke();
        ctx.closePath() */;
        ctx.drawImage(this.char, this.posX - this.r, this.posY - this.r);
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

    move(x, y) {
        this.posX = x;
        this.posY = y;
    }



}