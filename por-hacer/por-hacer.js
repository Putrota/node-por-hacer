const fs = require('fs');


let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err) throw new Error('No se pudo grabar', err);

    });

}


cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const getListado = () => {

    cargarDB();

    return listadoPorHacer;

}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    // Si no lo encuentra retorn un -1
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}


const borrar = (descripcion) => {

    cargarDB();

    let resultado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (resultado.length < listadoPorHacer.length) {
        listadoPorHacer = resultado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}