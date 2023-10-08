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