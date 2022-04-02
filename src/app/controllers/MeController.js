const Product = require('../model/Product');

class MeController {
    // [GET] /me/product/:id
    show(req, res, next) {
        Product.find({})
            .lean()
            .then((product) => res.render('me/show-product', { product }))
            .catch(next);
    }
}

module.exports = new MeController();
