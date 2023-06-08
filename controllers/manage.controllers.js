// @desc        Manage Articles
// @route       GET /articles
// @access      Public
exports.manageArticles = async (req, res, next) => {
    const context = {
        title: 'Manage Articles'
    }

    res.status(200)
        .render('manage_articles', context)

};


// @desc        Manage Categories
// @route       GET /categories
// @access      Public
exports.manageCategories = async (req, res, next) => {
    const context = {
        title: 'Manage Categories'
    }

    res.status(200)
        .render('manage_categories', context)

};


// @desc        Add articles on manage page
// @route       GET /articles/add
// @access      Public
exports.addArticles = async (req, res, next) => {
    const context = {
        title: 'Create Articles'
    }

    res.status(200)
        .render('addArticles', context)

};


// @desc        Edit article
// @route       GET /articles/edit/:id
// @access      Public
exports.editArticle = async (req, res, next) => {
    const context = {
        title: 'Edit Article',
        id: req.params.id
    }

    res.status(200)
        .render('edit_article', context)

};


// @desc        Add categories on manage page
// @route       GET /categories/add
// @access      Public
exports.addCategories = async (req, res, next) => {
    const context = {
        title: 'Create Categories'
    }

    res.status(200)
        .render('addCategories', context)

};


// @desc        Edit category
// @route       GET /categories/edit/:id
// @access      Public
exports.editCategories = async (req, res, next) => {
    const context = {
        title: 'Edit Categories',
        id: req.params.id
    }

    res.status(200)
        .render('edit_category', context)

};