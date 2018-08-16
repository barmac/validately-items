const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const routes = require('./routes');
const mongoConfig = require('./config/mongoConfig');

mongoConfig();

const app = express();

app.use(cors());
app.use(bodyParser());
app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));

module.exports = app;
