const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Get all Products
router.get("/Products", productController.getProducts);
// Add new Product
router.post("/addProduct", productController.addProduct);
// Delete Product By ID
router.delete("/deleteProduct/:id", productController.deleteProduct);
////Partially  Update Products
router.patch("/updateProduct/:id", productController.updateProduct);

module.exports = router;
