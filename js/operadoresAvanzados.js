
let num = 10;

num = num + 1;

console.log(num);

num++;

console.log(num);

num += 1;

console.log(num);

let temperatura = 31;

if (temperatura > 30) {
    console.log('Es un dia caluroso');
} else {
    console.log('Es un dia agradable');
}

temperatura > 30 ? console.log('Es un dia caluroso') : console.log('Es un dia agradable');

const usuario = {
    nombre: 'Roberto',
    edad: 19,
    sexo: 'masculino'
}

const permiso = usuario.edad >= 18 ? true : false;

console.log(permiso);

permiso ? console.log('Puede comprar cerveza') : console.log('No puede comprar cerveza');



const carrito = [];

carrito.length === 0 && console.log('El carrito está vacío') 

/* if (carrito.length === 0) {
    console.log('El carrito está vacío');
}else {
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i]);
    }
}

console.log(carrito[5]);

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(i);
}
carrito.push('zapatilla')

carrito.push('zapato')

localStorage.setItem('carrito', JSON.stringify(carrito));



const carrito2 = JSON.parse(localStorage.getItem('carrito')); */

/* const contador = document.getElementById('num');
contador.innerHTML = carrito2.length; */

/* const user = {
    nombre: ' Jony',
    edad: 14,
    sexo: 'masculino'
}

const registroIngreso = user.edad >= 18 && new Date()

console.log(registroIngreso);


console.log(0 || "Falsy");
console.log(1 || "Falsy");
console.log(null || "Falsy");
console.log(undefined || "Falsy");
console.log(false || "Falsy");
console.log(true || "Falsy");

const usuario1 = {
    nombre: 'Roberto',
    edad: 19,
    sexo: 'masculino',
    trabajo:{
        javascript: "aprobado",
    }
}

const usuario2 = null;

console.log(usuario1?.curso.javascript || "Esto evita el error");

console.log(usuario2 || "El usuario no existe");


const usuario3 = null;



console.log(usuario3.nombre || "El usuario no existe");

console.log(usuario3?.nombre || "El usuario no existe"); */

let usuario4 = {
    nombre: 'Alexis',
    apellido: ' Franco',
    edad: 25,
    sexo: 'masculino',
    telefono:{
        celular: "9999999999",
        trabajo: "9999999997",
    }
}

/* let name = usuario4.nombre;



let {nombre, apellido, edad, sexo } = usuario4;

console.log(apellido, edad);

let {telefono: {trabajo}} = usuario4;

console.log(trabajo); */

let{nombre: name, apellido: lastname, edad: age} = usuario4;

console.log(name, lastname, age);

const producto = {
    nombre: "iPhone 14",
    precio: 999,
    stock: 10,
    id: 1
}

const producto2 = {
    ...producto,
    origen: "España",
    fabricacion: 2024
}

console.log(producto2);

const desestructurar = (product) => {
    const {nombre, precio, id} = product;
    console.log(nombre, precio, id);
}

desestructurar(producto);

let alumnos = ["Roberto", "Alexis", "Claudio"];

console.log(alumnos)

console.log(...alumnos)

const numerica = [1, 2, 3, 4, 5];

console.log(Math.max(numerica))

console.log(Math.max(...numerica))

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const juntos = [...array1, ...array2];

console.log(juntos)

const objeto1 = {...juntos}

console.log(objeto1)



function sumar(...n) {
    console.log(n)
}

sumar(1, 3)

sumar(1, 2, 3, 4, 5,6 ,7 ,8)

function conParametros(...a){
    console.log(a)
}

conParametros(1, 2, 3)