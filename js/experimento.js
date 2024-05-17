// Ejercicio 2: 

//Interactuando con el usuario desde la consola

//a

//b
let nombre = prompt("Ingrese su nombre");
console.log("Nombre del Usuario:", nombre);

//c
let edad = prompt("Ingrese su edad");
console.log("Edad del Usuario:", edad);

//d
let fanDeportes = confirm("Te gustan los deportes?");
console.log("Te gustan los deportes?", fanDeportes);

//e
let leyenda = alert(`Muchas gracias ${nombre} por responder nuestras preguntas`);

//f
let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    deportistaProfesional: function() {
        if (this.fanDeportes == true) {
            return "Sí, soy fan de los deportes";
        } 
        else {
            return "No soy tan fan aún de los deportes";
        }
    }
};
console.log(usuario.deportistaProfesional());

//Probemos ahora agregando funciones

