let { cursos } = require('./listar');
const express = require('express')
const app = express()

let fs = require('fs');

let opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    },
}


let argv = require('yargs')
    .command('inscribir', 'Comandos para matricular', opciones)
    .argv;

let inscribirCurso = () => {

    if (argv.id == 1 || argv.id == 2 || argv.id == 3) {
        salida = `El estudiante ${argv.nombre} de cedula: ${argv.cedula} se ha matriculado en el curso ${cursos[argv.id - 1].nombreC} con una duracion de ${cursos[argv.id - 1].duracion} y un valor de ${cursos[argv.id - 1].valor}`;
        
    } else {
           salida= ('El codigo que ingreso no es correcto!!!');
    }



}

app.get('/', function (req, res) {
    res.send(salida)
  })
   
  app.listen(3000)
  

inscribirCurso();