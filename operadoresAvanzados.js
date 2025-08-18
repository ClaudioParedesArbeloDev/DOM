
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



const carrito = ['manzana', 'pera', 'mandarina'];

if (carrito.length === 0) {
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



const carrito2 = JSON.parse(localStorage.getItem('carrito'));

const contador = document.getElementById('num');
contador.innerHTML = carrito2.length;

