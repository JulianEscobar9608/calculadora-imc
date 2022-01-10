
function cargarGrafica(nombreArreglo) {

  let arreglo = JSON.parse(localStorage.getItem(nombreArreglo));

  new Morris.Bar({
    element: 'barras',
    data: [
      { y: 'debajo del peso', a: arreglo[0] },
      { y: 'Saludable', a: arreglo[1] },
      { y: 'sobrepeso', a: arreglo[2] },
      { y: 'Obesidad ', a: arreglo[3] },
      { y: 'Obesidad extrema', a: arreglo[4] },

    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Indicadores']
  });

  


}

export default cargarGrafica;