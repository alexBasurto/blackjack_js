import BaseCarta from './carta.js';

const distribucion ={
    1: [1],
    2: [1,1],
    3: [1,1,1],
    4: [2,2],
    5: [2,1,2],
    6: [2,2,2],
    7: [2,1,2,2],
    8: [2,1,2,1,2],
    9: [2,2,1,2,2],
    10: [2,1,2,2,1,2],
    11: [1],
}
class Carta  extends BaseCarta{

    constructor(palo, valor){
        super(palo, valor);
        this.crearCarta();
    }

    crearTitulo(reversed=false){
        /*
        * Método que devuelve el valor y la imagen del palo de la carta, 
        *si reversed es false, debería aparecer la imagen debajo del valor, si es true, debería aparecer la imagen encima del valor y los dos deberían tener el eje vertical invertido.
        */
        let titulo = document.createElement("div");
        titulo.classList.add("titulo");
        let valor = document.createElement("div");
        valor.classList.add("valor");
        valor.innerHTML = this.valor;
        let palo = document.createElement("img");
        palo.classList.add("palo");
        palo.src = `public/img/${this.palo.toLowerCase()}.png`;
        titulo.appendChild(valor);
        titulo.appendChild(palo);
        if(reversed){
            titulo.classList.add("reversed");
        }
        return titulo;
       
    }

    crearIcono(){
        let icono = document.createElement("article");
        let palo = document.createElement("img");
        palo.classList.add("palo");
        palo.src = `public/img/${this.palo.toLowerCase()}.png`;
        icono.appendChild(palo);
        return icono;
    }

    crearFila(elementos){
        let fila = document.createElement("section");
        fila.classList.add("fila");
        for (let i = 0; i < elementos.length; i++) {
            fila.appendChild(elementos[i]);
        }
        return fila;

    }

    ocultar(){
        this.carta.classList.add("oculto");
    }

    mostrar(){
        this.carta.classList.remove("oculto");
    }

    crearFigura(){
        let figura = document.createElement("div");
        figura.classList.add("figura");
        let imagen = document.createElement("img");
        imagen.src = `public/img/${this.valor.toLowerCase()}${this.palo.toLowerCase()}.png`;
        figura.appendChild(imagen);
        return figura;
    }

    crearCuerpo(){
        let cuerpo = document.createElement("div");
        cuerpo.classList.add("cuerpo");
        if(["J", "Q", "K"].includes(this.valor)){
            cuerpo.appendChild(this.crearFigura());
            return cuerpo;
        }
        let elementos = [];
        let cantidad = this.getValor();
        let distribucionCarta = distribucion[cantidad];
        for (let i = 0; i < distribucionCarta.length; i++) {
            let fila = [];
            for (let j = 0; j < distribucionCarta[i]; j++) {
                fila.push(this.crearIcono());
            }
            elementos.push(this.crearFila(fila));
        }
        for (let i = 0; i < elementos.length; i++) {
            cuerpo.appendChild(elementos[i]);
        }
        return cuerpo;
    }

    getHTML() {
        return this.contenedor;
    }
    
    crearCarta() {
        this.contenedor = document.createElement("div");
        this.carta = document.createElement("div");
        let front = document.createElement("div");
        let back = document.createElement("div");
        this.contenedor.classList.add("contenedor");
        this.carta.classList.add("carta");
        front.classList.add("front");
        back.classList.add("back");
        let titulo1 = this.crearTitulo();
        let titulo2 = this.crearTitulo(true);
        front.appendChild(titulo1);
        front.appendChild(this.crearCuerpo());
        front.appendChild(titulo2);
        this.carta.appendChild(front);
        this.carta.appendChild(back);
        this.contenedor.appendChild(this.carta);
    }
    
}

export default Carta;