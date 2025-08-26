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