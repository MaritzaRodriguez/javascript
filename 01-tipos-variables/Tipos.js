
///////////////////////////////////////////////////////////////////////////// código Adrian

var nombre = "28";
var edad = 28
var fecha = new Date();
var casado = false; // true
var casa = undefined;


var usuario = {
    "nombre": "Adrian",
    apellido: "Eguez",
    cedula: '1718137159',
    imprimirEnConsola: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.cedula)
    }
};


function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

var sumarDosNumerosVersionDos = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};

console.log(usuario.imprimirEnConsola()); // se realiza la ejecución de la función
console.log(usuario.imprimirEnConsola); // se esta imprimiendo la definición de la función

console.log(sumarDosNumeros(1, 2));


console.log("Usuario: ", usuario);


var arreglo = []
console.log(casa ? "Verdadero" : "Falso");
if (casa) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}


var carro = null;


console.log(fecha);
// ctrl + alt + l
if (nombre !== edad) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}

var arregloDeNumeros = [
    1,
    '2',
    false,
    null,
    undefined,
    {nombre: "Adrian", edad: 28},
    [],
    function nombreDeFuncion() {
        return 1
    },
    sumarDosNumeros(1, 2)];

console.log('arregloDeNumeros', arregloDeNumeros);



for(var aux=0 ; aux<10; aux++){
    console.log('Aux:', aux)
}