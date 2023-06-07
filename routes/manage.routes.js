const express = require('express');
const {addArticles} = require("../controllers/manage.controllers");
const router = express.Router();

/* Manage */
router.route('/')

router.route('/articles/add')
    .get(addArticles)

router.route('/categories/add')
    .get(addArticles)

module.exports = router;
