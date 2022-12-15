// Este ejemplo es imaginando que recibimos una lista de 30 carros diferentes y se nos solicita que se almacene esta información, como estamos aprendiendo a usar js por que es un lenguaje cool y no queremos tipiar todo de manera normal y aburrida, usaremos este lenguaje c: así hacemos un pequeño trabajo de separar todas las marcas, modelos y años respectivamente en distintos arrays para así lograr juntarlos en uno solo usando una función constructiva la cual indicara cada auto ingresado con su marca, modelo y año respectivamente.

var marca = ["Audi", "Subaru", "Lexus", "Porsche", "BMW", "Mazda", "Buick", "Toyota", "Kia", "Honda", "Hyundai", "Volvo", "Mini", "Mercedes-Benz", "Volkswagen", "Ford", "Lincoln", "Scion", "Acura", "Chevrolet", "Nissan", "Infiniti", "GMC", "Cadillac", "Dodge", "Land", "Rover", "Mitsubishi", "Jeep", "Fiat"];
var modelo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var annio = [2020,2019,2018,2020,2020,2020,2018,2018,2020,2020,2020,2018,2018,2020,2020,2019,2020,2020,2019,2019,2020,2020,2019,2019,2019,2020,2019,2019,2018,2020];
var listaAutos = [];
function autoN(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
} 
for (var i = 0; i<30; i++){   
    var autoNuevo = new autoN(marca[i],modelo[i],annio[i]);
    listaAutos.push(autoNuevo);
}

// Luego se nos solicito que filtremos los carros por medio del año actual, ya que deseaban saber la cantidad de autos nuevos ingresados. Gracias a nuestro trabajo esto se podía saber de la siguiente manera:

var autosFiltrados = listaAutos.filter(function(auto){
    return auto.annio === 2020;
});
console.log(autosFiltrados);

// Así logramos obtener una lista con todos los autos del año 2020 c:

// Posterior a eso, se necesitaba obtener una lista urgentemente de las marcas de los 30 autos que acababan de ingresar por razones ajenas que no nos interesan c: Obviando que nosotros ya tenemos esta lista creada xD y queremos usar js para esto, esta tarea es tan sencilla como hacer: 

var marcasRecientes = listaAutos.map(function(auto){
    return auto.marca;
});
console.log(marcasRecientes);
// Así obtenemos nuestra lista de marcas recientemente ingresadas c:







var articulo = [//array con objetos adentro
    {nombre: "Bici", costo: 3000 }, //objeto
    {nombre: "Tv", costo: 2500 },
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000 },
    {nombre: "Laptop", costo: 20000},
    {nombre: "Audifonos", costo: 170},
];
//metodos que me ayudar a recorrer el contenido de mi array 
// METODO FILTER :ayuda a validar si algo es cierto o falso y lo va a meter en un nuevo array, este no cambia el array
// Filter genera nuevo array!!
/**parametros:
 * 
    El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
    El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
    El array que está iterando.
    const other = array.filter(function(element, index, array))
    
 */
var articulosFiltrados = articulo.filter(function (articulo) {
    return articulo.costo <= 500    
});
console.log(articulosFiltrados)
/* [
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Teclado', costo: 500 }
] */




// Metodo de "map" mapea todo el contenido del array y nos trae el contenido que estamos buscando

// genera nuevo array
/**parametros:
 * 
    El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
    El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
    El array que está iterando.
    var otherArray = array.map(function(element, index, array))
 */
var nombreArticulos = articulo.map(function (articulo) {
    return articulo.nombre
})
console.log(nombreArticulos);
/* 
[ 'Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos' ]
*/


//METODO FIND()
// no va a modificar el array solo va a validar si existe o no exista,
// si el articulo si existe se creara unn nuevo array
var encuentraArticulo = articulo.find(function(articulo){
    return articuo.nombre === "Laptop" //valida si el articulo llamado "laptop" existe y es exactamente igual
});

console.log(encuentraArticulo);

// FOREACH()
// no genera nuevo array solo hace el filtrado sobre este array sin modificarlo
articulo.forEach(function (articulo) {
    console.log(articulo.nombre);
});
// ejecuta la funcion indicada una vez por cada elemento del array


// METODO SOME()
// verdadero o falso para articulos que cumplan la validacion
var articulosBaratos = articulo.some(function (articulo) {
    return articulo.costo <= 700; //si en tu array hay articulos que cuesten menos de 700 regresa true o false
});
console.log(articulosBaratos);





// Con el mwtodo .push() nos permite agregar uno o mas elementos al final
// de un array
let numArray = [1,2,3,4,5]
function newNum() {
    numArray.push(6,7);
    console.log(numArray)
}
/**para string
 * let txtArray = ["maria", "ana", "lorem"];
 * function addCharacter (){
 * txtArray.push("rosita", "pepers")
 * console.log (txtArray)
 * }
 */



// ELIMINEMOS ELEMENTOS DE UN  ARRAY
var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //eliminar moto

articulos.splice(2, 1); //el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
//y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
//['carro', 'celular', 'tv', 'libro']


// Para eliminar el primer elemento utilizamos .shift() 
let array = [1,2,3,4,5];
console.log(array);

let shiftArray = array.shift();
// Se elimina el elemento de la posicion 0
// [2,3,4,5];
console.log(array);


// Para eliminar el ultimo elemento ulitizamos .pop

// let array = [1,2,3,4,5];
// console.log(array);

let popArray = array.pop();
// Se elimina el elemento de la ultima posicion
// [1,2,3,4,];
console.log(array);
