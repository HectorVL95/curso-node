const { log } = require('console');
const fs = require('fs');

//leer archivo

console.log('Antes de leer el archivo');

fs.readFile('indx.html', 'utf-8', (err, contenido) => {
  if(err){
    throw err;
  }
  console.log('Mensaje...');
});

console.log("Despues de leer el archivo");

//Cambiar nombre

fs.rename('index.html', 'main.html', (err) => {
  if(err){
    throw err;
  }
  console.log('Nombre cambiado exitosamente.');
})

console.log('despues de cambiar el nombre');
  //Agregar contenido al final de un archivo.

fs.appendFile('index.html', '<p>Hola</p>', (err) =>{
  if(err){
    throw err
  }
  else{
    console.log('Archivo Actualizado');
  }
})

console.log('despues de agregar elementos');
  //Reemplazar todo el contenido del archivo

  fs.writeFile('index.html', 'Contenido Nuevo', (err) =>{
    if(err){
      throw err;
    }
    else{
      console.log('Archivo reemplazado exitosamente');
    }
  })

  console.log('despues de cambiar el contenido del archivo');

  fs.unlink('main.html', (err) => {
    if (err){
      throw err;
    }
    else{
      console.log("Cambiado exitosamente");
    }
  } )

  console.log('despues de eliminar el archivo');