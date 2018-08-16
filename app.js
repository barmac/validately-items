const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
