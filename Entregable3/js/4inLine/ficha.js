'use strict';

class Ficha {

    constructor(posX, posY, r, ctx) {
        this.width = 2*r;
        this.height = 2*r;
        this.r = r;
        this.posX = posX;
        this.posY = posY;
    }
    
    draw(x, y, img = null) {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = '00ff00';
        //img = document.getElementById('char1');
        //pattern = ctx.createPattern(img, 'no-repeat');
        //ctx.fillStyle = pattern;
        ctx.fill();
        ctx.closePath();
    }

    checkSelected(x, y) {
        return x > (this.posX - this.width/2) && x < (this.posX + this.width/2) && (y > this.posY - this.height/2)  && y < (this.posY + this.height/2);
    }

    isSelected() {
        return this.selected;
    }

    setIsSelected(selected) {
        this.selected = selected;
    }

    move(x, y){
        this.posX = x;
        this.posY = y;
    }



}