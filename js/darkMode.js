let modoOscuro = confirm("¿Querés aplicar dark mode en el sitio?");
let respuesta = document.querySelector('.respuesta');

if (modoOscuro) {
    document.body.style.backgroundColor = '#444';
    document.body.style.color = '#fff';
    respuesta.innerHTML = "Dark Mode activado.";
} else {
    respuesta.innerHTML = "Ok. Lo activo en otro momento.";
}