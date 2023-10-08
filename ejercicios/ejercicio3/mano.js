//import { fileURLToPath } from "url";
//import Baraja from "../ejercicio2/baraja.js";

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
      for (let carta of this.cartas) {
        valor += carta.getValor();
        if (carta.valor === "A") {
          tieneAs = true;
        }
      }
      if (valor > 21 && tieneAs) {
        valor -= 10;
      }
      return valor;
    }
  }

  export default Mano;
