const express = require('express')
const router = express();

const itemController = require('./ItemController');

router.get('/items', (req, res) => itemController.getItems(req, res));

module.exports = router;
