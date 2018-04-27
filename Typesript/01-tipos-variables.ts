/*//var nombre = "Vicente"
let segundoNombre: any = 'Adrian';
const cedula = '1718137159';
segundoNombre = 'Vicente';
//cedula = '123123213'; //da error read-only
const URL_POLI = 'http://www.epn.edu.ec';
segundoNombre = 123; //Duck Typing

////////////////
let nombre: string;
let edad: number= 28;
let fecha: Date= new Date();
let casado: boolean = false;
/// let mascotas: object ={

/*class Usuario {
    public mNombre: string;
    private mEdad: number;
    protected mCedula: string;
    constructor(nombre: string,
                edad: number,
                cedula: string,) {
        this.mNombre = nombre;
        this.mEdad= edad;
        this.mCedula= cedula;
    }
    public imprimirEnConsola(){
        //template strings
        console.log(`El usuario se  llama ${this.mNombre} la cedula del usuario es: ${this.mCedula} la edad es: ${this.mEdad}`)
    }
}
let usuario: Usuario = new Usuario(nombre: 'Adrian', edad:28,  ) */

//////////////////
/*var nombre;
var edad = 28;
var fecha = new Date();
var casado = false;
// let mascotas:object = {};
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        // Template Strings TILDE INVERTIDA
        console.log("El usuario se llama " + this.mNombre + " la cedula del usuario es :" + this.mCedula + ", la edad del usuario es: " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Adrian', 28, '1718137159');
console.log(usuario);



interface UsuarioDos {
    mNombre:string;
    mEdad: number;
    mCedula: string;
    imprimirEnConsola(nombre: string):void;
    usuario:Usuario;
}

//////
class UsuarioTres{
    constructor(public mNombre: string;
    private mEdad: number;
    protected mCedula: string;){

    }
} */
//////////////////////////////////// código Adrian
// var nombre = "Vicente";
let segundoNombre = 'Adrian';
const cedula = '1718137159';
segundoNombre = 'Vicente';
// cedula = '123123213'; // Da error read-only
const URL_POLI = 'http://www.epn.edu.ec';
// segundoNombre = 123; // Duck Typing
////////
let nombre: String;
let edad: Number = 28;
let fecha: Date = new Date();
let casado: boolean = false;

// let mascotas:object = {};
class Usuario {
    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula: String,
    ) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola() {
        // Template Strings TILDE INVERTIDA
        console.log(`El usuario se llama ${this.mNombre} la cedula del usuario es :${this.mCedula}, la edad del usuario es: ${this.mEdad}`);
    }

}

let usuario: Usuario = new Usuario('Adrian', 28, '1718137159');

let usuarioOtro = {
    mNombre: 'Adrian',
    mEdad: 28,
    mCedula: '1718137159'
};

console.log(usuario.imprimirEnConsola());
console.log(usuarioOtro);

function noHagoNada() {
}

console.log('No hago nada: ', noHagoNada());

let usuarioTres: Usuario;

interface UsuarioDos {
    mNombre: String;
    mEdad: Number;
    mCedula: String;

    imprimirEnConsola(nombre: String): void;

    usuario: Usuario;
}

class UsuarioTres {
    constructor(public mNombre: String,
                private mEdad: Number,
                protected mCedula: String) {
    }
}
