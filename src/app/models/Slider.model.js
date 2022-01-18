const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Slider = new Schema({
    url: { type: String, maxlength: 500 },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Slider', Slider);
