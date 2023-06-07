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