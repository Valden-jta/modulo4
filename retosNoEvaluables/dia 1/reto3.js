//*  ------------------- RETO 3 ------------------- */

// Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto , utiliza el módulo readLine de node y solicita los valores de name, surname y age a través de la consola

// Con estos tres valores, genera un objeto, guardalo en un fichero json y léelo utilizando el método readline.

//  Este ejercicio debe hacerse en una única ejecución de JavaScript.

const fs = require("fs");
const readline = require("readline");

function mostrarDatos() {
  let persona = { name: "", surname: "", age: null };
  // readline
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question("Introduce el nombre:", (answer) => {
    persona.name = answer;
    rl.question("Introduce los apellidos:", (answer) => {
      persona.surname = answer;
      rl.question("Introduce la edad:", (answer) => {
        persona.age = parseInt(answer);
        rl.close();

        let fileContent = JSON.stringify(persona, null, 3);
        let file = fs.writeFile("dataReto3.json", fileContent, (err) => {
          if (err) throw err;
          console.log("fichero creado");
          fs.readFile("./dataReto3.json", "utf8", (err, file) => {
            if (err) throw err;
            console.log(JSON.parse(file));
          });
        });
      });
    });
  });
}

// MAIN
mostrarDatos();
