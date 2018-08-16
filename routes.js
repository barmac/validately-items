const express = require('express');

const router = express();

const itemRoutes = require('./items/ItemRoutes');

router.use(itemRoutes);

module.exports = router;
