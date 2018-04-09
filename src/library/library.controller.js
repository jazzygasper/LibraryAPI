const Book = require('../common/book.model');
const library = require('../common/library.json')

class libraryController {

  static getLibrary(req, res) {
    Book.find(function(err, library) {
      if(err)
      res.status(500).send(err);
      else
      res.json({library});
    });
  }

  static uploadLibrary(req, res) {
    console.log(library);
    library.books.forEach(book => {
      Book.create(book, function() {
        console.log("book added");
      });
    })
    res.status(200).send("all books added")
  }
}

module.exports = libraryController;
