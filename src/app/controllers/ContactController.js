class ContactController {
    index(req, res) {
        res.render('contact');
    }

    fb(req, res) {
        res.send('contact facebook');
    }
}

module.exports = new ContactController();
