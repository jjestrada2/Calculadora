//funcion mostrar en pantalla
window.onload= function(){
 pantalla=document.getElementById("textoPantalla");

}
var x="0" ,xi=1, coma=0, ni=0 , op="no";


//funcion numero neceseraia para guardar numero y mostrar
function numero(num){
  
  if(x==0||xi==1){
   pantalla.innerHTML=num;// para mostrar en pantalla
    x=num;// guardo valor de numero como un char
    if(num=="."){//si copio . como primer valor
      x=num; //guardar el punto en la cadena
      pantalla.innerHTML="0."; // mostarar en pantalla
      coma=1; 
      
    }
  }else{
    if(num=="." && coma==0){//si copio por primera ves el punto
      pantalla.innerHTML+=num; //mostrar en pantalla el .
      x+=num; //guardar en la cadena
      coma=1; //cambiar el valor de la coma
    }else if(num=="." &&  coma==1){}//funcion vacia por si se vuelve a copiar la coma
    else{//si no es una coma o ya se ha escrito entoces
    pantalla.innerHTML+=num;//muestro en pantalla
    x+=num; //agrego numero a la cadena de texto
  }
  }
    xi=0;//esto permimte que despues de undir en el primer numero se inicie el else
}

function operar(s){
  igualar();
  ni=x;//guerdo numero anterior
  op=s;//guardo operador
  xi=1;//reinicio la lectura e impresion de datos
}

function igualar (){
  if(op=="no"){
   pantalla.innerHTML=x;//verificop que se haya copiado algun operador
    
  }else{
    sl=ni+op+x;
    sol=eval(sl); //convierto cadena a codigo numerico
    pantalla.innerHTML=sol;
    x=sol;
    op="no";
    xi=1;
    
  }
 
  
}

function raizc(){

  x=Math.sqrt(x);
  pantalla.innerHTML=(Math.sqrt(x));
  xi=0;
  op="no"; 
  
  }


var porcent=()=> {
  igualar();
  x=x/100;
  pantalla.innerHTML=x;
  xi=1;
}

var opuest=()=>{
  x=-1*x;
  igualar();
  pantalla.innerHTML=x;
  
}

var invec=()=>{
  x=1/x;
  igualar();
  pantalla.innerHTML=x;
  xi=1;
}

function retro(){
 cifras=x.length-1;
  x=x.slice(0,cifras);
  pantalla.innerHTML=x;
}

function borradoParcial(){
  pantalla.innerHTML=0;
  x=0;
  coma=0;
  
}

function borradoTotal(){
  x="0";
  pantalla.innerHTML=x;
  ni=0;
  op="no";
  coma=0;
  
  
}
