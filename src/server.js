const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

// Mount routes
app.use("/", productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
