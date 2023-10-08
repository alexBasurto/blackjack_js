//import { fileURLToPath } from "url";
import Carta from "../ejercicio1/carta.js";

class Baraja {
    constructor() {
        this.cartas = [];
        const palos = ["corazones", "diamantes", "tréboles", "picas"];
        const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        
        for (let palo of palos) {
            for (let valor of valores) {
                this.cartas.push(new Carta(palo, valor));
            }
        }
    }
  
    mezclar() {
            /* let currentIndex = this.cartas.length,  randomIndex;
            // While there remain elements to shuffle.
            while (currentIndex > 0) {
              // Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              // And swap it with the current element.
              [this.cartas[currentIndex], this.cartas[randomIndex]] = [
                this.cartas[randomIndex], this.cartas[currentIndex]];
            } */
            for (let i = this.cartas.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
              }
    }
  
    sacarCarta() {
        return this.cartas.pop();
    }
  }

    export default Baraja;
