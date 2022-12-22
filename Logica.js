const Usuarios = [
  {
    nombre: "Andres",
    Documento: "1061753379",
    contrasena: "Cam109",
    tipoUsuario: "2",
  },
  {
    nombre: "Camilo",
    Documento: "1061753378",
    contrasena: "Cam108",
    tipoUsuario: "1",
  },
  {
    nombre: "Kelly",
    Documento: "1061753377",
    contrasena: "Cam107",
    tipoUsuario: "2",
  },
  {
    nombre: "Amparo",
    Documento: "1061753376",
    contrasena: "Cam106",
    tipoUsuario: "1",
  },
];

let cantBilletes = [
  { billetes5: "", total: "" },
  { billetes10: "", total: "" },
  { billetes20: "", total: "" },
  { billetes50: "", total: "" },
  { billetes100: "", total: "" },
];

// Ingresar y cerrar sesión

function ingresar(){

    let userLogin = document.getElementById("usuario").value;
    let userPass = document.getElementById("pass").value;
    const login = Usuarios.find((e) => e.Documento === userLogin);
    if (login === undefined){
      alert("Usuario no encontrado")
    }  else {
    } 
    if(login.Documento === userLogin && login.contrasena === userPass && login.tipoUsuario == "1") {
      window.location = 'Admin.html'
    }else if(localStorage.getItem("Total")==0){
        console.log("Cajero en mantenimiento, vuelva pronto");
        alert("Cajero en mantenimiento, vuelva pronto");
    } else if(login.Documento === userLogin && login.contrasena === userPass && login.tipoUsuario == "2") {
      window.location = 'cliente.html'
    }else {
      alert('Datos incorrectos')
    }
}

function cerrarSesion(){
    window.location = "Ingresar.html"
}

///////////---------------------------------////////////////////////

// Carga del cajero automático

let Billetes5;
let Billetes10;
let Billetes20;
let Billetes50;
let Billetes100;


function leerNumero() {

  //Captura de las cantidades de cada billete.

  if (localStorage.getItem("cincoMil")){
    if(document.getElementById("b5").value != null && document.getElementById("b5").value != 0 ){
      Billetes5 += parseInt (document.getElementById("b5").value);
    } else if (document.getElementById("b5").value == null){
      Billetes5=0;
    }
  } 

  if (localStorage.getItem("diezMil")){
    if(document.getElementById("b10").value != null && document.getElementById("b10").value != 0 ){
      Billetes10 += parseInt (document.getElementById("b10").value);
    } else if (document.getElementById("b10").value == null){
      Billetes10=0;
    }
  } 

  if (localStorage.getItem("veinteMil")){
    if(document.getElementById("b20").value != null && document.getElementById("b20").value != 0 ){
      Billetes20 += parseInt (document.getElementById("b20").value);
    } else if (document.getElementById("b20").value == null){
      Billetes20=0;
    }
  }
  
  if (localStorage.getItem("cincuentaMil")){
    if(document.getElementById("b50").value != null && document.getElementById("b50").value != 0 ){
      Billetes50 += parseInt (document.getElementById("b50").value);
    } else if (document.getElementById("b50").value == null){
      Billetes50=0;
    }
  } 

  if (localStorage.getItem("cienMil")){
    if(document.getElementById("b100").value != null && document.getElementById("b100").value != 0 ){
      Billetes100 += parseInt (document.getElementById("b100").value);
    } else if (document.getElementById("b100").value == null){
      Billetes100=0;
    }
  } 

  // Mostrar el valor obtenido de la cantidad

  document.getElementById("C5").value = Billetes5;
  document.getElementById("C10").value = Billetes10;
  document.getElementById("C20").value = Billetes20;
  document.getElementById("C50").value = Billetes50;
  document.getElementById("C100").value = Billetes100;

  // Almacenamiento en Local Storage

  localStorage.setItem("cincoMil",Billetes5 );
  localStorage.setItem("diezMil",Billetes10);
  localStorage.setItem("veinteMil",Billetes20);
  localStorage.setItem("cincuentaMil",Billetes50);
  localStorage.setItem("cienMil",Billetes100);

  // Limpiar valores

  document.getElementById("b5").value = "";
  document.getElementById("b10").value = "";
  document.getElementById("b20").value = "";
  document.getElementById("b50").value = "";
  document.getElementById("b100").value = "";

  // Almacen en el array de Cantidad de billetes.

  cantBilletes[0].billetes5 = Billetes5;
  cantBilletes[1].billetes10 = Billetes10;
  cantBilletes[2].billetes20 = Billetes20;
  cantBilletes[3].billetes50 = Billetes50;
  cantBilletes[4].billetes100 = Billetes100;

  // Calculo del valor por billete.

  cantBilletes[0].total = Billetes5 * 5000;
  document.getElementById("CT5").value = cantBilletes[0].total;
  localStorage.setItem("CT5",cantBilletes[0].total);

  cantBilletes[1].total = Billetes10 * 10000;
  document.getElementById("CT10").value = cantBilletes[1].total;
  localStorage.setItem("CT10",cantBilletes[1].total);

  cantBilletes[2].total = Billetes20 * 20000;
  document.getElementById("CT20").value = cantBilletes[2].total;
  localStorage.setItem("CT20",cantBilletes[2].total);

  cantBilletes[3].total = Billetes50 * 50000;
  document.getElementById("CT50").value = cantBilletes[3].total;
  localStorage.setItem("CT50",cantBilletes[3].total);

  cantBilletes[4].total = Billetes100 * 100000;
  document.getElementById("CT100").value = cantBilletes[4].total;
  localStorage.setItem("CT100",cantBilletes[4].total);

  const sumaTotal = cantBilletes.reduce(
    (inicial, valorActual) =>
      typeof valorActual.total === "number"
        ? inicial + valorActual.total
        : inicial,
    0
  );

  document.getElementById("CT").value = sumaTotal;
  localStorage.setItem("Total", sumaTotal);

  // Muestra en consolo el array 

  console.log(cantBilletes);

}
// Lectura del Local storage

