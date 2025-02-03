//*  ------------------- RETO 2 ------------------- */

// Crea un objeto con las siguientes propiedades: name, surname, age

// Utilizando los métodos writeFile y readFile, guarda el obeto en un archivo con extension *.json, lee el objeto e imprimelo por consola

    // Métodos asincronos de writeFile y readFile basados en callbaks:
        // readFile(path, callback): Leer un archivo.
        // writeFile(path, data, callback): Escribir un archivo y, si existe, sobreescribir.

// Debe ocurrir en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de ejecutar el archivo de nuevo.


//-----------------------------------------------------------------------\\

const fs = require('fs');
// Datos
let persona = {name: 'Javier', surname: 'de la Torre', age: 30};

// Funciones
function mostrarDatos(data) {
    let fileContent = JSON.stringify(data,null,3);
    let file = fs.writeFile('dataReto2.json', fileContent,(err)=> {
        if (err) throw err;
        console.log('fichero creado')
        fs.readFile('./dataReto2.json',"utf8", (err,file)=>{
            if (err) throw err;
            console.log(JSON.parse(file));
        });
    });
}

// MAIN
mostrarDatos(persona);

