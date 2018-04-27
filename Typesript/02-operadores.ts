let arregloNumeros = [1,2,3,4,5];
let sumarDosNumeros = (numeroUno:number,
                       numeroDos: number)=>{ //fat arrow funct
    return numeroUno+numeroDos;

};
let totalEdad = arregloDeNumeros=>{
    //codigo extra
};
let facultades = a=> ['Facultad1', 'Facultad2'];/// se omite la palabra return pude que debuelva lo que contiene el arreglo
let facultades = function (a){
    return ['Facultad1', 'Facultad2'];
} ;

let facultadesDos = (a: number, b: => ['Facultad1', 'Facultad2']
let sumar=0;
let resultadoForEach
arregloNumeros.forEach( /// permite iterar el arreglo
    (valor, indice,arreglo)=>{
        console.log('valor', valor);
        console.log('indice', indice);
        console.log('arreglo', arreglo);
    }
);
let resultadoDeLaSuma = arregloNumeros
    .reduce(
        (totalEdadAcumulado,usuarioArreglo:UsuarioArreglo) =>{
            return totalEdadAcumulado - usuarioArreglo.edad
        },
        20
);
console.log('resultadoDeLaSuma', resultadoDeLaSuma);

//let arregloUsuarios : Array<UsuarioArreglo> = [
let arregloUsuarios: UsuarioArreglo[] = [
    {nombre: 'Maritza',
        edad: 28},
    {nombre: 'Maritza',
        edad: 10},
    {nombre: 'Maritza',
        edad: 70},
    {nombre: 'Maritza',
        edad: 32},
    {nombre: 'Maritza',
        edad: 25},
];
let resultadoDeLasEdades = arregloUsuarios
    .reduce(
        (totalAcumulado,valorArreglo) =>{
            return totalAcumulado - valorArreglo
        },
        20
    );
console.log('resultadoDeLasEdades', resultadoDeLasEdades);
interface UsuarioArreglo{
    nombre: string;
    edad: number;
}