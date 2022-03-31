const Product = require('../model/Product');

class ProductController{
   
    show(req, res,next) {
        Product.findOne({slug: req.params.slug}).lean()
        .then(
            product => res.render('product/show',{product})
        )
        .catch(next)
    }

    create(req, res,next) {
       res.render('product/create')
    }

    store(req, res,next) {
        Product.create(req.body, function (err, small) {
            if (err) return handleError(err);
            res.redirect('/');
          });
     }
}

module.exports = new ProductController();