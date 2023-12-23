//setImmediate() ejecuta codigo despues de que todo el codigo sincrono se haya ejecutado

function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate()');

setImmediate(mostrarTema, 'Node.js');

console.log('Despues de setImmediate()');
