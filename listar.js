let cursos = [{
        nombre: 'matematicas',
        id: 1,
        valor: 50000,
        duracion: 22
    },
    {
        nombreC: 'sociales',
        id: 2,
        valor: 80000,
        duracion: 35
    },
    {
        nombreC: 'informatica',
        id: 3,
        valor: 20000,
        duracion: 10
    }
]

let imprimirCursos = () => {
    let contador = 1;
    for (let index = 0; index < cursos.length; index++) {
        contador = contador + 1;
        setTimeout(() => {
            console.log(`
                Nombre del curso: ${cursos[index].nombreC}
                ID del curso: ${cursos[index].id}
                Precio del curso elegido: ${cursos[index].valor}
                Duracion del curso: ${cursos[index].duracion}
            `);
        }, 2000 * contador);
    }
}

imprimirCursos();


module.exports = {
    cursos
}