
let num1 = prompt("Ingrese un número:");
num1 = Number(num1);


let num2 = prompt("Ingrese otro número:");
num2 = Number(num2);


function multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2;
    return `El resultado de multiplicar ${numero1} y ${numero2} es: ${resultado}`;
}

console.log(multiplicar(num1, num2));