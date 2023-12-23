//setInterval() Para ejecutar codigo un numero infinito de veces con un retraso de milisegundos

// setInvertval(funcion, intervalo, arg1, arg2);

function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 1500, 'Node.js');

function sumar(a, b){
  console.log(a + b);
}

setInterval(sumar, 1500, 3, 4)