const { toObjectMongoose } = require('../../util/mongoose');
const Product = require('../model/Product');

class SitesController {
    // [GET] home
    index(req, res, next) {
        // res.json({name: 'Hello Ban!!!' })

        // promise
        Product.find({})
            .lean()
            .then((product) =>
                res.render('home', {
                    product,
                    // product: toObjectMongoose(product);
                }),
            )
            .catch((err) => next(err));

        // callback

        // if(!err){
        //     res.json(product);
        // }else{
        //     res.status(400).jsonp({ error: 'message' })
        // }
    }

    // [GET] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();
