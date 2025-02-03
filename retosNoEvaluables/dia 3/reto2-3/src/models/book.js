class Book {

    constructor(id_book, title, author, genre) {
        this.id_book = id_book;
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    bookInfo() {
        return this.book;
    }

    updateInfo(id, title, author, genre) {
        this.id_book = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

}

module.exports = { Book };