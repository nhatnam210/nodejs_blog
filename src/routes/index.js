const newRouter = require('./news.route');
const contactRouter = require('./contact.route');
const siteRouter = require('./site.route');

function route(app) {
    //route
    app.use('/news', newRouter);
    app.use('/contact', contactRouter);
    app.use('/', siteRouter);

    // app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.send("kết quả");ssss
    // });
}

module.exports = route;
