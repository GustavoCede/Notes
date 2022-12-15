/*PRACTICA ARRAY

let array1 = ["Firulaif", "Yoko", "Gustavo", "Emilia" ];
let array2 = ["Gato", "Perro", "Conejo", array1];

for (const array in array1) {
    if (array == 2) {
        for (let array of array2) {
            document.write(array + "<br>")
        }
    }
    document.write(array + "<br>");
}
*/

/*ESTRUCTURA DE UNA FUNCION
function suma(){
    let num1 = 12;
    let num2 = 27;
    let resultado = num1 + num2;
    document.write(resultado)
}
suma()
*/

/*PRACTICA 1 FUNCION
function suma(num1,num2) {
    let resultado = num1 + num2;
    document.write(resultado);
    document.write("<br>");
}

suma(12,14)
suma(56,63)
*/

/*PRACTICA 2 FUNCION
function suma(num1,num2){
    let resultado = num1 + num2;
    return resultado
}

let resultado = suma (5,32);
document.write(resultado);
*/

// PARA COMENTAR CTRL + }

/*PRACTICA 3 FUNCION
function saludar(nombre) {
    let frase = `hola ${nombre} como estas`;
    document.write(frase)
    
}
saludar ("Ema")
*/

/*FUNCION EN FLECHA OTRA MANERA DE CREAR FUNCIONES

const saludar = (nombre)=>{
    let frase = `hola ${nombre} como estas`;
    document.write(frase)
}
saludar ("Ema")
*/

/*OTRA MANERA DE ESCRIBIRLO

const saludar = nombre => document.write(frase);
saludar ("pedro")
*/

/*EJERCICIO 2 FUNCION
dejar pasar mayores de edad
la primer persona que entre despues de la noche no paga
let free = false; //cuando la entrada gratis ya se haya dado lo convertimos en true
const validarCliente = (time) =>{
    let edad = prompt("Cual es tu edad");
    if (edad >=18) {
        if (time >=2 && time < 7 && !free) {
            alert("puedes pasar gratis")
        }else{
            alert(`Son las ${time}:00hs, puedes pasar, per pagas entrada`)
        }
    }else{
        alert("No eres mayor de edad, no puedes pasar");
    }
}
validarCliente(12);
validarCliente(1);
validarCliente(2);
validarCliente(2);
*/

/*EJERCICIO 3 FUNCION
Debe permitir registrar los alumnos que estan presentes y ausentes en clase.
Pasado los 30 dias mostrar la situacion final de todos los alumnos
Numero total de presentes y ausentes
se puede tener un maximo de 10% de ausencia por semestre, si tiene mas reprueba


*/
let cantidad = prompt("Cuantos alumnos son"); //promt para entrada por teclado
let alumnosTotales = []; //Declaro array

for (let i = 0; i < cantidad; i++) { //for inicio en 0 cuando i sea menpr a cantidad aumento 1
    alumnosTotales[i] = [prompt("Nombre del alumno "+ (i+1)), 0]; //lleno mi array con el nombre del alumno
}
const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p"|| presencia == "p"){
        alumnosTotales[i][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for ( alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    
    }
    
}

for (const alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    presentes: ${alumnosTotales[alumno][0]}<br>
    ausencias: ${30 - parseInt(alumnosTotales [alumno][1])}
    `;
    if (30 - alumnosTotales[alumno][1]>18) {
        resultado+= "Reprobado por inasistencia";
    }else{
        resultado+= "<br><br>"
    }
    document.write(resultado)
}