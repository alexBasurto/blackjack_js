import JugadorBase from './jugador.js';
import Mano from '../ejercicio3/manoDOM.js';

class Jugador extends JugadorBase {
    constructor() {
        super();
        this.mano = new Mano();
    }
}

export default Jugador;