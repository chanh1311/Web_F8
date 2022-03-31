const newsRouter = require('./news');
const sitesRouter = require('./sites');
const productRouter = require('./product');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/product', productRouter);
    app.use('/', sitesRouter);
}

module.exports = route;
