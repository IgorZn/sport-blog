const express = require('express');
const router = express.Router();

const {
    addArticles,
    addCategories,
    manageArticles,
    manageCategories,
    editArticle,
    editCategories} = require("../controllers/manage.controllers");

/* Manage */
router.route('/articles')
    .get(manageArticles)

router.route('/categories')
    .get(manageCategories)

router.route('/articles/add')
    .get(addArticles)

router.route('/articles/edit/:id')
    .get(editArticle)

router.route('/categories/add')
    .get(addCategories)

router.route('/categories/edit/:id')
    .get(editCategories)

module.exports = router;
