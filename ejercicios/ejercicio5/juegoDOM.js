import Baraja from "../ejercicio2/barajaDOM.js";
import Jugador from "../ejercicio4/jugadorDOM.js";

class Juego {

    constructor() {

        this.iniciar();
    }

    async iniciar() {
        this.borrarMesa();
        this.baraja = new Baraja();
        this.baraja.mezclar();
        this.crupier = new Jugador();
        this.jugador = new Jugador();
        this.mostrarPuntuaciones(true);
        this.sacarCarta(this.jugador);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.sacarCarta(this.crupier);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.sacarCarta(this.jugador);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.sacarCarta(this.crupier, true);
        this.mostrarOpciones();
    }

    borrarMesa() {
        document.getElementById("opciones").innerHTML = "";
        document.getElementById("tablero").innerHTML = "";
        document.getElementById("puntuaciones").innerHTML = "";
        document.getElementById("ganador").innerHTML = "";
    }

    mostrarPuntuaciones(oculto = true) {
        let puntuaciones = document.getElementById("puntuaciones");
        let puntuacionJugador = document.createElement("p");
        puntuacionJugador.innerText = `Puntuación jugador: ${this.jugador.mano.getValor()}`;
        let puntuacionCrupier = document.createElement("p");
        if (oculto) {
            puntuacionCrupier.innerText = `Puntuación crupier: ?`;
        }
        else {
            puntuacionCrupier.innerText = `Puntuación crupier: ${this.crupier.mano.getValor()}`;
        }
        puntuaciones.innerHTML = "";
        puntuaciones.appendChild(puntuacionCrupier);
        puntuaciones.appendChild(puntuacionJugador);
    }

    sacarCarta(jugador, oculto = false) {
        if (jugador.plantado) {
            return;
        }

        let cartaSacada = this.baraja.sacarCarta();
        if (oculto) {
            cartaSacada.ocultar();
        }

        jugador.agregarCarta(cartaSacada);
        this.mostrarPuntuaciones(true);

    }


    mostrarOpciones(ended = false) {
        let opciones = document.getElementById("opciones");
        let botonPedir = document.createElement("button");
        botonPedir.innerText = "Pedir";
        botonPedir.addEventListener("click", () => {
            this.sacarCarta(this.jugador);
            this.jugar();
        });
        let botonPlantarse = document.createElement("button");
        botonPlantarse.innerText = "Plantarse";
        botonPlantarse.addEventListener("click", () => {
            this.jugador.plantarse();
            this.jugar();
        });
        opciones.innerHTML = "";
        let botonReset = document.createElement("button");
        botonReset.innerText = "Reiniciar";
        botonReset.addEventListener("click", () => {
            this.reiniciar();
        });
        if (!ended) {
            opciones.appendChild(botonPedir);
            opciones.appendChild(botonPlantarse);
        }

        opciones.appendChild(botonReset);
    }

    async jugar() {

        if (this.jugador.plantado) {
            this.mostrarOpciones(true);
            if (this.jugador.mano.getValor() > 21) {
                this.crupier.mano.mostrarCartas();
                this.crupier.plantarse();
                this.mostrarPuntuaciones(false);
                this.mostrarGanador();
                return;
            } else {
                this.jugarCrupier();
                return; //return ?????
            }
        }
        /*
        * TODO: 
        *  si el jugador se ha plantado
        *      mostrar las opciones con el juego terminado
        *      si el jugador se ha pasado de 21,
        *           mostrar las cartas del crupier, 
        *           plantar al crupier, 
        *           mostrar las puntuaciones 
        *           y mostrar el ganador
        *      si el jugador no se ha pasado de 21, jugar el turno del crupier
        */

    }

    async jugarCrupier() {
        this.crupier.mano.mostrarCartas();
        while (this.crupier.mano.getValor() < 17) {
            this.mostrarPuntuaciones(false);
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.sacarCarta(this.crupier);
            this.mostrarPuntuaciones(false);
        }
        this.mostrarPuntuaciones(false);
        this.mostrarGanador();
        /*
        * TODO:
        * mostrar las cartas del crupier
        * mientras la puntuación del crupier sea menor que 17
        *   mostrar las puntuaciones (sin ocultar la carta del crupier)
        *   esperar 1 segundo
        *   sacar una carta para el crupier
        *   mostrar las puntuaciones (sin ocultar la carta del crupier)
        * mostrar las puntuaciones (sin ocultar la carta del crupier)
        * mostrar el ganador
        */
    }


    jugadorGana(jugador1, jugador2) {
        const puntJug1 = jugador1.mano.getValor();
        const puntJug2 = jugador2.mano.getValor();
        if (puntJug1 > 21 && puntJug2 > 21 || puntJug1 === puntJug2) {
            return null;
        } else if (puntJug1 > 21 && puntJug2 <= 21) {
            return jugador2;
        } else if (puntJug1 <= 21 && puntJug2 > 21) {
            return jugador1;
        } else if (puntJug1 <= 21 && puntJug2 <= 21) {
            if (puntJug1 > puntJug2) {
                return jugador1;
            } else {
                return jugador2;
            }
        }
        /*
        * TODO:
        * Devuelve el jugador que gana la partida, si es un empate devuelve null
        * Para que un jugador gane, debe tener más puntos que el otro y no haberse pasado de 21, o no haberse pasado de 21 y que el otro sí se haya pasado
        * Si los dos se han pasado de 21 o tienen la misma puntuación, devuelve null
        */
    }

    mostrarGanador(borrar = false) {
        let ganador = this.jugadorGana(this.jugador, this.crupier);
        let ganadorDOM = document.getElementById("ganador");

        if (borrar) {
            ganadorDOM.innerText = "";
            return;
        }
        if (ganador === this.jugador) {
            ganadorDOM.innerText = "Has ganado!";
        }
        else if (ganador === this.crupier) {
            ganadorDOM.innerText = "Gana la casa";
        }
        else {
            ganadorDOM.innerText = "Empate";
        }
    }

    reiniciar() {
        this.iniciar();
    }

}

export default Juego;