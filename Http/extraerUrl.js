//De las siguientes maneras podemos extraer los siguientes datos de una URL

const miUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')

console.log(miUrl.hostname); // www.ejemplo.org
console.log(miUrl.pathname); // /curso/programacion

console.log(miUrl.searchParams); // 'ordenar' => 'vistas', 'nivel' => '1'  "Enseñar los paramentros"
console.log(typeof miUrl.searchParams); // Enseñar que tipo de datos son los paramentros
console.log(miUrl.searchParams.get('ordenar')); // Extraer la palabra 'ordenar
console.log(miUrl.searchParams.get('nivel')); // Extraer la palabra 'nivel'

console.log(miUrl.protocol);
