// *---------------------- template ---------------------- *\\

//?_________  Imports _________\\
import { Movie } from "../models/movie.js";
import { Professional } from "../models/professional.js";

//?_________ Datos _________\\
let movie = null;
let professionalIndex = []; 

//?_________ Funciones _________\\

// ========================================= get ========================================= \\

function getMovie(req, res) {
    if (movie != null) {
        res.send({ error: false, code: 200, data: movie.showMovie() });
    } else {
        res.send({
            error: true,
            code: 404,
            message: "No has introducido ninguna película.",
        });
    }
}

function getActor(req, res) {
    let actorId = parseInt(req.query.id);
    if (movie != null && movie.actors) {
        if (!actorId) {
            let actorsInfo = movie.actors.map((actor) => actor.showProfessional());
            res.send({ error: false, code: 200, data: actorsInfo });
        } else {
            let actor = movie.actors.find((actor) => actor.id === actorId &&(actor.profession === 'actor' || actor.profession === 'actress'));
            actor
                ? res.send({ error: false, code: 200, data: actor.showProfessional() })
                : res.send({ error: true, code: 404, message: "Actor no encontrado" });
        }
    } else {
        res.send({
            error: true,
            code: 404,
            message: "No hay actores en la película",
        });
    }
}

function getDirector(req, res) {
    if (movie != null && movie.director != null) {
        res.send({
            error: false,
            code: 200,
            data: movie.director.showProfessional(),
        });
    } else {
        res.send({
            error: true,
            code: 404,
            message: "No has introducido ninguna película.",
        });
    }
}

function getWriter(req, res) {
    if (movie != null && movie.writer != null) {
        res.send({
            error: false,
            code: 200,
            data: movie.writer.showProfessional(),
        });
    } else {
        res.send({
            error: true,
            code: 404,
            message: "No has introducido ninguna película.",
        });
    }
}

// ========================================= post ========================================= \\

function postMovie(req, res) {
    if (movie === null) {
        movie = new Movie(
            req.body.title,
            req.body.releaseYear,
            req.body.nationality,
            req.body.genre
        );
        res.send({
            error: false,
            code: 200,
            message: "Pelicula añadida con éxito",
            data: movie.showMovie(),
        });
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Ups, no se pudo añadir la película, algo salió mal",
        });
    }
}

function postActor(req, res) {
    let newActor = new Professional(
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.height,
        req.body.isRetired,
        req.body.nationality,
        req.body.oscarsNumber,
        req.body.profession
    );

    if (movie != null && movie.actors) {
        if (!professionalIndex.find(index => index === newActor.id)) {
            if (newActor.profession === "actor" || newActor.profession === "actress") {
            movie.actors.push(newActor);
            professionalIndex.push(newActor.id);
            res.send({
                error: false,
                code: 200,
                message: "Actor añadido con éxito",
                data: movie.showMovie(),
            });
            } else {
                res.send({
                    error: true,
                    code: 404,
                    message: "Debes introducir un actor/actriz, no un director o guionista",
                });      
        }
        } else {
            res.send({
                error: true,
                code: 404,
                message: "Debes introducir otro id",
            });
        } 
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Añade una película antes de introducir actores",
        });
    }
}

function postDirector(req, res) {
    let newDirector = new Professional(
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.height,
        req.body.isRetired,
        req.body.nationality,
        req.body.oscarsNumber,
        req.body.profession
    );

    if (movie != null) {
        if (!professionalIndex.find(index => index === newDirector.id)) { 
            if (newDirector.profession === "director") {
               movie.director = newDirector;
               professionalIndex.push(newDirector.id);
               res.send({
                   error: false,
                   code: 200,
                   message: "Director añadido con éxito",
                   data: movie.showMovie(),
               });
            } else {
                res.send({
                    error: true,
                    code: 404,
                    message: "Debes introducir un actor/actriz, no un director o guionista",
                });   
            } 
        } else {
            res.send({
                error: true,
                code: 404,
                message: "Debes introducir otro id",
            });
        }
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Añade una película antes de introducir un director/directora",
        });
    }
}

function postWriter(req, res) {
    let newWriter = new Professional(
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.height,
        req.body.isRetired,
        req.body.nationality,
        req.body.oscarsNumber,
        req.body.profession
    );

    if (movie != null) {
        if (!professionalIndex.find(index => index === newWriter.id)) { 
            if (newWriter.profession === "writer") {
               movie.writer = newWriter;
               professionalIndex.push(newWriter.id);
               res.send({
                   error: false,
                   code: 200,
                   message: "Guionista añadido con éxito",
                   data: movie.showMovie(),
               });
            } else {
                res.send({
                    error: true,
                    code: 404,
                    message: "Debes introducir un guionista, no un actor/actriz o director.",
                });   
            } 
        } else {
            res.send({
                error: true,
                code: 404,
                message: "Debes introducir otro id",
            });
        }
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Añade una película antes de introducir un/una guionista",
        });
    }
}

// ========================================= put ========================================= \\

