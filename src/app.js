// khoi tao
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');

// File tu dinh nghia
const route = require('./routes');
const db = require('./app/config/db');

// connect to database
db.connect();

// overide Method
app.use(methodOverride('_method'));

// add morgan Log
const morgan = require('morgan');
app.use(morgan('combined'));

// get paramater POST
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


// config file static
app.use(express.static(path.join(__dirname, 'public')));

// init router
route(app);

//lang nghe
app.listen(port, () => {
    console.log(`Web app listening on port ${port}`);
});
