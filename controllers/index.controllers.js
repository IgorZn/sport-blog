


// @desc        Index page
// @route       GET /
// @access      Public
exports.getIndex = async (req, res, next) => {
    res.render('index', { title: 'Express' });
};