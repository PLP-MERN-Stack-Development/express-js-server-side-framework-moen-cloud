const mongoose = require('mongoose');

// Defining a schema
const productSchema = new mongoose.Schema({
    id: {type: Number, unique: true, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    instock: {type: Boolean, required: true}
}, {timestamps: true});

// Create the model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;