leerLocalStorage();

function leerLocalStorage (){

      localStorage.getItem("cincoMil") == null? Billetes5 = 0 : Billetes5 =  parseInt(localStorage.getItem("cincoMil"));
      localStorage.getItem("diezMil") ==null ? Billetes10 = 0 : Billetes10 = parseInt(localStorage.getItem("diezMil"));
      localStorage.getItem("veinteMil")==null ? Billetes20 = 0 : Billetes20 = parseInt(localStorage.getItem("veinteMil")) ;
      localStorage.getItem("cincuentaMil")==null ? Billetes50 = 0 : Billetes50 = parseInt(localStorage.getItem("cincuentaMil"));
      localStorage.getItem("cienMil")==null ? Billetes100=0 : Billetes100 = parseInt(localStorage.getItem("cienMil")); 
      localStorage.getItem("Total")==null ? sumaTotal=0 : sumaTotal = parseInt(localStorage.getItem("Total")); 
      localStorage.getItem("CT5")==null ? cantBilletes[0].total=0 : cantBilletes[0].total = parseInt(localStorage.getItem("CT5")); 
      localStorage.getItem("CT10")==null ? cantBilletes[1].total=0 : cantBilletes[1].total = parseInt(localStorage.getItem("CT10"));
      localStorage.getItem("CT20")==null ? cantBilletes[2].total=0 : cantBilletes[2].total = parseInt(localStorage.getItem("CT20"));
      localStorage.getItem("CT50")==null ? cantBilletes[3].total=0 : cantBilletes[3].total = parseInt(localStorage.getItem("CT50"));
      localStorage.getItem("CT100")==null ? cantBilletes[4].total=0 : cantBilletes[4].total = parseInt(localStorage.getItem("CT100"));


      document.getElementById("C5").value = Billetes5;
      document.getElementById("C10").value = Billetes10;
      document.getElementById("C20").value = Billetes20;
      document.getElementById("C50").value = Billetes50;
      document.getElementById("C100").value = Billetes100; 
      document.getElementById("CT").value=sumaTotal;
      document.getElementById("CT5").value=cantBilletes[0].total;   
      document.getElementById("CT10").value=cantBilletes[1].total;    
      document.getElementById("CT20").value=cantBilletes[2].total;    
      document.getElementById("CT50").value=cantBilletes[3].total;    
      document.getElementById("CT100").value=cantBilletes[4].total;      
}

