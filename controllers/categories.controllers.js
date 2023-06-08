// @desc        Articles
// @route       GET /
// @access      Public
exports.getCategories = async (req, res, next) => {
    res.render('categories', { title: 'Categories' });
};