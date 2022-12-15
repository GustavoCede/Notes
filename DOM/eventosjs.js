// SELECCIONAR LOS ELEMENTOS QUE VAMOS A UTILIZAR
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#formulario');
// hacer que cuando presionemos el boton calcular
// ocurra algo con los dos valores del input

// btn.addEventListener('click', btnOnClick()); //Escucha cada vez que funciona algun eventos, ('nombreEvento', 'funcion que queremos escuchar')
// // selector.addEventListener('posibleEventoaEscuchar', funcionaLLamarcuandoOcurraEvento);

// function btnOnClick() {
//     // console.log('escuchando el evento de click');
//     // console.log((input1.value + input2.value)); 
//     const sumaInputs = input1.value + input2.value;
//     result.innerText = "Resultado: "+ sumaInputs;
// }


// // EVENTO addEventListener

form.addEventListener('submit', sumarInputValues);
// evento para form (evento submit, al click)


// para que no se envie el formulario 
function sumarInputValues(event) {
    // console.log({event});
    event.preventDefault();
    // console.log('escuchando el evento de click');
    // console.log((input1.value + input2.value)); 
    const sumaInputs = input1.value + input2.value;
    result.innerText = "Resultado: "+ sumaInputs;
}