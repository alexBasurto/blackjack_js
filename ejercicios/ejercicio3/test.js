import Mano from "./manoDOM.js";
import Baraja from "../ejercicio2/barajaDOM.js";

const testEjercicio3 = () => {
    let mano1 = new Mano();
    let mano2 = new Mano();
    let baraja = new Baraja();
    baraja.mezclar();
    for (let i = 0; i < 2; i++) {
        let carta = baraja.sacarCarta();
        mano1.agregarCarta(carta);

        carta = baraja.sacarCarta();
        mano2.agregarCarta(carta);
    }
    mano1.ocultarCartas();
    
}

export default testEjercicio3;