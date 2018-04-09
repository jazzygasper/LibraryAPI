const Service = require('./book.service');
const Book = require('../common/book.model');
const library = require('../common/library.json')

class BookController {

  static addBook(req, res) {
    req.body.bookId = req.body.bookId || Service.generateId(req.body);
    console.log("book added");
    Book.create(req.body, function() {
      res.status(200).send("book added")
    })
  }

  static updateBook(req, res) {
    req.body.bookId = req.body.bookId || Service.generateId(req.body);
    console.log("book updated");
    Book.update({bookId: req.params.bookId}, req.body, function() {
      res.status(200).send("book updated")
    })
  }

  static deleteBook(req, res) {
    Book.remove({bookId: req.params.bookId}, function () {
      res.status(200).send("book deleted")
    })
  }
}

module.exports = BookController;
