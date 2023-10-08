/* import { fileURLToPath } from "url"; */
import Mano from "../ejercicio3/mano.js"
import Baraja from "../ejercicio2/baraja.js";

class Jugador {
  constructor() {
    this.mano = new Mano();
    this.plantado = false;
  }

  agregarCarta(carta) {
    this.mano.agregarCarta(carta);
    if (this.mano.getValor() > 21) {
      this.plantado = true;
    }
  }
  
  plantarse() {
    this.plantado = true;
  }

  mostrarMano(oculto = false) {
    let cartasMano = this.mano.cartas;
    let answer = "";
    if (cartasMano.length === 0) {
      return 'no tiene cartas';
    }
      for (let i = 0; i < cartasMano.length; i++){
        if (oculto === false || i === 0) {
          answer += `${cartasMano[i].valor} de ${cartasMano[i].palo}, `;
        } else {
          answer += '?, '
        }
      }
      return answer;
    /*
    * TODO: Devolver un string con las cartas de la mano
    * Si oculto es true, mostrar sólo la primera carta, el resto mostrarlas como "?"
    * Ejemplo: "A de corazones, ?"
    * Si oculto es false, mostrar todas las cartas
    * Ejemplo: "A de corazones, 2 de corazones"
    */
  }
}

export default Jugador;

