// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');
    let saludo = document.querySelector('#saludo');
    let span = document.querySelector('.bienvenida span');
    titulo.addEventListener('mouseover', function(){
        let nombre = prompt('¿CÓMO TE LLAMÁS?');
        if(nombre == ''){
            saludo.innerText = `BIENVENID@`
        }
        else{
            saludo.innerText = `BIENVENID@ ${nombre}`
        }
        saludo.style.textTransform = "uppercase";
        titulo.style.display = "none";
        span.style.display = "inline";

    });

    span.addEventListener('click', function() {
        bienvenidaSection.style.display = "none";
        personajesSection.style.display = "flex";
    });

    let personajes = {
        bart: 'click',
        lisa: 'dblclick',
        homero: 'click',
        marge: 'mouseenter',
        maggie: 'mouseleave',
        milhouse: 'click',
        burns: 'mouseenter',
        bobPatinio: 'dblclick',
        flanders: 'mouseenter',
        duffman: 'dblclick',
        gorgory: 'mouseenter',
        nelson: 'click'
    };

     /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    
    for (let id in personajes) {
        let personaje = document.getElementById(id);
        let evento = personajes[id];
        personaje.addEventListener(evento, function() {
            personaje.classList.toggle('personaje-seleccionado');
        });
    }

        /* Asignarle evento a la variable boton */
   // let boton = ;
    boton.addEventListener('click', function() {
        let seleccionados = document.querySelectorAll('.personaje-seleccionado');
        console.log('Personajes seleccionados:', Array.from(seleccionados).map(el => el.id));
    });
 
 
 });