const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

//file "index" sẽ mặc định tự được chọc vào
const route = require('./routes/index');

//url chạy vào thẳng vào "public"
app.use(express.static(path.join(__dirname, 'public')));
//ép path cho 'views'
app.set('views', path.join(__dirname, 'resources/views'));

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
// app.use(morgan ('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.create({
        extname: '.hbs',
    }).engine,
);
app.set('view engine', 'hbs');

//Routes init
route(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);

var object = {
    a: 1,
    b: 2,
    c: 3,
};
var object2 = {
    a: 1,
    b: 2,
    c: 55,
};
