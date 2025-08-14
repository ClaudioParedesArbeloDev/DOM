//constante que guarda un objeto
const product = {id: 1, name: "iPhone", price: 1000, stock: 100, image: "https://www.apple.com/v/iphone/home/ar/images/overview/iphone_8-9_7e5ea53f.png"};

//funcion que convierte el objeto en una cadena de texto
const Stringify = JSON.stringify(product);

//guardamos el objeto en el localStorage
localStorage.setItem("objeto", Stringify);

//guardamos el objeto en el localStorage
localStorage.setItem("producto2", JSON.stringify(product));


//recuperamos el objeto
 const recuperar = JSON.parse(localStorage.getItem("producto2"));

/* const recuperar = localStorage.getItem("producto2"); */

console.log(recuperar);


let productos = [
    {id: 1, marca: "ASICS", modelo: "ZAPATILLAS RUNNING HOMBRE ASICS GEL-WINDHAWK AZUL/PLATA", descripcion: "Equipada con tecnologías GEL™ para la máxima comodidad, entresuela AMPLIFOAM+™ y plantilla MAXLITE™ para una amortiguación óptima.", precio: "74.99", imagen:"https://contents.mediadecathlon.com/p2799007/k$d959170f8fc5ac9b26f8147450a526bd/picture.jpg?format=auto&f=640x0", stock: 10, categoria: "zapatillas hombre"},
    {id: 2, marca: "ADIDAS", modelo: "ZAPATILLAS DE RUNNING HOMBRE ADIDAS RUNBLAZE NEGRAS ", descripcion: "Cada carrera es una invitación a descubrir. Cálzate estas zapatillas de running adidas y explora tu potencial.", precio: "54.99", imagen:"https://contents.mediadecathlon.com/p2777204/k$289a27c3c5d696aa1d4877f4174cd7e8/picture.jpg?format=auto&f=640x0", stock: 20, categoria: "zapatillas hombre" },
    {id: 3, marca: "KALENJI", modelo: "ZAPATILLAS DE RUNNING HOMBRE JOGFLOW 100.1 GRIS NARANJA ", descripcion: "Con amortiguación y ligereza gracias a su espuma mullida, esta zapatilla de running para hombre te proporcionará una buena absorción de las ondas de choque. ", precio: "19.99", imagen:"https://contents.mediadecathlon.com/p2393843/k$0089bcf744c72cefedf50160b3d35941/picture.jpg?format=auto&f=640x0", stock: 12, categoria: "zapatillas hombre" },
    {id: 4, marca: "KALENJI", modelo: "Zapatillas running y trail Hombre, Kiprun JF 190 GRIP azul ", descripcion: "¡Desafía los senderos con total libertad! La sujeción y el agarre son sus dos ventajas para hacer running en la naturaleza y en la carretera. ", precio: "39.99", imagen:"https://contents.mediadecathlon.com/p2933866/k$3abeb1d26570c6ac39c7fe88642a486f/picture.jpg?format=auto&f=640x0", stock: 20, categoria: "zapatillas hombre" },
    {id: 5, marca: "ADIDAS", modelo: "ZAPATILLAS DE RUNNING HOMBRE ADIDAS SUPERNOVA EASE BLANCAS ", descripcion: "Supernova Ease está diseñada para corredores nivel iniciación a perfeccionamiento. Ofrece comodidad y sujeción gracias a una cómoda suela DREAMSTRIKE EVA y a un empeine diseñado para un ajuste óptimo.", precio: "44.99", imagen:"https://contents.mediadecathlon.com/p2887575/k$1b98ea442406c3653c594d280a1f0b5d/picture.jpg?format=auto&f=640x0", stock: 30, categoria: "zapatillas hombre" },
    {id: 6, marca: "ASICS", modelo: "ZAPATILLAS RUNNING MUJER ASICS - GEL WINDHAWK NEGRO/CORAL ", descripcion: "Equipada con tecnologías GEL™ para la máxima comodidad, entresuela AMPLIFOAM+™ y plantilla MAXLITE™ para una amortiguación óptima. ", precio: "74.99", imagen:"https://contents.mediadecathlon.com/p2798992/k$b9320afdd2aaf67c28fcfa34e9e4d83c/picture.jpg?format=auto&f=640x0", stock: 5, categoria: "zapatillas mujer" },
    {id: 7, marca: "KIPRUN", modelo: "Zapatillas de Running mujer, Kiprun Jogflow 190.1 Verde Rosa ", descripcion: "Esta zapatilla ofrece una amortiguación mullida que absorbe los impactos con eficacia, proporcionando una sensación de ligereza y protección durante la carrera. ", precio: "19.99", imagen:"https://contents.mediadecathlon.com/p2819164/k$960ce96f88221939ed64f170e8b8f223/picture.jpg?format=auto&f=640x0", stock: 13, categoria: "zapatillas mujer" },
    {id: 8, marca: "ADIDAS", modelo: "ZAPATILLAS DE RUNNING MUJER ADIDAS RUNBLAZE GRISES", descripcion: "Cada carrera es una invitación a descubrir. Cálzate estas zapatillas de running adidas y explora tu potencial.", precio: "54.99", imagen:"https://contents.mediadecathlon.com/p2777293/k$8876e09e72f0e3599bb382020ec7a153/picture.jpg?format=auto&f=640x0", stock: 12, categoria: "zapatillas mujer" },
    {id: 9, marca: "KIPRUN", modelo: "Zapatillas de Running mujer, Kiprun Jogflow 190.1 Negro Rosa ", descripcion: "Esta zapatilla ofrece una amortiguación mullida que absorbe los impactos con eficacia, proporcionando una sensación de ligereza y protección durante la carrera. ", precio: "29.99", imagen:"https://contents.mediadecathlon.com/p2819153/k$b820fcaa1b4138d4c6b790e571b8b99e/picture.jpg?format=auto&f=640x0", stock: 20, categoria: "zapatillas mujer" },
    {id: 10, marca: "KIPRUN", modelo: "Zapatillas de trail Running Mujer, Kiprun TR2 Verde ", descripcion: "Comodidad, flexibilidad, adherencia, amortiguación y agarre en terrenos fáciles y carretera: ¡todo ello en una zapatilla de trail, la TR2! Pisada neutra. Tacos de 4mm y parapiedras en puntera y talón", precio: "49.99", imagen:"https://contents.mediadecathlon.com/p2821259/k$434147e5e02a31023913ea04c97fc2f3/picture.jpg?format=auto&f=640x0", stock: 10, categoria: "zapatillas mujer" }, 
    {id: 11, marca: "KIPRUN", modelo: "Chaleco cortavientos running Hombre Kalenji Run Wind Negro", descripcion: "Chaleco con tejido cortavientos por lo que es ideal para los días ventosos. El componente es transpirable y tiene ventilación en la espalda.", precio: "8.99", imagen:"https://contents.mediadecathlon.com/p2934835/k$564c9ed0c3715b4713140ef9b6bbbf94/picture.jpg?format=auto&f=640x0", stock: 7, categoria: "ropa hombre" },
    {id: 12, marca: "KIPRUN", modelo: "Pantalón running y trail running impermeable Hombre - KIPRUN Run 900 Rain Negro ", descripcion: "Cumple las normas de impermeabilidad de los maxitrails.Impermeable a 10 000 Schmerber gracias al componente y a las costuras estancas. Compresible, se guarda en su bolsillo. ", precio: "39.99", imagen:"https://contents.mediadecathlon.com/p1762396/k$b56131dec728d1e3974cf4dab679a8c8/picture.jpg?format=auto&f=640x0", stock: 4, categoria: "ropa hombre" },
    {id: 13, marca: "KALENJI", modelo: "Camiseta Sin Mangas Running Dry Hombre Negro Transpirable", descripcion: "Confeccionada con poliéster reciclado, absorbe y evacúa el sudor para reducir la sensación de humedad. Elegir una talla más para más para mayor amplitud.", precio: "5.99", imagen:"https://contents.mediadecathlon.com/p2157170/k$8ec9561ab8d7d8a97662645d276cae76/picture.jpg?format=auto&f=640x0", stock: 10, categoria: "ropa hombre" },
    {id: 14, marca: "KIPRUN", modelo: "Chaqueta impermeable running y trail running Hombre - KIPRUN Run 500 Rain Negro ", descripcion: "Ligera e impermeable a 10.000 Schmerber gracias a su componente y a sus costuras estancas. Se guarda cómodamente en el fondo de la mochila.Cumple las normas de impermeabilidad de los ultra trails.", precio: "39.99", imagen:"https://contents.mediadecathlon.com/p1762401/k$e7c68ab27bb4eb102d66847d1377f1a6/picture.jpg?format=auto&f=640x0", stock: 9, categoria: "ropa hombre" },
    {id: 15, marca: "DECATHLON", modelo: "Camiseta running transpirable Hombre - KIPRUN 100 Dry Negro ", descripcion: "Esta camiseta de running evacua la humedad para mantenerte seco cuando hace calor. Es adecuada para una variedad de deportes y actividades y se seca más rápidamente que una camiseta de algodón.", precio: "6.99", imagen:"https://contents.mediadecathlon.com/p2157315/k$f7e6bac4b706a58cb6d47203ece9234c/picture.jpg?format=auto&f=640x0", stock: 20, categoria: "ropa hombre" },
    {id: 16, marca: "KALENJI", modelo: "Camiseta sin mangas Running transpirable mujer - Kiprun Run 100 azul claro ", descripcion: "Con su cuello redondo y corte amplio, ¡ofrece un confort óptimo durante las salidas de running! ", precio: "5.99", imagen:"https://contents.mediadecathlon.com/p2617179/k$5cdc1bbe8d269db96d2f90d648e5d48e/picture.jpg?format=auto&f=640x0", stock: 10, categoria: "ropa mujer" },
    {id: 17, marca: "DOMYOS", modelo: "Short pantalon corto fitness 2 en 1 Mujer Domyos negro", descripcion: "Pensado para que te sientas cómoda en la práctica deportiva, aunque te estés iniciando. Su talle alto asegura una buena sujeción y su tejido suave permite que tu cuerpo se exprese con toda confianza.", precio: "9.99", imagen:"https://contents.mediadecathlon.com/p2731656/k$0fb909fc52b0a250eaa843d475dcd7dd/picture.jpg?format=auto&f=640x0", stock: 0, categoria: "ropa mujer" },
    {id: 18, marca: "KIPRUN", modelo: "Pantalón corto running y trail transpirable Mujer - KIPRUN Run 500 Dry negro", descripcion: "Su tejido ligero y su cintura forrada con un tejido suave te garantizan una excelente sensación durante tus salidas de running y trail. ", precio: "14.99", imagen:"https://contents.mediadecathlon.com/p2609125/k$f28ea905839195ad169d95befbc33155/picture.jpg?format=auto&f=640x0", stock: 20, categoria: "ropa mujer" },
    {id: 19, marca: "KALENJI", modelo: "Short pantalón corto running Mujer Dry negro", descripcion: "Con cintura ancha y cordón para ajustar a la cintura. Su bolsillo trasero con cremallera te permite llevar tus efectos personales. Modelo ajustado, para mayor amplitud escoger una talla más y ajustar", precio: "9.99", imagen:"https://contents.mediadecathlon.com/p2071738/k$9adb1db87f639f12773a1f5b1222ea8b/picture.jpg?format=auto&f=640x0", stock: 30, categoria: "ropa mujer" },
    {id: 20, marca: "KALENJI", modelo: "Camiseta de Running transpirable mujer - KIPRUN Run 100 rosa fucsia ", descripcion: "Disponible en tallas de la XS a la 5XL, esta camiseta es perfecta para todo tipo de cuerpos y necesidades.", precio: "5.99", imagen:"https://contents.mediadecathlon.com/p2600501/k$d0cb2fc9af587718b83800ddb3da5d5d/picture.jpg?format=auto&f=640x0", stock: 10, categoria: "ropa mujer" },
    {id: 21, marca: "FLUOR", modelo: "Gafas de sol Fluor Eyewear YX9208 C1-02 color Negro", descripcion: "Domina el deporte con FLUOR EYEWEAR YX9208 C1-02: Protección UV400, diseño ergonómico y estilo único. Perfectas para running, ciclismo y actividades al aire libre. ¡Vive la acción con FLUOR!", precio: "37.99", imagen:"https://contents.mediadecathlon.com/m19468120/k$50880610bfc527a4855761751bf13f8e/picture.jpg?format=auto&f=640x0", stock: 7, categoria: "ropa montaña, trekking y senderismo" },
    {id: 22, marca: "IZAS", modelo: "Pantalón de montaña y trekking Mujer Izas Leyte", descripcion: "Es perfecto para practicar trekking y disfrutar de todas tus actividades outdoor con máxima comodidad.", precio: "29.99", imagen:"https://contents.mediadecathlon.com/p2871501/k$f8896318034195ed45f9e252d16c4358/picture.jpg?format=auto&f=640x0", stock: 20, categoria: "ropa montaña, trekking y senderismo" },
    {id: 23, marca: "FORCLAZ", modelo: "Chaqueta 3en1 de montaña y trekking impermeable Hombre Forclaz NH100", descripcion: "Combinada con un forro polar desmontable, esta resistente chaqueta tiene múltiples bolsillos con cremallera para disfrutar de las estaciones con total tranquilidad, con cualquier tiempo y hasta 0 °C. ", precio: "49.99", imagen:"https://contents.mediadecathlon.com/p2067323/k$b206bbd3049c48142bfab4fb1b541b7d/picture.jpg?format=auto&f=640x0", stock: 10, categoria: "ropa montaña, trekking y senderismo" },
    {id: 24, marca: "QUECHUA", modelo: "Chubasquero montaña y trekking Niños 7-15 años Quechua MH150", descripcion: "Un chubasquero muy compacto, ya que se guarda en su bolsillo para llevarla en el fondo d ela mochila.", precio: "10.99", imagen:"https://contents.mediadecathlon.com/p2627242/k$46354adb435703aafd65fe3c30441645/picture.jpg?format=auto&f=640x0", stock: 20, categoria: "ropa montaña, trekking y senderismo" },
    {id: 25, marca: "COLUMBUS OUTDOOR", modelo: "Mochila ATNA 45 Columbus Azul de 45 litros", descripcion: "Mochila ideal para salidas de senderismo de media y larga duración", precio: "59.00", imagen:"https://contents.mediadecathlon.com/m13608193/k$166c7811cfead5b83d82100775d6962d/picture.jpg?format=auto&f=640x0", stock: 5, categoria: "ropa montaña, trekking y senderismo" },
    {id: 26, marca: "FORCLAZ", modelo: "Chaqueta 3en1 de montaña y trekking impermeable Hombre Forclaz NH100", descripcion: "Combinada con un forro polar desmontable, esta resistente chaqueta tiene múltiples bolsillos con cremallera para disfrutar de las estaciones con total tranquilidad, con cualquier tiempo y hasta 0 °C. ", precio: "39.99", imagen:"https://contents.mediadecathlon.com/p2598791/k$7f93b47c44fb9f1a714c7d97f6e9bd4c/picture.jpg?format=auto&f=640x0", stock: 7, categoria: "ropa montaña, trekking y senderismo" },
    {id: 27, marca: "IZAS", modelo: "Pantalón de montaña y trekking Mujer Izas Leyte", descripcion: "Es perfecto para practicar trekking y disfrutar de todas tus actividades outdoor con máxima comodidad.", precio: "29.99", imagen:"https://contents.mediadecathlon.com/p2871536/k$e1e062bc65a02c5d5087bad57fb26896/picture.jpg?format=auto&f=640x0", stock: 9, categoria: "ropa montaña, trekking y senderismo" },
    {id: 28, marca: "MERRELL", modelo: "Zapatillas de montaña y trekking Hombre Merrell Crosslander", descripcion: "Su suela Merrell® y la tecnología Merrell® Air-Cushion en el talón te proporcionarán un gran agarre y adherencia. Además, cuentan con un refuerzo en la puntera para los terrenos pedregosos.", precio: "59.99", imagen:"https://contents.mediadecathlon.com/p2149685/k$9f7e0495639af29ba06380b5c0231f15/picture.jpg?format=auto&f=640x0", stock: 20, categoria: "ropa montaña, trekking y senderismo" },
    {id: 29, marca: "MERRELL", modelo: "Zapatillas de montaña y trekking Mujer Merrell Crosslander 3", descripcion: "Amortiguación en talón y sujeción reforzadas, y también ligereza y comodidad son las ventajas de estas zapatillas de senderismo para mujer. ", precio: "59.99", imagen:"https://contents.mediadecathlon.com/p2876225/k$87238e1aaf4d23fdf60b4f4b687e68ee/picture.jpg?format=auto&f=640x0", stock: 10, categoria: "ropa montaña, trekking y senderismo" },
    {id: 30, marca: "QUECHUA", modelo: "Cantimplora 900 isotérmica inox 0,5L tapón apertura rápida para senderismo", descripcion: "Cantimplora isoterma para mantener los líquidos calientes o fríos. Mucho más ligera que una cantimplora isoterma convencional. Tapón de rosca, apertura fácil, con filtro integrado. / 0,5 litro", precio: "8.99", imagen:"https://contents.mediadecathlon.com/p2851434/k$e11979a956b3943db2f39a92e6f44448/picture.jpg?format=auto&f=640x0", stock: 30, categoria: "ropa montaña, trekking y senderismo" },
]

