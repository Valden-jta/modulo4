class Book {
  constructor(
    id_book,
    id_user,
    title,
    type,
    genre,
    author,
    price,
    photo,
    selected
  ) {
    this.id_book = id_book;
    this.id_user = id_user;
    this.title = title;
    this.type = type;
    this.genre = genre;
    this.author = author;
    this.price = price;
    this.photo = photo;
    this.selected = selected;
  }

  bookInfo() {
    return {
      id_book: this.id_book,
      id_user: this.id_user,
      title: this.title,
      type: this.type,
      genre: this.genre,
      author: this.author,
      price: this.price,
      photo: this.photo,
      selected: this.selected,
    };
  }

  update(id_book, id_user, title, type, genre, author, price, photo, selected) {
    this.id_book = id_book;
    this.id_user = id_user;
    this.title = title;
    this.type = type;
    this.genre = genre;
    this.author = author;
    this.price = price;
    this.photo = photo;
    this.selected = selected;
  }
}

module.exports = { Book };
