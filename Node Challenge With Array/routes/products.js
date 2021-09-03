const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

const Products = [{
    id:1,
    title:"Dell",
    description:"Dell Laptop"
},
{
    id:2,
    title:"HP",
    description:"HP Laptop"
},
{
    id:3,
    title:"Acer",
    description:"Acer Laptop"
},
{
    id:4,
    title:"Lenevo",
    description:"Lenevo Laptop"
}
]

// GET --> to retrieve all products
router.get("/", (req, res) => {
    res.json({Products:Products})
})

// GET --> to retrieve one product using id
router.get('/:id', (req, res) => {
    const product = Products.find(g => g.id === parseInt(req.params.id));
    if (!product) return res.status(500).json('The product with the given ID was not found.');
    res.json(product);
});

// POST --> to insert data into db
router.post('/', (req, res) => {
    const product = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
    }
    Products.push(product);
    res.json("Product Inserted Successfully!!");
});

// PUT --> to update product 
router.put("/:id",(req,res)=>{
    let product = Products.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (product) {
        const updateProduct = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
        };     
        let target = Products.indexOf(product);
        Products.splice(target, 1, updateProduct);
        res.json("Product Updated Successfully!!");
    }
    else {
        res.status(500).json('Data not found !!.');
    }
})

// DELETE --> to delete specific prodct
router.delete("/:id",(req,res)=>{
    let product = Products.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (product) {
        let target = Products.indexOf(product);
        Products.splice(target, 1);
        res.json("Product Deleted Successfully!!");
    }
    else {
        res.status(500).json('Data not found !!.');
    }
})

module.exports = router;