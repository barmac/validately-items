const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const routes = require('./routes');
const mongoConfig = require('./config/mongoConfig');

mongoConfig();

const app = express();

app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
