class NewsController {
    // [GET] tintuc
    index(req, res) {
        res.render('news');
    }
    // [GET] chitiet
    detail(req, res) {
        res.send('News DETAIL!!!');
    }
}

module.exports = new NewsController();