function retirar(){

  if (parseInt(document.getElementById("retiro").value) > sumaTotal) {
    console.log(`actualmente se puede entregar unicamente ${sumaTotal} pesos`);
    alert(`actualmente se puede entregar unicamente ${sumaTotal} pesos`)
    document.getElementById("retiro").value = sumaTotal;
   }

   let cantidadBilletes100 = Math.floor(parseInt(document.getElementById("retiro").value) / 100000);
if (
  cantidadBilletes100 >= Billetes100 &&
  Billetes100 != 0 &&
  document.getElementById("retiro").value != 0
) {
  cantidadBilletes100 = Billetes100;
  document.getElementById("retiro").value -= 100000 * cantidadBilletes100;
  console.log(`se entregan ${cantidadBilletes100} billetes de 100 mil`);
  Billetes100 -= cantidadBilletes100;
  localStorage.setItem("cienMil",Billetes100);
  localStorage.setItem("CT100",Billetes100*100000);
} else if (Billetes100 != 0 && document.getElementById("retiro").value != 0) {
  document.getElementById("retiro").value -= 100000 * cantidadBilletes100;
  console.log(`se entregan ${cantidadBilletes100} billetes de 100 mil`);
  Billetes100 -= cantidadBilletes100;
  localStorage.setItem("cienMil",Billetes100);
  localStorage.setItem("CT100",Billetes100*100000);
}

let cantidadBilletes50 = Math.floor(parseInt(document.getElementById("retiro").value) / 50000);
if (
  cantidadBilletes50 >= Billetes50 &&
  Billetes50 != 0 &&
  document.getElementById("retiro").value != 0
) {
  cantidadBilletes50 = Billetes50;
  document.getElementById("retiro").value -= 50000 * cantidadBilletes50;
  console.log(`se entregan ${cantidadBilletes50} billetes de 50 mil`);
  Billetes50 -= cantidadBilletes50;
  localStorage.setItem("cincuentaMil",Billetes50);
  localStorage.setItem("CT50",Billetes50*50000);
} else if (Billetes50 != 0 && document.getElementById("retiro").value != 0) {
  document.getElementById("retiro").value -= 50000 * cantidadBilletes50;
  console.log(`se entregan ${cantidadBilletes50} billetes de 50 mil`);
  Billetes50 -= cantidadBilletes50;
  localStorage.setItem("cincuentaMil",Billetes50);
  localStorage.setItem("CT50",Billetes50*50000);
}

let cantidadBilletes20 = Math.floor(parseInt(document.getElementById("retiro").value) / 20000);
if (
  cantidadBilletes20 >= Billetes20 &&
  Billetes20 != 0 &&
  document.getElementById("retiro").value != 0
) {
  cantidadBilletes20 = Billetes20;
  document.getElementById("retiro").value -= 20000 * cantidadBilletes20;
  console.log(`se entregan ${cantidadBilletes20} billetes de 20 mil`);
  Billetes20 -= cantidadBilletes20;
  localStorage.setItem("veinteMil",Billetes20);
  localStorage.setItem("CT20",Billetes20*20000);
} else if (Billetes20 != 0 && document.getElementById("retiro").value != 0) {
  document.getElementById("retiro").value -= 20000 * cantidadBilletes20;
  console.log(`se entregan ${cantidadBilletes20} billetes de 20 mil`);
  Billetes20 -= cantidadBilletes20;
  localStorage.setItem("veinteMil",Billetes20);
  localStorage.setItem("CT20",Billetes20*20000);
}

let cantidadBilletes10 = Math.floor(parseInt(document.getElementById("retiro").value) / 10000);
if (
  cantidadBilletes10 >= Billetes10 &&
  Billetes10 != 0 &&
  document.getElementById("retiro").value != 0
) {
  cantidadBilletes10 = Billetes10;
  document.getElementById("retiro").value -= 10000 * cantidadBilletes10;
  console.log(`se entregan ${cantidadBilletes10} billetes de 10 mil`);
  Billetes10 -= cantidadBilletes10;
  localStorage.setItem("diezMil",Billetes10);
  localStorage.setItem("CT10",Billetes10*10000);
} else if (Billetes10 != 0 && document.getElementById("retiro").value != 0) {
  document.getElementById("retiro").value -= 10000 * cantidadBilletes10;
  console.log(`se entregan ${cantidadBilletes10} billetes de 10 mil`);
  Billetes10 -= cantidadBilletes10;
  localStorage.setItem("diezMil",Billetes10);
  localStorage.setItem("CT10",Billetes10*10000);
}

let cantidadBilletes5 = Math.floor(parseInt(document.getElementById("retiro").value) / 5000);
if (cantidadBilletes5 >= Billetes5 && Billetes5 != 0 && document.getElementById("retiro").value != 0) {
  cantidadBilletes5 = Billetes5;
  document.getElementById("retiro").value -= 5000 * cantidadBilletes5;
  console.log(`se entregan ${cantidadBilletes5} billetes de 5 mil`);
  Billetes5 -= cantidadBilletes5;
  localStorage.setItem("cincoMil",Billetes5);
  localStorage.setItem("CT5",Billetes5*5000);
} else if (Billetes5 != 0 && document.getElementById("retiro").value != 0) {
  document.getElementById("retiro").value -= 5000 * cantidadBilletes5;
  console.log(`se entregan ${cantidadBilletes5} billetes de 5 mil`);
  Billetes5 -= cantidadBilletes5;
  localStorage.setItem("cincoMil",Billetes5);
  localStorage.setItem("CT5",Billetes5*5000);
}
  let sumaAll = parseInt(localStorage.getItem("CT5")) + parseInt(localStorage.getItem("CT10")) + parseInt(localStorage.getItem("CT20")) + parseInt(localStorage.getItem("CT50")) + parseInt(localStorage.getItem("CT100"));
  localStorage.setItem("Total", sumaAll);

  console.log("En billetes de 5 mil queda: " + localStorage.getItem("CT5"));
  console.log("En billetes de 10 mil queda: " + localStorage.getItem("CT10"));
  console.log("En billetes de 20 mil queda: " + localStorage.getItem("CT20"));
  console.log("En billetes de 50 mil queda: " + localStorage.getItem("CT50"));
  console.log("En billetes de 100 mil queda: " + localStorage.getItem("CT100"));

  alert("Retiro realizado");
  cerrarSesion();
}






