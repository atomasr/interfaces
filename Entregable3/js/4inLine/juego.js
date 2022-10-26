

class Juego {
    constructor(img1, img2, name1, name2, num) {
        this.player1 = new Jugador(img1, name1, num);
        this.player2 = new Jugador(img2, name2, num);
        this.turner = player1.setTurn(true);
    }

    init() {
        this.player1.init();
        //this.player2.init();
    }


}
