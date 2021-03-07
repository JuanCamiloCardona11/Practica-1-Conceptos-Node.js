/*
//Cambiar el nombre a un archivo de forma síncrona:
const fs = require('fs');
fs.renameSync('./pruebas.txt','./config.txt');
*/

/*
//Cambiar el nombre de un archivo de forma asíncrona:
const fs = require('fs');
fs.rename('./pruebas.txt', './config.txt', (error) => {
   if(error){
      throw new Error(`Ha ocurrido el siguiente error: ${error}`);
   }
});
*/

/*
//Mover un archivo de forma asíncrona:
const fs = require('fs');
fs.rename('./pruebas.txt', './miCarpeta/pruebas.txt', (error) => {
   if(error){
      throw new Error(`Ha ocurrido el siguiente error: ${error}`);
   }
});
*/

/*
//mover un archivo de forma síncrona:
const fs = require('fs');
fs.renameSync('./pruebas.txt','./miCarpeta/pruebas.txt');
*/

/*
//Eliminar un archivo de forma asíncrona:
const fs = require('fs');
fs.unlink('pruebas.txt', (error) => {
   if(error){
      throw new Error(`Se ha producido el siguiente error: ${error}`);
   }
});
*/

/*
// Eliminar un archivo de forma síncrona:
   const fs = require('fs');
   fs.unlinkSync('./pruebas.txt');
*/
