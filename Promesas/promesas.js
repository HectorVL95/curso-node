const promesaCumplida = true;

const MiPromesa = new Promise((resolve, reject) =>{
  setTimeout(() => {
    if(promesaCumplida){
      resolve('¡Promesa cumplida!');
    } else{
      reject('Promesa rechazada...')
    }
  }, 3000)
});

const manejarPromesaCumplida = (valor) =>{
  console.log(valor);
}

const manejarPromesaRechazada = (rechazo) =>{
  console.log(rechazo);
}

//.then regresa una promesa ya definida
MiPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);