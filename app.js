const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', bookRoutes);

module.exports = app;