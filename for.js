var estudiantes = ["Maria","Emilia", "Rosa", "Dayana"];
function saludarEstudiante(estudiante) {
    console.log(`hola, ${estudiante}`);
}
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

// o

// inicializamos nuna variable en singular de nuestro array que esta en plural
for (const estudiante of estudiante) { //el objet 0 de la posicion de estudiantes 
    saludarEstudiante(estudiante);
    
}

for (var num = 0 ;num<=10; num++){
    console.log(num);
}
//  El for of lo utilizamos para recorrer los elementos de un array
/*estructura de un array
for (var elemento of array) {
    
}
*/


var array = [5, 4, 3, 2, 1]

for (var elemento of array) {
  console.log(elemento) // 5 4 3 2 1
}
// El ciclo for ... of solo accede al valor de cada uno de los elementos del array. Por consiguiente, si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y cambiar su valor.
var numbers = [5, 4, 3, 2, 1]

// ❌ No cambia el array original
for (var number of numbers) {
  number = number * 2
}

console.log(numbers) // [5, 4, 3, 2, 1]

// ✅ Cambia el array original
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]

// Una forma de solucionar el anterior problema utilizando for ... of, es creando otro array vacío para llenarlo con los nuevos valores
var numbers = [5, 4, 3, 2, 1]
var duplicates = []

for (var number of numbers) {
  duplicates.push(number * 2)
}

console.log(duplicates) // [ 10, 8, 6, 4, 2 ]
