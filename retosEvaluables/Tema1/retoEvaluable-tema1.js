const fs = require('fs');
const readline = require('readline');
let persona = { name: "", surname: "", age: null };

// MAIN
mostrarDatos();


// Funciones
function mostrarDatos() {
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
        let file = fs.writeFile("miFichero.json", fileContent, (err) => {
          if (err) throw err;
          console.log("fichero creado");
          fs.readFile("./miFichero.json", "utf8", (err, file) => {
            if (err) throw err;
            console.log(JSON.parse(file));
          });
        });
      });
    });
  });
}