// una funcion anonima a la cual le pasamos dos parametros (clave y valor), y luego 
// simplemente colocamos como guardar en local storage
const guardarLocal = (clave, valor) =>{
    localStorage.setItem(clave, valor);
}


//hacemos un bucle for of para recorrer el array productos
for (const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto));
}

//guardamos el array completo de productos en el localStorage
guardarLocal("listaProductos", JSON.stringify(productos));

//una clase constructora que va a dar molde a un objeto
// pero que solo va a tener marca, modelo y precio
class Producto {
    constructor(obj){
        this.marca = obj.marca.toUpperCase();
        this.modelo = obj.modelo.toLowerCase();
        this.precio = parseFloat(obj.precio);
    }

    sumarIva(){
        this.precio = this.precio * 1.21;
    }
}

//recuperar el array de productos parseandolo para tenerlo con clave y valor
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));


//Crear un array de productos vacio para poder pushear 
const productillos = [];

//el bucle for of va a recorrer el array almacenados
for (const o of almacenados){
    productillos.push(new Producto(o));
}

console.log(productillos);

//recuperar datos
//creamos una variable usuario vacia
let usuario;

//recuperamos el usuario si existe
let usuarioEnLS = localStorage.getItem("usuario");

//imprimimos el usuario si existe
console.log(usuarioEnLS);

//si existe, lo recuperamos y lo asignamos a usuario
if(usuarioEnLS){
    usuario = usuarioEnLS
}else{
    usuario = prompt("Introduce tu nombre");
    localStorage.setItem("usuario", usuario);
}

//Como mandar nuestros productos al carrito

//crear un array de productos vacio

const carrito = [];

//recuperar los productos del localStorage
const carritoEnLS = JSON.parse(localStorage.getItem("carrito"));

console.log(carritoEnLS);





