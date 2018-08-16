const express = require('express')
const router = express();

const itemController = require('./ItemController');

router.get('/items', (req, res) => itemController.getItems(req, res));
router.post('/items', (req, res) => itemController.addItem(req, res));
router.put('/items/:id', (req, res) => itemController.updateItem(req, res));
router.post('/items/:id/vote-up', (req, res) => itemController.voteUp(req, res));
router.post('/items/:id/vote-down', (req, res) => itemController.voteDown(req, res));

module.exports = router;
