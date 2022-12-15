var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
    
}

while (estudiantes.length > 0) {
    var estrudiante = estudiante.shift(); //cada que se cumpla un loop va a sacar los nombres del array
    saludarEstudiante(estrudiante);
}
//  prueba
export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) { // creamos un ciclo ya que decaunt no es =0
      estudiantes.pop(); // la funcion .pop elimina el ultimo elemento de un arreglo
      deathCount--; // este codigo sirve para disminuir -1 al deathcount hasta que este en 0 y se cumpla la condicion de arriba(linea 2)
    }
    estudiantes.push(nuevo); // una vez deathcount es 0 el ciclo while termina , una vez deathcount es = 0 , se ejecuta este codigo , la funcion .push agrega un nuevo elemento al arreglo
    return estudiantes; // se retorna el arreglo
}