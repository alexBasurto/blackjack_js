import Carta from "./cartaDOM.js";

const testEjercicio1 =()=>{
    const carta = new Carta("corazones", "A");
    const carta2 = new Carta("corazones", "J");

    document.body.appendChild(carta.getHTML());
    document.body.appendChild(carta2.getHTML());

}

export default testEjercicio1;