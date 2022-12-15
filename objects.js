// OBJETOS

// Sintaxis
var miAuto = {
    marca: "toyota",
    modelo: "Corolla",
    annio:2020
};
// para acceder a algo especifico
miAuto.marca;

//QUE ES UN METODO Y UN ATRIBUTO
    //un objeto es una representación de la realidad, en el cual sus características propias se definen como atributos y sus acciones se definen como métodos.
    //en otras palabras, los atributos son las variables y los métodos son las funciones propias de cada objeto.

//COMO ACCEDER A LOS VALORES DE UN OBJETO
    // Mediante la notación de corchetes
        // objeto["propiedad"]
        var miAuto = {
            marca: "Toyota",
            modelo: "Corolla",
            "año": 2020,
            detalle: function () {
                console.log("Es un auto")
            }
        }

        miAuto["marca"] // "Toyota"
        miAuto["modelo"] // "Corolla"
        miAuto["año"] // 2020
        miAuto["detalle"] // ƒ detalle()
        // para que lea la funcion
        miAuto["detalle"]() // "Es un auto"

    // Mediante la notación de punto
        miAuto.marca // "Toyota"
        miAuto.modelo // "Corolla"
        miAuto.añó // 2020
        miAuto.detalle // ƒ detalle()
        // para ejecutar el metodo 
        miAuto.detalle() // "Es un auto"

// COMO AÑADIR PROPIEDADES DE UN OBJETO
    // utilizamos la notación de corchetes o de punto con la nueva propiedad, asignándole su respectivo valor.
    // Por ejemplo, añadamos la propiedad color del objeto miAuto
    miAuto["color"] = "rojo"
    // o 
    miAuto.color = "rojo"

    console.log(miAuto)
    /* {
        marca: 'Toyota',
        modelo: 'Corolla',
        'año': 2020,
        detalle: ƒ detalle(),
        color: 'rojo'  <---- nueva propiedad
    } */
    

//PARA MODIFICAR PROPIEDADES DE UN OBJETO
    // utilizamos la notación de corchetes o de punto con la propiedad específica, asignándole su nuevo valor.
    //  modifiquemos la propiedad marca, de "Toyota" a "Ford", del objeto miAuto.
    miAuto["marca"] = "Ford"
    // o 
    miAuto.marca = "Ford"

    console.log(miAuto)
    /* {
        marca: 'Ford', <--- Cambió de valor
        modelo: 'Corolla',
        'año': 2020,
        detalle: ƒ detalle(),
    } */


// PARA ELIMINAR PROPIEDADES DE UN OBJETO
    // utilizamos la palabra reservada delete seguido de la propiedad del objeto.
    // eliminemos la propiedad marca del objeto miAuto

    delete miAuto["marca"]
    // o 
    delete miAuto.marca

    console.log(miAuto)
    /* { 
        modelo: 'Corolla', <--- No existe la propiedad marca
        'año': 2020,
        detalle: ƒ detalle(),
    } */

// EL OBJETO CONTEXTO this
    //  el contexto this hace referencia al propio objeto. Esto sirve para acceder a los atributos y métodos propios del objeto.
    // Por ejemplo, cambiemos la función detalle del objeto miAuto para mostrar un mensaje personalizado.
    var miAuto = {
        marca: "Toyota",
        modelo: "Corolla",
        "año": 2020,
        detalle: function () {
            console.log(`Auto ${modelo} del ${año}.`)
        }
    }
    
    miAuto.detalle() //ReferenceError: modelo is not defined
    //Si ejecutamos la función miAuto.detalle() mostrará un error de referencia, que modelo no está definido.
    // Hagamos un pequeño cambio, utilicemos la notación de punto para acceder a los valores de la propiedad.
    var miAuto = {
        //...
        detalle: function () {
            console.log(`Auto ${miAuto.modelo} del ${miAuto.año}.`)
        },
    }  
    miAuto.detalle() // 'Auto Corolla del 2020.
    // ¡Funcionó! Sin embargo, necesito crear otro objeto con el mismo código.
    var otroAuto = {
        marca: "Toyota",
        modelo: "Corolla",
        "año": 2020,
        detalle: function () {
        console.log(`Auto ${miAuto.modelo} del ${miAuto.año}.`)
        },
    }
    
    otroAuto.detalle() //ReferenceError: miAuto is not defined
    // Ahora muestra nuevamente un error de referencia del objeto miAuto. ¿Pero cambio miAuto por otroAuto y problema resuelto? Sí, pero como programador no debemos cambiar manualmente el código que puede ser reutilizado.
    // Realicemos otro cambio, utilicemos el objeto contexto this para hacer referencia a nuestro objeto.
    var miAuto = {
        //...
        detalle: function () {
            console.log(`Auto ${this.modelo} del ${this.año}.`)
        },
    }  
    miAuto.detalle() //'Auto Corolla del 2020.'
    // Funciono, ahora creamos otro objeto
    var otroAuto = {
        // ...
        detalle: function () {
            console.log(`Auto ${this.modelo} del ${this.año}.`)
        },
    }
    otroAuto.detalle() //'Auto Corolla del 2020.
// CREAR VARIOS OBJETOS A PARTIR DE UN CODIGO BASE SE DENOMINA CREAR UNA INSTANCIA



// para poder generar que una de las propiedades del objeto sea una funcion
//y esa funcion pueda hacer cosas con las
// otras propiedades del objeto


// la propiedad que lleva una funcion 
// como valor se le llama metodo de objetos
var miAuto = {
    marca: "toyota",
    modelo: "Corolla",
    annio:2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);//this hace referencia al objeto que es miAuto
    }
};

// llamamos el metod
miAuto.detalleDelAuto();







// OBJECTS: FUNCION CONSTRUCTORA
var miAuto = {
    marca: "toyota",
    modelo: "Corolla",
    annio:2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);//this hace referencia al objeto que es miAuto
    }
};
// Crea funcion constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autoNuevo = new auto ("tesla", "Model 3", 2020);
var autoNuevo2 = new auto ("tesla", "Model X", 2018);
var autoNuevo3 = new auto ("toyota", "Corola", 2020);


// RETO
// GENERAR UNA FUNCION CONSTRUCTORA Y HACER UN LOOP 
// PARA PODER GENERAR UNA LISTA DE 30 CARROS 
// QUE SE VALLAN CONSTRUYENDO SOLAS

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autos = [];
for (var i = 0; i < 30; i++) {
    var marca = prompt("Ingresa marca de vehiculo");
    var modelo = prompt("Ingresa modelo de vehiculo");
    var annio = prompt("Ingresa año de vehiculo");

    autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}


// Ejercicio
export function solution(car) {
    // Tu código aquí 👈
    if (car.licensePlate == null || car.licensePlate == undefined) {
        car.drivingLicense = false;
    } else {
        car.drivingLicense = true
    }
    return car;
}