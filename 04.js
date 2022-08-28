/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function palabraSimetrica(palabra) {
  // La funcion llamada 'palabraSimetrica' recibe como argumento un string 'palabra'
  // Esta devuelve true o false dependiendo de si la palabra es simétrica o no.
  // Una palabra es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico('menem') devuelve true
  // numeroSimetrico('franco') devuelve false
  // Tu código:



// SINO USAR SLICE()
 //OPCION 6
 var stringInvertida= "";
 for(var i= palabra.length-1; i>=0; i--){
  stringInvertida= stringInvertida + palabra [i]; 
 }

 if(stringInvertida == palabra) {
  return true
 }

 return false 
 //OPCION 5
 // String.prototype.reverse= function(){
   // var stringInvertida= "";
    //for(var i= this.length-1; i>=0; i--){
     //stringInvertida= stringInvertida + this [i]; {
     
     //if(String.prototype.reverse) {
     // return true
     //}
    //}
     //return false 
    //}
  //}
  
 
 
 //OPCION 1 String.prototype.reverse= function(){
    //var stringInvertida= "";
    //for(var i= this.length-1; i>=0; i--){
      //stringInvertida= stringInvertida + this [i];
     
     //if(String.prototype.reverse) {
       // return true
      //}
      //return false 
    //}
  //}

 //OPCION 2
 //for (c = 0, f= palabra.length; c != f; c++ , f--){
   // if (palabra[c] != palabra[f] ){
     // return false;}
  //}
  //return true; 
  
  
  // OPCION 3 
  // if(palabraInvertida= palabra.split("").reverse().join("")){
    //  return true}
  //return false 
 
}

// No modifiques nada debajo de esta linea //

module.exports = palabraSimetrica