class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL!!!');
    }

    details(req, res) {
        res.render('newsDetails');
    }
}

module.exports = new NewsController();
