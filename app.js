var express = require('express'),
  mongoose = require('mongoose')

var db = mongoose.connect('mongodb://localhost/libraryApi');

var cors = require('cors');
var bodyParser = require('body-parser');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var libraryRouter = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

libraryRouter.route('/Library')
  .post(function(req, res) {
    library.forEach(book => {
      Book.create(book, function() {
        console.log("book added");
      });
    })
    res.status(200).send("all books added")
  });


libraryRouter.post('/Book', function(req, res) {
    console.log("book added");
    Book.create(req.body, function() {
      res.status(200).send("book added")
    });
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
