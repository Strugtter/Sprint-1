
const Usuarios = [
    {nombre:'Andres', Documento:'1061753379', contrasena:'Cam109', tipoUsuario:'2'},
    {nombre:'Camilo', Documento:'1061753378', contrasena:'Cam108', tipoUsuario:'1'},
    {nombre:'Kelly', Documento:'1061753377', contrasena:'Cam107', tipoUsuario:'2'},
    {nombre:'Amparo', Documento:'1061753376', contresena:'Cam106', tipoUsuario:'1'}
]


const cantBilletes = [    
    {billetes5: '', total:''},
    {billetes10:'', total:''},
    {billetes20:'', total:''},
    {billetes50:'', total:''},
    {billetes100:'',total:''}
]

// Datos registrados
const userLogin = '1061753378';
const userPass = 'Cam108';

const login = Usuarios.find(e => e.Documento===userLogin);
login === undefined ? console.log("Usuario no encontrado"): console.log(login);


// Lógica para cargar el cajero automatico.


let cantBilletes5;
let cantBilletes10;
let cantBilletes20;
let cantBilletes50;
let cantBilletes100;


function leerNumber(){
let Billetes5 = document.getElementById('b5').value;
cantBilletes5 = Billetes5;
let Billetes10 = document.getElementById('b10').value;
cantBilletes10 = Billetes10;
let Billetes20 = document.getElementById('b20').value;
cantBilletes20 = Billetes20;
let Billetes50 = document.getElementById('b50').value;
cantBilletes50 = Billetes50;
let Billetes100 = document.getElementById('b100').value;
cantBilletes100 = Billetes100;
}

console.log(cantBilletes10);




if (login.tipoUsuario === '1'){

    cantBilletes[0].billetes5 = cantBilletes5;
    cantBilletes[1].billetes10 = cantBilletes10 ;
    cantBilletes[2].billetes20 = cantBilletes20;
    cantBilletes[3].billetes50 = cantBilletes50;
    cantBilletes[4].billetes100 = cantBilletes100;    

    cantBilletes[0].total = cantBilletes5 * 5000;
    cantBilletes[1].total = cantBilletes10 * 10000;
    cantBilletes[2].total = cantBilletes20 * 20000;
    cantBilletes[3].total = cantBilletes50 * 50000;
    cantBilletes[4].total = cantBilletes100 * 100000;

}

// Cantidad total en el cajero

const sumaTotal =  cantBilletes.reduce((inicial, valorActual) => (typeof valorActual.total === "number" ? inicial + valorActual.total:inicial), 0);
console.log('total: ' + sumaTotal);


if (sumaTotal === 0 && login.tipoUsuario === '2'){
    console.log("Cajero en mantenimiento, vuelva pronto")
}



// Cantidad de dinero en el cajero por cada valor de billete.

cantBilletes.forEach((elemento, index) => console.log(elemento.total));

// Tipo de usuario cliente.

let retiro = 75000;

if (retiro>sumaTotal){
    console.log(`actualmente se puede entregar unicamente ${sumaTotal} pesos`);
    retiro = sumaTotal;
}

let cantidadBilletes100 = Math.floor(retiro/100000);
if (cantidadBilletes100 >= cantBilletes100 && cantBilletes100 != 0 && retiro != 0){
    cantidadBilletes100 = cantBilletes100;
    retiro -=100000 * cantidadBilletes100;
    console.log(`se entregan ${cantidadBilletes100} billetes de 100 mil`);
    cantBilletes100 -= cantidadBilletes100;
} else if (cantBilletes100 != 0 && retiro != 0) {
    retiro -=100000 * cantidadBilletes100;
    console.log(`se entregan ${cantidadBilletes100} billetes de 100 mil`);
    cantBilletes100 -= cantidadBilletes100;
}

let cantidadBilletes50 = Math.floor(retiro/50000);
if ( cantidadBilletes50 >= cantBilletes50 && cantBilletes50 != 0 && retiro != 0){
    cantidadBilletes50 = cantBilletes50;
    retiro -=50000 * cantidadBilletes50;
    console.log(`se entregan ${cantidadBilletes50} billetes de 50 mil`);
    cantBilletes50-=cantidadBilletes50;
} else if (cantBilletes50 != 0 && retiro != 0) {
    retiro -=50000 * cantidadBilletes50;
    console.log(`se entregan ${cantidadBilletes50} billetes de 50 mil`);
    cantBilletes50-=cantidadBilletes50;
} 

let cantidadBilletes20 = Math.floor(retiro/20000);
if ( cantidadBilletes20 >= cantBilletes20  && cantBilletes20 != 0 && retiro != 0){
    cantidadBilletes20 = cantBilletes20; 
    retiro -=20000* cantidadBilletes20;
    console.log(`se entregan ${cantidadBilletes20} billetes de 20 mil`);
    cantBilletes20-= cantidadBilletes20;    
} else if (cantBilletes20 != 0 && retiro != 0) {
    retiro -=20000* cantidadBilletes20;
    console.log(`se entregan ${cantidadBilletes20} billetes de 20 mil`);
    cantBilletes20-= cantidadBilletes20;
}

let cantidadBilletes10 = Math.floor(retiro/10000);
if (cantidadBilletes10>=cantBilletes10 && cantBilletes10!=0 && retiro != 0){
    cantidadBilletes10 = cantBilletes10; 
    retiro -=10000* cantidadBilletes10;
    console.log(`se entregan ${cantidadBilletes10} billetes de 10 mil`); 
    cantBilletes10 -= cantidadBilletes10;
} else if (cantBilletes10 != 0 && retiro != 0) {
    retiro -=10000* cantidadBilletes10;
    console.log(`se entregan ${cantidadBilletes10} billetes de 10 mil`);
    cantBilletes10 -= cantidadBilletes10;
}


let cantidadBilletes5 = Math.floor(retiro/5000);
if ( cantidadBilletes5 >=cantBilletes5  && cantBilletes5 != 0 && retiro != 0){
    cantidadBilletes5 = cantBilletes5
    retiro -=5000* cantidadBilletes5;
    console.log(`se entregan ${cantidadBilletes5} billetes de 5 mil`);
    cantBilletes5-=cantidadBilletes5;
}  else if (cantBilletes5 != 0 && retiro != 0) {
    retiro -=5000* cantidadBilletes5;
    console.log(`se entregan ${cantidadBilletes5} billetes de 5 mil`);
    cantBilletes5-=cantidadBilletes5;
}



console.log(cantBilletes10);
console.log(cantBilletes5);


// if (login.tipoUsuario === '2'){
//     if (cantRetiro >= sumaTotal){
//       //  retiro = cantRetiro - sumaTotal;
//     }
// }









