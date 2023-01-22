const { Op } = require("sequelize");
const express = require("express");
const User = require("../models/userinfo");
const router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv-safe").config();




router.get("/products", async (req, res) => {



});



module.exports = router;
