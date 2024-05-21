let num = prompt("Ingrese un número:");
let respuesta = document.querySelector('.respuesta');
if (num > 0) {
    respuesta.innerHTML = `El número ${num} es positivo.`;
} else if (num < 0) {
    respuesta.innerHTML = `El número ${num} es negativo.`;
} else {
    respuesta.innerHTML = `El número ${num} es cero.`;
}