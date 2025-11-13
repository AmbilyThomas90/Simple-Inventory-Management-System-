// Import the Express framework
const express = require("express");

// Create an instance of an Express application
const app = express();

// Import product-related routes from another file
const productRoutes = require("./routes/productRoutes");

//Middleware to parse JSON
app.use(express.json());

/// Mount the product routes 

app.use("/", productRoutes);
// Define the port number where the server will run
const PORT = 3000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
