const { Book } = require('./book');

class Books {

    constructor() {
        this.books = [];
    }

    addBook(book) {
        return this.books.push(book);
    }
   
    calcLength() {
        return this.books.length
    }

    showBooks() {
        return this.books.map(book => book.bookInfo());
    }
 
    showById(id) {
        return this.books.filter(book => book.id_book === id);
    }

    compareId(id) {
        return this.books.some(book => book.id_book === id);
    }

    updateBook(book, id) {
        let index = this.books.findIndex(book => book.id_book === id);
        return  this.books[index] = book;
        
    }

    deleteBook (id) { 
        let index = this.books.findIndex(book => book.id_book === id);
        this.books.splice(index,1);
        return this.books;
    }

}

module.exports = {Books};