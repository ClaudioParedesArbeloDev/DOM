/* let captar = document.getElementById("hola");

console.log(captar.innerHTML);

captar.innerHTML = "Como estan mis alumnos?";

let nombres = document.getElementsByTagName("li");

nombres[4].remove(); */

/* const container = document.getElementById("container");

let personas = [
    'Claudio',
    'Maria',
    'Juan',
    'Luis',
    'Marcos'
];

for (const persona of personas) {
    const parrafo = document.createElement('li');
    parrafo.innerHTML = persona;
    container.appendChild(parrafo);
} */

const productos = [
    {id: 1, nombre: 'iPhone', precio: 1000, image: 'https://buenosairesimport.com/7280-large_default/iphone-16-pro-max-256gb.jpg'},
    {id: 2, nombre: 'MacBook', precio: 500},
    {id: 3, nombre: 'iPad', precio: 800},
    {id: 4, nombre: 'MacBook Pro', precio: 1500},
    {id: 5, nombre: 'iMac', precio: 1200},
    {id: 6, nombre: 'MacBook Air', precio: 1000},
    {id: 7, nombre: 'MacBook Pro', precio: 1500},       
    {id: 8, nombre: 'iMac', precio: 1200},
    {id: 9, nombre: 'MacBook Air', precio: 1000},
    {id: 10, nombre: 'MacBook Pro', precio: 1500},
    {id: 11, nombre: 'iMac', precio: 1200},
    {id: 12, nombre: 'MacBook Air', precio: 1000},
    {id: 13, nombre: 'MacBook Pro', precio: 1500},
    {id: 14, nombre: 'iMac', precio: 1200},
    {id: 15, nombre: 'MacBook Air', precio: 1000},
    {id: 16, nombre: 'MacBook Pro', precio: 1500},
    {id: 17, nombre: 'iMac', precio: 1200},
    {id: 18, nombre: 'MacBook Air', precio: 1000},
];

let caja = document.getElementById('container');

for (const producto of productos) {
    let contenedor = document.createElement('div');
    contenedor.innerHTML = `
    <img src="${producto.image}" alt="producto">
    <p> Nombre: ${producto.nombre} </p>
    <b> Precio: ${producto.precio} </b>
    <button class="boton">Comprar</button>
    `
    contenedor.classList.add('productos');
    
    
    caja.appendChild(contenedor);
}

let btn = document.getElementsByClassName("boton");


let prueba = document.getElementById("button");

/* prueba.addEventListener('click', function(){
    alert("hola");
}) */

prueba.onclick = () => {
    console.log("prueba")
}

let buscar = document.getElementById("search");
buscar.addEventListener('keyup', function(){
    console.log(buscar.value)
})



/* let parrafo = document.querySelector("#container p");

let contenedor = document.querySelector("#container");

parrafo = document.querySelector(".texto")
 */