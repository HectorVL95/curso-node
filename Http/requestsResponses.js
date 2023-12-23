const http = require('http')

const servidor = http.createServer((req, res) =>{
  //Esto es una solicitud de servidor
  /*console.log('===> req (solicitud');
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);*/

  //Esto es la respuesta de servidor

  //Ver los codigos de estado
  /*console.log('===> res (respuesta)');
  console.log(res.statusCode);*/

  res.setHeader('content-type', 'application/json')
  console.log(res.getHeaders());

  res.end('Hola Mundo')
});

const puerto = 3000

servidor.listen(puerto, () =>{
  console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
})