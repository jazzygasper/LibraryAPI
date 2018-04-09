const express = require('express')
const router = express.Router();
const Controller = require('./library.controller');

router.get('/', Controller.getLibrary);
router.post('/', Controller.uploadLibrary);

module.exports = router;
