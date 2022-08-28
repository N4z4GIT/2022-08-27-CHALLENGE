/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function pedazos(array, cantidad) {
  // La funcion pedazos recibe un arreglo llamado 'array' y un numero entero llamado 'cantidad'
  // Esta debe separar el array recibido en N subarreglos que tengan como máximo el numero recibido en cantidad de elementos.
  // Por ejemplo:
  // pedazos([1,2,3,4,5], 2) -> retorna [[1,2], [3,4], [5]];
  // pedazos([1,2,3,4,5], 4) -> retorna [[1,2,3,4], [5]);
  // pedazos{[1,2],4) -> retorna [[1,2]];

  var nuevoArray= new Array();
  for(n=0; n<array.length; n+=cantidad) {
    if (n+cantidad > array.length){
      pedazo= array.slice(n, array.length); //para indicar el N maximo
    }
    else{
      pedazo= array.slice(n, n+cantidad); //para indicar el N maximo
    }
    
    nuevoArray.push(pedazo);
   }
   return nuevoArray

 

  //OPCION 3
  //for(n=0; n<array.lenght; n++) {
    //pedazo= array.slice(n, n+array.length-1); //para indicar el N maximo
    //nuevoArray.push(pedazo);
   //}

 
  
  //OPCION 2
  //array.forEach((value, index)=>{
    //return array.slice(index, index+1)
  //})
  //return nuevoArray

  //OPCION 1
 // for(n=0; n<array.lenght; n++) {
   //  pedazo= array.slice(n, n+array.length-1); //para indicar el N maximo
    // nuevoArray.push(pedazo);
    //}

  //return nuevoArray

};
// No modifiques nada debajo de esta linea //

module.exports = pedazos