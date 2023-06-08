const express = require('express');
const {getArticle, getSingleArticle, getSingleCategory} = require("../controllers/articles.controllers");
const router = express.Router();

/* Articles */
router.route('/')
    .get(getArticle)

router.route('/show/:id')
    .get(getSingleArticle)

router.route('/category/:category_id')
    .get(getSingleCategory)

module.exports = router;
