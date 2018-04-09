class bookService {

  static replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  static generateId(book) {
    console.log('inservice', book.title);
    return this.replaceAll(book.title, ' ', '-');
  };
}

module.exports = bookService;
