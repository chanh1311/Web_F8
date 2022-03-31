const mongoose = require('mongoose');

// auto slug
slug = require('mongoose-slug-generator')
mongoose.plugin(slug)




const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
    author: { type: ObjectId},
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600},
    image: { type: String,  maxLength: 255 },
    price: { type: Number,required: true },
    // createdAt: {type: Date,default: Date.now},
    // updatedAt: {type: Date},
    slug: { type: String, slug: 'name',unique: true }
},{timestamps: true});


module.exports = mongoose.model('Product', Product);