const newsRouter = require('./news');
const sitesRouter = require('./sites');
const productRouter = require('./product');
const meRouter = require('./me');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/product', productRouter);
    app.use('/', sitesRouter);
}

module.exports = route;
