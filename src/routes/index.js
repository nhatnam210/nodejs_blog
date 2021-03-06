const newRouter = require('./news.route');
const courseRouter = require('./courses.route');
const contactRouter = require('./contact.route');
const meRouter = require('./me.route');
const siteRouter = require('./site.route');

function route(app) {
    //route
    app.use('/news', newRouter);
    app.use('/courses', courseRouter);
    app.use('/contact', contactRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);

    // app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.send("kết quả");
    // });
}

module.exports = route;
