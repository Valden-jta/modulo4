// *---------------------- template ---------------------- *\\
//?_________  Imports _________\\
const { Book } = require("../models/book");
const { Books } = require("../models/books");

//?_________ Datos _________\\
let books = new Books([]);
console.log('books creado');
console.log(books);


//?_________ Funciones _________\\

function getStart(req, res) {
  let answer = { error: true, code: 200, message: "Punto de inicio" };
  res.send(answer);
}

// localhost:3000/book?parametro=valor
function getBooks(req, res) {
  let answer;
  let bookId = parseInt(req.query.id);
  if (books != null && (!bookId || books.compareId(bookId))) {
    if (!bookId){
      answer = { error: false, code: 200, message: `Libros en la lista:`, data: books.showBooks() };
    } else {
      answer = { error: false, code: 200, data:  [`Id buscado: ${bookId}`, books.showById(bookId)] };
    }
  } else {
    answer = { error: true, code: 200, message:  'No hay libros en la lista' };
  }
  res.send(answer);
}

function postBooks(req, res) {
  let answer;
  let newbook = new Book(req.body.id, req.body.title, req.body.author, req.body.genre);

  if (books != null && !books.compareId(newbook.id_book)) {
    books.addBook(newbook);
    console.log(books.showBooks());
    answer = { error: false, code: 200, message: "Libro añadido. Lista de libros actualizada", data: [`Total: ${books.length}`,books.showBooks()] };
  } else {
      answer = { error: true, code: 200, message: 'Ya hay un libro con ese id'};
    }
    res.send(answer);
  } 

function putBooks(req, res) {
  let answer;
  let bookId = parseInt(req.query.id);
  let bookUpdate = new Book(req.body.id, req.body.title, req.body.author, req.body.genre);
  if (books != null &&(!bookId || books.compareId(bookId))) {
    if (!bookId){
      answer = { error: true, code: 200, message: "Debes especificar un ID" };
    } else {
      books.updateBook(bookUpdate,bookId);
      answer = { error: false, code: 200, message: "Libro modificado. Lista de libros actualizada", data: books.showBooks()};
    }
   } else {
    answer = { error: true, code: 200, message: "El libro que quieres modificar no existe" };
   }
  res.send(answer);
}

function deleteBooks(req, res) {
  let answer;
  let bookId = parseInt(req.query.id);
  if (books != null &&(!bookId || books.compareId(bookId))) {
    if (!bookId) {
      answer = { error: true, code: 200, message: "Debes especificar un ID" };
    } else {
      books.deleteBook(bookId);
      answer = { error: false, code: 200, message: "Libro eliminado. Lista de libros actualizada", data: books.showBooks()};
    }
   } else {
    answer = { error: true, code: 200, message: "El libro que quieres eliminar no existe" };
   }
  res.send(answer);
}

//?_________ Exports _________\\

module.exports = {
  books,
  getStart,
  getBooks,
  postBooks,
  putBooks,
  deleteBooks,
};
