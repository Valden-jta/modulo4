//*  ------------------- RETO 3 ------------------- *\\

// Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto , utiliza el módulo readLine de node y solicita los valores de name, surname y age a través de la consola

// Con estos tres valores, genera un objeto, guardalo en un fichero json y léelo utilizando el método readline.

//  Este ejercicio debe hacerse en una única ejecución de JavaScript.

const fs = require('fs/promises');
const readline = require('readline');

let persona = { name: "", surname: "", age: null };


// Main

mostrarDatosAsyncAwait(persona);

// Funciones

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

// async/await

async function mostrarDatosAsyncAwait(data) {
    try{
        data.name = await pregunta("Introduce el nombre: ");
        data.surname = await pregunta("Introduce los apellidos: ");
        data.age = await pregunta("Introduce la edad: ");
        await fs.writeFile('ficheroTAsyncAwait2.json', JSON.stringify(data, null, 3));
        let fileContent = await fs.readFile('ficheroTAsyncAwait2.json','utf8');
        console.log('async/await');
        console.log(JSON.parse(fileContent));
    }
    catch{
        console.log(error);
    }
}

