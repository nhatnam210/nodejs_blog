const express = require("express");
const morgan = require('morgan');
const path  = require('path');
const handlebars = require('express-handlebars'); 

const app = express();
const port = 3000;

//url chạy vào thẳng "public"
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan ('combined'));

//Template engine
app.engine('hbs', handlebars.create({
    extname: ".hbs"
}).engine);
app.set ('view engine', 'hbs');

//ép path cho 'views'
app.set('views', path.join(__dirname, 'resources/views'));

//route
app.get("/", (req, res) => {
    res.render('home');
}) 

app.get("/news", (req, res) => {
    res.render('news');
}) 



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
