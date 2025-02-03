//*  ------------------- RETO 3 ------------------- *\\

// Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto , utiliza el módulo readLine de node y solicita los valores de name, surname y age a través de la consola

// Con estos tres valores, genera un objeto, guardalo en un fichero json y léelo utilizando el método readline.

//  Este ejercicio debe hacerse en una única ejecución de JavaScript.

const fs = require('fs/promises');
const readline = require('readline');

let persona = { name: "", surname: "", age: null };


// Main ------------------------

mostrarDatosThenCatch(persona);


// Funciones -------------------

// !readline no tiene módulo para promesas, asi que hay que construirlo
function pregunta(pregunta) {
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

// then/catch

function mostrarDatosThenCatch(data) {
    pregunta("Introduce el nombre: ")
    .then(respuesta => data.name = respuesta)
    .then(() => pregunta("Introduce los apellidos: "))
    .then(respuesta => data.surname = respuesta)
    .then(() => pregunta("Introduce la edad: "))
    .then(respuesta => data.age = parseInt(respuesta))
    .then(() => fs.writeFile('ficheroThenCatch2.json', JSON.stringify(data, null,3)))
    .then(() => {
        return fs.readFile('ficheroThenCatch2.json','utf8')
    })
    .then(result => {
        console.log(`then/catch:`);
        console.log(JSON.parse(result));
    })
    .catch(err => {console.log(err)})
}
