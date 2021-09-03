const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for Product Model
const ProductSchema = new Schema({
    id: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
})

// Export Product Model Schema
module.exports = Product = mongoose.model("product", ProductSchema);