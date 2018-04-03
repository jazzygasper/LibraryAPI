var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var libraryRouter = express.Router();

libraryRouter.route('/Library')
  .get(function(req, res) {
    var resJson = {hello: "this is my app"};

    res.json(resJson);
  });

app.use('/api', libraryRouter);

app.get('/', function(req, res) {
  res.send('welcome to the library api!');
});

app.listen(port, function() {
  console.log('Gulp is running my app on PORT: ' + port);
});
