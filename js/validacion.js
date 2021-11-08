//Haz un programa utilizando funciones para realizar la operación seleccionada (suma, resta, multiplicación, división), de acuerdo a 2 números ingresados por pantalla y muestre el resultado.

/*let numero1, numero2;
numero1=parseFloat(prompt("Ingrese un número"));
numero2=parseFloat(prompt("Ingrese otro número"));

function suma(num1,num2) {
    return num1+num2
}
function resta(num1,num2) {
    return num1-num2
}
function division(num1,num2) {
    return num1/num2
}
function multiplicacion(num1,num2) {    
    return num1*num2
}

document.write(`<p>El resultado de la suma es ${suma(numero1,numero2)}</p>`)
document.write(`<p>El resultado de la resta es ${resta(numero1,numero2)}</p>`)
document.write(`<p>El resultado de la división es ${division(numero1,numero2)}</p>`)
document.write(`<p>El resultado de la multiplicacion es ${multiplicacion(numero1,numero2)}</p>`)*/

//Haz un programa que pida una cadena por teclado y muestre en pantalla si “Contiene letra A” o “No contiene letra A”


const num1=document.getElementById("txt_num1");
const num2=document.getElementById("txt_num2");
const num3=document.getElementById("txt_resultado");
const label1=document.getElementById("boton1")
const label2=document.getElementById("boton2")
let resultado=0;

function sumar() {  
   if(num1.value=="" ||num2.value==""){
    
    alert("Ingrese datos");
  }
  else{
    label1.style.color="white";
    label1.style.backgroundColor="red"
    label2.style.color="black";
    label2.style.backgroundColor="white"
    resultado=parseInt(num1.value)+parseInt(num2.value);
    document.getElementById("txt_resultado").value=resultado;
  }  
}
function restar() {  
  if(num1.value=="" ||num2.value==""){
    alert("Ingrese datos");
  }
  else{
    label1.style.color="black";
    label1.style.backgroundColor="white"
    label2.style.color="white";
    label2.style.backgroundColor="blue"
    resultado=parseInt(num1.value)-parseInt(num2.value);
    document.getElementById("txt_resultado").value=resultado;
  }  
}
