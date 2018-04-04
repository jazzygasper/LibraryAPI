var express = require('express'),
  mongoose = require('mongoose')

var db = mongoose.connect('mongodb://localhost/libraryApi');

var cors = require('cors');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var libraryRouter = express.Router();

app.use(cors());

libraryRouter.route('/Library')
  .post(function(req, res) {
    library.forEach(book => {
      Book.create(book, function() {
        console.log("book added");
      });
    })
    res.status(200).send("all books added")
  });

libraryRouter.route('/Library')
  .get(function(req, res) {
    Book.find(function(err, library) {
      if(err)
        res.status(500).send(err);
      else
        res.json({library});
    });
  });

app.use('/api', libraryRouter);

app.get('/', function(req, res) {
  res.send('welcome to the library api!');
});

app.listen(port, function() {
  console.log('Gulp is running my app on PORT: ' + port);
});
