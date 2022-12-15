// document.getElementById() trae elemento con id de html
// Variables que representen los elementos de html
const h1 = document.querySelector('h1'); //Seleccionar por etiquetas
const p = document.querySelector('p'); 
const parrafo = document.querySelector('.parrafo');
const parrafoId = document.querySelector('#parrafoId');
const input = document.querySelector('input'); 
//querySelectorAll es para seleccionar las etiquetas sin importar sus clases o id 
console.log({
    h1,
    p,
    parrafo,
    parrafoId,
    input,
})
h1.innerHTML ='Patito <br> feo'; //Sirve para cambiar el contenido de la etiqueta html
// innerText es para convertir todo como texto

// para modificar un atributo  se utiliza:
// h1.getAttribute('pantalla')  //ayuda a leer algun atributo que tenga nuestros elementos
// h1.setAttribute('class', 'rojo')  //bucamos h1 con clase y le cambiamos el nombre dde la clase del h1 por el nombre rojo

// para agregarle una clase:
h1.classList.add('rojo'); //class = "verde rojo"
// para eliminar la palabra verde de mi clase
h1.classList.remove('verde'); //class = "rojo"

// Otras propiedades
// .toogle cuando tengamos eventos, cuando tiene la clase podremos agregarle o quitarle cada vez que ejecutemos el toogle
// .contains Nos devuelve true o false si la clase tiene el elemento que estamos ejecutando

// Modificar el value del input
input.value = "4566";
// Para crear un elemento desdee 0
// document.createElement('img')
const img = document.createElement('img'); //creamos una imagen con createElement
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');//A esa imagen le pusimos los atributs

console.log(img);
parrafo.append(img); //ponemos nuestra imagen en un atributo que ya existia
