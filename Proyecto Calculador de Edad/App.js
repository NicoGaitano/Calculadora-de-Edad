function CalcularEdad() {
let calendario = document.getElementById("fecha").value
let contenedor = document.getElementById("contenedor")
let contenedorDos = document.getElementById("contenedorDos")

let inicio = new Date(calendario);
let fin = new Date();
let diaNacimiento = inicio.getDate() + 1;
let mesNacimientos = inicio.getMonth() + 1  
let anioUsuario = inicio.getFullYear()
let diaHoy = fin.getDate()
let mesHoy = fin.getMonth() + 1
let year =  fin.getFullYear()
let tiempo 
let diasTranscurridos 
let mesesTranscurridos 
let diaDiferencia



 if (( calendario === "" ) || (inicio > fin)  || ( anioUsuario <= 1899)) {
        alert("debe ingresar una fecha valida")
        return          
  }


  if (diaNacimiento > diaHoy && mesNacimientos > mesHoy) {
     diaDiferencia = diaNacimiento - diaHoy
    let diaDelmes = new Date(anioUsuario, mesNacimientos, 0).getDate()
    let diaRestantes = diaDelmes - diaDiferencia
    let mesesPosterioresDiasPosteriores = ((mesHoy - mesNacimientos) - 1)  +  12
     let anioPosterior = (year - anioUsuario) - 1
    contenedor.innerHTML = "<strong>Tu edad :"+diaRestantes+""+"Dias"+ " "+mesesPosterioresDiasPosteriores +" "+" "+"Meses"+ anioPosterior+"Años"+ " "+" "+"</strong>"

  }
  if (diaNacimiento > diaHoy && mesNacimientos < mesHoy) {
    let diaAnterior = diaNacimiento - diaHoy
    let diaDelmes = new Date(anioUsuario, mesNacimientos, 0).getDate()
    let  diaRestantes = diaDelmes - diaAnterior
    let mesDiferencias = (mesHoy - mesNacimientos) - 1
    let anioAnterior = year - anioUsuario
    contenedor.innerHTML = "<strong>Tu edad :"+diaRestantes+"Dias"+" "+mesDiferencias+"Meses"+" "+anioAnterior+"Años"+"</strong>" 
 }
 
 
  if (diaNacimiento < diaHoy && mesNacimientos > mesHoy) {
    diaDiferencia = diaHoy - diaNacimiento
    let mesesPosteriores  = ((mesHoy - mesNacimientos))  +  12  
     let anioPosterior = (year - anioUsuario) - 1
    contenedor.innerHTML = "<strong>Tu edad :"+diaDiferencia+"Dias"+" "+mesesPosteriores +"Meses"+ " "+ anioPosterior+"Años"+" "+"</strong>"
  }
  
  if (diaNacimiento > diaHoy && mesNacimientos === mesHoy) {
    diaDiferencia = diaNacimiento - diaHoy
    let diaDelmes = new Date(anioUsuario, mesNacimientos, 0).getDate()
    let diaRestantes = diaDelmes - diaDiferencia
    let mesesIgualesDiasPosteriores = ((mesHoy - mesNacimientos) - 1)  +  12
     let anioPosterior = (year - anioUsuario) - 1
    contenedor.innerHTML = "<strong>Tu edad :"+diaRestantes+"Dias"+" "+mesesIgualesDiasPosteriores +"Meses"+" "+ anioPosterior+"Años"+" "+"</strong>"
  }
  if (diaNacimiento < diaHoy && mesNacimientos === mesHoy) {
    let diaAnterior = diaHoy - diaNacimiento
    let anioAnterior = year - anioUsuario
    contenedor.innerHTML = "<strong>Tu edad :"+"Dias"+ " "+diaAnterior + "Años"+" "+anioAnterior+"</strong>" 
    
  }
  if (diaNacimiento < diaHoy && mesNacimientos < mesHoy) {
    let diaAnterior = diaHoy - diaNacimiento
    let mesNacimientosMenor = mesHoy - mesNacimientos
    let anioAnterior = year - anioUsuario
    contenedor.innerHTML = "<strong>Tu edad :"+diaAnterior +"Dias"+ " "+mesNacimientosMenor+"Meses"+ " "+anioAnterior+"Años"+"</strong>" 
  }


  if (diaHoy === diaNacimiento && mesNacimientos === mesHoy) {
    let diaYmesIguales = year - anioUsuario
    contenedor.innerHTML = "<strong>Tu edad :"+diaYmesIguales+" Años"+"</strong>" 
  }
  if (diaHoy === diaNacimiento && mesNacimientos < mesHoy) {
    let diaYmesIguales = year - anioUsuario
    let mesesPosteriorDiasIguales = mesHoy - mesNacimientos
    contenedor.innerHTML = "<strong>Tu edad :"+mesesPosteriorDiasIguales+"Meses"+" "+""+diaYmesIguales+" "+"Años "+"</strong>" 
  } 

  if (diaHoy === diaNacimiento && mesNacimientos > mesHoy) {
    let diaYmesIguales = ( year - anioUsuario) - 1
    let mesesAnteriorDiasIguales = ((mesHoy - mesNacimientos))  +  12
    contenedor.innerHTML = "<strong>Tu edad :"+diaYmesIguales+"Años,"+mesesAnteriorDiasIguales+"meses,"+"</strong>" 
  } 

if (diaNacimiento && mesNacimientos && anioUsuario) {
 tiempo = fin.getTime() - inicio.getTime();
 diasTranscurridos = Math.floor(tiempo / 86400000);
 mesesTranscurridos  = (year - anioUsuario) * 12
mesesTranscurridos -= inicio.getMonth();
mesesTranscurridos += fin.getMonth();
mesesTranscurridos <= 0 ? 0 : mesesTranscurridos;
contenedorDos.innerHTML  = "<strong>El tiempo transcurrido es : "+"Dias:"+" "+diasTranscurridos+" "+ "Meses:"+" "+mesesTranscurridos+"</strong>"
}
    }
   

