//* ----------------------------------- RETO 3 ----------------------------------------- *\\

/*  
1.  Crear un directorio que se llame proyecto node e inicioar un proyecto de Node dentro.
2.  Crea 3 archivos,index.js, writeAndReadObject.js y readConsole.js .
3.  En writeAndReadObject, mete la parte de fs en la funcion:
        writeAndRead(path,obj)
    En esta función se debe escribir en el fichero cuyo nombre está en el parametro path el objeto literal guardado en el parametro obj. Y luego leer el fichero y mostrarlo por consola  
4.  En readconsole.js mete la parte de readline en la funcion:
        readConsole(callback)
    Esta función debe preguntar por consola el name, surname y age del usuario. Guardar dichos datos en un objeto litera, y aplicarle la callback recibida como párametro de entrada de readConsole.

Estas funciones deben ser independientes,esto es, que si se desea escribir y leer los datos de un objeto en un fichero se pueda hacer independientemente de si este objeto se ha creado a mano o con el modulo readConsole.

5. La importación de los módulos creadeos se debe hacer solo en el fichero index.js, de tal forma que con una sola llamada desde index.js obtengamos el mismo resultado que en el ejercicio anterior.
    */

const writeAndRead = require("./writeAndReadObject");
const readConsole = require("./readConsole");

path = "./miFichero.json",
object = { name: "Pepe", surname: "Juárez", age: 41 };

readConsole.readConsole(() => writeAndRead.writeAndRead(path,object));