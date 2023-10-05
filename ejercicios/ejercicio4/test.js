import Jugador from "./jugadorDOM.js";
import Baraja from "../ejercicio2/barajaDOM.js";

const testEjercicio4 =()=>{
    const jugador1 = new Jugador();
    const jugador2 = new Jugador();
    const baraja = new Baraja();
    baraja.mezclar();
    for(let i = 0; i < 2; i++){
        let carta = baraja.sacarCarta();
        jugador1.agregarCarta(carta);
        carta = baraja.sacarCarta();
        jugador2.agregarCarta(carta);
    }
    jugador1.mano.ocultarCartas();
    console.log(`Jugador 1: ${jugador1.mostrarMano(true)}`);
    console.log(`Jugador 2: ${jugador2.mostrarMano()}`);
}

export default testEjercicio4;