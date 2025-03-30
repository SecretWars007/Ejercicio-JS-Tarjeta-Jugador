// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const frontal = document.querySelector('.frontal');
const posterior = document.querySelector('.posterior');
// Función para voltear la tarjeta
verDetallesButton.addEventListener('click', function(){
    frontal.style = `transform: rotateY(180deg)`
    posterior.style = `transform: rotateY(0deg)` 
});
// Función para volver a la cara frontal
volverButton.addEventListener('click', function(){
    frontal.style = `transform: rotateY(0deg)`
    posterior.style = `transform: rotateY(180deg)` 
});