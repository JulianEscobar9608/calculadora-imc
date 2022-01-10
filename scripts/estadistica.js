import cargarGrafica from "./app.js";
const botonH = document.querySelector('#graficoHombres');
const botonM = document.querySelector('#graficoMujeres');
const grafico = document.querySelector('#barras');

botonH.addEventListener('click',(e)=>{
    e.preventDefault();
    grafico.innerHTML = '';
    cargarGrafica('registrohombre');

})


botonM.addEventListener('click',(e)=>{
    e.preventDefault();
    grafico.innerHTML = '';
    cargarGrafica('registromujer');

})
