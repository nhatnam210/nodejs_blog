class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL!!!');
    }

    // [GET] /news/details
    details(req, res) {
        res.render('newsDetails');
    }
}

module.exports = new NewsController();
