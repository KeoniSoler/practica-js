let num1 = prompt("Ingrese un numero?");
let num2 = prompt("Ingrese otro numero?");
let respuesta = document.querySelector(".respuesta");

if(num1 > num2){
    respuesta.innerHTML = `${num1} es el número mayor.`;
}
else {
    respuesta.innerHTML = `${num2} es el número mayor.`;
}
