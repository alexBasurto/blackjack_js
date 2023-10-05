import Carta from "../ejercicio1/cartaDOM.js";
import BarajaBase from "./baraja.js";

class Baraja extends BarajaBase {
    sacarCarta() {
        let carta = super.sacarCarta();
        return new Carta(carta.palo, carta.valor);
    }
}

export default Baraja;