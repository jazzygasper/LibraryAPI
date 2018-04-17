const Service = require('./book.service');
const Book = require('../common/book.model');

class BookController {

  static addBook(req, res) {
    req.body.bookId = req.body.bookId || Service.generateId(req.body);
    req.body.amazonLink = req.body.amazonLink || 'https://www.amazon.co.uk/';
    req.body.coverUrl = req.body.coverUrl || 'https://genderstudies.indiana.edu/images/publications/book-cover-placeholder.jpg';
    console.log("book added");
    Book.create(req.body)
    .then(() => {
      res.status(200).send(req.body);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  static updateBook(req, res) {
    req.body.bookId = req.body.bookId || Service.generateId(req.body);
    console.log("book updated");
    Book.update({bookId: req.params.bookId}, req.body)
    .then(() => {
      res.status(200).send(req.body);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  static deleteBook(req, res) {
    Book.remove({bookId: req.params.bookId}, function () {
      res.status(200).send(req.body);
    })
  }
}

module.exports = BookController;
