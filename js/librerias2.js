import anime from 'animejs/lib/anime.es.js';

anime({
  targets: '.box', // Elemento a animar (puede ser un selector CSS, nodo DOM, etc.)
  translateX: 250, // Mueve 250px a la derecha
  duration: 800,   // Duración en milisegundos
  easing: 'easeInOutQuad' // Tipo de suavizado
});