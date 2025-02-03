// *---------------------- template ---------------------- *\\
//?_________  Imports _________\\
const { Book } = require("../models/book");

/* body de la peticion
{
  "id": number
  "title": string,
  "author": string,
  "genre": stirng
}
*/

//?_________ Datos _________\\
let book= null; //new Book(null, "", "", "");

//?_________ Funciones _________\\

function getStart(req, res) {
  let answer = { error: true, code: 200, message: "Punto de inicio" };
  res.send(answer);
}

// localhost:3000/book?parametro=valor
function getBook(req, res) {

  if (book != null ) {
    res.send({ error: false, code: 200, data: book });
  } else {
    res.send({ error: true, code: 200, message: "El libro no existe" });
  }
}

function postBook(req, res) {
  let answer;
  console.log(req.body);
  if (book === null) {
    book = new Book (req.body.id, req.body.title, req.body.author, req.body.genre);
    answer = {
      error: false,
      code: 200,
      message: "Libro creado",
      data: book,
    };
  } else {
    answer = { error: true, code: 200, message: "El libro ya existe" };
  }
  res.send(answer);
}

function putBook(req, res) {
  let answer;
  if (book != null) {
    updateInfo(req.body.id, req.body.title, req.body.author, req.body.genre)
    answer = {
      error: false,
      code: 200,
      message: "Libro modificado",
      data: book,
    };
  } else {
    answer = { error: true, code: 200, message: "El libro no existe" };
  }
  res.send(answer);
}

function deleteBook(req, res) {
  let answer;
  if (book != null) {
    book = null;
    answer = {
      error: false,
      code: 200,
      message: "Libro eliminado",
    };
  } else {
    answer = { error: true, code: 200, message: "El libro no existe" };
  }
  res.send(answer);
}

//?_________ Exports _________\\

module.exports = {
  book,
  getStart,
  getBook,
  postBook,
  putBook,
  deleteBook,
};
