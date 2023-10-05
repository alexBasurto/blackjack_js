import Baraja from "./barajaDOM.js";

const testEjercicio2 =()=>{
    let baraja = new Baraja();
    baraja.mezclar();
    document.body.appendChild(baraja.sacarCarta().getHTML());
    document.body.appendChild(baraja.sacarCarta().getHTML());
}

export default testEjercicio2;