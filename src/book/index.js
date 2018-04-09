const express = require('express')
const router = express.Router();
const Controller = require('./book.controller');

router.post('/', Controller.addBook);
router.delete('/:bookId', Controller.deleteBook);

module.exports = router;
