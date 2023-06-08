const express = require('express');
const router = express.Router();

const {getCategories} = require("../controllers/categories.controllers");


/* Categories */
router.route('/')
    .get(getCategories)

module.exports = router;
