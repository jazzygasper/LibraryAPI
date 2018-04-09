var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var bookModel = new Schema({
  bookId: { type: String },
  title: { type: String },
  author: { type: String },
  subject: { type: String },
  currentOwner: { type: String },
  checkOutDate: { type: String },
  amazonLink: { type: String },
  coverUrl: { type: String }
});

module.exports = mongoose.model('Book', bookModel);
