var arregloNumeros = [1, 2, 3, 4, 5];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdad = function (arregloDeNumeros) {
    //codigo extra
};
var facultades = function (a) { return ['Facultad1', 'Facultad2']; }; /// se omite la palabra return pude que debuelva lo que contiene el arreglo
var facultades = function (a) {
    return ['Facultad1', 'Facultad2'];
};
arregloNumeros.forEach(/// permite iterar el arreglo
function (valor, indice, arreglo) {
    console.log('valor', valor);
    console.log('indice', indice);
    console.log('arreglo', arreglo);
});
