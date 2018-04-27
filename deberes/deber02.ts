var miArreglo = [1, 'Manzana', 8,'Banana', 2, 'Naranja'];

function validarNumeroDeStringsEnArreglo(arreglo) {
    var contador = 0;
    arreglo.forEach(function (elemento, indice, array) {
        var tipoDato = typeof elemento;
        console.log(tipoDato);
        if (tipoDato == "string"){
            contador = contador + 1;
        }
    });
    return contador;
}

var cantidadStrings = validarNumeroDeStringsEnArreglo(miArreglo);
console.log(cantidadStrings);
