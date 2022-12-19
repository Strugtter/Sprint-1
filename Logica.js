
const Usuarios = [
    {nombre:'Andres', Documento:'1061753379', contrasena:'Cam109', tipoUsuario:'2'},
    {nombre:'Camilo', Documento:'1061753378', contrasena:'Cam108', tipoUsuario:'1'},
    {nombre:'Kelly', Documento:'1061753377', contrasena:'Cam107', tipoUsuario:'2'},
    {nombre:'Amparo', Documento:'1061753376', contresena:'Cam106', tipoUsuario:'1'}
]


const cantBilletes = [
    {billetes5: ''},
    {billetes10:''},
    {billetes20:''},
    {billetes50:''},
    {billetes100:''}
]

// Datos registrados
const userLogin = '1061753377';
const userPass = 'Cam108';

const login = Usuarios.find(e => e.Documento===userLogin);
login === undefined ? console.log("Usuario no encontrado"): console.log(login);


// Lógica para cargar el cajero automatico.

if (login.tipoUsuario === '1'){

    cantBilletes[0].billetes5 = 5;
    console.log(cantBilletes[0]);
    
}