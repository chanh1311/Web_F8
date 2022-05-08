const { estimatedDocumentCount } = require('../model/Product');
const Product = require('../model/Product');

class ProductController {
    // GET /product/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .lean()
            .then((product) => res.render('product/show', { product }))
            .catch(next);
    }

    // GET /product/create
    create(req, res, next) {
        res.render('product/create');
    }

    // GET /product/store
    store(req, res, next) {
        Product.create(req.body).then(res.redirect('/')).catch(next);
    }

    // GET /product/:id/edit
    edit(req, res, next) {
        Product.findById(req.params.id)
            .lean()
            .then((product) => res.render('product/edit', { product }))
            .catch(next);
    }

    // PUT /product/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/product'))
            .catch(next);
    }

     // DELETE /product/:id/delete
     destroy(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }
}

module.exports = new ProductController();
