const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const config = require('./config/config');
require('./models/User');

const routes = require('./routes');




const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

// mongoose.connect(config.mongoURI);

// app.listen(config.port, () => {
//     console.log(`running on port ${config.port}`);
// });

mongoose.connect(config.mongoURI)
    .then(() => {
        app.listen(config.port, () => {
            console.log(`running on port ${config.port}`);
        })
    }).catch(err => console.log("could not connect to DB"));
