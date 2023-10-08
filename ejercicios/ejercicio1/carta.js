
class Carta {
  constructor(palo, valor) {
    this.palo = palo;
    this.valor = valor;
  }

  getValor() {
    if (this.valor === 'J' || this.valor === 'Q' || this.valor === 'K') {
      return 10;
    } else if (this.valor === 'A') {
      return 11;
    } else {
      return parseInt(this.valor);
    }
  }

  ocultar() {
    this.carta.classList.add("oculto");
  }

  mostrar() {
    this.carta.classList.remove("oculto");
  }
}

export default Carta;