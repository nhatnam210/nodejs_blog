//library
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

const app = express();
const port = 3000;

//HTTP logger
// app.use(morgan ('combined'));

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//method override POST --> PUT
app.use(methodOverride('_method'));

app.use(SortMiddleware);

app.get('/middleware', function (req, res, next) {
    res.json({
        message: 'successfully',
        check: req.check,
    });
});

//file "index" sẽ mặc định tự được chọc vào
const route = require('./routes');
//Routes init
route(app);

//connect with DB
const db = require('./config/db');
db.connect();

//url chạy vào thẳng vào "public" //Use static folder
app.use(express.static(path.join(__dirname, 'public')));
//ép path cho 'views'
app.set('views', path.join(__dirname, 'resources', 'views'));

//Template engine
app.engine(
    'hbs',
    handlebars.create({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (filed, sort) => {
                const currentType =
                    filed === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };

                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                let icon = icons[currentType];
                let type = types[currentType];

                return `<a href="?_sort&column=${filed}&type=${type}">
                            <span class="${icon}"></span>
                        </a>`;
            },
        },
    }).engine,
);

app.set('view engine', 'hbs');

app.listen(port, () => console.log(`Run app with http://localhost:${port}`));