function putMovie(req, res) {
    if (movie != null) {
        movie.title = req.body.title;
        movie.releaseYear = req.body.releaseYear;
        movie.actors = req.body.actors;
        movie.nationality = req.body.nationality;
        movie.public = req.body.director;
        movie.public = req.body.writer;
        movie.languaje = req.body.languaje;
        movie.platform = req.body.platform;
        movie.isMCU = req.body.isMCU;
        movie.mainCharacterName = req.body.mainCharacterName;
        movie.producer = req.body.producer;
        movie.distributor = req.body.distributor;
        movie.genre = req.body.genre;
        res.send({
            error: false,
            code: 200,
            message: "Pelicula editada con éxito",
            data: movie.showMovie(),
        });
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Debes añadir una pelicula antes de poder editarla.",
        });
    }
}

function putActor(req, res) {
    let editedActor = new Professional(
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.height,
        req.body.isRetired,
        req.body.nationality,
        req.body.oscarsNumber,
        req.body.profession
    );

    if (movie != null && movie.actors) {
        let foundActor = movie.actors.find(
            (actor) =>
                actor.id === editedActor.id &&
                (editedActor.profession === "actor" ||
                    editedActor.profession === "actress")
        );
        if (foundActor) {
            movie.actors[movie.actors.indexOf(foundActor)] = editedActor;
            res.send({
                error: false,
                code: 200,
                message: "Actor editado con éxito",
                data: editedActor.showProfessional(),
            });
        } else {
            res.send({
                error: true,
                code: 404,
                message:
                    "El actor/actriz no está en esta película o no es un actor/actriz",
            });
        }
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Añade una película antes de editar un actor/actriz",
        });
    }
}

function putDirector(req, res) {
    let editedDirector = new Professional(
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.height,
        req.body.isRetired,
        req.body.nationality,
        req.body.oscarsNumber,
        req.body.profession
    );

    if (movie != null) {
        if (
            movie.director.id === editedDirector.id &&
            editedDirector.profession === "director"
        ) {
            movie.director = editedDirector;
            res.send({
                error: false,
                code: 200,
                message: "Director editado con éxito",
                data: editedDirector.showProfessional(),
            });
        } else {
            res.send({
                error: true,
                code: 404,
                message:
                    "El director no está en esta pelicula o no hasintroducido un director",
            });
        }
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Añade una película antes de editar un actor/actriz",
        });
    }
}

function putWriter(req, res) {
    let editedWriter = new Professional(
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.height,
        req.body.isRetired,
        req.body.nationality,
        req.body.oscarsNumber,
        req.body.profession
    );

    if (movie != null) {
        if (
            movie.director.id === editedWriter.id &&
            editedWriter.profession === "writer"
        ) {
            movie.director = editedWriter;
            res.send({
                error: false,
                code: 200,
                message: "Guionista editado con éxito",
                data: editedWriter.showProfessional(),
            });
        } else {
            res.send({
                error: true,
                code: 404,
                message:
                    "El guionista no está en esta pelicula o no has introducido un guionista",
            });
        }
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Añade una película antes de editar un actor/actriz",
        });
    }
}

// ========================================= delete ========================================= \\

function deleteMovie(req, res) {
    if (movie != null) {
        movie = null;
        res.send({
            error: false,
            code: 200,
            message: "Pelicula eliminada con éxito",
        });
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Debes añadir una pelicula antes de poder eliminarla.",
        });
    }
}

function deleteActor(req, res) {
    let deleteActor = new Professional(
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.height,
        req.body.isRetired,
        req.body.nationality,
        req.body.oscarsNumber,
        req.body.profession
    );

    if (movie != null && movie.actors) {
        if (movie.actors.some((actor) => actor.id === deleteActor.id)) {
            movie.actors.splice(movie.actors.indexOf(deleteActor), 1);
            professionalIndex.splice(professionalIndex.indexOf(deleteActor.id),1);
            res.send({
                error: false,
                code: 200,
                message: "Actor eliminado con éxito",
                data: movie.showMovie(),
            });
        } else {
            res.send({
                error: true,
                code: 404,
                message: "El actor que quieres eliminar no esta en esta película",
            });
        }
    } else {
        res.send({
            error: true,
            code: 404,
            message: "Añade una película antes de eliminar actores y actrices",
        });
    }
}

function deleteDirector(req, res) {
    if (movie != null && movie.director != '') {
        movie.director = '';
        professionalIndex.splice(professionalIndex.indexOf(deleteDirector.id),1);
        res.send({ error: false, code: 200, message: 'Director eliminado con exito', data: movie.showMovie() });
    } else {
        res.send({ error: true, code: 404, message: 'DLa pelicula no tiene director o no esta creada' });
    }
}


function deleteWriter(req, res) {
    if (movie != null && movie.writer != '') {
        movie.writer = '';
        professionalIndex.splice(professionalIndex.indexOf(deleteDirector.id),1);
        res.send({ error: false, code: 200, message: 'Director eliminado con exito', data: movie.showMovie() });
    } else {
        res.send({ error: true, code: 404, message: 'DLa pelicula no tiene director o no esta creada' });
    }
}

//?_________ Exports _________\\
const movieController = {
    movie,
    getMovie,
    getActor,
    getDirector,
    getWriter,
    postMovie,
    postActor,
    postDirector,
    postWriter,
    putMovie,
    putActor,
    putDirector,
    putWriter,
    deleteMovie,
    deleteActor,
    deleteDirector,
    deleteWriter
};

export default movieController;
