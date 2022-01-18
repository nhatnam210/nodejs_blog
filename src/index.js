//library
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

//HTTP logger
// app.use(morgan ('combined'));

//source
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
    }).engine,
);
app.set('view engine', 'hbs');

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
