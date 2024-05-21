let dia = prompt("Ingrese un día de la semana:");
let hora = prompt("Ingrese la hora actual (formato 24 horas):");
let respuesta = document.querySelector('.respuesta');
diasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"]
if(diasDeLaSemana.dia && hora >= 10 && hora <= 15){
    respuesta.innerHTML = "¡Bien! Todavía estamos a tiempo de llegar.";
} else {
    respuesta.innerHTML = "Uf… No llegamos.";
}