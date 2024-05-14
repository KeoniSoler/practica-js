//Funciones

//Ejercicio 1: 
function rectangulo(altura, ancho){
    return altura * ancho
}
let num1 = 3;
let num2 = 2;
let area = rectangulo(num1 , num2)
console.log(area)

//Ejercicio 2: 
function triangulo(base, altura1){
    return base * altura1 / 2
}
const num3 = 3
const num4 = 5
const areaTriangulo = triangulo(num3 , num4)
console.log(areaTriangulo)

//Ejercicio 3: 
function largoDelArray(array){
    return array.length
}
const largo = largoDelArray(['Messi', 'Maradona', 'Pele', 'Keoni'])
console.log(largo)

//Ejercicio 4: 
function cantidadDeLetras(palabra){
    return palabra.length
}
const letrasMessi = cantidadDeLetras("Messi")
console.log(letrasMessi)

//Ejercicio 5: 
function dolarHoy(precioEnPesosArgentinos){
    const factorDeCambio = 0.0011
        return precioEnPesosArgentinos * factorDeCambio
}
const resultado1 = dolarHoy(2)
console.log(resultado1)

//Ejercicio 6: 
function precioFinal(precio){
    let iva = 0.21
    return precio * (1 + iva)
}
const resultado2 = precioFinal(86)
console.log(resultado2)

//Ejercicio 7: 
function mitad(numero){
    const numeroDado = 2
    const numMitad = numero / numeroDado
    return numMitad
}
const nums = mitad(80)
console.log(nums)

//Ejercicio 8: 
function diaSegunNumero(array, numero){
    const resultadoArray = array;
    const numeroDia = numero;
    return resultadoArray[numeroDia]
}

const resultadoFinal = diaSegunNumero(['1/5/24', '2,8,24', '11,8,24', '5/3/24'], 3)
console.log(resultadoFinal)

//

//Ejercicio Funciones: 
function siguiente(numero) {
    return numero + 1;
  }
  
  function doble(numero) {
    return 2 * numero;
  }
  
  function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
  }

  //Creacion de los tres funciones. Anterior, triple y anteriorDeTripe
  function anterior(numero){
    const resta = numero - 1
    return resta
  }
  const datos = anterior(4)
  console.log(datos)

  function triple(numero){
    const triple = numero * 3
    return triple
  }
  const por3 = triple(2)
  console.log(por3)


  function anteriorDelTriple(numero){
    const anteriorDelTriple = anterior(triple(numero))
    return anteriorDelTriple
  }
  const anterior3 = anteriorDelTriple(3)
  console.log(anterior3)
  

