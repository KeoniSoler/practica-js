// Practica integradora DOM, alertas y condicionales

//1. Interactuando con el usuario y modificando el DOM.
//a
let bienvenida = alert("Bienvenidos a mi sitio.");
//b
let avanzar = confirm("¿Está seguro de querer avanzar?");
let saludo = document.querySelector('.saludo');

if(avanzar == true){
    saludo.innerText = "Qué alegría que quieras continuar tu visita";
}
else{
    saludo.innerText = "Lamentamos que no quieras continuar tu visita";
}
//c
let nombre = prompt("Ingrese su nombre");
//d
let titulo = document.querySelector(h1);
titulo.innerText = `Bienvenido ${nombre}`;
//e
let edad = prompt("¿Cuántos años tenés?")
if(edad < 18){
let general = document.querySelector('.container-general');
let denegado = document.querySelector('#accesoDenegado');
general.style.display = 'none';
denegado.style.display = 'block';
return;
}
//f
let gustos = confirm("¿Te gusta la programación?");
let background = document.querySelector('background-img');
if(gustos == false){
    background.innerHTML = '<img src="./img/gatito.jpeg">';
}
else{
   background.innerHTML = '<img src="./img/programmer.jpeg">';
}
//g
let avatar = document.querySelector('.avatar');
let nuevaImg = prompt("https://i0.wp.com/www.todosurf.com/wp-content/uploads/2022/09/teahupoo-e1664265863798.jpg?fit=1200%2C465&ssl=1");
avatar.src = nueva;
//h
let pelicula ={
    nombre: "",
    director: "",
    duracion: 0,
    actor: "",
}
//i
pelicula.nombre = prompt("Ingrese el nombre de su película favorita:");
pelicula.director = prompt("Ingrese el director de su película favorita:");
pelicula.duracion = Number(prompt("Ingrese la duración (en minutos) de su película favorita:"));
pelicula.actor = prompt("Ingrese el actor principal de su película favorita:");
//j
let listaPeliculas = document.querySelector('#pelicula');

listaPeliculas.innerHTML = `
    <li>Nombre: ${pelicula.nombre}</li>
    <li>Director: ${pelicula.director}</li>
    <li>Duración: ${pelicula.duracion}</li>
    <li>Actor: ${pelicula.actor}</li>
`;

//k
let desocultar = document.querySelector('#pelicula')
desocultar.style.display = 'block';