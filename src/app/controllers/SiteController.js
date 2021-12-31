class SiteController {
    // [GET] /
    home(req, res) {
        res.render("home");
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }
    // [GET] /introduce
    introduce(req, res) {
        res.render("introduce");
    }
}

module.exports = new SiteController;
