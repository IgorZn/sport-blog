// @desc        Articles
// @route       GET /
// @access      Public
exports.getArticle = async (req, res, next) => {
    res.render('articles', { title: 'Articles' });
};


// @desc        Single Articles
// @route       GET /show/:id
// @access      Public
exports.getSingleArticle = async (req, res, next) => {
    res.render('single_article', { title: 'Single Article' });
};


// @desc        Single Category
// @route       GET /categories/:category_id
// @access      Public
exports.getSingleCategory = async (req, res, next) => {
    res.render('articles', { title: 'Category Articles' });
};