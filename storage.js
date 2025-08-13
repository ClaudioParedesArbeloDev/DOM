//localStorage es una forma de almacenar datos en el navegador
//setItem almacena un valor en el localStorage
localStorage.setItem('nombre', 'Claudio');
localStorage.setItem('boolean', true);
localStorage.setItem('numero', 10);


//getItem recupera un valor almacenado en el localStorage
//para que getItem recupere un valor le tenemos que dar la referencia que es la clave
let mensaje = localStorage.getItem('nombre');
console.log(mensaje);

//setItem en sessionStorage almacena un valor en el navegador
sessionStorage.setItem('nombre', 'Lucho');
sessionStorage.setItem('array', [1,2,3,4,5]);
sessionStorage.setItem('boolean', false);

//getItem en sessionStorage recupera un valor almacenado en el navegador
let array = sessionStorage.getItem('array').split(',');
let nombre = sessionStorage.getItem('nombre');
let booleano = (sessionStorage.getItem('boolean') == 'true');


console.log(typeof nombre);
console.log(typeof array);
console.log(array);
console.log(booleano);


//buble for cuenta desde hasta, lo primero es una variable que va a marcar el comienzo 
// y luego del punto y coma el final y por ultima le decime que sume de a uno
for (let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log(clave);
    console.log(localStorage.getItem(clave));
}

//removeItem elimina un valor de localStorage o sessionStorage, le tenemos que dar la clave
sessionStorage.removeItem('nombre');

//clear elimina todo el contenido de localStorage o sessionStorage
localStorage.clear();


const producto1 = {
    id: 1,
    producto: "Zapato",
}

localStorage.setItem('producto', JSON.stringify(producto1));

const producto2 = (localStorage.getItem('producto'));
console.log(producto2);

//funcion comun
function decirSi () {
    console.log('Si');
}

//asi se llama a la funcion
decirSi();

//funcion anónima
let decirNo = function (){
    console.log('No');
}

decirNo();

//funcion flecha
let functionFlecha = (a, b) => a + b

console.log(functionFlecha(2, 3));

