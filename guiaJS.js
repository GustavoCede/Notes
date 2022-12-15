// ¿Por qué decimos que Javascript es un lenguaje dinámico?

// Corre directamente en la etapa de Runtime, sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores no se muestren sino hasta que se ejecuta el programa. Lo que se ve a primera vista, cuando se analiza el código, es muy probable que no sea lo que se va a obtener cuando el programa se ejecute.

// JavaScript permite declarar (por ejemplo) variables cuyo valor (y tipo) solo se conocerá al momento de su ejecución en función de las condiciones dadas al momento de correrlo en un entorno real. En cambio, los lenguajes estáticos no compilarán en código ejecutable a menos que todos los valores (o tipos de valores) se conozcan por adelantado.

// TEST DE JAVASCRIPT

// SECTION 1
// VARIABLES

// PARTE 1
/**Que es una variable?
 * Es un contenedor para almacenar datos
 */

/**Cuál es la diferencia entre declarar e inicializar una variable?
 * 
 * Declarar: Declaramos cuando creamos la variable usando var, let, const, etc
 * 
 * Inicializar: Inicializamos cuando le damos valor a la variable
 * 
 */

/**Cual es la diferencia entre sumar numeros y concatenar un string
 * Al momento sumar números estamos realizando una operación matemática con dos tipos de datos (Numbers) mientras que al concatenar estamos sumando
 * dos tipos de datos (String) que son cadena de textos.
 */

/**¿Cuál operador me permite sumar o concatenar?
 * "+"
 */

// PARTE 2
/** Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
 * 
    Nombre = String
    Apellido = String
    Nombre de usuario en Platzi = String
    Edad = number
    Correo electrónico = String
    Mayor de edad = boolean
    Dinero ahorrado = number
    Deudas = number

 */ 


// PARTE 3
/**Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
 * 
 * 
 */
var nombre = "emilia";
var apellido = "Fasce";
var userPlatzi = "Emiliafc17";
var edad = 22;
var email = "mariaemiliafasce@hotmail.com";
var mayorEdad = true;
var dineroAhorro = 100;
var deudas = 10;

// PARTE 4
/**Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
 * 
    Nombre completo (nombre y apellido)
    Dinero real (dinero ahorrado menos deudas)
 */
var dineroTotal = dineroAhorro - deudas;
console.log(nombre + " "+ apellido + ", pagando tu deuda te quedas con un total de: " + dineroTotal);


// SECTION 2
// FUNCIONES

// PARTE1
/**¿Qué es una función?
 *  Es un conjunto de acciones que se nos permitirá reutilizar en nuestro código 
 *  y siempre deben devolver un resultado. Podemos crear diferentes funciones
 *  con parámetros distintos y luego utilizar la información para realizar un
 *  evento o acción dentro de nuestro código.
 */

/**¿Cuándo me sirve usar una función en mi código?
 *  cuando necesitamos repetir una acción en nuestro código, en vez de escribir una suma,
 *  por ejemplo en cada línea, podemos crear una función que nos permita sumar elementos
 *  cada vez que lo necesitemos y solo cambiamos sus parámetros.
 */

/**¿Cuál es la diferencia entre parámetros y argumentos de una función?
 *  parámetros: son las variables declaradas y solicitadas en nuestra función
 * 
 *  argumentos: al momento de realizar el llamado de nuestra funciones nos exigirá declarar 
 *  nuestras variables que vendrían a ser nuestros argumentos de la función.
 * 
 *  function myFunction(parámetro1 + parámetro2) {
    //... All my code here
    }
    myFunction(argumento + argumento2);
    //Al declarar las variables parámetro1 y parámetro2 estamos generando los argumentos de nuestra función.
 */


// PARTE 2
/**Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes
 * por parámetros y argumentos en una función:
 * const name = "Juan David";
    const lastname = "Castro Gallego";
    const completeName = name + lastname;
    const nickname = "juandc";

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
 */

function presentacion(completeName, nickname) {
    var name = "Juan David";
    var lastname = "Castro Gallego";
    var completeName = name + lastname;
    var nickname = "juandc";

    console.log(`Mi nombre es ${completeName},  pero prefiero que me digas ${nickname}`);
}

// SECTION 3
//CONDICIONALES

// PARTE 1

/**¿Qué es un condicional?
 *  Es una estructura que funciona mediante una condición, 
 *  para dar una respuesta dependiendo si se cumple o no la condición.
 */

