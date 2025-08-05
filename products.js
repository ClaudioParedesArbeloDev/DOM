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

//capturamos el elemento con id container
let container = document.getElementById("container");

//iteramos el array productos
for (const producto of productos) {
    //creamos un nuevo elemento con el contenedor
    let contenedor = document.createElement('div');
    //agregamos el html al contenedor
    contenedor.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${producto.image}" class="card-img-top" alt="producto">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.precio}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    `;

    //agregamos la clase productos al contenedor
    contenedor.classList.add('productos');
    
    //agregamos el contenedor al container
    container.appendChild(contenedor);

}

//capturamos el elemento con id search
let search = document.getElementById("search");

search.addEventListener('input', busqueda);

function busqueda(){
    let busqueda = search.value;
    console.log(busqueda);
}