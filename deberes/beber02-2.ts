var generadores = [62,62,62,62,124,124,124,124,124,124,124,124,124,124,124,124,124,124,124];
var contador = 0;
var indice = 0;
while (indice <=3 ){
    contador = contador + generadores[indice];
    console.log("Generador #", indice+1," está prendido, añadiendo ", generadores[indice],"MW para un total de ", contador," MW");
    indice = indice + 1;
}

for (var i = 4;i < generadores.length;i++){
    contador = contador + generadores[i];
    console.log("Generador #", i+1 ," está prendido, añadiendo ", generadores[i],"MW para un total de ", contador," MW");
}
//generadores impares
var contador = 0;
var indice = 0;
while (indice <=3 ){


    if (indice % 2 == 0)
    {
        contador = contador + generadores[indice];
        console.log("Generador #", indice+1," está prendido, añadiendo ", generadores[indice],"MW para un total de ", contador," MW");
    }
    else {
        console.log("Generador #", indice + 1, " está apagado");
    }
    indice = indice + 1;
}

for (var i = 4;i < generadores.length;i++) {
    if (i % 2 == 0) {
        contador = contador + generadores[i];
        console.log("Generador #", i + 1, " está prendido, añadiendo ", generadores[i], "MW para un total de ", contador, " MW");
    }
    else {
        console.log("Generador #", i + 1, " está apagado");
    }
}
//generadores pares
var contador = 0;
var indice = 0;
while (indice <=3 ){


    if (indice % 2 != 0)
    {
        contador = contador + generadores[indice];
        console.log("Generador #", indice+1," está prendido, añadiendo ", generadores[indice],"MW para un total de ", contador," MW");
    }
    else {
        console.log("Generador #", indice + 1, " está apagado");
    }
    indice = indice + 1;
}

for (var i = 4;i < generadores.length;i++) {
    if (i % 2 != 0) {
        contador = contador + generadores[i];
        console.log("Generador #", i + 1, " está prendido, añadiendo ", generadores[i], "MW para un total de ", contador, " MW");
    }
    else {
        console.log("Generador #", i + 1, " está apagado");
    }
}


