const express = require("express");
//new router object to handle routes separately
const router = express.Router();
// Import the product controller 
const productController = require("../controllers/productController");

// Get all Products
router.get("/Products", productController.getProducts);

//  GET Product by ID
router.get("/Product/:id", productController.getProductById);

// Add new Product
router.post("/addProduct", productController.addProduct);

//Partially  Update Products
router.patch("/updateProduct/:id", productController.updateProduct);

// Delete Product By ID
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
