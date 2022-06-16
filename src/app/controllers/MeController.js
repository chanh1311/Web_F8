const Product = require('../model/Product');

class MeController {
    // [GET] /me/stored/product

    show(req, res, next) {
        // sort .sortAble(req)
        Promise.all([Product.find({}).lean().sortAble(req),Product.countDocumentsDeleted({})])
                .then(
                    ([product,deletedCount]) => res.render('me/show-product', { product, deletedCount})
                    )
                .catch(next)
        // Product.find({})
        //     .lean()
        //     .then((product) => res.render('me/show-product', { product }))
        //     .catch(next);

        // Product.countDocumentsDeleted({})
        //     .then((deletedCount => console.log(deletedCount)))
        //     .catch(next);
    }


    // [GET] /me/trash/product
    showTrash(req, res, next) {
        Product.findDeleted({})
            .lean()
            .then((product) => res.render('me/showtrash-product', { product }))
            .catch(next);
    }

  


}

module.exports = new MeController();
