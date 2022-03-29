const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
    author: { type: ObjectId},
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600},
    image: { type: String,  maxLength: 255 },
    price: { type: Number },
    createdAt: {type: Date,default: Date.now},
    updatedAt: {type: Date},
});


module.exports = mongoose.model('Product', Product);