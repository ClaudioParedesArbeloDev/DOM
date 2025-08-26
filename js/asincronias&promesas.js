//tomamos el nodo boton a traves del getElementById
const btn = document.getElementById('boton');

//tomamos el nodo popup a traves del querySelector
const popup = document.querySelector('#popup-mensaje');

// llamamos a la variable btn donde guardamos el boton, le agregamos que escuche el evento a traves de 
// el metodo addEventListener y que escuche el evento click, y luego hicimos la funcion flecha
btn.addEventListener('click', ()=>{
    //popup es la variable que guarda el nodo popup(div) y le decime que agregue una clase 
    popup.classList.add('popup-active');

    //llamamos a la funcion setTimeout y le pasamos como parametro una funcion que ejecutara 
    // despues de 2,5 segundos que elimine la clase que agrego previamente
    setTimeout(()=>{
        popup.classList.remove('popup-active');
    }, 2500);
})

for(let letra of 'Hola'){
    setTimeout(()=>{
        console.log(letra);
    }, 1000);
}
for(let letra of 'Mundo'){
    setTimeout(()=>{
        console.log(letra);
    }, 2500)
}

function multiplicar(a, b){
    return a * b;
}

function alCuadrado(x){
    let resultado = multiplicar(x, x);

    console.log(resultado);
};

alCuadrado(2);

console.log('aca inicia el proceso');

setTimeout(()=>{
    console.log('esto es la mitad del proceso');
}, 0);

console.log('aca termina el proceso');

setInterval(()=>{
    console.log('aca inicia el proceso');
},1000);

let contador = 0;

const intervalo = setInterval(()=>{
    contador++;
    console.log("Contador: ", contador);

    if(contador >= 10){
        clearInterval(intervalo);
        console.log('aca termina el proceso');
    }

}, 1000);