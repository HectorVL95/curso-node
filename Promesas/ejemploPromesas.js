const estatusPedido = () => {
  return Math.random() < 0.5;
};

const miPedidodePizza = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    if(estatusPedido()){
      resolve('¡Pedido exitoso! Su pizza esta en camino');
    }
    else{
      reject('¡Ocurrio un error. Por favor intente nuevamente')
    }
  }
  , 3000)
})

/*const manejarPedido = (mensajeConfirmacion) =>{
  console.log(mensajeConfirmacion);
}

const rechazarPedido = (mensajeRechazo) => {
console.log(mensajeRechazo);
}

miPedidodePizza.then(manejarPedido, rechazarPedido);*/

//Version mas compacta del bloque de codigo comentado que esta arriba
/*miPedidodePizza
  .then((mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
  })
  //.catch se utilza cuando una promesa es rechazada
  .catch((mensajeDeError) =>{
    console.log(mensajeDeError);
  })*/

  const manejarPedido = (mensajeConfirmacion) =>{
    console.log(mensajeConfirmacion);
  }

  const rechazarPedido = (mensajeRechazo) => {
    console.log(mensajeRechazo);
    }

    miPedidodePizza.then(manejarPedido).catch(rechazarPedido);

