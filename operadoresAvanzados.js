
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

const user = {
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
    sexo: 'masculino'
}

const usuario2 = null;

console.log(usuario1 || "El usuario no existe");

console.log(usuario2 || "El usuario no existe");



