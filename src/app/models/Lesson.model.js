const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lesson = new Schema({
    name: { type: String, default: 'hahaha' },
    demo: { type: String, maxlength: 500 },
    date: { type: Date, default: Date.now },
});

//export model
module.exports = mongoose.model('Lesson', Lesson);
