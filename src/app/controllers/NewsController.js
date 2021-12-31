// const res = require("express/lib/response");

class NewsController {
    // [GET] /news
    index(req, res) {
        res.render("news");
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL!!!')
    }

    details(req, res) {
        res.send('NEW DETAIL REAL!!!')
    }
}

module.exports = new NewsController;