const getNombre = () => {
   process.stdout.write("Ingresa tu nombre: ");
   process.stdin.on('data',function(data){
      if(data){
         process.stdout.write(`Hola, me llamo ${data}.`);
      } else {
         process.stdout.write('No ha ingresado ningún nombre'.);
      }
      process.exit();   //Para finalizar el proceso
   });
}
getNombre();