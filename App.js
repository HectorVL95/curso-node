const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res)=> {
  const {method} = req.method;

  switch(method){
    case 'GET':
      return manejarSolicitudGet(req, res);
    case 'POST':
      return manejarSolicitudPost(req, res);
      default:
        res.statusCode = 501; 
        res.end(`El metodo no puede ser manejado por el servidor y el metodo es ${method}`);
    case 'DELETE':
      return manejarSolicitudDelete(req, res)
    break;
  }
})

function manejarSolicitudGet(req, res){
  const path = req.url;

  console.log(res.statusCode);

  //By default all post codes will be 200
  if(path === '/'){
    res.writeHead(200, {'Content-Type' : 'application/json'});
    return res.end('Bienvenido a mi primer servidor y API creados con Node.js')
  } else if (path === '/cursos') {
    return res.end(JSON.stringify(cursos.infoCursos));
  }else if (path === '/cursos/programacion'){
    return res.end(JSON.stringify(cursos.infoCursos.promgramacion));
  }

  res.statusCode = 404
  res.end('El recurso solicitado no existe...')
}

function manejarSolicitudPost(req, res){
  const path = req.url
  if(path === '/cursos/programacion'){

    let cuerpo = '';

    req.on('data', contenido => {
      cuerpo += contenido.toString()
    });

    req.on('end', ()=>{
      console.log(cuerpo);
      console.log(typeof cuerpo);
   
      //Convertir a un objeto de Javascript.
      cuerpo = JSON.parse(cuerpo)

      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);

      res.end('El servidor recibio una solicitud POST para /cursos/programacion')
    })
  }
}

function manejarSolicitudDelete(req, res){
  const path = req.url
  if(path === '/cursos/programacion'){
    res.statusCode = 200;
    return red.end('El servidor recibio una solicitud DELETE para /cursos')
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, ()=>{
  console.log(`El servidor esta activo en el puerto ${PUERTO}`);
})