const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const config = require('./config/config');
require('./models/User');

const routes = require('./routes');


//mongoose.connect(config.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);


app.listen(config.port, () => {
    console.log(`running on port ${config.port}`);
});