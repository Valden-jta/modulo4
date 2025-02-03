const readline = require('readline');

pregunta = (pregunta) => {
    const question = new Promise((resolve,reject) => {
        // interfaz de comunicación
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta,(respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

readConsole = (callback) => {

    pregunta('¿Quieres editar los datos primero? (Y/n)')
    .then((control) =>{
        control = control.toLowerCase();
        if (control === 'y' || control === 'yes' || control === 's' || control === 'si') {
            return  true;
        } else {
            return false;
        }
    })
    .then(control => {
        if (control) {
             pregunta("Introduce el nombre: ")
                .then(respuesta => object.name = respuesta)
                .then(() => pregunta("Introduce los apellidos: "))
                .then(respuesta => object.surname = respuesta)
                .then(() => pregunta("Introduce la edad: "))
                .then(respuesta => object.age = parseInt(respuesta))
                .then(() => {return callback()})
                .catch(err_msg => {
                    err_msg = 'Error al introducir los datos';
                    console.log(err_msg)})
        } else {
            return callback()
        }
    })
    .catch(err_msg => {
        err_msg = 'Error en readConsole';
        console.log(err_msg)})
}


module.exports = { readConsole };