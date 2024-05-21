let diaSemana = prompt("Que dia es hoy?")
let claseRespuesta = document.querySelector('.respuesta');
if(diaSemana == 'domingo'){
    
    claseRespuesta.innerHTML = "¡Pongamos la olla, hoy se comen pastas!";
}
else{
    claseRespuesta.innerHTML = "Mejor lo dejamos para el domingo";
}