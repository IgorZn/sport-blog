const express = require('express');
const router = express.Router();

const {getIndex} = require("../controllers/index.controllers");

/* GET home page. */
router.route('/')
    .get(getIndex)

module.exports = router;
