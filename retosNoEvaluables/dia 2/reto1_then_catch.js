//*  ------------------- RETO 1 ------------------- *\\

// Crea un objeto con las siguientes propiedades: name, surname, age

// Utilizando los métodos writeFile y readFile, guarda el obeto en un archivo con extension *.json, lee el objeto e imprimelo por consola

    // Métodos asincronos de writeFile y readFile basados en callbaks:
        // readFile(path, callback): Leer un archivo.
        // writeFile(path, data, callback): Escribir un archivo y, si existe, sobreescribir.

// Debe ocurrir en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de ejecutar el archivo de nuevo.


const fs = require('fs/promises');

let persona = { name: 'Javier', surname: 'de la Torre', age: 37};

// then/catch

function mostrarDatosThenCatch(data) {
    fs.writeFile('ficheroThenCatch.json', JSON.stringify(data, null, 3))
    .then(() => {
        return fs.readFile('ficheroThenCatch.json', 'utf8');
    })
    .then(result => {
        console.log(`then/catch:`);
        console.log(JSON.parse(result));
    })
    .catch(err => {
        console.log(err);
        
    })
}

mostrarDatosThenCatch(persona);
