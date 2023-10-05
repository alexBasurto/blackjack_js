import { fileURLToPath } from "url";
import Mano from "../ejercicio3/mano.js"
import Baraja from "../ejercicio2/baraja.js";

class Jugador {
    constructor() {
        /*
        * TODO: Inicializar la propiedad mano como un objeto de la clase Mano y la propiedad plantado a false
        */
    }
  
    agregarCarta(carta) {
        /*
        * TODO: Agregar una carta a la mano
        * Si el valor de la mano es mayor que 21, plantarse
        */
    }
    plantarse() {
      /*
      * TODO: Cambiar la propiedad plantado a true
      */
    }
  
    mostrarMano(oculto=false) {
        /*
        * TODO: Devolver un string con las cartas de la mano
        * Si oculto es true, mostrar sólo la primera carta, el resto mostrarlas como "?"
        * Ejemplo: "A de corazones, ?"
        * Si oculto es false, mostrar todas las cartas
        * Ejemplo: "A de corazones, 2 de corazones"
        */
        
        return " no tiene cartas";
    }
  }

    export default Jugador;

