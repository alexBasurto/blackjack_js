import ManoBase from "./mano.js";

class Mano extends ManoBase {
    constructor() {
        super();
        this.deck = document.createElement("section");
        this.deck.classList.add("deck");
        document.getElementById("tablero").appendChild(this.deck);

    }
    agregarCarta(carta) {
        super.agregarCarta(carta);
        this.deck.appendChild(carta.getHTML());
    }
    ocultarCartas() {
        this.cartas.forEach((carta, index) => {
            if (index !== 0) {
                carta.ocultar();
            }
        });
    }
    mostrarCartas() {
        this.cartas.forEach((carta, index) => {
            carta.mostrar();
        });
    }
   
}

export default Mano;