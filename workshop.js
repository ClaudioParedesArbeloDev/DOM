//Condicionales
//IF ELSE

let nombre = "Davidson";

if (nombre == "Martin"){
    console.log("Vos sos un poquito colorado")
}else if (nombre == "Davidson"){
    console.log("Vos sos grandote")
}else{
    console.log("Vos no sos Martin")
}

//Bucle while se va a ejecutar mientras la condicion sea verdadera

/* let i = 20;

while (i > 12) {
    console.log(i);
    i--;
} */

//do while se ejecuta aunque sea una vez y se va a ejecutar mientras la condicion sea verdadera
/* let j = 20;

do {
    console.log(j);
    j--;
}while (j > 21); */

//Funciones 
//Una funcion es un bloque de codigo que se puede llamar desde cualquier parte del codigo

/* function saludar(nombre){
    console.log("Como estas " + nombre + "?")
}

const name = prompt("Cual es tu nombre?");
saludar(name); */

//Funcion anonima

const anonima = function(){
    console.log("Esto es una funcion anonima")
}

anonima();

//Funcion Flecha
const flecha = () =>{
    console.log("Esto es una funcion flecha")
}

flecha();

const suma = (a, b) => a + b;

console.log(suma(10, 20));

if(nombre == "Davidson"){
    console.log("Vos sos grandote")
}else{
    console.log("Vos no sos Davidson")
}


console.log(nombre == "Davidson" ? "Vos sos grandote" : "Vos no sos Davidson");

//Que JS es un lenguaje orientado a objetos
//Funcion contructora que eso fue en lenguaje anterior a la version ES6
// a partir de ES6 se pueden usar clases

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

let roberto = new Persona("Roberto", 25);
console.log(roberto);

class Animal {
    constructor(raza, color) {
        this.raza = raza;
        this.color = color;
    }
}

let perro = new Animal("Perro", "marron");

console.log(perro);

let personas = ["Davidson", "Martin", "Roberto"];

console.log(personas.length)

console.log(personas.splice(1, 2));

console.log(personas[0].split(""));