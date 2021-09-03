const express = require('express');
const router = express.Router();
const config = require('config');

const Product = require('../models/Product');

// GET --> to retrieve all products
router.get("/", async(req, res) => {
    Product.find()
    .then((products) => res.json(products));
})

// GET --> to retrieve one product using id
router.get("/:id", async(req, res) => {
    Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => res.status(500).json("Error : " + error));
})

// POST --> to insert data into db
router.post("/", async(req, res) => {
    try {

        let {id, title, description} = req.body;
        console.log(`id: ${id}, title: ${title}, description: ${description}`);

        if (!id || !title || !description) {
            return res.status(400).json({msg:"All fields require to be entered!!"});
        }

        const newProduct = new Product ({
            id, title, description,
        })

        const saveProduct = await newProduct.save();
        res.json(saveProduct);

    } catch (error) {
        
        res.status(500).json("Error : " + error);

    }
})

// PUT --> to update product 
router.put("/:id",(req,res)=>{
    Product.findById(req.params.id)
    .then((product)=>{
        product.id = req.body.id,
        product.title = req.body.title,
        product.description = req.body.description
        
        product.save()
        .then(()=>res.json("Product Updated Successfully!!"))
        .catch((error)=>res.status(400).json("Error: "+ error))
    })
    .catch((error) => res.status(400).json("Error " + error));
})

// DELETE --> to delete specific prodct
router.delete("/:id", async(req, res) => {
    Product.findById(req.params.id)
    .then((product) => product.remove().then(() => res.json("Product Deleted Successfully!!")))
    .catch((error) => res.status(500).json("Error : " + error));
})

module.exports = router;