const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}


const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const opts_crear = {
    descripcion
};


const opts_actualizar = {
    descripcion,
    completado
};

const opts_borrar = {
    descripcion
};


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts_crear)
    .command('actualizar', 'Actualiza el estado de una tarea', opts_actualizar)
    .command('borrar', 'Borra una tarea', opts_borrar)
    .help()
    .argv;


module.exports = {
    argv
}