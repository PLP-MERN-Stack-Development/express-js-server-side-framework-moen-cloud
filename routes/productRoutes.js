// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');


// Inline validation middleware

function validateProduct(req, res, next) {
  const { id, name, description, price, category, instock } = req.body;

  // Check for missing fields
  if (!id || !name || !description || !price || !category || instock === undefined) {
    return res.status(400).json({
      message: "All product fields (id, name, description, price, category, instock) are required."
    });
  }

  
  if (typeof id !== 'number' || typeof price !== 'number') {
    return res.status(400).json({ message: "Product 'id' and 'price' must be numbers." });
  }

  if (typeof name !== 'string' || typeof description !== 'string' || typeof category !== 'string') {
    return res.status(400).json({ message: "Product 'name', 'description', and 'category' must be strings." });
  }

  if (typeof instock !== 'boolean') {
    return res.status(400).json({ message: "Product 'instock' must be a boolean (true/false)." });
  }

  next(); // all checks passed
}


// GET all products

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'An unexpected error occurred on the server.' });
  }
});

// CREATE new product

router.post('/', validateProduct, async (req, res) => {
  const { id, name, description, price, category, instock } = req.body;
  try {
    const product = new Product({ id, name, description, price, category, instock });
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Product not created', error: error.message });
  }
});


// GET single product by ID

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
});

// UPDATE product by ID

router.put('/:id', validateProduct, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: 'Unable to update product', error: error.message });
  }
});

// DELETE product by ID

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
});

module.exports = router;
