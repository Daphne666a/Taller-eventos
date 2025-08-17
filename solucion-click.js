// Para evitarlo usaría event.StopPropagation() porque detiene la propagación del evento, evitando que se dispare
// en los elementos padres del elemento donde ocurrió el evento original. 

document.getElementById('miBoton').addEventListener('click', (event) => {
  event.stopPropagation(); // Detiene la propagación.
  console.log('Solo se ejecuta el evento del botón');
});

document.querySelector('.miDiv').addEventListener('click', () => {
  console.log('Este no se ejecutará si hiciste clic en el botón');
});