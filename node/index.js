

const cursos = [
    {   id: 1, 
        nombre: 'Matematicas' ,
        duracion: '12 semanas' ,
        valor: '15 chelines' ,
    },
    {
        id: 2,
        nombre: 'Ingles' ,
        duracion: '12 semanas' ,
        valor: '13 chelines' ,
    },
    {
        id: 3,
        nombre: 'Español' ,
        duracion: '12 semanas' ,
        valor: '12 chelines' ,
    },
];


const argv = require('yargs')
.command('cursos', 'Cursos: ', mostrarCursos())
.argv;

function mostrarCursos() {
  
//     let timer = 0;

// cursos.forEach(el => {
//     timer = timer+2000;
//     setTimeout(() => {
//         console.log(el);
//     }, timer);
   
// });



}


console.log(argv.id);
console.log(argv.nombre);
console.log(argv.cedula);


let curso = cursos.find(el => {return el.id === argv.id});

if (!curso) {
    console.log("No se encontro el curso!");
} else {
    curso.estudiante = {
        nombre: argv.nombre,
        cedula: argv.cedula
    }
    console.log(curso);

    //Creacion del archivo
}












