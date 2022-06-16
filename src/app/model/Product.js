const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);



// auto slug
slug = require('mongoose-slug-generator');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema(
    {
        _id: {type: Number},
        author: { type: ObjectId },
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        price: { type: Number, required: true },
        // createdAt: {type: Date,default: Date.now},
        // updatedAt: {type: Date},
        slug: { type: String, slug: 'name', unique: true },
    },
    {   _id: false,
        timestamps: true
    }
);


// custom query helpers
Product.query.sortAble = function(req){
    if(req.query.hasOwnProperty('_sort')){
        var isType = ['asc','desc'].includes(req.query.type);
        if(isType){
            return this.sort({
                [req.query.column] : req.query.type
            })
        }
        return this;
    }
    return this;
}

// add plugin
Product.plugin(AutoIncrement);
mongoose.plugin(slug);
Product.plugin(mongoose_delete,{ overrideMethods: 'all',deletedAt: true });

module.exports = mongoose.model('Product', Product);
