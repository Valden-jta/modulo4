const readline = require("readline");

pregunta = (pregunta) => {
  const question = new Promise((resolve, reject) => {
    // interfaz de comunicación
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
      rl.close();
    });
  });
  return question;
};

async function readConsole(callback) {
  try {
    let control = await pregunta("¿Quieres editar los datos primero? (Y/n)");
    if (control === 'y' || control === 'yes' || control === 's' || control === 'si') {
      object.name = await pregunta("Introduce el nombre: ");
      object.surname = await pregunta("Introduce los apellidos: ");
      object.age = await pregunta("Introduce la edad: ");
      return callback();
    } else {
      return callback();
    }
  } catch {
        let err_msg = "Error en readConsole";
        console.log(err_msg);
    }
  }


module.exports = { readConsole };
