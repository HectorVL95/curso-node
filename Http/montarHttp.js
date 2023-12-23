const http = require('http')

const servidor = http.createServer((req, res) =>{
  console.log('Solicitud Nueva');
  res.end('Hola, Mundo');
})

const puerto = 3000

servidor.listen(puerto, ()=>{
  console.log(`El servidor esta escuchano en el puerto localhost:${puerto}...`);
})