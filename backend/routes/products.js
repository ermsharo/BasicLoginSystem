const express = require("express");
const router = express.Router();
require("dotenv-safe").config();
const fs = require("fs");
const middleware = require("../middleware/middleware");
const file_content = fs.readFileSync("assets/products.json");
const products = JSON.parse(file_content);

router.get("/products", middleware, async (req, res) => {
  console.log("req id", req.userId);
  return res.status(200).json(products);
});

module.exports = router;
