const http = require('http');

const servidor =  http.createServer((req, res) =>{
  res.end('Estoy aprendiendo Node.js');
})

const puerto = 3000;

servidor.listen(puerto, ()=>{
  console.log(`El servidor esta en el puerto ${puerto}`);
});

