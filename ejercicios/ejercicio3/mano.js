//import { fileURLToPath } from "url";
import Baraja from "../ejercicio2/baraja.js";

class Mano {
    constructor() {
        this.cartas = []
    }
  
    agregarCarta(carta) {
        this.cartas.push(carta);
    }
  
    getValor() {
      let valor = 0;
      let tieneAs = false;
      for (let carta in this.cartas) {
        if(carta.valor === "J" || carta.valor === "Q" || carta.valor === "K") {
          valor += 10;
        } else if (carta.valor === "A") {
          valor += 11;
          tieneAs = true;
        } else {
          valor += carta.valor;
        }
      }
      if (valor > 21 && tieneAs) {
        valor -= 10;
      }
      return valor;
    }
  }

  export default Mano;
