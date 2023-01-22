
const express = require("express");
const router = express.Router();
require("dotenv-safe").config();
const fs = require("fs");
const file_content = fs.readFileSync('assets/products.json');
const products = JSON.parse(file_content);


router.get("/products", async (req, res) => {

    return res.status(200).json(products);


});



module.exports = router;
