
const boton = document.querySelector('#envio');
const formulario = document.getElementById('formulario');
const elemento = document.querySelector('#respuesta');
const btnlimpiar = document.querySelector('#limpiar');
const contador = document.querySelector('#contador');


document.addEventListener('DOMContentLoaded',()=>{
    contar();
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let seleccionGeneral = document.getElementsByName('inlineRadioOptions');
    let genero;
    for (let i = 0; i < seleccionGeneral.length; i++) {
        if (seleccionGeneral[i].checked) {
            genero = seleccionGeneral[i].value;
            break;
        }
    }
    let edad = Number(document.getElementById('edad').value);
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value) / 100;
    let imc = Number((peso / (altura * altura)).toFixed(3));
    console.log(typeof imc)
    elemento.querySelector('h3').textContent = imc;

    let arrMujeres = []; let arrHombres = [];

    let ingreso = {
        edad: edad,
        peso: peso,
        altura: altura,
        imc: imc
    }

    if (genero === 'mujer') {
        if (localStorage.getItem('mujeres') == null) {
            arrMujeres.push(ingreso);
            localStorage.setItem('mujeres', JSON.stringify(arrMujeres));
        } else {
            let arr1 = JSON.parse(localStorage.getItem('mujeres'));
            console.log(arr1)
            arr1.push(ingreso);
            localStorage.setItem('mujeres', JSON.stringify(arr1));

        }
    } else if (localStorage.getItem('hombres') == null) {
        arrHombres.push(ingreso);
        localStorage.setItem('hombres', JSON.stringify(arrHombres));
    } else {
        let arr2 = JSON.parse(localStorage.getItem('hombres'));
        console.log(arr2)
        arr2.push(ingreso);
        localStorage.setItem('hombres', JSON.stringify(arr2));

    }
    local(genero,imc);
    contar();

});


btnlimpiar.addEventListener('click',()=>{
    
    console.log('hola')
    document.getElementById('edad').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = ";"
    elemento.querySelector('h3').textContent = "Su resultado aqui";
    elemento.querySelector('h3').setAttribute('class','base');
});


function contar(){
    let sumaHombres = JSON.parse(localStorage.getItem('hombres'));
    let sumaMujeres = JSON.parse(localStorage.getItem('mujeres'));
    if(sumaHombres == null && sumaMujeres == null){
        contador.textContent = `Ha registrado 0 usuarios`;
    }else if(sumaHombres == null){
        contador.textContent = `Ha registrado ${sumaMujeres.length} mujeres y 0 hombres`;
    }else if(sumaMujeres == null){
        contador.textContent = `Ha registrado ${sumaHombres.length} hombres y 0 mujeres`;
    }else{
        contador.textContent = `Ha registrado ${sumaHombres.length} hombres y ${sumaMujeres.length} mujeres`;
    }
    

}


function local(genero,imc){
    let arreglo = [0,0,0,0,0];
    let nombreJson = "registro"+genero;
    if(localStorage.getItem(nombreJson)==null){
        localStorage.setItem(nombreJson,JSON.stringify(arreglo));
    }

    if(imc<18.5){
        elemento.querySelector('h3').setAttribute('class','azul');
        let captura = JSON.parse(localStorage.getItem(nombreJson));
        captura[0] += 1;
        localStorage.setItem(nombreJson,JSON.stringify(captura)); 

    }else if (imc>=18.5&&imc<=24.999){
        elemento.querySelector('h3').setAttribute('class','verde');
        let captura = JSON.parse(localStorage.getItem(nombreJson));
        captura[1] += 1;
        localStorage.setItem(nombreJson,JSON.stringify(captura)); 


    }else if(imc>=25.0&&imc<=29.999){
        elemento.querySelector('h3').setAttribute('class','amarillo');
        let captura = JSON.parse(localStorage.getItem(nombreJson));
        captura[2] += 1;
        localStorage.setItem(nombreJson,JSON.stringify(captura)); 


    }else if(imc>=30.0&&imc<=39.999){
        elemento.querySelector('h3').setAttribute('class','rojo');
        let captura = JSON.parse(localStorage.getItem(nombreJson));
        captura[3] += 1;
        localStorage.setItem(nombreJson,JSON.stringify(captura)); 


    }else if(imc>40){
        elemento.querySelector('h3').setAttribute('class','rojo');
        let captura = JSON.parse(localStorage.getItem(nombreJson));
        captura[4] += 1;
        localStorage.setItem(nombreJson,JSON.stringify(captura)); 


    }


}

