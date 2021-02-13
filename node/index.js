

const cursos = {
    matematicas: {
        default: 0,
        id: 1,
        nombre: 'Curso 1',
        duracion: '3 semanas',
        valor: 2000,
    },
    ingles: {
        default: 0,
        id: 1,
        nombre: 'Curso 1',
        duracion: '3 semanas',
        valor: 2000,
    },
    espanol: {
        default: 0,
        id: 1,
        nombre: 'Curso 1',
        duracion: '3 semanas',
        valor: 2000,
    },
}




const argv = require('yargs')
.command('promedio', 'Calcular el prom', cursos)
.argv;

console.log(argv.matematicas);
console.log(argv);



// let timer = 0;

// courses.forEach(el => {
//     timer = timer+2000;
//     setTimeout(() => {
//         console.log(el);
//     }, timer);
// });





