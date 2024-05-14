//Objetos Literales

// Ejercicio 1 y 2: misDatos

const misDatos = {
nombre: "Keoni",
apellido: "Soler",
dni: "12345678",
comidasFavoritas: ["Milanesa", "Hamburguesa", "Pizza"],
edad: 19,
saludar: function(){
return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas[0]}.`;
}
};
console.log(misDatos.saludar());

// Ejercicio 3: auto
const auto = {
marca: "Bmw",
modelo: "520i",
anio: "1988",
color: "Gris",
posicion: 0,
avanzar: function(n){
    this.posicion += n;
},
retroceder: function(n){
    this.posicion -= n;
}

};

auto.avanzar(20);
auto.retroceder(3);
console.log(auto.posicion);

// Ejercicio 4: nuevoAuto
const nuevoAuto = {
    marca: "Subaru",
    modelo: "Sub",
    anio: "1993",
    color: "Azul",
    posicion: 0,
    moverse: function(n){
        this.posicion += n;
    }
    
}
nuevoAuto.moverse(19);
nuevoAuto.moverse(-5);
console.log(nuevoAuto.posicion);

// Ejercicio 5: Batalla Superheroes
const ironMan = {
nombre: "Iron Man",
equipo: "Avengers",
poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
energia: 100,
getPoder: function(parametro){
    this.energia -= 10;
    return `Poder Elegido de: ${this.nombre}: ${this.poderes[parametro]}. Energía restante: ${this.energia}.`;
}
}

const Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "`Gritar`", "Golpear"],
    energia: 100,
    getPoder: function(parametro){
        this.energia -= 10;
        return `Poder Elegido de: ${this.nombre}: ${this.poderes[parametro]}. Energía restante: ${this.energia}.`;
    }
    }

console.log(ironMan.getPoder(1)); 
console.log(Hulk.getPoder(2));  
