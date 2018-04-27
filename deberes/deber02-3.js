var osos;
var contador = 4;
var meses = 12;
for (var i = 1; i <= meses; i++) {
    contador = contador * 4;
    if (contador >= 10000) {
        contador = contador / 2;
        console.log("Removiendo #", contador, " osos de la poblacion  ");
        console.log("Van a existir  #", contador, " osos de anteojos después del mes  ", i);
        break;
    }
    else {
        console.log("Van a existir  #", contador, " osos de anteojos después del mes  ", i);
    }
}
