const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const routes = require('./routes');
const mongoConfig = require('./config/mongoConfig');

const port = process.env.PORT || 3000;

mongoConfig();

const app = express();

app.use(cors());
app.use(bodyParser());
app.use(routes);

app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
