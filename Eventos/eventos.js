//Invocamos los events
const EventEmitter = require('events');

//Creamos un nuevo evento
const emisorProductos = new EventEmitter();

//Asignamos algo al evento
emisorProductos.on('compra', (total, numProductos)=>{
  console.log(`total de la compra $${total}`);
  console.log(`Numero de productos: ${numProductos}`);
});

//Emitimos el evento para que este aparezca
emisorProductos.emit('compra', '50', '5');
