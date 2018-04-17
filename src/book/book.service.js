class bookService {

  static replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  };

  static generateId(book) {
    return this.replaceAll(book.title, ' ', '-');
  };
}

module.exports = bookService;
