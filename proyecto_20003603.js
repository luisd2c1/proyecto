var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

var fecha = new Date();
var ano = fecha.getFullYear();
edad = ano - anioNacimiento;

if(edad>=18&&edad<=65){
var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");

var hijos = prompt("¿Tiene hijos?", "SI/NO");

const precioBase = 250;

comision = precioBase * 0.30;

// El siguiente es un comentario.
// Por favor no elimine los caracteres // que se encuentran al inicio.

// En la siguiente variable usted debe calcular los cargos correspondientes.
// Puede crear la cantidad de variables necesarias para calcular cada uno
// de los recargos que sean necesarios
recargos = 0;

recargosedad=0



  
  if(edad>=21&&edad<25){
    recargosedad=precioBase*0.01;
  }
  if(edad>=25&&edad<30){
    recargosedad=precioBase*0.02;
  }
  if(edad>=30&&edad<40){
    recargosedad=precioBase*0.05;
  }
  if(edad>=40&&edad<50){
    recargosedad=precioBase*0.08;
  }
  if(edad>=50&&edad<65){
    recargosedad=precioBase*0.12;
  }
  


recargoshijos = 0;

if(hijos=="si"||hijos=="SI"){
  var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
  if(cantidadHijos>=1){
    recargoshijos = precioBase*0.01*cantidadHijos;
  }
}

recargosconyuge=0;

if(conyuge=="si"||conyuge=="SI"){  
  var edad_conyuge = prompt("Ingrese la edad del conyuge");
  if(edad_conyuge<30){
    recargosconyuge=precioBase*0.01;
  }
  if(edad_conyuge>=30&&edad_conyuge<40){
    recargosconyuge=precioBase*0.02;
  }
  if(edad_conyuge>=40&&edad_conyuge<50){
    recargosconyuge=precioBase*0.03;
  }
  if(edad_conyuge>=50&&edad_conyuge<70){
    recargosconyuge=precioBase*0.05;
  }
}


recargos = recargosedad + recargosconyuge + recargoshijos;
totalPagar = precioBase + comision + recargos;

document.write("Nombre de Cliente: ",nombreCompleto,"<br\>");
document.write("Los cargos aplicados son los siguientes<br\>");
document.write("Cargos por edad = Q.",recargosedad,"<br\>");
document.write("Cargos por conyuge = Q.",recargosconyuge,"<br\>");
document.write("Cargos por hijos = Q.",recargoshijos,"<br\>");
document.write("Total a pagar = Q.",totalPagar);

}else{
    alert('No cumple con la edad requerida');
  }