/**¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
 * Existen 2 tipos, el If Else (el Ternario que es la unión del If y el Else en una sola línea). y el Swich.
 */

/**¿Puedo combinar funciones y condicionales?
 * Sí, dentro de una función puede haber un condicional.
 */

// PARTE 2
/**Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
 * 
 */
const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//     case "Free":
//         console.log("Solo puedes tomar los cursos gratis");
//         break;
//     case "Basic":
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//         break;
//     case "Expert":
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//         break;
//     case "ExpertPlus":
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//         break;
// }

if (tipoDeSuscripcion === "free") {
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

/**Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if
 *  (sin else ni else if).
 * Bonus: si ya eres una experta o experto en el lenguaje, 
 * te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 
 * 
 */
var arrayTipoDeSuscripcion = {
    free: `Solo puedes tomar los cursos gratis`,
    basic: `Puedes tomar casi todos los cursos de Platzi durante un mes`,
    expert:`Puedes tomar casi todos los cursos de Platzi durante un año`,
    expertPlus:`Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año`,
}
function conseguirSuscripcion(suscripcion) {
    if (arrayTipoDeSuscripcion[suscripcion]) {
        console.log(arrayTipoDeSuscripcion[suscripcion]);
        return;        
    }
    console.warn(`El tipo de suscripcion no existe`);

}
// otra manera de resolver
let typeSuscripción = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
];
let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
let userSuscription = "Expert";
for (let i=0; i < typeSuscripción.length; i++) {
    if (userSuscription == typeSuscripción[i]) {
        console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
    }    
}


// SECCION 4 https://fortunate-squirrel-f81.notion.site/Test-de-JavaScript-6be624589d8045c6920410186a51bcf5
// CICLOS https://platzi.com/clases/3271-javascript-practico/51004-test-de-javascript/

// PARTE 1
/**¿Qué es un ciclo?
 * Es una estructura repetitiva, su función es realizar lo que está dentro del ciclo tantas veces como se le
 *  indique o hasta que se deje de cumplir la condición.
 * 
 * ¿Qué tipos de ciclos existen en JavaScript?
 * For, While, Do while.
 * ¿Qué es un ciclo infinito y por qué es un problema?
 * Es un ciclo del cual no hay manera de salir, pues no sé consideraron todas las opciones y esté se repite
 * indefinida cantidad de veces, considero que es un problema porque consume memoria aparte de que no se 
 * llegaría a nada. (bug)
 * ¿Puedo mezclar ciclos y condicionales?
 * Si se puede
 */

// PARTE 2
// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// for (let i = 10; i >= 2; i--) {
//     console.log("El valor de i es: " + i);
// }


while (i < 5) {
    console.log("El valor de i es: "+ i );
    i = i++;
}
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i = i--;
}

// PARTE 3
// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, 
// mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

//     💡 Pista: puedes usar la función prompt de JavaScript.
function validar(){
    let resultado = parseInt(prompt('Escribe el resultado de sumar 2 + 2'));
    if(resultado === 4){
        alert('Felicitaciones el resultado es correcto');
    }else{
        alert('Intentalo nuevamente');
        validar();
    }
}


// LISTAS
// SECCION 5
// ¿Qué es un array?
// Un array es un tipo de dato estructurado, que permite almacenar un conjunto de datos de tipo diverso los cuales pueden ser accedidos mediante un indice.

// ¿Qué es un objeto?
// Un objeto es tun tipo de dato estructurado, que permite almacenar un conjunto de datos diversos de forma asociativa, a diferencia de los arrays estos datos pueden ser accedidos por una variable en lugar de un indice.

// ¿Cuándo es mejor usar objetos o arrays?
// Dependiendo de la necesidad, ambas estructuras son muy utiles y pueden almacenar gran cantidad de datos. Los objetos suelen ser muy utiles cuando necesitamos almacenar gran cantidad de datos que van a ser accedidos por medio de variables.

// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
// // Si, puedo almacenar arrays dentro de objetos y objetos dentro de arrays.

// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
// const semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
// function imprimir(array){
//     console.log(array[0]);
// }
// imprimir(semana);

// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
// const semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
// function imprimir(array){
//     array.forEach(elemento => console.log(elemento));
// }
imprimir(semana);
// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
const planeta = {
    nombre: 'Jupiter',
    radio: 71492,
    diametro: 142984 
}

function imprimir(objeto){
    for(let elemento in objeto){
        console.log(objeto[elemento]);
    }
}

imprimir(planeta);


