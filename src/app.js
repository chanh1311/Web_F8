// khoi tao
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const {engine} = require('express-handlebars');

// add morgan
const morgan = require('morgan');
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({extname: ".hbs"}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// config file static
app.use(express.static(path.join(__dirname, 'public')));

// render
app.get('/',(req,res) => {
    res.render('home');
})
app.get('/news',(req,res) => {
    res.render('new');
})


//lang nghe
app.listen(port,() => {
    console.log(`Web app listening on port ${port}`);
})