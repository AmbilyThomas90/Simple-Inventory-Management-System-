// Import functions to read and write product data from the product model
const { readProducts, writeProducts } = require("../models/productModel");

//  ****GET All Products****
exports.getProducts = (req, res) => {
  const products = readProducts();
  res.json(products);
};


// ****GET Product by ID****
exports.getProductById = (req, res) => {
  // Extract 'id' parameter from the request URL
  const id = parseInt(req.params.id);

  // Read all products
  const products = readProducts();
  
// Find the product with the matching ID
const product = products.find((p) => p.productId === id);
  // If product not found, return 404 error
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // If found, send the product as a JSON response
  res.json(product);
};


// **** POST: Add Product ****
exports.addProduct = (req, res) => {
  const { productId, productname, description, Stock } = req.body;

  if (!productId || !productname || !description || !Stock) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const products = readProducts();
  products.push({ productId, productname, description, Stock });

  writeProducts(products);
  res.json({ message: "Product added", products });
};

//**** UPDATE product Id's description ****
exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { description } = req.body; // get new description from input

  let products = readProducts();
  let product = products.find((p) => p.productId === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Update only description (from user input)
  if (description) {
    product.description = description;
  }

  writeProducts(products);

  res.json({ message: "Product updated successfully", product });
};
// **** DELETE product BY Id ****
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  let products = readProducts();
  const newProducts = products.filter((p) => p.productId !== id);

  writeProducts(newProducts);
  res.json({ message: `Product ID ${id} deleted`, products: newProducts });
};
