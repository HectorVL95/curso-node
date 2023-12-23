  //En este codigo comentado hicimos el ejemplo de pasar informacion de json a javascript

/*const curso = require('./curso.json')

console.log(curso.temas);*/

  //En el siguiente ejemplo estaremos pasando informacion de javascript a jason

let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "Javascript",
    "Node.js"
  ],
  "esPublico": true
}

// Objeto -> Cadena de caracteres
//Cadrna de caracteres en formato Json
let infoCursoJson = JSON.stringify(infoCurso)

console.log(infoCursoJson);
console.log(typeof infoCursoJson);

// Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJson);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);