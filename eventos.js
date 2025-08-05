let btn = document.getElementById("button");

/* btn.addEventListener('click', hablar);

function hablar(){
    console.log("hola");
} */

/* btn.addEventListener('click', ()=>{
    console.log("hola");
}) */

/* btn.onclick = ()=>{console.log("hola");} */

/* btn.addEventListener('mouseout', () => {console.log("el mouse salio")}) */

/* let search = document.getElementById("search");

let search2 = document.getElementById("search2"); */

/* search.addEventListener('keyup', ()=>{console.log(search.value)}) */

/* search.onkeydown = ()=>{console.log(search.value)} */

/* search.addEventListener('change', ()=>{
    if(search.value.length < 2){
        console.log("Es obligatorio llenar este formulario");
    }else{
        console.log("El nombre es: " + search.value);
    }
}) */

/* search.oninput = ()=>{console.log(search.value)};

search2.onkeydown = ()=>{console.log(search2.value)}; */

let formulario = document.getElementById("formulario");

formulario.addEventListener('submit', validacion);

function validacion(e){
    e.preventDefault();
    console.log(`Nombre: ${formulario.nombre.value} y el Apellido es ${formulario.apellido.value}`);
}