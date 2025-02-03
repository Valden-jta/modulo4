// *---------------------- template ---------------------- *\\

//?_________ Importacion de módulos  _________\\

import express from "express";
import cors from "cors";
// Endpoints routers  Ej: const userRouters = require("./routers/user.routers");
import movieRouters from './routers/movie.routers.js';
// Errores
import errorHandling from "./error/errorHandling.js";


//?_________ Creación y configuración del servidor _________\\ 
const app = express();
// process.env.PORT es una variable de entorno por si esto está en un servidor de aplicaciones
app.set("port", process.env.PORT || 3000);


//?_________  Middleware _________\\ 
// Módulos globales
app.use(cors());
app.use(express.urlencoded({ extended: false })); // esta y la siguiente encapsulan en objetos el envío y la recepción de datos.
app.use(express.json());
// Routing
app.use(movieRouters);
app.use((req, res, next) => {
  res
  .status(404)
  .json({ error: true, codigo: 404, message: "Endpoint no encontrado" });
});
// Errores
app.use(errorHandling);


//?_________  Exports _________\\ 
export default app;
