const express = require('express'),
  mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/libraryApi');

const cors = require('cors');
const bodyParser = require('body-parser');

const bookRoutes = require('./src/book');
const libraryRoutes = require('./src/library');

const app = express();

const port = process.env.PORT || 3000;

const libraryRouter = express.Router();

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/book', bookRoutes);
app.use('/library', libraryRoutes);

app.listen(port, function() {
  console.log('Gulp is running my app on PORT: ' + port);
});
