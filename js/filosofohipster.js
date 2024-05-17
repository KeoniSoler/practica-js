
let nacionalidad = prompt("Ingrese su nacionalidad:");
let profesion = prompt("Ingrese su profesión:");
let kmsRecorridos = prompt("¿Cuántos kilómetros caminas por día?");

function filosofoHipster(nacionalidad, profesion, kmsRecorridos) {
    if (nacionalidad === "Argentino" && profesion === "Musico" && kmsRecorridos > 2) {
        return "Soy un filósofo hipster";
    } else {
        return "Aún no soy filósofo hipster";
    }
}

console.log(filosofoHipster(nacionalidad, profesion, kmsRecorridos));
