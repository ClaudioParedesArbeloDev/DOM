fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.productos = data;
            renderProductos(data);
        })

  let container = document.getElementById("container");

//funcion que renderiza los productos
function renderProductos(array){
    //limpiamos el contenedor
    container.innerHTML = '';
    //iteramos el array productos
    for (const producto of array){
        //creamos un nuevo elemento con el contenedor
        let contenedor = document.createElement('div');
        //agregamos el html al contenedor
        contenedor.innerHTML = `
            <div class="cardProducto">
                <img src="${producto.image}" class="cardImage" alt="...">
                <div class="cardBody">
                    <h5 class="cardTitle">${producto.title}</h5>
                    <p class="cardText">${producto.category}</p>
                    <p class="cardText">$ ${producto.price}</p>
                    <a href="#" class="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>`
    //agregamos una clase al contenedor para porder darle estilo
    contenedor.classList.add('productos');
    //agregamos la clase productos al contenedor
    container.appendChild(contenedor);
    }
}





//capturamos el elemento con id search que es un input
let search = document.getElementById("search");


//escuchar el evento de lo que ingreso en el input
//los eventos necesitamos pasarle cual es el evento a escuchar y la funcion que va a disparar ese evento.
search.addEventListener('input', busqueda);

//funcion que busca en el input y renderiza los productos
function busqueda(){
    //capturamos el valor del input
    let texto = search.value.toLowerCase();
    //filtramos el array productos
    let productoBuscado = productos.filter(producto => producto.modelo.toLowerCase().includes(texto));
    //renderizamos los productos
    renderProductos(productoBuscado);
}

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })