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
            console.log(file);
          });
        });
      });
    });
  });
}

// MAIN
mostrarDatos();
