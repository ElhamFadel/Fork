const {join} = require('path');
const express = require('express');
const compression = require('compression');
const app = express();
const routes = require("./routes");

//prepare the app
app.use(compression());
// disable powered by express header
app.disable('x-powered-by');
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(join(__dirname,'..','client','public')));
// view engine
app.set('views', __dirname+'/..'+'/client' + '/views');
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000))
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(routes)
module.exports = app;