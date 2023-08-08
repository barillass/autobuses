function precio() {
let tipo = document.querySelector("#tipo").value;
let km = parseInt(document.querySelector("#km").value);
let personas = parseInt(document.querySelector("#personas").value);

    if (tipo === "a") {
        if (personas >= 20){
            total = km * 2
            precio = total / personas
        }else {
            total = km * 2
            precio = total / 20
        }
    }else if (tipo === "b"){
        if (personas >= 20){
            total = km * 2.5
            precio = total / personas
        }else {
            total = km * 2.5
            precio = total / 20
        }
    }else if (tipo === "c"){
        if (personas >= 20){
            total = km * 3
            precio = total / personas
        }else {
            total = km * 3
            precio = total / 20
        }
    }

    document.querySelector("#precio").innerHTML = `El precio del viaje es: $${total}`;
    document.querySelector("#persona").innerHTML = `El precio del viaje es: $${precio}`;
}

document.querySelector("button").addEventListener("click", precio);
