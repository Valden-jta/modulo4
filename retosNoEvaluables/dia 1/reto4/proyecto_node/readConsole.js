const readline = require('readline');
const { writeAndRead } = require('./writeAndReadObject');


readConsole = (callback) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('¿Quieres editar los datos primero? (Y/n)',(control)=>{
        control = control.toLowerCase();
        if (control === 'y' || control === 'yes' || control === 's' || control === 'si') {
            rl.question('Introduce el nombre: ', (answer)=>{
                object.name = answer;
                rl.question('introduce los apellidos: ', (answer)=>{
                    object.surname = answer;
                    rl.question('Por último, introduce la edad: ', (answer)=>{
                        object.age = parseInt(answer);
                        console.log('Datos introducidos correctamente');
                        rl.close()
                        return callback();
                    });
                }); 
            });
        } else {
            console.log('Mostrando fichero...');
            rl.close()
            return callback();
        }
    });
};

module.exports = {readConsole};