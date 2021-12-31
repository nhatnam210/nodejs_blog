const newRouter = require('./news.route')
const siteRouter = require('./site.route')

function route(app) {
    //route
    // app.get("/", (req, res) => {
    //     res.render("home");
    // });

    // app.get("/news", (req, res) => {
    //     res.render('news');
    // })

    app.use('/news',newRouter);
    app.use('/',siteRouter);

    // app.get("/introduce", (req, res) => {
    //     res.render("introduce");
    // });

    // app.get("/search", (req, res) => {
    //     res.render("search");
    // });

    // app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.send("kết quả");
    // });
}

module.exports = route;
