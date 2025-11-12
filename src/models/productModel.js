const fs = require("fs");
const path = require("path");

// Correct path to products.json file
const filePath = path.join(__dirname, "../products.json");

const readProducts = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const writeProducts = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readProducts, writeProducts };
